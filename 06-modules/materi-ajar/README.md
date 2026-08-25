# Materi Ajar CPLF — Handout Siswa & Materi Guru Lengkap

**Version:** 0.5  
**Peran:** Materi **siap sampaikan** di kelas — bukan clue/RAHASIA GURU.

Handout siswa berstruktur: **Tujuan → Ringkasan konsep** → praktik, lembar kerja, exit ticket, **§ Nilai KBC (dalil tematik)**, tautan BRG bila ada.

| Jenis | Audiens | Isi |
|-------|---------|-----|
| `*_siswa.md` | Siswa MA | Penjelasan konsep, lembar kerja, latihan, refleksi, PR |
| `*_guru.md` | Guru | Panduan lengkap, kunci diskusi, trap, rubrik, **tanpa** solusi project penuh |

## Hubungan dokumen

```text
Modul pertemuan (06-modules/base-4jp|base-2jp/…)  → timeline & DNA CPLF
Materi pendukung (materi-pendukung/base-*/…)     → sumber guru (skrip)
materi-ajar/ (folder ini)                        → distribusi siswa + guru lengkap
jalur-kelanjutan/ BRG                            → terhubung di file terkait
```

## Struktur folder

```text
materi-ajar/
├── README.md
├── 00_Index_Master_Materi_Ajar.md
├── 00_Template_Handout_Siswa.md
├── 00_Template_Materi_Guru_Lengkap.md
├── scripts/                    ← generate (arsip 2JP) + PDF bacaan
├── jalur-kelanjutan/           ← BRG
├── base-4jp/                   ← AKTIF (S1 lengkap · S2 stub)
│   └── kelas-x/semester-1|2/
└── base-2jp/                   ← ARSIP freeze 18×2JP
    ├── kelas-x/semester-1|2/
    ├── kelas-xi/semester-3|4/
    └── kelas-xii/semester-5|6/
```

## Regenerasi

Dari akar repo CPLF:

```bash
python 06-modules/materi-ajar/scripts/generate_from_cplf.py
```

> Script historis masih berorientasi jalur 2JP. Untuk S1 aktif, edit langsung di `base-4jp/`.

## BRG

| Modul CPLF | BRG terhubung |
|------------|---------------|
| X-S2-P18 (arsip 2JP) | [BRG-02](./jalur-kelanjutan/BRG-02_siswa.md) |
| XI-S3-P09–P10, P15–P16 | BRG-03 |
| XI-S4-P04, P11 | BRG-04, BRG-05 |
| XII awal S5 | BRG-01 |
| XII-S5-P07–P08, P11+ | BRG-08 |
| Ekstra | BRG-06, BRG-07 |

Detail: [05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md](../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md)

## KBC / dalil

Hook **Nilai KBC** di handout siswa mengacu [05_Mapping_Kurikulum_Berbasis_Cinta.md](../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md). Override: [scripts/kbc_dalil_map.py](./scripts/kbc_dalil_map.py).

## Etika

- Handout siswa **boleh** dicetak/dibagikan.  
- Guru tetap **live coding** — siswa mengetik sendiri.  

## Indeks

- **[Master](./00_Index_Master_Materi_Ajar.md)** — 4JP aktif + 2JP arsip  
- Aktif: [X-S1 4JP](./base-4jp/kelas-x/semester-1/00_Index_Materi_Ajar.md)  
- Arsip: [X-S1 2JP](./base-2jp/kelas-x/semester-1/00_Index_Materi_Ajar.md)  
- [BRG](./jalur-kelanjutan/00_Index_Materi_Ajar_BRG.md)
