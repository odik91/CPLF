# 22. Modul Client Ujian — Mobile & Desktop (Electron)

> **Fase lanjutan (post-MVP web).** Client khusus ujian berintegrasi dengan BE NestJS yang sama. Fokus: **integritas ujian** (kamera aktif, fokus layar, deteksi anomali) dengan AI/rule-engine **on-device** sebisa mungkin — selaras etika CPLF Kelas XII.

## 1. Mengapa Client Terpisah?

| Masalah di browser biasa | Solusi client khusus |
|--------------------------|----------------------|
| Tab switching mudah | Electron: kiosk mode / fullscreen lock |
| Kamera bisa dimatikan tanpa deteksi | Monitor stream aktif + heartbeat |
| DevTools / inspect element | Electron: disable devtools saat ujian |
| Mobile browser backgrounded | Native/React Native: foreground service |
| Offline tidak konsisten | Dexie + sync protocol sama (dok 09) |

**Web LMS (Next.js)** tetap dipakai untuk materi, penilaian formatif, dashboard. **Client ujian** hanya untuk sesi `UjianSesi` dengan flag `requiresSecureClient: true`.

## 2. Arsitektur Multi-Client

```
                    ┌─────────────────────┐
                    │   BE NestJS (sama)   │
                    │   REST + WebSocket   │
                    └──────────┬──────────┘
           ┌───────────────────┼───────────────────┐
           │                   │                   │
    ┌──────▼──────┐    ┌───────▼───────┐   ┌──────▼──────┐
    │ Web (Next)  │    │ Electron      │   │ Mobile      │
    │ ujian ringan│    │ Windows/macOS │   │ Android/iOS │
    │ + materi    │    │ ujian secure  │   │ ujian secure│
    └─────────────┘    └───────────────┘   └─────────────┘
                              │                   │
                         Proctor AI            Proctor AI
                         (on-device)          (on-device)
```

## 3. Tech Stack Rekomendasi

| Platform | Stack | Catatan |
|----------|-------|---------|
| Desktop | **Electron** + React + Vite | Satu codebase UI dengan web; shared `packages/shared` |
| Mobile | **React Native** (Expo dev client) | Reuse logic proctor dari `packages/proctor-core` |
| Proctor AI | **TensorFlow.js** + face-api / MediaPipe | Sama ecosystem dengan verifikasi wajah (dok 05) |
| Local DB | Dexie.js (Electron) / SQLite (RN) | Offline exam sync |
| Auth | OAuth device flow / deep link + cookie bridge | Token httpOnly via secure storage native |

Alternatif mobile lebih ringan: **Capacitor** wrap React app — lebih cepat MVP, integritas sedikit lebih lemah dari RN native.

## 4. Modul AI Proctor (On-Device)

### 4.1 Prinsip Etika & Privasi

- **Inference 100% di device** — frame kamera tidak di-upload ke cloud (kecuali mode audit eksplisit dengan consent sekolah).
- BE hanya terima **event telemetry** (bukan video): `FACE_MISSING`, `MULTIPLE_FACES`, `GAZE_AWAY`, `TAB_BLUR`.
- Siswa dan orang tua diinformasikan sebelum ujian secure — selaras [09_Rubrik_Etika_AI.md](../09-rubrik/09_Rubrik_Etika_AI.md) E2.
- Rekaman video **opsional** & off by default; jika aktif: retensi maks 7 hari, hanya admin/guru ujian.

### 4.2 Rule Engine (MVP Proctor)

```text
Setiap 3 detik (configurable):
  1. Deteksi wajah di frame → count faces
  2. Bandingkan dengan embedding enrollment (cosine similarity)
  3. Cek brightness / face size (kamera tidak ditutup)
  4. (Electron) Cek window focus / display capture

Events:
  FACE_OK           → reset counter pelanggaran
  FACE_MISSING      → warning 1, 2, 3 → PAUSE ujian
  IDENTITY_MISMATCH → flag + notifikasi guru realtime (WS)
  MULTIPLE_FACES    → flag langsung
  CAMERA_OFF        → block submit
  TAB_SWITCH        → (web only) warning; (electron) log

Setelah 3 pelanggaran FACE_MISSING → status sesi PROCTOR_PAUSED
  → siswa harus verifikasi ulang + guru approve resume via WS
```

### 4.3 AI Lanjutan (Fase 2)

| Fitur | Model | On-device? |
|-------|-------|------------|
| Deteksi wajah | face-api.js SSD MobileNet | ✅ |
| Verifikasi identitas | face-api FaceRecognitionNet | ✅ |
| Head pose / gaze | MediaPipe Face Mesh | ✅ |
| Deteksi objek (HP di frame) | TF.js COCO-SSD (lite) | ✅ opsional |
| Anomaly scoring | Rule-based → ML ringan (TensorFlow Lite) | ✅ |

**Tidak direkomendasikan** untuk MA: kirim stream ke API cloud (AWS Rekognition, dll.) — biaya, privasi, dan ketergantungan jaringan.

## 5. Fitur Kamera Wajib Aktif

### 5.1 Pre-flight Check (Sebelum Mulai)

```text
Client ujian secure:
  [ ] Kamera terdeteksi & permission granted
  [ ] Wajah terdeteksi stabil 3 detik
  [ ] Verifikasi identitas ≥ threshold (dok 05)
  [ ] (Electron) Fullscreen mode OK
  [ ] (Mobile) Battery ≥ 20% atau charging
  [ ] Jaringan ≥ offline cache ready

Semua OK → POST /ujian/:id/mulai { clientType: "ELECTRON"|"MOBILE", proctorCapable: true }
```

### 5.2 Heartbeat Proctor

```typescript
// packages/proctor-core/heartbeat.ts
interface ProctorHeartbeat {
  ujianSesiId: string;
  timestamp: number;
  faceDetected: boolean;
  identityScore?: number;
  violationType?: 'FACE_MISSING' | 'MULTIPLE_FACES' | 'GAZE_AWAY' | 'CAMERA_OFF';
  clientFocus: boolean;
}

// POST /ujian/:id/proctor-heartbeat setiap 5–10 detik
// BE: simpan ke ProctorEventLog (agregat, bukan video)
```

### 5.3 UI Siswa Saat Pelanggaran

- Banner kuning: "Wajah tidak terdeteksi — arahkan kamera ke wajah"
- Banner merah setelah 3x: "Ujian dijeda — hubungi guru"
- Timer ujian **tidak berhenti** kecuali guru set `pauseOnViolation: true` di setting ujian

## 6. Setting Ujian — Secure Client

Perluasan model `Ujian`:

```prisma
model Ujian {
  // ... existing fields
  requiresSecureClient   Boolean @default(false)
  proctorConfig          Json?   // lihat bawah
}

// proctorConfig example:
{
  "minIdentityScore": 0.6,
  "faceCheckIntervalMs": 3000,
  "maxFaceMissingBeforePause": 3,
  "pauseOnViolation": false,
  "allowWebFallback": false,      // jika true, web boleh; jika false, wajib Electron/mobile
  "allowedClients": ["ELECTRON", "MOBILE", "WEB"],
  "recordVideoAudit": false,
  "blockScreenCapture": true       // Electron only
}
```

## 7. Electron — Hardening

```javascript
// main process — saat ujian aktif
mainWindow.setFullScreen(true);
mainWindow.setAlwaysOnTop(true, 'screen-saver');
mainWindow.webContents.on('before-input-event', (e, input) => {
  if (input.key === 'F12' || (input.control && input.shift && input.key === 'I')) {
    e.preventDefault();
  }
});

// macOS: setContentProtection(true) — hindari screen recording (best effort)
// Windows: SetWindowDisplayAffinity WDA_EXCLUDEFROMCAPTURE
```

Catatan: tidak ada solusi 100% anti-cheat; tujuan CPLF = **meningkatkan integritas & kesadaran etis**, bukan spyware.

## 8. Mobile — Pertimbangan

| Platform | API | Catatan |
|----------|-----|---------|
| Android | CameraX + foreground service | Notif "Ujian aktif — jangan tutup app" |
| iOS | AVFoundation | Background limit ketat — siswa harus keep app open |
| Permission | Kamera wajib sebelum mulai | Tolak mulai jika denied |

Deep link: `cplf-exam://ujian/{id}` dari web LMS → buka app native.

## 9. Model Data Proctor

```prisma
model ProctorEventLog {
  id            String   @id @default(uuid())
  ujianSesiId   String
  eventType     String   // FACE_OK, FACE_MISSING, ...
  severity      String   // INFO, WARNING, CRITICAL
  identityScore Float?
  metadataJson  Json?
  createdAt     DateTime @default(now())
  ujianSesi     UjianSesi @relation(...)
}

// Index: ujianSesiId + createdAt
```

Guru lihat timeline proctor di halaman statistik ujian — **bukan** untuk auto-zero nilai, hanya bahan evaluasi integritas (selaras filosofi CPLF: observasi, bukan hukuman otomatis).

## 10. API Endpoints (Tambahan)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/ujian/:id/proctor-heartbeat` | MURID (secure client) |
| GET | `/ujian/:id/proctor-log/:sesiId` | GURU — timeline events |
| POST | `/ujian/:id/proctor-resume` | GURU — resume sesi paused |
| GET | `/ujian/:id/client-requirements` | MURID — cek client type allowed |

## 11. Roadmap Client

| Fase | Deliverable |
|------|-------------|
| 5a | Electron MVP: ujian + kamera heartbeat + fullscreen |
| 5b | Proctor rule engine + WS alert guru |
| 5c | Android app (React Native) |
| 5d | iOS app + polish |
| 5e | ML anomaly optional |

## 12. Referensi Silang

- Verifikasi wajah → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Ujian offline → [09_Modul_Ujian_Offline_First.md](./09_Modul_Ujian_Offline_First.md)
- WebSocket alert → [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md)
- Syarat materi sebelum ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md) § Syarat Partisipasi
