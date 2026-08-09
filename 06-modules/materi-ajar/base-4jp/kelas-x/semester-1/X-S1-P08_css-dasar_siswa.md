# Handout Siswa — X-S1-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **8/34**

**Modul:** [X-S1-P08_css-dasar.md](../../../base-4jp/kelas-x/semester-1/X-S1-P08_css-dasar.md)

**Bacaan:** [X-S1-P08_bacaan-mimi-robi.md](./X-S1-P08_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “biar bagus = ubah HTML sembarangan” → “**CSS** mengatur **presentasi**; HTML tetap **struktur**.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut CSS = presentasi; taut `link`; properti warna/font/jarak |
| **C2** | Memahami | Menjelaskan beda struktur vs tampilan; jangan rusak semantik demi gaya |
| **C3** | Menerapkan | Membuat `style.css` dan menata halaman S1 |
| **C4** | Menganalisis | Menemukan properti yang merusak keterbacaan |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria keterbacaan (bukan “keren”) |
| **C6** | Mencipta | Menyusun aturan CSS milik sendiri yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Layout (flex/grid) → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **CSS** (*Cascading Style Sheets*) | Lembar gaya untuk **tampilan** |
| **Presentasi** | Warna, huruf, jarak, latar |
| **Struktur** | HTML semantik (P07) — peran bagian |
| **Selector** | Penunjuk elemen (`h1`, `section`, …) |
| **Properti & nilai** | Contoh: `color: #0b3d2e;` |

### Trap hari ini

- Path `link` salah → gaya “tidak jalan”  
- Mengganti `section` jadi `div` “biar gampang CSS” → **dilarang**  
- Tempel CSS panjang tanpa bisa jelaskan 3 properti  

---

## 3. Alur (180 menit)

```text
Orientation → HTML sama, CSS beda
  → Ubah 1 properti
  → Trap path / rusak semantik
  → Concept selector + properti
  → Buat style.css + tautkan
  → Style halamanmu → peer keterbacaan → Exit
```

---

## 4. Taut CSS

Di `<head>` halamanmu:

```html
<link rel="stylesheet" href="style.css" />
```

File `style.css` satu folder dengan HTML (atau sesuaikan path).

---

## 5. Lembar — 3 aturan dulu (kertas)

| Selector | Properti | Nilai | Kenapa (1 kalimat) |
|----------|----------|-------|---------------------|
| | | | |
| | | | |
| | | | |

---

## 6. Kriteria penerimaan tampilan

- [ ] Ada `style.css` + `link` benar  
- [ ] Semantik P07 **tetap**  
- [ ] Teks terbaca (kontras & ukuran)  
- [ ] `h1` jelas beda dari paragraf  
- [ ] Bisa menjelaskan **3 properti** yang dipakai  

---

## 7. Kerangka CSS (mulai dari sini)

```css
body {
  font-family: Georgia, serif;
  line-height: 1.5;
  color: #1a1a1a;
  background: #f7f4ef;
  padding: 1rem;
}

h1 {
  /* ... */
}

section {
  /* ... */
}
```

**Belum:** flexbox, grid, animasi, framework.

---

## 8. Exit ticket

1. Beda HTML vs CSS: …  
2. Tiga properti + fungsi: …  
3. Godaan yang kutolak: …

## 9. Preview P09

Jarak & tata letak agar halaman lebih terbaca — tanpa merusak struktur.

---

_Style milikmu. Jangan salin tema jadi tanpa paham._
