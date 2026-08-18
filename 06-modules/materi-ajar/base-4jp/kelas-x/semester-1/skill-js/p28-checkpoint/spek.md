# Spek demo checkpoint (bukan spek milikmu)

Brief **B · Info kantin**. Demo ini sengaja tidak semua AC-nya lulus.

## Masalah

Siswa ingin cek menu dan status di satu halaman, tanpa bertanya ke banyak orang.

## Pengguna

Siswa kelas X yang cek cepat di istirahat.

## Section wajib

1. Sorotan status menu
2. Daftar menu
3. Jam buka + sorotan cadangan

## Fitur JS

| Pertemuan | Fitur | `id` |
|---|---|---|
| P26 | Klik cek status → teks `#pesan` | `tombolUtama`, `pesan` |
| P27 | Klik ganti sorotan → teks `#sorotanCadangan` | `tombolCadangan`, `sorotanCadangan` |

## Bukan S1

- Form pesan ke kantin
- Stok real-time
- Fitur 3 (warna, hitungan, tombol tambahan)

## Acceptance Criteria

1. Ada `header`, `main`, `footer`.
2. Ada 3 `section`; setiap `section` punya `h2`.
3. Teks terbaca: lebar baris dibatasi (`max-width` sekitar 40rem), kontras cukup.
4. Sebelum klik `#tombolUtama`, `#pesan` berisi teks awal bahwa status belum dicek.
5. Setelah klik `#tombolUtama`, `#pesan` menjadi `Mie Sehat tersedia.`
6. Setelah klik `#tombolCadangan`, `#sorotanCadangan` menjadi `Sorotan cadangan: Es Teh habis lebih dulu.`
7. Setelah langkah 6, klik `#tombolUtama` lagi tetap menepati AC 5 (regresi).
