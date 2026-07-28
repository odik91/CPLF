# Materi Guru Lengkap — X-S2-P01
**Modul:** [X-S2-P01_mengapa-web-html.md](../../kelas-x/semester-2/X-S2-P01_mengapa-web-html.md)
**Materi pendukung sumber:** [X-S2-P01_mengapa-web-html.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-2/X-S2-P01_mengapa-web-html.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P01 — Mengapa Web? HTML Struktur

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 |
| Unit | X2.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T1 |
| MM | MM-16 |

## Learning Transformation

Dari “web = hafalan tag” → **halaman sebagai representasi pikiran terstruktur**.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall S1: algoritma → sekarang **tampilkan** hasil ke orang lain |
| 5–18 | Experience | Tampilkan 2 halaman: satu `<div>` soup vs semantik — tanya accessibility |
| 18–28 | Trap | “Asal tampil di browser” vs terstruktur |
| 28–38 | Clarify | Siapa pembaca? Info apa wajib ada? |
| 38–48 | Concept | HTML · struktur · `<!DOCTYPE>` skeleton |
| 48–70 | Practice | Buat skeleton: judul, paragraf, list 3 item kegiatan MA |
| 70–85 | Reflect | Beda menulis di WA vs halaman web? |
| 85–90 | Exit | 3 tag yang dipakai + fungsi |

---

## Formatif

**TEC**, **REA**

---

## Catatan Guru

Pertemuan buka Semester 2 — singkat recap S1 (5 menit max).


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P01 Mengapa Web? HTML Struktur

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 |
| Modul pertemuan | [X-S2-P01_mengapa-web-html.md](../../../kelas-x/semester-2/X-S2-P01_mengapa-web-html.md) |
| Unit | X2.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T1 |
| MM | MM-16 |
| EXP | [EXP_02_B Website Bagus](../../../07-experience_library/EXP_02_B_Website_Bagus.md) (spiral requirement) |
| Formatif | TEC, REA |
| Ada live code? | **Ya — HTML PERTAMA kelas** (skeleton dari file kosong) |

---

## Pengetahuan Guru

**Pertemuan buka Semester 2** — jembatan dari S1 (algoritma + JS di terminal) ke **halaman web** yang bisa dibaca orang lain.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **HTML** | Bahasa **struktur** — bukan desain cantik dulu; seperti kerangka rumah |
| `<!DOCTYPE html>` | Deklarasi: "ini dokumen HTML5" — browser tahu cara parse |
| `<html>` | Root — semua isi halaman di dalamnya |
| `<head>` vs `<body>` | **Head** = meta (judul tab, charset) — **tidak** tampil sebagai konten utama; **body** = yang user lihat |
| `<title>` | Judul di tab browser — bukan heading di halaman |
| `<h1>`, `<p>`, `<ul>/<li>` | Heading, paragraf, list — blok informasi terstruktur |
| **Tag pembuka/tutup** | Mayoritas berpasangan — scope konten = di antara tag buka & tutup |

**Metafora:** S1 = algoritma di kepala/terminal → S2 = **pamerkan** hasil berpikir ke audience (siswa MA, wali, guru).

**Trap EXP_02_B:** "Asal tampil di browser" ≠ halaman terstruktur — sama seperti "website bagus" tanpa spesifikasi.

**Prasyarat S1 (recap 5 menit):** algoritma, if/else, variabel, loop, debug — **output console belum = halaman web**.

**Fallback:** browser tidak buka → Live Server/Replit preview; HTML tetap bisa dibaca sebagai teks terstruktur.

**PENTING:** contoh HTML di modul pertemuan **hanya referensi guru**. Jangan kirim `.html` starter ke siswa.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Di akhir S1 (showcase) — kode kita tampil di mana?" | Terminal / `console.log` — orang lain tidak buka file kita |
| "Satu hal yang dipelajari dari project S1?" | (variabel siswa: spec dulu, debug, iterasi, dll.) |
| "Mengapa algoritma penting sebelum HTML?" | Struktur pikiran sama — HTML = susun informasi, bukan hiasan random |
| "Bedanya chat WA dengan halaman web untuk pengumuman?" | WA hilang di feed; halaman punya struktur permanen & bisa di-link |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik live; siswa ikut — **bukan** paste template Bootstrap/WA |
| **Live coding** | File **`index.html` kosong** → baris demi baris; ≥70% baris pertama dari guru |
| **Per baris / scope** | Setiap tag buka — ucapkan scope: "Isi `<head>` = metadata; isi `<body>` = yang tampil" |
| **Recall** | 5 menit recap S1 + trap "asal tampil" sebelum `<!DOCTYPE>` |
| **Membaca kode** | Snippet HTML proyeksi **sebelum** siswa ketik list `<ul>` |
| **No starter file** | **Larangan keras:** jangan bagikan `.html` siap jalan — bangun bareng dari nol |

---

## Materi Inti

### Transformasi

**Dari:** Web = hafalan tag / copy template  
**Ke:** Halaman = **representasi pikiran terstruktur** — siapa pembaca, info apa wajib ada

### Experience opening (5–18 menit)

- Tampilkan 2 halaman (guru siapkan offline): satu `<div>` soup vs satu dengan heading + list jelas
- Tanya: "Mana yang lebih mudah dipahami tanpa lihat layar penuh?"
- Kaitkan accessibility: screen reader butuh struktur, bukan hanya warna

### Trap (18–28 menit)

"Asal buka di browser sudah" — sama dengan klien minta "website bagus" tanpa kriteria.

**Clarify:** Siapa pembaca halaman kegiatan MA? Info wajib: judul, deskripsi, daftar kegiatan (min 3).

### Skeleton inti

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Tab Browser</title>
</head>
<body>
  <h1>Judul Halaman</h1>
  <p>Paragraf pengantar.</p>
  <ul>
    <li>Item kegiatan 1</li>
    <li>Item kegiatan 2</li>
    <li>Item kegiatan 3</li>
  </ul>
</body>
</html>
```

- `lang="id"` : bantu mesin & accessibility
- `<meta charset="UTF-8">` : karakter Indonesia (é, ü) tidak rusak
- `<h1>` satu per halaman (best practice — detail di P02)

### Environment

- VS Code + ekstensi **Live Server** (atau Replit HTML)
- Simpan sebagai `index.html` — buka preview browser
- Folder proyek kosong — **tidak** ada template sekolah

---

## Alur Live Coding

> **Mulai dari file KOSONG.** Guru mengetik di proyektor; siswa ikut. **Jangan** beri starter file.

### Persiapan

- VS Code / Replit — **tab kosong**
- Live Server siap (klik kanan → Open with Live Server nanti)
- Di laptop siswa **tidak boleh ada:** `index.html` lengkap, copy grup WA, snippet modul

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening & recall 0–38 menit]
Setelah recall S1 + demo 2 halaman + trap "asal tampil":
Ucapkan: "Semester 2 kita pamerkan pikiran lewat browser — mulai file kosong."
Buat file baru: index.html (live, siswa lihat save/rename)

[LANGKAH 1 — DOCTYPE & root]
Ketik: <!DOCTYPE html>
Ucapkan: "Ini perkenalan ke browser: dokumen HTML5 modern."
Tanya: "Baris ini tampil di halaman? Kenapa?"
Scope: baris deklarasi — bukan konten body.

Ketik: <html lang="id">
Ucapkan: "Root — semua tag lain nanti di dalam ini. lang=id untuk bahasa Indonesia."
Jangan tutup dulu — biarkan siswa lihat nesting.

[LANGKAH 2 — Head scope]
Ketik: <head>
Ketik:   <meta charset="UTF-8">
Ketik:   <title>Kegiatan MA Kelas X</title>
Ketik: </head>
Ucapkan: "Head = ruang meta. Title = judul tab, bukan heading besar di halaman."
Tanya: "Kalau charset salah — emoji/aksen bisa rusak. Kenapa kita set UTF-8?"
Scope: isi head tidak muncul sebagai teks utama di body.

[LANGKAH 3 — Body scope]
Ketik: <body>
Ucapkan: "Body = panggung — semua yang user baca ada di sini."
Tanya: "Bedanya title vs nanti h1?"

[LANGKAH 4 — Heading & paragraf]
Ketik:   <h1>Profil Kegiatan Ekstrakurikuler</h1>
Ucapkan: "h1 = judul utama halaman — satu topik besar."
Ketik:   <p>Madrasah Aliyah memiliki berbagai kegiatan untuk mengembangkan bakat siswa.</p>
Ucapkan: "p = paragraf — blok teks biasa."
Tanya: "Kenapa h1 tidak di head?"

[LANGKAH 5 — List 3 item]
Ketik:   <ul>
Ketik:     <li>Pramuka — Jumat sore</li>
Ketik:     <li>PMR — Sabtu pagi</li>
Ketik:     <li>Hadroh — Senin sore</li>
Ketik:   </ul>
Ucapkan: "ul = unordered list; li = satu item. Struktur = mesin & manusia paham daftar."
Tanya: "Kalau hanya enter di Word — browser tidak otomatis jadi list. Kenapa pakai tag?"
Scope: setiap li di dalam ul — sibling sejajar.

[LANGKAH 6 — Tutup tag & preview]
Ketik: </body>
Ketik: </html>
Jalankan Live Server / buka file
Ucapkan: "Struktur dulu — belum cantik. Itu tugas CSS minggu depan."
Celebrasi: halaman pertama tampil — bukan magic, urutan tag.

[LANGKAH 7 — Variasi live 70–85 menit]
Siswa ganti judul + 3 kegiatan MA sendiri — tetap struktur sama
Pair explain: 1 siswa jelaskan head vs body ke teman

[LANGKAH 8 — Exit 85–90]
Exit ticket: tulis 3 tag + fungsinya (mis. h1, p, ul)
Refleksi: "Bedanya tulis di WA vs halaman web?"
```

---

## Latihan Membaca Kode

> Proyeksikan — siswa **prediksi**, jangan copy dulu.

### Snippet A — Head vs body

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Rahasia Tab</title>
</head>
<body>
  <h1>Halo Siswa</h1>
</body>
</html>
```

| Pertanyaan | Kunci |
|------------|-------|
| Teks apa yang tampil besar di halaman? | "Halo Siswa" (h1) |
| "Rahasia Tab" tampil di halaman? | Tidak — hanya di tab browser |

### Snippet B — Tag tidak ditutup

```html
<body>
  <h1>Judul
  <p>Paragraf tanpa tutup heading</p>
</body>
```

| Pertanyaan | Kunci |
|------------|-------|
| Browser akan…? | Parse aneh — paragraf mungkin "masuk" ke h1; tunjukkan di DevTools |
| Perbaikan? | Tutup `</h1>` sebelum `<p>` |

### Snippet C — List structure

```html
<ul>
  <li>Item A</li>
  <li>Item B
  <li>Item C</li>
</ul>
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa `<li>` valid? | Item B tidak ditutup — Item C bisa nested salah |
| Prinsip? | Tag pembuka/tutup berpasangan |

---

## Praktik Mandiri Siswa

Siswa **mengetik versi sendiri** — variasi wajib:

1. **Halaman "3 Kegiatan Favoritku di MA"** — h1, p pengantar, ul min 3 li (bukan copy guru)
2. Tambah **1 paragraf** kenapa kegiatan itu penting
3. Cek preview browser — pastikan title tab ≠ h1 (sengaja beda teks)
4. **Tidak boleh:** copy-paste file guru atau template internet

**Extension:** tambah `<ol>` untuk "langkah daftar ulang" — bedakan ul vs ol.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Campur `<title>` dan `<h1>` — teks sama & bingung scope | Demo sengaja beda teks title vs h1 |
| Lupa `<!DOCTYPE>` — masih jalan tapi quirk mode | Sebut sebagai kebiasaan profesional |
| Enter di editor = spacing di browser | HTML butuh tag `<p>`, bukan enter saja |
| Copy template Wix/Bootstrap 200 baris | File kosong wajib — struktur 15 baris dulu |
| "Sudah jadi" padahal div soup | Tegaskan: struktur > tampil asal |
| Guru kirim index.html lengkap | Ingatkan etika CPLF — hanya skrip guru |

---

## Rujukan

- Modul: [X-S2-P01](../../../kelas-x/semester-2/X-S2-P01_mengapa-web-html.md)
- EXP: [EXP_02_B Website Bagus](../../../07-experience_library/EXP_02_B_Website_Bagus.md)
- Sebelum (S1): [X-S1-P18 Showcase](../semester-1/X-S1-P18_showcase-refleksi-s1.md)
- Lanjut: [P02 HTML Semantik](./X-S2-P02_html-semantik-ma.md)
- MM-16 · CX-T1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Coding dari **file HTML kosong** — bukan distribusi starter
- [ ] TTS per scope head / body / list
- [ ] Siswa preview browser & lihat title vs h1
- [ ] Minimal 3 item list versi siswa (konten MA)
- [ ] Latihan baca snippet — prediksi tanpa copy
- [ ] Recall S1: console vs halaman web
- [ ] Exit: 3 tag + fungsi + 1 kalimat beda WA vs web

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
