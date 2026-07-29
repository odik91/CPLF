# Handout Siswa — XII-S5-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P04_vektor-jarak-kesamaan.md](../../../kelas-xii/semester-5/XII-S5-P04_vektor-jarak-kesamaan.md)

---

## 1. Tujuan pembelajaran

Dari “harus rumus SMA lengkap” → **matematika operasional** untuk ML.

---

## 2. Ringkasan konsep

### Vektor = list angka dengan makna urutan

Di ML, satu **baris fitur** = **vektor**. Urutan kolom **harus konsisten**.

Contoh siswa A: `[jam_belajar=3, skor_quiz=85]` → vektor 2 dimensi `[3, 85]`.

**Bukan** vektor jika urutan acak tiap baris — kolom 1 harus selalu arti sama.

→ referensi: [Khan Academy — Introduction to Vectors](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/linear-algebra-introduction-to-vectors)

### Jarak Euclidean (2D cukup untuk MA)

Untuk titik `A = (x1, y1)` dan `B = (x2, y2)`:

```text
jarak = √[(x2−x1)² + (y2−y1)²]
```

**Makna:** semakin kecil jarak → semakin "mirip" profil fitur.

Contoh MA: dua siswa dengan jam belajar dan skor hampir sama → jarak kecil.

Guru **tidak** wajib turunkan rumus — cukup hitung 1 contoh di papan dengan kalkulator.

→ referensi: [Khan Academy — Distance Formula](https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry/hs-geo-distance/v/distance-formula)

### Trap: skala berbeda tanpa normalisasi

Fitur 1: jam belajar (0–5). Fitur 2: skor ujian (0–100).

Jarak **didominasi** skor — jam belajar hampir diabaikan. Solusi: normalisasi 0–1 (P03) sebelum hitung jarak.

→ referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features)

### Cosine similarity (intuitif, opsional hitung)

Mengukur **sudut arah** vektor, bukan panjang. Dua vektor proporsional → cosine ≈ 1.

Contoh: rekomendasi teks/tag — "arah minat sama, skala beda."

S5: **sebutkan konsep**; hitung manual opsional untuk siswa advanced. Fokus utama **Euclidean** 2–3 dimensi.

→ referensi: [MLCC — Embeddings Similarity](https://developers.google.com/machine-learning/crash-course/embeddings/similarity)

### KNN tanpa nama rumit — "vote tetangga"

1. Simpan semua titik training (fitur + label).
2. Input baru → hitung jarak ke semua titik.
3. Ambil **K** tetangga terdekat (mis. K=3).
4. **Majority vote** label tetangga = prediksi.

Ini **bukan** deep learning — algoritma jarak + voting. Bagus untuk menunjukkan ML bisa sederhana.

→ referensi: [StatQuest — K-Nearest Neighbors](https://www.youtube.com/watch?v=HKcO3-6TYr0)

### Hubung ke tensor P06

Vektor = tensor **rank 1**. Batch banyak vektor = matrix **rank 2**. TF.js P07 akan pakai shape `[jumlah_baris, jumlah_fitur]`.

---

## 3. Materi praktik

### Timeline

```text
2 siswa "dekat" di 2 skor — plot
  → Experience: rekomendasi teman belajar
  → Trap: jarak tanpa normalisasi
  → Clarify: vektor = list angka
  → Concept: jarak · cosine (intuitif)
  → Practice: jarak 5 titik · tetangga terdekat
  → Reflect: KNN vote tetangga
  → Transfer: tensor P06
```

### Opening (menit 0–5)

Dua siswa: `(jam=2, skor=70)` vs `(jam=2.5, skor=72)` — plot di sumbu. "Dekat" secara visual.

### Experience — rekomendasi teman belajar (menit 5–15)

Setiap siswa = vektor minat `[coding, seni, olahraga]` skala 1–5. Cari pasangan **jarak terkecil** — metafora rekomendasi.

### Trap (menit 15–25)

Tambahkan fitur `uang_jajan=50000` tanpa norm — jarak didominasi uang. Tanya: "Rekomendasi masih masuk akal?"

### Practice (menit 45–70)

Dataset 5–8 titik (dari P03 atau contoh guru). Tugas:

1. Normalisasi fitur (jika belum)
2. Hitung jarak query point ke semua
3. Urutkan — sebut 3 tetangga terdekat
4. Vote label (K=3)

### Reflect KNN (menit 70–85)

Tanpa sebut "KNN" dulu — "vote tetangga." Baru hubungkan istilah.

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** ML = calculus tinggi dulu baru mulai.  
**Aman:** Mulai dari angka kecil di kertas/JS.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | 2 siswa “dekat” di 2 skor — visual di sumbu |
| 5–15 | Experience | **Rekomendasi teman belajar** — similarity sederhana |
| 15–25 | Trap | Jarak Euclidean pada skala berbeda tanpa normalisasi |
| 25–35 | Clarify | Vektor = list angka dengan makna |
| 35–45 | Concept | Jarak · cosine similarity (intuitif, opsional hitung) |
| 45–70 | Practice | Hitung jarak 5 titik · tentukan tetangga terdekat |
| 70–85 | Reflect | KNN tanpa nama — “vote tetangga” |
| 85–90 | Transfer | Hubung ke tensor P06 |

---

## 6. Lembar kerja / latihan

### Pseudocode jarak

```javascript
// Vektor A dan B — sama panjang
const A = [0.6, 0.85];  // sudah dinormalisasi
const B = [0.5, 0.90];

let sumSq = 0;
for (let i = 0; i < A.length; i++) {
  sumSq += (A[i] - B[i]) ** 2;
}
const jarak = Math.sqrt(sumSq);
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa arti `A[i] - B[i]`? | Selisih fitur ke-i |
| Mengapa `** 2`? | Kuadrat selisih — jarak Euclidean |
| Urutan eksekusi loop? | i=0,1 → akumulasi sumSq → sqrt |
| Prediksi: A dan B dekat atau jauh? | Dekat (selisih kecil) |
| Jika A=[0.6,85] tanpa norm? | Bug skala — fitur 2 dominasi |

### Baca tabel jarak

```text
Titik | jarak ke Q
P1    | 0.12
P2    | 0.45
P3    | 0.10
P4    | 0.38
P5    | 0.11
```

K=3 tetangga terdekat? P3, P5, P1 (0.10, 0.11, 0.12). Label P3,P5,P1 = `{A,A,B}` → vote **A**.

→ referensi: [MDN — Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
