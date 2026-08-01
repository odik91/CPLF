'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface StatistikResponse {
  totalPeserta: number;
  sudahSelesai: number;
  menungguProses: number;
  belumSubmit: number;
  rataRata: number;
  nilaiTertinggi: number | null;
  nilaiTerendah: number | null;
  distribusi: { label: string; count: number }[];
  perSiswa: {
    siswaId: string;
    nama: string;
    username: string;
    status: string;
    nilaiAkhir: number | null;
  }[];
}

export default function StatistikUjianPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['statistik-ujian', id],
    enabled: !!id,
    queryFn: async () => {
      const { data: res } = await api.get<StatistikResponse>(`/statistik/ujian/${id}`);
      return res;
    },
  });

  if (isLoading) return <div className="p-6">Memuat statistik...</div>;
  if (error || !data) {
    return (
      <div className="p-6">
        <p className="text-red-600">Statistik tidak tersedia.</p>
        <Link href="/ujian" className="text-sm text-blue-600 hover:underline">
          ← Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl">
      <Link href="/ujian" className="text-sm text-blue-600 hover:underline">
        ← Kembali
      </Link>
      <h1 className="text-xl font-semibold mt-2 mb-6">Statistik Ujian</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Peserta" value={data.totalPeserta} />
        <StatCard label="Selesai" value={data.sudahSelesai} />
        <StatCard label="Rata-rata" value={data.rataRata} />
        <StatCard
          label="Tertinggi / Terendah"
          value={`${data.nilaiTertinggi ?? '—'} / ${data.nilaiTerendah ?? '—'}`}
        />
      </div>

      <div className="bg-white border rounded-xl p-4 mb-6">
        <h2 className="text-sm font-semibold mb-3">Distribusi Nilai</h2>
        <div className="space-y-2">
          {data.distribusi.map((d) => (
            <div key={d.label} className="flex items-center gap-3 text-sm">
              <span className="w-16 text-slate-600">{d.label}</span>
              <div className="flex-1 bg-slate-100 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{
                    width: `${data.sudahSelesai ? (d.count / data.sudahSelesai) * 100 : 0}%`,
                  }}
                />
              </div>
              <span className="w-8 text-right">{d.count}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Menunggu penilaian: {data.menungguProses} · Belum submit: {data.belumSubmit}
        </p>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Siswa</th>
              <th className="text-left p-3">Status</th>
              <th className="text-right p-3">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {data.perSiswa.map((s) => (
              <tr key={s.siswaId} className="border-t">
                <td className="p-3">{s.nama}</td>
                <td className="p-3 text-xs text-slate-500">{s.status}</td>
                <td className="p-3 text-right font-medium">
                  {s.nilaiAkhir != null ? s.nilaiAkhir : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
