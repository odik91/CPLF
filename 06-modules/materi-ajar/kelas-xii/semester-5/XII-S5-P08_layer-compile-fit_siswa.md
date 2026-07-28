# Handout Siswa — XII-S5-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P08_layer-compile-fit.md](../../../kelas-xii/semester-5/XII-S5-P08_layer-compile-fit.md)

---

## 1. Tujuan pembelajaran

Dari “training = sihir” → **langkah terbaca**: layer → compile → fit.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Lebih banyak layer = selalu lebih baik.  
**Aman:** Mulai 1–2 layer dense kecil.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Metafora: resep → masak → cicip (architecture → train → evaluate) |
| 5–15 | Trap | Ubah semua hyperparameter sekaligus |
| 15–25 | Concept | `sequential` · `dense` · `compile` · `fit` |
| 25–35 | Clarify | Input shape harus match fitur |
| 35–55 | Demo | Guru: XOR mini atau 2 titik linear |
| 55–75 | Practice | Siswa ulang dengan angka berbeda — prediksi 1 input |
| 75–90 | Reflect | Apa yang model “belajar”? |

---

## 6. Lembar kerja / latihan

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

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Materi pendamping BRG

- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
