'use client';

import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface UjianRow {
  id: string;
  judul: string;
  status: string;
  jumlahSoal: number;
  durasiMenit: number;
  waktuMulai: string;
  waktuSelesai: string;
  tema: { kodeModulCplf: string; judul: string };
  kelas: { nama: string };
  _count: { sesi: number };
}

const STATUS_LABEL: Record<string, string> = {
  DRAFT: 'Draft',
  PUBLISHED: 'Published',
  ONGOING: 'Berlangsung',
  CLOSED: 'Selesai',
};

export default function UjianGuruHub() {
  const qc = useQueryClient();

  const { data: ujian = [], isLoading } = useQuery({
    queryKey: ['ujian-guru'],
    queryFn: async () => {
      const { data } = await api.get<UjianRow[]>('/ujian');
      return data;
    },
  });

  const publishMut = useMutation({
    mutationFn: (id: string) => api.post(`/ujian/${id}/publish`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['ujian-guru'] }),
  });

  const closeMut = useMutation({
    mutationFn: (id: string) => api.post(`/ujian/${id}/close`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['ujian-guru'] }),
  });

  if (isLoading) return <p className="text-sm text-slate-500">Memuat...</p>;

  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left p-3">Judul</th>
            <th className="text-left p-3">Tema / Kelas</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Sesi</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {ujian.length === 0 ? (
            <tr><td colSpan={5} className="p-4 text-slate-500">Belum ada ujian</td></tr>
          ) : (
            ujian.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.judul}</td>
                <td className="p-3 text-xs text-slate-600">
                  {u.tema.kodeModulCplf}<br />{u.kelas.nama}
                </td>
                <td className="p-3">
                  <span className="text-xs bg-slate-100 px-2 py-0.5 rounded">
                    {STATUS_LABEL[u.status] ?? u.status}
                  </span>
                </td>
                <td className="p-3">{u._count.sesi || '—'}</td>
                <td className="p-3 text-right space-x-2">
                  {u.status !== 'DRAFT' && u._count.sesi > 0 && (
                    <Link
                      href={`/ujian/statistik/${u.id}`}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      Statistik
                    </Link>
                  )}
                  {u.status === 'DRAFT' && (
                    <button
                      onClick={() => publishMut.mutate(u.id)}
                      disabled={publishMut.isPending}
                      className="text-green-600 hover:underline text-xs"
                    >
                      Publish
                    </button>
                  )}
                  {(u.status === 'PUBLISHED' || u.status === 'ONGOING') && (
                    <button
                      onClick={() => closeMut.mutate(u.id)}
                      disabled={closeMut.isPending}
                      className="text-amber-600 hover:underline text-xs"
                    >
                      Tutup
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
