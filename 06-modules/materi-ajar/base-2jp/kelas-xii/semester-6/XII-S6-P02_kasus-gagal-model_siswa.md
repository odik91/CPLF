# Handout Siswa — XII-S6-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P02_kasus-gagal-model.md](../../../kelas-xii/semester-6/XII-S6-P02_kasus-gagal-model.md)

---

## 1. Tujuan pembelajaran

Dari “demo sukses saja” → **kejujuran** — model gagal adalah data desain.

---

## 2. Ringkasan konsep

### Mengapa "demo gagal" wajib di CPLF XII

Industri dan iklan menampilkan **demo sukses saja**. Capability CXII-C1 menuntut **kejujuran produk**: model salah = **data desain**, bukan malu. P02 membangun budaya portofolio: **1 demo gagal direkam** = bukti maturity (jembatan ke P11/P14 capstone).

**Transformasi belajar:** Dari "akurasi tinggi = siap pakai" → **false positive/negative intuitif** + **human-in-the-loop** + UI "tidak yakin".

### Istilah tanpa rumus berat

| Istilah | Plain Indonesian untuk MA |
|---------|---------------------------|
| **Confidence** | Angka 0–1 (atau %) seberapa yakin model — **bukan** kebenaran mutlak |
| **Threshold** | Batas minimal confidence — di bawahnya tampilkan "tidak yakin" |
| **False positive** | Model bilang "ya" padahal seharusnya "tidak" (alarm palsu) |
| **False negative** | Model bilang "tidak" padahal seharusnya "ya" (terlewat) |
| **Human-in-the-loop** | Manusia konfirmasi sebelum aksi penting — AI hanya saran |

Contoh MA absensi citra: FP = siswa A dikenali sebagai B; FN = siswa hadir tapi tidak tercatat.

### Experience — filter wajah salah warna kulit / pencahayaan gelap

**Bukan** untuk menyalahkan siswa — tunjukkan **keterbatasan data & pencahayaan**. Siapkan 3 foto/kondisi:

1. Pencahayaan terang frontal — prediksi "benar"
2. Gelap / backlight — prediksi salah atau confidence rendah
3. Objek di luar kelas training — label ngawang

Guru **sengaja** tunjukkan salah — tanya "Siapa yang rugi jika model salah?"

→ referensi: [Google Responsible AI Practices](https://ai.google/responsibility/responsible-ai-practices/) — fairness & testing

### Katalog 5 kasus gagal (practice inti)

Siswa isi untuk pipeline P01 + mitigasi 1 baris:

| # | Kasus gagal | Penyebab hipotesis | Mitigasi UI 1 baris |
|---|-------------|-------------------|---------------------|
| 1 | Izin kamera ditolak | User / policy browser | Pesan + fallback upload foto |
| 2 | Confidence < 0.5 | Pencahayaan / out-of-distribution | Tampilkan "tidak yakin — coba lagi" |
| 3 | Label salah kelas | Training sample sedikit | Minta konfirmasi user |
| 4 | Latensi > 3 detik | Resolusi besar / laptop lemot | Loading spinner + turunkan resolusi |
| 5 | Prediksi bias warna kulit | Dataset tidak representatif | Dokumentasi batasan + alternatif QR |

### UI "tidak yakin" — mock cukup untuk P02

Belum perlu model TM sungguhan — **mock confidence** OK:

```javascript
function tampilkanHasil(label, confidence) {
  const THRESHOLD = 0.6;
  if (confidence < THRESHOLD) {
    statusEl.textContent = "Tidak yakin — coba pencahayaan lebih terang";
    return;
  }
  statusEl.textContent = `${label} (${(confidence * 100).toFixed(0)}%)`;
}
```


### Guiding questions (modul) — jawaban guru

1. **Siapa yang rugi jika model salah?** Pengguna, subjek foto, sekolah (reputasi), yang di-absen salah.
2. **Fallback jika tidak yakin?** Manual input, QR, konfirmasi guru, skip fitur AI.
3. **Bukti apa ke pengguna?** Confidence + demo gagal + paragraf batasan (rubrik E1).

### Koneksi rubrik & capstone

- **E1 level 3:** menulis & mendemo batasan + kasus gagal proaktif.
- P02 exit: **1 demo gagal direkam** — mulai folder portofolio capstone.

---

## 3. Materi praktik

### Timeline fasilitator

```text
Opening: 3 prediksi salah sengaja
  → Experience: pencahayaan / bias kulit
  → Trap: model selalu benar di iklan
  → Clarify: FP/FN intuitif
  → Concept: confidence · threshold · human-in-the-loop
  → Practice: katalog 5 kasus + mitigasi
  → Practice: UI tidak yakin (mock)
  → Exit: 1 demo gagal direkam
```

### Trap (menit 18–28)

**Asumsi:** "Akurasi 95% di slide = produk aman."

**Counter:** "5% dari 1000 siswa = 50 orang salah — siapa 50 itu?" Kalkulator sederhana di papan.

→ referensi: [MLCC — Confusion Matrix](https://developers.google.com/machine-learning/crash-course/classification/confusion-matrix)

### Concept confidence & threshold

→ referensi: [MLCC — Thresholding](https://developers.google.com/machine-learning/crash-course/classification/thresholding)

Gambar di papan:

```text
confidence 0.92 → tampilkan label (yakin)
confidence 0.41 → "tidak yakin" + minta ulang
confidence 0.55 + threshold 0.6 → sama: tidak yakin
```

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Akurasi tinggi = produk siap pakai.  
**Aman:** Apresiasi usaha; wajibkan demo gagal.

---

## 5. Pertanyaan pemandu

1. Siapa yang rugi jika model salah?  
2. Apa fallback jika prediksi tidak yakin?  
3. Bukti apa yang kamu tunjukkan ke pengguna?

---

## 6. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 3 prediksi salah (sengaja) — tebak mengapa |
| 5–18 | Experience | **Filter wajah salah warna kulit** / pencahayaan gelap — diskusi |
| 18–28 | Trap | “Model selalu benar” di iklan |
| 28–38 | Clarify | False positive/negative intuitif (tanpa rumus berat) |
| 38–48 | Concept | Confidence · threshold · human-in-the-loop |
| 48–65 | Practice | Katalog 5 “kasus gagal” untuk pipeline P01 + mitigasi 1 baris |
| 65–80 | Practice | UI: tampilkan “tidak yakin” jika confidence rendah (mock OK) |
| 80–90 | Exit | 1 demo gagal direkam untuk portofolio |

---

## 7. Lembar kerja / latihan

### Snippet A — Threshold

```javascript
const THRESHOLD = 0.6;
const confidence = 0.55;
const label = "Buku";

if (confidence < THRESHOLD) {
  console.log("Tidak yakin");
} else {
  console.log(label, confidence);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "Tidak yakin" |
| Ubah THRESHOLD jadi 0.5? | Tampil `Buku 0.55` |

### Snippet B — Human-in-the-loop

```javascript
function aksiSetelahPrediksi(label, confidence) {
  if (confidence < 0.7) return tampilkanFormManual();
  return tampilkanKonfirmasi(`Yakin ${label}?`, () => simpan(label));
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Confidence 0.65 — jalur? | Form manual |
| Mengapa konfirmasi sebelum simpan? | Aksi irreversible — spiral P05 |

### Snippet C — False positive scenario

```text
Model absensi: prediksi "Hadir" untuk siswa yang belum masuk (confidence 0.88)
```

| Pertanyaan | Kunci |
|------------|-------|
| FP atau FN? | **FP** — positif palsu (hadir padahal tidak) |
| Mitigasi? | Konfirmasi QR / guru |

---

## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS An-Nisa 4:58

**Kait di kelas hari ini:** AI/CV moderat, jujur, dan manfaat komunitas MA.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
