# RPP — Kurikulum Berbasis Cinta × CPLF

## X-S1-P19 — JavaScript Vanilla: Object & Function

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
| Pertemuan ke- | Pertemuan 19/18 |
| Kode modul CPLF | `X-S1-P19` |
| Materi pokok | JavaScript Vanilla: Object & Function |
| Alokasi waktu | **4 JP = 180 menit** |
| Unit silabus |  |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [X-S1-P19_object-function.md](../../../../../../06-modules/base-4jp/kelas-x/semester-1/X-S1-P19_object-function.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF |  |
| Mental model |  |
| Experience / PRJ | — |
| **Learning transformation** | Dari data tanpa label dan proses berulang → **object** menyatukan data bernama, **function** memberi nama pada proses yang dapat dipakai ulang. |
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
| 0–10 | Orientation | C1 | Recall array: banyak nilai sama peran |
| 10–30 | Scaffold object | C2 | Data profil: nilai berbeda peran diberi properti |
| 30–50 | Experience | C2–C3 | Object literal + dot notation |
| 50–65 | Trap | C4 | `profil.namaLengkap` typo / kurung vs kurawal |
| 65–85 | Scaffold function | C2 | Proses berulang → nama fungsi, parameter, `return` |
| 85–95 | Practice mini | C3–C4 | Trace argumen → parameter → hasil |
| 95–105 | Transisi | — | Setup `skill-js/p19-object-function.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: profil + hitung total |
| 120–165 | Practice | C3–C6 | Latihan file + artefak mini |
| 165–180 | Reflect + Exit | C4–C5 | Preview debugging P20 |

**Cognitive Trap (catatan KBC — ramah anak):**

- Array memakai indeks; object memakai nama properti.  
- `profil.nama` berbeda dari `profil.namaa` (hasilnya `undefined`).  
- `console.log` menampilkan; `return` memberi hasil ke pemanggil.  
- Function tidak berjalan saat didefinisikan, melainkan saat dipanggil dengan `()`.

### Blok E′ — Ringkasan untuk formulir Kemenag (Pendahuluan · Inti · Penutup)

_Gabungan fase CPLF agar mudah ditempel ke kolom RPP KMA/Dapodik._

**Kegiatan pendahuluan**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 0–10 | Orientation | C1 |

**Kegiatan inti**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 10–30 | Scaffold object | C2 |
| 30–50 | Experience | C2–C3 |
| 50–65 | Trap | C4 |
| 65–85 | Scaffold function | C2 |
| 85–95 | Practice mini | C3–C4 |
| 95–105 | Transisi | — |
| 105–120 | Scaffold praktik | C2–C3 |
| 120–165 | Practice | C3–C6 |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 165–180 | Reflect + Exit | C4–C5 |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

1. Bedakan array dan object.  
2. Apa hasil `profil.namaa` bila propertinya `nama`?  
3. Beda parameter dan argumen.  
4. Mengapa `return` berguna?

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P19_object-function_siswa.md)
- [Materi guru lengkap](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P19_object-function_guru.md)
- [Materi pendukung guru](../../../../../../06-modules/materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P19_object-function.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
