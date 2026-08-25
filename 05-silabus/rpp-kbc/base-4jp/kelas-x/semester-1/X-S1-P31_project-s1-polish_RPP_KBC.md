# RPP — Kurikulum Berbasis Cinta × CPLF

## X-S1-P31 — Project S1: Polish UX Ringan & Aksesibilitas Dasar

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
| Pertemuan ke- | Pertemuan 31/18 |
| Kode modul CPLF | `X-S1-P31` |
| Materi pokok | Project S1: Polish UX Ringan & Aksesibilitas Dasar |
| Alokasi waktu | **4 JP = 180 menit** |
| Unit silabus | X1.8 |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [X-S1-P31_project-s1-polish.md](../../../../../../06-modules/base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF |  |
| Mental model |  |
| Experience / PRJ | — |
| **Learning transformation** | Dari halaman yang (semoga) lulus spek → halaman yang **sopan dipakai**: tombol punya nama aksi, Tab bisa dikejar mata, kontras cukup, bahasa dokumen jujur — polish = kesopanan, bukan kembang api. |
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
| 0–10 | Orientation | C1 | Polish = sopan; bukan fitur 3; pintu AC |
| 10–30 | Scaffold | C2 | Lembar 8 item: `lang` · `title` · label · Tab · fokus · kontras · target klik · `alt`/`nav` |
| 30–50 | Experience | C2–C4 | Demo “halaman jadi tapi tidak ramah Tab” |
| 50–65 | Trap | C4 | `outline: none` · animasi · “Klik” · ARIA menumpuk · ganti `id` |
| 65–85 | Concept | C2 | Keyboard = pengguna tanpa mouse; label = janji aksi |
| 85–95 | Practice mini | C3 | Audit 8 item di halaman sendiri (centang sebelum ubah) |
| 95–105 | Transisi | — | AC masih G? 15–20' tutup atau catat; lalu polish |
| 105–120 | Scaffold praktik | C2–C3 | I do: `lang` + label tombol + `:focus` |
| 120–165 | Practice | C3–C6 | 3–5 sentuhan · uji Tab · regresi klik AC |
| 165–180 | Reflect | C5 | 3 alasan pengguna · preview P32 |

**Cognitive Trap (catatan KBC — ramah anak):**

- `outline: none` lalu klaim “lebih profesional.”
- 40 menit hover gradient, `lang` masih default.
- Menumpuk `aria-*` tanpa paham — bukan S1.
- Mengganti `id` agar “lebih aksesibel.”
- Animasi yang mengalihkan fokus.
- Polish sementara AC fitur 1 masih gagal.

**Guiding questions:**

1. Tanpa mouse: Tab sampai tombol spek? Fokus kelihatan?
2. Teks tombol menjelaskan aksi atau hanya menyuruh “klik”?
3. `lang` dan `title` jujur pada spek?
4. Sentuhan ini menolong pengguna atau hanya menolong screenshot?
5. Setelah polish: AC P26–P27 masih lulus (regresi)?

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
| 30–50 | Experience | C2–C4 |
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

1. Satu masalah Tab/fokus yang kutemukan: …
2. Tiga sentuhan + alasan: …
3. Item lembar yang sengaja tidak kutambah (ARIA ramai / animasi): …
4. Regresi fitur 1: lulus / gagal

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish_siswa.md)
- [Materi guru lengkap](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish_guru.md)
- [Materi pendukung guru](../../../../../../06-modules/materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
