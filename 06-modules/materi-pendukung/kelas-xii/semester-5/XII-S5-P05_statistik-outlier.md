# Materi Pendukung Guru — XII-S5-P05 Statistik: Mean, Outlier

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P05 |
| Modul pertemuan | [XII-S5-P05_statistik-outlier.md](../../../kelas-xii/semester-5/XII-S5-P05_statistik-outlier.md) |
| Semester | 5 · Pertemuan 5/18 |
| Unit | XII5.4 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-T1 |
| EXP | [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md) |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Mean sebagai balancing point | → referensi: [Khan Academy — Mean](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-mad-basics/v/mean-as-the-balancing-point) |
| Median & quartiles | → referensi: [Khan Academy — Median](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/median-quartiles/v/median-and-quartiles-from-tukey-bplot) |
| Mean absolute deviation (spread) | → referensi: [Khan Academy — Mean Absolute Deviation](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-mad-basics/v/mean-absolute-deviation) |
| Outliers intro | → referensi: [Khan Academy — Interquartile Range](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/box-whisker-plots/v/reading-box-and-whisker-plots) |
| StatQuest — outliers | → referensi: [StatQuest — Outliers](https://www.youtube.com/watch?v=4qGGJTL8GTo) |
| EDA before modeling | → referensi: [MLCC — Data Characteristics](https://developers.google.com/machine-learning/crash-course/training-data/data-characteristics) |
| EXP_09 spiral | → referensi: [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md) |
| Chart sederhana (opsional) | → referensi: [Chart.js — Getting Started](https://www.chartjs.org/docs/latest/getting-started/) |

**Waktu baca minimum guru:** 50 menit (Khan mean/median/MAD + EXP_09 + StatQuest outlier).

---

## Pengetahuan yang Dikuasai Guru

### Eksplorasi data sebelum model

Training tanpa lihat distribusi = **terbang buta**. Statistik deskriptif = **kaca** sebelum P08 `fit`. Pertemuan ini **bukan** ujian statistik SMA — fokus **keputusan cleaning** dari data P03.

→ referensi: [MLCC — Data Characteristics](https://developers.google.com/machine-learning/crash-course/training-data/data-characteristics)

### Mean (rata-rata)

```text
mean = jumlah nilai / banyak nilai
```

**Sensitif outlier:** satu nilai 20 pada skor ujian 70–90 → mean turun drastis.

Demo kelas: 10 nilai 85 + satu 20 → mean ≈ 79.1 vs median 85.

→ referensi: [Khan Academy — Mean](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-mad-basics/v/mean-as-the-balancing-point)

### Median (nilai tengah)

Urutkan data — ambil tengah. **Robust** terhadap outlier ekstrem.

Gunakan when: distribusi miring, outlier valid tapi jarang.

### Spread (sebaran)

**MAD (Mean Absolute Deviation)** intuitif: rata-rata jarak dari mean.

Spread besar = data heterogen — model satu kelas mungkin tidak cukup.

→ referensi: [Khan Academy — Mean Absolute Deviation](https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-mad-basics/v/mean-absolute-deviation)

### Outlier — salah input atau sinyal?

| Jenis | Contoh | Tindakan |
|-------|--------|----------|
| Error input | Skor 1000 | Fix atau drop + README |
| Valid ekstrem | Siswa olimpiade jam belajar 12 | **Keep** + dokumentasi |
| Sinyal penting | Satu transaksi fraud | Keep — justru yang dicari |

Trap P03/P05: **hapus outlier agar rata-rata bagus** = censoring.

→ referensi: [StatQuest — Outliers](https://www.youtube.com/watch?v=4qGGJTL8GTo)

### EXP_09 spiral — feed vs rata-rata

Hook opening: "Feed TikTok rata-rata atau viral?"

- Platform optimasi **engagement**, bukan mean durasi tonton.
- Satu video viral = outlier yang **mengubah** rekomendasi berikutnya — analogi outlier mengubah mean/model.

**Varian rotasi** (pilih 1 per kelas paralel):

| Varian | Kasus |
|--------|-------|
| EXP_09_A | YouTube autoplay |
| EXP_09_B | Rekomendasi Shopee |
| EXP_09_C | Playlist Spotify |

→ referensi: [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md)

Patuhi kebijakan digital MA — **data dummy/kartu**, bukan scroll panjang di kelas.

### Grafik sederhana untuk laporan

Siswa buat **1 grafik**: dot plot, bar chart frekuensi label, atau box plot sederhana (spreadsheet cukup). Chart.js opsional — tidak wajib coding.

→ referensi: [Chart.js — Getting Started](https://www.chartjs.org/docs/latest/getting-started/)

---

## Recall Spiral

| Pertanyaan | Inti |
|------------|------|
| P03: Cleaning vs censoring? | Cleaning = fix error; censoring = hapus karena tidak suka |
| P03: README — keputusan outlier? | Harus terdokumentasi |
| P04: Normalisasi sebelum jarak? | Skala setara |
| EXP_09 (XI/XII): Feed beda kenapa? | Data perilaku → rekomendasi → loop |
| P02: GIGO? | Statistik buruk → keputusan cleaning salah |

---

## Etika Penyampaian

| Aturan | Penerapan P05 |
|--------|---------------|
| **No copas** | Laporan 1 halaman **dari dataset sendiri** — bukan template laporan guru. |
| **Live modeling** | Hitung mean/median **live** di papan dengan angka siswa (volunteer). |
| **EXP_09** | Kartu/dummy — hindari kecanduan scroll; fokus literasi mekanisme. |
| **TTS** | Mean → median → spread → outlier — satu scope per istilah. |
| **Sensitif** | Jangan shame siswa dengan outlier "nilai jelek" — pakai data fiktif atau agregat kelas. |

---

## Materi Inti

### Timeline

```text
EXP_09 hook: feed vs rata-rata
  → Experience: skor ujian — nilai 20 jatuhkan mean?
  → Trap: mean saja untuk keputusan
  → Clarify: mean · median · spread · outlier
  → Concept: EDA sebelum model
  → Practice: laporan 1 halaman dataset P03 + 1 grafik
  → Reflect: outlier salah atau sinyal?
  → Exit: 1 keputusan cleaning dari stat
```

### Opening EXP_09 (menit 0–5)

"Feed kamu isinya video rata-rata 30 detik — kenapa yang muncul 3 menit viral?"

Kaitkan: sistem tidak optimasi **mean** — optimasi **klik/tonton**; outlier viral mengubah pola.

### Experience skor ujian (menit 5–18)

10 nilai: 78, 80, 82, 79, 81, 83, 77, 80, 84, **20**.

Hitung mean vs median bersama-sama.

### Trap (menit 18–28)

"Siswa mean < 75 kena remedial" — apakah adil jika satu 20 = salah input?

### Practice laporan (menit 48–70)

**Deliverable 1 halaman** per kelompok dari dataset P03:

1. N baris, 2 kelas label
2. Mean + median **minimal 1 fitur numerik**
3. Spread (range atau MAD — pilih salah satu, jelaskan)
4. Identifikasi 1–2 outlier kandidat
5. **1 grafik** sederhana
6. **1 keputusan cleaning** tertulis

### Reflect (menit 70–85)

Outlier = salah atau sinyal? — contoh fraud, olimpiade, viral video.

---

## Alur Live Coding / Live Modeling

Spreadsheet + kertas — opsional snippet JS `reduce` untuk mean (bukan fokus).

### Skrip TTS

```text
[LANGKAH 1 — EXP_09 hook]
Kartu profil A vs B — feed berbeda
Tanya: input? output? loop?
Scope: 5 menit · no scroll HP

[LANGKAH 2 — Mean live]
10 angka di papan — siswa tebak mean
Tambah outlier 20 — ulang mean & median
Scope: 12 menit

[LANGKAH 3 — Trap keputusan]
"Satu angka jatuhkan mean — keputusan apa?"
TTS: Tebak dampak → Tanya input error? → Spelling median
Scope: 10 menit

[LANGKAH 4 — Spread]
Range = max-min atau MAD — demo cepat
Scope: 10 menit

[LANGKAH 5 — EDA dataset P03]
Kelompok buka file sendiri — stat + grafik
Scope: 22 menit

[LANGKAH 6 — Exit keputusan]
1 kalimat: keep/drop/fix outlier X karena …
Scope: 5 menit
```

---

## Latihan Membaca Kode/Data

### Baca output stat spreadsheet

```text
Fitur: jam_belajar
N=42 | mean=3.2 | median=3.0 | min=0.5 | max=12 | MAD=1.1
Outlier kandidat: baris id=17 (12), id=31 (0.5)
Label id=17: "lulus" (olimpiade)
```

| Pertanyaan | Kunci |
|------------|-------|
| Mean > median — distribusi? | Miring kanan (beberapa nilai besar) |
| Hapus id=17 otomatis? | Tidak — valid + label lulus; dokumentasi |
| id=31 (0.5) — tindakan? | Cek typo vs malas — README |
| Keputusan cleaning? | Keep 17; investigate 31 |

### Baca snippet JS mean (opsional)

```javascript
const data = [78, 80, 82, 79, 81, 83, 77, 80, 84, 20];
const mean = data.reduce((a, b) => a + b, 0) / data.length;
const sorted = [...data].sort((a, b) => a - b);
const mid = Math.floor(sorted.length / 2);
const median = sorted.length % 2
  ? sorted[mid]
  : (sorted[mid - 1] + sorted[mid]) / 2;
```

Prediksi: mean ≈ 72.4, median = 80.

→ referensi: [MDN — Array reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

## Praktik Mandiri Siswa

- Laporan 1 halaman + grafik (PDF/foto)
- Update README dataset jika keputusan cleaning baru
- **Exit ticket:** 1 keputusan cleaning dari statistik (keep/drop/fix + alasan)
- Refleksi EXP_09: 2 kalimat — feed vs rata-rata

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Hanya tulis mean — ignore median | Guru tidak tuntut spread |
| Hapus outlier tanpa stat/README | Guru ulangi trap P03 |
| Grafik hiasan tanpa caption | Guru tidak minta interpretasi 1 kalimat |
| EXP_09 jadi demo scroll TikTok | Guru lupa kebijakan digital |
| Mean untuk data kategorik | Guru tidak koreksi |
| Laporan copas ChatGPT | Guru terima tanpa baca dataset asli |

---

## Checklist Exit Guru

- [ ] EXP_09 hook — spiral terpasang (varian rotasi OK)
- [ ] Mean vs median live — outlier demo
- [ ] Recall P03 cleaning vs censoring
- [ ] Laporan dari dataset P03 — stat + 1 grafik
- [ ] Exit: keputusan cleaning tertulis
- [ ] Tidak shame nilai siswa — data fiktif/agregat
- [ ] Tidak ada template laporan penuh di WA
- [ ] README updated jika ada keputusan baru

---

## Rujukan modul

- Modul: [XII-S5-P05](../../../kelas-xii/semester-5/XII-S5-P05_statistik-outlier.md)
- EXP: [EXP_09](../../../07-experience_library/EXP_09_TikTok_Feed.md)
- Sebelumnya: [XII-S5-P04](./XII-S5-P04_vektor-jarak-kesamaan.md)
- Berikutnya: [XII-S5-P06](./XII-S5-P06_tensor-dari-scalar.md)
