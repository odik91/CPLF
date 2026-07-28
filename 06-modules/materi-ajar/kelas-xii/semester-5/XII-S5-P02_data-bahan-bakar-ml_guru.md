# Materi Guru Lengkap — XII-S5-P02

**Handout siswa (bagikan):** [XII-S5-P02_data-bahan-bakar-ml_siswa.md](./XII-S5-P02_data-bahan-bakar-ml_siswa.md)

**Modul:** [XII-S5-P02_data-bahan-bakar-ml.md](../../../kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md)

**Materi pendukung sumber:** [XII-S5-P02_data-bahan-bakar-ml.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P02 — Data sebagai Bahan Bakar ML

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P02 |
| Unit | XII5.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T1 |

## Learning Transformation

Dari “langsung model” → **data dulu** — kualitas & bentuk.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo: train dengan 3 baris vs 300 — prediksi? |
| 5–18 | Experience | **Dapur ML**: bahan busuk = masakan gagal |
| 18–28 | Trap | Dataset berlabel salah / tidak konsisten |
| 28–38 | Clarify | Fitur · label · baris · kolom |
| 38–48 | Concept | CSV/JSON tabular · supervised ringkas |
| 48–70 | Practice | Kumpulkan 20 baris data fiktif 2 kelas (spreadsheet) |
| 70–85 | Reflect | Garbage in, garbage out — contoh MA |
| 85–90 | Exit | Field + label + N baris |

---

## Cognitive Trap

**Asumsi:** Model pintar compensate data jelek.  
**Aman:** Tunjukkan prediksi absurd live.

---

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Data harus etis — tidak PII sensitif tanpa izin.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P02 Data sebagai Bahan Bakar ML


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P02 |
| Modul pertemuan | [XII-S5-P02_data-bahan-bakar-ml.md](../../../kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md) |
| Semester | 5 · Pertemuan 2/18 |
| Unit | XII5.2 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-T1 |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |
| Panduan ML | [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Features & labels | → referensi: [MLCC — Features and Labels](https://developers.google.com/machine-learning/crash-course/framing/features-and-labels) |
| Supervised learning | → referensi: [MLCC — Supervised Learning](https://developers.google.com/machine-learning/crash-course/framing/supervised-learning) |
| Data characteristics | → referensi: [MLCC — Data Characteristics](https://developers.google.com/machine-learning/crash-course/training-data/data-characteristics) |
| JSON di JavaScript | → referensi: [MDN — JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) |
| CSV / spreadsheet dasar | → referensi: [MDN — File API](https://developer.mozilla.org/en-US/docs/Web/API/File) |
| StatQuest — training data | → referensi: [StatQuest — Train/Test Split](https://www.youtube.com/watch?v=fSytzGwaAqc) |
| Dataset contoh (opsional) | → referensi: [Kaggle Datasets](https://www.kaggle.com/datasets) |
| Garbage in garbage out | → referensi: [MLCC — Introduction](https://developers.google.com/machine-learning/crash-course/introduction-to-ml/what-is-ml) |

**Waktu baca minimum guru:** 40 menit (MLCC framing + MDN JSON skim).

---

## Pengetahuan yang Dikuasai Guru

### Metafora dapur ML

Model ML = **resep + kompor**; data = **bahan**. Bahan busuk (label salah, terlalu sedikit, bias) → masakan gagal **meski kompor mahal**. Trap siswa: "Model pintar bisa compensate." **Tidak** — tunjukkan prediksi absurd dengan 3 baris data vs 300 baris (demo konseptual di papan/spreadsheet, belum TF.js).

### Istilah tabular (wajib hafal guru)

| Istilah | Arti plain language | Contoh MA |
|---------|---------------------|-----------|
| **Baris (row)** | Satu observasi / satu "kasus" | Satu siswa, satu produk kantin, satu sesi belajar |
| **Kolom (column)** | Satu jenis informasi | Nama, skor, jam tidur, kategori |
| **Fitur (feature / X)** | Input yang dipakai model untuk prediksi | Jam belajar, jumlah PR selesai |
| **Label (y)** | Jawaban yang ingin diprediksi (supervised) | Lulus/tidak, enak/biasa, spam/bukan |
| **Supervised** | Setiap baris punya label "jawaban benar" | Klasifikasi 2 kelas: `A` vs `B` |
| **Unsupervised** | Tanpa label — kelompokkan pola | **Tidak fokus S5** — cukup sebut ada |

### Bentuk data di project S5

- **CSV** — spreadsheet export; koma/pemisah; mudah untuk guru non-ML.
- **JSON** — array of objects; cocok dengan fetch JS di semester sebelumnya.

```json
[
  { "jam_belajar": 2, "pr_selesai": 5, "label": "lulus" },
  { "jam_belajar": 0.5, "pr_selesai": 1, "label": "remedial" }
]
```

→ referensi: [MDN — JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### Kualitas data — checklist guru

1. **Cukup banyak?** Untuk demo MA: 20–40 baris minimum 2 kelas; 3 baris = tidak representatif.
2. **Konsisten?** Satu kolom tidak campur format (`"dua"` vs `2`).
3. **Label benar?** Salah label = model belajar kebalikan.
4. **Etis?** Tidak PII sensitif (NIK, alamat rumah, foto wajah tanpa izin) — wajib MA.
5. **Representatif?** Hanya data kelas A → model gagal di kelas B.

### Garbage in, garbage out (GIGO)

Contoh MA untuk diucapkan: dataset rekomendasi buku **hanya** novel percintaan → model anggap semua siswa MA suka genre itu → rekomendasi salah untuk siswa yang cari kitab fiqih. Bukan "model bodoh" — **data sempit**.

---

## Recall Spiral

| Pertanyaan recall | Jawaban/inti |
|-------------------|--------------|
| P01: "Apa beda rule-based vs ML?" | Rule = aturan tulis; ML = belajar dari data |
| P01: "Satu contoh ML di MA?" | Rekomendasi, spam filter, dll. |
| XI: "Array of objects di JSON?" | `[{key: val}, …]` — jembatan ke baris dataset |
| "ML butuh apa sebelum model?" | **Data** — hook hari ini |

---

## Etika Penyampaian

| Aturan | Penerapan P02 |
|--------|---------------|
| **No copas** | Jangan bagikan spreadsheet 20 baris siap label ke WA. Siswa **kumpulkan/generate fiktif sendiri** dengan skenario kelompok. |
| **Live modeling** | Demo 3 baris vs 300 baris di **spreadsheet proyektor** — guru isi live, bukan file final. |
| **TTS** | Satu istilah per scope: Fitur → Label → Baris → Kolom. |
| **Data etis** | Larang NIP/NIS asli; pakai nama fiktif; ingatkan izin jika data nyata. |
| **Membaca kode/data** | Latih baca **baris CSV/JSON** — prediksi kolom fitur vs label. |

---

## Materi Inti

### Timeline singkat

```text
Demo 3 vs 300 baris
  → Experience: dapur ML
  → Trap: label salah / tidak konsisten
  → Clarify: fitur · label · baris · kolom
  → Concept: CSV/JSON tabular · supervised ringkas
  → Practice: 20 baris fiktif 2 kelas
  → Reflect: GIGO contoh MA
  → Exit: field + label + N baris
```

### Demo opening (menit 0–5)

Spreadsheet dua kolom fitur + label. Sheet 1: **3 baris**. Sheet 2: **30+ baris** (boleh fiktif "skor ujian vs lulus").

Tanya: "Model mana yang bisa **generalize**?" — siswa intuitif pilih sheet 2.

→ referensi: [MLCC — Data Characteristics](https://developers.google.com/machine-learning/crash-course/training-data/data-characteristics)

### Experience — dapur ML (menit 5–18)

Props: bahan dapur (garam basi, telur baik) — metafora visual. **Bahan busuk** = typo label, missing value, duplikat.

### Trap (menit 18–28)

Tampilkan dataset kecil dengan **2 label terbalik** (siswa berprestasi dilabel "remedial"). Tanya: "Model akan belajar apa?"

### Concept — supervised ringkas (menit 38–48)

**Supervised learning** = kita punya "kunci jawaban" per baris. Model belajar mapping: fitur → label.

→ referensi: [MLCC — Supervised Learning](https://developers.google.com/machine-learning/crash-course/framing/supervised-learning)

### Practice (menit 48–70)

Kelompok buat **≥20 baris** data fiktif **2 kelas** — tema bebas MA:

- Rekomendasi ekstrakurikuler (fitur: minat, jam luang → label: cocok/tidak)
- Kualitas menu kantin (fitur: harga, porsi, rating → label: layak/tidak)
- Prediksi keterlambatan PR (fitur: jam tidur, game → label: tepat/terlambat)

**Deliverable format:** Google Sheet atau CSV — kolom fitur jelas + 1 kolom `label`.

### Transfer P03

Data mentah hari ini → **besok dibersihkan** (missing, encoding, README).

---

## Alur Live Coding / Live Modeling

Pertemuan **spreadsheet + diskusi** — minimal JS (opsional: `console.log` array JSON).

### Persiapan

- Proyektor + spreadsheet kosong
- Contoh dataset **kotor** tersembunyi untuk Trap (bukan dibagikan)
- Template header kolom saja (tanpa isi baris) boleh di papan

### Skrip TTS

```text
[LANGKAH 1 — Demo 3 vs 300]
Tulis header: fitur1 | fitur2 | label
Isi live 3 baris — prediksi oral "model" (majority vote main-main)
Tambah baris sampai ~30 — ulang prediksi
TTS: Tebak mana lebih stabil → Tanya "representatif?" → Spelling "data cukup"
Scope: 5 menit

[LANGKAH 2 — Dapur ML]
Ucapkan metafora bahan busuk — siswa sebut contoh "bahan busuk" di data
Scope: 12 menit · kartu/post-it

[LANGKAH 3 — Trap label salah]
Tampilkan 5 baris dengan 2 label terbalik
TTS: Tebak output model → Tanya "perbaiki data atau model?" → Spelling GIGO
Scope: 10 menit

[LANGKAH 4 — Istilah tabular]
Tulis: baris · kolom · fitur (X) · label (y)
Ucapkan per istilah dengan contoh dari spreadsheet
Scope: 10 menit

[LANGKAH 5 — Practice kelompok]
Ucapkan: "20 baris minimum, 2 kelas label, nama fiktif, no NIS asli"
Keliling kelas TTS: "Kolom mana fitur? mana label?"
Scope: 22 menit

[LANGKAH 6 — Exit]
Kumpulkan: jumlah field, nama label, N baris
Scope: 5 menit
```

---

## Latihan Membaca Kode/Data

Proyeksikan JSON (papan/slide — **jangan** file siap pakai):

```json
[
  { "usia": 15, "jam_game": 4, "label": "terlambat" },
  { "usia": 16, "jam_game": 0.5, "label": "tepat_waktu" },
  { "usia": 15, "jam_game": 3, "label": "tepat_waktu" }
]
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa **baris**? | 3 |
| Sebut **fitur** (bukan label) | `usia`, `jam_game` |
| Kolom **label**? | `label` |
| Baris 3 — ada masalah? | Label mungkin salah (`jam_game` tinggi tapi `tepat_waktu`) — trap konsistensi |
| Cukup untuk train? | Tidak — terlalu sedikit; kelas tidak seimbang |

Latihan CSV (papan):

```text
nama,skor,label
A,85,lulus
B,40,lulus
C,90,tidak
```

Bug: baris B dan C — **label tidak match skor** → model confused.

→ referensi: [MLCC — Features and Labels](https://developers.google.com/machine-learning/crash-course/framing/features-and-labels)

---

## Praktik Mandiri Siswa

- Spreadsheet **≥20 baris**, **≥2 fitur numerik/kategorik**, **2 nilai label** berbeda.
- Skenario tertulis 2 kalimat: "Model ingin memprediksi … dari …"
- **Exit ticket:** sebutkan (1) nama field fitur, (2) nama label, (3) N baris.
- Simpan file untuk P03 cleaning — **versi mentah** (boleh ada 1–2 typo sengaja untuk P03).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Langsung cari "cara train TF.js" | Guru demo model sebelum data |
| Label acak / satu kelas saja | Guru tidak cek distribusi label |
| Pakai NIS/nama asli | Guru lupa ingatkan data etis |
| Hanya 5 baris "repot" | Guru terima — underfit pasti |
| Fitur = label (duplikat kolom) | Guru tidak review header |
| Copas dataset Kaggle tanpa paham kolom | Guru hanya peduli jumlah baris |

---

## Checklist Exit Guru

- [ ] Demo 3 vs 30+ baris dijalankan live
- [ ] Trap label salah — siswa sebut GIGO
- [ ] Recall P01 (AI/ML/data) oral
- [ ] Setiap kelompok punya ≥20 baris + 2 kelas label
- [ ] Tidak ada PII sensitif
- [ ] Siswa bisa baca JSON/CSV: fitur vs label
- [ ] File mentah tersimpan untuk P03
- [ ] Tidak ada spreadsheet jawaban penuh di WA
- [ ] Transfer P03 (cleaning) disebutkan

---

## Rujukan modul

- Modul: [XII-S5-P02](../../../kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md)
- Sebelumnya: [XII-S5-P01](./XII-S5-P01_ai-ml-dl-peta.md)
- Berikutnya: [XII-S5-P03](./XII-S5-P03_dataset-mini-bersih.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
