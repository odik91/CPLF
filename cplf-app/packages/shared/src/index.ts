export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  GURU: 'GURU',
  WALI_KELAS: 'WALI_KELAS',
  MURID: 'MURID',
} as const;

export type RoleCode = (typeof ROLES)[keyof typeof ROLES];

export interface ApiResponse<T> {
  data: T;
  message?: string;
  meta?: Record<string, unknown>;
}

export interface AuthUserDto {
  id: string;
  username: string;
  nama: string;
  email?: string | null;
  roles: string[];
  permissions: string[];
  mustChangePassword: boolean;
}
