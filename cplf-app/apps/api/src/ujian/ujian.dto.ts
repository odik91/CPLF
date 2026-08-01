import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUjianDto {
  @IsString()
  @IsNotEmpty()
  judul!: string;

  @IsUUID()
  temaId!: string;

  @IsUUID()
  kelasId!: string;

  @IsInt()
  @Min(1)
  jumlahSoal!: number;

  @IsInt()
  @Min(1)
  durasiMenit!: number;

  @IsDateString()
  waktuMulai!: string;

  @IsDateString()
  waktuSelesai!: string;

  @IsOptional()
  @IsBoolean()
  acakSoal?: boolean;

  @IsOptional()
  @IsBoolean()
  acakPilihan?: boolean;

  @IsOptional()
  @IsBoolean()
  wajibVerifikasiWajah?: boolean;
}

export class UpdateUjianDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  judul?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  jumlahSoal?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  durasiMenit?: number;

  @IsOptional()
  @IsDateString()
  waktuMulai?: string;

  @IsOptional()
  @IsDateString()
  waktuSelesai?: string;

  @IsOptional()
  @IsBoolean()
  acakSoal?: boolean;

  @IsOptional()
  @IsBoolean()
  acakPilihan?: boolean;

  @IsOptional()
  @IsBoolean()
  wajibVerifikasiWajah?: boolean;
}

export class SubmitJawabanItemDto {
  @IsUUID()
  sesiSoalId!: string;

  @IsOptional()
  @IsUUID()
  pilihanJawabanId?: string;

  @IsOptional()
  @IsString()
  jawabanTeks?: string;
}

export class SubmitUjianDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubmitJawabanItemDto)
  jawaban!: SubmitJawabanItemDto[];
}
