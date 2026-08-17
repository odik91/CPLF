# Handout Siswa — X-S1-P19

**Topik:** JavaScript Vanilla — Object & Function · **4JP** · Pertemuan **19/34**

**Modul:** [X-S1-P19_object-function.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P19_object-function.md)  
**Bacaan:** [X-S1-P19_bacaan-mimi-robi.md](./X-S1-P19_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p19-object-function.js](./skill-js/p19-object-function.js)

## Konsep

| Istilah | Arti |
|---|---|
| Object | Satu data dengan properti bernama |
| Properti | Label dan nilai: `profil.nama` |
| Function | Proses bernama yang bisa dipanggil |
| Parameter | Nama input di function |
| Argumen | Nilai saat function dipanggil |
| `return` | Hasil yang dikirim ke pemanggil |

```javascript
const profil = {
  nama: "Mimi",
  kelas: "X",
  usia: 16
};

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

console.log(profil.nama);
console.log(hitungTotal(12000, 2));
```

## Array atau object?

| Data | Pilihan | Alasan |
|---|---|---|
| Daftar tiga menu berurutan | | |
| Profil satu siswa: nama, kelas, usia | | |
| Harga tiga produk | | |
| Satu buku: judul, penulis, tahun | | |

## Setup latihan

1. Salin [p19-object-function.js](./skill-js/p19-object-function.js) ke `js-dasar`.  
2. Jalankan `node p19-object-function.js` atau Console browser.  
3. Trace properti dan argumen → parameter → hasil.  
4. Komentar hanya **DEFINISI** / **GUIDE**.

## Trace function

| Panggilan | Argumen | Parameter | `return` | Output |
|---|---|---|---|---|
| `hitungTotal(12000, 2)` | | | | |
| Buat sendiri | | | | |

## Trap

- `profil.nama` benar; `profil.namaa` → `undefined`.  
- `console.log` ≠ `return`.  
- Function baru berjalan saat dipanggil `namaFunction()`.

## Kriteria penerimaan

- [ ] Object datar ≥3 properti  
- [ ] Mengakses ≥2 properti  
- [ ] Function ≥1 parameter + `return`  
- [ ] Trace panggilan function  
- [ ] Tanpa DOM/nested object/method/callback

## Exit

1. Array vs object: …  
2. Parameter vs argumen: …  
3. `return` berguna untuk: …

**Preview P20:** error dibaca sebagai informasi untuk membuat hipotesis dan memperbaiki kode.
