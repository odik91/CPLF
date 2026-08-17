# X-S1-P22 — Integrasi Mini + Review Spiral Blok 3

| Field | Isi |
|---|---|
| Kode | X-S1-P22 |
| Basis | **4JP** · Pertemuan **22/34** |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh · penutup Blok 3** |
| Fokus | HTML + CSS + JS kecil · spek/AC · peer review · revisi |
| Batas | **Satu interaksi klik; tanpa form dinamis, framework, atau fitur besar** |

## Learning Transformation

Dari “banyak topik Blok 3 terpisah” → “satu artefak mini yang menyatukan struktur, tampilan, dan satu perilaku, lalu diuji dengan acceptance — bukan selera.”

## Capaian pembelajaran (Bloom)

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut spek, AC, spiral HTML/CSS/JS, peer review |
| C2 | Memahami | Menjelaskan peran masing-masing lapisan di artefak mini |
| C3 | Menerapkan | Membangun halaman mini + 1 interaksi klik |
| C4 | Menganalisis | Memetakan gagal AC ke HTML / CSS / JS / debug |
| C5 | Mengevaluasi | Memutuskan lulus/gagal dan prioritas revisi berdasar AC |
| C6 | Mencipta | Spek singkat + revisi terarah + catatan bukti uji |

**Fokus:** C3–C5 · **Puncak:** C4–C6 · Project S1 → **P23**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Compass · penutup Blok 3 · vibe ≠ AC |
| 10–30 | Scaffold | C2 | Peta spiral: struktur / tampilan / perilaku |
| 30–50 | Experience | C2–C3 | Baca starter `p22-integrasi-mini` vs AC sampel |
| 50–65 | Trap | C4 | Debat “keren” · fitur banyak · rewrite total |
| 65–85 | Concept | C2 | Siklus: spek → bangun → uji → peer → revisi → uji ulang |
| 85–95 | Practice mini | C3–C6 | Tulis spek + 4–6 AC milik sendiri |
| 95–105 | Transisi | — | Setup folder kerja dari starter |
| 105–120 | Scaffold praktik | C2–C3 | I do: isi lembar peer (bukti, bukan opini) |
| 120–165 | Practice | C3–C6 | Build mini · peer review · revisi terarah |
| 165–180 | Reflect | C5 | Exit · arsip artefak · preview Project P23 |

## Spiral Blok 3 (apa yang harus kelihatan)

| Lapisan | Bukti minimal |
|---|---|
| HTML | Landmark semantik + `id` unik untuk pesan/tombol |
| CSS | Keterbacaan dasar (`max-width`, spacing, hierarki) |
| JS | Satu `getElementById` + click + ubah `textContent` |
| Debug | Jika gagal: pesan/konsol → hipotesis → perbaikan kecil |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Project besar Blok 4 | Satu halaman mini + 1 interaksi |
| Banyak tombol / form dinamis | Satu event yang dipahami |
| Review “keren / jelek” | Checklist AC terukur |
| Rewrite total | Revisi item gagal berprioritas |

## Setup latihan

1. Salin folder [skill-js/p22-integrasi-mini/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p22-integrasi-mini/).  
2. Buka `index.html` di browser.  
3. Baca `spek-ac.md`, sesuaikan isi, lalu uji AC.  
4. Peer menguji tanpa melihat kode dulu.  
5. Komentar di `script.js` hanya DEFINISI/GUIDE.

## Cognitive Trap

- Menambah fitur agar “terlihat maju” tanpa AC.  
- CSS/JS ditulis tanpa HTML yang punya `id`.  
- Peer hanya bilang “bagus” tanpa bukti uji.  
- Setelah revisi, lupa uji ulang AC yang sebelumnya gagal.

## Guiding Questions

1. Spek singkat: halaman ini untuk siapa dan apa yang berubah saat klik?  
2. AC mana yang bisa dicentang tanpa debat?  
3. Temuan peer masuk lapisan HTML, CSS, atau JS?  
4. Perbaikan terkecil apa yang membuat AC lulus?

## Kriteria penerimaan (kelas)

- [ ] Ada spek singkat + ≥4 AC tertulis  
- [ ] HTML semantik + CSS keterbacaan dasar  
- [ ] Satu interaksi klik mengubah teks  
- [ ] Peer review memakai AC (bukan selera)  
- [ ] Minimal satu revisi berdasarkan temuan  
- [ ] Uji ulang setelah revisi  
- [ ] Tanpa form dinamis / framework / fitur besar

## Exit Ticket

1. Satu AC yang lulus + bukti.  
2. Satu AC yang gagal → perbaikan.  
3. Bedakan HTML / CSS / JS di artefakmu dalam satu kalimat masing-masing.  
4. Apa yang dibawa ke Project P23?

## Formatif

**Mengevaluasi · C5** · **Mencipta · C6** — dinilai dari ketepatan AC, bukti peer, dan revisi terarah.

## Catatan Guru

Ini penutup Blok 3, bukan kickoff project. Tahan scope: satu halaman, satu klik. Form dinamis dan fitur kedua disimpan untuk Blok 4.
