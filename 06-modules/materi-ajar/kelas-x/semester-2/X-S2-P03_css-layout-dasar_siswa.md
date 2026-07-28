# Handout Siswa — X-S2-P03

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P03_css-layout-dasar.md](../../../kelas-x/semester-2/X-S2-P03_css-layout-dasar.md)

---

## 1. Tujuan pembelajaran

Dari “asal cantik” → **aturan presentasi** yang konsisten.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 1 aturan CSS + dampaknya
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
