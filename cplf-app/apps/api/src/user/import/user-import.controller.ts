import { Controller, Get, Header, Post, Body, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { RequirePermissions } from '../../common/decorators/auth.decorators';
import { UserImportService } from './user-import.service';
import { ImportGuruDto, ImportMuridDto } from './user-import.dto';

@Controller('users/import')
export class UserImportController {
  constructor(private importService: UserImportService) {}

  @Get('template/murid')
  @RequirePermissions('user:bulk_import')
  async templateMurid(
    @Query('format') format: 'xlsx' | 'csv' = 'xlsx',
    @Res({ passthrough: true }) res: Response,
  ) {
    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="template-import-murid.csv"');
      return this.importService.getMuridTemplateCsv();
    }

    const buffer = await this.importService.getMuridTemplateXlsx();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename="template-import-murid.xlsx"');
    res.send(buffer);
  }

  @Get('template/guru')
  @RequirePermissions('user:bulk_import')
  async templateGuru(
    @Query('format') format: 'xlsx' | 'csv' = 'xlsx',
    @Res({ passthrough: true }) res: Response,
  ) {
    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="template-import-guru.csv"');
      return this.importService.getGuruTemplateCsv();
    }

    const buffer = await this.importService.getGuruTemplateXlsx();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename="template-import-guru.xlsx"');
    res.send(buffer);
  }

  @Post('murid')
  @RequirePermissions('user:bulk_import')
  importMurid(@Body() dto: ImportMuridDto) {
    return this.importService.importMurid(dto);
  }

  @Post('guru')
  @RequirePermissions('user:bulk_import')
  importGuru(@Body() dto: ImportGuruDto) {
    return this.importService.importGuru(dto);
  }
}
