import { Controller, Get, Param } from '@nestjs/common';
import { StatistikService } from './statistik.service';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Controller('statistik')
export class StatistikController {
  constructor(private statistikService: StatistikService) {}

  @Get('ujian/:id')
  @RequirePermissions('ujian:read')
  getUjian(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.statistikService.getUjianStatistik(id, user);
  }
}
