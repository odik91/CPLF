# PRJ-XII-S6-01 — AI Absensi / QR Attendance

**Jenis:** Nilai (capstone) · **Mode:** Tim 2–4 · **Durasi:** 6–8 pertemuan  
**Capability:** CXII-T3, CXII-T4, CXII-C1, CXII-K1 · **CP:** AD, AP, LD · **MM:** MM-21–24

## Masalah

Absensi manual lambat; sekolah butuh opsi digital — tapi **wajah/biometrik** berisiko privasi.

## Learning Transformation

Dari “pakai AI karena keren” → “pilih teknologi sesuai masalah + tulis konsekuensi.”

## Requirement

- [ ] Masalah & pengguna nyata (wali kelas / piket) — wawancara singkat OK
- [ ] Pilih jalur: **QR / kode** (disarankan) ATAU gesture/face dengan mitigasi ketat
- [ ] Integrasi ke UI web (hadir tercatat)
- [ ] Dokumen etika: data apa disimpan, berapa lama, siapa akses, risiko salah deteksi
- [ ] Demo kasus gagal (QR rusak / salah orang) + penanganan
- [ ] Presentasi akhir: teknis + dampak

## Varian Rotasi

| Varian | Fokus |
|--------|--------|
| A | QR attendance + log localStorage |
| B | Kode unik harian (tanpa kamera) |
| C | Gesture “hadir” (Teachable Machine) + disclaimer kuat |

## Definition of Done

- [ ] Produk dipakai uji coba ≥1 pertemuan nyata atau simulasi ketat
- [ ] Etika & batasan bukan lampiran kosong
- [ ] Setiap anggota jelaskan perannya

## Anti-Pattern

Face recognition tanpa consent & tanpa rencana hapus data.
