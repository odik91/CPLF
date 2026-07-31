import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Request } from 'express';

export interface AuthUserPayload {
  sub: string;
  username: string;
  roles: string[];
  permissions: string[];
  tokenVersion: number;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthUserPayload => {
    const request = ctx.switchToHttp().getRequest<Request & { user: AuthUserPayload }>();
    return request.user;
  },
);

export const RequirePermissions = (...permissions: string[]) =>
  SetMetadata('permissions', permissions);

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
