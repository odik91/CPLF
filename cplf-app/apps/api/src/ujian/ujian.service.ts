import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, SesiStatus, UjianStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUserPayload } from '../common/decorators/auth.decorators';
import { CreateUjianDto, SubmitUjianDto, UpdateUjianDto } from './ujian.dto';
import { pickRandom, shuffle } from './ujian.utils';
import { ScoringProducer } from '../scoring/scoring.producer';

@Injectable()
export class UjianService {
  constructor(
    private prisma: PrismaService,
    private scoringProducer: ScoringProducer,
  ) {}

  private isAdmin(user: AuthUserPayload) {
    return user.roles.some((r) => ['SUPER_ADMIN', 'ADMIN'].includes(r));
  }

  private isMurid(user: AuthUserPayload) {
    return user.roles.includes('MURID');
  }

  private async assertGuruKelas(userId: string, kelasId: string, mapelId: string) {
    const count = await this.prisma.guruMapelKelas.count({
      where: { guruId: userId, kelasId, mapelId },
    });
    if (count === 0) {
      throw new ForbiddenException('Anda tidak mengampu kelas/mapel ini');
    }
  }

  private resolveUjianStatus(ujian: {
    status: UjianStatus;
    waktuMulai: Date;
    waktuSelesai: Date;
  }): UjianStatus {
    const now = new Date();
    if (ujian.status === UjianStatus.CLOSED) return UjianStatus.CLOSED;
    if (ujian.status === UjianStatus.DRAFT) return UjianStatus.DRAFT;
    if (now > ujian.waktuSelesai) return UjianStatus.CLOSED;
    if (now >= ujian.waktuMulai) return UjianStatus.ONGOING;
    return UjianStatus.PUBLISHED;
  }

  async listForGuru(user: AuthUserPayload, filters?: { kelasId?: string; status?: UjianStatus }) {
    const where: Prisma.UjianWhereInput = {};

    if (filters?.kelasId) where.kelasId = filters.kelasId;
    if (filters?.status) where.status = filters.status;

    if (!this.isAdmin(user)) {
      const penugasan = await this.prisma.guruMapelKelas.findMany({
        where: { guruId: user.sub },
        select: { kelasId: true, mapelId: true },
      });
      if (penugasan.length === 0) return [];
      where.OR = penugasan.map((p) => ({
        kelasId: p.kelasId,
        tema: { mapelId: p.mapelId },
      }));
    }

    return this.prisma.ujian.findMany({
      where,
      include: {
        tema: { select: { kodeModulCplf: true, judul: true } },
        kelas: { select: { nama: true, tingkat: true } },
        _count: { select: { sesi: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUnique({
      where: { id },
      include: {
        tema: { include: { mapel: true } },
        kelas: true,
        _count: { select: { sesi: true } },
      },
    });
    if (!ujian) throw new NotFoundException('Ujian tidak ditemukan');

    if (!this.isAdmin(user) && !this.isMurid(user)) {
      await this.assertGuruKelas(user.sub, ujian.kelasId, ujian.tema.mapelId);
    }

    return ujian;
  }

  async create(dto: CreateUjianDto, user: AuthUserPayload) {
    const tema = await this.prisma.tema.findUniqueOrThrow({ where: { id: dto.temaId } });
    const kelas = await this.prisma.kelas.findUniqueOrThrow({ where: { id: dto.kelasId } });

    if (!this.isAdmin(user)) {
      await this.assertGuruKelas(user.sub, dto.kelasId, tema.mapelId);
    }

    if (new Date(dto.waktuSelesai) <= new Date(dto.waktuMulai)) {
      throw new BadRequestException('Waktu selesai harus setelah waktu mulai');
    }

    return this.prisma.ujian.create({
      data: {
        judul: dto.judul,
        temaId: dto.temaId,
        kelasId: dto.kelasId,
        jumlahSoal: dto.jumlahSoal,
        durasiMenit: dto.durasiMenit,
        waktuMulai: new Date(dto.waktuMulai),
        waktuSelesai: new Date(dto.waktuSelesai),
        acakSoal: dto.acakSoal ?? true,
        acakPilihan: dto.acakPilihan ?? true,
        wajibVerifikasiWajah: dto.wajibVerifikasiWajah ?? false,
        createdById: user.sub,
      },
      include: {
        tema: { select: { kodeModulCplf: true, judul: true } },
        kelas: { select: { nama: true } },
      },
    });
  }

  async update(id: string, dto: UpdateUjianDto, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (ujian.status !== UjianStatus.DRAFT) {
      throw new BadRequestException('Hanya ujian draft yang bisa diedit');
    }

    if (!this.isAdmin(user)) {
      await this.assertGuruKelas(user.sub, ujian.kelasId, ujian.tema.mapelId);
    }

    const waktuMulai = dto.waktuMulai ? new Date(dto.waktuMulai) : ujian.waktuMulai;
    const waktuSelesai = dto.waktuSelesai ? new Date(dto.waktuSelesai) : ujian.waktuSelesai;
    if (waktuSelesai <= waktuMulai) {
      throw new BadRequestException('Waktu selesai harus setelah waktu mulai');
    }

    return this.prisma.ujian.update({
      where: { id },
      data: {
        judul: dto.judul,
        jumlahSoal: dto.jumlahSoal,
        durasiMenit: dto.durasiMenit,
        waktuMulai: dto.waktuMulai ? waktuMulai : undefined,
        waktuSelesai: dto.waktuSelesai ? waktuSelesai : undefined,
        acakSoal: dto.acakSoal,
        acakPilihan: dto.acakPilihan,
        wajibVerifikasiWajah: dto.wajibVerifikasiWajah,
      },
    });
  }

  async publish(id: string, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (ujian.status !== UjianStatus.DRAFT) {
      throw new BadRequestException('Ujian sudah dipublish');
    }

    if (!this.isAdmin(user)) {
      await this.assertGuruKelas(user.sub, ujian.kelasId, ujian.tema.mapelId);
    }

    const bankSoal = await this.prisma.soal.findMany({
      where: { temaId: ujian.temaId, isActive: true },
      include: { pilihan: { orderBy: { urutan: 'asc' } } },
    });

    if (bankSoal.length < ujian.jumlahSoal) {
      throw new BadRequestException(
        `Bank soal hanya ${bankSoal.length} soal, butuh minimal ${ujian.jumlahSoal}`,
      );
    }

    const siswaList = await this.prisma.profilSiswa.findMany({
      where: { kelasId: ujian.kelasId },
      select: { userId: true },
    });

    if (siswaList.length === 0) {
      throw new BadRequestException('Tidak ada siswa di kelas ini');
    }

    await this.prisma.$transaction(async (tx) => {
      for (const siswa of siswaList) {
        const soalTerpilih = ujian.acakSoal
          ? pickRandom(bankSoal, ujian.jumlahSoal)
          : bankSoal.slice(0, ujian.jumlahSoal);
        const urutanSoal = ujian.acakSoal ? shuffle(soalTerpilih) : soalTerpilih;

        const sesi = await tx.ujianSesi.create({
          data: { ujianId: ujian.id, siswaId: siswa.userId },
        });

        for (let i = 0; i < urutanSoal.length; i++) {
          const soal = urutanSoal[i];
          let pilihanUrutanJson: string[] | null = null;
          if (ujian.acakPilihan && soal.pilihan.length > 0) {
            pilihanUrutanJson = shuffle(soal.pilihan.map((p) => p.id));
          }

          await tx.ujianSesiSoal.create({
            data: {
              sesiId: sesi.id,
              soalId: soal.id,
              urutanTampil: i + 1,
              pilihanUrutanJson: pilihanUrutanJson ?? undefined,
            },
          });
        }
      }

      const now = new Date();
      const status =
        now >= ujian.waktuMulai && now <= ujian.waktuSelesai
          ? UjianStatus.ONGOING
          : UjianStatus.PUBLISHED;

      await tx.ujian.update({
        where: { id },
        data: { status },
      });
    });

    return this.findById(id, user);
  }

  async close(id: string, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (!this.isAdmin(user)) {
      await this.assertGuruKelas(user.sub, ujian.kelasId, ujian.tema.mapelId);
    }

    return this.prisma.ujian.update({
      where: { id },
      data: { status: UjianStatus.CLOSED },
    });
  }

  async remove(id: string, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({
      where: { id },
      include: { tema: true },
    });

    if (ujian.status !== UjianStatus.DRAFT) {
      throw new BadRequestException('Hanya draft yang bisa dihapus');
    }

    if (!this.isAdmin(user)) {
      await this.assertGuruKelas(user.sub, ujian.kelasId, ujian.tema.mapelId);
    }

    return this.prisma.ujian.delete({ where: { id } });
  }

  async listAktifMurid(user: AuthUserPayload) {
    const profil = await this.prisma.profilSiswa.findUnique({
      where: { userId: user.sub },
    });
    if (!profil?.kelasId) return [];

    const now = new Date();
    const ujianList = await this.prisma.ujian.findMany({
      where: {
        kelasId: profil.kelasId,
        status: { in: [UjianStatus.PUBLISHED, UjianStatus.ONGOING] },
        waktuMulai: { lte: now },
        waktuSelesai: { gte: now },
      },
      include: {
        tema: { select: { kodeModulCplf: true, judul: true } },
        sesi: { where: { siswaId: user.sub } },
      },
      orderBy: { waktuMulai: 'asc' },
    });

    return ujianList.map((u) => ({
      id: u.id,
      judul: u.judul,
      durasiMenit: u.durasiMenit,
      waktuMulai: u.waktuMulai,
      waktuSelesai: u.waktuSelesai,
      tema: u.tema,
      sesi: u.sesi[0] ?? null,
    }));
  }

  private async getSesiMurid(ujianId: string, siswaId: string) {
    const sesi = await this.prisma.ujianSesi.findUnique({
      where: { ujianId_siswaId: { ujianId, siswaId } },
      include: { ujian: true },
    });
    if (!sesi) throw new NotFoundException('Sesi ujian tidak ditemukan');
    return sesi;
  }

  async mulai(ujianId: string, user: AuthUserPayload) {
    const ujian = await this.prisma.ujian.findUniqueOrThrow({ where: { id: ujianId } });
    const effective = this.resolveUjianStatus(ujian);
    if (effective === UjianStatus.CLOSED || effective === UjianStatus.DRAFT) {
      throw new BadRequestException('Ujian tidak tersedia');
    }

    const sesi = await this.getSesiMurid(ujianId, user.sub);

    if (sesi.status === SesiStatus.SELESAI || sesi.status === SesiStatus.MENUNGGU_PROSES) {
      throw new BadRequestException('Ujian sudah disubmit');
    }

    if (sesi.status === SesiStatus.BELUM_MULAI) {
      return this.prisma.ujianSesi.update({
        where: { id: sesi.id },
        data: { status: SesiStatus.SEDANG_BERLANGSUNG, waktuMulai: new Date() },
      });
    }

    return sesi;
  }

  async getSoalSesi(ujianId: string, user: AuthUserPayload) {
    const sesi = await this.getSesiMurid(ujianId, user.sub);
    const ujian = sesi.ujian;

    const sesiSoal = await this.prisma.ujianSesiSoal.findMany({
      where: { sesiId: sesi.id },
      include: {
        soal: { include: { pilihan: { orderBy: { urutan: 'asc' } } } },
        jawaban: true,
      },
      orderBy: { urutanTampil: 'asc' },
    });

    const soal = sesiSoal.map((ss) => {
      const pilihanIds = ss.pilihanUrutanJson as string[] | null;
      let pilihan = ss.soal.pilihan.map((p) => ({
        id: p.id,
        teks: p.teks,
        urutan: p.urutan,
      }));

      if (pilihanIds?.length) {
        const map = new Map(pilihan.map((p) => [p.id, p]));
        pilihan = pilihanIds.map((id, i) => {
          const p = map.get(id);
          return p ? { ...p, urutan: i } : null;
        }).filter(Boolean) as typeof pilihan;
      }

      return {
        sesiSoalId: ss.id,
        urutanTampil: ss.urutanTampil,
        tipe: ss.soal.tipe,
        pertanyaan: ss.soal.pertanyaan,
        pilihan,
        jawaban: ss.jawaban
          ? {
              pilihanJawabanId: ss.jawaban.pilihanJawabanId,
              jawabanTeks: ss.jawaban.jawabanTeks,
            }
          : null,
      };
    });

    return {
      ujian: {
        id: ujian.id,
        judul: ujian.judul,
        durasiMenit: ujian.durasiMenit,
        waktuMulai: ujian.waktuMulai,
        waktuSelesai: ujian.waktuSelesai,
      },
      sesi: {
        id: sesi.id,
        status: sesi.status,
        waktuMulai: sesi.waktuMulai,
      },
      soal,
    };
  }

  async submit(ujianId: string, dto: SubmitUjianDto, user: AuthUserPayload) {
    const sesi = await this.getSesiMurid(ujianId, user.sub);

    if (sesi.status !== SesiStatus.SEDANG_BERLANGSUNG) {
      throw new BadRequestException('Sesi tidak dalam status mengerjakan');
    }

    const sesiSoalIds = await this.prisma.ujianSesiSoal.findMany({
      where: { sesiId: sesi.id },
      select: { id: true },
    });
    const validIds = new Set(sesiSoalIds.map((s) => s.id));

    for (const item of dto.jawaban) {
      if (!validIds.has(item.sesiSoalId)) {
        throw new BadRequestException(`Soal sesi tidak valid: ${item.sesiSoalId}`);
      }
    }

    await this.prisma.$transaction(async (tx) => {
      for (const item of dto.jawaban) {
        await tx.jawabanSiswa.upsert({
          where: { sesiSoalId: item.sesiSoalId },
          create: {
            sesiSoalId: item.sesiSoalId,
            pilihanJawabanId: item.pilihanJawabanId,
            jawabanTeks: item.jawabanTeks,
            statusProses: 'PENDING',
          },
          update: {
            pilihanJawabanId: item.pilihanJawabanId,
            jawabanTeks: item.jawabanTeks,
            statusProses: 'PENDING',
          },
        });
      }

      await tx.ujianSesi.update({
        where: { id: sesi.id },
        data: {
          status: SesiStatus.MENUNGGU_PROSES,
          waktuSubmit: new Date(),
        },
      });
    });

    await this.scoringProducer.enqueueScoring(sesi.id);

    return {
      status: SesiStatus.MENUNGGU_PROSES,
      message: 'Jawaban diterima, sedang diproses',
    };
  }

  async getHasil(ujianId: string, user: AuthUserPayload) {
    const sesi = await this.prisma.ujianSesi.findUnique({
      where: { ujianId_siswaId: { ujianId, siswaId: user.sub } },
      include: {
        ujian: { include: { tema: { select: { kodeModulCplf: true, judul: true } } } },
        soalTerpilih: {
          include: {
            soal: { select: { pertanyaan: true, tipe: true } },
            jawaban: { select: { isBenar: true, skor: true, statusProses: true } },
          },
          orderBy: { urutanTampil: 'asc' },
        },
      },
    });

    if (!sesi) throw new NotFoundException('Sesi ujian tidak ditemukan');

    const selesai = sesi.status === SesiStatus.SELESAI;

    return {
      ujian: {
        id: sesi.ujian.id,
        judul: sesi.ujian.judul,
        tema: sesi.ujian.tema,
      },
      sesi: {
        id: sesi.id,
        status: sesi.status,
        nilaiAkhir: selesai ? sesi.nilaiAkhir : null,
        waktuSubmit: sesi.waktuSubmit,
      },
      ringkasan: selesai
        ? {
            benar: sesi.soalTerpilih.filter((s) => s.jawaban?.isBenar).length,
            total: sesi.soalTerpilih.length,
          }
        : null,
      detail: selesai
        ? sesi.soalTerpilih.map((s) => ({
            urutan: s.urutanTampil,
            pertanyaan: s.soal.pertanyaan,
            tipe: s.soal.tipe,
            isBenar: s.jawaban?.isBenar ?? false,
          }))
        : [],
    };
  }

  async listMuridUjian(user: AuthUserPayload) {
    const profil = await this.prisma.profilSiswa.findUnique({
      where: { userId: user.sub },
    });
    if (!profil?.kelasId) return [];

    return this.prisma.ujian.findMany({
      where: {
        kelasId: profil.kelasId,
        status: { not: UjianStatus.DRAFT },
        sesi: { some: { siswaId: user.sub } },
      },
      include: {
        tema: { select: { kodeModulCplf: true, judul: true } },
        sesi: { where: { siswaId: user.sub } },
      },
      orderBy: { waktuMulai: 'desc' },
      take: 30,
    }).then((list) =>
      list.map((u) => ({
        id: u.id,
        judul: u.judul,
        durasiMenit: u.durasiMenit,
        waktuMulai: u.waktuMulai,
        waktuSelesai: u.waktuSelesai,
        tema: u.tema,
        sesi: u.sesi[0] ?? null,
      })),
    );
  }
}
