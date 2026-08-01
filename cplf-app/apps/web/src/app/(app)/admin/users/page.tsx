'use client';

import { FormEvent, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

interface UserRow {
  id: string;
  username: string;
  nama: string;
  status: string;
  roles: { role: { kode: string } }[];
  profilSiswa?: { nis: string; kelas?: { nama: string } | null } | null;
}

export default function AdminUsersPage() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
    nama: '',
    roleKode: 'MURID',
    nis: '',
  });

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await api.get<UserRow[]>('/users');
      return data;
    },
  });

  const createMut = useMutation({
    mutationFn: (payload: typeof form) => api.post('/users', payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] });
      setShowForm(false);
      setForm({ username: '', password: '', nama: '', roleKode: 'MURID', nis: '' });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createMut.mutate(form);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Kelola User</h1>
          <p className="text-sm text-slate-500">Guru, murid, dan admin</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
        >
          {showForm ? 'Batal' : '+ Tambah User'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-4 mb-6 grid grid-cols-2 gap-3">
          <input placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <input placeholder="Nama lengkap" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" required />
          <select value={form.roleKode} onChange={(e) => setForm({ ...form, roleKode: e.target.value })} className="border rounded-lg px-3 py-2 text-sm">
            <option value="MURID">Murid</option>
            <option value="GURU">Guru</option>
            <option value="ADMIN">Admin</option>
          </select>
          {form.roleKode === 'MURID' && (
            <input placeholder="NIS" value={form.nis} onChange={(e) => setForm({ ...form, nis: e.target.value })} className="border rounded-lg px-3 py-2 text-sm col-span-2" required />
          )}
          <button type="submit" disabled={createMut.isPending} className="col-span-2 bg-blue-600 text-white py-2 rounded-lg text-sm">
            Simpan
          </button>
        </form>
      )}

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left p-3">Nama</th>
              <th className="text-left p-3">Username</th>
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan={4} className="p-4 text-slate-500">Memuat...</td></tr>
            ) : users.map((u: UserRow) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.nama}</td>
                <td className="p-3">{u.username}</td>
                <td className="p-3">{u.roles.map((r: { role: { kode: string } }) => r.role.kode).join(', ')}</td>
                <td className="p-3">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
