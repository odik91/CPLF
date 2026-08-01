'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { BlockEditor } from '@/components/materi/BlockEditor';
import { MateriRenderer, emptyContent } from '@/components/materi/MateriRenderer';
import type { MateriContent } from '@cplf/shared';

interface MateriDetail {
  id: string;
  judul: string;
  slug: string;
  status: string;
  contentJson: MateriContent;
  tema: { kodeModulCplf: string; judul: string };
}

export default function EditMateriPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();
  const [judul, setJudul] = useState('');
  const [content, setContent] = useState<MateriContent>(emptyContent());
  const [preview, setPreview] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['materi-detail', id],
    queryFn: async () => {
      const { data } = await api.get<MateriDetail>(`/materi/detail/${id}`);
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setJudul(data.judul);
      setContent(data.contentJson ?? emptyContent());
    }
  }, [data]);

  const saveMut = useMutation({
    mutationFn: () => api.patch(`/materi/${id}`, { judul, contentJson: content }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['materi-detail', id] }),
  });

  const publishMut = useMutation({
    mutationFn: () => api.post(`/materi/${id}/publish`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['materi'] });
      router.push('/materi');
    },
  });

  if (isLoading) return <div className="p-6">Memuat...</div>;
  if (!data) return <div className="p-6 text-red-600">Materi tidak ditemukan</div>;

  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-slate-500">{data.tema.kodeModulCplf}</p>
          <h1 className="text-xl font-semibold">Edit Materi</h1>
        </div>
        <span className="text-xs bg-slate-100 px-2 py-1 rounded">{data.status}</span>
      </div>

      <input
        className="w-full border rounded-lg px-3 py-2 mb-4"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setPreview(false)}
          className={`text-sm px-3 py-1 rounded ${!preview ? 'bg-blue-100 text-blue-800' : 'border'}`}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => setPreview(true)}
          className={`text-sm px-3 py-1 rounded ${preview ? 'bg-blue-100 text-blue-800' : 'border'}`}
        >
          Preview
        </button>
      </div>

      {preview ? (
        <MateriRenderer content={content} />
      ) : (
        <BlockEditor value={content} onChange={setContent} />
      )}

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => saveMut.mutate()}
          disabled={saveMut.isPending}
          className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm"
        >
          Simpan
        </button>
        {data.status !== 'PUBLISHED' && (
          <button
            onClick={() => publishMut.mutate()}
            disabled={publishMut.isPending}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Publish
          </button>
        )}
      </div>
    </div>
  );
}
