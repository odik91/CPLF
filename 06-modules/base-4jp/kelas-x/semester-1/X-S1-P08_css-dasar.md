# X-S1-P08 — CSS Dasar (presentasi vs struktur)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P08 |
| Basis | **4JP** · Pertemuan **8/34** |
| Unit | X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · lanjut P07 (struktur tetap; tampilan baru) |

## Learning Transformation

Dari “biar bagus = ubah-ubah HTML / inline sembarangan” → “**CSS** mengatur **presentasi**; HTML tetap **struktur** — jangan rusak semantik demi warna.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: CSS = presentasi; cara taut `link` ke file `.css`; properti dasar (warna, ukuran huruf, jarak) |
| **C2** | Memahami | Menjelaskan beda struktur (HTML) vs tampilan (CSS); kenapa jangan “bongkar semantik” demi gaya |
| **C3** | Menerapkan | Membuat `style.css` dan menata halaman profil/company (warna teks/latar, font-size, margin/padding dasar) |
| **C4** | Menganalisis | Membandingkan sebelum/sesudah; menemukan properti yang membuat teks sulit dibaca |
| **C5** | Mengevaluasi | Mencocokkan hasil ke kriteria penerimaan keterbacaan (bukan “keren”) |
| **C6** | Mencipta | Menyusun aturan CSS milik sendiri untuk halaman S1 (bukan salin tema penuh dari AI tanpa paham) |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Layout flex/grid → **P09**

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P07 (1 siswa: apa itu semantik?) | Papan: *Struktur ≠ presentasi* |
| 10–30 | **Scaffold teori** | C2 | I do: HTML sama, CSS beda (2 tema) · We do: tebak file mana yang diubah | |
| 30–50 | **Experience** | C2–C3 | Siswa ubah 1 properti live (warna `h1`) — lihat efek | |
| 50–65 | **Trap + Q** | C4 | Trap: “CSS tidak nyambung” / ubah HTML jadi `div` demi gaya / inline everywhere | |
| 65–85 | **Clarify + Concept** | C2 | Selector dasar · properti warna/font/spacing · file terpisah | |
| 85–95 | **Practice mini** | C3 | Tulis 3 aturan CSS di kertas dari spek tampilan | |
| 95–105 | Transisi | — | Siap lab · buka HTML P07 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: buat `style.css` + `<link>` · style `body`/`h1`/`section` | |
| 120–165 | **Practice** | C3–C6 | Style halaman S1 · peer cek keterbacaan · jangan rusak tag semantik | |
| 165–180 | Reflect + Exit | C5 | Exit ticket · preview P09 (jarak & tata letak) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P07 | Kerangka semantik = “tulang” |
| **P08** | CSS = “baju” — tanpa ganti tulang |
| P09 | Layout & keterbacaan lebih dalam |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Flexbox/Grid penuh / animasi / framework | Warna, huruf, jarak dasar, file CSS terpisah |
| Mengganti `header`/`section` jadi `div` demi CSS | Selector menarget tag semantik yang sudah ada |
| “Tema AI cantik” tanpa paham properti | Sedikit aturan yang bisa dijelaskan |

**Adaptasi ketat:** jangan potong Trap “rusak semantik” atau Practice — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **CSS** (*Cascading Style Sheets*) | Lembar gaya — mengatur **tampilan** halaman |
| **Presentasi** | Warna, ukuran huruf, jarak, latar — “kelihatan seperti apa” |
| **Struktur** | HTML semantik — “bagian ini perannya apa” (P07) |
| **Selector** | Penunjuk elemen yang akan digaya (contoh: `h1`, `p`, `section`) |
| **Properti & nilai** | Contoh: `color: …;` · `font-size: …;` · `margin` / `padding` |
| **File CSS terpisah** | `style.css` ditaut lewat `<link rel="stylesheet" href="style.css">` |

### Contoh minimal (model)

```html
<link rel="stylesheet" href="style.css" />
```

```css
body {
  font-family: Georgia, serif;
  line-height: 1.5;
  color: #1a1a1a;
  background: #f7f4ef;
  margin: 0;
  padding: 1rem;
}

h1 {
  color: #0b3d2e;
  font-size: 1.8rem;
}

section {
  margin-bottom: 1.5rem;
}
```

---

## Cognitive Trap

**Asumsi:** Biar bagus = ubah HTML seenaknya / tempel CSS panjang tanpa paham.  
**Aman:** Puji keberanian mencoba gaya; challenge hanya pada **merusak semantik** atau gaya yang membuat teks tidak terbaca.

---
 
## Guiding Questions

1. Yang diubah tadi: **struktur** atau **presentasi**?  
2. Apakah `h1`/`section` masih ada setelah distyle?  
3. Teks masih terbaca (kontras & ukuran) menurut kriteria penerimaan?

---

## Kriteria penerimaan tampilan (contoh)

- [ ] Ada file `style.css` terpisah + taut `link` benar  
- [ ] Struktur semantik P07 **tetap** (bukan diganti semua `div`)  
- [ ] Warna teks dan latar cukup kontras (terbaca)  
- [ ] `h1` terlihat sebagai judul utama (ukuran/warna beda dari paragraf)  
- [ ] Siswa bisa menjelaskan **3 properti** yang dipakai (nama + fungsi kasar)  

---

## Exit Ticket

1. Satu kalimat: beda HTML vs CSS  
2. Tiga properti yang kupakai hari ini + fungsinya  
3. Satu godaan yang kutolak (mis. bongkar jadi `div` / CSS AI tanpa baca)  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** keterbacaan · **Penalaran** (kenapa properti itu).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Bawa HTML P07 — jangan mulai dari nol tanpa struktur.  
- Tolak request flex/grid “biar kek template” → parkir P09.  
- AI boleh bantu setelah siswa punya 3 aturan sendiri (aturan P05).  
