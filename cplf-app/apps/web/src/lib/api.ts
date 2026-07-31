import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

let refreshing: Promise<void> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (
      error.response?.status === 401 &&
      !original._retry &&
      !original.url?.includes('/auth/login') &&
      !original.url?.includes('/auth/refresh')
    ) {
      original._retry = true;
      if (!refreshing) {
        refreshing = api.post('/auth/refresh').then(() => {
          refreshing = null;
        }).catch(() => {
          refreshing = null;
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          throw error;
        });
      }
      await refreshing;
      return api(original);
    }
    return Promise.reject(error);
  },
);

export default api;
