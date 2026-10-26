# DEMO GURU — Spek kantin (brief B)

Jangan dikumpulkan. Jangan disalin jika brief-mu A atau C.  
Setelah menyalin folder kickoff, **hapus file ini** dari salinanmu.  
Pola tabelnya yang ditiru. Kalimat mie hanya untuk demo ini.

File ini adalah kontrak yang sama dengan halaman contoh P24–P27 dan demo uji P28.

## Identitas

| | Isi |
|---|---|
| Nama | Demo kelas |
| Brief | B |
| Judul halaman (`<title>` dan `h1`) | `<title>` Info Kantin Kelas X · `h1` Info menu hari ini |
| Nama folder | `project-s1-kantin` |

## Masalah

Siswa ingin cek menu dan status di satu halaman, tanpa bertanya ke banyak orang.

## Pengguna

Siswa kelas X yang cek cepat saat istirahat.

## Section wajib

| Section | `id` section | Teks `h2` |
|---|---|---|
| 1 · tempat fitur 1 | `sorotan` | Sorotan |
| 2 | `daftar-menu` | Menu yang tersedia |
| 3 · tempat fitur 2 | `jam` | Jam buka |

Isi section 2 yang tertulis di HTML (P24): Mie sehat, Nasi goreng, Es teh.  
Isi section 3: Istirahat 1 dan istirahat 2. Tutup saat upacara.

## Alamat yang dikunci

| Peran | `id` | Label / teks yang terlihat | Kapan |
|---|---|---|---|
| Teks fitur 1 | `pesan` | awal: Belum dicek. Klik tombol untuk status menu utama. | P26 |
| Tombol fitur 1 | `tombolUtama` | label: Cek status menu | P26 |
| Teks fitur 2 | `sorotanCadangan` | awal: Belum ada sorotan cadangan. | P27 |
| Tombol fitur 2 | `tombolCadangan` | label: Ganti sorotan | P27 |

**Jalur A.** Dua klik. Tombol kedua mengubah `#sorotanCadangan`, tidak menimpa `#pesan`.

## Yang tidak dikerjakan

- Form pesan ke kantin
- Stok real-time / halaman kedua
- Library atau framework
- Tombol ketiga
- Animasi sebagai syarat lulus
- Mengganti warna sebagai fitur

## Acceptance Criteria

| No | Bidang | AC | Cara uji |
|---|---|---|---|
| 1 | Struktur | Ada `header`, `main`, dan `footer`. | Lihat halaman |
| 2 | Struktur | Ada 3 `section`. Setiap `section` punya `h2`: Sorotan, Menu yang tersedia, Jam buka. | Lihat judul |
| 3 | Struktur | `<title>` = Info Kantin Kelas X. `h1` = Info menu hari ini. Ada `id="pesan"`, `id="tombolUtama"`, `id="sorotanCadangan"`. | View source |
| 4 | Keterbacaan | Lebar baris dibatasi (sekitar 40rem), section tidak menempel, `h1` lebih besar dari paragraf, teks gelap di latar terang, tombol terlihat tombol. | Lebarkan jendela |
| 5 | Perilaku | Sebelum klik, `#pesan` berisi: `Belum dicek. Klik tombol untuk status menu utama.` | Jangan klik |
| 6 | Perilaku | Setelah klik `#tombolUtama`, `#pesan` berisi: `Mie Sehat tersedia.` | Klik sekali |
| 7 | Perilaku | Setelah klik `#tombolCadangan`, `#sorotanCadangan` berisi: `Sorotan cadangan: Es Teh habis lebih dulu.` | Klik tombol kedua |
| 8 | Perilaku | Setelah AC 7, klik `#tombolUtama` lagi. `#pesan` tetap `Mie Sehat tersedia.` | Regresi |
| 9 | Sopan | `<html lang="id">`. Label tombol = Cek status menu dan Ganti sorotan. Tab meninggalkan jejak pada tombol. | Tab |

## Definition of Done (P32)

| Bidang | Lulus jika |
|---|---|
| Spek | Masalah, pengguna, dan brief B masih sama dengan file ini |
| Struktur | AC 1–3 |
| Keterbacaan | AC 4 |
| Perilaku | AC 5–8 |
| Sopan | AC 9, `id` tidak berubah |

## Rencana

| P | Satu baris |
|---|---|
| 24 | Tulis tiga section dan kalimat di atas. `id` tetap. |
| 25 | `max-width`, jarak, ukuran judul, kontras, tombol. |
| 26 | Listener `#tombolUtama` → `textContent` = `Mie Sehat tersedia.` |
| 27 | Listener `#tombolCadangan` → `#sorotanCadangan`. Lalu uji AC 8. |
| 28–30 | Uji AC ini, catat gagal, perbaiki satu per satu. |
| 31 | `lang`, label, jejak Tab. |
| 32 | Lima bidang. Yang gagal tetap tertulis di sini. |
