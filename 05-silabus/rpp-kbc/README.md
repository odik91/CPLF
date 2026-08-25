# RPP KBC per Pertemuan — CPLF Multimedia MA

**Version:** 0.1 (Draft)  
**Format:** [05_RPP_KBC_Template_CPLF.md](../05_RPP_KBC_Template_CPLF.md) **Blok A–G** + **Blok E′** (Pendahuluan · Inti · Penutup) untuk formulir RPP **Dapodik/KMA** madrasah.

## Isi folder

| Item | Keterangan |
|------|------------|
| `base-4jp/kelas-*/semester-*/` | **Aktif (4 JP)** — RPP dari modul `06-modules/base-4jp/` |
| `base-2jp/kelas-*/semester-*/` | **Arsip (2 JP)** — RPP dari modul `06-modules/base-2jp/` |
| `kelas-x/semester-*/` … `kelas-xii/` | Legacy XI–XII (2 JP) · modul `06-modules/kelas-*/` |
| `00_Index_Master_RPP_KBC.md` | Indeks semua semester & jalur |
| `scripts/generate_rpp_kbc.py` | Regenerasi otomatis (base-4jp + base-2jp + legacy) |

## Hubungan dokumen

```text
Modul pertemuan (06-modules/base-4jp|base-2jp|kelas-*)  → timeline, trap, capaian
kbc_dalil_map.py                                         → Blok C–D (Panca Cinta, dalil usulan)
materi-ajar/base-4jp|base-2jp/*                          → lampiran handout siswa & guru
05_RPP_KBC_Lampiran_Terisi_Penuh.md                      → 20 pertemuan flagship (narasi lebih dalam, opsional)
```

## Regenerasi

Dari akar repo CPLF:

```bash
python 05-silabus/rpp-kbc/scripts/generate_rpp_kbc.py
```

Setelah edit modul CPLF atau `kbc_dalil_map.py`, jalankan ulang.

## Cara pakai di madrasah

1. Buka RPP pertemuan (mis. [X-S1-P01](./kelas-x/semester-1/X-S1-P01_masalah-sebelum-solusi_RPP_KBC.md)).
2. Salin **Blok A–G** ke aplikasi RPP sekolah; isi madrasah, guru, tanggal, rombel.
3. Untuk kolom **Pendahuluan / Inti / Penutup** Kemenag, gunakan **Blok E′**.
4. **Blok D:** koordinasi guru agama — dalil usulan wajib diverifikasi (terjemahan & status hadits).
5. Bagikan ke siswa: link **Handout siswa** di bagian Lampiran.

## Acuan kebijakan

- Panduan Kurikulum Berbasis Cinta Kemenag (Keputusan Dirjen Pendis **6077/2025**)
- [05_Mapping_Kurikulum_Berbasis_Cinta.md](../05_Mapping_Kurikulum_Berbasis_Cinta.md)
