import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';
import { CreateMapelDto, UpdateMapelDto } from './mapel.dto';

@Controller('mapel')
export class MapelController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @RequirePermissions('kelas:read')
  findAll() {
    return this.prisma.mapel.findMany({ orderBy: { kode: 'asc' } });
  }

  @Post()
  @RequirePermissions('kelas:manage')
  create(@Body() dto: CreateMapelDto) {
    return this.prisma.mapel.create({ data: dto });
  }

  @Patch(':id')
  @RequirePermissions('kelas:manage')
  update(@Param('id') id: string, @Body() dto: UpdateMapelDto) {
    return this.prisma.mapel.update({ where: { id }, data: dto });
  }

  @Delete(':id')
  @RequirePermissions('kelas:manage')
  remove(@Param('id') id: string) {
    return this.prisma.mapel.delete({ where: { id } });
  }
}
