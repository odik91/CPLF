# 16. Mapping CPLF ke Aplikasi

> Menghubungkan struktur kurikulum CPLF (108 pertemuan, capability, rubrik) dengan entitas data aplikasi LMS.

## 1. Prinsip Mapping

| CPLF (dokumen) | Aplikasi (DB/UI) | Catatan |
|----------------|------------------|---------|
| Kelas X / XI / XII | `Kelas.tingkat` | Satu record kelas per rombel per tahun ajaran |
| Semester 1–6 | Grouping UI + `Tema.semester` | Bukan entitas terpisah |
| Pertemuan P01–P18 | `Tema` (1 record = 1 pertemuan) | **108 tema** total |
| Kode modul `X-S1-P01` | `Tema.kodeModulCplf` | Unique, slug-friendly |
| Modul pertemuan (06-modules) | `Materi` (contentJson) | Guru isi/import; bisa link ke handout |
| RPP KBC Blok B (capability) | `Tema.capabilityCodes[]` | Seed dari RPP |
| RPP Blok B (aspek formatif) | `Tema.aspekFormatifFokus[]` | 2–3 aspek per pertemuan |
| Bank soal refleksi | `Soal` per `temaId` | Ujian acak per tema |
| Rubrik formatif | `PenilaianFormatif` | Lihat dok 17 |
| Project Bank (08-project) | `ProjectSemester` | Lihat dok 18 |
| Progress Card | `ProgressCardCapability` | Lihat dok 19 |
| Experience Library | Metadata di `Tema` (opsional) | `expCodes[]` mis. EXP_01 |

## 2. Konvensi Kode & Slug

### 2.1 Kode Modul CPLF

Format: `{Kelas}-S{Semester}-P{Pertemuan}`

| Contoh | Makna |
|--------|-------|
| `X-S1-P01` | Kelas X, Semester 1, Pertemuan 1 |
| `XI-S4-P12` | Kelas XI, Semester 4, Pertemuan 12 |
| `XII-S6-P08` | Kelas XII, Semester 6, Pertemuan 8 |

### 2.2 Slug Materi

Format: `{kode-modul-lowercase}_{judul-ringkas}`

Contoh: `x-s1-p01_masalah-sebelum-solusi`

### 2.3 Urutan Global

Untuk sorting lintas semester:

```text
urutanGlobal = (tingkatNumerik × 100) + (semester × 20) + urutanPertemuan

tingkatNumerik: X=1, XI=2, XII=3
Contoh X-S1-P01 → 1×100 + 1×20 + 1 = 121
Contoh XII-S6-P18 → 3×100 + 6×20 + 18 = 438
```

## 3. Perluasan Model `Tema`

```prisma
model Tema {
  id                  String   @id @default(uuid())
  mapelId             String
  judul               String
  urutan              Int      // 1–18 dalam semester
  semester            Int      // 1–6 (S1..S6 CPLF)
  tingkat             String   // X, XI, XII
  urutanGlobal        Int      // untuk sort journey 3 tahun
  kodeModulCplf       String   @unique  // X-S1-P01
  slug                String   @unique
  deskripsi           String?
  capabilityCodes     String[] // ["CX-B1", "CX-C1"]
  aspekFormatifFokus  String[] // ["REA", "OBS"]
  expCodes            String[] // ["EXP_03"] — opsional
  prjCodes            String[] // ["PRJ-X-S1-01"] — jika pertemuan project
  unitSilabus         String?  // "X1.1"
  isProjectPertemuan  Boolean  @default(false)
  // relasi existing
  mapel               Mapel    @relation(...)
  materi              Materi[]
  soal                Soal[]
  ujian               Ujian[]
  penilaianFormatif   PenilaianFormatif[]
}
```

## 4. Seed Data 108 Tema

### 4.1 Sumber Data

| Sumber | Field yang diambil |
|--------|-------------------|
| `06-modules/kelas-*/semester-*/X-S1-P*.md` | judul, urutan, unit silabus |
| `05-silabus/rpp-kbc/kelas-*/semester-*/X-S1-P*_RPP_KBC.md` | capabilityCodes, aspekFormatifFokus |
| `08-project/08_Project_Bank_Index.md` | prjCodes untuk pertemuan project |

### 4.2 Script Seed

Lokasi: `apps/api/prisma/seed/seed-cplf-tema.ts`

Alur:
1. Scan folder `06-modules` untuk daftar 108 file pertemuan.
2. Parse metadata dari RPP KBC (Blok B) via regex field table.
3. Upsert ke `Tema` + `slug`.
4. Idempotent — aman dijalankan ulang.

Contoh output seed:

| kodeModulCplf | judul | capabilityCodes | aspekFormatifFokus |
|---------------|-------|-----------------|-------------------|
| X-S1-P01 | Masalah Sebelum Solusi | CX-B1, CX-C1 | REA, OBS |
| X-S1-P03 | ChatGPT & Klarifikasi | CX-B4 | REA, OBS |
| X-S1-P15 | Project S1 Kickoff | CX-B2, CX-T2 | REA, ITR, TEC |

### 4.3 Pertemuan Khusus (bukan formatif penuh)

| Jenis pertemuan | Pola kode | Penanganan app |
|-----------------|-----------|----------------|
| Project kickoff/build | P15–P17 (umumnya) | `isProjectPertemuan=true`, penilaian via modul Project |
| Review spiral | P14, P17 | Formatif ringan + ujian refleksi opsional |
| Showcase / refleksi | P18 | Progress card + narasi, bukan ujian PG |
| Peer review | P16 (XI+) | Modul peer review (dok 18) |

## 5. Mapping Capability → Progress Card

Kode capability diambil dari [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md):

| Kelas | Prefix | Jumlah kode (approx) |
|-------|--------|----------------------|
| X | CX- | B1–B4, T1–T4, K1–K2, C1 |
| XI | CXI- | B1–B2, T1–T5, K1–K2, C1 |
| XII | CXII- | B1–B2, T1–T4, K1, C1–C2 + E1–E4 (etika) |

Seed terpisah: `seed-capability.ts` → tabel `CapabilityDef` (metadata deskriptif).

## 6. Alur Guru: Dari Tema CPLF ke Aksi App

```
Guru buka Kelas X → Semester 1 → Daftar 18 Tema (P01–P18)
  │
  ├── P01: Baca metadata (capability: CX-B1, fokus: REA+OBS)
  │     ├── Publish/Edit Materi
  │     ├── Isi Bank Soal (5–10 soal refleksi)
  │     ├── Buat Ujian Refleksi (opsional, akhir pertemuan/minggu)
  │     └── Isi Penilaian Formatif (ceklis kelas, 30–90 detik/siswa)
  │
  └── P15–P17: Project Semester
        ├── Assign PRJ-X-S1-01 dari Project Bank
        ├── Monitor submission + DoD
        └── Nilai 6 aspek + narasi capability
```

## 7. Sinkronisasi dengan Repo CPLF

| Strategi | Kapan | Cara |
|----------|-------|------|
| **Seed statis** (MVP) | Fase 0–1 | JSON hasil parse 108 modul, commit di repo app |
| **Script regenerate** | Setiap update kurikulum | `pnpm seed:cplf-tema` baca dari submodule/path CPLF |
| **Manual override** | Guru edit judul/deskripsi | PATCH `/tema/:id` — metadata CPLF tetap di `kodeModulCplf` |

Rekomendasi MVP: seed statis JSON (`prisma/seed/data/tema-cplf.json`) agar app tidak hard-depend pada struktur folder CPLF saat runtime.

## 8. UI Navigasi Siswa (mirror journey)

```text
Dashboard Murid
└── Mapel Multimedia
    └── Semester 1 (Kelas X)
        ├── P01 Masalah Sebelum Solusi  [materi] [ujian?] [✓ dibaca]
        ├── P02 Google & Literasi       [...]
        ...
        └── P18 Showcase Refleksi S1
```

Progress bar semester = % materi dibaca + % ujian refleksi selesai + project status.

## 9. Referensi Silang

- Skema DB → [03_Skema_Database.md](./03_Skema_Database.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- Modul index CPLF → [06-modules](../06-modules/)
- RPP KBC → [05-silabus/rpp-kbc](../05-silabus/rpp-kbc/README.md)
- Rubrik CPLF → [09-rubrik](../09-rubrik/09_Rubrik_Index.md)
