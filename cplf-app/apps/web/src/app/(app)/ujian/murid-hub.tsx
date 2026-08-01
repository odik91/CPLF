'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface UjianAktif {
  id: string;
  judul: string;
  durasiMenit: number;
  waktuMulai: string;
  waktuSelesai: string;
  tema: { kodeModulCplf: string; judul: string };
  sesi: { id: string; status: string } | null;
}

const SESI_LABEL: Record<string, string> = {
  BELUM_MULAI: 'Belum mulai',
  SEDANG_BERLANGSUNG: 'Sedang dikerjakan',
  MENUNGGU_PROSES: 'Menunggu penilaian',
  SELESAI: 'Selesai',
};

export default function UjianMuridHub() {
  const router = useRouter();

  const { data: ujian = [], isLoading } = useQuery({
    queryKey: ['ujian-aktif'],
    queryFn: async () => {
      const { data } = await api.get<UjianAktif[]>('/ujian/aktif');
      return data;
    },
  });

  const mulaiMut = useMutation({
    mutationFn: (id: string) => api.post(`/ujian/${id}/mulai`),
    onSuccess: (_, id) => router.push(`/ujian/kerjakan/${id}`),
  });

  if (isLoading) return <p className="text-sm text-slate-500">Memuat...</p>;

  if (ujian.length === 0) {
    return <p className="text-sm text-slate-500">Tidak ada ujian aktif saat ini.</p>;
  }

  return (
    <div className="space-y-3">
      {ujian.map((u) => {
        const sesiStatus = u.sesi?.status ?? 'BELUM_MULAI';
        const canStart = ['BELUM_MULAI', 'SEDANG_BERLANGSUNG'].includes(sesiStatus);
        const isDone = ['MENUNGGU_PROSES', 'SELESAI'].includes(sesiStatus);

        return (
          <div key={u.id} className="bg-white border rounded-xl p-4">
            <p className="text-xs text-slate-500">{u.tema.kodeModulCplf}</p>
            <h2 className="font-medium text-slate-900">{u.judul}</h2>
            <p className="text-xs text-slate-500 mt-1">
              Durasi {u.durasiMenit} menit ·{' '}
              {new Date(u.waktuMulai).toLocaleString('id-ID')} –{' '}
              {new Date(u.waktuSelesai).toLocaleString('id-ID')}
            </p>
            <p className="text-xs mt-2">
              Status: <span className="font-medium">{SESI_LABEL[sesiStatus]}</span>
            </p>
            <div className="mt-3">
              {canStart && (
                <button
                  onClick={() =>
                    sesiStatus === 'SEDANG_BERLANGSUNG'
                      ? router.push(`/ujian/kerjakan/${u.id}`)
                      : mulaiMut.mutate(u.id)
                  }
                  disabled={mulaiMut.isPending}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  {sesiStatus === 'SEDANG_BERLANGSUNG' ? 'Lanjutkan' : 'Mulai Ujian'}
                </button>
              )}
              {isDone && (
                <p className="text-sm text-slate-500">
                  {sesiStatus === 'MENUNGGU_PROSES'
                    ? 'Jawaban sedang diproses. Nilai akan muncul setelah penilaian.'
                    : 'Ujian selesai.'}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
