# 15. Roadmap Implementasi

> Fase implementasi dari MVP hingga lanjutan. Setiap fase menghasilkan produk yang bisa diuji dan digunakan.

## Fase 0: Foundation (Minggu 1-2)

**Tujuan**: Setup proyek, database, auth, dan RBAC dasar.

| Task | Output |
|------|--------|
| Init proyek NestJS + Prisma + PostgreSQL | Struktur BE siap |
| Init proyek Next.js + Tailwind + TanStack Query | Struktur FE siap |
| Setup Docker Compose (PostgreSQL, Redis) | Environment lokal |
| Implementasi schema Prisma (User, Role, Permission, Kelas, Mapel, Tema) | Migrasi DB |
| Implementasi AuthModule (login, refresh, logout, JWT) | Endpoint auth |
| Implementasi IAM (Role, Permission, Guards) | RBAC siap |
| Seed data: role default, admin default | Bisa login sebagai admin |
| Setup Socket.IO gateway + Redis adapter | WS siap |

**Deliverable**: Admin bisa login, melihat daftar user, mengelola role.

## Fase 1: Core LMS (Minggu 3-5)

**Tujuan**: CRUD dasar untuk materi, bank soal, dan ujian.

| Task | Output |
|------|--------|
| CRUD Kelas, Mapel, Tema | Struktur organisasi siap |
| CRUD Materi + Tiptap editor (FE) | Guru bisa buat materi |
| Renderer materi (FE) + code block + video embed | Siswa bisa baca materi |
| CRUD Bank Soal + pilihan jawaban | Guru bisa buat soal |
| Setup Ujian + Publish (generate sesi acak) | Ujian bisa dibuat |
| Halaman pengerjaan ujian (FE) | Siswa bisa kerjakan ujian |
| Submit jawaban + scoring worker (BullMQ) | Ujian bisa dinilai |
| Halaman hasil ujian (FE) | Siswa lihat nilai |
| Statistik dasar ujian (guru) | Guru lihat hasil kelas |

**Deliverable**: Guru bisa membuat materi, bank soal, dan ujian. Siswa bisa membaca materi dan mengerjakan ujian.

## Fase 1b: Penilaian CPLF (Minggu 5-6)

**Tujuan**: Penilaian formatif per pertemuan, project semester, progress card.

| Task | Output |
|------|--------|
| Seed 108 tema CPLF + capability definitions | Navigasi journey 3 tahun |
| Modul PenilaianFormatif (BE + FE ceklis) | Guru isi 2–3 aspek per pertemuan |
| Modul Project (assignment, submission, DoD) | Project semester terkelola |
| Modul PeerReview (XI+) | Peer review terstruktur |
| Modul ProgressCard + auto-suggest | Kartu capability per semester |
| Dashboard guru (widget + alert) | Overview kelas actionable |
| Exit ticket siswa (opsional) | Refleksi digital per tema |

**Deliverable**: Guru bisa menilai formatif per pertemuan, project, dan generate progress card.

## Fase 2: Keamanan & Ketahanan (Minggu 7-8)

**Tujuan**: Verifikasi wajah, offline-first, tracking aktivitas.

| Task | Output |
|------|--------|
| Integrasi TensorFlow.js + face-api.js (FE) | Model wajah siap |
| Enrollment wajah (FE → BE) | Siswa daftarkan wajah |
| Verifikasi wajah sebelum ujian | Ujian terverifikasi |
| Implementasi IndexedDB (Dexie.js) untuk jawaban | Local DB siap |
| Auto-sync jawaban saat online | Offline-first ujian |
| Cache soal ujian di local DB | Soal bisa diakses offline |
| Hook useActivityTracker (scroll, durasi, kunjungan) | Tracking aktivitas |
| Endpoint tracking + service BE | Data tracking tersimpan |
| Dashboard aktivitas siswa (guru) | Guru lihat statistik baca |

**Deliverable**: Ujian dengan verifikasi wajah, bisa dikerjakan offline, aktivitas siswa terlacak.

## Fase 3: Manajemen Data & Profil (Minggu 9-10)

**Tujuan**: Bulk import, profil siswa, notifikasi.

| Task | Output |
|------|--------|
| Import CSV siswa (FE preview + BE worker) | Admin bisa import massal |
| Download template CSV | Panduan import |
| Halaman profil siswa (FE) + endpoint | Siswa kelola profil |
| Upload foto profil + resize (Sharp) | Foto profil |
| Ganti password + validasi | Keamanan akun |
| Notifikasi sistem (via WS) | Notifikasi realtime |
| Dashboard guru: rekap kelas, statistik | Guru punya overview |

**Deliverable**: Admin bisa import siswa, siswa bisa kelola profil, guru punya dashboard.

## Fase 4: Penyempurnaan & Scale (Minggu 11-13)

**Tujuan**: Polish, testing, deployment, dokumentasi.

| Task | Output |
|------|--------|
| Error handling & validasi komprehensif | Aplikasi stabil |
| Unit test & e2e test (BE) | Coverage > 70% |
| Load test (ujian serentak) | Performance terukur |
| Setup CI/CD (GitHub Actions) | Deploy otomatis |
| Deployment staging & production | Aplikasi live |
| Dokumentasi API (Swagger) | Developer docs |
| Dokumentasi user (panduan guru & murid) | User manual |
| Monitoring (Sentry, Bull Board, logs) | Observability |

**Deliverable**: Aplikasi siap produksi, terdeploy, dan termonitor.

## Fase 5: Lanjutan (Post-MVP)

| Fitur | Prioritas |
|-------|-----------|
| Multi-tema per ujian (gabung beberapa tema) | Medium |
| Koreksi manual soal esai oleh guru | High |
| Portofolio 3 tahun + showcase mode | Medium |
| Export PDF progress card | Medium |
| Multi-bahasa (i18n) | Low |
| Mobile app (React Native / PWA) | Medium |
| Integrasi SSO (Google, Microsoft) | Low |
| AI-assisted question generation | Low |
| Dashboard super admin multi-sekolah | Low |

## Timeline Visual

```
Minggu:  1  2  3  4  5  6  7  8  9  10 11 12 13
Fase 0:  ██ ██
Fase 1:      ██ ██ ██
Fase 1b:              ██ ██
Fase 2:                    ██ ██
Fase 3:                          ██ ██
Fase 4:                                ██ ██ ██
```

## Catatan

- Timeline bersifat estimasi; bisa disesuaikan dengan ketersediaan tim.
- Setiap fase harus di-review dan diuji sebelum lanjut ke fase berikutnya.
- Feedback dari user (guru & murid) di fase 1-3 akan mempengaruhi prioritas fase 4-5.
