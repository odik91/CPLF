# Handout Siswa — XII-S6-P01

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P01_webcam-ke-prediksi.md](../../../kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)

---

## 1. Tujuan pembelajaran

Dari “model di notebook terpisah” → **pipeline** webcam → tensor → output di browser.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Webcam langsung “mengerti” tanpa pipeline.  
**Aman:** Puji rasa ajaib; uraikan langkah.

---

## 5. Alur pertemuan (90 menit)

|-------|------|-----------|
| 0–5 | Opening | Recall S5: tensor · predict — sekarang dari **kamera** |
| 5–18 | Experience | Demo filter IG vs deteksi objek — beda proses? |
| 18–28 | Trap + Q | Trap: “kamera = AI otomatis pintar” |
| 28–38 | Clarify | Frame → preprocess → model → label |
| 38–48 | Concept | `getUserMedia` · canvas · `tf.browser.fromPixels` |
| 48–70 | Practice | Halaman minimal: webcam → tensor shape log → tampil di UI |
| 70–80 | Reflect | Latensi & resolusi — apa dampaknya? |
| 80–90 | Transfer | Preview: model salah (P02) |

**Adaptasi 1 JP:** Demo guru 15’ · Practice 20’ · Exit 10’.

---

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. 4 langkah pipeline (kata sendiri)  
2. Satu risiko teknis (izin/laptop lemot)  

---

## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nur 24:58 · QS Al-Hujurat 49:12

**Kait di kelas hari ini:** Consent sebelum `getUserMedia` — hormati privasi.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
