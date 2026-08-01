import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { IamModule } from './iam/iam.module';
import { UserModule } from './user/user.module';
import { KelasModule } from './kelas/kelas.module';
import { MapelModule } from './mapel/mapel.module';
import { PenugasanModule } from './penugasan/penugasan.module';
import { TemaModule } from './tema/tema.module';
import { HealthController } from './health/health.controller';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { PermissionsGuard } from './common/guards/permissions.guard';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ScopeService } from './common/services/scope.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    IamModule,
    UserModule,
    KelasModule,
    MapelModule,
    PenugasanModule,
    TemaModule,
  ],
  controllers: [HealthController],
  providers: [
    ScopeService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
