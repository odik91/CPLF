import { Injectable, Logger } from '@nestjs/common';
import { ProsesStatus, SesiStatus, SoalTipe } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScoringService {
  private readonly logger = new Logger(ScoringService.name);

  constructor(private prisma: PrismaService) {}

  private normalize(text: string) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
  }

  async scoreUjianSesi(ujianSesiId: string): Promise<{ nilaiAkhir: number; jumlahBenar: number; totalSoal: number } | null> {
    const sesi = await this.prisma.ujianSesi.findUnique({
      where: { id: ujianSesiId },
      include: {
        soalTerpilih: {
          include: {
            soal: { include: { pilihan: true } },
            jawaban: true,
          },
          orderBy: { urutanTampil: 'asc' },
        },
      },
    });

    if (!sesi) {
      this.logger.warn(`Sesi tidak ditemukan: ${ujianSesiId}`);
      return null;
    }

    if (sesi.status === SesiStatus.SELESAI) {
      return {
        nilaiAkhir: sesi.nilaiAkhir ?? 0,
        jumlahBenar: 0,
        totalSoal: sesi.soalTerpilih.length,
      };
    }

    let jumlahBenar = 0;
    const totalSoal = sesi.soalTerpilih.length;
    const skorPerSoal = totalSoal > 0 ? 100 / totalSoal : 0;

    await this.prisma.$transaction(async (tx) => {
      for (const sesiSoal of sesi.soalTerpilih) {
        const jawaban = sesiSoal.jawaban;
        let isBenar = false;

        if (jawaban) {
          await tx.jawabanSiswa.update({
            where: { id: jawaban.id },
            data: { statusProses: ProsesStatus.PROCESSING },
          });

          if (
            sesiSoal.soal.tipe === SoalTipe.PILIHAN_GANDA ||
            sesiSoal.soal.tipe === SoalTipe.BENAR_SALAH
          ) {
            const benar = sesiSoal.soal.pilihan.find((p) => p.isBenar);
            isBenar = !!benar && jawaban.pilihanJawabanId === benar.id;
          } else if (sesiSoal.soal.tipe === SoalTipe.ESAI_SINGKAT) {
            const expected =
              sesiSoal.soal.pilihan.find((p) => p.isBenar)?.teks ??
              sesiSoal.soal.pilihan[0]?.teks ??
              '';
            const student = jawaban.jawabanTeks ?? '';
            if (expected && student) {
              const exp = this.normalize(expected);
              const ans = this.normalize(student);
              isBenar = exp === ans || exp.includes(ans) || ans.includes(exp);
            }
          }

          if (isBenar) jumlahBenar++;

          await tx.jawabanSiswa.update({
            where: { id: jawaban.id },
            data: {
              isBenar,
              skor: isBenar ? skorPerSoal : 0,
              statusProses: ProsesStatus.DONE,
            },
          });
        }
      }

      const nilaiAkhir = totalSoal > 0 ? Math.round((jumlahBenar / totalSoal) * 1000) / 10 : 0;

      await tx.ujianSesi.update({
        where: { id: ujianSesiId },
        data: {
          nilaiAkhir,
          status: SesiStatus.SELESAI,
        },
      });
    });

    this.logger.log(`Scoring selesai sesi=${ujianSesiId} nilai=${jumlahBenar}/${totalSoal}`);

    return {
      nilaiAkhir: totalSoal > 0 ? Math.round((jumlahBenar / totalSoal) * 1000) / 10 : 0,
      jumlahBenar,
      totalSoal,
    };
  }
}
