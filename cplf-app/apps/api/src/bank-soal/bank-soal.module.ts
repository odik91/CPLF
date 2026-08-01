import { Module } from '@nestjs/common';
import { BankSoalController } from './bank-soal.controller';
import { BankSoalService } from './bank-soal.service';

@Module({
  controllers: [BankSoalController],
  providers: [BankSoalService],
})
export class BankSoalModule {}
