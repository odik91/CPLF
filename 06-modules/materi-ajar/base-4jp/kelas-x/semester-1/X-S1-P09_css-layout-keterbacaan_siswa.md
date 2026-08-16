# Handout Siswa — X-S1-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **9/34**

**Modul:** [X-S1-P09_css-layout-keterbacaan.md](../../../base-4jp/kelas-x/semester-1/X-S1-P09_css-layout-keterbacaan.md)

**Bacaan:** [X-S1-P09_bacaan-mimi-robi.md](./X-S1-P09_bacaan-mimi-robi.md)

**Skill CSS (luar jam · lanjut 05–07):** [00_Bacaan_Panduan_CSS.md](./00_Bacaan_Panduan_CSS.md) · [skill-css/](./skill-css/)

---

## 1. Tujuan

Dari “sudah ada warna = sudah bagus” → “**keterbacaan** = hierarki visual + jarak + lebar yang masuk akal.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut hierarki visual; margin/padding; max-width; flex sederhana |
| **C2** | Memahami | Menjelaskan kenapa jarak & lebar memengaruhi keterbacaan |
| **C3** | Menerapkan | Memperbaiki spacing, lebar konten, hierarki, flex ringan |
| **C4** | Menganalisis | Menemukan penyebab sesak / melebar / judul lemah |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria keterbacaan layout |
| **C6** | Mencipta | Menyusun 3–5 aturan perbaikan yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Multi-section → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Keterbacaan** | Seberapa mudah halaman dipahami secara visual |
| **Hierarki visual** | Judul lebih menonjol dari subjudul & paragraf |
| **Spacing** | Jarak — `margin` (luar) · `padding` (dalam) |
| **max-width** | Batas lebar konten agar baris tidak terlalu panjang |
| **Flexbox** (ringan) | `display: flex` — anak sejajar (contoh: tautan di `nav`) |

### Trap hari ini

- Tempel flex/grid template tanpa bisa jelaskan  
- `position: absolute` sembarangan “biar rapi”  
- Semua teks diperbesar sama rata “biar jelas”  

---

## 3. Alur (180 menit)

```text
Orientation → Sesak vs bernapas
  → Ubah jarak / lebar
  → Trap template
  → Concept hierarki + spacing + flex 1 kasus
  → Audit kertas → Perbaiki halamanmu → peer → Exit
```

---

## 4. Lembar audit (kertas dulu)

| Masalah yang kulihat | Properti yang kurencana | Kenapa (1 kalimat) |
|----------------------|-------------------------|---------------------|
| | | |
| | | |
| | | |

---

## 5. Kriteria penerimaan layout

- [ ] Jarak antar bagian lebih “bernapas”  
- [ ] Konten punya batas lebar masuk akal  
- [ ] Hierarki `h1` / `h2` / `p` terbaca  
- [ ] Semantik tetap utuh  
- [ ] (Opsional kuat) Flex nav/baris bisa dijelaskan  
- [ ] Bisa menjelaskan **3 aturan** yang diubah  

---

## 6. Kerangka CSS (lanjutan P08)

```css
.page {
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

section {
  margin-bottom: 2rem;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
}
```

**Belum:** CSS Grid penuh · framework · animasi · absolute “acak”.

---

## 7. Exit ticket

1. Hierarki visual = …  
2. Tiga properti layout + fungsi: …  
3. Godaan yang kutolak: …

## 8. Preview P10

Beberapa section + cara loncat antar bagian — masih halaman static.

---

_Layout untuk pembaca. Bukan untuk memamerkan template._
