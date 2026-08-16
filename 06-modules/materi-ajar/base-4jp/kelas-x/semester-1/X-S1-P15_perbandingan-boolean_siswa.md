# Handout Siswa — X-S1-P15

**Topik:** JavaScript Vanilla — Perbandingan & Boolean · **4JP** · Pertemuan **15/34**

**Modul:** [X-S1-P15_perbandingan-boolean.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P15_perbandingan-boolean.md)  
**Bacaan:** [X-S1-P15_bacaan-mimi-robi.md](./X-S1-P15_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p15-perbandingan-boolean.js](./skill-js/p15-perbandingan-boolean.js)

## Tujuan

Membandingkan nilai dan membaca hasilnya sebagai **Boolean**: `true` atau `false`. Hari ini hasil cek **belum** dipakai untuk memilih aksi.

## Capaian Bloom

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut Boolean dan operator perbandingan |
| C2 | Memahami | Menjelaskan ekspresi Boolean |
| C3 | Menerapkan | Menulis perbandingan dengan variabel |
| C4 | Menganalisis | Membaca trap tipe/operator |
| C5 | Mengevaluasi | Memilih operator sesuai aturan |
| C6 | Mencipta | Tabel aturan–ekspresi–prediksi |

## Konsep

| Operator | Dibaca | Contoh |
|---|---|---|
| `===` | sama nilai dan tipe | `skor === 75` |
| `!==` | tidak sama nilai atau tipe | `nama !== "Robi"` |
| `>` | lebih besar dari | `skor > 75` |
| `<` | lebih kecil dari | `stok < 5` |
| `>=` | lebih besar atau sama dengan | `skor >= 75` |
| `<=` | lebih kecil atau sama dengan | `usia <= 17` |

```javascript
const skor = 75;
const batasLulus = 75;

console.log(skor >= batasLulus); // true
console.log(skor === batasLulus); // true
console.log(skor !== 80); // true
console.log("75" === 75); // false
```

## Setup proyek dan latihan

1. Buat folder `js-dasar` di komputer.  
2. Salin file [p15-perbandingan-boolean.js](./skill-js/p15-perbandingan-boolean.js) ke folder itu.  
3. Buka folder dengan VS Code/editor.  
4. Jika Node.js tersedia, buka terminal di folder tersebut lalu jalankan:

```bash
node p15-perbandingan-boolean.js
```

Jika Node.js belum tersedia, salin eksperimen satu per satu ke **Console** browser. Catat prediksi sebelum hasil muncul.

## Prediksi → bukti

| Aturan manusia | Ekspresi JS | Prediksi | Hasil | Alasan |
|---|---|---|---|---|
| Skor minimal 75 | `skor >= 75` | | | |
| Stok kurang dari 5 | `stok < 5` | | | |
| Nama persis Mimi | `nama === "Mimi"` | | | |
| Menu bukan Mie | `menu !== "Mie"` | | | |
| Usia maksimal 17 | `usia <= 17` | | | |
| Buat sendiri 1 | | | | |
| Buat sendiri 2 | | | | |
| Buat sendiri 3 | | | | |

## Trap

```javascript
const skor = 75;
console.log(skor = 75);   // mengisi nilai, BUKAN membandingkan
console.log(skor === 75); // membandingkan
```

- `"75" === 75` adalah `false`: tipe kiri string, kanan number.  
- “Minimal 75” berarti `>=`, bukan `>`.  
- Jangan memakai `==`; gunakan `===`.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Menguji enam operator  
- [ ] ≥8 prediksi dicatat sebelum eksekusi  
- [ ] ≥4 aturan diterjemahkan menjadi ekspresi  
- [ ] Menjelaskan trap `=` vs `===`  
- [ ] Tanpa `if/else`, DOM, event, atau form

## Exit

1. Hasil `80 >= 80`: … karena …  
2. Operator untuk “nama bukan Mimi”: …  
3. Mengapa `"80" === 80` adalah …?  
4. Boolean hari ini belum dipakai untuk: …

**Preview P16:** `if/else` menggunakan Boolean untuk memilih satu dari dua tindakan.
