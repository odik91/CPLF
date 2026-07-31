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

## 6. Topologi Deployment (Rekomendasi)

```
[Reverse Proxy / Nginx]
   ├── / (FE - Next.js, static/standalone build)
   └── /api, /ws (BE - NestJS)

[BE Instance] ── [Redis] (BullMQ queue + pub/sub untuk WS scaling)
              ── [PostgreSQL] (data utama)
              ── [Object Storage] (S3-compatible: gambar materi, avatar, dsb)
[Worker Instance(s)] terpisah dari BE utama untuk proses berat (scoring, import CSV)
```

- BE API server dan Worker bisa dipisah proses (horizontal scale worker saat beban ujian tinggi/serentak).
- Redis dipakai ganda: sebagai broker BullMQ dan sebagai adapter Socket.IO (`@socket.io/redis-adapter`) agar WS bisa scale multi-instance.

## 7. Referensi Silang

- Detail role & permission → [02_RBAC_IAM.md](./02_RBAC_IAM.md)
- Detail entitas data → [03_Skema_Database.md](./03_Skema_Database.md)
- Detail folder proyek → [13_Struktur_Proyek.md](./13_Struktur_Proyek.md)
- Mapping CPLF 108 pertemuan → [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md)
- Penilaian formatif → [17_Modul_Penilaian_Formatif_Pertemuan.md](./17_Modul_Penilaian_Formatif_Pertemuan.md)
