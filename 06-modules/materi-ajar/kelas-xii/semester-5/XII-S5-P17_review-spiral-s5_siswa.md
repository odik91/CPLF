# Handout Siswa — XII-S5-P17

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P17_review-spiral-s5.md](../../../kelas-xii/semester-5/XII-S5-P17_review-spiral-s5.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Quiz: AI vs ML · tensor shape · loss |
| 5–25 | Station | 4 station: data · tensor · train · baca metrik |
| 25–45 | Practice | Fix 1 bug per station (worksheet) |
| 45–65 | Concept | Map S5 → S6: tabular → citra/webcam |
| 65–85 | Reflect | 3 konsep paling penting tahun ini |
| 85–90 | Preview | Webcam & etika S6 |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
