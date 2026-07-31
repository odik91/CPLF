# 02. RBAC / IAM (Role-Based Access Control)

## 1. Tujuan

Mengatur siapa boleh melakukan apa di sistem, dengan model yang **role-based** namun cukup granular via **permission** agar mudah dikembangkan (mis. menambah role `WALI_KELAS`, `KEPALA_SEKOLAH` di masa depan) tanpa mengubah struktur inti.

## 2. Model Data IAM

```
User ──< UserRole >── Role ──< RolePermission >── Permission
  │
  └── (opsional) UserPermission (override permission langsung ke user, jarang dipakai)
```

- `User` : akun login (guru, murid, admin).
- `Role` : kumpulan permission (mis. `GURU`, `MURID`, `ADMIN`, `SUPER_ADMIN`).
- `Permission` : aksi granular berbentuk `resource:action` (mis. `bank_soal:create`, `ujian:grade`, `materi:publish`).
- `UserRole` : many-to-many User↔Role (user bisa multi-role, mis. guru yang juga wali kelas).
- `RolePermission` : many-to-many Role↔Permission.

Alasan pakai model Permission granular (bukan hardcode role string di setiap guard): lebih scalable, guru bisa punya sub-peran (mis. "guru piket" beda kewenangan) tanpa refactor besar.

## 3. Role Default (Seed Awal)

| Role | Deskripsi |
|------|-----------|
| `SUPER_ADMIN` | Akses penuh sistem, kelola role/permission, kelola sekolah |
| `ADMIN` | Operasional harian: kelola user, kelas, mapel, bulk import |
| `GURU` | Kelola materi & bank soal miliknya, buat ujian, lihat statistik siswa |
| `WALI_KELAS` | Guru dengan akses **read-only** nilai ujian & rekap murid di kelas wali (semua mapel) |
| `MURID` | Akses materi, mengerjakan ujian, kelola profil sendiri |

## 4. Contoh Permission Matrix

| Permission | SUPER_ADMIN | ADMIN | GURU | MURID |
|---|---|---|---|---|
| `user:create` (single) | ✅ | ✅ | ❌ | ❌ |
| `user:bulk_import` | ✅ | ✅ | ❌ | ❌ |
| `user:reset_password` | ✅ | ✅ | ❌ | ❌ |
| `role:manage` | ✅ | ❌ | ❌ | ❌ |
| `kelas:manage` | ✅ | ✅ | ❌ | ❌ |
| `materi:create` | ✅ | ✅ | ✅ (kelas ajarnya) | ❌ |
| `materi:read` | ✅ | ✅ | ✅ | ✅ (kelasnya) |
| `bank_soal:create` | ✅ | ✅ | ✅ (mapelnya) | ❌ |
| `bank_soal:read` | ✅ | ✅ | ✅ (miliknya) | ❌ (tidak bisa lihat langsung) |
| `ujian:create` (setup) | ✅ | ✅ | ✅ | ❌ |
| `ujian:take` (mengerjakan) | ❌ | ❌ | ❌ | ✅ |
| `ujian:grade`/lihat hasil detail | ✅ | ✅ | ✅ (kelasnya) | ✅ (miliknya sendiri) |
| `statistik:kelas` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `statistik:diri_sendiri` | ✅ | ✅ | ✅ | ✅ |
| `profil:update_diri` | ✅ | ✅ | ✅ | ✅ |
| `face_verification:enroll` | ✅ | ✅ | ✅ | ✅ (diri sendiri) |
| `penilaian:formatif:create` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `penilaian:formatif:read` | ✅ | ✅ | ✅ (kelasnya) | ✅ (milik sendiri) |
| `penilaian:formatif:update` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `project:read` | ✅ | ✅ | ✅ (kelasnya) | ✅ (assignment aktif) |
| `project:assign` | ✅ | ✅ | ✅ | ❌ |
| `project:grade` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `project:submit` | ❌ | ❌ | ❌ | ✅ |
| `project:peer_review` | ❌ | ❌ | ❌ | ✅ (XI+) |
| `progress_card:read` | ✅ | ✅ | ✅ (kelasnya) | ✅ (milik sendiri) |
| `progress_card:manage` | ✅ | ✅ | ✅ (kelasnya) | ❌ |
| `portofolio:read` | ✅ | ✅ | ✅ | ✅ (scoped visibilitas) |
| `portofolio:manage` | ✅ | ✅ | ❌ | ✅ (milik sendiri) |
| `dashboard:guru` | ✅ | ✅ | ✅ | ❌ |
| `dashboard:admin` | ✅ | ✅ | ❌ | ❌ |
| `wali_kelas:read_nilai` | ✅ | ✅ | ❌* | ❌ |
| `wali_kelas:read_rekap` | ✅ | ✅ | ❌* | ❌ |
| `audit_log:read` | ✅ | ✅ | ❌ | ❌ |

> Catatan: beberapa permission bersifat **scoped** (mis. guru hanya boleh CRUD bank soal mapel/kelas yang diampu). Scoping ini dicek di **service layer** menggunakan relasi `GuruMapelKelas`, bukan hanya guard permission generik.  
> \* `WALI_KELAS` (role tambahan): ✅ untuk `wali_kelas:*` jika user di-assign ke `Kelas.waliKelasId`.

### 4.1 Role `WALI_KELAS`

Guru bisa punya **multi-role**: `GURU` + `WALI_KELAS` simultaneously.

| Akses | WALI_KELAS | GURU mapel |
|-------|------------|------------|
| Nilai ujian murid di kelas wali (semua mapel) | ✅ read-only | ✅ mapel sendiri |
| Statistik aktivitas materi | ✅ read-only | ✅ mapel sendiri |
| Progress card murid | ✅ read-only | ✅ mapel sendiri |
| CRUD materi / bank soal / ujian | ❌ | ✅ mapel sendiri |
| Penilaian formatif | ❌ (kecuali juga GURU mapel) | ✅ |

**Scoping:** `Kelas.waliKelasId = userId` — guard `WaliKelasScopeGuard` validasi siswa ∈ kelas tersebut.

**UI:** Menu terpisah "Wali Kelas" → daftar murid → drill-down per mapel → nilai ujian & partisipasi materi.

Endpoint khusus: `GET /wali-kelas/kelas/:kelasId/nilai-ujian`, `GET /wali-kelas/siswa/:siswaId/rekap-semua-mapel`.

## 5. Implementasi di NestJS

### 5.1 Struktur Guard

```
JwtAuthGuard        → memastikan token valid & user aktif
RolesGuard          → cek role user termasuk salah satu @Roles(...)
PermissionsGuard    → cek permission granular via @RequirePermissions(...)
OwnershipGuard/Interceptor (custom) → cek scoping (mis. guru hanya akses data kelasnya)
```

### 5.2 Contoh Decorator & Guard

```ts
// decorators/permissions.decorator.ts
export const RequirePermissions = (...perms: string[]) =>
  SetMetadata('permissions', perms);

// guards/permissions.guard.ts
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.get<string[]>('permissions', ctx.getHandler());
    if (!required) return true;
    const { user } = ctx.switchToHttp().getRequest();
    return required.every((p) => user.permissions.includes(p));
  }
}
```

```ts
// contoh penggunaan di controller
@UseGuards(JwtAuthGuard, PermissionsGuard)
@RequirePermissions('bank_soal:create')
@Post('bank-soal')
create(@Body() dto: CreateSoalDto, @CurrentUser() user: AuthUser) {
  return this.bankSoalService.create(dto, user);
}
```

### 5.3 JWT Payload

```ts
interface JwtPayload {
  sub: string;        // userId
  roles: string[];    // ['GURU']
  permissions: string[]; // daftar permission hasil resolve dari role (cached saat login)
  scope?: {            // opsional, untuk scoping cepat tanpa query ulang
    kelasIds?: string[];
    mapelIds?: string[];
  };
  iat: number;
  exp: number;
}
```

> Permission di-resolve saat login dan disimpan dalam JWT (short-lived, mis. 15 menit) agar tidak query DB tiap request. Jika role/permission user berubah, perubahan berlaku efektif setelah token refresh berikutnya, atau BE bisa maintain **token blacklist/versioning** (`tokenVersion` di tabel User) untuk invalidasi paksa.

## 6. Alur Autentikasi

1. `POST /auth/login` (username/NIS/NIP + password) → BE cek kredensial → generate `access_token` (15 menit) & `refresh_token` (7 hari) → set sebagai httpOnly cookie.
2. FE memanggil endpoint dengan `credentials: 'include'`; tidak perlu simpan token manual di JS.
3. `POST /auth/refresh` dipanggil otomatis oleh interceptor FE saat dapat 401, menggunakan `refresh_token` cookie → BE terbitkan `access_token` baru.
4. `POST /auth/logout` → hapus cookie + (opsional) invalidasi refresh token di DB (tabel `RefreshToken` dengan status revoked).
5. Password murid default = **NIS** (di-hash bcrypt/argon2 saat bulk import), murid **wajib** ganti password saat login pertama (`mustChangePassword` flag).

## 7. Multi-Tenant (Opsional untuk Skala Multi-Sekolah)

Jika aplikasi digunakan lebih dari satu sekolah/madrasah, tambahkan entitas `Sekolah` (tenant) dan setiap `User`, `Kelas`, `Mapel` di-scope oleh `sekolahId`. Guard tambahan `TenantGuard` memastikan user hanya bisa mengakses data dalam tenant-nya. (Detail lebih lanjut dapat dibuat sebagai dokumen terpisah bila diperlukan, untuk MVP awal bisa diasumsikan single-tenant.)

## 8. Referensi Silang

- Entitas `User`, `Role`, `Permission` → [03_Skema_Database.md](./03_Skema_Database.md)
- Endpoint auth & IAM → [14_API_Contract_Overview.md](./14_API_Contract_Overview.md)
