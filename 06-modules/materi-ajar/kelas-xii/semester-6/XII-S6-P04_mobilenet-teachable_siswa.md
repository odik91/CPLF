# Handout Siswa — XII-S6-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P04_mobilenet-teachable.md](../../../kelas-xii/semester-6/XII-S6-P04_mobilenet-teachable.md)

---

## 1. Tujuan pembelajaran

Dari konsep transfer → **artefak** model siap pakai + sikap kritis.

---

## 2. Ringkasan konsep

### Mengapa Teachable Machine = jalan praktis MA

P03 sudah konsep backbone+head. P04 menghasilkan **artefak nyata**: folder model TF.js + halaman HTML yang load. Siswa **tidak** train MobileNet from scratch — TM otomatis pakai pipeline transfer di balik layar.

**Transformasi belajar:** Dari konsep → **model 2–3 kelas + evaluasi jujur + integrasi web**.

### Alur TM (hafalkan 4 langkah)

```text
1. KOLEKSI — sample per kelas (webcam/upload)
2. LABEL — nama kelas (hijab, buku, botol — objek MA)
3. TRAIN — TM fine-tune head (menit)
4. EXPORT — TensorFlow.js → folder model.zip
```

### Demo opening — 20 foto vs 200 (modul menit 0–5)

Guru **live** dua versi cepat ( atau video rekaman guru):

| | 20 foto/kelas | 200 foto/kelas |
|---|---------------|----------------|
| Waktu train | ~30 detik | beberapa menit |
| Akurasi preview | Sering overfit pose | Lebih stabil variasi |
| Pesan siswa | "Sudah jadi AI?" | "Masih bisa salah di pencahayaan baru" |

**Trap:** TM selesai train ≠ produk siap — wajib **3 kegagalan** + catatan batasan sebelum export.

### Kualitas data > jumlah epoch

| Buruk | Baik |
|-------|------|
| 200 foto angle sama | 40 foto variasi sudut/cahaya |
| Background selalu meja | Background berbeda |
| Foto teman tanpa consent | Objek sendiri / consent |
| Hanya 1 kelas dominan | Balance relatif antar kelas |

→ referensi: [Teachable Machine FAQ](https://support.google.com/teachablemachine/)

### Export TF.js — struktur folder

Setelah export, siswa dapat (tipikal):

```text
model/
  model.json
  weights.bin (atau shards)
  metadata.json (label kelas)
```

**Load di HTML** via `tmImage.load()` (library TM community) atau `tf.loadLayersModel()` — guru pilih **satu pola** dan konsisten.

### Pola load model (referensi guru — JANGAN distribusi file siap)

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
<script>
  const URL = "./model/"; // folder export siswa
  let model, maxPredictions;

  async function initModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
  }

  async function predictLoop() {
    await initModel();
    const video = document.getElementById("webcam");
    // ... getUserMedia seperti P01 ...
    const prediction = await model.predict(video);
    // prediction = array { className, probability }
    prediction.forEach(p => console.log(p.className, p.probability));
  }
</script>
```

→ referensi: [TM Community — image library](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image)

### Alternatif: MobileNet ImageNet (prediksi 1000 kelas)

Untuk demo cepat tanpa train:

```javascript
import * as mobilenet from '@tensorflow-models/mobilenet';
// atau script tag dari CDN tfjs-models
const net = await mobilenet.load();
const predictions = await net.classify(video);
```

Cocok **fallback offline** — model demo guru, siswa dokumentasi evaluasi (modul).

### Critical practice — 3 kegagalan + hipotesis

Sebelum export, siswa wajib catat:

| Uji | Hasil | Hipotesis penyebab |
|-----|-------|-------------------|
| Pencahayaan gelap | Salah / confidence rendah | Kurang sample gelap |
| Objek mirip kelas lain | Confusion | Kelas boundary blur |
| Background baru | Salah label | Overfit background training |

Jembatan rubrik **E1** — proaktif demo gagal.

### Integrasi P01 + P02

- Pipeline webcam P01 tetap.
- UI threshold P02 — `probability` dari TM = confidence.

---

## 3. Materi praktik

### Timeline fasilitator

```text
Opening: demo 20 vs 200 foto
  → Concept: koleksi · label · train · export
  → Clarify: kualitas data > epoch
  → Practice: model 2–3 kelas MA
  → Practice: export TF.js · uji 5 foto baru
  → Critical: 3 kegagalan + hipotesis
  → Integrasi: load model HTML live
  → Exit: link model + catatan batasan
```

### Kelas objek MA (saran — siswa pilih)

- **Aman privasi:** buku, botol, tas, sepatu, tanaman pot.
- **Hati-hati:** hijab/peci OK jika **objek**, bukan identitas wajah untuk absensi.
- **Hindari capstone dini:** face recognition absensi — arahkan QR (P06).

### Export & uji 5 foto baru

Foto **belum pernah** di training — wajib 1 yang gagal untuk dokumentasi.

→ referensi: [TF.js — Load a model](https://www.tensorflow.org/js/guide/models#loading-a-model)

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Teachable Machine = “AI jadi” tanpa evaluasi.  
**Aman:** Wajibkan catatan kegagalan sebelum export.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo Teachable Machine 2 kelas — 20 foto vs 200 |
| 5–15 | Concept | Koleksi sample · label · train · export |
| 15–25 | Clarify | Kualitas data > jumlah epoch |
| 25–40 | Practice | Buat model 2–3 kelas (objek MA: hijab, buku, botol) |
| 40–55 | Practice | Export ke TF.js / link · uji 5 foto baru |
| 55–70 | Critical | Catat 3 kegagalan + penyebab hipotesis |
| 70–85 | Integrasi | Load model di halaman HTML (template guru) |
| 85–90 | Exit | Link model + catatan batasan |

---

## 6. Lembar kerja / latihan

### Snippet A — Load paths

```javascript
const URL = "./model/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";
model = await tmImage.load(modelURL, metadataURL);
```

| Pertanyaan | Kunci |
|------------|-------|
| Jika model.json salah folder? | 404 — fetch gagal |
| metadata.json fungsi? | Label kelas + info TM |

### Snippet B — Interpret prediction

```javascript
const prediction = await model.predict(video);
// [{ className: "Buku", probability: 0.91 }, { className: "Botol", probability: 0.09 }]
```

| Pertanyaan | Kunci |
|------------|-------|
| Kelas mana ditampilkan? | Buku — tertinggi, tapi cek threshold P02 |
| probability 0.55 + threshold 0.6? | "Tidak yakin" |

### Snippet C — Memory

```javascript
// Setelah fromPixels manual + predict
tensor.dispose();
```

| Pertanyaan | Kunci |
|------------|-------|
| TM predict video — perlu fromPixels? | TM handle internal — tapi custom pipeline P01 perlu dispose |

---

## 7. Exit ticket

1. Link model + catatan batasan
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
