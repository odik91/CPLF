import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MateriStatus, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMateriDto, UpdateMateriDto } from './materi.dto';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Injectable()
export class MateriService {
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

  private async getTemaOrThrow(temaId: string) {
    return this.prisma.tema.findUniqueOrThrow({
      where: { id: temaId },
      include: { mapel: true },
    });
  }

  private slugify(judul: string, kode?: string) {
    const judulPart =
      judul
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'materi';
    const base = kode
      ? `${kode.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${judulPart}`
      : judulPart;
    return base.slice(0, 80);
  }

  private async uniqueSlug(judul: string, kode: string) {
    let slug = this.slugify(judul, kode);
    let counter = 2;
    const base = slug;
    while (await this.prisma.materi.findUnique({ where: { slug } })) {
      slug = `${base.slice(0, 70)}-${counter}`;
      counter++;
    }
    return slug;
  }

  async findByTema(temaId: string, user: AuthUserPayload) {
    const tema = await this.getTemaOrThrow(temaId);
    const isGuru = user.roles.includes('GURU') || this.isAdmin(user);

    if (isGuru && !this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, tema.mapelId);
    }

    const where: Prisma.MateriWhereInput = { temaId };
    if (!isGuru) {
      where.status = MateriStatus.PUBLISHED;
      const profil = await this.prisma.profilSiswa.findUnique({
        where: { userId: user.sub },
        include: { kelas: true },
      });
      if (!profil?.kelas || profil.kelas.tingkat !== tema.tingkat) {
        throw new ForbiddenException('Materi tidak tersedia untuk kelas Anda');
      }
    }

    return this.prisma.materi.findMany({
      where,
      include: {
        tema: { select: { kodeModulCplf: true, judul: true } },
        createdBy: { select: { nama: true } },
      },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findBySlug(slug: string, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUnique({
      where: { slug },
      include: {
        tema: { include: { mapel: true } },
        createdBy: { select: { nama: true } },
      },
    });
    if (!materi) throw new NotFoundException('Materi tidak ditemukan');
    await this.assertMateriAccess(materi, user);
    return materi;
  }

  async findById(id: string, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUnique({
      where: { id },
      include: {
        tema: { include: { mapel: true } },
        createdBy: { select: { nama: true } },
      },
    });
    if (!materi) throw new NotFoundException('Materi tidak ditemukan');
    await this.assertMateriAccess(materi, user);
    return materi;
  }

  private async assertMateriAccess(
    materi: {
      status: MateriStatus;
      tema: { tingkat: string; mapelId: string };
    },
    user: AuthUserPayload,
  ) {
    const canManage =
      user.roles.includes('GURU') || this.isAdmin(user);

    if (canManage) {
      if (!this.isAdmin(user)) {
        await this.assertGuruMapel(user.sub, materi.tema.mapelId);
      }
      return;
    }

    if (materi.status !== MateriStatus.PUBLISHED) {
      throw new ForbiddenException('Materi belum dipublish');
    }

    const profil = await this.prisma.profilSiswa.findUnique({
      where: { userId: user.sub },
      include: { kelas: true },
    });
    if (!profil?.kelas || profil.kelas.tingkat !== materi.tema.tingkat) {
      throw new ForbiddenException('Materi tidak tersedia untuk kelas Anda');
    }
  }

  async create(dto: CreateMateriDto, user: AuthUserPayload) {
    const tema = await this.getTemaOrThrow(dto.temaId);
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, tema.mapelId);
    }

    const slug = dto.slug ?? (await this.uniqueSlug(dto.judul, tema.kodeModulCplf));
    const existing = dto.slug
      ? await this.prisma.materi.findUnique({ where: { slug } })
      : null;
    if (existing) {
      throw new BadRequestException('Slug sudah dipakai');
    }

    return this.prisma.materi.create({
      data: {
        temaId: dto.temaId,
        judul: dto.judul,
        slug,
        contentJson: (dto.contentJson ?? { blocks: [] }) as Prisma.InputJsonValue,
        createdById: user.sub,
      },
      include: { tema: { select: { kodeModulCplf: true } } },
    });
  }

  async update(id: string, dto: UpdateMateriDto, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, materi.tema.mapelId);
    }
    if (materi.status === MateriStatus.ARCHIVED) {
      throw new BadRequestException('Materi archived tidak bisa diedit');
    }

    return this.prisma.materi.update({
      where: { id },
      data: {
        judul: dto.judul,
        contentJson: dto.contentJson as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async publish(id: string, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, materi.tema.mapelId);
    }
    return this.prisma.materi.update({
      where: { id },
      data: { status: MateriStatus.PUBLISHED },
    });
  }

  async archive(id: string, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, materi.tema.mapelId);
    }
    return this.prisma.materi.update({
      where: { id },
      data: { status: MateriStatus.ARCHIVED },
    });
  }

  async remove(id: string, user: AuthUserPayload) {
    const materi = await this.prisma.materi.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });
    if (!this.isAdmin(user)) {
      await this.assertGuruMapel(user.sub, materi.tema.mapelId);
    }
    if (materi.status !== MateriStatus.DRAFT) {
      throw new BadRequestException('Hanya draft yang bisa dihapus');
    }
    return this.prisma.materi.delete({ where: { id } });
  }
}
