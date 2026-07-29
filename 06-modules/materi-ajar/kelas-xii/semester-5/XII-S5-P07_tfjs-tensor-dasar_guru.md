# Materi Guru Lengkap — XII-S5-P07

**Handout siswa (bagikan):** [XII-S5-P07_tfjs-tensor-dasar_siswa.md](./XII-S5-P07_tfjs-tensor-dasar_siswa.md)

**Modul:** [XII-S5-P07_tfjs-tensor-dasar.md](../../../kelas-xii/semester-5/XII-S5-P07_tfjs-tensor-dasar.md)

**Materi pendukung sumber:** [XII-S5-P07_tfjs-tensor-dasar.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P07_tfjs-tensor-dasar.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P07 — TF.js Tensor Dasar

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P07 |
| Unit | XII5.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T2 |

## Learning Transformation

Dari teori shape → **`tf.tensor`** di browser.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | CDN TF.js · console hello tensor |
| 5–15 | Concept | `tf.tensor2d` · `.shape` · `.print()` |
| 15–25 | Clarify | Memory browser · dispose (`.dispose()`) |
| 25–35 | Demo | Operasi: add, mul, matMul kecil |
| 35–60 | Practice | Halaman HTML: buat tensor dari array dataset 1 baris |
| 60–75 | Debug | Shape mismatch — baca error |
| 75–90 | Exit | Screenshot 3 tensor berbeda rank |

---

## Starter

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script>
  const t = tf.tensor2d([[1,2],[3,4]]);
  t.print();
</script>
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Live server wajib; offline: cache CDN sebelumnya.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P07 TF.js Tensor Dasar

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P07 |
| Modul pertemuan | [XII-S5-P07_tfjs-tensor-dasar.md](../../../kelas-xii/semester-5/XII-S5-P07_tfjs-tensor-dasar.md) |
| Unit | XII5.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T2 |
| Formatif | TEC, OBS |
| Prasyarat | [P06 Tensor dari Scalar](./XII-S5-P06_tensor-dari-scalar.md) — shape/rank sudah diintuisi |
| Ada live code? | **Ya — HTML + CDN TF.js, ketik live per baris** |

---

## Referensi Guru (baca sebelum mengajar)

Baca minimal **2 jam** sebelum P07 — fokus tensor & operasi, belum training.

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Setup CDN & hello TF.js | → [Get started with TensorFlow.js](https://www.tensorflow.org/js/tutorials/getting_started) |
| 2 | **Wajib** — Apa itu tensor, shape, dtype | → [Tensors & operations](https://www.tensorflow.org/js/guide/tensors_operations) |
| 3 | **Wajib** — API `tf.tensor`, `tf.tensor2d` | → [TF.js API Reference — tf.tensor2d](https://js.tensorflow.org/api/latest/#tensor2d) |
| 4 | Memory browser & `.dispose()` | → [Tensor disposal & tf.tidy](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 5 | Operasi dasar (add, mul, matMul) | → [Operations on tensors](https://www.tensorflow.org/js/guide/tensors_operations#operations) |
| 6 | ML Crash Course — vektor & fitur (konteks) | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 7 | StatQuest — "What is a tensor?" (video pendek) | → [StatQuest YouTube](https://www.youtube.com/c/joshstarmer) — cari "tensor" atau "vectors" |
| 8 | Troubleshooting shape mismatch | → [Creating a model — input shape](https://www.tensorflow.org/js/guide/models#creating-a-model) |
| 9 | Panduan ML guru CPLF | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

**Catatan guru non-ML:** Anda tidak perlu hafal aljabar linear. Cukup paham: **tensor = wadah angka berdimensi** + **shape harus cocok** saat operasi.

---

## Pengetahuan Guru

### Apa itu `tf.tensor` (bahasa mudah)

Di JavaScript biasa, angka disimpan di variabel biasa (`let x = 5`). Di TF.js, angka untuk perhitungan ML disimpan dalam objek khusus bernama **tensor** — seperti **array multidimensi yang punya aturan shape**.

| Istilah | Arti untuk siswa MA | Analogi dapur |
|---------|---------------------|---------------|
| **Scalar** | Satu angka, rank 0 | Sebutir garam |
| **Vector** | Satu baris/kolom angka, rank 1 | Satu sendok bahan di deret |
| **Matrix** | Tabel angka 2D, rank 2 | Baki bumbu baris × kolom |
| **Tensor** | Generalisasi — bisa 0D, 1D, 2D, 3D+ | Wadah berapa pun dimensi |
| **Shape** | Tuple panjang tiap dimensi, mis. `[2, 3]` | "2 baris, 3 kolom" |
| **Rank** | Jumlah dimensi shape | Berapa "lapisan" wadah |
| **dtype** | Tipe angka (`float32`, `int32`) | Presisi timbangan dapur |

**`tf.tensor2d([[1,2],[3,4]])`** = buat matrix 2×2 dari array JS biasa. TF.js **menyalin** data ke memori khusus (sering GPU/WebGL) agar operasi cepat.

### Mengapa tidak cukup array JS?

1. **Operasi vektorized** — `t1.add(t2)` jalan sekaligus, bukan loop manual.
2. **Shape tracking** — error `shape mismatch` muncul jelas saat dimensi tidak cocok (P08 akan sering kena).
3. **Training nanti** — `model.fit()` butuh input tensor, bukan array mentah.

### Operasi yang diajarkan hari ini

| Operasi | Arti intuitif | Shape rule |
|---------|---------------|--------------|
| `t.add(other)` | Jumlah elemen per elemen | Shape harus sama |
| `t.mul(other)` | Kali per elemen | Shape harus sama |
| `t.matMul(other)` | Perkalian matrix (baris × kolom) | Kolom kiri = baris kanan |
| `.print()` | Tampilkan di console | — |
| `.shape` | Baca dimensi | Array angka |
| `.dispose()` | Bebaskan memori GPU | Wajib setelah selesai |

### Memory browser — jangan di-skip

Setiap tensor = memori. Lab dengan 30 tab + tensor tidak dispose = browser hang.

**Pola aman:**

```javascript
const result = tf.tidy(() => {
  const a = tf.tensor2d([[1, 2], [3, 4]]);
  const b = tf.tensor2d([[5, 6], [7, 8]]);
  return a.add(b);
});
result.print();
result.dispose();
```

Guru jelaskan: `tf.tidy()` = **auto cleanup** tensor sementara di dalam callback. Untuk MA, cukup: **tensor yang dibuat manual → `.dispose()` setelah `.print()`**.

### Hubungan ke dataset P03

Satu baris dataset tabular = **satu vector fitur** = bisa `tf.tensor2d([[fitur1, fitur2, ...]])` dengan shape `[1, jumlahFitur]`.

Seluruh dataset N baris = shape `[N, jumlahFitur]`. Ini jembatan ke P08.

### Yang TIDAK wajib hari ini

- Backpropagation, gradient
- `tf.browser`, custom layers
- Batch normalization, CNN

---

## Recall Spiral

Opening **5 menit** — oral, kait P06.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P06 — satu pixel foto = rank berapa?" | Matrix / rank 2 (baris × kolom warna) |
| "Shape `[3, 2]` vs `[2, 3]` — sama isinya bisa?" | Bisa angka sama, tapi **arti berbeda** — 3 baris 2 kolom vs 2 baris 3 kolom |
| "Dataset 40 baris, 4 fitur — shape tensor-nya?" | `[40, 4]` |
| "Kenapa batch? (preview P08)" | Model melatih banyak contoh sekaligus — efisien |

Jika kelas blank: gambar tabel 2×3 di papan — tanya "shape-nya?" lalu transpose mental `[3,2]`.

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No starter notebook/file** | Jangan kirim HTML siap jalan ke WA — siswa **bangun bare HTML** bersama |
| **Live type CDN + code** | Guru ketik `<script src="...tfjs">` live; siswa ikut mengetik |
| **TTS per baris** | Setiap `tf.tensor2d`, `.add`, `.dispose` — Tebak → Tanya → Spelling |
| **Recall P06** | Sebelum `tf.tensor2d`, tanya shape dari array yang akan dimasukkan |
| **Membaca kode dulu** | Snippet di papan 2 menit — prediksi output/shape — baru ketik |
| **Salah ketik disengaja** | Ubah `[2,3]` jadi `[3,2]` saat add — tunjukkan error di console |
| **No copas** | Dilarang paste 30 baris dari materi guru ke laptop siswa |

**Live server wajib** (VS Code Live Server). Offline lab: cache CDN `@tensorflow/tfjs` sebelumnya di 1 mesin demo.

---

## Materi Inti

### Transformasi belajar

**Dari:** Teori shape di papan (P06)  
**Ke:** **`tf.tensor` nyata** di browser — angka hidup di console.

### Alur konsep (selaras modul)

1. CDN TF.js → `console.log(tf.version.tfjs)` — bukti library loaded → referensi: [Setup via CDN](https://www.tensorflow.org/js/tutorials/setup)
2. `tf.tensor2d` + `.print()` + `.shape` → referensi: [tf.tensor2d API](https://js.tensorflow.org/api/latest/#tensor2d)
3. Operasi kecil: add, mul, matMul → referensi: [Tensors & operations](https://www.tensorflow.org/js/guide/tensors_operations)
4. Memory: `.dispose()` / `tf.tidy` → referensi: [Memory management](https://www.tensorflow.org/js/guide/tensors_operations#memory)
5. Practice: tensor dari **1 baris dataset siswa** (P03)
6. Debug: baca error shape mismatch → referensi: [Model input shape](https://www.tensorflow.org/js/guide/models#creating-a-model)

### Metafora MA

Tensor = **excel sheet yang dipaksa punya ukuran tetap**. Kalau mau jumlahkan dua sheet, jumlah baris × kolom harus sama persis.

### Kode referensi guru (hafalkan alur — jangan distribusi file)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>TF.js Tensor Dasar</title>
</head>
<body>
  <h1>Buka Console (F12)</h1>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script>
    console.log("TF.js version:", tf.version.tfjs);

    const t = tf.tensor2d([[1, 2], [3, 4]]);
    console.log("Shape:", t.shape);
    t.print();

    const a = tf.tensor2d([[1, 2], [3, 4]]);
    const b = tf.tensor2d([[10, 20], [30, 40]]);
    const sum = a.add(b);
    sum.print();

    a.dispose();
    b.dispose();
    sum.dispose();
    t.dispose();
  </script>
</body>
</html>
```

---

## Alur Live Coding — line by line TTS

> **Persiapan:** Browser + Live Server, console terbuka, **file kosong** `tensor-dasar.html`. Tidak ada file siap di laptop siswa.

```text
[LANGKAH 1 — Opening 0–5 menit]
Buat file HTML kosong — ketik <!DOCTYPE html> live.
TTS: "Kenapa DOCTYPE? — browser tahu mode HTML5."
Tambah <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
TTS scope script CDN:
  Tebak: "Baris ini load apa?"
  Tanya: "Kalau internet mati — gejala apa?"
  Spelling: "src = URL library TF.js — belum ada kode kita."
Refresh — buka Console.
Ketik: console.log(tf.version.tfjs);
TTS: "tf = namespace global TF.js — seperti Math di JS."

[LANGKAH 2 — Concept 5–15 menit]
Recall P06: "Matrix 2×2 — shape-nya?"
Ketik: const t = tf.tensor2d([[1, 2], [3, 4]]);
TTS scope tensor2d:
  Tebak: "[[1,2],[3,4]] — rank berapa?"
  Tanya: "Baris pertama = elemen apa saja?"
  Spelling: "tf.tensor2d = factory — JS array → tensor rank-2."
Ketik: console.log("Shape:", t.shape);
Ketik: t.print();
TTS: ".shape = properti read-only; .print() = tampil di console."

[LANGKAH 3 — Clarify memory 15–25 menit]
Ucapkan: "Setiap tensor = memori GPU/browser — lab 30 siswa, jangan boros."
Demo: buat 5 tensor tanpa dispose — tunjukkan (jangan biarkan lama).
Perbaiki: t.dispose();
Intro singkat tf.tidy — "nanti P09 kita pakai lebih banyak."
→ referensi: memory disposal link di atas.

[LANGKAH 4 — Demo operasi 25–35 menit]
Ketik a dan b — tensor 2×2 berbeda.
const sum = a.add(b); sum.print();
TTS scope add:
  Tebak: "Output shape?"
  Tanya: "Kalau b shape [2,3] — jalan?"
  Spelling: "add = elemen per elemen — shape harus match."
Demo matMul kecil:
  const m1 = tf.tensor2d([[1, 2]]);   // shape [1,2]
  const m2 = tf.tensor2d([[3], [4]]); // shape [2,1]
  m1.matMul(m2).print(); // hasil [1,1] = 11
TTS: "matMul = perkalian matrix — kolom kiri = baris kanan."
Dispose semua tensor demo.

[LANGKAH 5 — Practice 35–60 menit]
Siswa buka dataset P03 — pilih 1 baris, 3–4 fitur numerik.
TTS: "Array fitur kamu — shape tensor 1 baris?"
Siswa ketik: tf.tensor2d([[...fitur...]]);
Cek .shape — harus [1, nFitur].
Opsional: normalisasi manual 0–1 (spiral P03) sebelum tensor.
Guru keliling — TTS per siswa.

[LANGKAH 6 — Debug shape 60–75 menit]
Sengaja live: tf.tensor2d([[1,2,3]]).add(tf.tensor2d([[1,2]]));
Baca error console bersama — "shape mismatch"
TTS: "Error TF.js = petunjuk — bandingkan .shape kedua tensor."
Siswa cari 1 error shape sendiri + perbaiki.

[LANGKAH 7 — Exit 75–90 menit]
Screenshot console: 3 tensor rank berbeda (scalar pakai tf.scalar, vector tf.tensor1d, matrix tf.tensor2d).
Exit ticket: "Satu baris dataset kamu — shape tensor-nya?"
```

---

## Latihan Membaca Kode

Siswa **prediksi dulu** — baru run di console.

### Snippet A — Shape

```javascript
const x = tf.tensor2d([[5, 10], [15, 20], [25, 30]]);
console.log(x.shape);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output `.shape`? | `[3, 2]` — 3 baris, 2 kolom |
| Rank? | 2 |

### Snippet B — Add mismatch

```javascript
const a = tf.tensor2d([[1, 2], [3, 4]]);      // [2,2]
const b = tf.tensor2d([[1, 2, 3], [4, 5, 6]]); // [2,3]
const c = a.add(b);
```

| Pertanyaan | Kunci |
|------------|-------|
| Jalan? | **Error** — shape `[2,2]` vs `[2,3]` |
| Fix minimal? | Samakan kolom — ubah salah satu jadi `[2,2]` |

### Snippet C — matMul

```javascript
const u = tf.tensor2d([[1, 0], [0, 1]]);
const v = tf.tensor2d([[2], [3]]);
console.log(u.matMul(v).shape);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output shape? | `[2, 1]` |
| Elemen [0,0]? | `1*2 + 0*3 = 2` |

### Snippet D — Lupa dispose

```javascript
for (let i = 0; i < 1000; i++) {
  tf.tensor2d([[i, i + 1]]);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Gejala? | Browser lambat / hang — memory leak |
| Perbaikan? | `.dispose()` di loop atau `tf.tidy()` |

---

## Praktik Mandiri

Siswa **mengetik versi sendiri** (bukan copy proyektor):

1. Halaman HTML minimal + CDN TF.js — versi sendiri.
2. Tensor dari **3 baris** dataset P03 (shape `[3, nFitur]`).
3. Operasi: tensor baris 1 + baris 2 (setelah reshape jadi matrix `[1,n]` masing-masing, atau slice).
4. Log shape sebelum dan sesudah operasi.
5. `.dispose()` semua tensor.
6. **Bonus:** `tf.scalar(7)` — bandingkan `.shape` dengan `tf.tensor1d([7, 8])`.

**Variasi kelas lambat:** fokus item 1–2 + 5 saja.  
**Variasi kelas cepat:** `tf.tidy()` refactor practice #3.

---

## Kesalahan Umum

| Gejala siswa | Penyebab | Respons guru |
|--------------|----------|--------------|
| `tf is not defined` | CDN belum load / typo script | Cek Network tab; refresh; live server |
| Shape `[4]` padahal expect `[1,4]` | Pakai `tensor1d` bukan `tensor2d` | "Model nanti expect batch — tambah dimensi baris" |
| `[2,3]` vs `[3,2]` transpose | Salah orientasi data | Gambar di papan — baris = sampel |
| Browser hang | Loop tensor tanpa dispose | Demo dispose live; max 20 tensor demo |
| Copas HTML guru | Etika | Hapus file — ketik ulang opening 10 baris |
| "Tensor = AI" | Overclaim | "Tensor = wadah angka — AI butuh langkah lain (P08)" |

---

## Rujukan

- Modul: [XII-S5-P07](../../../kelas-xii/semester-5/XII-S5-P07_tfjs-tensor-dasar.md)
- Sebelumnya: [P06 Tensor dari Scalar](./XII-S5-P06_tensor-dari-scalar.md)
- Lanjutan: [P08 Layer, Compile, Fit](./XII-S5-P08_layer-compile-fit.md)
- Panduan ML: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] CDN TF.js loaded — siswa ketik sendiri, bukan terima file
- [ ] Minimal 3 tensor berbeda rank di screenshot siswa
- [ ] Siswa bisa baca `.shape` dan prediksi error mismatch
- [ ] Semua demo guru + siswa: tensor di-`.dispose()` atau `tf.tidy`
- [ ] 1 baris dataset P03 sudah jadi tensor — jembatan ke P08
- [ ] Recall P06 terpasang di opening
- [ ] Tidak ada distribusi HTML starter ke siswa

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
