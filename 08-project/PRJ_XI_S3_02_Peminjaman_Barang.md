# PRJ-XI-S3-02 — Peminjaman Barang Ekskul

**Jenis:** Semester · **Mode:** Individu / pasangan · **Durasi:** 4 pertemuan  
**Capability:** CXI-B2, CXI-T1, CXI-T3 · **CP:** AP, BK · **MM:** MM-08, MM-09  
**EXP terkait:** EXP_07

## Masalah

Barang ekskul (bola, kamera, sound) dipinjam tanpa catatan — hilang jejak.

## Learning Transformation

Dari “ingat di kepala” → “setiap barang punya ID + status dipinjam/tersedia.”

## Requirement

- [ ] Data barang: `{ id, nama, status }`
- [ ] Pinjam / kembalikan (ubah state)
- [ ] Cegah pinjam ganda (kondisi)
- [ ] Modul/fungsi terpisah: data vs UI
- [ ] Skema singkat: siapa peminjam? (field opsional)

## Varian Rotasi

| Varian | Kasus |
|--------|--------|
| A | Inventaris ekskul olahraga |
| B | Alat multimedia / lab |
| C | Buku paket mapel (pinjam singkat) |

## Definition of Done

- [ ] ID unik dipakai di semua operasi
- [ ] Tidak bisa pinjam item yang sudah dipinjam
- [ ] Refactor sebelum/sesudah (screenshot atau diff singkat)
