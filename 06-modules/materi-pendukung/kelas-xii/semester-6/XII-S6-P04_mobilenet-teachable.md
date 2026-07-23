# Materi Pendukung Guru — XII-S6-P04 MobileNet & Teachable Machine

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P04 |
| Modul pertemuan | [XII-S6-P04_mobilenet-teachable.md](../../../kelas-xii/semester-6/XII-S6-P04_mobilenet-teachable.md) |
| Semester | 6 · Pertemuan 4/18 |
| Unit | XII6.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T4 |
| Formatif | TEC, OBS |
| Prasyarat | [P03 Transfer Learning](./XII-S6-P03_transfer-learning-konsep.md) |
| Panduan CV | [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| Ada live code? | **Ya — TM demo live + load model TF.js di HTML (template guru, tidak didistribusi)** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | **Wajib** — Teachable Machine beranda | → referensi: [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| 2 | **Wajib** — Train image model | → referensi: [TM — Train image](https://teachablemachine.withgoogle.com/train/image) |
| 3 | **Wajib** — Export TensorFlow.js | → referensi: [TM Community — Image TF.js export](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| 4 | TM FAQ / tips sample | → referensi: [Teachable Machine FAQ](https://support.google.com/teachablemachine/) |
| 5 | Load model TF.js di web | → referensi: [TF.js — Load a model](https://www.tensorflow.org/js/guide/models#loading-a-model) |
| 6 | `@tensorflow-models/mobilenet` (alternatif) | → referensi: [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| 7 | TF.js transfer webcam tutorial | → referensi: [TF.js transfer learning](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 8 | Memory dispose setelah predict | → referensi: [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 9 | Panduan CV CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Waktu baca minimum:** 90 menit (TM train+export + TM community load snippet + coba 1 export lokal).

---

## Pengetahuan yang Dikuasai Guru

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

## Recall Spiral

Chain dari **P03**.

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "Backbone vs head — TM train bagian mana?" | Head (TM otomatis — siswa cukup intuisi) |
| "From scratch ImageNet di lab MA?" | Tidak realistis |
| "P02 — UI jika confidence rendah?" | "Tidak yakin" |
| "Sample 20 vs 200 — trade-off?" | Overfit vs generalisasi |

---

## Etika Penyampaian

| Aturan | Penerapan P04 |
|--------|---------------|
| **No distribute model as "done"** | Jangan kirim ZIP model guru + HTML siap jadi — siswa **train & export sendiri** |
| **Consent foto sample** | Dilarang foto wajah teman tanpa izin — objek/buku/diri sendiri |
| **TM demo live** | Guru train 2 kelas di proyektor — siswa lihat proses, bukan hanya hasil |
| **Load model live** | Ketik path `./model/` + `tmImage.load` per TTS — bukan paste 80 baris |
| **Catatan kegagalan wajib** | Sebelum export — checklist 3 kegagalan |
| **Fallback offline** | Model demo guru — siswa **dokumentasi evaluasi**, bukan klaim train sendiri |
| **No copas** | Link model ≠ artefak belajar — proses train harus terlihat |

---

## Materi Inti

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

## Alur Live Coding TTS — TM + Load Model

> **Persiapan:** Akun TM tidak wajib — guest OK. Folder export contoh **hanya di laptop guru** untuk demo load, bukan distribusi. Siswa buat export sendiri.

```text
[LANGKAH 1 — Opening demo 20 vs 200 0–5 menit]
Buka teachablemachine.withgoogle.com/train/image
Train cepat kelas A/B — 20 sample vs lihat rekaman 200 ( atau skip waktu )
TTS: "Train selesai — apakah produk selesai?"
→ referensi: Teachable Machine train image

[LANGKAH 2 — Siswa buat project 5–25 menit]
Monitor: consent foto · balance kelas · variasi sudut
Guru keliling — TTS: "Background ikut terbaca — variasi!"
Scope: 20 menit capture

[LANGKAH 3 — Train + preview 25–40 menit]
Klik Train Model — tunggu bersama
Preview webcam TM — cari 1 kegagalan live
Catat di worksheet "Critical 3 failures"

[LANGKAH 4 — Export 40–55 menit]
Export → TensorFlow.js → download model.zip
Extract ke folder project siswa: /model/
TTS: "model.json + weights = artefak seperti dataset S5"
→ referensi: TM Community export docs

[LANGKAH 5 — Uji 5 foto baru 55–65 menit]
Upload / webcam kondisi baru — minimal 1 gagal
Isi hipotesis penyebab

[LANGKAH 6 — Load model live 70–85 menit]
File HTML baru — kosong — proyektor
Ketik script TM image library + tfjs CDN
TTS scope tmImage.load:
  Tebak: "model.json isi apa?"
  Tanya: "Path relatif ./model/ — kenapa?"
  Spelling: await tmImage.load(modelURL, metadataURL)
Gabung getUserMedia P01
Ketik predict loop — log className + probability
Sambungkan threshold P02 — if (prob < 0.6) ...
→ referensi: TF.js load model + TM community

[LANGKAH 7 — Exit 85–90 menit]
Exit: folder model + 1 paragraf batasan + link/screenshot load sukses
Ucapkan: "Model TM ≠ capstone selesai — masih UX P05 + etika P06"
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

- **Deliverable 1:** Model TM 2–3 kelas + export TF.js.
- **Deliverable 2:** Dokumen 3 kegagalan + hipotesis.
- **Deliverable 3:** Halaman HTML load model + prediksi live (threshold P02).
- **Exit:** Link/folder model + **catatan batasan** 5–8 kalimat.
- **Variasi tanpa webcam:** klasifikasi upload file image.
- **Offline:** evaluasi model demo guru + dokumentasi — **jangan** klaim sebagai train sendiri.

---

## Kesalahan Umum

| Gejala | Penyebab | Respons |
|--------|----------|---------|
| 404 model.json | Path salah / belum extract zip | Cek Network tab |
| Selalu kelas sama | Overfit background | Retrain variasi |
| "TM 100% = selesai" | Trap | Wajibkan 3 kegagalan |
| Guru kirim ZIP model jadi | Etika | Siswa train ulang minimal 2 kelas |
| Foto wajah teman | Privasi | Hapus sample — consent P06 |
| Lupa metadata.json | Export tidak lengkap | Re-export |
| CORS file:// | Buka tanpa server | Live Server |

---

## Checklist Exit Guru

- [ ] TM train + export TF.js dibaca & dicoba guru sebelum kelas
- [ ] Demo 20 vs 200 foto (atau rekaman) di opening
- [ ] Siswa train sendiri — **tidak** terima model guru sebagai deliverable
- [ ] 3 kegagalan terdokumentasi sebelum integrasi HTML
- [ ] Load model live — siswa ketik path + load (bukan file siap)
- [ ] Recall P01 pipeline + P02 threshold terintegrasi
- [ ] Consent sample foto diingatkan
- [ ] Exit: batasan model tertulis — jembatan E1 rubrik

---

## Rujukan modul

- Modul: [XII-S6-P04](../../../kelas-xii/semester-6/XII-S6-P04_mobilenet-teachable.md)
- Sebelumnya: [P03](./XII-S6-P03_transfer-learning-konsep.md)
- Lanjutan: [P05 AI Fitur Web](./XII-S6-P05_ai-fitur-web.md)
- Rubrik: [09_Rubrik_Etika_AI.md](../../../../09-rubrik/09_Rubrik_Etika_AI.md)
