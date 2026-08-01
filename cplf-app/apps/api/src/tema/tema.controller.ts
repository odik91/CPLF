import { Controller, Get, Param, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';

@Controller('tema')
export class TemaController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @RequirePermissions('materi:read')
  findAll(
    @Query('mapelId') mapelId?: string,
    @Query('semester') semester?: string,
    @Query('tingkat') tingkat?: string,
  ) {
    return this.prisma.tema.findMany({
      where: {
        ...(mapelId ? { mapelId } : {}),
        ...(semester ? { semester: parseInt(semester, 10) } : {}),
        ...(tingkat ? { tingkat } : {}),
      },
      include: { mapel: { select: { kode: true, nama: true } } },
      orderBy: { urutanGlobal: 'asc' },
    });
  }

  @Get('ringkasan/semester')
  @RequirePermissions('materi:read')
  async ringkasanSemester(@Query('mapelId') mapelId?: string) {
    const temas = await this.prisma.tema.findMany({
      where: mapelId ? { mapelId } : undefined,
      select: { tingkat: true, semester: true, kodeModulCplf: true },
      orderBy: { urutanGlobal: 'asc' },
    });

    const grouped = new Map<string, { tingkat: string; semester: number; jumlah: number }>();
    for (const t of temas) {
      const key = `${t.tingkat}-S${t.semester}`;
      const existing = grouped.get(key);
      if (existing) existing.jumlah++;
      else grouped.set(key, { tingkat: t.tingkat, semester: t.semester, jumlah: 1 });
    }

    return [...grouped.values()].sort(
      (a, b) =>
        (a.tingkat === 'X' ? 1 : a.tingkat === 'XI' ? 2 : 3) -
          (b.tingkat === 'X' ? 1 : b.tingkat === 'XI' ? 2 : 3) || a.semester - b.semester,
    );
  }

  @Get(':kode')
  @RequirePermissions('materi:read')
  findByKode(@Param('kode') kode: string) {
    return this.prisma.tema.findUniqueOrThrow({
      where: { kodeModulCplf: kode.toUpperCase() },
      include: { mapel: { select: { kode: true, nama: true } } },
    });
  }
}
