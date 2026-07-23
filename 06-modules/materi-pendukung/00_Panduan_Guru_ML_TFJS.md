# Panduan Guru — ML & TensorFlow.js (Kelas XII S5)

**Version:** 0.1 (Draft)  
**Audiens:** Guru Multimedia MA yang **bukan** spesialis ML — wajib baca sebelum Semester 5.

## Filosofi CPLF di S5

> Siswa XII belajar **berpikir dengan data + batasan model**, bukan menjadi peneliti ML.  
> Guru tidak perlu hafal rumus — perlu **paham alur** dan **jujur** tentang batas kemampuan sendiri & model.

**Etika tetap berlaku:** [00_Panduan_Etika_Penyampaian.md](../00_Panduan_Etika_Penyampaian.md) — live coding, no copas, TTS per baris.

---

## Peta 18 pertemuan (ringkas)

| Minggu | Unit | Inti guru harus paham |
|--------|------|------------------------|
| P01 | XII5.1 | AI ≠ ML ≠ DL — peta konsep |
| P02–P03 | XII5.2 | Data = bahan bakar; bersihkan sebelum train |
| P04 | XII5.3 | Vektor, jarak (intuitif) |
| P05 | XII5.4 | Mean, sebaran, outlier |
| P06–P07 | XII5.5 | Scalar → tensor; `tf.tensor` |
| P08–P09 | XII5.6 | layer → compile → fit → predict |
| P10, P15 | XII5.7 | Loss, epoch, overfitting |
| P11–P14, P16–P18 | XII5.8 | Project + batasan model |

---

## Referensi inti (bookmark guru)

### TensorFlow.js (wajib)

| Topik | Referensi |
|-------|-----------|
| Beranda TF.js | → [TensorFlow.js](https://www.tensorflow.org/js) |
| Tutorial resmi | → [TF.js Tutorials](https://www.tensorflow.org/js/tutorials) |
| Mulai cepat | → [Get started with TensorFlow.js](https://www.tensorflow.org/js/tutorials/getting_started) |
| Train classifier sederhana | → [Train a simple model (iris-style)](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| API lengkap | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| CDN script | → [Setup via CDN](https://www.tensorflow.org/js/tutorials/setup) — `<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>` |
| Memory / dispose | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |

### Konsep ML (bahasa mudah)

| Topik | Referensi |
|-------|-----------|
| ML Crash Course (Google) — gratis | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| Bab: loss & gradient (intuitif) | → [MLCC — Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss) |
| Overfitting | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| StatQuest (video pendek, sangat guru-friendly) | → [StatQuest YouTube](https://www.youtube.com/c/joshstarmer) — cari: "Overfitting", "Train/Test", "Gradient Descent" |
| Neural network visual (opsional siswa) | → [3Blue1Brown — Neural Networks](https://www.youtube.com/playlist?list=PLZHQbOWTQDMHSQIXIgWp6ZUbQ1lnNZPy) |

### Data & statistik ringkas

| Topik | Referensi |
|-------|-----------|
| Mean, median, outlier | → [Khan Academy — Mean & MAD](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data) |
| Vektor (intuitif) | → [Khan Academy — Vectors intro](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/linear-algebra-introduction-to-vectors) |
| Jarak Euclidean (2D) | → [Khan Academy — Distance formula](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry/hs-geo-distance/v/distance-formula) |

### Tools & contoh siap pakai (untuk demo guru)

| Tool | Referensi |
|------|-----------|
| Teachable Machine (preview transfer S6) | → [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| TF.js Playground (visual, opsional) | → [Neural Network Playground](https://playground.tensorflow.org/) — **hanya demo guru**, bukan target siswa |
| Dataset contoh CSV | → [Kaggle Datasets](https://www.kaggle.com/datasets) — filter "small" / buat sendiri lebih aman untuk MA |
| Chart loss sederhana | → [Chart.js](https://www.chartjs.org/docs/latest/) — jika ingin grafik loss di project |

---

## Alur teknis yang harus dikuasai guru (minimal)

```text
Data (array/CSV) → pra-proses → tensor (xs, ys)
→ model = tf.sequential([tf.layers.dense(...)])
→ model.compile({ optimizer, loss, metrics })
→ await model.fit(xs, ys, { epochs, callbacks })
→ model.predict(input) → interpretasi + Batasan Model
```

**Referensi end-to-end:** → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier)

---

## Persiapan lab sebelum semester

- [ ] Browser Chrome/Edge terbaru + live server (VS Code)
- [ ] Internet atau **cache CDN** TF.js di 1 mesin demo
- [ ] Akun GitHub siswa (spiral XI)
- [ ] File `mock-data.json` offline jika internet lab lemah
- [ ] Baca minimal: TF.js get started + train simple classifier (2–3 jam guru)

---

## Apa yang TIDAK wajib di S5

- Training from scratch CNN besar  
- Backpropagation rumus penuh  
- Python / Jupyter (semua di browser JS)  
- Akurasi state-of-the-art  

---

## Troubleshooting cepat

| Gejala | Kemungkin | Referensi |
|--------|-----------|-----------|
| `shape mismatch` | Input layer ≠ jumlah fitur | → [Input shape](https://www.tensorflow.org/js/guide/models#creating-a-model) |
| Browser hang | Epoch/batch/data terlalu besar | Kurangi epoch 10–20, data <200 baris |
| Loss NaN | Learning rate / data tidak dinormalisasi | Normalisasi 0–1; lr default `0.01` atau `adam` |
| Memory leak | Tensor tidak dispose | → [tf.tidy / dispose](https://www.tensorflow.org/js/guide/tensors_operations#memory) |

---

## Format sitasi di materi pendukung

Setiap file S5 memakai pola:

```text
[Konsep] → referensi: [Judul](URL)
```

Guru: baca referensi **sebelum** pertemuan; di kelas **parafrase**, jangan baca slide link.

[← Materi pendukung](../README.md) · [Indeks S5](./kelas-xii/semester-5/XII-S5_Materi_Index.md)
