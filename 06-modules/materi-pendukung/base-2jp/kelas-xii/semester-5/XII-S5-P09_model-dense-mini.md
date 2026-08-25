# Materi Pendukung Guru — XII-S5-P09 Model Dense Mini

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P09 |
| Modul pertemuan | [XII-S5-P09_model-dense-mini.md](../../../kelas-xii/semester-5/XII-S5-P09_model-dense-mini.md) |
| Unit | XII5.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T2 |
| Formatif | TEC, ITR |
| Prasyarat | [P08 Layer/Compile/Fit](./XII-S5-P08_layer-compile-fit.md), dataset [P03](./XII-S5-P03_dataset-mini-bersih.md) |
| Ada live code? | **Ya — train dense pada dataset tabular siswa, epoch 10–20** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Train classifier tabular | → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 2 | **Wajib** — Models & input shape | → [Models guide](https://www.tensorflow.org/js/guide/models) |
| 3 | **Wajib** — API Reference | → [TF.js API](https://js.tensorflow.org/api/latest/) |
| 4 | One-hot encoding (multi-kelas) | → [MLCC — Classification](https://developers.google.com/machine-learning/crash-course/logistic-regression/classification) |
| 5 | Train/test split intuitif | → [MLCC — Training and Test Sets](https://developers.google.com/machine-learning/crash-course/training-and-test-sets/video-lecture) |
| 6 | StatQuest — Train/Test split | → [StatQuest — Machine Learning Fundamentals](https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2Gfuqf) |
| 7 | Memory / tf.tidy saat pipeline | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 8 | ML Crash Course | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 9 | Normalisasi fitur | → [MLCC — Numeric data](https://developers.google.com/machine-learning/crash-course/representation/numeric-data) |
| 10 | Panduan ML CPLF | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

---

## Pengetahuan Guru

### Transformasi hari ini

**Dari:** Tutorial XOR/2 titik (P08) — angka guru  
**Ke:** **Model sendiri** pada dataset tabular hasil P03 — pipeline nyata menuju PRJ S5.

### Pipeline lengkap (guru harus bisa jelaskan tanpa rumus)

```text
CSV/JSON P03
  → baca ke array JS
  → pisah fitur (X) vs label (y)
  → normalisasi fitur numerik (0–1) — spiral P03
  → encoding label (0/1 atau one-hot jika ≥3 kelas)
  → tf.tensor2d(xs), tf.tensor2d(ys)
  → sequential + dense
  → compile (loss sesuai kelas)
  → fit epochs 10–20
  → predict 3 sampel uji
  → bandingkan pred vs label + akurasi kasar
```

### Train/test split sederhana (MA)

**Bukan** statistik formal — **hold-out intuitif**:

- 80% baris → training (`xsTrain`, `ysTrain`)
- 20% baris → uji (`xsTest`, `ysTest`) — **jangan** dipakai saat fit

Cara manual MA: acak urutan array (shuffle index) atau ambil baris genap/train, ganjil/test.

**Mengapa?** Supaya prediksi uji = model belum "hafal" baris itu (jembatan P10 overfit).

### Normalisasi — spiral P03

Fitur skala beda (umur 0–100, skor 0–1) → loss tidak stabil.

```javascript
function normalizeColumn(values) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return values.map(v => (v - min) / (max - min || 1));
}
```

Guru: jelaskan **kenapa** — bukan hanya copy function.

### Encoding label

| Kelas | ys format | Output layer | Loss |
|-------|-----------|--------------|------|
| 2 kelas | `[[0],[1],...]` | 1 unit sigmoid | `binaryCrossentropy` |
| 3+ kelas | one-hot `[[1,0,0],[0,1,0],...]` | N unit softmax | `categoricalCrossentropy` |

**One-hot** = vektor dengan satu `1` di posisi kelas benar.

Contoh 3 kelas (A=0, B=1, C=2):

```javascript
// label 1 (B) → [0, 1, 0]
```

### Arsitektur dense mini (template batasan S5)

| Parameter | Rekomendasi MA |
|-----------|----------------|
| Hidden layers | **1** (opsional 2) |
| Units hidden | 4–16 (≤ jumlah fitur × 2) |
| Epochs | **10–20** |
| Optimizer | `adam` |
| Batch size | default atau 4–8 |

**Template batasan PRJ:** model kecil — bukan deep learning showcase.

### Akurasi kasar

```javascript
// Binary: pred > 0.5 → kelas 1
const preds = model.predict(xsTest);
const predData = await preds.data();
// bandingkan dengan ysTest — hitung % benar
```

Guru: akurasi **bukan** tujuan akhir — **interpretasi + prediksi salah 1 contoh** (modul).

### `tf.tidy` untuk pipeline

Saat normalisasi + tensor banyak, bungkus:

```javascript
const [xsTensor, ysTensor] = tf.tidy(() => {
  return [tf.tensor2d(xsNorm), tf.tensor2d(ys)];
});
```

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P08 — urutan compile vs fit?" | compile dulu, baru fit |
| "Dataset P03 — berapa baris, berapa kelas?" | (siswa sebut sendiri) |
| "Normalisasi — kenapa?" | Skala fitur seimbang |
| "inputShape dari mana?" | Jumlah kolom fitur — `xs[0].length` |

---

## Etika Penyampaian

| Aturan | Penerapan |
|--------|-----------|
| **No starter notebook** | Siswa bawa dataset P03 + HTML P08 — extend, bukan file baru guru |
| **Live type** | Guru demo **potongan** pipeline (normalisasi → tensor) — siswa lengkapi sendiri |
| **Dataset siswa beda** | Dilarang satu CSV guru untuk semua |
| **TTS** | Scope: split data, scope: compile loss choice, scope: predict interpret |
| **No copas iris tutorial** | Wajib dataset P03 sendiri |

---

## Materi Inti

### Target modul

- Model jalan browser · ≥2 kelas · log loss console
- Predict 3 sampel uji — bandingkan label
- Exit: 1 prediksi salah + tebak kenapa

### Contoh struktur kode (referensi guru — jangan distribusi)

→ referensi: [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier)

```javascript
// --- Data dari P03 (contoh: 2 kelas, 4 fitur) ---
const raw = [
  { fitur: [0.2, 0.5, 1, 0.3], label: 0 },
  { fitur: [0.8, 0.9, 0.7, 0.85], label: 1 },
  // ... ≥40 baris siswa
];

// Split manual 80/20 (indeks acak atau pola sederhana)
const train = raw.slice(0, Math.floor(raw.length * 0.8));
const test = raw.slice(Math.floor(raw.length * 0.8));

const xsTrain = train.map(r => r.fitur);
const ysTrain = train.map(r => [r.label]);
const xsTest = test.map(r => r.fitur);
const ysTest = test.map(r => [r.label]);

const numFeatures = xsTrain[0].length;

const xs = tf.tensor2d(xsTrain);
const ys = tf.tensor2d(ysTrain);

const model = tf.sequential();
model.add(tf.layers.dense({
  units: 8,
  inputShape: [numFeatures],
  activation: 'relu',
}));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

await model.fit(xs, ys, {
  epochs: 15,
  callbacks: {
    onEpochEnd: (epoch, logs) => console.log(`E${epoch + 1}`, logs.loss.toFixed(4)),
  },
});

// Predict 3 uji
const xsTestTensor = tf.tensor2d(xsTest.slice(0, 3));
const predictions = model.predict(xsTestTensor);
predictions.print();
// Bandingkan dengan ysTest[0..2]
```

→ referensi: [Models — creating](https://www.tensorflow.org/js/guide/models#creating-a-model)

### Multi-kelas (3 kelas) — catatan guru

Output layer `units: 3, activation: 'softmax'`, loss `categoricalCrossentropy`, ys one-hot.

---

## Alur Live Coding — line by line TTS

```text
[LANGKAH 1 — Opening 0–5 menit]
Recall dataset P03 — tampilkan 1 baris JSON/CSV siswa volunteer.
Tanya: "Fitur apa? Label apa? Sudah bersih P03?"

[LANGKAH 2 — Concept split 5–15 menit]
Gambar di papan: 40 baris → 32 train | 8 test.
TTS: "Test = kuis model belum pernah lihat saat belajar."
Siswa tulis split di kode — tidak perlu library.

[LANGKAH 3 — Normalisasi 15–25 menit]
Live function normalizeColumn — 1 fitur dulu.
TTS scope:
  Tebak: "Max-min 0 — bahaya?"
  Spelling: "|| 1" cegah bagi nol.
Apply ke semua kolom numerik.

[LANGKAH 4 — Tensor 25–35 menit]
const numFeatures = xsTrain[0].length;
const xs = tf.tensor2d(xsTrain);
TTS: "numFeatures → inputShape [numFeatures] — jangan hardcode salah."

[LANGKAH 5 — Model 35–50 menit]
Ulang P08 structure — siswa ketik sendiri.
Sesuaikan inputShape dengan dataset **mereka**.
TTS compile: binary vs categorical — tanya jumlah kelas.

[LANGKAH 6 — Fit 50–65 menit]
epochs: 15 — log loss.
Guru: "Loss turun tidak garanti benar semua — P10."

[LANGKAH 7 — Predict 65–85 menit]
Predict 3 test — print + bandingkan label.
Cari 1 salah — diskusi: outlier? terlalu sedikit data? fitur lemah?
Hitung akurasi kasar manual (benar/3).

[LANGKAH 8 — Exit 85–90 menit]
Exit ticket: 1 prediksi salah + hipotesis.
Dispose tensors.
```

---

## Latihan Membaca Kode

### Snippet A — train on all data, "uji" sama

```javascript
await model.fit(xsAll, ysAll, { epochs: 20 });
const acc = evaluate(model, xsAll, ysAll); // 100%
```

| Pertanyaan | Kunci |
|------------|-------|
| Akurasi 100% — percaya? | **Curiga** — mungkin hafal, bukan generalisasi (P10) |
| Fix? | Hold-out test terpisah |

### Snippet B — shape ys salah

```javascript
const ys = tf.tensor1d([0, 1, 0, 1]); // rank 1
model.compile({ loss: 'binaryCrossentropy' });
```

| Pertanyaan | Kunci |
|------------|-------|
| Error? | Often shape — expect `tensor2d` `[[0],[1],...]` |
| Fix? | `tf.tensor2d(ys.map(y => [y]))` |

### Snippet C — lupa normalisasi

```javascript
// fitur: [1000, 0.5, 2, 800]
```

| Pertanyaan | Kunci |
|------------|-------|
| Gejala training? | Loss NaN atau lambat converge |
| Fix? | Normalisasi per kolom |

### Snippet D — 3 kelas, sigmoid output

```javascript
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
// labels: 0, 1, 2
```

| Pertanyaan | Kunci |
|-----------|-------|
| Masalah? | 3 kelas butuh 3 output softmax + categoricalCrossentropy |

---

## Praktik Mandiri

1. Dataset P03 (≥40 baris, ≥2 kelas) — pipeline end-to-end.
2. Normalisasi + split 80/20.
3. Dense mini — epochs **10–20**.
4. Log loss + akurasi train (console).
5. Predict **3 sampel test** — tabel: input | pred | label | benar?
6. Tulis **1 paragraf**: prediksi salah paling menarik + kenapa.

**Variasi:** Chart.js loss (opsional) — lihat P10.  
**Variasi cepat:** bandingkan hidden 4 vs 12 units — epoch tetap 15.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Shape mismatch | Trace xs.shape vs inputShape |
| Semua label 0 | Cek encoding — imbalance ekstrem |
| Copy dataset teman | Etika + data berbeda = model berbeda |
| Epoch 100+ | Cap 20 |
| Klaim "AI akurat" | Minta tunjukkan 1 prediksi salah |
| Skip README dataset | Ingatkan dokumentasi kolom (P03) |

---

## Rujukan

- Modul: [XII-S5-P09](../../../kelas-xii/semester-5/XII-S5-P09_model-dense-mini.md)
- [P08](./XII-S5-P08_layer-compile-fit.md) · [P03 dataset](./XII-S5-P03_dataset-mini-bersih.md)
- Lanjutan: [P10 Loss & Overfit](./XII-S5-P10_loss-epoch-overfitting.md)
- PRJ nanti: [PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md)

---

## Checklist Exit

- [ ] Model dense pada dataset P03 siswa — bukan demo XOR saja
- [ ] Loss ter-log; epochs ≤20
- [ ] 3 prediksi uji + 1 analisis salah
- [ ] Normalisasi diterapkan
- [ ] Split train/test sederhana ada
- [ ] No starter notebook distributed

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)
