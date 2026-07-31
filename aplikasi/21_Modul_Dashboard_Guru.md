# 21. Modul Dashboard Guru & Admin

> Mencakup **halaman overview** untuk guru dan admin: rekap kelas, alert siswa, jadwal pertemuan, dan pintu masuk cepat ke penilaian — menyatukan modul-modul yang sebelumnya terpisah.

## 1. Tujuan Dashboard

Guru CPLF butuh **satu layar** untuk menjawab:

1. Pertemuan minggu ini apa? (tema CPLF)
2. Materi & ujian sudah siap belum?
3. Siapa siswa yang perlu perhatian? (partisipasi, formatif rendah)
4. Project semester di fase apa?
5. Progress card semester ini sudah diisi?

## 2. Dashboard Guru — Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Selamat datang, [Guru] · Kelas X-A · Semester 1            │
├──────────────────────┬──────────────────────────────────────┤
│  Pertemuan Aktif     │  Alert & Tindakan                    │
│  P08 — ATM & If/Else │  ⚠ 5 siswa belum baca materi P07     │
│  [Buka materi]       │  ⚠ 3 siswa level REA=1 di P06        │
│  [Bank soal: 8/10]   │  📋 Ujian P07 belum ditutup           │
│  [Penilaian formatif]│  [Lihat detail]                      │
├──────────────────────┴──────────────────────────────────────┤
│  Progress Semester (18 pertemuan)                             │
│  ████████░░░░░░░░  8/18 materi published · 6/18 formatif     │
├─────────────────────────────────────────────────────────────┤
│  Project Semester: PRJ-X-S1-01 · deadline 2 minggu          │
│  Submitted: 28/32 · DoD lulus: 20 · Perlu revisi: 3         │
├─────────────────────────────────────────────────────────────┤
│  Statistik Cepat                                              │
│  Rata partisipasi materi: 78% · Rata ujian refleksi: 72     │
│  [Statistik detail →]                                         │
└─────────────────────────────────────────────────────────────┘
```

## 3. Widget & Data Source

| Widget | Sumber data | Modul |
|--------|-------------|-------|
| Pertemuan aktif | `Tema` + jadwal guru | 16, 07 |
| Status materi | `Materi.status` per tema | 07 |
| Bank soal count | `Soal.count` per tema | 04 |
| Alert materi belum dibaca | `AktivitasMateri` vs roster | 11 |
| Alert formatif rendah | `PenilaianFormatifSiswa` level 1 | 17 |
| Ujian pending | `Ujian.status` ONGOING | 04 |
| Project progress | `ProjectAssignment` + submissions | 18 |
| Progress card status | `ProgressCard.status` | 19 |
| Statistik cepat | Agregat query | 04, 11, 17 |

## 4. Alert Rules (Heuristik)

| Alert | Kondisi | Prioritas |
|-------|---------|-----------|
| Materi belum dibaca | `maxScrollPercent < 30` & materi published > 3 hari | Medium |
| Formatif belum diisi | Pertemuan lewat & tidak ada `PenilaianFormatif` FINAL | High |
| REA rendah berulang | Level REA = 1 di ≥ 2 pertemuan berturut | High |
| Ujian belum publish | Tema P(N-1) selesai & P(N) ujian belum ada | Medium |
| Project deadline | < 7 hari & submission < 50% | High |
| DoD ditolak menumpuk | > 3 siswa `DITOLAK` belum revisi | Medium |

Alert hanya **internal guru** — tidak ditampilkan ke siswa sebagai shame board.

## 5. Dashboard Admin

```
┌─────────────────────────────────────────────────────────────┐
│  Admin CPLF · Tahun Ajaran 2025/2026                        │
├─────────────────────────────────────────────────────────────┤
│  User: 480 siswa · 12 guru · 2 admin                        │
│  Kelas: 12 rombel (X:4, XI:4, XII:4)                        │
├─────────────────────────────────────────────────────────────┤
│  Tindakan cepat                                             │
│  [Import siswa CSV] [Kelola kelas] [Seed tema CPLF]          │
├─────────────────────────────────────────────────────────────┤
│  Kesehatan sistem                                           │
│  API ✓ · Redis ✓ · Queue: 3 job pending · WS: 45 conn      │
├─────────────────────────────────────────────────────────────┤
│  Audit log terbaru                                          │
│  BULK_IMPORT_SISWA · CREATE_UJIAN · ...                     │
└─────────────────────────────────────────────────────────────┘
```

## 6. API Endpoints

| Method | Endpoint | Role | Deskripsi |
|--------|----------|------|-----------|
| GET | `/dashboard/guru` | GURU | Agregat widget guru (query param: kelasId, semester) |
| GET | `/dashboard/guru/alert` | GURU | List alert prioritas |
| GET | `/dashboard/guru/progress-semester` | GURU | 18 tema status checklist |
| GET | `/dashboard/admin` | ADMIN | Overview admin |
| GET | `/dashboard/admin/kesehatan` | ADMIN | Health check + queue stats |

### 6.1 Response `GET /dashboard/guru`

```json
{
  "data": {
    "pertemuanAktif": {
      "temaId": "...",
      "kodeModulCplf": "X-S1-P08",
      "judul": "ATM & If-Else",
      "materiStatus": "PUBLISHED",
      "bankSoalCount": 8,
      "formatifStatus": "DRAFT"
    },
    "progressSemester": {
      "materiPublished": 8,
      "formatifFinal": 6,
      "ujianSelesai": 5,
      "totalPertemuan": 18
    },
    "projectAktif": { "kode": "PRJ-X-S1-01", "submitted": 28, "total": 32 },
    "statistikCepat": {
      "rataPartisipasiMateri": 78,
      "rataNilaiUjian": 72
    },
    "alerts": [
      { "tipe": "MATERI_BELUM_DIBACA", "count": 5, "temaId": "..." }
    ]
  }
}
```

Implementasi: **satu endpoint agregat** di `DashboardService` dengan parallel Prisma queries — hindari N+1.

## 7. Jadwal Pertemuan (Opsional MVP+)

Guru bisa set **tanggal rencana** per tema:

```prisma
model JadwalPertemuan {
  id        String   @id @default(uuid())
  temaId    String
  kelasId   String
  tanggal   DateTime
  catatan   String?
  @@unique([temaId, kelasId])
}
```

Dashboard menampilkan "Pertemuan minggu ini" berdasarkan `JadwalPertemuan` — jika kosong, fallback ke urutan P01→P18.

## 8. FE Routes

| Route | Peran |
|-------|-------|
| `/guru/dashboard` | Landing setelah login guru |
| `/guru/dashboard/kelas/[kelasId]` | Dashboard scoped kelas |
| `/admin/dashboard` | Landing admin |

Semua `"use client"` + React Query `useDashboardGuru(kelasId)`.

## 9. Referensi Silang

- Mapping CPLF → [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- Tracking → [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md)
- Statistik ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- API overview → [14_API_Contract_Overview.md](./14_API_Contract_Overview.md)
