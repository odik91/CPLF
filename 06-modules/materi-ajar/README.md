# Materi Ajar CPLF — Handout Siswa & Materi Guru Lengkap

**Version:** 0.3 (Draft)  
**Peran:** Materi **siap sampaikan** di kelas — bukan clue/RAHASIA GURU.

Handout siswa berstruktur: **Tujuan → Ringkasan konsep** (dari materi pendukung) → praktik, lembar kerja, exit ticket, **§ Nilai KBC (dalil tematik)**, tautan BRG bila ada.

| Jenis | Audiens | Isi |
|-------|---------|-----|
| `*_siswa.md` | Siswa MA | Penjelasan konsep, lembar kerja, latihan, refleksi, PR |
| `*_guru.md` | Guru | Panduan 90 menit lengkap, kunci diskusi, trap, rubrik, **tanpa** solusi project penuh |

## Hubungan dokumen

```text
Modul pertemuan (06-modules/kelas-*/…)     → timeline & DNA CPLF
Materi pendukung (materi-pendukung/…)      → sumber guru (skrip) — disintesis ke *_guru.md
materi-ajar/ (folder ini)                  → distribusi ke siswa + guru lengkap
jalur-kelanjutan/ BRG                      → terhubung otomatis di file terkait
```

## Struktur folder

```text
materi-ajar/
├── README.md
├── 00_Template_Handout_Siswa.md
├── 00_Template_Materi_Guru_Lengkap.md
├── scripts/generate_from_cplf.py   ← regenerasi dari modul + materi pendukung
├── jalur-kelanjutan/               ← BRG siswa + guru (lengkap)
├── kelas-x/semester-1/ … semester-2/
├── kelas-xi/semester-3/ … semester-4/
└── kelas-xii/semester-5/ … semester-6/
```

## Regenerasi

Dari akar repo CPLF:

```bash
python 06-modules/materi-ajar/scripts/generate_from_cplf.py
```

Setelah edit modul/materi pendukung, jalankan ulang script. File BRG di `jalur-kelanjutan/` dapat diedit manual setelah generate.

## BRG

| Modul CPLF | BRG terhubung |
|------------|---------------|
| X-S2-P18 | [BRG-02](./jalur-kelanjutan/BRG-02_siswa.md) |
| XI-S3-P09–P10, P15–P16 | BRG-03 |
| XI-S4-P04, P11 | BRG-04, BRG-05 |
| XII awal S5 | BRG-01 |
| XII-S5-P07–P08, P11+ | BRG-08 |
| Ekstra | BRG-06, BRG-07 |

Detail: [05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md](../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md)

## KBC / dalil

Hook **Nilai KBC** di setiap handout siswa (generate) mengacu [05_Mapping_Kurikulum_Berbasis_Cinta.md](../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6. Override per modul: [scripts/kbc_dalil_map.py](./scripts/kbc_dalil_map.py).

## Etika

- Handout siswa **boleh** dicetak/dibagikan.  
- Guru tetap **live coding** — siswa mengetik sendiri, tidak copas repo jadi.  
- Materi guru berisi kunci diskusi, bukan patch project siap tempel.

## Indeks

- **[Master — semua semester](./00_Index_Master_Materi_Ajar.md)**
- [Kelas X S1](./kelas-x/semester-1/00_Index_Materi_Ajar.md)
- [Kelas X S2](./kelas-x/semester-2/00_Index_Materi_Ajar.md)
- [BRG](./jalur-kelanjutan/00_Index_Materi_Ajar_BRG.md)

*(Indeks XI/XII dibuat oleh script generate.)*
