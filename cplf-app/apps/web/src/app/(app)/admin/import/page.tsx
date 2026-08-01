'use client';

import { useRef, useState } from 'react';
import Papa from 'papaparse';
import { useMutation } from '@tanstack/react-query';
import api from '@/lib/api';

type ImportType = 'murid' | 'guru';

interface ImportResult {
  imported: number;
  skipped: number;
  errors: { row: number; identifier: string; reason: string }[];
}

export default function AdminImportPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ImportType>('murid');
  const [preview, setPreview] = useState<Record<string, string>[]>([]);
  const [parseError, setParseError] = useState('');
  const [tahunAjaran, setTahunAjaran] = useState('2025/2026');
  const [autoCreateKelas, setAutoCreateKelas] = useState(false);
  const [guruPasswordStrategy, setGuruPasswordStrategy] = useState<'NIP' | 'USERNAME' | 'CUSTOM'>('NIP');
  const [customPassword, setCustomPassword] = useState('');
  const [result, setResult] = useState<ImportResult | null>(null);

  const importMut = useMutation({
    mutationFn: async () => {
      if (type === 'murid') {
        const { data } = await api.post<ImportResult>('/users/import/murid', {
          rows: preview.map((r) => ({
            nis: r.nis ?? '',
            nama: r.nama ?? '',
            kelas: r.kelas ?? '',
            kontak_orang_tua: r.kontak_orang_tua,
            nama_orang_tua: r.nama_orang_tua,
          })),
          options: { tahunAjaran, autoCreateKelas },
        });
        return data;
      }
      const { data } = await api.post<ImportResult>('/users/import/guru', {
        rows: preview.map((r) => ({
          nip: r.nip,
          nama: r.nama ?? '',
          username: r.username,
          email: r.email,
          bidang: r.bidang,
        })),
        options: { passwordStrategy: guruPasswordStrategy, customPassword: customPassword || undefined },
      });
      return data;
    },
    onSuccess: (data) => {
      setResult(data);
      setPreview([]);
      if (fileRef.current) fileRef.current.value = '';
    },
  });

  const downloadTemplate = async () => {
    const path = type === 'murid' ? '/users/import/template/murid' : '/users/import/template/guru';
    const { data } = await api.get<string>(path, { responseType: 'text' });
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = type === 'murid' ? 'template-import-murid.csv' : 'template-import-guru.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFile = (file: File) => {
    setParseError('');
    setResult(null);
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim().toLowerCase(),
      complete: (res) => {
        if (res.errors.length) {
          setParseError(res.errors[0]?.message ?? 'Gagal parse CSV');
          setPreview([]);
          return;
        }
        setPreview(res.data);
      },
    });
  };

  const requiredCols =
    type === 'murid'
      ? ['nis', 'nama', 'kelas']
      : ['nama'];

  const previewCols =
    type === 'murid'
      ? ['nis', 'nama', 'kelas', 'kontak_orang_tua']
      : ['nip', 'nama', 'username', 'email', 'bidang'];

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Import Bulk User</h1>
      <p className="text-sm text-slate-500 mb-6">
        Murid: password default = <strong>NIS</strong>. Guru: password default ={' '}
        <strong>NIP</strong> (jika ada) atau sesuai opsi.
      </p>

      <div className="flex gap-2 mb-4">
        {(['murid', 'guru'] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setType(t); setPreview([]); setResult(null); }}
            className={`px-4 py-2 rounded-lg text-sm capitalize ${
              type === t ? 'bg-blue-600 text-white' : 'bg-white border text-slate-600'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white border rounded-xl p-4 mb-4 space-y-4">
        <div className="flex flex-wrap gap-3">
          <button onClick={downloadTemplate} className="text-sm border rounded-lg px-3 py-2 hover:bg-slate-50">
            Download template CSV
          </button>
          <label className="text-sm border rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-50">
            Pilih file CSV
            <input
              ref={fileRef}
              type="file"
              accept=".csv,text/csv"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
          </label>
        </div>

        {type === 'murid' && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-500">Tahun ajaran</label>
              <input
                value={tahunAjaran}
                onChange={(e) => setTahunAjaran(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm mt-1"
              />
            </div>
            <label className="flex items-end gap-2 text-sm pb-2">
              <input
                type="checkbox"
                checked={autoCreateKelas}
                onChange={(e) => setAutoCreateKelas(e.target.checked)}
              />
              Auto-create kelas jika belum ada
            </label>
          </div>
        )}

        {type === 'guru' && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-500">Password default</label>
              <select
                value={guruPasswordStrategy}
                onChange={(e) => setGuruPasswordStrategy(e.target.value as typeof guruPasswordStrategy)}
                className="w-full border rounded-lg px-3 py-2 text-sm mt-1"
              >
                <option value="NIP">NIP (jika ada, wajib untuk baris tanpa username)</option>
                <option value="USERNAME">Username</option>
                <option value="CUSTOM">Password sama untuk semua</option>
              </select>
            </div>
            {guruPasswordStrategy === 'CUSTOM' && (
              <div>
                <label className="text-xs text-slate-500">Password custom</label>
                <input
                  type="password"
                  value={customPassword}
                  onChange={(e) => setCustomPassword(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm mt-1"
                  minLength={8}
                />
              </div>
            )}
          </div>
        )}

        {parseError && <p className="text-sm text-red-600">{parseError}</p>}
      </div>

      {preview.length > 0 && (
        <>
          <p className="text-sm text-slate-600 mb-2">
            Preview {preview.length} baris — kolom wajib: {requiredCols.join(', ')}
          </p>
          <div className="bg-white border rounded-xl overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {previewCols.map((c) => (
                    <th key={c} className="text-left p-2 capitalize">{c.replace(/_/g, ' ')}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.slice(0, 10).map((row, i) => (
                  <tr key={i} className="border-t">
                    {previewCols.map((c) => (
                      <td key={c} className="p-2">{row[c] ?? '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {preview.length > 10 && (
              <p className="p-2 text-xs text-slate-400">…dan {preview.length - 10} baris lainnya</p>
            )}
          </div>

          <button
            onClick={() => importMut.mutate()}
            disabled={importMut.isPending}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm disabled:opacity-60"
          >
            {importMut.isPending ? 'Mengimport...' : `Import ${preview.length} ${type}`}
          </button>
        </>
      )}

      {result && (
        <div className="mt-6 bg-white border rounded-xl p-4">
          <h2 className="font-medium mb-2">Hasil import</h2>
          <p className="text-sm text-green-700">Berhasil: {result.imported}</p>
          <p className="text-sm text-amber-700">Dilewati: {result.skipped}</p>
          {result.errors.length > 0 && (
            <ul className="mt-2 text-sm text-red-600 space-y-1 max-h-40 overflow-y-auto">
              {result.errors.map((e, i) => (
                <li key={i}>Baris {e.row} ({e.identifier}): {e.reason}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
