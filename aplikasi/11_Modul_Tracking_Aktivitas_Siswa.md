# 11. Modul Tracking Aktivitas Siswa

> FE wajib bisa tracking aktivitas siswa saat mengakses materi untuk melihat statistik aktivitas siswa dan sebagai bahan evaluasi guru terhadap siswa.

## 1. Data yang Dilacak

| Metrik | Cara Ukur | Tujuan |
|--------|-----------|--------|
| **Lama akses per materi** | Waktu antara masuk halaman materi dan meninggalkannya (atau tab focus vs blur) | Guru tahu berapa lama siswa membaca |
| **Scroll position** | Persentase scroll maksimal (0-100%) | Indikasi apakah materi dibaca sampai selesai |
| **Jumlah kunjungan** | Counter increment setiap kali siswa membuka halaman materi | Frekuensi akses (apakah siswa mengulang) |
| **Waktu kunjungan** | Timestamp setiap kali buka materi | Pola waktu belajar siswa |
| **Interaksi** (opsional) | Klik, copy teks, buka code block | Engagement lebih dalam |

## 2. Arsitektur Tracking

### 2.1 FE: Hook `useActivityTracker`

```ts
// hooks/useActivityTracker.ts
"use client";
import { useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface TrackerConfig {
  materiId: string;
  slug: string;
  intervalFlush?: number; // ms, default 30_000
}

export function useActivityTracker({ materiId, slug, intervalFlush = 30_000 }: TrackerConfig) {
  const startTime = useRef(Date.now());
  const maxScroll = useRef(0);
  const visitCounted = useRef(false);

  // Hitung scroll depth
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
    if (percent > maxScroll.current) maxScroll.current = percent;
  }, []);

  // Kirim heartbeat periodik
  const sendHeartbeat = useDebounce(async () => {
    const duration = Math.floor((Date.now() - startTime.current) / 1000);
    await fetch('/api/aktivitas/heartbeat', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        materiId,
        durasiDetik: duration,
        maxScrollPercent: maxScroll.current,
      }),
    });
  }, intervalFlush);

  useEffect(() => {
    // Count kunjungan sekali per sesi
    if (!visitCounted.current) {
      visitCounted.current = true;
      fetch('/api/aktivitas/kunjungan', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ materiId, slug }),
      });
    }

    window.addEventListener('scroll', handleScroll);
    const heartbeatInterval = setInterval(sendHeartbeat, intervalFlush);

    // Kirim data akhir saat leave page
    const handleBeforeUnload = () => {
      const duration = Math.floor((Date.now() - startTime.current) / 1000);
      navigator.sendBeacon('/api/aktivitas/leave', JSON.stringify({
        materiId,
        durasiDetik: duration,
        maxScrollPercent: maxScroll.current,
      }));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(heartbeatInterval);
      // Kirim data akhir saat unmount (navigasi SPA)
      const duration = Math.floor((Date.now() - startTime.current) / 1000);
      fetch('/api/aktivitas/leave', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          materiId,
          durasiDetik: duration,
          maxScrollPercent: maxScroll.current,
        }),
      });
    };
  }, [materiId, slug, handleScroll, sendHeartbeat]);
}
```

### 2.2 FE: Integrasi ke Halaman Materi

```tsx
"use client";
export default function MateriPage({ params }: { params: { slug: string } }) {
  const { data: materi } = useQuery({
    queryKey: ['materi', params.slug],
    queryFn: () => fetchMateri(params.slug),
  });

  // Aktivasi tracker
  useActivityTracker({ materiId: materi?.id, slug: params.slug });

  return <MateriRenderer contentJson={materi?.contentJson} />;
}
```

## 3. Backend: Endpoint Tracking

| Endpoint | Method | Body | Deskripsi |
|----------|--------|------|-----------|
| `POST /aktivitas/kunjungan` | POST | `{ materiId, slug }` | Count kunjungan baru (upsert) |
| `POST /aktivitas/heartbeat` | POST | `{ materiId, durasiDetik, maxScrollPercent }` | Update periodik |
| `POST /aktivitas/leave` | POST | `{ materiId, durasiDetik, maxScrollPercent }` | Final update saat leave |

### 3.1 Service Logic

```ts
// Services/aktivitas.service.ts
async recordKunjungan(materiId: string, siswaId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Cari aktivitas hari ini untuk materi ini
  const existing = await this.prisma.aktivitasMateri.findFirst({
    where: {
      materiId,
      siswaId,
      createdAt: { gte: today },
    },
    orderBy: { createdAt: 'desc' },
  });

  if (existing) {
    // Increment kunjungan jika sudah ada record hari ini
    await this.prisma.aktivitasMateri.update({
      where: { id: existing.id },
      data: { kunjunganKe: existing.kunjunganKe + 1 },
    });
  } else {
    // Buat record baru
    await this.prisma.aktivitasMateri.create({
      data: {
        materiId,
        siswaId,
        kunjunganKe: 1,
        waktuMulaiBaca: new Date(),
      },
    });
  }
}

async recordHeartbeat(materiId: string, siswaId: string, durasiDetik: number, maxScrollPercent: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const aktivitas = await this.prisma.aktivitasMateri.findFirst({
    where: {
      materiId,
      siswaId,
      createdAt: { gte: today },
    },
    orderBy: { createdAt: 'desc' },
  });

  if (!aktivitas) return;

  await this.prisma.aktivitasMateri.update({
    where: { id: aktivitas.id },
    data: {
      totalDurasiDetik: durasiDetik,
      maxScrollPercent: Math.max(aktivitas.maxScrollPercent, maxScrollPercent),
      selesaiDibaca: maxScrollPercent >= 90, // threshold 90%
    },
  });
}
```

## 4. Statistik untuk Guru

### 4.1 Data yang Ditampilkan

| View | Data |
|------|------|
| **Per materi** | Jumlah siswa yang sudah membaca, rata-rata durasi baca, % siswa yang selesai baca, daftar siswa + detail individunya |
| **Per siswa** | Riwayat akses semua materi: durasi, scroll, kunjungan, waktu akses |
| **Rekap kelas** | Ranking aktivitas siswa (total durasi baca, jumlah materi selesai) |

### 4.2 Endpoint Statistik

| Endpoint | Method | Role | Deskripsi |
|----------|--------|------|-----------|
| `GET /statistik/aktivitas/materi/:materiId` | GET | GURU | Statistik per materi (agregat kelas) |
| `GET /statistik/aktivitas/siswa/:siswaId` | GET | GURU | Riwayat aktivitas siswa tertentu |
| `GET /statistik/aktivitas/saya` | GET | MURID | Aktivitas saya sendiri |
| `GET /statistik/aktivitas/kelas/:kelasId/rekap` | GET | GURU | Rekap aktivitas seluruh kelas |

## 5. Privasi & Etika

- Siswa **diberi tahu** bahwa aktivitas mereka dilacak (tampilkan notifikasi sekali saat pertama kali buka materi).
- Data tracking hanya bisa diakses oleh guru yang mengampu kelas tersebut.
- Data tracking tidak digunakan untuk nilai, hanya untuk evaluasi partisipasi & bahan diskusi guru-siswa.
- Siswa bisa melihat data tracking mereka sendiri (transparansi).

## 6. Referensi Silang

- Entitas `AktivitasMateri` → [03_Skema_Database.md](./03_Skema_Database.md)
- Halaman materi → [07_Modul_Materi_Pembelajaran.md](./07_Modul_Materi_Pembelajaran.md)
- Dashboard guru → [13_Struktur_Proyek.md](./13_Struktur_Proyek.md)
