"""Titik kait KBC / dalil tematik per kode modul CPLF — selaras 05_Mapping_Kurikulum_Berbasis_Cinta.md §6."""

from __future__ import annotations

import re
from typing import TypedDict


class KbcEntry(TypedDict):
    panca: str
    dalil: str
    kait: str


KBC_BY_CODE: dict[str, KbcEntry] = {
    "X-S1-P01": {
        "panca": "Allah · Bangsa (tabayyun)",
        "dalil": "QS Al-Isra 17:36 · QS Al-Hujurat 49:6",
        "kait": "Framing masalah dulu = tidak menyimpulkan sebelum bukti.",
    },
    "X-S1-P02": {
        "panca": "Bangsa · antidisinformasi",
        "dalil": "QS Al-Isra 17:36 · QS Al-Hujurat 49:6",
        "kait": "Keyword mengubah ‘kenyataan’ di layar — wajib verifikasi sumber.",
    },
    "X-S1-P03": {
        "panca": "Allah · Sesama · Bangsa",
        "dalil": "QS Al-Isra 17:36 · QS Az-Zumar 39:18",
        "kait": "AI partner, bukan pengganti berpikir — dengar lalu pilih yang paling baik.",
    },
    "X-S1-P04": {
        "panca": "Allah · ilmu terstruktur",
        "dalil": "QS Al-Alaq 96:1–5 · HR Ibn Majah (ilmu)",
        "kait": "Instruksi eksplisit & urutan = tadabbur algoritma.",
    },
    "X-S1-P13": {
        "panca": "Diri · sabar",
        "dalil": "QS Al-Asr 103:1–3 · QS Ali Imran 3:159",
        "kait": "Error bukan aib — iterasi dengan lapang dada.",
    },
    "X-S1-P15": {
        "panca": "Sesama · Diri (amanah)",
        "dalil": "QS An-Nisa 4:58 · QS Al-Mutaffifin 83:1–3",
        "kait": "Shortcut/copas = khianat proses belajar & tim.",
    },
    "X-S1-P18": {
        "panca": "Diri · syukur",
        "dalil": "QS Ali Imran 3:190–191",
        "kait": "Refleksi capability, bukan pamer ego.",
    },
    "X-S2-P02": {
        "panca": "Sesama · ihsan",
        "dalil": "QS An-Nahl 16:90 · HR Muslim (ihsan)",
        "kait": "HTML semantik = ihsan kepada pengguna (mis. screen reader).",
    },
    "X-S2-P15": {
        "panca": "Sesama",
        "dalil": "QS Al-Hujurat 49:10 · HR Bukhari/Muslim (kasih saudara)",
        "kait": "Kritik kode/asumsi, bukan personal.",
    },
    "X-S2-P18": {
        "panca": "Diri · syukur",
        "dalil": "QS Ali Imran 3:190–191",
        "kait": "Portofolio = merenung perjalanan belajar.",
    },
    "XI-S4-P08": {
        "panca": "Sesama · amanah",
        "dalil": "QS An-Nisa 4:58",
        "kait": "Data kelompok disimpan = amanah — backup & consent.",
    },
    "XI-S4-P10": {
        "panca": "Sesama · privasi",
        "dalil": "QS An-Nur 24:27 · QS Al-Hujurat 49:12",
        "kait": "Minimasi PII — minta izin sebelum pakai data sensitif.",
    },
    "XI-S4-P11": {
        "panca": "Sesama · amanah",
        "dalil": "QS An-Nisa 4:58 · HR Ahmad (khianat amanat)",
        "kait": "Git = jejak tanggung jawab & atribusi jujur.",
    },
    "XI-S4-P16": {
        "panca": "Sesama · Bangsa (integritas)",
        "dalil": "QS Al-Maidah 5:2 · QS Al-Hujurat 49:12",
        "kait": "Review & merge tanpa gosip; gotong royong kebaikan.",
    },
    "XII-S5-P02": {
        "panca": "Sesama · adil",
        "dalil": "QS An-Nisa 4:135 · QS Al-Maidah 5:8",
        "kait": "Dataset sempit = tidak adil pada kelompok lain.",
    },
    "XII-S6-P01": {
        "panca": "Sesama",
        "dalil": "QS An-Nur 24:58 · QS Al-Hujurat 49:12",
        "kait": "Consent sebelum `getUserMedia` — hormati privasi.",
    },
    "XII-S6-P04": {
        "panca": "Sesama",
        "dalil": "QS An-Nur 24:27 · QS Al-Maidah 5:2",
        "kait": "Objek aman ke privasi — tidak foto wajah tanpa izin.",
    },
    "XII-S6-P06": {
        "panca": "Sesama · Allah",
        "dalil": "QS An-Nur 24:27–29 · QS An-Nisa 4:58",
        "kait": "Etika QR/wajah, bias, consent — gate capstone.",
    },
    "XII-S6-P07": {
        "panca": "Allah · Bangsa",
        "dalil": "QS Al-Isra 17:36 · QS Az-Zumar 39:18",
        "kait": "Checklist verifikasi 3 langkah sebelum percaya AI.",
    },
    "XII-S6-P14": {
        "panca": "Allah · Sesama",
        "dalil": "QS Al-Ahzab 33:70",
        "kait": "Presentasi jujur — tidak overclaim model/AI.",
    },
    "XII-S6-P17": {
        "panca": "Bangsa · Sesama",
        "dalil": "HR Tabarani (cinta tanah air — verifikasi kitab madrasah)",
        "kait": "Showcase = accountability ke komunitas MA.",
    },
    "XII-S6-P18": {
        "panca": "Allah · Diri",
        "dalil": "QS Ta-Ha 20:114 · QS Al-Mujadilah 58:11 · QS Ali Imran 3:190–191",
        "kait": "Pembelajar seumur hidup; teknologi = alat amanah.",
    },
    "X-S1-P05": {
        "panca": "Allah · ilmu terstruktur",
        "dalil": "QS Al-Alaq 96:1–5",
        "kait": "Flowchart = urutan berpikir sebelum kode.",
    },
    "X-S1-P06": {
        "panca": "Sesama · amanah",
        "dalil": "QS An-Nisa 4:58",
        "kait": "Requirement jelas = janji yang bisa dipegang tim & pengguna.",
    },
    "X-S1-P07": {
        "panca": "Sesama · adil",
        "dalil": "QS An-Nisa 4:135",
        "kait": "Acceptance criteria = ukuran adil “selesai” untuk semua pihak.",
    },
    "X-S1-P08": {
        "panca": "Sesama · adil",
        "dalil": "QS An-Nisa 4:135 · QS Al-Mutaffifin 83:1–3",
        "kait": "Aturan if/else = perlakuan adil (semua kondisi terlayani).",
    },
    "X-S1-P09": {
        "panca": "Allah · Bangsa (bernalar)",
        "dalil": "QS Al-Isra 17:36",
        "kait": "Kondisi & guard = tidak menyimpulkan tanpa memeriksa bukti.",
    },
    "X-S1-P10": {
        "panca": "Allah · ilmu",
        "dalil": "QS Ta-Ha 20:114 · QS Al-Mujadilah 58:11",
        "kait": "Data & variabel = fondasi ilmu yang terukur.",
    },
    "X-S1-P11": {
        "panca": "Sesama · amanah",
        "dalil": "QS An-Nisa 4:58",
        "kait": "Loop kasir = hitung dan catat dengan jujur (tidak curang takaran).",
    },
    "X-S1-P12": {
        "panca": "Allah · ilmu terstruktur",
        "dalil": "QS Al-Alaq 96:1–5",
        "kait": "Function = tanggung jawab terpisah — ilmu terorganisir.",
    },
    "XI-S3-P09": {
        "panca": "Sesama · Allah",
        "dalil": "QS Al-Isra 17:36",
        "kait": "Refactor = teliti sebelum mengubah yang dipakai sesama.",
    },
    "XI-S4-P04": {
        "panca": "Bangsa · tabayyun",
        "dalil": "QS Al-Hujurat 49:6 · QS Al-Isra 17:36",
        "kait": "Fetch JSON — verifikasi sumber & kontrak data sebelum percaya.",
    },
    "XII-S5-P08": {
        "panca": "Sesama · Allah (jujur model)",
        "dalil": "QS Al-Maidah 5:8 · QS Al-Ahzab 33:70",
        "kait": "Train/fit jujur — metrik dari data val, bukan tipuan diri.",
    },
    "XII-S5-P16": {
        "panca": "Sesama",
        "dalil": "QS Al-Hujurat 49:10 · QS Al-Hujurat 49:11",
        "kait": "Peer review model — kritik metrik/asumsi, bukan mengejek teman.",
    },
}

KBC_BY_BRG: dict[str, KbcEntry] = {
    "BRG-01": {
        "panca": "Allah · ilmu",
        "dalil": "QS Al-Mujadilah 58:11 · QS Ta-Ha 20:114",
        "kait": "Spiral prasyarat ML = ilmu bertahap, bukan loncat tanpa fondasi.",
    },
    "BRG-02": {
        "panca": "Allah · ilmu terstruktur",
        "dalil": "QS Al-Alaq 96:1–5",
        "kait": "Modul ES6 = menulis kode teratur seperti ilmu yang teratur.",
    },
    "BRG-03": {
        "panca": "Sesama · ihsan",
        "dalil": "QS An-Nahl 16:90",
        "kait": "Komponen UI = memudahkan sesama (maintainability & kejelasan).",
    },
    "BRG-04": {
        "panca": "Bangsa · tabayyun",
        "dalil": "QS Al-Hujurat 49:6 · QS Al-Isra 17:36",
        "kait": "Fetch → Express: verifikasi respons server seperti verifikasi berita.",
    },
    "BRG-05": {
        "panca": "Diri · sabar",
        "dalil": "QS Al-Asr 103:1–3",
        "kait": "Toolchain npm — sabar baca error build, jangan asal copas config.",
    },
    "BRG-06": {
        "panca": "Sesama · Bangsa",
        "dalil": "QS Al-Maidah 5:2 (ta‘awanu)",
        "kait": "React SPA tim — gotong royong komponen, bukan monolith ego.",
    },
    "BRG-07": {
        "panca": "Sesama · amanah",
        "dalil": "QS An-Nisa 4:58 · QS Al-Mu’minun 23:8",
        "kait": "API Node = amanah data & endpoint yang tidak khianat pengguna.",
    },
    "BRG-08": {
        "panca": "Sesama · adil",
        "dalil": "QS An-Nisa 4:135 · QS Al-Maidah 5:8",
        "kait": "Normalisasi & split = evaluasi adil; tidak membohongi diri dengan akurasi palsu.",
    },
}

KBC_BY_MEETING_SUFFIX: dict[str, KbcEntry] = {
    "P15": {
        "panca": "Sesama · Diri",
        "dalil": "QS An-Nisa 4:58",
        "kait": "Kickoff project — janji tim & proses jujur.",
    },
    "P16": {
        "panca": "Sesama · Diri",
        "dalil": "QS An-Nisa 4:58 · QS Al-Asr 103",
        "kait": "Build iteratif — amanah waktu & kualitas kelompok.",
    },
    "P17": {
        "panca": "Diri · Sesama",
        "dalil": "QS Ali Imran 3:190–191",
        "kait": "Review/spiral — renungkan apa yang sudah dikuasai.",
    },
    "P18": {
        "panca": "Diri · syukur",
        "dalil": "QS Ali Imran 3:190–191 · QS Al-Mujadilah 58:11",
        "kait": "Showcase/refleksi semester — syukur ilmu, bukan sombong.",
    },
}

KBC_PEER: KbcEntry = {
    "panca": "Sesama",
    "dalil": "QS Al-Hujurat 49:10 · QS Al-Hujurat 49:11",
    "kait": "Peer review santun — bantu saudara, jangan mengejek.",
}

SEMESTER_DEFAULT: dict[str, KbcEntry] = {
    "X-S1": {
        "panca": "Allah · Diri · Bangsa",
        "dalil": "QS Ta-Ha 20:114 (Rabbi zidni ilma)",
        "kait": "Bernalar & literasi digital sebagai ilmu bermanfaat.",
    },
    "X-S2": {
        "panca": "Sesama · Diri",
        "dalil": "QS An-Nahl 16:90 (adl wa ihsan)",
        "kait": "Web & kolaborasi — manfaatkan untuk sesama.",
    },
    "XI-S3": {
        "panca": "Sesama · Allah",
        "dalil": "QS Al-Isra 17:36",
        "kait": "Desain untuk pengguna lain — teliti sebelum rilis.",
    },
    "XI-S4": {
        "panca": "Sesama · Bangsa",
        "dalil": "QS An-Nisa 4:58",
        "kait": "Data & Git = amanah dan integritas.",
    },
    "XII-S5": {
        "panca": "Sesama · Lingkungan",
        "dalil": "QS Al-Maidah 5:8",
        "kait": "Data & model — keadilan dan dampak ke sesama.",
    },
    "XII-S6": {
        "panca": "Allah · Sesama · Bangsa",
        "dalil": "QS Al-Isra 17:36 · QS An-Nisa 4:58",
        "kait": "AI/CV moderat, jujur, dan manfaat komunitas MA.",
    },
}


def _semester_key(code: str) -> str | None:
    m = re.match(r"^(X-S\d+|XI-S\d+|XII-S\d+)", code)
    return m.group(1) if m else None


def _meeting_suffix(code: str) -> str | None:
    m = re.search(r"-P(\d+)$", code)
    return f"P{m.group(1)}" if m else None


def get_kbc_dalil(code: str, modul_stem: str = "") -> KbcEntry:
    if code in KBC_BY_CODE:
        return KBC_BY_CODE[code]
    stem_l = modul_stem.lower()
    if "peer" in stem_l or "code-review" in stem_l:
        return KBC_PEER
    suf = _meeting_suffix(code)
    if suf and suf in KBC_BY_MEETING_SUFFIX:
        return KBC_BY_MEETING_SUFFIX[suf]
    sk = _semester_key(code)
    if sk and sk in SEMESTER_DEFAULT:
        return SEMESTER_DEFAULT[sk]
    return {
        "panca": "Panca Cinta (KBC)",
        "dalil": "QS Ta-Ha 20:114",
        "kait": "Ilmu multimedia dipakai dengan amanah dan manfaat.",
    }


def get_kbc_brg(code: str) -> KbcEntry:
    return KBC_BY_BRG.get(
        code,
        {
            "panca": "Allah · Sesama",
            "dalil": "QS Ta-Ha 20:114",
            "kait": "Jalur pendamping — ilmu lanjutan dengan amanah.",
        },
    )


def format_kbc_siswa(entry: KbcEntry, mapping_href: str) -> str:
    return (
        f"**Panca cinta:** {entry['panca']}\n\n"
        f"**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** {entry['dalil']}\n\n"
        f"**Kait di kelas hari ini:** {entry['kait']}\n\n"
        f"_Matriks lengkap: [Mapping KBC CPLF]({mapping_href}) §6._\n"
    )
