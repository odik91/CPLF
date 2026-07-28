# Handout Siswa — X-S2-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P02_html-semantik-ma.md](../../../kelas-x/semester-2/X-S2-P02_html-semantik-ma.md)

---

## 1. Tujuan pembelajaran

Dari “tag sembarang” → **semantik** (`header`, `main`, `section`, `footer`).

---

## 2. Ringkasan konsep

**Hari ini:** dari skeleton P01 → halaman dengan **makna struktural** — bukan `<div>` sembarang.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Semantik** | Tag menyatakan **peran** konten, bukan hanya tampilan |
| `<header>` | Pengantar halaman / branding — logo, judul situs |
| `<nav>` | Navigasi — link ke bagian/halaman lain |
| `<main>` | Konten **utama** — satu per halaman; bukan sidebar/footer |
| `<section>` | Bagian tematik dengan judul (`h2`/`h3`) |
| `<footer>` | Penutup — kontak, tahun, credit |
| **Heading hierarchy** | Satu `h1` → `h2` untuk section → `h3` sub-bagian; jangan loncat `h1`→`h4` |
| `<div>` vs semantik | `<div>` = wadah generik; semantik = mesin & screen reader paham |

**Experience screen reader (5–15 menit):** baca halaman div-soup vs semantik — siswa tutup mata, dengar urutan.

**Trap:** "div soup sama saja kan?" — tampilan mirip, **makna** beda.

**Prasyarat P01:** siswa punya skeleton h1/p/ul — hari ini **organisasi** halaman Profil Kegiatan MA.


---

## 3. Materi praktik

### Transformasi

**Dari:** Tag sembarang / div soup  
**Ke:** Semantik — struktur membantu **manusia & mesin** paham

### Struktur target — Profil Kegiatan MA

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Profil Kegiatan MA</title>
</head>
<body>
  <header>
    <h1>Madrasah Aliyah — Kegiatan Siswa</h1>
    <p>Informasi ekstrakurikuler dan organisasi siswa.</p>
  </header>

  <nav>
    <a href="#pramuka">Pramuka</a> |
    <a href="#pmr">PMR</a> |
    <a href="#hadroh">Hadroh</a>
  </nav>

  <main>
    <section id="pramuka">
      <h2>Pramuka</h2>
      <p>Latihan kepemimpinan dan alam setiap Jumat sore.</p>
    </section>
    <section id="pmr">
      <h2>PMR</h2>
      <p>Palang Merah Remaja — pertolongan pertama Sabtu pagi.</p>
    </section>
    <section id="hadroh">
      <h2>Hadroh</h2>
      <p>Seni rebana dan vokal islami Senin sore.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 MA — Kontak: osis@ma.sch.id</p>
  </footer>
</body>
</html>
```

- `id` pada section : anchor untuk nav (CSS/JS nanti)
- Satu `<main>` — konten inti; header/nav/footer di luar main
- `h2` per section — hierarchy di bawah satu `h1`

### Validasi peer (70–85 menit)

Siswa A tutup layar konten — siswa B tebak section dari **struktur tag saja** (COM).

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Recall | P01 skeleton |
| 5–15 | Experience | Screen reader simulasi — `<div>` vs `<nav>` |
| 15–25 | Trap | div soup “sama saja kan?” |
| 25–35 | Clarify | Struktur = bantu mesin & manusia paham |
| 35–45 | Concept | semantic tags · heading hierarchy h1–h3 |
| 45–70 | Practice | Halaman “Profil Kegiatan MA” semantik |
| 70–85 | Practice 2 | Validasi: 1 teman tebak section dari struktur saja |
| 85–90 | Exit | Mengapa `<main>` penting? |

---

## 5. Lembar kerja / latihan

> Proyeksikan — prediksi struktur & makna, jangan copy.

### Snippet A — div soup

```html
<div class="top">
  <div class="title">Kegiatan MA</div>
</div>
<div class="content">
  <div class="box">Pramuka</div>
  <div class="box">PMR</div>
</div>
```

| Pertanyaan | Kunci |
|------------|-------|
| Screen reader tahu "judul utama"? | Tidak jelas — bukan h1 |
| Refactor semantik? | header + h1, main + section + h2 |

### Snippet B — main ganda (bug)

```html
<main>
  <h1>Halaman A</h1>
</main>
<main>
  <h1>Halaman B</h1>
</main>
```

| Pertanyaan | Kunci |
|------------|-------|
| Valid HTML semantik? | Tidak ideal — satu main per halaman |
| Perbaikan? | Gabung atau pisah jadi 2 halaman |

### Snippet C — heading loncat

```html
<h1>Profil MA</h1>
<h4>Pramuka</h4>
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah accessibility? | Loncat level — outline kacau |
| Perbaikan? | Ganti h4 → h2 |

---

## 6. Exit ticket

1. Mengapa `<main>` penting?
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
