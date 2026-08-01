'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import api from '@/lib/api';

interface TemaOption {
  id: string;
  kodeModulCplf: string;
  judul: string;
}

interface SoalRow {
  id: string;
  pertanyaan: string;
  tipe: string;
  tingkatKesulitan: string;
  isActive: boolean;
  pilihan: { teks: string; isBenar: boolean }[];
}

const TIPE_LABEL: Record<string, string> = {
  PILIHAN_GANDA: 'Pilihan Ganda',
  BENAR_SALAH: 'Benar/Salah',
  ESAI_SINGKAT: 'Esai Singkat',
};

export default function BankSoalHub() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const [temaId, setTemaId] = useState('');
  const canEdit = user?.permissions.includes('bank_soal:create');

  useEffect(() => {
    const fromUrl = searchParams.get('temaId');
    if (fromUrl) setTemaId(fromUrl);
  }, [searchParams]);

  const { data: temas = [] } = useQuery({
    queryKey: ['tema-all'],
    queryFn: async () => {
      const { data } = await api.get<TemaOption[]>('/tema');
      return data;
    },
  });

  const { data: soal = [], isLoading } = useQuery({
    queryKey: ['bank-soal', temaId],
    enabled: !!temaId,
    refetchOnMount: 'always',
    queryFn: async () => {
      const { data } = await api.get<SoalRow[]>('/bank-soal', { params: { temaId } });
      return data;
    },
  });

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Bank Soal</h1>
      <p className="text-sm text-slate-500 mb-6">Kelola soal per pertemuan CPLF untuk ujian</p>

      <div className="mb-6">
        <label className="text-sm text-slate-600 block mb-1">Pilih pertemuan (tema)</label>
        <select
          value={temaId}
          onChange={(e) => setTemaId(e.target.value)}
          className="w-full max-w-md border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">— Pilih tema —</option>
          {temas.map((t: TemaOption) => (
            <option key={t.id} value={t.id}>
              {t.kodeModulCplf} — {t.judul}
            </option>
          ))}
        </select>
      </div>

      {temaId && canEdit && (
        <Link
          href={`/bank-soal/buat?temaId=${temaId}`}
          className="inline-block mb-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
        >
          + Tambah soal (batch)
        </Link>
      )}

      {temaId && (
        <div className="bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left p-3">Pertanyaan</th>
                <th className="text-left p-3">Tipe</th>
                <th className="text-left p-3">Tingkat</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={4} className="p-4">Memuat...</td></tr>
              ) : soal.length === 0 ? (
                <tr><td colSpan={4} className="p-4 text-slate-500">Belum ada soal</td></tr>
              ) : (
                soal.map((s: SoalRow) => (
                  <tr key={s.id} className="border-t">
                    <td className="p-3 max-w-xs truncate">{s.pertanyaan}</td>
                    <td className="p-3">{TIPE_LABEL[s.tipe] ?? s.tipe}</td>
                    <td className="p-3">{s.tingkatKesulitan}</td>
                    <td className="p-3 text-right">
                      {canEdit && (
                        <Link href={`/bank-soal/edit/${s.id}`} className="text-blue-600 hover:underline">
                          Edit
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {temaId && soal.length > 0 && (
            <p className="p-3 text-xs text-slate-500 border-t">
              {soal.length} soal aktif — minimal 5 soal disarankan sebelum setup ujian
            </p>
          )}
        </div>
      )}
    </div>
  );
}
