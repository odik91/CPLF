# Materi Ajar Guru — X-S1-P15
## JavaScript Vanilla: Perbandingan & Boolean (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **15/34** · 180 menit |
| Transformasi | Nilai diproses → nilai dibandingkan menjadi fakta Boolean |
| Fokus | Boolean · `===` · `!==` · `>` · `<` · `>=` · `<=` |
| Dilarang hari ini | `if/else` · `&&` · `||` · DOM · event · form |
| Handout | [X-S1-P15_perbandingan-boolean_siswa.md](./X-S1-P15_perbandingan-boolean_siswa.md) |
| Bacaan | [X-S1-P15_bacaan-mimi-robi.md](./X-S1-P15_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p15-perbandingan-boolean.js](./skill-js/p15-perbandingan-boolean.js) |

## Capaian Bloom

| Kode | Level | Bukti |
|---|---|---|
| C1 | Mengingat | Menyebut operator dan Boolean |
| C2 | Memahami | Menjelaskan perbandingan menghasilkan Boolean |
| C3 | Menerapkan | Menjalankan operator dengan variabel |
| C4 | Menganalisis | Diagnosis tipe, arah, dan assignment keliru |
| C5 | Mengevaluasi | Operator cocok dengan aturan |
| C6 | Mencipta | Aturan–ekspresi–prediksi milik siswa |

## Persiapan

- Pastikan Node.js atau Console browser tersedia.  
- Bagikan/tautkan file latihan, tanpa membuat halaman HTML.  
- Papan: **aturan manusia → operand → operator → prediksi → bukti**.  
- Siapkan kartu `>`, `<`, `>=`, `<=`, `===`, `!==`.

## Miskonsepsi sasaran

1. Boolean adalah kata “benar/salah”, bukan nilai JS `true`/`false`.  
2. `=` dan `===` sama makna.  
3. “minimal 75” = `> 75`.  
4. `"75"` sama persis dengan `75`.  
5. Setelah Boolean muncul, program sudah melakukan tindakan.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

Guru menunjukkan:

```javascript
const stokMie = 4;
console.log(stokMie < 5);
```

Tanya: “Apa hasilnya? Apa yang program lakukan setelah hasil muncul?” Tegaskan: **belum ada aksi**. Ini persiapan keputusan P16.

### 10–30 · Scaffold · C2

Bangun bahasa presisi bersama:

| Bahasa aturan | Operator |
|---|---|
| minimal | `>=` |
| maksimal | `<=` |
| lebih dari | `>` |
| kurang dari | `<` |
| sama persis | `===` |
| bukan | `!==` |

Kata “persis” membantu menjelaskan `===` sebagai kesamaan nilai dan tipe.

### 30–50 · Experience · C2–C3

Jalankan dan minta prediksi:

```javascript
const skor = 75;
const batas = 75;
console.log(skor >= batas);
console.log(skor > batas);
console.log(skor === batas);
console.log(skor !== 80);
console.log("75" === 75);
```

Jangan bahas coercion atau `==`; cukup jelaskan pilihan standar kelas: gunakan `===`.

### 50–65 · Trap · C4

Trap 1, assignment:

```javascript
let skor = 75;
console.log(skor = 80);
```

Tanya: “Apakah hasil ini bukti perbandingan? Nilai `skor` setelahnya apa?”

Trap 2, batas:

```javascript
const minimal = 75;
console.log(skor > minimal);
```

Trap 3, tipe:

```javascript
console.log("75" === 75);
```

### 65–85 · Concept · C2

Definisikan:

- **operand:** nilai yang dibandingkan;  
- **operator:** tanda pembanding;  
- **ekspresi Boolean:** menghasilkan `true`/`false`.

Tulis pola: `operand operator operand → Boolean`.

### 85–95 · Practice mini · C3–C5

Bacakan aturan. Siswa memilih kartu operator lalu menulis ekspresi.

- Diskon berlaku jika total minimal 50.000.  
- Ruang penuh jika jumlah lebih dari 30.  
- Menu bukan `"Mie"`.

Verifikasi nilai batas (mis. 50.000 dan 30), bukan hanya satu contoh ekstrem.

### 95–105 · Setup latihan

1. Buat folder `js-dasar`.  
2. Salin `p15-perbandingan-boolean.js` ke folder.  
3. Jalankan `node p15-perbandingan-boolean.js`, atau gunakan Console browser.  
4. Ubah satu nilai sekali, prediksi dahulu, dan simpan hasil.

Jika Node tidak tersedia, Console browser sepenuhnya cukup.

### 105–120 · I do · C2–C3

```javascript
const stokMie = 4;
const stokMinimum = 5;
const stokMenipis = stokMie < stokMinimum;
console.log(stokMenipis);
```

Tanya: “Apakah `stokMenipis` menyimpan angka atau Boolean?” Kemudian tegaskan: “Kita belum memakai nilai ini dalam `if`.”

### 120–150 · Practice · C3–C6

Siswa jalankan file latihan, lengkapi tabel handout, lalu membuat tiga aturan milik sendiri. Syarat: nilai bernama jelas, operator tepat, alasan hasil.

### 150–165 · Peer trace · C4–C5

Pasangan memilih satu aturan teman dan menguji tepat di batasnya. Contoh: aturan minimal 75 diuji dengan 74, 75, 76.

### 165–180 · Reflect + Exit · C4–C5

Preview:

> “P16 baru menggunakan Boolean untuk memilih cabang `if` atau `else`. Hari ini kita memastikan fakta yang masuk ke cabang itu benar.”

## Kunci latihan inti

| Ekspresi | Hasil |
|---|---|
| `75 >= 75` | `true` |
| `75 > 75` | `false` |
| `"75" === 75` | `false` |
| `"Mie" !== "Nasi"` | `true` |
| `4 < 5` | `true` |

## Diferensiasi

**Butuh dukungan:** beri tabel operator–bahasa dan pasangan nilai, siswa mengisi ekspresi.  
**Cepat:** desain aturan batas dan uji nilai tepat di bawah/pada/di atas batas; jangan tambahkan `if`, DOM, atau operator logika.

## Asesmen formatif

| Indikator | Belum | Berkembang | Tercapai |
|---|---|---|---|
| Operator | Menebak | Benar pada kasus mudah | Tepat + alasan bahasa aturan |
| Tipe | Mengabaikan kutip | Mengenali sebagian | Menjelaskan kesamaan ketat |
| Batas | Tidak diuji | Uji satu nilai | Uji bawah–tepat–atas |
| Batas materi | Memakai cabang | Menyebut `if` | Hanya Boolean sebagai hasil |

## Checklist guru

- [ ] Recall P13/P14  
- [ ] Enam operator dan Boolean  
- [ ] Trap assignment, tipe, batas  
- [ ] Latihan file/setup dilakukan  
- [ ] Peer uji nilai batas  
- [ ] Tidak memakai `if/else`, DOM, event, form

## KBC

**Ilmu dan keadilan:** perbedaan `>` dan `>=` kecil di kode, tetapi dapat besar bagi orang yang terkena aturan.
