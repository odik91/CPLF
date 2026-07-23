# Materi Pendukung Guru — XII-S5-P11 Project S5 Kickoff

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P11 |
| Modul pertemuan | [XII-S5-P11_project-s5-kickoff.md](../../../kelas-xii/semester-5/XII-S5-P11_project-s5-kickoff.md) |
| Unit | XII5.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md) · [PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md) |
| Capability | COM, REA |
| Formatif | COM, REA |
| Ada live code? | **Facilitator — skeleton generic OK, bukan project jadi** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — End-to-end TF.js | → [Train a simple model](https://www.tensorflow.org/js/tutorials/training/train_simple_classifier) |
| 2 | **Wajib** — Models guide | → [Models guide](https://www.tensorflow.org/js/guide/models) |
| 3 | **Wajib** — TF.js API | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 4 | MLCC — problem framing | → [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) |
| 5 | Overfitting & batasan | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| 6 | StatQuest — ML fundamentals | → [StatQuest YouTube](https://www.youtube.com/c/joshstarmer) |
| 7 | CDN setup | → [TF.js setup](https://www.tensorflow.org/js/tutorials/setup) |
| 8 | Chart.js (loss opsional P13+) | → [Chart.js](https://www.chartjs.org/docs/latest/) |
| 9 | Project bank index | → [08_Project_Bank_Index — XII S5](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-5-data--tfjs-dasar) |
| 10 | Panduan ML CPLF | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

**Baca PRJ-01 dan PRJ-02 penuh** — paham DoD & varian A/B/C, bukan solusi kode.

---

## Pengetahuan Guru

### Transformasi kickoff

**Dari:** Latihan tensor/model terisolasi (P07–P10)  
**Ke:** **Produk web** = data + model TF.js kecil + **dokumen batasan model** tertulis.

### Dua opsi PRJ S5

| PRJ | Inti | Capability emphasis |
|-----|------|---------------------|
| **[PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md)** — Klasifikasi Tabular Mini | Dataset ≥2 kelas → dense TF.js → prediksi + batasan | CXII-T1, T2, B2 |
| **[PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md)** — Prediksi Kategori | Rule-based **vs** model mini — banding + pilih + demo | CXII-T2, B1 |

**Rotasi varian** antar kelas paralel (A/B/C di file PRJ) — cegah copy antar kelas.

### DoD ringkas (guru hafalkan — siswa baca PRJ)

**PRJ-01:**

- Pipeline end-to-end (data → tensor → train → predict)
- Model dense **sangat kecil** — train browser
- Loss/akurasi sederhana + 3 prediksi uji
- **Batasan model** tertulis — apa yang **tidak** boleh diklaim

**PRJ-02:**

- Dua pendekatan: rule-based + model (atau transfer sederhana)
- Tabel banding kelebihan/kekurangan
- Pilih satu untuk demo produk + alasan tertulis

### Template Batasan Model (wajib PRJ-01 & relevan PRJ-02)

Siswa isi 1 halaman — **bukan** opsional:

```text
1. Data: sumber, jumlah baris, kelas, fitur
2. Model: arsitektur (layer, units), epochs dipakai
3. Metrik: akurasi train vs test (angka jujur)
4. Yang TIDAK bisa model ini:
   - Tidak untuk data di luar domain (contoh: ...)
   - Tidak klaim medikal/hukum/...
   - Tidak akurat jika input ...
5. Overfit: tanda yang mungkin terjadi pada project saya
6. Keputusan etis: siapa terdampak jika prediksi salah?
```

Guru **modelkan 1 baris** live di papan — siswa lengkapi sendiri.

### Batasan model template (arsitektur)

| Parameter | Batas MA S5 |
|-----------|-------------|
| Layer dense | 1–2 hidden max |
| Units | 4–16 per layer |
| Epochs train demo | 10–20 (eksperimen overfit boleh lebih di P10 style — dokumentasikan) |
| Data | ≥40 baris, ≥2 kelas, buatan/fiktif OK |
| Framework | TF.js browser — **bukan** copy notebook Python |

### Acceptance criteria — contoh measurable

**PRJ-01:**

- [ ] Dataset terdokumentasi README (sumber, kolom, kelas)
- [ ] Pra-proses dijelaskan (normalisasi/encoding)
- [ ] Model compile + fit jalan — log loss terlihat
- [ ] UI/input: user bisa uji ≥1 prediksi
- [ ] Dokumen batasan ≥5 poin jujur

**PRJ-02:**

- [ ] Rule-based jalan untuk ≥5 contoh
- [ ] Model mini jalan OR justified skip dengan alasan
- [ ] Tabel banding ≥3 baris (kriteria, rule, model)
- [ ] Keputusan produk + alasan 1 paragraf

### Milestone P12 (exit hari ini)

- Dataset final / rencana data
- Spec + acceptance 3+ checkbox
- Skeleton HTML + CDN TF.js (file kosong/script placeholder)
- **Bukan** model trained penuh — itu P13

### Kickoff ≠ build penuh

90 menit = **perencanaan + data lock + skeleton** — guru facilitator, bukan coding solusi.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P09 — pipeline singkat?" | Data → normalisasi → tensor → dense → fit → predict |
| "P10 — tanda overfit?" | Train bagus, test jeblok / val_loss naik |
| "P03 — dataset bersih?" | README, ≥40 baris, 2 kelas |
| "Kenapa batasan model wajib?" | Jujur capability — anti overclaim AI |

---

## Etika Penyampaian

| Aturan | Penerapan kickoff |
|--------|-------------------|
| **Guru facilitator** | ≤15 menit front — siswa spec & skeleton |
| **No project jadi** | Dilarang demo app PRJ trained lengkap di proyektor |
| **No starter repo** | Tidak ZIP template dengan model trained |
| **Skeleton generic OK** | Papan: `// 1. load data // 2. preprocess // 3. model // 4. predict` |
| **Clarifying questions** | "Fitur apa model lihat?" "Siapa user?" "Gagal aman gimana?" |
| **Rotasi varian** | Koordinasi kelas paralel — beda varian A/B/C |
| **AI siswa** | Protokol klarifikasi — jelaskan baris yang dipakai |

### Bank pertanyaan (ganti memberi kode)

| Siswa | Guru tanya |
|-------|------------|
| "Template model pak/bu?" | "PRJ-01 or 02? Berapa fitur? Loss apa?" |
| "Dataset dari internet?" | "README lengkap? Izin? Bersih P03?" |
| "Akurasi harus berapa?" | "DoD PRJ — bukan angka magis; jujur test acc" |
| "Copy P09?" | "PRJ scope lebih luas — UI? batasan? acceptance?" |

---

## Materi Inti

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–10 | Opening | Present 2 PRJ — **tanpa demo app jadi** |
| 10–25 | Rubrik + batasan | DoD + template batasan model |
| 25–40 | Pilih PRJ + spec | Keliling — clarifying only |
| 40–55 | Feedback spec | 1 putaran approve/potong scope |
| 55–75 | Data + skeleton | Dataset lock; HTML+CDN placeholder |
| 75–90 | Exit | Milestone P12 checklist |

### Spec 5 poin (siswa tulis)

1. Masalah & user
2. Input (fitur/data)
3. Output (prediksi/kategori)
4. Pendekatan (PRJ-01 dense / PRJ-02 rule vs model)
5. Batasan awal (scope out)

### Skeleton yang **boleh** di papan

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script>
  // TODO: load dataset (JSON/CSV)
  // TODO: preprocess → xs, ys
  // TODO: build sequential model — dense kecil
  // TODO: compile + fit (epochs 10-20)
  // TODO: predict + tampilkan UI
</script>
```

### Skeleton **dilarang** bagikan

- Repo "PRJ-S5-nilai-100"
- `model.json` trained siap pakai
- Notebook 200 baris copas tutorial iris

→ referensi: [Models guide](https://www.tensorflow.org/js/guide/models) — siswa baca sendiri di rumah, tidak dicopas massal

---

## Alur Live Coding / Live Modeling

```text
[LANGKAH 1 — Opening 0–10 menit]
Tampilkan slide/papan: PRJ-01 vs PRJ-02 — masalah & DoD headline.
TANPA demo web trained.
Tanya: "Mana yang butuh banding rule vs ML?"
Recall P10 — "Project wajib jujur overfit."

[LANGKAH 2 — DoD + Batasan 10–25 menit]
Live isi 1 baris template batasan:
  "Model tidak bisa prediksi di luar data latih sekolah X."
TTS: "Batasan = amanah — sama seperti validasi web S2."
→ referensi: MLCC Overfitting

[LANGKAH 3 — Pilih PRJ 25–40 menit]
Siswa commit pilihan + varian A/B/C.
Tulis spec 5 poin — guru keliling Q&A.

[LANGKAH 4 — Acceptance 40–55 menit]
Min 3 checkbox measurable per PRJ.
Guru feedback: "AC ini bisa centang ya/tidak?"
Potong scope jika terlalu besar (CNN, 1000 baris, dll).

[LANGKAH 5 — Data final 55–65 menit]
Lock dataset — reuse P03 atau buat baru sesuai varian.
README 5 bullet — spiral P03.

[LANGKAH 6 — Skeleton 65–75 menit]
Buat folder project — index.html + data.json + README.
CDN TF.js — comment TODO saja — tidak fit live kickoff.

[LANGKAH 7 — Exit 75–90 menit]
Checklist milestone P12 di papan.
Blocker round — catat untuk P12 build.
```

---

## Latihan Membaca Kode

> Kickoff — latihan **membaca spec & batasan**, bukan kode panjang.

### Snippet A — Spec vague

```text
Project: Klasifikasi AI super akurat untuk semua siswa Indonesia.
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | Scope impossible; tidak measurable |
| Perbaiki 1 baris | "Klasifikasi lulus/tidak dari 4 fitur skor fiktif 50 baris kelas XII" |

### Snippet B — Acceptance lemah

```text
[ ] Model bagus
[ ] Akurasi tinggi
[ ] UI keren
```

| Pertanyaan | Kunci |
|------------|-------|
| AC subjektif? | Semua — tidak bisa centang konsisten |
| Contoh AC kuat | "[ ] Log loss muncul di console setelah fit 15 epoch" |

### Snippet C — Batasan kosong

```text
Batasan Model: (kosong)
```

| Pertanyaan | Kunci |
|------------|-------|
| Lulus DoD PRJ-01? | **Tidak** — wajib isi |
| Minimal 1 poin | "Hanya untuk data fiktif MA — bukan keputusan resmi" |

---

## Praktik Mandiri

Siswa **wajib deliverable kickoff**:

1. Pilih PRJ-01 atau PRJ-02 + varian.
2. Spec 5 poin + acceptance ≥3 checkbox.
3. Template batasan model — min 3 poin terisi (lengkap 6 poin sebelum P14).
4. Dataset file + README.
5. Skeleton HTML + CDN TF.js + comment pipeline.

**Guru:** approve spec sebelum P12 — 1 sticky note feedback per siswa/kelompok.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Scope CNN / transfer besar | Potong ke dense tabular |
| Dataset tanpa README | Spiral P03 — tolak train P13 |
| Klaim "100% akurat" di spec | Redirect ke batasan jujur |
| Guru demo project jadi | Hapus — facilitator only |
| Semua kelas PRJ sama persis | Rotasi varian |
| Skip batasan model | DoD gagal — ingatkan P14 |

---

## Rujukan

- Modul: [XII-S5-P11](../../../kelas-xii/semester-5/XII-S5-P11_project-s5-kickoff.md)
- [PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md) · [PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md)
- Lanjutan: [P12 Build 1](./XII-S5-P12_project-s5-build-1.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] PRJ dipilih + varian tercatat
- [ ] Spec + ≥3 acceptance — guru approve/potong
- [ ] Dataset lock + README
- [ ] Skeleton HTML/CDN — bukan model trained
- [ ] Template batasan model dimulai (≥3 poin)
- [ ] Milestone P12 jelas di papan
- [ ] Tidak ada distribusi solusi project

[← Indeks materi XII-S5](./XII-S5_Materi_Index.md)
