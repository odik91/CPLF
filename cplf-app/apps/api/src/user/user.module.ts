import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserImportController } from './import/user-import.controller';
import { UserImportService } from './import/user-import.service';

@Module({
  controllers: [UserImportController, UserController],
  providers: [UserService, UserImportService],
  exports: [UserService],
})
export class UserModule {}
