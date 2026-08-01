'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface HasilResponse {
  ujian: { id: string; judul: string; tema: { kodeModulCplf: string } };
  sesi: {
    status: string;
    nilaiAkhir: number | null;
    waktuSubmit: string | null;
  };
  ringkasan: { benar: number; total: number } | null;
  detail: { urutan: number; pertanyaan: string; isBenar: boolean }[];
}

export default function HasilUjianPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['ujian-hasil', id],
    enabled: !!id,
    queryFn: async () => {
      const { data: res } = await api.get<HasilResponse>(`/ujian/${id}/hasil`);
      return res;
    },
    refetchInterval: (query) =>
      query.state.data?.sesi.status === 'MENUNGGU_PROSES' ? 2000 : false,
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-lg mx-auto text-center">
        <p className="text-slate-500">Memuat hasil...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 max-w-lg mx-auto">
        <p className="text-red-600">Hasil ujian tidak tersedia.</p>
        <Link href="/ujian" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
          ← Kembali
        </Link>
      </div>
    );
  }

  const pending = data.sesi.status === 'MENUNGGU_PROSES';

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Link href="/ujian" className="text-sm text-blue-600 hover:underline">
        ← Kembali ke Ujian
      </Link>

      <p className="text-xs text-slate-500 mt-4">{data.ujian.tema.kodeModulCplf}</p>
      <h1 className="text-xl font-semibold">{data.ujian.judul}</h1>

      {pending ? (
        <div className="mt-8 text-center">
          <div className="inline-block w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-slate-600">Jawaban sedang dinilai...</p>
          <p className="text-xs text-slate-400 mt-2">Halaman akan update otomatis</p>
        </div>
      ) : (
        <>
          <div className="mt-6 bg-white border rounded-xl p-6 text-center">
            <p className="text-sm text-slate-500">Nilai Akhir</p>
            <p className="text-4xl font-bold text-slate-900 mt-1">
              {data.sesi.nilaiAkhir ?? '—'}
            </p>
            {data.ringkasan && (
              <p className="text-sm text-slate-600 mt-2">
                Benar {data.ringkasan.benar} dari {data.ringkasan.total} soal
              </p>
            )}
          </div>

          {data.detail.length > 0 && (
            <div className="mt-6 space-y-2">
              <h2 className="text-sm font-semibold text-slate-700">Rincian per soal</h2>
              {data.detail.map((d) => (
                <div
                  key={d.urutan}
                  className={`border rounded-lg p-3 text-sm ${
                    d.isBenar ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}
                >
                  <span className="font-medium mr-2">#{d.urutan}</span>
                  {d.isBenar ? '✓ Benar' : '✗ Salah'}
                  <p className="text-slate-600 mt-1 line-clamp-2">{d.pertanyaan}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
