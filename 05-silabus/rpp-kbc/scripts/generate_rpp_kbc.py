#!/usr/bin/env python3
"""Generate RPP KBC (Blok A–G) per pertemuan modul CPLF — siap salin ke Dapodik/KMA."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
MOD = ROOT / "06-modules"
OUT = ROOT / "05-silabus" / "rpp-kbc"
MA = MOD / "materi-ajar"
KBC_SCRIPT = MOD / "materi-ajar" / "scripts"
sys.path.insert(0, str(KBC_SCRIPT))
from kbc_dalil_map import get_kbc_brg, get_kbc_dalil  # noqa: E402

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
        "cp": extract_field_table(md, "CP") or "",
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


def timeline_kemenag_rows(timeline: str) -> tuple[list[str], list[str], list[str]]:
    """Map fase CPLF → pendahuluan / inti / penutup (format KMA umum)."""
    pre, core, close = [], [], []
    pre_keys = ("opening", "hook", "do now")
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


def build_rpp(modul_path: Path) -> str:
    code = modul_code(modul_path)
    if not code:
        return ""
    md = read_text(modul_path)
    meta = parse_modul_meta(md, code)
    kelas, sem_num, _folder = kelas_semester(code)
    kbc = get_kbc_dalil(code, modul_path.stem)

    timeline = extract_section(md, "Timeline (90 menit)") or extract_section(md, "Timeline")
    trap = extract_section(md, "Cognitive Trap")
    gq = extract_section(md, "Guiding Questions")
    exit_t = extract_section(md, "Exit Ticket")
    formatif = extract_section(md, "Formatif (rubrik)") or extract_field_table(md, "Formatif")
    props = extract_section(md, "Props / Fallback")

    out_dir = OUT / modul_path.relative_to(MOD).parent
    up = rel_to_repo(out_dir)
    rel_mod = modul_path.relative_to(MOD).as_posix()
    stem = modul_path.stem
    handout_siswa = f"{up}/06-modules/materi-ajar/{rel_mod}_siswa.md"
    handout_guru = f"{up}/06-modules/materi-ajar/{rel_mod}_guru.md"

    brg_lines = []
    for b in BRG_FOR_MODUL.get(code, []):
        brg_lines.append(
            f"- **{b}** — [RPP pendukung tidak terpisah; materi](../06-modules/materi-ajar/jalur-kelanjutan/{b}_guru.md)"
        )
    brg_block = "\n".join(brg_lines) if brg_lines else "_Tidak ada BRG wajib pertemuan ini._"

    pre, core, close = timeline_kemenag_rows(timeline)
    tbl_pre = "\n".join(pre) if pre else "| — | Opening | Lihat timeline Blok E |"
    tbl_core = "\n".join(core) if core else "| — | Inti CPLF | Experience → Practice |"
    tbl_close = "\n".join(close) if close else "| — | Reflect / Exit | Lihat timeline Blok E |"

    pertemuan = meta["semester"]
    pm = re.search(r"Pertemuan\s*(\d+)", pertemuan) or re.search(r"-P(\d+)", code)
    if pm:
        pertemuan = f"Pertemuan {pm.group(1)}/18"

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
        f"| Modul acuan | [{modul_path.name}]({up}/06-modules/{rel_mod}) |\n\n",
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

    mp_rel = rel_mod
    mp_path = MOD / "materi-pendukung" / mp_rel
    lampiran = [
        "## Lampiran CPLF (distribusi kelas)\n\n",
        f"- [Handout siswa]({handout_siswa})\n",
        f"- [Materi guru lengkap]({handout_guru})\n",
    ]
    if mp_path.exists():
        lampiran.append(f"- [Materi pendukung guru]({up}/06-modules/materi-pendukung/{mp_rel})\n\n")
    else:
        lampiran.append("\n")
    parts += lampiran

    parts.append(
        "---\n\n_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._\n"
    )
    return "".join(parts)


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


def main() -> None:
    count = 0
    for modul_path in sorted(MOD.glob("kelas-*/**/*.md")):
        if modul_path.parts[-1].startswith("00_"):
            continue
        if "materi-pendukung" in modul_path.parts or "materi-ajar" in modul_path.parts:
            continue
        if SKIP_GLOB.search(modul_path.name):
            continue
        if not modul_code(modul_path):
            continue
        rel = modul_path.relative_to(MOD)
        out_dir = OUT / rel.parent
        out_dir.mkdir(parents=True, exist_ok=True)
        body = build_rpp(modul_path)
        if not body:
            continue
        out_name = f"{modul_path.stem}_RPP_KBC.md"
        (out_dir / out_name).write_text(body, encoding="utf-8")
        count += 1

    for kelas in ("kelas-x", "kelas-xi", "kelas-xii"):
        base = OUT / kelas
        if not base.exists():
            continue
        for sem in sorted(base.glob("semester-*")):
            write_index(sem, f"{kelas}/{sem.name}")

    master = [
        "# Indeks Master RPP KBC (per pertemuan)\n\n",
        "Regenerasi: `python 05-silabus/rpp-kbc/scripts/generate_rpp_kbc.py`\n\n",
        f"**Total:** {count} RPP · Template: [05_RPP_KBC_Template_CPLF.md](../05_RPP_KBC_Template_CPLF.md)\n\n",
    ]
    for kelas in ("kelas-x", "kelas-xi", "kelas-xii"):
        for sem in range(1, 7):
            idx = OUT / kelas / f"semester-{sem}" / "00_Index_RPP_KBC.md"
            if idx.exists():
                master.append(f"- [{kelas} semester {sem}](./{kelas}/semester-{sem}/00_Index_RPP_KBC.md)\n")
    (OUT / "00_Index_Master_RPP_KBC.md").write_text("".join(master), encoding="utf-8")
    print(f"Generated {count} RPP files under {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
