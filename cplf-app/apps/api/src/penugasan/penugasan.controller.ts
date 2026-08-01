import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';
import { CreateGuruMapelKelasDto } from './penugasan.dto';

@Controller('penugasan-guru')
export class PenugasanController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @RequirePermissions('kelas:read')
  findAll(
    @CurrentUser() user: AuthUserPayload,
    @Query('guruId') guruId?: string,
  ) {
    const isGuruOnly =
      user.roles.includes('GURU') &&
      !user.roles.some((r) => ['ADMIN', 'SUPER_ADMIN'].includes(r));

    return this.prisma.guruMapelKelas.findMany({
      where: isGuruOnly ? { guruId: user.sub } : guruId ? { guruId } : undefined,
      include: {
        guru: { select: { id: true, nama: true, username: true } },
        mapel: true,
        kelas: true,
      },
      orderBy: [{ kelas: { tingkat: 'asc' } }, { mapel: { kode: 'asc' } }],
    });
  }

  @Post()
  @RequirePermissions('kelas:manage')
  create(@Body() dto: CreateGuruMapelKelasDto) {
    return this.prisma.guruMapelKelas.create({
      data: dto,
      include: {
        guru: { select: { id: true, nama: true } },
        mapel: true,
        kelas: true,
      },
    });
  }

  @Delete(':id')
  @RequirePermissions('kelas:manage')
  remove(@Param('id') id: string) {
    return this.prisma.guruMapelKelas.delete({ where: { id } });
  }
}
