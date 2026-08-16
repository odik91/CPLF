# Materi Ajar Guru — X-S1-P14
## JavaScript Vanilla: Variabel & Ekspresi (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **14/34** · 180 menit |
| Transformasi | Nilai lepas → nilai bernama, dapat diproses dan ditelusuri |
| Fokus | variabel · `const` · `let` · assignment · ekspresi · IPO |
| Dilarang hari ini | DOM · event · form · if/else |
| Handout | [X-S1-P14_variabel-ekspresi_siswa.md](./X-S1-P14_variabel-ekspresi_siswa.md) |
| Bacaan | [X-S1-P14_bacaan-mimi-robi.md](./X-S1-P14_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p14-variabel-ekspresi.js](./skill-js/p14-variabel-ekspresi.js) |

## Capaian Bloom

| Kode | Level | Bukti |
|---|---|---|
| C1 | Mengingat | Istilah variabel/deklarasi/assignment |
| C2 | Memahami | Menjelaskan `const` vs `let` |
| C3 | Menerapkan | Program console mini |
| C4 | Menganalisis | Trace nilai dan diagnosis error |
| C5 | Mengevaluasi | Pilihan `const`/`let` beralasan |
| C6 | Mencipta | IPO milik siswa |

## Persiapan

- Konsol atau file [skill-js/p14-variabel-ekspresi.js](./skill-js/p14-variabel-ekspresi.js).  
- Kartu nilai P13 dan sticky note sebagai label.  
- Contoh kontekstual: harga/jumlah/total, profil siswa, durasi kegiatan.  
- Tidak perlu HTML/form.  
- Komentar di file skill hanya definisi/panduan; siswa tidak perlu meniru gaya komentar berlebihan.

## Miskonsepsi sasaran

1. Variabel hanyalah kotak tanpa tipe/konteks.  
2. Semua deklarasi memakai `let`.  
3. `const` dan `let` dipilih acak.  
4. `=` berarti “sama dengan.”  
5. Nama `x`, `a`, `data` selalu cukup.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

Tampilkan `12000`, `2`, `"Mie Sehat"`. Tanya: “Angka ini mewakili apa?”

> “Nilai tanpa nama bisa benar tetapi sulit dipahami dan dipakai ulang.”

### 10–30 · Scaffold · C2

Gunakan label fisik:

```javascript
const hargaMie = 12000;
```

Jelaskan bagian:

- `const`: cara deklarasi  
- `hargaMie`: nama  
- `=`: memberi nilai  
- `12000`: nilai

Koreksi metafora: variabel bukan kotak ajaib; bagi pemula, pahami sebagai **nama yang menunjuk nilai**.

### 30–50 · Experience · C2–C3

```javascript
const namaMenu = "Mie Sehat";
const harga = 12000;
let jumlah = 2;
console.log(harga * jumlah);
jumlah = 3;
console.log(harga * jumlah);
```

Siswa trace tabel:

| Baris | `harga` | `jumlah` | output |
|---|---|---|---|

### 50–65 · Trap · C4

Trap 1:

```javascript
const skor = 10;
skor = 11;
```

Trap 2:

```javascript
console.log(total);
const total = 24000;
```

Trap 3:

```javascript
const x = 12000;
const y = 2;
const z = x * y;
```

Tanya bukan “apakah jalan?” saja, tetapi “apakah niat kode terbaca?”

### 65–85 · Concept · C2

Peta istilah:

| Konsep | Pertanyaan |
|---|---|
| deklarasi | Nama apa yang dibuat? |
| assignment | Nilai apa yang diberikan? |
| expression | Nilai apa yang dihasilkan? |
| const/let | Apakah nama ditugasi ulang? |
| IPO | data awal → proses → bukti hasil |

Aturan kelas: **mulai dengan `const`; pindah ke `let` hanya jika ada reassignment yang direncanakan.**

### 85–95 · Practice mini · C3–C5

Gunakan 5 kasus handout. Siswa angkat kartu `const`/`let`, lalu satu siswa menjelaskan alasan.

### 95–105 · Transisi

1. Buka folder `js-dasar`.  
2. Salin [skill-js/p14-variabel-ekspresi.js](./skill-js/p14-variabel-ekspresi.js).  
3. Jalankan file; data ditulis di kode — form belum dipakai.  
4. Tegaskan aturan komentar: hanya definisi/panduan bila perlu.

### 105–120 · I do: IPO · C2–C3

```javascript
const harga = 12000; // input
let jumlah = 2;      // input
const total = harga * jumlah; // process
console.log(total);  // output
```

Catatan penting: setelah `jumlah` berubah, `total` lama tidak menghitung ulang otomatis. Ini peluang membahas eksekusi berurutan tanpa masuk reaktivitas.

### 120–150 · Practice · C3–C6

Siswa memilih satu program mini:

- total belanja,  
- durasi kegiatan, atau  
- profil data sederhana.

Syarat: ≥3 nama jelas, satu ekspresi, output, satu `let` yang benar-benar berubah.

### 150–165 · Peer trace · C4–C5

Pasangan menelusuri nilai per baris dan memberi satu saran nama. Uji berdasar AC, bukan “keren.”

### 165–180 · Reflect + Exit · C4–C5

Preview:

> “P15 membandingkan nilai. Hasil perbandingan adalah Boolean `true` atau `false`. `if/else` masih belum masuk sampai P16.”

## Contoh jawaban program mini

```javascript
const hargaBuku = 18000;
let jumlahBuku = 2;
const totalAwal = hargaBuku * jumlahBuku;
console.log(totalAwal);

jumlahBuku = 3;
const totalBaru = hargaBuku * jumlahBuku;
console.log(totalBaru);
```

## Diferensiasi

**Butuh dukungan:** sediakan nama variabel, siswa melengkapi nilai/proses.  
**Cepat:** jelaskan mengapa `totalAwal` tidak berubah setelah `jumlahBuku` diubah; jangan loncat ke DOM atau kondisi.

## Asesmen formatif

| Indikator | Belum | Berkembang | Tercapai |
|---|---|---|---|
| Nama variabel | Acak | Cukup terbaca | Jelas dan konsisten |
| `const`/`let` | Acak | Benar tanpa alasan | Benar + alasan |
| Trace | Hanya output akhir | Beberapa baris | Nilai tiap langkah |
| IPO | Tidak terpisah | Dua bagian jelas | Input–proses–output jelas |

## Checklist guru

- [ ] Recall tipe P13  
- [ ] Anatomikan deklarasi  
- [ ] Trap perubahan `const`  
- [ ] Nama bermakna  
- [ ] Program IPO console  
- [ ] Tidak memakai DOM/event/form/if-else

## KBC

**Cinta ilmu dan tanggung jawab:** nama variabel yang jujur membantu rekan membaca keputusan program.
