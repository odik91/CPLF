# Aplikasi Pendukung Pembelajaran CPLF (LMS)

> Dokumen ini adalah **entry point** perencanaan aplikasi pendukung metode pembelajaran CPLF.
> Aplikasi berperan setara LMS (Learning Management System) yang digunakan oleh **Guru** dan **Murid**,
> dirancang khusus untuk mendukung alur belajar CPLF: materi → bank soal per tema pertemuan → ujian refleksi acak → statistik.

## 1. Tujuan Aplikasi

- Menjadi wadah digital bagi alur belajar CPLF (materi, latihan, refleksi/ujian, statistik perkembangan).
- Memisahkan tanggung jawab keamanan: **semua akses data wajib lewat Backend (BE)**, kecuali resource pihak ketiga tertentu yang memang didesain untuk diakses langsung oleh client (mis. embed video YouTube).
- Mendukung kondisi jaringan sekolah yang tidak selalu stabil (offline-first untuk ujian).
- Mendukung integritas ujian (verifikasi wajah, soal & jawaban diacak per siswa).
- Memberi guru data yang actionable: statistik soal, statistik aktivitas belajar siswa terhadap materi.

## 2. Prinsip Arsitektur Utama

1. **BE/FE terpisah total.** BE = NestJS (REST + WebSocket + Background Worker). FE = Next.js.
2. **FE tanpa Server Component untuk data fetching.** Next.js hanya dipakai sebagai shell/rendering di sisi client (App Router boleh dipakai untuk routing, tetapi setiap page yang butuh data ditandai `"use client"` dan mengambil data melalui BE API, bukan lewat RSC/server actions). Ini menghindari kebocoran credential/query di server Next.js dan memastikan satu-satunya "source of truth" akses data adalah BE.
3. **Pengecualian eksplisit**: konten pihak ketiga yang memang publik & dirancang untuk diakses langsung dari browser (video embed YouTube/Vimeo) boleh diakses langsung dari FE tanpa proxy BE.
4. **RBAC/IAM eksplisit** dengan role: `SUPER_ADMIN`, `ADMIN`, `GURU`, `WALI_KELAS`, `MURID`.
5. **Ujian bersifat refleksi**, bukan sekadar tes — soal diambil dari bank soal per tema pertemuan, jumlah & pengacakan diatur guru dan sistem otomatis mengambil acak soal sesuai tema yang ditentukan.
6. **Penilaian mengikuti filosofi CPLF** — formatif 6 aspek per pertemuan, project + peer review, progress card capability (bukan hanya angka ujian).
7. **Ketahanan jaringan**: pengerjaan ujian di FE punya local storage (IndexedDB) sebagai fallback, auto-sync saat online kembali.
8. **Beban berat diproses async** (queue/background worker) agar BE tetap responsif; status dikembalikan bertahap dan dipush lewat WebSocket.
9. **Deploy tanpa Docker** — FE Vercel, BE + PostgreSQL + Redis native di VPS (hemat resource).

## 3. Struktur Dokumen Perencanaan

| No | Dokumen | Topik |
|----|---------|-------|
| 01 | [01_Arsitektur_Sistem.md](./01_Arsitektur_Sistem.md) | Arsitektur keseluruhan, tech stack, topologi deployment |
| 02 | [02_RBAC_IAM.md](./02_RBAC_IAM.md) | Role, permission matrix, auth flow |
| 03 | [03_Skema_Database.md](./03_Skema_Database.md) | ERD & deskripsi entitas |
| 04 | [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md) | Bank soal, setting ujian, pengacakan, statistik |
| 05 | [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md) | TensorFlow.js face verification |
| 06 | [06_Modul_Bulk_Import_Siswa.md](./06_Modul_Bulk_Import_Siswa.md) | Import CSV siswa |
| 07 | [07_Modul_Materi_Pembelajaran.md](./07_Modul_Materi_Pembelajaran.md) | Editor materi ala blog, code block, video embed |
| 08 | [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md) | Desain WebSocket & event realtime |
| 09 | [09_Modul_Ujian_Offline_First.md](./09_Modul_Ujian_Offline_First.md) | Local DB FE, auto-submit saat online |
| 10 | [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md) | Queue & worker pemrosesan jawaban |
| 11 | [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md) | Tracking waktu baca, scroll, kunjungan materi |
| 12 | [12_Modul_Profil_Siswa.md](./12_Modul_Profil_Siswa.md) | Profil siswa, re-enroll wajah, git url |
| 13 | [13_Struktur_Proyek.md](./13_Struktur_Proyek.md) | Struktur folder BE & FE |
| 14 | [14_API_Contract_Overview.md](./14_API_Contract_Overview.md) | Ringkasan endpoint REST |
| 15 | [15_Roadmap_Implementasi.md](./15_Roadmap_Implementasi.md) | Fase implementasi (MVP → lanjutan) |
| 16 | [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md) | Mapping 108 pertemuan CPLF → entitas app |
| 17 | [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md) | Penilaian formatif 6 aspek per pertemuan |
| 18 | [18_Modul_Penilaian_Project_Peer_Review.md](./18_Modul_Penilaian_Project_Peer_Review.md) | Project semester, DoD, peer review, etika AI |
| 19 | [19_Modul_Progress_Card_Capability.md](./19_Modul_Progress_Card_Capability.md) | Progress card capability per semester |
| 20 | [20_Modul_Portofolio_Siswa.md](./20_Modul_Portofolio_Siswa.md) | Portofolio 3 tahun & showcase |
| 21 | [21_Modul_Dashboard_Guru.md](./21_Modul_Dashboard_Guru.md) | Dashboard guru & admin |
| 22 | [22_Modul_Client_Ujian_Mobile_Desktop.md](./22_Modul_Client_Ujian_Mobile_Desktop.md) | Client ujian Electron/mobile + AI proctor |
| 23 | [23_Modul_Ekspresi_Siklus_Belajar.md](./23_Modul_Ekspresi_Siklus_Belajar.md) | Face + expression detection saat siklus belajar |
| 24 | [24_Modul_Editor_Kode_Siswa.md](./24_Modul_Editor_Kode_Siswa.md) | Monaco editor, sandbox eval, penyimpanan kode aman |
| 25 | [25_Modul_Notifikasi_Telegram.md](./25_Modul_Notifikasi_Telegram.md) | Push notif Telegram (siswa, guru, orang tua) |
| 26 | [26_Modul_Absensi_Face_Recognition.md](./26_Modul_Absensi_Face_Recognition.md) | Absensi masuk kelas via face recognition (kiosk) |
| 27 | [27_Dev_Todo_List_Per_Modul.md](./27_Dev_Todo_List_Per_Modul.md) | **Todo list dev per modul** (tracking sebelum coding) |

## 4. Ringkasan Tech Stack

| Layer | Teknologi |
|-------|-----------|
| BE Framework | NestJS (TypeScript) |
| BE ORM | Prisma (PostgreSQL) |
| Auth | JWT (access + refresh), httpOnly cookie |
| Queue/Worker | BullMQ + Redis |
| Notifikasi push | Telegram Bot API (gratis) + WebSocket in-app |
| Realtime | Socket.IO (NestJS Gateway) |
| FE Framework | Next.js (App Router, client-side only untuk data) |
| FE State/Data | React Query (TanStack Query) + Zustand |
| FE Local DB (offline) | Dexie.js (wrapper IndexedDB) |
| Face Verification | TensorFlow.js (`face-landmarks-detection` / `face-api.js`) di FE |
| Expression detect | face-api.js `FaceExpressions` (on-device, siklus belajar) |
| Client ujian | Electron + React Native (post-MVP) |
| Code execution | Browser sandbox (practice) + subprocess native VPS (ujian coding, tanpa Docker) |
| Deploy | FE **Vercel** · BE **VPS native** (PM2 + Nginx) · **no Docker** |
| Editor kode | Monaco Editor (+ CodeMirror 6 ringan untuk mobile) |
| Editor Materi | Tiptap / Editor.js (block-based) + Shiki/Prism untuk code block |
| File/CSV Import | Multer (BE) + PapaParse (FE preview) |

## 5. Peta Kebutuhan → Dokumen

| # | Kebutuhan dari User | Dokumen Terkait |
|---|----------------------|------------------|
| 1 | Folder `aplikasi` untuk aplikasi LMS | (folder ini) |
| 2 | BE NestJS / FE NextJS tanpa server component rawan | 01, 13 |
| 3 | Perbedaan akses guru & murid | 02 |
| 4 | RBAC/IAM | 02 |
| 5 | Guru buat soal per tema, bank soal, statistik | 04 |
| 6 | Soal diacak, jumlah soal disetup guru | 04 |
| 7 | Verifikasi wajah TF.js di FE, BE hanya validasi | 05 |
| 8 | Bulk import siswa CSV, password default = NIS | 06 |
| 9 | Menu input materi ala blog + code block + video embed | 07 |
| 10 | WebSocket update realtime | 08 |
| 11 | Local DB FE untuk submit ujian saat offline | 09 |
| 12 | Background processing jawaban ujian | 10 |
| 13 | Tracking aktivitas siswa pada materi | 11 |
| 14 | Profil siswa: verifikasi wajah, git url, dll | 12 |
| 15 | Penilaian formatif per pertemuan (6 aspek CPLF) | 17 |
| 16 | Penilaian project + peer review + etika AI | 18 |
| 17 | Progress card capability per semester | 19 |
| 18 | Portofolio 3 tahun siswa | 20 |
| 19 | Mapping 108 pertemuan CPLF ke tema app | 16 |
| 20 | Dashboard guru dengan alert & rekap | 21 |
| 21 | Client ujian secure (Electron/mobile) + proctor AI | 22 |
| 22 | Ekspresi wajah saat siklus belajar (trigger guru) | 23 |
| 22b | Kamera guru jika siswa tanpa device (resource minimal) | 23 §6 |
| 23 | Syarat ujian: kunjungan & baca materi (custom) | 04 §6, 11 |
| 24 | Role wali kelas — lihat nilai ujian semua mapel | 02 §4.1 |
| 25 | Editor kode siswa (Monaco, eval aman, autocomplete) | 24 |
| 26 | Push notifikasi Telegram (siswa/guru/orang tua) | 25 |
| 27 | Absensi masuk kelas face recognition (kiosk) | 26 |
| — | **Todo list dev & tracking progress** | **27** |
