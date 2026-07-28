# Handout Siswa — BRG-08
**Jalur pendamping CPLF** (melengkapi modul inti, bukan pengganti silabus)

**Modul CPLF terkait:** lihat bagian bawah — kerjakan setelah guru memberi arahan.

---
## Materi

# BRG-08 — Normalisasi & Train/Validation Split (Sebelum TF.js `fit`)


## Learning Transformation

Dari “langsung `model.fit`” → **data numerik siap** + **uji di data yang tidak pernah dilihat model**.

## Mengapa gap ini kritis

Panduan ML CPLF sudah warning **loss NaN** jika tidak dinormalisasi ([00_Panduan_Guru_ML_TFJS.md](../00_Panduan_Guru_ML_TFJS.md)). Modul S5-P03–P05 olah statistik, tetapi **split eksplisit** sering terlewat di kelas sibuk.

## Konsep operasional (tanpa rumus SMA berat)

### 1. Min–max normalisasi (fitur 0–1)

Untuk fitur numerik `x`:

```text
x_norm = (x - min) / (max - min)
```

Contoh MA: skor 0–100 → sudah dekat; **jangan** campur skor dengan usia 15–18 tanpa normalisasi.

### 2. Train / validation split

```text
80% baris → train (model.fit)
20% baris → val (model.evaluate — opsional S5)
```

**Trap:** Evaluasi di baris yang sama dengan train → akurasi bohong (overfit).

### 3. Label tidak dinormalisasi sembarangan

Label klasifikasi tetap 0/1 atau one-hot — jangan min-max label.

## Live coding (JS murni sebelum tensor)

```javascript
const data = [
  { jam: 2, tugas: 5, lulus: 1 },
  { jam: 0.5, tugas: 2, lulus: 0 },
  // … 20+ baris dummy MA
];

function minMax(col, rows) {
  const vals = rows.map(r => r[col]);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  return rows.map(r => ({
    ...r,
    [col + '_n']: max === min ? 0 : (r[col] - min) / (max - min),
  }));
}

function split(rows, ratio = 0.8) {
  const shuffled = [...rows].sort(() => Math.random() - 0.5);
  const cut = Math.floor(shuffled.length * ratio);
  return { train: shuffled.slice(0, cut), val: shuffled.slice(cut) };
}
```

## Bridge ke S5-P08

Setelah normalisasi → `tf.tensor2d` dari kolom `*_n` → `model.fit(xsTrain, ysTrain, { validationData: [xsVal, ysVal] })`.

## Checklist exit

- [ ] Siswa jelaskan perbedaan train vs val dengan analogi “soal latihan vs soal tryout”.  
- [ ] Siswa tunjukkan 1 fitur sebelum/sesudah normalisasi.  
- [ ] Guru catat: cohort siap P08.

## KBC

Adil pada sesama (bias data) — kait [XII-S5-P02](../kelas-xii/semester-5/XII-S5-P02_data-bahan-bakar-ml.md) + QS tematik di mapping KBC.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)

---
_Kerjakan bagian PR di kelas atau rumah sesuai petunjuk guru._

**Digunakan bersama modul CPLF:** `XII-S5-P07`

**Digunakan bersama modul CPLF:** `XII-S5-P08`

**Digunakan bersama modul CPLF:** `XII-S5-P11`

**Digunakan bersama modul CPLF:** `XII-S5-P16`
