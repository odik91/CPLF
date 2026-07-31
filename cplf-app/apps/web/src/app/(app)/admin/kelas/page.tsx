'use client';

import { FormEvent, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface KelasRow {
  id: string;
  nama: string;
  tingkat: string;
  tahunAjaran: string;
  _count: { siswa: number };
  waliKelas?: { nama: string } | null;
}

export default function AdminKelasPage() {
  const qc = useQueryClient();
  const [form, setForm] = useState({ nama: '', tingkat: 'X', tahunAjaran: '2025/2026' });
  const [showForm, setShowForm] = useState(false);

  const { data: kelas = [], isLoading } = useQuery({
    queryKey: ['kelas'],
    queryFn: async () => {
      const { data } = await api.get<KelasRow[]>('/kelas');
      return data;
    },
  });

  const createMut = useMutation({
    mutationFn: () => api.post('/kelas', form),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['kelas'] });
      setShowForm(false);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createMut.mutate();
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Kelola Kelas</h1>
          <p className="text-sm text-slate-500">Daftar kelas per tahun ajaran</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
          {showForm ? 'Batal' : '+ Tambah Kelas'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-4 mb-6 grid grid-cols-3 gap-3">
          <input placeholder="Nama kelas (X-A)" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <select value={form.tingkat} onChange={(e) => setForm({ ...form, tingkat: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          <input placeholder="Tahun ajaran" value={form.tahunAjaran} onChange={(e) => setForm({ ...form, tahunAjaran: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <button type="submit" className="col-span-3 bg-blue-600 text-white py-2 rounded-lg text-sm">Simpan</button>
        </form>
      )}

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Kelas</th>
              <th className="text-left p-3">Tingkat</th>
              <th className="text-left p-3">Tahun Ajaran</th>
              <th className="text-left p-3">Siswa</th>
              <th className="text-left p-3">Wali Kelas</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={5} className="p-4">Memuat...</td></tr>
            ) : kelas.map((k) => (
              <tr key={k.id} className="border-t">
                <td className="p-3 font-medium">{k.nama}</td>
                <td className="p-3">{k.tingkat}</td>
                <td className="p-3">{k.tahunAjaran}</td>
                <td className="p-3">{k._count.siswa}</td>
                <td className="p-3">{k.waliKelas?.nama ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
