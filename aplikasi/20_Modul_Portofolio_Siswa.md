# 20. Modul Portofolio Siswa

> Mencakup **portofolio 3 tahun** siswa: artefak project, link Git, narasi perjalanan, dan showcase akhir — selaras pertemuan P16 (XII) dan filosofi CPLF "bukti belajar".

## 1. Tujuan

- Siswa punya **satu halaman publik/semi-publik** (configurable) yang merangkum journey CPLF.
- Guru & orang tua melihat **bukti capability**, bukan hanya transkrip nilai.
- Mendukung pertemuan **XII-S6-P16 Portofolio 3 Tahun** dan **P17 Showcase Akhir**.

## 2. Komponen Portofolio

| Komponen | Sumber data app | Wajib |
|----------|-----------------|-------|
| Profil singkat | `ProfilSiswa` + foto | ✅ |
| URL Git utama | `ProfilSiswa.urlGit` | Disarankan XI+ |
| Daftar project | `ProjectSubmission` FINAL | ✅ |
| Progress card per semester | `ProgressCard` FINAL | ✅ (6 semester) |
| Ujian refleksi highlight | Top 3 tema dengan narasi | Opsional |
| Narasi journey | Input siswa (markdown) | ✅ XII |
| Screenshot/demo embed | `ProjectSubmission.artefakJson` | Per project |

## 3. Model Data

```prisma
model PortofolioSiswa {
  id              String   @id @default(uuid())
  siswaId         String   @unique
  slug            String   @unique  // nama-siswa-xii-a (untuk URL share)
  judul           String   @default("Portofolio CPLF")
  narasiJourney   String?  // markdown — diisi siswa
  visibilitas     PortofolioVisibilitas @default(PRIVATE)
  featuredProjectIds String[]  // urutan tampil
  customSections  Json?    // blok tambahan: sertifikat, pengalaman, dll
  publishedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  siswa           User     @relation(...)
}

enum PortofolioVisibilitas {
  PRIVATE       // hanya siswa + guru + admin
  KELAS         // teman sekelas + guru
  SEKOLAH       // semua user login madrasah
  PUBLIK        // bisa diakses tanpa login (hanya metadata non-sensitif)
}
```

Portofolio **tidak duplikasi** data project/progress card — hanya **view agregat** + narasi siswa.

## 4. Alur Siswa (Kelas XII)

```
Pertemuan P16 — Portofolio 3 Tahun
  │
  ├── Siswa buka /portofolio/edit
  │     ├── Preview auto-generated dari data 3 tahun
  │     ├── Tulis narasiJourney (template guiding questions)
  │     ├── Pilih 3–5 project featured
  │     └── Set visibilitas (default: KELAS)
  │
  ├── Guru review draft
  │
  └── Publish → link share untuk showcase P17
```

### 4.1 Guiding Questions Narasi (dari modul CPLF)

1. Masalah apa yang paling mengubah cara berpikirmu?
2. Capability mana yang paling tumbuh? Bukti apa?
3. Satu kegagalan yang mengajarimu sesuatu?
4. Bagaimana AI/media sosial mempengaruhi cara belajarmu?
5. Apa yang ingin kamu pelajari setelah lulus?

## 5. API Endpoints

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| GET | `/portofolio/saya` | MURID | Portofolio + agregat data |
| PATCH | `/portofolio/saya` | MURID | Update narasi, featured, visibilitas |
| POST | `/portofolio/saya/publish` | MURID | Publish (guru approve opsional) |
| GET | `/portofolio/:slug` | Scoped by visibilitas | View portofolio |
| GET | `/portofolio/siswa/:siswaId` | GURU scoped | View by siswa id |

### 5.1 Response Agregat `GET /portofolio/saya`

```json
{
  "data": {
    "portofolio": { "narasiJourney": "...", "visibilitas": "KELAS" },
    "profil": { "nama": "...", "urlGit": "...", "fotoProfilUrl": "..." },
    "projects": [{ "kode": "PRJ-X-S1-01", "judul": "...", "urlDemo": "..." }],
    "progressCards": [{ "semester": 1, "tingkat": "X", "items": [...] }],
    "stats": {
      "totalProject": 12,
      "totalUjianRefleksi": 45,
      "rataPartisipasiMateri": 87
    }
  }
}
```

## 6. UI FE

### 6.1 Mode Edit (Siswa)

- Split view: editor narasi (markdown) + live preview
- Drag-drop urutan featured project
- Toggle visibilitas dengan penjelasan siapa yang bisa lihat

### 6.2 Mode View (Publik/Kelas)

- Hero: nama, foto, tagline narasi pertama
- Timeline semester 1→6 dengan capability highlight
- Grid project cards dengan link demo/Git
- **Tidak menampilkan**: nilai ujian detail, data wajah, NIS penuh (privacy)

## 7. Showcase Akhir (P17)

Guru bisa generate **daftar link portofolio** kelas untuk sesi presentasi:

```
GET /portofolio/kelas/:kelasId/showcase-list
→ [{ nama, slug, featuredProject, publishedAt }]
```

Mode presentasi: fullscreen carousel di proyektor (FE route `/showcase/:kelasId`).

## 8. Privacy & Keamanan

| Data | PUBLIK | KELAS | PRIVATE |
|------|--------|-------|---------|
| Nama + foto | ✅ | ✅ | ✅ |
| Narasi journey | ✅ | ✅ | ✅ |
| Link demo project | ✅ | ✅ | ✅ |
| URL Git | ✅ | ✅ | ✅ |
| Progress card detail | Ringkas | Full | Full |
| Skor ujian | ❌ | ❌ | ✅ (siswa sendiri) |
| NIS / kontak ortu | ❌ | ❌ | ✅ |

Default visibilitas: `PRIVATE` sampai siswa X; `KELAS` disarankan saat showcase XII.

## 9. Referensi Silang

- Profil siswa → [12_Modul_Profil_Siswa.md](./12_Modul_Profil_Siswa.md)
- Project → [18_Modul_Penilaian_Project_Peer_Review.md](./18_Modul_Penilaian_Project_Peer_Review.md)
- Progress card → [19_Modul_Progress_Card_Capability.md](./19_Modul_Progress_Card_Capability.md)
- Modul P16/P17 → [06-modules/kelas-xii/semester-6](../06-modules/kelas-xii/semester-6/)
