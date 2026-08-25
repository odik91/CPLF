# Handout Siswa — XII-S5-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P12_project-s5-build-1.md](../../../kelas-xii/semester-5/XII-S5-P12_project-s5-build-1.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · data · pra-proses |
| 10–70 | Build | Cleaning · encoding · tensor pipeline |
| 70–85 | Checkpoint | README dataset + 1 metrik eksplorasi |
| 85–90 | Exit | Siap train P13 |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Siap train P13
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
