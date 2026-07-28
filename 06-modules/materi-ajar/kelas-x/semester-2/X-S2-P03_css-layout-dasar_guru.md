# Materi Guru Lengkap — X-S2-P03

**Handout siswa (bagikan):** [X-S2-P03_css-layout-dasar_siswa.md](./X-S2-P03_css-layout-dasar_siswa.md)

**Modul:** [X-S2-P03_css-layout-dasar.md](../../../kelas-x/semester-2/X-S2-P03_css-layout-dasar.md)

**Materi pendukung sumber:** [X-S2-P03_css-layout-dasar.md](../../../materi-pendukung/kelas-x/semester-2/X-S2-P03_css-layout-dasar.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P03 — CSS Layout Dasar

| Field | Isi |
|-------|-----|
| Kode | X-S2-P03 |
| Unit | X2.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T1 |

## Learning Transformation

Dari “asal cantik” → **aturan presentasi** yang konsisten.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | HTML tanpa CSS — tampilkan “jelek” intentional |
| 5–15 | Experience | Satu paragraf 200 kata tanpa spacing — baca? |
| 15–25 | Trap | Font warna-warni ≠ desain |
| 25–35 | Clarify | CSS = aturan, bukan dekorasi random |
| 35–45 | Concept | selector · color · font · margin · padding |
| 45–70 | Practice | Stylesheet eksternal `style.css` — typography readable |
| 70–85 | Practice 2 | Box model demo (padding vs margin) |
| 85–90 | Exit | 1 aturan CSS + dampaknya |

---

## Formatif

**TEC**, **OBS**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P03 CSS Layout Dasar

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P03 |
| Modul pertemuan | [X-S2-P03_css-layout-dasar.md](../../../kelas-x/semester-2/X-S2-P03_css-layout-dasar.md) |
| Unit | X2.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T1 |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — CSS PERTAMA** (live di `<style>` block) |

---

## Pengetahuan Guru

**HTML P02 sudah terstruktur — tampilan masih "browser default" (sengaja jelek).** CSS = **aturan presentasi** konsisten.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **CSS** | Cascading Style Sheets — aturan tampilan terpisah dari struktur HTML |
| **Selector** | Siapa yang distyle: `p`, `h1`, `.kelas`, `#id` |
| **Declaration** | `properti: nilai;` — contoh `color: navy;` |
| **Rule set** | `selector { deklarasi }` |
| `<style>` in head | CSS internal — live coding hari ini; file eksternal opsional akhir jam |
| **Typography** | `font-family`, `font-size`, `line-height` — keterbacaan |
| **Color** | `color` (teks), `background-color` (latar) |
| **Box model** | `margin` (luar), `padding` (dalam), `border` — ruang around content |
| **Cascade** | Aturan lebih spesifik / later menang — preview P04 |

**Trap:** Font warna-warni acak ≠ desain — CSS = **aturan**, bukan dekorasi random.

**Experience:** paragraf 200 kata tanpa spacing — sulit dibaca → justify margin/padding/line-height.

**Prasyarat P02:** halaman semantik Profil MA — hari ini tambah `<style>` live.

**PENTING:** jangan bagikan `style.css` lengkap — ketik rule demi rule bareng.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Tag semantik P02 — sebut 4?" | header, nav, main, section, footer (4 dari set) |
| "Mengapa `<main>` penting?" | Konten inti — satu fokus halaman |
| "HTML tanpa CSS tampil bagaimana?" | Default browser — serif, link biru, spacing minimal |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik setiap rule CSS live — bukan paste framework/Tailwind |
| **Live coding** | Buka file P02 → tambah `<style>` **baris demi baris** di proyektor |
| **Per baris / scope** | Setiap `{ }` rule — ucapkan selector + properti scope-nya |
| **Recall** | Tampilkan HTML tanpa CSS dulu — intentional "jelek" |
| **Membaca kode** | Snippet CSS proyeksi — prediksi tampilan sebelum refresh |
| **No starter file** | Jangan kirim CSS siap — siswa ikut ketik di `<style>` sendiri |

---

## Materi Inti

### Transformasi

**Dari:** "Asal cantik" / warna random  
**Ke:** Aturan presentasi **konsisten & terbaca**

### Syntax inti

```css
selector {
  properti: nilai;
}
```

### Selector dasar hari ini

| Selector | Target |
|----------|--------|
| `body` | Seluruh halaman |
| `h1`, `h2`, `p` | Elemen by tag |
| `main section` | Descendant — section di dalam main |
| `.nav-link` | Class (tambah class di HTML live) |

### Typography readable (target)

```css
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #222;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
}
```

### Box model demo

```css
section {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
}
```

- **Padding** = ruang dalam border
- **Margin** = ruang antar section
- Demo DevTools box model (opsional 70–85 menit)

### External stylesheet (opsional menit 70+)

- Buat `style.css` — pindah isi `<style>` ke file
- `<link rel="stylesheet" href="style.css">` di head
- Jelaskan: separation of concerns — HTML struktur, CSS tampilan

---

## Alur Live Coding

> File HTML P02 siswa sudah ada. Tambah `<style>` **live** — jangan file CSS lengkap dari guru.

### Persiapan

- `index.html` semantik P02 terbuka
- Live Server refresh siap
- **Tidak boleh:** Bootstrap link, template CSS WA

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening 0–35 menit]
Buka halaman P02 tanpa CSS — baca paragraf panjang
Trap: "warna-warni ≠ desain"
Recall semantik P02

[LANGKAH 1 — Buka style block]
Di <head>, setelah title:
Ketik: <style>
Ucapkan: "Style block = CSS internal. Scope = seluruh halaman ini."
Tanya: "Kenapa di head, bukan di body?"
Scope: isi <style> ... </style> = aturan CSS, bukan teks tampil.

[LANGKAH 2 — Body typography]
Ketik:
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #222;
}
Ucapkan: "Font sans-serif lebih enak baca layar. line-height = jarak antar baris."
Refresh browser — tanya: "Apa yang berubah?"
Scope: body rule mempengaruhi semua teks kecuali override.

[LANGKAH 3 — Max-width & center]
Tambah ke body rule:
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
Ucapkan: "max-width = tidak terlalu lebar di monitor besar. margin auto = tengah."
Tanya: "Kenapa baca di HP/lebar penuh bisa lelah?"

[LANGKAH 4 — Heading]
Ketik:
h1 {
  color: #1a365d;
  margin-bottom: 0.5rem;
}
h2 {
  color: #2c5282;
  margin-top: 1.5rem;
}
Ucapkan: "Selector element — h1 beda rule dari h2."
Tanya: "Cascade: kalau h2 punya color, p di section ikut?"

[LANGKAH 5 — Section box model]
Ketik:
main section {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
Ucapkan: "main section = descendant selector — hanya section di main."
Demo: padding vs margin — ubah satu nilai, refresh
Tanya: "Border di dalam atau luar padding?"

[LANGKAH 6 — Nav links]
Tambah class di HTML live: class="nav-link" pada <a>
Ketik:
.nav-link {
  color: #2b6cb0;
  text-decoration: none;
  margin-right: 0.5rem;
}
Ucapkan: "Titik = class selector. HTML + CSS bekerja berpasangan."
Scope: hanya elemen dengan class nav-link.

[LANGKAH 7 — Box model challenge 70–85 menit]
Siswa ubah padding section satu kegiatan — lihat perbedaan
Opsional: pisah ke style.css + link

[LANGKAH 8 — Exit 85–90]
Exit: 1 aturan CSS + dampaknya (mis. line-height → baca nyaman)
```

---

## Latihan Membaca Kode

> Proyeksikan — prediksi tampilan, jangan copy.

### Snippet A — Selector element

```html
<p>Teks A</p>
<p>Teks B</p>
<style>
  p { color: red; }
</style>
```

| Pertanyaan | Kunci |
|------------|-------|
| Warna kedua paragraf? | Merah — selector `p` semua p |
| Ubah hanya B? | Class/id di HTML + selector spesifik |

### Snippet B — Padding vs margin

```css
.box {
  padding: 20px;
  margin: 20px;
  background: lightblue;
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Ruang biru vs ruang luar? | Padding = dalam background; margin = luar kotak |
| Background margin? | Tidak — margin transparan antar elemen |

### Snippet C — Typo property

```css
h1 {
  colour: blue;
}
```

| Pertanyaan | Kunci |
|------------|-------|
| h1 berubah? | Tidak — `colour` invalid; harus `color` |
| Debug? | DevTools → crossed-out rule |

---

## Praktik Mandiri Siswa

1. Style halaman P02 sendiri — **min 5 rule** berbeda (body, h1, h2, section, nav)
2. Wajib include: `line-height`, `padding` atau `margin` pada section
3. **Variasi warna** — palet MA sekolah (bukan copy hex guru)
4. Catat: sebelum/sesudah screenshot — OBS capability
5. **Tidak boleh:** paste CSS framework

**Extension:** buat `style.css` terpisah + `<link>` — jelaskan ke teman 1 keuntungan file terpisah.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| CSS di body sebagai teks tampil | `<style>` harus di head |
| Lupa `;` di akhir deklarasi | Rule berikutnya bisa rusak |
| Inline style everywhere (`style=""`) | Fokus rule block dulu — hierarki P04 |
| Warna kontras rendah (kuning muda on putih) | Tes baca dari belakang kelas |
| Copy 100 baris template | Max ~15–20 baris live dulu |
| Guru kirim style.css lengkap | Ketik bareng di `<style>` |

---

## Rujukan

- Modul: [X-S2-P03](../../../kelas-x/semester-2/X-S2-P03_css-layout-dasar.md)
- Sebelum: [P02 HTML Semantik](./X-S2-P02_html-semantik-ma.md)
- Lanjut: [P04 CSS Hierarki](./X-S2-P04_css-hierarki.md)
- CX-T1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] CSS ditambah live di `<style>` — bukan distribusi file CSS
- [ ] TTS per selector & rule block
- [ ] Demo padding vs margin
- [ ] Typography readable (line-height, max-width)
- [ ] Latihan baca snippet CSS
- [ ] Recall semantik P02
- [ ] Exit: 1 aturan + dampak

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
