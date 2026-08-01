import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { IamModule } from './iam/iam.module';
import { UserModule } from './user/user.module';
import { KelasModule } from './kelas/kelas.module';
import { MapelModule } from './mapel/mapel.module';
import { PenugasanModule } from './penugasan/penugasan.module';
import { TemaModule } from './tema/tema.module';
import { FileModule } from './file/file.module';
import { MateriModule } from './materi/materi.module';
import { BankSoalModule } from './bank-soal/bank-soal.module';
import { UjianModule } from './ujian/ujian.module';
import { ScoringModule } from './scoring/scoring.module';
import { StatistikModule } from './statistik/statistik.module';
import { HealthController } from './health/health.controller';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { PermissionsGuard } from './common/guards/permissions.guard';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ScopeService } from './common/services/scope.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.get<string>('REDIS_URL', 'redis://localhost:6379'),
        },
      }),
      inject: [ConfigService],
    }),
    PrismaModule,
    AuthModule,
    IamModule,
    UserModule,
    KelasModule,
    MapelModule,
    PenugasanModule,
    TemaModule,
    FileModule,
    MateriModule,
    BankSoalModule,
    UjianModule,
    ScoringModule,
    StatistikModule,
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
