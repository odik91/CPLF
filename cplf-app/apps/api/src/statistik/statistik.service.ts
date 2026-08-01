import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { SesiStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Injectable()
export class StatistikService {
  constructor(private prisma: PrismaService) {}

  private isAdmin(user: AuthUserPayload) {
    return user.roles.some((r) => ['SUPER_ADMIN', 'ADMIN'].includes(r));
  }

  private async assertGuruUjian(user: AuthUserPayload, ujianId: string) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({
      where: { id: ujianId },
      include: { tema: true },
    });

    if (!this.isAdmin(user)) {
      const count = await this.prisma.guruMapelKelas.count({
        where: {
          guruId: user.sub,
          kelasId: ujian.kelasId,
          mapelId: ujian.tema.mapelId,
        },
      });
      if (count === 0) throw new ForbiddenException('Akses ditolak');
    }

    return ujian;
  }

  async getUjianStatistik(ujianId: string, user: AuthUserPayload) {
    await this.assertGuruUjian(user, ujianId);

    const sesi = await this.prisma.ujianSesi.findMany({
      where: { ujianId },
      include: {
        siswa: { select: { id: true, nama: true, username: true } },
      },
      orderBy: { nilaiAkhir: 'desc' },
    });

    const selesai = sesi.filter((s) => s.status === SesiStatus.SELESAI);
    const nilaiList = selesai.map((s) => s.nilaiAkhir ?? 0);
    const rata =
      nilaiList.length > 0
        ? Math.round((nilaiList.reduce((a, b) => a + b, 0) / nilaiList.length) * 10) / 10
        : 0;

    const distribusi = [
      { label: '0-59', count: nilaiList.filter((n) => n < 60).length },
      { label: '60-69', count: nilaiList.filter((n) => n >= 60 && n < 70).length },
      { label: '70-79', count: nilaiList.filter((n) => n >= 70 && n < 80).length },
      { label: '80-89', count: nilaiList.filter((n) => n >= 80 && n < 90).length },
      { label: '90-100', count: nilaiList.filter((n) => n >= 90).length },
    ];

    return {
      totalPeserta: sesi.length,
      sudahSelesai: selesai.length,
      menungguProses: sesi.filter((s) => s.status === SesiStatus.MENUNGGU_PROSES).length,
      belumSubmit: sesi.filter(
        (s) =>
          s.status === SesiStatus.BELUM_MULAI ||
          s.status === SesiStatus.SEDANG_BERLANGSUNG,
      ).length,
      rataRata: rata,
      nilaiTertinggi: nilaiList.length ? Math.max(...nilaiList) : null,
      nilaiTerendah: nilaiList.length ? Math.min(...nilaiList) : null,
      distribusi,
      perSiswa: sesi.map((s) => ({
        siswaId: s.siswaId,
        nama: s.siswa.nama,
        username: s.siswa.username,
        status: s.status,
        nilaiAkhir: s.nilaiAkhir,
        waktuSubmit: s.waktuSubmit,
      })),
    };
  }
}
