import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthUserPayload } from '../decorators/auth.decorators';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!required?.length) return true;

    const request = context.switchToHttp().getRequest<Request & { user: AuthUserPayload }>();
    const user = request.user;
    const hasAll = required.every((p) => user.permissions.includes(p));

    if (!hasAll) {
      throw new ForbiddenException('Akses ditolak');
    }
    return true;
  }
}
