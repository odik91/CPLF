# PRJ-X-S2-03 — Absensi Mini

**Jenis:** Semester · **Mode:** Individu · **Durasi:** 3–4 pertemuan  
**Capability:** CX-T2, CX-T3 · **CP:** AP · **MM:** MM-06, MM-07, MM-13  
**EXP terkait:** EXP_06_A

## Masalah

Guru panggil nama satu per satu — lambat; butuh daftar hadir digital sangat sederhana (belum persistent wajib).

## Learning Transformation

Dari “tandai manual” → “daftar siswa + status hadir/izin/alfa di UI.”

## Requirement

- [ ] Array siswa (minimal 5, hardcode OK)
- [ ] Tombol/status: hadir / izin / alfa
- [ ] Hitung ringkas: jumlah hadir hari ini
- [ ] Reset status (opsional)

## Varian Rotasi

| Varian | Kasus |
|--------|--------|
| A | Absensi mata pelajaran Multimedia |
| B | Absensi kegiatan ekskul |
| C | Presensi rapat OSIS |

## Definition of Done

- [ ] Status berubah di layar
- [ ] Agregasi jumlah benar
- [ ] Jelaskan struktur data yang dipilih

## Catatan

Persistensi (localStorage) = bonus; wajib di XI.
