# Materi Pendukung Guru — XII-S5-P04 Vektor, Jarak, Kesamaan

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P04 |
| Modul pertemuan | [XII-S5-P04_vektor-jarak-kesamaan.md](../../../kelas-xii/semester-5/XII-S5-P04_vektor-jarak-kesamaan.md) |
| Semester | 5 · Pertemuan 4/18 |
| Unit | XII5.3 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-T1, CXII-B1 |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Vektor — pengantar intuitif | → referensi: [Khan Academy — Introduction to Vectors](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/linear-algebra-introduction-to-vectors) |
| Jarak Euclidean 2D | → referensi: [Khan Academy — Distance Formula](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry/hs-geo-distance/v/distance-formula) |
| Magnitude & direction | → referensi: [Khan Academy — Vector Magnitude](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-magnitude-from-graph) |
| KNN intuitif | → referensi: [StatQuest — K-Nearest Neighbors](https://www.youtube.com/watch?v=HKcO3-6TYr0) |
| Cosine similarity (konsep) | → referensi: [MLCC — Embeddings Similarity](https://developers.google.com/machine-learning/crash-course/embeddings/similarity) |
| Feature scaling | → referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features) |
| Array JS (vektor sebagai list) | → referensi: [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| TF.js tensor preview | → referensi: [TF.js — Tensors](https://www.tensorflow.org/js/guide/tensors_operations) |

**Waktu baca minimum guru:** 45 menit (Khan distance + StatQuest KNN 12 menit).

---

## Pengetahuan yang Dikuasai Guru

### Vektor = list angka dengan makna urutan

Di ML, satu **baris fitur** = **vektor**. Urutan kolom **harus konsisten**.

Contoh siswa A: `[jam_belajar=3, skor_quiz=85]` → vektor 2 dimensi `[3, 85]`.

**Bukan** vektor jika urutan acak tiap baris — kolom 1 harus selalu arti sama.

→ referensi: [Khan Academy — Introduction to Vectors](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/linear-algebra-introduction-to-vectors)

### Jarak Euclidean (2D cukup untuk MA)

Untuk titik `A = (x1, y1)` dan `B = (x2, y2)`:

```text
jarak = √[(x2−x1)² + (y2−y1)²]
```

**Makna:** semakin kecil jarak → semakin "mirip" profil fitur.

Contoh MA: dua siswa dengan jam belajar dan skor hampir sama → jarak kecil.

Guru **tidak** wajib turunkan rumus — cukup hitung 1 contoh di papan dengan kalkulator.

→ referensi: [Khan Academy — Distance Formula](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry/hs-geo-distance/v/distance-formula)

### Trap: skala berbeda tanpa normalisasi

Fitur 1: jam belajar (0–5). Fitur 2: skor ujian (0–100).

Jarak **didominasi** skor — jam belajar hampir diabaikan. Solusi: normalisasi 0–1 (P03) sebelum hitung jarak.

→ referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features)

### Cosine similarity (intuitif, opsional hitung)

Mengukur **sudut arah** vektor, bukan panjang. Dua vektor proporsional → cosine ≈ 1.

Contoh: rekomendasi teks/tag — "arah minat sama, skala beda."

S5: **sebutkan konsep**; hitung manual opsional untuk siswa advanced. Fokus utama **Euclidean** 2–3 dimensi.

→ referensi: [MLCC — Embeddings Similarity](https://developers.google.com/machine-learning/crash-course/embeddings/similarity)

### KNN tanpa nama rumit — "vote tetangga"

1. Simpan semua titik training (fitur + label).
2. Input baru → hitung jarak ke semua titik.
3. Ambil **K** tetangga terdekat (mis. K=3).
4. **Majority vote** label tetangga = prediksi.

Ini **bukan** deep learning — algoritma jarak + voting. Bagus untuk menunjukkan ML bisa sederhana.

→ referensi: [StatQuest — K-Nearest Neighbors](https://www.youtube.com/watch?v=HKcO3-6TYr0)

### Hubung ke tensor P06

Vektor = tensor **rank 1**. Batch banyak vektor = matrix **rank 2**. TF.js P07 akan pakai shape `[jumlah_baris, jumlah_fitur]`.

---

## Recall Spiral

| Pertanyaan | Inti |
|------------|------|
| P03: Normalisasi 0–1 kenapa? | Skala fitur setara |
| P03: Satu baris dataset = ? | Satu observasi / satu vektor fitur |
| P02: Fitur numerik vs kategorik? | Numerik langsung; kategorik perlu encode |
| P01: ML sederhana vs DL? | KNN = ML klasik, bukan neural net dalam |

---

## Etika Penyampaian

| Aturan | Penerapan P04 |
|--------|---------------|
| **No copas** | Jangan bagikan sheet perhitungan jarak siap isi. Siswa hitung **5 titik sendiri** (kalkulator/spreadsheet OK). |
| **Live modeling** | Plot 2D di papan/kertas millimeter — **gambar titik live**. |
| **TTS** | Rumus jarak: Tebak "mirip" → Tanya komponen (x,y) → Spelling √ dan kuadrat. |
| **Matematika** | Fokus **makna**, bukti formal SMA tidak wajib — siswa takut calculus = trap modul. |
| **Membaca data** | Latih baca array JS sebagai vektor + pseudocode jarak. |

---

## Materi Inti

### Timeline

```text
2 siswa "dekat" di 2 skor — plot
  → Experience: rekomendasi teman belajar
  → Trap: jarak tanpa normalisasi
  → Clarify: vektor = list angka
  → Concept: jarak · cosine (intuitif)
  → Practice: jarak 5 titik · tetangga terdekat
  → Reflect: KNN vote tetangga
  → Transfer: tensor P06
```

### Opening (menit 0–5)

Dua siswa: `(jam=2, skor=70)` vs `(jam=2.5, skor=72)` — plot di sumbu. "Dekat" secara visual.

### Experience — rekomendasi teman belajar (menit 5–15)

Setiap siswa = vektor minat `[coding, seni, olahraga]` skala 1–5. Cari pasangan **jarak terkecil** — metafora rekomendasi.

### Trap (menit 15–25)

Tambahkan fitur `uang_jajan=50000` tanpa norm — jarak didominasi uang. Tanya: "Rekomendasi masih masuk akal?"

### Practice (menit 45–70)

Dataset 5–8 titik (dari P03 atau contoh guru). Tugas:

1. Normalisasi fitur (jika belum)
2. Hitung jarak query point ke semua
3. Urutkan — sebut 3 tetangga terdekat
4. Vote label (K=3)

### Reflect KNN (menit 70–85)

Tanpa sebut "KNN" dulu — "vote tetangga." Baru hubungkan istilah.

---

## Alur Live Coding / Live Modeling

Spreadsheet atau JS console opsional — **bukan** TF.js hari ini.

### Skrip TTS

```text
[LANGKAH 1 — Plot 2D]
Gambar sumbu jam_belajar (x) vs skor (y) — 2 titik dekat
TTS: Tebak siapa mirip → Tanya fitur apa → Spelling vektor [x,y]
Scope: 5 menit

[LANGKAH 2 — Rekomendasi teman]
3 siswa isi vektor minat — hitung jarak manual 1 pasangan
Scope: 10 menit

[LANGKAH 3 — Trap skala]
Tambah fitur besar — ulang jarak — shock
Demo normalisasi cepat — ulang lagi
Scope: 10 menit

[LANGKAH 4 — Rumus jarak]
Tulis √(Δx²+Δy²) — satu contoh angka
Scope: 10 menit · kalkulator siswa boleh

[LANGKAH 5 — Practice 5 titik]
Query point Q — siswa tabel jarak
Scope: 25 menit

[LANGKAH 6 — Vote tetangga]
K=3 — majority label — prediksi Q
Scope: 15 menit · naming KNN di akhir
```

---

## Latihan Membaca Kode/Data

### Pseudocode jarak

```javascript
// Vektor A dan B — sama panjang
const A = [0.6, 0.85];  // sudah dinormalisasi
const B = [0.5, 0.90];

let sumSq = 0;
for (let i = 0; i < A.length; i++) {
  sumSq += (A[i] - B[i]) ** 2;
}
const jarak = Math.sqrt(sumSq);
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa arti `A[i] - B[i]`? | Selisih fitur ke-i |
| Mengapa `** 2`? | Kuadrat selisih — jarak Euclidean |
| Urutan eksekusi loop? | i=0,1 → akumulasi sumSq → sqrt |
| Prediksi: A dan B dekat atau jauh? | Dekat (selisih kecil) |
| Jika A=[0.6,85] tanpa norm? | Bug skala — fitur 2 dominasi |

### Baca tabel jarak

```text
Titik | jarak ke Q
P1    | 0.12
P2    | 0.45
P3    | 0.10
P4    | 0.38
P5    | 0.11
```

K=3 tetangga terdekat? P3, P5, P1 (0.10, 0.11, 0.12). Label P3,P5,P1 = `{A,A,B}` → vote **A**.

→ referensi: [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Praktik Mandiri Siswa

- Worksheet: 5 titik + 1 query — tabel jarak + 3 tetangga + vote
- Refleksi: "Kenapa normalisasi sebelum jarak?"
- Opsional JS: function `euclidean(a, b)` — ketik sendiri, bukan copas guru
- **Exit:** sebutkan 1 tetangga terdekat + label prediksi

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Takut rumus — freeze | Guru terlalu formal calculus |
| Lupa sqrt — pakai sumSq saja | Guru tidak koreksi makna |
| Urutan fitur acak antar baris | Guru tidak tekankan konsisten kolom |
| Jarak tanpa normalisasi | Guru skip trap skala |
| K=1 tanpa diskusi noise | Guru tidak jelaskan K ganjil untuk vote |
| Anggap KNN = neural network | Guru samakan semua "ML" = DL |

---

## Checklist Exit Guru

- [ ] Plot 2D dan vektor sebagai list — siswa paham
- [ ] Trap skala + normalisasi dijalankan
- [ ] Recall P03 normalisasi
- [ ] Siswa hitung jarak ≥1 contoh manual
- [ ] Vote tetangga (K=3) — prediksi masuk akal
- [ ] Transfer P06 (rank/shape) disebutkan
- [ ] Tidak ada worksheet jawaban penuh di WA
- [ ] Kalkulator/spreadsheet OK — fokus makna

---

## Rujukan modul

- Modul: [XII-S5-P04](../../../kelas-xii/semester-5/XII-S5-P04_vektor-jarak-kesamaan.md)
- Sebelumnya: [XII-S5-P03](./XII-S5-P03_dataset-mini-bersih.md)
- Berikutnya: [XII-S5-P05](./XII-S5-P05_statistik-outlier.md)
