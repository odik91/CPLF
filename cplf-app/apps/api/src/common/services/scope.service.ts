import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ScopeService {
  constructor(private prisma: PrismaService) {}

  async guruMengampuKelas(guruId: string, kelasId: string, mapelId?: string) {
    const count = await this.prisma.guruMapelKelas.count({
      where: {
        guruId,
        kelasId,
        ...(mapelId ? { mapelId } : {}),
      },
    });
    return count > 0;
  }

  async assertGuruScope(guruId: string, kelasId: string, mapelId?: string) {
    const ok = await this.guruMengampuKelas(guruId, kelasId, mapelId);
    if (!ok) {
      throw new Error('Akses di luar kelas/mapell yang diampu');
    }
  }
}
