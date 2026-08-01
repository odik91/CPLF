'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import api from '@/lib/api';

interface KelasOption {
  id: string;
  nama: string;
  tingkat: string;
}

interface TemaOption {
  id: string;
  kodeModulCplf: string;
  judul: string;
}

export default function BuatUjianForm() {
  const router = useRouter();
  const [judul, setJudul] = useState('');
  const [temaId, setTemaId] = useState('');
  const [kelasId, setKelasId] = useState('');
  const [jumlahSoal, setJumlahSoal] = useState(5);
  const [durasiMenit, setDurasiMenit] = useState(30);
  const [waktuMulai, setWaktuMulai] = useState('');
  const [waktuSelesai, setWaktuSelesai] = useState('');
  const [acakSoal, setAcakSoal] = useState(true);
  const [acakPilihan, setAcakPilihan] = useState(true);
  const [error, setError] = useState('');

  const { data: temas = [] } = useQuery({
    queryKey: ['tema-all'],
    queryFn: async () => {
      const { data } = await api.get<TemaOption[]>('/tema');
      return data;
    },
  });

  const { data: kelas = [] } = useQuery({
    queryKey: ['kelas-all'],
    queryFn: async () => {
      const { data } = await api.get<KelasOption[]>('/kelas');
      return data;
    },
  });

  const createMut = useMutation({
    mutationFn: () =>
      api.post('/ujian', {
        judul,
        temaId,
        kelasId,
        jumlahSoal,
        durasiMenit,
        waktuMulai: new Date(waktuMulai).toISOString(),
        waktuSelesai: new Date(waktuSelesai).toISOString(),
        acakSoal,
        acakPilihan,
        wajibVerifikasiWajah: false,
      }),
    onSuccess: () => router.push('/ujian'),
    onError: (err: unknown) => {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message;
      setError(typeof msg === 'string' ? msg : 'Gagal membuat ujian');
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    createMut.mutate();
  };

  return (
    <div className="p-6 max-w-lg">
      <Link href="/ujian" className="text-sm text-blue-600 hover:underline">← Kembali</Link>
      <h1 className="text-xl font-semibold mt-2 mb-6">Buat Ujian Baru</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg px-3 py-2 text-sm"
          placeholder="Judul ujian"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />

        <select
          className="w-full border rounded-lg px-3 py-2 text-sm"
          value={temaId}
          onChange={(e) => setTemaId(e.target.value)}
          required
        >
          <option value="">— Pilih tema —</option>
          {temas.map((t) => (
            <option key={t.id} value={t.id}>{t.kodeModulCplf} — {t.judul}</option>
          ))}
        </select>

        <select
          className="w-full border rounded-lg px-3 py-2 text-sm"
          value={kelasId}
          onChange={(e) => setKelasId(e.target.value)}
          required
        >
          <option value="">— Pilih kelas —</option>
          {kelas.map((k) => (
            <option key={k.id} value={k.id}>{k.nama} ({k.tingkat})</option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-600">Jumlah soal</label>
            <input
              type="number"
              min={1}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={jumlahSoal}
              onChange={(e) => setJumlahSoal(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="text-xs text-slate-600">Durasi (menit)</label>
            <input
              type="number"
              min={1}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={durasiMenit}
              onChange={(e) => setDurasiMenit(Number(e.target.value))}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-600">Waktu mulai</label>
          <input
            type="datetime-local"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={waktuMulai}
            onChange={(e) => setWaktuMulai(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-xs text-slate-600">Waktu selesai</label>
          <input
            type="datetime-local"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={waktuSelesai}
            onChange={(e) => setWaktuSelesai(e.target.value)}
            required
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={acakSoal} onChange={(e) => setAcakSoal(e.target.checked)} />
          Acak urutan soal per siswa
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={acakPilihan} onChange={(e) => setAcakPilihan(e.target.checked)} />
          Acak urutan pilihan jawaban
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={createMut.isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm disabled:opacity-50"
        >
          {createMut.isPending ? 'Menyimpan...' : 'Simpan draft'}
        </button>
      </form>
    </div>
  );
}
