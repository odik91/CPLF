import { IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @MinLength(6)
  passwordLama!: string;

  @IsString()
  @MinLength(8)
  passwordBaru!: string;
}
