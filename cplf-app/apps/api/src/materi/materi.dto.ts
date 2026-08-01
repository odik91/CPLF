import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateMateriDto {
  @IsUUID()
  temaId!: string;

  @IsString()
  @IsNotEmpty()
  judul!: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsObject()
  contentJson?: { blocks: unknown[] };
}

export class UpdateMateriDto {
  @IsOptional()
  @IsString()
  judul?: string;

  @IsOptional()
  @IsObject()
  contentJson?: { blocks: unknown[] };
}
