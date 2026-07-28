# Handout Siswa — XII-S6-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P06_etika-privasi-bias.md](../../../kelas-xii/semester-6/XII-S6-P06_etika-privasi-bias.md)

---

## 1. Tujuan pembelajaran

Dari “teknologi netral” → **konsekuensi** solusi untuk manusia & nilai MA.

---

## 2. Ringkasan konsep

### Mengapa P06 wajib sebelum capstone (P08)

TEC tinggi + etika kosong = **gagal capaian XII** (CXII-C1). Modul capstone P08–P14 **mensyaratkan** template etika terisi, QR vs wajah dipahami, gate rubrik E1–E4 minimal level 2.

**Transformasi belajar:** Dari "teknologi netral" → **konsekuensi** untuk manusia, komunitas MA, dan amanah data.

### Rubrik Etika CPLF — ringkasan guru (baca file lengkap)

→ referensi: [09_Rubrik_Etika_AI.md](../../../../09-rubrik/09_Rubrik_Etika_AI.md)

| Dimensi | Fokus P06 | Level minimum capstone |
|---------|-----------|------------------------|
| **E1** Batasan & kejujuran | Demo gagal P02 — jangan overclaim | ≥ 2 (E1=1 → project dikembalikan) |
| **E2** Privasi & data | **Inti hari ini** — consent, retention, QR vs wajah | ≥ 2 (kamera/pribadi: **≥ 3 disarankan**) |
| **E3** AI partner | Preview P07 — klarifikasi kode AI | ≥ 2 |
| **E4** Dampak & tanggung jawab | Bias, salah prediksi, gotong royong | ≥ 2 |

**Gate:** E1 level 1 (menyembunyikan gagal) = **project dikembalikan** meski demo teknis mulus.

### Studi kasus MA — Absensi wajah vs QR (modul menit 5–20)

| Aspek | Absensi wajah (biometrik) | Absensi QR / manual |
|-------|---------------------------|---------------------|
| **Privasi** | Data wajah = sensitif; sulit "dihapus" | Token QR bisa rotate; minimal biometrik |
| **Aurat / sensitivitas MA** | Kamera wajah penuh — diskusi dengan siswa & sekolah | Scan kode — tidak identifikasi wajah |
| **Consent** | Harus eksplisit + kebijakan sekolah | Lebih ringan — tetap jelaskan data log |
| **Risiko salah (P02)** | False positive absensi palsu | QR bisa dibagikan — mitigasi berbeda |
| **Rekomendasi CPLF MA** | **Hindari** sebagai default capstone | **Utamakan** untuk project absensi sekolah |

Guru **facilitate**, bukan fatwa — undang perspektif siswa + aturan sekolah. Jika koordinator hadir 15 menit (modul) — ideal.

→ referensi: [Google Responsible AI Practices](https://ai.google/responsibility/responsible-ai-practices/) — privacy & fairness

→ referensi: [UNESCO AI Ethics](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics) — human rights & privacy framing

### Consent · minimasi data · retention (menit 30–40)

| Prinsip | Plain Indonesian | Contoh implementasi MA |
|---------|------------------|------------------------|
| **Consent** | Izin informed sebelum ambil data | Layar onboarding P05 — checkbox bukan pre-checked |
| **Minimasi** | Ambil **sesedikit mungkin** | QR vs stream wajah 24/7 |
| **Retention** | Simpan **seseperlunya** | "Foto training TM dihapus setelah export" |
| **Akses** | Siapa yang boleh lihat | Hanya tim project + guru — bukan publik WA |
| **Penghapusan** | Rencana hapus | Tanggal hapus folder model demo |

### Bias — koneksi P02 & P03

- Dataset tidak representatif → salah pada warna kulit / pencahayaan (P02 experience).
- Pretrained ImageNet → bias geografis (P03).
- **Bias ≠ selalu sengaja** — tetap tanggung jawab desain mitigasi.

→ referensi: [Google ML Fairness overview](https://developers.google.com/machine-learning/crash-course/fairness/overview)

### Template Etika (minimum — siswa isi 1 halaman)

Distribusikan **struktur**, bukan jawaban:

```text
1. Masalah — apa yang diselesaikan?
2. Pengguna — siapa? (siswa, guru, tamu?)
3. Data dikumpulkan — apa saja? (foto, video, log, lokasi?)
4. Lama simpan — kapan dihapus?
5. Siapa akses — tim, guru, pihak luar?
6. Risiko salah — FP/FN (P02) — siapa rugi?
7. Mitigasi — threshold, konfirmasi, fallback manual (P05)
8. Alternatif lebih aman — QR, input manual, rule-based
```

Paragraf ini menjadi **lampiran capstone** — gate P08 checklist panduan CV.

### Gotong royong & amanah data teman (menit 70–85)

- Dilarang foto sample TM teman tanpa izin.
- Model export berisi pola dari wajah teman = **data pribadi**.
- Share model ZIP ke WA publik = **bocor data training**.

### 1 keputusan etis untuk capstone (exit)

Contoh keputusan baik:

- "Tim kami pakai QR bukan wajah karena …"
- "Foto training dihapus setelah …"
- "Tidak simpan video stream — hanya label prediksi sementara"

---

## 3. Materi praktik

### Timeline fasilitator

```text
Do Now: 1 manfaat + 1 risiko AI di MA
  → Experience: absensi wajah vs QR
  → Trap: yang penting jalan / akurat tinggi
  → Clarify: consent · minimasi · retention
  → Concept: Rubrik E1–E4 ringkas
  → Practice: template etika 1 halaman
  → Diskusi: gotong royong & amanah data
  → Exit: 1 keputusan etis capstone
```

### Do Now (menit 0–5)

Sticky: manfaat AI di MA (1) + risiko (1). Cluster di papan — tidak dinilai benar/salah dulu.

### Trap (menit 20–30)

**Asumsi:** "Yang penting jalan / akurasi tinggi."

**Counter:** Baca gate rubrik — E1=1 project dikembalikan. Akurasi tanpa etika = **tidak lulus CPLF XII**.

→ referensi: [09_Rubrik_Etika_AI.md](../../../../09-rubrik/09_Rubrik_Etika_AI.md) — Gate Kelulusan Etika

### Concept E1–E4 (menit 40–50)

Guru jelaskan 1 contoh level 1 vs 3 **per dimensi** — dari project fiktif, bukan menyindir siswa.

| Dimensi | Level 1 (buruk) | Level 3 (target MA) |
|---------|-----------------|---------------------|
| E1 | "Model never wrong" | Demo gagal + paragraf batasan |
| E2 | Ambil wajah sembarang | Jelaskan data, retention, QR alternatif |
| E3 | Copas AI tanpa paham | Log klarifikasi (P07) |
| E4 | "Teknologi netral" | Analisis dampak salah prediksi |

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Etika = halaman kosong di akhir.  
**Aman:** Etika = desain awal; contoh QR vs wajah.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Do Now: AI di MA — 1 manfaat · 1 risiko |
| 5–20 | Experience | Studi kasus: absensi wajah vs QR — privasi & aurat |
| 20–30 | Trap | “Yang penting jalan / akurat tinggi” |
| 30–40 | Clarify | Consent · minimasi data · retention |
| 40–50 | Concept | [Rubrik Etika AI](../../../09-rubrik/09_Rubrik_Etika_AI.md) E1–E4 ringkas |
| 50–70 | Practice | Template 1 halaman: Data · Akses · Risiko · Mitigasi |
| 70–85 | Diskusi | Gotong royong & amanah data teman |
| 85–90 | Exit | 1 keputusan etis untuk capstone |

**Adaptasi 1 JP:** Experience 15’ · Concept 10’ · Practice 15’ · Exit 5’.

---

## 6. Lembar kerja / latihan

### Skenario A — Pilih desain absensi

```text
Tim A: Webcam wajah 24/7 di pintu kelas, simpan snapshot 1 tahun.
Tim B: Siswa scan QR personal 10 detik, log hanya timestamp + ID hash.
```

| Pertanyaan | Kunci |
|------------|-------|
| Mana minimasi data lebih baik? | **B** |
| Dimensi rubrik utama? | **E2** privasi |
| Tim A mitigasi minimal? | Consent + retention + alternatif opt-out |

### Skenario B — Onboarding P05

```html
<!-- Versi buruk -->
<input type="checkbox" checked> Setuju kamera dipakai

<!-- Versi lebih baik -->
<input type="checkbox" id="consent"> Saya setuju kamera dipakai hanya untuk sesi ini, foto tidak disimpan
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah versi buruk? | Pre-checked — bukan consent informed |
| Perbaikan? | Unchecked default + teks jelas retention |

### Skenario C — Rubrik E1

```text
Presentasi: "Model kami 100% akurat, tidak perlu demo gagal."
```

| Pertanyaan | Kunci |
|------------|-------|
| Level E1? | **1** — overclaim + sembunyikan gagal |
| Konsekuensi CPLF? | Project dikembalikan |

---

## 7. Exit ticket

1. 1 keputusan etis untuk capstone
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
