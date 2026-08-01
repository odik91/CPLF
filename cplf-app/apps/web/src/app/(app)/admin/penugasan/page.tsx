'use client';

import { FormEvent, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface PenugasanRow {
  id: string;
  guru: { id: string; nama: string };
  mapel: { kode: string; nama: string };
  kelas: { nama: string; tingkat: string };
}

interface Option {
  id: string;
  nama: string;
  kode?: string;
}

export default function AdminPenugasanPage() {
  const qc = useQueryClient();
  const [form, setForm] = useState({ guruId: '', mapelId: '', kelasId: '' });
  const [showForm, setShowForm] = useState(false);

  const { data: penugasan = [], isLoading } = useQuery({
    queryKey: ['penugasan'],
    queryFn: async () => {
      const { data } = await api.get<PenugasanRow[]>('/penugasan-guru');
      return data;
    },
  });

  const { data: gurus = [] } = useQuery({
    queryKey: ['users', 'GURU'],
    queryFn: async () => {
      const { data } = await api.get<Option[]>('/users?role=GURU');
      return data;
    },
  });

  const { data: mapel = [] } = useQuery({
    queryKey: ['mapel'],
    queryFn: async () => {
      const { data } = await api.get<Option[]>('/mapel');
      return data;
    },
  });

  const { data: kelas = [] } = useQuery({
    queryKey: ['kelas'],
    queryFn: async () => {
      const { data } = await api.get<Option[]>('/kelas');
      return data;
    },
  });

  const createMut = useMutation({
    mutationFn: () => api.post('/penugasan-guru', form),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['penugasan'] });
      setShowForm(false);
    },
  });

  const deleteMut = useMutation({
    mutationFn: (id: string) => api.delete(`/penugasan-guru/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['penugasan'] }),
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Penugasan Guru</h1>
          <p className="text-sm text-slate-500">Guru ↔ Mapel ↔ Kelas</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
          {showForm ? 'Batal' : '+ Assign Guru'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={(e: FormEvent) => { e.preventDefault(); createMut.mutate(); }}
          className="bg-white border rounded-xl p-4 mb-6 grid grid-cols-3 gap-3"
        >
          <select value={form.guruId} onChange={(e) => setForm({ ...form, guruId: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required>
            <option value="">Pilih guru</option>
            {gurus.map((g: Option) => <option key={g.id} value={g.id}>{g.nama}</option>)}
          </select>
          <select value={form.mapelId} onChange={(e) => setForm({ ...form, mapelId: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required>
            <option value="">Pilih mapel</option>
            {mapel.map((m: Option) => <option key={m.id} value={m.id}>{m.kode ?? m.nama}</option>)}
          </select>
          <select value={form.kelasId} onChange={(e) => setForm({ ...form, kelasId: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required>
            <option value="">Pilih kelas</option>
            {kelas.map((k: Option) => <option key={k.id} value={k.id}>{k.nama}</option>)}
          </select>
          <button type="submit" className="col-span-3 bg-blue-600 text-white py-2 rounded-lg text-sm">Simpan</button>
        </form>
      )}

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Guru</th>
              <th className="text-left p-3">Mapel</th>
              <th className="text-left p-3">Kelas</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={4} className="p-4">Memuat...</td></tr>
            ) : penugasan.map((p: PenugasanRow) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.guru.nama}</td>
                <td className="p-3">{p.mapel.kode}</td>
                <td className="p-3">{p.kelas.tingkat} — {p.kelas.nama}</td>
                <td className="p-3 text-right">
                  <button onClick={() => deleteMut.mutate(p.id)} className="text-red-600 text-xs hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
