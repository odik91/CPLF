# Silabus Kelas XI — CPLF Multimedia (Web)

**Version:** 0.1 (Frozen)  
**Fase Merdeka:** F (tahap membangun)  
**Tema besar:** Belajar membangun solusi  
**Capability induk:** CXI-* di [05_Capability_Framework_CPLF.md](./05_Capability_Framework_CPLF.md)

## Tujuan Akhir Tahun

Siswa mampu merancang dan membangun aplikasi web multi-komponen serta bekerja kolaboratif — software mulai terasa sebagai solusi, bukan latihan sintaks.

**Prasyarat spiral dari X:** problem framing, algoritma dasar, HTML/CSS/JS dasar, budaya klarifikasi & error-as-feedback.

---

## Semester 3 — Interaksi, Struktur, dan Modularitas

**Elemen CP:** AP, BK  
**MM utama:** MM-11–16, MM-19  

### Unit tema


| Unit  | Tema                           | Cognitive Trap (arah)       | Konsep yang lahir                | Media / skill              | Capability     | Bukti belajar              |
| ----- | ------------------------------ | --------------------------- | -------------------------------- | -------------------------- | -------------- | -------------------------- |
| XI3.1 | Aplikasi = sistem IPO          | “Tinggal tambah tombol”     | Input–Process–Output–State       | Diagram alur app           | CXI-B1         | Blueprint 1 aplikasi       |
| XI3.2 | DOM sebagai antarmuka hidup    | Manipulasi asal `innerHTML` | querySelector, update aman       | DOM                        | CXI-T1         | Fitur UI terkendali        |
| XI3.3 | Event & alur pengguna          | Event “ajaib” tanpa model   | Event listener, alur interaksi   | Events                     | CXI-T1, B1     | User flow + implementasi   |
| XI3.4 | Data di memori aplikasi        | Variabel global kacau       | Struktur data tepat-guna         | Array/object nested        | CXI-B2         | Skema data tertulis        |
| XI3.5 | Mengemas ulang proses          | Copy-paste fungsi panjang   | Module, pemisahan tanggung jawab | Fungsi/modul JS            | CXI-T3         | Refactor sebelum/sesudah   |
| XI3.6 | Requirement yang bisa diuji    | Spek “bikin bagus”          | Acceptance criteria              | Dokumen singkat            | CXI-K1         | Requirement + uji centang  |
| XI3.7 | Project S3 (individu/pasangan) | —                           | Integrasi interaksi              | SPA ringan / multi-section | CXI-T1, T3, B* | App + demo reasoning       |
| XI3.8 | Review kualitas                | “Yang penting jalan”        | Keterbacaan, ulang teknis kecil  | Code review teman          | CXI-C1         | Catatan review + perbaikan |


**Contoh project S3:** [PRJ-XI-S3-01 … 04](../08-project/08_Project_Bank_Index.md) (absensi DOM, peminjaman, katalog OSIS, kuis).

---



## Semester 4 — Data, Async, dan Kolaborasi

**Elemen CP:** AD, AP, LD  
**MM utama:** MM-09–10, MM-17–20, MM-23  

### Unit tema


| Unit  | Tema                           | Cognitive Trap (arah)         | Konsep yang lahir              | Media / skill       | Capability    | Bukti belajar                   |
| ----- | ------------------------------ | ----------------------------- | ------------------------------ | ------------------- | ------------- | ------------------------------- |
| XI4.1 | Waktu & ketidaktersediaan data | Sync thinking di dunia async  | Promise, async/await           | Async JS            | CXI-T2        | Demo loading/error state        |
| XI4.2 | Bicara antar sistem            | “Langsung dapat data”         | API, kontrak data              | Fetch, JSON         | CXI-T2, MM-17 | Konsumsi 1 API publik           |
| XI4.3 | Transformasi data              | Menampilkan mentah tanpa olah | map/filter/reduce (tepat-guna) | Pipelines data      | CXI-B2, AD    | Tabel/hasil olahan              |
| XI4.4 | Persistensi                    | Refresh = hilang semua        | localStorage / file JSON       | Penyimpanan lokal   | CXI-T4        | CRUD mini persistent            |
| XI4.5 | Konsep basis data              | Perpustakaan tanpa nomor buku | Identitas, relasi sederhana    | Model tabel/ER mini | CXI-B2, T4    | Skema + justifikasi             |
| XI4.6 | Kerja tim & versi              | Overwrite kerja teman         | Git dasar, branch sederhana    | Git/GitHub          | CXI-T5, K2    | Repo dengan ≥2 kontributor      |
| XI4.7 | Project S4 kolaboratif         | Hero coding sendirian         | Integrasi & komunikasi         | Stack S3+S4         | CXI-K2, T*    | Product + retrospektif tim      |
| XI4.8 | Refleksi tahun XI              | —                             | Dari halaman → sistem          | Portofolio          | Semua CXI     | Showcase + pelajaran kolaborasi |


**Contoh project S4:** [PRJ-XI-S4-01 … 04](../08-project/08_Project_Bank_Index.md) (dashboard API, absensi persistent, inventaris, portal kolaboratif).

**AI sebagai asisten coding:** diizinkan dengan protokol klarifikasi (MM-00, MM-22) — siswa wajib menjelaskan kode yang dipakai.

---

## Experience yang Disarankan (S3–S4)

| Unit | Experience |
|------|------------|
| XI4.2 | [EXP_08 WhatsApp](../07-experience_library/EXP_08_WhatsApp.md) |
| XI4.3 / XI4.5 | [EXP_09 TikTok Feed](../07-experience_library/EXP_09_TikTok_Feed.md), [EXP_07 Perpustakaan](../07-experience_library/EXP_07_Perpustakaan.md) |

Indeks: [07_Experience_Library_Index.md](../07-experience_library/07_Experience_Library_Index.md)

---



## Asesmen Kelas XI


| Aspek                                 | Bobot arah (fleksibel) |
| ------------------------------------- | ---------------------- |
| Reasoning & desain (blueprint, skema) | Tinggi                 |
| Artefak berfungsi + iterasi           | Tinggi                 |
| Kolaborasi & Git (S4)                 | Sedang–tinggi          |
| Teknik sintaks murni                  | Pendukung              |


---



## Nilai MA

Gotong royong, amanah saat mengelola data teman/kelas, kejujuran atribusi (kode AI/teman), komunikasi santun dalam code review.

---



## Yang Belum Inti di XI

Training model ML, TensorFlow.js mendalam — pengantar konseptual boleh singkat; praktik utama di XII.

## Checklist Guru Kelas XI

- [ ] Blueprint/skema sebelum coding panjang (S3+)  
- [ ] Spiral X cukup singkat — tidak mengulang teori penuh  
- [ ] AI coding: siswa wajib jelaskan kode yang dipakai  
- [ ] S4: Git, atribusi, amanah data teman  

## Modul pertemuan (implementasi)

**36 pertemuan × 2 JP (90 menit)** — timeline menit-per-menit:

- [Semester 3](../06-modules/kelas-xi/semester-3/XI-S3_Index.md) · P01–P18  
- [Semester 4](../06-modules/kelas-xi/semester-4/XI-S4_Index.md) · P01–P18  
- [Panduan JP & blok waktu](../06-modules/kelas-xi/00_Panduan_Pertemuan.md)

## Catatan Versi

v0.1 Draft — tingkat unit/tema + link modul pertemuan Kelas XI.
