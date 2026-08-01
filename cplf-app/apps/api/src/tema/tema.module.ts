import { Module } from '@nestjs/common';
import { TemaController } from './tema.controller';

@Module({
  controllers: [TemaController],
})
export class TemaModule {}
