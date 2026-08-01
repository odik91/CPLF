import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGuruMapelKelasDto {
  @IsString()
  @IsNotEmpty()
  guruId!: string;

  @IsString()
  @IsNotEmpty()
  mapelId!: string;

  @IsString()
  @IsNotEmpty()
  kelasId!: string;
}
