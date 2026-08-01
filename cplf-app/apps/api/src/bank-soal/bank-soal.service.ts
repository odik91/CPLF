import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { SoalTipe } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSoalDto, PilihanJawabanInputDto, UpdateSoalDto } from './bank-soal.dto';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Injectable()
export class BankSoalService {
  constructor(private prisma: PrismaService) {}

  private isAdmin(user: AuthUserPayload) {
    return user.roles.some((r) => ['SUPER_ADMIN', 'ADMIN'].includes(r));
  }

  private async assertGuruMapel(userId: string, mapelId: string) {
    const count = await this.prisma.guruMapelKelas.count({
      where: { guruId: userId, mapelId },
    });
    if (count === 0) {
      throw new ForbiddenException('Anda tidak mengampu mapel ini');
    }
  }

  private normalizePilihan(
    tipe: SoalTipe,
    pilihan?: PilihanJawabanInputDto[],
  ): PilihanJawabanInputDto[] {
    if (tipe === SoalTipe.ESAI_SINGKAT) {
      return [];
    }

    if (tipe === SoalTipe.BENAR_SALAH) {
      if (!pilihan || pilihan.length === 0) {
        return [
          { teks: 'Benar', isBenar: true, urutan: 0 },
          { teks: 'Salah', isBenar: false, urutan: 1 },
        ];
      }
    }

    if (!pilihan || pilihan.length < 2) {
      throw new BadRequestException('Minimal 2 pilihan jawaban diperlukan');
    }

    const benarCount = pilihan.filter((p) => p.isBenar).length;
    if (benarCount !== 1) {
      throw new BadRequestException('Tepat satu pilihan harus benar');
    }

    return pilihan;
  }

  async findByTema(
    temaId: string,
    user: AuthUserPayload,
    filters?: { tipe?: SoalTipe; tingkat?: string; includeInactive?: boolean },
  ) {
    const tema = await this.prisma.tema.findUniqueOrThrow({ where: { id: temaId } });
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, tema.mapelId);
    }

    return this.prisma.soal.findMany({
      where: {
        temaId,
        ...(filters?.includeInactive ? {} : { isActive: true }),
        ...(filters?.tipe ? { tipe: filters.tipe } : {}),
        ...(filters?.tingkat ? { tingkatKesulitan: filters.tingkat as never } : {}),
      },
      include: {
        pilihan: { orderBy: { urutan: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string, user: AuthUserPayload) {
    const soal = await this.prisma.soal.findUniqueOrThrow({
      where: { id },
      include: {
        tema: true,
        pilihan: { orderBy: { urutan: 'asc' } },
      },
    });

    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, soal.tema.mapelId);
    }

    return soal;
  }

  async create(dto: CreateSoalDto, user: AuthUserPayload) {
    const tema = await this.prisma.tema.findUniqueOrThrow({ where: { id: dto.temaId } });
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, tema.mapelId);
    }

    const pilihan = this.normalizePilihan(dto.tipe, dto.pilihan);

    return this.prisma.soal.create({
      data: {
        temaId: dto.temaId,
        tipe: dto.tipe,
        pertanyaan: dto.pertanyaan,
        tingkatKesulitan: dto.tingkatKesulitan ?? 'SEDANG',
        tags: dto.tags ?? [],
        createdById: user.sub,
        pilihan: {
          create: pilihan.map((p) => ({
            teks: p.teks,
            isBenar: p.isBenar,
            urutan: p.urutan,
          })),
        },
      },
      include: { pilihan: { orderBy: { urutan: 'asc' } } },
    });
  }

  async update(id: string, dto: UpdateSoalDto, user: AuthUserPayload) {
    const soal = await this.prisma.soal.findUniqueOrThrow({
      where: { id },
      include: { tema: true, pilihan: true },
    });

    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, soal.tema.mapelId);
    }

    const tipe = dto.tipe ?? soal.tipe;
    const pilihan = dto.pilihan
      ? this.normalizePilihan(tipe, dto.pilihan)
      : undefined;

    return this.prisma.$transaction(async (tx) => {
      if (pilihan) {
        await tx.pilihanJawaban.deleteMany({ where: { soalId: id } });
        await tx.pilihanJawaban.createMany({
          data: pilihan.map((p) => ({
            soalId: id,
            teks: p.teks,
            isBenar: p.isBenar,
            urutan: p.urutan,
          })),
        });
      } else if (dto.tipe === SoalTipe.ESAI_SINGKAT && soal.pilihan.length > 0) {
        await tx.pilihanJawaban.deleteMany({ where: { soalId: id } });
      }

      return tx.soal.update({
        where: { id },
        data: {
          tipe: dto.tipe,
          pertanyaan: dto.pertanyaan,
          tingkatKesulitan: dto.tingkatKesulitan,
          tags: dto.tags,
        },
        include: { pilihan: { orderBy: { urutan: 'asc' } } },
      });
    });
  }

  async softDelete(id: string, user: AuthUserPayload) {
    const soal = await this.prisma.soal.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, soal.tema.mapelId);
    }

    return this.prisma.soal.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
