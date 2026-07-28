#!/usr/bin/env python3
"""Generate materi-ajar *_siswa.md and *_guru.md from CPLF modul + materi pendukung."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]  # CPLF repo root
MOD = ROOT / "06-modules"
OUT = MOD / "materi-ajar"
MP = MOD / "materi-pendukung"
BRG_SRC = MP / "jalur-kelanjutan"

# Modul CPLF -> BRG handout base names (without _siswa)
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

SKIP_NAMES = {"README.md", "00_Panduan_Pertemuan.md"}
SKIP_GLOB = re.compile(r"(Index|README|Panduan)", re.I)


def modul_code(path: Path) -> str | None:
    m = re.match(r"^(X-S\d+-P\d+|XI-S\d+-P\d+|XII-S\d+-P\d+)", path.stem)
    return m.group(1) if m else None


def read_text(p: Path) -> str:
    return p.read_text(encoding="utf-8") if p.exists() else ""


def extract_section(md: str, heading: str) -> str:
    pat = rf"^## {re.escape(heading)}\s*\n(.*?)(?=^## |\Z)"
    m = re.search(pat, md, re.MULTILINE | re.DOTALL)
    return m.group(1).strip() if m else ""


def extract_field_table(md: str, field: str) -> str:
    for line in md.splitlines():
        if line.startswith(f"| {field} |"):
            parts = [c.strip() for c in line.split("|")]
            if len(parts) >= 3:
                return parts[2]
    return ""


def materi_pendukung_path(modul_path: Path) -> Path | None:
    rel = modul_path.relative_to(MOD)
    # kelas-x/semester-1/foo.md -> materi-pendukung/kelas-x/semester-1/foo.md
    if rel.parts[0].startswith("kelas-"):
        cand = MP / rel
        if cand.exists():
            return cand
    return None


def strip_guru_secrets(body: str) -> str:
    lines = []
    for line in body.splitlines():
        if "RAHASIA GURU" in line and line.startswith(">"):
            continue
        if "Jangan bagikan file ini ke siswa" in line:
            continue
        lines.append(line)
    return "\n".join(lines)


def ups_to_modules(from_under_out: Path) -> str:
    """Relative prefix from `materi-ajar/...` to `06-modules/` root."""
    n = len(from_under_out.relative_to(OUT).parts) + 1
    return "/".join([".."] * n)

def modul_path_to_rel(code: str) -> str | None:
    for p in sorted(MOD.glob(f"kelas-*/**/{code}_*.md")):
        if SKIP_GLOB.search(p.name):
            continue
        return p.relative_to(MOD).with_suffix("").as_posix()
    return None


def brg_links_block(code: str | None, for_siswa: bool, out_dir: Path) -> str:
    if not code or code not in BRG_FOR_MODUL:
        return ""
    prefix = ups_to_modules(out_dir)
    brg_prefix = f"{prefix}/materi-ajar/jalur-kelanjutan"
    links = []
    for b in BRG_FOR_MODUL[code]:
        suffix = "siswa" if for_siswa else "guru"
        links.append(f"- [{b}]({brg_prefix}/{b}_{suffix}.md)")
    return "\n".join(links) + ("\n" if links else "")


def extract_section_fuzzy(md: str, *needles: str) -> str:
    """Extract ## section whose heading contains any needle."""
    if not md:
        return ""
    for m in re.finditer(r"^## (.+?)\s*\n(.*?)(?=^## |\Z)", md, re.MULTILINE | re.DOTALL):
        title, body = m.group(1), m.group(2).strip()
        if any(n.lower() in title.lower() for n in needles):
            return body
    return ""


def sanitize_for_siswa(text: str) -> str:
    """Remove guru-only phrasing; keep teachable content."""
    if not text:
        return ""
    skip_phrases = (
        "RAHASIA GURU",
        "Jangan bagikan",
        "skrip guru",
        "TTS:",
        "Recall spiral",
        "Icebreaker opsional",
        "Rotasi antar kelas paralel agar siswa tidak spoiler",
        "Guru pahami",
        "Guru ketik",
        "Guru ucapkan",
        "Guru float",
        "jangan bagikan template",
    )
    out: list[str] = []
    for line in text.splitlines():
        if any(p.lower() in line.lower() for p in skip_phrases):
            continue
        line = line.replace("Trap klasik MA:", "Sering terjadi:")
        line = line.replace("Siswa harus sadar", "Kita perlu sadar")
        out.append(line)
    return "\n".join(out).strip()


def extract_pengetahuan(mp_md: str) -> str:
    body = extract_section_fuzzy(mp_md, "Pengetahuan yang Dikuasai", "Pengetahuan Guru")
    return sanitize_for_siswa(body)


def extract_materi_inti(mp_md: str, modul_md: str) -> str:
    body = extract_section_fuzzy(mp_md, "4. Materi Inti", "Materi Inti", "Materi inti")
    if not body:
        body = extract_section(modul_md, "Concept") or extract_section(modul_md, "Materi")
    return sanitize_for_siswa(body)


def extract_trap(modul_md: str) -> str:
    trap = extract_section(modul_md, "Cognitive Trap")
    if trap:
        return trap
    # Fallback: baris Trap di timeline
    for line in modul_md.splitlines():
        if "Trap:" in line or "trap:" in line.lower():
            return line.strip()
    return ""


def extract_exit_ticket(modul_md: str) -> str:
    exit_t = extract_section(modul_md, "Exit Ticket")
    if exit_t:
        return exit_t
    for line in modul_md.splitlines():
        if "Exit" in line and "|" in line and "85" in line:
            continue
    # dari timeline baris Exit
    m = re.search(r"\|\s*85.*?Exit.*?\|\s*(.+?)\s*\|", modul_md)
    if m:
        return f"1. {m.group(1).strip()}\n2. …\n"
    return ""


def extract_worksheet(mp_md: str, modul_md: str, materi_inti: str) -> str:
    w = extract_section_fuzzy(mp_md, "Worksheet", "Lembar kerja", "Template problem", "Template etika")
    if w:
        return sanitize_for_siswa(w)
    w = (
        extract_section(modul_md, "Checklist Kickoff")
        or extract_section(modul_md, "Portofolio Minimum")
        or extract_section(modul_md, "Presentasi Wajib")
        or extract_section(modul_md, "Booth Checklist")
        or extract_section(modul_md, "Refleksi Wajib")
    )
    if w:
        return w
    latihan = extract_section_fuzzy(mp_md, "Latihan Membaca Kode", "Latihan")
    if latihan:
        return sanitize_for_siswa(latihan)
    return ""


def build_siswa(modul_path: Path, modul_md: str, mp_md: str, code: str) -> str:
    transform = extract_section(modul_md, "Learning Transformation") or extract_field_table(
        modul_md, "Learning Transformation"
    )
    timeline = extract_section(modul_md, "Timeline (90 menit)") or extract_section(
        modul_md, "Timeline"
    )
    trap = extract_trap(modul_md)
    gq = extract_section(modul_md, "Guiding Questions")
    exit_t = extract_exit_ticket(modul_md)
    props = extract_section(modul_md, "Props / Fallback")

    ringkasan = extract_pengetahuan(mp_md)
    materi_inti = extract_materi_inti(mp_md, modul_md)
    worksheet = extract_worksheet(mp_md, modul_md, materi_inti)

    rel_mod = modul_path.relative_to(MOD).as_posix()
    out_dir = OUT / modul_path.relative_to(MOD).parent
    up = ups_to_modules(out_dir)
    parts = [
        f"# Handout Siswa — {code}\n\n",
        "**Mapel:** Multimedia (Pemrograman Web) · **CPLF**\n\n",
        f"**Modul acuan:** [{modul_path.name}]({up}/{rel_mod})\n\n",
        "---\n\n",
        "## 1. Tujuan pembelajaran\n\n",
        (transform or "_Lihat modul pertemuan._") + "\n\n",
    ]
    if ringkasan:
        parts += ["## 2. Ringkasan konsep\n\n", ringkasan, "\n\n"]
        sec_materi = 3
    else:
        sec_materi = 2
    parts += [f"## {sec_materi}. Materi praktik\n\n", materi_inti or "_Catat penjelasan guru di sini._", "\n\n"]

    sec = sec_materi + 1
    if trap:
        parts += [f"## {sec}. Yang sering salah dipikir (Cognitive Trap)\n\n", trap, "\n\n"]
        sec += 1
    if gq:
        parts += [f"## {sec}. Pertanyaan pemandu\n\n", gq, "\n\n"]
        sec += 1
    if props:
        parts += [f"## {sec}. Alat & fallback\n\n", props, "\n\n"]
        sec += 1
    if timeline:
        parts += [f"## {sec}. Alur pertemuan (90 menit)\n\n", sanitize_timeline_for_siswa(timeline), "\n\n"]
        sec += 1

    parts += [f"## {sec}. Lembar kerja / latihan\n\n"]
    if worksheet:
        parts += [worksheet, "\n\n"]
    else:
        parts += [
            "| Fase | Apa yang kulakukan | Apa yang kupelajari |\n",
            "|------|-------------------|---------------------|\n",
            "| Experience | | |\n",
            "| Clarify | | |\n",
            "| Practice | | |\n\n",
        ]
    sec += 1

    if exit_t:
        parts += [f"## {sec}. Exit ticket\n\n", exit_t, "\n\n"]
        sec += 1

    parts += [f"## {sec}. Refleksi\n\n"]
    reflect = extract_section(modul_md, "Refleksi Wajib") or extract_section_fuzzy(
        modul_md, "Reflect"
    )
    if reflect:
        parts += [reflect, "\n\n"]
    else:
        parts += [
            "1. Satu asumsi yang kubongkar hari ini: …\n",
            "2. Satu hal untuk pertemuan berikutnya: …\n\n",
        ]
    sec += 1

    brg = brg_links_block(code, True, out_dir)
    if brg:
        parts += [f"## {sec}. Materi pendamping BRG\n\n", brg, "\n"]

    parts += [
        "\n---\n\n",
        "_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._\n",
    ]
    return "".join(parts)


def build_guru(modul_path: Path, modul_md: str, mp_md: str, code: str) -> str:
    mp_clean = strip_guru_secrets(mp_md)
    base = modul_path.stem
    rel_out = modul_path.relative_to(MOD)
    out_dir = OUT / rel_out.parent
    up = ups_to_modules(out_dir)
    siswa_name = f"{base}_siswa.md"
    parts = [
        f"# Materi Guru Lengkap — {code}\n\n",
        f"**Handout siswa (bagikan):** [{siswa_name}](./{siswa_name})\n\n",
        f"**Modul:** [{modul_path.name}]({up}/{rel_out.as_posix()})\n\n",
        "**Materi pendukung sumber:** ",
    ]
    mp_path = materi_pendukung_path(modul_path)
    if mp_path:
        parts.append(f"[{mp_path.name}]({up}/materi-pendukung/{mp_path.relative_to(MP).as_posix()})\n")
    else:
        parts.append("_(tidak ada file materi pendukung terpisah)_\n")
    parts += ["\n---\n", "## A. Modul pertemuan (referensi)\n\n", modul_md, "\n"]
    if mp_clean:
        parts += ["\n---\n", "## B. Materi pendukung (lengkap)\n\n", mp_clean, "\n"]
    parts.append("\n---\n## C. BRG & jalur kelanjutan\n")
    parts.append(brg_links_block(code, False, out_dir) or "_Tidak ada BRG wajib untuk pertemuan ini._\n")
    parts += [
        "\n## D. Etika penyampaian\n",
        "- Live coding / modeling — siswa mengetik sendiri.\n",
        "- Jangan kirim solusi project penuh.\n",
        f"- Lihat [{up}/materi-pendukung/00_Panduan_Etika_Penyampaian.md]({up}/materi-pendukung/00_Panduan_Etika_Penyampaian.md)\n",
    ]
    return "".join(parts)


def generate_modul(modul_path: Path) -> None:
    if SKIP_GLOB.search(modul_path.name):
        return
    code = modul_code(modul_path)
    if not code:
        return
    modul_md = read_text(modul_path)
    mp_path = materi_pendukung_path(modul_path)
    mp_md = read_text(mp_path) if mp_path else ""

    rel = modul_path.relative_to(MOD)
    out_dir = OUT / rel.parent
    out_dir.mkdir(parents=True, exist_ok=True)
    base = modul_path.stem

    siswa = build_siswa(modul_path, modul_md, mp_md, code)
    guru = build_guru(modul_path, modul_md, mp_md, code)

    (out_dir / f"{base}_siswa.md").write_text(siswa, encoding="utf-8")
    (out_dir / f"{base}_guru.md").write_text(guru, encoding="utf-8")


def sanitize_timeline_for_siswa(timeline: str) -> str:
    lines = timeline.splitlines()
    out = []
    for line in lines:
        if line.startswith("|") and "Catatan guru" in line:
            continue
        if line.startswith("|") and line.count("|") >= 5:
            parts = line.split("|")
            if len(parts) >= 6:
                # Menit | Fase | Aktivitas | (drop col 4+)
                line = "|".join(parts[:4]) + "|"
        out.append(line)
    return "\n".join(out)


def brg_strip_meta(body: str) -> str:
    body = brg_body_for_siswa(body)
    body = re.sub(r"^# .+\n+", "", body, count=1)
    body = re.sub(
        r"^## Learning Transformation\s*\n.*?(?=^## |\Z)",
        "",
        body,
        flags=re.MULTILINE | re.DOTALL,
    )
    return body.strip()


def brg_ringkasan(body: str) -> str:
    r = extract_pengetahuan(body)
    if r:
        return r
    r = extract_section_fuzzy(body, "Konsep operasional")
    if r:
        return sanitize_for_siswa(r)
    r = extract_section(body, "Mengapa gap ini kritis")
    if r:
        return sanitize_for_siswa(r)
    return ""


def brg_material_without_ringkasan(body: str, ringkasan: str) -> str:
    material = brg_strip_meta(body)
    if not ringkasan:
        return material
    if extract_section_fuzzy(body, "Konsep operasional") and ringkasan in sanitize_for_siswa(
        extract_section_fuzzy(body, "Konsep operasional") or ""
    ):
        material = re.sub(
            r"^## Konsep operasional[^\n]*\n.*?(?=^## |\Z)",
            "",
            material,
            flags=re.MULTILINE | re.DOTALL,
        )
    elif extract_section(body, "Mengapa gap ini kritis"):
        material = re.sub(
            r"^## Mengapa gap ini kritis\s*\n.*?(?=^## |\Z)",
            "",
            material,
            flags=re.MULTILINE | re.DOTALL,
        )
    return material.strip()


def fix_brg_relative_links(body: str, up: str) -> str:
    return re.sub(r"\]\(\.\./(00_[^)]+)\)", rf"]({up}/materi-pendukung/\1)", body)


def brg_body_for_siswa(body: str) -> str:
    body = strip_guru_secrets(body)
    body = re.sub(r"\*\*Audiens:\*\*[^\n]+\n", "", body)
    body = re.sub(r"\*\*Version:\*\*[^\n]+\n", "", body)
    body = body.replace("RAHASIA GURU", "")
    return body.strip()


def generate_brg(brg_path: Path) -> None:
    if not brg_path.name.startswith("BRG-"):
        return
    stem = brg_path.stem
    body = read_text(brg_path)
    code = stem.split("_")[0]  # BRG-01

    ringkasan = brg_ringkasan(body)
    transform = extract_section(body, "Learning Transformation") or extract_field_table(
        body, "Learning Transformation"
    )
    pr_block = extract_section_fuzzy(body, "PR siswa", "Checklist exit", "Latihan")
    brg_out = OUT / "jalur-kelanjutan"
    up = ups_to_modules(brg_out)
    material = fix_brg_relative_links(brg_material_without_ringkasan(body, ringkasan), up)
    if ringkasan:
        ringkasan = fix_brg_relative_links(ringkasan, up)

    siswa_parts = [
        f"# Handout Siswa — {code}\n\n",
        "**Jalur pendamping CPLF** — melengkapi modul inti (bukan pengganti silabus).\n\n",
        "---\n\n",
        "## 1. Tujuan\n\n",
        (transform or "_Lihat materi di bawah._") + "\n\n",
    ]
    if ringkasan:
        siswa_parts += ["## 2. Ringkasan konsep\n\n", ringkasan, "\n\n"]
        siswa_parts += ["## 3. Materi & langkah\n\n", material, "\n\n"]
    else:
        siswa_parts += ["## 2. Materi & langkah\n\n", material, "\n\n"]
    if pr_block:
        siswa_parts += ["## Latihan / PR\n\n", sanitize_for_siswa(pr_block), "\n\n"]
    siswa_parts += ["---\n\n", "_Kerjakan sesuai arahan guru._\n\n", "## Modul CPLF terhubung\n\n"]
    for mod, brgs in BRG_FOR_MODUL.items():
        if code in brgs:
            rel = modul_path_to_rel(mod)
            if rel:
                siswa_parts.append(f"- `{mod}` — [handout modul](../{rel}_siswa.md)\n")
            else:
                siswa_parts.append(f"- `{mod}`\n")
    guru_parts = [
        f"# Materi Guru Lengkap — {code}\n\n",
        f"**Handout siswa:** [{code}_siswa.md](./{code}_siswa.md)\n\n",
        f"**Sumber BRG:** [{brg_path.name}]({up}/materi-pendukung/jalur-kelanjutan/{brg_path.name})\n\n",
        "---\n",
        "## Panduan mengajar\n\n",
        body,
        "\n\n---\n",
        "## Modul CPLF terhubung\n\n",
    ]
    for mod, brgs in BRG_FOR_MODUL.items():
        if code in brgs:
            guru_parts.append(f"- {mod}\n")
    guru_parts.append(
        "\n## Etika\n\nLive demo — siswa praktik paralel, bukan copas file guru.\n"
    )

    out_dir = OUT / "jalur-kelanjutan"
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / f"{code}_siswa.md").write_text("".join(siswa_parts), encoding="utf-8")
    (out_dir / f"{code}_guru.md").write_text("".join(guru_parts), encoding="utf-8")


def write_index(out_sem_dir: Path, sem_label: str) -> None:
    files = sorted(out_sem_dir.glob("*_siswa.md"))
    if not files:
        return
    lines = [f"# Indeks Materi Ajar — {sem_label}\n\n", "| Kode | Siswa | Guru |\n", "|------|-------|------|\n"]
    for sf in files:
        if sf.name.startswith("00_"):
            continue
        base = sf.name.replace("_siswa.md", "")
        gf = sf.name.replace("_siswa", "_guru")
        lines.append(f"| `{base}` | [siswa](./{sf.name}) | [guru](./{gf}) |\n")
    (out_sem_dir / "00_Index_Materi_Ajar.md").write_text("".join(lines), encoding="utf-8")


def write_master_index() -> None:
    lines = [
        "# Indeks Master Materi Ajar CPLF\n\n",
        "Regenerasi: `python 06-modules/materi-ajar/scripts/generate_from_cplf.py`\n\n",
    ]
    for label, rel in (
        ("Kelas X — Semester 1", "kelas-x/semester-1/00_Index_Materi_Ajar.md"),
        ("Kelas X — Semester 2", "kelas-x/semester-2/00_Index_Materi_Ajar.md"),
        ("Kelas XI — Semester 3", "kelas-xi/semester-3/00_Index_Materi_Ajar.md"),
        ("Kelas XI — Semester 4", "kelas-xi/semester-4/00_Index_Materi_Ajar.md"),
        ("Kelas XII — Semester 5", "kelas-xii/semester-5/00_Index_Materi_Ajar.md"),
        ("Kelas XII — Semester 6", "kelas-xii/semester-6/00_Index_Materi_Ajar.md"),
        ("Jalur BRG", "jalur-kelanjutan/00_Index_Materi_Ajar_BRG.md"),
    ):
        p = OUT / rel
        if p.exists():
            lines.append(f"- **{label}** — [{rel}](./{rel})\n")
    (OUT / "00_Index_Master_Materi_Ajar.md").write_text("".join(lines), encoding="utf-8")


def main() -> None:
    for modul_path in sorted(MOD.glob("kelas-*/**/*.md")):
        if modul_path.parts[-1].startswith("00_"):
            continue
        if "materi-pendukung" in modul_path.parts or "materi-ajar" in modul_path.parts:
            continue
        generate_modul(modul_path)

    for brg_path in sorted(BRG_SRC.glob("BRG-*.md")):
        generate_brg(brg_path)

    for sem in sorted((OUT / "kelas-x").glob("semester-*")) if (OUT / "kelas-x").exists() else []:
        write_index(sem, sem.name)
    for kelas in ("kelas-xi", "kelas-xii"):
        p = OUT / kelas
        if p.exists():
            for sem in sorted(p.glob("semester-*")):
                write_index(sem, f"{kelas}/{sem.name}")

    brg_out = OUT / "jalur-kelanjutan"
    if brg_out.exists():
        idx = ["# Indeks Materi Ajar BRG\n\n"]
        for f in sorted(brg_out.glob("BRG-*_siswa.md")):
            c = f.stem.replace("_siswa", "")
            idx.append(f"- [{c} siswa](./{f.name}) · [guru](./{c}_guru.md)\n")
        (brg_out / "00_Index_Materi_Ajar_BRG.md").write_text("".join(idx), encoding="utf-8")

    write_master_index()

    count = len(list(OUT.rglob("*_siswa.md")))
    print(f"Generated {count} siswa + {count} guru files under {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
