'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface UjianMurid {
  id: string;
  judul: string;
  durasiMenit: number;
  waktuMulai: string;
  waktuSelesai: string;
  tema: { kodeModulCplf: string; judul: string };
  sesi: { id: string; status: string; nilaiAkhir?: number | null } | null;
}

const SESI_LABEL: Record<string, string> = {
  BELUM_MULAI: 'Belum mulai',
  SEDANG_BERLANGSUNG: 'Sedang dikerjakan',
  MENUNGGU_PROSES: 'Menunggu penilaian',
  SELESAI: 'Selesai',
};

export default function UjianMuridHub() {
  const router = useRouter();

  const { data: ujian = [], isLoading, refetch } = useQuery({
    queryKey: ['ujian-saya'],
    queryFn: async () => {
      const { data } = await api.get<UjianMurid[]>('/ujian/saya');
      return data;
    },
    refetchInterval: (query) => {
      const hasPending = query.state.data?.some((u) => u.sesi?.status === 'MENUNGGU_PROSES');
      return hasPending ? 3000 : false;
    },
  });

  const mulaiMut = useMutation({
    mutationFn: (id: string) => api.post(`/ujian/${id}/mulai`),
    onSuccess: (_, id) => router.push(`/ujian/kerjakan/${id}`),
  });

  if (isLoading) return <p className="text-sm text-slate-500">Memuat...</p>;

  if (ujian.length === 0) {
    return <p className="text-sm text-slate-500">Belum ada ujian untuk kelas Anda.</p>;
  }

  const now = Date.now();

  return (
    <div className="space-y-3">
      {ujian.map((u) => {
        const sesiStatus = u.sesi?.status ?? 'BELUM_MULAI';
        const inWindow =
          now >= new Date(u.waktuMulai).getTime() &&
          now <= new Date(u.waktuSelesai).getTime();
        const canStart =
          inWindow && ['BELUM_MULAI', 'SEDANG_BERLANGSUNG'].includes(sesiStatus);
        const isPending = sesiStatus === 'MENUNGGU_PROSES';
        const isDone = sesiStatus === 'SELESAI';

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
              Status:{' '}
              <span className="font-medium">{SESI_LABEL[sesiStatus]}</span>
              {isDone && u.sesi?.nilaiAkhir != null && (
                <span className="ml-2 text-green-700 font-semibold">
                  Nilai: {u.sesi.nilaiAkhir}
                </span>
              )}
            </p>
            <div className="mt-3 flex gap-2">
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
              {isPending && (
                <button
                  onClick={() => router.push(`/ujian/hasil/${u.id}`)}
                  className="text-sm border px-4 py-2 rounded-lg hover:bg-slate-50"
                >
                  Cek penilaian...
                </button>
              )}
              {isDone && (
                <button
                  onClick={() => router.push(`/ujian/hasil/${u.id}`)}
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Lihat Hasil
                </button>
              )}
            </div>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => refetch()}
        className="text-xs text-slate-400 hover:text-slate-600"
      >
        Refresh daftar
      </button>
    </div>
  );
}
