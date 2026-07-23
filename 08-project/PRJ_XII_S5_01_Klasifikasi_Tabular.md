# PRJ-XII-S5-01 — Klasifikasi Tabular Mini (TF.js)

**Jenis:** Semester · **Mode:** Individu / pasangan · **Durasi:** 4 pertemuan  
**Capability:** CXII-T1, CXII-T2, CXII-B2 · **CP:** AD, AP · **MM:** MM-07, MM-16, MM-18

## Masalah

Siswa sering lompat ke “AI keren” tanpa menyiapkan data & membaca batasan model.

## Learning Transformation

Dari “training = sihir” → “data → tensor → model kecil → prediksi + batasan.”

## Requirement

- [ ] Dataset kecil (boleh buatan): minimal 2 kelas, puluhan baris
- [ ] Pra-proses: normalisasi / encoding sederhana (jelaskan)
- [ ] Model TF.js sangat kecil (dense) — train di browser
- [ ] Tampilkan loss/akurasi sederhana + 3 prediksi uji
- [ ] Tulis **batasan**: apa yang model *tidak* bisa klaim

## Varian Rotasi

| Varian | Kasus data |
|--------|------------|
| A | Lulus/tidak dari skor fiktif |
| B | Kategori kegiatan (akademik / olahraga / seni) dari fitur sederhana |
| C | Spam vs bukan (aturan teks sangat sederhana / fitur hitung kata) |

## Definition of Done

- [ ] Pipeline jalan end-to-end
- [ ] Batasan model tertulis & dibahas di demo
- [ ] Bukan copy notebook tanpa paham layer

## Anti-Pattern

Mengklaim akurasi tinggi pada data yang sama dipakai uji tanpa hold-out sederhana.
