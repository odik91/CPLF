# Handout Siswa — X-S2-P01

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P01_mengapa-web-html.md](../../../kelas-x/semester-2/X-S2-P01_mengapa-web-html.md)

---

## 1. Tujuan pembelajaran

Dari “web = hafalan tag” → **halaman sebagai representasi pikiran terstruktur**.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 3 tag yang dipakai + fungsi
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
