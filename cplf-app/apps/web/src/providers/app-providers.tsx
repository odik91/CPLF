'use client';

import { AuthProvider } from '@/hooks/useAuth';
import { QueryProvider } from '@/providers/query-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}
