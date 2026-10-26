# Contoh spek lengkap — referensi siswa P23

Baca file ini saat mengisi `spek.md` dan saat suatu baris terasa belum jelas.  
Tiga spek di bawah sudah terisi. **Yang dikumpulkan adalah `spek.md`-mu**, dengan brief yang kamu pilih dan kalimatmu sendiri.

Cara memakai:

1. Pilih brief A, B, atau C. Baca spek lengkap brief itu dari atas sampai bawah.
2. Salin **judul bagian** ke `spek.md` (Identitas, Masalah, Pengguna, dan seterusnya). Isi dengan fakta milikmu.
3. Empat `id` ini jangan kamu ganti: `pesan`, `tombolUtama`, `sorotanCadangan`, `tombolCadangan`.
4. Kalimat di AC 5, 6, dan 7 harus utuh. Kalimat itulah yang nanti muncul di halaman.
5. Hari ini kamu **menulis** janji. CSS dikerjakan di P25. Klik dikerjakan di P26–P27.

## Kalau kamu hendak bertanya, buka bagian ini dulu

| Pertanyaan | Jawaban singkat | Lihat |
|---|---|---|
| Masalah dan pengguna bedanya apa? | Pengguna = siapa. Masalah = apa yang tidak mereka ketahui tanpa halaman ini. | Tiap spek, dua bagian pertama |
| Jalur A atau B? | Dua tombol = A. Satu tombol, klik kedua beda kalimat = B. Pilih satu. | Bagian Jalur B |
| `id` section boleh diganti? | Boleh, sesuai isi (`daftar-menu`, `jadwal`). Empat `id` JS di tabel alamat tidak boleh. | Tabel alamat |
| AC 4 diisi apa, CSS kan belum? | Tulis syarat bacanya hari ini. Mengerjakan CSS-nya minggu depan. | AC 4 di spek kantin |
| “Berubah” boleh? | Tidak. Tulis kalimat yang persis terlihat. | Kalimat yang tidak lulus |
| Boleh menyalin mie? | Hanya jika brief-mu B dan faktanya memang menu itu. Brief A dan C punya contoh sendiri. | Spek A dan C |
| Tombol kedua ditambah hari ini? | Tidak. `id`-nya ditulis di spek. Tag `<button>` kedua menyusul di P27, jalur A saja. | Bagian HTML hari ini |
| DoD saya kerjakan apa hari ini? | Tidak mengerjakan lima bidang. Kamu mengunci kalimat yang nanti membuktikan bidang itu. | Tabel DoD |
| AC 8 jalur B kok beda? | Jalur B mengubah `#pesan` pada klik kedua. Uji ulangnya = muat ulang, lalu klik pertama lagi. | Bagian Jalur B |

---

# Spek lengkap 1 — Brief B · Info kantin · Jalur A

Ini contoh terisi. Bentuknya sama dengan `spek.md`.

## Identitas

| | Isi | Mengapa begini |
|---|---|---|
| Nama | Demo kelas | Ganti dengan namamu |
| Brief | B | Satu huruf. Jangan menulis A dan B sekaligus |
| Judul halaman | `<title>` Info Kantin Kelas X · `h1` Info menu hari ini | `title` = nama di tab browser. `h1` = judul besar di halaman. Boleh beda kalimat, keduanya harus tertulis |
| Nama folder | `project-s1-kantin` | Folder salinanmu, bukan folder contoh di materi |

## Masalah

Siswa ingin cek menu dan status di satu halaman, tanpa bertanya ke banyak orang.

Cukup 1–2 kalimat. Sebut orangnya dan apa yang gagal. “Membuat web kantin yang keren” bukan masalah.

## Pengguna

Siswa kelas X yang cek cepat saat istirahat.

Satu kelompok. “Semua orang” terlalu luas, jadi tidak bisa diuji.

## Section wajib

| Section | `id` section | Teks `h2` |
|---|---|---|
| 1 · tempat fitur 1 | `sorotan` | Sorotan |
| 2 | `daftar-menu` | Menu yang tersedia |
| 3 · tempat fitur 2 | `jam` | Jam buka |

`id` section boleh mengikuti isimu. Setelah ditulis di spek, jangan diganti di P24.

Isi yang nanti tertulis di HTML (P24, belum hari ini):

- Section 2: Mie sehat, Nasi goreng, Es teh.
- Section 3: Istirahat 1 dan istirahat 2. Tutup saat upacara.

## Alamat yang dikunci

| Peran | `id` | Yang terlihat | Kapan tombolnya bekerja |
|---|---|---|---|
| Teks fitur 1 | `pesan` | awal: Belum dicek. Klik tombol untuk status menu utama. | P26 |
| Tombol fitur 1 | `tombolUtama` | label: Cek status menu | P26 |
| Teks fitur 2 | `sorotanCadangan` | awal: Belum ada sorotan cadangan. | P27 |
| Tombol fitur 2 | `tombolCadangan` | label: Ganti sorotan | P27 |

**Jalur A.** Dua klik. Tombol kedua mengubah `#sorotanCadangan`. Tombol kedua tidak menulis ke `#pesan`.

Label tombol menyebut aksi (“Cek status menu”), bukan kata “KLIK”.

## Yang tidak dikerjakan

Yang masuk daftar ini tidak boleh muncul sebagai fitur di P26 atau P27.

- Form pesan ke kantin
- Stok yang berubah sendiri / halaman kedua
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
| 5 | Perilaku | Sebelum klik, `#pesan` berisi: `Belum dicek. Klik tombol untuk status menu utama.` | Buka halaman, jangan klik |
| 6 | Perilaku | Setelah klik `#tombolUtama` satu kali, `#pesan` berisi: `Mie Sehat tersedia.` | Klik sekali |
| 7 | Perilaku | Setelah klik `#tombolCadangan`, `#sorotanCadangan` berisi: `Sorotan cadangan: Es Teh habis lebih dulu.` | Klik tombol kedua |
| 8 | Perilaku | Setelah AC 7, klik `#tombolUtama` lagi. `#pesan` tetap `Mie Sehat tersedia.` | Klik tombol pertama lagi |
| 9 | Sopan | `<html lang="id">`. Label tombol = Cek status menu dan Ganti sorotan. Saat Tab, tombol yang aktif terlihat. | Tekan Tab |

AC 6 dan AC 7 adalah kalimat yang nanti kamu tulis di `textContent`. Satu huruf beda = AC gagal.  
AC 4 dan AC 9 **ditulis hari ini**, dikerjakan di P25 dan P31.

## Definition of Done (diuji P32)

| Bidang | Lulus jika |
|---|---|
| Spek | Masalah, pengguna, dan brief B masih sama dengan file ini |
| Struktur | AC 1–3 lulus |
| Keterbacaan | AC 4 lulus |
| Perilaku | AC 5–8 lulus |
| Sopan | AC 9 lulus, dan `id` tidak berubah |

Hari ini kamu tidak mencentang lulus. Kamu memastikan lima baris ini tetap ada di spekmu sampai P32. Yang gagal di garis akhir ditulis jujur, tidak dihapus dari spek.

## Rencana

| P | Yang terjadi pada spek ini |
|---|---|
| 24 | Tiga section dan kalimat di atas masuk ke HTML. `id` tetap. |
| 25 | CSS untuk AC 4: `max-width`, jarak, ukuran judul, kontras, tombol. |
| 26 | Klik `#tombolUtama` mengubah `#pesan` menjadi `Mie Sehat tersedia.` |
| 27 | Klik `#tombolCadangan` mengubah `#sorotanCadangan`. Lalu uji AC 8. |
| 28 | Uji AC 1–9 sendiri. Catat yang gagal. |
| 29 | Teman menguji file ini. Kamu tidak mengubah kode saat ditinjau. |
| 30 | Perbaiki satu AC yang gagal, uji lagi, baru lanjut ke AC berikutnya. |
| 31 | `lang`, label tombol, jejak Tab. |
| 32 | Lima bidang DoD. Yang gagal tetap tertulis di spek. |

---

# Spek lengkap 2 — Brief A · Profil kegiatan · Jalur A

Bagian yang sama dengan kantin tidak diulang panjang-panjang: bentuk AC 1, 4, 8, 9 dan tabel DoD **sama**. Yang diganti adalah fakta kegiatan.

## Identitas

| | Isi |
|---|---|
| Brief | A |
| Judul | `<title>` Kegiatan Kelas X · `h1` Tiga kegiatan kelas kami |
| Folder | `project-s1-kegiatan` |

## Masalah

Pengunjung halaman kelas tidak tahu tiga kegiatan kami jika harus bertanya ke banyak orang.

## Pengguna

Orang tua atau teman dari kelas lain yang membuka halaman ini.

## Section wajib

| Section | `id` section | Teks `h2` |
|---|---|---|
| 1 | `sorotan` | Sorotan kegiatan |
| 2 | `daftar-kegiatan` | Daftar kegiatan |
| 3 | `jadwal` | Jadwal |

Isi section 2 (ditulis di HTML pada P24): Bakti sosial, Lomba cerdas cermat, Kerja bakti.  
Isi section 3: Latihan setiap Jumat setelah istirahat kedua.

## Alamat yang dikunci

| Peran | `id` | Yang terlihat |
|---|---|---|
| Teks fitur 1 | `pesan` | awal: Status kegiatan belum dibuka. |
| Tombol fitur 1 | `tombolUtama` | label: Cek kegiatan |
| Teks fitur 2 | `sorotanCadangan` | awal: Catatan jadwal belum dibuka. |
| Tombol fitur 2 | `tombolCadangan` | label: Lihat catatan |

**Jalur A.**

## Yang tidak dikerjakan

- Form daftar ikut kegiatan
- Satu halaman untuk tiap kegiatan
- Library atau framework
- Tombol ketiga
- Animasi sebagai syarat lulus

## AC yang berbeda dari kantin

| No | AC |
|---|---|
| 2 | Ada 3 `section`. `h2`-nya: Sorotan kegiatan, Daftar kegiatan, Jadwal. |
| 3 | `<title>` = Kegiatan Kelas X. `h1` = Tiga kegiatan kelas kami. `id` pesan, tombolUtama, dan sorotanCadangan ada di HTML. |
| 5 | Sebelum klik, `#pesan` berisi: `Status kegiatan belum dibuka.` |
| 6 | Setelah klik `#tombolUtama`, `#pesan` berisi: `Kegiatan pekan ini: bakti sosial, lomba cerdas cermat, dan kerja bakti.` |
| 7 | Setelah klik `#tombolCadangan`, `#sorotanCadangan` berisi: `Teks cadangan: latihan paskibra dipindah ke hari Jumat.` |
| 8 | Setelah AC 7, klik `#tombolUtama` lagi. `#pesan` tetap kalimat AC 6. |
| 9 | Label tombol = Cek kegiatan dan Lihat catatan. `lang="id"`. Tab meninggalkan jejak. |

AC 1 dan AC 4: salin rumusannya dari spek kantin. Ganti saja tidak perlu, karena isinya tentang struktur dan keterbacaan, bukan tentang mie.

---

# Spek lengkap 3 — Brief C · Panduan siswa baru · Jalur A

## Identitas

| | Isi |
|---|---|
| Brief | C |
| Judul | `<title>` Panduan Siswa Baru · `h1` Panduan siswa baru madrasah |
| Folder | `project-s1-siswa-baru` |

## Masalah

Informasi madrasah tercecer, sehingga siswa baru tidak tahu langkah pertama.

## Pengguna

Siswa baru yang baru menerima pengumuman diterima.

## Section wajib

| Section | `id` section | Teks `h2` |
|---|---|---|
| 1 | `sorotan` | Pesan untuk siswa baru |
| 2 | `info-madrasah` | Info madrasah |
| 3 | `bekal` | Yang perlu dibawa |

Isi section 2 (P24): Jam masuk, seragam, dan nama piket.  
Isi section 3: Fotokopi rapor dan pas foto.

## Alamat yang dikunci

| Peran | `id` | Yang terlihat |
|---|---|---|
| Teks fitur 1 | `pesan` | awal: Pesan untuk siswa baru belum dibuka. |
| Tombol fitur 1 | `tombolUtama` | label: Tampilkan pesan |
| Teks fitur 2 | `sorotanCadangan` | awal: Sorotan perlengkapan belum dibuka. |
| Tombol fitur 2 | `tombolCadangan` | label: Sorot info |

**Jalur A.**

## Yang tidak dikerjakan

- Form pendaftaran yang terkirim
- Chat langsung ke wali kelas
- Banyak halaman
- Library atau framework
- Tombol ketiga
- Animasi sebagai syarat lulus

## AC yang berbeda dari kantin

| No | AC |
|---|---|
| 2 | Ada 3 `section`. `h2`-nya: Pesan untuk siswa baru, Info madrasah, Yang perlu dibawa. |
| 3 | `<title>` = Panduan Siswa Baru. `h1` = Panduan siswa baru madrasah. Tiga `id` JS ada di HTML. |
| 5 | Sebelum klik, `#pesan` berisi: `Pesan untuk siswa baru belum dibuka.` |
| 6 | Setelah klik `#tombolUtama`, `#pesan` berisi: `Langkah pertama: lapor ke piket dengan membawa fotokopi rapor.` |
| 7 | Setelah klik `#tombolCadangan`, `#sorotanCadangan` berisi: `Sorotan: bawa fotokopi rapor saat daftar ulang.` |
| 8 | Setelah AC 7, klik `#tombolUtama` lagi. `#pesan` tetap kalimat AC 6. |
| 9 | Label tombol = Tampilkan pesan dan Sorot info. `lang="id"`. Tab meninggalkan jejak. |

---

# Jalur B — satu tombol, dua kalimat

Pakai jalur ini jika spekmu hanya satu interaksi. Jangan membuat `#tombolCadangan`.  
Contoh di bawah memakai brief B. Brief A dan C mengganti kalimatnya, polanya sama.

## Yang berubah di tabel alamat

| Peran | `id` | Yang terlihat |
|---|---|---|
| Teks fitur 1 | `pesan` | awal: Belum dicek. Klik tombol untuk status menu utama. |
| Tombol fitur 1 | `tombolUtama` | label: Cek status menu |
| Teks fitur 2 | `sorotanCadangan` | tidak dipakai. Tulis: tidak dipakai, jalur B. |
| Tombol fitur 2 | `tombolCadangan` | tidak dibuat |

## AC 6, 7, dan 8 versi jalur B

| No | AC | Yang terjadi di layar |
|---|---|---|
| 6 | Klik pertama `#tombolUtama`, `#pesan` berisi: `Mie Sehat tersedia.` | Kalimat pertama |
| 7 | Klik kedua `#tombolUtama`, `#pesan` berisi: `Mie Sehat tinggal sedikit. Datang di awal istirahat.` | Kalimat kedua, masih di `#pesan` |
| 8 | Muat ulang halaman. `#pesan` kembali ke kalimat AC 5. Klik pertama lagi menghasilkan kalimat AC 6. Klik kedua lagi menghasilkan kalimat AC 7. | Uji ulang, karena klik kedua memang mengubah `#pesan` |

Jangan menulis AC 8 jalur A (“`#pesan` tetap Mie Sehat tersedia”) pada jalur B. Di jalur B, klik kedua **memang** mengganti `#pesan`.

---

# Kalimat yang tidak lulus, dan penggantinya

| Jangan ditulis | Tulis seperti ini |
|---|---|
| UI-nya keren dan modern | Ada 3 `section`, masing-masing punya `h2` |
| Statusnya berubah | Setelah klik `#tombolUtama`, `#pesan` berisi: `Mie Sehat tersedia.` |
| Halaman lengkap | Ada `header`, `main`, dan `footer` |
| Tombolnya bagus | Label tombol = Cek status menu. Tombol terlihat tombol (punya jarak dan batas) |
| Interaktif | Setelah klik, satu kalimat di `#pesan` berganti menjadi kalimat AC 6 |
| Tambah fitur biar keren | Masukkan ke daftar yang tidak dikerjakan |

---

# Yang disalin ke `index.html` hari ini

Dari spek kantin jalur A, HTML-nya sebesar ini. Brief lain: ganti kalimat, pertahankan `id` JS.

```html
<h1>Info menu hari ini</h1>

<section id="sorotan">
  <h2>Sorotan</h2>
  <p id="pesan">Belum dicek. Klik tombol untuk status menu utama.</p>
  <button id="tombolUtama" type="button">Cek status menu</button>
</section>

<section id="daftar-menu">
  <h2>Menu yang tersedia</h2>
  <p>Mie sehat, Nasi goreng, Es teh.</p>
</section>

<section id="jam">
  <h2>Jam buka</h2>
  <p>Istirahat 1 dan istirahat 2. Tutup saat upacara.</p>
  <p id="sorotanCadangan">Belum ada sorotan cadangan.</p>
</section>
```

Belum ada `<button id="tombolCadangan">` hari ini.  
`style.css` belum diisi aturan baca.  
`script.js` belum diisi `textContent`.

Kalimat di `<p id="pesan">` harus sama persis dengan AC 5. Label tombol harus sama persis dengan tabel alamat.

---

# Cek sendiri sebelum bertanya ke guru

1. Brief-ku satu huruf, dan masalahku menyebut orang yang kesulitan.
2. AC 6 adalah kalimat utuh, bukan kata “berubah”.
3. Jalur A atau B sudah dipilih. AC 7 dan AC 8 mengikuti jalur itu.
4. `id="pesan"` dan `id="tombolUtama"` di HTML sama dengan spek.
5. Daftar yang tidak dikerjakan punya isi, bukan kosong.
6. File yang akan dikumpulkan bernama `spek.md`, bukan file contoh ini.
