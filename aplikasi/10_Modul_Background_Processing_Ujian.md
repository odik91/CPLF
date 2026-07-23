# 10. Modul Background Processing Ujian

> Input dan pemrosesan data ujian dilakukan di background process (BullMQ) untuk menghindari proses terlalu lama akibat keterbatasan resources. BE hanya mengembalikan state awal, mis. "jawaban telah diproses" → "selesai" → WS balik jika masih online.

## 1. Prinsip

- Saat siswa submit ujian, BE **tidak** langsung melakukan scoring di request handler.
- BE hanya: validasi input → simpan jawaban dengan `statusProses = PENDING` → enqueue job ke BullMQ → kembalikan response cepat ke FE.
- Worker (proses terpisah atau dalam thread pool) mengambil job dari queue, melakukan scoring, update status.
- Setelah selesai, jika siswa masih online, push notifikasi via WebSocket.

## 2. Arsitektur Queue

```
[FE] POST /ujian/:id/submit
  │
  ▼
[BE Controller]
  │ 1. Validasi token & sesi
  │ 2. Simpan JawabanSiswa (statusProses = PENDING)
  │ 3. Update UjianSesi.status = MENUNGGU_PROSES
  │ 4. Enqueue job ke BullMQ: { type: 'score-ujian-sesi', data: { ujianSesiId } }
  │ 5. Return { status: 'MENUNGGU_PROSES', message: 'Jawaban diterima, sedang diproses' }
  │
  ▼
[Redis] ──► [BullMQ Queue: scoring-queue]
              │
              ▼
         [Worker Instance(s)]
              │
              ├── 1. Ambil job dari queue
              ├── 2. Ambil semua JawabanSiswa untuk sesi ini
              ├── 3. Proses scoring:
              │     - PILIHAN_GANDA / BENAR_SALAH: cocokkan pilihanJawabanId dengan isBenar
              │     - ESAI_SINGKAT: pattern matching atau flagged untuk review manual
              ├── 4. Update JawabanSiswa: isBenar, skor, statusProses = DONE
              ├── 5. Hitung nilaiAkhir = (jumlahBenar / totalSoal) * 100
              ├── 6. Update UjianSesi: nilaiAkhir, status = SELESAI
              └── 7. Emit event via WebSocket: 'ujian:selesai' ke room user:{siswaId}
```

## 3. Implementasi NestJS + BullMQ

### 3.1 Module Setup

```ts
// Modules/Queue/queue.module.ts
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'scoring-queue',
    }),
  ],
  providers: [ScoringProducer, ScoringConsumer],
})
export class QueueModule {}
```

### 3.2 Producer (dari Controller)

```ts
// Modules/Ujian/producers/scoring.producer.ts
@Injectable()
export class ScoringProducer {
  constructor(@InjectQueue('scoring-queue') private queue: Queue) {}

  async enqueueScoring(ujianSesiId: string) {
    await this.queue.add('score-ujian-sesi', { ujianSesiId }, {
      attempts: 3,           // retry 3x jika gagal
      backoff: { type: 'exponential', delay: 5000 },
      removeOnComplete: true,
      removeOnFail: 100,     // simpan 100 job gagal terakhir untuk debugging
    });
  }
}
```

### 3.3 Consumer (Worker)

```ts
// Modules/Ujian/consumers/scoring.consumer.ts
@Processor('scoring-queue')
export class ScoringConsumer {
  constructor(
    private prisma: PrismaService,
    private wsGateway: RealtimeGateway,
  ) {}

  @Process('score-ujian-sesi')
  async handleScoring(job: Job<{ ujianSesiId: string }>) {
    const { ujianSesiId } = job.data;

    // 1. Ambil sesi & semua jawaban
    const sesi = await this.prisma.ujianSesi.findUnique({
      where: { id: ujianSesiId },
      include: {
        soalTerpilih: {
          include: {
            soal: { include: { pilihan: true } },
            jawaban: true,
          },
        },
      },
    });

    if (!sesi || sesi.status === 'SELESAI') return;

    let jumlahBenar = 0;
    const totalSoal = sesi.soalTerpilih.length;

    // 2. Scoring per soal
    for (const sesiSoal of sesi.soalTerpilih) {
      const jawaban = sesiSoal.jawaban;
      if (!jawaban) continue;

      let isBenar = false;
      let skor = 0;

      if (sesiSoal.soal.tipe === 'PILIHAN_GANDA' || sesiSoal.soal.tipe === 'BENAR_SALAH') {
        const pilihanBenar = sesiSoal.soal.pilihan.find(p => p.isBenar);
        isBenar = jawaban.pilihanJawabanId === pilihanBenar?.id;
        skor = isBenar ? 100 / totalSoal : 0;
      } else if (sesiSoal.soal.tipe === 'ESAI_SINGKAT') {
        // Pattern matching sederhana (case-insensitive, trim)
        const jawabanBenar = sesiSoal.soal.pilihan[0]?.teks?.toLowerCase().trim();
        const jawabanSiswa = jawaban.jawabanTeks?.toLowerCase().trim();
        isBenar = jawabanBenar === jawabanSiswa;
        skor = isBenar ? 100 / totalSoal : 0;
        // Jika tidak cocok, bisa di-flag untuk review manual guru
        if (!isBenar) {
          await this.prisma.jawabanSiswa.update({
            where: { id: jawaban.id },
            data: { statusProses: 'DONE', isBenar: false, skor: 0 },
          });
          continue;
        }
      }

      if (isBenar) jumlahBenar++;

      // 3. Update jawaban
      await this.prisma.jawabanSiswa.update({
        where: { id: jawaban.id },
        data: { isBenar, skor, statusProses: 'DONE' },
      });
    }

    // 4. Hitung nilai akhir
    const nilaiAkhir = totalSoal > 0 ? (jumlahBenar / totalSoal) * 100 : 0;

    // 5. Update sesi
    await this.prisma.ujianSesi.update({
      where: { id: ujianSesiId },
      data: { nilaiAkhir, status: 'SELESAI' },
    });

    // 6. Notifikasi via WebSocket
    this.wsGateway.server
      .to(`user:${sesi.siswaId}`)
      .emit('ujian:selesai', {
        ujianSesiId,
        nilaiAkhir,
        jumlahBenar,
        totalSoal,
      });
  }
}
```

## 4. Queue Management

| Queue | Job Type | Deskripsi | Priority |
|-------|----------|-----------|----------|
| `scoring-queue` | `score-ujian-sesi` | Scoring jawaban ujian per sesi | High (harus cepat) |
| `import-queue` | `import-siswa-csv` | Import CSV siswa | Low (bisa antri) |
| `notification-queue` | `send-notification` | Kirim notifikasi push/email | Medium |

### 4.1 Monitoring Queue

- BullMQ menyediakan **Bull Board** (UI dashboard) untuk monitoring queue: lihat job waiting, active, completed, failed.
- Integrasi dengan NestJS: `@bull-board/nestjs`.
- Akses: `GET /admin/queues` (hanya untuk role SUPER_ADMIN).

### 4.2 Error Handling & Retry

- Job gagal → retry 3x dengan exponential backoff.
- Jika masih gagal setelah 3x → job masuk `failed` → notifikasi admin via WebSocket.
- Worker bisa di-scale horizontal (multiple instance) untuk menangani beban ujian serentak.

## 5. Status Flow UjianSesi

```
BELUM_MULAI → SEDANG_BERLANGSUNG → MENUNGGU_PROSES → SELESAI
                                        │ (jika gagal)
                                        ▼
                                      FAILED (admin review)
```

## 6. Endpoint

| Endpoint | Method | Deskripsi |
|----------|--------|-----------|
| `POST /ujian/:id/submit` | POST | Submit jawaban → enqueue scoring |
| `GET /ujian/:id/hasil` | GET | Ambil hasil (setelah SELESAI) |
| `GET /admin/queues` | GET | Bull Board UI (SUPER_ADMIN only) |

## 7. Referensi Silang

- Alur ujian → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- WebSocket event → [08_Modul_Realtime_WebSocket.md](./08_Modul_Realtime_WebSocket.md)
- Offline-first submit → [09_Modul_Ujian_Offline_First.md](./09_Modul_Ujian_Offline_First.md)
