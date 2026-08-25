# Handout Siswa — XII-S5-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P10_loss-epoch-overfitting.md](../../../kelas-xii/semester-5/XII-S5-P10_loss-epoch-overfitting.md)

---

## 1. Tujuan pembelajaran

Dari angka loss abstrak → **membaca** training (termasuk overfit intuitif).

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
