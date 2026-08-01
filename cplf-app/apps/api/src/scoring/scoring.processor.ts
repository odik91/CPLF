import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { ScoringService } from './scoring.service';

export const SCORING_QUEUE = 'ujian-scoring';

export interface ScoringJobData {
  ujianSesiId: string;
}

@Processor(SCORING_QUEUE)
export class ScoringProcessor extends WorkerHost {
  private readonly logger = new Logger(ScoringProcessor.name);

  constructor(private scoringService: ScoringService) {
    super();
  }

  async process(job: Job<ScoringJobData>) {
    const { ujianSesiId } = job.data;
    this.logger.log(`Proses scoring job=${job.id} sesi=${ujianSesiId}`);
    return this.scoringService.scoreUjianSesi(ujianSesiId);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job<ScoringJobData>, err: Error) {
    this.logger.error(
      `Scoring gagal job=${job.id} sesi=${job.data.ujianSesiId}: ${err.message}`,
    );
  }
}
