# Materi Ajar Guru — X-S1-P17
## JavaScript Vanilla: Kondisi Multi-Syarat (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **17/34** · 180 menit |
| Fokus | `&&`, `||`, `!`, trace subkondisi |
| Dilarang | DOM · event · form · `else if` · nested condition |
| Handout | [X-S1-P17_kondisi-multi-syarat_siswa.md](./X-S1-P17_kondisi-multi-syarat_siswa.md) |
| Bacaan | [X-S1-P17_bacaan-mimi-robi.md](./X-S1-P17_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p17-kondisi-multi-syarat.js](./skill-js/p17-kondisi-multi-syarat.js) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Menyebut dan menjelaskan operator logika |
| C3 | Kondisi gabungan di `if/else` |
| C4 | Trace setiap subkondisi |
| C5 | Uji kombinasi lengkap |
| C6 | Aturan multi-syarat milik siswa |

## Persiapan & miskonsepsi

- Siapkan kartu `true`/`false`, tabel 2×2, dan Node/Console.  
- `&&` sering disalahartikan “atau”; `||` sebaliknya.  
- `!` membalik Boolean, bukan menghapus nilai.  
- Jangan mengizinkan `else if` sebagai jalan pintas.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

> “P16 memeriksa satu syarat. Hari ini satpam memiliki dua cek, tetapi program tetap hanya memilih satu cabang.”

### 10–30 · Scaffold · C2

Role-play: masuk ruang praktik perlu kartu **dan** tepat waktu. Susun semua kombinasi kartu Boolean; jangan langsung kode.

| Kartu | Tepat waktu | `&&` |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

Tambahkan kasus tiket **atau** undangan untuk `||`, dan “belum login” untuk `!`.

### 30–65 · Experience + Trap · C2–C4

```javascript
const punyaKartu = true;
const tepatWaktu = false;
console.log(punyaKartu && tepatWaktu);
console.log(punyaKartu || tepatWaktu);
console.log(!tepatWaktu);
```

Tanya: “Boolean mana yang berubah? Mana yang digabung?” Trap: gunakan `&&` untuk syarat yang seluruhnya wajib, bukan karena kata “dan” terdengar lebih ketat.

### 65–95 · Concept + practice mini · C2–C5

Pola papan: **aturan → subkondisi bernama → operator → hasil gabungan → cabang**. Pasangan trace empat kombinasi `&&`; cek terutama kombinasi yang belum dicoba.

### 95–120 · Setup + I do · C2–C3

Jalankan [p17-kondisi-multi-syarat.js](./skill-js/p17-kondisi-multi-syarat.js).

```javascript
if (punyaKartu && tepatWaktu) {
  console.log("Boleh masuk");
} else {
  console.log("Belum boleh masuk");
}
```

Suarakan trace setiap Boolean. Komentar file hanya definisi/panduan.

### 120–165 · Practice + peer trace · C3–C6

Siswa membuat satu aturan: dua syarat wajib (`&&`), satu dari dua bukti (`||`), atau larangan (`!`). Peer wajib menguji seluruh kombinasi relevan dan mencatat bukti.

### 165–180 · Reflect · C4–C5

Preview P18: banyak nilai dan pengulangan. Jangan memperkenalkan array/loop hari ini.

## Asesmen formatif

| Indikator | Belum | Tercapai |
|---|---|---|
| Operator | Menebak | Sesuai aturan + alasan |
| Trace | Hanya hasil akhir | Semua subkondisi terbaca |
| Uji | Satu kombinasi | Semua kombinasi relevan |
| Batas materi | `else if`/DOM | Satu ekspresi gabungan vanilla |

## Checklist guru

- [ ] Tabel `&&`, `||`, `!`  
- [ ] Semua kombinasi diuji  
- [ ] File latihan dijalankan  
- [ ] Tidak memakai DOM/form/`else if`/nested condition

## KBC

**Keadilan dan ilmu:** jika keputusan dipengaruhi beberapa syarat, setiap syarat harus terlihat dan dapat diuji.
