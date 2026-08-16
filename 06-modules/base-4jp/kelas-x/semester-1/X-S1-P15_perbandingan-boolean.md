# X-S1-P15 — JavaScript Vanilla: Perbandingan & Boolean

| Field | Isi |
|---|---|
| Kode | X-S1-P15 |
| Basis | **4JP** · Pertemuan **15/34** |
| Unit | X1.4 (fondasi JavaScript) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Tanpa DOM, event, form, dan if/else** |

## Learning Transformation

Dari “hasil hitung hanya angka/teks” → “program dapat **membandingkan nilai** dan menghasilkan Boolean `true` atau `false`; keputusan dengan `if/else` baru menyusul P16.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut Boolean dan operator `===`, `!==`, `>`, `<`, `>=`, `<=` |
| **C2** | Memahami | Menjelaskan perbandingan sebagai ekspresi yang menghasilkan `true`/`false` |
| **C3** | Menerapkan | Menulis perbandingan memakai variabel dan mencetak hasilnya |
| **C4** | Menganalisis | Menemukan alasan `"75" === 75` bernilai `false` atau arah operator keliru |
| **C5** | Mengevaluasi | Memilih operator yang tepat berdasar aturan yang dinyatakan |
| **C6** | Mencipta | Menyusun tabel aturan–ekspresi–prediksi untuk kasus milik sendiri |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · `if/else` vanilla → **P16**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall nilai, tipe, variabel · “apakah cukup?” |
| 10–30 | Scaffold | C2 | Boolean sebagai hasil cek fakta, bukan jawaban manusia |
| 30–50 | Experience | C2–C3 | Jalankan enam operator dengan nilai langsung dan variabel |
| 50–65 | Trap | C4 | `=` vs `===`, string angka vs number, arah `>`/`<` |
| 65–85 | Concept | C2 | Operator, operand, ekspresi Boolean, tabel kebenaran sederhana |
| 85–95 | Practice mini | C3–C5 | Terjemahkan aturan bahasa manusia → ekspresi |
| 95–105 | Transisi | — | Setup `skill-js` dan buka latihan P15 |
| 105–120 | Scaffold praktik | C2–C3 | I do: cek stok, skor, nama menu |
| 120–165 | Practice | C3–C6 | Latihan file + tabel bukti + peer trace |
| 165–180 | Reflect + Exit | C4–C5 | Exit · preview `if/else` P16 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Program langsung memilih aksi | Hanya menghasilkan fakta `true` / `false` |
| `=` untuk membandingkan | `===` untuk kesamaan ketat |
| `==` sebagai jalan pintas | `===` dan `!==` agar tipe juga diperiksa |
| Form/DOM | Data tersedia sebagai variabel di kode |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Boolean** | Nilai logis: `true` atau `false` |
| **Operand** | Nilai di kiri/kanan operator |
| **Operator perbandingan** | Membandingkan dua operand |
| **Ekspresi Boolean** | Kode yang menghasilkan Boolean |
| **`===`** | Sama nilai dan tipe |
| **`!==`** | Tidak sama nilai atau tipe |
| **`>=` / `<=`** | Lebih besar/kecil atau sama dengan |

```javascript
const skor = 75;
const batasLulus = 75;
const namaMenu = "Mie Sehat";

console.log(skor >= batasLulus);   // true
console.log(skor < batasLulus);    // false
console.log(namaMenu === "Mie Sehat"); // true
console.log("75" === 75);         // false
console.log(skor !== 80);          // true
```

## Setup proyek & latihan

1. Buat folder proyek, misalnya `js-dasar`.  
2. Salin [skill-js/p15-perbandingan-boolean.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p15-perbandingan-boolean.js) ke folder itu.  
3. Buka di editor. Jalankan dengan Node.js: `node p15-perbandingan-boolean.js`, **atau** salin satu eksperimen ke Console browser.  
4. Ubah nilai satu per satu, prediksi dahulu, lalu simpan bukti hasil.

## Cognitive Trap

Tanda `=` mengisi nilai; `===` membandingkan. Keduanya tidak boleh diperlakukan sebagai tanda “sama dengan” yang sama. Angka dengan kutip juga tetap string.

## Guiding Questions

1. Aturan manusia apa yang sedang diuji?  
2. Nilai dan tipe operand kiri/kanan apa?  
3. Operator mana yang tepat?  
4. Mengapa hasilnya `true` atau `false`?  
5. Belum ada keputusan—di P16 Boolean ini baru dipakai oleh `if/else`.

## Kriteria penerimaan

- [ ] Menguji enam operator inti  
- [ ] Memakai variabel bernama jelas  
- [ ] Menulis ≥8 prediksi sebelum eksekusi  
- [ ] Menjelaskan `"75" === 75`  
- [ ] Menerjemahkan ≥4 aturan ke ekspresi Boolean  
- [ ] Tanpa `if/else`, DOM, event, atau form

## Exit Ticket

1. Hasil dan alasan `80 >= 80`  
2. Operator untuk “menu bukan `Mie`”  
3. Mengapa `"80" === 80` bernilai `false`?  
4. Apa yang belum dilakukan Boolean hari ini?

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Mengevaluasi · C5** — dinilai dari prediksi, operator, dan alasan, bukan hanya output.

## Catatan Guru

Tahan `if/else` sampai P16. Boolean hari ini adalah hasil pemeriksaan, belum cabang tindakan. Jangan masukkan operator logika `&&`/`||`; itu P17.
