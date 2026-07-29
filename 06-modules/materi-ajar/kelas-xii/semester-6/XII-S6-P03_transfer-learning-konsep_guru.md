# Materi Guru Lengkap — XII-S6-P03

**Handout siswa (bagikan):** [XII-S6-P03_transfer-learning-konsep_siswa.md](./XII-S6-P03_transfer-learning-konsep_siswa.md)

**Modul:** [XII-S6-P03_transfer-learning-konsep.md](../../../kelas-xii/semester-6/XII-S6-P03_transfer-learning-konsep.md)

**Materi pendukung sumber:** [XII-S6-P03_transfer-learning-konsep.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P03_transfer-learning-konsep.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P03 — Transfer Learning (Konsep)

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P03 |
| Unit | XII6.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T4, CXII-B1 |
| MM | MM-22 |

## Learning Transformation

Dari “train dari nol wajib” → **memanfaatkan** model yang sudah belajar fitur umum.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall S5 overfitting — butuh data besar untuk from scratch |
| 5–18 | Experience | **Belajar bahasa**: kosakata dasar vs kalimat MA — metafora layer |
| 18–28 | Trap | “Harus train berhari-hari di laptop sekolah” |
| 28–38 | Clarify | Feature extractor vs head baru |
| 38–48 | Concept | Transfer learning · fine-tune ringkas · cuplikan MobileNet |
| 48–65 | Practice | Tabel banding: train from scratch vs transfer (waktu/data/risiko) |
| 65–80 | Reflect | Kapan transfer **tidak** cocok? |
| 80–90 | Transfer | Preview P04 hands-on |

---

## Cognitive Trap

**Asumsi:** Model pretrained = black box gratis tanpa kritik.  
**Aman:** Tanya: pretrained dari data apa? bias apa?

---

## Practice Output

1 halaman: pro/kontra transfer untuk 1 masalah MA (absensi, sampah, tanaman).

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Prioritas silabus jam sempit: unit ini **wajib** tetap.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P03 Transfer Learning (Konsep)


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P03 |
| Modul pertemuan | [XII-S6-P03_transfer-learning-konsep.md](../../../kelas-xii/semester-6/XII-S6-P03_transfer-learning-konsep.md) |
| Semester | 6 · Pertemuan 3/18 |
| Unit | XII6.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T4, CXII-B1 |
| MM | MM-22 |
| Formatif | REA, COM |
| Prasyarat | [P02 Kasus Gagal](./XII-S6-P02_kasus-gagal-model.md) |
| Panduan CV | [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| Ada live code? | **Tidak wajib** — konsep + tabel; preview hands-on P04 |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | **Wajib** — Transfer learning (glossary) | → referensi: [Google ML Glossary — Transfer learning](https://developers.google.com/machine-learning/glossary#transfer_learning) |
| 2 | **Wajib** — MLCC intro neural networks | → referensi: [MLCC — Intro to Neural Networks](https://developers.google.com/machine-learning/crash-course/neural-networks/neural-networks) |
| 3 | TF.js transfer learning tutorial | → referensi: [TF.js — Transfer learning webcam](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 4 | Pretrained models (MobileNet) | → referensi: [TF.js Models](https://www.tensorflow.org/js/models) |
| 5 | `@tensorflow-models/mobilenet` | → referensi: [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| 6 | StatQuest — Neural Networks (video) | → referensi: [StatQuest — Neural Networks](https://www.youtube.com/watch?v=aircAruvnKk) |
| 7 | Overfitting recall S5 | → referensi: [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/generalization/overfitting) |
| 8 | Google ML — fine-tuning blog ringkas | → referensi: [Google Developers Blog — Transfer Learning](https://developers.google.com/machine-learning/crash-course) |
| 9 | Panduan CV CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Waktu baca minimum:** 60–90 menit (glossary transfer + MLCC NN + skim MobileNet README).

---

## Pengetahuan yang Dikuasai Guru

### Mengapa transfer learning wajib untuk MA (bukan train from scratch)

Train CNN ImageNet from scratch = **jutaan foto + GPU berhari-hari** — **tidak realistis** di lab MA. Transfer learning = **memanfaatkan** model yang sudah belajar fitur umum (tepi, tekstur, bentuk), lalu **head baru** untuk kelas MA (hijab/buku/botol).

**Transformasi belajar:** Dari "harus train dari nol" → **feature extractor + classifier baru** + sikap kritis: pretrained dari data apa?

### Metafora "belajar bahasa" (modul menit 5–18)

| Tahap | Metafora | Setara ML |
|-------|----------|-----------|
| Kosakata dasar | Huruf, suku kata | Layer awal deteksi tepi/warna |
| Kalimat MA | Konteks sekolah | Head baru — kelas lokal |
| From scratch | Belajar baca dari nol tanpa guru | Train seluruh jaringan |
| Transfer | Sudah bisa baca — belajar mata pelajaran baru | Freeze backbone + train head |

Guru gambar **live** — jangan slide siap pakai.

### Feature extractor vs head baru

```text
INPUT citra
    ↓
[MobileNet backbone — pretrained ImageNet]  ← "sudah tahu fitur umum"
    ↓
[Dense / head baru — 2–3 kelas MA]           ← "yang kita train di TM"
    ↓
OUTPUT label + confidence
```

**Fine-tuning ringkas:** kadang beberapa layer akhir backbone ikut di-update — MA cukup **intuisi**; hands-on TM di P04 yang melakukan.

### Tabel banding (practice inti)

| Aspek | Train from scratch | Transfer learning |
|-------|-------------------|-------------------|
| Data | Sangat banyak | Lebih sedikit (puluhan–ratusan foto/kelas) |
| Waktu | Hari–minggu (GPU) | Menit–jam (TM di browser) |
| Hardware lab MA | Tidak cukup | **Realistis** |
| Risiko overfitting | Tinggi jika data sedikit | Lebih rendah — backbone sudah stabil |
| Risiko bias | Dari dataset sendiri | **Juga** dari dataset pretrained + sample MA |
| Kapan tidak cocok | Domain sangat beda (X-ray medis?) | Perlu expert + data khusus |

### Cognitive trap — pretrained bukan "black box gratis"

**Tanya siswa:** "MobileNet belajar dari foto apa?" → ImageNet (objek umum, bias geografis/demografi). **Sample MA 20 foto hijab** tidak menghapus bias global — dokumentasi batasan (P02, P06).

### Kapan transfer **tidak** cocok (reflect menit 65–80)

- Domain sangat berbeda (cit medis tanpa dokter pendamping).
- Butuh interpretability penuh untuk keputusan hukum/ibadah — pertimbangkan rule-based.
- Data sangat sedikit **dan** kelas sangat mirip — tetap gagal; perbaiki data bukan epoch.

### Pro/kontra untuk 1 masalah MA (practice output)

Contoh guru — **jangan** distribusi jawaban siap:

| Masalah MA | Pro transfer | Kontra / mitigasi |
|------------|--------------|-------------------|
| Absensi sampah terpilah | Deteksi botol/kertas cepat | Pencahayaan lab — fallback manual |
| Tanaman kebun sekolah | 3 spesies daun | Musim hujan — sample basah |
| Absensi wajah | — | **Privasi** — QR lebih aman (P06) |

---

## Recall Spiral

Chain dari **P02**.

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P02 — kenapa demo gagal dengan sample sedikit?" | Data/pencahayaan/out-of-distribution |
| "S5 overfitting — artinya?" | Model hafal training, lemah di data baru |
| "Train from scratch butuh data?" | Banyak — spiral P02–P03 |
| "Confidence rendah — UI apa?" | "Tidak yakin" + human-in-the-loop |

Bridge: "Transfer = strategi **data tidak cukup** untuk from scratch."

---

## Etika Penyampaian

| Aturan | Penerapan P03 |
|--------|---------------|
| **No black box hype** | Pretrained ≠ sempurna — tanya data asal |
| **Live modeling** | Gambar backbone+head di papan — bukan diagram Canva siap |
| **No copas tabel** | Siswa **isi sendiri** pro/kontra masalah MA pilihan mereka |
| **Jam sempit** | Unit **wajib** tetap (modul) — jangan skip ke P08 |
| **Belum distribusi model TM** | P03 konsep saja — artefak P04 |

---

## Materi Inti

### Alur konseptual

```text
Recall overfitting S5
  → Experience: metafora bahasa
  → Trap: train berhari-hari di laptop sekolah
  → Clarify: feature extractor vs head
  → Concept: transfer · MobileNet cuplikan
  → Practice: tabel from scratch vs transfer
  → Reflect: kapan transfer tidak cocok?
  → Transfer: preview P04 Teachable Machine
```

### Concept MobileNet (cuplikan — tidak derive arsitektur)

MobileNet = model **ringan** untuk browser/mobile — depthwise separable conv (guru: "dirancang cepat di HP"). MA **pakai** via TM/TF.js Hub — tidak wajib hafal layer.

→ referensi: [TF.js Models — MobileNet](https://www.tensorflow.org/js/models)

→ referensi: [tfjs-models mobilenet GitHub](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

### Trap (menit 18–28)

**Asumsi:** "Harus train berhari-hari di laptop sekolah."

**Counter:** Tabel waktu — TM 50 foto/kelas ≈ menit vs from scratch ImageNet ≈ tidak mungkin di lab.

---

## Alur Live Modeling TTS

Pertemuan **non-kode dominan** — skrip papan + diskusi.

```text
[LANGKAH 1 — Opening recall 0–5 menit]
Tanya overfitting P10 S5 — 1 contoh kelas.
Scope: 5 menit oral

[LANGKAH 2 — Metafora bahasa 5–18 menit]
Gambar 2 kolom: "Belajar baca" vs "Belajar materi MA"
TTS: Tebak analogi layer → siswa mapping ke backbone/head
Scope: 13 menit — 2 siswa contoh sendiri

[LANGKAH 3 — Trap laptop sekolah 18–28 menit]
Tulis angka waktu di papan (order of magnitude — jujur "perkiraan")
Debat: "Apakah lab MA train ImageNet from scratch?"

[LANGKAH 4 — Diagram backbone+head 28–38 menit]
Gambar live kotak MobileNet → head 3 kelas
TTS per kotak: Tebak fungsi → Tanya data → Spelling istilah
→ referensi: TF.js transfer tutorial

[LANGKAH 5 — Tabel banding 48–65 menit]
Kelompok isi tabel 5 baris (data/waktu/risiko)
Walkthrough 1 masalah MA per kelompok

[LANGKAH 6 — Reflect kapan tidak cocok 65–80 menit]
Studi kasus: absensi wajah vs QR — transfer teknis bisa, etika P06
Scope: guru facilitasi, bukan sermon

[LANGKAH 7 — Preview P04 80–90 menit]
Buka tab Teachable Machine — **preview 2 menit**, train penuh P04
Ucapkan: "Besok artefak nyata — hari ini peta konsep."
```

---

## Latihan Membaca Kode / Diagram

### Diagram A — Label komponen

```text
[ Input 224×224×3 ]
        ↓
[ Block pretrained — "feature extractor" ]
        ↓
[ Dense 3 units softmax ]
        ↓
[ Label: hijab | buku | botol ]
```

| Pertanyaan | Kunci |
|------------|-------|
| Bagian mana yang "sudah jadi" dari ImageNet? | Block pretrained |
| Bagian mana yang disesuaikan sample MA? | Dense head |
| Output softmax — interpretasi? | Probabilitas per kelas — bukan kebenaran |

### Skenario B — Pilih strategi

```text
Tim ingin klasifikasi 3 jenis sampah di kantin MA.
Dataset: 80 foto total, laptop Chromebook lab.
```

| Pertanyaan | Kunci |
|------------|-------|
| From scratch atau transfer? | **Transfer** (TM/MobileNet) |
| Risiko utama? | Pencahayaan kantin + sample tidak representatif |

---

## Praktik Mandiri Siswa

- **Deliverable:** 1 halaman pro/kontra transfer untuk **1 masalah MA** (absensi/sampah/tanaman — pilihan siswa).
- **Minimal:** 3 pro, 3 kontra, 1 mitigasi etis.
- **Exit:** 1 kalimat — "Transfer learning cocok/tidak untuk masalah saya karena …"
- **Belum wajib:** export model — P04.

---

## Kesalahan Umum

| Siswa / guru | Respons |
|--------------|---------|
| "Pretrained = pasti akurat" | Trap P02 — demo gagal tetap mungkin |
| "Transfer = tidak perlu data" | Tetap butuh sample berkualitas — P04 |
| Skip kritik bias pretrained | Tanya: "ImageNet dari foto siapa?" |
| Lecture 40 menit tanpa metafora | Experience bahasa < 18 menit = rugi |
| Langsung TM tanpa konsep | P04 overwhelming — P03 wajib dulu |

---

## Checklist Exit Guru

- [ ] Glossary transfer learning + MLCC NN dibaca
- [ ] Diagram backbone+head digambar live
- [ ] Recall P02 + S5 overfitting terpasang
- [ ] Tabel banding terkumpul per siswa/kelompok
- [ ] Reflect "kapan tidak cocok" — minimal absensi wajah vs QR disebut
- [ ] Preview P04 TM — **tanpa** distribusi model jadi ke siswa
- [ ] Unit wajib meski jam sempit

---

## Rujukan modul

- Modul: [XII-S6-P03](../../../kelas-xii/semester-6/XII-S6-P03_transfer-learning-konsep.md)
- Sebelumnya: [P02](./XII-S6-P02_kasus-gagal-model.md)
- Lanjutan: [P04 MobileNet & TM](./XII-S6-P04_mobilenet-teachable.md)
- Panduan: [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Allah · Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS An-Nisa 4:58

**Kait di kelas hari ini:** AI/CV moderat, jujur, dan manfaat komunitas MA.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
