# 06. Modul Bulk Import Siswa (CSV)

## 1. Tujuan

Admin / Guru (dengan permission `user:bulk_import`) dapat menambahkan puluhan hingga ratusan siswa sekaligus melalui file CSV. Password default setiap siswa = **NIS** (di-hash oleh BE).

## 2. Format CSV

File CSV harus memiliki header sebagai berikut (contoh):

```csv
nis,nama,kelas,tanggal_lahir,alamat,nama_orang_tua,kontak_orang_tua
2024001,Andi Pratama,X-A,2008-05-12,Jl. Merdeka No.10,Andi Supriyono,081234567890
2024002,Siti Nurhaliza,X-A,2008-08-22,Jl. Sudirman No.5,Siti Aminah,081298765432
2024003,Budi Santoso,X-B,2008-01-15,Jl. Diponegoro No.3,Budi Hartono,081112223334
```

| Kolom | Wajib | Keterangan |
|-------|-------|------------|
| `nis` | ✅ | Unique identifier siswa, akan jadi `username` di tabel User |
| `nama` | ✅ | Nama lengkap siswa |
| `kelas` | ✅ | Nama kelas (harus sudah ada di DB atau akan dibuat otomatis) |
| `tanggal_lahir` | ❌ | Format ISO (YYYY-MM-DD) |
| `alamat` | ❌ | Alamat rumah |
| `nama_orang_tua` | ❌ | Nama orang tua/wali |
| `kontak_orang_tua` | ❌ | Nomor telepon orang tua |

## 3. Alur Import

### 3.1 Upload & Preview

1. Admin/guru buka menu "Import Siswa" → pilih file CSV.
2. FE parsing CSV menggunakan **PapaParse** (client-side) → tampilkan **preview** (10 baris pertama) + jumlah data + validasi awal (kolom wajib ada, NIS unik dalam file).
3. Admin/guru konfirmasi: "Import {jumlah} siswa?"
4. FE kirim file CSV (atau JSON hasil parsing) ke BE.

### 3.2 Backend Processing

**Opsi A (sync, untuk jumlah kecil < 50 siswa):**
- `POST /user/import-siswa` → BE parsing & insert langsung.
- Response: `{ imported: 45, skipped: 2, errors: [{ row: 3, reason: 'NIS already exists' }] }`.

**Opsi B (async via queue, untuk jumlah besar ≥ 50 siswa — direkomendasikan):**
- `POST /user/import-siswa` → BE simpan file ke storage sementara → enqueue job `import-siswa-csv` ke BullMQ.
- Response cepat: `{ status: 'PROCESSING', jobId: '...' }`.
- FE poll status via `GET /user/import-status/:jobId` atau via WebSocket event `import:progress`.
- Worker `ImportSiswaCsv`:
  - Parsing file CSV.
  - Batch insert per 50 siswa.
  - Untuk setiap baris:
    - Validasi: NIS unique (di DB), kelas exists (atau auto-create jika config diaktifkan).
    - Buat User: `username = nis`, `passwordHash = hash(nis)`, `mustChangePassword = true`.
    - Buat ProfilSiswa: relasi ke kelas.
    - Assign role MURID.
  - Update progress di Redis (jumlah sukses, gagal, total).
  - Jika selesai, emit WebSocket event `import:done`.

### 3.3 Endpoint

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `POST /user/import-siswa` | POST | Upload file CSV (multipart) atau json array |
| `GET /user/import-status/:jobId` | GET | Cek status progress import (sync version) |
| `GET /user/import-template` | GET | Download template CSV kosong |

### 3.4 Validasi BE

| Skenario | Penanganan |
|----------|------------|
| NIS sudah terdaftar | Skip (log error), lanjut ke baris berikutnya |
| Kelas tidak ditemukan | Jika config `autoCreateKelas=true`, buat kelas baru. Jika `false`, skip & log |
| Format NIS tidak valid | Skip (mis. berisi huruf) |
| Baris kosong | Skip silent |
| File terlalu besar (> 5MB) | Tolak dengan error |

### 3.5 Security

- Hanya user dengan permission `user:bulk_import` yang bisa mengakses.
- File CSV hanya disimpan sementara (temp) dan dihapus setelah selesai diproses.
- Password default (NIS) bersifat sementara — siswa wajib ganti password saat login pertama (`mustChangePassword = true`).

## 4. Download Template

`GET /user/import-template` mengembalikan file CSV dengan header saja dan 1 baris contoh (dikomentari) untuk panduan.

## 5. Referensi Silang

- Entitas `User` & `ProfilSiswa` → [03_Skema_Database.md](./03_Skema_Database.md)
- Permission `user:bulk_import` → [02_RBAC_IAM.md](./02_RBAC_IAM.md)
- Background processing → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
