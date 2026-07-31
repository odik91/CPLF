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

```text
Guru memulai Siklus Belajar (per kelas, per pertemuan)
  │
  ├── Siswa buka materi / join sesi live di app
  │     └── Face verify ringan (opsional) → masuk siklus
  │
  ├── FE mulai sampling ekspresi (hanya saat siklus AKTIF)
  │     └── On-device inference setiap 2–5 detik
  │
  ├── Guru trigger fase observasi:
  │     "Trap dimulai" / "Clarify" / "Reflect"
  │     └── Window observasi 2–5 menit
  │
  ├── BE agregat timeline ekspresi per siswa (anonim aggregate opsional)
  │
  └── Guru lihat dashboard:
        Heatmap kelas + timeline individual (dengan consent)
```

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
model SiklusBelajar {
  id          String   @id @default(uuid())
  temaId      String
  kelasId     String
  guruId      String
  faseAktif   String?  // EXPERIENCE, TRAP, CLARIFY, CONCEPT, PRACTICE, REFLECT
  status      String   @default("IDLE") // IDLE, ACTIVE, PAUSED, ENDED
  startedAt   DateTime?
  endedAt     DateTime?
  tema        Tema     @relation(...)
  samples     EkspresiSample[]
}

model EkspresiSample {
  id              String   @id @default(uuid())
  siklusId        String
  siswaId         String
  faseSiklus      String   // TRAP, CLARIFY, ...
  expressionMap   Json     // { happy: 0.8, neutral: 0.1, ... } — raw scores
  emojiDominan    String   // 😄 🤔 😳 🤣 🤯 😁
  confidence      Float
  sampledAt       DateTime @default(now())

  siklus          SiklusBelajar @relation(...)
  @@index([siklusId, siswaId, sampledAt])
}

model ProfilSiswa {
  // ... existing
  ekspresiOptOut  Boolean @default(false)
}
```

## 6. Alur FE Siswa

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

## 7. Dashboard Guru — Timeline Ekspresi

### 7.1 View Kelas (Agregat)

```
Trap (10:15–10:20)
  😄 12 siswa → 🤔 28 siswa → 😳 8 siswa → 🤔 15 siswa
  Insight: "Mayoritas processing — normal untuk Trap. 8 siswa perlu check-in."

Reflect (10:40–10:45)
  🤯 5 siswa → 😁 30 siswa
```

### 7.2 View Individual (Scoped guru)

Timeline vertikal per siswa — **hanya** untuk follow-up formatif, bukan ranking.

### 7.3 Trigger Manual Guru

Tombol di dashboard guru saat siklus aktif:

| Tombol | Fase WS | Efek |
|--------|---------|------|
| Mulai Experience | `EXPERIENCE` | Reset baseline |
| Trap! | `TRAP` | Window observasi intensif |
| Clarify | `CLARIFY` | |
| Reflect | `REFLECT` | |

## 8. API & WebSocket

### REST

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/siklus-belajar/start` | GURU — mulai siklus |
| POST | `/siklus-belajar/:id/fase` | GURU — ubah fase |
| POST | `/siklus-belajar/:id/end` | GURU — akhiri |
| POST | `/siklus-belajar/:id/samples-batch` | MURID — kirim agregat samples |
| GET | `/siklus-belajar/:id/timeline` | GURU — timeline kelas |
| GET | `/siklus-belajar/:id/siswa/:siswaId` | GURU — timeline individual |

### WebSocket Events

```typescript
'siklus:started': { siklusId, temaId, fase }
'siklus:fase': { siklusId, fase: 'TRAP' | 'CLARIFY' | ... }
'siklus:ended': { siklusId }
```

## 9. Integrasi Penilaian Formatif

Data ekspresi **tidak** auto-set level aspek. Guru bisa:

1. Lihat timeline saat Trap → siswa 😳 lama → catatan formatif OBS/REA.
2. Export snapshot ke sesi `PenilaianFormatif` sebagai **catatan kontekstual** (opsional link).

Anti-pattern: "Siswa 😳 = level 1 REA" — **dilarang**.

## 10. Beda dengan Proctor Ujian (Dok 22)

| Aspek | Siklus Belajar (23) | Ujian Secure (22) |
|-------|---------------------|-------------------|
| Tujuan | Evaluasi pedagogis | Integritas ujian |
| Kapan | Pembelajaran harian | Saat ujian saja |
| Ekspresi | ✅ fokus utama | ❌ (hanya face presence) |
| Client | Web LMS cukup | Electron/mobile disarankan |
| Simpan foto | ❌ default | ❌ default |

## 11. Referensi Silang

- Verifikasi wajah → [05_Modul_Verifikasi_Wajah.md](./05_Modul_Verifikasi_Wajah.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- KBC ramah anak (Trap) → [05_Mapping_Kurikulum_Berbasis_Cinta.md](../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md)
- Etika AI XII → [09_Rubrik_Etika_AI.md](../09-rubrik/09_Rubrik_Etika_AI.md)
