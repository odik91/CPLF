# Bacaan Pendamping — X-S1-P15
## Mimi & Robi: Satpam Belum Bekerja, Nilai 75 yang “Hilang”, & Tiga Tanda Sama yang Menyelamatkan Aturan

| Field | Isi |
|---|---|
| Kode | X-S1-P15 — JavaScript Vanilla: Perbandingan & Boolean |
| Pertemuan | **15 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |
| Nada | POV Mimi · humor · plot twist |

**Handout:** [X-S1-P15_perbandingan-boolean_siswa.md](./X-S1-P15_perbandingan-boolean_siswa.md)  
**Latihan:** [p15-perbandingan-boolean.js](./skill-js/p15-perbandingan-boolean.js)

---

Halo. Mimi.

Robi membawa satu pertanyaan paling dramatis dalam sejarah kantin:

> “Apakah stok mi tinggal sedikit?”

Aku kira dia akan memasak. Ternyata dia membuka konsol.

```javascript
const stokMie = 4;
console.log(stokMie < 5);
```

Konsol menjawab `true`.

Robi menunggu mi turun dari langit.

Tidak terjadi apa-apa.

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Menghasilkan fakta `true` atau `false` |
| Alat | Operator perbandingan + variabel |
| Bukan | Memilih aksi dengan `if/else` |

> “Boolean baru memberi laporan kepada satpam,” kataku. “Satpamnya baru kerja P16.”

## Adegan 1 — dua jawaban yang tidak bisa diajak debat

**Boolean** adalah nilai yang cuma punya dua bentuk: `true` dan `false`.

```javascript
const skor = 75;
console.log(skor >= 75); // true
console.log(skor < 75);  // false
```

Robi berkata `true` terlalu singkat untuk jawaban hidup.

> “Itu justru bagus. Program butuh hasil yang tegas. Penjelasan manusia datang setelahnya.”

## Plot twist #1 — nilai 75 “ditolak” oleh satu karakter

Aturannya: **minimal 75**.

Robi menulis:

```javascript
skor > 75
```

Skor 75 menghasilkan `false`.

> “Komputer tidak punya hati.”

> “Komputer punya operator. Kamu yang menulis aturan kurang satu garis.”

```javascript
skor >= 75
```

Sekarang 75 menghasilkan `true`. Satu karakter kecil bisa mengubah aturan bagi satu kelas penuh. Jadi: prediksi, uji, jelaskan.

## Plot twist #2 — `=` menyamar

```javascript
const nama = "Robi";
console.log(nama = "Mimi");
```

Robi mengira ia sedang bertanya, “Apakah namanya Mimi?”

Ternyata ia mengganti nama Robi menjadi Mimi. Antennanya menolak identitas baru.

> “`=` memberi nilai. `===` membandingkan. Tiga tanda sama itu bukan aksesoris.”

```javascript
console.log(nama === "Mimi");
```

## Concept

| Pertanyaan manusia | Ekspresi |
|---|---|
| Apakah sama persis? | `===` |
| Apakah bukan? | `!==` |
| Apakah lebih besar? | `>` |
| Apakah minimal? | `>=` |
| Apakah maksimal? | `<=` |

Dan ini jebakannya:

```javascript
"75" === 75 // false
```

Angka di dalam kutip adalah **string**. P13 datang mengetuk pintu: tipe data tidak hilang hanya karena bentuknya terlihat angka.

## Reflect

Hari ini Robi belum membuat program bertindak. Ia baru membuat program **memeriksa**.

P16 baru berbunyi:

> “Jika hasilnya `true`, lakukan A. Jika `false`, lakukan B.”

## Exit

1. “Minimal 75” memakai operator apa?  
2. Mengapa `"75" === 75` false?  
3. Apa beda `=` dan `===`?

> **Aturan yang adil harus ditulis presisi; `true`/`false` adalah bukti ceknya.**

— **Mimi** 🐾  
*(Robi kini menulis `stokMie < 5` sebelum panik. Ini kemajuan yang dapat diuji.)*
