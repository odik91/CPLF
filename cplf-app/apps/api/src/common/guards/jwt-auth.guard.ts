import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY, AuthUserPayload } from '../decorators/auth.decorators';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request & { user?: AuthUserPayload }>();
    const token = request.cookies?.access_token as string | undefined;

    if (!token) {
      throw new UnauthorizedException('Tidak terautentikasi');
    }

    try {
      const payload = this.jwtService.verify<AuthUserPayload>(token);
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: { id: true, status: true, tokenVersion: true },
      });

      if (!user || user.status !== 'ACTIVE') {
        throw new UnauthorizedException('User tidak aktif');
      }
      if (user.tokenVersion !== payload.tokenVersion) {
        throw new UnauthorizedException('Sesi tidak valid');
      }

      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Token tidak valid');
    }
  }
}
