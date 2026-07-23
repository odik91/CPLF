# 12. Modul Profil Siswa

> Mencakup kebutuhan: pendaftaran/pembaruan verifikasi wajah, URL git, dan informasi lainnya yang diperlukan.

## 1. Fitur Profil Siswa

| Fitur | Deskripsi | Akses |
|-------|-----------|-------|
| Lihat profil | Informasi diri: NIS, nama, kelas, foto, URL git, tanggal lahir, alamat, kontak orang tua | MURID (diri sendiri), GURU (kelasnya) |
| Edit profil | Update: foto profil, URL git, tanggal lahir, alamat, nama/kontak orang tua | MURID (diri sendiri) |
| Ganti password | Ubah password (wajib saat login pertama jika `mustChangePassword = true`) | MURID (diri sendiri) |
| Registrasi wajah | Enrollment/pembaruan face embedding | MURID (diri sendiri) |
| Lihat aktivitas | Riwayat tracking materi & hasil ujian | MURID (diri sendiri) |

## 2. Endpoint Profil

| Endpoint | Method | Body | Deskripsi |
|----------|--------|------|-----------|
| `GET /profil/saya` | GET | — | Ambil data profil siswa lengkap |
| `PATCH /profil/saya` | PATCH | `{ urlGit?, tanggalLahir?, alamat?, namaOrangTua?, kontakOrangTua?, fotoProfilUrl? }` | Update profil |
| `PATCH /profil/saya/password` | PATCH | `{ passwordLama, passwordBaru }` | Ganti password |
| `POST /profil/saya/foto` | POST | multipart (file gambar) | Upload foto profil |
| `GET /profil/saya/aktivitas` | GET | — | Riwayat aktivitas (materi + ujian) |

## 3. Alur Registrasi Wajah

Lihat [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md) untuk detail enrollment & verifikasi.

## 4. URL Git

- Siswa bisa mencantumkan URL profil GitHub/GitLab/Bitbucket.
- Guru bisa melihat URL git siswa untuk evaluasi portofolio coding.
- Validasi: URL harus diawali `https://github.com/`, `https://gitlab.com/`, atau `https://bitbucket.org/`.

## 5. Foto Profil

- Upload via `POST /profil/saya/foto` (multipart).
- BE simpan ke S3-compatible storage, simpan URL di `User.fotoProfilUrl`.
- Ukuran maks: 2MB. Tipe: jpg, png, webp.
- Foto di-resize ke 256x256 px oleh BE (menggunakan Sharp).

## 6. Ganti Password

- Saat login pertama (`mustChangePassword = true`), siswa diarahkan ke halaman ganti password.
- Endpoint `PATCH /profil/saya/password`:
  - Validasi `passwordLama` cocok dengan hash di DB.
  - Hash `passwordBaru` (argon2/bcrypt).
  - Set `mustChangePassword = false`.
  - Invalidasi semua refresh token (increment `tokenVersion`) → siswa harus login ulang.
- Validasi password: minimal 8 karakter, mengandung huruf & angka.

## 7. Referensi Silang

- Entitas `ProfilSiswa`, `User` → [03_Skema_Database.md](./03_Skema_Database.md)
- Verifikasi wajah → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Aktivitas siswa → [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md)
