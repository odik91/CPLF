# PRJ-X-S1-02 — Simulasi Antrian

**Jenis:** Semester · **Mode:** Individu / pasangan · **Durasi:** 3 pertemuan  
**Capability:** CX-B2, CX-T3 · **CP:** AP, BK · **MM:** MM-07, MM-14  
**EXP terkait:** EXP_06 / EXP_07_C

## Masalah

Antrian kantin / absensi / fotokopi — orang datang, dilayani, selesai. Tanpa model, sulit menjelaskan “siapa berikutnya”.

## Learning Transformation

Dari “antrian = kerumunan” → “antrian = data berurutan + operasi berulang.”

## Requirement

- [ ] Model: daftar nama/nomor antrian
- [ ] Operasi: tambah antrian, layani (keluarkan depan), tampil sisa
- [ ] Minimal 1 kondisi (antrian kosong → pesan jelas)
- [ ] Demo + jelaskan mengapa pakai urutan (bukan acak)

## Varian Rotasi

| Varian | Kasus |
|--------|--------|
| A | Antrian kantin |
| B | Antrian fotokopi / print tugas |
| C | Antrian konsultasi BK / wali kelas |

## Media

JS (array) di console atau halaman sangat sederhana.

## Definition of Done

- [ ] Tiga operasi berjalan
- [ ] Edge case antrian kosong ditangani
- [ ] Reasoning: beda antrian vs “siapa yang teriak duluan”

## Anti-Pattern

UI cantik tanpa logika antrian yang benar.
