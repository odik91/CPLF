# Materi Guru Lengkap — XII-S5-P14
**Modul:** [XII-S5-P14_project-s5-demo-batasan.md](../../kelas-xii/semester-5/XII-S5-P14_project-s5-demo-batasan.md)
**Materi pendukung sumber:** [XII-S5-P14_project-s5-demo-batasan.md](../../materi-pendukung/materi-pendukung/kelas-xii/semester-5/XII-S5-P14_project-s5-demo-batasan.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P14 — Project S5 Demo & Batasan

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P14 |
| Unit | XII5.8 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Format demo: data → model → prediksi → **batasan** |
| 5–45 | Demo | 3–4 menit/siswa |
| 45–60 | Peer | 1 pertanyaan + 1 apresiasi |
| 60–80 | Practice | Finalisasi dokumen batasan (wajib) |
| 80–90 | Exit | Submit link + PDF batasan |

---

## Dokumen Batasan (wajib)

- Data apa · tidak apa  
- Akurasi kasar · kapan salah  
- Klaim yang **tidak** boleh dibuat  

---

## Formatif

**COM**, **REA**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P14 Project S5 Demo & Batasan Model

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)  
> **Rubrik etika (preview wajib):** [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P14 |
| Modul pertemuan | [XII-S5-P14_project-s5-demo-batasan.md](../../../kelas-xii/semester-5/XII-S5-P14_project-s5-demo-batasan.md) |
| Semester | 5 · Pertemuan 14/18 |
| Unit | XII5.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S5-* |
| Formatif | COM, REA |
| Ada live code? | **Demo siswa** — guru fasilitasi format & etika |

---

## Pengetahuan Guru

Pertemuan ini **bukan** kompetisi akurasi — ini **latihan amanah**: model kecil MA harus dijelaskan dengan jujur.

| Komponen | Wajib | Overclaim yang ditolak |
|----------|-------|------------------------|
| **Demo live** | Data → train singkat → prediksi → **batasan** | "AI kami paling akurat di sekolah" |
| **Demo gagal** | Minimal **1 kasus** model salah — **sengaja ditunjuk** | Menyembunyikan error / refresh sampai benar |
| **Dokumen batasan** | PDF/Markdown 1 halaman — submit hari ini | "Nanti saja di showcase" |
| **Klaim terlarang** | Daftar eksplisit apa yang **tidak** boleh dikatakan | "Selalu benar", "100%", "menggantikan guru/dokter" |

**Preview rubrik E1 (Etika AI):**

| Level E1 | Perilaku |
|----------|----------|
| 1 ❌ | Klaim selalu benar / sembunyikan kegagalan → **project dikembalikan** |
| 2 | Sebut batasan jika ditanya |
| 3 ✅ target S5 | Tulis + demo batasan + kasus gagal **proaktif** |
| 4 | Kait ke risiko pengguna nyata + mitigasi |

Gate XII: E1 ≥ 2; **E1 = 1 = gagal meski demo mulus.**

**Format demo 3–4 menit (wajib hafal guru):**

```text
1. Masalah & data (30 detik)
2. Prediksi live — 1 sukses (1 menit)
3. Prediksi live — 1 GAGAL atau edge case (1 menit) ← wajib
4. Baca 2 kalimat batasan + klaim terlarang (1 menit)
5. 1 pertanyaan dari teman (30 detik)
```

---

## Recall Spiral

Opening **5 menit**.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P13: loss/akurasi project berapa? | Angka konkret + "di data latih" |
| P10: akurasi 99% di medsos — kapan menyesatkan? | Data tidak representatif; tidak ada kasus gagal |
| P11: acceptance criteria — demo memenuhi? | Centang live, bukan debat |
| Etika: "AI netral" — setuju? | Tidak — ada bias data & risiko salah prediksi |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan distribusi template batasan **sudah terisi** — siswa tulis dari project sendiri |
| **Live modeling** | Guru buka dengan demo **contoh gagal** (input aneh → prediksi salah) — normalisasi kegagalan |
| **Per baris / scope** | Saat siswa demo: timer 4 menit — guru interrupt jika lewat tanpa bagian gagal |
| **Recall** | Hoaks "99% akurat" sebelum demo pertama siswa |
| **Membaca kode** | Latihan baca paragraf batasan — tandai kalimat overclaim |
| **Rubrik preview** | Sebut E1 level 3 = target; **level 1 = dikembalikan** — tanpa kirim PDF rubrik penuh |

---

## Materi Inti

### Transformasi belajar

**Dari:** "Demo = pamer yang terbaik"  
**Ke:** "Demo = bukti **jujur** — termasuk kapan model **tidak** boleh dipercaya."

### Struktur dokumen batasan (wajib 1 halaman)

```markdown
# Batasan Model — [Nama Project]

## Data
- Dipakai: [sumber, N baris, fitur]
- TIDAK dipakai / tidak valid: [contoh input di luar training]

## Metrik kasar
- Akurasi/loss di data latih: ___
- Arti untuk pengguna awam: "Benar sekitar X dari 10 tebakan — BUKAN jaminan"

## Kapan model salah (contoh nyata)
1. ...
2. ...

## Klaim yang TIDAK BOLEH dibuat
- [ ] "Selalu benar" / "100% akurat"
- [ ] "Menggantikan [guru/dokter/pengurus]"
- [ ] "Cocok untuk semua siswa/sekolah"

## Mitigasi
- Pengguna harus [verifikasi manual / tanya guru / ...]
```

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Format demo + contoh demo gagal guru |
| 5–45 | Demo siswa | 3–4 menit/orang · timer · catat E1 |
| 45–60 | Peer | 1 pertanyaan + 1 apresiasi — fokus batasan |
| 60–80 | Finalisasi doc | Keliling cek 4 section wajib |
| 80–90 | Submit | Link + PDF/MD batasan |

### Skor cepat guru saat demo (mental checklist)

| ✅ Lulus demo | ❌ Ulangi |
|--------------|---------|
| Kasus gagal ditunjuk | Hanya prediksi "berhasil" |
| Akurasi dikontekstualkan | "Akurasi 95%" tanpa penjelasan |
| Batasan dibacakan | "Model canggih" tanpa batas |
| Disclaimer di UI | UI seperti oracle |

---

## Alur Live Coding / Facilitator

### Persiapan

- [ ] Timer proyektor / HP
- [ ] Contoh dokumen batasan **setengah jadi** (untuk live perbaiki overclaim — bukan jawaban)
- [ ] Baca [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) — fokus E1, E4
- [ ] Urutan demo: random atau volunteer — rotasi agar yang lemah tidak terakhir selalu

### Skrip fasilitator

```text
[LANGKAH 1 — Opening 0–5 menit]
Demo guru: project mini → input aneh → "SALAH — dan itu normal."
Ucapkan: "Hari ini yang nilai tinggi: jujur soal gagal, bukan akurasi tertinggi."
Tanya: "Siapa pernah lihat iklam 'AI 99% akurat'? Data apa yang tidak mereka tunjuk?"
Scope: set norma kelas — tepuk tangan untuk demo gagal yang jujur.

[LANGKAH 2 — Demo siswa 5–45 menit]
Timer 4 menit — warn di menit 3 jika belum bagian gagal.
Ucapkan sebelum mulai: "Format: sukses → GAGAL → batasan."
Tanya setelah demo: "Klaim apa yang TIDAK boleh kamu tulis di poster?"
Catat mental E1 — intervensi private jika level 1.

[LANGKAH 3 — Peer 45–60 menit]
Protokol: 1 pertanyaan bernalar + 1 apresiasi spesifik (bukan "keren")
Ucapkan: "Tanya tentang data atau batasan — bukan desain warna saja."
Scope: [Rubrik Peer Review] — versi ringkas 2+2.

[LANGKAH 4 — Finalisasi 60–80 menit]
Keliling: cek 4 section dokumen — tolak submit jika "Klaim terlarang" kosong.
Ucapkan: "Kalimat 'selalu benar' — hapus atau project dikembalikan."
Scope: PDF/MD ke folder submit + link repo.

[LANGKAH 5 — Exit 80–90 menit]
Ucapkan: "Showcase P18 = demo yang sama + batasan diperhalus."
Tanya exit: "Satu kasus gagal yang kamu tunjuk hari ini?"
Scope: yang tidak demo hari ini = demo pertama menit 5 minggu depan (P16/P18).
```

### Contoh demo gagal (guru siapkan cadangan)

| Project type | Input gagal | Narasi |
|--------------|-------------|--------|
| Klasifikasi teks sederhana | String kosong / emoji saja | "Di luar data latih — tebakan random" |
| Tabular nilai | Outlier ekstrem | "Belum pernah lihat di training" |
| Binary kebiasaan | Input lawan pola | "Model bias ke kelas mayoritas" |

---

## Latihan Membaca Kode / Teks

### Snippet A — Paragraf batasan buruk

```text
Model kami menggunakan deep learning canggih dengan akurasi 97%.
Cocok untuk semua siswa MA dan dijamin membantu meningkatkan prestasi.
Tidak perlu khawatir salah karena AI sudah pintar.
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Kalimat overclaim? | "97% tanpa konteks", "semua siswa", "dijamin", "tidak perlu khawatir salah" |
| Level E1? | **1** — harus revisi |
| Perbaikan 1 kalimat | Contoh: "Di data uji 30 baris sekolah kami, benar 29/30 — masih bisa salah pada input baru" |

### Snippet B — UI disclaimer

```html
<p id="result">Prediksi: Lulus</p>
<p class="small">Powered by AI — 100% trusted</p>
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Masalah etika? | "100% trusted" = klaim terlarang |
| Ganti footer | "Hasil model — verifikasi dengan guru/wali" |

---

## Praktik Mandiri

1. Finalisasi dokumen batasan — **4 section wajib** terisi.
2. Rekam (opsional) clip 30 detik demo gagal untuk portofolio.
3. Revisi UI: tambah disclaimer visible.
4. Peer: tukar dokumen — tandai 1 kalimat overclaim teman.
5. Submit: link repo + file `BATASAN-MODEL.md` atau PDF.

**Variasi kelas sempit waktu:** demo 2 menit; doc wajib submit — demo lanjut P16.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Demo hanya "hero case" | Timer + wajibkan slot gagal |
| "Akurasi 100%" di slide | Tanya data N; tunjuk P10 overfit |
| Doc batasan copy template kosong | Gate submit — section "kapan salah" wajib isi |
| Malu tunjuk error | Guru tepuk tangan pertama kali demo gagal |
| Debate "tapi keren" | Redirect ke rubrik E1 |
| Submit tanpa PDF | Checklist exit — tolak "nanti" |

---

## Referensi Guru

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | Rubrik etika E1–E4 (wajib) | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 2 | Rubrik project — gate batasan | → [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) |
| 3 | Overfitting & klaim menyesatkan | → [MLCC — Overfitting](https://developers.google.com/machine-learning/crash-course/overfitting/overfitting) |
| 4 | Test/validation (intuitif) | → [MLCC — Training and Test Sets](https://developers.google.com/machine-learning/crash-course/training-and-test-split/video-lecture) |
| 5 | Responsible AI (Google) | → [Google AI Principles](https://ai.google/responsibility/principles/) |
| 6 | StatQuest — train/test (video) | → [StatQuest — Train/Test](https://www.youtube.com/watch?v=Ankitxu0BIS8) |
| 7 | Peer review CPLF | → [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 8 | Panduan guru ML | → [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |

---

## Rujukan

- Modul: [XII-S5-P14](../../../kelas-xii/semester-5/XII-S5-P14_project-s5-demo-batasan.md)
- Sebelumnya: [P13 Train + UI](./XII-S5-P13_project-s5-build-2.md)
- Lanjutan: [P15 Metrik](./XII-S5-P15_membaca-metrik-model.md) · [P16 Peer Review](./XII-S5-P16_peer-review-s5.md)
- Rubrik: [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) · [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md)
- Etika global: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Format demo (sukses + **gagal** + batasan) dijelaskan & dipakai
- [ ] ≥70% siswa demo hari ini atau jadwal fix P16
- [ ] Dokumen batasan submit — 4 section terisi
- [ ] Rubrik E1 preview — siswa tahu level 1 = dikembalikan
- [ ] Tidak ada pujian guru untuk overclaim akurasi
- [ ] Peer: 1 pertanyaan + 1 apresiasi per demo
- [ ] Klaim terlarang explicit di setiap dokumen

[← Indeks materi S5](./XII-S5_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
