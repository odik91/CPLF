# X-S1-P25 — Project S1: Build CSS Keterbacaan

| Field | Isi |
|---|---|
| Kode | X-S1-P25 |
| Basis | **4JP** · Pertemuan **25/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Keterbacaan pada HTML P24; tanpa bongkar struktur, tanpa fitur JS** |

## Learning Transformation

Dari “HTML sudah lengkap = halaman siap” → “halaman **terbaca**: lebar baris, jarak, hierarki visual, kontras — CSS melayani spek dan mata, bukan template.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut `max-width`, `margin`/`padding`, hierarki visual, kontras |
| **C2** | Memahami | Menjelaskan beda keterbacaan vs dekorasi |
| **C3** | Menerapkan | Menulis CSS eksternal untuk project: lebar, jarak, tipografi, tombol terbaca |
| **C4** | Menganalisis | Menemukan sesak, melebar, judul tenggelam, kontras lemah |
| **C5** | Mengevaluasi | Mencentang AC keterbacaan (bukan “mirip referensi”) |
| **C6** | Mencipta | 3–5 aturan CSS milik sendiri yang bisa dijelaskan |

**Fokus:** C3–C5 · **Puncak:** C4–C6 · JS fitur 1 → **P26**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P08–P09 · HTML P24 tidak dibongkar |
| 10–30 | Scaffold | C2 | Dua versi: sesak vs bernapas |
| 30–50 | Experience | C2–C3 | `max-width` + `margin: 0 auto` + jarak section |
| 50–65 | Trap | C4 | Gradient/flex “biar keren” · ubah HTML demi CSS |
| 65–85 | Concept | C2 | Hierarki · spacing · lebar · kontras · flex opsional untuk `nav` |
| 85–95 | Practice mini | C3 | Audit 3 masalah di halaman sendiri |
| 95–105 | Transisi | — | Buka `style.css` project |
| 105–120 | Scaffold praktik | C2–C3 | I do: 5 aturan keterbacaan |
| 120–165 | Practice | C3–C6 | CSS project · peer uji AC baca |
| 165–180 | Reflect | C5 | 3 aturan · preview P26 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Framework / grid kompleks | `max-width`, spacing, tipografi |
| Mengubah `id` / landmark agar “lebih CSS” | Selector mengikuti HTML P24 |
| Animasi, dark mode wajib | Kontras teks vs latar yang cukup |
| JS “sekalian jalan” | Tombol cukup kelihatan sebagai tombol |

## Konsep inti

| Istilah | Arti di project |
|---|---|
| **Keterbacaan** | Mata dapat memindai judul, isi, dan tombol tanpa kesulitan |
| **Hierarki visual** | `h1` > `h2` > paragraf (ukuran/jarak, bukan warna acak) |
| **Lebar baris** | `max-width` ~40rem + tengah |
| **Spacing** | Jarak antar section dan padding dalam blok |
| **Kontras** | Teks gelap di latar terang (atau sebaliknya), bukan abu di abu |

Rujukan skill: [00_Bacaan_Panduan_CSS.md](../../../materi-ajar/base-4jp/kelas-x/semester-1/00_Bacaan_Panduan_CSS.md)

## Checklist AC keterbacaan

- [ ] CSS di file terpisah (`style.css`) dan tertaut  
- [ ] Konten tidak menempel tepi jendela (`max-width` + padding)  
- [ ] Section punya jarak yang memisahkan topik  
- [ ] `h1` dan `h2` lebih menonjol dari paragraf  
- [ ] `line-height` paragraf ~1.5  
- [ ] Tombol punya padding dan terlihat bisa diklik  
- [ ] HTML P24 tidak dirombak hanya demi styling  
- [ ] Siswa dapat menjelaskan 3 aturan CSS yang dipakai

## Contoh (bukan kunci warna)

[skill-js/p25-css-keterbacaan/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p25-css-keterbacaan/) — pola aturan, bukan palet wajib.

## Cognitive Trap

- Halaman “penuh hiasan” tetapi baris terlalu lebar.  
- Semua teks ukuran sama, lalu dikompensasi warna neon.  
- `display: flex` pada `body` tanpa tujuan.  
- Menyisipkan `div` pembungkus hanya karena tutorial CSS.

## Guiding Questions

1. Di mana mata tersangkut (sesak / melebar / tenggelam)?  
2. Properti mana yang memperbaiki itu — bukan yang “terlihat mahal”?  
3. Apakah selector merusak `id` JS?  
4. Jika CSS dilepas, apakah HTML P24 masih utuh?

## Kriteria penerimaan

- [ ] AC keterbacaan ≥6 terpenuhi  
- [ ] Peer dapat membaca halaman 30 detik dan menyebut 3 bagian  
- [ ] 3 aturan CSS tertulis + alasan  
- [ ] Tanpa fitur JS baru / tanpa bongkar spek HTML

## Exit Ticket

1. Satu masalah keterbacaan yang kutemukan: …  
2. Properti yang kugunakan: …  
3. Tiga aturan CSS projectku: …  
4. Apa yang ditunda ke P26?

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — bisa menjelaskan aturan, bukan hanya “sudah rapi.”

## Catatan Guru

Nilai keterbacaan dan alasan. Palet boleh sederhana. Jangan membandingkan “siapa paling Instagram.”
