import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { createHash, randomBytes } from 'crypto';
import { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUserPayload } from '../common/decorators/auth.decorators';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  private hashToken(token: string) {
    return createHash('sha256').update(token).digest('hex');
  }

  private cookieOptions(maxAgeMs: number) {
    const isProd = this.config.get('NODE_ENV') === 'production';
    return {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax' as const,
      maxAge: maxAgeMs,
      path: '/',
    };
  }

  private async loadUserAuth(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: { include: { permission: true } },
              },
            },
          },
        },
      },
    });

    if (!user) throw new UnauthorizedException('User tidak ditemukan');

    const roles = user.roles.map((ur) => ur.role.kode);
    const permissions = [
      ...new Set(
        user.roles.flatMap((ur) =>
          ur.role.permissions.map((rp) => rp.permission.kode),
        ),
      ),
    ];

    return { user, roles, permissions };
  }

  private buildAccessPayload(
    userId: string,
    username: string,
    roles: string[],
    permissions: string[],
    tokenVersion: number,
  ): AuthUserPayload {
    return { sub: userId, username, roles, permissions, tokenVersion };
  }

  private async issueTokens(
    res: Response,
    userId: string,
    username: string,
    roles: string[],
    permissions: string[],
    tokenVersion: number,
  ) {
    const accessTtl = this.config.get<string>('JWT_ACCESS_TTL', '15m');
    const refreshDays = Number(this.config.get('JWT_REFRESH_DAYS', 7));

    const payload = this.buildAccessPayload(
      userId,
      username,
      roles,
      permissions,
      tokenVersion,
    );

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: accessTtl as `${number}${'s' | 'm' | 'h' | 'd'}`,
    });
    const refreshToken = randomBytes(48).toString('hex');
    const expiresAt = new Date(Date.now() + refreshDays * 24 * 60 * 60 * 1000);

    await this.prisma.refreshToken.create({
      data: {
        userId,
        tokenHash: this.hashToken(refreshToken),
        expiresAt,
      },
    });

    const accessMs = 15 * 60 * 1000;
    res.cookie('access_token', accessToken, this.cookieOptions(accessMs));
    res.cookie(
      'refresh_token',
      refreshToken,
      this.cookieOptions(refreshDays * 24 * 60 * 60 * 1000),
    );

    return payload;
  }

  async login(dto: LoginDto, res: Response) {
    const user = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });

    if (!user || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Username atau password salah');
    }

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Username atau password salah');
    }

    const { roles, permissions } = await this.loadUserAuth(user.id);
    await this.issueTokens(
      res,
      user.id,
      user.username,
      roles,
      permissions,
      user.tokenVersion,
    );

    return this.toAuthUserDto(user.id);
  }

  async refresh(refreshToken: string | undefined, res: Response) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token tidak ada');
    }

    const tokenHash = this.hashToken(refreshToken);
    const stored = await this.prisma.refreshToken.findFirst({
      where: { tokenHash, revoked: false, expiresAt: { gt: new Date() } },
    });

    if (!stored) {
      throw new UnauthorizedException('Refresh token tidak valid');
    }

    await this.prisma.refreshToken.update({
      where: { id: stored.id },
      data: { revoked: true },
    });

    const { user, roles, permissions } = await this.loadUserAuth(stored.userId);
    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('User tidak aktif');
    }

    await this.issueTokens(
      res,
      user.id,
      user.username,
      roles,
      permissions,
      user.tokenVersion,
    );

    return this.toAuthUserDto(user.id);
  }

  async logout(refreshToken: string | undefined, res: Response) {
    if (refreshToken) {
      await this.prisma.refreshToken.updateMany({
        where: { tokenHash: this.hashToken(refreshToken), revoked: false },
        data: { revoked: true },
      });
    }

    res.clearCookie('access_token', { path: '/' });
    res.clearCookie('refresh_token', { path: '/' });
    return { message: 'Logout berhasil' };
  }

  async getMe(userId: string) {
    return this.toAuthUserDto(userId);
  }

  async changePassword(userId: string, dto: ChangePasswordDto, res: Response) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId } });
    const valid = await bcrypt.compare(dto.passwordLama, user.passwordHash);
    if (!valid) {
      throw new BadRequestException('Password lama salah');
    }

    const passwordHash = await bcrypt.hash(dto.passwordBaru, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash,
        mustChangePassword: false,
        tokenVersion: { increment: 1 },
      },
    });

    await this.prisma.refreshToken.updateMany({
      where: { userId, revoked: false },
      data: { revoked: true },
    });

    res.clearCookie('access_token', { path: '/' });
    res.clearCookie('refresh_token', { path: '/' });

    return { message: 'Password berhasil diubah. Silakan login ulang.' };
  }

  private async toAuthUserDto(userId: string) {
    const { user, roles, permissions } = await this.loadUserAuth(userId);
    return {
      id: user.id,
      username: user.username,
      nama: user.nama,
      email: user.email,
      roles,
      permissions,
      mustChangePassword: user.mustChangePassword,
    };
  }
}
