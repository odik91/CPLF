# Handout Siswa — X-S1-P18

**Topik:** JavaScript Vanilla — Array & Loop · **4JP** · Pertemuan **18/34**

**Modul:** [X-S1-P18_array-loop.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P18_array-loop.md)  
**Bacaan:** [X-S1-P18_bacaan-mimi-robi.md](./X-S1-P18_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p18-array-loop.js](./skill-js/p18-array-loop.js)

## Tujuan

Menyimpan banyak nilai sejenis dalam **array**, lalu memprosesnya berulang dengan **`for`**.

## Capaian Bloom

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut array, indeks, `length`, loop |
| C2 | Memahami | Menjelaskan indeks mulai 0 |
| C3 | Menerapkan | Membuat array dan `for` |
| C4 | Menganalisis | Trace tiap putaran |
| C5 | Mengevaluasi | Memilih loop vs tulis ulang |
| C6 | Mencipta | Daftar mini + loop milik sendiri |

## Konsep

| Istilah | Arti | Contoh |
|---|---|---|
| Array | Daftar dalam `[ ]` | `["Mie", "Nasi"]` |
| Indeks | Posisi dari 0 | `menus[0]` |
| `length` | Banyak elemen | `menus.length` |
| Loop | Mengulang blok | `for (...) { }` |
| Iterasi | Satu putaran | putaran `i = 1` |

```javascript
const menus = ["Mie Sehat", "Nasi Goreng", "Es Teh"];

console.log(menus[0]);
console.log(menus.length);

for (let i = 0; i < menus.length; i = i + 1) {
  console.log(menus[i]);
}
```

## Setup latihan

1. Salin [p18-array-loop.js](./skill-js/p18-array-loop.js) ke `js-dasar`.  
2. Jalankan `node p18-array-loop.js` atau Console browser.  
3. Prediksi indeks dan elemen tiap putaran.  
4. Komentar hanya **DEFINISI** / **GUIDE**.

## Trace loop

| Putaran | Nilai `i` | `i < length`? | `menus[i]` | Output |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| setelah | | | | (loop berhenti) |

## Rencana daftar milikmu

| Bagian | Isi |
|---|---|
| Nama array | |
| Elemen (≥3) | |
| Proses di loop | cetak / jumlah / lain: … |
| Bukti trace | |

## Trap

- Elemen pertama: indeks `0`.  
- Indeks terakhir: `length - 1`.  
- `menus[menus.length]` → `undefined`.  
- Jangan memakai object `{ }`, `while`, atau `forEach` hari ini.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Array ≥3 elemen  
- [ ] Satu `for` memproses seluruh array  
- [ ] Trace ≥3 putaran  
- [ ] Tanpa DOM/object/`while`/`forEach`

## Exit

1. Indeks elemen pertama: …  
2. Jika `length` = 4, indeks terakhir: …  
3. Arti `i < menus.length`: …  
4. Kenapa pakai loop: …

**Preview P19:** object (data bernama) dan function (bungkus proses).
