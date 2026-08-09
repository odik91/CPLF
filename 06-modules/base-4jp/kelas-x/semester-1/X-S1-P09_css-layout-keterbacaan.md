# X-S1-P09 — CSS Layout & Keterbacaan

| Field | Isi |
|-------|-----|
| Kode | X-S1-P09 |
| Basis | **4JP** · Pertemuan **9/34** |
| Unit | X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · lanjut P08 (warna/font → jarak & tata letak) |

## Learning Transformation

Dari “sudah ada warna = sudah bagus” → “**keterbacaan** = hierarki visual + jarak + lebar baris yang masuk akal — layout melayani mata, bukan template.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: hierarki visual; `margin`/`padding`; `max-width`; `display: flex` sederhana |
| **C2** | Memahami | Menjelaskan kenapa jarak & lebar teks memengaruhi keterbacaan; beda “rapi” vs “penuh dekorasi” |
| **C3** | Menerapkan | Memperbaiki halaman S1: spacing antar bagian, lebar konten, hierarki judul, flex ringan (mis. nav) |
| **C4** | Menganalisis | Membandingkan sebelum/sesudah; menemukan penyebab “sesak / melebar / judul tidak menonjol” |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria keterbacaan layout (bukan “mirip template”) |
| **C6** | Mencipta | Menyusun perbaikan layout milik sendiri yang bisa dijelaskan (3–5 aturan) |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Multi-section + navigasi halaman → **P10** · Grid kompleks / framework → **bukan** hari ini

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P08 (3 properti?) · *Warna ≠ otomatis terbaca* | |
| 10–30 | **Scaffold teori** | C2 | I do: dua versi (sesak vs bernapas) · We do: tebak apa yang beda | |
| 30–50 | **Experience** | C2–C3 | Siswa ubah `margin`/`padding`/`max-width` live — amati | |
| 50–65 | **Trap + Q** | C4 | Trap: flex “biar kek template” tanpa paham · absolute sembarangan · font jumbo semua | |
| 65–85 | **Clarify + Concept** | C2 | Hierarki visual · spacing · lebar baris · flex 1 kasus (nav / baris) | |
| 85–95 | **Practice mini** | C3 | Audit 3 masalah keterbacaan di kertas + rencana properti | |
| 95–105 | Transisi | — | Lab · buka halaman P08 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: `max-width` + jarak section + flex nav singkat | |
| 120–165 | **Practice** | C3–C6 | Perbaiki keterbacaan halaman · peer uji kriteria · jelaskan 3 aturan | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P10 (multi-section) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P08 | Warna, font, CSS terpisah |
| **P09** | Jarak, hierarki, layout ringan untuk keterbacaan |
| P10 | Beberapa section + navigasi static |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| CSS Grid penuh / framework / animasi | Spacing, hierarki, `max-width`, flex **satu kasus** |
| Meniru landing page 12 kolom | Halaman profil/company yang enak dibaca |
| Absolute + float “acak” demi rapi | Alur dokumen tetap alami (atas → bawah) |
| Rusak semantik demi layout | Selector menarget tag yang sudah ada |

**Adaptasi ketat:** jangan potong Trap “template tanpa paham” atau Practice perbaikan — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Keterbacaan** (*readability*) | Seberapa mudah teks & struktur dipahami secara visual |
| **Hierarki visual** | Judul lebih menonjol dari subjudul & paragraf (ukuran, ketebalan, jarak) |
| **Spacing** | Jarak — `margin` (luar elemen) · `padding` (dalam elemen) |
| **Lebar baris / konten** | Teks terlalu lebar → mata lelah; sering dibatasi `max-width` |
| **Flexbox** (ringan) | `display: flex` — menata anak dalam satu baris/kolom untuk kasus sederhana (mis. tautan nav) |

### Contoh minimal (model)

```css
/* Lebar terbaca + tengah */
.page {
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

section {
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.35rem;
  margin-top: 1.5rem;
  margin-bottom: 0.4rem;
}

/* Kasus flex: nav */
nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}
```

---

## Cognitive Trap

**Asumsi:** Layout bagus = tempel flex/grid dari AI / geser elemen dengan posisi absolut.  
**Aman:** Puji keinginan merapikan; challenge hanya pada **tidak bisa jelaskan** dan pada **rusak alur baca**.

---

## Guiding Questions

1. Bagian mana yang **sesak** atau **melebar**?  
2. Apakah `h1` jelas lebih “atas” dari `h2` dan `p`?  
3. Perbaikan tadi: properti apa + kenapa (keterbacaan)?

---

## Kriteria penerimaan layout (contoh)

- [ ] Ada perbaikan jarak antar `section` / blok (terlihat “bernapas”)  
- [ ] Konten utama punya batas lebar masuk akal (`max-width` atau setara)  
- [ ] Hierarki judul terbaca (ukuran/jarak `h1` ≠ `h2` ≠ `p`)  
- [ ] Semantik P07–P08 **tetap**  
- [ ] (Opsional kuat) Satu kasus flex sederhana (nav/baris) **bisa dijelaskan**  
- [ ] Siswa menjelaskan **3 aturan layout** yang diubah  

---

## Exit Ticket

1. Satu kalimat: apa itu hierarki visual  
2. Tiga properti layout yang kupakai + fungsi  
3. Satu godaan yang kutolak (template AI / absolute / grid penuh)  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** keterbacaan · **Penalaran** (kenapa jarak/lebar itu).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Bawa artefak P08 — jangan mulai layout dari HTML kosong.  
- Flex = **satu kasus**; tolak “bikin kayak Bootstrap”.  
- Grid penuh / multi-kolom kompleks → parkir (boleh sebut “nanti kalau perlu di project”).  
- Preview P10: beberapa section + loncat antar bagian.  
