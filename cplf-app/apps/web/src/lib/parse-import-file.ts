import Papa from 'papaparse';
import * as XLSX from 'xlsx';

export type ImportRow = Record<string, string>;

function normalizeHeader(h: string): string {
  return h.trim().toLowerCase().replace(/\s+/g, '_');
}

function normalizeCsvText(raw: string): string {
  return raw.replace(/^\uFEFF/, '').replace(/^sep=[;,]\r?\n/i, '');
}

export function parseImportFile(file: File): Promise<ImportRow[]> {
  const ext = file.name.split('.').pop()?.toLowerCase();

  if (ext === 'xlsx' || ext === 'xls') {
    return parseXlsx(file);
  }

  return parseCsv(file);
}

function parseXlsx(file: File): Promise<ImportRow[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
          defval: '',
          raw: false,
        });
        resolve(
          json.map((row) =>
            Object.fromEntries(
              Object.entries(row).map(([k, v]) => [normalizeHeader(k), String(v ?? '').trim()]),
            ),
          ),
        );
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Gagal membaca file Excel'));
    reader.readAsArrayBuffer(file);
  });
}

function parseCsv(file: File): Promise<ImportRow[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = normalizeCsvText(String(e.target?.result ?? ''));
      Papa.parse<ImportRow>(text, {
        header: true,
        skipEmptyLines: true,
        delimiter: '',
        transformHeader: normalizeHeader,
        complete: (res) => {
          if (res.errors.length) {
            reject(new Error(res.errors[0]?.message ?? 'Gagal parse CSV'));
            return;
          }
          resolve(
            res.data.map((row) =>
              Object.fromEntries(
                Object.entries(row).map(([k, v]) => [k, String(v ?? '').trim()]),
              ),
            ),
          );
        },
      });
    };
    reader.onerror = () => reject(new Error('Gagal membaca file CSV'));
    reader.readAsText(file, 'UTF-8');
  });
}
