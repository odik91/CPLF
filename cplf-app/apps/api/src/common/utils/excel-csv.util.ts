/** CSV yang langsung terbaca kolomnya di Excel (locale ID/EU memakai `;`) */
export function buildExcelCompatibleCsv(rows: string[][]): string {
  const sep = ';';
  const BOM = '\uFEFF';
  const escape = (cell: string) => {
    if (cell.includes(sep) || cell.includes('"') || cell.includes('\n') || cell.includes('\r')) {
      return `"${cell.replace(/"/g, '""')}"`;
    }
    return cell;
  };

  const lines = [
    `sep=${sep}`,
    ...rows.map((row) => row.map(escape).join(sep)),
  ];

  return BOM + lines.join('\r\n');
}

/** Hapus baris sep= dan BOM sebelum parse CSV */
export function normalizeCsvText(raw: string): string {
  return raw
    .replace(/^\uFEFF/, '')
    .replace(/^sep=[;,]\r?\n/i, '');
}
