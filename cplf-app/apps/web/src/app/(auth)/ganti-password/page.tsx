'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import api from '@/lib/api';

export default function GantiPasswordPage() {
  const { user, loading, clearSession } = useAuth();
  const router = useRouter();
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Memuat...
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await api.post('/auth/ganti-password', { passwordLama, passwordBaru });
      clearSession();
      router.replace('/login?msg=password-changed');
    } catch {
      setError('Gagal mengubah password. Periksa password lama.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-xl font-semibold text-slate-900 mb-1">Ganti Password</h1>
        <p className="text-slate-500 text-sm mb-6">
          Wajib ganti password sebelum melanjutkan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password lama</label>
            <input
              type="password"
              value={passwordLama}
              onChange={(e) => setPasswordLama(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password baru</label>
            <input
              type="password"
              minLength={8}
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white rounded-lg py-2.5 text-sm font-medium"
          >
            {submitting ? 'Menyimpan...' : 'Simpan & Login ulang'}
          </button>
        </form>
      </div>
    </div>
  );
}
