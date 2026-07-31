# 18. Modul Penilaian Project & Peer Review

> Mencakup penilaian **project semester/mini/nilai** (6 aspek + DoD) dan **peer review** (XI+) — selaras [09_Rubrik_Project.md](../09-rubrik/09_Rubrik_Project.md), [09_Rubrik_Peer_Review.md](../09-rubrik/09_Rubrik_Peer_Review.md), dan [08_Project_Bank_Index.md](../08-project/08_Project_Bank_Index.md).

## 1. Alur Bisnis

```
Admin/Guru assign Project Semester ke Kelas
  │   (dari Project Bank: PRJ-X-S1-01, PRJ-XI-S4-04, dll)
  │
  ├── Siswa (individu/tim) submit artefak:
  │     url demo, url repo Git, README, screenshot, narasi reasoning
  │
  ├── (XI+) Peer Review antar siswa — 2 pujian + 2 saran
  │     Reviewee wajib 1 revisi terdokumentasi
  │
  ├── Guru cek Definition of Done (gate)
  │     ├── Belum DoD → kembalikan dengan daftar gap
  │     └── DoD OK → lanjut skor 6 aspek
  │
  ├── (XII Nilai) Tambah rubrik Etika AI (E1–E4)
  │
  └── Finalize → data masuk Progress Card capability
```

## 2. Model Data

```prisma
model ProjectDef {
  id              String   @id @default(uuid())
  kode            String   @unique  // PRJ-X-S1-01
  judul           String
  jenis           ProjectJenis // MINI, SEMESTER, NILAI, BONUS
  tingkat         String   // X, XI, XII
  semester        Int
  capabilityCodes String[]
  definitionOfDone Json    // checklist DoD dari Project Bank
  deskripsi       String?
  isActive        Boolean  @default(true)
  assignments     ProjectAssignment[]
}

enum ProjectJenis { MINI SEMESTER NILAI BONUS }

model ProjectAssignment {
  id           String   @id @default(uuid())
  projectDefId String
  kelasId      String
  temaId       String?  // link ke pertemuan kickoff (P15)
  guruId       String
  deadline     DateTime
  allowTim     Boolean  @default(false)
  maxAnggota   Int      @default(1)
  varian       String?  // rotasi A/B antar rombel
  status       AssignmentStatus @default(OPEN) // OPEN, CLOSED, GRADED
  createdAt    DateTime @default(now())

  projectDef   ProjectDef @relation(...)
  kelas        Kelas      @relation(...)
  submissions  ProjectSubmission[]
}

model ProjectSubmission {
  id              String   @id @default(uuid())
  assignmentId    String
  siswaId         String   // pemilik submission (tim: satu lead)
  timAnggotaIds   String[] // jika tim
  urlDemo         String?
  urlRepo         String?
  narasiReasoning String?  // wajib: mengapa solusi seperti ini
  artefakJson     Json?    // screenshot, link tambahan
  dodChecklist    Json     // { item: bool } — self-assessment siswa
  dodStatus       DodStatus @default(BELUM) // BELUM, LULUS, DITOLAK
  dodCatatanGuru  String?
  status          SubmissionStatus @default(DRAFT) // DRAFT, SUBMITTED, REVISI, FINAL
  submittedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  assignment      ProjectAssignment @relation(...)
  siswa           User              @relation(...)
  penilaian       PenilaianProject?
  peerReviews     PeerReview[]      @relation("RevieweeSubmission")
  peerReviewsGiven PeerReview[]     @relation("ReviewerSubmission")
}

enum DodStatus { BELUM LULUS DITOLAK }
enum SubmissionStatus { DRAFT SUBMITTED REVISI FINAL }
enum AssignmentStatus { OPEN CLOSED GRADED }

model PenilaianProject {
  id              String   @id @default(uuid())
  submissionId    String   @unique
  guruId          String
  skorAspek       Json     // { OBS: 3, REA: 3, COM: 2, ITR: 3, TRF: 2, TEC: 3 }
  skorEtika       Json?    // { E1: 3, E2: 2, E3: 3, E4: 2 } — wajib XII Nilai
  etikaLulus      Boolean? // gate E1≥2, E2≥2, ...
  narasiCapability String  // wajib 2-3 kalimat
  catatanGuru     String?
  finalizedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  submission      ProjectSubmission @relation(...)
  guru            User              @relation(...)
}

model PeerReview {
  id                String   @id @default(uuid())
  submissionId      String   // submission yang direview
  reviewerId        String
  pujian            String[] // min 2, spesifik
  saran             Json     // [{ observasi, saran, aspekTerkait }]
  pertanyaanKlarifikasi String?
  skorReviewerCom   LevelAspek? // opsional: kualitas feedback reviewer
  createdAt         DateTime @default(now())

  submission        ProjectSubmission @relation("RevieweeSubmission", ...)
  reviewer          User              @relation(...)
  revisi            PeerReviewRevisi?
}

model PeerReviewRevisi {
  id            String   @id @default(uuid())
  peerReviewId  String   @unique
  saranDiambil  String
  perubahan     String
  buktiUrl      String?  // commit / screenshot
  refleksi      String?  // 2 kalimat reviewee
  createdAt     DateTime @default(now())

  peerReview    PeerReview @relation(...)
}
```

## 3. Gate Definition of Done

UI guru menampilkan checklist DoD dari `ProjectDef.definitionOfDone`:

```json
{
  "items": [
    { "id": "dod-1", "teks": "Masalah nyata terdefinisi di README", "wajib": true },
    { "id": "dod-2", "teks": "Demo bisa diakses tanpa error fatal", "wajib": true },
    { "id": "dod-3", "teks": "Edge case minimal 1 ditangani", "wajib": false }
  ]
}
```

| dodStatus | Aksi app |
|-----------|----------|
| `BELUM` | Siswa masih edit |
| `DITOLAK` | Guru kembalikan; siswa status `REVISI` |
| `LULUS` | Form penilaian 6 aspek terbuka |

## 4. Rubrik Etika AI (Kelas XII)

Wajib untuk project **Nilai** (S6) dan disarankan S5 dengan model.

| Dimensi | Gate minimum |
|---------|--------------|
| E1 Batasan model | Level ≥ 2 |
| E2 Privasi data | Level ≥ 2 (kamera: disarankan ≥ 3) |
| E3 AI partner | Level ≥ 2 |
| E4 Dampak | Level ≥ 2 |

**Hard fail:** E1 = 1 (menyembunyikan kegagalan) → submission `DITOLAK` meski demo teknis mulus.

Acuan deskriptor: [09_Rubrik_Etika_AI.md](../09-rubrik/09_Rubrik_Etika_AI.md).

## 5. API Endpoints

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/project/def` | `project:read` | List project bank |
| GET | `/project/def/:kode` | `project:read` | Detail DoD |
| POST | `/project/assignment` | `project:assign` | Assign ke kelas |
| GET | `/project/assignment?kelasId=` | `project:read` | List assignment |
| GET | `/project/assignment/:id` | `project:read` | Detail + submissions |
| POST | `/project/submission` | MURID | Buat/update submission |
| POST | `/project/submission/:id/submit` | MURID | Submit final |
| PATCH | `/project/submission/:id/dod` | GURU | Set dodStatus + catatan |
| POST | `/project/submission/:id/penilaian` | GURU | Skor 6 aspek + etika |
| GET | `/project/peer-review?submissionId=` | MURID/GURU | List review |
| POST | `/project/peer-review` | MURID | Buat peer review |
| POST | `/project/peer-review/:id/revisi` | MURID | Dokumentasi revisi reviewee |

## 6. UI FE

### 6.1 Guru — Penilaian Project

- Panel kiri: artefak siswa (iframe demo, link Git, README rendered).
- Panel kanan: DoD checklist → 6 aspek level picker → (XII) 4 dimensi etika → narasi wajib.

### 6.2 Siswa — Submit & Peer Review

- Form submission dengan validasi URL Git (opsional sync dari `ProfilSiswa.urlGit`).
- Peer review: template terstruktur (2 pujian + 2 saran), bukan rating bintang.

### 6.3 Tim Project

- Lead submission; anggota terdaftar di `timAnggotaIds`.
- Penilaian per individu opsional (fase lanjutan) — MVP: satu skor per submission tim.

## 7. Integrasi Git URL Profil

`ProfilSiswa.urlGit` bisa di-prefill saat submit project. Validasi format URL GitHub/GitLab (FE only, tidak clone repo di server).

## 8. Permission RBAC

| Permission | GURU | MURID |
|---|---|---|
| `project:read` | ✅ kelasnya | ✅ assignment aktif |
| `project:assign` | ✅ | ❌ |
| `project:grade` | ✅ | ❌ |
| `project:submit` | ❌ | ✅ |
| `project:peer_review` | ❌ | ✅ (XI+, assigned) |

## 9. Referensi Silang

- Project Bank → [08_Project_Bank_Index.md](../08-project/08_Project_Bank_Index.md)
- Rubrik project → [09_Rubrik_Project.md](../09-rubrik/09_Rubrik_Project.md)
- Progress card → [19_Modul_Progress_Card_Capability.md](./19_Modul_Progress_Card_Capability.md)
- Portofolio → [20_Modul_Portofolio_Siswa.md](./20_Modul_Portofolio_Siswa.md)
