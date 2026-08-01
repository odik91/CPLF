'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import api from '@/lib/api';
import { SoalEntryFields } from './SoalEntryFields';
import {
  buildPilihanPayload,
  clonePilihan,
  DEFAULT_BS,
  DEFAULT_PG,
  type SoalEntry,
  validateSoalEntry,
} from './soal-types';

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

  const [entry, setEntry] = useState<SoalEntry>({
    id: 'edit',
    tipe: 'PILIHAN_GANDA',
    pertanyaan: '',
    tingkat: 'SEDANG',
    pilihan: clonePilihan(DEFAULT_PG),
  });
  const [loading, setLoading] = useState(mode === 'edit');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (mode !== 'edit' || !soalId) return;
    api
      .get(`/bank-soal/${soalId}`)
      .then(({ data }) => {
        setTemaId(data.temaId);
        setEntry({
          id: soalId,
          tipe: data.tipe,
          pertanyaan: data.pertanyaan,
          tingkat: data.tingkatKesulitan,
          pilihan: data.pilihan?.length
            ? data.pilihan.map((p: { teks: string; isBenar: boolean }) => ({
                teks: p.teks,
                isBenar: p.isBenar,
              }))
            : data.tipe === 'BENAR_SALAH'
              ? clonePilihan(DEFAULT_BS)
              : clonePilihan(DEFAULT_PG),
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [mode, soalId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateSoalEntry(entry, 0);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    const body = {
      tipe: entry.tipe,
      pertanyaan: entry.pertanyaan.trim(),
      tingkatKesulitan: entry.tingkat,
      pilihan: buildPilihanPayload(entry),
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
      <h1 className="text-xl font-semibold mt-2 mb-6">Edit Soal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <SoalEntryFields entry={entry} index={0} onChange={setEntry} />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {saving ? 'Menyimpan...' : 'Simpan'}
        </button>
      </form>
    </div>
  );
}
