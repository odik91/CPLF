import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';

@Controller('iam')
export class IamController {
  constructor(private prisma: PrismaService) {}

  @Get('roles')
  @RequirePermissions('role:manage')
  listRoles() {
    return this.prisma.role.findMany({
      include: {
        permissions: { include: { permission: true } },
        _count: { select: { users: true } },
      },
      orderBy: { kode: 'asc' },
    });
  }

  @Get('permissions')
  @RequirePermissions('role:manage')
  listPermissions() {
    return this.prisma.permission.findMany({ orderBy: { kode: 'asc' } });
  }
}
