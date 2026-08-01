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
import { MateriService } from './materi.service';
import { CreateMateriDto, UpdateMateriDto } from './materi.dto';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Controller('materi')
export class MateriController {
  constructor(private materiService: MateriService) {}

  @Get()
  @RequirePermissions('materi:read')
  list(@Query('temaId') temaId: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.findByTema(temaId, user);
  }

  @Get('detail/:id')
  @RequirePermissions('materi:read')
  byId(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.findById(id, user);
  }

  @Get('slug/:slug')
  @RequirePermissions('materi:read')
  bySlug(@Param('slug') slug: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.findBySlug(slug, user);
  }

  @Post()
  @RequirePermissions('materi:create')
  create(@Body() dto: CreateMateriDto, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.create(dto, user);
  }

  @Patch(':id')
  @RequirePermissions('materi:create')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMateriDto,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.materiService.update(id, dto, user);
  }

  @Post(':id/publish')
  @RequirePermissions('materi:create')
  publish(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.publish(id, user);
  }

  @Post(':id/archive')
  @RequirePermissions('materi:create')
  archive(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.archive(id, user);
  }

  @Delete(':id')
  @RequirePermissions('materi:create')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.materiService.remove(id, user);
  }
}
