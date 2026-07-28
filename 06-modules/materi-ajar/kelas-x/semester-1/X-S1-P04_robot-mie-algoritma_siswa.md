# Handout Siswa — X-S1-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P04_robot-mie-algoritma.md](../../../kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md)

---

## 1. Tujuan pembelajaran

Dari “komputer paham maksud” → “instruksi eksplisit berurutan.”

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Pertanyaan pemandu

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?  
2. Urutan bisa dibalik?  
3. Jika ROBI = program, input apa yang hilang?

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. 1 langkah yang wajib ditulis eksplisit
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
