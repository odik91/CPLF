import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

/** Endpoint yang tidak perlu auto-refresh saat 401 */
const SKIP_REFRESH_PATHS = ['/auth/login', '/auth/refresh', '/auth/me', '/auth/logout'];

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

let refreshing: Promise<void> | null = null;

function shouldSkipRefresh(url?: string) {
  return SKIP_REFRESH_PATHS.some((path) => url?.includes(path));
}

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (
      error.response?.status === 401 &&
      !original._retry &&
      !shouldSkipRefresh(original.url)
    ) {
      original._retry = true;
      if (!refreshing) {
        refreshing = api
          .post('/auth/refresh')
          .then(() => {
            refreshing = null;
          })
          .catch((refreshError) => {
            refreshing = null;
            throw refreshError;
          });
      }
      try {
        await refreshing;
        return api(original);
      } catch {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
