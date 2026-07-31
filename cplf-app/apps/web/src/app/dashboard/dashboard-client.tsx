'use client';

import { useAuth } from '@/hooks/useAuth';

export default function DashboardClient() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">Dashboard CPLF</h1>
          <p className="text-sm text-slate-500">Selamat datang, {user?.nama}</p>
        </div>
        <button
          onClick={() => logout()}
          className="text-sm text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5"
        >
          Logout
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-medium text-slate-800 mb-3">Info akun</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="text-slate-500">Username</dt>
            <dd>{user?.username}</dd>
            <dt className="text-slate-500">Role</dt>
            <dd>{user?.roles.join(', ')}</dd>
            <dt className="text-slate-500">Permissions</dt>
            <dd className="col-span-1 break-all">{user?.permissions.slice(0, 5).join(', ')}…</dd>
          </dl>
        </div>
      </main>
    </div>
  );
}
