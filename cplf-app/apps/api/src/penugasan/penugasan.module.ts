import { Module } from '@nestjs/common';
import { PenugasanController } from './penugasan.controller';

@Module({
  controllers: [PenugasanController],
})
export class PenugasanModule {}
