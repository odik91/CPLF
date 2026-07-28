# Materi Guru Lengkap — XII-S5-P12

**Handout siswa (bagikan):** [XII-S5-P12_project-s5-build-1_siswa.md](./XII-S5-P12_project-s5-build-1_siswa.md)

**Modul:** [XII-S5-P12_project-s5-build-1.md](../../../kelas-xii/semester-5/XII-S5-P12_project-s5-build-1.md)

**Materi pendukung sumber:** [XII-S5-P12_project-s5-build-1.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P12_project-s5-build-1.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P12 — Project S5 Build 1

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P12 |
| Unit | XII5.8 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · data · pra-proses |
| 10–70 | Build | Cleaning · encoding · tensor pipeline |
| 70–85 | Checkpoint | README dataset + 1 metrik eksplorasi |
| 85–90 | Exit | Siap train P13 |

---

## Formatif

**ITR**, **REA**

---

## Catatan Guru

Intervensi lewat pertanyaan: “fitur apa yang model lihat?”


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P12 Project S5 Build 1

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P12 |
| Modul pertemuan | [XII-S5-P12_project-s5-build-1.md](../../../kelas-xii/semester-5/XII-S5-P12_project-s5-build-1.md) |
| Unit | XII5.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md) · [PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md) |
| Capability | ITR, REA |
| Formatif | ITR, REA |
| Ada live code? | **Facilitator + data prep clinic — bukan build untuk siswa** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Train pipeline | → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 2 | **Wajib** — Tensors & preprocessing | → [Tensors & operations](https://www.tensorflow.org/js/guide/tensors_operations) |
| 3 | **Wajib** — Models & input shape | → [Models guide](https://www.tensorflow.org/js/guide/models) |
| 4 | TF.js API | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 5 | MLCC — data representation | → [MLCC — Numeric data](https://developers.google.com/machine-learning/crash-course/representation/numeric-data) |
| 6 | MLCC — encoding | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 7 | StatQuest — data prep playlist | → [StatQuest YouTube](https://www.youtube.com/c/joshstarmer) |
| 8 | Memory / dispose pipeline | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 9 | Chart.js (opsional P13) | → [Chart.js](https://www.chartjs.org/docs/latest/) |
| 10 | Panduan ML CPLF | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

---

## Pengetahuan Guru

### Fokus Build 1 — **data + pra-proses**, belum polish UI/train penuh

| Deliverable P12 | Bukan hari ini |
|-----------------|----------------|
| Data cleaning final | Train final + demo P14 |
| Encoding/normalisasi jalan | Chart loss polished |
| Pipeline array → tensor tested | Peer review P16 |
| README dataset + 1 metrik eksplorasi | Dokumen batasan final P14 |
| Siap train P13 | Rule-based lengkap PRJ-02 (boleh mulai) |

### Format build week (spiral project XI/X)

```text
Stand-up (10) → clarifying Q umum (10) → build (50) → checkpoint (15) → exit (5)
```

**Stand-up 3 pertanyaan:** kemarin / hari ini / blocker.

### Data prep — checklist teknis guru

| Langkah | PRJ-01 | PRJ-02 |
|---------|--------|--------|
| Load JSON/CSV | ✓ | ✓ (untuk kedua pendekatan) |
| Handle missing | drop/impute — **dokumentasikan** | ✓ |
| Encode kategorik | one-hot atau label int | rule mungkin pakai string |
| Normalisasi numerik | 0–1 per kolom | opsional untuk rule |
| Split fitur/label | ✓ | ✓ |
| Train/test split | hold-out 80/20 | ✓ untuk eval model |
| `tf.tensor2d` shape check | `[n, features]` | saat branch model |
| Explorasi metrik | mean, count per kelas, 1 outlier note | banding distribusi kelas |

### Metrik eksplorasi (modul — 1 cukup)

Contoh README:

```text
- Baris: 48 (setelah buang 2 duplikat)
- Kelas: 0=22, 1=26 (imbalance ringan)
- Fitur numerik dinormalisasi min-max
- Outlier: baris #31 skor=99 — dipertahankan karena ...
```

### Template model — batasan arsitektur (ingatkan, jangan coding guru)

Saat siswa tanya "layer berapa?" — **clarifying**:

- "Berapa fitur? PRJ dense kecil — 1 hidden 4–16 units."
- "Epoch rencana? 10–20 train demo."
- "Loss sesuai kelas?"

**Jangan** tulis `model.add` di laptop siswa.

### PRJ-02 khusus — Build 1

- **Rule-based branch:** pseudocode atau if/else skeleton + 5 contoh uji manual
- **Model branch:** data pipeline sama PRJ-01 — training boleh mulai akhir jam jika data siap
- Tabel banding: header kolom saja OK — isi P13

### Intervensi guru — pertanyaan wajib

Rotasi keliling — **jangan** fix kode:

1. "Fitur apa yang model lihat?"
2. "Shape tensor setelah preprocess?"
3. "Label encoding — angka 0/1 atau one-hot?"
4. "Train vs test — baris mana?"
5. "Kalau input kosong — gejala UI?"

### Debug clinic (menit 70–85)

1 error **anonymous** (volunteer) — TTS baca error shape/load JSON.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P11 — acceptance kamu #1?" | Siswa sebut measurable |
| "P03 — README dataset?" | Sumber, kolom, cleaning |
| "P09 — normalisasi kenapa?" | Skala fitur |
| "Template batasan — 1 poin?" | Siswa sebut isi kickoff |

---

## Etika Penyampaian

| Aturan | Build 1 |
|--------|---------|
| **Facilitator** | Guru ≤10 menit front |
| **No takeover keyboard** | Tanya, tunjuk layar — siswa ketik |
| **No solusi project** | Tidak paste pipeline lengkap WA |
| **Data prep clinic OK** | Generic di papan: `normalizeColumn(arr)` — siswa adaptasi |
| **Clarifying Q** | Ganti "begini kodenya" |
| **Copas antar teman** | Red flag — minta jelaskan baris preprocess |

### Script coaching

```text
"Dataset mentah — kolom apa yang jadi fitur?" (REA)
"Shape xs setelah tensor2d?" (TEC)
"Satu metrik eksplorasi di README?" (OBS)
"Blocker P13 — data atau model?" (ITR)
```

---

## Materi Inti

### Transformasi

**Dari:** Kickoff spec (P11)  
**Ke:** **Pipeline data hidup** — siap `model.fit` di P13.

### PRJ-01 pipeline target (siswa bangun)

→ referensi: [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier)

```text
fetch/load data.json
  → clean (missing, typo)
  → map rows → { features: number[], label: number }
  → normalize features
  → split train/test indices
  → (optional test) tf.tensor2d sample — console.log shape
  → README update + metrik
```

### PRJ-02 pipeline target

```text
Sama load/clean
  → branch A: rules on raw/normalized features
  → branch B: tensor pipeline (parallel folder/function)
  → tabel banding.md — skeleton
```

### Batasan model template — lanjut isi

Tambah poin **data**:

```text
"Model hanya valid jika fitur di-normalisasi dengan min/max dari dataset latih."
```

### Checkpoint README (modul)

Minimal:

- [ ] Sumber data
- [ ] Kolom & arti
- [ ] Langkah cleaning
- [ ] 1 metrik (count kelas / mean fitur / outlier)
- [ ] Shape tensor expected: `[nTrain, nFeatures]`

---

## Alur Live Coding / Live Facilitation

```text
[LANGKAH 1 — Stand-up 0–10 menit]
Kelompok/individu — 3 pertanyaan.
Guru catat blocker top-3 di papan.

[LANGKAH 2 — Clarifying Q 10–20 menit]
1 pertanyaan untuk seluruh kelas — pilih dari blocker:
  PRJ-01: "Duplikat — hapus atau gabung?"
  PRJ-02: "Rule pakai fitur mentah atau normal?"
TTS — bukan jawaban kode.

[LANGKAH 3 — Build 20–70 menit]
Siswa: cleaning, encoding, normalisasi, load ke array.
Guru rotation — script coaching.
PRJ-02: rule skeleton + test 5 baris manual.

[LANGKAH 4 — Tensor smoke test 60–70 menit]
Optional checkpoint: 1 siswa volunteer console.log
  tf.tensor2d(xsTrain).shape
Tanpa fit penuh — cukup proof pipeline.

[LANGKAH 5 — Checkpoint 70–85 menit]
README review cepat — metrik eksplorasi.
Guru: "Siap train P13?" — checklist.

[LANGKAH 6 — Debug clinic 75–85 menit]
1 error JSON parse / shape — kelas TTS Debug Sheet.

[LANGKAH 7 — Exit 85–90 menit]
Blocker untuk P13 — 1 kalimat sticky note.
```

### Generic snippet papan (boleh — bukan file siswa)

```javascript
function normalizeColumn(values) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return values.map(function (v) {
    return (v - min) / (max - min || 1);
  });
}

// Pisah fitur per kolom → normalisasi → gabung row
const xsTrain = trainRows.map(function (row) {
  return normalizedFeatures(row);
});
console.log("Shape check:", [xsTrain.length, xsTrain[0].length]);
```

→ referensi: [Numeric data MLCC](https://developers.google.com/machine-learning/crash-course/representation/numeric-data)

---

## Latihan Membaca Kode

### Snippet A — JSON load

```javascript
const raw = await fetch("data.json").then(r => r.json());
const rows = raw.filter(r => r.skor != null);
```

| Pertanyaan | Kunci |
|------------|-------|
| `r.skor != null` — mengapa? | Buang missing — spiral P03 |
| Lupa await fetch? | Promise, bukan data — error downstream |

### Snippet B — normalisasi salah

```javascript
const xs = rows.map(r => [r.umur, r.skor]); // umur 15-18, skor 0-100
// langsung tensor2d tanpa normalize
```

| Pertanyaan | Kunci |
|------------|-------|
| Risiko training? | Loss lambat/NaN — skor dominasi |
| Fix? | normalize per kolom |

### Snippet C — label string

```javascript
const ys = rows.map(r => r.kelas); // "A", "B", "A"
model.compile({ loss: 'binaryCrossentropy' });
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | Label string — perlu encode 0/1 atau one-hot |
| Fix? | Map {A:0, B:1} atau one-hot 3 kelas |

### Snippet D — leak test

```javascript
const xsAll = tf.tensor2d(allRows);
await model.fit(xsAll, ysAll, { epochs: 15 });
const acc = evaluate(xsAll, ysAll);
```

| Pertanyaan | Kunci |
|------------|-------|
| Akurasi misleading? | **Ya** — test harus hold-out P09/P10 |
| Fix? | xsTrain/xsTest terpisah sejak P12 |

---

## Praktik Mandiri

**Siswa (build milik mereka):**

1. Final cleaning — dokumentasi di README.
2. Normalisasi + encoding label.
3. Train/test split — simpan indeks atau array terpisah.
4. Smoke test: log shape `xsTrain`, sample 1 baris.
5. **PRJ-01:** metrik eksplorasi 1+ di README.
6. **PRJ-02:** rule-based 5 contoh + tabel banding header.

**Guru:** prioritaskan siswa blocker data — bukan yang sudah mulai polish CSS.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Train di P12 | OK smoke test — ingatkan fit penuh P13 |
| README kosong | Gate P13 — minimal metrik |
| Guru fix preprocess | Coaching question only |
| Copy normalize tanpa paham | TTS: "Max dari data siapa?" |
| Fitur = label leak | Tanya: "Kolom ini jawaban?" |
| PRJ-02 skip rule | DoD butuh 2 pendekatan |

---

## Rujukan

- Modul: [XII-S5-P12](../../../kelas-xii/semester-5/XII-S5-P12_project-s5-build-1.md)
- [P11 Kickoff](./XII-S5-P11_project-s5-kickoff.md) · [P13 Build 2](./XII-S5-P13_project-s5-build-2.md)
- [PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md) · [PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md)
- [P03 Dataset](./XII-S5-P03_dataset-mini-bersih.md) · [P09 Model](./XII-S5-P09_model-dense-mini.md)

---

## Checklist Exit

- [ ] Stand-up + blocker tercatat
- [ ] Data cleaned — README updated
- [ ] Normalisasi/encoding documented
- [ ] Train/test split ada
- [ ] Shape tensor verified (console)
- [ ] 1 metrik eksplorasi (PRJ-01) / rule 5 contoh (PRJ-02)
- [ ] Siap train P13 — guru sign-off cepat
- [ ] Guru tidak menyelesaikan project untuk siswa

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
