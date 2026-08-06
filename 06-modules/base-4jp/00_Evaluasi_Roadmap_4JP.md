# Evaluasi Roadmap & Model 4JP — Keputusan Terkunci

**Version:** 0.2  
**Jalur:** `base-4jp` saja — **tidak mengubah** roadmap/silabus freeze `base-2jp` / `04-roadmap` / `05-silabus` resmi.

---

## Keputusan (2026-08-06)

| # | Keputusan | Isi |
|---|-----------|-----|
| 1 | **BE** | Mulai **lokal** (localStorage/JSON) → saat lokal tidak layak, pindah **DB sungguhan** sebagai *solusi atas masalah* (filosofi P01: masalah sebelum solusi) |
| 2 | **Geser media X** | **S1:** JS dasar + HTML + CSS → **static page** · **S2:** advance DOM |
| 3 | **Jumlah** | **34 pertemuan** × **4 JP** (180') · 2 pertemuan/minggu |
| 4 | **Pola pertemuan** | ~**2 JP teori** + ~**2 JP praktik terkait** · bridging digabung |
| 5 | **Pemisahan** | `base-2jp` = arsip 18×2JP · `base-4jp` = pengayaan (lebih dalam, bukan ganti filosofi) |

---

## Bukan mengubah freeze 2JP

Dokumen berikut **tetap** untuk jalur 2JP / arsip:

- `04-roadmap/04_Roadmap_Global_CPLF.md`
- `05-silabus/05_Silabus_Kelas_X.md` (dan XI/XII freeze)
- `06-modules/base-2jp/**`

Pengayaan 4JP didokumentasikan di folder ini.

---

## Model waktu 4JP

```text
1 pertemuan = 4 JP = 180 menit
1 minggu    = 2 pertemuan = 8 JP
S1          = 34 pertemuan (±17 minggu efektif)
```

Pola default:

```text
Orientation/Compass
  → Teori + Experience + Trap + Clarify + Concept   (~2 JP)
  → Scaffold + Practice coding terkait              (~2 JP)
  → Reflect + Exit
```

---

## Peta journey pengayaan (base-4jp)

| Semester | Fokus pengayaan | Media |
|----------|-----------------|-------|
| **1 (X)** | Bernalar + static page | HTML, CSS, JS dasar |
| **2 (X)** | Halaman hidup | Advance DOM, event, state UI |
| **3 (XI)** | SPA ringan / multi-view | Modul, arsitektur front |
| **4 (XI)** | Data & “BE spiral” | Lokal dulu → masalah kapasitas/integritas → DB sungguhan |
| 5–6 (XII) | (mengikuti freeze + pengayaan belakangan) | ML/CV/etika |

### Spiral BE (selaras masalah-sebelum-solusi)

```text
Simpan di lokal (cukup untuk demo)
  → Trap: refresh / banyak data / multi-user / hilang
  → Framing: lokal tidak layak karena …
  → Solusi: DB + API sebagai jawaban atas masalah itu
  → Bukan: “hari ini belajar database karena bab berikutnya”
```
