# Materi Guru Lengkap — X-S1-P08 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P08_css-dasar_siswa.md](./X-S1-P08_css-dasar_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P08_bacaan-mimi-robi.md](./X-S1-P08_bacaan-mimi-robi.md)

**Modul:** [X-S1-P08_css-dasar.md](../../../base-4jp/kelas-x/semester-1/X-S1-P08_css-dasar.md)

**Materi pendukung sumber:** [X-S1-P08_css-dasar.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P08_css-dasar.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **CSS**, **presentasi**, **struktur**, **selector**, **properti** — sebut nama level Bloom + kode.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P08 — CSS Dasar

| Field | Isi |
|-------|-----|
| Kode | X-S1-P08 |
| Basis | **4JP** · Pertemuan **8/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “biar bagus = ubah HTML sembarangan” → “CSS = presentasi; HTML = struktur.”

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

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Layout → **P09**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P07 · *Struktur ≠ presentasi* | |
| 10–30 | **Scaffold teori** | C2 | HTML sama, CSS beda (2 tema) · We do tebak | |
| 30–50 | **Experience** | C2–C3 | Ubah 1 properti live (`h1` color) | |
| 50–65 | **Trap + Q** | C4 | CSS tidak nyambung / bongkar jadi `div` / inline everywhere | |
| 65–85 | **Clarify + Concept** | C2 | Selector · properti · file terpisah | |
| 85–95 | **Practice mini** | C3 | 3 aturan CSS di kertas | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do `style.css` + `link` | |
| 120–165 | **Practice** | C3–C6 | Style halaman S1 · peer keterbacaan | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P09 | |

## Cognitive Trap

Biar bagus = rusak HTML / tempel CSS buta.

## Guiding Questions

1. Diubah: struktur atau presentasi?  
2. Tag semantik masih utuh?  
3. Teks masih terbaca?

## Exit Ticket

1. Beda HTML vs CSS  
2. Tiga properti + fungsi  
3. Godaan yang ditolak  

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi keterbacaan · Penalaran.

## Catatan Guru

Bawa artefak P07. Parkir flex/grid ke P09.

**Reminder skill CSS (luar jam):** pastikan siswa sudah mulai [skill-css/](./skill-css/) — lihat [00_Bacaan_Panduan_CSS.md](./00_Bacaan_Panduan_CSS.md). Di P09 lanjutkan fokus file 05–07.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

Satu HTML + dua CSS = bukti terkuat “presentasi terpisah.”  
`margin` ≈ luar · `padding` ≈ dalam (intuisi).  
Kontras wajib.

### 2. Recall

P07 semantik & SEO ringkas · hari ini jangan ganti tulang demi baju.

### 3. Etika

No tema jawaban penuh. Live sedikit properti. Tolak bongkar semantik.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: tulang halaman jujur. Hari ini: baju — tanpa ganti tulang."
Recall: 1 siswa sebut 1 landmark P07.

[1 — Scaffold 10–30]
Proyeksi HTML sama dua tab.
Tab A: style-a.css (tenang).
Tab B: style-b.css (kontras beda).
"File HTML sama. Apa yang beda?"
We do: tebak baris CSS mana yang bikin h1 hijau.

[2 — Experience 30–50]
Siswa ubah color h1 di file mereka (atau playground singkat).
Simpan · refresh · amati.

[3 — Trap 50–65]
Skenario A: link href salah — "CSS rusak".
Skenario B: siswa ganti section jadi div "biar gampang style".
Debat: obatnya perbaiki tautan / tetap semantik + selector benar.

[4 — Clarify + Concept 65–85]
Papan: selector { properti: nilai; }
Daftar aman hari ini: color, background, font-size, font-family, margin, padding, line-height.
File terpisah + link.

[5 — Practice mini 85–95]
Dari spek tampilan 3 poin (mis. judul lebih besar, latar tenang, jarak antar section):
tulis 3 aturan di kertas dulu.

[6–7 — Scaffold + Practice 105–165]
I do buat style.css, link di head, 5–8 deklarasi.
You do style halaman profil/company.
Peer: kriteria keterbacaan.
Tolak: flex/grid penuh; animasi; generate tema 200 baris.

[8 — Exit 165–180]
Exit ticket + preview P09: jarak & tata letak biar lebih terbaca.
```

### Model CSS (jangan dibagikan utuh sebagai “kunci”)

```css
body { font-family: Georgia, serif; line-height: 1.5; color: #1a1a1a; background: #f7f4ef; padding: 1rem; }
h1 { color: #0b3d2e; font-size: 1.8rem; }
h2 { color: #0b3d2e; font-size: 1.3rem; }
section { margin-bottom: 1.5rem; }
footer { font-size: 0.9rem; color: #444; border-top: 1px solid #ccc; padding-top: 0.75rem; }
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| `link` salah path | Tidak cek DevTools/Network |
| Inline style di setiap tag | Meladeni “biar cepat” |
| Ganti semantik → `div` | “Yang penting cantik” |
| CSS AI 200 baris | Tidak minta jelaskan 3 properti |
| Teks tak terbaca | Memuji warna “estetik” |

### 6. Checklist exit guru

- [ ] Demo HTML sama / CSS beda  
- [ ] Trap path & trap rusak semantik  
- [ ] Practice file terpisah  
- [ ] Peer keterbacaan  
- [ ] Preview P09  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran tampilan  
**Kait:** Mempercantik tanpa mengkhianati makna struktur.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
