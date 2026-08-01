import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum GuruPasswordStrategy {
  NIP = 'NIP',
  USERNAME = 'USERNAME',
  CUSTOM = 'CUSTOM',
}

export class ImportMuridRowDto {
  @IsString()
  @IsNotEmpty()
  nis!: string;

  @IsString()
  @IsNotEmpty()
  nama!: string;

  @IsString()
  @IsNotEmpty()
  kelas!: string;

  @IsOptional()
  @IsString()
  kontak_orang_tua?: string;

  @IsOptional()
  @IsString()
  nama_orang_tua?: string;
}

export class ImportGuruRowDto {
  @IsString()
  @IsNotEmpty()
  nama!: string;

  @IsOptional()
  @IsString()
  nip?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  bidang?: string;
}

export class ImportMuridOptionsDto {
  @IsOptional()
  @IsString()
  tahunAjaran?: string;

  @IsOptional()
  @IsBoolean()
  autoCreateKelas?: boolean;
}

export class ImportGuruOptionsDto {
  @IsEnum(GuruPasswordStrategy)
  passwordStrategy!: GuruPasswordStrategy;

  @IsOptional()
  @IsString()
  customPassword?: string;
}

export class ImportMuridDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImportMuridRowDto)
  rows!: ImportMuridRowDto[];

  @ValidateNested()
  @Type(() => ImportMuridOptionsDto)
  options!: ImportMuridOptionsDto;
}

export class ImportGuruDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImportGuruRowDto)
  rows!: ImportGuruRowDto[];

  @ValidateNested()
  @Type(() => ImportGuruOptionsDto)
  options!: ImportGuruOptionsDto;
}

export interface ImportRowError {
  row: number;
  identifier: string;
  reason: string;
}

export interface ImportResult {
  imported: number;
  skipped: number;
  errors: ImportRowError[];
}
