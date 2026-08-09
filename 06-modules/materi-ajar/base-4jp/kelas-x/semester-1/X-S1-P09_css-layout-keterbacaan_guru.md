# Materi Guru Lengkap — X-S1-P09 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P09_css-layout-keterbacaan_siswa.md](./X-S1-P09_css-layout-keterbacaan_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P09_bacaan-mimi-robi.md](./X-S1-P09_bacaan-mimi-robi.md)

**Modul:** [X-S1-P09_css-layout-keterbacaan.md](../../../base-4jp/kelas-x/semester-1/X-S1-P09_css-layout-keterbacaan.md)

**Materi pendukung sumber:** [X-S1-P09_css-layout-keterbacaan.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P09_css-layout-keterbacaan.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **keterbacaan**, **hierarki visual**, **spacing**, **max-width**, **flex** (ringan) — sebut nama level Bloom + kode.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P09 — CSS Layout & Keterbacaan

| Field | Isi |
|-------|-----|
| Kode | X-S1-P09 |
| Basis | **4JP** · Pertemuan **9/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “sudah ada warna = sudah bagus” → “keterbacaan = hierarki + jarak + lebar yang masuk akal.”

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

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Multi-section → **P10**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P08 · *Warna ≠ otomatis terbaca* | |
| 10–30 | **Scaffold teori** | C2 | Sesak vs bernapas · We do tebak | |
| 30–50 | **Experience** | C2–C3 | Ubah margin/padding/max-width live | |
| 50–65 | **Trap + Q** | C4 | Template flex / absolute / font jumbo semua | |
| 65–85 | **Clarify + Concept** | C2 | Hierarki · spacing · lebar · flex 1 kasus | |
| 85–95 | **Practice mini** | C3 | Audit 3 masalah + rencana di kertas | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do max-width + jarak + flex nav | |
| 120–165 | **Practice** | C3–C6 | Perbaiki halaman · peer · jelaskan 3 aturan | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P10 | |

## Cognitive Trap

Layout bagus = tempel flex/grid AI / absolute sembarangan.

## Guiding Questions

1. Mana yang sesak atau melebar?  
2. `h1` jelas lebih “atas”?  
3. Properti apa + kenapa?

## Exit Ticket

1. Hierarki visual = …  
2. Tiga properti layout + fungsi  
3. Godaan yang ditolak  

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi keterbacaan · Penalaran.

## Catatan Guru

Bawa artefak P08. Flex satu kasus. Tolak Bootstrap-wannabe. Preview P10.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

Warna cantik ≠ terbaca.  
`max-width` + `margin: 0 auto` = kolom nyaman.  
Flex: `display: flex` + `gap` + `flex-wrap` untuk nav — cukup.  
Grid penuh / framework = parkir.

### 2. Recall

P08 presentasi vs struktur · 3 properti · hari ini: jarak sadar + hierarki + lebar.

### 3. Etika

No kunci layout 80 baris. Live pendek. Tolak paste tanpa jelaskan.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: baju (warna/font). Hari ini: napas halaman — jarak & tata letak biar terbaca."
Recall: 1 siswa sebut 3 properti P08.

[1 — Scaffold 10–30]
Proyeksi dua screenshot/versi CSS:
A: section saling nempel, teks melebar full monitor.
B: jarak antar section, max-width ~42rem, judul beda ukuran.
"Mana yang lebih enak dibaca? Apa yang beda — warna atau jarak?"

[2 — Experience 30–50]
Siswa naikkan margin-bottom section ATAU pasang max-width pada wadah.
Simpan · refresh · bandingkan.

[3 — Trap 50–65]
Skenario A: siswa tempel "flex template landing" 60 baris — tidak bisa jelaskan 1 baris.
Skenario B: position:absolute pada semua section "biar rapi".
Skenario C: semua teks font-size: 32px "biar jelas".
Debat: obat = aturan sedikit yang paham; alur dokumen tetap; hierarki bukan "semua besar".

[4 — Clarify + Concept 65–85]
Papan:
- Hierarki visual: h1 > h2 > p (ukuran + jarak)
- Spacing: margin / padding
- Lebar: max-width (+ tengah)
- Flex 1 kasus: nav ul { display:flex; gap:…; flex-wrap:wrap; }

[5 — Practice mini 85–95]
Audit halaman sendiri (atau contoh proyeksi): tulis 3 masalah + properti rencana.

[6–7 — Scaffold + Practice 105–165]
I do:
  .page { max-width: 42rem; margin: 0 auto; padding: … }
  section { margin-bottom: 2rem; }
  nav ul { display: flex; gap: 1rem; … }
You do: perbaiki artefak P08.
Peer: kriteria keterbacaan layout.
Tolak: grid penuh; framework; absolute acak; AI layout tanpa 3 aturan sendiri dulu.

[8 — Exit 165–180]
Exit ticket + preview P10: beberapa section + loncat antar bagian (masih static).
```

### Model CSS tambahan (jangan dibagikan utuh sebagai “kunci”)

```css
.page {
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem 1.25rem;
}

section { margin-bottom: 2rem; }

h1 { font-size: 1.9rem; margin-bottom: 0.5rem; }
h2 { font-size: 1.35rem; margin-top: 1.5rem; margin-bottom: 0.4rem; }

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Paste flex tanpa paham | Meladeni “yang penting mirip web” |
| Absolute semua elemen | Memuji “kreatif” tanpa cek scroll/resize |
| Semua font jumbo | Mengabaikan hierarki |
| `max-width` terlalu sempit di mobile | Tidak cek jendela kecil |
| Rusak semantik demi layout | “Yang penting rapi” |

### 6. Checklist exit guru

- [ ] Demo sesak vs bernapas  
- [ ] Trap template / absolute / font jumbo  
- [ ] Practice perbaikan keterbacaan  
- [ ] Peer kriteria layout  
- [ ] Preview P10  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kepedulian pada pembaca  
**Kait:** Merapikan agar orang lain nyaman membaca = menghormati penerima pesan.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
