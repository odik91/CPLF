'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import api from '@/lib/api';
import { MateriRenderer, emptyContent } from '@/components/materi/MateriRenderer';
import type { MateriContent } from '@cplf/shared';

interface MateriDetail {
  judul: string;
  contentJson: MateriContent;
  tema: { kodeModulCplf: string; judul: string };
  createdBy: { nama: string };
}

export default function BacaMateriPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['materi-slug', slug],
    queryFn: async () => {
      const { data } = await api.get<MateriDetail>(`/materi/slug/${slug}`);
      return data;
    },
  });

  if (isLoading) return <div className="p-6">Memuat materi...</div>;
  if (error || !data) {
    return <div className="p-6 text-red-600">Materi tidak ditemukan atau tidak tersedia.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <p className="text-sm text-slate-500">{data.tema.kodeModulCplf} · {data.tema.judul}</p>
      <h1 className="text-2xl font-bold text-slate-900 mt-1 mb-1">{data.judul}</h1>
      <p className="text-xs text-slate-400 mb-8">Oleh {data.createdBy.nama}</p>
      <MateriRenderer content={data.contentJson ?? emptyContent()} />
    </div>
  );
}
