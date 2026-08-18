# Materi Ajar Guru — X-S1-P26
## Project S1: JS Fitur 1 (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **26/34** · 180 menit |
| Fokus | `getElementById` · click · `textContent` · AC fitur 1 |
| Dilarang | Fitur 2 · elemen HTML baru · CSS baru · kode tanpa reasoning |
| Handout | [X-S1-P26_project-s1-js-fitur1_siswa.md](./X-S1-P26_project-s1-js-fitur1_siswa.md) |
| Bacaan | [X-S1-P26_bacaan-mimi-robi.md](./X-S1-P26_bacaan-mimi-robi.md) |
| Contoh | [skill-js/p26-js-fitur1/](./skill-js/p26-js-fitur1/) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Alur `id` → pilih → event → ubah teks |
| C3 | Fitur 1 di project sendiri |
| C4 | Diagnosis `null` / teks tidak berubah |
| C5 | AC sebelum/sesudah dicentang |
| C6 | Reasoning "kenapa teks ini" |

## Persiapan

- Siswa buka `spek.md` dan identifikasi `id` fitur 1.  
- Siapkan contoh p26 untuk yang stuck.  
- Timer: trace 20' · implementasi 40' · debug 10' · peer 15'.

## Miskonsepsi

1. "Sudah klik, pasti jalan" — tanpa uji teks awal.  
2. Listener dipasang dua kali.  
3. `id` di JS berbeda satu karakter dari HTML.  
4. Langsung menulis fitur 2 "sekalian."

## Timeline & skrip

### 0–10 · Orientation · C1

> "P21 kita buktikan listener. Hari ini listener itu ada di project dengan `id` dari spek kalian sendiri. Satu fitur. Satu AC."

### 10–30 · Scaffold · C2

Gambar alur: `spek.md` → `id` di HTML → pilih di JS → event → teks berubah. Tunjukkan `#pesan` sebagai titik sambung.

### 30–50 · Experience · C2–C3

Buka contoh p26. Ganti satu teks. Tunjukkan uji sebelum/klik/konsol. Siswa prediksi dulu.

### 50–65 · Trap · C4

Ubah `id` satu huruf → `null`. Tanya: "Mana yang memberi alamat?"

Tunjukkan listener duplikat: dua `console.log` per klik. Tanya: "Berapa tombol yang terpasang listener?"

### 65–95 · Concept + trace · C2–C3

Tabel AC: sebelum / klik / konsol. Practice mini: siswa isi trace dari `spek.md` mereka sendiri.

### 95–120 · I do · C2–C3

Tulis listener dari spek sampel, bukan copy-paste. Suarakan tiap baris.

### 120–150 · Implementasi · C3–C6

Kerjakan di project. Guru pertanyakan: "Teks ini berasal dari poin AC berapa?"

### 150–165 · Peer · C5

Peer tidak melihat kode. Klik → catat teks. Cocokkan dengan `spek.md`. Feedback: AC lulus/gagal + bukti.

### 165–180 · Reflect · C5

Jika fitur 1 lulus, tulis reasoning satu paragraf. Preview P27: fitur 2 atau polish logika.

## Diferensiasi

**Butuh dukungan:** berikan pola listener; siswa isi tiga titik (nama id, teks target, log).  
**Cepat:** tambah satu variabel `const sudahDiklik = false` lalu kondisi `if/else` — bukan fitur baru, tapi logika dalam listener yang sama.

## Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| `id` | Tidak cocok | Persis spek |
| AC | Tidak diuji | Sebelum/sesudah + konsol |
| Reasoning | "Pokoknya jalan" | Baris by baris penjelasan |
| Scope | Fitur 2 juga | Hanya fitur 1 |

## Checklist guru

- [ ] Spek di meja  
- [ ] AC trace  
- [ ] Peer tanpa kode  
- [ ] Reasoning  
- [ ] Tidak ada fitur 2

## KBC

**Kejujuran:** AC "sebelum/sesudah" adalah bukti yang tidak bisa diklaim tanpa diuji.
