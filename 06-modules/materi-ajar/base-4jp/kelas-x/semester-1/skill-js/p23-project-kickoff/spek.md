# Spek Project S1 — isi hari ini, diuji sampai P32

Ini satu-satunya kontrak. Jangan menulis spek kedua di kertas lain.  
Kalimat yang kamu isi di AC 5–7 itulah yang nanti muncul di halaman.  
Empat alamat di tabel bawah dikunci hari ini. Setelah pulang, `id` tidak diganti.

Hapus `contoh-spek-kantin.md` dari folder salinanmu. File itu demo guru (brief kantin).

## Identitas

| | Isi |
|---|---|
| Nama | |
| Brief | A / B / C |
| Judul halaman (`<title>` dan `h1`) | |
| Nama folder | `project-s1-…` |

## Masalah (1–2 kalimat)

Siapa yang kesulitan, dan apa yang tidak mereka ketahui jika halaman ini tidak ada.

…

## Pengguna

Satu kelompok orang. Contoh: pengunjung halaman kelas / siswa yang cek kantin saat istirahat / siswa baru.

…

## Section wajib (2 atau 3)

| Section | `id` section (boleh sesuai isimu) | Teks `h2` |
|---|---|---|
| 1 · tempat fitur 1 | `sorotan` | |
| 2 | | |
| 3 · tempat fitur 2, jika ada | `cadangan` | |

## Alamat yang dikunci

Jangan diganti di P24–P32. JS mencari huruf ini.

| Peran | `id` | Label / teks yang terlihat | Kapan dipakai |
|---|---|---|---|
| Teks yang berubah pada fitur 1 | `pesan` | teks awal: | P26 |
| Tombol fitur 1 | `tombolUtama` | label tombol: | P26 |
| Teks fitur 2 | `sorotanCadangan` | teks awal: | P27 jalur A |
| Tombol fitur 2 | `tombolCadangan` | label tombol: | P27 jalur A saja |

**Jalur (pilih satu, coret yang lain):**

- **A** — spek menjanjikan dua klik. Tombol kedua menyentuh `#sorotanCadangan`, tidak menimpa `#pesan`.
- **B** — spek hanya satu klik. `#tombolCadangan` tidak dibuat. Klik ulang `#tombolUtama` mengucapkan kalimat kedua. Isi AC 7 versi B.

## Yang tidak dikerjakan (wajib ada isinya)

Janji yang tidak ditulis di sini tidak boleh muncul di tengah semester.

- Form yang terkirim ke server
- Halaman kedua
- Library / framework
- Tombol ketiga
- Animasi sebagai syarat lulus
- …

## Acceptance Criteria

Lulus = orang lain bisa mencentang tanpa bertanya “maksudmu keren apa”.  
Salin kalimat persis. Jangan menulis “berubah” atau “menarik”.

| No | Bidang | AC | Cara uji |
|---|---|---|---|
| 1 | Struktur | Ada `header`, `main`, dan `footer`. | Lihat halaman |
| 2 | Struktur | Ada … `section`. Setiap `section` punya `h2`: (1) … (2) … (3) … | Lihat judul |
| 3 | Struktur | `<title>` dan `h1` = judul di atas. HTML memuat `id="pesan"`, `id="tombolUtama"`, `id="sorotanCadangan"`. | View source |
| 4 | Keterbacaan | Lebar baris dibatasi, section tidak menempel, `h1` lebih besar dari paragraf, teks kontras dengan latar, tombol terlihat tombol. | Mata, layar dilebarkan |
| 5 | Perilaku | Sebelum klik apa pun, `#pesan` berisi: “…” | Buka halaman, jangan klik |
| 6 | Perilaku | Setelah klik `#tombolUtama` satu kali, `#pesan` berisi: “…” | Klik sekali, baca |
| 7 | Perilaku | **Jalur A:** setelah klik `#tombolCadangan`, `#sorotanCadangan` berisi: “…”. **Jalur B:** klik kedua pada `#tombolUtama`, `#pesan` berisi: “…”. | Klik, baca elemen yang disebut |
| 8 | Perilaku | Setelah AC 7, klik `#tombolUtama` lagi. `#pesan` tetap berisi kalimat AC 6. | Regresi |
| 9 | Sopan | `<html lang="id">`. Label tombol sama dengan tabel alamat. Saat Tab, tombol yang aktif terlihat. | Tab, baca label |

AC 4 dikerjakan di P25. AC 5–6 di P26. AC 7–8 di P27. AC 9 di P31. Hari ini cukup **menulis** kalimatnya.

## Definition of Done (garis akhir P32)

Selesai berarti lima bidang ini. AC di atas adalah buktinya. Bidang yang belum lulus di P32 ditulis jujur di kartu status, tidak dihapus dari spek ini.

| Bidang P32 | Lulus jika | Buktinya |
|---|---|---|
| Spek | Masalah, pengguna, dan brief masih sama dengan file ini | Bagian identitas + masalah |
| Struktur | Landmark, `h2`, `id`, dan `title` sesuai AC 1–3 | AC 1–3 |
| Keterbacaan | AC 4 | AC 4 |
| Perilaku | AC 5–8, termasuk uji ulang fitur 1 | AC 5–8 |
| Sopan | AC 9, tanpa mengubah `id` | AC 9 |

## Rencana satu baris

| Pertemuan | Yang akan kukerjakan (belum hari ini) |
|---|---|
| P24 | Isi teks section sesuai tabel section. `id` tetap. |
| P25 | CSS untuk AC 4 saja. |
| P26 | Klik `#tombolUtama` mengubah `#pesan` menjadi kalimat AC 6. |
| P27 | Jalur yang dipilih di atas. Lalu klik fitur 1 lagi (AC 8). |
| P28 | Uji AC 1–9 sendiri, catat yang gagal. |
| P29 | Teman menguji spek ini. Aku tidak mengubah file saat ditinjau. |
| P30 | Perbaiki antrian teman, satu AC sekali, lalu uji ulang. |
| P31 | AC 9. `id` tidak pindah. |
| P32 | Lima bidang DoD. Yang belum, ditulis di kartu. |

## Cek sebelum pulang

- [ ] Jalur A atau B dipilih, yang lain dicoret
- [ ] Kalimat AC 6 sudah utuh (bukan kata “berubah”)
- [ ] Label tombol di tabel = yang tertulis di `index.html`
- [ ] `id` di tabel = `id` di `index.html`
- [ ] `contoh-spek-kantin.md` sudah dihapus dari folder ini
- [ ] CSS dan JS fitur belum diselesaikan
