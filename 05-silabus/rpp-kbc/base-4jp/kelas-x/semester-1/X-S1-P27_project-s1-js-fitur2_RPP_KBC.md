# RPP — Kurikulum Berbasis Cinta × CPLF

## X-S1-P27 — Project S1: Build JS Fitur 2 / Polish Logika

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
| Pertemuan ke- | Pertemuan 27/18 |
| Kode modul CPLF | `X-S1-P27` |
| Materi pokok | Project S1: Build JS Fitur 2 / Polish Logika |
| Alokasi waktu | **4 JP = 180 menit** |
| Unit silabus | X1.8 |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [X-S1-P27_project-s1-js-fitur2.md](../../../../../../06-modules/base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF |  |
| Mental model |  |
| Experience / PRJ | — |
| **Learning transformation** | Dari satu saklar yang sudah menyala (P26) → **dua janji yang tidak saling menimpa**: listener kedua punya `id` dan AC sendiri, atau logika `if`/`else` di dalam listener yang sama. Fitur 1 tetap lulus setelah perubahan. |
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
| 0–10 | Orientation | C1 | Recall P26 · pilih jalur A atau B dari spek |
| 10–30 | Scaffold | C2 | Dua `id` vs satu mulut; regresi = uji ulang fitur 1 |
| 30–50 | Experience | C2–C3 | Demo: fitur 2 menimpa `#pesan` → fitur 1 “hilang” |
| 50–65 | Trap | C4 | Satu tombol dua AC · fitur 3 · HTML yang tidak dijanjikan |
| 65–85 | Concept | C2 | Jalur A: listener terpisah · Jalur B: cabang di listener yang sama |
| 85–95 | Practice mini | C3 | Trace AC fitur 1 **lalu** AC hari ini |
| 95–105 | Transisi | — | Buka `script.js` · jangan hapus listener P26 |
| 105–120 | Scaffold praktik | C2–C3 | I do: jalur A atau B sesuai spek sampel |
| 120–165 | Practice | C3–C6 | Implementasi + regresi + peer AC |
| 165–180 | Reflect | C5 | Kedua AC (atau polish) lulus · preview P28 |

**Cognitive Trap (catatan KBC — ramah anak):**

- Fitur 2 menimpa `#pesan` → AC fitur 1 gagal tanpa siswa sadar.
- Dua `addEventListener` pada **tombol yang sama** untuk dua AC yang berbeda.
- “Masih ada waktu” → warna, counter, `innerHTML` — itu fitur 3.
- Polish dikira wajib membuat tombol kedua.
- Elemen HTML baru yang tidak pernah disebut spek.

**Guiding questions:**

1. Spek-mu jalur A atau B? Tunjuk barisnya.
2. Setelah fitur hari ini, klik fitur 1 masih sesuai AC?
3. Dua janji menulis ke elemen yang sama atau berbeda?
4. Konsol membedakan fitur 1 dan fitur 2 (atau klik pertama vs ulang)?
5. Apa yang sengaja **tidak** dikerjakan meski sempat terpikir?

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
| 85–95 | Practice mini | C3 |
| 95–105 | Transisi | — |
| 105–120 | Scaffold praktik | C2–C3 |
| 120–165 | Practice | C3–C6 |

**Kegiatan penutup**

| Menit | Fase | Aktivitas siswa |
|-------|------|------------------|
| 165–180 | Reflect | C5 |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

1. Jalurku: A / B — karena spek baris …
2. `id` / cabang yang kupakai: …
3. Hasil uji regresi fitur 1: lulus / gagal
4. Yang tidak kutambah meski sempat ingin: …

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2_siswa.md)
- [Materi guru lengkap](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2_guru.md)
- [Materi pendukung guru](../../../../../../06-modules/materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
