# Handout Siswa — XII-S6-P01
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XII-S6-P01_webcam-ke-prediksi.md](../../kelas-xii/semester-6/XII-S6-P01_webcam-ke-prediksi.md)
---
## 1. Tujuan pembelajaran
Dari “model di notebook terpisah” → **pipeline** webcam → tensor → output di browser.

---
## 2. Materi
_Ikuti penjelasan guru dan catatan di papan._

## 3. Yang sering salah dipikir (Cognitive Trap)
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
Catatan selama Experience · Clarify · Practice:

| Fase | Apa yang kulakukan | Apa yang kupelajari |
|------|-------------------|---------------------|
| Experience | | |
| Clarify | | |
| Practice | | |

## 7. Exit ticket
1. 4 langkah pipeline (kata sendiri)  
2. Satu risiko teknis (izin/laptop lemot)  

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
