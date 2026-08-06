# Evaluasi Roadmap & Model 4JP — Kelas X (dan implikasi XI)

**Version:** 0.1 (Draft diskusi)  
**Tanggal:** 2026-08-06  
**Status:** Keputusan waktu dikoreksi; silabus base-4jp perlu diselaraskan ulang

---

## 1. Koreksi model waktu (penting)

| | Salah (asumsi sebelumnya) | **Benar (keputusan Anda)** |
|--|---------------------------|----------------------------|
| 1 pertemuan | 2 JP = 90 menit | **4 JP = 180 menit** |
| 1 minggu | 2×2 JP = 4 JP | **2×4 JP = 8 JP** |
| Isi 1 pertemuan | Satu siklus pendek | **±2 JP teori + ±2 JP praktik terkait** |
| Materi bridging (dulu 2 pertemuan) | Tetap terpisah | **Digabung dalam 1 pertemuan** |

### Implikasi jumlah pertemuan

- **34 pertemuan × 4 JP** ≈ **136 JP / semester** (jauh lebih kaya dari arsip 18 × 2 JP = 36 JP).
- Minggu efektif ≈ **17** (2 pertemuan/minggu) + minggu bebas di luar nomor P.
- Karena tiap P sudah 4 JP, **jangan** menggandakan jumlah topik 1:1 dari mode 2JP — gabungkan bridging, padatkan teori, **wajib** ada keyboard di slot praktik.

### Pola default 1 pertemuan (180')

```text
0–10'   Orientation / Learning Compass (+ recall)
10–80'  Teori + Experience + Trap + Clarify + Concept   ≈ 2 JP
80–90'  Istirahat / transisi
90–170' Scaffold I do → Practice coding terkait        ≈ 2 JP
170–180' Reflect + Exit (+ transfer singkat)
```

---

## 2. Roadmap resmi saat ini (yang di-freeze)

Dari [04_Roadmap_Global_CPLF.md](../04-roadmap/04_Roadmap_Global_CPLF.md) + silabus X/XI:

| Semester | Fokus journey (resmi) | Media utama (resmi) |
|----------|----------------------|---------------------|
| **1 (X)** | Fondasi berpikir, algoritma, klarifikasi | CT, pseudocode, **JS dasar** |
| **2 (X)** | Logika & ekspresi lewat web | **HTML, CSS, JS interaktif** (DOM sangat dasar) |
| **3 (XI)** | Software mulai menyelesaikan masalah | **DOM, event, modul JS** |
| **4 (XI)** | Aplikasi lebih utuh & kolaboratif | Async, fetch, data, Git *(persistensi lokal — bukan BE penuh)* |
| 5–6 (XII) | ML / CV / nilai | TF.js, etika |

Tujuan Kelas X (resmi): *memecah masalah dan menunjukkannya lewat **web sederhana*** — HTML/CSS adalah **media**, bukan tujuan akhir.

---

## 3. Usulan Anda vs roadmap — telaah jujur

| Usulan Anda | Selaras roadmap? | Catatan |
|-------------|------------------|---------|
| **S1:** JS dasar + HTML + CSS → **static page** | **Sebagian besar ya**, dengan geser | Resmi: HTML/CSS di S2. Geser ke S1 **masuk akal** di mode 4JP (anti-bosan) + tetap “media melihat hasil pikiran”. JS dasar tetap di S1 = **sudah** sesuai roadmap. |
| **S2:** Advance DOM | **Ya, dengan penyesuaian** | Resmi: S2 = DOM sangat dasar; S3 = DOM mendalam. Jika S1 sudah static page + JS dasar, S2 bisa naik jadi **DOM/event lebih dalam** (mengambil sebagian S3 lama). |
| **S3–S4:** SPA + **BE (complete)** | **Sebagian; BE perlu keputusan baru** | Resmi S3–S4: SPA ringan / multi-section + async/fetch + persistensi lokal + Git — **bukan** backend server penuh. “BE complete” = perlu perluasan silabus XI (Express/API sendiri, DB, deploy) atau definisi “BE” = *API publik + persistensi* dulu. |

### Verdict

- **Arah Anda selaras filosofi CPLF** (capability dulu, tool sebagai media; spiral X→XI→XII).  
- **Perlu revisi dokumen freeze** (roadmap §4 + Silabus X/XI) jika HTML/CSS masuk S1 dan DOM advance di S2.  
- **BE complete** belum dijamin roadmap v0.1 — putuskan dulu: BE = (A) fetch + JSON + localStorage, atau (B) Node/Express + DB sungguhan.

---

## 4. Usulan arah semester (setelah koreksi 4JP) — untuk disetujui

### Kelas X — S1 (static page + bernalar + JS dasar)

**Outcome tahun bagian 1:** halaman statis yang masuk akal + reasoning; JS dasar (kondisi/variabel/loop) sudah disentuh.

Contoh penggabungan bridging dalam **satu** pertemuan 4JP:

| Pertemuan (contoh) | Slot teori (~2JP) | Slot praktik (~2JP) |
|--------------------|-------------------|---------------------|
| P01 | Compass + framing | Tulis framing → mulai file HTML kosong / heading |
| P02 | Jaguar literasi input | Form HTML sederhana / cari + catat di halaman |
| P03 | Impact AI company profile + klarifikasi ringkas | Buka HTML hasil, bandingkan, **bukan debug** — rasa penasaran |
| P04 | Gambar rumah + requirement + acceptance ringkas | Tulis spek → bangun 1 section HTML sesuai spek |
| P05 | Algoritma ROBI + flowchart | Pseudocode → 5 baris JS / langkah di halaman |
| … | Kondisi / variabel / loop (konsep) | JS di editor + tempel ke halaman |
| Akhir S1 | Kickoff–showcase project **static + JS ringan** | Build di slot praktik tiap pertemuan project |

Jumlah P S1 tetap bisa **±16–18 pertemuan** (bukan 34) jika tiap P = 4JP — karena kapasitas waktu per pertemuan sudah 2×.  
**Atau** tetap 32–34 jika sekolah memang mengalokasikan 8JP/minggu penuh.

> **Perlu keputusan Anda:** target S1 = **~17 pertemuan** (1 semester padat) atau **~34** (setiap slot 4JP sepanjang ±17 minggu × 2)?  
> Secara kalender: 2 pertemuan/minggu × 17 minggu = **34 pertemuan** — itu konsisten. Yang berubah: tiap pertemuan **lebih dalam** (teori+praktik), bukan “dobel topik kosong”.

### Kelas X — S2 (advance DOM)

Setelah S1 punya HTML/CSS/JS dasar: event, manipulasi DOM, form validasi, list dinamis, state sederhana di halaman — project interaktif (bukan hanya static).

### Kelas XI — S3–S4

- **S3:** SPA ringan / arsitektur front (routing sederhana atau multi-view), modul, kualitas kode.  
- **S4:** data async + **BE** sesuai pilihan A atau B di atas.

---

## 5. Yang harus dikoreksi di dokumen base-4jp (setelah Anda OK)

1. README + `X-S1_Index`: ganti “2JP/pertemuan” → **4JP/pertemuan**; pola **2+2**.  
2. Hitung ulang: 34 P tetap, tapi tiap P = teori+praktik terkait; bridging digabung.  
3. Geser HTML/CSS ke S1 di silabus draft base-4jp (dengan catatan vs freeze).  
4. Blok waktu Panduan Pertemuan: versi 180 menit.

---

## 6. Pertanyaan keputusan (jawab supaya lanjut akurat)

1. **BE di S4:** opsi **A** (fetch + persistensi lokal) atau **B** (server + DB)?  
2. **HTML/CSS di S1:** setuju geser dari S2 resmi → S1 (static page), S2 naik ke DOM advance?  
3. **34 pertemuan × 4JP** dikunci (2×/minggu × ~17 minggu)?  
4. Setelah OK — saya revisi `base-4jp` index + panduan waktu dulu, baru isi materi P01–P03 ulang dengan pola 2+2.
