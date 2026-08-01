import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';

const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_SIZE = 5 * 1024 * 1024;

@Injectable()
export class FileService {
  private uploadDir: string;

  constructor(private config: ConfigService) {
    this.uploadDir = this.config.get('UPLOAD_DIR', path.join(process.cwd(), 'uploads'));
    fs.mkdirSync(this.uploadDir, { recursive: true });
  }

  saveImage(file: Express.Multer.File): { url: string; filename: string } {
    if (!file) throw new BadRequestException('File tidak ditemukan');
    if (!ALLOWED_MIME.has(file.mimetype)) {
      throw new BadRequestException('Hanya JPG, PNG, WebP, GIF yang diizinkan');
    }
    if (file.size > MAX_SIZE) {
      throw new BadRequestException('Ukuran maksimal 5MB');
    }

    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    const now = new Date();
    const subdir = path.join(
      String(now.getFullYear()),
      String(now.getMonth() + 1).padStart(2, '0'),
    );
    const dir = path.join(this.uploadDir, subdir);
    fs.mkdirSync(dir, { recursive: true });

    const filename = `${randomUUID()}${ext}`;
    const fullPath = path.join(dir, filename);
    fs.writeFileSync(fullPath, file.buffer);

    const relative = `${subdir.replace(/\\/g, '/')}/${filename}`;
    const baseUrl = this.config.get('PUBLIC_API_URL', 'http://localhost:4000/api/v1');
    return {
      url: `${baseUrl}/files/${relative}`,
      filename: relative,
    };
  }
}
