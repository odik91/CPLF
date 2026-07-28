# Materi Guru Lengkap — XII-S6-P08

**Handout siswa (bagikan):** [XII-S6-P08_project-nilai-kickoff_siswa.md](./XII-S6-P08_project-nilai-kickoff_siswa.md)

**Modul:** [XII-S6-P08_project-nilai-kickoff.md](../../../kelas-xii/semester-6/XII-S6-P08_project-nilai-kickoff.md)

**Materi pendukung sumber:** [XII-S6-P08_project-nilai-kickoff.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P08_project-nilai-kickoff.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P08 — Project Nilai Kickoff

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P08 |
| Unit | XII6.6 |
| Durasi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |

## Learning Transformation

Dari latihan AI → **capstone** dengan pengguna nyata & etika terintegrasi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | 4 PRJ nilai + varian · bonus agent **opsional** terpisah |
| 10–25 | Concept | DoD capstone · [Rubrik Project](../../../09-rubrik/09_Rubrik_Project.md) · [Rubrik Etika](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 25–40 | Practice | Pilih PRJ · bentuk tim 2–4 · tentukan pengguna |
| 40–55 | Wawancara | 3 pertanyaan ke pengguna (piket/wali/OSIS) — catat |
| 55–75 | Practice | Spec + acceptance + dokumen etika draft + wireframe |
| 75–85 | Clarify | Guru approve jalur teknologi (QR vs kamera dll.) |
| 85–90 | Exit | Milestone P09 · assign role tim |

---

## Checklist Kickoff

- [ ] Pengguna/masalah nyata terdokumentasi  
- [ ] Acceptance ≥5 item testable  
- [ ] Template etika P06 terisi draft  
- [ ] Repo Git / folder tim  
- [ ] Varian rotasi antar kelas paralel  

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

Tolak project tanpa pengguna abstrak (“masyarakat luas”). QR disarankan vs face tanpa consent.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P08 Project Nilai Kickoff

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) · [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P08 |
| Modul pertemuan | [XII-S6-P08_project-nilai-kickoff.md](../../../kelas-xii/semester-6/XII-S6-P08_project-nilai-kickoff.md) |
| Semester | 6 · Pertemuan 8/18 |
| Unit | XII6.6 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |
| Capability | COM, REA |
| Formatif | COM, REA |
| Ada live code? | **Facilitator — wireframe + skeleton generic OK, bukan capstone jadi** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — PRJ-XII-S6-01 Absensi/QR | → [PRJ_XII_S6_01_AI_Absensi.md](../../../08-project/PRJ_XII_S6_01_AI_Absensi.md) |
| 2 | **Wajib** — PRJ-XII-S6-02 Gesture | → [PRJ_XII_S6_02_Gesture.md](../../../08-project/PRJ_XII_S6_02_Gesture.md) |
| 3 | **Wajib** — PRJ-XII-S6-03 Klasifikasi Citra | → [PRJ_XII_S6_03_Klasifikasi_Citra.md](../../../08-project/PRJ_XII_S6_03_Klasifikasi_Citra.md) |
| 4 | **Wajib** — PRJ-XII-S6-04 Asisten Madrasah | → [PRJ_XII_S6_04_Asisten_Madrasah.md](../../../08-project/PRJ_XII_S6_04_Asisten_Madrasah.md) |
| 5 | **Wajib** — Rubrik Project | → [09_Rubrik_Project.md](../../../09-rubrik/09_Rubrik_Project.md) |
| 6 | **Wajib** — Rubrik Etika AI | → [09_Rubrik_Etika_AI.md](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 7 | Project bank index S6 | → [08_Project_Bank_Index — XII S6](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |
| 8 | Teachable Machine | → [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| 9 | TM export TF.js | → [TM — Export formats](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| 10 | TF.js webcam transfer | → [TF.js — Webcam classifier](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 11 | getUserMedia / privasi | → [MDN — getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
| 12 | MobileNet pretrained | → [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| 13 | Panduan CV S6 | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Baca keempat PRJ penuh** — paham DoD & varian A/B/C, **bukan** solusi kode.

---

## Pengetahuan Guru

### Transformasi kickoff

**Dari:** Latihan AI terisolasi (P01–P07)  
**Ke:** **Capstone tim 2–4** dengan pengguna nyata, etika terintegrasi, bukti wawancara.

### Empat opsi PRJ S6 (PRJ-05 agent = bonus P15, **bukan** kickoff hari ini)

| PRJ | Inti | Teknologi disarankan | Etika emphasis |
|-----|------|----------------------|----------------|
| **[PRJ-01](../../../08-project/PRJ_XII_S6_01_AI_Absensi.md)** — Absensi/QR | Hadir digital — **QR disarankan** vs wajah | QR / kode / gesture TM varian C | E2 privasi · consent |
| **[PRJ-02](../../../08-project/PRJ_XII_S6_02_Gesture.md)** — Gesture mini | Webcam → prediksi 3 kelas | TM / TF.js transfer | E1 demo gagal cahaya · E4 tidak overclaim aksesibilitas |
| **[PRJ-03](../../../08-project/PRJ_XII_S6_03_Klasifikasi_Citra.md)** — Sampah/tanaman | Upload/kamera → label + saran | TM / MobileNet | E4 dampak salah klasifikasi |
| **[PRJ-04](../../../08-project/PRJ_XII_S6_04_Asisten_Madrasah.md)** — Asisten info | KB terbatas — tidak halusinasi | JSON + intent/keyword (+ LLM opsional) | E3 log klarifikasi · E1 "tidak tahu" |

**Rotasi varian** A/B/C antar kelas paralel — cegah copy antar kelas.

### Gate sebelum build (P06 + P07)

| Syarat | Bukti |
|--------|-------|
| P06 etika | Template etika **draft** terisi hari ini |
| P07 AI partner | Format log klarifikasi dipahami |
| Pengguna nyata | Wawancara ≥3 pertanyaan — **bukan** "masyarakat luas" |
| Tim 2–4 | Role assign: PM · dev · etika/UX · dokumentasi |

### Wawancara pengguna (wajib 3 pertanyaan)

Undang: wali kelas · piket · koordinator OSIS · guru humas — **15 menit OK**.

| # | Pertanyaan contoh | Catat |
|---|-------------------|-------|
| 1 | "Masalah apa yang paling sering?" | Kutipan verbatim |
| 2 | "Kalau sistem salah — dampaknya apa?" | Risiko nyata |
| 3 | "Data apa yang **tidak** boleh kami simpan?" | Privasi / consent |

**Tolak** project tanpa nama pengguna spesifik.

### Template etika P06 (draft wajib di repo hari ini)

```text
Masalah · Pengguna · Data dikumpulkan · Lama simpan ·
Siapa akses · Risiko salah · Mitigasi · Alternatif lebih aman
```

**Etika = desain awal** — bukan lampiran kosong di akhir.

### DoD capstone ringkas (guru hafalkan)

- Produk uji coba ≥1 sesi nyata atau simulasi ketat
- Dokumen etika + batasan model **bukan kosong**
- Demo kasus gagal (P11) — direncanakan sejak kickoff
- Setiap anggota jelaskan peran
- Acceptance ≥5 item **testable**

### Acceptance criteria — contoh measurable

**PRJ-01 (QR varian A):**

- [ ] Scan QR menambah 1 baris hadir di localStorage
- [ ] Fallback manual jika QR tidak terbaca
- [ ] Dokumen etika: data disimpan, retention, akses
- [ ] Demo: QR rusak → alur mitigasi
- [ ] ≥1 commit per anggota sebelum P09 selesai

**PRJ-03 (sampah varian A):**

- [ ] Upload/kamera → label + confidence
- [ ] Confidence < threshold → pesan "cek manual"
- [ ] ≥2 kelas sampel — jumlah sampel dilabel jujur
- [ ] Esai etika: salah klasifikasi organik/anorganik → dampak?

### Milestone P09 (exit hari ini)

- Tim + PRJ + varian tercatat
- Spec + acceptance ≥5 checkbox
- Wawancara pengguna terdokumentasi
- Template etika draft di repo
- Wireframe alur + skeleton folder
- **Bukan** model trained penuh — itu P09–P10

### Kickoff ≠ build penuh

90 menit = **tim · wawancara · spec · etika · wireframe** — guru facilitator, bukan coding solusi.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| P06: QR vs wajah? | QR lebih aman privasi · wajah butuh consent ketat |
| P07: log klarifikasi? | Wajib jika pakai AI — format 6 kolom |
| P05: fallback non-AI? | Alur manual wajib direncanakan |
| P04: TM export? | model.json + metadata — test load P09 |
| S5 project: batasan model? | Spiral — capstone = batasan + etika + pengguna nyata |

---

## Etika Penyampaian

| Aturan | Penerapan kickoff |
|--------|-------------------|
| **Guru facilitator** | ≤15 menit front — siswa spec & wawancara |
| **No capstone jadi** | Dilarang demo app PRJ trained lengkap di proyektor |
| **No starter repo** | Tidak ZIP template capstone nilai 100 |
| **No full solution** | Wireframe generic OK — bukan implementasi PRJ |
| **Wawancara pengguna** | Siswa yang tanya — guru fasilitasi undangan |
| **Etika before build** | Tolak tim yang skip template etika |
| **Tim 2–4** | Jangan solo — COM/ITR butuh kolaborasi |
| **Rotasi varian** | Koordinasi kelas paralel |
| **QR vs face** | Disarankan QR — face butuh mitigasi E2 level 3+ |

### Bank pertanyaan (ganti memberi kode)

| Siswa | Guru tanya |
|-------|------------|
| "Template capstone pak/bu?" | "PRJ mana? Pengguna siapa? Acceptance #1?" |
| "Face recognition keren" | "Consent? Retention? Alternatif QR?" |
| "Pengguna = semua siswa Indonesia" | "Nama 1 orang wawancara — piket/wali?" |
| "Etika nanti saja" | "DoD gagal — draft hari ini di repo" |
| "Tim 1 orang" | "Role split — cari partner · max 4" |

---

## Materi Inti

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–10 | Opening | 4 PRJ + varian · agent bonus **terpisah** P15 |
| 10–25 | Concept | DoD · Rubrik Project · Rubrik Etika E1–E4 |
| 25–40 | Practice | Pilih PRJ · tim 2–4 · tentukan pengguna |
| 40–55 | Wawancara | 3 pertanyaan ke pengguna — catat |
| 55–75 | Practice | Spec + acceptance + etika draft + wireframe |
| 75–85 | Clarify | Approve jalur teknologi (QR vs kamera dll.) |
| 85–90 | Exit | Milestone P09 · assign role tim |

### Spec 6 poin (siswa tulis)

1. Masalah & **pengguna bernama** (dari wawancara)
2. Input (kamera / QR / upload / teks)
3. Output (hadir / label / jawaban)
4. Jalur teknologi (TM / TF.js / rule-based / hybrid)
5. Fallback non-AI
6. Risiko etis #1 + mitigasi awal

### Wireframe yang **boleh** di papan

```text
[Start] → [Izin kamera?] → [Prediksi / Scan]
              ↓ deny              ↓ confidence rendah
         [Fallback manual] ←──────┘
              ↓
         [Konfirmasi user] → [Simpan] → [Disclaimer batasan]
```

### Skeleton folder tim (boleh)

```text
tim-nama-prj/
  README.md          ← run + pengguna + acceptance
  etika.md           ← template P06 draft
  logs/
    ai-klarifikasi.md  ← jika pakai AI
  index.html         ← placeholder
  assets/
```

### Skeleton **dilarang** bagikan

- Repo "PRJ-S6-nilai-100" trained
- Model TM siap pakai untuk PRJ spesifik kelas
- Face recognition template dengan data wajah

→ referensi: [Teachable Machine](https://teachablemachine.withgoogle.com/) — siswa train sendiri

---

## Alur Live Coding / Live Modeling

```text
[LANGKAH 1 — Opening 0–10 menit]
Tampilkan 4 PRJ headline — masalah & DoD — TANPA demo app jadi.
Sebut: PRJ-05 agent = bonus P15, bukan wajib kickoff.
Tanya: "Mana yang butuh wawancara piket vs humas?"

[LANGKAH 2 — Rubrik + etika 10–25 menit]
Ringkas E1–E4 — gate E1=1 = dikembalikan.
Live isi 1 baris template etika: "Data: hanya timestamp + NIS, bukan foto wajah."
TTS: "Etika = desain — sama seperti validasi web S2."

[LANGKAH 3 — Tim + PRJ 25–40 menit]
Bentuk tim 2–4 — assign role.
Commit PRJ + varian A/B/C — rotasi antar kelas paralel.

[LANGKAH 4 — Wawancara 40–55 menit]
Siswa wawancara pengguna (undang sebelumnya atau walk-in piket).
Guru keliling: "Kutipan verbatim ada? Dampak jika salah?"

[LANGKAH 5 — Spec + acceptance 55–70 menit]
Spec 6 poin + ≥5 acceptance measurable.
Feedback: "AC ini bisa centang ya/tidak?"

[LANGKAH 6 — Etika + wireframe 70–85 menit]
Push etika.md draft ke repo — min 5 field terisi.
Wireframe alur + fallback.

[LANGKAH 7 — Approve teknologi 75–85 menit]
PRJ-01 face? → minta rencana consent + alternatif QR.
PRJ-04 LLM? → KB ground truth wajib.

[LANGKAH 8 — Exit 85–90 menit]
Milestone P09 di papan — role tim.
Blocker round.
```

---

## Latihan Membaca Kode / Spec

### Snippet A — Spec vague

```text
Project: AI super canggih untuk absensi semua sekolah Indonesia.
Pengguna: masyarakat luas.
```

| Pertanyaan | Kunci |
|------------|-------|
| Lulus kickoff? | **Tidak** — pengguna abstrak |
| Perbaiki | "Absensi piket kelas XII — wawancara Pak X piket" |

### Snippet B — Acceptance lemah

```text
[ ] AI akurat
[ ] UI keren
[ ] Etika OK
```

| Pertanyaan | Kunci |
|------------|-------|
| Testable? | Semua subjektif |
| Contoh kuat | "[ ] QR invalid → form manual muncul dalam 2 detik" |

### Snippet C — Etika kosong

```text
etika.md: (file ada, isi placeholder)
```

| Pertanyaan | Kunci |
|------------|-------|
| Boleh P09 build? | **Tidak** — gate P06/P08 |
| Minimal | Data · retention · risiko · mitigasi |

---

## Praktik Mandiri

Siswa **wajib deliverable kickoff**:

1. Tim 2–4 + PRJ + varian + role.
2. Wawancara ≥3 pertanyaan — catatan verbatim.
3. Spec 6 poin + acceptance ≥5 checkbox.
4. `etika.md` draft (template P06 min 5 field).
5. Wireframe + folder repo + README run placeholder.

**Guru:** approve spec + etika draft sebelum P09 — 1 sticky feedback per tim.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Pengguna abstrak | Tolak — wawancara ulang |
| Face tanpa consent plan | Redirect QR atau E2 level 3 plan |
| Skip etika.md | Block P09 build |
| Guru demo capstone jadi | Hapus — facilitator only |
| Tim solo | Gabungkan atau assign partner |
| Semua kelas PRJ-01 varian A | Rotasi varian |
| Scope agent + capstone satu repo | Pisah — agent bonus P15 |

---

## Rujukan

- Modul: [XII-S6-P08](../../../kelas-xii/semester-6/XII-S6-P08_project-nilai-kickoff.md)
- PRJ: [01](../../../08-project/PRJ_XII_S6_01_AI_Absensi.md) · [02](../../../08-project/PRJ_XII_S6_02_Gesture.md) · [03](../../../08-project/PRJ_XII_S6_03_Klasifikasi_Citra.md) · [04](../../../08-project/PRJ_XII_S6_04_Asisten_Madrasah.md)
- Sebelumnya: [P07 AI Partner](./XII-S6-P07_ai-partner-klarifikasi.md)
- Lanjutan: [P09 Build 1](./XII-S6-P09_project-nilai-build-1.md)
- Rubrik: [Project](../../../09-rubrik/09_Rubrik_Project.md) · [Etika AI](../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Checklist Exit

- [ ] Tim 2–4 + PRJ + varian tercatat
- [ ] Wawancara pengguna ≥3 pertanyaan terdokumentasi
- [ ] Spec + ≥5 acceptance — guru approve/potong scope
- [ ] `etika.md` draft di repo — bukan kosong
- [ ] Wireframe + skeleton folder — bukan capstone jadi
- [ ] Jalur teknologi disetujui (QR vs kamera dll.)
- [ ] Role tim assign · milestone P09 jelas
- [ ] Tidak ada distribusi solusi capstone

[← Indeks materi XII-S6](./XII-S6_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
