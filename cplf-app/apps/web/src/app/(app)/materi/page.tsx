'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import api from '@/lib/api';

interface TemaOption {
  id: string;
  kodeModulCplf: string;
  judul: string;
  semester: number;
  tingkat: string;
}

interface MateriRow {
  id: string;
  judul: string;
  slug: string;
  status: string;
  updatedAt: string;
}

export default function MateriHubPage() {
  const { user } = useAuth();
  const [temaId, setTemaId] = useState('');
  const canEdit = user?.permissions.includes('materi:create');

  const { data: temas = [] } = useQuery({
    queryKey: ['tema-all'],
    queryFn: async () => {
      const { data } = await api.get<TemaOption[]>('/tema');
      return data;
    },
  });

  const { data: materi = [], isLoading } = useQuery({
    queryKey: ['materi', temaId],
    enabled: !!temaId,
    queryFn: async () => {
      const { data } = await api.get<MateriRow[]>('/materi', { params: { temaId } });
      return data;
    },
  });

  const selectedTema = temas.find((t: TemaOption) => t.id === temaId);

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Materi Pembelajaran</h1>
      <p className="text-sm text-slate-500 mb-6">Kelola atau baca materi per pertemuan CPLF</p>

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

      {selectedTema && canEdit && (
        <Link
          href={`/materi/buat?temaId=${temaId}`}
          className="inline-block mb-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
        >
          + Buat materi baru
        </Link>
      )}

      {temaId && (
        <div className="bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left p-3">Judul</th>
                <th className="text-left p-3">Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={3} className="p-4">Memuat...</td></tr>
              ) : materi.length === 0 ? (
                <tr><td colSpan={3} className="p-4 text-slate-500">Belum ada materi</td></tr>
              ) : (
                materi.map((m: MateriRow) => (
                  <tr key={m.id} className="border-t">
                    <td className="p-3">{m.judul}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        m.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' :
                        m.status === 'DRAFT' ? 'bg-slate-100 text-slate-600' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {m.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      {m.status === 'PUBLISHED' && (
                        <Link href={`/materi/baca/${m.slug}`} className="text-blue-600 hover:underline">
                          Baca
                        </Link>
                      )}
                      {canEdit && (
                        <Link href={`/materi/edit/${m.id}`} className="text-blue-600 hover:underline">
                          Edit
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
