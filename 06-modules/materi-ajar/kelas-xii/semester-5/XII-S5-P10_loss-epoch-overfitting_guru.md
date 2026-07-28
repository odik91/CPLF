# Materi Guru Lengkap — XII-S5-P10

**Handout siswa (bagikan):** [XII-S5-P10_loss-epoch-overfitting_siswa.md](./XII-S5-P10_loss-epoch-overfitting_siswa.md)

**Modul:** [XII-S5-P10_loss-epoch-overfitting.md](../../../kelas-xii/semester-5/XII-S5-P10_loss-epoch-overfitting.md)

**Materi pendukung sumber:** [XII-S5-P10_loss-epoch-overfitting.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P10_loss-epoch-overfitting.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P10 — Loss, Epoch, Overfitting

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P10 |
| Unit | XII5.7 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-B2 |

## Learning Transformation

Dari angka loss abstrak → **membaca** training (termasuk overfit intuitif).

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Grafik loss turun vs naik — tebak yang sehat |
| 5–15 | Experience | **Hafal jawaban vs paham** — overfit metafora |
| 15–25 | Concept | Epoch · batch · loss · val loss (jika ada) |
| 25–35 | Trap | Akurasi train 100% — percaya? |
| 35–55 | Practice | Train 2×: epoch sedikit vs banyak — bandingkan |
| 55–75 | Practice | Jurnal 5 kalimat: “apa arti angka ini?” |
| 75–90 | Exit | 1 tanda overfitting dari eksperimen |

---

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Visualisasi loss: console log atau chart.js sederhana.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P10 Loss, Epoch, Overfitting

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P10 |
| Modul pertemuan | [XII-S5-P10_loss-epoch-overfitting.md](../../../kelas-xii/semester-5/XII-S5-P10_loss-epoch-overfitting.md) |
| Unit | XII5.7 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-B2 |
| Formatif | REA, OBS |
| Prasyarat | [P08](./XII-S5-P08_layer-compile-fit.md), [P09](./XII-S5-P09_model-dense-mini.md) |
| Ada live code? | **Ya — train 2× (epoch sedikit vs banyak), baca loss; Chart.js opsional** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Training & loss (intuitif) | → [MLCC — Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss) |
| 2 | **Wajib** — Overfitting | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| 3 | **Wajib** — Train/test split | → [MLCC — Training and Test Sets](https://developers.google.com/machine-learning/crash-course/training-and-test-sets/video-lecture) |
| 4 | TF.js fit callbacks | → [Model.fit API](https://js.tensorflow.org/api/latest/#class:Model) |
| 5 | Train simple classifier (log loss) | → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 6 | StatQuest — Overfitting | → [StatQuest — Overfitting](https://www.youtube.com/watch?v=DEMmkTuaNEY) |
| 7 | StatQuest — Cross Validation (intuitif) | → [StatQuest YouTube](https://www.youtube.com/c/joshstarmer) |
| 8 | **Chart.js** — grafik loss (opsional demo) | → [Chart.js — Line chart](https://www.chartjs.org/docs/latest/charts/line.html) |
| 9 | ML Crash Course | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 10 | TF.js API | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |

**Video StatQuest overfitting ~10 menit** — tonton sebelum mengajar; parafrase ke metafora "hafal vs paham".

---

## Pengetahuan Guru

### Loss — apa artinya angka di console?

**Loss** = **skor rata-rata "salah"** model terhadap label benar — **semakin kecil semakin baik** (dalam ideal training sehat).

| Loss | Interpretasi MA |
|------|-----------------|
| `binaryCrossentropy` | Salah prediksi probabilitas kelas 0/1 — 0.0 = sempurna (jarang) |
| `categoricalCrossentropy` | Sama untuk multi-kelas |
| `meanSquaredError` | Jarak kuadrat prediksi vs angka target |

**Guru tidak perlu rumus** — cukup: "Model coba minimize angka ini dengan mengubah bobot internal."

### Optimizer — peran singkat

**Optimizer** (mis. `adam`) = strategi **seberapa besar langkah** koreksi bobot tiap batch.

- Terlalu agresif → loss **NaN** (meledak)
- Terlalu lambat → loss turun pelan — OK untuk demo kecil

Default `adam` aman untuk S5.

### Epoch — satu putaran penuh

**1 epoch** = model sudah melihat **seluruh** data training sekali dan update bobot.

| Epoch | Efek |
|-------|------|
| Sedikit (5–10) | Belum belajar cukup — loss masih tinggi, akurasi train/test rendah |
| Sedang (10–20) | Sweet spot demo MA |
| Banyak (50–200+) | Risiko **overfitting** — loss train turun, performa test memburuk |

### Batch — ukuran gigitan

**Batch size** = berapa sampel diproses sebelum 1 update bobot.

Data kecil MA (<100 baris): batch default atau 4–8 cukup. Guru tidak perlu deep dive batch vs stochastic GD.

### Overfitting — metafora wajib MA

| Metafora | Arti |
|----------|------|
| **Hafal vs paham** (modul) | Model hafal jawaban latihan — gagal di soal baru |
| **Murid hafal kunci** | Akurasi train 100% tapi test jeblok |
| **Kacamata terlalu pas** | Model terlalu kompleks untuk data sedikit |

**Tanda overfitting (intuitif):**

1. Loss/akurasi **train** terus membaik
2. Loss/akurasi **test/validation** memburuk atau stagnan lalu naik
3. Akurasi train **100%** pada dataset kecil — **curiga**, bukan flex

### Validation loss (opsional MA)

`validationSplit: 0.2` di `fit()` — TF.js pisah 20% train internal untuk cek overfit early.

```javascript
await model.fit(xs, ys, {
  epochs: 30,
  validationSplit: 0.2,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(
        `loss=${logs.loss.toFixed(4)} val_loss=${logs.val_loss.toFixed(4)}`
      );
    },
  },
});
```

Guru: jika `val_loss` naik sementara `loss` turun → **signal overfit**.

### Trap modul: Akurasi train 100% — percaya?

**Tidak otomatis.** Tanya: "Diuji di data yang belum dilihat saat training?"

### Chart.js — visualisasi loss (opsional)

Push `logs.loss` ke array `epochLoss[]` di callback → render line chart.

→ referensi: [Chart.js line chart](https://www.chartjs.org/docs/latest/charts/line.html)

**Etika:** Guru demo 15 baris Chart.js live — **bukan** kirim template chart lengkap. Siswa opsional.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P09 — kenapa split train/test?" | Test = data model belum hafal |
| "Loss 0.3 turun jadi 0.1 — artinya?" | Model makin sedikit salah rata-rata |
| "P08 — epoch 15 — sudah cukup?" | Tergantung — hari ini kita bandingkan 5 vs 40 |
| "Normalisasi P03 — kait loss NaN?" | Fitur besar → gradient meledak |

---

## Etika Penyampaian

| Aturan | Penerapan |
|--------|-----------|
| **No starter notebook** | Extend model P09 — jangan file baru penuh |
| **Live eksperimen** | Train run A (epoch 5) vs run B (epoch 40) — **tabel di papan** |
| **TTS** | Baca callback log per epoch — siswa tebak trend |
| **Chart.js** | Demo guru singkat OK — tidak wajib semua siswa |
| **Jujur batasan** | Guru boleh bilang "saya juga belajar membaca loss" — model literasi |

---

## Materi Inti

### Transformasi belajar

**Dari:** Angka loss abstrak di console  
**Ke:** **Membaca** training — sehat vs overfit — dengan bukti eksperimen.

### Eksperimen inti (2× train)

Gunakan **dataset & model sama** dari P09:

| Run | Epochs | Hipotesis |
|-----|--------|-----------|
| A | 5–10 | Underfit — loss masih tinggi, test mediocre |
| B | 40–60 | Overfit risk — train acc naik, test tidak ikut |

**Lab lemah:** Run B max 30 epoch — cukup lihat trend.

→ referensi: [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting)

### Jurnal 5 kalimat (modul)

Siswa tulis:

1. Loss epoch 1 run A = ?
2. Loss epoch terakhir run A = ?
3. Akurasi test run A = ?
4. Run B — train vs test beda? Sebutkan angka.
5. Satu tanda overfitting dari eksperimen (atau "belum terlihat karena …")

### Grafik loss — opening modul

Tampilkan 2 grafik (gambar/papan):

- **Sehat:** train loss turun, val loss turun lalu datar
- **Overfit:** train loss turun, val loss naik

Tanya: "Tebak mana yang percaya akurasi train saja?"

---

## Alur Live Coding — line by line TTS

> P10 lebih **eksperimen & observasi** daripada kode baru — live coding fokus callbacks + perbandingan.

```text
[LANGKAH 1 — Opening 0–5 menit]
2 grafik loss — tebak sehat vs overfit.
Metafora hafal vs paham — recall P09 split.

[LANGKAH 2 — Experience 5–15 menit]
Cerita: murid hafal 100 soal latihan — nilai 100 — ujian soal baru jeblok.
Tanya: "Mirip model ML kapan?"

[LANGKAH 3 — Concept 15–25 menit]
Papan: Epoch · Batch · Loss · (Val loss)
TTS: "Loss = skor salah — bukan akurasi langsung."
→ referensi: MLCC Training and Loss

[LANGKAH 4 — Trap 25–35 menit]
"Teman bilang akurasi train 100% — AI-nya jago?"
Diskusi: hold-out test? data kecil? layer terlalu besar?

[LANGKAH 5 — Practice Run A 35–45 menit]
Reset model (model baru atau tf.io — cukup model baru sequential).
fit epochs: 8 — log loss tiap epoch ke array lossA[].
Catat akurasi test (fungsi evaluate sederhana).

[LANGKAH 6 — Practice Run B 45–55 menit]
Model fresh — arsitektur sama.
fit epochs: 40 (atau 25 lab lemah) — lossB[].
validationSplit: 0.2 — perhatikan val_loss.

[LANGKAH 7 — Bandingkan 55–75 menit]
Tabel papan: Run A vs B — train acc, test acc, loss akhir.
Opsional: Chart.js line chart lossA vs lossB — demo guru 10 menit.
→ referensi: Chart.js

[LANGKAH 8 — Jurnal & Exit 75–90 menit]
5 kalimat jurnal.
Exit: 1 tanda overfitting dari angka sendiri.
```

### Snippet callback + Chart.js (demo guru)

```javascript
const lossHistory = [];

await model.fit(xs, ys, {
  epochs: 25,
  validationSplit: 0.2,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      lossHistory.push({ epoch: epoch + 1, loss: logs.loss, val: logs.val_loss });
      console.log(`E${epoch + 1}`, logs.loss.toFixed(4), logs.val_loss?.toFixed(4));
    },
  },
});

// Chart.js — setelah fit (DOM canvas #lossChart)
// new Chart(ctx, { type: 'line', data: { labels: ..., datasets: [...] } });
```

---

## Latihan Membaca Kode

### Snippet A — baca log

```text
Epoch 1: loss=0.693 val_loss=0.701
Epoch 10: loss=0.312 val_loss=0.335
Epoch 25: loss=0.089 val_loss=0.412
Epoch 40: loss=0.021 val_loss=0.580
```

| Pertanyaan | Kunci |
|------------|-------|
| Epoch berapa mulai curiga overfit? | ~25+ — val_loss naik sementara loss turun |
| Epoch terbaah "stop"? | Sekitar 10–15 — val_loss masih turun |

### Snippet B — loss NaN

```text
Epoch 3: loss=0.45
Epoch 4: loss=NaN
```

| Pertanyaan | Kunci |
|------------|-------|
| Penyebab umum? | Data tidak dinormalisasi; lr terlalu besar; label salah |
| Fix pertama? | Cek normalisasi P03; adam optimizer; cek ys shape |

### Snippet C — akurasi misleading

```javascript
// 95 baris kelas A, 5 baris kelas B — model pred semua A
// accuracy = 95%
```

| Pertanyaan | Kunci |
|------------|-------|
| Akurasi tinggi = model bagus? | **Tidak** — ignore minority; butuh metrik lain (P15) |
| MA action? | Sebut imbalance — dokumentasi batasan model |

### Snippet D — validationSplit

```javascript
await model.fit(xs, ys, { epochs: 20, validationSplit: 0.2 });
```

| Pertanyaan | Kunci |
|------------|-------|
| 0.2 artinya? | 20% data training dipakai internal sebagai val — bukan xsTest P09 |
| Beda xsTest? | xsTest hold-out manual; val_split dari potongan xs |

---

## Praktik Mandiri

1. Dua run training (epoch rendah vs tinggi) — **model & data sama**.
2. Catat loss tiap epoch (console atau array).
3. Hitung akurasi train & test masing-masing run.
4. Jurnal 5 kalimat modul.
5. **Opsional:** Chart.js 1 line chart loss.
6. Tulis 1 **Batasan Model** kalimat: "Model saya mungkin overfit jika …"

**Variasi lambat:** guru beri tabel log kosong — siswa isi dari 1 run + diskusi teori.  
**Variasi cepat:** tambah run C — units hidden lebih besar — bandingkan overfit.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| "Loss harus 0" | Tidak realistis — yang penting trend & generalisasi |
| Epoch 200 di lab | Cap experiment — hang |
| Hanya lihat train acc | Paksa lihat test acc |
| Val_loss tidak dipahami | Gambar 2 garis di papan |
| Chart.js jadi fokus | Metrik & interpretasi dulu, chart bonus |
| Klaim "tidak overfit" tanpa bukti | Minta angka test |

---

## Rujukan

- Modul: [XII-S5-P10](../../../kelas-xii/semester-5/XII-S5-P10_loss-epoch-overfitting.md)
- [P09](./XII-S5-P09_model-dense-mini.md) · [P15 Metrik](./XII-S5-P15_membaca-metrik-model.md) (lanjutan)
- Panduan ML: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---

## Checklist Exit

- [ ] 2 run epoch berbeda — angka tercatat
- [ ] Siswa jurnal 5 kalimat interpretasi loss
- [ ] 1 tanda overfitting dari eksperimen (atau argumen jujur belum)
- [ ] Trap "train 100%" didiskusikan
- [ ] Recall P09 split terpasang
- [ ] No distribusi notebook eksperimen jadi

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
