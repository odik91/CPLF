'use client';

import type { SoalEntry, SoalTipe } from './soal-types';
import { pilihanForTipe } from './soal-types';

interface Props {
  entry: SoalEntry;
  index: number;
  onChange: (entry: SoalEntry) => void;
  showRemove?: boolean;
  onRemove?: () => void;
}

export function SoalEntryFields({ entry, index, onChange, showRemove, onRemove }: Props) {
  const fieldId = entry.id;

  const patch = (partial: Partial<SoalEntry>) => onChange({ ...entry, ...partial });

  const handleTipeChange = (tipe: SoalTipe) => {
    patch({ tipe, pilihan: pilihanForTipe(tipe) });
  };

  const setBenar = (pilihanIndex: number) => {
    patch({
      pilihan: entry.pilihan.map((p, i) => ({ ...p, isBenar: i === pilihanIndex })),
    });
  };

  const updatePilihanTeks = (pilihanIndex: number, teks: string) => {
    patch({
      pilihan: entry.pilihan.map((p, i) => (i === pilihanIndex ? { ...p, teks } : p)),
    });
  };

  return (
    <div className="border rounded-xl p-4 bg-white relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800">Soal #{index + 1}</h3>
        {showRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-red-600 hover:underline"
          >
            Hapus baris
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-slate-600 block mb-1">Tipe soal</label>
          <select
            value={entry.tipe}
            onChange={(e) => handleTipeChange(e.target.value as SoalTipe)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="PILIHAN_GANDA">Pilihan Ganda</option>
            <option value="BENAR_SALAH">Benar/Salah</option>
            <option value="ESAI_SINGKAT">Esai Singkat</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-slate-600 block mb-1">Pertanyaan</label>
          <textarea
            value={entry.pertanyaan}
            onChange={(e) => patch({ pertanyaan: e.target.value })}
            rows={3}
            className="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder={
              entry.tipe === 'BENAR_SALAH'
                ? 'Tulis pernyataan yang akan dinilai benar atau salah...'
                : 'Tulis pertanyaan...'
            }
          />
        </div>

        <div>
          <label className="text-sm text-slate-600 block mb-1">Tingkat kesulitan</label>
          <select
            value={entry.tingkat}
            onChange={(e) => patch({ tingkat: e.target.value })}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="MUDAH">Mudah</option>
            <option value="SEDANG">Sedang</option>
            <option value="SULIT">Sulit</option>
          </select>
        </div>

        {entry.tipe === 'PILIHAN_GANDA' && (
          <div className="space-y-2">
            <p className="text-sm text-slate-600">Pilihan jawaban (centang yang benar)</p>
            {entry.pilihan.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`benar-pg-${fieldId}`}
                  checked={p.isBenar}
                  onChange={() => setBenar(i)}
                />
                <input
                  value={p.teks}
                  onChange={(e) => updatePilihanTeks(i, e.target.value)}
                  placeholder={`Opsi ${String.fromCharCode(65 + i)}`}
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        )}

        {entry.tipe === 'BENAR_SALAH' && (
          <div className="space-y-2">
            <p className="text-sm text-slate-600">Jawaban yang benar untuk pernyataan di atas:</p>
            {entry.pilihan.map((p, i) => (
              <label
                key={i}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer ${
                  p.isBenar ? 'border-blue-500 bg-blue-50' : 'hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name={`benar-bs-${fieldId}`}
                  checked={p.isBenar}
                  onChange={() => setBenar(i)}
                />
                <span className="text-sm font-medium">{p.teks}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
