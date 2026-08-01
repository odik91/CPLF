'use client';

import { FormEvent, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface MapelRow {
  id: string;
  nama: string;
  kode: string;
}

export default function AdminMapelPage() {
  const qc = useQueryClient();
  const [form, setForm] = useState({ nama: '', kode: '' });
  const [showForm, setShowForm] = useState(false);

  const { data: mapel = [], isLoading } = useQuery({
    queryKey: ['mapel'],
    queryFn: async () => {
      const { data } = await api.get<MapelRow[]>('/mapel');
      return data;
    },
  });

  const createMut = useMutation({
    mutationFn: () => api.post('/mapel', form),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['mapel'] });
      setShowForm(false);
      setForm({ nama: '', kode: '' });
    },
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Kelola Mapel</h1>
          <p className="text-sm text-slate-500">Mata pelajaran CPLF</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
          {showForm ? 'Batal' : '+ Tambah Mapel'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={(e: FormEvent) => { e.preventDefault(); createMut.mutate(); }}
          className="bg-white border rounded-xl p-4 mb-6 grid grid-cols-2 gap-3"
        >
          <input placeholder="Nama mapel" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <input placeholder="Kode (MULTIMEDIA)" value={form.kode} onChange={(e) => setForm({ ...form, kode: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded-lg text-sm">Simpan</button>
        </form>
      )}

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Kode</th>
              <th className="text-left p-3">Nama</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={2} className="p-4">Memuat...</td></tr>
            ) : mapel.map((m: MapelRow) => (
              <tr key={m.id} className="border-t">
                <td className="p-3 font-mono">{m.kode}</td>
                <td className="p-3">{m.nama}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
