import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../prisma/prisma.service';
import {
  GuruPasswordStrategy,
  ImportGuruDto,
  ImportMuridDto,
  ImportResult,
  ImportRowError,
} from './user-import.dto';

@Injectable()
export class UserImportService {
  constructor(private prisma: PrismaService) {}

  getMuridTemplate(): string {
    return [
      'nis,nama,kelas,kontak_orang_tua,nama_orang_tua',
      '2024001,Andi Pratama,X-A,081234567890,Andi Supriyono',
    ].join('\n');
  }

  getGuruTemplate(): string {
    return [
      'nip,nama,username,email,bidang',
      '198001012010011001,Budi Santoso,,budi@sekolah.id,Multimedia',
      ',Siti Nurhaliza,siti.guru,siti@sekolah.id,Multimedia',
    ].join('\n');
  }

  async importMurid(dto: ImportMuridDto): Promise<ImportResult> {
    const muridRole = await this.prisma.role.findUniqueOrThrow({ where: { kode: 'MURID' } });
    const tahunAjaran = dto.options.tahunAjaran ?? '2025/2026';
    const autoCreate = dto.options.autoCreateKelas ?? false;

    let imported = 0;
    let skipped = 0;
    const errors: ImportRowError[] = [];
    const seenNis = new Set<string>();

    for (let i = 0; i < dto.rows.length; i++) {
      const row = dto.rows[i];
      const rowNum = i + 2;
      const nis = row.nis.trim();
      const nama = row.nama.trim();
      const kelasNama = row.kelas.trim();

      if (!nis || !nama || !kelasNama) {
        skipped++;
        errors.push({ row: rowNum, identifier: nis || '(kosong)', reason: 'NIS, nama, atau kelas kosong' });
        continue;
      }

      if (seenNis.has(nis)) {
        skipped++;
        errors.push({ row: rowNum, identifier: nis, reason: 'NIS duplikat dalam file' });
        continue;
      }
      seenNis.add(nis);

      const existing = await this.prisma.user.findUnique({ where: { username: nis } });
      if (existing) {
        skipped++;
        errors.push({ row: rowNum, identifier: nis, reason: 'NIS/username sudah terdaftar' });
        continue;
      }

      let kelas = await this.prisma.kelas.findFirst({
        where: { nama: kelasNama, tahunAjaran },
      });

      if (!kelas && autoCreate) {
        const tingkat = kelasNama.split('-')[0]?.trim() || 'X';
        kelas = await this.prisma.kelas.create({
          data: { nama: kelasNama, tingkat, tahunAjaran },
        });
      }

      if (!kelas) {
        skipped++;
        errors.push({
          row: rowNum,
          identifier: nis,
          reason: `Kelas "${kelasNama}" tidak ditemukan (tahun ${tahunAjaran})`,
        });
        continue;
      }

      try {
        const passwordHash = await bcrypt.hash(nis, 10);
        await this.prisma.user.create({
          data: {
            username: nis,
            passwordHash,
            nama,
            mustChangePassword: true,
            roles: { create: { roleId: muridRole.id } },
            profilSiswa: {
              create: {
                nis,
                kelasId: kelas.id,
                kontakOrangTua: row.kontak_orang_tua?.trim() || null,
              },
            },
          },
        });
        imported++;
      } catch (e) {
        skipped++;
        errors.push({
          row: rowNum,
          identifier: nis,
          reason: e instanceof Error ? e.message : 'Gagal insert',
        });
      }
    }

    return { imported, skipped, errors };
  }

  async importGuru(dto: ImportGuruDto): Promise<ImportResult> {
    const guruRole = await this.prisma.role.findUniqueOrThrow({ where: { kode: 'GURU' } });
    const { passwordStrategy, customPassword } = dto.options;

    if (passwordStrategy === GuruPasswordStrategy.CUSTOM && !customPassword) {
      throw new BadRequestException('customPassword wajib jika strategy CUSTOM');
    }

    let imported = 0;
    let skipped = 0;
    const errors: ImportRowError[] = [];
    const seenUsername = new Set<string>();

    for (let i = 0; i < dto.rows.length; i++) {
      const row = dto.rows[i];
      const rowNum = i + 2;
      const nama = row.nama.trim();
      const nip = row.nip?.trim() || undefined;
      const username = (row.username?.trim() || nip)?.trim();

      if (!nama || !username) {
        skipped++;
        errors.push({
          row: rowNum,
          identifier: nama || '(kosong)',
          reason: 'Nama wajib; username atau NIP harus diisi',
        });
        continue;
      }

      if (seenUsername.has(username)) {
        skipped++;
        errors.push({ row: rowNum, identifier: username, reason: 'Username duplikat dalam file' });
        continue;
      }
      seenUsername.add(username);

      const existing = await this.prisma.user.findUnique({ where: { username } });
      if (existing) {
        skipped++;
        errors.push({ row: rowNum, identifier: username, reason: 'Username sudah terdaftar' });
        continue;
      }

      if (nip) {
        const nipExists = await this.prisma.profilGuru.findUnique({ where: { nip } });
        if (nipExists) {
          skipped++;
          errors.push({ row: rowNum, identifier: username, reason: 'NIP sudah terdaftar' });
          continue;
        }
      }

      let plainPassword: string;
      try {
        plainPassword = this.resolveGuruPassword(username, nip, passwordStrategy, customPassword);
      } catch (e) {
        skipped++;
        errors.push({
          row: rowNum,
          identifier: username,
          reason: e instanceof Error ? e.message : 'Password tidak valid',
        });
        continue;
      }

      try {
        const passwordHash = await bcrypt.hash(plainPassword, 10);
        await this.prisma.user.create({
          data: {
            username,
            passwordHash,
            nama,
            email: row.email?.trim() || null,
            mustChangePassword: true,
            roles: { create: { roleId: guruRole.id } },
            profilGuru: {
              create: {
                nip: nip || null,
                bidang: row.bidang?.trim() || null,
              },
            },
          },
        });
        imported++;
      } catch (e) {
        skipped++;
        errors.push({
          row: rowNum,
          identifier: username,
          reason: e instanceof Error ? e.message : 'Gagal insert',
        });
      }
    }

    return { imported, skipped, errors };
  }

  private resolveGuruPassword(
    username: string,
    nip: string | undefined,
    strategy: GuruPasswordStrategy,
    customPassword?: string,
  ): string {
    if (strategy === GuruPasswordStrategy.CUSTOM) {
      return customPassword!;
    }
    if (strategy === GuruPasswordStrategy.NIP) {
      if (nip) return nip;
      throw new Error('NIP kosong — gunakan strategy USERNAME atau CUSTOM');
    }
    if (strategy === GuruPasswordStrategy.USERNAME) {
      return username;
    }
    throw new Error('Strategy password tidak dikenal');
  }
}
