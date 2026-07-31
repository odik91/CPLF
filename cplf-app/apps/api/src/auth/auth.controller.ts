import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Public, CurrentUser } from '../common/decorators/auth.decorators';
import { AuthUserPayload } from '../common/decorators/auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(dto, res);
  }

  @Public()
  @Post('refresh')
  refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refresh(req.cookies?.refresh_token as string, res);
  }

  @Public()
  @Post('logout')
  logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logout(req.cookies?.refresh_token as string, res);
  }

  @Get('me')
  me(@CurrentUser() user: AuthUserPayload) {
    return this.authService.getMe(user.sub);
  }

  @Post('ganti-password')
  gantiPassword(
    @CurrentUser() user: AuthUserPayload,
    @Body() dto: ChangePasswordDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.changePassword(user.sub, dto, res);
  }
}
