import { Module } from '@nestjs/common';
import { MapelController } from './mapel.controller';

@Module({
  controllers: [MapelController],
})
export class MapelModule {}
