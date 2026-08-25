# Handout Siswa — XII-S5-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P11_project-s5-kickoff.md](../../../kelas-xii/semester-5/XII-S5-P11_project-s5-kickoff.md)

---

## 1. Tujuan pembelajaran

Dari latihan tensor → **produk** web + model + batasan tertulis.

---

## 2. Ringkasan konsep

### Transformasi kickoff

**Dari:** Latihan tensor/model terisolasi (P07–P10)  
**Ke:** **Produk web** = data + model TF.js kecil + **dokumen batasan model** tertulis.

### Dua opsi PRJ S5

| PRJ | Inti | Capability emphasis |
|-----|------|---------------------|
| **[PRJ-XII-S5-01](../../../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md)** — Klasifikasi Tabular Mini | Dataset ≥2 kelas → dense TF.js → prediksi + batasan | CXII-T1, T2, B2 |
| **[PRJ-XII-S5-02](../../../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md)** — Prediksi Kategori | Rule-based **vs** model mini — banding + pilih + demo | CXII-T2, B1 |

**Rotasi varian** antar kelas paralel (A/B/C di file PRJ) — cegah copy antar kelas.

### DoD ringkas (guru hafalkan — siswa baca PRJ)

**PRJ-01:**

- Pipeline end-to-end (data → tensor → train → predict)
- Model dense **sangat kecil** — train browser
- Loss/akurasi sederhana + 3 prediksi uji
- **Batasan model** tertulis — apa yang **tidak** boleh diklaim

**PRJ-02:**

- Dua pendekatan: rule-based + model (atau transfer sederhana)
- Tabel banding kelebihan/kekurangan
- Pilih satu untuk demo produk + alasan tertulis

### Template Batasan Model (wajib PRJ-01 & relevan PRJ-02)

Siswa isi 1 halaman — **bukan** opsional:

```text
1. Data: sumber, jumlah baris, kelas, fitur
2. Model: arsitektur (layer, units), epochs dipakai
3. Metrik: akurasi train vs test (angka jujur)
4. Yang TIDAK bisa model ini:
   - Tidak untuk data di luar domain (contoh: ...)
   - Tidak klaim medikal/hukum/...
   - Tidak akurat jika input ...
5. Overfit: tanda yang mungkin terjadi pada project saya
6. Keputusan etis: siapa terdampak jika prediksi salah?
```

Guru **modelkan 1 baris** live di papan — siswa lengkapi sendiri.

### Batasan model template (arsitektur)

| Parameter | Batas MA S5 |
|-----------|-------------|
| Layer dense | 1–2 hidden max |
| Units | 4–16 per layer |
| Epochs train demo | 10–20 (eksperimen overfit boleh lebih di P10 style — dokumentasikan) |
| Data | ≥40 baris, ≥2 kelas, buatan/fiktif OK |
| Framework | TF.js browser — **bukan** copy notebook Python |

### Acceptance criteria — contoh measurable

**PRJ-01:**

- [ ] Dataset terdokumentasi README (sumber, kolom, kelas)
- [ ] Pra-proses dijelaskan (normalisasi/encoding)
- [ ] Model compile + fit jalan — log loss terlihat
- [ ] UI/input: user bisa uji ≥1 prediksi
- [ ] Dokumen batasan ≥5 poin jujur

**PRJ-02:**

- [ ] Rule-based jalan untuk ≥5 contoh
- [ ] Model mini jalan OR justified skip dengan alasan
- [ ] Tabel banding ≥3 baris (kriteria, rule, model)
- [ ] Keputusan produk + alasan 1 paragraf

### Milestone P12 (exit hari ini)

- Dataset final / rencana data
- Spec + acceptance 3+ checkbox
- Skeleton HTML + CDN TF.js (file kosong/script placeholder)
- **Bukan** model trained penuh — itu P13

### Kickoff ≠ build penuh

90 menit = **perencanaan + data lock + skeleton** — guru facilitator, bukan coding solusi.

---

## 3. Materi praktik

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–10 | Opening | Present 2 PRJ — **tanpa demo app jadi** |
| 10–25 | Rubrik + batasan | DoD + template batasan model |
| 25–40 | Pilih PRJ + spec | Keliling — clarifying only |
| 40–55 | Feedback spec | 1 putaran approve/potong scope |
| 55–75 | Data + skeleton | Dataset lock; HTML+CDN placeholder |
| 75–90 | Exit | Milestone P12 checklist |

### Spec 5 poin (siswa tulis)

1. Masalah & user
2. Input (fitur/data)
3. Output (prediksi/kategori)
4. Pendekatan (PRJ-01 dense / PRJ-02 rule vs model)
5. Batasan awal (scope out)

### Skeleton yang **boleh** di papan

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script>
  // TODO: load dataset (JSON/CSV)
  // TODO: preprocess → xs, ys
  // TODO: build sequential model — dense kecil
  // TODO: compile + fit (epochs 10-20)
  // TODO: predict + tampilkan UI
</script>
```

### Skeleton **dilarang** bagikan

- Repo "PRJ-S5-nilai-100"
- `model.json` trained siap pakai
- Notebook 200 baris copas tutorial iris

→ referensi: [Models guide](https://www.tensorflow.org/js/guide/models) — siswa baca sendiri di rumah, tidak dicopas massal

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | 2 PRJ + varian A/B/C |
| 10–25 | Concept | DoD · rubrik · **wajib dokumen batasan** |
| 25–40 | Practice | Pilih PRJ + spec + acceptance |
| 40–55 | Clarify | Guru feedback spec |
| 55–75 | Practice | Data final + skeleton HTML/TF.js |
| 75–90 | Exit | Milestone P12 |

---

## 5. Lembar kerja / latihan

> Kickoff — latihan **membaca spec & batasan**, bukan kode panjang.

### Snippet A — Spec vague

```text
Project: Klasifikasi AI super akurat untuk semua siswa Indonesia.
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | Scope impossible; tidak measurable |
| Perbaiki 1 baris | "Klasifikasi lulus/tidak dari 4 fitur skor fiktif 50 baris kelas XII" |

### Snippet B — Acceptance lemah

```text
[ ] Model bagus
[ ] Akurasi tinggi
[ ] UI keren
```

| Pertanyaan | Kunci |
|------------|-------|
| AC subjektif? | Semua — tidak bisa centang konsisten |
| Contoh AC kuat | "[ ] Log loss muncul di console setelah fit 15 epoch" |

### Snippet C — Batasan kosong

```text
Batasan Model: (kosong)
```

| Pertanyaan | Kunci |
|------------|-------|
| Lulus DoD PRJ-01? | **Tidak** — wajib isi |
| Minimal 1 poin | "Hanya untuk data fiktif MA — bukan keputusan resmi" |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 8. Materi pendamping BRG

- [BRG-01](../../../materi-ajar/jalur-kelanjutan/BRG-01_siswa.md)
- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
