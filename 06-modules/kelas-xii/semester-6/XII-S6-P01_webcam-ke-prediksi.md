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
