# Materi Ajar Guru — X-S1-P19
## JavaScript Vanilla: Object & Function (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **19/34** · 180 menit |
| Fokus | object datar · properti · function · parameter · `return` |
| Dilarang | DOM · event · nested object · method · callback |
| Handout | [X-S1-P19_object-function_siswa.md](./X-S1-P19_object-function_siswa.md) |
| Bacaan | [X-S1-P19_bacaan-mimi-robi.md](./X-S1-P19_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p19-object-function.js](./skill-js/p19-object-function.js) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Membeda array/object, parameter/argumen |
| C3 | Object datar dan function dengan `return` |
| C4 | Trace data dan diagnosis properti typo |
| C5 | Pilihan struktur data beralasan |
| C6 | Artefak mini milik siswa |

## Persiapan & miskonsepsi

- Papan: **data → properti** dan **argumen → parameter → return**.  
- Array bukan “object yang sama saja” pada tahap ini: bedakan tugasnya.  
- Function tidak dieksekusi saat definisi.  
- `console.log` tidak menggantikan `return`.

## Timeline & skrip fasilitasi

### 0–30 · Object · C1–C2

Bandingkan:

```javascript
const menu = ["Mie", 12000, true];
const produk = { nama: "Mie", harga: 12000, tersedia: true };
```

Tanya: “Nilai 12000 berarti apa pada array? Bagaimana object membuatnya terbaca?” Ajarkan dot notation.

### 30–65 · Experience + trap · C2–C4

```javascript
console.log(produk.nama);
console.log(produk.namaa); // undefined
```

Minta siswa menemukan perbedaan huruf, bukan mengganti kode acak.

### 65–95 · Function · C2–C4

```javascript
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}
console.log(hitungTotal(12000, 2));
```

Trace langsung: argumen 12000 → parameter harga; 2 → jumlah; return 24000. Jangan mengirim object ke function.

### 95–120 · Setup + I do · C2–C3

Jalankan [p19-object-function.js](./skill-js/p19-object-function.js). Ingatkan komentar hanya definisi/panduan.

### 120–150 · Practice · C3–C6

Siswa buat profil/produk datar dan satu function proses angka. Syarat: nama jelas, 3 properti, parameter, return.

### 150–165 · Peer trace · C4–C5

Peer membaca panggilan tanpa menjalankan, memprediksi return, lalu membuktikan di konsol.

### 165–180 · Reflect · C4–C5

Preview P20: error sebagai informasi, bukan kegagalan identitas.

## Asesmen formatif

| Indikator | Belum | Tercapai |
|---|---|---|
| Struktur data | Acak | Array/object dipilih beralasan |
| Properti | Salah / kabur | Dot notation tepat |
| Function | Tidak ada hasil | Parameter dan return ditrace |
| Batas materi | Nested/method | Object datar + function biasa |

## Checklist guru

- [ ] Array vs object  
- [ ] Trap typo properti  
- [ ] Parameter/argumen/return  
- [ ] Latihan file  
- [ ] Tanpa DOM/nested/method/callback

## KBC

**Ilmu dan tanggung jawab:** data dan proses yang dinamai jelas memudahkan pemeriksaan bersama.
