# 23. Modul Ekspresi & Siklus Belajar (Face + Expression)

> **Fase lanjutan.** Modul untuk **pembelajaran harian** (bukan ujian): face recognition saat memasuki siklus belajar + **deteksi ekspresi** yang di-trigger guru untuk evaluasi kelas — terutama saat Experience, Cognitive Trap, dan Reflect.

## 1. Tujuan CPLF

Membantu guru **mengamati respons emosional/kognitif** siswa tanpa menggantikan interaksi manusia:

```text
😄  Engagement / tertarik
↓
🤔  Bingung / processing (sering muncul saat Trap — NORMAL)
↓
😳  Malu / tertantang (Trap berhasil — handle dengan KBC ramah anak)
↓
🤣  Relieve / lega setelah clarify
↓
🤯  Cognitive overload / "aha moment"
↓
😁  Transfer / puas memahami
```

**Bukan** untuk menilai karakter siswa atau mempermalukan. Data = **bahan diskusi formatif** (OBS, REA), bukan skor otomatis.

## 2. Konsep "Siklus Belajar"

Dua **mode sumber kamera** — guru pilih saat memulai siklus:

| Mode | Kapan dipakai | Device siswa | Resource |
|------|---------------|--------------|----------|
| **`STUDENT_DEVICE`** (default) | Siswa punya laptop/HP | Kamera siswa | Sedang × N siswa |
| **`GURU_CAMERA`** | Siswa **tanpa** device / lab tanpa perangkat | **Tidak perlu** | **Rendah** — 1 kamera guru saja |
| **`HYBRID`** | Sebagian siswa ada device | Campuran | Rendah–sedang |

### 2.1 Alur Umum

```text
Guru memulai Siklus Belajar (pilih mode kamera)
  │
  ├── [STUDENT_DEVICE] Siswa buka materi → kamera siswa sampling
  │
  ├── [GURU_CAMERA] Guru pakai kamera laptop/USB di meja guru
  │     └── Snapshot manual / spot-check — lihat §6 (resource minimal)
  │
  ├── Guru trigger fase: Trap / Clarify / Reflect
  │
  ├── BE agregat timeline ekspresi
  │
  └── Dashboard guru: heatmap kelas (+ individual jika ter-tag)
```

Detail mode kamera guru → **§6**.

## 3. Mapping Ekspresi Teknis → Emoji Guru

Model deteksi standar (face-api.js `expressions`):

| Model output | Emoji UI | Interpretasi CPLF | Catatan guru |
|--------------|----------|-------------------|--------------|
| `happy` (tinggi) | 😄 | Engagement | Normal awal Experience |
| `neutral` + brow | 🤔 | Processing / ragu | **Diharapkan** saat Trap |
| `surprised` / `fearful` | 😳 | Tertantang / malu | Scaffold, jangan evaluasi negatif |
| `happy` (puncak) | 🤣 | Relief setelah clarify | Trap berhasil |
| `surprised` (puncak) | 🤯 | Overload / breakthrough | Beri jeda, pecah langkah |
| `happy` (stabil) | 😁 | Transfer / puas | Target akhir siklus |

Agregasi: **modus ekspresi dominan per window 30 detik**, bukan frame-by-frame ke siswa.

## 4. Tech Stack

| Layer | Rekomendasi | Alasan |
|-------|-------------|--------|
| Face detect | `@vladmandic/face-api` | Sudah dipakai di dok 05 |
| Expression | face-api `FaceExpressions` (7 emotions) | On-device, no cloud |
| Alternatif | MediaPipe Face Landmarker + custom head | Lebih akurat pose, setup lebih berat |
| Trigger realtime | WebSocket `siklus:fase` | Guru push fase ke kelas |
| Storage | Agregat di BE, **bukan** simpan foto/frame | Privasi |

### 4.1 Prinsip Privasi (Wajib)

- **Tidak menyimpan foto/video** siswa dari sesi ekspresi (default).
- Hanya simpan: `{ timestamp, expressionLabel, confidence, faseSiklus }`.
- Siswa & wali informed consent di awal semester (MA).
- Guru **tidak** boleh share timeline individual ke siswa lain.
- Opt-out per siswa (admin set flag `ekspresiOptOut` di profil).

## 5. Model Data

```prisma
enum SiklusCaptureMode {
  STUDENT_DEVICE
  GURU_CAMERA
  HYBRID
}

enum EkspresiCaptureSource {
  STUDENT
  GURU_CAMERA_CLASS
  GURU_CAMERA_TAGGED
}

model SiklusBelajar {
  id                      String   @id @default(uuid())
  temaId                  String
  kelasId                 String
  guruId                  String
  captureMode             SiklusCaptureMode @default(STUDENT_DEVICE)
  guruAutoCaptureOnPhase  Boolean  @default(false)
  faseAktif                String?
  status                  String   @default("IDLE")
  startedAt               DateTime?
  endedAt                 DateTime?
  tema                    Tema     @relation(...)
  samples                 EkspresiSample[]
}

model EkspresiSample {
  id              String   @id @default(uuid())
  siklusId        String
  siswaId         String?  // null = agregat kelas (GURU_CAMERA_CLASS)
  captureSource   EkspresiCaptureSource
  faseSiklus      String
  expressionMap   Json
  emojiDominan    String
  confidence      Float
  facesInFrame    Int?
  taggedSiswaId   String?
  sampledAt       DateTime @default(now())

  siklus          SiklusBelajar @relation(...)
  @@index([siklusId, siswaId, sampledAt])
}

model ProfilSiswa {
  // ... existing
  ekspresiOptOut  Boolean @default(false)
}
```

## 6. Mode Kamera Guru — Resource Minimal

> **Use case:** kelas tanpa lab device, siswa tidak bawa HP, atau kebijakan sekolah melarang kamera per siswa. Guru memakai **satu kamera** (built-in laptop atau USB webcam) di device guru.

### 6.1 Prinsip Hemat Resource

| Prinsip | Implementasi | Mengapa |
|---------|--------------|---------|
| **Snapshot, bukan stream** | Inference **1 frame** per aksi guru | Hindari loop 30fps — hemat CPU/baterai |
| **Model ringan** | `TinyFaceDetector` (face-api) | ~10× lebih ringan dari SSD MobileNet |
| **Resolusi rendah** | Resize input **320×240** sebelum infer | Cukup untuk ekspresi kasar |
| **Inference lokal guru** | TF.js di browser guru saja | Nol upload video; nol beban di siswa |
| **Buang frame segera** | Hanya kirim JSON scores ke BE | Tidak simpan gambar |
| **Lazy load model** | Load model saat siklus `GURU_CAMERA` start | Tidak membebani halaman guru biasa |
| **Satu proses infer** | Satu `detectAllFaces` per snapshot | Bukan N kamera paralel |

Perkiraan beban (laptop guru standar): **~200–400 ms CPU** per snapshot @ 320p — acceptable untuk 5–10 snapshot per pertemuan.

### 6.2 Sub-Mode Guru (Pilih Saat Start)

```text
GURU_CAMERA
  ├── CLASS_SNAPSHOT (default — paling ringan)
  │     Guru arahkan kamera ke kelas → tap "Capture Kelas"
  │     → deteksi semua wajah visible → agregat emoji dominan kelas
  │     → siswaId = null, facesInFrame = N
  │
  └── TAGGED_SPOT (individual tanpa device siswa)
        Guru pilih nama siswa di dropdown → arahkan kamera ke siswa
        → tap "Capture" → 1 wajah di frame → linked taggedSiswaId
        → tanpa face recognition / enrollment — guru yang tag manual
```

**Tidak** memakai continuous sampling di mode guru — hanya **manual capture** atau **auto-capture saat ganti fase** (opsional, max 1 capture per fase).

### 6.3 UI Guru — Panel Kamera

```
┌─────────────────────────────────────────┐
│  Siklus: X-S1-P04 Trap  [GURU_CAMERA]  │
├─────────────────────────────────────────┤
│  ┌─────────────────┐                    │
│  │ Preview kamera  │  (mirrored, low   │
│  │ 320×240         │   res canvas)     │
│  └─────────────────┘                    │
│  Mode: ○ Capture Kelas  ○ Spot siswa    │
│  [Dropdown siswa] (jika Spot)           │
│  [📷 Capture]  [Trap!] [Clarify] ...   │
├─────────────────────────────────────────┤
│  Hasil terakhir: 🤔 dominan (12 wajah)  │
│  Timeline fase Trap: 😄→🤔→😳           │
└─────────────────────────────────────────┘
```

Preview kamera: `<video>` hidden atau canvas kecil — **tidak** full HD preview (hemat GPU).

### 6.4 Alur Capture (FE Guru)

```typescript
// lib/expression/guru-capture.ts — "use client" di dashboard guru
async function guruCaptureClass(siklusId: string, fase: string) {
  const frame = grabVideoFrame(videoRef, { maxWidth: 320 }); // canvas one-shot
  const faces = await faceapi
    .detectAllFaces(frame, new faceapi.TinyFaceDetectorOptions({ inputSize: 224 }))
    .withFaceExpressions();

  frame.dispose?.(); // release canvas

  const aggregate = aggregateExpressions(faces); // modus emoji kelas
  await api.post(`/siklus-belajar/${siklusId}/guru-capture`, {
    captureSource: 'GURU_CAMERA_CLASS',
    faseSiklus: fase,
    expressionMap: aggregate.map,
    emojiDominan: aggregate.emoji,
    confidence: aggregate.avgConfidence,
    facesInFrame: faces.length,
    // TIDAK kirim image/blob
  });
}
```

### 6.5 Auto-Capture Saat Ganti Fase (Opsional)

Setting `SiklusBelajar.guruAutoCaptureOnPhase: boolean` (default **false**):

- Jika `true`: saat guru tap **Trap!** / **Clarify** → otomatis 1 snapshot kelas.
- Tetap **max 1 infer per aksi** — bukan interval timer.

Rekomendasi MA: **manual capture default**; auto hanya jika guru aktifkan.

### 6.6 Kamera Eksternal (USB)

- Pakai `navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } })`.
- Guru pilih device di dropdown jika ada multiple (`deviceId`).
- Tidak perlu driver khusus — Web API browser di laptop guru (Chrome/Edge).
- **Tidak perlu** app Electron untuk mode ini — web dashboard guru cukup.

### 6.7 Interpretasi Data Mode Kelas

Timeline mode `GURU_CAMERA_CLASS` menampilkan **kurva respons kelas**, bukan per siswa:

```
Trap — Capture 1 (10:15): 🤔 dominan · 28 wajah
Trap — Capture 2 (10:18): 😳 dominan · 25 wajah  ← Trap bekerja
Clarify — Capture 3 (10:22): 🤣 dominan · 30 wajah
Reflect — Capture 4 (10:40): 😁 dominan · 32 wajah
```

Insight tetap actionable untuk guru formatif — selaras CPLF (observasi kelompok).

Mode `TAGGED_SPOT` melengkapi dengan titik data per siswa untuk yang perlu follow-up — **tanpa** siswa pegang device.

### 6.8 Kasus Khusus MA

| Situasi | Rekomendasi |
|---------|-------------|
| Lab komputer rusak / tidak ada | `GURU_CAMERA` + CLASS_SNAPSHOT |
| Siswa tidak bawa HP (kebijakan MA) | Same |
| Kelompok kecil (6 siswa) di depan | TAGGED_SPOT per siswa |
| Siswa malu kamera sendiri | Opt-out + guru observasi manual spot |
| Ruangan gelap | Warning "pencahayaan kurang" — skip infer, guru catat manual |

### 6.9 API Tambahan (Mode Guru)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/siklus-belajar/start` | Body: `{ captureMode: "GURU_CAMERA", guruAutoCaptureOnPhase?: boolean }` |
| POST | `/siklus-belajar/:id/guru-capture` | GURU — kirim hasil infer (JSON only) |
| POST | `/siklus-belajar/:id/guru-capture-tagged` | GURU — `{ taggedSiswaId, ...scores }` |

Body `guru-capture` (tanpa binary):

```json
{
  "captureSource": "GURU_CAMERA_CLASS",
  "faseSiklus": "TRAP",
  "emojiDominan": "🤔",
  "expressionMap": { "neutral": 0.5, "happy": 0.2, "surprised": 0.15 },
  "confidence": 0.72,
  "facesInFrame": 28
}
```

### 6.10 Perbandingan Resource

| Metode | CPU guru | CPU siswa | Network | Kamera aktif |
|--------|----------|-----------|---------|--------------|
| Student continuous 3s | — | Tinggi × N | Tinggi | N stream |
| Guru snapshot manual | **Rendah** | **Nol** | **Minimal** | 1, on-demand |
| Guru auto per fase | Rendah | Nol | Minimal | 1, ~6×/90 menit |
| Student + Guru hybrid | Rendah | Sedang × subset | Sedang | Campuran |

**Default rekomendasi untuk MA dengan keterbatasan device: `GURU_CAMERA` + CLASS_SNAPSHOT + manual capture.**

## 7. Alur FE Siswa (Mode STUDENT_DEVICE)

```typescript
// Saat guru start siklus → WS event siklus:started
useSiklusBelajar({
  onActive: () => {
    startExpressionSampler({
      intervalMs: 3000,
      onSample: (expressions) => {
        const emoji = mapToCplfEmoji(expressions);
        queueSample({ emoji, expressions }); // batch flush ke BE
      },
    });
  },
  onPhaseChange: (fase) => { currentFase = fase; },
  onEnded: () => stopSampler(),
});
```

Sampling **hanya** jika:
- `SiklusBelajar.status === ACTIVE`
- Kamera permission granted
- Siswa tidak opt-out
- Tab/fokus di app (opsional warning jika blur)

> Mode `GURU_CAMERA`: siswa **tidak** menjalankan sampler — hanya ikut siklus via WS (opsional tampilkan fase di proyektor).

## 8. Dashboard Guru — Timeline Ekspresi

### 8.1 View Kelas (Agregat)

```
Trap (10:15–10:20)
  😄 12 siswa → 🤔 28 siswa → 😳 8 siswa → 🤔 15 siswa
  Insight: "Mayoritas processing — normal untuk Trap. 8 siswa perlu check-in."

Reflect (10:40–10:45)
  🤯 5 siswa → 😁 30 siswa
```

### 8.2 View Individual (Scoped guru)

Timeline vertikal per siswa — **hanya** untuk follow-up formatif, bukan ranking.

### 8.3 Trigger Manual Guru

Tombol di dashboard guru saat siklus aktif:

| Tombol | Fase WS | Efek |
|--------|---------|------|
| Mulai Experience | `EXPERIENCE` | Reset baseline |
| Trap! | `TRAP` | Window observasi intensif |
| Clarify | `CLARIFY` | |
| Reflect | `REFLECT` | |
| 📷 Capture (GURU_CAMERA) | — | 1 snapshot infer |

## 9. API & WebSocket

### REST

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/siklus-belajar/start` | GURU — `{ captureMode?, guruAutoCaptureOnPhase? }` |
| POST | `/siklus-belajar/:id/guru-capture` | GURU — snapshot kelas (JSON scores) |
| POST | `/siklus-belajar/:id/guru-capture-tagged` | GURU — spot-check siswa tertentu |
| POST | `/siklus-belajar/:id/samples-batch` | MURID — kirim agregat (STUDENT_DEVICE) |
| GET | `/siklus-belajar/:id/timeline` | GURU — timeline kelas |
| GET | `/siklus-belajar/:id/siswa/:siswaId` | GURU — timeline individual |
| POST | `/siklus-belajar/:id/fase` | GURU — ubah fase |
| POST | `/siklus-belajar/:id/end` | GURU — akhiri |

### WebSocket Events

```typescript
'siklus:started': { siklusId, temaId, fase }
'siklus:fase': { siklusId, fase: 'TRAP' | 'CLARIFY' | ... }
'siklus:ended': { siklusId }
```

## 10. Integrasi Penilaian Formatif

Data ekspresi **tidak** auto-set level aspek. Guru bisa:

1. Lihat timeline saat Trap → siswa 😳 lama → catatan formatif OBS/REA.
2. Export snapshot ke sesi `PenilaianFormatif` sebagai **catatan kontekstual** (opsional link).

Anti-pattern: "Siswa 😳 = level 1 REA" — **dilarang**.

## 11. Beda dengan Proctor Ujian (Dok 22)

| Aspek | Siklus Belajar (23) | Ujian Secure (22) |
|-------|---------------------|-------------------|
| Tujuan | Evaluasi pedagogis | Integritas ujian |
| Kapan | Pembelajaran harian | Saat ujian saja |
| Ekspresi | ✅ fokus utama | ❌ (hanya face presence) |
| Kamera guru | ✅ mode GURU_CAMERA | ❌ |
| Client | Web LMS cukup | Electron/mobile disarankan |
| Simpan foto | ❌ default | ❌ default |
| Resource | Snapshot manual = minimal | Heartbeat 3s |

## 12. Referensi Silang

- Verifikasi wajah → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- KBC ramah anak (Trap) → [05_Mapping_Kurikulum_Berbasis_Cinta.md](../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md)
- Etika AI XII → [09_Rubrik_Etika_AI.md](../09-rubrik/09_Rubrik_Etika_AI.md)
