# Handout Siswa — XII-S5-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P06_tensor-dari-scalar.md](../../../kelas-xii/semester-5/XII-S5-P06_tensor-dari-scalar.md)

---

## 1. Tujuan pembelajaran

Dari “tensor menakutkan” → **generalisasi** scalar → vector → matrix → tensor.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Satu angka · satu baris · satu tabel — rank? |
| 5–15 | Experience | **Pixel foto** = matrix angka |
| 15–25 | Trap | Campur shape (3,2) vs (2,3) |
| 25–35 | Clarify | Shape · dtype · rank |
| 35–45 | Concept | Diagram ladder scalar→tensor |
| 45–70 | Practice | Tulis shape 5 contoh (batch, fitur, citra mini) |
| 70–85 | Reflect | Mengapa batch? |
| 85–90 | Preview | TF.js besok P07 |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
