# Handout Siswa — XII-S5-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P07_tfjs-tensor-dasar.md](../../../kelas-xii/semester-5/XII-S5-P07_tfjs-tensor-dasar.md)

---

## 1. Tujuan pembelajaran

Dari teori shape → **`tf.tensor`** di browser.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 8. Materi pendamping BRG

- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
