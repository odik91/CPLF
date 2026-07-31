import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

export class AssignSiswaDto {
  @IsArray()
  @IsUUID('4', { each: true })
  siswaUserIds!: string[];
}

export class SetWaliKelasDto {
  @IsOptional()
  @IsString()
  waliKelasId?: string | null;
}
