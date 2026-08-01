'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import api from '@/lib/api';
import { SoalEntryFields } from './SoalEntryFields';
import {
  buildPilihanPayload,
  createEmptySoalEntry,
  type SoalEntry,
  validateSoalEntry,
} from './soal-types';

export default function SoalBulkForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const temaId = searchParams.get('temaId') ?? '';

  const [entries, setEntries] = useState<SoalEntry[]>([
    createEmptySoalEntry(),
    createEmptySoalEntry(),
    createEmptySoalEntry(),
  ]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState('');

  const updateEntry = (index: number, entry: SoalEntry) => {
    setEntries((prev) => prev.map((e, i) => (i === index ? entry : e)));
  };

  const addEntry = () => {
    setEntries((prev) => [...prev, createEmptySoalEntry()]);
  };

  const removeEntry = (index: number) => {
    setEntries((prev) => (prev.length <= 1 ? prev : prev.filter((_, i) => i !== index)));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setProgress('');

    if (!temaId) {
      setError('Tema belum dipilih. Kembali ke Bank Soal dan pilih tema terlebih dahulu.');
      return;
    }

    const filled = entries.filter((en) => en.pertanyaan.trim());
    if (filled.length === 0) {
      setError('Isi minimal 1 soal');
      return;
    }

    for (let i = 0; i < filled.length; i++) {
      const originalIndex = entries.indexOf(filled[i]);
      const msg = validateSoalEntry(filled[i], originalIndex);
      if (msg) {
        setError(msg);
        return;
      }
    }

    setSaving(true);
    let saved = 0;

    try {
      for (let i = 0; i < filled.length; i++) {
        const entry = filled[i];
        setProgress(`Menyimpan ${i + 1} / ${filled.length}...`);
        await api.post('/bank-soal', {
          temaId,
          tipe: entry.tipe,
          pertanyaan: entry.pertanyaan.trim(),
          tingkatKesulitan: entry.tingkat,
          pilihan: buildPilihanPayload(entry),
        });
        saved++;
      }
      await queryClient.invalidateQueries({ queryKey: ['bank-soal', temaId] });
      router.push(`/bank-soal?temaId=${temaId}`);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setError(
        saved > 0
          ? `${saved} soal tersimpan, gagal lanjut: ${typeof msg === 'string' ? msg : 'error'}`
          : typeof msg === 'string'
            ? msg
            : 'Gagal menyimpan soal',
      );
      await queryClient.invalidateQueries({ queryKey: ['bank-soal', temaId] });
    } finally {
      setSaving(false);
      setProgress('');
    }
  };

  if (!temaId) {
    return (
      <div className="p-6 max-w-2xl">
        <p className="text-slate-500 mb-4">Pilih tema dari halaman Bank Soal terlebih dahulu.</p>
        <Link href="/bank-soal" className="text-sm text-blue-600 hover:underline">
          ← Ke Bank Soal
        </Link>
      </div>
    );
  }

  const filledCount = entries.filter((en) => en.pertanyaan.trim()).length;

  return (
    <div className="p-6 max-w-2xl">
      <Link
        href={`/bank-soal?temaId=${temaId}`}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Kembali
      </Link>
      <h1 className="text-xl font-semibold mt-2 mb-1">Tambah Soal (Batch)</h1>
      <p className="text-sm text-slate-500 mb-6">
        Isi beberapa soal sekaligus. Baris kosong akan diabaikan saat simpan.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {entries.map((entry, index) => (
          <SoalEntryFields
            key={entry.id}
            entry={entry}
            index={index}
            onChange={(updated) => updateEntry(index, updated)}
            showRemove={entries.length > 1}
            onRemove={() => removeEntry(index)}
          />
        ))}

        <button
          type="button"
          onClick={addEntry}
          className="w-full border-2 border-dashed border-slate-300 rounded-xl py-3 text-sm text-slate-600 hover:border-blue-400 hover:text-blue-600"
        >
          + Tambah baris soal
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {progress && <p className="text-sm text-slate-500">{progress}</p>}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving || filledCount === 0}
            className="bg-blue-600 text-white text-sm px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {saving ? 'Menyimpan...' : `Simpan ${filledCount} soal`}
          </button>
          <span className="text-xs text-slate-400">{entries.length} baris form</span>
        </div>
      </form>
    </div>
  );
}
