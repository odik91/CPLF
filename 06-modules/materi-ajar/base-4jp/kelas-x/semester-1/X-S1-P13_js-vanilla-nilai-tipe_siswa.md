# Handout Siswa — X-S1-P13

**Topik:** JavaScript Vanilla — Nilai & Tipe Data · **4JP** · Pertemuan **13/34**

**Modul:** [X-S1-P13_js-vanilla-nilai-tipe.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P13_js-vanilla-nilai-tipe.md)  
**Bacaan:** [X-S1-P13_bacaan-mimi-robi.md](./X-S1-P13_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p13-nilai-tipe.js](./skill-js/p13-nilai-tipe.js)

## Tujuan

Sebelum JavaScript menyentuh halaman, kenali bahan yang diolahnya: **nilai dan tipe data**.

## Capaian Bloom

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut string, number, boolean, `typeof` |
| C2 | Memahami | Membedakan `12`, `"12"`, dan `true` |
| C3 | Menerapkan | Menjalankan literal dan ekspresi di konsol |
| C4 | Menganalisis | Menjelaskan hasil tak terduga karena tipe |
| C5 | Mengevaluasi | Memilih tipe sesuai kebutuhan |
| C6 | Mencipta | Menyusun kartu nilai–tipe–operasi |

**Hari ini tidak memakai DOM, tombol, event, atau if/else.**

## Konsep

| Istilah | Arti | Contoh |
|---|---|---|
| Nilai | Data konkret | `"Mimi"`, `17`, `true` |
| String | Teks dengan kutip | `"17"` |
| Number | Angka untuk hitung | `17` |
| Boolean | Benar/salah | `true`, `false` |
| `typeof` | Cek tipe | `typeof 17` |
| Ekspresi | Kode yang menghasilkan nilai | `10 + 2` |

```javascript
console.log("Mimi");
console.log(14);
console.log(true);
console.log(typeof "Mimi");
console.log(typeof 14);
console.log(10 + 2);
console.log("10" + 2);
```

## Setup proyek dan latihan

1. Buat folder `js-dasar` di komputer.  
2. Salin file [p13-nilai-tipe.js](./skill-js/p13-nilai-tipe.js) ke folder itu.  
3. Jalankan `node p13-nilai-tipe.js`, atau salin baris ke **Console** browser.  
4. Baca komentar **DEFINISI** di file; jangan menambah komentar yang tidak diperlukan.  
5. Prediksi → jalankan → catat bukti.

## Lembar eksperimen

**Tulis prediksi sebelum menekan Enter.**

| Kode | Prediksi hasil | Hasil nyata | Tipe | Kenapa beda? |
|---|---|---|---|---|
| `typeof "12"` | | | | |
| `typeof 12` | | | | |
| `7 + 5` | | | | |
| `"7" + "5"` | | | | |
| `"7" + 5` | | | | |
| `10 - 3` | | | | |
| `4 * 5` | | | | |
| `20 / 4` | | | | |
| `typeof true` | | | | |
| Buat sendiri 1 | | | | |
| Buat sendiri 2 | | | | |
| Buat sendiri 3 | | | | |

## Trap

- `"12"` adalah teks, bukan angka.  
- Boolean JS memakai huruf kecil: `true`, bukan `True`.  
- String tanpa kutip dianggap nama yang belum dikenal.  
- Hasil di konsol ≠ tebakan; catat bukti.

## Kriteria penerimaan

- [ ] Menjalankan `p13-nilai-tipe.js`  
- [ ] ≥12 eksperimen  
- [ ] `typeof` ≥3 kali  
- [ ] Bisa menjelaskan `10 + 2` vs `"10" + 2`  
- [ ] Tidak memakai DOM/event/if-else  
 

## Exit

1. Beda `12` dan `"12"`: …  
2. `typeof false` menghasilkan: …  
3. Prediksi yang salah + penyebab: …

**Preview P14:** nilai akan diberi nama dalam variabel `const` dan `let`.
