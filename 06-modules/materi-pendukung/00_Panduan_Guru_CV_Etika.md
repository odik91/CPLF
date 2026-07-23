# Panduan Guru — CV, Transfer Learning & Etika (Kelas XII S6)

**Version:** 0.1 (Draft)  
**Audiens:** Guru MA — lanjutan [00_Panduan_Guru_ML_TFJS.md](./00_Panduan_Guru_ML_TFJS.md) (S5).

## Filosofi S6

> Semester 6 = **nilai nyata + etika wajib**, bukan demo AI paling canggih.  
> Transfer learning & Teachable Machine = **jalan praktis MA** — train from scratch CV besar **tidak** wajib.

---

## Peta 18 pertemuan

| P | Unit | Guru harus paham |
|---|------|------------------|
| P01–P02 | XII6.1 | Pipeline webcam → tensor → prediksi · demo gagal |
| P03–P04 | XII6.2 | Transfer learning · Teachable Machine / MobileNet |
| P05 | XII6.3 | AI sebagai fitur UX (fallback non-AI) |
| P06–P07 | XII6.4–5 | Etika · privasi · AI partner |
| P08–P14 | XII6.6 | Capstone tim + rubrik etika |
| P15 | XII6.7 | Bonus agent (opsional) |
| P16–P18 | XII6.8 | Portofolio 3 tahun · showcase · lulusan |

---

## Referensi inti (bookmark)

### Computer vision & webcam (TF.js)

| Topik | Referensi |
|-------|-----------|
| `getUserMedia` (izin kamera) | → [MDN — MediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
| `tf.browser.fromPixels` | → [TF.js — Browser fromPixels](https://js.tensorflow.org/api/latest/#browser.fromPixels) |
| Webcam classification tutorial | → [TF.js — Webcam classifier (transfer learning)](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| Pretrained models (MobileNet dll.) | → [TF.js Models](https://www.tensorflow.org/js/models) |
| `@tensorflow-models/mobilenet` | → [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| Memory / dispose setelah frame | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |

### Teachable Machine (disarankan MA)

| Topik | Referensi |
|-------|-----------|
| Beranda | → [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| Image project | → [Train image model](https://teachablemachine.withgoogle.com/train/image) |
| Export TensorFlow.js | → [TM — Export formats](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| FAQ / tips sample | → [Teachable Machine FAQ](https://support.google.com/teachablemachine/) |

### Transfer learning (konsep guru)

| Topik | Referensi |
|-------|-----------|
| MLCC — intro NN | → [MLCC — Intro to NN](https://developers.google.com/machine-learning/crash-course/neural-networks/neural-networks) |
| StatQuest — NN | → [StatQuest — Neural Networks](https://www.youtube.com/watch?v=aircAruvnKk) |
| Fine-tuning (intuitif) | → [Google ML — Transfer Learning (blog)](https://developers.google.com/machine-learning/glossary#transfer_learning) |

### Etika & literasi AI

| Topik | Referensi |
|-------|-----------|
| Rubrik internal CPLF | → [09_Rubrik_Etika_AI.md](../../09-rubrik/09_Rubrik_Etika_AI.md) |
| Google Responsible AI | → [Google AI Responsibility](https://ai.google/responsibility/responsible-ai-practices/) |
| UNESCO AI ethics (ringkas) | → [UNESCO AI Ethics](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics) |
| Privasi kamera sekolah | → diskusi lokal MA + [MDN Permissions Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy) |

### Bonus agent (P15 opsional)

| Topik | Referensi |
|-------|-----------|
| Function calling konsep | → [OpenAI — Function calling](https://platform.openai.com/docs/guides/function-calling) *(jika sekolah pakai API)* |
| **Catatan:** API key **tidak** di frontend — proxy/backend sekolah |

---

## Pipeline CV (minimal guru)

```text
Webcam/video → canvas/frame → tf.browser.fromPixels(video)
→ (optional) resize/normalize → model.predict(tensor)
→ label + confidence → UI (loading · error · fallback)
→ DOKUMEN BATASAN + demo gagal
```

**Referensi:** → [TF.js transfer learning webcam](https://www.tensorflow.org/js/tutorials/transfer/learn_more)

---

## Checklist sebelum capstone (P08)

- [ ] P06 etika sudah — template etika terisi  
- [ ] Siswa paham QR vs wajah (privasi MA)  
- [ ] Model TM/TF.js sudah pernah di-load di HTML (P04)  
- [ ] Rubrik etika & project dibaca guru  

---

## Penyesuaian jam sempit (silabus XII)

Prioritas: **P03–P04 · P06 · P08–P14** (transfer + etika + capstone).  
P15 bonus boleh skip. Training from scratch CV skip.

---

## Format sitasi di materi S6

```text
[Konsep] → referensi: [Judul](URL)
```

[← Panduan ML S5](./00_Panduan_Guru_ML_TFJS.md) · [Indeks S6](./kelas-xii/semester-6/XII-S6_Materi_Index.md)
