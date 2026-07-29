# Materi Guru Lengkap — XII-S6-P11

**Handout siswa (bagikan):** [XII-S6-P11_project-nilai-build-3_siswa.md](./XII-S6-P11_project-nilai-build-3_siswa.md)

**Modul:** [XII-S6-P11_project-nilai-build-3.md](../../../kelas-xii/semester-6/XII-S6-P11_project-nilai-build-3.md)

**Materi pendukung sumber:** [XII-S6-P11_project-nilai-build-3.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P11_project-nilai-build-3.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P11 — Demo Gagal & Mitigasi

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P11 |
| Unit | XII6.6 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S6-* |

## Learning Transformation

Dari menyembunyikan kegagalan → **demo gagal** + mitigasi = bukti maturity.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Contoh demo gagal guru — applause untuk kejujuran |
| 5–15 | Concept | Rubrik E1 level 3: proaktif tunjuk batasan |
| 15–25 | Clarify | Rekam skenario: cahaya buruk / label salah / QR rusak |
| 25–50 | Build | Implement mitigasi (threshold · manual · pesan) |
| 50–65 | Demo | Tim demo 1 kasus gagal + 1 mitigasi live |
| 65–80 | Practice | Update dokumen “Batasan Model” final |
| 80–90 | Exit | Video/screenshot demo gagal |

---

## Dokumen Batasan Model (wajib)

```text
Data training · Kondisi gagal · Dampak pengguna ·
Mitigasi · Yang TIDAK bisa model ini lakukan
```

---

## Formatif

**OBS**, **REA** + E1 rubrik etika

---

## Catatan Guru

Nilai XII: demo gagal yang jujur > akurasi 95% tanpa konteks.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P11 Demo Gagal & Mitigasi

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) · [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)  
> **Rubrik etika wajib:** [09_Rubrik_Etika_AI — E1](../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P11 |
| Modul pertemuan | [XII-S6-P11_project-nilai-build-3.md](../../../kelas-xii/semester-6/XII-S6-P11_project-nilai-build-3.md) |
| Semester | 6 · Pertemuan 11/18 |
| Unit | XII6.6 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |
| Formatif | OBS, REA + **E1** rubrik etika |
| Ada live code? | **Demo gagal guru + demo tim** — bukan solusi penuh |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Rubrik Etika E1 | → [09_Rubrik_Etika_AI — E1](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 2 | **Wajib** — Rubrik Etika E4 | → [09_Rubrik_Etika_AI — E4](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 3 | Spiral S5 demo batasan | → [XII-S5-P14 materi](../../semester-5/XII-S5-P14_project-s5-demo-batasan.md) |
| 4 | Model cards (inspirasi batasan) | → [Model Cards](https://modelcards.withgoogle.com/about) |
| 5 | Google Responsible AI | → [Google AI Responsibility](https://ai.google/responsibility/responsible-ai-practices/) |
| 6 | TF.js — failure modes CV | → [TF.js webcam tutorial](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 7 | Teachable Machine — sample size | → [Teachable Machine FAQ](https://support.google.com/teachablemachine/) |
| 8 | Panduan CV S6 | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| 9 | Rubrik Project | → [09_Rubrik_Project.md](../../../09-rubrik/09_Rubrik_Project.md) |

**Gate XII:** E1 = level 1 (sembunyikan gagal / overclaim) → **project dikembalikan** meski demo teknis mulus.

---

## Pengetahuan Guru

### Transformasi belajar

**Dari:** Menyembunyikan kegagalan · pamer akurasi  
**Ke:** **Demo gagal wajib** + mitigasi = bukti maturity · target **E1 level 3**.

### Nilai XII — norma kelas

> **Demo gagal yang jujur > akurasi 95% tanpa konteks**

Tepuk tangan untuk kejujuran — set di opening 5 menit.

### Preview rubrik E1

| Level | Perilaku |
|-------|----------|
| 1 ❌ | Klaim selalu benar / sembunyikan kegagalan → **dikembalikan** |
| 2 | Sebut batasan jika ditanya |
| 3 ✅ target S6 | Tulis + demo batasan + kasus gagal **proaktif** |
| 4 | Kait risiko pengguna + mitigasi kebijakan |

### Format demo tim (3–4 menit)

```text
1. Konteks & pengguna (20 detik)
2. Prediksi sukses — 1 contoh (45 detik)
3. Prediksi GAGAL — sengaja ditunjuk (45 detik) ← WAJIB
4. Mitigasi live — threshold / manual / pesan (45 detik)
5. 1 kalimat batasan model (15 detik)
```

**Guru interrupt** jika menit 3 belum bagian gagal.

### Skenario gagal per PRJ (rencanakan menit 15–25)

| PRJ | Kasus gagal contoh | Mitigasi contoh |
|-----|-------------------|-----------------|
| **01** Absensi | QR rusak / blur · gesture salah orang | Form manual · double confirm |
| **02** Gesture | Cahaya gelap · sudut ekstrem | Pesan "pindah tempat" · fallback |
| **03** Citra | Sampah mirip · confidence rendah | "Cek manual" · threshold |
| **04** Asisten | Pertanyaan di luar KB · halusinasi | "Tidak tahu" + kontak humas |

### Dokumen Batasan Model (wajib final hari ini)

```text
Data training · Kondisi gagal · Dampak pengguna ·
Mitigasi · Yang TIDAK bisa model ini lakukan
```

Struktur markdown lengkap — lihat template di bawah.

### Video/screenshot demo gagal (exit)

- Rekam 15–30 detik kasus gagal + mitigasi
- Simpan `assets/demo-gagal.mp4` atau screenshot berurutan
- Bukti untuk P12 peer review & P14 presentasi

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| P02: demo gagal model? | Normal — wajib ditunjuk |
| P10: low confidence UX? | Mitigasi hari ini harus live |
| S5 P14: format demo? | Sukses → gagal → batasan |
| P06: dampak salah prediksi? | Masuk dokumen batasan E4 |

---

## Etika Penyampaian

| Aturan | P11 |
|--------|-----|
| **Demo gagal wajib** | Timer — interrupt jika skip |
| **Applause kejujuran** | Norma kelas — bukan malu |
| **No solusi penuh** | Guru demo gagal **generic** — bukan fix tim |
| **No rubrik dump** | Sebut E1 level 3 — bukan PDF penuh |
| **Facilitator** | Guru buka dengan demo gagal sendiri |
| **Dokumen final** | Tolak submit batasan kosong |

### Bank pertanyaan

| Siswa | Guru tanya |
|-------|------------|
| "Refresh sampai benar" | "Itu level E1=1 — tunjuk gagal jujur" |
| "Takut nilai turun" | "Nilai XII: jujur > akurasi" |
| "Tidak ada kasus gagal" | "Cahaya/jarak/QR — buat skenario" |
| "Mitigasi nanti" | "Demo live hari ini — implement sekarang" |

---

## Materi Inti

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–5 | Opening | Demo gagal guru — applause kejujuran |
| 5–15 | Concept | E1 level 3 — proaktif tunjuk batasan |
| 15–25 | Clarify | Rekam skenario gagal per tim |
| 25–50 | Build | Implement mitigasi (threshold · manual · pesan) |
| 50–65 | Demo | Tim: 1 gagal + 1 mitigasi live |
| 65–80 | Practice | Update dokumen Batasan Model final |
| 80–90 | Exit | Video/screenshot demo gagal |

### Template dokumen batasan (wajib)

```markdown
# Batasan Model — [Nama Tim / PRJ]

## Data training
- Sumber: [TM / foto sendiri / N sampel per kelas]
- TIDAK valid: [contoh input di luar training]

## Kondisi gagal (contoh nyata)
1. [Cahaya gelap → label X salah]
2. [QR rusak → tidak terbaca]

## Dampak pengguna jika salah
- [Absensi double · sampah salah tempat · info salah]

## Mitigasi
- [Threshold · konfirmasi manual · pesan ragu]

## Yang TIDAK bisa model ini
- [ ] Selalu benar / 100% akurat
- [ ] Menggantikan [piket / guru / pengurus]
- [ ] Cocok untuk semua kondisi lingkungan
```

### Demo gagal guru (opening — siapkan cadangan)

Contoh generic webcam:

```text
1. Tunjuk gesture "hadir" — benar di cahaya terang
2. Tutup lensa / gelapkan — prediksi salah / confidence drop
3. Ucapkan: "Ini normal. Yang penting: pengguna lihat apa?"
4. Klik fallback manual — tepuk tangan
```

### Mitigasi implementasi (build 25–50)

| Teknik | Kapan |
|--------|-------|
| Confidence threshold | CV / gesture / citra |
| Double confirm | Absensi · simpan data |
| Pesan "model ragu" | PRJ-03 · PRJ-02 |
| "Tidak tahu" + kontak | PRJ-04 asisten |
| Disable auto-action | Semua PRJ dengan persistensi |

---

## Alur Live Coding / Facilitator

```text
[LANGKAH 1 — Opening 0–5 menit]
Demo guru: sukses → GAGAL (cahaya/input aneh) → mitigasi manual.
Ucapkan: "Capstone XII — yang nilai tinggi: jujur soal gagal."
Norma: tepuk tangan untuk demo gagal teman.

[LANGKAH 2 — E1 concept 5–15 menit]
Papan: E1 level 1 vs 3 — "sembunyikan" vs "proaktif demo gagal".
Gate: E1=1 = project dikembalikan.

[LANGKAH 3 — Skenario 15–25 menit]
Setiap tim tulis 2 skenario gagal spesifik PRJ mereka.
Guru approve: realistis & bisa demo live?

[LANGKAH 4 — Build mitigasi 25–50 menit]
Implement threshold / pesan / manual — commit.
Keliling: "Mitigasi sudah bisa diklik pengguna?"

[LANGKAH 5 — Demo tim 50–65 menit]
Timer 3–4 menit per tim — format wajib sukses→GAGAL→mitigasi.
Catat mental E1 — intervensi private jika level 1.

[LANGKAH 6 — Dokumen 65–80 menit]
Finalisasi batasan-model.md — 5 section wajib.
Tolak klaim "selalu benar".

[LANGKAH 7 — Exit 80–90 menit]
Submit video/screenshot demo gagal ke repo.
```

---

## Latihan Membaca Kode / Dokumen

### Snippet A — hanya happy path demo

```javascript
// demo.js — only runs predictSuccess()
async function demoForTeacher() {
  await predict(sampleGoodImage);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| E1? | Level 1 — menyembunyikan gagal |
| Fix? | Tambah `predictFailureScenario()` |

### Snippet B — batasan overclaim

```markdown
## Batasan
Model kami sangat akurat dan bisa dipakai semua sekolah.
```

| Pertanyaan | Kunci |
|------------|-------|
| Lulus? | **Tidak** — overclaim |
| Perbaiki | Kondisi gagal + klaim terlarang explicit |

### Snippet C — mitigasi tanpa UI

```javascript
const THRESHOLD = 0.8;  // defined but never used in UI
```

| Pertanyaan | Kunci |
|------------|-------|
| Demo mitigasi? | Tidak — harus terlihat pengguna |
| P10 link? | Low confidence message missing |

---

## Praktik Mandiri

Tim **wajib**:

1. Implement ≥1 mitigasi teruji.
2. Demo live: 1 sukses + 1 **gagal** + mitigasi.
3. `batasan-model.md` final — 5 section.
4. Video/screenshot demo gagal di repo.
5. Update `etika.md` jika mitigasi mengubah data flow.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Refresh sampai benar | E1=1 — stop · demo gagal ulang |
| Batasan copy ChatGPT | Minta contoh spesifik PRJ |
| Demo gagal faked | Harus kondisi realistis (cahaya/QR/input) |
| Mitigasi hanya di slide | Harus live di app |
| Guru fix model akurasi | Redirect ke mitigasi UX |
| Skip video bukti | Gate P12 — reviewer butuh bukti |

---

## Rujukan

- Modul: [XII-S6-P11](../../../kelas-xii/semester-6/XII-S6-P11_project-nilai-build-3.md)
- Sebelumnya: [P10 Build 2](./XII-S6-P10_project-nilai-build-2.md)
- Lanjutan: [P12 Peer Review Etika](./XII-S6-P12_peer-review-etika.md)
- Rubrik: [Etika AI E1–E4](../../../09-rubrik/09_Rubrik_Etika_AI.md)
- Spiral: [S5 P14 Demo Batasan](../../semester-5/XII-S5-P14_project-s5-demo-batasan.md)

---

## Checklist Exit

- [ ] Setiap tim demo 1 kasus gagal + mitigasi live
- [ ] `batasan-model.md` final — tidak overclaim
- [ ] Video/screenshot demo gagal di repo
- [ ] E1 mental score ≥ level 3 — intervensi jika level 1
- [ ] Norma kejujuran terset di kelas
- [ ] Tidak ada solusi penuh dari guru

[← Indeks materi XII-S6](./XII-S6_Materi_Index.md)

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
