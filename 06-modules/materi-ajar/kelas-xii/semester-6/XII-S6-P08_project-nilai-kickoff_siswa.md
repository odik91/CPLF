# Handout Siswa — XII-S6-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P08_project-nilai-kickoff.md](../../../kelas-xii/semester-6/XII-S6-P08_project-nilai-kickoff.md)

---

## 1. Tujuan pembelajaran

Dari latihan AI → **capstone** dengan pengguna nyata & etika terintegrasi.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

- [ ] Pengguna/masalah nyata terdokumentasi  
- [ ] Acceptance ≥5 item testable  
- [ ] Template etika P06 terisi draft  
- [ ] Repo Git / folder tim  
- [ ] Varian rotasi antar kelas paralel  

---

## 6. Exit ticket

1. Milestone P09 · assign role tim
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
