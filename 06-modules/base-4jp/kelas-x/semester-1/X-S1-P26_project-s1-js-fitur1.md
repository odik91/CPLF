# X-S1-P26 — Project S1: Build JS Fitur 1

| Field | Isi |
|---|---|
| Kode | X-S1-P26 |
| Basis | **4JP** · Pertemuan **26/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Fitur 1 dari spek; tanpa tambah elemen HTML, tanpa fitur 2** |

## Learning Transformation

Dari halaman yang sudah terbaca → halaman yang **bereaksi**: satu event klik mengubah teks pada elemen yang sudah ditentukan spek, dengan bukti konsol.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut `getElementById`, `addEventListener`, `textContent`, event `click` |
| **C2** | Memahami | Menjelaskan alur dari spek → `id` → listener → perubahan teks |
| **C3** | Menerapkan | Mengimplementasikan fitur 1 di `script.js` project sendiri |
| **C4** | Menganalisis | Menemukan `null`, teks tidak berubah, atau listener tidak terpicu |
| **C5** | Mengevaluasi | Menguji AC fitur: sebelum klik, setelah klik, bukti konsol |
| **C6** | Mencipta | Fitur 1 dari `spek.md` dengan reasoning: "kenapa teks ini?" |

**Fokus:** C3–C5 · **Puncak:** C4–C6 · Fitur 2 → **P27**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P21 · hari ini sama, tetapi di project sendiri |
| 10–30 | Scaffold | C2 | `spek.md` → `id` → listener → AC pengujian |
| 30–50 | Experience | C2–C3 | Tunjuk `id`, tulis listener, uji sebelum/klik |
| 50–65 | Trap | C4 | `null`, `id` tidak cocok spek, listener terpasang dua kali |
| 65–85 | Concept | C2 | Alur: HTML `id` → JS pilih → event → aksi; console sebagai bukti |
| 85–95 | Practice mini | C3 | Trace AC sebelum klik vs setelah klik |
| 95–105 | Transisi | — | Buka `script.js` project · cek `id` vs `spek.md` |
| 105–120 | Scaffold praktik | C2–C3 | I do: tulis listener dari spek sendiri |
| 120–165 | Practice | C3–C6 | Implementasi + debug + uji AC + reasoning |
| 165–180 | Reflect | C5 | AC lulus · preview fitur 2 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Tambah tombol atau elemen baru di HTML | Pakai `id` yang sudah ada dari P23 |
| Fitur 2 "sekalian" | Satu listener satu tujuan |
| Ubah CSS | `script.js` saja hari ini |
| Kode dari internet tanpa penjelasan | Satu listener, baca alasannya |

## Konsep inti (spiral P21)

| Istilah | Arti di project |
|---|---|
| `getElementById` | Pilih elemen dari `id` yang sudah dijanjikan spek |
| `addEventListener("click", ...)` | Menunggu klik pada elemen terpilih |
| `textContent` | Ubah teks elemen saat event terpicu |
| Console | Bukti event; bukan klaim "sudah jalan" |
| AC fitur 1 | Sebelum klik = teks awal; setelah klik = teks target |

```javascript
const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Teks target dari spek.md";
  console.log("Fitur 1: pesan diperbarui.");
});
```

## Checklist implementasi fitur 1

- [ ] `id` di JS cocok persis dengan HTML dan `spek.md`  
- [ ] Teks awal `#pesan` sesuai AC  
- [ ] Klik mengubah `#pesan` ke teks target AC  
- [ ] Console mencatat event  
- [ ] Tidak ada elemen HTML baru  
- [ ] Fitur 2 belum disentuh

## Contoh (brief B kantin)

[skill-js/p26-js-fitur1/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p26-js-fitur1/) — pola listener; teks disesuaikan dengan `spek.md` masing-masing.

## Cognitive Trap

- `getElementById` mengembalikan `null` bila `id` typo atau HTML belum termuat.  
- Dua `addEventListener` untuk tombol yang sama → dua reaksi per klik.  
- `textContent` vs `innerHTML`: untuk teks biasa, `textContent` lebih aman.  
- "Sudah jalan" tanpa uji AC sebelum dan setelah = klaim tanpa bukti.

## Guiding Questions

1. `id` di `script.js` sama dengan di HTML dan `spek.md`?  
2. Teks sebelum klik sesuai AC?  
3. Teks setelah klik = teks target AC?  
4. Konsol memberi bukti event?  
5. Bisa menjelaskan baris listener ke peer?

## Kriteria penerimaan

- [ ] Fitur 1 jalan: klik → teks berubah → konsol  
- [ ] AC sebelum/sesudah dicentang  
- [ ] Peer dapat memverifikasi tanpa melihat kode  
- [ ] Reasoning "kenapa teks ini" bisa dijelaskan  
- [ ] Tanpa fitur 2 / elemen HTML baru

## Exit Ticket

1. `id` yang kupakai: …  
2. Teks awal / teks target: …  
3. Satu debug yang kutemukan: …  
4. Reasoning fitur 1: …

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — lulus AC, bukan cuma "klik bereaksi."

## Catatan Guru

Siswa hanya mengerjakan `script.js`. Jika elemen tidak ditemukan, tunjuk baris spek dan baris HTML — jangan langsung beri kode.
