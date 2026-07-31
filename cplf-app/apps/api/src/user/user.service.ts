import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, ResetPasswordDto, UpdateUserDto } from './dto/user.dto';

const userInclude = {
  roles: { include: { role: true } },
  profilSiswa: { include: { kelas: true } },
  profilGuru: true,
} as const;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll(roleKode?: string) {
    return this.prisma.user.findMany({
      where: roleKode
        ? { roles: { some: { role: { kode: roleKode } } } }
        : undefined,
      include: userInclude,
      orderBy: { nama: 'asc' },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: userInclude,
    });
    if (!user) throw new NotFoundException('User tidak ditemukan');
    return user;
  }

  async create(dto: CreateUserDto) {
    const role = await this.prisma.role.findUnique({ where: { kode: dto.roleKode } });
    if (!role) throw new BadRequestException(`Role ${dto.roleKode} tidak ditemukan`);

    if (dto.roleKode === 'MURID' && !dto.nis) {
      throw new BadRequestException('NIS wajib untuk murid');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        username: dto.username,
        passwordHash,
        nama: dto.nama,
        email: dto.email,
        mustChangePassword: true,
        roles: { create: { roleId: role.id } },
        ...(dto.roleKode === 'MURID' && {
          profilSiswa: {
            create: { nis: dto.nis!, kelasId: dto.kelasId },
          },
        }),
        ...(dto.roleKode === 'GURU' || dto.roleKode === 'WALI_KELAS'
          ? {
              profilGuru: {
                create: { nip: dto.nip },
              },
            }
          : {}),
      },
      include: userInclude,
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);

    if (dto.kelasId !== undefined) {
      const profil = await this.prisma.profilSiswa.findUnique({ where: { userId: id } });
      if (!profil) throw new BadRequestException('User bukan murid');
      await this.prisma.profilSiswa.update({
        where: { userId: id },
        data: { kelasId: dto.kelasId || null },
      });
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        nama: dto.nama,
        email: dto.email,
        status: dto.status,
      },
      include: userInclude,
    });
  }

  async resetPassword(id: string, dto: ResetPasswordDto) {
    const passwordHash = await bcrypt.hash(dto.passwordBaru, 10);
    await this.prisma.user.update({
      where: { id },
      data: {
        passwordHash,
        mustChangePassword: true,
        tokenVersion: { increment: 1 },
      },
    });
    await this.prisma.refreshToken.updateMany({
      where: { userId: id, revoked: false },
      data: { revoked: true },
    });
    return { message: 'Password direset. User wajib ganti saat login.' };
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.user.update({
      where: { id },
      data: { status: 'INACTIVE' },
      include: userInclude,
    });
  }
}
