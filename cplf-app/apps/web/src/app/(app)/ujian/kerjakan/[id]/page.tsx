'use client';

import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface Pilihan {
  id: string;
  teks: string;
}

interface SoalItem {
  sesiSoalId: string;
  urutanTampil: number;
  tipe: string;
  pertanyaan: string;
  pilihan: Pilihan[];
}

interface UjianSoalResponse {
  ujian: { id: string; judul: string; durasiMenit: number; waktuSelesai: string };
  sesi: { id: string; status: string; waktuMulai: string | null };
  soal: SoalItem[];
}

type JawabanMap = Record<string, { pilihanJawabanId?: string; jawabanTeks?: string }>;

export default function KerjakanUjianPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [jawaban, setJawaban] = useState<JawabanMap>({});
  const [sisaDetik, setSisaDetik] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['ujian-soal', id],
    enabled: !!id,
    queryFn: async () => {
      const { data: res } = await api.get<UjianSoalResponse>(`/ujian/${id}/soal`);
      return res;
    },
  });

  useEffect(() => {
    if (!data?.sesi.waktuMulai) return;
    const deadline =
      new Date(data.sesi.waktuMulai).getTime() + data.ujian.durasiMenit * 60 * 1000;
    const endWindow = new Date(data.ujian.waktuSelesai).getTime();
    const effectiveEnd = Math.min(deadline, endWindow);

    const tick = () => {
      const left = Math.max(0, Math.floor((effectiveEnd - Date.now()) / 1000));
      setSisaDetik(left);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [data]);

  const submitMut = useMutation({
    mutationFn: () =>
      api.post(`/ujian/${id}/submit`, {
        jawaban: Object.entries(jawaban).map(([sesiSoalId, j]) => ({
          sesiSoalId,
          ...j,
        })),
      }),
    onSuccess: () => router.push('/ujian'),
  });

  const handleSubmit = useCallback(() => {
    submitMut.mutate();
  }, [submitMut]);

  useEffect(() => {
    if (sisaDetik === 0 && data && !submitMut.isPending && !submitMut.isSuccess) {
      handleSubmit();
    }
  }, [sisaDetik, data, submitMut.isPending, submitMut.isSuccess, handleSubmit]);

  if (isLoading) return <div className="p-6">Memuat ujian...</div>;
  if (error || !data) {
    return <div className="p-6 text-red-600">Ujian tidak tersedia.</div>;
  }

  const soal = data.soal;
  const item = soal[current];
  const formatTimer = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const setPilihan = (sesiSoalId: string, pilihanJawabanId: string) => {
    setJawaban((prev) => ({ ...prev, [sesiSoalId]: { pilihanJawabanId } }));
  };

  const setEsai = (sesiSoalId: string, jawabanTeks: string) => {
    setJawaban((prev) => ({ ...prev, [sesiSoalId]: { jawabanTeks } }));
  };

  const terjawab = Object.keys(jawaban).length;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-lg font-semibold">{data.ujian.judul}</h1>
          <p className="text-xs text-slate-500">
            Soal {current + 1} / {soal.length} · Terjawab {terjawab}/{soal.length}
          </p>
        </div>
        {sisaDetik !== null && (
          <div
            className={`text-lg font-mono font-bold ${
              sisaDetik < 300 ? 'text-red-600' : 'text-slate-800'
            }`}
          >
            {formatTimer(sisaDetik)}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {soal.map((s, i) => (
          <button
            key={s.sesiSoalId}
            type="button"
            onClick={() => setCurrent(i)}
            className={`w-8 h-8 text-xs rounded border ${
              i === current
                ? 'bg-blue-600 text-white border-blue-600'
                : jawaban[s.sesiSoalId]
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-white text-slate-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {item && (
        <div className="bg-white border rounded-xl p-5 mb-4">
          <p className="text-sm font-medium text-slate-800 mb-4 whitespace-pre-wrap">
            {item.pertanyaan}
          </p>

          {item.tipe === 'ESAI_SINGKAT' ? (
            <textarea
              className="w-full border rounded-lg px-3 py-2 text-sm min-h-25"
              placeholder="Tulis jawaban..."
              value={jawaban[item.sesiSoalId]?.jawabanTeks ?? ''}
              onChange={(e) => setEsai(item.sesiSoalId, e.target.value)}
            />
          ) : (
            <div className="space-y-2">
              {item.pilihan.map((p, i) => (
                <label
                  key={p.id}
                  className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer ${
                    jawaban[item.sesiSoalId]?.pilihanJawabanId === p.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={item.sesiSoalId}
                    checked={jawaban[item.sesiSoalId]?.pilihanJawabanId === p.id}
                    onChange={() => setPilihan(item.sesiSoalId, p.id)}
                    className="mt-1"
                  />
                  <span className="text-sm">
                    <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                    {p.teks}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
          className="text-sm border px-4 py-2 rounded-lg disabled:opacity-40"
        >
          ← Sebelumnya
        </button>
        {current < soal.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrent((c) => c + 1)}
            className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg"
          >
            Selanjutnya →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Submit Ujian
          </button>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h2 className="font-semibold mb-2">Submit ujian?</h2>
            <p className="text-sm text-slate-600 mb-4">
              Terjawab {terjawab} dari {soal.length} soal.
              {terjawab < soal.length && ' Soal kosong akan dianggap tidak dijawab.'}
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowConfirm(false)}
                className="text-sm border px-4 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitMut.isPending}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                {submitMut.isPending ? 'Mengirim...' : 'Ya, Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
