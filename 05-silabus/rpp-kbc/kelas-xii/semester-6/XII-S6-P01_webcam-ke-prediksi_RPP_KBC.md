# RPP — Kurikulum Berbasis Cinta × CPLF

## XII-S6-P01 — Webcam ke Prediksi

**Acuan kebijakan:** Panduan Kurikulum Berbasis Cinta Kemenag (6077/2025) · [Template Blok A–G](../../../../../05-silabus/05_RPP_KBC_Template_CPLF.md)

> **Cara pakai:** Salin isi Blok A–G ke formulir RPP Dapodik/KMA madrasah. Isi **Madrasah**, **Nama guru**, **Tanggal**, **Kelas** (rombel) di Blok A.

---

## Blok A — Identitas

| Field | Isi |
|-------|-----|
| Satuan pendidikan (Madrasah) | _(isi)_ |
| Nama guru | _(isi)_ |
| Mata pelajaran | Multimedia (Pemrograman Web) |
| Kelas / Semester | Kelas XII / Semester 6 |
| Pertemuan ke- | Pertemuan 1/18 |
| Kode modul CPLF | `XII-S6-P01` |
| Materi pokok | Webcam ke Prediksi |
| Alokasi waktu | 2 JP = **90 menit** |
| Unit silabus | XII6.1 |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [XII-S6-P01_webcam-ke-prediksi.md](../../../../../06-modules/kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) | AD, AP |
| Capability CPLF | CXII-T3, CXII-B2 |
| Mental model | MM-21 |
| Experience / PRJ | — |
| **Learning transformation** | Dari “model di notebook terpisah” → **pipeline** webcam → tensor → output di browser. |
| Aspek formatif hari ini | OBS, REA, COM, ITR, TRF, TEC — sesuai modul |

## Blok C — Kurikulum Berbasis Cinta

| Field | Isi |
|-------|-----|
| **Panca Cinta utama** | Sesama |
| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |
| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |
| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |
| **Kait operasional** | Consent sebelum `getUserMedia` — hormati privasi. |

## Blok D — Dalil & refleksi (koordinasi guru agama)

| Field | Isi |
|-------|-----|
| **Dalil Al-Qur’an / Hadits (usulan)** | QS An-Nur 24:58 · QS Al-Hujurat 49:12 |
| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |
| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |
| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |

**Verifikasi:** [Mapping KBC §6](../../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)

## Blok E — Langkah kegiatan (sinkron modul CPLF)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–5 | Opening | Recall S5: tensor · predict — sekarang dari **kamera** | Cek izin webcam |
| 5–18 | Experience | Demo filter IG vs deteksi objek — beda proses? | Tanpa klaim akurat |
| 18–28 | Trap + Q | Trap: “kamera = AI otomatis pintar” | Tanya: langkah di antara? |
| 28–38 | Clarify | Frame → preprocess → model → label |
| 38–48 | Concept | `getUserMedia` · canvas · `tf.browser.fromPixels` |
| 48–70 | Practice | Halaman minimal: webcam → tensor shape log → tampil di UI |
| 70–80 | Reflect | Latensi & resolusi — apa dampaknya? |
| 80–90 | Transfer | Preview: model salah (P02) | |

**Adaptasi 1 JP:** Demo guru 15’ · Practice 20’ · Exit 10’.

**Cognitive Trap (catatan KBC — ramah anak):**

**Asumsi:** Webcam langsung “mengerti” tanpa pipeline.  
**Aman:** Puji rasa ajaib; uraikan langkah.

### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)

_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._

**Kegiatan pendahuluan**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 0–5 | Opening | Recall S5: tensor · predict — sekarang dari **kamera** |

**Kegiatan inti**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 5–18 | Experience | Demo filter IG vs deteksi objek — beda proses? |
| 18–28 | Trap + Q | Trap: “kamera = AI otomatis pintar” |
| 28–38 | Clarify | Frame → preprocess → model → label |
| 38–48 | Concept | `getUserMedia` · canvas · `tf.browser.fromPixels` |
| 48–70 | Practice | Halaman minimal: webcam → tensor shape log → tampil di UI |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 70–80 | Reflect | Latensi & resolusi — apa dampaknya? |
| 80–90 | Transfer | Preview: model salah (P02) |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

1. 4 langkah pipeline (kata sendiri)  
2. Satu risiko teknis (izin/laptop lemot)

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../06-modules/materi-ajar/kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md_siswa.md)
- [Materi guru lengkap](../../../../../06-modules/materi-ajar/kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md_guru.md)
- [Materi pendukung guru](../../../../../06-modules/materi-pendukung/kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
