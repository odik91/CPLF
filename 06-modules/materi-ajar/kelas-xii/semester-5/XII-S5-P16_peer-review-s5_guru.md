# Materi Guru Lengkap — XII-S5-P16

**Handout siswa (bagikan):** [XII-S5-P16_peer-review-s5_siswa.md](./XII-S5-P16_peer-review-s5_siswa.md)

**Modul:** [XII-S5-P16_peer-review-s5.md](../../../kelas-xii/semester-5/XII-S5-P16_peer-review-s5.md)

**Materi pendukung sumber:** [XII-S5-P16_peer-review-s5.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P16_peer-review-s5.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P16 — Peer Review S5

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P16 |
| Unit | XII5.8 |
| Durasi | 2 JP = 90 menit |

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Protokol review — fokus data & batasan |
| 5–30 | Review | [Rubrik Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 30–50 | Clarify | Diskusi 2 temuan kuat |
| 50–75 | Build | 1 revisi wajib (data/model/UI/batasan) |
| 75–90 | Exit | Changelog revisi |

---

## Formatif

**COM**, **ITR**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P16 Peer Review S5

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)  
> **Rubrik peer:** [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P16 |
| Modul pertemuan | [XII-S5-P16_peer-review-s5.md](../../../kelas-xii/semester-5/XII-S5-P16_peer-review-s5.md) |
| Semester | 5 · Pertemuan 16/18 |
| Unit | XII5.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |
| Formatif | COM, ITR |
| Ada live code? | **Tidak** — review artefak + 1 revisi wajib |

---

## Pengetahuan Guru

Peer review S5 **bukan** kritik CSS — fokus: **data · model · batasan · kejujuran metrik**.

| Aspek review | Pertanyaan reviewer bagus | Review buruk (level 1) |
|--------------|---------------------------|------------------------|
| **Data** | "Fitur apa yang model lihat? Ada outlier?" | "Datanya kurang" |
| **Model** | "Shape input cocok? Loss terlihat?" | "Modelnya jelek" |
| **Batasan** | "Klaim terlarang sudah explicit?" | "Kurang bagus" |
| **Metrik** | "Akurasi dari berapa sampel?" | "Akurasinya keren" |
| **Etika E1** | "Demo gagal ada?" | (diam soal overclaim) |

**Substansi kunci:**

1. Protokol [Rubrik Peer Review] — **2 pujian spesifik + 2 saran dapat ditindak**.
2. Reviewee wajib **1 revisi** dengan bukti (changelog).
3. Diskusi 2 temuan kuat — deep dive reasoning, bukan debat selera.
4. Revisi prioritas: data / model / UI / **batasan** — batasan sering paling lemah.
5. Changelog exit = bukti ITR untuk rubrik project.

**Gate etika:** Jika reviewer menemukan overclaim E1 level 1 — **wajib** saran perbaiki batasan + demo gagal.

---

## Recall Spiral

Opening **5 menit** — protokol review.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P14: format demo + kasus gagal? | Sukses → gagal → batasan |
| P15: jurnal metrik — 1 kalimat mitigasi? | Verifikasi manual / konteks N |
| P07 (XI): peer review code — beda hari ini? | Fokus ML: data, metrik, batasan |
| COM: kritik asumsi, bukan orang? | "Dokumen batasan kurang" bukan "kamu bodoh" |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan kirim lembar review **sudah terisi** — siswa isi dari observasi |
| **Live modeling** | Guru demo 1 review buruk vs bagus pada project anonim (contoh guru) |
| **Per baris / scope** | Setiap saran: "Observasi → Saran → Aspek CPLF" |
| **Recall** | Protokol 2+2 sebelum rotasi pasangan |
| **Membaca kode** | Latihan baca snippet README + batasan — tandai gap |
| **No rubrik dump** | Sebut aspek OBS/REA/COM — **bukan** PDF rubrik penuh ke siswa |

---

## Materi Inti

### Transformasi belajar

**Dari:** "Bagus/jelek"  
**Ke:** Feedback **terukur** yang memaksa revisi batasan & kejujuran model.

### Protokol S5 (adaptasi rubrik)

```text
Reviewer memberi:
  • 2 pujian SPESIFIK (data/model/batasan/metrik)
  • 2 saran DAPAT DITINDAK (bukan "perbaiki AI")

Reviewee wajib:
  • Pilih 1 saran → revisi → bukti (commit/screenshot/changelog)

Larangan:
  • Ejek · banding IQ · spoil kelas lain · debat akurasi tanpa data
```

### Lembar ringkas (tampilkan di papan — siswa salin format)

| # | Observasi | Saran | Aspek |
|---|-----------|-------|-------|
| 1 | | | REA/COM/TEC/... |
| 2 | | | |

**Fokus wajib S5:** minimal 1 baris tentang **dokumen batasan** atau **demo gagal**.

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Protokol 2+2 + fokus data & batasan |
| 5–30 | Review | Pasangan A↔B — lembar reviewer |
| 30–50 | Clarify | 2 temuan kuat — pleno atau kelompok 4 |
| 50–75 | Build | 1 revisi wajib — prioritaskan batasan jika lemah |
| 75–90 | Exit | Changelog revisi submit |

### Prioritas revisi (panduan guru)

| Urutan | Jika lemah | Revisi contoh |
|--------|------------|---------------|
| 1 | Batasan kosong/overclaim | Tambah section klaim terlarang + kasus gagal |
| 2 | Metrik tanpa N | Update jurnal P15 + UI disclaimer |
| 3 | Predict bug | Fix shape / async fit |
| 4 | UI polish | **Terakhir** — setelah etika & metrik |

---

## Alur Live Coding / Facilitator

### Persiapan

- [ ] Rotasi pasangan — hindari teman dekat yang "basah-basah"
- [ ] Contoh project anonim (guru) — 1 batasan lemah untuk demo review
- [ ] Template changelog 3 baris di papan
- [ ] Baca: [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md)

### Skrip fasilitator

```text
[LANGKAH 1 — Opening 0–5 menit]
Ucapkan: "Hari ini nilai feedback — bukan nilai teman. Kritik dokumen batasan = hadiah."
Tampilkan: review buruk "jelek" vs bagus "klaim terlarang belum ada — tambah bullet X"
Tanya: "Mana yang bisa ditindak?"

[LANGKAH 2 — Review 5–30 menit]
Pasangan A↔B — swap repo/link
Timer 25 menit — warning menit 20
Keliling: dorong saran #2 tentang batasan/metrik jika belum ada
Scope: 2+2 wajib — aspek CPLF minimal 1 REA atau COM

[LANGKAH 3 — Clarify 30–50 menit]
Pleno: 2 temuan kuat (volunteer atau guru pilih anonim)
Ucapkan: "Temuan kuat = observasi + dampak pengguna"
Tanya: "Overclaim E1 — reviewer apa saran mitigasi?"

[LANGKAH 4 — Revisi 50–75 menit]
Wajib 1 revisi — commit atau screenshot before/after
Ucapkan: "Revisi batasan > ganti warna tombol"
Scope: changelog 3 baris

[LANGKAH 5 — Exit 75–90 menit]
Submit: lembar reviewer + changelog reviewee
Ucapkan: "Showcase P18 — tunjuk revisi dari review hari ini."
```

### Contoh review level 3–4 (model guru)

**Pujian:**
1. "Dokumen batasan section 'kapan salah' sudah isi 2 contoh input spesifik."
2. "UI menampilkan loss final — transparan untuk pengguna."

**Saran:**
1. "Footer 'AI trusted' overclaim — ganti disclaimer mitigasi." → COM/Etika E1
2. "Akurasi 96% tanpa N — tambah '46/48 baris latih'." → REA

---

## Latihan Membaca Kode / Dokumen

### Snippet A — README project

```markdown
## Model
Akurasi tinggi menggunakan TensorFlow.js.

## Cara pakai
Buka index.html, klik prediksi.
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Gap untuk reviewer? | Tidak ada N, batasan, kasus gagal, data source |
| Saran dapat ditindak? | "Tambah section Batasan + angka akurasi dengan N" |
| Aspek CPLF? | REA, COM (etika) |

### Snippet B — Changelog lemah

```text
Revisi: perbaiki tampilan
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Cukup untuk ITR? | **Tidak** — tidak spesifik, tidak link saran reviewer |
| Changelog baik? | "Saran #1 reviewer: hapus '100% trusted' → commit abc123" |

---

## Praktik Mandiri

1. Selesaikan lembar reviewer 2+2 untuk partner.
2. Partner: **1 revisi wajib** — prioritas batasan/metrik jika relevan.
3. Changelog: saran diambil · perubahan · bukti URL/commit.
4. Refleksi 2 kalimat: "Apa yang berubah dalam cara berpikir?"
5. Opsional: review round-2 cepat 10 menit jika revisi batasan.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Review "bagus/jelek" saja | Demo level 1 vs 3 live |
| Hindari kritik batasan (takut) | Normalisasi: kritik doc = bantu nilai E1 |
| Revisi hanya CSS | Gate: revisi harus sentuh data/model/batasan/metrik |
| Copy saran reviewer tanpa paham | Tanya reviewee: "Kenapa saran ini penting?" |
| Debat akurasi tanpa data | Redirect ke N sampel & kasus gagal |
| Spoil project kelas lain | Rotasi pasangan antar kelompok internal saja |

---

## Referensi Guru

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | Rubrik peer review CPLF | → [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 2 | Rubrik etika E1 | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 3 | Rubrik project — iterasi | → [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) |
| 4 | Enam aspek CPLF | → [09_Rubrik_Enam_Aspek](../../../../09-rubrik/09_Rubrik_Enam_Aspek.md) |
| 5 | Feedback efektif (Google) | → [Google SRE — Postmortem culture](https://sre.google/sre-book/postmortem-culture/) *(kultur blameless)* |
| 6 | ML model cards (inspirasi batasan) | → [Model Cards paper](https://modelcards.withgoogle.com/about) |
| 7 | Panduan guru ML | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |
| 8 | Etika penyampaian | → [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## Rujukan

- Modul: [XII-S5-P16](../../../kelas-xii/semester-5/XII-S5-P16_peer-review-s5.md)
- Sebelumnya: [P14 Demo](./XII-S5-P14_project-s5-demo-batasan.md) · [P15 Metrik](./XII-S5-P15_membaca-metrik-model.md)
- Lanjutan: [P17 Spiral](./XII-S5-P17_review-spiral-s5.md) · [P18 Showcase](./XII-S5-P18_showcase-refleksi-s5.md)
- Rubrik: [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md)

---

## Checklist Exit

- [ ] Protokol 2+2 dijelaskan & dipakai
- [ ] Minimal 1 saran per review tentang batasan/metrik/demo gagal
- [ ] 1 revisi wajib + changelog + bukti
- [ ] Diskusi 2 temuan kuat — pleno/kelompok
- [ ] Tidak ada review personal attack — guru intervensi jika perlu
- [ ] Lembar reviewer + changelog terkumpul

[← Indeks materi S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
