# RPP — Kurikulum Berbasis Cinta × CPLF

## X-S1-P18 — JavaScript Vanilla: Array & Loop

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
| Pertemuan ke- | Pertemuan 18/18 |
| Kode modul CPLF | `X-S1-P18` |
| Materi pokok | JavaScript Vanilla: Array & Loop |
| Alokasi waktu | **4 JP = 180 menit** |
| Unit silabus | X1.4 (fondasi JavaScript) |
| Model pembelajaran CPLF | Experience → Trap → Clarify → Concept → Practice → Reflect → Transfer |
| Modul acuan | [X-S1-P18_array-loop.md](../../../../../../06-modules/base-4jp/kelas-x/semester-1/X-S1-P18_array-loop.md) |

## Blok B — Capaian (Kurikulum Merdeka + CPLF)

| Field | Isi |
|-------|-----|
| Elemen CP (anchor) |  |
| Capability CPLF |  |
| Mental model |  |
| Experience / PRJ | — |
| **Learning transformation** | Dari “nilai satu per satu” → “banyak nilai sejenis disimpan dalam **array**, lalu diproses berulang dengan **loop** yang dapat ditelusuri.” |
| Aspek formatif hari ini | OBS, REA, COM, ITR, TRF, TEC — sesuai modul |

## Blok C — Kurikulum Berbasis Cinta

| Field | Isi |
|-------|-----|
| **Panca Cinta utama** | Diri · syukur |
| **Indikator KBC terkait** | Madrasah ramah anak · SEL · Toleransi · Lestari (spirit) — pilih yang relevan |
| **Tema nilai hari ini** | _(turunkan dari kait KBC)_ |
| **Momen KBC di jam CPLF** | Clarify / Reflect _(rekomendasi)_ · Trap aman (bukan mempermalukan) |
| **Kait operasional** | Refleksi capability, bukan pamer ego. |

## Blok D — Dalil & refleksi (koordinasi guru agama)

| Field | Isi |
|-------|-----|
| **Dalil Al-Qur’an / Hadits (usulan)** | QS Ali Imran 3:190–191 |
| **Tafsir / makna ringkas** | _(2–3 kalimat — guru agama; hubungkan ke masalah/teknologi pertemuan)_ |
| **Pertanyaan refleksi siswa** | _(dari exit ticket / guiding questions di bawah)_ |
| **Bukti sikap / KBC** | Exit ticket · lembar kerja · jurnal refleksi |

**Verifikasi:** [Mapping KBC §6](../../../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md#6-titik-kait-materi-cplf--usulan-dalil-al-quran--sunnah)

## Blok E — Langkah kegiatan (sinkron modul CPLF)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Masalah: cetak 5 menu tanpa menulis 5 baris berulang |
| 10–30 | Scaffold | C2 | Array = daftar berurutan · indeks 0 |
| 30–50 | Experience | C2–C3 | Literal array, akses `[i]`, `length` |
| 50–65 | Trap | C4 | Indeks 1 sebagai “pertama”, `menus[menus.length]` |
| 65–85 | Concept | C2 | `for`: inisialisasi · syarat · update · tubuh |
| 85–95 | Practice mini | C3–C4 | Trace 3 putaran di kertas |
| 95–105 | Transisi | — | Setup `skill-js/p18-array-loop.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: cetak daftar + jumlah harga |
| 120–165 | Practice | C3–C6 | Latihan file + daftar milik siswa |
| 165–180 | Reflect + Exit | C4–C5 | Exit · preview object/function P19 |

**Cognitive Trap (catatan KBC — ramah anak):**

- Elemen pertama adalah indeks `0`, bukan `1`.  
- Indeks terakhir = `length - 1`; `array[array.length]` adalah `undefined`.  
- Loop tanpa update (`i` tidak bertambah) dapat berjalan tanpa henti.  
- `typeof []` menghasilkan `"object"` — kenalan singkat saja; object penuh di P19.

**Guiding questions:**

1. Daftar ini menyimpan nilai apa?  
2. Indeks elemen pertama dan terakhir berapa?  
3. Syarat loop berhenti kapan?  
4. Pada putaran ke-`i`, elemen mana yang diproses?  
5. Apakah menulis ulang baris lebih jelas, atau loop?

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
| 165–180 | Reflect + Exit | C4–C5 |

## Blok F — Penilaian / asesmen

| Jenis | Instrumen | Rubrik / catatan |
|-------|-----------|------------------|
| Formatif | Diskusi · observasi · lembar kerja | [Rubrik formatif unit](../../../../../../09-rubrik/09_Rubrik_Formatif_Unit.md) |
| Sikap KBC | Refleksi · exit ticket | Blok D — bukti sikap |

**Exit ticket (modul):**

1. Indeks elemen pertama?  
2. Indeks terakhir bila `length` = 4?  
3. Apa arti `i < menus.length`?  
4. Satu alasan memakai loop, bukan copy-paste `console.log`.

## Blok G — Kesiapan jalur lanjutan (ML/AI & React/Node)

| Field | Isi |
|-------|-----|
| **BRG pertemuan ini** | _Tidak ada BRG wajib pertemuan ini._ |
| **Gate semester** | [Kaji ulang S1–S6](../../../../../../05-silabus/05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md) |
| **Panduan jalur** | [BRG Index](../../../../../../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md) |

## Media & sumber belajar

- Modul CPLF · handout siswa · materi guru lengkap

## Lampiran CPLF (distribusi kelas)

- [Handout siswa](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P18_array-loop_siswa.md)
- [Materi guru lengkap](../../../../../../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P18_array-loop_guru.md)
- [Materi pendukung guru](../../../../../../06-modules/materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P18_array-loop.md)

---

_Generated from CPLF modul — edit manual bila RPP sekolah membutuhkan kolom tambahan Kemenag._
