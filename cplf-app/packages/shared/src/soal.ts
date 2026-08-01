export const SOAL_TIPE = {
  PILIHAN_GANDA: 'PILIHAN_GANDA',
  ESAI_SINGKAT: 'ESAI_SINGKAT',
  BENAR_SALAH: 'BENAR_SALAH',
} as const;

export type SoalTipe = (typeof SOAL_TIPE)[keyof typeof SOAL_TIPE];

export const SOAL_TINGKAT = {
  MUDAH: 'MUDAH',
  SEDANG: 'SEDANG',
  SULIT: 'SULIT',
} as const;

export type SoalTingkat = (typeof SOAL_TINGKAT)[keyof typeof SOAL_TINGKAT];

export interface PilihanJawabanDto {
  id?: string;
  teks: string;
  isBenar: boolean;
  urutan: number;
}

export interface SoalDto {
  id: string;
  temaId: string;
  tipe: SoalTipe;
  pertanyaan: string;
  tingkatKesulitan: SoalTingkat;
  tags: string[];
  isActive: boolean;
  pilihan: PilihanJawabanDto[];
  createdAt: string;
  updatedAt: string;
}
