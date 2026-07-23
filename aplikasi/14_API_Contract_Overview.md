# 14. Ringkasan API Contract

> Overview endpoint REST utama. Detail request/response body ada di dokumen masing-masing modul.

## 1. Autentikasi

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| POST | `/auth/login` | No | Login, set cookie access+refresh token |
| POST | `/auth/refresh` | Refresh | Refresh access token |
| POST | `/auth/logout` | Yes | Logout, hapus cookie |
| GET | `/auth/me` | Yes | Ambil data user saat ini |

## 2. User & IAM

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/user` | `user:read` | List user (filter role/kelas) |
| GET | `/user/:id` | `user:read` | Detail user |
| POST | `/user` | `user:create` | Buat user baru |
| PATCH | `/user/:id` | `user:update` | Update user |
| DELETE | `/user/:id` | `user:delete` | Soft-delete user |
| POST | `/user/import-siswa` | `user:bulk_import` | Import CSV siswa |
| GET | `/user/import-status/:jobId` | `user:bulk_import` | Status import |
| GET | `/user/import-template` | `user:bulk_import` | Download template CSV |
| GET | `/iam/roles` | `role:manage` | List role |
| GET | `/iam/permissions` | `role:manage` | List permission |
| POST | `/iam/roles` | `role:manage` | Buat role |
| PATCH | `/iam/roles/:id/permissions` | `role:manage` | Update permission role |

## 3. Kelas & Mapel

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/kelas` | `kelas:read` | List kelas (guru: kelasnya, admin: semua) |
| POST | `/kelas` | `kelas:manage` | Buat kelas |
| PATCH | `/kelas/:id` | `kelas:manage` | Update kelas |
| DELETE | `/kelas/:id` | `kelas:manage` | Hapus kelas |
| GET | `/mapel` | `kelas:read` | List mapel |
| POST | `/mapel` | `kelas:manage` | Buat mapel |
| GET | `/tema?mapelId=` | `materi:read` | List tema per mapel |
| POST | `/tema` | `materi:create` | Buat tema |

## 4. Materi

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/materi?temaId=` | `materi:read` | List materi per tema |
| GET | `/materi/:slug` | `materi:read` | Detail materi (contentJson) |
| POST | `/materi` | `materi:create` | Buat materi (draft) |
| PATCH | `/materi/:id` | `materi:update` | Update materi |
| POST | `/materi/:id/publish` | `materi:publish` | Publish materi |
| POST | `/materi/:id/archive` | `materi:archive` | Archive materi |
| DELETE | `/materi/:id` | `materi:delete` | Hapus materi (draft only) |
| POST | `/materi/upload-gambar` | `materi:update` | Upload gambar ke S3 |

## 5. Bank Soal

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/bank-soal?temaId=` | `bank_soal:read` | List soal |
| GET | `/bank-soal/:id` | `bank_soal:read` | Detail soal + pilihan |
| POST | `/bank-soal` | `bank_soal:create` | Buat soal + pilihan |
| PATCH | `/bank-soal/:id` | `bank_soal:update` | Update soal |
| DELETE | `/bank-soal/:id` | `bank_soal:delete` | Soft-delete soal |
| POST | `/bank-soal/import` | `bank_soal:create` | Import soal bulk |

## 6. Ujian

| Method | Endpoint | Permission / Role | Deskripsi |
|--------|----------|--------------------|-----------|
| GET | `/ujian?kelasId=&status=` | `ujian:read` (GURU) | List ujian |
| GET | `/ujian/:id` | `ujian:read` | Detail ujian + statistik |
| POST | `/ujian` | `ujian:create` | Buat ujian (draft) |
| PATCH | `/ujian/:id` | `ujian:update` | Update setting (draft only) |
| POST | `/ujian/:id/publish` | `ujian:publish` | Publish & generate sesi |
| POST | `/ujian/:id/close` | `ujian:update` | Tutup ujian paksa |
| DELETE | `/ujian/:id` | `ujian:delete` | Hapus ujian (draft only) |
| GET | `/ujian/aktif` | MURID | Daftar ujian aktif |
| POST | `/ujian/:id/mulai` | MURID | Mulai sesi ujian |
| GET | `/ujian/:id/soal` | MURID | Ambil soal sesi |
| POST | `/ujian/:id/submit` | MURID | Submit batch jawaban |
| POST | `/ujian/:id/submit-satu` | MURID | Submit satu jawaban |
| GET | `/ujian/:id/hasil` | MURID | Hasil ujian (setelah SELESAI) |

## 7. Face Verification

| Method | Endpoint | Role | Deskripsi |
|--------|----------|------|-----------|
| POST | `/face/enrollment` | MURID | Simpan embedding wajah |
| GET | `/face/enrollment` | MURID | Daftar embedding milik user |
| DELETE | `/face/enrollment/:id` | MURID | Hapus embedding |
| GET | `/face/reference` | MURID | Ambil embedding referensi untuk verifikasi |
| POST | `/face/verify` | MURID | Catat log verifikasi wajah |

## 8. Tracking Aktivitas

| Method | Endpoint | Role | Deskripsi |
|--------|----------|------|-----------|
| POST | `/aktivitas/kunjungan` | MURID | Count kunjungan materi |
| POST | `/aktivitas/heartbeat` | MURID | Update periodik durasi & scroll |
| POST | `/aktivitas/leave` | MURID | Final update saat leave |

## 9. Statistik

| Method | Endpoint | Role | Deskripsi |
|--------|----------|------|-----------|
| GET | `/statistik/ujian/:id` | GURU | Statistik per ujian |
| GET | `/statistik/ujian/:id/siswa/:siswaId` | GURU | Detail siswa dalam ujian |
| GET | `/statistik/soal/:soalId` | GURU | Analisis butir soal |
| GET | `/statistik/siswa/riwayat` | MURID | Riwayat ujian saya |
| GET | `/statistik/siswa/perkembangan` | MURID | Grafik perkembangan nilai |
| GET | `/statistik/export/ujian/:id` | GURU | Download CSV statistik |
| GET | `/statistik/aktivitas/materi/:materiId` | GURU | Statistik aktivitas per materi |
| GET | `/statistik/aktivitas/siswa/:siswaId` | GURU | Riwayat aktivitas siswa |
| GET | `/statistik/aktivitas/saya` | MURID | Aktivitas saya |
| GET | `/statistik/aktivitas/kelas/:kelasId/rekap` | GURU | Rekap aktivitas kelas |

## 10. Profil

| Method | Endpoint | Role | Deskripsi |
|--------|----------|------|-----------|
| GET | `/profil/saya` | All | Ambil profil sendiri |
| PATCH | `/profil/saya` | All | Update profil |
| PATCH | `/profil/saya/password` | All | Ganti password |
| POST | `/profil/saya/foto` | All | Upload foto profil |
| GET | `/profil/saya/aktivitas` | All | Riwayat aktivitas |

## 11. Catatan Umum

- **Base URL**: `https://api.cplf.example.com/api/v1`
- **Auth**: httpOnly cookie (`access_token` + `refresh_token`), credentials: 'include'
- **Response format**: `{ data: ..., meta?: { page, total }, message?: string }`
- **Error format**: `{ statusCode, message, error: string }` (NestJS default)
- **Rate limit**: 100 req/min per user (umum), 10 req/min untuk login
- **Swagger**: `GET /api/docs` (hanya di development/staging)
