# Materi Guru Lengkap — X-S1-P04

**Handout siswa (bagikan):** [X-S1-P04_robot-mie-algoritma_siswa.md](./X-S1-P04_robot-mie-algoritma_siswa.md)

**Modul:** [X-S1-P04_robot-mie-algoritma.md](../../../kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md)

**Materi pendukung sumber:** [X-S1-P04_robot-mie-algoritma.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P04 — ROBI Robot Mie & Algoritma

| Field | Isi |
|-------|-----|
| Kode | X-S1-P04 |
| Unit | X1.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-B2, CX-T2 |
| MM | MM-11, MM-12 |
| EXP | [EXP_01](../../07-experience_library/EXP_01_Robot_Mie.md) · varian [A/B/C](../../07-experience_library/EXP_01_Robot_Mie.md#varian-rotasi-kasus-beda-trap-sama) |

## Learning Transformation

Dari “komputer paham maksud” → “instruksi eksplisit berurutan.”

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | ROBI muncul — recap “masalah sebelum solusi” |
| 5–22 | Experience | ROBI masak mie (bungkus ikut) — dramatisasi |
| 22–35 | Trap + Q | Debate: ROBI patuh — kenapa gagal? |
| 35–45 | Clarify | Tulis langkah ROBI vs langkah manusia side-by-side |
| 45–55 | Concept | **Algoritma** · urutan · eksplisit |
| 55–75 | Practice | Kelompok: algoritma “buat teh” / “piket kelas” 8 langkah; teman = ROBI literal |
| 75–85 | Reflect | Langkah implisit apa yang sering ketinggalan? |
| 85–90 | Exit | 1 langkah yang wajib ditulis eksplisit |

**Adaptasi 1 JP:** Kurangi practice — 6 langkah saja.

---

## Guiding Questions

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?  
2. Urutan bisa dibalik?  
3. Jika ROBI = program, input apa yang hilang?

---

## Props

Mie instan / gambar ROBI di slide

---

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Baru di P04 boleh sebut “algoritma”. Varian Teh/Cuci/Ojek untuk kelas paralel.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P04 ROBI Robot Mie & Algoritma


## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P04 |
| Modul pertemuan | [X-S1-P04_robot-mie-algoritma.md](../../../kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md) |
| Semester | 1 · Pertemuan 4/18 |
| Unit | X1.2 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CX-B2, CX-T2 |
| Experience | [EXP_01](../../../../07-experience_library/EXP_01_Robot_Mie.md) · varian [Teh](../../../../07-experience_library/EXP_01_A_Teh_Manis.md) / [Cuci](../../../../07-experience_library/EXP_01_B_Cuci_Baju.md) / [Ojek](../../../../07-experience_library/EXP_01_C_Pesan_Ojek.md) |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## 1. Pengetahuan yang Dikuasai Guru

### Definisi algoritma (pertemuan pertama istilah ini)

- **Algoritma** = urutan langkah **eksplisit**, **berurutan**, dan **dapat dijalankan** tanpa asumsi "yang dimaksud."
- Komputer/program = ROBI literal — patuh tapi tidak paham niat.

### ROBI dramatisasi (EXP_01)

Langkah yang diucap guru ke ROBI (volunteer siswa):

1. Panaskan air ✓
2. Masukkan mie **masih dalam bungkus** ✓
3. Aduk ✓
4. Selesai — pamer mangkuk mie aneh

**Trap:** ROBI sudah patuh — kenapa gagal? → Langkah **kupas bungkus** tidak pernah diinstruksikan.

### Implisit vs eksplisit

- Manusia melakukan langkah implisit (kupas, buang sachet, matikan kompor).
- Algoritma untuk mesin: semua langkah implisit harus ditulis jika relevan.

### Urutan penting

- Contoh: masukkan gula sebelum air mendidih vs sesudah — urutan bisa mengubah hasil.
- Debate: langkah mana yang **boleh** dibalik?

### Varian rotasi paralel

- **A Teh manis:** langkah implisit = seduh, aduk, cek rasa
- **B Cuci baju:** pisahkan warna, ukuran deterjen
- **C Pesan ojek:** sebut titik jemput spesifik

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P01: mengapa harus pahami masalah dulu? | Hindari solusi prematur / salah sasaran |
| P02–P03: mesin (Google/AI) paham maksud kita? | Tidak — butuh input eksplisit & verifikasi |
| Sebelum "algoritma", kita sudah punya protokol apa? | Pahami dulu · jangan cepat percaya · klarifikasi |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan bagikan file algoritma 8 langkah jadi. Siswa **tulis ulang** algoritma sendiri untuk "teh" / "piket kelas." |
| **Live coding / live modeling** | **Live ROBI** — guru/siswa jalankan instruksi **literal** di depan kelas; dramatisasi mie (props opsional). |
| **Per baris / scope** | Setiap **langkah algoritme** = satu baris scope TTS: Tebak apa selanjutnya → Tanya implisit apa → Spelling: tulis langkah eksplisit. |
| **Recall** | Opening: ROBI muncul + recap masalah sebelum solusi. |
| **Membaca kode** | Latih **membaca urutan instruksi** — siswa baca algoritme ROBI, prediksi hasil sebelum demo fisik. |

---

## 4. Materi Inti

### Side-by-side: ROBI vs Manusia

| # | ROBI (yang diucap) | Manusia (implisit) |
|---|-------------------|-------------------|
| 1 | Panaskan air | Isi panci, nyalakan kompor, cek mendidih |
| 2 | Masukkan mie + bungkus | Kupas bungkus, buang plastik |
| 3 | Aduk | Aduk, cek keempukan |
| 4 | Selesai | Matikan kompor, tuang, tambah bumbu |

### Practice kelompok

- Topik: **buat teh** / **piket kelas** / varian rotasi
- **8 langkah** eksplisit (6 langkah jika 1 JP)
- Teman = ROBI literal — jalankan tanpa improvisasi
- Catat: di langkah ke berapa ROBI "gagal"?

### Guiding questions

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?
2. Urutan bisa dibalik?
3. Jika ROBI = program, input apa yang hilang?

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Props: mie instan / mangkuk / air (atau gambar ROBI di slide)
- Volunteer ROBI (siswa) — instruksi **hanya** dari mulut guru, tidak slide lengkap
- Papan: dua kolom ROBI vs Manusia
- **Jangan** beri siswa skrip ROBI lengkap

### Skrip live ROBI

```text
[LANGKAH 1 — Recall & ROBI masuk]
Ucapkan: "Ingat P01 — solusi prematur. Ingat P03 — mesin tidak paham niat."
Tanya siswa: "Siapa mau jadi ROBI — patuh literal?"
Scope/blok: 3 menit

[LANGKAH 2 — Instruksi live #1]
Ucapkan ke ROBI: "Panaskan air."
Tanya siswa: "Apakah ROBI sudah benar? Apa yang mungkin terlewat?"
Scope/blok: Satu perintah · ROBI acting

[LANGKAH 3 — Instruksi live #2–4]
Ucapkan: "Masukkan mie." (sengaja tidak sebut bungkus)
Ucapkan: "Aduk." · "Selesai."
Tanya siswa: "ROBI patuh — kenapa hasilnya salah?"
Scope/blok: Dramatisasi · tunggu debat

[LANGKAH 4 — Side-by-side papan]
Tulis: baris demi baris kolom ROBI vs Manusia
Ucapkan per baris (TTS)
Scope/blok: ~10 menit · siswa lengkapi langkah implisit

[LANGKAH 5 — Concept]
Tulis: ALGORITMA = urutan eksplisit
Ucapkan: "Baru hari ini kita sebut algoritma — bukan coding dulu."
Scope/blok: 5 menit

[LANGKAH 6 — Practice kelompok]
Ucapkan: "Tulis 8 langkah teh/piket — teman jadi ROBI."
Scope/blok: 20 menit · guru keliling TTS per langkah
```

---

## 6. Latihan Membaca Algoritme / Pseudocode

Proyeksikan di papan (siswa **baca**, prediksi, **tidak** copy):

```text
ALGORITMA Masak_Mie
  1. PANASKAN air hingga mendidih
  2. MASUKKAN mie ke air
  3. ADUK selama 3 menit
  4. TUANG ke mangkuk
  5. SELESAI
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Langkah implisit apa yang hilang? | Kupas bungkus, buang plastik, matikan kompor, campur bumbu |
| Urutan 2–3 bisa dibalik dengan 4? | Tidak — tuang sebelum aduk = salah |
| Jika ROBI jalankan literal langkah 2, prediksi | Mie + bungkus direbus |
| Perbaiki baris 2 saja | "MASUKKAN mie TANPA bungkus ke air" |

---

## 7. Praktik Mandiri Siswa

- Kelompok: algoritme 8 langkah (teh / piket / varian rotasi).
- Teman = ROBI — jalankan literal, catat kegagalan.
- Exit: **1 langkah** yang wajib selalu ditulis eksplisit ke depan.
- Refleksi: langkah implisit apa yang sering ketinggalan?

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Langkah terlalu abstrak ("masak mie") | Guru ROBI terlalu pintar — improvisasi sendiri |
| Melompat urutan tanpa sadar | Guru langsung beri jawaban "kupas bungkus" tanpa debat |
| Algoritme 3 langkah saja | Guru tidak rotasi varian antar paralel |
| Tertawa ROBI tapi tidak revisi instruksi | Guru pakai props berbahaya (air panas sungguhan) |
| Anggap algoritma = coding JS | Guru sebut HTML/VS Code di P04 |

---

## 9. Rujukan

- Modul: [X-S1-P04](../../../kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md)
- [EXP_01](../../../../07-experience_library/EXP_01_Robot_Mie.md) · [A Teh](../../../../07-experience_library/EXP_01_A_Teh_Manis.md) · [B Cuci](../../../../07-experience_library/EXP_01_B_Cuci_Baju.md) · [C Ojek](../../../../07-experience_library/EXP_01_C_Pesan_Ojek.md)
- MM: MM-11, MM-12
- Rubrik: **REA**, **OBS**
- Lanjutan: P05 flowchart & pseudocode

---

## 10. Checklist Exit Guru

- [ ] Live ROBI dramatisasi — bukan video saja
- [ ] TTS per langkah algoritme
- [ ] Recall P01–P03 di opening
- [ ] Siswa baca algoritme mie & temukan langkah hilang
- [ ] Practice: ROBI literal oleh teman sejawat
- [ ] Istilah "algoritma" diperkenalkan
- [ ] File materi pendukung tidak ke siswa

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Allah · ilmu terstruktur

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Alaq 96:1–5 · HR Ibn Majah (ilmu)

**Kait di kelas hari ini:** Instruksi eksplisit & urutan = tadabbur algoritma.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
