# Materi Guru Lengkap — X-S1-P15

**Handout siswa (bagikan):** [X-S1-P15_project-s1-kickoff_siswa.md](./X-S1-P15_project-s1-kickoff_siswa.md)

**Modul:** [X-S1-P15_project-s1-kickoff.md](../../../kelas-x/semester-1/X-S1-P15_project-s1-kickoff.md)

**Materi pendukung sumber:** [X-S1-P15_project-s1-kickoff.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P15_project-s1-kickoff.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P15 — Project S1 Kickoff

| Field | Isi |
|-------|-----|
| Kode | X-S1-P15 |
| Unit | X1.8 |
| Durasi | 2 JP = 90 menit |
| PRJ | Pilih satu: [PRJ-X-S1-01/02/03](../../08-project/08_Project_Bank_Index.md#kelas-x--semester-1-fondasi-bernalar) |

## Learning Transformation

Dari latihan terpisah → **artefak integratif** dengan reasoning.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Presentasi 3 opsi PRJ + varian rotasi kelas |
| 10–25 | Concept | DoD project · capability yang dinilai · [Rubrik Project](../../09-rubrik/09_Rubrik_Project.md) ringkas |
| 25–40 | Practice | Pilih PRJ + tulis spec 5 poin + acceptance 3 checkbox |
| 40–55 | Clarify | Guru approve spec — 1 putaran feedback |
| 55–75 | Practice | Mulai flowchart/pseudocode atau JS skeleton |
| 75–85 | Reflect | Risiko: apa yang paling sulit? |
| 85–90 | Exit | Target minggu P16 |

---

## Checklist Kickoff

- [ ] PRJ & varian dipilih  
- [ ] Spec + acceptance  
- [ ] Flowchart atau outline code  
- [ ] AI policy: log klarifikasi jika dipakai  

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

Kelas paralel: beda varian PRJ/EXP agar tidak copy.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P15 Project S1 Kickoff

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P15 |
| Modul pertemuan | [X-S1-P15_project-s1-kickoff](../../../kelas-x/semester-1/X-S1-P15_project-s1-kickoff.md) |
| Unit | X1.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Pilih satu: [PRJ-X-S1-01/02/03](../../../08-project/08_Project_Bank_Index.md#kelas-x--semester-1-fondasi-bernalar) |
| Capability | COM, REA |
| Ada live code? | **Facilitator — bukan demo project lengkap** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi inti:** dari latihan terpisah → **artefak integratif** dengan reasoning yang bisa dijelaskan.
- **Tiga opsi PRJ S1:**
  - **PRJ-X-S1-01** — Algoritma Kegiatan Harian (flowchart + pseudocode; JS opsional)
  - **PRJ-X-S1-02** — Simulasi Antrian (if + loop + data)
  - **PRJ-X-S1-03** — Kalkulator Logika Zakat (kondisi + perhitungan)
- **Definition of Done (DoD):** lihat file PRJ masing-masing — guru paham checklist, bukan solusi kode.
- **Deliverable kickoff hari ini:** spec 5 poin + acceptance 3 checkbox + flowchart/outline — **bukan** project jadi.
- **Rubrik project:** [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) — presentasi ringkas ke siswa (capability, bukan angka).
- **Varian rotasi:** kelas paralel beda PRJ/varian agar tidak copy antar kelas.
- **AI policy:** log klarifikasi jika dipakai — protokol MM-00.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Minggu lalu (P14) — rantai berpikir CPLF? | Masalah → algoritma → kondisi → data → loop → debug. |
| Apa beda latihan mingguan vs project S1? | Project = gabungan + bukti proses + bisa dijelaskan ke orang lain. |
| Apa itu acceptance criteria? | 3 checkbox "selesai jika …" — bisa diuji ya/tidak. |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | Tidak coding project untuk siswa; tidak "contoh selesai" di proyektor. |
| **Jangan takeover keyboard** | Laptop siswa milik siswa — guru jari di udara, bukan mengetik fix. |
| **Jangan bagikan solusi project** | Tidak ada repo/template `.js` lengkap, starter siap jalan, atau paste WA solusi PRJ. |
| **Clarifying questions, bukan jawaban** | Guru hanya tanya: "Input apa?" "Edge case?" "Bagaimana tahu selesai?" |
| Live modeling | Live = **membuat spec + flowchart** di papan, bukan mengetik kode PRJ. |
| Recall | Hubungkan ke station P14 — "Station mana yang mirip PRJ kamu?" |

### Bank pertanyaan klarifikasi (ganti "memberi kode")

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Gimana coding-nya?" | "Langkah pertama ROBI harus apa? Sudah ada flowchart?" |
| "Stuck di loop" | "Operasi apa yang diulang? Array-nya isi apa?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjukkan spec kamu, kita cek acceptance." |
| "AI kasih kode full" | "Jelaskan baris 1–5 sendiri; cocok spec kamu?" |

**Nilai MA:** amanah — shortcut curang merusak REA/ITR; sabar — kickoff lambat lebih baik dari copas cepat.

---

## 4. Materi Inti

### Kickoff ≠ build penuh

90 menit hari ini fokus **perencanaan yang bisa diuji**:

1. Pilih PRJ + varian (A/B/C jika ada)
2. Spec 5 poin — masalah, user, input, output, batasan
3. Acceptance 3 checkbox — measurable
4. Flowchart atau outline pseudocode
5. Identifikasi risiko — "apa yang paling sulit?"

### Approve spec — 1 putaran feedback

Guru baca spec siswa, tanya:

- Apakah teman lain bisa jalankan tanpa tanya ulang?
- Apakah acceptance bisa dicek ya/tidak?
- Apakah scope realistis untuk 2 minggu build (P16–P17)?

**Tolak scope terlalu besar** — bantu potong, bukan tambah kode.

### Mulai skeleton (opsional akhir jam)

Jika ada waktu: siswa tulis **3–5 baris** struktur (komentar/pseudocode), bukan implementasi penuh.

Contoh yang **boleh** guru tulis di papan (generic, bukan solusi PRJ):

```text
// 1. data
// 2. loop / if
// 3. output
```

### Target minggu P16

Setiap siswa/kelompok tulis 1 target build + 1 blocker yang dikhawatirkan.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Slide/papan: 3 opsi PRJ (ringkas masalah, bukan solusi).
- Rubrik project 1 halaman — capability yang dinilai.
- **Tidak ada** file starter project di laptop siswa.
- Kelas paralel: koordinasi varian PRJ dengan guru lain.

### Skrip facilitator

```text
[LANGKAH 1 — Opening 0–10 menit]
Presentasi 3 PRJ — masalah & DoD, TANPA demo kode jadi.
Tanya: "PRJ mana paling dekat dengan station P14?"

[LANGKAH 2 — Concept DoD + rubrik 10–25 menit]
Jelaskan: dinilai proses + reasoning, bukan "paling cantik".
Contoh acceptance: "ROBI bisa ikuti tanpa tanya" (PRJ-01).

[LANGKAH 3 — Pilih PRJ + spec 25–40 menit]
Siswa tulis spec 5 poin — guru keliling, hanya clarifying questions.
Template oral, bukan PDF guru.

[LANGKAH 4 — Approve spec 40–55 menit]
1 putaran feedback per kelompok/individu.
Red flag: spec copy-paste internet → minta uji ROBI.

[LANGKAH 5 — Flowchart / outline 55–75 menit]
Kertas atau draw.io — guru tanya edge case.
Live modeling di papan: contoh flowchart GENERIK (mis. "decision diamond slot penuh").

[LANGKAH 6 — Reflect + exit 75–90 menit]
Risiko + target P16 + AI policy reminder.
```

**Dilarang:** guru live-code PRJ-02 antrian lengkap "biar siswa paham".

---

## 6. Latihan Membaca Kode

Kickoff hari ini **bukan** fokus membaca kode project. Gunakan snippet **generic** untuk mengingatkan pola — proyeksi saja.

```javascript
// Outline skeleton — BUKAN solusi PRJ
// Langkah 1: siapkan data
// Langkah 2: proses (loop atau if)
// Langkah 3: tampilkan hasil
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Ini solusi project atau kerangka? | Kerangka — siswa isi sendiri sesuai spec. |
| Mengapa guru tidak isi baris 2? | Implementasi = tanggung jawab siswa + reasoning mereka. |

Jika siswa PRJ-03 (zakat): baca **spesifikasi** numerik, bukan kode:

```text
"Jika harta ≥ nisab DAN haul terpenuhi → wajib zakat."
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Struktur logika? | Dua kondisi digabung (AND) — belum tentu pakai `&&` hari ini. |

---

## 7. Praktik Mandiri Siswa

1. **Dokumen spec + acceptance** — milik siswa, guru approve.
2. **Flowchart/outline** — minimum sesuai PRJ.
3. **Catatan risiko** — 1 paragraf: apa yang paling sulit.
4. **Target P16** — 1 kalimat deliverable minggu depan.
5. **Opsional:** 3–5 baris komentar/pseudocode — **bukan** file dari guru.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Minta "template project pak/bu" | Tolak — beri template **spec**, bukan kode |
| Langsung coding tanpa spec | Stop lembut — "Acceptance kamu apa?" |
| Copy spec/flowchart internet | Wajibkan uji ROBI + revisi |
| Scope terlalu besar | Bantu potong ke DoD minimal |
| Guru tempted demo cepat | Ingat etika facilitator — tanya, jangan ketik |

---

## 9. Rujukan

- Modul pertemuan: [X-S1-P15](../../../kelas-x/semester-1/X-S1-P15_project-s1-kickoff.md)
- PRJ-01: [Kegiatan Harian](../../../08-project/PRJ_X_S1_01_Kegiatan_Harian.md)
- PRJ-02: [Simulasi Antrian](../../../08-project/PRJ_X_S1_02_Simulasi_Antrian.md)
- PRJ-03: [Kalkulator Zakat](../../../08-project/PRJ_X_S1_03_Kalkulator_Zakat.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Panduan project week: [00_Panduan_Pertemuan Kelas X](../../../kelas-x/00_Panduan_Pertemuan.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Setiap siswa/kelompok punya PRJ + varian + spec + acceptance
- [ ] Guru approve spec — feedback process-oriented
- [ ] **Tidak** ada solusi project penuh dibagikan (file/WA/proyektor)
- [ ] **Tidak** takeover keyboard siswa
- [ ] Flowchart/outline minimal ada
- [ ] Target P16 + risiko tercatat
- [ ] AI policy diingatkan jika relevan

[← Indeks S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
