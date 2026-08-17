# Materi Ajar Guru — X-S1-P18
## JavaScript Vanilla: Array & Loop (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **18/34** · 180 menit |
| Transformasi | Nilai tunggal → daftar berindeks + pengulangan yang ditelusuri |
| Fokus | array · indeks · `length` · `for` · trace iterasi |
| Dilarang hari ini | DOM · object · `while` · `forEach`/`map`/`filter` |
| Handout | [X-S1-P18_array-loop_siswa.md](./X-S1-P18_array-loop_siswa.md) |
| Bacaan | [X-S1-P18_bacaan-mimi-robi.md](./X-S1-P18_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p18-array-loop.js](./skill-js/p18-array-loop.js) |

## Capaian Bloom

| Kode | Level | Bukti |
|---|---|---|
| C1 | Mengingat | Istilah array/indeks/loop |
| C2 | Memahami | Indeks 0 dan syarat berhenti |
| C3 | Menerapkan | Array + `for` |
| C4 | Menganalisis | Trace putaran |
| C5 | Mengevaluasi | Loop vs copy-paste |
| C6 | Mencipta | Daftar mini milik siswa |

## Persiapan

- Node.js atau Console browser; tanpa HTML.  
- Kartu indeks `0`, `1`, `2` dan daftar 3–4 item.  
- Papan: **array → indeks → syarat loop → tubuh → output**.  
- Komentar skill hanya DEFINISI/GUIDE.

## Miskonsepsi sasaran

1. Elemen pertama = indeks 1.  
2. `length` adalah indeks terakhir.  
3. Loop “ajaib” tanpa syarat berhenti.  
4. Semua koleksi = object (belum).  
5. `forEach` lebih “modern” jadi wajib hari ini.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

Tulis lima `console.log` menu yang hampir sama. Tanya: “Apa yang berulang? Apa yang berubah?”

> “Kalau daftar bertambah, copy-paste akan membengkak. Kita butuh wadah daftar dan pengulangan yang eksplisit.”

### 10–30 · Scaffold: array · C2

```javascript
const menus = ["Mie Sehat", "Nasi Goreng", "Es Teh"];
```

Tempel kartu indeks di depan tiap item. Tekankan: urutan penting; posisi pertama = `0`.

### 30–50 · Experience · C2–C3

```javascript
console.log(menus[0]);
console.log(menus[2]);
console.log(menus.length);
```

Siswa prediksi sebelum Enter. Bandingkan dengan `menus[3]` → `undefined`.

### 50–65 · Trap · C4

```javascript
console.log(menus[menus.length]); // undefined
console.log(menus[menus.length - 1]); // elemen terakhir
console.log(typeof menus); // "object" — jebakan; object penuh P19
```

### 65–85 · Concept: `for` · C2

Anatomikan:

| Bagian | Peran |
|---|---|
| `let i = 0` | mulai |
| `i < menus.length` | lanjut selama benar |
| `i = i + 1` | langkah |
| `{ ... }` | tubuh tiap putaran |

Hindari `i++` dulu jika kelas belum siap; `i = i + 1` lebih eksplisit. Boleh sebut `i++` sebagai singkatan setelah dipahami.

### 85–95 · Practice mini · C3–C4

Isi tabel trace untuk 3 elemen. Wajib prediksi putaran setelah elemen terakhir (loop berhenti).

### 95–105 · Setup

Salin dan jalankan [p18-array-loop.js](./skill-js/p18-array-loop.js).

### 105–120 · I do · C2–C3

```javascript
const harga = [12000, 15000, 5000];
let total = 0;

for (let i = 0; i < harga.length; i = i + 1) {
  total = total + harga[i];
  console.log(harga[i]);
}

console.log(total);
```

Suarakan: “Putaran 0: total menjadi …; putaran 1: …”

### 120–150 · Practice · C3–C6

Siswa: array ≥3 + `for` (cetak dan/atau jumlah). Peer trace indeks/elemen.

### 150–165 · Peer · C4–C5

Pasangan menguji kasus: array 1 elemen, array 4 elemen, akses indeks terakhir. Feedback menyebut indeks/syarat, bukan “keren.”

### 165–180 · Reflect · C4–C5

Preview:

> “P19: object untuk data bernama berbeda peran, dan function untuk membungkus proses.”

## Kunci singkat

| Ekspresi | Hasil (contoh 3 menu) |
|---|---|
| `menus[0]` | elemen pertama |
| `menus.length` | `3` |
| `menus[2]` | elemen terakhir |
| `menus[3]` | `undefined` |

## Diferensiasi

**Butuh dukungan:** array disediakan; siswa isi indeks dan tubuh loop.  
**Cepat:** jumlahkan array angka + cetak elemen terakhir; jangan masuk object/`map`.

## Asesmen formatif

| Indikator | Belum | Berkembang | Tercapai |
|---|---|---|---|
| Indeks | Mulai dari 1 | Benar sebagian | 0 … length-1 + alasan |
| Syarat loop | Tidak jelas | Ada, belum akurat | `i < length` tepat |
| Trace | Hanya output akhir | Beberapa putaran | Indeks+elemen tiap putaran |

## Checklist guru

- [ ] Array sebelum loop  
- [ ] Trap indeks / `length`  
- [ ] Trace putaran  
- [ ] File latihan  
- [ ] Tanpa DOM/object/`while`/method lanjut

## KBC

**Ilmu dan ketelitian:** pengulangan yang adil tetap dapat dicek elemen demi elemen, termasuk di indeks paling ujung.
