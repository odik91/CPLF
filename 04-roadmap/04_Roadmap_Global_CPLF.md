# Roadmap Global CPLF

**Version:** 0.1 (Frozen)  
**Status:** Sumber resmi journey 3 tahun  
**Konteks:** Madrasah Aliyah — Multimedia (pemrograman web → AI di browser)

> Dokumen ini adalah sumber utama. Ringkasan lama di `docs/roadmap.md` mengarah ke sini agar tidak dobel narasi.

---

## 1. Prinsip Journey

- Setiap materi dimulai dari **Experience** dan **Cognitive Trap**.
- Tool adalah daun; capaian utama adalah **capability** (lihat Capability Framework).
- Pembelajaran **spiral**: konsep lama kembali dengan konteks lebih kaya.
- Bahasa resmi sekolah: semester & ATP; bahasa CPLF: Learning Journey.

---

## 2. Tema Besar per Kelas

| Kelas | Tema | Target akhir (capability, bukan daftar bab) |
|-------|------|-----------------------------------------------|
| X | Belajar berpikir seperti problem solver | “Saya tahu bagaimana memecah masalah dan menunjukkannya lewat web sederhana.” |
| XI | Belajar membangun solusi | “Saya mampu merancang dan membangun aplikasi web multi-bagian secara kolaboratif.” |
| XII | Belajar menciptakan nilai | “Saya mampu memilih teknologi (termasuk AI) untuk masalah nyata secara bertanggung jawab.” |

---

## 3. Evolusi Kognitif (basis urutan)

```text
Observasi → Describe → Sequence → Abstract → Generalize
→ Construct → Optimize → Collaborate → Innovate
```

### Tiga level blueprint

**Level 1 — Cara berpikir:** Observe → Analyze → Organize → Reason → Communicate → Create  

**Level 2 — Mental model teknis:** Instruksi → Data → Keputusan → Pengulangan → Abstraksi → Komunikasi → Penyimpanan → Kolaborasi → AI  

**Level 3 — Teknologi (media):** HTML · CSS · JavaScript · API · Database (konsep→praktik) · Git · TensorFlow.js / AI di browser  

### Basis penyusunan unit

```text
Masalah → Cara Berpikir → Mental Model → Teknologi → Project → Refleksi
```

### Five Layers (cek tiap materi)

1. Why — mengapa belajar ini  
2. Problem — masalah apa  
3. Reasoning — cara berpikir  
4. Concept — konsep  
5. Implementation — coding / build  

### Tes 5 pertanyaan (gate kurikulum)

Sebelum materi masuk kurikulum:

1. Masalah nyata apa yang diselesaikan?
2. Mental model apa yang dibangun?
3. Apakah tetap relevan jika JavaScript diganti?
4. Bisakah siswa mengalami kebutuhan konsep sebelum dijelaskan?
5. Bisakah diwujudkan menjadi proyek kecil?

Jika gagal sebagian besar — pertimbangkan ulang.

---

## 4. Peta Semester (global)

| Semester | Fokus journey | Media utama |
|----------|---------------|-------------|
| 1 (X) | Fondasi berpikir, algoritma, klarifikasi | CT, pseudocode, JS dasar |
| 2 (X) | Logika & ekspresi lewat web | HTML, CSS, JS interaktif |
| 3 (XI) | Software mulai menyelesaikan masalah | DOM, event, modul JS |
| 4 (XI) | Aplikasi lebih utuh & kolaboratif | Async, fetch, data, Git |
| 5 (XII) | Data, konsep ML, TF.js dasar | Tensor, training singkat, etika |
| 6 (XII) | CV / transfer learning, project nilai | Webcam, model, AI agent (bonus) |

Detail unit ada di silabus kelas (`05-silabus/`).

---

## 5. Journey Teknis (ringkas dari Modul 1–15 diskusi)

Urutan berkesinambungan (digabung ke semester, bukan 15 file terpisah di fase backbone):

```text
Computational Thinking
  → Dasar JavaScript → DOM → Async JS → Data
  → Matematika AI ringan → Statistik dasar
  → AI vs ML vs DL → Tensor → TensorFlow.js
  → Training → Computer Vision → Transfer Learning
  → Mini Project AI → AI Agent (bonus)
```

HTML/CSS masuk sebagai **media melihat hasil pikiran**, bukan tujuan akhir Kelas X.

---

## 6. Konteks Madrasah Aliyah

Contoh arah project (bukan daftar wajib kaku):

- Kalkulator zakat / jadwal kegiatan
- Absensi kelas
- Konten web sekolah
- Deteksi/gesture untuk kebutuhan nyata
- Etika AI & literasi informasi

Nilai yang diikat: manfaat, tanggung jawab, kejujuran intelektual (klarifikasi).

---

## 7. Mapping Mental Model (ringkas)

- Kelas X: MM-00–10 (+ awal proses)  
- Kelas XI: MM-11–20  
- Kelas XII: MM-21–25 (+ penguatan klarifikasi & asumsi)

Lihat [03_Mental_Model_CPLF.md](../03-framework/03_Mental_Model_CPLF.md).

---

## Dokumen Terkait

- [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md)
- [05_Silabus_Kelas_X.md](../05-silabus/05_Silabus_Kelas_X.md)
- [05_Mapping_Kurikulum_Merdeka.md](../05-silabus/05_Mapping_Kurikulum_Merdeka.md)

## Catatan Versi

v0.1 Draft — menyatukan roadmap global + isi `docs/roadmap.md` menjadi satu sumber resmi.
