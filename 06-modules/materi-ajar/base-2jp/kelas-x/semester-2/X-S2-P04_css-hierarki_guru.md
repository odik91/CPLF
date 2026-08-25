# Materi Guru Lengkap — X-S2-P04

**Handout siswa (bagikan):** [X-S2-P04_css-hierarki_siswa.md](./X-S2-P04_css-hierarki_siswa.md)

**Modul:** [X-S2-P04_css-hierarki.md](../../../kelas-x/semester-2/X-S2-P04_css-hierarki.md)

**Materi pendukung sumber:** [X-S2-P04_css-hierarki.md](../../../materi-pendukung/kelas-x/semester-2/X-S2-P04_css-hierarki.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P04 — CSS Hierarki & Keterbacaan

| Field | Isi |
|-------|-----|
| Kode | X-S2-P04 |
| Unit | X2.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T1 |

## Learning Transformation

Dari “styling inline acak” → **hierarki visual** (heading, kontras, spacing).

---

## Timeline (90 menit)

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

## Checklist Keterbacaan

- [ ] Heading jelas  
- [ ] Kontras cukup  
- [ ] Spacing konsisten  
- [ ] Mobile-ish (max-width)  

---

## Formatif

**TEC**, **COM**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P04 CSS Hierarki & Keterbacaan

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P04 |
| Modul pertemuan | [X-S2-P04_css-hierarki.md](../../../kelas-x/semester-2/X-S2-P04_css-hierarki.md) |
| Unit | X2.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T1 |
| Formatif | TEC, COM |
| Ada live code? | **Ya — CSS hierarki + flex intro** (live di `<style>`) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "1 aturan CSS P03 + dampaknya?" | (line-height, max-width, dll.) |
| "Bedanya padding vs margin?" | Padding dalam; margin antar elemen |
| "Selector `main section` artinya?" | Section yang **di dalam** main |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Perbaiki CSS live — bukan paste theme Dribbble |
| **Live coding** | Lanjut file P02+P03 — edit `<style>` baris demi baris |
| **Per baris / scope** | Flex container vs flex item — ucapkan scope masing-masing |
| **Recall** | Review 1 kelebihan CSS file siswa (COM positif) |
| **Membaca kode** | 2 layout sama konten — prediksi mana lebih terbaca |
| **No starter file** | Jangan bagikan "versi bagus" halaman — siswa iterasi sendiri |

---

## Materi Inti

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

## Alur Live Coding

> Edit CSS P03 live — fokus perbaikan UX, bukan redesign total.

### Persiapan

- File halaman Profil MA + CSS P03
- Siapkan 2 screenshot "sulit baca" vs "terbaca" untuk experience (5–18 menit)
- **Tidak boleh:** template landing page siap

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Review & experience 0–38 menit]
Pamer 1 kelebihan CSS siswa (30 detik)
Tampilkan 2 layout — tanya: "Mana lebih cepat dipahami?"
Clarify: audience = siswa/wali MA, sering HP

[LANGKAH 1 — Hierarchy heading]
Di <style>, refine h1/h2:
Perbesar perbedaan font-size h1 vs h2
Ketik margin-bottom h1 kecil, h2 margin-top 0
Ucapkan: "Hierarchy = mata scan h1 dulu, h2 bab, p detail."
Tanya: "Kalau h1 dan h2 hampir sama size — masalah apa?"

[LANGKAH 2 — Background & kontras body]
Ubah body:
  background-color: #f7fafc;
  color: #1a202c;
Ucapkan: "Kontras cukup — teks gelap on latar terang soft."
Tanya: "Kuning muda on putih — kenapa gagal?"

[LANGKAH 3 — Spacing scale]
Standarkan section:
  margin-bottom: 1.5rem;
  padding: 1.25rem;
Ucapkan: "Scale konsisten — 1rem, 1.5rem — bukan angka acak."
Scope: semua section main sama ritme

[LANGKAH 4 — Flex nav]
Pada rule nav, ganti/tambah:
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
Ucapkan: "Nav jadi flex container — anak link susun horizontal."
Refresh — link rapi dengan gap
Tanya: "Flex item siapa? Container siapa?"
Scope: display:flex hanya pada nav, bukan seluruh body

[LANGKAH 5 — Footer hierarchy]
Tambah rule footer (font lebih kecil, border-top)
Ucapkan: "Footer visual lebih rendah — ukuran & warna lebih soft."

[LANGKAH 6 — Specificity demo]
Tambah class="highlight" pada satu section di HTML live
Ketik:
.highlight p {
  font-weight: 600;
}
Ucapkan: "Class lebih spesifik dari section p generic — cascade."
Tanya: "Tanpa class — semua p sama. Kapan perlu class?"

[LANGKAH 7 — Peer checklist 70–85 menit]
Checklist 5 poin modul — swap partner, centang & 1 saran
Siswa perbaiki 1 poin dari feedback

[LANGKAH 8 — Exit 85–90]
Exit: 1 perbaikan UX + alasan (mis. flex nav → tap target HP)
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

1. Terapkan **checklist keterbacaan** pada halaman P02+P03:
   - [ ] Heading jelas
   - [ ] Kontras cukup
   - [ ] Spacing konsisten
   - [ ] Mobile-ish (max-width)
   - [ ] Nav flex dengan gap
2. **Peer review** 5 poin — tulis 1 saran spesifik (COM)
3. Implement min **1 perbaikan** dari saran peer
4. **Tidak boleh:** download theme & replace HTML siswa

**Extension:** `flex-direction: column` pada section cards — bandingkan dengan row.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Terlalu banyak font-size berbeda | Scale 3 level: h1, h2, body |
| Flex on body — layout aneh | Flex hanya container yang perlu (nav, baris tombol nanti) |
| !important untuk "menang" | Hindari — ajarkan specificity |
| Cantik tapi teks 10px | Minimum ~16px body di mobile |
| Hapus semantik HTML demi CSS | Struktur P02 tetap — hanya style |
| Guru kirim "versi final" CSS | Iterasi peer — bukan solusi penuh |

---

## Rujukan

- Modul: [X-S2-P04](../../../kelas-x/semester-2/X-S2-P04_css-hierarki.md)
- Sebelum: [P03 CSS Layout](./X-S2-P03_css-layout-dasar.md)
- Lanjut: [P05 JS DOM Klik](./X-S2-P05_js-dom-klik.md)
- EXP spiral: [EXP_02_B Website Bagus](../../../07-experience_library/EXP_02_B_Website_Bagus.md)
- CX-T1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Hierarki CSS live — bukan paste theme
- [ ] TTS flex container vs item
- [ ] Checklist keterbacaan 5 poin — peer review
- [ ] Min 1 perbaikan UX dengan alasan
- [ ] Latihan baca snippet kontras/flex
- [ ] Recall aturan CSS P03
- [ ] Exit: 1 perbaikan + alasan

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
