# X-S1-P23 — Project S1 Kickoff (Blok 4)

| Field | Isi |
|---|---|
| Kode | X-S1-P23 |
| Basis | **4JP** · Pertemuan **23/34** |
| Unit | X1.8 (project S1 · jalur 4JP) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh · pembuka Blok 4** |
| Batas | **Spek + AC + kerangka folder; bukan halaman jadi** |

## Learning Transformation

Dari “Blok 3 sudah bisa HTML/CSS/JS kecil” → “project semester punya **masalah, spek, AC, dan kerangka** sebelum build. Fitur ditulis dulu, dikerjakan belakangan (P24–P27).”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut masalah, spek, AC, DoD, kerangka folder |
| **C2** | Memahami | Menjelaskan beda kickoff vs build; beda brief 4JP vs “langsung coding” |
| **C3** | Menerapkan | Memilih brief, menulis spek + AC, membuat folder project |
| **C4** | Menganalisis | Memotong fitur yang di luar skill S1 / di luar 2 interaksi JS |
| **C5** | Mengevaluasi | Mencocokkan AC dengan bukti uji yang mungkin (bukan selera) |
| **C6** | Mencipta | Paket kickoff milik sendiri: spek, AC, kerangka, rencana P24–P27 |

**Fokus:** C2–C5 · **Puncak:** C6 (paket kickoff) · Build HTML → **P24**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Compass · Blok 4 = project, bukan materi sintaks baru |
| 10–30 | Scaffold | C2 | Tiga brief · masalah nyata MA · scope 2 fitur JS |
| 30–50 | Experience | C2–C4 | Pilih brief · daftar “bukan hari ini / bukan S1” |
| 50–65 | Trap | C4 | Vibe coding · 10 fitur · copy P22 tanpa spek baru |
| 65–85 | Concept | C2 | Spek · AC · DoD · kerangka vs isi |
| 85–95 | Practice mini | C3–C5 | Tulis 5 AC yang bisa dicentang |
| 95–105 | Transisi | — | Setup folder `project-s1/` |
| 105–120 | Scaffold praktik | C2–C3 | I do: isi `spek.md` + skeleton HTML |
| 120–165 | Practice | C3–C6 | Spek lengkap · AC · kerangka · umpan balik guru |
| 165–180 | Reflect + Exit | C5 | Rencana P24 · arsip kickoff |

## Brief project 4JP (pilih satu)

Jalur ini **bukan** PRJ-X-S1-01…03 (algoritma 2JP). Artefak = **satu halaman static + JS** (HTML/CSS + maksimal **dua** interaksi klik yang dipahami).

| Kode kelas | Masalah | Pengguna | Fitur JS (maks. 2) |
|---|---|---|---|
| **A · Profil kegiatan** | Tamu/orang tua sulit tahu 3 kegiatan kelas | Pengunjung halaman kelas | 1) tombol ubah status/pesan 2) opsional: tampilkan teks cadangan |
| **B · Info kantin** | Menu/status harian tidak terbaca di satu tempat | Siswa yang mau cek cepat | 1) tombol status stok/menu 2) opsional: ganti sorotan |
| **C · Panduan siswa baru** | Informasi madrasah tercecer | Siswa baru | 1) tombol “pesan wali kelas” 2) opsional: sorot satu section via teks |

Guru paralel: rotasi A/B/C antar kelas agar tidak saling salin.

## Wajib / bukan

| Wajib kickoff | Bukan kickoff |
|---|---|
| Masalah 1–2 kalimat | Halaman “jadi” + CSS penuh |
| Spek 5–8 poin | Form dinamis, banyak tombol, library |
| ≥6 AC terukur | Dark mode / animasi sebagai syarat |
| Folder + skeleton `index.html` | Fitur JS ke-3 |
| Rencana: P24 HTML · P25 CSS · P26–27 JS | Menyalin starter P22 apa adanya sebagai project |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Kickoff** | Menetapkan masalah, batas, dan bukti lulus sebelum membangun |
| **Spek** | Apa yang harus ada (struktur, tampilan, perilaku) |
| **AC** | Syarat lulus yang bisa diuji tanpa debat selera |
| **DoD mini** | Spek + AC + kerangka siap untuk P24 |
| **Kerangka** | Folder dan file kosong/berisi landmark, bukan isi lengkap |

## Setup folder

Salin [skill-js/p23-project-kickoff/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p23-project-kickoff/) lalu **ganti nama folder** menjadi milikmu, misalnya `project-s1-kantin/`.

Isi minimal:

```text
project-s1-.../
  spek.md
  index.html
  style.css
  script.js
```

`script.js` boleh berisi komentar GUIDE saja; **jangan** mengisi fitur lengkap hari ini.

## Cognitive Trap

- “Sudah bisa klik di P22, jadi spek tidak perlu.” Project lebih luas: 2–3 section + rencana 2 fitur.  
- Menulis AC “halaman menarik / modern.” Tidak dapat dicentang.  
- Membangun CSS/JS penuh di kickoff → melewatkan P24–P27.  
- Menyalin PRJ 2JP (flowchart/zakat CLI) yang tidak cocok artefak 4JP.

## Guiding Questions

1. Siapa pengguna, dan masalahnya apa dalam satu kalimat?  
2. Section apa yang wajib ada (P10)?  
3. Dua fitur JS apa — dan mana yang **P26** vs **P27**?  
4. AC mana yang menguji klik, mana yang menguji struktur?  
5. Apa yang sengaja tidak dikerjakan di S1?

## Kriteria penerimaan (hari ini)

- [ ] Satu brief A/B/C dipilih  
- [ ] Spek 5–8 poin tertulis  
- [ ] ≥6 AC terukur  
- [ ] Daftar “bukan S1 / bukan hari ini”  
- [ ] Folder + `index.html` skeleton (landmark + `id` rencana)  
- [ ] `style.css` dan `script.js` ada (boleh hampir kosong)  
- [ ] Rencana P24–P27 satu baris masing-masing  
- [ ] Tidak ada fitur JS lengkap / CSS layout selesai

## Exit Ticket

1. Brief yang kupilih: …  
2. Masalah pengguna: …  
3. Dua fitur JS (P26 / P27): …  
4. Satu AC yang bisa diuji tanpa melihat kode: …

## Formatif

**Mengevaluasi · C5** · **Mencipta · C6** — paket kickoff, bukan keindahan halaman.

## Catatan Guru

Tahan build. Umpan balik hari ini: kejelasan masalah, ketepatan AC, dan kewajaran scope. HTML penuh = P24.
