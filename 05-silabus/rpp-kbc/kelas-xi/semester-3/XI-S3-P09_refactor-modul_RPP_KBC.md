# RPP — Kurikulum Berbasis Cinta × CPLF

## XI-S3-P09 — Refactor & Modul Fungsi

**Acuan kebijakan:** Panduan Kurikulum Berbasis Cinta Kemenag (6077/2025) · [Template Blok A–G](../../../../../05-silabus/05_RPP_KBC_Template_CPLF.md)

> **Cara pakai:** Salin isi Blok A–G ke formulir RPP Dapodik/KMA madrasah. Isi **Madrasah**, **Nama guru**, **Tanggal**, **Kelas** (rombel) di Blok A.

---

## Blok A — Identitas

| Field | Isi |
|-------|-----|
| Satuan pendidikan (Madrasah) | _(isi)_ |
| Nama guru | _(isi)_ |
| Mata pelajaran | Multimedia (Pemrograman Web) |
| Kelas / Semester | Kelas XI / Semester 3 |
| Pertemuan ke- | Pertemuan 09/18 |
| Kode modul CPLF | `XI-S3-P09` |
| Materi pokok | Refactor & Modul Fungsi |
| Alokasi waktu | 2 JP = 90 menit |
| Unit silabus | XI3.5 |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [XI-S3-P09_refactor-modul.md](../../../../../06-modules/kelas-xi/semester-3/XI-S3-P09_refactor-modul.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF | CXI-T3 |
| Mental model | MM-14 |
| Experience / PRJ | — |
| **Learning transformation** | Dari fungsi 200 baris → **modul** dengan nama tanggung jawab jelas. |
| Aspek formatif hari ini | OBS, REA, COM, ITR, TRF, TEC — sesuai modul |

## Blok C — Kurikulum Berbasis Cinta

| Field | Isi |
|-------|-----|
| **Panca Cinta utama** | Sesama · Allah |
| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |
| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |
| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |
| **Kait operasional** | Refactor = teliti sebelum mengubah yang dipakai sesama. |

## Blok D — Dalil & refleksi (koordinasi guru agama)

| Field | Isi |
|-------|-----|
| **Dalil Al-Qur’an / Hadits (usulan)** | QS Al-Isra 17:36 |
| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |
| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |
| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |

**Verifikasi:** [Mapping KBC §6](../../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)

## Blok E — Langkah kegiatan (sinkron modul CPLF)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan “spaghetti code” (anonim) — cari 3 smell |
| 5–15 | Experience | **Dapur kantin**: stasiun potong/masak/sajikan |
| 15–25 | Trap | Copy-paste fungsi hampir sama × 4 |
| 25–35 | Clarify | DRY vs over-abstraction — kapan extract? |
| 35–45 | Concept | `function validateX()` · `function renderList()` · file terpisah (ES module) |
| 45–70 | Practice | Refactor kode P08: pisah validate / update / render |
| 70–85 | Before/after | Screenshot atau diff singkat |
| 85–90 | Exit | 1 fungsi yang kamu rename & why |

**Cognitive Trap (catatan KBC — ramah anak):**

**Asumsi:** Refactor = buang waktu; yang penting jalan.  
**Aman:** Tunjukkan bug dari duplikasi copy-paste.

### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)

_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._

**Kegiatan pendahuluan**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 0–5 | Opening | Tampilkan “spaghetti code” (anonim) — cari 3 smell |

**Kegiatan inti**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 5–15 | Experience | **Dapur kantin**: stasiun potong/masak/sajikan |
| 15–25 | Trap | Copy-paste fungsi hampir sama × 4 |
| 25–35 | Clarify | DRY vs over-abstraction — kapan extract? |
| 35–45 | Concept | `function validateX()` · `function renderList()` · file terpisah (ES module) |
| 45–70 | Practice | Refactor kode P08: pisah validate / update / render |
| 70–85 | Before/after | Screenshot atau diff singkat |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 85–90 | Exit | 1 fungsi yang kamu rename & why |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

_(lihat modul)_

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | - **BRG-03** — [RPP pendukung tidak terpisah; materi](../06-modules/materi-ajar/jalur-kelanjutan/BRG-03_guru.md) |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../06-modules/materi-ajar/kelas-xi/semester-3/XI-S3-P09_refactor-modul.md_siswa.md)
- [Materi guru lengkap](../../../../../06-modules/materi-ajar/kelas-xi/semester-3/XI-S3-P09_refactor-modul.md_guru.md)
- [Materi pendukung guru](../../../../../06-modules/materi-pendukung/kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
