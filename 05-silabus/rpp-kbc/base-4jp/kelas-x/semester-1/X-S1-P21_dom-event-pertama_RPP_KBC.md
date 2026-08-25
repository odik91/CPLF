# RPP — Kurikulum Berbasis Cinta × CPLF

## X-S1-P21 — DOM & Event Pertama

**Acuan kebijakan:** Panduan Kurikulum Berbasis Cinta Kemenag (6077/2025) · [Template Blok A–G](../../../../../../05-silabus/05_RPP_KBC_Template_CPLF.md)

> **Cara pakai:** Salin isi Blok A–G ke formulir RPP Dapodik/KMA madrasah. Isi **Madrasah**, **Nama guru**, **Tanggal**, **Kelas** (rombel) di Blok A.

---

## Blok A — Identitas

| Field | Isi |
|-------|-----|
| Satuan pendidikan (Madrasah) | _(isi)_ |
| Nama guru | _(isi)_ |
| Mata pelajaran | Multimedia (Pemrograman Web) |
| Kelas / Semester | Kelas X / Semester 1 |
| Pertemuan ke- | Pertemuan 21/18 |
| Kode modul CPLF | `X-S1-P21` |
| Materi pokok | DOM & Event Pertama |
| Alokasi waktu | **4 JP = 180 menit** |
| Unit silabus |  |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [X-S1-P21_dom-event-pertama.md](../../../../../../06-modules/base-4jp/kelas-x/semester-1/X-S1-P21_dom-event-pertama.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF |  |
| Mental model |  |
| Experience / PRJ | — |
| **Learning transformation** | Dari JavaScript yang hanya bekerja di konsol → JavaScript terhubung ke **satu elemen HTML** dan mengubah teksnya saat **satu event klik** terjadi. |
| Aspek formatif hari ini | OBS, REA, COM, ITR, TRF, TEC — sesuai modul |

## Blok C — Kurikulum Berbasis Cinta

| Field | Isi |
|-------|-----|
| **Panca Cinta utama** | Allah · Diri · Bangsa |
| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |
| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |
| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |
| **Kait operasional** | Bernalar & literasi digital sebagai ilmu bermanfaat. |

## Blok D — Dalil & refleksi (koordinasi guru agama)

| Field | Isi |
|-------|-----|
| **Dalil Al-Qur’an / Hadits (usulan)** | QS Ta-Ha 20:114 (Rabbi zidni ilma) |
| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |
| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |
| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |

**Verifikasi:** [Mapping KBC §6](../../../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)

## Blok E — Langkah kegiatan (sinkron modul CPLF)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall fondasi JS → sekarang hubungkan ke HTML |
| 10–30 | Scaffold | C2 | DOM sebagai representasi halaman; `id` sebagai alamat unik |
| 30–50 | Experience | C2–C3 | Pilih elemen + baca/ubah `textContent` |
| 50–65 | Trap | C4 | `id` typo, script sebelum elemen, lupa `#` tidak relevan pada API ini |
| 65–85 | Concept | C2 | click → listener → function → perubahan |
| 85–95 | Practice mini | C3–C4 | Trace sebelum/klik/setelah |
| 95–105 | Transisi | — | Setup folder `p21-dom-event/` |
| 105–120 | Scaffold praktik | C2–C3 | I do: tombol mengubah satu pesan |
| 120–165 | Practice | C3–C6 | Latihan file + interaksi teks milik siswa |
| 165–180 | Reflect | C4–C5 | AC klik · preview P22 |

**Cognitive Trap (catatan KBC — ramah anak):**

- `getElementById("pesan")` memakai nama `id` tanpa `#`.  
- Jika selector menghasilkan `null`, periksa typo dan urutan script.  
- `textContent` mengubah teks, bukan gaya atau struktur.  
- Listener bukan panggilan langsung: ia menunggu klik.

### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)

_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._

**Kegiatan pendahuluan**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 0–10 | Orientation | C1 |

**Kegiatan inti**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 10–30 | Scaffold | C2 |
| 30–50 | Experience | C2–C3 |
| 50–65 | Trap | C4 |
| 65–85 | Concept | C2 |
| 85–95 | Practice mini | C3–C4 |
| 95–105 | Transisi | — |
| 105–120 | Scaffold praktik | C2–C3 |
| 120–165 | Practice | C3–C6 |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 165–180 | Reflect | C4–C5 |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

1. Apa fungsi `id`?  
2. Mengapa `getElementById` tanpa `#`?  
3. Urutan klik → perubahan?  
4. Satu penyebab `null`?

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P21_dom-event-pertama_siswa.md)
- [Materi guru lengkap](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P21_dom-event-pertama_guru.md)
- [Materi pendukung guru](../../../../../../06-modules/materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P21_dom-event-pertama.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
