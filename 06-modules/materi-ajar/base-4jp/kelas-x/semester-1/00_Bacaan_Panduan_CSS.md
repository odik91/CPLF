# Bacaan Skill Pendukung — CSS untuk Siswa

| Field | Isi |
|-------|-----|
| Jenis | **Skill pendukung** (luar jam pelajaran · bukan modul pertemuan) |
| Basis | **4JP** · Kelas X · Semester 1 |
| Kapan dibagikan | **Setelah skill HTML / P07** · **sebaiknya sebelum atau saat P08** |
| Prasyarat | Sudah kenal boilerplate + semantik HTML ([panduan HTML](./00_Bacaan_Panduan_HTML.md)) |
| Cara pakai | Baca penjelasan → buka pasangan `.html` + `.css` → copy-paste **atau** ketik ulang → refresh browser |
| Nada | Jelas, praktis · istilah ditulis lengkap |

> Di pertemuan CPLF, CSS akan **dijelaskan lagi dan dipraktikkan ulang** (P08 dasar · P09 layout/keterbacaan).  
> Bacaan ini supaya kamu **tidak panik** saat warna/font muncul, dan tidak merusak HTML semantik demi “keren.”

**Folder contoh:** [skill-css/](./skill-css/) · mulai dari [skill-css/index.html](./skill-css/index.html)

---

## Setup proyek (lakukan sekali / lanjut dari HTML)

Kalau sudah punya folder dari skill HTML, **tambahkan** `skill-css/`. Jangan campur aduk dengan `project/` milikmu.

### Langkah

1. Pakai folder yang sama, misalnya:
   ```text
   Documents/CPLF-X-S1/
   ├── skill-html/     ← sudah ada
   ├── skill-css/      ← salinan contoh CSS (baru)
   └── project/        ← halaman milikmu (+ style.css nanti)
   ```
2. **Salin** seluruh isi folder materi `skill-css/` ke `CPLF-X-S1/skill-css/`.
3. Buka folder `skill-css/` di editor.
4. Buka [skill-css/index.html](./skill-css/index.html) di browser.
5. Tiap latihan = **satu `.html` + satu `.css` dengan nama sama** (mis. `03_tipografi.html` + `03_tipografi.css`). Keduanya harus **satu folder**.
6. Di `project/`: buat `style.css` dan tautkan dari `index.html` (pola [01_taut](./skill-css/01_taut.html)).

### Cek setup berhasil

- [ ] `skill-css/index.html` terbuka dan daftar 01–07 terlihat  
- [ ] Buka `01_taut.html` — teks sudah bergaya (bukan halaman polos)  
- [ ] Kalau polos: cek nama file CSS & path di `<link>`  

**Trap setup:** CSS “tidak jalan” sering karena typo path (`styl.css`) atau file CSS tidak disimpan di folder yang sama.

---

## Rujukan file latihan

Mulai di sini: **[skill-css/index.html](./skill-css/index.html)**

| No | HTML | CSS | Kelompok |
|----|------|-----|----------|
| 01 | [01_taut.html](./skill-css/01_taut.html) | [01_taut.css](./skill-css/01_taut.css) | Taut file CSS |
| 02 | [02_selector.html](./skill-css/02_selector.html) | [02_selector.css](./skill-css/02_selector.css) | Basis selector |
| 03 | [03_tipografi.html](./skill-css/03_tipografi.html) | [03_tipografi.css](./skill-css/03_tipografi.css) | Tipografi |
| 04 | [04_warna.html](./skill-css/04_warna.html) | [04_warna.css](./skill-css/04_warna.css) | Warna & latar |
| 05 | [05_spacing.html](./skill-css/05_spacing.html) | [05_spacing.css](./skill-css/05_spacing.css) | Jarak (margin/padding) |
| 06 | [06_layout.html](./skill-css/06_layout.html) | [06_layout.css](./skill-css/06_layout.css) | Layout keterbacaan |
| 07 | [07_flex.html](./skill-css/07_flex.html) | [07_flex.css](./skill-css/07_flex.css) | Flex ringan (nav) |
| — | [skill-css/README.md](./skill-css/README.md) | — | Ringkas folder |

---

## Mengapa bacaan ini ada?

HTML mengatur **apa peran** bagian halaman. CSS mengatur **kelihatan seperti apa**.

Tanpa skill CSS di luar jam, di P08–P09 siswa sering:
- menempel tema AI 200 baris tanpa paham,
- mengganti `section` jadi `div` “biar gampang style”,
- atau bilang “CSS tidak jalan” padahal path salah.

```text
LUAR JAM: kenali properti + coba contoh
   ↓
DI KELAS (P08–P09): pakai lagi untuk keterbacaan menurut spek
```

---

## Cara latihan

1. Buka pasangan HTML+CSS di editor.  
2. Copy-paste **atau** ketik ulang.  
3. Ubah **satu properti** → simpan → refresh — amati efeknya.  
4. Bisa jelaskan 3 properti yang kamu ubah? Kalau belum, ulangi.

**Urutan disarankan**

```text
01 taut → 02 selector → 03 tipografi → 04 warna
→ 05 spacing → 06 layout → 07 flex
```

---

## 0. Ringkas: apa itu CSS?

**CSS** (*Cascading Style Sheets*) = lembar gaya untuk **presentasi** (tampilan).

| Ide | Arti |
|-----|------|
| Aturan | `selector { properti: nilai; }` |
| Selector | “Yang mana yang digaya?” |
| Properti | “Gaya apa?” (`color`, `font-size`, …) |
| File terpisah | `style.css` ditaut lewat `<link>` |

**Tiga peran**

| Bahasa | Peran |
|--------|--------|
| HTML | Struktur & makna |
| **CSS** | Tampilan |
| JavaScript | Perilaku |

**Trap:** merusak semantik HTML demi gaya · tempel CSS panjang tanpa bisa jelaskan.

---

## 1. Taut CSS (file terpisah)

Seperti boilerplate HTML: mulai dari cara **menghubungkan** CSS.

Di `<head>`:

```html
<link rel="stylesheet" href="01_taut.css" />
```

| Bagian | Fungsi |
|--------|--------|
| `rel="stylesheet"` | Ini lembar gaya |
| `href="…"` | Path ke file `.css` — harus cocok |

**File contoh:** [01_taut.html](./skill-css/01_taut.html) + [01_taut.css](./skill-css/01_taut.css)

**Latihan:** ubah `color` di CSS → refresh. Kalau tidak berubah, cek `href` dan nama file.

---

## 2. Basis selector (grup sendiri)

> **Selector** = penunjuk elemen yang akan digaya. Kuasai ini sebelum menimbun properti.

| Selector | Contoh | Menarget |
|----------|--------|----------|
| Elemen (tag) | `h1 { … }` | Semua `h1` |
| Class | `.sorot { … }` | Elemen `class="sorot"` |
| Id | `#judul { … }` | Elemen `id="judul"` (unik) |

```css
h1 {
  color: #0b3d2e;
}

.sorot {
  background: #fff3bf;
}

#judul {
  font-size: 1.8rem;
}
```

**File contoh:** [02_selector.html](./skill-css/02_selector.html) + [02_selector.css](./skill-css/02_selector.css)

**Latihan:** tambah class baru di HTML + aturan di CSS. Jangan bongkar tag semantik jadi `div` hanya demi selector — tag semantik **bisa** diselect (`section`, `nav`, …).

---

## 3. Tipografi

| Properti | Fungsi |
|----------|--------|
| `font-family` | Jenis huruf |
| `font-size` | Ukuran |
| `font-weight` | Ketebalan (`normal`, `bold`, …) |
| `line-height` | Jarak antar baris (kenyamanan baca) |
| `text-align` | Rata kiri/tengah/kanan |

**File contoh:** [03_tipografi.html](./skill-css/03_tipografi.html) + [03_tipografi.css](./skill-css/03_tipografi.css)

**Catatan:** hierarki judul (`h1`/`h2`) tetap dari HTML; CSS hanya memperjelas bedanya secara visual (P09).

---

## 4. Warna & latar

| Properti | Fungsi |
|----------|--------|
| `color` | Warna teks |
| `background-color` | Warna latar |
| `background` | Latar (singkat; di S1 cukup warna dulu) |

Nilai umum: nama (`teal`), hex (`#0b3d2e`), `rgb(…)`.

**File contoh:** [04_warna.html](./skill-css/04_warna.html) + [04_warna.css](./skill-css/04_warna.css)

**Trap keterbacaan:** teks abu muda di latar putih / kuning di putih — “estetik” tapi sulit dibaca. Hakimnya **keterbacaan**, bukan “keren.”

---

## 5. Spacing (jarak)

| Properti | Fungsi |
|----------|--------|
| `margin` | Jarak **luar** elemen |
| `padding` | Jarak **dalam** (isi vs tepi kotak) |
| `margin-bottom` / `padding` sisi | Kontrol lebih spesifik |

Intuisi: `margin` = jarak antar kotak · `padding` = napas di dalam kotak.

**File contoh:** [05_spacing.html](./skill-css/05_spacing.html) + [05_spacing.css](./skill-css/05_spacing.css)

**Latihan:** naikkan `margin-bottom` pada `section` — halaman “bernapas” (jembatan P09).

---

## 6. Layout keterbacaan

Bukan CSS Grid penuh. Fokus S1: **lebar nyaman + posisi tengah**.

| Properti / pola | Fungsi |
|-----------------|--------|
| `max-width` | Batas lebar konten (baris tidak terlalu panjang) |
| `margin: 0 auto` | Tengah secara horizontal (pada blok ber-lebar) |
| `width` | Lebar (hati-hati; sering `max-width` lebih aman) |

**File contoh:** [06_layout.html](./skill-css/06_layout.html) + [06_layout.css](./skill-css/06_layout.css)

Diperdalam di **P09**. Grid / template landing → belum.

---

## 7. Flex ringan (satu kasus)

| Properti | Fungsi |
|----------|--------|
| `display: flex` | Anak dalam wadah sejajar |
| `gap` | Jarak antar anak |
| `flex-wrap` | Boleh pindah baris jika sempit |

Kasus S1 yang dianjurkan: **menu `nav`**.

**File contoh:** [07_flex.html](./skill-css/07_flex.html) + [07_flex.css](./skill-css/07_flex.css)

**Trap:** tempel flex/grid 60 baris dari AI tanpa bisa jelaskan. Satu kasus yang paham > template buta.

---

## 8. Peta cepat

| Butuh | Baca | File |
|-------|------|------|
| CSS tidak nyambung | §1 | `01_taut` |
| Menarget elemen | §2 | `02_selector` |
| Huruf & keterbacaan baris | §3 | `03_tipografi` |
| Warna teks/latar | §4 | `04_warna` |
| Sesak / nempel | §5 | `05_spacing` |
| Teks melebar penuh layar | §6 | `06_layout` |
| Menu sejajar | §7 | `07_flex` |

---

## 9. Checklist skill (luar jam)

- [ ] Tahu menautkan `.css` dengan `<link>`  
- [ ] Bisa bedakan selector elemen / class / id  
- [ ] Ubah warna + font + jarak dan bisa jelaskan  
- [ ] Pakai `max-width` agar baris terbaca  
- [ ] Flex nav sederhana bisa dijelaskan  
- [ ] Tidak membongkar semantik HTML demi gaya  
- [ ] Siap P08–P09 tanpa paste tema AI buta  

---

## 10. Hubungan ke pertemuan

| Materi kelas | Yang diulang / diperdalam |
|--------------|---------------------------|
| P07 | HTML semantik = tulang — jangan diganti demi CSS |
| P08 | Presentasi vs struktur · file CSS · warna/font/jarak |
| P09 | Spacing, hierarki visual, max-width, flex 1 kasus |
| P10+ | Style multi-section & form — tetap hormati struktur |
| P13 | JS mengubah teks/perilaku — CSS tetap urusan tampilan |

---

## Satu line

> **HTML menegakkan makna.  
> CSS menegakkan tampilan — tanpa mengkhianati makna.  
> Sedikit aturan yang kau pahami > tema pinjaman yang kau tidak bisa jelaskan.**

— **Skill pendukung CSS · CPLF Base 4JP**
