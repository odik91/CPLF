import { Module } from '@nestjs/common';
import { KelasController } from './kelas.controller';

@Module({
  controllers: [KelasController],
})
export class KelasModule {}
