# 01. Arsitektur Sistem

## 1. Gambaran Umum

Aplikasi terdiri dari 2 (dua) codebase terpisah yang di-deploy secara independen:

```
┌─────────────────────┐        HTTPS (REST)        ┌──────────────────────┐
│                      │ ──────────────────────────▶│                      │
│   FE - Next.js       │                             │   BE - NestJS        │
│   (Client-side only  │◀────────────────────────── │   (REST + WS +       │
│   data fetching)      │        WSS (Socket.IO)      │    Background Worker)│
│                      │ ──────────────────────────▶│                      │
└──────────┬───────────┘                             └──────────┬───────────┘
           │                                                     │
           │ direct (khusus 3rd party publik,                    │
           │ mis. iframe YouTube/Vimeo)                          │
           ▼                                                     ▼
   ┌───────────────┐                                    ┌─────────────────┐
   │ YouTube/Vimeo │                                    │ PostgreSQL       │
   │ (embed only)  │                                    │ Redis (Queue/Sub)│
   └───────────────┘                                    │ Object Storage   │
                                                          │ (S3-compatible) │
                                                          └─────────────────┘
```

- **FE (Next.js)** tidak pernah menyentuh database atau secret apa pun secara langsung. Semua request data (termasuk login, materi, soal, statistik) **wajib** melalui BE.
- Pengecualian: elemen yang **memang didesain publik oleh vendor pihak ketiga untuk diakses langsung dari browser client**, contoh: `<iframe>` embed YouTube/Vimeo untuk video materi. BE hanya menyimpan **URL/ID video**, bukan proxy stream-nya.
- **BE (NestJS)** menjadi satu-satunya gerbang akses data: REST API untuk CRUD & aksi, WebSocket (Socket.IO Gateway) untuk event realtime, dan Background Worker (BullMQ) untuk proses berat/asinkron (scoring ujian, import CSV besar, dsb).

## 2. Prinsip "No Server Component untuk Data"

Next.js App Router digunakan **hanya** sebagai:
- Routing & layout shell.
- Static shell rendering (halaman awal, skeleton, SEO dasar bila diperlukan untuk halaman publik non-sensitif seperti landing page).

Next.js **tidak** digunakan untuk:
- Server Actions yang menyentuh database.
- `fetch()` di Server Component yang membawa credential/query sensitif.
- Route Handler (`app/api/*`) sebagai proxy tersembunyi ke DB (jika terpaksa dipakai sebagai proxy CORS, harus stateless dan tanpa akses DB langsung — tetap forward ke BE).

Setiap halaman yang menampilkan data sensitif wajib:
```tsx
"use client";
// fetch dilakukan di client, ke BE, dengan token dari httpOnly cookie
// via React Query + axios/fetch wrapper
```

Alasan: menghindari kerentanan umum RSC (SSRF, kebocoran secret di server functions, cache poisoning data user-spesifik, request smuggling antara server Next.js dan BE).

## 3. Komponen Utama BE (NestJS)

| Modul | Tanggung Jawab |
|-------|-----------------|
| `AuthModule` | Login, refresh token, logout, guard JWT |
| `IamModule` | RBAC: Role, Permission, User-Role mapping |
| `UserModule` | CRUD user (guru/murid/admin), bulk import CSV |
| `KelasModule` | Data kelas, mapel, penempatan siswa/guru |
| `MateriModule` | CRUD materi (block-based content) |
| `BankSoalModule` | CRUD soal per tema, tag, tingkat kesulitan |
| `UjianModule` | Setup ujian, generate paket soal acak per siswa |
| `UjianSubmissionModule` | Terima submission, taruh ke queue, kembalikan status awal |
| `FaceVerificationModule` | Simpan/validasi embedding wajah (bukan proses inference) |
| `ActivityTrackingModule` | Terima batch event tracking aktivitas siswa |
| `PenilaianModule` | Penilaian formatif per pertemuan (6 aspek CPLF) |
| `ProjectModule` | Project semester, submission, DoD, peer review |
| `ProgressCardModule` | Progress card capability per semester |
| `PortofolioModule` | Portofolio 3 tahun siswa |
| `DashboardModule` | Agregat widget guru & admin |
| `ProctorModule` | Heartbeat & event log client ujian secure |
| `SiklusBelajarModule` | Ekspresi & fase observasi kelas |
| `CodeSnippetModule` | Editor kode siswa + run log |
| `WaliKelasModule` | Rekap nilai read-only kelas wali |
| `TelegramModule` | Link akun, preferensi, outbox queue |
| `AbsensiModule` | Sesi absensi, face check-in, rekap |
| `NotificationModule` / `RealtimeGateway` | WebSocket gateway (Socket.IO) |
| `WorkerModule` (BullMQ processors) | Scoring ujian async, proses import CSV besar, agregasi statistik |
| `FileModule` | Upload gambar materi, avatar, dsb (ke S3-compatible storage) |
| `AuditLogModule` | Log aktivitas admin/guru penting (audit trail) |

## 4. Komponen Utama FE (Next.js)

| Area | Tanggung Jawab |
|------|-----------------|
| `app/(auth)` | Login page |
| `app/(guru)/...` | Dashboard guru: kelas, materi, bank soal, ujian, statistik |
| `app/(murid)/...` | Dashboard murid: materi, ujian, profil |
| `lib/api` | Axios/fetch client wrapper ke BE, interceptor refresh token |
| `lib/ws` | Socket.IO client wrapper |
| `lib/localdb` | Dexie.js schema untuk offline exam |
| `lib/faceapi` | Wrapper TensorFlow.js untuk enrollment & verifikasi wajah |
| `components/editor` | Block-based content renderer & editor untuk materi |
| `components/exam` | Komponen pengerjaan ujian (offline-aware) |
| `hooks/useActivityTracker` | Hook tracking scroll/waktu/kunjungan materi |
| `components/penilaian` | Ceklis formatif, rubrik project, progress card |
| `app/(guru)/penilaian` | Halaman penilaian per pertemuan & project |
| `app/(murid)/portofolio` | Portofolio & showcase akhir |

## 5. Alur Keamanan Data Singkat

1. Login → BE verifikasi kredensial → set `access_token` (short-lived, in-memory/localStorage tidak disarankan) via **httpOnly, Secure, SameSite=strict cookie** + `refresh_token` terpisah (httpOnly juga).
2. Setiap request FE→BE menyertakan cookie otomatis (credentials: 'include'); BE validasi via `JwtAuthGuard`.
3. Otorisasi granular per endpoint via `RolesGuard` + `PermissionsGuard` (lihat dokumen 02).
4. CORS BE dikonfigurasi ketat: hanya origin FE yang di-allow, `credentials: true`.
5. Rate limiting (mis. `@nestjs/throttler`) di endpoint sensitif (login, submit ujian, verifikasi wajah).
6. Validasi input konsisten via `class-validator` DTO di semua endpoint.

## 6. Topologi Deployment — VPS + Vercel (Tanpa Docker)

> **Keputusan arsitektur:** Tidak memakai Docker/container. Pada VPS resource terbatas, overhead Docker (daemon, layer image, container network) memakan RAM/CPU yang seharusnya untuk PostgreSQL, Redis, dan proses NestJS. Semua service di-install **native** di OS.

### 6.1 Produksi (Target)

```
[Vercel]                    [VPS — single node, native services]
  FE Next.js                  Nginx (reverse proxy + TLS)
  (static/SSR shell)            ├── api.domain.id → NestJS (PM2/systemd)
  env: NEXT_PUBLIC_API_URL    ├── ws.domain.id  → NestJS Socket.IO
                              PostgreSQL (native, localhost)
                              Redis (native, localhost)
                              NestJS Worker (PM2 proses terpisah, opsional)
                              Upload disk → /var/cplf/uploads atau R2/S3 eksternal
```

| Komponen | Where | Catatan |
|----------|-------|---------|
| **FE** | **Vercel** (rekomendasi) | Build Next.js; semua data via client ke BE VPS |
| **BE API + WS** | **VPS** | Satu codebase NestJS; WS via Nginx upgrade |
| **PostgreSQL** | VPS native (`apt install postgresql`) | Bind localhost only |
| **Redis** | VPS native (`apt install redis-server`) | Bind localhost; ~50–100 MB RAM |
| **Worker** | VPS — proses PM2 ke-2 | Bisa gabung 1 VPS kecil awalnya |
| **File upload** | Disk VPS `/var/cplf/uploads` **atau** Cloudflare R2 | Hindari MinIO self-host (hemat RAM) |
| **Docker** | ❌ **Tidak dipakai** | Dev & prod sama-sama native |

### 6.2 VPS — Perkiraan Resource Minimal

| Service | RAM (approx) | Catatan |
|---------|--------------|---------|
| PostgreSQL | 256–512 MB | `shared_buffers` disesuaikan VPS kecil |
| Redis | 50–128 MB | `maxmemory 128mb` |
| NestJS API | 150–300 MB | 1 instance PM2 |
| NestJS Worker | 100–200 MB | Bisa start/stop saat ujian saja |
| Nginx | ~20 MB | |
| **Total** | **~1–1.5 GB** | VPS 2 GB RAM masih feasible |

### 6.3 Nginx (contoh singkat)

```nginx
# /etc/nginx/sites-available/cplf-api
server {
  listen 443 ssl http2;
  server_name api.cplf.example.com;

  location / {
    proxy_pass http://127.0.0.1:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

### 6.4 Proses Manager — PM2

```bash
# apps/api — ecosystem.config.js
module.exports = {
  apps: [
    { name: 'cplf-api', script: 'dist/main.js', instances: 1, exec_mode: 'fork' },
    { name: 'cplf-worker', script: 'dist/worker.js', instances: 1, autorestart: true },
  ],
};
```

Worker scoring/import bisa **dimatikan** (`pm2 stop cplf-worker`) saat tidak ada ujian — hemat resource.

### 6.5 FE di Vercel — Catatan Penting

- **Cookie cross-domain:** BE di `api.domain.id`, FE di `app.domain.id` → set cookie `SameSite=None; Secure` + CORS `credentials: true`, atau pertimbangkan **subdomain sama** (`app` + `api` under `cplf.sekolah.id`).
- **WebSocket:** Vercel **tidak** host WS — Socket.IO client connect langsung ke `wss://api.domain.id`.
- Env Vercel: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_WS_URL` only — **no secrets**.

### 6.6 Lingkungan Dev Lokal (Tanpa Docker)

| Service | Dev lokal |
|---------|-----------|
| PostgreSQL | Install native Windows/WSL **atau** pointing ke DB dev di VPS (VPN/SSH tunnel) |
| Redis | Install native / Memurai (Windows) / WSL |
| MinIO | ❌ skip — pakai folder lokal `uploads/` di dev |
| BE | `pnpm --filter api dev` |
| FE | `pnpm --filter web dev` |

Tidak ada `docker compose up` di workflow proyek ini.

### 6.7 Backup & Monitoring (Native)

- `pg_dump` cron harian → offsite (rsync / object storage)
- PM2 log + `logrotate`
- Uptime: UptimeRobot ping `/health`
- Queue: endpoint admin `/dashboard/admin/kesehatan` (dok 21)

### 6.8 Piston / Code Execution (Tanpa Docker)

Untuk ujian coding (dok 24): **jangan** deploy Piston container di VPS kecil. Opsi:
1. **MVP:** browser sandbox saja (practice)
2. **Lanjutan:** Piston install native (binary) di VPS terpisah jika benar-benar perlu
3. **Alternatif:** subprocess Node terisolasi + `timeout` + `ulimit` (lebih ringan, security review wajib)

- BE API server dan Worker = **2 proses PM2** di VPS yang sama (awal); pisah VPS hanya jika load tinggi.
- Redis dipakai ganda: broker BullMQ + adapter Socket.IO (`@socket.io/redis-adapter`).

## 7. Referensi Silang

- Detail role & permission → [02_RBAC_IAM.md](./02_RBAC_IAM.md)
- Detail entitas data → [03_Skema_Database.md](./03_Skema_Database.md)
- Detail folder proyek → [13_Struktur_Proyek.md](./13_Struktur_Proyek.md)
- Mapping CPLF 108 pertemuan → [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
- Todo dev per modul → [27_Dev_Todo_List_Per_Modul.md](./27_Dev_Todo_List_Per_Modul.md)
