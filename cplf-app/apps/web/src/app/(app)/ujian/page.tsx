'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import UjianGuruHub from './guru-hub';
import UjianMuridHub from './murid-hub';

export default function UjianPage() {
  const { user } = useAuth();
  const isGuru = user?.permissions.includes('ujian:create');
  const isMurid = user?.permissions.includes('ujian:take');

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Ujian</h1>
      <p className="text-sm text-slate-500 mb-6">
        {isGuru ? 'Kelola ujian refleksi per kelas' : 'Daftar ujian aktif untuk dikerjakan'}
      </p>

      {isGuru && (
        <div className="mb-6">
          <Link
            href="/ujian/buat"
            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
          >
            + Buat ujian baru
          </Link>
        </div>
      )}

      {isGuru && <UjianGuruHub />}
      {isMurid && !isGuru && <UjianMuridHub />}
      {!isGuru && !isMurid && (
        <p className="text-slate-500 text-sm">Anda tidak memiliki akses ujian.</p>
      )}
    </div>
  );
}
