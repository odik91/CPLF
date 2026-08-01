'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';
import { MateriEditor } from '@/components/materi/MateriEditor';
import { MateriRenderer } from '@/components/materi/MateriRenderer';
import { emptyContent, normalizeContent } from '@/lib/materi-content';
import type { MateriContent } from '@cplf/shared';

interface MateriDetail {
  id: string;
  judul: string;
  slug: string;
  status: string;
  contentJson: MateriContent;
  tema: { kodeModulCplf: string; judul: string };
}

function apiErrorMessage(err: unknown, fallback: string) {
  const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
  return typeof msg === 'string' ? msg : fallback;
}

export default function EditMateriPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();
  const qc = useQueryClient();
  const [judul, setJudul] = useState('');
  const [content, setContent] = useState<MateriContent>(emptyContent());
  const [preview, setPreview] = useState(false);
  const [saveError, setSaveError] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['materi-detail', id],
    enabled: !!id,
    retry: false,
    queryFn: async () => {
      const { data: detail } = await api.get<MateriDetail>(`/materi/detail/${id}`);
      return detail;
    },
  });

  useEffect(() => {
    if (data) {
      setJudul(data.judul);
      setContent(normalizeContent(data.contentJson));
    }
  }, [data]);

  const saveMut = useMutation({
    mutationFn: () => api.patch(`/materi/${id}`, { judul, contentJson: content }),
    onSuccess: () => {
      setSaveError('');
      qc.invalidateQueries({ queryKey: ['materi-detail', id] });
    },
    onError: (err) => setSaveError(apiErrorMessage(err, 'Gagal menyimpan')),
  });

  const publishMut = useMutation({
    mutationFn: () => api.post(`/materi/${id}/publish`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['materi'] });
      router.push('/materi');
    },
    onError: (err) => setSaveError(apiErrorMessage(err, 'Gagal publish')),
  });

  if (!id) {
    return <div className="p-6 text-red-600">ID materi tidak valid</div>;
  }

  if (isLoading) return <div className="p-6">Memuat...</div>;

  if (isError || !data) {
    return (
      <div className="p-6">
        <p className="text-red-600 mb-2">
          {apiErrorMessage(error, 'Materi tidak ditemukan atau Anda tidak punya akses')}
        </p>
        <button
          type="button"
          onClick={() => router.push('/materi')}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Kembali ke daftar materi
        </button>
      </div>
    );
  }

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
        <MateriEditor key={data.id} value={content} onChange={setContent} />
      )}

      {saveError && <p className="text-sm text-red-600 mt-4">{saveError}</p>}

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => saveMut.mutate()}
          disabled={saveMut.isPending}
          className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
        >
          {saveMut.isPending ? 'Menyimpan...' : 'Simpan'}
        </button>
        {data.status !== 'PUBLISHED' && (
          <button
            onClick={() => publishMut.mutate()}
            disabled={publishMut.isPending}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
          >
            Publish
          </button>
        )}
      </div>
    </div>
  );
}
