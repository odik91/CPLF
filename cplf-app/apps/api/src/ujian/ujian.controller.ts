import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UjianStatus } from '@prisma/client';
import { UjianService } from './ujian.service';
import { CreateUjianDto, SubmitUjianDto, UpdateUjianDto } from './ujian.dto';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Controller('ujian')
export class UjianController {
  constructor(private ujianService: UjianService) {}

  @Get('saya')
  @RequirePermissions('ujian:take')
  listSaya(@CurrentUser() user: AuthUserPayload) {
    return this.ujianService.listMuridUjian(user);
  }

  @Get('aktif')
  @RequirePermissions('ujian:take')
  listAktif(@CurrentUser() user: AuthUserPayload) {
    return this.ujianService.listAktifMurid(user);
  }

  @Get()
  @RequirePermissions('ujian:read')
  list(
    @Query('kelasId') kelasId: string | undefined,
    @Query('status') status: UjianStatus | undefined,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.ujianService.listForGuru(user, { kelasId, status });
  }

  @Get(':id/hasil')
  @RequirePermissions('ujian:take')
  hasil(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.getHasil(id, user);
  }

  @Get(':id/soal')
  @RequirePermissions('ujian:take')
  getSoal(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.getSoalSesi(id, user);
  }

  @Get(':id')
  @RequirePermissions('ujian:read')
  detail(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.findById(id, user);
  }

  @Post()
  @RequirePermissions('ujian:create')
  create(@Body() dto: CreateUjianDto, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.create(dto, user);
  }

  @Patch(':id')
  @RequirePermissions('ujian:create')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUjianDto,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.ujianService.update(id, dto, user);
  }

  @Post(':id/publish')
  @RequirePermissions('ujian:create')
  publish(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.publish(id, user);
  }

  @Post(':id/close')
  @RequirePermissions('ujian:create')
  close(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.close(id, user);
  }

  @Post(':id/mulai')
  @RequirePermissions('ujian:take')
  mulai(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.mulai(id, user);
  }

  @Post(':id/submit')
  @RequirePermissions('ujian:take')
  submit(
    @Param('id') id: string,
    @Body() dto: SubmitUjianDto,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.ujianService.submit(id, dto, user);
  }

  @Delete(':id')
  @RequirePermissions('ujian:create')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.ujianService.remove(id, user);
  }
}
