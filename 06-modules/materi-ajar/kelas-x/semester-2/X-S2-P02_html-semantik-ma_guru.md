# Materi Guru Lengkap — X-S2-P02
**Modul:** [X-S2-P02_html-semantik-ma.md](../../kelas-x/semester-2/X-S2-P02_html-semantik-ma.md)
**Materi pendukung sumber:** [X-S2-P02_html-semantik-ma.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-2/X-S2-P02_html-semantik-ma.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P02 — HTML Semantik & Konten MA

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 |
| Unit | X2.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T1, CX-K1 |

## Learning Transformation

Dari “tag sembarang” → **semantik** (`header`, `main`, `section`, `footer`).

---

## Timeline (90 menit)

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

## Formatif

**TEC**, **COM**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P02 HTML Semantik & Konten MA

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 |
| Modul pertemuan | [X-S2-P02_html-semantik-ma.md](../../../kelas-x/semester-2/X-S2-P02_html-semantik-ma.md) |
| Unit | X2.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T1, CX-K1 |
| Formatif | TEC, COM |
| Ada live code? | **Ya — HTML semantik live** (refactor/expand dari P01) |

---

## Pengetahuan Guru

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

**PENTING:** jangan bagikan HTML semantik lengkap — bangun live atau refactor file siswa sendiri.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "3 tag P01 + fungsinya?" | (h1, p, ul/li — variasi OK) |
| "Apa scope `<head>` vs `<body>`?" | Head = meta; body = konten tampil |
| "Kenapa list pakai `<ul>` bukan enter?" | Struktur daftar — browser & mesin paham item |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik live; siswa refactor **file mereka** — bukan paste halaman guru |
| **Live coding** | Mulai dari skeleton P01 siswa **atau** file kosong jika ada yang absent — ≥70% dari guru |
| **Per baris / scope** | Setiap tag semantik — ucapkan: "`<main>` scope = isi utama halaman ini saja" |
| **Recall** | Tanya 3 tag P01 sebelum `<header>` |
| **Membaca kode** | Snippet div-soup vs semantik — prediksi urutan screen reader |
| **No starter file** | Jangan kirim "Profil MA.html" siap — bangun/refactor bareng |

---

## Materi Inti

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

## Alur Live Coding

> Refactor skeleton P01 **live** di proyektor. Siswa ikut di file sendiri.

### Persiapan

- File `index.html` dari P01 (siswa) — atau kosong untuk catch-up singkat
- **Tidak boleh ada:** template semantik lengkap dari guru/WA

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Recall & experience 0–35 menit]
Recall 3 tag P01
Demo screen reader / baca struktural div vs semantik
Trap: "sama tampilannya" → clarify makna

[LANGKAH 1 — Header scope]
Bungkus h1 + p pengantar:
Ketik: <header>
Pindahkan h1 dan paragraf intro ke dalam header
Ketik: </header>
Ucapkan: "Header = identitas halaman — bukan konten utama berulang."
Tanya: "Kenapa h1 di header, bukan di main?"

[LANGKAH 2 — Nav]
Setelah </header>:
Ketik: <nav>
Ketik:   <a href="#pramuka">Pramuka</a> |
Ketik:   <a href="#pmr">PMR</a> |
Ketik:   <a href="#hadroh">Hadroh</a>
Ketik: </nav>
Ucapkan: "Nav = jalur pindah section. href #id = anchor ke id nanti."
Tanya: "Tanpa nav — user scroll manual. Apa trade-off?"

[LANGKAH 3 — Main scope]
Ketik: <main>
Ucapkan: "Main = SATU inti halaman. Sidebar/footer tidak masuk sini."
Scope: semua section kegiatan nanti di dalam main.

[LANGKAH 4 — Section pertama]
Ubah list ul menjadi section (atau expand list jadi 3 section):
Ketik:   <section id="pramuka">
Ketik:     <h2>Pramuka</h2>
Ketik:     <p>...</p>
Ketik:   </section>
Ucapkan: "Section = bab tematik. h2 = sub-judul di bawah h1."
Tanya: "Kenapa h2 bukan h1 lagi?"
Scope: id="pramuka" cocok dengan href nav.

[LANGKAH 5 — Section 2 & 3]
Ulangi pola section + h2 + p untuk PMR dan Hadroh
Tanya: "Urutan heading: h1 → h2 → h2. Boleh h1 → h3?"

[LANGKAH 6 — Footer]
Setelah </main>:
Ketik: <footer>
Ketik:   <p>&copy; 2026 MA — Kontak: ...</p>
Ketik: </footer>
Ucapkan: "Footer = info penutup — tidak menggantikan main."
Preview — klik link nav (scroll ke section)

[LANGKAH 7 — Peer validasi 70–85 menit]
Swap: tebak section dari HTML saja
Perbaiki 1 kesalahan hierarchy jika ada

[LANGKAH 8 — Exit 85–90]
Jawab: "Mengapa `<main>` penting?" — satu kalimat
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

1. **Profil Kegiatan MA** lengkap: header, nav (min 3 anchor), main (min 3 section), footer
2. Konten **wajib variasi** — kegiatan MA siswa, bukan copy demo guru
3. **Peer check:** teman tebak isi section dari tag saja
4. **Tidak boleh:** download template portfolio

**Extension:** tambah `<article>` untuk satu berita kegiatan terbaru — jelaskan beda article vs section.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Semua `<div>` — tampilan OK, semantik nol | Demo screen reader / outline view |
| Dua `<h1>` | Satu h1 — section pakai h2 |
| `<main>` berisi footer | Footer di luar main |
| Nav link `#id` tanpa id di section | Klik nav tidak scroll — debug bareng |
| Copy halaman guru 1:1 | Wajib variasi kegiatan & teks |
| Guru kirim HTML semantik lengkap | Refactor live dari P01 siswa |

---

## Rujukan

- Modul: [X-S2-P02](../../../kelas-x/semester-2/X-S2-P02_html-semantik-ma.md)
- Sebelum: [P01 Mengapa Web](./X-S2-P01_mengapa-web-html.md)
- Lanjut: [P03 CSS Layout](./X-S2-P03_css-layout-dasar.md)
- CX-T1, CX-K1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Refactor/live semantik — bukan starter file distribusi
- [ ] TTS per scope header / main / section / footer
- [ ] Heading hierarchy h1 → h2 konsisten
- [ ] Nav anchor jalan ke section id
- [ ] Peer validasi: tebak section dari struktur
- [ ] Recall skeleton P01
- [ ] Exit: mengapa `<main>` penting (1 kalimat)

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
