# Bacaan Pendamping — X-S1-P14
## Mimi & Robi: Nama untuk Nilai, Const yang Dipaksa Berubah, & Variabel Bernama “x”

| Field | Isi |
|---|---|
| Kode | X-S1-P14 — JavaScript Vanilla: Variabel & Ekspresi |
| Pertemuan | **14 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |
| Nada | POV Mimi · humor · plot twist |

**Handout:** [X-S1-P14_variabel-ekspresi_siswa.md](./X-S1-P14_variabel-ekspresi_siswa.md)

---

Halo. Mimi.

Kemarin Robi punya nilai berserakan:

```javascript
12000
2
"Mie Sehat"
```

Hari ini guru bertanya: “Dua belas ribu itu apa?”

Robi:

> “Angka.”

> “Harga apa? Untuk apa?”

Diam. Angka tanpa nama kehilangan konteks.

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Memberi nilai nama, lalu memprosesnya |
| Alat | `const`, `let`, ekspresi, `console.log` |
| Bukan | DOM · form · event · if/else |

## Adegan 1 — label yang jujur

```javascript
const hargaMie = 12000;
const jumlahPorsi = 2;
const total = hargaMie * jumlahPorsi;
```

Sekarang `12000` bukan angka misterius. Namanya menjelaskan niat.

Robi memilih nama:

```javascript
const x = 12000;
const y = 2;
const z = x * y;
```

Aku:

> “Kode atau teka-teki silang?”

## Plot twist — const dipaksa berubah

```javascript
const jumlah = 2;
jumlah = 3;
```

Konsol protes.

> “JavaScript keras kepala.”

> “Kamu berjanji lewat `const`: nama ini tidak akan ditugasi ulang. Kalau memang berubah, pilih `let`.”

```javascript
let jumlah = 2;
jumlah = 3;
```

Bukan berarti semua memakai `let`. Default `const`; `let` hanya jika rencana memang berubah.

## Adegan 2 — IPO mini

```javascript
const harga = 12000; // input
let jumlah = 2;      // input
const total = harga * jumlah; // process
console.log(total);  // output
```

Robi ingin membaca input dari form. Aku parkir lagi.

> “Form berarti DOM. Kita belum ke sana. Hari ini data tersedia di kode supaya fokusmu tidak pecah.”

Plot twist: menahan fitur bukan mundur. Itu menjaga beban belajar.

## Concept

| Istilah | Arti |
|---|---|
| Variabel | Nama yang menunjuk nilai |
| Deklarasi | Membuat nama |
| Assignment | Memberi nilai dengan `=` |
| `const` | Tidak ditugasi ulang |
| `let` | Akan ditugasi ulang |
| Ekspresi | Menghasilkan nilai |

## Peer trace

Teman membaca kode baris demi baris dan mencatat nilai `jumlah` sebelum/sesudah. Tidak ada tombol. Tidak ada sulap. Hanya perubahan eksplisit.

## Exit

1. Beda `const` dan `let`
2. Nama `x` yang kamu perbaiki
3. IPO program mini

> **Variabel bukan hafalan sintaks. Variabel memberi data nama dan jejak perubahan.**

— **Mimi** 🐾
*(Robi mengganti `z` menjadi `totalBelanja`. Character development yang bisa dibaca.)*
