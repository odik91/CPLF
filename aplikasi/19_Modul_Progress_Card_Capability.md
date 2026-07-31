# 19. Modul Progress Card & Capability

> Mencakup **kartu tumbuh capability** per siswa per semester — selaras [09_Progress_Card.md](../09-rubrik/09_Progress_Card.md) dan [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md).

## 1. Tujuan

Satu kartu digital per siswa per semester yang menjawab: **capability mana yang tumbuh**, dengan bukti — bukan daftar nilai bab.

Status capability (konsisten rubrik CPLF):

| Status | Arti | Sumber bukti di app |
|--------|------|---------------------|
| `BELUM` | Belum ada bukti cukup | — |
| `BERKEMBANG` | Bukti formatif; belum konsisten | Penilaian formatif level 2 |
| `TERLIHAT` | Bukti project/demo konsisten (≈ level 3) | Project + formatif level 3+ |
| `KOKOH` | Terlihat + transfer / membantu teman | Level 4 + peer review / narasi transfer |

## 2. Alur Bisnis

```
Akhir semester (atau kapan saja guru review)
  │
  ├── Guru buka Progress Card siswa
  │     ├── Sistem pre-fill dari agregat:
  │     │     • Penilaian formatif (rata aspek per capability terkait)
  │     │     • Penilaian project (skor 6 aspek → map capability)
  │     │     • Exit ticket / narasi (opsional)
  │     └── Guru validasi/override status + isi bukti (link PRJ/EXP)
  │
  ├── Siswa isi self-assessment (refleksi 3–5 kalimat)
  │
  ├── Guru finalize kartu
  │
  └── Export PDF untuk konferensi wali / arsip CPLF
        (angka rapor resmi tetap di sistem madrasah terpisah)
```

## 3. Model Data

```prisma
model CapabilityDef {
  id          String   @id @default(uuid())
  kode        String   @unique  // CX-B1, CXI-T2, CXII-C1
  tingkat     String   // X, XI, XII
  domain      String   // Berpikir, Teknis, Komunikasi, Karakter, Etika
  deskripsi   String
  aspekTerkait AspekCplf[]  // mapping ke 6 aspek
}

enum CapabilityStatus {
  BELUM
  BERKEMBANG
  TERLIHAT
  KOKOH
}

model ProgressCard {
  id              String   @id @default(uuid())
  siswaId         String
  kelasId         String
  tingkat         String   // X, XI, XII
  semester        Int      // 1–6
  tahunAjaran     String
  status          ProgressCardStatus @default(DRAFT) // DRAFT, SISWA_REVIEW, FINAL
  narasiGuru      String?
  narasiSiswa     String?  // self-assessment
  targetSemesterDepan String?
  finalizedAt     DateTime?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  siswa           User     @relation(...)
  kelas           Kelas    @relation(...)
  items           ProgressCardItem[]

  @@unique([siswaId, tahunAjaran, semester])
}

model ProgressCardItem {
  id              String   @id @default(uuid())
  progressCardId  String
  capabilityKode  String   // CX-B1
  status          CapabilityStatus @default(BELUM)
  buktiRefs       Json?    // [{ tipe: "project", id: "...", label: "PRJ-X-S1-01" }]
  catatan         String?
  autoSuggested   CapabilityStatus?  // saran sistem sebelum override guru
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  progressCard    ProgressCard @relation(...)
  capability      CapabilityDef @relation(fields: [capabilityKode], references: [kode])

  @@unique([progressCardId, capabilityKode])
}

enum ProgressCardStatus { DRAFT SISWA_REVIEW FINAL }
```

## 4. Logika Auto-Suggest Status

Service `ProgressCardService.suggestStatus(siswaId, capabilityKode, semester)`:

```text
1. Kumpulkan semua PenilaianFormatifSiswa where tema.capabilityCodes includes kode
2. Kumpulkan PenilaianProject where capabilityCodes includes kode
3. Hitung rata level aspek terkait capability (via CapabilityDef.aspekTerkait)

Rules (heuristik, guru bisa override):
  rata < 1.8           → BELUM atau BERKEMBANG
  rata 1.8–2.5         → BERKEMBANG
  rata 2.6–3.3 + project LULUS DoD → TERLIHAT
  rata ≥ 3.4 + bukti transfer (exit ticket TRF / peer level 4) → KOKOH
```

Heuristik **tidak otomatis finalize** — hanya pre-fill untuk efisiensi guru.

## 5. API Endpoints

| Method | Endpoint | Permission | Deskripsi |
|--------|----------|------------|-----------|
| GET | `/progress-card?kelasId=&semester=` | GURU | List kartu kelas |
| GET | `/progress-card/:id` | GURU / MURID own | Detail kartu + items |
| POST | `/progress-card/generate` | GURU | Generate draft untuk seluruh kelas |
| PATCH | `/progress-card/:id` | GURU / MURID (narasiSiswa) | Update narasi |
| PUT | `/progress-card/:id/items` | GURU | Batch update status items |
| POST | `/progress-card/:id/finalize` | GURU | Lock kartu |
| GET | `/progress-card/:id/export-pdf` | GURU / MURID own | Download PDF |
| GET | `/capability/def?tingkat=` | All auth | List capability definitions |

## 6. UI FE

### 6.1 Guru — Grid Kelas

Tabel: Siswa × Capability (compact) dengan color-code status. Klik siswa → detail kartu.

### 6.2 Detail Kartu

- Header: nama, kelas, semester, narasi
- Tabel capability dengan dropdown status + field bukti (autocomplete link project/formatif)
- Panel saran sistem vs status final guru
- Tombol "Minta review siswa" → status `SISWA_REVIEW`

### 6.3 Siswa — Self Assessment

Murid isi `narasiSiswa` + centang capability yang menurut mereka sudah tumbuh (opsional) — guru yang validasi final.

## 7. Template per Kelas

| Kelas | Capability codes di kartu |
|-------|---------------------------|
| X | CX-B1–B4, T1–T4, K1–K2, C1 |
| XI | CXI-B1–B2, T1–T5, K1–K2, C1 |
| XII | CXII-B1–B2, T1–T4, K1, C1–C2 + ringkasan E1–E4 |

Jumlah baris kartu: ~11 (X), ~10 (XI), ~9+4 etika (XII).

## 8. Hubungan ke Rapor Madrasah

Progress Card = **dokumen proses CPLF**, melengkapi rapor resmi:

| Output app | Penggunaan |
|------------|------------|
| PDF Progress Card | Konferensi wali, portofolio siswa |
| Agregat level aspek | Input guru saat isi rapor Dapodik (manual) |
| Konversi angka (opsional) | Lihat dok 17 §9 — konfigurasi per madrasah |

App **tidak** push otomatis ke Dapodik di MVP.

## 9. Anti-Pattern

- Mengisi semua capability "Kokoh" agar orang tua senang
- Kartu tanpa bukti artefak terlink
- Siswa tidak pernah melihat kartu sendiri
- Auto-suggest di-finalize tanpa review guru

## 10. Referensi Silang

- Capability framework → [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md)
- Rubrik progress card → [09_Progress_Card.md](../09-rubrik/09_Progress_Card.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- Project → [18_Modul_Penilaian_Project_Peer_Review.md](./18_Modul_Penilaian_Project_Peer_Review.md)
- Portofolio → [20_Modul_Portofolio_Siswa.md](./20_Modul_Portofolio_Siswa.md)
