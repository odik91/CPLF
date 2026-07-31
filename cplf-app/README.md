# CPLF LMS Application

Monorepo aplikasi LMS untuk kurikulum CPLF.

- **FE:** Next.js 15 → deploy Vercel
- **BE:** NestJS 10 + Prisma → deploy VPS native (PM2 + Nginx)
- **DB:** PostgreSQL + Redis (native, tanpa Docker)

## Struktur

```
cplf-app/
├── apps/api/       # NestJS backend
├── apps/web/       # Next.js frontend
├── packages/shared/
└── deploy/         # Contoh Nginx, PM2, backup
```

## Setup lokal

### Prasyarat

- Node.js 20+
- PostgreSQL 15+ (running)
- Redis 7+ (opsional untuk MVP auth)

### 1. Install dependencies

```bash
cd cplf-app
npm install
```

### 2. Environment

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

Edit `DATABASE_URL` di `apps/api/.env` sesuai PostgreSQL lokal.

### 3. Database

```bash
# Buat database: createdb cplf  (atau via pgAdmin)

npm run db:generate
npm run db:migrate
npm run db:seed
```

Seed membuat user **admin / admin123** (wajib ganti password saat login pertama).

### 4. Jalankan dev

```bash
npm run dev
```

- API: http://localhost:4000/api/v1/health
- Web: http://localhost:3000

## Modul selesai

| Modul | Status |
|-------|--------|
| M0 Infra & Monorepo | MVP |
| M1 Auth & IAM | MVP |
| M2 Kelas/Mapel CRUD | MVP dasar |

Lihat `../aplikasi/27_Dev_Todo_List_Per_Modul.md` untuk tracking lengkap.

## Production (ringkas)

1. VPS: install Node, PostgreSQL, Redis, Nginx, PM2
2. Clone repo, `npm install && npm run build`
3. `npm run db:migrate` + seed
4. PM2: lihat `deploy/ecosystem.config.cjs`
5. Nginx reverse proxy: lihat `deploy/nginx.conf.example`
6. Vercel: deploy `apps/web`, set `NEXT_PUBLIC_API_URL`
