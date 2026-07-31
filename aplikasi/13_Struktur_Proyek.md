# 13. Struktur Proyek

> Struktur folder monorepo untuk BE (NestJS) dan FE (Next.js). Keduanya di-deploy terpisah, dapat berada dalam satu repo git atau dua repo — rekomendasi: **monorepo** agar kontrak API & tipe bersama mudah disinkronkan.

## 1. Gambaran Monorepo

```
cplf-app/
├── apps/
│   ├── api/                    # NestJS backend
│   └── web/                    # Next.js frontend
├── packages/
│   └── shared/                 # Tipe TypeScript, konstanta, validasi Zod (opsional)
├── deploy/                     # Skrip & config deploy native (bukan Docker)
│   ├── nginx/
│   │   └── cplf-api.conf.example
│   ├── pm2/
│   │   └── ecosystem.config.js
│   ├── scripts/
│   │   ├── setup-vps.sh        # install PG, Redis, Node (idempotent)
│   │   ├── backup-db.sh        # pg_dump cron
│   │   └── deploy-api.sh       # pull, build, pm2 reload
│   └── README-deploy.md
├── .github/workflows/          # CI: lint, test, build (deploy manual/SSH ke VPS)
├── package.json                # Workspace root (pnpm workspaces)
└── README.md
```

> **Tidak ada folder `docker/`** — deploy native di VPS; FE di Vercel. Lihat [01_Arsitektur_Sistem.md §6](./01_Arsitektur_Sistem.md).

## 2. Struktur BE — `apps/api/`

```
apps/api/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed/
│       ├── seed.ts               # Role, admin default
│       ├── seed-cplf-tema.ts     # 108 tema dari mapping CPLF
│       └── seed-capability.ts    # Kode capability CX/CXI/CXII
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── common/
│   │   ├── decorators/           # @CurrentUser, @RequirePermissions, @Roles
│   │   ├── filters/                # HttpExceptionFilter
│   │   ├── guards/                 # JwtAuthGuard, RolesGuard, PermissionsGuard
│   │   ├── interceptors/           # OwnershipScopeInterceptor
│   │   ├── pipes/                  # ValidationPipe wrapper
│   │   └── dto/                    # PaginationDto, ApiResponseDto
│   ├── config/
│   │   ├── database.config.ts
│   │   ├── jwt.config.ts
│   │   ├── redis.config.ts
│   │   └── storage.config.ts
│   └── modules/
│       ├── auth/
│       ├── iam/
│       ├── user/
│       ├── kelas/
│       ├── materi/
│       ├── bank-soal/
│       ├── ujian/
│       ├── ujian-submission/
│       ├── face-verification/
│       ├── aktivitas/
│       ├── penilaian/              # Formatif per pertemuan
│       ├── project/                # Project semester + peer review
│       ├── progress-card/          # Capability tracking
│       ├── portofolio/
│       ├── statistik/
│       ├── notification/
│       ├── file/
│       ├── audit-log/
│       ├── worker/                 # BullMQ processors
│       └── realtime/               # Socket.IO gateway
├── test/
│   ├── e2e/
│   └── unit/
├── nest-cli.json
├── tsconfig.json
└── package.json
```

### 2.1 Konvensi Modul NestJS

Setiap modul domain mengikuti pola:

```
modules/<nama>/
├── <nama>.module.ts
├── <nama>.controller.ts
├── <nama>.service.ts
├── dto/
│   ├── create-*.dto.ts
│   └── update-*.dto.ts
├── entities/                     # (jika tidak pakai Prisma types langsung)
└── <nama>.spec.ts
```

Worker processors berada di `modules/worker/processors/`:

```
worker/processors/
├── ujian-scoring.processor.ts
├── bulk-import-siswa.processor.ts
└── statistik-agregasi.processor.ts
```

## 3. Struktur FE — `apps/web/`

```
apps/web/
├── public/
│   ├── models/                   # face-api.js weights (TF.js)
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (shell)
│   │   ├── page.tsx              # Landing / redirect
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── ganti-password/page.tsx
│   │   ├── (guru)/
│   │   │   ├── layout.tsx        # Sidebar guru
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── kelas/
│   │   │   ├── materi/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── baru/page.tsx
│   │   │   │   └── [slug]/edit/page.tsx
│   │   │   ├── bank-soal/
│   │   │   ├── ujian/
│   │   │   ├── penilaian/
│   │   │   │   ├── formatif/[temaId]/page.tsx   # Ceklis per pertemuan
│   │   │   │   └── project/[projectId]/page.tsx
│   │   │   ├── progress-card/[siswaId]/page.tsx
│   │   │   └── statistik/
│   │   ├── (murid)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── materi/
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── ujian/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/kerjakan/page.tsx
│   │   │   ├── project/
│   │   │   ├── peer-review/
│   │   │   ├── portofolio/page.tsx
│   │   │   └── profil/page.tsx
│   │   └── (admin)/
│   │       ├── users/
│   │       ├── kelas/
│   │       └── import/
│   ├── components/
│   │   ├── ui/                   # shadcn/ui primitives
│   │   ├── layout/               # Sidebar, Header, Breadcrumb
│   │   ├── editor/               # Tiptap block editor
│   │   ├── materi-renderer/      # Block content viewer
│   │   ├── exam/                 # Ujian offline-aware
│   │   ├── penilaian/            # Ceklis formatif, rubrik 6 aspek
│   │   ├── progress-card/        # Kartu capability
│   │   └── charts/               # Recharts wrappers
│   ├── hooks/
│   │   ├── useActivityTracker.ts
│   │   ├── useAuth.ts
│   │   ├── useExamOffline.ts
│   │   └── useWebSocket.ts
│   ├── lib/
│   │   ├── api/                  # Axios client + interceptors
│   │   ├── ws/                   # Socket.IO client
│   │   ├── localdb/              # Dexie schema (offline exam)
│   │   ├── faceapi/              # TF.js face verification
│   │   └── utils/
│   ├── stores/                   # Zustand (UI state ringan)
│   └── types/                    # Re-export dari packages/shared
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 3.1 Prinsip FE

- **Semua page yang butuh data user** → `"use client"` + React Query.
- **Tidak ada** `app/api/*` route handler yang akses DB langsung.
- Shared types di `packages/shared` agar FE & BE selaras.

## 4. Package Shared — `packages/shared/`

```
packages/shared/
├── src/
│   ├── constants/
│   │   ├── roles.ts              # SUPER_ADMIN, GURU, MURID, ...
│   │   ├── aspek-cplf.ts         # OBS, REA, COM, ITR, TRF, TEC
│   │   └── capability-codes.ts   # CX-B1, CXI-T1, ...
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── materi.types.ts       # BlockContentJson
│   │   ├── ujian.types.ts
│   │   └── penilaian.types.ts
│   └── validators/               # Zod schemas (opsional)
├── tsconfig.json
└── package.json
```

## 5. Environment Variables

### BE (`apps/api/.env`)

```env
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_ACCESS_SECRET=...
JWT_REFRESH_SECRET=...
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d
STORAGE_ENDPOINT=...
STORAGE_BUCKET=cplf-assets
STORAGE_ACCESS_KEY=...
STORAGE_SECRET_KEY=...
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

### FE (`apps/web/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_WS_URL=http://localhost:4000
# Tidak ada secret DB atau JWT di FE
```

## 6. Referensi Silang

- Arsitektur → [01_Arsitektur_Sistem.md](./01_Arsitektur_Sistem.md)
- Mapping CPLF → [16_Mapping_CPLF_ke_App.md](./16_Mapping_CPLF_ke_App.md)
- API contract → [14_API_Contract_Overview.md](./14_API_Contract_Overview.md)
- Roadmap implementasi → [15_Roadmap_Implementasi.md](./15_Roadmap_Implementasi.md)
