# Handout Siswa — XII-S5-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P09_model-dense-mini.md](../../../kelas-xii/semester-5/XII-S5-P09_model-dense-mini.md)

---

## 1. Tujuan pembelajaran

Dari tutorial copy → **model sendiri** pada dataset P03.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall dataset + tensor shape fitur |
| 5–15 | Concept | Train/test split sederhana · one-hot label (jika perlu) |
| 15–70 | Practice | Train dense kecil pada data tabular siswa |
| 70–85 | Practice | `predict` 3 sampel uji — bandingkan label |
| 85–90 | Exit | Akurasi kasar + 1 prediksi salah |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Akurasi kasar + 1 prediksi salah
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
