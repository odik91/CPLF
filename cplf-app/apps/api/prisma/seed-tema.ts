import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { createPrismaClient } from '../prisma/client';

const { prisma, pool } = createPrismaClient();

interface TemaJson {
  kodeModulCplf: string;
  judul: string;
  slug: string;
  tingkat: string;
  semester: number;
  urutan: number;
  urutanGlobal: number;
  unitSilabus?: string;
  capabilityCodes: string[];
  aspekFormatifFokus: string[];
  expCodes: string[];
  prjCodes: string[];
  isProjectPertemuan: boolean;
  deskripsi?: string;
}

const CAPABILITY_DOMAIN: Record<string, string> = {
  B: 'Bernalar',
  C: 'Computational',
  T: 'Teknologi',
  A: 'Afeksi',
  E: 'Etika',
};

function inferTingkat(kode: string): string {
  if (kode.startsWith('CXII')) return 'XII';
  if (kode.startsWith('CXI')) return 'XI';
  return 'X';
}

function inferDomain(kode: string): string {
  const m = kode.match(/^[CX]+-([A-Z])\d/);
  return m ? (CAPABILITY_DOMAIN[m[1]] ?? 'Umum') : 'Umum';
}

async function main() {
  const jsonPath = path.join(__dirname, 'data/tema-cplf.json');
  if (!fs.existsSync(jsonPath)) {
    console.error('Jalankan dulu: npm run db:generate-tema');
    process.exit(1);
  }

  const temas: TemaJson[] = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const mapel = await prisma.mapel.findUniqueOrThrow({ where: { kode: 'MULTIMEDIA' } });

  const capabilitySet = new Set<string>();
  for (const t of temas) {
    t.capabilityCodes.forEach((c) => capabilitySet.add(c));
  }

  for (const kode of capabilitySet) {
    await prisma.capabilityDef.upsert({
      where: { kode },
      update: {},
      create: {
        kode,
        tingkat: inferTingkat(kode),
        domain: inferDomain(kode),
        deskripsi: kode,
        aspekTerkait: [],
      },
    });
  }

  let upserted = 0;
  for (const t of temas) {
    await prisma.tema.upsert({
      where: { kodeModulCplf: t.kodeModulCplf },
      update: {
        judul: t.judul,
        slug: t.slug,
        tingkat: t.tingkat,
        semester: t.semester,
        urutan: t.urutan,
        urutanGlobal: t.urutanGlobal,
        unitSilabus: t.unitSilabus,
        capabilityCodes: t.capabilityCodes,
        aspekFormatifFokus: t.aspekFormatifFokus,
        expCodes: t.expCodes,
        prjCodes: t.prjCodes,
        isProjectPertemuan: t.isProjectPertemuan,
        deskripsi: t.deskripsi,
      },
      create: {
        mapelId: mapel.id,
        ...t,
      },
    });
    upserted++;
  }

  console.log(`Seed tema OK — ${upserted} tema, ${capabilitySet.size} capability`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
