import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { SCORING_QUEUE } from './scoring.processor';
import { ScoringProcessor } from './scoring.processor';
import { ScoringProducer } from './scoring.producer';
import { ScoringService } from './scoring.service';

@Module({
  imports: [BullModule.registerQueue({ name: SCORING_QUEUE })],
  providers: [ScoringService, ScoringProducer, ScoringProcessor],
  exports: [ScoringService, ScoringProducer],
})
export class ScoringModule {}
