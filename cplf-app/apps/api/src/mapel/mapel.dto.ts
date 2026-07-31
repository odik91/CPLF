import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMapelDto {
  @IsString()
  @IsNotEmpty()
  nama!: string;

  @IsString()
  @IsNotEmpty()
  kode!: string;
}

export class UpdateMapelDto {
  @IsOptional()
  @IsString()
  nama?: string;

  @IsOptional()
  @IsString()
  kode?: string;
}
