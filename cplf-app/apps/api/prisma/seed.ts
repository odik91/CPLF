import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const PERMISSIONS = [
  { kode: 'user:read', nama: 'Baca user' },
  { kode: 'user:create', nama: 'Buat user' },
  { kode: 'user:update', nama: 'Update user' },
  { kode: 'user:delete', nama: 'Hapus user' },
  { kode: 'role:manage', nama: 'Kelola role' },
  { kode: 'kelas:manage', nama: 'Kelola kelas' },
  { kode: 'kelas:read', nama: 'Baca kelas' },
  { kode: 'materi:read', nama: 'Baca materi' },
  { kode: 'materi:create', nama: 'Buat materi' },
  { kode: 'dashboard:admin', nama: 'Dashboard admin' },
  { kode: 'dashboard:guru', nama: 'Dashboard guru' },
  { kode: 'profil:update_diri', nama: 'Update profil sendiri' },
];

const ROLE_PERMISSIONS: Record<string, string[]> = {
  SUPER_ADMIN: PERMISSIONS.map((p) => p.kode),
  ADMIN: [
    'user:read',
    'user:create',
    'user:update',
    'kelas:manage',
    'kelas:read',
    'materi:read',
    'dashboard:admin',
    'profil:update_diri',
  ],
  GURU: ['kelas:read', 'materi:read', 'materi:create', 'dashboard:guru', 'profil:update_diri'],
  WALI_KELAS: ['kelas:read', 'profil:update_diri'],
  MURID: ['materi:read', 'profil:update_diri'],
};

async function main() {
  for (const perm of PERMISSIONS) {
    await prisma.permission.upsert({
      where: { kode: perm.kode },
      update: { nama: perm.nama },
      create: perm,
    });
  }

  const allPerms = await prisma.permission.findMany();
  const permMap = Object.fromEntries(allPerms.map((p) => [p.kode, p.id]));

  for (const [roleKode, roleNama] of [
    ['SUPER_ADMIN', 'Super Admin'],
    ['ADMIN', 'Admin'],
    ['GURU', 'Guru'],
    ['WALI_KELAS', 'Wali Kelas'],
    ['MURID', 'Murid'],
  ] as const) {
    const role = await prisma.role.upsert({
      where: { kode: roleKode },
      update: { nama: roleNama },
      create: { kode: roleKode, nama: roleNama },
    });

    await prisma.rolePermission.deleteMany({ where: { roleId: role.id } });
    for (const kode of ROLE_PERMISSIONS[roleKode] ?? []) {
      await prisma.rolePermission.create({
        data: { roleId: role.id, permissionId: permMap[kode] },
      });
    }
  }

  const adminRole = await prisma.role.findUniqueOrThrow({ where: { kode: 'SUPER_ADMIN' } });
  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {
      passwordHash,
      mustChangePassword: true,
      nama: 'Administrator CPLF',
    },
    create: {
      username: 'admin',
      passwordHash,
      nama: 'Administrator CPLF',
      mustChangePassword: true,
      roles: { create: { roleId: adminRole.id } },
    },
  });

  const mapel = await prisma.mapel.upsert({
    where: { kode: 'MULTIMEDIA' },
    update: {},
    create: { nama: 'Multimedia (Pemrograman Web)', kode: 'MULTIMEDIA' },
  });

  console.log('Seed OK — admin / admin123 (ganti saat login pertama)');
  console.log('Mapel:', mapel.kode);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
