# Handout Siswa — XII-S5-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P05_statistik-outlier.md](../../../kelas-xii/semester-5/XII-S5-P05_statistik-outlier.md)

---

## 1. Tujuan pembelajaran

Dari angka rata-rata saja → **sebaran & outlier** sebelum train.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_09 hook: feed rata-rata vs yang viral |
| 5–18 | Experience | Skor ujian kelas — 1 nilai 20 jatuhkan mean? |
| 18–28 | Trap | Mean saja untuk keputusan penting |
| 28–38 | Clarify | Mean · median · spread · outlier |
| 38–48 | Concept | Eksplorasi data sebelum model |
| 48–70 | Practice | Laporan 1 halaman dataset P03: stat + 1 grafik sederhana |
| 70–85 | Reflect | Outlier = salah atau sinyal? |
| 85–90 | Exit | 1 keputusan cleaning dari stat |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 1 keputusan cleaning dari stat
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
