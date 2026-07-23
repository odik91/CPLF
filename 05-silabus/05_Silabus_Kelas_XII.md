# Silabus Kelas XII — CPLF Multimedia (Web + AI di Browser)

**Version:** 0.1 (Frozen)  
**Fase Merdeka:** F (tahap nilai)  
**Tema besar:** Belajar menciptakan nilai  
**Capability induk:** CXII-* di [05_Capability_Framework_CPLF.md](./05_Capability_Framework_CPLF.md)

## Tujuan Akhir Tahun

Siswa mampu memilih dan mengintegrasikan teknologi yang tepat untuk masalah nyata — termasuk AI di browser — secara bertanggung jawab.

**Prinsip:** AI diajarkan sebagai kelanjutan bernalar + data + web, **bukan** “pakai library → jadi AI”.

**Stack media:** JavaScript + TensorFlow.js (browser; minim hambatan instalasi).  
**Bonus (opsional):** AI Agent / “Jarvis” ringan — bukan syarat kelulusan backbone.

---

## Semester 5 — Data, Konsep ML, dan TensorFlow.js Dasar

**Elemen CP:** AD, AP, BK  
**MM utama:** MM-00, MM-03–04, MM-07, MM-16, MM-18  

### Unit tema

| Unit | Tema | Cognitive Trap (arah) | Konsep yang lahir | Media / skill | Capability | Bukti belajar |
|------|------|------------------------|-------------------|---------------|------------|---------------|
| XII5.1 | AI ≠ ML ≠ DL | “ChatGPT = semua AI” | Peta AI / rule / ML / DL | Diskusi + diagram | CXII-B1 | Peta konsep + contoh nyata |
| XII5.2 | ML butuh data | Langsung model tanpa data | Kualitas & bentuk data | Array 1D/2D, JSON | CXII-T1 | Dataset mini bersih |
| XII5.3 | Matematika yang dipakai | “Harus rumus SMA lengkap” | Vektor, jarak, kesamaan (intuitif) | Visual + hitung kecil | CXII-T1, B1 | Latihan jarak/kesamaan terapan |
| XII5.4 | Statistik sebagai lensa | Abaikan sebaran/outlier | Mean, sebaran, outlier (operasional) | Olah data sederhana | CXII-T1 | Laporan eksplorasi data |
| XII5.5 | Tensor sebagai objek kerja | Tensor = kata menakutkan | Scalar→vector→matrix→tensor | `tf.tensor` dasar | CXII-T2 | Notebook/halaman eksperimen tensor |
| XII5.6 | Model sangat kecil | “Training = sihir” | Layer, compile, fit, predict (mini) | TF.js dense kecil | CXII-T2 | Model mainan + metrik dibaca |
| XII5.7 | Membaca training | Epoch/batch/loss tanpa makna | Loss, overfitting intuitif | Visualisasi loss sederhana | CXII-B2 | Jurnal “apa arti angka ini” |
| XII5.8 | Project S5 | — | Web + data + model mini | TF.js + UI | CXII-T1–T2, B* | Demo + batasan model |

**Contoh project S5:** [PRJ-XII-S5-01](../08-project/PRJ_XII_S5_01_Klasifikasi_Tabular.md), [PRJ-XII-S5-02](../08-project/PRJ_XII_S5_02_Prediksi_Kategori.md).

---

## Semester 6 — Computer Vision, Transfer Learning, Nilai & Etika

**Elemen CP:** AD, AP, LD  
**MM utama:** MM-21–25, penguatan MM-00 & MM-04  

### Unit tema

| Unit | Tema | Cognitive Trap (arah) | Konsep yang lahir | Media / skill | Capability | Bukti belajar |
|------|------|------------------------|-------------------|---------------|------------|---------------|
| XII6.1 | Dari kamera ke prediksi | “Model selalu benar” | Pipeline webcam→tensor→output | TF.js + webcam | CXII-T3, B2 | Demo + kasus gagal |
| XII6.2 | Transfer learning | Harus train berhari-hari | MobileNet / Teachable Machine / Hub | Model siap pakai kritis | CXII-T4 | Bandingkan train vs transfer |
| XII6.3 | Integrasi ke produk web | Model terpisah dari UX | AI sebagai fitur aplikasi | UI + model | CXII-T3 | Fitur AI di alur pengguna |
| XII6.4 | Etika, privasi, bias | “Teknologi netral” | Konsekuensi solusi | Studi kasus MA/sekolah | CXII-C1 | Esai/presentasi dampak |
| XII6.5 | AI partner vs pengganti | Menyalin jawaban model | Protokol klarifikasi produksi | Rubrik reasoning | CXII-C2 | Bukti klarifikasi di project |
| XII6.6 | Project nilai (utama) | Showcase tanpa pengguna | Masalah nyata komunitas | Stack penuh | CXII-K1, T*, C* | Product + presentasi akhir |
| XII6.7 | Bonus: AI Agent ringan | Agent = chatbot saja | LLM API + aksi di web (opsional) | JS + API | Bonus | Demo perintah→aksi terbatas |
| XII6.8 | Portofolio 3 tahun | — | Identity sebagai pembelajar | Showcase X–XII | Profil lulusan | Refleksi perjalanan + artefak |

### Arah project nilai (contoh)

Bank lengkap: [08_Project_Bank_Index.md](../08-project/08_Project_Bank_Index.md) — `PRJ-XII-S6-01` … `05` (AI absensi/QR, gesture, klasifikasi citra, asisten madrasah, agent bonus).

Syarat project: ada **pengguna/masalah nyata**, ada **batasan model yang diakui**, ada **keputusan etika** yang ditulis.

### Bonus AI Agent (“Jarvis” ringan)

Hanya jika jam dan kesiapan cukup. Fokus: agent = otak yang memicu aksi aplikasi, bukan sekadar chat. Tetap wajib klarifikasi & batasan.

---

## Experience yang Disarankan (S5–S6)

| Unit | Experience |
|------|------------|
| XII5.1 / XII5.4 | [EXP_09 TikTok Feed](../07-experience_library/EXP_09_TikTok_Feed.md) |
| XII6.5 / literasi AI | [EXP_10 ChatGPT](../07-experience_library/EXP_10_ChatGPT_Salah.md) |

Indeks: [07_Experience_Library_Index.md](../07-experience_library/07_Experience_Library_Index.md)

---

## Asesmen Kelas XII

| Aspek | Penekanan |
|-------|-----------|
| Justifikasi pilihan pendekatan | Wajib |
| Kualitas data & kejujuran batasan model | Wajib |
| Integrasi web + AI | Tinggi |
| Etika & privasi | Tinggi |
| Kemewahan akurasi model | Sekunder (terutama di jenjang MA) |

---

## Nilai MA

Manfaat umat, menjaga aurat/privasi dalam project vision, amanah data, tidak menyesatkan klaim “AI pintar”, rendah hati intelektual.

---

## Penyesuaian Jam

Jika jam pelajaran sempit: prioritaskan XII5.1–5.2, 5.6 singkat, lalu XII6.2–6.6 (transfer learning + project nilai + etika). Training from scratch boleh dikurangi.

## Checklist Guru Kelas XII

- [ ] Setiap unit AI punya **batasan model** tertulis  
- [ ] Etika & privasi masuk sebelum capstone (S6 P06)  
- [ ] Demo gagal wajib, bukan opsional  
- [ ] Bonus agent (P15) hanya jika cohort siap  

## Modul pertemuan (implementasi)

**36 pertemuan × 2 JP (90 menit)** per semester:

- [Semester 5](../06-modules/kelas-xii/semester-5/XII-S5_Index.md) · P01–P18 (data, ML, TF.js)  
- [Semester 6](../06-modules/kelas-xii/semester-6/XII-S6_Index.md) · P01–P18 (CV, transfer, capstone, etika)  
- [Panduan JP & blok waktu](../06-modules/kelas-xii/00_Panduan_Pertemuan.md)

## Catatan Versi

v0.1 Draft — unit/tema + modul pertemuan Kelas XII lengkap (S5 & S6).
