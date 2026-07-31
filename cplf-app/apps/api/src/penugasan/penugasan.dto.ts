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

export class CreateTemaDto {
  @IsString()
  @IsNotEmpty()
  mapelId!: string;

  @IsString()
  @IsNotEmpty()
  judul!: string;

  @IsString()
  @IsNotEmpty()
  kodeModulCplf!: string;

  @IsString()
  @IsNotEmpty()
  slug!: string;

  @IsString()
  tingkat!: string;

  @IsInt()
  urutan!: number;

  @IsInt()
  semester!: number;

  @IsOptional()
  @IsString()
  deskripsi?: string;
}

export class UpdateTemaDto {
  @IsOptional()
  @IsString()
  judul?: string;

  @IsOptional()
  @IsString()
  deskripsi?: string;

  @IsOptional()
  urutan?: number;
}
