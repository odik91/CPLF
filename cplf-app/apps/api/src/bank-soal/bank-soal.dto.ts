import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SoalTingkat, SoalTipe } from '@prisma/client';

export class PilihanJawabanInputDto {
  @IsString()
  @IsNotEmpty()
  teks!: string;

  @IsBoolean()
  isBenar!: boolean;

  @IsInt()
  @Min(0)
  urutan!: number;
}

export class CreateSoalDto {
  @IsUUID()
  temaId!: string;

  @IsEnum(SoalTipe)
  tipe!: SoalTipe;

  @IsString()
  @IsNotEmpty()
  pertanyaan!: string;

  @IsOptional()
  @IsEnum(SoalTingkat)
  tingkatKesulitan?: SoalTingkat;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PilihanJawabanInputDto)
  pilihan?: PilihanJawabanInputDto[];
}

export class UpdateSoalDto {
  @IsOptional()
  @IsEnum(SoalTipe)
  tipe?: SoalTipe;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  pertanyaan?: string;

  @IsOptional()
  @IsEnum(SoalTingkat)
  tingkatKesulitan?: SoalTingkat;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PilihanJawabanInputDto)
  @ArrayMinSize(2)
  pilihan?: PilihanJawabanInputDto[];
}
