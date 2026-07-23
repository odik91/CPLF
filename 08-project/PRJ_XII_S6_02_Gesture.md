# PRJ-XII-S6-02 — Deteksi Gesture / Bahasa Isyarat Mini

**Jenis:** Nilai · **Mode:** Pasangan / tim · **Durasi:** 6–8 pertemuan  
**Capability:** CXII-T3, CXII-T4, CXII-B2 · **CP:** AD, AP · **MM:** MM-18, MM-22

## Masalah

Komunikasi cepat di kelas/kegiatan (isyarat sederhana) atau aksesibilitas ringan — butuh deteksi gesture, bukan chatbot.

## Learning Transformation

Dari “model selalu benar” → “pipeline kamera→prediksi + akui gagal & bias sudut/cahaya.”

## Requirement

- [ ] Pipeline webcam → prediksi (TF.js / Teachable Machine)
- [ ] Minimal 3 kelas gesture
- [ ] UI menampilkan label + confidence
- [ ] Uji di 2 kondisi cahaya / jarak — catat penurunan akurasi
- [ ] Batasan tertulis (bukan pengganti bahasa isyarat formal / interpreter)

## Varian Rotasi

| Varian | Kasus |
|--------|--------|
| A | Gesture panitia (mulai / berhenti / teknis) |
| B | Isyarat angka 1–3 untuk kuis |
| C | Deteksi “tangan diangkat” untuk giliran bicara |

## Definition of Done

- [ ] Demo live + laporan kegagalan jujur
- [ ] Tidak overclaim aksesibilitas profesional
