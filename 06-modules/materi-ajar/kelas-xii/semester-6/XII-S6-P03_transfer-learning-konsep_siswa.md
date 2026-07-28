# Handout Siswa — XII-S6-P03

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P03_transfer-learning-konsep.md](../../../kelas-xii/semester-6/XII-S6-P03_transfer-learning-konsep.md)

---

## 1. Tujuan pembelajaran

Dari “train dari nol wajib” → **memanfaatkan** model yang sudah belajar fitur umum.

---

## 2. Ringkasan konsep

### Mengapa transfer learning wajib untuk MA (bukan train from scratch)

Train CNN ImageNet from scratch = **jutaan foto + GPU berhari-hari** — **tidak realistis** di lab MA. Transfer learning = **memanfaatkan** model yang sudah belajar fitur umum (tepi, tekstur, bentuk), lalu **head baru** untuk kelas MA (hijab/buku/botol).

**Transformasi belajar:** Dari "harus train dari nol" → **feature extractor + classifier baru** + sikap kritis: pretrained dari data apa?

### Metafora "belajar bahasa" (modul menit 5–18)

| Tahap | Metafora | Setara ML |
|-------|----------|-----------|
| Kosakata dasar | Huruf, suku kata | Layer awal deteksi tepi/warna |
| Kalimat MA | Konteks sekolah | Head baru — kelas lokal |
| From scratch | Belajar baca dari nol tanpa guru | Train seluruh jaringan |
| Transfer | Sudah bisa baca — belajar mata pelajaran baru | Freeze backbone + train head |

Guru gambar **live** — jangan slide siap pakai.

### Feature extractor vs head baru

```text
INPUT citra
    ↓
[MobileNet backbone — pretrained ImageNet]  ← "sudah tahu fitur umum"
    ↓
[Dense / head baru — 2–3 kelas MA]           ← "yang kita train di TM"
    ↓
OUTPUT label + confidence
```

**Fine-tuning ringkas:** kadang beberapa layer akhir backbone ikut di-update — MA cukup **intuisi**; hands-on TM di P04 yang melakukan.

### Tabel banding (practice inti)

| Aspek | Train from scratch | Transfer learning |
|-------|-------------------|-------------------|
| Data | Sangat banyak | Lebih sedikit (puluhan–ratusan foto/kelas) |
| Waktu | Hari–minggu (GPU) | Menit–jam (TM di browser) |
| Hardware lab MA | Tidak cukup | **Realistis** |
| Risiko overfitting | Tinggi jika data sedikit | Lebih rendah — backbone sudah stabil |
| Risiko bias | Dari dataset sendiri | **Juga** dari dataset pretrained + sample MA |
| Kapan tidak cocok | Domain sangat beda (X-ray medis?) | Perlu expert + data khusus |

### Cognitive trap — pretrained bukan "black box gratis"

**Tanya siswa:** "MobileNet belajar dari foto apa?" → ImageNet (objek umum, bias geografis/demografi). **Sample MA 20 foto hijab** tidak menghapus bias global — dokumentasi batasan (P02, P06).

### Kapan transfer **tidak** cocok (reflect menit 65–80)

- Domain sangat berbeda (cit medis tanpa dokter pendamping).
- Butuh interpretability penuh untuk keputusan hukum/ibadah — pertimbangkan rule-based.
- Data sangat sedikit **dan** kelas sangat mirip — tetap gagal; perbaiki data bukan epoch.

### Pro/kontra untuk 1 masalah MA (practice output)

Contoh guru — **jangan** distribusi jawaban siap:

| Masalah MA | Pro transfer | Kontra / mitigasi |
|------------|--------------|-------------------|
| Absensi sampah terpilah | Deteksi botol/kertas cepat | Pencahayaan lab — fallback manual |
| Tanaman kebun sekolah | 3 spesies daun | Musim hujan — sample basah |
| Absensi wajah | — | **Privasi** — QR lebih aman (P06) |

---

## 3. Materi praktik

### Alur konseptual

```text
Recall overfitting S5
  → Experience: metafora bahasa
  → Trap: train berhari-hari di laptop sekolah
  → Clarify: feature extractor vs head
  → Concept: transfer · MobileNet cuplikan
  → Practice: tabel from scratch vs transfer
  → Reflect: kapan transfer tidak cocok?
  → Transfer: preview P04 Teachable Machine
```

### Concept MobileNet (cuplikan — tidak derive arsitektur)

MobileNet = model **ringan** untuk browser/mobile — depthwise separable conv (guru: "dirancang cepat di HP"). MA **pakai** via TM/TF.js Hub — tidak wajib hafal layer.

→ referensi: [TF.js Models — MobileNet](https://www.tensorflow.org/js/models)

→ referensi: [tfjs-models mobilenet GitHub](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

### Trap (menit 18–28)

**Asumsi:** "Harus train berhari-hari di laptop sekolah."

**Counter:** Tabel waktu — TM 50 foto/kelas ≈ menit vs from scratch ImageNet ≈ tidak mungkin di lab.

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Model pretrained = black box gratis tanpa kritik.  
**Aman:** Tanya: pretrained dari data apa? bias apa?

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall S5 overfitting — butuh data besar untuk from scratch |
| 5–18 | Experience | **Belajar bahasa**: kosakata dasar vs kalimat MA — metafora layer |
| 18–28 | Trap | “Harus train berhari-hari di laptop sekolah” |
| 28–38 | Clarify | Feature extractor vs head baru |
| 38–48 | Concept | Transfer learning · fine-tune ringkas · cuplikan MobileNet |
| 48–65 | Practice | Tabel banding: train from scratch vs transfer (waktu/data/risiko) |
| 65–80 | Reflect | Kapan transfer **tidak** cocok? |
| 80–90 | Transfer | Preview P04 hands-on |

---

## 6. Lembar kerja / latihan

### Diagram A — Label komponen

```text
[ Input 224×224×3 ]
        ↓
[ Block pretrained — "feature extractor" ]
        ↓
[ Dense 3 units softmax ]
        ↓
[ Label: hijab | buku | botol ]
```

| Pertanyaan | Kunci |
|------------|-------|
| Bagian mana yang "sudah jadi" dari ImageNet? | Block pretrained |
| Bagian mana yang disesuaikan sample MA? | Dense head |
| Output softmax — interpretasi? | Probabilitas per kelas — bukan kebenaran |

### Skenario B — Pilih strategi

```text
Tim ingin klasifikasi 3 jenis sampah di kantin MA.
Dataset: 80 foto total, laptop Chromebook lab.
```

| Pertanyaan | Kunci |
|------------|-------|
| From scratch atau transfer? | **Transfer** (TM/MobileNet) |
| Risiko utama? | Pencahayaan kantin + sample tidak representatif |

---

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
