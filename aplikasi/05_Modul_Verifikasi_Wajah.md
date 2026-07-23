# 05. Modul Verifikasi Wajah

> Verifikasi wajah menggunakan **TensorFlow.js** di sisi FE. BE hanya menyimpan & memvalidasi data embedding, **tidak** melakukan inference.

## 1. Prinsip

- **Inference (deteksi & perbandingan wajah) dilakukan 100% di browser (FE)** menggunakan TensorFlow.js + model face-api.js (`@vladmandic/face-api` atau `face-landmarks-detection`).
- BE hanya:
  - Menyimpan **vektor embedding** (float array) hasil enrollment dari FE.
  - Menyediakan endpoint untuk **mengambil embedding referensi** siswa saat verifikasi.
  - Mencatat log verifikasi (timestamp, score, status lolos/tidak).
- Alasan: privasi data biometrik siswa — embedding tidak perlu dikirim bolak-balik untuk inference, cukup disimpan sebagai referensi.

## 2. Alur Enrollment (Pendaftaran Wajah)

```
Siswa → Menu Profil → "Daftarkan Wajah"
  │
  ├── FE akses kamera via getUserMedia()
  ├── FE load model face-api.js (dimuat sekali, cache di IndexedDB)
  ├── FE deteksi wajah → crop & align
  ├── FE ekstrak descriptor (embedding vector, mis. 128 angka float)
  ├── FE tampilkan preview & minta konfirmasi siswa
  └── POST /face/enrollment → kirim { embedding: Float32Array }
        │
        BE simpan ke tabel FaceEmbedding (userId, embedding, isActive=true)
        BE kembalikan { status: 'ok', embeddingId }
```

### 2.1 Endpoint Enrollment

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `POST /face/enrollment` | POST | `{ embedding: number[] }` | `{ id, status }` |
| `GET /face/enrollment` | GET | — | Daftar embedding aktif milik user |
| `DELETE /face/enrollment/:id` | DELETE | — | Hapus embedding tertentu |

### 2.2 Validasi BE

- BE hanya validasi: panjang array embedding sesuai (mis. 128), userId dari token cocok, tidak ada embedding aktif > N (mis. maks 3 per user).
- BE **tidak** melakukan perbandingan embedding — itu tugas FE.

## 3. Alur Verifikasi (Saat Ujian)

```
Siswa klik "Mulai Ujian" (jika wajibVerifikasiWajah=true)
  │
  ├── FE ambil embedding referensi: GET /face/reference
  │     BE kembalikan embedding aktif terbaru milik siswa
  │
  ├── FE akses kamera, deteksi wajah, ekstrak descriptor
  ├── FE bandingkan descriptor baru vs referensi (cosine similarity / Euclidean distance)
  │     threshold: mis. cosine similarity >= 0.6 (tuning nanti)
  │
  ├── Jika match:
  │     POST /face/verify → kirim { embeddingId, similarityScore }
  │     BE catat log: faceVerifiedAt, faceVerifyScore
  │     BE kembalikan { verified: true }
  │     → FE lanjut ke halaman ujian
  │
  └── Jika tidak match:
        FE tampilkan pesan "Wajah tidak cocok", beri kesempatan ulang (max 3x)
        Setelah 3x gagal, redirect ke halaman tunggu & notifikasi guru
```

### 3.1 Endpoint Verifikasi

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `GET /face/reference` | GET | — | `{ embeddingId, embedding }` (embedding referensi) |
| `POST /face/verify` | POST | `{ ujianSesiId, embeddingId, similarityScore }` | `{ verified: boolean }` |

### 3.2 Catatan Keamanan

- Embedding referensi dikirim ke FE saat verifikasi — ini risiko minimal karena embedding bukan foto asli dan tidak bisa direverse ke gambar wajah.
- Similarity score dikirim FE ke BE sebagai catatan audit, bukan sebagai keputusan final (keputusan final tetap di FE).
- Opsional: BE bisa menyimpan `faceVerifyScore` dan jika ada anomali (mis. score terlalu rendah tapi lolos), guru bisa review manual.

## 4. Model Face API (Rekomendasi)

| Model | Ukuran | Keterangan |
|-------|--------|------------|
| `@vladmandic/face-api` (SSD Mobilenet v1) | ~6 MB | Deteksi + landmark + descriptor 128-d |
| `face-landmarks-detection` (MediaPipe) | ~3 MB | Lebih ringan, tapi perlu pipeline sendiri untuk descriptor |

Rekomendasi: gunakan `@vladmandic/face-api` karena sudah include descriptor extraction siap pakai.

## 5. Error Handling

- Kamera tidak tersedia → fallback: verifikasi manual oleh guru (guru konfirmasi via password/scan QR).
- Model gagal load → retry 3x, jika tetap gagal fallback ke mode tanpa verifikasi (configurable per ujian).
- Wajah tidak terdeteksi (mis. pencahayaan buruk) → FE tampilkan tips perbaikan pencahayaan.

## 6. Referensi Silang

- Entitas `FaceEmbedding` → [03_Skema_Database.md](./03_Skema_Database.md)
- Alur ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- Profil siswa (enrollment) → [12_Modul_Profil_Siswa.md](./12_Modul_Profil_Siswa.md)
