# 17. Modul Penilaian Formatif per Pertemuan

> Mencakup kebutuhan: guru menilai **2–3 aspek CPLF per pertemuan** (OBS, REA, COM, ITR, TRF, TEC) dengan ceklis cepat — selaras [09_Rubrik_Formatif_Unit.md](../09-rubrik/09_Rubrik_Formatif_Unit.md) dan Blok F RPP KBC.

## 1. Posisi dalam Alur CPLF

Penilaian di app CPLF **bukan satu angka rapor**, melainkan lapisan bukti capability:

```text
Per pertemuan     →  Penilaian Formatif (2–3 aspek, level 1–4)
Project semester  →  Rubrik 6 aspek + DoD (dok 18)
Akhir semester    →  Progress Card capability (dok 19)
Ujian refleksi    →  Bank soal acak per tema (dok 04) — melengkapi, bukan menggantikan formatif
```

**Pemisahan penting:**

| Instrumen | Tujuan | Siapa isi | Frekuensi |
|-----------|--------|-----------|-----------|
| **Formatif pertemuan** | Umpan balik capability | Guru (observasi kelas) | 2–3 aspek / pertemuan |
| **Ujian refleksi** | Cek pemahaman konsep | Siswa (PG/esai singkat) | Opsional, per tema |
| **Tracking materi** | Partisipasi baca | Otomatis (FE) | Setiap akses materi |
| **Exit ticket** | Refleksi siswa | Siswa (opsional di app) | Akhir pertemuan |

> Tracking materi **tidak** masuk nilai formatif — hanya bahan diskusi guru (lihat dok 11).

## 2. Alur Bisnis Guru

```
Guru login → Pilih Kelas → Pilih Tema (P01–P18)
  │
  ├── Sistem tampilkan metadata CPLF:
  │     capabilityCodes: CX-B1, CX-C1
  │     aspekFormatifFokus: REA, OBS  (dari RPP / seed)
  │
  ├── Guru buka "Penilaian Formatif"
  │     ├── Tabel siswa kelas (filter: hadir / sampel / seluruh)
  │     ├── Kolom per aspek fokus (dropdown level 1–4)
  │     └── Catatan 1 baris opsional per siswa
  │
  ├── Simpan batch (autosave tiap 30 detik)
  │
  └── (Opsional) Export PDF ceklis untuk arsip KMA
```

**Target waktu:** 30–90 detik per siswa (selaras rubrik CPLF). UI harus **ceklis cepat**, bukan form panjang.

## 3. Model Data

```prisma
enum AspekCplf {
  OBS REA COM ITR TRF TEC
}

enum LevelAspek {
  BELUM_TAMPAK      // 1
  BERKEMBANG        // 2
  CAKAP             // 3
  MAHIR             // 4
}

model PenilaianFormatif {
  id            String   @id @default(uuid())
  temaId        String
  kelasId       String
  guruId        String
  tanggal       DateTime @default(now())
  aspekFokus    AspekCplf[]  // snapshot aspek hari itu (dari Tema atau override guru)
  catatanUmum   String?      // catatan kelas
  status        PenilaianStatus @default(DRAFT) // DRAFT, FINAL
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  tema          Tema     @relation(...)
  kelas         Kelas    @relation(...)
  guru          User     @relation(...)
  skorSiswa     PenilaianFormatifSiswa[]

  @@unique([temaId, kelasId, tanggal]) // satu sesi penilaian per kelas per tema per hari
}

model PenilaianFormatifSiswa {
  id                  String   @id @default(uuid())
  penilaianFormatifId String
  siswaId             String
  skorAspek           Json     // { "REA": 3, "OBS": 2 } — hanya aspek fokus
  catatan             String?  // umpan balik 1 baris
  hadir               Boolean  @default(true)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  penilaianFormatif   PenilaianFormatif @relation(...)
  siswa               User              @relation(...)

  @@unique([penilaianFormatifId, siswaId])
}

enum PenilaianStatus { DRAFT FINAL }
```

### 3.1 Agregat untuk Statistik

View/query agregat (bukan tabel terpisah di MVP):

- Rata level per aspek per siswa per semester.
- Tren REA siswa X dari P01→P18.
- Siswa dengan level 1 berturut-turut pada aspek yang sama → flag "perlu scaffolding" (hanya internal guru).

## 4. API Endpoints

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/penilaian/formatif?temaId=&kelasId=` | `penilaian:formatif:read` | List sesi penilaian |
| GET | `/penilaian/formatif/:id` | `penilaian:formatif:read` | Detail + skor semua siswa |
| POST | `/penilaian/formatif` | `penilaian:formatif:create` | Buat sesi baru |
| PATCH | `/penilaian/formatif/:id` | `penilaian:formatif:update` | Update metadata sesi |
| PUT | `/penilaian/formatif/:id/skor-batch` | `penilaian:formatif:update` | Upsert skor banyak siswa sekaligus |
| PATCH | `/penilaian/formatif/:id/finalize` | `penilaian:formatif:update` | Lock sesi (FINAL) |
| GET | `/penilaian/formatif/tema/:temaId/rekap` | `penilaian:formatif:read` | Rekap kelas untuk 1 tema |
| GET | `/penilaian/formatif/siswa/:siswaId` | GURU scoped / MURID own | Riwayat formatif 1 siswa |

## 5. UI FE — Halaman Guru

### 5.1 Komponen `FormatifChecklistTable`

```tsx
// components/penilaian/FormatifChecklistTable.tsx
"use client";

interface Props {
  temaId: string;
  kelasId: string;
  aspekFokus: AspekCplf[];  // dari Tema.aspekFormatifFokus
  siswaList: SiswaRow[];
}

// Kolom: Nama | REA (1-4) | OBS (1-4) | Catatan
// Level picker: 4 tombol radio / segmented control dengan tooltip deskriptor
// Autosave via debounced PUT /skor-batch
```

### 5.2 Tooltip Deskriptor

Setiap level menampilkan deskriptor dari [09_Rubrik_Enam_Aspek.md](../09-rubrik/09_Rubrik_Enam_Aspek.md) — guru tidak perlu buka dokumen terpisah.

### 5.3 Mode Sampel

Toggle "Nilai sampel (6 siswa)" untuk pertemuan besar — selaras anti-pattern rubrik CPLF (jangan 6 aspek × 36 siswa setiap hari).

## 6. Exit Ticket Siswa (Opsional Fase 2)

Pertemuan tertentu (Reflect phase) bisa punya **exit ticket digital**:

```prisma
model ExitTicket {
  id        String   @id @default(uuid())
  temaId    String
  siswaId   String
  jawaban   Json     // [{ pertanyaan, teks }]
  createdAt DateTime @default(now())
  @@unique([temaId, siswaId])
}
```

Pertanyaan diambil dari modul CPLF / RPP Blok F. **Tidak dinilai angka** — masuk bukti COM/REA untuk progress card.

## 7. Integrasi dengan Ujian Refleksi

| Situasi | Rekomendasi |
|---------|-------------|
| Pertemuan konsep (P04–P12) | Formatif + ujian refleksi 5 soal opsional |
| Pertemuan project (P15–P17) | Skip ujian PG; gunakan penilaian project |
| Review spiral (P14, P17) | Formatif ringan + ujian integratif multi-tema (fase lanjutan) |
| Showcase (P18) | Hanya formatif + narasi; tidak ada ujian |

Ujian refleksi **melengkapi** formatif — skor ujian tidak menggantikan level aspek observasi guru.

## 8. Permission RBAC

Tambahan di seed permission:

| Permission | SUPER_ADMIN | ADMIN | GURU | MURID |
|---|---|---|---|---|
| `penilaian:formatif:create` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `penilaian:formatif:read` | ✅ | ✅ | ✅ (kelasnya) | ✅ (milik sendiri, read-only) |
| `penilaian:formatif:update` | ✅ | ✅ | ✅ (kelasnya, DRAFT only) | ❌ |

Scoping: guru hanya akses kelas yang diampu via `GuruMapelKelas`.

## 9. Konversi ke Rapor Sekolah (Opsional)

Jika madrasah wajib angka 0–100 per semester:

```text
Komponen proses (40%) = agregat formatif + project
Komponen refleksi (30%) = rata ujian refleksi per semester
Komponen partisipasi (10%) = tracking materi (hanya indikator, bukan hukuman)
Komponen sumatif (20%) = project semester / showcase

Konversi level → angka: level × 25 (lihat 09_Rubrik_Index.md)
```

Konfigurasi bobot per madrasah — **disimpan di `PengaturanPenilaian`** (fase lanjutan), default mengikuti [09_Assessment_Philosophy.md](../09-rubrik/09_Assessment_Philosophy.md).

## 10. Anti-Pattern (App)

- Memaksa guru isi 6 aspek × 36 siswa setiap pertemuan
- Menampilkan ranking siswa publik di kelas
- Menghukum siswa yang kena Cognitive Trap dengan level 1 otomatis
- Menyimpan formatif tanpa pernah menampilkan feedback ke siswa
- Mengganti observasi guru murni dengan skor ujian PG

## 11. Referensi Silang

- Filosofi asesmen → [09_Assessment_Philosophy.md](../09-rubrik/09_Assessment_Philosophy.md)
- Rubrik 6 aspek → [09_Rubrik_Enam_Aspek.md](../09-rubrik/09_Rubrik_Enam_Aspek.md)
- Mapping tema CPLF → [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md)
- Skema DB → [03_Skema_Database.md](./03_Skema_Database.md)
- Dashboard guru → [21_Modul_Dashboard_Guru.md](./21_Modul_Dashboard_Guru.md)
