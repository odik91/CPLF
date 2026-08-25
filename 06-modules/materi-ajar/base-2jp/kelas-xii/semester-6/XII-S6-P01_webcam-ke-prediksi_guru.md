# Materi Guru Lengkap — XII-S6-P01

**Handout siswa (bagikan):** [XII-S6-P01_webcam-ke-prediksi_siswa.md](./XII-S6-P01_webcam-ke-prediksi_siswa.md)

**Modul:** [XII-S6-P01_webcam-ke-prediksi.md](../../../kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)

**Materi pendukung sumber:** [XII-S6-P01_webcam-ke-prediksi.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P01 — Webcam ke Prediksi

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P01 |
| Semester | 6 · Pertemuan 1/18 |
| Unit | XII6.1 |
| Durasi | 2 JP = **90 menit** |
| Capability | CXII-T3, CXII-B2 |
| CP | AD, AP |
| MM | MM-21 |

## Learning Transformation

Dari “model di notebook terpisah” → **pipeline** webcam → tensor → output di browser.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–5 | Opening | Recall S5: tensor · predict — sekarang dari **kamera** | Cek izin webcam |
| 5–18 | Experience | Demo filter IG vs deteksi objek — beda proses? | Tanpa klaim akurat |
| 18–28 | Trap + Q | Trap: “kamera = AI otomatis pintar” | Tanya: langkah di antara? |
| 28–38 | Clarify | Frame → preprocess → model → label |
| 38–48 | Concept | `getUserMedia` · canvas · `tf.browser.fromPixels` |
| 48–70 | Practice | Halaman minimal: webcam → tensor shape log → tampil di UI |
| 70–80 | Reflect | Latensi & resolusi — apa dampaknya? |
| 80–90 | Transfer | Preview: model salah (P02) | |

**Adaptasi 1 JP:** Demo guru 15’ · Practice 20’ · Exit 10’.

---

## Cognitive Trap

**Asumsi:** Webcam langsung “mengerti” tanpa pipeline.  
**Aman:** Puji rasa ajaib; uraikan langkah.

---

## Starter (konsep)

```javascript
const video = document.querySelector("video");
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
// setelah video playing: tf.browser.fromPixels(video)
```

---

## Exit Ticket

1. 4 langkah pipeline (kata sendiri)  
2. Satu risiko teknis (izin/laptop lemot)  

---

## Formatif

**REA**, **TEC**

---

## Catatan Guru

**Privasi:** jelaskan kamera hanya untuk kelas; tidak rekam tanpa consent. Spiral S5 cukup 3 menit.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P01 Webcam ke Prediksi


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P01 |
| Modul pertemuan | [XII-S6-P01_webcam-ke-prediksi.md](../../../kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md) |
| Semester | 6 · Pertemuan 1/18 |
| Unit | XII6.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T3, CXII-B2 |
| CP | AD, AP |
| MM | MM-21 |
| Panduan CV | [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| Prasyarat ML | [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) (S5 selesai) |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |
| Ada live code? | **Ya — pipeline webcam → fromPixels → log shape (tanpa model penuh)** |

---

## Referensi Guru (baca sebelum mengajar)

Baca minimal **90 menit** sebelum P01 — fokus izin kamera & pipeline frame, belum training TM.

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | **Wajib** — Izin kamera di browser | → referensi: [MDN — MediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
| 2 | **Wajib** — Video element & stream | → referensi: [MDN — HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) |
| 3 | **Wajib** — Frame → tensor di browser | → referensi: [TF.js — tf.browser.fromPixels](https://js.tensorflow.org/api/latest/#browser.fromPixels) |
| 4 | Tutorial pipeline webcam (konteks S6) | → referensi: [TF.js — Webcam transfer learning](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 5 | Memory & dispose tensor frame | → referensi: [TF.js — Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 6 | Permissions Policy (konteks sekolah) | → referensi: [MDN — Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) |
| 7 | Setup CDN TF.js (recall S5) | → referensi: [Get started with TensorFlow.js](https://www.tensorflow.org/js/tutorials/getting_started) |
| 8 | Panduan CV guru CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Waktu baca minimum guru non-ML:** 60–75 menit (MDN getUserMedia + fromPixels API + skim tutorial webcam TF.js).

---

## Pengetahuan yang Dikuasai Guru

### Mengapa pertemuan ini membuka Semester 6

Di S5 siswa sudah: tensor, `model.predict()`, dataset tabular. Trap baru: **"HP punya kamera = AI otomatis pintar."** P01 memecah ilusi itu menjadi **pipeline terukur** — sama seperti fetch → JSON → DOM di XI, tapi sumber datanya **frame video**.

**Transformasi belajar:** Dari "model di notebook/console terpisah" → **alur hidup** webcam → tensor → (nanti) label di browser.

### Pipeline CV minimal (hafalkan 4 langkah)

```text
1. AKSES   — getUserMedia → stream ke <video>
2. FRAME   — video playing → satu snapshot pixel (canvas atau langsung video)
3. TENSOR  — tf.browser.fromPixels(video|canvas) → tensor rank-3 [h, w, 3]
4. INFER   — (P04+) model.predict(tensor) → label + confidence → UI
```

Hari ini **berhenti di langkah 3** + log shape. Langkah 4 = preview P02–P04.

### getUserMedia — apa yang guru harus tahu

| Aspek | Penjelasan plain Indonesian |
|-------|----------------------------|
| **Izin** | Browser minta consent user — **bukan** otomatis. Tolak = pipeline mati di langkah 1. |
| **HTTPS / localhost** | Di lab sekolah, `file://` sering gagal. Pakai **Live Server** atau localhost. |
| **Constraints** | `{ video: true }` cukup MA; `{ video: { width: 320 } }` untuk laptop lemot. |
| **Privasi** | Stream **live** — belum "AI". Rekam/simpan frame = keputusan etis terpisah (P06). |

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
await video.play();
```

**Async/await:** siswa XII sudah familiar — jelaskan "tunggu izin user dulu."

### tf.browser.fromPixels — inti teknis tanpa jadi ahli CNN

- Input: `HTMLVideoElement`, `HTMLCanvasElement`, atau `ImageData`.
- Output: tensor **rank 3** — tinggi × lebar × **3 channel RGB** (biasanya).
- Shape tipikal webcam 640×480 → `[480, 640, 3]` (TF.js: height dulu, lalu width).
- **Wajib `.dispose()`** setiap frame jika loop — memory leak = browser hang (30 siswa × 30 fps = bencana).

Metafora MA: **Frame = foto sekali jepret** → **Tensor = Excel 3D** (baris pixel × kolom pixel × 3 lembar warna R/G/B).

### Beda filter Instagram vs "deteksi objek"

| | Filter beauty / efek | Pipeline ML (P01+) |
|---|---------------------|-------------------|
| Proses | Shader/aturan pixel tetap | Frame → tensor → model weights |
| "Belajar"? | Tidak (rule/GPU effect) | Ya (model pretrained/trained) |
| Klaim guru | "Keduanya pakai kamera — **proses di tengah beda**" | Jangan klaim filter = CNN |

Experience menit 5–18: tunjukkan filter vs demo shape log — **tanpa** klaim akurasi deteksi.

### Latensi & resolusi (reflect menit 70–80)

- Resolusi besar → tensor besar → predict lambat (preview P04).
- Loop `requestAnimationFrame` vs `setInterval` — nanti P05; hari ini cukup **1 frame manual** (tombol "Ambil frame").
- Laptop lab lemot: turunkan resolusi constraint ke 224×224 (MobileNet standar).

### Pertanyaan kunci guru harus bisa jawab

1. **Apakah webcam = AI?** Tidak — kamera = **sensor input**. AI mulai setelah preprocess + model.
2. **Kenapa shape `[480, 640, 3]` bukan `[640, 480, 3]`?** Konvensi TF: height × width × channel.
3. **Apa risiko teknis #1 di lab?** Izin ditolak, HTTP bukan HTTPS, tensor tidak dispose.
4. **Apa risiko etis #1?** Ambil gambar teman tanpa consent — arahkan ke P06.

### Koneksi semester

- **P02:** Model salah — pipeline sama, output harus jujur.
- **P03–P04:** Model TM/MobileNet masuk di langkah 4.
- **P06:** Consent kamera sebelum capstone.

---

## Recall Spiral

Pertemuan **pertama S6** — recall dari **akhir S5** (P17 review / P18 showcase), bukan dari nol.

| Pertanyaan recall | Jawaban/inti yang diharapkan |
|-------------------|------------------------------|
| "S5 akhir — tensor dari dataset shape-nya?" | `[N, jumlahFitur]` — contoh `[40, 4]` |
| "Predict di S5 — input model apa bentuknya?" | Tensor, bukan array JS mentah |
| "P17 — S6 preview apa?" | Citra/webcam, Teachable Machine, etika biometrik |
| "`.dispose()` — kenapa?" | Bebas memori GPU/browser — lab 30 siswa |
| "Batasan model S5 — 1 klaim terlarang?" | "Selalu benar" / akurasi 100% tanpa bukti |

Jika kelas blank: tampilkan 1 baris `model.predict(xs)` dari project S5 — tanya "Input xs rank berapa?" lalu jembatan: "Hari ini xs dari **kamera**, bukan spreadsheet."

---

## Etika Penyampaian

| Aturan | Penerapan spesifik P01 |
|--------|------------------------|
| **Consent kamera** | Sebelum `getUserMedia`, guru ucapkan: "Kamera **hanya untuk belajar di kelas**, tidak direkam/disimpan tanpa izin. Boleh tolak — ada fallback lihat demo teman." |
| **No rekam tanpa izin** | Dilarang guru/siswa rekam wajah teman untuk dataset TM hari ini — itu P04 dengan protokol. |
| **No starter file** | Jangan kirim HTML webcam siap ke WA — siswa **bangun bare HTML** live |
| **Live type CDN + pipeline** | Guru ketik `<video>`, getUserMedia, fromPixels **per scope TTS** |
| **Recall S5** | Opening 5 menit — tensor + predict, bukan quiz menakutkan |
| **No copas** | Dilarang paste 40 baris materi guru |
| **Privasi MA** | Jika siswa muslim khawatir aurat di kamera: izinkan tutup lensa / lihat demo partner / sudut belakang |
| **Ton** | Akui "terasa ajaib" — lalu uraikan langkah; bukan magic, bukan sinisme |

**Fallback tanpa webcam:** 1 laptop demo di depan; siswa lain baca snippet + prediksi shape dari `<img>` statis dengan `fromPixels` pada canvas.

---

## Materi Inti

### Alur konseptual (90 menit)

```text
Opening recall S5 tensor · predict
  → Experience: filter IG vs "deteksi" — proses beda?
  → Trap: kamera = AI otomatis
  → Clarify: 4 langkah pipeline
  → Concept: getUserMedia · video · fromPixels
  → Practice: halaman minimal — shape log + UI
  → Reflect: latensi & resolusi
  → Transfer: preview model salah (P02)
```

### Experience — filter vs pipeline (menit 5–18)

Tunjukkan filter HP (beauty) vs browser tab dengan `<video>` kosong. Tanya: "Mana yang **butuh tensor + model weights**?" Jawaban: belum keduanya di demo — filter **tidak** = pipeline ML hari ini.

→ referensi: [TF.js webcam tutorial](https://www.tensorflow.org/js/tutorials/transfer/learn_more) — gambaran langkah 4 nanti

### Trap (menit 18–28)

**Asumsi siswa:** "Buka kamera = AI langsung tahu objek."

**Counter:** Tulis di papan 4 kotak kosong — isi bersama: Akses → Frame → Tensor → Infer. Tanya: "Hari ini kita berhenti di mana?"

### Concept (menit 38–48)

| Istilah | Definisi 1 kalimat MA |
|---------|----------------------|
| Stream | Aliran data video live dari kamera ke browser |
| Frame | Satu snapshot pixel dari stream |
| fromPixels | Konversi pixel DOM → tensor TF.js |
| Rank-3 tensor citra | `[height, width, channels]` |

→ referensi: [MDN getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

→ referensi: [tf.browser.fromPixels](https://js.tensorflow.org/api/latest/#browser.fromPixels)

### Kode referensi guru (hafalkan alur — jangan distribusi file)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Webcam → Tensor</title>
</head>
<body>
  <video id="webcam" autoplay playsinline width="320" height="240"></video>
  <button id="capture">Log shape</button>
  <pre id="log"></pre>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script>
    const video = document.getElementById("webcam");
    const logEl = document.getElementById("log");

    async function initCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240 }
      });
      video.srcObject = stream;
      await video.play();
    }

    document.getElementById("capture").addEventListener("click", () => {
      const tensor = tf.browser.fromPixels(video);
      logEl.textContent = "Shape: " + JSON.stringify(tensor.shape);
      tensor.dispose();
    });

    initCamera().catch(err => {
      logEl.textContent = "Kamera gagal: " + err.message;
    });
  </script>
</body>
</html>
```

### Transfer ke P02

"Ternyata pipeline jalan — **model** bisa tetap salah. Besok kita katalog kasus gagal + UI 'tidak yakin'."

---

## Alur Live Coding — line by line TTS

> **Persiapan:** Live Server, HTTPS/localhost, `<video>` kosong, file `webcam-tensor.html` **kosong** di proyektor. Console + `<pre>` untuk output. **Tidak** ada file siap di laptop siswa.

```text
[LANGKAH 1 — Opening recall 0–5 menit]
Tulis di papan: "S5 predict — input apa?"
Tanya: "Tensor shape [40,4] vs kamera — beda dimensi?"
Ucapkan: "Semester 6: sumber data = frame video."
Scope: 5 menit oral — jangan slide panjang.

[LANGKAH 2 — HTML + video 5–12 menit]
Ketik live: <!DOCTYPE html>, <video id="webcam" autoplay playsinline>
TTS scope video:
  Tebak: "autoplay untuk apa?"
  Tanya: "playsinline — kenapa penting di HP?"
  Spelling: "video = elemen tampilan stream, belum tensor."
Tambah <button id="capture">Log shape</button> dan <pre id="log">

[LANGKAH 3 — Etika consent 12–15 menit]
STOP coding — ucapkan protokol consent kelas (lihat Etika Penyampaian).
Tanya: "Siapa yang prefer tidak di kamera? — lihat demo teman OK."

[LANGKAH 4 — CDN TF.js 15–20 menit]
Ketik <script src="cdn.jsdelivr.net/.../tfjs">
Refresh — console.log(tf.version.tfjs)
TTS: "Sama seperti S5 — library dulu, kode kita belakangan."

[LANGKAH 5 — getUserMedia 20–35 menit]
Ketik async function initCamera() { ... }
TTS scope getUserMedia:
  Tebak: "await — tunggu apa?"
  Tanya: "Kalau user klik Block — gejala di UI?"
  Spelling: "srcObject = stream kamera ke video element."
Live demo izin Allow — video hidup.
→ referensi: MDN getUserMedia
Catch error — tampilkan di <pre>: "Kamera gagal: ..."

[LANGKAH 6 — fromPixels 35–50 menit]
Event listener tombol capture.
Ketik: const tensor = tf.browser.fromPixels(video);
Ketik: logEl.textContent = "Shape: " + JSON.stringify(tensor.shape);
TTS scope fromPixels:
  Tebak: "Rank tensor? Channel?"
  Tanya: "480,640,3 — angka mana height?"
  Spelling: "fromPixels baca pixel video sekarang — bukan file disk."
Klik tombol — shape muncul.
PENTING: tensor.dispose() — jelaskan sebelum klik kedua.
→ referensi: TF.js fromPixels + memory disposal

[LANGKAH 7 — Practice siswa 50–70 menit]
Siswa ketik versi sendiri — constraint resolusi opsional.
Tambahan: tampilkan shape di UI besar — bukan hanya console.
Guru keliling TTS per siswa.

[LANGKAH 8 — Reflect 70–80 menit]
Ubah constraint width:640 — bandingkan shape vs 320.
Tanya: "Laptop lemot — ubah apa dulu?"

[LANGKAH 9 — Exit 80–90 menit]
Exit ticket: 4 langkah pipeline + 1 risiko teknis.
Preview P02: "Model bisa salah meski shape benar."
```

---

## Latihan Membaca Kode

Siswa **prediksi dulu** — baru run.

### Snippet A — Urutan eksekusi

```javascript
const video = document.querySelector("video");
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
await video.play();
const t = tf.browser.fromPixels(video);
console.log(t.shape);
t.dispose();
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa yang terjadi jika `fromPixels` sebelum `play()`? | Frame kosong / shape aneh / error |
| Rank tensor? | 3 |
| Lupa dispose + loop 60×/detik? | Browser hang — memory leak |

### Snippet B — Error handling

```javascript
initCamera().catch(err => {
  logEl.textContent = "Kamera gagal: " + err.message;
});
```

| Pertanyaan | Kunci |
|------------|-------|
| User block kamera — apa di UI? | Pesan error, bukan blank |
| Apakah ini "AI gagal"? | Tidak — akses hardware gagal |

### Snippet C — Shape literacy

```javascript
// Video tampilan 320×240
const t = tf.browser.fromPixels(video);
// t.shape ≈ ?
```

| Pertanyaan | Kunci |
|------------|-------|
| Shape? | `[240, 320, 3]` — height, width, RGB |
| Banding S5 tensor [1,4]? | Citra = 3D spatial + channel |

---

## Praktik Mandiri Siswa

- **Deliverable:** Halaman HTML minimal — webcam hidup + tombol log shape + pesan error kamera.
- **Exit ticket:** (1) 4 langkah pipeline kata sendiri; (2) satu risiko teknis (izin/laptop lemot).
- **Wajib:** `.dispose()` setiap capture — tunjukkan di screenshot.
- **Belum wajib:** model.predict — itu P04.
- **Variasi cepat:** Gambar statis `<img>` → canvas → fromPixels (tanpa webcam).

---

## Kesalahan Umum

| Gejala siswa | Penyebab | Respons guru |
|--------------|----------|--------------|
| `getUserMedia is not defined` | Bukan secure context | Live Server / localhost |
| Video hitam | play() belum await / izin | Cek await video.play() |
| Shape `[0,0,3]` | fromPixels terlalu cepat | Tunggu video playing |
| Browser hang | Loop capture tanpa dispose | Demo dispose live |
| "Sudah jadi AI" | Trap kognitif | Tanya langkah ke-4 — belum ada model |
| Rekam teman diam-diam | Etika | Stop — protokol P06/P04 |
| Copas HTML guru | Etika penyampaian | Hapus — ketik ulang opening |

---

## Checklist Exit Guru

- [ ] MDN getUserMedia + fromPixels dibaca sebelum mengajar
- [ ] Protokol consent kamera diucapkan sebelum izin browser
- [ ] Live coding pipeline — bukan file distribusi
- [ ] Recall S5 (tensor, predict, dispose) terpasang
- [ ] Siswa log shape rank-3 — screenshot terkumpul
- [ ] `.dispose()` demonstrated setiap capture
- [ ] Fallback untuk siswa tanpa webcam / tolak izin
- [ ] Transfer P02 (model salah) disebutkan
- [ ] Tidak ada file materi pendukung dikirim ke siswa

---

## Rujukan modul

- Modul: [XII-S6-P01](../../../kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)
- Indeks S6: [XII-S6_Materi_Index](./XII-S6_Materi_Index.md)
- Panduan: [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)
- Lanjutan: [P02 Kasus Gagal Model](./XII-S6-P02_kasus-gagal-model.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nur 24:58 · QS Al-Hujurat 49:12

**Kait di kelas hari ini:** Consent sebelum `getUserMedia` — hormati privasi.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
