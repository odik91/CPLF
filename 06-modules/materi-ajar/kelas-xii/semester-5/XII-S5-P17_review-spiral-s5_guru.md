# Materi Guru Lengkap — XII-S5-P17
**Modul:** [XII-S5-P17_review-spiral-s5.md](../../kelas-xii/semester-5/XII-S5-P17_review-spiral-s5.md)
**Materi pendukung sumber:** [XII-S5-P17_review-spiral-s5.md](../../materi-pendukung/materi-pendukung/kelas-xii/semester-5/XII-S5-P17_review-spiral-s5.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P17 — Review Spiral Semester 5

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P17 |
| Unit | XII5.1–7 |
| Durasi | 2 JP = 90 menit |

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Quiz: AI vs ML · tensor shape · loss |
| 5–25 | Station | 4 station: data · tensor · train · baca metrik |
| 25–45 | Practice | Fix 1 bug per station (worksheet) |
| 45–65 | Concept | Map S5 → S6: tabular → citra/webcam |
| 65–85 | Reflect | 3 konsep paling penting tahun ini |
| 85–90 | Preview | Webcam & etika S6 |

---

## Formatif

**TRF**, **OBS**

---

## Catatan Guru

Jika jam sempit — station bisa jadi PR.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P17 Review Spiral Semester 5

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P17 |
| Modul pertemuan | [XII-S5-P17_review-spiral-s5.md](../../../kelas-xii/semester-5/XII-S5-P17_review-spiral-s5.md) |
| Semester | 5 · Pertemuan 17/18 |
| Unit | XII5.1–7 (integratif) |
| Durasi referensi | 2 JP = 90 menit |
| Formatif | TRF, OBS |
| Ada live code? | **Station** — fix bug singkat per station (worksheet) |

---

## Pengetahuan Guru

Review spiral = **transfer** konsep P01–P15 ke bug nyata — bukan ulangan slide.

| Station | Konsep | Bug tipikal | Fix hint (jangan beri jawaban langsung) |
|---------|--------|-------------|----------------------------------------|
| **1 Data** | P02–P03 bersih | Label string belum encode | "Model baca angka — label kamu apa jenisnya?" |
| **2 Tensor** | P06–P07 shape | `tensor2d` shape salah | "Berapa fitur per baris?" |
| **3 Train** | P08–P09 | Lupa `await fit` | "Predict jalan sebelum training selesai?" |
| **4 Metrik** | P10, P15 | Overclaim acc 100% | "N data? Kasus gagal?" |

**Substansi kunci:**

1. Quiz opening: AI vs ML · tensor shape · loss — cepat, oral.
2. 4 station rotasi — worksheet 1 bug/station.
3. Map S5 → S6: tabular TF.js → citra/webcam (Teachable Machine preview).
4. Refleksi 3 konsep penting — siswa pilih, bukan guru.
5. Preview S6: webcam + etika biometrik/wajah.

**Jika jam sempit:** station jadi PR — prioritaskan station 4 (metrik/batasan) + map S6.

---

## Recall Spiral

Quiz opening **5 menit** — 3 pertanyaan cepat.

| Pertanyaan | Kunci singkat |
|------------|---------------|
| AI vs ML — contoh MA | Chatbot = AI luas; klasifikasi nilai = ML |
| `inputShape: [4]` — xs harus? | 4 fitur per sampel |
| Loss naik terus epoch 1–5 | Data/lr bermasalah — cek normalisasi |
| Batasan model — 1 klaim terlarang? | "Selalu benar" / "100%" |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Worksheet bug — siswa **ketik fix sendiri**, bukan paste kunci jawaban |
| **Live modeling** | Guru fix 1 bug station 4 **live** — TTS: baca error → tebak → perbaiki |
| **Per baris / scope** | Per station: 5–7 menit — timer visible |
| **Recall** | Quiz spiral sebelum rotasi |
| **Membaca kode** | Worksheet = latihan baca error message |
| **No answer key WA** | Kunci jawaban hanya di materi guru ini |

---

## Materi Inti

### Transformasi belajar

**Dari:** 18 pertemuan terpisah  
**Ke:** **Peta mental** S5 + jembatan S6 + project showcase besok.

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Quiz oral |
| 5–25 | Station | 4×5 menit rotasi (20 menit efektif + transisi) |
| 25–45 | Practice | Fix 1 bug per station — worksheet |
| 45–65 | Concept | Map S5→S6 di papan |
| 65–85 | Reflect | 3 konsep paling penting |
| 85–90 | Preview | Webcam · etika · portofolio |

### Station setup (detail)

**Station 1 — Data (P02–P03)**

Worksheet snippet:
```javascript
const labels = ['A', 'B', 'A', 'B'];
const ys = tf.tensor1d(labels); // ERROR path
```
Bug: label string — perlu one-hot atau index numerik.

**Station 2 — Tensor (P06–P07)**

```javascript
const xs = tf.tensor2d([[1, 2], [3, 4, 5]]);
model.add(tf.layers.dense({ inputShape: [2], units: 1 }));
```
Bug: baris 2 punya 3 elemen — shape inconsistent.

**Station 3 — Train (P08–P09)**

```javascript
model.fit(xs, ys, { epochs: 10 });
btn.onclick = () => model.predict(...); // langsung setelah sync call
```
Bug: `fit` async — perlu `await` / disable button sampai selesai.

**Station 4 — Metrik (P10, P15, P14)**

Paragraf:
```text
Model kami akurasi 100% — siap dipakai wali kelas.
```
Bug: **etika/REA** — overclaim; fix = paragraf jujur + kasus gagal.

### Map S5 → S6 (papan)

```text
S5: data tabular → tensor → dense → predict + batasan tulis
S6: citra/webcam → Teachable Machine / transfer → etika wajah & consent
Sama: data · batasan · demo gagal · tidak overclaim
Bedaa: input piksel · risiko privasi lebih tinggi
```

Preview etika S6: wajah, consent, QR vs biometrik — link [09_Rubrik_Etika_AI E2](../../../../09-rubrik/09_Rubrik_Etika_AI.md).

---

## Alur Live Coding / Facilitator

### Persiapan

- [ ] 4 meja station + QR/link worksheet (4 file atau 1 PDF 4 halaman)
- [ ] Timer
- [ ] 1 laptop demo Teachable Machine (2 menit preview — **bukan** lab penuh)
- [ ] Baca: [TF.js Get Started](https://www.tensorflow.org/js/tutorials/getting_started) + [Teachable Machine](https://teachablemachine.withgoogle.com/)

### Skrip fasilitator

```text
[LANGKAH 1 — Quiz 0–5 menit]
3 pertanyaan oral — random siswa
Ucapkan: "Besok showcase — spiral hari ini = checklist otak."

[LANGKAH 2 — Station 5–25 menit]
Rotasi 5 menit — bel × transisi
Station 4 (metrik) = prioritas jika kelas hanya 2 station sempat
Keliling: hint bertanya, bukan fix

[LANGKAH 3 — Worksheet 25–45 menit]
Individu/kelompok: tulis fix 1 bug per station yang dikunjungi
Ucapkan: "Station 4 — fix paragraf, bukan kode."

[LANGKAH 4 — Map S6 45–65 menit]
Gambar peta S5→S6
Demo TM 2 menit: gambar → class — "Batasan: cahaya, sudut, consent"
Tanya: "Risiko webcam vs form tabular?"

[LANGKAH 5 — Reflect 65–85 menit]
Sticky note / 1 kalimat: 3 konsep paling penting S5
Pleno: kumpulkan tema — guru parafrase

[LANGKAH 6 — Preview 85–90 menit]
Showcase P18 format — checklist
Simpan artefak portofolio S6
```

### Variasi jam sempit (45 menit efektif)

- Quiz 5 m + Station 4 saja 15 m + Map S6 10 m + Reflect 10 m + Preview 5 m
- Station 1–3 jadi PR online

---

## Latihan Membaca Kode

### Snippet — Error console

```text
Error: Expected tensor shape [8,3] but got [8,4]
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Station mana? | Tensor / data (station 2) |
| Pertanyaan ke siswa? | "Layer input expect berapa fitur?" |
| Fix arah? | Ubah data jadi 3 kolom atau inputShape [4] |

### Snippet — Spiral etika

```text
acc: 1.0 (8 samples)
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Overfit? | Sangat mungkin |
| Kalimat showcase aman? | "Eksperimen 8 contoh — belum untuk keputusan resmi" |

---

## Praktik Mandiri

1. Worksheet: fix 1 bug per station (4 fix jika sempat).
2. Tulis 3 konsep S5 paling penting + 1 kalimat "belum paham".
3. Update checklist showcase P18 (demo + batasan + gagal).
4. PR opsional: station yang terlewat.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Station jadi social hour | Timer ketat + bel |
| Fix copy dari teman | Worksheet individual dulu |
| Abaikan station 4 (etika) | Prioritaskan meski waktu sempit |
| Panik S6 "harus Python" | Tekankan TM + browser — sama etika batasan |
| Guru jadi debug di semua station | Hint dengan pertanyaan |
| Tidak hubung ke showcase | Closing 5 m checklist P18 |

---

## Referensi Guru

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | TF.js tutorials index | → [TF.js Tutorials](https://www.tensorflow.org/js/tutorials) |
| 2 | Tensor shapes | → [Tensors & operations](https://www.tensorflow.org/js/guide/tensors_operations) |
| 3 | Train simple classifier | → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 4 | MLCC spiral concepts | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 5 | Overfitting review | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| 6 | Teachable Machine (S6 preview) | → [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| 7 | Rubrik etika E2 preview | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 8 | Panduan guru ML | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

---

## Rujukan

- Modul: [XII-S5-P17](../../../kelas-xii/semester-5/XII-S5-P17_review-spiral-s5.md)
- Indeks S5: [XII-S5_Index](../../../kelas-xii/semester-5/XII-S5_Index.md)
- Project: [P16 Peer Review](./XII-S5-P16_peer-review-s5.md) · [P18 Showcase](./XII-S5-P18_showcase-refleksi-s5.md)
- Lanjutan S6: [XII-S6 Materi Index](../semester-6/XII-S6_Materi_Index.md) · [Panduan CV/Etika](../../00_Panduan_Guru_CV_Etika.md)

---

## Checklist Exit

- [ ] Quiz spiral — AI/ML, shape, loss/batasan
- [ ] Minimal 2 station dikunjungi (4 ideal) — station 4 metrik/etika wajib jika sempit
- [ ] Worksheet fix bug terkumpul
- [ ] Map S5→S6 dijelaskan — TM preview jika memungkinkan
- [ ] 3 konsep refleksi siswa
- [ ] Preview showcase P18 + etika S6
- [ ] Kunci jawaban tidak dibagikan ke siswa

[← Indeks materi S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
