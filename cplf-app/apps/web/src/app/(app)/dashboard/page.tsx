'use client';

import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Dashboard</h1>
      <p className="text-sm text-slate-500 mb-6">Selamat datang, {user?.nama}</p>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-medium text-slate-800 mb-3">Info akun</h2>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <dt className="text-slate-500">Username</dt>
          <dd>{user?.username}</dd>
          <dt className="text-slate-500">Role</dt>
          <dd>{user?.roles.join(', ')}</dd>
        </dl>
      </div>
    </div>
  );
}
