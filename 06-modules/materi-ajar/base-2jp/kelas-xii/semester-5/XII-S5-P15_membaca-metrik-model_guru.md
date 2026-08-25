# Materi Guru Lengkap — XII-S5-P15

**Handout siswa (bagikan):** [XII-S5-P15_membaca-metrik-model_siswa.md](./XII-S5-P15_membaca-metrik-model_siswa.md)

**Modul:** [XII-S5-P15_membaca-metrik-model.md](../../../kelas-xii/semester-5/XII-S5-P15_membaca-metrik-model.md)

**Materi pendukung sumber:** [XII-S5-P15_membaca-metrik-model.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P15_membaca-metrik-model.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P15 — Membaca Metrik Model

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P15 |
| Unit | XII5.7 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-B2 |

## Learning Transformation

Dari angka di layar → **interpretasi** untuk pengguna non-teknis.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 95% akurasi — kapan menyesatkan? |
| 5–15 | Experience | **Hoaks “99% akurat”** di medsos |
| 15–30 | Concept | Precision/recall intuitif (opsional) · confusion sederhana |
| 30–50 | Practice | Tulis ulang metrik PRJ untuk wali kelas (bahasa awam) |
| 50–70 | Practice | 1 prediksi salah — analisis kenapa |
| 70–90 | Reflect | Kejujuran batasan = amanah |

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Nilai MA: tidak menyesatkan klaim AI.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P15 Membaca Metrik Model

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P15 |
| Modul pertemuan | [XII-S5-P15_membaca-metrik-model.md](../../../kelas-xii/semester-5/XII-S5-P15_membaca-metrik-model.md) |
| Semester | 5 · Pertemuan 15/18 |
| Unit | XII5.7 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-B2 |
| Formatif | REA, COM |
| PRJ | Siswa bawa metrik project S5 |
| Ada live code? | **Tidak wajib** — fokus interpretasi; opsional demo grafik loss |

---

## Pengetahuan Guru

Guru **tidak** perlu rumus precision/recall — cukup **terjemahkan angka** ke bahasa wali kelas / pengguna awam.

| Metrik | Intuitif untuk MA | Bahasa yang menyesatkan |
|--------|-------------------|-------------------------|
| **Loss** | "Skor kesalahan" — turun = belajar (biasanya) | "Loss kecil = pasti benar di dunia nyata" |
| **Accuracy** | "Berapa % tebakan benar di data yang dilatih" | "Akurasi 95% = model pintar" tanpa konteks N |
| **Overfit** | Hafal latihan, gagal di soal baru | "100% = hebat" |
| **Precision/recall** (opsional) | "Dari yang dibilang positif, berapa benar?" / "Dari yang seharusnya positif, ketemu berapa?" | Pakai istilah tanpa contoh MA |

**Substansi kunci:**

1. Angka di layar ≠ bukti aman di lapangan — **konteks data** wajib disebut.
2. Jurnal 5 kalimat: "Apa arti angka ini **untuk pengguna**?"
3. 1 prediksi salah dianalisis — kait ke dokumen batasan P14.
4. Kejujuran batasan = **amanah** (CXII-C1/C2 preview).
5. Pertemuan ini **memperkuat** P10 — bukan duplikat teori; fokus **project nyata**.

**Hubungan spiral:** P10 = konsep loss/overfit → P13 = angka muncul di project → P15 = **terjemahan** → P14/P18 = **komunikasi** ke audiens.

---

## Recall Spiral

Opening **5 menit** — tampilkan slide/card "Akurasi 95%".

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P10: loss turun tapi val loss naik — artinya? | Overfit — hafal latihan |
| P13/P14: akurasi project kalian? | Angka + jumlah data |
| P14: klaim terlarang — contoh? | "Selalu benar", "100%" |
| "99% akurat" di medsos — data apa yang disembunyikan? | Sampel kecil, cherry-pick, tanpa kasus gagal |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan kirim template jurnal siap isi — siswa tulis dari **metrik project sendiri** |
| **Live modeling** | Guru tulis ulang "Akurasi 87%" → paragraf untuk wali kelas **live di papan** |
| **Per baris / scope** | Setiap kalimat jurnal: "Siapa pembaca? Apa yang **tidak** boleh mereka pahami?" |
| **Recall** | Hoaks akurasi sebelum concept |
| **Membaca kode** | Baca log console `epoch X: loss=... acc=...` — interpretasi |
| **No overclaim** | Guru **tidak** bilang "metrik bagus = nilai A" — nilai = interpretasi jujur |

---

## Materi Inti

### Transformasi belajar

**Dari:** Angka di console / UI  
**Ke:** **Narasi terukur** yang aman untuk non-teknis + analisis 1 kegagalan.

### Experience — Hoaks "99% akurat"

Siapkan 2–3 contoh (screenshot blur — bukan promosi produk):

| Contoh | Pertanyaan ke siswa |
|--------|---------------------|
| Iklan app "99% deteksi" | 99% dari **berapa** kasus? Siapa yang tes? |
| Posting "AI nilai tugas sempurna" | Data training dari mana? Salah prediksi dampaknya? |
| Project teman "akurasi 100%" | Berapa baris data? Overfit? |

### Concept ringkas (30 menit max)

**Loss:** "Semakin kecil, model semakin cocok dengan data latih — belum tentu cocok di luar."

**Accuracy:** "Dari N contoh latih, benar X — sisanya salah atau ragu."

**Confusion sederhana (2×2 opsional):**

```text
                 Prediksi: A    Prediksi: B
Aktual: A           TP             FN
Aktual: B           FP             TN
```

Contoh MA: prediksi "lulus remedial" — salah prediksi = siswa stres atau terlewat bantuan.

**Precision/recall:** Hanya jika kelas siap — analogi: "Dari yang model bilang 'rajin', berapa benar?" / "Dari yang benar-benar rajin, ketemu berapa?"

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Kartu "95% akurat" — debat |
| 5–15 | Experience | Hoaks medsos — 2 contoh |
| 15–30 | Concept | Loss · accuracy · confusion mini |
| 30–50 | Practice | Tulis ulang metrik PRJ untuk wali kelas |
| 50–70 | Practice | Analisis 1 prediksi salah |
| 70–90 | Reflect | Kejujuran = amanah · update batasan |

### Template jurnal 5 kalimat (papan)

```text
1. Metrik utama project saya: ___ (loss/accuracy, nilai, N data)
2. Arti untuk pengguna awam: "Model benar sekitar ___ dari ___ kasus latih"
3. Yang TIDAK boleh disimpulkan: ___
4. Satu prediksi salah terjadi karena: ___
5. Langkah mitigasi pengguna: ___
```

### Paragraf wali kelas — contoh transformasi live

| Buruk | Baik |
|-------|------|
| "Model AI kami akurat 92%." | "Dari 50 contoh nilai semester lalu di sekolah kami, model menebak benar 46 kali. Masih bisa salah jika pola berbeda." |
| "Loss sudah kecil." | "Skor kesalahan turun saat latihan — artinya model belajar pola data kami, bukan jaminan di semester baru." |

---

## Alur Live Coding / Facilitator

### Persiapan

- [ ] Siswa bawa screenshot/console log metrik project
- [ ] Contoh log loss (guru) — 5 epoch naik/turun
- [ ] Worksheet kosong jurnal — **bukan** contoh terisi
- [ ] Baca: [MLCC Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss)

### Skrip fasilitator

```text
[LANGKAH 1 — Trap 0–5 menit]
Tampilkan: "Akurasi 95%" tanpa konteks
Ucapkan: "Kalau wali kelas baca ini — apa yang mereka pikir?"
Tanya: "95% dari apa? Data siapa? Kapan bisa salah?"

[LANGKAH 2 — Experience 5–15 menit]
2 contoh hoaks — blur merek
Ucapkan: "Penjual AI sering tunjuk angka — tidak tunjuk gagal."
Tanya: "Red flag apa sebelum percaya?"

[LANGKAH 3 — Concept 15–30 menit]
Gambar loss turun vs overfit (sketsa papan)
Ucapkan: "Loss = skor ujian latihan — bukan ujian nasional."
Tanya: "Accuracy 100% + 10 baris data — percaya?"
Scope: confusion 2×2 hanya jika waktu & kelas siap.

[LANGKAH 4 — Practice jurnal 30–50 menit]
Siswa buka metrik project — tulis 5 kalimat template
Keliling TTS: baca kalimat 3 — "Apa yang tidak boleh disimpulkan?"
Scope: revisi kalimat overclaim.

[LANGKAH 5 — Prediksi salah 50–70 menit]
Cari 1 input model salah — screenshot + analisis 3 kalimat
Ucapkan: "Analisis gagal = bagian terbaik jurnal."
Tanya: "Masuk ke dokumen batasan P14?"

[LANGKAH 6 — Reflect 70–90 menit]
Ucapkan: "Kejujuran metrik = amanah — tidak menaikkan angka demi pamer."
Exit: 1 kalimat mitigasi untuk pengguna.
```

---

## Latihan Membaca Kode

### Snippet A — Console log training

```text
Epoch 1 / 10 — loss: 0.82 — acc: 0.55
Epoch 5 / 10 — loss: 0.21 — acc: 0.91
Epoch 10 / 10 — loss: 0.02 — acc: 1.00
(data latih: 12 baris, 2 kelas)
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Tren loss? | Turun — model belajar data latih |
| acc 1.00 — waspada? | **Ya** — data sangat kecil, overfit likely |
| Kalimat aman untuk wali kelas? | "Belajar dari 12 contoh — masih eksperimental" |
| Klaim terlarang? | "Model sempurna / selalu benar" |

### Snippet B — UI metrik

```html
<div class="stats">
  <p>Akurasi: 94.7%</p>
  <p>Powered by TensorFlow.js</p>
</div>
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Info yang hilang? | N data, train vs test, kapan salah |
| Tambah 1 baris disclaimer | Contoh: "Hasil latih — verifikasi manual" |

---

## Praktik Mandiri

1. Jurnal 5 kalimat dari metrik project nyata.
2. Paragraf 80–120 kata "untuk wali kelas" — **tanpa** jargon (loss → "skor kesalahan" jika perlu).
3. Analisis 1 prediksi salah — 3 kalimat penyebab + 1 mitigasi.
4. Update `BATASAN-MODEL.md` bagian metrik kasar.
5. Tukar paragraf dengan teman — tandai 1 overclaim.

**Variasi kelas lambat:** fokus kalimat 1–3 jurnal + 1 prediksi salah.

**Variasi kelas cepat:** hitung confusion 2×2 manual dari 10 prediksi; bandingkan accuracy vs precision.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Copy angka tanpa konteks N | Tanya: "50 dari berapa?" |
| "Accuracy tinggi = selesai" | Redirect ke P14 batasan |
| Jurnal penuh jargon | Model live paraphrase ke bahasa awam |
| Tidak punya prediksi salah | Bantu cari edge case — jangan biarkan kosong |
| Precision/recall hafal definisi tanpa contoh | Wajibkan contoh MA konkret |
| Guru puji angka tertinggi | Puji interpretasi paling jujur |

---

## Referensi Guru

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | Loss & training (intuitif) | → [MLCC — Training and Loss](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss) |
| 2 | Accuracy & threshold | → [MLCC — Classification](https://developers.google.com/machine-learning/crash-course/classification/video-lecture) |
| 3 | Overfitting | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| 4 | Precision & recall (opsional) | → [MLCC — Precision and Recall](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall) |
| 5 | Confusion matrix | → [MLCC — Confusion Matrix](https://developers.google.com/machine-learning/crash-course/classification/confusion-matrix) |
| 6 | StatQuest — accuracy vs precision | → [StatQuest — Sensitivity and Specificity](https://www.youtube.com/watch?v=vP06aK5F8mM) |
| 7 | TF.js metrics di compile | → [tf.LayersModel.compile](https://js.tensorflow.org/api/latest/#tf.LayersModel.compile) |
| 8 | Rubrik etika E1 | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |

---

## Rujukan

- Modul: [XII-S5-P15](../../../kelas-xii/semester-5/XII-S5-P15_membaca-metrik-model.md)
- Prasyarat: [P10 Loss](./XII-S5-P10_loss-epoch-overfitting.md) · [P13 Build 2](./XII-S5-P13_project-s5-build-2.md)
- Project: [P14 Batasan](./XII-S5-P14_project-s5-demo-batasan.md)
- Panduan: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)
- Rubrik: [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Checklist Exit

- [ ] Hoaks "99% akurat" dibahas — siswa sebut red flag
- [ ] Jurnal 5 kalimat per siswa — dari metrik **project sendiri**
- [ ] Paragraf wali kelas — tanpa overclaim
- [ ] 1 prediksi salah dianalisis
- [ ] Update batasan model (metrik kasar)
- [ ] Guru model live paraphrase — bukan slide statis angka
- [ ] Exit: 1 kalimat mitigasi pengguna

[← Indeks materi S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Kickoff project — janji tim & proses jujur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
