'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import api from '@/lib/api';
import { emptyContent } from '@/components/materi/MateriRenderer';
import { BlockEditor } from '@/components/materi/BlockEditor';
import type { MateriContent } from '@cplf/shared';

export default function BuatMateriForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const temaId = searchParams.get('temaId') ?? '';
  const [judul, setJudul] = useState('');
  const [content, setContent] = useState<MateriContent>(emptyContent());

  const createMut = useMutation({
    mutationFn: () =>
      api.post('/materi', { temaId, judul, contentJson: content }),
    onSuccess: (res) => router.push(`/materi/edit/${res.data.id}`),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createMut.mutate();
  };

  if (!temaId) {
    return <p className="p-6 text-slate-500">Pilih tema dari halaman Materi terlebih dahulu.</p>;
  }

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-xl font-semibold mb-4">Buat Materi Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Judul materi"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />
        <BlockEditor value={content} onChange={setContent} />
        <button
          type="submit"
          disabled={createMut.isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm"
        >
          Simpan draft
        </button>
      </form>
    </div>
  );
}
