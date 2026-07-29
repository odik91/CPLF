# RPP — Kurikulum Berbasis Cinta × CPLF

## XI-S4-P09 — Model Data & Relasi

**Acuan kebijakan:** Panduan Kurikulum Berbasis Cinta Kemenag (6077/2025) · [Template Blok A–G](../../../../../05-silabus/05_RPP_KBC_Template_CPLF.md)

> **Cara pakai:** Salin isi Blok A–G ke formulir RPP Dapodik/KMA madrasah. Isi **Madrasah**, **Nama guru**, **Tanggal**, **Kelas** (rombel) di Blok A.

---

## Blok A — Identitas

| Field | Isi |
|-------|-----|
| Satuan pendidikan (Madrasah) | _(isi)_ |
| Nama guru | _(isi)_ |
| Mata pelajaran | Multimedia (Pemrograman Web) |
| Kelas / Semester | Kelas XI / Semester 4 |
| Pertemuan ke- | Pertemuan 09/18 |
| Kode modul CPLF | `XI-S4-P09` |
| Materi pokok | Model Data & Relasi |
| Alokasi waktu | 2 JP = 90 menit |
| Unit silabus | XI4.5 |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [XI-S4-P09_model-data-relasi.md](../../../../../06-modules/kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF | CXI-B2, CXI-T4 |
| Mental model |  |
| Experience / PRJ | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |
| **Learning transformation** | Dari satu array datar → **relasi** id & foreign key sederhana. |
| Aspek formatif hari ini | OBS, REA, COM, ITR, TRF, TEC — sesuai modul |

## Blok C — Kurikulum Berbasis Cinta

| Field | Isi |
|-------|-----|
| **Panca Cinta utama** | Sesama · Bangsa |
| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |
| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |
| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |
| **Kait operasional** | Data & Git = amanah dan integritas. |

## Blok D — Dalil & refleksi (koordinasi guru agama)

| Field | Isi |
|-------|-----|
| **Dalil Al-Qur’an / Hadits (usulan)** | QS An-Nisa 4:58 |
| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |
| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |
| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |

**Verifikasi:** [Mapping KBC §6](../../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)

## Blok E — Langkah kegiatan (sinkron modul CPLF)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_07: buku vs peminjam — 2 entitas |
| 5–18 | Experience | **Perpustakaan MA** — kartu anggota + buku |
| 18–28 | Trap | Duplikasi nama lengkap di setiap record |
| 28–38 | Clarify | Normalisasi ringkas — id referensi |
| 38–48 | Concept | 1-to-many · lookup by id |
| 48–70 | Practice | Skema: `members[]` + `loans[]` dengan `memberId` |
| 70–85 | Practice | Query join manual: tampilkan pinjaman + nama |
| 85–90 | Exit | Justifikasi 1 pilihan desain |

**Cognitive Trap (catatan KBC — ramah anak):**

**Asumsi:** Database = Excel satu sheet raksasa.  
**Aman:** Tunjukkan duplikasi & inkonsistensi.

### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)

_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._

**Kegiatan pendahuluan**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 0–5 | Opening | EXP_07: buku vs peminjam — 2 entitas |

**Kegiatan inti**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 5–18 | Experience | **Perpustakaan MA** — kartu anggota + buku |
| 18–28 | Trap | Duplikasi nama lengkap di setiap record |
| 28–38 | Clarify | Normalisasi ringkas — id referensi |
| 38–48 | Concept | 1-to-many · lookup by id |
| 48–70 | Practice | Skema: `members[]` + `loans[]` dengan `memberId` |
| 70–85 | Practice | Query join manual: tampilkan pinjaman + nama |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 85–90 | Exit | Justifikasi 1 pilihan desain |

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
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../06-modules/materi-ajar/kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md_siswa.md)
- [Materi guru lengkap](../../../../../06-modules/materi-ajar/kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md_guru.md)
- [Materi pendukung guru](../../../../../06-modules/materi-pendukung/kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
