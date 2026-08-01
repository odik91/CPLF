/**
 * Parse 06-modules → prisma/data/tema-cplf.json
 * Run: npm run db:generate-tema -w api
 */
import * as fs from 'fs';
import * as path from 'path';

export interface TemaCplfRecord {
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

const REPO_ROOT = path.resolve(__dirname, '../../../..');
const MODULES_ROOT = path.join(REPO_ROOT, '06-modules');
const RPP_ROOT = path.join(REPO_ROOT, '05-silabus', 'rpp-kbc');
const OUT_FILE = path.join(__dirname, '../prisma/data/tema-cplf.json');

const SEMESTER_DIRS: { tingkat: string; semester: number; rel: string }[] = [
  { tingkat: 'X', semester: 1, rel: 'kelas-x/semester-1' },
  { tingkat: 'X', semester: 2, rel: 'kelas-x/semester-2' },
  { tingkat: 'XI', semester: 3, rel: 'kelas-xi/semester-3' },
  { tingkat: 'XI', semester: 4, rel: 'kelas-xi/semester-4' },
  { tingkat: 'XII', semester: 5, rel: 'kelas-xii/semester-5' },
  { tingkat: 'XII', semester: 6, rel: 'kelas-xii/semester-6' },
];

const TINGKAT_NUM: Record<string, number> = { X: 1, XI: 2, XII: 3 };

function getField(content: string, field: string): string | undefined {
  const re = new RegExp(`\\|\\s*${field}\\s*\\|\\s*([^|\\n]+?)\\s*\\|`, 'i');
  return content.match(re)?.[1]?.trim();
}

function parseCodes(raw?: string): string[] {
  if (!raw || raw === '—' || raw === '-') return [];
  return raw
    .split(/[,·]/)
    .map((s) => s.replace(/\*\*/g, '').trim())
    .filter((s) => s && s !== '—' && !s.startsWith('('));
}

function parseAspekFromRpp(content: string): string[] {
  const line = content.match(/Aspek formatif[^\n]+/i)?.[0] ?? '';
  const codes = [...line.matchAll(/\*\*([A-Z]{2,4})\*\*/g)].map((m) => m[1]);
  return [...new Set(codes.filter((c) => ['REA', 'OBS', 'KOL', 'KOM', 'KRI', 'ETI'].includes(c)))];
}

function urutanGlobal(tingkat: string, semester: number, urutan: number): number {
  return (TINGKAT_NUM[tingkat] ?? 0) * 100 + semester * 20 + urutan;
}

function parseModuleFile(filePath: string, tingkat: string, semester: number): TemaCplfRecord | null {
  const content = fs.readFileSync(filePath, 'utf-8');
  const basename = path.basename(filePath, '.md');
  const fileMatch = basename.match(/^([A-Z]+-S\d+-P\d+)_(.+)$/);
  if (!fileMatch) return null;

  const kodeModulCplf = fileMatch[1];
  const slugPart = fileMatch[2];
  const titleMatch = content.match(/^#\s+[A-Z0-9-]+\s+—\s+(.+)$/m);
  const judul = titleMatch?.[1]?.trim() ?? slugPart.replace(/-/g, ' ');

  const urutanMatch = kodeModulCplf.match(/P(\d+)$/);
  const urutan = urutanMatch ? parseInt(urutanMatch[1], 10) : 0;

  const capabilityCodes = parseCodes(getField(content, 'Capability'));
  const expRaw = getField(content, 'EXP');
  const expCodes = parseCodes(expRaw).filter((c) => c.startsWith('EXP'));
  const unitSilabus = getField(content, 'Unit');

  const learningMatch = content.match(/## Learning Transformation\s+\n\s*(.+)/);
  const deskripsi = learningMatch?.[1]?.trim();

  const rppPath = path.join(
    RPP_ROOT,
    tingkat === 'X' ? 'kelas-x' : tingkat === 'XI' ? 'kelas-xi' : 'kelas-xii',
    `semester-${semester}`,
    `${basename}_RPP_KBC.md`,
  );
  let aspekFormatifFokus: string[] = [];
  if (fs.existsSync(rppPath)) {
    aspekFormatifFokus = parseAspekFromRpp(fs.readFileSync(rppPath, 'utf-8'));
  }

  const prjCodes: string[] = [];
  if (expRaw?.includes('PRJ')) {
    prjCodes.push(...parseCodes(expRaw).filter((c) => c.startsWith('PRJ')));
  }
  const isProjectPertemuan =
    prjCodes.length > 0 || /project/i.test(basename) || urutan >= 15;

  return {
    kodeModulCplf,
    judul,
    slug: `${kodeModulCplf.toLowerCase()}_${slugPart}`,
    tingkat,
    semester,
    urutan,
    urutanGlobal: urutanGlobal(tingkat, semester, urutan),
    unitSilabus,
    capabilityCodes,
    aspekFormatifFokus,
    expCodes,
    prjCodes,
    isProjectPertemuan,
    deskripsi,
  };
}

function main() {
  const records: TemaCplfRecord[] = [];

  for (const { tingkat, semester, rel } of SEMESTER_DIRS) {
    const dir = path.join(MODULES_ROOT, rel);
    if (!fs.existsSync(dir)) {
      console.warn('Skip missing dir:', dir);
      continue;
    }

    const files = fs
      .readdirSync(dir)
      .filter((f) => /^[A-Z]+-S\d+-P\d+_.+\.md$/.test(f))
      .sort();

    for (const file of files) {
      const rec = parseModuleFile(path.join(dir, file), tingkat, semester);
      if (rec) records.push(rec);
    }
  }

  records.sort((a, b) => a.urutanGlobal - b.urutanGlobal);

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(records, null, 2), 'utf-8');
  console.log(`Generated ${records.length} tema → ${OUT_FILE}`);
}

main();
