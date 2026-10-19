#!/usr/bin/env python3
"""Generate RPP KBC (Blok A–G) per pertemuan modul CPLF — siap salin ke Dapodik/KMA."""

from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
MOD = ROOT / "06-modules"
OUT = ROOT / "05-silabus" / "rpp-kbc"
KBC_SCRIPT = MOD / "materi-ajar" / "scripts"
sys.path.insert(0, str(KBC_SCRIPT))
from kbc_dalil_map import get_kbc_dalil  # noqa: E402

SKIP_GLOB = re.compile(r"(Index|README|Panduan|Materi_Index)", re.I)

BRG_FOR_MODUL: dict[str, list[str]] = {
    "X-S2-P18": ["BRG-02"],
    "XI-S3-P09": ["BRG-03"],
    "XI-S3-P10": ["BRG-03"],
    "XI-S4-P04": ["BRG-04", "BRG-05"],
    "XI-S4-P11": ["BRG-05"],
    "XI-S4-P13": ["BRG-04"],
    "XII-S5-P01": ["BRG-01"],
    "XII-S5-P07": ["BRG-08"],
    "XII-S5-P08": ["BRG-08"],
    "XII-S5-P11": ["BRG-01", "BRG-08"],
    "XII-S5-P16": ["BRG-08"],
}

KELAS_LABEL = {
    "X-S": ("Kelas X", "kelas-x"),
    "XI-S": ("Kelas XI", "kelas-xi"),
    "XII-S": ("Kelas XII", "kelas-xii"),
}


@dataclass(frozen=True)
class Track:
    """Jalur modul → output RPP (base-4jp aktif · base-2jp arsip)."""

    name: str  # "base-4jp" | "base-2jp"
    mod_root: Path
    out_root: Path


TRACKS: tuple[Track, ...] = (
    Track("base-4jp", MOD / "base-4jp", OUT / "base-4jp"),
    Track("base-2jp", MOD / "base-2jp", OUT / "base-2jp"),
)


def read_text(p: Path) -> str:
    return p.read_text(encoding="utf-8") if p.exists() else ""


def modul_code(path: Path) -> str | None:
    m = re.match(r"^(X-S\d+-P\d+|XI-S\d+-P\d+|XII-S\d+-P\d+)", path.stem)
    return m.group(1) if m else None


def strip_hr(text: str) -> str:
    return re.sub(r"\n---+\n", "\n\n", text).strip()


def extract_section(md: str, heading: str, *, one_line: bool = False) -> str:
    pat = rf"^## {re.escape(heading)}\s*\n(.*?)(?=^## |\Z)"
    m = re.search(pat, md, re.MULTILINE | re.DOTALL)
    if not m:
        return ""
    body = strip_hr(m.group(1))
    if one_line:
        return re.sub(r"\s+", " ", body).strip()
    return body


def extract_field_table(md: str, field: str) -> str:
    for line in md.splitlines():
        if line.startswith(f"| {field} |"):
            parts = [c.strip() for c in line.split("|")]
            if len(parts) >= 3:
                return parts[2]
    return ""


def parse_modul_meta(md: str, code: str) -> dict[str, str]:
    title_m = re.search(r"^# .+? — (.+)\s*$", md, re.MULTILINE)
    title = title_m.group(1).strip() if title_m else code
    return {
        "code": code,
        "title": title,
        "semester": extract_field_table(md, "Semester") or "",
        "unit": extract_field_table(md, "Unit") or "",
        "durasi": extract_field_table(md, "Durasi") or "2 JP = 90 menit",
        "capability": extract_field_table(md, "Capability") or "",
        "cp": extract_field_table(md, "CP Merdeka") or extract_field_table(md, "CP") or "",
        "mm": extract_field_table(md, "MM") or "",
        "exp": extract_field_table(md, "EXP") or "—",
        "transform": extract_section(md, "Learning Transformation", one_line=True)
        or extract_field_table(md, "Learning Transformation"),
    }


def kelas_semester(code: str) -> tuple[str, str, str]:
    for prefix, (label, folder) in KELAS_LABEL.items():
        if code.startswith(prefix):
            m = re.search(r"-S(\d+)-", code)
            sem = m.group(1) if m else "?"
            return label, sem, folder
    return "MA", "?", "kelas-x"


def rel_to_repo(from_dir: Path) -> str:
    n = len(from_dir.relative_to(OUT).parts) + 3
    return "/".join([".."] * n)


def extract_timeline(md: str) -> str:
    for heading in (
        "Timeline (180 menit · 4 JP)",
        "Timeline (180 menit)",
        "Timeline (90 menit)",
        "Timeline",
    ):
        body = extract_section(md, heading)
        if body:
            return body
    return ""


def format_pertemuan(meta_semester: str, code: str) -> str:
    m = re.search(r"Pertemuan\s*(\d+)\s*/\s*(\d+)", meta_semester)
    if m:
        return f"Pertemuan {m.group(1)}/{m.group(2)}"
    m = re.search(r"Pertemuan\s*(\d+)", meta_semester) or re.search(r"-P(\d+)", code)
    if m:
        return f"Pertemuan {m.group(1)}/18"
    return meta_semester or "_(isi)_"


def materi_paths(track: Track, modul_path: Path) -> tuple[str, str, str, Path]:
    """Return modul_rel, handout base (no suffix), pendukung rel, pendukung Path."""
    rel = modul_path.relative_to(track.mod_root)
    stem_rel = rel.parent / modul_path.stem
    if track.name:
        modul_rel = f"{track.name}/{rel.as_posix()}"
        ma_base = f"materi-ajar/{track.name}/{stem_rel.as_posix()}"
        mp_rel = f"materi-pendukung/{track.name}/{stem_rel.as_posix()}.md"
    else:
        modul_rel = rel.as_posix()
        ma_base = f"materi-ajar/{stem_rel.as_posix()}"
        mp_rel = f"materi-pendukung/{stem_rel.as_posix()}.md"
    mp_path = MOD / "materi-pendukung" / mp_rel.removeprefix("materi-pendukung/")
    return modul_rel, ma_base, mp_rel, mp_path


def timeline_kemenag_rows(timeline: str) -> tuple[list[str], list[str], list[str]]:
    """Map fase CPLF → pendahuluan / inti / penutup (format KMA umum)."""
    pre, core, close = [], [], []
    pre_keys = ("opening", "hook", "do now", "orientation")
    close_keys = ("reflect", "transfer", "exit", "closing")
    for line in timeline.splitlines():
        if not line.startswith("|") or line.count("|") < 4:
            continue
        if re.match(r"^\|\s*Menit", line, re.I):
            continue
        if re.match(r"^\|\s*[-—]", line):
            continue
        parts = [p.strip() for p in line.split("|")]
        if len(parts) < 5:
            continue
        menit, fase, aktivitas = parts[1], parts[2].lower(), parts[3]
        row = f"| {menit} | {parts[2]} | {aktivitas} |"
        if any(k in fase for k in pre_keys):
            pre.append(row)
        elif any(k in fase for k in close_keys):
            close.append(row)
        else:
            core.append(row)
    return pre, core, close


def build_rpp(modul_path: Path, track: Track) -> str:
    code = modul_code(modul_path)
    if not code:
        return ""
    md = read_text(modul_path)
    meta = parse_modul_meta(md, code)
    kelas, sem_num, _folder = kelas_semester(code)
    kbc = get_kbc_dalil(code, modul_path.stem)

    timeline = extract_timeline(md)
    trap = extract_section(md, "Cognitive Trap")
    gq = extract_section(md, "Guiding Questions")
    exit_t = extract_section(md, "Exit Ticket")
    props = extract_section(md, "Props / Fallback")

    rel = modul_path.relative_to(track.mod_root)
    out_dir = track.out_root / rel.parent
    up = rel_to_repo(out_dir)
    modul_rel, ma_base, mp_rel, mp_path = materi_paths(track, modul_path)
    handout_siswa = f"{up}/06-modules/{ma_base}_siswa.md"
    handout_guru = f"{up}/06-modules/{ma_base}_guru.md"

    brg_lines = []
    for b in BRG_FOR_MODUL.get(code, []):
        brg_lines.append(
            f"- **{b}** — [materi BRG]({up}/06-modules/materi-ajar/jalur-kelanjutan/{b}_guru.md)"
        )
    brg_block = "\n".join(brg_lines) if brg_lines else "_Tidak ada BRG wajib pertemuan ini._"

    pre, core, close = timeline_kemenag_rows(timeline)
    tbl_pre = "\n".join(pre) if pre else "| — | Opening | Lihat timeline Blok E |"
    tbl_core = "\n".join(core) if core else "| — | Inti CPLF | Experience → Practice |"
    tbl_close = "\n".join(close) if close else "| — | Reflect / Exit | Lihat timeline Blok E |"

    pertemuan = format_pertemuan(meta["semester"], code)

    parts = [
        f"# RPP — Kurikulum Berbasis Cinta × CPLF\n\n",
        f"## {code} — {meta['title']}\n\n",
        "**Acuan kebijakan:** Panduan Kurikulum Berbasis Cinta Kemenag (6077/2025) · ",
        f"[Template Blok A–G]({up}/05-silabus/05_RPP_KBC_Template_CPLF.md)\n\n",
        "> **Cara pakai:** Salin isi Blok A–G ke formulir RPP Dapodik/KMA madrasah. ",
        "Isi **Madrasah**, **Nama guru**, **Tanggal**, **Kelas** (rombel) di Blok A.\n\n",
        "---\n\n",
        "## Blok A — Identitas\n\n",
        "| Field | Isi |\n|-------|-----|\n",
        f"| Satuan pendidikan (Madrasah) | _(isi)_ |\n",
        f"| Nama guru | _(isi)_ |\n",
        f"| Mata pelajaran | Multimedia (Pemrograman Web) |\n",
        f"| Kelas / Semester | {kelas} / Semester {sem_num} |\n",
        f"| Pertemuan ke- | {pertemuan} |\n",
        f"| Kode modul CPLF | `{code}` |\n",
        f"| Materi pokok | {meta['title']} |\n",
        f"| Alokasi waktu | {meta['durasi']} |\n",
        f"| Unit silabus | {meta['unit']} |\n",
        f"| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |\n",
        f"| Modul acuan | [{modul_path.name}]({up}/06-modules/{modul_rel}) |\n\n",
        "## Blok B — Capaian (Kurikulum Merdeka + CPLF)\n\n",
        "| Field | Isi |\n|-------|-----|\n",
        f"| Elemen CP (anchor) | {meta['cp']} |\n",
        f"| Capability CPLF | {meta['capability']} |\n",
        f"| Mental model | {meta['mm']} |\n",
        f"| Experience / PRJ | {meta['exp']} |\n",
        f"| **Learning transformation** | {meta['transform'] or '_(lihat modul)_'} |\n",
        f"| Aspek formatif hari ini | {extract_section(md, 'Formatif (rubrik)', one_line=True) or 'OBS, REA, COM, ITR, TRF, TEC — sesuai modul'} |\n\n",
        "## Blok C — Kurikulum Berbasis Cinta\n\n",
        "| Field | Isi |\n|-------|-----|\n",
        f"| **Panca Cinta utama** | {kbc['panca']} |\n",
        "| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |\n",
        f"| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |\n",
        "| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |\n",
        f"| **Kait operasional** | {kbc['kait']} |\n\n",
        "## Blok D — Dalil & refleksi (koordinasi guru agama)\n\n",
        "| Field | Isi |\n|-------|-----|\n",
        f"| **Dalil Al-Qur’an / Hadits (usulan)** | {kbc['dalil']} |\n",
        "| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |\n",
        "| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |\n",
        "| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |\n\n",
        f"**Verifikasi:** [Mapping KBC §6]({up}/05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)\n\n",
        "## Blok E — Langkah kegiatan (sinkron modul CPLF)\n\n",
    ]
    if timeline:
        parts += [timeline.strip(), "\n\n"]
    else:
        parts += ["_(Salin timeline dari modul acuan.)_\n\n"]

    if trap:
        parts += ["**Cognitive Trap (catatan KBC — ramah anak):**\n\n", trap, "\n\n"]
    if gq:
        parts += ["**Guiding questions:**\n\n", gq, "\n\n"]

    parts += [
        "### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)\n\n",
        "_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._\n\n",
        "**Kegiatan pendahuluan**\n\n",
        "| Menit | Fase | Aktivitas siswa |\n|-------|------|------------------|\n",
        tbl_pre,
        "\n\n**Kegiatan inti**\n\n",
        "| Menit | Fase | Aktivitas siswa |\n|-------|------|------------------|\n",
        tbl_core,
        "\n\n**Kegiatan penutup**\n\n",
        "| Menit | Fase | Aktivitas siswa |\n|-------|------|------------------|\n",
        tbl_close,
        "\n\n",
        "## Blok F — Penilaian / asesmen\n\n",
        "| Jenis | Instrumen | Rubrik / catatan |\n|-------|-----------|------------------|\n",
        f"| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit]({up}/09-rubrik/09_Rubrik_Formatif_Unit.md) |\n",
        "| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |\n",
    ]
    if "etika" in modul_path.stem.lower() or code == "XII-S6-P06":
        parts.append(
            "| Etika AI (XII) | Template E1–E4 | "
            f"[Rubrik Etika AI]({up}/09-rubrik/09_Rubrik_Etika_AI.md) |\n"
        )
    parts += ["\n**Exit ticket (modul):**\n\n", exit_t or "_(lihat modul)_", "\n\n"]

    parts += [
        "## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)\n\n",
        "| Field | Isi |\n|-------|-----|\n",
        f"| **BRG pertemuan ini** | {brg_block} |\n",
        f"| **Gate semester** | [Kaji ulang S1–S6]({up}/05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |\n",
        f"| **Panduan jalur** | [BRG Index]({up}/06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |\n\n",
        "## Media & sumber belajar\n\n",
        (props or "- Modul CPLF · handout siswa · materi guru lengkap") + "\n\n",
    ]

    lampiran = [
        "## Lampiran CPLF (distribusi kelas)\n\n",
        f"- [Handout siswa]({handout_siswa})\n",
        f"- [Materi guru lengkap]({handout_guru})\n",
    ]
    if mp_path.exists():
        lampiran.append(f"- [Materi pendukung guru]({up}/06-modules/{mp_rel})\n\n")
    else:
        lampiran.append("\n")
    parts += lampiran

    parts.append(
        "---\n\n_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._\n"
    )
    return "".join(parts)


def iter_modul_files(track: Track) -> list[Path]:
    files: list[Path] = []
    for modul_path in sorted(track.mod_root.glob("kelas-*/**/*.md")):
        if modul_path.parts[-1].startswith("00_"):
            continue
        if "materi-pendukung" in modul_path.parts or "materi-ajar" in modul_path.parts:
            continue
        if SKIP_GLOB.search(modul_path.name):
            continue
        if not modul_code(modul_path):
            continue
        files.append(modul_path)
    return files


def write_index(sem_dir: Path, label: str) -> None:
    files = sorted(sem_dir.glob("*_RPP_KBC.md"))
    if not files:
        return
    lines = [
        f"# Indeks RPP KBC — {label}\n\n",
        "| Pertemuan | RPP |\n|-----------|-----|\n",
    ]
    for f in files:
        code = f.stem.replace("_RPP_KBC", "")
        if code.startswith("00_"):
            continue
        lines.append(f"| `{code}` | [RPP](./{f.name}) |\n")
    (sem_dir / "00_Index_RPP_KBC.md").write_text("".join(lines), encoding="utf-8")


def write_indexes_for_root(out_root: Path, label_prefix: str) -> None:
    for kelas in ("kelas-x", "kelas-xi", "kelas-xii"):
        base = out_root / kelas
        if not base.exists():
            continue
        for sem in sorted(base.glob("semester-*")):
            write_index(sem, f"{label_prefix}{kelas}/{sem.name}" if label_prefix else f"{kelas}/{sem.name}")


def write_master_index(count: int) -> None:
    master = [
        "# Indeks Master RPP KBC (per pertemuan)\n\n",
        "Regenerasi: `python3 05-silabus/rpp-kbc/scripts/generate_rpp_kbc.py`\n\n",
        f"**Total:** {count} RPP · Template: [05_RPP_KBC_Template_CPLF.md](../05_RPP_KBC_Template_CPLF.md)\n\n",
        "### base-4jp (aktif · 4 JP)\n\n",
    ]
    for kelas in ("kelas-x", "kelas-xi", "kelas-xii"):
        for sem in range(1, 7):
            idx = OUT / "base-4jp" / kelas / f"semester-{sem}" / "00_Index_RPP_KBC.md"
            if idx.exists():
                master.append(
                    f"- [base-4jp {kelas} semester {sem}](./base-4jp/{kelas}/semester-{sem}/00_Index_RPP_KBC.md)\n"
                )
    master.append("\n### base-2jp (arsip · 2 JP)\n\n")
    for kelas in ("kelas-x", "kelas-xi", "kelas-xii"):
        for sem in range(1, 7):
            idx = OUT / "base-2jp" / kelas / f"semester-{sem}" / "00_Index_RPP_KBC.md"
            if idx.exists():
                master.append(
                    f"- [base-2jp {kelas} semester {sem}](./base-2jp/{kelas}/semester-{sem}/00_Index_RPP_KBC.md)\n"
                )
    (OUT / "00_Index_Master_RPP_KBC.md").write_text("".join(master), encoding="utf-8")


def main() -> None:
    count = 0
    for track in TRACKS:
        for modul_path in iter_modul_files(track):
            rel = modul_path.relative_to(track.mod_root)
            out_dir = track.out_root / rel.parent
            out_dir.mkdir(parents=True, exist_ok=True)
            body = build_rpp(modul_path, track)
            if not body:
                continue
            out_name = f"{modul_path.stem}_RPP_KBC.md"
            (out_dir / out_name).write_text(body, encoding="utf-8")
            count += 1

    write_indexes_for_root(OUT / "base-4jp", "base-4jp · ")
    write_indexes_for_root(OUT / "base-2jp", "base-2jp · ")
    write_master_index(count)
    print(f"Generated {count} RPP files under {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
