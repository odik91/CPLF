import { Module } from '@nestjs/common';
import { UjianController } from './ujian.controller';
import { UjianService } from './ujian.service';
import { ScoringModule } from '../scoring/scoring.module';

@Module({
  imports: [ScoringModule],
  controllers: [UjianController],
  providers: [UjianService],
})
export class UjianModule {}
