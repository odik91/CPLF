# XII-S6-P04 — MobileNet & Teachable Machine

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P04 |
| Unit | XII6.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T4 |

## Learning Transformation

Dari konsep transfer → **artefak** model siap pakai + sikap kritis.

---

## Timeline (90 menit)

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

## Cognitive Trap

**Asumsi:** Teachable Machine = “AI jadi” tanpa evaluasi.  
**Aman:** Wajibkan catatan kegagalan sebelum export.

---

## Fallback

- Offline: model demo guru + siswa dokumentasi evaluasi  
- Tanpa webcam: klasifikasi citra upload file  

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Alternatif: TensorFlow.js Hub / `@tensorflow-models/mobilenet` untuk prediksi ImageNet ringkas.
