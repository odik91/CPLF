import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { RequirePermissions } from '../../common/decorators/auth.decorators';
import { UserImportService } from './user-import.service';
import { ImportGuruDto, ImportMuridDto } from './user-import.dto';

@Controller('users/import')
export class UserImportController {
  constructor(private importService: UserImportService) {}

  @Get('template/murid')
  @RequirePermissions('user:bulk_import')
  @Header('Content-Type', 'text/csv; charset=utf-8')
  @Header('Content-Disposition', 'attachment; filename="template-import-murid.csv"')
  templateMurid() {
    return this.importService.getMuridTemplate();
  }

  @Get('template/guru')
  @RequirePermissions('user:bulk_import')
  @Header('Content-Type', 'text/csv; charset=utf-8')
  @Header('Content-Disposition', 'attachment; filename="template-import-guru.csv"')
  templateGuru() {
    return this.importService.getGuruTemplate();
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
