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
import { SoalTingkat, SoalTipe } from '@prisma/client';
import { BankSoalService } from './bank-soal.service';
import { CreateSoalDto, UpdateSoalDto } from './bank-soal.dto';
import { RequirePermissions, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Controller('bank-soal')
export class BankSoalController {
  constructor(private bankSoalService: BankSoalService) {}

  @Get()
  @RequirePermissions('bank_soal:read')
  list(
    @Query('temaId') temaId: string,
    @Query('tipe') tipe: SoalTipe | undefined,
    @Query('tingkat') tingkat: SoalTingkat | undefined,
    @Query('includeInactive') includeInactive: string | undefined,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.bankSoalService.findByTema(temaId, user, {
      tipe,
      tingkat,
      includeInactive: includeInactive === 'true',
    });
  }

  @Get(':id')
  @RequirePermissions('bank_soal:read')
  detail(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.bankSoalService.findById(id, user);
  }

  @Post()
  @RequirePermissions('bank_soal:create')
  create(@Body() dto: CreateSoalDto, @CurrentUser() user: AuthUserPayload) {
    return this.bankSoalService.create(dto, user);
  }

  @Patch(':id')
  @RequirePermissions('bank_soal:create')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateSoalDto,
    @CurrentUser() user: AuthUserPayload,
  ) {
    return this.bankSoalService.update(id, dto, user);
  }

  @Delete(':id')
  @RequirePermissions('bank_soal:create')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUserPayload) {
    return this.bankSoalService.softDelete(id, user);
  }
}
