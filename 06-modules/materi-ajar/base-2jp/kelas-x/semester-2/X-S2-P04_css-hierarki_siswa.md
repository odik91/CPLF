# Handout Siswa — X-S2-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P04_css-hierarki.md](../../../kelas-x/semester-2/X-S2-P04_css-hierarki.md)

---

## 1. Tujuan pembelajaran

Dari “styling inline acak” → **hierarki visual** (heading, kontras, spacing).

---

## 2. Ringkasan konsep

**Halaman sudah punya CSS dasar P03 — hari ini:** hierarki visual, kontras, spacing konsisten, **flexbox ringan** untuk nav/layout.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Visual hierarchy** | Ukuran, berat, warna heading → mata tahu urutan baca |
| **Contrast** | Teks vs background cukup gelap/terang — WCAG sederhana: hindari abu-abu tipis on putih |
| **Spacing scale** | Konsisten: 0.5rem, 1rem, 1.5rem — bukan 7px, 13px, 22px random |
| **Cascade & specificity** | Rule lebih spesifik menang; urutan `<style>` / file matter |
| **Flexbox intro** | `display: flex` pada container — susun anak horizontal/vertical |
| `gap`, `justify-content`, `align-items` | Jarak & posisi item flex |
| **max-width + mobile-ish** | Halaman tidak melebar penuh — audience MA baca di HP |

**Trap:** "Cantik" tapi tidak terbaca = gagal UX — sama EXP requirement: terukur > subjektif.

**Checklist keterbacaan modul:** heading jelas, kontras, spacing, max-width.

**Prasyarat P03:** selector, margin/padding, typography dasar.

---

## 3. Materi praktik

### Transformasi

**Dari:** Styling inline/acak / "cantik" subjektif  
**Ke:** Hierarki visual **terukur** — audience MA baca cepat di HP

### Hierarchy CSS

```css
h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0;
}
p {
  font-size: 1rem;
  margin-top: 0.5rem;
}
```

### Kontras & footer

```css
body {
  background-color: #f7fafc;
  color: #1a202c;
}
footer {
  font-size: 0.875rem;
  color: #4a5568;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}
```

### Flex intro — nav horizontal

```css
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
}
```

- Container = `nav` dengan `display: flex`
- Items = `<a>` anak langsung
- `gap` = jarak antar link tanpa margin manual per item

### Specificity mini

```css
section p { color: #2d3748; }
.highlight p { color: #c53030; }
```

Class `.highlight` pada satu section — menang over `section p`.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Review | P03 file siswa — 1 kelebihan |
| 5–18 | Experience | 2 layout sama konten — satu sulit dibaca |
| 18–28 | Trap | “Cantik” tapi tidak terbaca = gagal UX |
| 28–38 | Clarify | Siapa audience MA? (baca cepat di HP?) |
| 38–48 | Concept | hierarchy · contrast · flex intro (opsional ringan) |
| 48–70 | Practice | Perbaiki halaman P02 dengan CSS hierarki |
| 70–85 | Peer | Checklist keterbacaan 5 poin |
| 85–90 | Exit | 1 perbaikan UX + alasan |

---

## 5. Lembar kerja / latihan

> Proyeksikan — prediksi hierarki & layout.

### Snippet A — Kontras gagal

```css
body {
  color: #ccc;
  background: #fff;
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah UX? | Kontras rendah — sulit dibaca |
| Perbaikan? | Gelapkan color teks (#333+) |

### Snippet B — Flex container

```html
<nav style="display:flex; gap:8px;">
  <a href="#">A</a>
  <a href="#">B</a>
  <a href="#">C</a>
</nav>
```

| Pertanyaan | Kunci |
|------------|-------|
| Layout link? | Horizontal sejajar dengan jarak gap |
| Container flex? | `<nav>` — bukan `<a>` |

### Snippet C — Specificity

```css
p { color: black; }
.intro p { color: blue; }
```

```html
<div class="intro"><p>Teks</p></div>
<p>Luar</p>
```

| Pertanyaan | Kunci |
|------------|-------|
| Warna "Teks"? | Biru — `.intro p` lebih spesifik |
| Warna "Luar"? | Hitam — hanya rule `p` |

---

## 6. Exit ticket

1. 1 perbaikan UX + alasan
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
