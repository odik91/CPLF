# 03. Skema Database

> Menggunakan PostgreSQL + Prisma ORM. Skema di bawah bersifat konseptual (Prisma-like) untuk memudahkan translasi ke `schema.prisma` sesungguhnya.

## 1. ERD Ringkas (Grup Entitas)

```
[User] 1───< [UserRole] >───1 [Role] 1───< [RolePermission] >───1 [Permission]
  │
  ├──1:1──[ProfilSiswa] (jika role MURID)
  ├──1:1──[ProfilGuru]  (jika role GURU)
  ├──1:N──[FaceEmbedding]
  ├──1:N──[RefreshToken]
  └──1:N──[AuditLog]

[Kelas] 1───< [SiswaKelas] >───1 [User(MURID)]
[Kelas] 1───< [GuruMapelKelas] >───1 [User(GURU)] ── [Mapel]

[Mapel] 1───< [Tema] 1───< [Soal] >───N [PilihanJawaban]
[Tema] 1───< [Materi]

[Ujian] N───1 [Tema]     (ujian dibuat berdasarkan 1+ tema)
[Ujian] 1───< [UjianSoalSetting]   (jumlah soal per tema, dsb)
[Ujian] 1───< [UjianSesi] >───1 [User(MURID)]
[UjianSesi] 1───< [UjianSesiSoal] >───1 [Soal]  (paket soal teracak per siswa)
[UjianSesiSoal] 1───< [JawabanSiswa]

[Materi] 1───< [AktivitasMateri] >───1 [User(MURID)]
```

## 2. Entitas Inti IAM

```prisma
model User {
  id              String   @id @default(uuid())
  username        String   @unique   // NIS untuk murid, NIP/username untuk guru
  passwordHash    String
  mustChangePassword Boolean @default(true)
  nama            String
  email           String?  @unique
  fotoProfilUrl   String?
  status          UserStatus @default(ACTIVE) // ACTIVE, INACTIVE, SUSPENDED
  tokenVersion    Int      @default(0) // untuk invalidasi paksa token
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  roles           UserRole[]
  profilSiswa     ProfilSiswa?
  profilGuru      ProfilGuru?
  faceEmbeddings  FaceEmbedding[]
  refreshTokens   RefreshToken[]
}

model Role {
  id          String   @id @default(uuid())
  kode        String   @unique // SUPER_ADMIN, ADMIN, GURU, MURID
  nama        String
  users       UserRole[]
  permissions RolePermission[]
}

model Permission {
  id     String @id @default(uuid())
  kode   String @unique // resource:action, mis. bank_soal:create
  roles  RolePermission[]
}

model UserRole {
  userId String
  roleId String
  user   User @relation(fields: [userId], references: [id])
  role   Role @relation(fields: [roleId], references: [id])
  @@id([userId, roleId])
}

model RolePermission {
  roleId       String
  permissionId String
  role         Role       @relation(fields: [roleId], references: [id])
  permission   Permission @relation(fields: [permissionId], references: [id])
  @@id([roleId, permissionId])
}

model RefreshToken {
  id        String   @id @default(uuid())
  userId    String
  tokenHash String
  revoked   Boolean  @default(false)
  expiresAt DateTime
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
}
```

## 3. Profil & Face Verification

```prisma
model ProfilSiswa {
  id            String  @id @default(uuid())
  userId        String  @unique
  nis           String  @unique
  kelasId       String?
  urlGit        String?
  tanggalLahir  DateTime?
  alamat        String?
  namaOrangTua  String?
  kontakOrangTua String?
  user          User    @relation(fields: [userId], references: [id])
  kelas         Kelas?  @relation(fields: [kelasId], references: [id])
}

model ProfilGuru {
  id       String @id @default(uuid())
  userId   String @unique
  nip      String? @unique
  bidang   String?
  user     User   @relation(fields: [userId], references: [id])
}

model FaceEmbedding {
  id         String   @id @default(uuid())
  userId     String
  embedding  Float[]  // vektor descriptor wajah (mis. 128-d dari face-api.js)
  imageRefUrl String? // opsional simpan referensi foto enrollment (bukan wajib)
  isActive   Boolean  @default(true)
  createdAt  DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id])
}
```

## 4. Kelas, Mapel, Penugasan Guru

```prisma
model Kelas {
  id        String   @id @default(uuid())
  nama      String   // "X-A", "XI-IPA-2"
  tingkat   String   // "X", "XI", "XII"
  tahunAjaran String
  siswa     ProfilSiswa[]
  guruMapel GuruMapelKelas[]
}

model Mapel {
  id     String @id @default(uuid())
  nama   String // "Informatika"
  kode   String @unique
  temas  Tema[]
  guruMapel GuruMapelKelas[]
}

model GuruMapelKelas {
  id       String @id @default(uuid())
  guruId   String
  mapelId  String
  kelasId  String
  guru     User   @relation(fields: [guruId], references: [id])
  mapel    Mapel  @relation(fields: [mapelId], references: [id])
  kelas    Kelas  @relation(fields: [kelasId], references: [id])
  @@unique([guruId, mapelId, kelasId])
}
```

## 5. Tema, Materi, Bank Soal

```prisma
model Tema {
  id          String   @id @default(uuid())
  mapelId     String
  judul       String   // "Tema Pertemuan 3: Struktur Data Dasar"
  urutan      Int
  deskripsi   String?
  mapel       Mapel    @relation(fields: [mapelId], references: [id])
  materi      Materi[]
  soal        Soal[]
  ujian       Ujian[]
}

model Materi {
  id          String   @id @default(uuid())
  temaId      String
  judul       String
  slug        String   @unique
  contentJson Json     // struktur block-based content (lihat dok 07)
  status      MateriStatus @default(DRAFT) // DRAFT, PUBLISHED, ARCHIVED
  createdById String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  tema        Tema     @relation(fields: [temaId], references: [id])
  aktivitas   AktivitasMateri[]
}

model Soal {
  id             String   @id @default(uuid())
  temaId         String
  tipe           SoalTipe // PILIHAN_GANDA, ESAI_SINGKAT, BENAR_SALAH
  pertanyaan     String
  pertanyaanJson Json?    // rich content (kode, gambar) jika perlu
  tingkatKesulitan SoalTingkat @default(SEDANG) // MUDAH, SEDANG, SULIT
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

enum SoalTipe { PILIHAN_GANDA ESAI_SINGKAT BENAR_SALAH }
enum SoalTingkat { MUDAH SEDANG SULIT }
enum MateriStatus { DRAFT PUBLISHED ARCHIVED }
```

## 6. Ujian & Sesi Ujian (Random per Siswa)

```prisma
model Ujian {
  id              String   @id @default(uuid())
  judul           String
  temaId          String       // tema utama (bisa diperluas multi-tema di masa depan)
  kelasId         String
  jumlahSoal      Int          // disetup guru, mis. 5
  durasiMenit     Int
  waktuMulai      DateTime
  waktuSelesai    DateTime
  acakSoal        Boolean  @default(true)
  acakPilihan     Boolean  @default(true)
  wajibVerifikasiWajah Boolean @default(true)
  status          UjianStatus @default(DRAFT) // DRAFT, PUBLISHED, ONGOING, CLOSED
  createdById     String
  tema            Tema     @relation(fields: [temaId], references: [id])
  sesi            UjianSesi[]
}

model UjianSesi {
  id            String   @id @default(uuid())
  ujianId       String
  siswaId       String
  status        SesiStatus @default(BELUM_MULAI) // BELUM_MULAI, SEDANG_BERLANGSUNG, MENUNGGU_PROSES, SELESAI
  faceVerifiedAt DateTime?
  faceVerifyScore Float?
  waktuMulai    DateTime?
  waktuSubmit   DateTime?
  nilaiAkhir    Float?
  ujian         Ujian    @relation(fields: [ujianId], references: [id])
  siswa         User     @relation(fields: [siswaId], references: [id])
  soalTerpilih  UjianSesiSoal[]
  @@unique([ujianId, siswaId])
}

model UjianSesiSoal {
  id          String   @id @default(uuid())
  sesiId      String
  soalId      String
  urutanTampil Int
  pilihanUrutanJson Json? // urutan acak opsi jawaban khusus sesi ini
  sesi        UjianSesi @relation(fields: [sesiId], references: [id])
  soal        Soal      @relation(fields: [soalId], references: [id])
  jawaban     JawabanSiswa?
}

model JawabanSiswa {
  id             String   @id @default(uuid())
  sesiSoalId     String   @unique
  jawabanTeks    String?      // untuk esai
  pilihanJawabanId String?    // untuk pilihan ganda
  isBenar        Boolean?
  skor           Float?
  statusProses   ProsesStatus @default(PENDING) // PENDING, PROCESSING, DONE, FAILED
  submittedAt    DateTime @default(now())
  sesiSoal       UjianSesiSoal @relation(fields: [sesiSoalId], references: [id])
}

enum UjianStatus { DRAFT PUBLISHED ONGOING CLOSED }
enum SesiStatus { BELUM_MULAI SEDANG_BERLANGSUNG MENUNGGU_PROSES SELESAI }
enum ProsesStatus { PENDING PROCESSING DONE FAILED }
```

## 7. Tracking Aktivitas Materi

```prisma
model AktivitasMateri {
  id             String   @id @default(uuid())
  materiId       String
  siswaId        String
  kunjunganKe    Int      // increment tiap sesi kunjungan baru
  waktuMulaiBaca DateTime
  waktuAkhirBaca DateTime?
  totalDurasiDetik Int    @default(0)
  maxScrollPercent Float  @default(0) // 0-100, indikasi sudah baca sampai mana
  selesaiDibaca  Boolean  @default(false) // true jika maxScrollPercent >= threshold (mis. 90%)
  createdAt      DateTime @default(now())
  materi         Materi   @relation(fields: [materiId], references: [id])
  siswa          User     @relation(fields: [siswaId], references: [id])
}
```

> Detail event-level (scroll events granular per detik) dapat disimpan terpisah di tabel `AktivitasMateriEvent` (log mentah) jika dibutuhkan analitik lebih dalam, dengan `AktivitasMateri` sebagai agregat per kunjungan. Lihat [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md).

## 8. Audit Log

```prisma
model AuditLog {
  id         String   @id @default(uuid())
  userId     String?
  aksi       String   // "CREATE_SOAL", "BULK_IMPORT_SISWA", dst
  detailJson Json?
  ipAddress  String?
  createdAt  DateTime @default(now())
  user       User?    @relation(fields: [userId], references: [id])
}
```

## 9. Indexing & Pertimbangan Performa

- Index pada `Soal.temaId`, `Soal.isActive` (query bank soal per tema saat generate ujian).
- Index pada `UjianSesi.ujianId + siswaId` (unique, cepat lookup status sesi).
- Index pada `AktivitasMateri.materiId + siswaId` (statistik per siswa per materi).
- Partitioning/archival `AuditLog` & `AktivitasMateriEvent` bila data tumbuh besar (opsional, fase lanjutan).

## 10. Referensi Silang

- Bank soal & ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- Materi & content block → [07_Modul_Materi_Pembelajaran.md](./07_Modul_Materi_Pembelajaran.md)
- Tracking aktivitas → [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md)
