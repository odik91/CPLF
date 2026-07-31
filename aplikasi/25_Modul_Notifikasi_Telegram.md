# 25. Modul Notifikasi Telegram

> **Fase lanjutan.** Push notifikasi via **Telegram Bot API** (gratis) ke siswa, guru, dan opsional orang tua — melengkapi WebSocket in-app (dok 08) untuk alert saat user tidak online di LMS.

## 1. Mengapa Telegram?

| Aspek | Telegram Bot API | Email sekolah | SMS |
|-------|------------------|---------------|-----|
| Biaya | **Gratis** | Gratis (terbatas) | Berbayar |
| Delivery | Cepat, read receipt opsional | Spam folder | Mahal bulk |
| Setup MA | Siswa/guru sudah punya Telegram | Email sering tidak dicek | Jarang |
| API | REST sederhana | SMTP / vendor | Vendor berbayar |

Telegram = **channel push utama** di luar app; WebSocket tetap untuk realtime saat user sedang buka LMS.

## 2. Prinsip

1. **Opt-in wajib** — user harus **link akun** sendiri (tidak auto-spam).
2. **BE yang kirim** — Bot token **hanya** di server; tidak pernah di FE.
3. **Queue async** — BullMQ `telegram-queue` agar burst notif tidak block API.
4. **Preferensi granular** — user pilih jenis notif yang diterima.
5. **Orang tua** — opsional, consent tertulis, hanya notif yang disetujui sekolah (bukan nilai detail sembarangan).

## 3. Setup Bot (Admin)

```text
1. Buat bot via @BotFather → dapat BOT_TOKEN
2. Simpan di BE env: TELEGRAM_BOT_TOKEN (secret)
3. Set webhook (opsional) atau polling dari worker
4. Admin dashboard: status bot, jumlah user ter-link
```

```env
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_BOT_USERNAME=cplf_ma_bot
TELEGRAM_WEBHOOK_SECRET=random-string
```

## 4. Link Akun User

### 4.1 Alur Link (Siswa / Guru)

```text
User login LMS → Profil → "Hubungkan Telegram"
  │
  ├── BE generate one-time token (expires 10 menit)
  │     GET /notifikasi/telegram/link-token → { token, deepLink }
  │
  ├── deepLink = https://t.me/cplf_ma_bot?start=link_{token}
  │
  ├── User buka di Telegram → /start link_abc123
  │
  ├── BE webhook/polling terima chatId + token
  │     validasi token → simpan TelegramLink
  │
  └── Konfirmasi di LMS: "Telegram terhubung ✓"
```

### 4.2 Orang Tua (Opsional)

```text
Profil siswa (diisi admin/guru) → kontakOrangTua
  │
  ├── Orang tua buka deep link khusus (token terikat siswaId)
  │     /start parent_{token}
  │
  ├── Hanya terima notif kategori ORANG_TUA (absensi, ringkasan)
  │
  └── Tidak bisa login LMS penuh — hanya receive-only
```

Consent: checkbox saat link + kebijakan madrasah (privasi data).

## 5. Model Data

```prisma
model TelegramLink {
  id            String   @id @default(uuid())
  userId        String?  @unique  // guru/murid — null jika pure parent link
  siswaId       String?  // jika link orang tua → murid yang diwakili
  tipe          TelegramLinkTipe // USER, ORANG_TUA
  chatId        String   @unique  // Telegram chat_id
  username      String?
  isActive      Boolean  @default(true)
  linkedAt      DateTime @default(now())

  preferensi    TelegramPreferensi?
}

enum TelegramLinkTipe { USER ORANG_TUA }

model TelegramPreferensi {
  id              String @id @default(uuid())
  telegramLinkId  String @unique
  ujianReminder   Boolean @default(true)
  ujianHasil      Boolean @default(true)
  materiBaru      Boolean @default(false)
  projectDeadline Boolean @default(true)
  absensiMasuk    Boolean @default(true)   // orang tua: default true
  absensiRingkas  Boolean @default(true)   // mingguan ke orang tua
  proctorAlert    Boolean @default(true)   // guru saja
  formatif        Boolean @default(false)

  telegramLink    TelegramLink @relation(...)
}

model NotifikasiOutbox {
  id          String   @id @default(uuid())
  targetChatId String
  templateKey String   // UJIAN_REMINDER, ABSENSI_MASUK, ...
  payloadJson Json
  status      String   @default("PENDING") // PENDING, SENT, FAILED
  attempts    Int      @default(0)
  sentAt      DateTime?
  errorMsg    String?
  createdAt   DateTime @default(now())
}
```

## 6. Jenis Notifikasi

| Template | Penerima | Trigger | Contoh pesan |
|----------|----------|---------|--------------|
| `UJIAN_REMINDER` | Siswa | 1 hari & 30 menit sebelum ujian | "Ujian P08 besok 07:00. Baca materi dulu ya." |
| `UJIAN_HASIL` | Siswa | Worker selesai scoring | "Ujian P07 selesai dinilai. Buka LMS lihat refleksi." |
| `MATERI_BARU` | Siswa kelas | Guru publish materi | "Materi P09 sudah tersedia." |
| `PROJECT_DEADLINE` | Siswa | H-3, H-1 project | "Project PRJ-X-S1-01 deadline 2 hari lagi." |
| `ABSENSI_MASUK` | Orang tua (opt-in) | Face absen OK (dok 26) | "Ahmad hadir Multimedia 07:12." |
| `ABSENSI_TIDAK_HADIR` | Guru wali/map | Akhir jam tanpa absen | "12 siswa belum absen P08 hari ini." |
| `PROCTOR_ALERT` | Guru | Proctor event CRITICAL | "Sesi ujian Budi: MULTIPLE_FACES." |
| `PROGRESS_CARD` | Siswa | Kartu difinalize | "Progress card S1 sudah bisa dilihat." |

## 7. Arsitektur Pengiriman

```text
Event (ujian publish, absen, dll.)
  │
  ├── NotificationService.createForUsers(...)
  │     resolve TelegramLink + preferensi
  │
  ├── Insert NotifikasiOutbox (PENDING)
  │
  └── Enqueue BullMQ job send-telegram
        │
        Worker:
          POST https://api.telegram.org/bot{TOKEN}/sendMessage
          { chat_id, text, parse_mode: 'HTML', disable_web_page_preview: true }
          │
          ├── 200 → SENT
          └── 429/5xx → retry exponential (max 3)
```

### 7.1 Rate Limit Telegram

- ~30 pesan/detik ke chat berbeda — cukup untuk MA (±500 user).
- Burst kelas: stagger 100ms antar job jika broadcast 36 siswa.

### 7.2 Format Pesan (HTML)

```html
<b>CPLF MA</b> — Reminder Ujian
📘 P08 — ATM & If-Else
🕐 Besok, 07:00 WIB
<a href="https://lms.sekolah.id/ujian">Buka LMS</a>
```

## 8. API Endpoints

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| GET | `/notifikasi/telegram/link-token` | User | Generate deep link |
| DELETE | `/notifikasi/telegram/unlink` | User | Putus Telegram |
| GET | `/notifikasi/telegram/status` | User | Status link + preferensi |
| PATCH | `/notifikasi/telegram/preferensi` | User | Update preferensi |
| POST | `/notifikasi/telegram/webhook` | Secret header | Webhook dari Telegram |
| POST | `/notifikasi/test` | ADMIN | Test kirim ke diri sendiri |

Webhook Telegram → BE only; validate `X-Telegram-Bot-Api-Secret-Token`.

## 9. Integrasi dengan Modul Lain

| Modul | Event → Telegram |
|-------|------------------|
| 04 Ujian | publish, reminder, hasil |
| 10 Worker | scoring selesai |
| 18 Project | deadline |
| 22 Proctor | alert guru |
| 26 Absensi | masuk/tidak hadir |
| 19 Progress card | finalize |

WebSocket (dok 08) tetap parallel — user online dapat keduanya; user offline dapat Telegram saja.

## 10. Keamanan & Privasi

- **Bot token** hanya env BE — rotate jika bocor.
- Deep link token one-time, hashed di DB.
- Orang tua: **tidak** terima isi jawaban ujian / nilai detail kecuali kebijakan madrasah mengizinkan ringkasan.
- `/unlink` kapan saja oleh user.
- Log `NotifikasiOutbox` tanpa isi sensitif di payload audit.

## 11. Fallback

| Kondisi | Fallback |
|---------|----------|
| User tidak link Telegram | In-app notif + email (opsional fase lanjut) |
| Telegram down | Retry queue; tampilkan di dashboard LMS |
| Orang tua tidak punya Telegram | Skip; guru tetap lihat absensi di LMS |

## 12. Roadmap

| Fase | Scope |
|------|-------|
| 6a | Bot + link siswa/guru + ujian reminder/hasil |
| 6b | Preferensi + project deadline |
| 6c | Orang tua absensi (dengan consent) |
| 6d | Broadcast admin (pengumuman sekolah) |

## 13. Referensi Silang

- WebSocket in-app → [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md)
- Worker queue → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
- Absensi trigger → [26_Modul_Absensi_Face_Recognition.md](./26_Modul_Absensi_Face_Recognition.md)
- Profil siswa (kontak ortu) → [12_Modul_Profil_Siswa.md](./12_Modul_Profil_Siswa.md)
