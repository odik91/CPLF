# 04. Modul Bank Soal & Ujian

> Mencakup kebutuhan: guru membuat soal per tema pertemuan → bank soal & jawaban → setup ujian → pengacakan soal & pilihan → statistik untuk guru & siswa.

## 1. Alur Bisnis

```
Guru login
  │
  ├── Pilih Mapel → Pilih Tema → CRUD Soal (bank soal)
  │     (setiap soal: tipe, pertanyaan, pilihan jawaban, tingkat kesulitan, tags)
  │
  └── Buat Ujian Baru
        ├── Pilih Tema (1 tema per ujian untuk MVP, bisa diperluas multi-tema)
        ├── Tentukan jumlah soal (mis. 5 dari total bank soal tema tsb)
        ├── Tentukan durasi, waktu mulai-selesai
        ├── Toggle: acak soal? acak pilihan? wajib verifikasi wajah?
        └── Publish → sistem generate UjianSesi per siswa (paket soal acak)

Siswa login
  │
  ├── Lihat daftar ujian aktif (yang sudah dipublish & waktunya sesuai)
  ├── Verifikasi wajah (jika diwajibkan)
  ├── Kerjakan ujian (soal & pilihan sudah diacak per sesi)
  └── Submit → status "MENUNGGU_PROSES" → background worker proses scoring

Guru lihat statistik
  ├── Per ujian: distribusi nilai, rata-rata, siswa per status
  ├── Per soal: berapa siswa menjawab benar/salah (analisis butir soal)
  └── Per siswa: riwayat ujian, perkembangan nilai
```

## 2. Bank Soal

### 2.1 Struktur Data (dari 03_Skema_Database.md)

```prisma
model Soal {
  id             String   @id @default(uuid())
  temaId         String
  tipe           SoalTipe // PILIHAN_GANDA, ESAI_SINGKAT, BENAR_SALAH
  pertanyaan     String
  pertanyaanJson Json?    // rich content (kode, gambar) jika perlu
  tingkatKesulitan SoalTingkat @default(SEDANG)
  tags           String[]
  createdById    String
  isActive       Boolean  @default(true)
  createdAt      DateTime @default(now())
  tema           Tema     @relation(fields: [temaId], references: [id])
  pilihan        PilihanJawaban[]
  sesiSoal       UjianSesiSoal[]
}

model PilihanJawaban {
  id        String  @id @default(uuid())
  soalId    String
  teks      String
  isBenar   Boolean @default(false)
  urutan    Int
  soal      Soal    @relation(fields: [soalId], references: [id])
}
```

### 2.2 Fitur CRUD Bank Soal

| Fitur | Endpoint | Role |
|-------|----------|------|
| List soal per tema (dengan filter tipe, tingkat, tags) | `GET /bank-soal?temaId=&tipe=&tingkat=` | GURU (scoped mapelnya) |
| Detail soal + pilihan jawaban | `GET /bank-soal/:id` | GURU (miliknya) |
| Buat soal baru (dengan pilihan jawaban) | `POST /bank-soal` | GURU |
| Update soal | `PATCH /bank-soal/:id` | GURU (miliknya) |
| Soft-delete (isActive=false) | `DELETE /bank-soal/:id` | GURU (miliknya) |
| Import soal dari JSON/CSV (bulk) | `POST /bank-soal/import` | GURU |

### 2.3 Validasi Input

- Soal tipe `PILIHAN_GANDA`: minimal 2 pilihan, tepat 1 pilihan `isBenar=true`.
- Soal tipe `BENAR_SALAH`: otomatis 2 pilihan (Benar/Salah), 1 `isBenar=true`.
- Soal tipe `ESAI_SINGKAT`: tidak perlu pilihan jawaban, jawaban siswa dibandingkan secara fuzzy/pattern matching (atau dikoreksi manual guru via menu koreksi).
- `pertanyaanJson` opsional: jika soal mengandung kode, gambar, atau format rich text, disimpan sebagai JSON block (sama format dengan content materi di dok 07).

## 3. Setup Ujian

### 3.1 Struktur Data

```prisma
model Ujian {
  id              String   @id @default(uuid())
  judul           String
  temaId          String
  kelasId         String
  jumlahSoal      Int          // berapa soal yang akan diambil dari bank soal tema ini
  durasiMenit     Int
  waktuMulai      DateTime
  waktuSelesai    DateTime
  acakSoal        Boolean  @default(true)
  acakPilihan     Boolean  @default(true)
  wajibVerifikasiWajah Boolean @default(true)
  status          UjianStatus @default(DRAFT)
  createdById     String
  tema            Tema     @relation(fields: [temaId], references: [id])
  sesi            UjianSesi[]
}
```

### 3.2 Alur Generate Ujian

1. Guru setup ujian: pilih tema, tentukan `jumlahSoal`, durasi, waktu, toggle pengaturan.
2. Guru klik **Publish**.
3. Sistem melakukan:
   a. Validasi: bank soal untuk tema tersebut memiliki `isActive=true` minimal `jumlahSoal` buah.
   b. Untuk setiap siswa di kelas tersebut:
      - Ambil `jumlahSoal` soal secara **acak** dari bank soal tema (tanpa duplikasi per sesi).
      - Buat `UjianSesi` dengan status `BELUM_MULAI`.
      - Buat `UjianSesiSoal` untuk setiap soal terpilih, dengan `urutanTampil` diacak.
      - Jika `acakPilihan=true`, acak urutan pilihan jawaban per sesi soal, simpan di `pilihanUrutanJson`.
   c. Ubah status ujian menjadi `PUBLISHED` (atau `ONGOING` jika waktuMulai sudah terlewati).
4. Jika ada siswa baru ditambahkan setelah ujian dipublish, guru bisa **Regenerate** untuk siswa tertentu (hanya yang belum punya sesi).

### 3.3 Pengacakan Detail

- **Acak Soal**: dari N soal aktif di bank soal tema, pilih M secara random (M = `jumlahSoal`). Setiap siswa mendapat subset soal yang **berbeda** (tidak harus sama semua siswa). Ini mencegah siswa bertanya "soal nomor 1 apa?" ke teman.
- **Acak Urutan Tampil**: M soal yang terpilih diurutkan secara acak per sesi (urutan soal siswa A ≠ siswa B).
- **Acak Pilihan**: untuk tipe PILIHAN_GANDA, urutan opsi jawaban diacak per sesi soal. Disimpan di `pilihanUrutanJson` sebagai array ID pilihan dalam urutan tampil.

### 3.4 Fitur CRUD Ujian

| Fitur | Endpoint | Role |
|-------|----------|------|
| List ujian (draft/published/ongoing/closed) | `GET /ujian?kelasId=&status=` | GURU (kelasnya) |
| Detail ujian + statistik ringkas | `GET /ujian/:id` | GURU |
| Buat ujian baru (draft) | `POST /ujian` | GURU |
| Update setting ujian (selama masih draft) | `PATCH /ujian/:id` | GURU |
| Publish ujian (trigger generate sesi) | `POST /ujian/:id/publish` | GURU |
| Tutup ujian (paksa selesai) | `POST /ujian/:id/close` | GURU |
| Regenerate sesi untuk siswa tertentu | `POST /ujian/:id/regenerate-sesi` | GURU |
| Hapus ujian (hanya draft) | `DELETE /ujian/:id` | GURU |

## 4. Pengerjaan Ujian (Sisi Siswa)

### 4.1 Alur

1. Siswa buka menu Ujian → lihat daftar ujian aktif (waktu sekarang di antara `waktuMulai` dan `waktuSelesai`, status `PUBLISHED`/`ONGOING`).
2. Klik "Mulai Ujian":
   - Jika `wajibVerifikasiWajah=true`, redirect ke halaman verifikasi wajah (lihat dok 05).
   - Setelah lolos verifikasi, `UjianSesi.status` → `SEDANG_BERLANGSUNG`, `waktuMulai` dicatat.
3. Siswa mengerjakan soal satu per satu (atau grid navigasi).
4. Setiap jawaban disimpan ke **local DB (IndexedDB)** terlebih dahulu (lihat dok 09).
5. Saat submit (atau waktu habis):
   - FE kirim batch jawaban ke `POST /ujian/:id/submit`.
   - BE terima, simpan `JawabanSiswa` dengan `statusProses=PENDING`, ubah `UjianSesi.status` → `MENUNGGU_PROSES`.
   - BE masukkan job ke BullMQ queue untuk scoring.
   - BE kembalikan response cepat: `{ status: 'MENUNGGU_PROSES', message: 'Jawaban diterima, sedang diproses' }`.
6. Setelah worker selesai scoring, `UjianSesi.status` → `SELESAI`, `nilaiAkhir` terisi.
7. Jika siswa masih online, WebSocket push event `ujian:selesai` dengan data nilai (lihat dok 08).

### 4.2 Endpoint

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `/ujian/aktif` | GET | Daftar ujian aktif untuk siswa (berdasarkan kelas & waktu) |
| `/ujian/:id/mulai` | POST | Mulai sesi ujian (setelah verifikasi wajah) |
| `/ujian/:id/soal` | GET | Ambil daftar soal untuk sesi ini (sudah diacak) |
| `/ujian/:id/submit` | POST | Submit batch jawaban (masuk queue) |
| `/ujian/:id/hasil` | GET | Lihat hasil ujian (setelah selesai diproses) |

## 5. Statistik

### 5.1 Statistik untuk Guru

| Fitur | Deskripsi |
|-------|-----------|
| Ringkasan per ujian | Jumlah peserta, rata-rata nilai, nilai tertinggi/terendah, distribusi nilai (chart) |
| Detail per siswa | Nilai, waktu pengerjaan, jawaban per soal |
| Analisis butir soal | Per soal: berapa siswa menjawab benar, berapa salah, indeks kesukaran, daya pembeda |
| Riwayat per tema | Rata-rata nilai ujian dari waktu ke waktu untuk tema tertentu |
| Export CSV/Excel | Download data statistik untuk diolah lebih lanjut |

### 5.2 Statistik untuk Siswa

| Fitur | Deskripsi |
|-------|-----------|
| Riwayat ujian | Daftar ujian yang sudah dikerjakan, nilai, tanggal |
| Detail hasil | Jawaban benar/salah per soal, pembahasan (jika guru mengaktifkan) |
| Perkembangan | Grafik nilai dari waktu ke waktu (per tema) |

### 5.3 Endpoint Statistik

| Endpoint | Method | Role |
|----------|--------|------|
| `GET /statistik/ujian/:id` | GET | GURU (kelasnya) |
| `GET /statistik/ujian/:id/siswa/:siswaId` | GET | GURU |
| `GET /statistik/soal/:soalId` | GET | GURU (miliknya) |
| `GET /statistik/siswa/riwayat` | GET | MURID (diri sendiri) |
| `GET /statistik/siswa/perkembangan` | GET | MURID (diri sendiri) |
| `GET /statistik/export/ujian/:id` | GET | GURU (download CSV) |

## 6. Background Processing Scoring

> Detail lebih lanjut di [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md).

Secara ringkas:

1. `POST /ujian/:id/submit` → simpan jawaban → enqueue job `score-ujian-sesi` ke BullMQ.
2. Worker `ScoreUjianSesi`:
   - Untuk setiap `JawabanSiswa` dalam sesi:
     - PILIHAN_GANDA / BENAR_SALAH: cocokkan `pilihanJawabanId` dengan `PilihanJawaban.isBenar`.
     - ESAI_SINGKAT: cocokkan dengan pattern matching sederhana (atau flagged untuk koreksi manual guru).
   - Hitung `nilaiAkhir` = (jumlah benar / total soal) × 100.
   - Update `JawabanSiswa.isBenar`, `JawabanSiswa.skor`, `JawabanSiswa.statusProses = DONE`.
   - Update `UjianSesi.nilaiAkhir`, `UjianSesi.status = SELESAI`.
3. Setelah selesai, emit event via WebSocket ke siswa (jika online).

## 7. Referensi Silang

- Entitas database → [03_Skema_Database.md](./03_Skema_Database.md)
- Verifikasi wajah → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Offline-first submit → [09_Modul_Ujian_Offline_First.md](./09_Modul_Ujian_Offline_First.md)
- Background processing → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
- WebSocket → [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md)
