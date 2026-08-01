'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import api from '@/lib/api';

type SoalTipe = 'PILIHAN_GANDA' | 'BENAR_SALAH' | 'ESAI_SINGKAT';

interface PilihanRow {
  teks: string;
  isBenar: boolean;
}

const DEFAULT_PG: PilihanRow[] = [
  { teks: '', isBenar: true },
  { teks: '', isBenar: false },
  { teks: '', isBenar: false },
  { teks: '', isBenar: false },
];

const DEFAULT_BS: PilihanRow[] = [
  { teks: 'Benar', isBenar: true },
  { teks: 'Salah', isBenar: false },
];

export default function SoalForm({
  mode,
  soalId,
  initialTemaId,
}: {
  mode: 'create' | 'edit';
  soalId?: string;
  initialTemaId?: string;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const [temaId, setTemaId] = useState(initialTemaId ?? searchParams.get('temaId') ?? '');

  const [tipe, setTipe] = useState<SoalTipe>('PILIHAN_GANDA');
  const [pertanyaan, setPertanyaan] = useState('');
  const [tingkat, setTingkat] = useState('SEDANG');
  const [pilihan, setPilihan] = useState<PilihanRow[]>(DEFAULT_PG);
  const [loading, setLoading] = useState(mode === 'edit');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (mode !== 'edit' || !soalId) return;
    api
      .get(`/bank-soal/${soalId}`)
      .then(({ data }) => {
        setTemaId(data.temaId);
        setTipe(data.tipe);
        setPertanyaan(data.pertanyaan);
        setTingkat(data.tingkatKesulitan);
        if (data.pilihan?.length) {
          setPilihan(
            data.pilihan.map((p: { teks: string; isBenar: boolean }) => ({
              teks: p.teks,
              isBenar: p.isBenar,
            })),
          );
        } else if (data.tipe === 'BENAR_SALAH') {
          setPilihan(DEFAULT_BS);
        } else if (data.tipe === 'PILIHAN_GANDA') {
          setPilihan(DEFAULT_PG);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [mode, soalId]);

  const handleTipeChange = (newTipe: SoalTipe) => {
    setTipe(newTipe);
    if (newTipe === 'PILIHAN_GANDA') {
      setPilihan(DEFAULT_PG);
    } else if (newTipe === 'BENAR_SALAH') {
      setPilihan(DEFAULT_BS);
    }
  };

  const setBenar = (index: number) => {
    setPilihan((prev) => prev.map((p, i) => ({ ...p, isBenar: i === index })));
  };

  const updatePilihanTeks = (index: number, teks: string) => {
    setPilihan((prev) => prev.map((p, i) => (i === index ? { ...p, teks } : p)));
  };

  const buildPilihanPayload = () => {
    if (tipe === 'ESAI_SINGKAT') return undefined;
    return pilihan.map((p, i) => ({ teks: p.teks, isBenar: p.isBenar, urutan: i }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    const body = {
      tipe,
      pertanyaan,
      tingkatKesulitan: tingkat,
      pilihan: buildPilihanPayload(),
    };

    try {
      if (mode === 'create') {
        if (!temaId) {
          setError('Tema belum dipilih');
          setSaving(false);
          return;
        }
        await api.post('/bank-soal', { ...body, temaId });
      } else {
        await api.patch(`/bank-soal/${soalId}`, body);
      }
      await queryClient.invalidateQueries({ queryKey: ['bank-soal', temaId] });
      router.push(`/bank-soal${temaId ? `?temaId=${temaId}` : ''}`);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setError(typeof msg === 'string' ? msg : 'Gagal menyimpan soal');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Memuat...</div>;

  return (
    <div className="p-6 max-w-2xl">
      <Link href="/bank-soal" className="text-sm text-blue-600 hover:underline">
        ← Kembali
      </Link>
      <h1 className="text-xl font-semibold mt-2 mb-6">
        {mode === 'create' ? 'Tambah Soal' : 'Edit Soal'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-slate-600 block mb-1">Tipe soal</label>
          <select
            value={tipe}
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
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            required
            rows={4}
            className="w-full border rounded-lg px-3 py-2 text-sm"
            placeholder={
              tipe === 'BENAR_SALAH'
                ? 'Tulis pernyataan yang akan dinilai benar atau salah...'
                : undefined
            }
          />
        </div>

        <div>
          <label className="text-sm text-slate-600 block mb-1">Tingkat kesulitan</label>
          <select
            value={tingkat}
            onChange={(e) => setTingkat(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="MUDAH">Mudah</option>
            <option value="SEDANG">Sedang</option>
            <option value="SULIT">Sulit</option>
          </select>
        </div>

        {tipe === 'PILIHAN_GANDA' && (
          <div className="space-y-2">
            <p className="text-sm text-slate-600">Pilihan jawaban (centang yang benar)</p>
            {pilihan.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="benar-pg"
                  checked={p.isBenar}
                  onChange={() => setBenar(i)}
                />
                <input
                  value={p.teks}
                  onChange={(e) => updatePilihanTeks(i, e.target.value)}
                  placeholder={`Opsi ${String.fromCharCode(65 + i)}`}
                  required
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        )}

        {tipe === 'BENAR_SALAH' && (
          <div className="space-y-2">
            <p className="text-sm text-slate-600">
              Jawaban yang benar untuk pernyataan di atas:
            </p>
            {pilihan.map((p, i) => (
              <label
                key={i}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer ${
                  p.isBenar ? 'border-blue-500 bg-blue-50' : 'hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="benar-bs"
                  checked={p.isBenar}
                  onChange={() => setBenar(i)}
                />
                <span className="text-sm font-medium">{p.teks}</span>
              </label>
            ))}
          </div>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={saving || (mode === 'create' && !temaId)}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {saving ? 'Menyimpan...' : 'Simpan'}
        </button>
      </form>
    </div>
  );
}
