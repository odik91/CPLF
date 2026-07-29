# Materi Guru Lengkap — XII-S6-P02

**Handout siswa (bagikan):** [XII-S6-P02_kasus-gagal-model_siswa.md](./XII-S6-P02_kasus-gagal-model_siswa.md)

**Modul:** [XII-S6-P02_kasus-gagal-model.md](../../../kelas-xii/semester-6/XII-S6-P02_kasus-gagal-model.md)

**Materi pendukung sumber:** [XII-S6-P02_kasus-gagal-model.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P02_kasus-gagal-model.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P02 — Kasus Gagal Model

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P02 |
| Unit | XII6.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-B2, CXII-C1 |

## Learning Transformation

Dari “demo sukses saja” → **kejujuran** — model gagal adalah data desain.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 3 prediksi salah (sengaja) — tebak mengapa |
| 5–18 | Experience | **Filter wajah salah warna kulit** / pencahayaan gelap — diskusi |
| 18–28 | Trap | “Model selalu benar” di iklan |
| 28–38 | Clarify | False positive/negative intuitif (tanpa rumus berat) |
| 38–48 | Concept | Confidence · threshold · human-in-the-loop |
| 48–65 | Practice | Katalog 5 “kasus gagal” untuk pipeline P01 + mitigasi 1 baris |
| 65–80 | Practice | UI: tampilkan “tidak yakin” jika confidence rendah (mock OK) |
| 80–90 | Exit | 1 demo gagal direkam untuk portofolio |

---

## Cognitive Trap

**Asumsi:** Akurasi tinggi = produk siap pakai.  
**Aman:** Apresiasi usaha; wajibkan demo gagal.

---

## Guiding Questions

1. Siapa yang rugi jika model salah?  
2. Apa fallback jika prediksi tidak yakin?  
3. Bukti apa yang kamu tunjukkan ke pengguna?

---

## Formatif

**OBS**, **REA**

---

## Catatan Guru

Budaya XII: gagal model = bukti maturity, bukan malu.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P02 Kasus Gagal Model


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P02 |
| Modul pertemuan | [XII-S6-P02_kasus-gagal-model.md](../../../kelas-xii/semester-6/XII-S6-P02_kasus-gagal-model.md) |
| Semester | 6 · Pertemuan 2/18 |
| Unit | XII6.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-B2, CXII-C1 |
| Formatif | OBS, REA |
| Prasyarat | [P01 Webcam ke Prediksi](./XII-S6-P01_webcam-ke-prediksi.md) |
| Panduan CV | [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| Ada live code? | **Ya — UI confidence mock + demo prediksi salah (mock OK)** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | **Wajib** — Evaluating models (konsep) | → referensi: [MLCC — Classification Thresholding](https://developers.google.com/machine-learning/crash-course/classification/thresholding) |
| 2 | Confusion matrix intuitif | → referensi: [MLCC — Confusion Matrix](https://developers.google.com/machine-learning/crash-course/classification/confusion-matrix) |
| 3 | Responsible AI — fairness overview | → referensi: [Google AI — Responsible AI Practices](https://ai.google/responsibility/responsible-ai-practices/) |
| 4 | False positive / negative (glossary) | → referensi: [Google ML Glossary — False positive](https://developers.google.com/machine-learning/glossary#false_positive) |
| 5 | Human-in-the-loop (praktik produk) | → referensi: [Google Cloud — Human-in-the-loop AI](https://cloud.google.com/architecture/human-in-the-loop-ai) |
| 6 | Recall pipeline CV | → referensi: [TF.js webcam tutorial](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 7 | Rubrik E1 (batasan model) | → referensi: [09_Rubrik_Etika_AI.md](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 8 | Panduan CV CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Waktu baca minimum:** 45–60 menit (MLCC thresholding + confusion matrix + skim Responsible AI).

---

## Pengetahuan yang Dikuasai Guru

### Mengapa "demo gagal" wajib di CPLF XII

Industri dan iklan menampilkan **demo sukses saja**. Capability CXII-C1 menuntut **kejujuran produk**: model salah = **data desain**, bukan malu. P02 membangun budaya portofolio: **1 demo gagal direkam** = bukti maturity (jembatan ke P11/P14 capstone).

**Transformasi belajar:** Dari "akurasi tinggi = siap pakai" → **false positive/negative intuitif** + **human-in-the-loop** + UI "tidak yakin".

### Istilah tanpa rumus berat

| Istilah | Plain Indonesian untuk MA |
|---------|---------------------------|
| **Confidence** | Angka 0–1 (atau %) seberapa yakin model — **bukan** kebenaran mutlak |
| **Threshold** | Batas minimal confidence — di bawahnya tampilkan "tidak yakin" |
| **False positive** | Model bilang "ya" padahal seharusnya "tidak" (alarm palsu) |
| **False negative** | Model bilang "tidak" padahal seharusnya "ya" (terlewat) |
| **Human-in-the-loop** | Manusia konfirmasi sebelum aksi penting — AI hanya saran |

Contoh MA absensi citra: FP = siswa A dikenali sebagai B; FN = siswa hadir tapi tidak tercatat.

### Experience — filter wajah salah warna kulit / pencahayaan gelap

**Bukan** untuk menyalahkan siswa — tunjukkan **keterbatasan data & pencahayaan**. Siapkan 3 foto/kondisi:

1. Pencahayaan terang frontal — prediksi "benar"
2. Gelap / backlight — prediksi salah atau confidence rendah
3. Objek di luar kelas training — label ngawang

Guru **sengaja** tunjukkan salah — tanya "Siapa yang rugi jika model salah?"

→ referensi: [Google Responsible AI Practices](https://ai.google/responsibility/responsible-ai-practices/) — fairness & testing

### Katalog 5 kasus gagal (practice inti)

Siswa isi untuk pipeline P01 + mitigasi 1 baris:

| # | Kasus gagal | Penyebab hipotesis | Mitigasi UI 1 baris |
|---|-------------|-------------------|---------------------|
| 1 | Izin kamera ditolak | User / policy browser | Pesan + fallback upload foto |
| 2 | Confidence < 0.5 | Pencahayaan / out-of-distribution | Tampilkan "tidak yakin — coba lagi" |
| 3 | Label salah kelas | Training sample sedikit | Minta konfirmasi user |
| 4 | Latensi > 3 detik | Resolusi besar / laptop lemot | Loading spinner + turunkan resolusi |
| 5 | Prediksi bias warna kulit | Dataset tidak representatif | Dokumentasi batasan + alternatif QR |

### UI "tidak yakin" — mock cukup untuk P02

Belum perlu model TM sungguhan — **mock confidence** OK:

```javascript
function tampilkanHasil(label, confidence) {
  const THRESHOLD = 0.6;
  if (confidence < THRESHOLD) {
    statusEl.textContent = "Tidak yakin — coba pencahayaan lebih terang";
    return;
  }
  statusEl.textContent = `${label} (${(confidence * 100).toFixed(0)}%)`;
}
```

TTS: threshold = **kebijakan produk**, bukan rumus matematika wajib hafal.

### Guiding questions (modul) — jawaban guru

1. **Siapa yang rugi jika model salah?** Pengguna, subjek foto, sekolah (reputasi), yang di-absen salah.
2. **Fallback jika tidak yakin?** Manual input, QR, konfirmasi guru, skip fitur AI.
3. **Bukti apa ke pengguna?** Confidence + demo gagal + paragraf batasan (rubrik E1).

### Koneksi rubrik & capstone

- **E1 level 3:** menulis & mendemo batasan + kasus gagal proaktif.
- P02 exit: **1 demo gagal direkam** — mulai folder portofolio capstone.

---

## Recall Spiral

Recall **P01** — chain spiral S6.

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P01 — 4 langkah pipeline?" | Akses → frame → tensor → infer |
| "Shape fromPixels tipikal?" | `[h, w, 3]` |
| "Pipeline jalan = model benar?" | **Tidak** — itu trap hari ini |
| "S5 — overclaim terlarang?" | "Selalu benar" / 100% tanpa kasus gagal |

Bridge: "Kemarin shape benar; hari ini **output** bisa salah — desain UI harus jujur."

---

## Etika Penyampaian

| Aturan | Penerapan P02 |
|--------|---------------|
| **Demo gagal disengaja** | Guru **tunjukkan salah** — jangan hanya success story |
| **No shame** | Framing: "gagal model = bukti maturity XII" |
| **Sensitif bias** | Diskusi warna kulit / pencahayaan — **faktual**, tidak mengejek siswa |
| **No copas katalog** | Siswa **isi sendiri** 5 kasus dari pengalaman P01 + diskusi |
| **Rekam demo gagal** | Untuk portofolio — **consent** jika ada wajah teman |
| **Mock OK** | Confidence mock — fokus UX jujur, bukan akurasi TM dulu |

---

## Materi Inti

### Timeline fasilitator

```text
Opening: 3 prediksi salah sengaja
  → Experience: pencahayaan / bias kulit
  → Trap: model selalu benar di iklan
  → Clarify: FP/FN intuitif
  → Concept: confidence · threshold · human-in-the-loop
  → Practice: katalog 5 kasus + mitigasi
  → Practice: UI tidak yakin (mock)
  → Exit: 1 demo gagal direkam
```

### Trap (menit 18–28)

**Asumsi:** "Akurasi 95% di slide = produk aman."

**Counter:** "5% dari 1000 siswa = 50 orang salah — siapa 50 itu?" Kalkulator sederhana di papan.

→ referensi: [MLCC — Confusion Matrix](https://developers.google.com/machine-learning/crash-course/classification/confusion-matrix)

### Concept confidence & threshold

→ referensi: [MLCC — Thresholding](https://developers.google.com/machine-learning/crash-course/classification/thresholding)

Gambar di papan:

```text
confidence 0.92 → tampilkan label (yakin)
confidence 0.41 → "tidak yakin" + minta ulang
confidence 0.55 + threshold 0.6 → sama: tidak yakin
```

---

## Alur Live Coding / Live Modeling TTS

P02 = **mock UI + live demo gagal** — bisa gabung HTML P01.

```text
[LANGKAH 1 — Opening demo salah 0–5 menit]
Proyeksikan 3 skenario mock (JSON label + confidence).
TTS: "Teak — mana yang bahaya jika langsung dipakai tanpa konfirmasi?"
Scope: siswa tebak 3 menit · diskusi 2 menit

[LANGKAH 2 — Experience pencahayaan 5–18 menit]
Live webcam P01 — tutup lampu / backlight.
Ucapkan: "Pipeline sama — output beda. Catat di katalog kasus #2."
TTS: "Siapa yang rugi?" — 2 siswa jawab.

[LANGKAH 3 — Trap iklan 18–28 menit]
Tulis klaim iklan di papan — debat "selalu benar?"
Scope: tidak perlu coding

[LANGKAH 4 — Concept FP/FN 28–38 menit]
Gambar 2×2 confusion matrix kosong — isi 1 contoh MA (absensi).
TTS per sel: Tebak → Tanya → Spelling istilah

[LANGKAH 5 — UI threshold live 38–48 menit]
Tambah ke HTML P01: function tampilkanHasil + THRESHOLD = 0.6
TTS scope:
  Tebak: "Kalau confidence 0.55?"
  Tanya: "Threshold 0.6 vs 0.9 — trade-off apa?"
  Spelling: ketik if (confidence < THRESHOLD) ...
Live: mock 3 nilai confidence — UI berubah

[LANGKAH 6 — Katalog 5 kasus 48–65 menit]
Worksheet kelompok — bukan copy template guru.
Presentasi 1 kasus + mitigasi per kelompok (2 menit)

[LANGKAH 7 — Rekam demo gagal 65–80 menit]
Siswa rekam layar 15–30 detik: kondisi sengaja gagal + UI "tidak yakin"
Consent wajah — blur OK

[LANGKAH 8 — Exit 80–90 menit]
Exit: link/simpan video demo gagal + 1 kalimat mitigasi
```

---

## Latihan Membaca Kode

### Snippet A — Threshold

```javascript
const THRESHOLD = 0.6;
const confidence = 0.55;
const label = "Buku";

if (confidence < THRESHOLD) {
  console.log("Tidak yakin");
} else {
  console.log(label, confidence);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "Tidak yakin" |
| Ubah THRESHOLD jadi 0.5? | Tampil `Buku 0.55` |

### Snippet B — Human-in-the-loop

```javascript
function aksiSetelahPrediksi(label, confidence) {
  if (confidence < 0.7) return tampilkanFormManual();
  return tampilkanKonfirmasi(`Yakin ${label}?`, () => simpan(label));
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Confidence 0.65 — jalur? | Form manual |
| Mengapa konfirmasi sebelum simpan? | Aksi irreversible — spiral P05 |

### Snippet C — False positive scenario

```text
Model absensi: prediksi "Hadir" untuk siswa yang belum masuk (confidence 0.88)
```

| Pertanyaan | Kunci |
|------------|-------|
| FP atau FN? | **FP** — positif palsu (hadir padahal tidak) |
| Mitigasi? | Konfirmasi QR / guru |

---

## Praktik Mandiri Siswa

- **Deliverable 1:** Katalog 5 kasus gagal + mitigasi 1 baris (tabel).
- **Deliverable 2:** UI threshold di halaman P01 (mock confidence cukup).
- **Exit:** Video/screenshot **1 demo gagal** + caption mitigasi.
- **Refleksi:** "Sebelum P02 saya kira akurasi tinggi = …; sekarang …"

---

## Kesalahan Umum

| Siswa / guru | Respons |
|--------------|---------|
| Malu demo gagal | Reframe maturity XII + rubrik E1 |
| Threshold 0.99 — never predict | Tanya trade-off — fitur mati total |
| Hanya salahkan "model jelek" | Arahkan ke data, pencahayaan, UX |
| Skip human-in-the-loop | "Siapa konfirmasi sebelum absen permanen?" |
| Mock confidence dianggap "palsu" | Mock = belajar UX; model nyata P04 |
| Ejek teman saat prediksi salah wajah | Stop — etika + aurat |

---

## Checklist Exit Guru

- [ ] MLCC thresholding / confusion matrix dibaca
- [ ] Demo gagal disengaja di depan kelas
- [ ] Recall P01 pipeline terpasang
- [ ] Katalog 5 kasus terkumpul per siswa/kelompok
- [ ] UI threshold mock jalan
- [ ] Minimal 1 demo gagal direkam untuk portofolio
- [ ] Budaya "gagal = data" — bukan malu
- [ ] Transfer ke P03 (butuh data besar → transfer learning)

---

## Rujukan modul

- Modul: [XII-S6-P02](../../../kelas-xii/semester-6/XII-S6-P02_kasus-gagal-model.md)
- Sebelumnya: [P01](./XII-S6-P01_webcam-ke-prediksi.md)
- Lanjutan: [P03 Transfer Learning](./XII-S6-P03_transfer-learning-konsep.md)
- Rubrik: [09_Rubrik_Etika_AI.md](../../../../09-rubrik/09_Rubrik_Etika_AI.md)

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
