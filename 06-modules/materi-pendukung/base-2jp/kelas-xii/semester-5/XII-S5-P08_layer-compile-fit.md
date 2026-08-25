# Materi Pendukung Guru — XII-S5-P08 Layer, Compile, Fit

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P08 |
| Modul pertemuan | [XII-S5-P08_layer-compile-fit.md](../../../kelas-xii/semester-5/XII-S5-P08_layer-compile-fit.md) |
| Unit | XII5.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T2 |
| MM | MM-18 |
| Formatif | REA, TEC |
| Prasyarat | [P07 TF.js Tensor](./XII-S5-P07_tfjs-tensor-dasar.md) |
| Ada live code? | **Ya — XOR mini atau 2-kelas linear, epoch 10–20 max** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Train classifier end-to-end | → [Train a simple model (iris-style)](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 2 | **Wajib** — Models & layers | → [Models guide](https://www.tensorflow.org/js/guide/models) |
| 3 | **Wajib** — API `tf.sequential`, `dense`, `fit` | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 4 | Layer Dense — units, activation | → [tf.layers.dense](https://js.tensorflow.org/api/latest/#class:LayersModel) |
| 5 | compile — optimizer, loss | → [Model.compile](https://js.tensorflow.org/api/latest/#class:Model) |
| 6 | MLCC — training & loss (intuitif) | → [MLCC — Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss) |
| 7 | StatQuest — Gradient Descent | → [StatQuest YouTube — Gradient Descent](https://www.youtube.com/watch?v=sDv4f4s2SB8) |
| 8 | Neural Network Playground (demo guru saja) | → [TF Playground](https://playground.tensorflow.org/) |
| 9 | ML Crash Course beranda | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 10 | Panduan ML guru CPLF | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

**Baca tutorial #1 minimal sekali end-to-end** — parafrase ke bahasa MA, jangan baca link di kelas.

---

## Pengetahuan Guru

### Metafora resep → masak → cicip

| Langkah TF.js | Metafora dapur | Apa yang terjadi (plain language) |
|---------------|----------------|-----------------------------------|
| **Data → tensor (xs, ys)** | Siapkan bahan & label rasa | Angka fitur + jawaban benar |
| **`tf.sequential([layers])`** | Tulis resep — urutan langkah | Model = pipa layer berturut |
| **`tf.layers.dense({...})`** | Satu "lapisan" memproses semua input | Setiap neuron = kombinasi linear fitur + aktivasi |
| **`model.compile({...})`** | Atur kompor: panas & ukuran wajan | Pilih **optimizer** (cara belajar) + **loss** (cara ukur salah) |
| **`await model.fit(xs, ys, {epochs})`** | Masak berulang — cicip, perbaiki | Model adjust bobot internal tiap epoch |
| **`model.predict(x)`** | Sajikan — tebak rasa baru | Output angka / probabilitas |

Training **bukan sihir** — tiga langkah terbaca: **bangun arsitektur → atur cara belajar → ulang perbaikan**.

### `tf.sequential` — apa ini?

Container model **linear**: output layer 1 → input layer 2 → …  
Cocok untuk MA — tidak perlu graph kompleks.

```javascript
const model = tf.sequential();
model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
```

### `dense` layer — penjelasan tanpa rumus

**Dense** = setiap neuron di layer ini **terhubung ke semua** input.

| Parameter | Arti guru-friendly |
|-----------|-------------------|
| `units` | Berapa "neuron" / output di layer ini |
| `inputShape` | **Hanya layer pertama** — berapa fitur per sampel (tanpa batch). Contoh: 2 fitur → `[2]` |
| `activation: 'relu'` | "Matikan yang negatif" — non-linear sederhana |
| `activation: 'sigmoid'` | Squash ke 0–1 — cocok binary / probabilitas |
| `activation: 'softmax'` | Distribusi probabilitas multi-kelas (jumlah = 1) |

**Trap modul:** Lebih banyak layer ≠ selalu lebih baik. MA: **1–2 dense kecil** dulu.

### `inputShape` — sumber error #1

- Dataset 4 fitur per baris → `inputShape: [4]`
- **Bukan** `[40, 4]` — batch dimensi otomatis ditambahkan TF.js
- Error `inputShape` mismatch = fitur tensor tidak cocok layer pertama

### `model.compile` — optimizer & loss

**Optimizer** = algoritma **cara mengubah bobot** saat model salah.

| Optimizer | Kapan pakai di S5 |
|-----------|-------------------|
| `'adam'` | **Default aman** — adaptive learning rate |
| `'sgd'` | Opsional demo — lebih "manual" |

**Loss** = **skor kesalahan** — semakin kecil semakin baik (idealnya).

| Loss | Kapan |
|------|-------|
| `'binaryCrossentropy'` | 2 kelas (0/1) |
| `'categoricalCrossentropy'` | Multi-kelas + label one-hot |
| `'meanSquaredError'` | Regresi (prediksi angka) |

**Metrics** (opsional): `'accuracy'` — persentase benar; mudah dibaca siswa.

### `model.fit` — epochs & batch

| Parameter | Arti |
|-----------|------|
| `epochs` | Berapa kali model **lihat seluruh dataset** dan update bobot |
| `batchSize` | Berapa sampel per langkah update (default OK untuk data kecil) |
| `shuffle: true` | Acak urutan — good practice |
| `callbacks` | P10 — log loss per epoch |

**Lab MA:** `epochs: 10–20` **maksimum** untuk demo — hindari hang.

`fit` adalah **async** — wajib `await model.fit(...)` atau `.then()`.

### Contoh XOR mini (2 input, 1 output binary)

XOR = klasik non-linear — 2 fitur, label 0/1:

| x1 | x2 | y |
|----|----|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**Alternatif lebih mudah:** 2 titik linear — kelas A vs B di 2D (lihat kode referensi di bawah).

### `predict` — shape output

```javascript
const pred = model.predict(tf.tensor2d([[0, 1]]));
pred.print(); // mis. [[0.73]]
pred.dispose();
```

Output = tensor — **dispose** setelah baca.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P07 — dataset 8 baris, 3 fitur — shape xs?" | `[8, 3]` |
| "Kenapa tensor, bukan array biasa di fit?" | TF.js API training expect tf.Tensor |
| "P03 — normalisasi 0–1 kenapa penting?" | Angka fitur seimbang — loss tidak explode (P10 NaN) |
| "Layer pertama inputShape [2] — artinya?" | Setiap sampel punya 2 fitur |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No starter notebook** | File HTML kosong — CDN + script kosong |
| **Live type** | Guru ketik sequential → dense → compile → fit **per blok** |
| **TTS per scope** | Scope `model.add(...)`, scope `compile({})`, scope `fit({epochs:15})` |
| **Epoch cap** | Guru sebutkan "10–20 cukup di lab" — jangan 500 live |
| **Trap live** | Ubah semua hyperparameter sekaligus → tunjukkan bingung debug → ubah satu per satu |
| **No copas tutorial iris** | XOR/2-kelas **versi guru ketik** — siswa angka beda |

---

## Materi Inti

### Transformasi belajar

**Dari:** "Training = sihir / black box"  
**Ke:** **Langkah terbaca:** layer → compile → fit → predict.

### Cognitive trap (modul)

**Asumsi salah:** Lebih banyak layer selalu lebih baik.  
**Respons guru:** Mulai 1 hidden layer kecil (4–8 units). XOR butuh non-linear — **1 hidden** cukup demo.

### Pipeline lengkap (2-kelas linear — alternatif XOR)

→ referensi: [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier)

```javascript
// Data: 2 fitur, 2 kelas (0 atau 1) — 6 sampel
const xs = tf.tensor2d([
  [0.1, 0.2], [0.2, 0.3], [0.15, 0.25],  // kelas 0
  [0.8, 0.9], [0.85, 0.95], [0.9, 0.85],  // kelas 1
]);
const ys = tf.tensor2d([[0], [0], [0], [1], [1], [1]]);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

await model.fit(xs, ys, {
  epochs: 15,
  shuffle: true,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(`Epoch ${epoch + 1}: loss=${logs.loss.toFixed(4)} acc=${logs.acc.toFixed(4)}`);
    },
  },
});

const testInput = tf.tensor2d([[0.12, 0.22]]); // dekat kelas 0
const out = model.predict(testInput);
out.print();
testInput.dispose();
out.dispose();
xs.dispose();
ys.dispose();
```

### XOR referensi (jika kelas siap)

```javascript
const xs = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]]);
const ys = tf.tensor2d([[0],[1],[1],[0]]);
// model sama: inputShape [2], hidden 4 relu, output 1 sigmoid
// epochs: 20
```

→ referensi: [Models guide — sequential](https://www.tensorflow.org/js/guide/models#sequential-models)

---

## Alur Live Coding — line by line TTS

```text
[LANGKAH 1 — Opening 0–5 menit]
Metafora: "Resep → masak → cicip."
Tanya: "P07 tensor — hari ini tensor jadi bahan training."
HTML kosong + CDN TF.js (ulang P07 — recall cepat).

[LANGKAH 2 — Trap 5–15 menit]
Tulis di papan: units=100, layers=5, epochs=500, lr=??? sekaligus.
Ucapkan: "Kalau semua diubah — kita tidak tahu yang bikin jelek apa."
Reset: satu variabel per eksperimen (P10 lanjut).

[LANGKAH 3 — Concept 15–25 menit]
Ketik const xs dan const ys — 2-kelas linear (6 baris).
TTS scope tensor2d data:
  Tebak: "Baris pertama xs — fitur apa?"
  Tanya: "ys [[0],[0],[0],[1]...] — artinya?"
  Spelling: "xs = input, ys = jawaban yang kita harapkan model pelajari."

[LANGKAH 4 — Sequential + Dense 25–35 menit]
Ketik: const model = tf.sequential();
TTS: "sequential = layer berantai — output L1 masuk L2."
Ketik model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: 'relu' }));
TTS scope dense layer 1:
  Tebak: "inputShape [2] — dari mana?"
  Tanya: "Kalau fitur 3 — ubah apa?"
  Spelling: "units 4 = 4 neuron hidden; relu = aktivasi non-linear."
Ketik layer output: units 1, sigmoid.
TTS: "sigmoid → output 0–1 = probabilitas kelas 1."

[LANGKAH 5 — Compile 35–45 menit]
Ketik model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });
TTS scope compile:
  Tebak: "Loss binaryCrossentropy — untuk berapa kelas?"
  Tanya: "Optimizer adam — perlu hafal rumus?"
  Spelling: "compile = siapkan cara belajar + cara ukur salah — belum training."
→ referensi: MLCC Training and Loss

[LANGKAH 6 — Fit 45–55 menit]
Bungkus async: (async () => { ... })();
Ketik await model.fit(xs, ys, { epochs: 15, shuffle: true, callbacks: {...} });
TTS scope fit:
  Tebak: "Epoch 15 — model lihat data berapa putaran penuh?"
  Tanya: "Console loss turun — artinya?"
  Spelling: "await — fit async; browser tidak freeze total tapi tetap berat."
Tunggu log epoch — baca loss/acc bersama.

[LANGKAH 7 — Demo predict 55–75 menit]
Ketik predict 1 sampel dekat kelas 0 dan kelas 1.
TTS: "Prediksi 0.08 ≈ kelas 0; 0.91 ≈ kelas 1."
Siswa ulang dengan angka xs/ys **beda** (shift 0.05) — epochs 15.
Predict 1 input baru — bandingkan dengan label.

[LANGKAH 8 — Reflect 75–90 menit]
Tanya: "Model 'belajar' apa? — pola angka xs → ys"
Exit: "Satu baris kode paling membingungkan + artinya menurut kamu."
Dispose xs, ys, model (model.dispose() atau tf.disposeVariables).
```

---

## Latihan Membaca Kode

### Snippet A — inputShape salah

```javascript
const xs = tf.tensor2d([[1, 2, 3], [4, 5, 6]]); // [2,3]
const model = tf.sequential();
model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: 'relu' }));
```

| Pertanyaan | Kunci |
|------------|-------|
| Saat fit — error? | **Shape mismatch** — data 3 fitur, layer expect 2 |
| Fix? | `inputShape: [3]` |

### Snippet B — compile tanpa fit

```javascript
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
const pred = model.predict(tf.tensor2d([[0.5, 0.5]]));
```

| Pertanyaan | Kunci |
|------------|-------|
| predict sebelum fit — valid? | **Jalan** tapi output **random** — bobot belum dilatih |
| Urutan benar? | compile → fit → predict |

### Snippet C — loss salah untuk task

```javascript
// ys multi-kelas one-hot [[1,0],[0,1]]
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' });
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | binary loss untuk multi-kelas — pakai `categoricalCrossentropy` + softmax output |

### Snippet D — lupa await

```javascript
model.fit(xs, ys, { epochs: 10 });
console.log("Selesai");
model.predict(test);
```

| Pertanyaan | Kunci |
|------------|-------|
| Gejala? | "Selesai" muncul **sebelum** training benar-benar selesai; predict prematur |
| Fix? | `await model.fit(...)` dalam async function |

---

## Praktik Mandiri

1. Pilih **XOR** atau **2-kelas linear** — tulis xs/ys sendiri (min 4 sampel).
2. Model: 1 hidden (4 units relu) + output sigmoid.
3. compile adam + binaryCrossentropy + accuracy.
4. fit **epochs 10–20** — log loss di console.
5. predict **2 input** — 1 dekat kelas 0, 1 dekat kelas 1.
6. Refleksi 3 kalimat: "Apa yang model belajar?"

**Variasi lambat:** guru beri angka xs/ys di papan — siswa ketik structure.  
**Variasi cepat:** coba hidden 2 vs 8 units — bandingkan loss akhir (epoch tetap 15).

---

## Kesalahan Umum

| Gejala | Penyebab | Guru |
|--------|----------|------|
| `inputShape` error | Fitur ≠ layer | Trace: `xs.shape[1]` vs `inputShape[0]` |
| Loss NaN | Data tidak dinormalisasi / lr besar | Normalisasi 0–1; adam default |
| Browser hang | epochs 200+ | Cap 20; batch kecil |
| Akurasi 100% langsung | Data terlalu mudah / terlalu sedikit | OK untuk demo — jelaskan P10 overfit |
| Copas tutorial iris | Etika | Ubah dataset; siswa jelaskan tiap baris |
| "Lebih banyak layer!" | Trap kognitif | Tahan — 2 layer cukup S5 |

---

## Rujukan

- Modul: [XII-S5-P08](../../../kelas-xii/semester-5/XII-S5-P08_layer-compile-fit.md)
- Sebelumnya: [P07](./XII-S5-P07_tfjs-tensor-dasar.md)
- Lanjutan: [P09 Model Dense Mini](./XII-S5-P09_model-dense-mini.md)
- Panduan ML: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---

## Checklist Exit

- [ ] Siswa jelaskan urutan: sequential → compile → fit → predict
- [ ] Model jalan epoch 10–20 — log loss terlihat
- [ ] Minimal 1 prediksi input baru + interpretasi (≈0 atau ≈1)
- [ ] inputShape cocok dengan jumlah fitur
- [ ] Tidak distribusi notebook starter
- [ ] Recall P07 tensor + P03 normalisasi terpasang

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)
