import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthUserPayload } from '../decorators/auth.decorators';

export const ROLES_KEY = 'roles';
export const RequireRoles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const required = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    if (!required?.length) return true;

    const request = context.switchToHttp().getRequest<Request & { user: AuthUserPayload }>();
    const hasRole = required.some((r) => request.user.roles.includes(r));

    if (!hasRole) {
      throw new ForbiddenException('Role tidak cukup');
    }
    return true;
  }
}
