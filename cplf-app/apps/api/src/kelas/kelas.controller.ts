import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';
import { CreateKelasDto, UpdateKelasDto } from './dto/kelas.dto';
import { AssignSiswaDto, SetWaliKelasDto } from './dto/assign.dto';

@Controller('kelas')
export class KelasController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @RequirePermissions('kelas:read')
  findAll(@CurrentUser() user: AuthUserPayload) {
    const isGuruOnly =
      user.roles.includes('GURU') &&
      !user.roles.some((r) => ['ADMIN', 'SUPER_ADMIN'].includes(r));

    if (isGuruOnly) {
      return this.prisma.kelas.findMany({
        where: {
          guruMapel: { some: { guruId: user.sub } },
        },
        include: {
          _count: { select: { siswa: true } },
          guruMapel: {
            where: { guruId: user.sub },
            include: { mapel: true },
          },
        },
        orderBy: [{ tingkat: 'asc' }, { nama: 'asc' }],
      });
    }

    return this.prisma.kelas.findMany({
      include: {
        _count: { select: { siswa: true } },
        waliKelas: { select: { id: true, nama: true } },
      },
      orderBy: [{ tingkat: 'asc' }, { nama: 'asc' }],
    });
  }

  @Get(':id')
  @RequirePermissions('kelas:read')
  findOne(@Param('id') id: string) {
    return this.prisma.kelas.findUniqueOrThrow({
      where: { id },
      include: {
        siswa: {
          include: { user: { select: { id: true, nama: true, username: true } } },
        },
        waliKelas: { select: { id: true, nama: true } },
        guruMapel: { include: { guru: { select: { id: true, nama: true } }, mapel: true } },
      },
    });
  }

  @Post()
  @RequirePermissions('kelas:manage')
  create(@Body() dto: CreateKelasDto) {
    return this.prisma.kelas.create({ data: dto });
  }

  @Patch(':id')
  @RequirePermissions('kelas:manage')
  update(@Param('id') id: string, @Body() dto: UpdateKelasDto) {
    return this.prisma.kelas.update({ where: { id }, data: dto });
  }

  @Patch(':id/siswa')
  @RequirePermissions('kelas:manage')
  async assignSiswa(@Param('id') id: string, @Body() dto: AssignSiswaDto) {
    await this.prisma.kelas.findUniqueOrThrow({ where: { id } });
    await this.prisma.profilSiswa.updateMany({
      where: { userId: { in: dto.siswaUserIds } },
      data: { kelasId: id },
    });
    return this.findOne(id);
  }

  @Patch(':id/wali-kelas')
  @RequirePermissions('kelas:manage')
  async setWaliKelas(@Param('id') id: string, @Body() dto: SetWaliKelasDto) {
    return this.prisma.kelas.update({
      where: { id },
      data: { waliKelasId: dto.waliKelasId ?? null },
      include: { waliKelas: { select: { id: true, nama: true } } },
    });
  }

  @Delete(':id')
  @RequirePermissions('kelas:manage')
  remove(@Param('id') id: string) {
    return this.prisma.kelas.delete({ where: { id } });
  }
}
