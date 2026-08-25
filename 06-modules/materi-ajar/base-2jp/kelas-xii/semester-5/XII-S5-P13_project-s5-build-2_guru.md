# Materi Guru Lengkap — XII-S5-P13

**Handout siswa (bagikan):** [XII-S5-P13_project-s5-build-2_siswa.md](./XII-S5-P13_project-s5-build-2_siswa.md)

**Modul:** [XII-S5-P13_project-s5-build-2.md](../../../kelas-xii/semester-5/XII-S5-P13_project-s5-build-2.md)

**Materi pendukung sumber:** [XII-S5-P13_project-s5-build-2.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P13_project-s5-build-2.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P13 — Project S5 Build 2

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P13 |
| Unit | XII5.8 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Train status · UI plan |
| 10–65 | Build | Train model · tampilkan loss · form prediksi |
| 65–75 | Draft | Mulai dokumen batasan model |
| 75–90 | Exit | Demo internal 1 menit |

---

## Target

- [ ] Model train di browser  
- [ ] UI input → prediksi  
- [ ] Loss/akurasi terlihat  

---

## Formatif

**TEC**, **ITR**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P13 Project S5 Build 2 (Train + UI Prediksi)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib baca dulu:** [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P13 |
| Modul pertemuan | [XII-S5-P13_project-s5-build-2.md](../../../kelas-xii/semester-5/XII-S5-P13_project-s5-build-2.md) |
| Semester | 5 · Pertemuan 13/18 |
| Unit | XII5.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |
| Formatif | TEC, ITR |
| Ada live code? | **Ya** — guru demo singkat `fit` + `predict`; siswa build sendiri |

---

## Pengetahuan Guru

Guru **tidak** perlu hafal backprop — cukup paham alur dan bisa **menginterogasi** siswa dengan pertanyaan benar.

| Istilah | Arti untuk siswa MA | Trap yang sering muncul |
|---------|---------------------|-------------------------|
| **Train (`fit`)** | Model menyesuaikan bobot dari data latih | Epoch 200 + data kecil → browser hang |
| **Loss** | Angka "seberapa salah" — **turun** = belajar (biasanya) | Loss NaN → klaim "model jalan" tanpa perbaikan |
| **Predict** | Tebakan model untuk input baru | UI cantik tapi prediksi hardcode / random |
| **Metrik di UI** | Loss/akurasi **kasar** untuk transparansi | "Akurasi 95%" tanpa jelaskan data apa & kapan salah |

**Substansi kunci pertemuan ini:**

1. P12 sudah menyiapkan tensor pipeline — P13 = **model benar-benar jalan** + **form prediksi**.
2. Loss/akurasi **wajib terlihat** (console atau UI) — fondasi P15 & dokumen batasan P14.
3. Mulai **draft batasan model** di menit 65–75 — jangan tunda ke P14.
4. Demo internal 1 menit: siswa harus bisa tunjuk **1 prediksi benar + 1 yang diragukan**.
5. Guru = **facilitator lab**, bukan debug semua laptop — intervensi lewat checklist & pertanyaan.

**Alur teknis minimal (parafrase ke siswa):**

```text
Data bersih (P12) → xs, ys tensor
→ model = tf.sequential([tf.layers.dense(...)])
→ model.compile({ optimizer: 'adam', loss, metrics: ['accuracy'] })
→ await model.fit(xs, ys, { epochs: 10–20, callbacks: onEpochEnd })
→ input form → tensor → model.predict → tampilkan label + confidence kasar
→ catat: "model ini salah jika ___"
```

---

## Recall Spiral

Opening **5–10 menit** stand-up — oral, ringkas.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P12: fitur apa yang model "lihat"? | Sebut nama kolom/fitur numerik — bukan "data" generik |
| P08–P09: urutan layer → compile → fit? | Architecture dulu, compile tentukan loss/optimizer, fit = training |
| P10: loss turun tapi akurasi train 100% — waspada? | Kemungkinan overfit / data terlalu kecil |
| P11: acceptance criteria project — sudah ada? | Minimal 3 checkbox terukur |

Jika kelas blank: tampilkan snippet `model.fit` tanpa `epochs` — tanya "apa yang hilang?"

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan kirim file `train.js` lengkap ke WA — siswa **ketik ulang** dari demo guru, sesuaikan shape data sendiri |
| **Live coding** | Guru demo **10–15 menit** train mini (dataset ≤20 baris) — TTS per blok: layer → compile → fit → predict |
| **Per baris / scope** | Setiap callback loss: pause → "angka naik/turun — artinya apa?" |
| **Recall** | Stand-up kait ke P12 blocker data |
| **Membaca kode** | Latihan baca snippet `predict` — siswa prediksi output sebelum run |
| **No starter file** | Skeleton boleh (HTML + CDN TF.js); **logic train** siswa tulis sendiri |
| **No overclaim** | Guru contohkan kalimat: "Model ini **membantu tebak**, bukan **memastikan** kebenaran" |

---

## Materi Inti

### Transformasi belajar

**Dari:** Pipeline data di P12 (persiapan)  
**Ke:** Produk yang **bisa dipakai** — input → prediksi + angka loss terlihat + awal batasan tertulis.

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–10 | Stand-up | Keliling: "train status? UI plan? blocker?" — catat 2–3 blocker umum di papan |
| 10–15 | Demo singkat (opsional) | Live `fit` 10 epoch + log loss — **bukan** selesaikan project siswa |
| 15–65 | Build | Rotasi kelompok; intervensi ≤3 menit/siswa; eskalasi hanya shape mismatch / NaN |
| 65–75 | Draft batasan | Template 4 bullet di papan; siswa isi minimal 2 poin |
| 75–90 | Demo internal | 1 menit/kelompok: masalah → 1 prediksi live → 1 kalimat batasan |

### Checklist siswa (tampilkan di papan)

- [ ] `model.fit` selesai tanpa error fatal
- [ ] Loss/akurasi tampil (console atau UI)
- [ ] Form input → `predict` → output terbaca pengguna awam
- [ ] Draft batasan: data apa · kapan salah · klaim yang **tidak** boleh
- [ ] **Bukan:** akurasi dipamerkan tanpa konteks

### UI prediksi — standar minimum

- Input sesuai jumlah fitur (number fields atau select)
- Tombol "Prediksi" / auto on change
- Output: label + **disclaimer** singkat ("hasil model, bukan kepastian")
- Opsional: Chart.js loss — lihat panduan guru

### Pertanyaan intervensi guru (hafalkan, jangan debug dulu)

| Gejala | Tanya siswa | Bukan |
|--------|-------------|-------|
| `shape mismatch` | "Berapa fitur di layer input? Berapa di data?" | Ubah kode siswa langsung |
| Loss NaN | "Sudah normalisasi 0–1? Learning rate default?" | Ganti seluruh model |
| Akurasi 100% | "Berapa baris data? Apakah semua kelas ada?" | Puji "hebat" |
| UI tidak update | "Predict dipanggil setelah fit selesai?" | Tulis predict untuk mereka |
| "Sudah jadi" tanpa loss | "Tunjukkan angka epoch terakhir" | Terima tanpa metrik |

---

## Alur Live Coding / Facilitator

### Persiapan lab

- [ ] Chrome/Edge + Live Server
- [ ] CDN TF.js cacheable atau offline di 1 mesin demo
- [ ] Dataset demo guru ≤20 baris (iris-style tabular)
- [ ] Template "Draft Batasan Model" di papan — **bukan** PDF siap isi lengkap
- [ ] Baca: [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) (2 jam sebelum kelas)

### Skrip fasilitator (90 menit)

```text
[LANGKAH 1 — Stand-up 0–10 menit]
Ucapkan: "Hari ini produk harus bisa diprediksi — bukan cuma tensor di console."
Tanya keliling: "Blocker P12? Shape data? Sudah compile?"
Scope: catat blocker umum — jawab kolektif jika ≥3 siswa sama masalah.

[LANGKAH 2 — Demo guru 10–15 menit] (opsional jika >50% kelas stuck)
Live: sequential 1 dense → compile adam → fit 10 epoch
Ucapkan: "Saya log loss tiap epoch — angka ini nanti masuk batasan model."
Tanya: "Prediksi input [1,0,0] — label apa? Kenapa bisa salah?"
Scope: satu file demo — siswa tiru struktur, bukan copy-paste data project.

[LANGKAH 3 — Build 15–65 menit]
Rotasi: 3–4 menit/kelompok
Ucapkan saat lihat akurasi tinggi: "Bagus jalan — sekarang cari 1 input yang salah."
Tanya: "Loss terakhir berapa? Naik atau turun dari epoch 1?"
Scope: prioritaskan metrik visible + predict UI — polish CSS belakangan.

[LANGKAH 4 — Draft batasan 65–75 menit]
Tulis di papan 4 bullet template (lihat P14)
Ucapkan: "Kalau tidak tulis hari ini, demo minggu depan akan overclaim."
Tanya: "Klaim apa yang TIDAK boleh kamu tulis di poster OSIS?"
Scope: minimal 2 bullet terisi — lanjut P14.

[LANGKAH 5 — Demo internal 75–90 menit]
Format 1 menit: masalah → 1 prediksi → 1 batasan
Ucapkan: "Yang gagal prediksi juga boleh demo — itu bukti jujur."
Tanya audience: "Prediksi ini bisa dipakai wali kelas tanpa penjelasan?"
Scope: exit ticket = link repo + screenshot loss.
```

### Template draft batasan (papan)

```text
1. Data yang dipakai: ___ (sumber, jumlah baris, fitur)
2. Data yang TIDAK dipakai / tidak cocok: ___
3. Akurasi kasar ___ — artinya BUKAN ___
4. Klaim yang tidak boleh: "selalu benar", "100% akurat", "menggantikan guru", ...
```

---

## Latihan Membaca Kode

Proyeksikan snippet — siswa prediksi **sebelum** guru run.

### Snippet A — Train loop

```javascript
const model = tf.sequential();
model.add(tf.layers.dense({ units: 8, inputShape: [3], activation: 'relu' }));
model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));
model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
await model.fit(xs, ys, { epochs: 50 });
console.log('Selesai — akurasi pasti bagus!');
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Input shape cocok jika xs punya berapa kolom? | 3 fitur per baris |
| Epoch 50 + data 15 baris — risiko? | Overfit; browser lambat |
| Kalimat console terakhir — etis? | **Tidak** — "pasti bagus" = overclaim |
| Apa yang harus ditampilkan selain "Selesai"? | Loss/accuracy per epoch atau final + disclaimer |

### Snippet B — Predict UI

```javascript
btn.onclick = () => {
  const raw = [Number(f1.value), Number(f2.value)];
  const pred = model.predict(tf.tensor2d([raw]));
  label.textContent = 'Hasil: ' + pred.dataSync()[0].toFixed(2);
};
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Bug shape jika model inputShape [3]? | Hanya 2 fitur — mismatch |
| Output `.toFixed(2)` — cukup untuk user awam? | Perlu label makna (kelas A/B) + disclaimer |
| Tensor `pred` — risiko memory? | Sebaiknya `pred.dispose()` atau `tf.tidy` |

---

## Praktik Mandiri

Siswa **build sendiri** — arahkan:

1. Selesaikan `fit` dengan epoch 10–20 (sesuaikan ukuran data).
2. Tampilkan loss di console **atau** UI (Chart.js opsional).
3. Form prediksi minimal 2 fitur + output label human-readable.
4. Isi **2 bullet** draft batasan model.
5. Uji **3 input**: 1 yang masuk akal, 1 edge case, 1 yang model salah — catat di README.

**Variasi kelas lambat:** fokus train + console log; UI cukup 2 input + `<p>` output.

**Variasi kelas cepat:** callback `onEpochEnd` + grafik loss; split train/test sederhana 80/20.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Copy tutorial iris tanpa ubah inputShape | Demo live ubah shape — tunjukkan error lalu perbaiki |
| Pamer akurasi 100% di UI besar | Tanya: "Berapa baris data? Tunjukkan 1 prediksi salah" |
| Predict sebelum fit selesai | Checklist urutan: compile → fit → predict |
| UI tanpa disclaimer | Contohkan 1 kalimat disclaimer wajib di demo internal |
| Minta guru "perbaiki model" | Balas dengan pertanyaan shape/loss — eskalasi setelah siswa jawab |
| Draft batasan kosong | Gate exit: tidak pulang tanpa 2 bullet draft |
| Hardcode jawaban di predict | Minta ubah input ekstrem — harus berubah output |

---

## Referensi Guru

Baca **sebelum** pertemuan; di kelas parafrase — jangan baca URL.

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | Train classifier end-to-end | → [TF.js — Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 2 | API `model.fit` & callbacks | → [tf.LayersModel.fit](https://js.tensorflow.org/api/latest/#tf.LayersModel.fit) |
| 3 | Predict setelah training | → [Model predict](https://www.tensorflow.org/js/guide/models#making_a_prediction) |
| 4 | Input shape & dense layer | → [Creating a model](https://www.tensorflow.org/js/guide/models#creating-a-model) |
| 5 | Loss & metrics (intuitif) | → [MLCC — Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss) |
| 6 | Memory / dispose tensor | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 7 | Grafik loss (opsional) | → [Chart.js — Line chart](https://www.chartjs.org/docs/latest/charts/line.html) |
| 8 | Rubrik etika — preview E1 | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) (batasan & kejujuran) |

---

## Rujukan

- Modul: [XII-S5-P13](../../../kelas-xii/semester-5/XII-S5-P13_project-s5-build-2.md)
- Sebelumnya: [P12 Build 1](./XII-S5-P12_project-s5-build-1.md) · [P11 Kickoff](./XII-S5-P11_project-s5-kickoff.md)
- Lanjutan: [P14 Demo + Batasan](./XII-S5-P14_project-s5-demo-batasan.md)
- Konsep: [P08 Layer/Compile/Fit](./XII-S5-P08_layer-compile-fit.md) · [P10 Loss](./XII-S5-P10_loss-epoch-overfitting.md)
- Panduan ML: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)
- Etika global: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)
- Rubrik: [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md)

---

## Checklist Exit

- [ ] Stand-up blocker tercatat; ≥80% kelompok `fit` jalan atau punya rencana fix jelas
- [ ] Loss/akurasi terlihat (console/UI) — bukan hanya "model jalan"
- [ ] Form prediksi live — bukan hardcode
- [ ] Draft batasan ≥2 bullet per kelompok
- [ ] Demo internal: minimal 1 kelompok tunjuk prediksi + batasan
- [ ] Guru **tidak** overclaim saat demo ("akurasi bagus" → "akurasi di data latih, masih bisa salah di luar")
- [ ] Tidak ada distribusi file train lengkap ke siswa
- [ ] Exit: link repo + screenshot metrik

[← Indeks materi S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

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
