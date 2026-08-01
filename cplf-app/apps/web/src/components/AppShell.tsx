'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const adminLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/tema', label: 'Kurikulum CPLF', perm: 'materi:read' },
  { href: '/materi', label: 'Materi', perm: 'materi:read' },
  { href: '/bank-soal', label: 'Bank Soal', perm: 'bank_soal:read' },
  { href: '/admin/users', label: 'User', perm: 'user:read' },
  { href: '/admin/import', label: 'Import CSV', perm: 'user:bulk_import' },
  { href: '/admin/kelas', label: 'Kelas', perm: 'kelas:read' },
  { href: '/admin/mapel', label: 'Mapel', perm: 'kelas:read' },
  { href: '/admin/penugasan', label: 'Penugasan Guru', perm: 'kelas:manage' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const links = adminLinks.filter(
    (l) => !l.perm || user?.permissions.includes(l.perm),
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-56 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <p className="font-semibold text-slate-900">CPLF LMS</p>
          <p className="text-xs text-slate-500 truncate">{user?.nama}</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-lg text-sm ${
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-slate-200">
          <button
            onClick={() => logout()}
            className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
