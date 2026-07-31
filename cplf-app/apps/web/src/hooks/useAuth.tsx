'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AuthUserDto } from '@cplf/shared';
import api from '@/lib/api';

interface AuthContextValue {
  user: AuthUserDto | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<AuthUserDto>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearSession: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUserDto | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshUser = useCallback(async () => {
    try {
      const { data } = await api.get<AuthUserDto>('/auth/me');
      setUser(data);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    refreshUser().finally(() => setLoading(false));
  }, [refreshUser]);

  const login = async (username: string, password: string) => {
    const { data } = await api.post<AuthUserDto>('/auth/login', { username, password });
    setUser(data);
    if (data.mustChangePassword) {
      router.push('/ganti-password');
    } else {
      router.replace('/dashboard');
    }
    return data;
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // Cookie mungkin sudah invalid — tetap bersihkan state lokal
    }
    setUser(null);
    router.replace('/login');
  };

  const clearSession = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser, clearSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus di dalam AuthProvider');
  return ctx;
}
