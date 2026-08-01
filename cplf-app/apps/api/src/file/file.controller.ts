import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { FileService } from './file.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';

@Controller('files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @RequirePermissions('materi:create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.saveImage(file);
  }
}
