import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bullmq';
import { SCORING_QUEUE, ScoringJobData } from './scoring.processor';
import { ScoringService } from './scoring.service';

@Injectable()
export class ScoringProducer {
  private readonly logger = new Logger(ScoringProducer.name);

  constructor(
    @InjectQueue(SCORING_QUEUE) private queue: Queue<ScoringJobData>,
    private scoringService: ScoringService,
  ) {}

  async enqueueScoring(ujianSesiId: string) {
    try {
      await this.queue.add(
        'score-ujian-sesi',
        { ujianSesiId },
        {
          attempts: 3,
          backoff: { type: 'exponential', delay: 5000 },
          removeOnComplete: 100,
          removeOnFail: 50,
        },
      );
      this.logger.log(`Job scoring di-queue sesi=${ujianSesiId}`);
    } catch (err) {
      this.logger.warn(
        `Queue gagal, scoring sinkron sesi=${ujianSesiId}: ${err instanceof Error ? err.message : err}`,
      );
      await this.scoringService.scoreUjianSesi(ujianSesiId);
    }
  }
}
