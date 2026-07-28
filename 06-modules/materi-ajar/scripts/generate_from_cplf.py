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


def brg_links_block(code: str | None, for_siswa: bool, rel_depth: int = 2) -> str:
    if not code or code not in BRG_FOR_MODUL:
        return ""
    prefix = "/".join([".."] * rel_depth)
    links = []
    for b in BRG_FOR_MODUL[code]:
        suffix = "siswa" if for_siswa else "guru"
        links.append(f"- [{b}]({prefix}/jalur-kelanjutan/{b}_{suffix}.md)")
    title = "Materi pendamping BRG (wajib/opsional)"
    return f"\n## {title}\n\n" + "\n".join(links) + "\n"


def build_siswa(modul_path: Path, modul_md: str, mp_md: str, code: str) -> str:
    title = modul_path.stem.replace("-", " ")
    transform = extract_section(modul_md, "Learning Transformation") or extract_field_table(
        modul_md, "Learning Transformation"
    )
    timeline = extract_section(modul_md, "Timeline (90 menit)") or extract_section(
        modul_md, "Timeline"
    )
    trap = extract_section(modul_md, "Cognitive Trap")
    gq = extract_section(modul_md, "Guiding Questions")
    exit_t = extract_section(modul_md, "Exit Ticket")
    reflect = ""
    for h in ("Reflect", "Refleksi"):
        r = extract_section(modul_md, h)
        if r:
            reflect = r
            break

    materi_inti = extract_section(mp_md, "4. Materi Inti") or extract_section(mp_md, "## Materi inti guru")
    if not materi_inti:
        materi_inti = extract_section(modul_md, "Concept") or extract_section(modul_md, "Materi")

    # Siswa: no live coding answers from section 5
    latihan = extract_section(mp_md, "6. Latihan Membaca Kode") or extract_section(
        modul_md, "Practice"
    )
    worksheet = extract_section(modul_md, "Checklist Kickoff") or extract_section(
        modul_md, "Portofolio Minimum"
    ) or extract_section(modul_md, "Presentasi Wajib")

    parts = [
        f"# Handout Siswa — {code}\n",
        f"**Mapel:** Multimedia (Pemrograman Web) · **CPLF**\n",
        f"**Modul acuan:** [{modul_path.name}](../../{modul_path.relative_to(MOD).as_posix()})\n",
        "---\n",
        "## 1. Tujuan pembelajaran\n",
        transform or "_Lihat transformasi di modul pertemuan._\n",
        "\n## 2. Materi\n",
        materi_inti or "_Ikuti penjelasan guru dan catatan di papan._\n",
    ]
    if trap:
        parts += ["\n## 3. Yang sering salah dipikir (Cognitive Trap)\n", trap, "\n"]
    if gq:
        parts += ["\n## 4. Pertanyaan pemandu\n", gq, "\n"]
    if timeline:
        parts += ["\n## 5. Alur pertemuan (90 menit)\n", sanitize_timeline_for_siswa(timeline), "\n"]
    parts += ["\n## 6. Lembar kerja / latihan\n"]
    if worksheet:
        parts += [worksheet, "\n"]
    elif latihan:
        parts += [latihan, "\n"]
    else:
        parts += [
            "Catatan selama Experience · Clarify · Practice:\n\n",
            "| Fase | Apa yang kulakukan | Apa yang kupelajari |\n",
            "|------|-------------------|---------------------|\n",
            "| Experience | | |\n",
            "| Clarify | | |\n",
            "| Practice | | |\n",
        ]
    if exit_t:
        parts += ["\n## 7. Exit ticket\n", exit_t, "\n"]
    parts += ["\n## 8. Refleksi\n"]
    if reflect:
        parts += [reflect, "\n"]
    else:
        parts += ["1. Satu asumsi yang kubongkar hari ini: …\n2. Satu hal untuk pertemuan berikutnya: …\n"]
    parts.append(brg_links_block(code, True))
    parts += [
        "\n---\n",
        "_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._\n",
    ]
    return "".join(parts)


def build_guru(modul_path: Path, modul_md: str, mp_md: str, code: str) -> str:
    mp_clean = strip_guru_secrets(mp_md)
    title = modul_path.stem
    parts = [
        f"# Materi Guru Lengkap — {code}\n",
        f"**Modul:** [{modul_path.name}](../../{modul_path.relative_to(MOD).as_posix()})\n",
        f"**Materi pendukung sumber:** ",
    ]
    mp_path = materi_pendukung_path(modul_path)
    if mp_path:
        parts.append(f"[{mp_path.name}](../../materi-pendukung/{mp_path.relative_to(MOD).as_posix()})\n")
    else:
        parts.append("_(tidak ada file materi pendukung terpisah)_\n")
    parts += ["\n---\n", "## A. Modul pertemuan (referensi)\n\n", modul_md, "\n"]
    if mp_clean:
        parts += ["\n---\n", "## B. Materi pendukung (lengkap)\n\n", mp_clean, "\n"]
    parts.append("\n---\n## C. BRG & jalur kelanjutan\n")
    parts.append(brg_links_block(code, False) or "_Tidak ada BRG wajib untuk pertemuan ini._\n")
    parts += [
        "\n## D. Etika penyampaian\n",
        "- Live coding / modeling — siswa mengetik sendiri.\n",
        "- Jangan kirim solusi project penuh.\n",
        "- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)\n",
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
    body_siswa = brg_body_for_siswa(body)

    siswa_parts = [
        f"# Handout Siswa — {code}\n",
        "**Jalur pendamping CPLF** (melengkapi modul inti, bukan pengganti silabus)\n\n",
        "**Modul CPLF terkait:** lihat bagian bawah — kerjakan setelah guru memberi arahan.\n\n",
        "---\n",
        "## Materi\n\n",
        body_siswa,
        "\n\n---\n",
        "_Kerjakan bagian PR di kelas atau rumah sesuai petunjuk guru._\n",
    ]
    for mod, brgs in BRG_FOR_MODUL.items():
        if code in brgs:
            siswa_parts.append(f"\n**Digunakan bersama modul CPLF:** `{mod}`\n")
    guru_parts = [
        f"# Materi Guru Lengkap — {code}\n",
        f"**Sumber BRG:** [{brg_path.name}](../../materi-pendukung/jalur-kelanjutan/{brg_path.name})\n\n",
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

    count = len(list(OUT.rglob("*_siswa.md")))
    print(f"Generated {count} siswa + {count} guru files under {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
