# Materi Ajar Guru — X-S1-P23
## Project S1 Kickoff (4JP) · pembuka Blok 4

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **23/34** · 180 menit |
| Transformasi | Skill Blok 3 → project bounded dengan spek dulu |
| Fokus | framing · brief A/B/C · spek · AC · folder skeleton |
| Dilarang | Halaman jadi · CSS penuh · JS fitur lengkap · PRJ 2JP sebagai tugas |
| Handout | [X-S1-P23_project-s1-kickoff_siswa.md](./X-S1-P23_project-s1-kickoff_siswa.md) |
| Bacaan | [X-S1-P23_bacaan-mimi-robi.md](./X-S1-P23_bacaan-mimi-robi.md) |
| Kerangka | [skill-js/p23-project-kickoff/](./skill-js/p23-project-kickoff/) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Kickoff ≠ build; AC ≠ selera |
| C3 | Spek + folder |
| C4 | Fitur dipotong sesuai skill S1 |
| C5 | AC dapat diuji |
| C6 | Paket kickoff milik siswa |

## Persiapan

- Tulis di papan brief A/B/C + rotasi kelas.  
- Timer: pilih 15' · spek/AC 40' · folder 30' · umpan balik 20'.  
- Siapkan stempel mental: **maks. 2 klik JS**.  
- Jangan bagikan project “kunci jadi.”

## Miskonsepsi sasaran

1. Kickoff = mulai mewarnai CSS.  
2. Semakin banyak fitur semakin bernilai.  
3. P22 cukup disalin, diganti judul.  
4. PRJ-X-S1-01 (flowchart 2JP) adalah tugas 4JP.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

> “Blok 4 bukan materi tag baru. Ini bukti: masalah → spek → bangun bertahap → uji. Hari ini janji tertulis. P24 baru memasang dinding.”

### 10–30 · Scaffold brief · C2

Baca tiga masalah. Tanya: “Penggunanya siapa? Apa yang gagal jika halaman tidak ada?” Tekankan artefak = satu HTML + CSS + JS, bukan CLI.

### 30–50 · Pilih + potong · C2–C4

Siswa memilih. Kartu merah: fitur yang di luar S1 (form kirim server, banyak halaman, library). Wajib ada daftar “bukan.”

### 50–65 · Trap · C4

Contoh AC buruk: “UI keren.” Ubah bersama menjadi: “Ada 3 `section` dengan `h2`; sebelum klik `#pesan` berisi …; setelah klik berisi ….”

### 65–85 · Concept · C2

| Dokumen | Isi |
|---|---|
| spek.md | masalah, pengguna, section, 2 fitur, batas |
| AC | uji struktur / keterbacaan / klik 1 / klik 2 |
| kerangka | file ada, isi belum lengkap |

Peta: P24 struktur · P25 tampilan · P26 fitur 1 · P27 fitur 2 · P28 uji.

### 85–95 · Practice mini · C3–C5

Tukar 2 AC dengan tetangga: “Bisakah aku uji ini tanpa bertanya ‘maksudmu keren apa’?”

### 95–120 · Setup + I do · C2–C3

Salin kerangka. Demo `spek.md` 8 baris + `header/main/footer` + dua `id` rencana. `script.js` hanya komentar GUIDE.

### 120–150 · Practice · C3–C6

Siswa menulis spek/AC dan skeleton. Guru keliling: kejelasan masalah dulu, baru jumlah section.

### 150–165 · Umpan balik · C5

Guru/peer: 2 menit per siswa — “AC #3 tidak terukur” atau “fitur 3 dipotong.” Bukan komentar warna.

### 165–180 · Reflect · C5

Preview P24: isi section sesuai spek; CSS masih kasar. Arsip folder.

## Diferensiasi

**Butuh dukungan:** pakai template `spek.md` starter; siswa hanya mengisi blank.  
**Cepat:** tulis AC negatif (“tidak ada tombol ketiga”) — jangan mulai CSS.

## Asesmen formatif

| Indikator | Belum | Tercapai |
|---|---|---|
| Masalah | Tidak ada pengguna | 1 kalimat + siapa |
| AC | Selera | ≥6 terukur |
| Scope | >2 fitur JS / library | 2 fitur + daftar bukan |
| Kerangka | Tidak ada folder | File + landmark |

## Checklist guru

- [ ] Rotasi brief  
- [ ] Spek + AC  
- [ ] Folder skeleton  
- [ ] Potong scope  
- [ ] Tidak ada build penuh  
- [ ] Preview P24

## KBC

**Tanggung jawab:** spek adalah janji kepada pengguna (teman, wali, siswa baru) — bukan daftar keinginan coding.
