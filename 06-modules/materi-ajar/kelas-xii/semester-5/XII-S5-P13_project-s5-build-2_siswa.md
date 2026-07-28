# Handout Siswa — XII-S5-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P13_project-s5-build-2.md](../../../kelas-xii/semester-5/XII-S5-P13_project-s5-build-2.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Train status · UI plan |
| 10–65 | Build | Train model · tampilkan loss · form prediksi |
| 65–75 | Draft | Mulai dokumen batasan model |
| 75–90 | Exit | Demo internal 1 menit |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
