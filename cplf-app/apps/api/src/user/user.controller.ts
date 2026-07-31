import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RequirePermissions } from '../common/decorators/auth.decorators';
import { CreateUserDto, ResetPasswordDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @RequirePermissions('user:read')
  findAll(@Query('role') role?: string) {
    return this.userService.findAll(role);
  }

  @Get(':id')
  @RequirePermissions('user:read')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @RequirePermissions('user:create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @RequirePermissions('user:update')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Post(':id/reset-password')
  @RequirePermissions('user:update')
  resetPassword(@Param('id') id: string, @Body() dto: ResetPasswordDto) {
    return this.userService.resetPassword(id, dto);
  }

  @Delete(':id')
  @RequirePermissions('user:delete')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
