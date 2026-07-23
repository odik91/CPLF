# 09. Modul Ujian Offline-First

> FE wajib bisa menyimpan jawaban ujian di local DB (IndexedDB) untuk menangani masalah jaringan. Setelah kembali online, auto-submit dan clear local DB.

## 1. Prinsip

- **Jaringan sekolah tidak stabil** — siswa bisa kehilangan koneksi saat mengerjakan ujian.
- Setiap jawaban siswa disimpan **terlebih dahulu ke IndexedDB** (via Dexie.js) sebelum dikirim ke BE.
- Jika online, jawaban langsung dikirim ke BE dan dihapus dari local DB.
- Jika offline, jawaban tetap aman di local DB. Saat koneksi kembali, **auto-submit** semua jawaban yang pending.
- Setelah submit sukses ke BE, data local DB di-clear untuk sesi tersebut.

## 2. Skema Local DB (Dexie.js)

```ts
// lib/localdb/schema.ts
import Dexie, { Table } from 'dexie';

export interface LocalJawaban {
  id?: number;
  ujianSesiId: string;
  sesiSoalId: string;
  jawabanTeks?: string;
  pilihanJawabanId?: string;
  updatedAt: number; // timestamp
  synced: boolean;   // sudah terkirim ke BE?
}

export class ExamLocalDB extends Dexie {
  jawaban!: Table<LocalJawaban, number>;

  constructor() {
    super('CPLFExamDB');
    this.version(1).stores({
      jawaban: '++id, ujianSesiId, sesiSoalId, synced',
    });
  }
}

export const examDB = new ExamLocalDB();
```

## 3. Alur Pengerjaan Ujian (Offline-Aware)

### 3.1 Saat Siswa Menjawab Soal

```
Siswa pilih jawaban → FE simpan ke IndexedDB (synced=false)
  │
  ├── Jika online:
  │     POST /ujian/:id/submit-satu → kirim jawaban satu per satu (opsional)
  │     atau simpan batch di local, kirim periodik tiap 30 detik
  │     Jika sukses → update synced=true → hapus dari local DB
  │
  └── Jika offline:
        Jawaban tetap di IndexedDB
        Tampilkan indikator "offline" di UI (mis. icon jaringan putus)
        Siswa tetap bisa lanjut mengerjakan soal lain
```

### 3.2 Saat Submit Ujian (Selesai Mengerjakan)

```
Siswa klik "Selesai / Submit Ujian"
  │
  ├── FE kumpulkan semua jawaban dari IndexedDB untuk sesi ini
  │
  ├── Jika online:
  │     POST /ujian/:id/submit → kirim batch semua jawaban
  │     BE terima → status MENUNGGU_PROSES
  │     Jika sukses → clear local DB untuk sesi ini
  │     Tampilkan halaman "Jawaban terkirim, sedang diproses"
  │
  └── Jika offline:
        Tampilkan pesan "Koneksi terputus. Jawaban akan otomatis terkirim saat online kembali."
        Ubah status lokal sesi menjadi "MENUNGGU_KONEKSI"
        Daftarkan ke sync queue
```

### 3.3 Auto-Sync Saat Online Kembali

```ts
// hooks/useExamSync.ts
import { useEffect } from 'react';
import { examDB } from '@/lib/localdb/schema';

export function useExamSync() {
  useEffect(() => {
    const handleOnline = async () => {
      const pending = await examDB.jawaban
        .where('synced')
        .equals(false)
        .toArray();

      if (pending.length === 0) return;

      // Group by ujianSesiId
      const grouped = groupBy(pending, 'ujianSesiId');

      for (const [sesiId, jawaban] of Object.entries(grouped)) {
        try {
          await fetch(`/api/ujian/${sesiId}/submit`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jawaban }),
          });
          // Hapus dari local DB
          await examDB.jawaban
            .where('ujianSesiId')
            .equals(sesiId)
            .delete();
        } catch (err) {
          console.error('Sync gagal untuk sesi', sesiId, err);
          // Akan dicoba lagi di event online berikutnya
        }
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);
}
```

### 3.4 Periodik Sync (Interval)

Selain event `online`, FE juga melakukan sync periodik setiap 60 detik (jika ada jawaban pending) sebagai jaga-jaga jika event `online` tidak terdeteksi dengan baik.

```ts
// Di dalam useExamSync, tambahkan:
useEffect(() => {
  const interval = setInterval(async () => {
    if (navigator.onLine) {
      await syncPendingJawaban();
    }
  }, 60_000);
  return () => clearInterval(interval);
}, []);
```

## 4. Sinkronisasi Data Ujian (Materi & Soal)

Selain jawaban, data soal ujian juga perlu di-cache di local agar siswa bisa tetap melihat soal saat offline:

```ts
// Saat siswa mulai ujian, FE simpan data soal ke IndexedDB:
export interface LocalSoalUjian {
  sesiSoalId: string;
  urutan: number;
  tipe: string;
  pertanyaan: string;
  pilihan: Array<{ id: string, teks: string }>; // dalam urutan tampil
}

// Tabel tambahan di Dexie:
soalUjian: 'sesiSoalId, ujianSesiId',
```

Dengan ini, jika koneksi terputus setelah soal dimuat, siswa tetap bisa melihat dan menjawab soal.

## 5. Batasan & Pertimbangan

| Skenario | Penanganan |
|----------|------------|
| Siswa offline saat waktu ujian habis | Timer tetap berjalan di FE (menggunakan `Date.now()` lokal, bukan server time). Saat online, BE validasi `waktuSubmit` tidak melebihi `waktuSelesai` + toleransi (mis. 5 menit). |
| Conflict data (jawaban sudah terkirim sebelumnya) | BE menggunakan `Upsert` berdasarkan `sesiSoalId` — jawaban terakhir yang menang. |
| Local DB penuh | IndexedDB memiliki kuota besar (biasanya > 50% disk). Risiko kecil untuk data teks. |
| Multiple tab browser | Peringatkan siswa jika membuka ujian di tab lain. Gunakan `BroadcastChannel API` untuk sync status antar tab. |

## 6. Endpoint

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `POST /ujian/:id/submit` | POST | Submit batch jawaban (dari local DB) |
| `POST /ujian/:id/submit-satu` | POST | Submit satu jawaban (opsional, realtime) |

## 7. Referensi Silang

- Alur ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- Background processing → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
- WebSocket → [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md)
