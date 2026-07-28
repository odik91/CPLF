# Handout Siswa — XII-S5-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P02_data-bahan-bakar-ml.md](../../../kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md)

---

## 1. Tujuan pembelajaran

Dari “langsung model” → **data dulu** — kualitas & bentuk.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Model pintar compensate data jelek.  
**Aman:** Tunjukkan prediksi absurd live.

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Field + label + N baris
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
