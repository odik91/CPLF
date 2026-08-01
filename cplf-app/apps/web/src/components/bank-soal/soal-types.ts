export type SoalTipe = 'PILIHAN_GANDA' | 'BENAR_SALAH' | 'ESAI_SINGKAT';

export interface PilihanRow {
  teks: string;
  isBenar: boolean;
}

export interface SoalEntry {
  id: string;
  tipe: SoalTipe;
  pertanyaan: string;
  tingkat: string;
  pilihan: PilihanRow[];
}

export const DEFAULT_PG: PilihanRow[] = [
  { teks: '', isBenar: true },
  { teks: '', isBenar: false },
  { teks: '', isBenar: false },
  { teks: '', isBenar: false },
];

export const DEFAULT_BS: PilihanRow[] = [
  { teks: 'Benar', isBenar: true },
  { teks: 'Salah', isBenar: false },
];

export function clonePilihan(rows: PilihanRow[]): PilihanRow[] {
  return rows.map((p) => ({ ...p }));
}

export function createEmptySoalEntry(): SoalEntry {
  return {
    id: crypto.randomUUID(),
    tipe: 'PILIHAN_GANDA',
    pertanyaan: '',
    tingkat: 'SEDANG',
    pilihan: clonePilihan(DEFAULT_PG),
  };
}

export function pilihanForTipe(tipe: SoalTipe): PilihanRow[] {
  if (tipe === 'BENAR_SALAH') return clonePilihan(DEFAULT_BS);
  if (tipe === 'PILIHAN_GANDA') return clonePilihan(DEFAULT_PG);
  return [];
}

export function buildPilihanPayload(entry: SoalEntry) {
  if (entry.tipe === 'ESAI_SINGKAT') return undefined;
  return entry.pilihan.map((p, i) => ({ teks: p.teks, isBenar: p.isBenar, urutan: i }));
}

export function validateSoalEntry(entry: SoalEntry, index: number): string | null {
  if (!entry.pertanyaan.trim()) {
    return `Soal #${index + 1}: pertanyaan wajib diisi`;
  }
  if (entry.tipe === 'PILIHAN_GANDA') {
    const filled = entry.pilihan.filter((p) => p.teks.trim());
    if (filled.length < 2) {
      return `Soal #${index + 1}: minimal 2 pilihan jawaban`;
    }
    if (!entry.pilihan.some((p) => p.isBenar && p.teks.trim())) {
      return `Soal #${index + 1}: pilih jawaban benar`;
    }
  }
  return null;
}
