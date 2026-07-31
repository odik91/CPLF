import { Module } from '@nestjs/common';
import { PenugasanController, TemaController } from './penugasan.controller';

@Module({
  controllers: [PenugasanController, TemaController],
})
export class PenugasanModule {}
