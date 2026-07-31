import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateKelasDto {
  @IsString()
  @IsNotEmpty()
  nama!: string;

  @IsString()
  @IsNotEmpty()
  tingkat!: string;

  @IsString()
  @IsNotEmpty()
  tahunAjaran!: string;
}

export class UpdateKelasDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nama?: string;

  @IsOptional()
  @IsString()
  tingkat?: string;

  @IsOptional()
  @IsString()
  tahunAjaran?: string;
}
