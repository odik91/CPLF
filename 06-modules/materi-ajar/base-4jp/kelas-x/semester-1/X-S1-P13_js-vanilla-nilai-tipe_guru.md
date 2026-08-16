# Materi Ajar Guru — X-S1-P13
## JavaScript Vanilla: Nilai & Tipe Data (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **13/34** · 180 menit |
| Transformasi | “JS = tombol bergerak” → “JS mengolah nilai bertipe” |
| Fokus | literal · string · number · boolean · `typeof` · ekspresi |
| Dilarang hari ini | DOM · event · form · if/else · framework |
| Handout | [X-S1-P13_js-vanilla-nilai-tipe_siswa.md](./X-S1-P13_js-vanilla-nilai-tipe_siswa.md) |
| Bacaan | [X-S1-P13_bacaan-mimi-robi.md](./X-S1-P13_bacaan-mimi-robi.md) |

## Capaian Bloom

| Kode | Level | Bukti |
|---|---|---|
| C1 | Mengingat | Istilah nilai/tipe/string/number/boolean |
| C2 | Memahami | Penjelasan beda `12` dan `"12"` |
| C3 | Menerapkan | ≥12 eksperimen konsol |
| C4 | Menganalisis | Diagnosis `"10" + 2` |
| C5 | Mengevaluasi | Memilih tipe sesuai kebutuhan |
| C6 | Mencipta | 3 eksperimen milik siswa |

## Persiapan

- Browser dengan DevTools atau Node.js tersedia.  
- Tulis kode di konsol; file `.js` opsional.  
- Papan tabel: **kode → prediksi → hasil → tipe → alasan**.  
- Jangan siapkan HTML bertombol; itu mengundang DOM terlalu dini.

## Miskonsepsi sasaran

1. Semua yang tampak angka adalah number.  
2. `true` adalah teks.  
3. `+` selalu menjumlahkan.  
4. Konsol hanya tempat error.  
5. Cepat menekan Enter lebih penting daripada prediksi.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

Guru:

> “Kita sudah punya struktur HTML dan tampilan CSS. JavaScript tidak langsung dimulai dari tombol. Kita kenali bahasa dan data yang diolahnya dulu.”

Tampilkan batas pertemuan. DOM diparkir sampai fondasi logika selesai.

### 10–30 · Scaffold: konsol & literal · C2

Demo:

```javascript
"Mimi"
17
true
```

Tanya setiap baris: “Nilainya apa? Jenisnya apa?” Jelaskan **literal** sebagai nilai yang ditulis langsung.

### 30–50 · Experience: `typeof` · C2–C3

Siswa prediksi lalu menjalankan:

```javascript
typeof "Mimi"
typeof 17
typeof true
typeof "17"
```

Tekankan hasil `typeof` berupa string nama tipe.

### 50–65 · Trap · C4

```javascript
10 + 2
"10" + 2
"10" + "2"
```

Tahan jawaban. Minta siswa menulis prediksi. Setelah bukti muncul, tanyakan bagian kode mana yang mengubah operasi.

Trap tambahan:

```javascript
True
mimi
```

Jelaskan Boolean huruf kecil; teks perlu kutip.

### 65–85 · Concept · C2

Bangun tabel bersama:

| Tipe | Contoh | Operasi masuk akal |
|---|---|---|
| string | `"kelas X"` | sambung teks |
| number | `10`, `2.5` | hitung |
| boolean | `true` | menyatakan benar/salah |

Jelaskan **ekspresi**: kode yang menghasilkan nilai.

### 85–95 · Practice mini · C3

Lakukan 4 putaran prediksi cepat. Siswa wajib menulis sebelum Enter.

### 95–105 · Transisi

Buka handout. Jika memakai editor, buat `latihan-nilai.js` dan jalankan sesuai lingkungan lokal; jangan membuat proyek DOM.

### 105–120 · I do · C2–C3

Modelkan satu baris tabel bukti dengan suara keras:

> “Ada kutip, maka nilai pertama string. Operator plus akan menyambung. Prediksi saya `"72"`. Sekarang saya uji.”

### 120–150 · Practice · C3

Siswa menyelesaikan eksperimen handout. Guru bertanya, bukan memberi hasil:

- “Di mana kutipnya?”  
- “Tipe operand kiri dan kanan?”  
- “Apa bukti dari konsol?”

### 150–165 · Peer test · C4–C6

Setiap siswa membuat 3 ekspresi jebakan. Pasangan memprediksi, menjalankan, lalu menjelaskan.

### 165–180 · Reflect + Exit · C4–C5

Ambil exit ticket. Preview:

> “P14 memberi nilai-nilai ini nama dengan `const` dan `let`.”

## Kunci ringkas

- `typeof "12"` → `"string"`  
- `typeof 12` → `"number"`  
- `typeof false` → `"boolean"`  
- `7 + 5` → `12`  
- `"7" + "5"` → `"75"`  
- `"7" + 5` → `"75"`

## Diferensiasi

**Butuh dukungan:** kartu warna per tipe; kurangi eksperimen menjadi 8, tetapi pertahankan alasan.  
**Cepat:** buat matriks `+` untuk pasangan string/number dan jelaskan pola; jangan loncat DOM.

## Asesmen formatif

| Indikator | Belum | Berkembang | Tercapai |
|---|---|---|---|
| Mengidentifikasi tipe | Menebak visual | Benar sebagian | Benar + alasan |
| Prediksi ekspresi | Tanpa prediksi | Prediksi tanpa alasan | Prediksi + tipe operand |
| Membaca bukti | Mengabaikan hasil | Menyalin hasil | Menjelaskan selisih |

## Checklist guru

- [ ] Semua mencoba konsol  
- [ ] Prediksi sebelum eksekusi  
- [ ] Trap kutip dibahas  
- [ ] Tidak memakai DOM/event/if-else  
- [ ] Exit menyebut tipe dan bukti

## KBC

**Cinta ilmu dan kejujuran proses:** prediksi boleh salah; hasil tidak boleh dipalsukan agar tampak benar.
