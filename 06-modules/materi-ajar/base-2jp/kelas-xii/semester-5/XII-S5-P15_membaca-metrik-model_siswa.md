# Handout Siswa — XII-S5-P15

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P15_membaca-metrik-model.md](../../../kelas-xii/semester-5/XII-S5-P15_membaca-metrik-model.md)

---

## 1. Tujuan pembelajaran

Dari angka di layar → **interpretasi** untuk pengguna non-teknis.

---

## 2. Ringkasan konsep

Guru **tidak** perlu rumus precision/recall — cukup **terjemahkan angka** ke bahasa wali kelas / pengguna awam.

| Metrik | Intuitif untuk MA | Bahasa yang menyesatkan |
|--------|-------------------|-------------------------|
| **Loss** | "Skor kesalahan" — turun = belajar (biasanya) | "Loss kecil = pasti benar di dunia nyata" |
| **Accuracy** | "Berapa % tebakan benar di data yang dilatih" | "Akurasi 95% = model pintar" tanpa konteks N |
| **Overfit** | Hafal latihan, gagal di soal baru | "100% = hebat" |
| **Precision/recall** (opsional) | "Dari yang dibilang positif, berapa benar?" / "Dari yang seharusnya positif, ketemu berapa?" | Pakai istilah tanpa contoh MA |

**Substansi kunci:**

1. Angka di layar ≠ bukti aman di lapangan — **konteks data** wajib disebut.
2. Jurnal 5 kalimat: "Apa arti angka ini **untuk pengguna**?"
3. 1 prediksi salah dianalisis — kait ke dokumen batasan P14.
4. Kejujuran batasan = **amanah** (CXII-C1/C2 preview).
5. Pertemuan ini **memperkuat** P10 — bukan duplikat teori; fokus **project nyata**.

**Hubungan spiral:** P10 = konsep loss/overfit → P13 = angka muncul di project → P15 = **terjemahan** → P14/P18 = **komunikasi** ke audiens.

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** Angka di console / UI  
**Ke:** **Narasi terukur** yang aman untuk non-teknis + analisis 1 kegagalan.

### Experience — Hoaks "99% akurat"

Siapkan 2–3 contoh (screenshot blur — bukan promosi produk):

| Contoh | Pertanyaan ke siswa |
|--------|---------------------|
| Iklan app "99% deteksi" | 99% dari **berapa** kasus? Siapa yang tes? |
| Posting "AI nilai tugas sempurna" | Data training dari mana? Salah prediksi dampaknya? |
| Project teman "akurasi 100%" | Berapa baris data? Overfit? |

### Concept ringkas (30 menit max)

**Loss:** "Semakin kecil, model semakin cocok dengan data latih — belum tentu cocok di luar."

**Accuracy:** "Dari N contoh latih, benar X — sisanya salah atau ragu."

**Confusion sederhana (2×2 opsional):**

```text
                 Prediksi: A    Prediksi: B
Aktual: A           TP             FN
Aktual: B           FP             TN
```

Contoh MA: prediksi "lulus remedial" — salah prediksi = siswa stres atau terlewat bantuan.

**Precision/recall:** Hanya jika kelas siap — analogi: "Dari yang model bilang 'rajin', berapa benar?" / "Dari yang benar-benar rajin, ketemu berapa?"

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Kartu "95% akurat" — debat |
| 5–15 | Experience | Hoaks medsos — 2 contoh |
| 15–30 | Concept | Loss · accuracy · confusion mini |
| 30–50 | Practice | Tulis ulang metrik PRJ untuk wali kelas |
| 50–70 | Practice | Analisis 1 prediksi salah |
| 70–90 | Reflect | Kejujuran = amanah · update batasan |

### Template jurnal 5 kalimat (papan)

```text
1. Metrik utama project saya: ___ (loss/accuracy, nilai, N data)
2. Arti untuk pengguna awam: "Model benar sekitar ___ dari ___ kasus latih"
3. Yang TIDAK boleh disimpulkan: ___
4. Satu prediksi salah terjadi karena: ___
5. Langkah mitigasi pengguna: ___
```

### Paragraf wali kelas — contoh transformasi live

| Buruk | Baik |
|-------|------|
| "Model AI kami akurat 92%." | "Dari 50 contoh nilai semester lalu di sekolah kami, model menebak benar 46 kali. Masih bisa salah jika pola berbeda." |
| "Loss sudah kecil." | "Skor kesalahan turun saat latihan — artinya model belajar pola data kami, bukan jaminan di semester baru." |

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 95% akurasi — kapan menyesatkan? |
| 5–15 | Experience | **Hoaks “99% akurat”** di medsos |
| 15–30 | Concept | Precision/recall intuitif (opsional) · confusion sederhana |
| 30–50 | Practice | Tulis ulang metrik PRJ untuk wali kelas (bahasa awam) |
| 50–70 | Practice | 1 prediksi salah — analisis kenapa |
| 70–90 | Reflect | Kejujuran batasan = amanah |

---

## 5. Lembar kerja / latihan

### Snippet A — Console log training

```text
Epoch 1 / 10 — loss: 0.82 — acc: 0.55
Epoch 5 / 10 — loss: 0.21 — acc: 0.91
Epoch 10 / 10 — loss: 0.02 — acc: 1.00
(data latih: 12 baris, 2 kelas)
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Tren loss? | Turun — model belajar data latih |
| acc 1.00 — waspada? | **Ya** — data sangat kecil, overfit likely |
| Kalimat aman untuk wali kelas? | "Belajar dari 12 contoh — masih eksperimental" |
| Klaim terlarang? | "Model sempurna / selalu benar" |

### Snippet B — UI metrik

```html
<div class="stats">
  <p>Akurasi: 94.7%</p>
  <p>Powered by TensorFlow.js</p>
</div>
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Info yang hilang? | N data, train vs test, kapan salah |
| Tambah 1 baris disclaimer | Contoh: "Hasil latih — verifikasi manual" |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Kickoff project — janji tim & proses jujur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
