# Materi Guru Lengkap — XII-S5-P03

**Handout siswa (bagikan):** [XII-S5-P03_dataset-mini-bersih_siswa.md](./XII-S5-P03_dataset-mini-bersih_siswa.md)

**Modul:** [XII-S5-P03_dataset-mini-bersih.md](../../../kelas-xii/semester-5/XII-S5-P03_dataset-mini-bersih.md)

**Materi pendukung sumber:** [XII-S5-P03_dataset-mini-bersih.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P03_dataset-mini-bersih.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P03 — Dataset Mini Bersih

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P03 |
| Unit | XII5.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T1 |

## Learning Transformation

Dari data mentah → **dataset siap pakai** (bersih, terdokumentasi).

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan dataset kotor: missing, typo, duplikat |
| 5–15 | Experience | **Inventaris perpus** — satu kolom salah format |
| 15–25 | Trap | Hapus outlier tanpa tanya “kenapa ada?” |
| 25–35 | Clarify | Cleaning vs censoring data |
| 35–45 | Concept | Encoding kategorik sederhana · normalisasi 0–1 |
| 45–70 | Practice | Bersihkan dataset P02 + README dataset (sumber, kolom) |
| 70–85 | Peer | Swap — bisa paham tanpa tanya penulis? |
| 85–90 | Exit | Link/file JSON/CSV final |

---

## Deliverable

Dataset ≥40 baris · 2 kelas · README 5 bullet.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Persiapan langsung untuk PRJ S5.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P03 Dataset Mini Bersih


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P03 |
| Modul pertemuan | [XII-S5-P03_dataset-mini-bersih.md](../../../kelas-xii/semester-5/XII-S5-P03_dataset-mini-bersih.md) |
| Semester | 5 · Pertemuan 3/18 |
| Unit | XII5.2 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-T1 |
| Deliverable siswa | Dataset ≥40 baris · 2 kelas · README 5 bullet |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Data cleaning overview | → referensi: [MLCC — Data Characteristics](https://developers.google.com/machine-learning/crash-course/training-data/data-characteristics) |
| Numerical data / scaling preview | → referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features) |
| Categorical data / encoding | → referensi: [MLCC — Categorical Data](https://developers.google.com/machine-learning/crash-course/categorical-data/one-hot-encoding) |
| JSON parse/stringify | → referensi: [MDN — JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) |
| CSV di spreadsheet | → referensi: [Google Sheets — CLEAN function](https://support.google.com/docs/answer/3098244) |
| Outlier (preview P05) | → referensi: [Khan Academy — Mean & MAD](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-mad-basics/v/mean-as-the-balancing-point) |
| StatQuest — data types | → referensi: [StatQuest — Qualitative vs Quantitative](https://www.youtube.com/watch?v=hCrD7BdrFco) |
| README dokumentasi | → referensi: [GitHub — About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |

**Waktu baca minimum guru:** 50 menit (MLCC numeric + categorical + MDN JSON).

---

## Pengetahuan yang Dikuasai Guru

### Dari mentah ke siap pakai

**Dataset siap pakai** = file yang orang lain bisa pahami **tanpa tanya penulis** + isi konsisten untuk training demo. Bukan sekadar "bersih visual" — harus **terdokumentasi**.

### Masalah umum di data P02 siswa

| Masalah | Gejala | Tindakan cleaning |
|---------|--------|-------------------|
| Missing | Cell kosong, `null`, `-` | Isi (median/modus), hapus baris, atau flag — **catat di README** |
| Typo label | `lulus`, `Lulus`, `lulus ` | Normalisasi: lowercase, trim spasi |
| Duplikat | Baris identik 2× | Hapus atau jelaskan kenapa duplikat valid |
| Format campur | `"2"` vs `2` di kolom numerik | Cast ke number; tolak non-numerik |
| Outlier ekstrem | Skor 1000 | **Jangan hapus otomatis** — tanya "salah input atau valid?" (Trap P03) |
| Kolom tidak relevan | ID urut 1..n | Boleh drop jika bukan fitur |

### Cleaning vs censoring

- **Cleaning** = perbaiki **error** (typo, format salah).
- **Censoring** = hapus data karena **tidak suka hasilnya** (outlier yang sebenarnya valid).

Guru harus tegas: hapus outlier hanya setelah **alasan tertulis** di README.

### Encoding kategorik sederhana (S5)

Untuk demo TF.js nanti, siswa perlu angka:

| Nilai asli | Encoding sederhana |
|------------|-------------------|
| `enak`, `biasa` | 1, 0 atau 2, 1 |
| `ya`, `tidak` | 1, 0 |

**One-hot** penuh = P08+; P03 cukup **label mapping** 1 kolom kategorik → 1 kolom angka.

→ referensi: [MLCC — Categorical Data](https://developers.google.com/machine-learning/crash-course/categorical-data/one-hot-encoding)

### Normalisasi 0–1 (preview)

Fitur skala beda (harga 5000 vs rating 1–5) — nanti jarak/similarity P04 dan training P08 sulit. Rumus sederhana:

```text
x_norm = (x - min) / (max - min)
```

Guru **tidak** wajib derive rumus — cukup demo spreadsheet kolom baru `fitur_norm`.

→ referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features)

### README dataset (5 bullet wajib)

1. **Sumber** — fiktif / survei kelas / observasi (dengan izin)
2. **Tujuan** — prediksi apa
3. **Kolom** — tabel nama + tipe + arti
4. **Cleaning** — apa yang diubah/dihapus
5. **Batasan** — data kecil, bias kelompok, dll.

---

## Recall Spiral

| Pertanyaan | Inti jawaban |
|------------|--------------|
| P02: Fitur vs label? | Fitur = input X; label = y |
| P02: GIGO? | Data jelek → model jelek |
| P02: Minimum baris? | ~20 mentah; hari ini **≥40 bersih** |
| P01: Supervised? | Ada kolom label per baris |

---

## Etika Penyampaian

| Aturan | Penerapan P03 |
|--------|---------------|
| **No copas** | Jangan kirim `dataset-clean.json` guru. Siswa bersihkan **dataset P02 sendiri**. |
| **Live modeling** | Guru bersihkan 5 baris **kotor live** di proyektor — siswa lihat proses, bukan hasil. |
| **TTS** | Satu masalah data per scope: missing → typo → duplikat → encoding. |
| **Peer swap** | Swap file — test "bisa paham tanpa tanya?" — bukan swap lalu copas README. |
| **Membaca data** | Latih baca baris before/after + README side-by-side. |

---

## Materi Inti

### Timeline

```text
Tampilkan dataset kotor
  → Experience: inventaris perpus (format salah)
  → Trap: hapus outlier tanpa tanya
  → Clarify: cleaning vs censoring
  → Concept: encoding · normalisasi 0–1
  → Practice: bersihkan P02 + README
  → Peer swap
  → Exit: file final CSV/JSON + README
```

### Experience — inventaris perpus (menit 5–15)

Contoh: kolom `tahun_terbit` berisi `"2019"`, `2019`, `"dua ribu nineteen"`. Satu kolom salah format → filter/sort rusak.

### Trap (menit 15–25)

Tampilkan baris dengan nilai ekstrem (contoh: `jam_belajar: 24` — valid atau typo?). **Jangan** guru langsung hapus — tahan diskusi.

### Practice (menit 45–70)

Pipeline siswa:

1. Duplikat → drop
2. Label → lowercase trim
3. Missing → keputusan + catat README
4. Kategorik → encode angka
5. (Opsional) numerik → kolom `_norm`
6. Export CSV **dan** JSON
7. README 5 bullet

**Target ≥40 baris** setelah cleaning (boleh gabung 2 kelompok P02 jika perlu — dengan atribusi di README).

### Peer review (menit 70–85)

Partner jawab tanpa tanya penulis:

- Kolom mana fitur?
- Berapa kelas label?
- Apa satu keputusan cleaning kontroversial?

---

## Alur Live Coding / Live Modeling

### Persiapan

- Dataset kotor guru (10 baris) — **beda** dari dataset siswa
- Spreadsheet + editor teks README
- Contoh README **struktur saja** di papan (bukan isi lengkap)

### Skrip TTS

```text
[LANGKAH 1 — Dataset kotor]
Proyeksikan 8 baris dengan missing + typo label
TTS: Tebak masalah per baris → Tanya "train apa yang terjadi?" → Spelling istilah
Scope: 5 menit

[LANGKAH 2 — Inventaris perpus]
Satu kolom format campur — demo sort gagal
Scope: 10 menit

[LANGKAH 3 — Trap outlier]
Satu baris nilai ekstrem — vote: hapus/keep?
Ucapkan: "Tanpa README = censoring"
Scope: 10 menit

[LANGKAH 4 — Encoding live]
Kolom kategorik → tambah kolom angka live
Scope: 10 menit

[LANGKAH 5 — Normalisasi demo]
Satu fitur numerik → kolom _norm (min-max)
Scope: 10 menit · opsional jika waktu ketat

[LANGKAH 6 — Practice + README]
Siswa kerja; guru TTS keliling
Scope: 25 menit

[LANGKAH 7 — Peer swap]
Partner isi checklist peer — bukan nilai, formatif
Scope: 15 menit
```

---

## Latihan Membaca Kode/Data

### Before / after

**Before:**

```text
id,nama_menu,rating,label
1,Nasi,enak,Enak
2,,4,biasa
2,Nasi,5,enak
```

**After (siswa prediksi dulu, guru reveal):**

```text
nama_menu,rating_enc,label
nasi,1,enak
telur,0,biasa
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa `id` hilang? | Bukan fitur prediktif — hanya urutan |
| Baris 2 before — masalah? | Missing nama + rating numerik vs kategorik campur |
| Duplikat id 2 — tindakan? | Drop satu atau merge — harus di README |
| `Enak` vs `enak`? | Normalisasi label |

### Baca README snippet

```markdown
## Cleaning
- Drop 2 baris duplicate id
- Label lowercased
- jam_belajar=24 kept (olimpiade — valid outlier)
```

Tanya: "Keputusan kontroversial mana? Kenapa dokumentasi penting?"

→ referensi: [MDN — JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) — validasi setelah export JSON

---

## Praktik Mandiri Siswa

- File final: `dataset-v1.csv` + `dataset-v1.json` + `README.md`
- ≥40 baris · 2 kelas label · dokumentasi 5 bullet
- Checklist peer: partner bisa jawab 3 pertanyaan tanpa chat penulis
- **Exit:** link/file upload ke folder kelas (sesuai kebijakan sekolah)

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Hapus semua outlier agar "rapi" | Guru setuju tanpa tanya alasan |
| README copy-paste template kosong | Guru tidak baca README saat review |
| Encoding inkonsisten antar file | Guru hanya cek jumlah baris |
| JSON invalid (trailing comma) | Guru tidak test `JSON.parse` |
| Gabung dataset tanpa atribusi | Guru izinkan tanpa catat sumber |
| Cleaning = ubah label agar model "bagus" | **Curang data** — tegaskan etika |

---

## Checklist Exit Guru

- [ ] Trap outlier — diskusi cleaning vs censoring
- [ ] Recall P02 (fitur/label/GIGO)
- [ ] Setiap kelompok: ≥40 baris + README 5 bullet
- [ ] Export CSV + JSON valid
- [ ] Peer swap — partner paham kolom
- [ ] Tidak ada file dataset bersih guru di WA
- [ ] Dataset siap untuk P05 statistik + project S5
- [ ] Keputusan cleaning kontroversial terdokumentasi

---

## Rujukan modul

- Modul: [XII-S5-P03](../../../kelas-xii/semester-5/XII-S5-P03_dataset-mini-bersih.md)
- Sebelumnya: [XII-S5-P02](./XII-S5-P02_data-bahan-bakar-ml.md)
- Berikutnya: [XII-S5-P04](./XII-S5-P04_vektor-jarak-kesamaan.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
