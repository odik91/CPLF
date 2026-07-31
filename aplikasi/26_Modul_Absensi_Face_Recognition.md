# 26. Modul Absensi Face Recognition

> **Fase lanjutan (next dev).** Absensi masuk kelas otomatis via **face recognition** — guru tidak perlu absen 1-1. Reuse embedding wajah dari enrollment (dok 05); inference on-device di **kiosk/tablet pintu kelas** atau device guru.

## 1. Tujuan

| Masalah | Solusi |
|---------|--------|
| Guru malas absen manual 1-1 | Siswa hadir → scan wajah → tercatat otomatis |
| Antre panjang panggilan nama | Queue singkat di kiosk (~2–3 detik/siswa) |
| Data absensi terpisah dari LMS | Satu sistem dengan jadwal pertemuan CPLF |
| Orang tua ingin tahu anak hadir | Trigger notif Telegram (dok 25, opt-in) |

**Bukan** surveillance — hanya timestamp hadir + confidence score; **tidak** simpan foto absensi (default).

## 2. Mode Operasi

| Mode | Device | Resource | Use case MA |
|------|--------|----------|-------------|
| **`KIOSK_KELAS`** (rekomendasi) | Tablet di pintu/laptop lab | Rendah | Siswa antre, 1 wajah/frame |
| **`GURU_HANDHELD`** | HP/tablet guru di depan kelas | Rendah | Tanpa hardware tetap |
| **`BATCH_RECOGNITION`** | Kamera wide + antre | Sedang | Kelas kecil |

Default MVP: **KIOSK_KELAS** — satu wajah di frame, match against roster kelas hari itu.

## 3. Alur Bisnis

```text
Guru buka sesi absensi (auto dari jadwal pertemuan atau manual)
  │
  ├── BE: load FaceEmbedding semua siswa kelas + mapel hari ini
  │     cache ke kiosk (IndexedDB) — hanya subset kelas, bukan seluruh sekolah
  │
  ├── Siswa depan kiosk → kamera aktif
  │     FE: detect 1 wajah → embedding → compare ke cache lokal
  │     match ≥ threshold → POST /absensi/check-in { siswaId, score }
  │
  ├── BE: catat AbsensiRecord (HADIR, waktu, metode=FACE)
  │     dedupe: 1 check-in per siswa per sesi
  │
  ├── UI kiosk: "✓ Ahmad hadir 07:12" (2 detik) → siap siswa berikutnya
  │
  ├── (Opsional) Telegram ke orang tua → dok 25
  │
  └── Guru dashboard: live count hadir/belum + override manual
```

## 4. Tech Stack (Reuse + Minimal)

| Komponen | Pilihan | Catatan |
|----------|---------|---------|
| Face detect | `TinyFaceDetector` | Ringan untuk kiosk |
| Embedding | `FaceRecognitionNet` | Sama dengan enrollment (dok 05) |
| Match | Cosine similarity di **FE kiosk** | BE tidak infer |
| Cache roster | IndexedDB per sesi absensi | Download saat sesi start |
| Threshold | 0.6 default (sama ujian) | Adjustable per sekolah |

### 4.1 Prinsip Hemat Resource

- **Satu wajah** di frame (UI: "Dekatkan wajah ke kamera").
- Resolusi **320×240** inference.
- **Tidak** continuous scan — trigger saat wajah stabil 1 detik ATAU tap "Scan".
- Model load **sekali** per sesi absensi.
- Cache embedding kelas (~36 × 128 float ≈ 18 KB) — trivial.

Per siswa: **~300–500 ms** total — 36 siswa ≈ 3–5 menit antre (lebih cepat dari panggilan nama 1-1).

## 5. Model Data

```prisma
model SesiAbsensi {
  id          String   @id @default(uuid())
  kelasId     String
  temaId      String?  // link pertemuan CPLF P01–P18
  mapelId     String
  tanggal     DateTime @db.Date
  jamMulai    DateTime // jadwal mulai kelas
  jamAkhir    DateTime? // batas auto-tutup sesi
  status      String   @default("OPEN") // OPEN, CLOSED
  mode        String   @default("KIOSK_KELAS")
  createdById String
  records     AbsensiRecord[]
}

model AbsensiRecord {
  id            String   @id @default(uuid())
  sesiId        String
  siswaId       String
  status        AbsensiStatus // HADIR, TERLAMBAT, IZIN, SAKIT, ALPHA, MANUAL
  waktuCheckIn  DateTime?
  metode        AbsensiMetode // FACE, MANUAL_GURU, IMPORT
  faceScore     Float?   // confidence match
  catatan       String?
  overrideById  String?  // guru jika manual koreksi
  createdAt     DateTime @default(now())

  sesi          SesiAbsensi @relation(...)
  @@unique([sesiId, siswaId])
}

enum AbsensiStatus { HADIR TERLAMBAT IZIN SAKIT ALPHA MANUAL }
enum AbsensiMetode { FACE MANUAL_GURU IMPORT }

model AbsensiIzin {
  id        String   @id @default(uuid())
  siswaId   String
  tanggal   DateTime @db.Date
  alasan    String
  status    String   @default("PENDING") // PENDING, APPROVED
  approvedById String?
}
```

### 5.1 Aturan Terlambat

```typescript
// configurable per sekolah
const toleransiMenit = 10;
const waktuCheckIn = new Date();
const status =
  waktuCheckIn <= addMinutes(sesi.jamMulai, toleransiMenit)
    ? 'HADIR'
    : 'TERLAMBAT';
```

## 6. Kiosk FE (Tablet Pintu Kelas)

### 6.1 UI Sederhana

```
┌─────────────────────────────┐
│  ABSENSI — Multimedia X-A   │
│  P08 ATM & If-Else          │
│  ┌─────────────────────┐    │
│  │   [ preview kamera ]│    │
│  │   Dekatkan wajah    │    │
│  └─────────────────────┘    │
│  Hadir: 28/32               │
│  ✓ Siti — 07:11             │  ← flash 2 detik
└─────────────────────────────┘
```

Route: `/kiosk/absensi/:sesiId` — **device token** khusus (bukan login siswa), dikonfigurasi admin.

### 6.2 Alur Match Lokal

```typescript
async function checkInFromCamera(sesiId: string) {
  const frame = grabFrame(320);
  const detection = await faceapi
    .detectSingleFace(frame, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  if (!detection) return showError('Wajah tidak terdeteksi');

  const roster = await idb.get('absensi-roster', sesiId); // [{ siswaId, descriptor }]
  const { bestMatch, score } = findBestMatch(detection.descriptor, roster);

  if (score < THRESHOLD) return showError('Tidak dikenali — ke guru');

  await api.post(`/absensi/sesi/${sesiId}/check-in`, {
    siswaId: bestMatch.siswaId,
    faceScore: score,
    metode: 'FACE',
  });
  showSuccess(bestMatch.nama);
}
```

**BE validasi ulang:** siswa ∈ kelas sesi, belum check-in, sesi OPEN — **bukan** re-match embedding di server (tetap prinsip dok 05).

### 6.3 Anti-Spoofing Ringan (Opsional)

- Deteksi wajah hidup: blink challenge random (fase 2).
- Minimum face size / brightness check.
- Untuk MA: cukup threshold + guru override manual.

## 7. Guru — Tanpa Absen 1-1

| Fitur | Fungsi |
|-------|--------|
| **Start sesi** | 1 tap dari dashboard / auto dari jadwal |
| **Live counter** | 28/32 hadir realtime (WS) |
| **Override** | Tap siswa → HADIR/IZIN/ALPHA manual |
| **Tutup sesi** | Alpha otomatis untuk yang belum check-in |
| **Export** | CSV rekap bulan → integrasi Dapodik manual |

Guru **tidak** perlu panggil nama satu per satu kecuali siswa gagal dikenali kiosk.

## 8. Integrasi Jadwal CPLF

```text
JadwalPertemuan (dok 21) tanggal hari ini
  + Kelas X-A + Mapel Multimedia
  → auto-create SesiAbsensi draft 07:00
  → guru konfirmasi "Buka absensi" atau auto-open
```

Link `temaId` → absensi terikat pertemuan P08, bukan sekadar tanggal kosong.

## 9. API Endpoints

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| POST | `/absensi/sesi` | GURU | Buat sesi absensi |
| POST | `/absensi/sesi/:id/open` | GURU | Buka sesi |
| POST | `/absensi/sesi/:id/close` | GURU | Tutup + set ALPHA |
| GET | `/absensi/sesi/:id/roster-cache` | Kiosk token | Embedding subset kelas |
| POST | `/absensi/sesi/:id/check-in` | Kiosk token | Catat hadir |
| PATCH | `/absensi/sesi/:id/override` | GURU | Koreksi manual |
| GET | `/absensi/sesi/:id/rekap` | GURU/WALI_KELAS | Rekap hadir |
| GET | `/absensi/siswa/:siswaId/riwayat` | GURU/WALI | Riwayat absensi |
| POST | `/absensi/izin` | MURID/GURU | Ajukan izin |

## 10. Notifikasi (Telegram)

| Event | Penerima | Template |
|-------|----------|----------|
| Check-in sukses | Orang tua (opt-in) | `ABSENSI_MASUK` |
| Sesi ditutup, anak ALPHA | Orang tua (opt-in) | `ABSENSI_ALPHA` |
| Rekap harian | Guru wali | `ABSENSI_REKAP` |

Lihat [25_Modul_Notifikasi_Telegram.md](./25_Modul_Notifikasi_Telegram.md).

## 11. RBAC

| Permission | GURU | WALI_KELAS | MURID | Kiosk |
|---|---|---|---|---|
| `absensi:manage` | ✅ kelasnya | ❌ | ❌ | ❌ |
| `absensi:read` | ✅ | ✅ read-only | ✅ own | ❌ |
| `absensi:checkin` | ❌ | ❌ | ❌ | ✅ device token |

## 12. Privasi & Etika (MA)

- Enrollment wajah **sudah consent** (profil siswa) — absensi pakai embedding yang sama, tujuan diperluas di kebijakan sekolah.
- **Tidak simpan foto** absensi — hanya log + score.
- Siswa opt-out biometrik → fallback **QR/NIS manual** di kiosk (fase 2).
- Selaras CPLF XII E2: minimalkan data biometrik; alternatif non-wajah tersedia.

## 13. Hardware Rekomendasi MA

| Setup | Perkiraan biaya | Catatan |
|-------|----------------|---------|
| Tablet Android bekas + stand pintu | Rendah | Chrome PWA kiosk mode |
| Laptop lab existing | Nol | Browser fullscreen |
| Webcam USB 720p | ~150rb | Jika PC jauh dari pintu |

Tidak perlu dedicated face recognition hardware vendor — TF.js + webcam cukup.

## 14. Roadmap

| Fase | Deliverable |
|------|-------------|
| 7a | Sesi absensi + check-in manual guru |
| 7b | Kiosk face match + roster cache |
| 7c | Auto terlambat + WS live counter |
| 7d | Telegram orang tua + export CSV |
| 7e | QR fallback + izin digital |

## 15. Referensi Silang

- Face enrollment → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Telegram notif → [25_Modul_Notifikasi_Telegram.md](./25_Modul_Notifikasi_Telegram.md)
- Jadwal pertemuan → [21_Modul_Dashboard_Guru.md](./21_Modul_Dashboard_Guru.md)
- Wali kelas read → [02_RBAC_IAM.md](./02_RBAC_IAM.md) §4.1
