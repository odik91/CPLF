'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

interface SemesterRingkasan {
  tingkat: string;
  semester: number;
  jumlah: number;
}

interface TemaRow {
  id: string;
  kodeModulCplf: string;
  judul: string;
  urutan: number;
  unitSilabus?: string | null;
  capabilityCodes: string[];
  aspekFormatifFokus: string[];
  isProjectPertemuan: boolean;
}

const SEMESTER_LABEL: Record<string, string> = {
  'X-1': 'Kelas X · Semester 1',
  'X-2': 'Kelas X · Semester 2',
  'XI-3': 'Kelas XI · Semester 3',
  'XI-4': 'Kelas XI · Semester 4',
  'XII-5': 'Kelas XII · Semester 5',
  'XII-6': 'Kelas XII · Semester 6',
};

export default function TemaCplfPage() {
  const [selected, setSelected] = useState<{ tingkat: string; semester: number } | null>(null);

  const { data: ringkasan = [] } = useQuery({
    queryKey: ['tema-ringkasan'],
    queryFn: async () => {
      const { data } = await api.get<SemesterRingkasan[]>('/tema/ringkasan/semester');
      return data;
    },
  });

  const { data: temas = [], isLoading } = useQuery({
    queryKey: ['tema', selected?.tingkat, selected?.semester],
    enabled: !!selected,
    queryFn: async () => {
      const { data } = await api.get<TemaRow[]>('/tema', {
        params: { tingkat: selected!.tingkat, semester: selected!.semester },
      });
      return data;
    },
  });

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Kurikulum CPLF — 108 Pertemuan</h1>
      <p className="text-sm text-slate-500 mb-6">
        Navigasi per semester · metadata capability & aspek formatif dari modul CPLF
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        {ringkasan.map((s: SemesterRingkasan) => {
          const key = `${s.tingkat}-${s.semester}`;
          const active = selected?.tingkat === s.tingkat && selected?.semester === s.semester;
          return (
            <button
              key={key}
              onClick={() => setSelected({ tingkat: s.tingkat, semester: s.semester })}
              className={`text-left p-4 rounded-xl border transition-colors hover:cursor-pointer ${
                active ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <p className="font-medium text-slate-900">{SEMESTER_LABEL[key] ?? key}</p>
              <p className="text-sm text-slate-500 mt-1">{s.jumlah} pertemuan</p>
            </button>
          );
        })}
        {ringkasan.length === 0 && (
          <p className="col-span-full text-sm text-slate-500">
            Belum ada tema. Jalankan <code className="bg-slate-100 px-1 rounded">npm run db:generate-tema && npm run db:seed:tema</code>
          </p>
        )}
      </div>

      {selected && (
        <>
          <h2 className="font-medium text-slate-800 mb-3">
            {SEMESTER_LABEL[`${selected.tingkat}-${selected.semester}`]} — daftar pertemuan
          </h2>
          <div className="bg-white border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-left p-3 w-16">P</th>
                  <th className="text-left p-3">Kode</th>
                  <th className="text-left p-3">Judul</th>
                  <th className="text-left p-3">Unit</th>
                  <th className="text-left p-3">Capability</th>
                  <th className="text-left p-3">Aspek</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr><td colSpan={6} className="p-4 text-slate-500">Memuat...</td></tr>
                ) : temas.map((t: TemaRow) => (
                  <tr key={t.id} className="border-t hover:bg-slate-50">
                    <td className="p-3 font-mono text-slate-500">{String(t.urutan).padStart(2, '0')}</td>
                    <td className="p-3 font-mono text-xs">{t.kodeModulCplf}</td>
                    <td className="p-3">
                      {t.judul}
                      {t.isProjectPertemuan && (
                        <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Project</span>
                      )}
                    </td>
                    <td className="p-3 text-slate-500">{t.unitSilabus ?? '—'}</td>
                    <td className="p-3 text-xs">{t.capabilityCodes.join(', ') || '—'}</td>
                    <td className="p-3 text-xs">{t.aspekFormatifFokus.join(', ') || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
