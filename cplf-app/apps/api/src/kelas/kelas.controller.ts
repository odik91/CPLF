import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';
import { CreateKelasDto, UpdateKelasDto } from './dto/kelas.dto';

@Controller('kelas')
export class KelasController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @RequirePermissions('kelas:read')
  findAll() {
    return this.prisma.kelas.findMany({
      include: { _count: { select: { siswa: true } } },
      orderBy: [{ tingkat: 'asc' }, { nama: 'asc' }],
    });
  }

  @Get(':id')
  @RequirePermissions('kelas:read')
  findOne(@Param('id') id: string) {
    return this.prisma.kelas.findUniqueOrThrow({
      where: { id },
      include: { siswa: { include: { user: { select: { id: true, nama: true, username: true } } } } },
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

  @Delete(':id')
  @RequirePermissions('kelas:manage')
  remove(@Param('id') id: string) {
    return this.prisma.kelas.delete({ where: { id } });
  }
}
