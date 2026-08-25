# Materi Pendukung Guru — XII-S5-P06 Tensor: dari Scalar ke Matrix

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P06 |
| Modul pertemuan | [XII-S5-P06_tensor-dari-scalar.md](../../../kelas-xii/semester-5/XII-S5-P06_tensor-dari-scalar.md) |
| Semester | 5 · Pertemuan 6/18 |
| Unit | XII5.5 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-T2 |
| MM | MM-16 |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |
| **Catatan** | Belum coding TF.js penuh — intuisi shape; preview TF.js di penutup |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Tensors & operations (TF.js) | → referensi: [TF.js — Tensors](https://www.tensorflow.org/js/guide/tensors_operations) |
| Tensor shapes | → referensi: [TF.js — Tensor shapes](https://www.tensorflow.org/js/guide/tensors_operations#shapes) |
| Ranks of tensors | → referensi: [TensorFlow — Rank](https://www.tensorflow.org/guide/tensor#rank) |
| Scalar / vector / matrix intuitif | → referensi: [Khan Academy — Matrices](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices) |
| Image as numbers | → referensi: [MLCC — Image Data](https://developers.google.com/machine-learning/crash-course/image-data/image-data) |
| Batch dimension | → referensi: [MLCC — Batching](https://developers.google.com/machine-learning/crash-course/training-data/batching) |
| TF.js get started (preview P07) | → referensi: [Get started with TensorFlow.js](https://www.tensorflow.org/js/tutorials/getting_started) |
| Neural network playground (demo guru) | → referensi: [Neural Network Playground](https://playground.tensorflow.org/) |

**Waktu baca minimum guru:** 45 menit (TF.js tensors guide + skim get started P07).

---

## Pengetahuan yang Dikuasai Guru

### Tensor = generalisasi angka multidimensi

Siswa takut istilah **tensor** karena association dengan fisika/DL rumit. CPLF: tensor = **container angka** dengan **shape** (bentuk) dan **rank** (jumlah dimensi).

| Rank | Nama umum | Contoh shape | Contoh MA |
|------|-----------|--------------|-----------|
| 0 | Scalar | `[]` atau `( )` | Satu loss value: `0.42` |
| 1 | Vector | `[3]` | Satu baris fitur: `[0.2, 0.8, 1]` |
| 2 | Matrix | `[4, 3]` | 4 siswa × 3 fitur |
| 3+ | Tensor | `[32, 64, 64, 3]` | Batch foto (P08+ preview saja) |

→ referensi: [TensorFlow — Rank](https://www.tensorflow.org/guide/tensor#rank)

### Shape notation

`[baris, kolom]` untuk matrix — **urutan penting**.

Trap modul: `(3, 2)` ≠ `(2, 3)` — 3 baris 2 kolom vs 2 baris 3 kolom.

Contoh dataset P03: 40 baris, 3 fitur numerik → shape **`[40, 3]`** (batch implicit = semua baris).

→ referensi: [TF.js — Tensor shapes](https://www.tensorflow.org/js/guide/tensors_operations#shapes)

### dtype (tipe data)

Angka desimal → `float32` (default TF.js). Integer label → kadang `int32`.

S5: cukup tahu **angka harus numerik konsisten** — string `"85"` belum siap tensor tanpa parse.

### Pixel foto = matrix (Experience)

Gambar grayscale 4×4 = matrix 4×4 angka 0–255. RGB = rank 3 (tinggi × lebar × channel).

→ referensi: [MLCC — Image Data](https://developers.google.com/machine-learning/crash-course/image-data/image-data)

### Batch — mengapa banyak sekaligus?

Training efisien jika proses **banyak contoh sekaligus** — dimensi batch di depan shape.

Contoh: 32 gambar 28×28 grayscale → `[32, 28, 28]`.

Untuk dataset tabular S5: `[jumlah_baris, jumlah_fitur]` sudah cukup.

→ referensi: [MLCC — Batching](https://developers.google.com/machine-learning/crash-course/training-data/batching)

### Hubungan ke materi sebelumnya

- P04 vektor = rank 1
- P03 dataset = matrix fitur + vector label terpisah
- P07: `tf.tensor2d([[...], [...]])` — coding besok

### Preview TF.js (penutup — **bukan** practice utama hari ini)

```javascript
// PREVIEW GURU — jangan copas ke siswa sebagai starter
import * as tf from '@tensorflow/tfjs';
const xs = tf.tensor2d([[0.1, 0.2], [0.3, 0.4]], [2, 2]);
console.log(xs.shape);  // [2, 2]
xs.dispose();
```

→ referensi: [Get started with TensorFlow.js](https://www.tensorflow.org/js/tutorials/getting_started)

**Memory:** tensor pakai memori browser — preview sebut `dispose()` — detail P07.

→ referensi: [TF.js — Memory / dispose](https://www.tensorflow.org/js/guide/tensors_operations#memory)

---

## Recall Spiral

| Pertanyaan | Inti |
|------------|------|
| P04: Vektor = ? | List angka urutan fitur — rank 1 |
| P03: 40 baris 3 fitur — bentuk? | Matrix 40×3 |
| P05: EDA sebelum train? | Pahami data sebelum `fit` |
| P02: xs vs ys (preview) | xs = fitur tensor; ys = label tensor — P08 |

---

## Etika Penyampaian

| Aturan | Penerapan P06 |
|--------|---------------|
| **No copas** | Jangan bagikan notebook TF.js siap jalan. Practice = **tulis shape di kertas** + diagram ladder. |
| **Live modeling** | Gambar ladder scalar→tensor; contoh pixel grid di papan. |
| **TF.js preview** | Guru **live ketik 3–5 baris** preview di penutup — siswa **baca**, belum wajib ketik semua. |
| **TTS** | Rank → shape → dtype — satu scope; contoh `(3,2)` vs `(2,3)` trap terpisah. |
| **Playground** | Hanya **demo guru** 2 menit — bukan target siswa (panduan CPLF). |

---

## Materi Inti

### Timeline

```text
Satu angka · baris · tabel — rank?
  → Experience: pixel foto = matrix
  → Trap: (3,2) vs (2,3)
  → Clarify: shape · dtype · rank
  → Concept: ladder scalar→tensor
  → Practice: shape 5 contoh
  → Reflect: mengapa batch?
  → Preview TF.js P07
```

### Opening (menit 0–5)

Tulis: `7` | `[2, 5, 1]` | tabel 2×3 — tanya rank masing-masing.

### Experience pixel (menit 5–15)

Grid 4×4 di papan — isi angka keabuan. "Foto = angka."

### Trap shape (menit 15–25)

Dua matrix sketsa — `(3,2)` vs `(2,3)` — siswa jumlah elemen sama (6) tapi **art/layout beda**.

### Practice (menit 45–70)

Tulis shape untuk 5 contoh:

1. Satu suhu ruangan
2. Vektor 5 fitur satu siswa
3. Dataset 40×3 fitur
4. Batch 16 gambar 28×28 grayscale
5. Label 40 kelas binary `[40, 1]`

Kunci contoh 5: `[40, 1]` atau `[40]` — diskusikan konvensi TF.js P07.

### Reflect batch (menit 70–85)

Kenapa tidak train 1 baris per step? — efisiensi + stabilisasi gradient (intuitif: "belajar dari banyak contoh sekaligus").

### Preview P07 (menit 85–90)

Proyeksikan CDN TF.js + `tf.tensor2d` + `shape` — **TTS baca**, siswa prediksi output.

---

## Alur Live Coding / Live Modeling

### Skrip TTS

```text
[LANGKAH 1 — Rank opening]
Tulis scalar · vector · matrix
TTS per item: Tebak rank → Spelling 0,1,2
Scope: 5 menit

[LANGKAH 2 — Pixel grid]
Gambar 4×4 — isi angka — "ini tensor rank 2"
Scope: 10 menit

[LANGKAH 3 — Trap (3,2) vs (2,3)]
Dua sketsa — swap interpretasi baris/kolom
Scope: 10 menit

[LANGKAH 4 — Ladder diagram]
Scalar → vector → matrix → tensor 3D (batch foto)
Scope: 10 menit

[LANGKAH 5 — Practice 5 shape]
Siswa kertas — peer check
Scope: 25 menit

[LANGKAH 6 — Reflect batch]
Analogi: ujian 1 soal vs 20 soal sekaligus belajar pola
Scope: 10 menit

[LANGKAH 7 — Preview TF.js]
Guru ketik live — siswa baca shape di console
Scope: 5 menit · dispose disebut
```

---

## Latihan Membaca Kode/Data

### Baca shape tanpa kode

```text
Dataset: 40 siswa, fitur [jam_belajar, skor, rating_enc]
Label: 40 nilai 0 atau 1

xs shape: [40, 3]
ys shape: [40, 1] atau [40]
```

| Pertanyaan | Kunci |
|------------|-------|
| Rank xs? | 2 (matrix) |
| Apa arti 40 di depan? | Batch / jumlah contoh |
| Apa arti 3? | Jumlah fitur per contoh |
| Jika xs `[3, 40]`? | **Salah** — fitur jadi 40, contoh 3 — trap |
| Elemen total xs? | 40 × 3 = 120 |

### Preview baca TF.js (guru proyeksikan)

```javascript
const t = tf.tensor2d([1, 2, 3, 4, 5, 6], [2, 3]);
// baris1: 1,2,3  baris2: 4,5,6
console.log(t.shape);  // [2, 3]
console.log(t.rank);     // 2
```

Prediksi sebelum run: shape `[2,3]`, rank 2.

→ referensi: [TF.js — Tensors](https://www.tensorflow.org/js/guide/tensors_operations)

### Baca dataset JSON sebagai tensor mental

```json
[[0.2, 0.8], [0.5, 0.5], [0.1, 0.9]]
```

Shape `[3, 2]` — 3 observasi, 2 fitur.

---

## Praktik Mandiri Siswa

- Worksheet: 5 contoh shape + rank + 1 kalimat interpretasi
- Gambar ladder scalar→tensor (tangan)
- Refleksi: "Dataset P03 saya shape-nya …"
- **Exit:** tulis shape xs untuk dataset kelompok
- Opsional: lihat preview TF.js — **catat** `shape` di buku, tidak wajib install

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Tensor = "rumus sulit" | Guru over-matematis |
| Swap baris/kolom shape | Guru tidak jalankan trap |
| Anggap `[40, 3]` = 43 elemen | Guru tidak hitung elemen |
| Langsung full TF.js tanpa shape | Guru skip ladder — error P07 |
| Playground siswa main lama | Guru kehilangan waktu inti |
| Lupa dispose (P07+) | Preview P06 sebut tapi detail nanti |

---

## Checklist Exit Guru

- [ ] Ladder scalar→tensor — siswa bisa sebut rank
- [ ] Trap (3,2) vs (2,3) dijalankan
- [ ] Recall P04 vektor = rank 1
- [ ] Practice 5 shape — peer verified
- [ ] Shape dataset P03 disebut per kelompok
- [ ] Preview TF.js — siswa **baca** shape (belum wajib ketik penuh)
- [ ] Playground hanya demo singkat guru (jika dipakai)
- [ ] Tidak ada starter TF.js file di WA
- [ ] Transfer P07 eksplisit

---

## Rujukan modul

- Modul: [XII-S5-P06](../../../kelas-xii/semester-5/XII-S5-P06_tensor-dari-scalar.md)
- Sebelumnya: [XII-S5-P05](./XII-S5-P05_statistik-outlier.md)
- Berikutnya: [XII-S5-P07](./XII-S5-P07_tfjs-tensor-dasar.md)
- Panduan: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)
