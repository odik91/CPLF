# X-S1-P13 — JavaScript Vanilla: Nilai & Tipe Data

| Field | Isi |
|---|---|
| Kode | X-S1-P13 |
| Basis | **4JP** · Pertemuan **13/34** |
| Unit | X1.4 (fondasi JavaScript) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh · revisi urutan fondasi** |
| Batas | **Tanpa DOM, event, form, dan if/else** |

## Learning Transformation

Dari “JavaScript = kode untuk menggerakkan halaman” → “JavaScript adalah bahasa yang mengolah **nilai**; sebelum menyentuh halaman, kenali jenis data dan hasil ekspresi di konsol.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut nilai, tipe data, string, number, boolean, `typeof`, dan konsol |
| **C2** | Memahami | Menjelaskan beda teks `"12"`, angka `12`, dan Boolean `true` |
| **C3** | Menerapkan | Menjalankan literal, `typeof`, dan ekspresi aritmetika/teks di konsol |
| **C4** | Menganalisis | Menemukan penyebab hasil seperti `"10" + 2` menjadi `"102"` |
| **C5** | Mengevaluasi | Mencocokkan nilai dengan tipe yang sesuai kebutuhan |
| **C6** | Mencipta | Menyusun “kartu identitas data” berisi nilai, tipe, dan operasi sederhana |

**Fokus:** C1–C4 · **Puncak:** C3–C5 · Variabel → **P14**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Compass · HTML/CSS selesai, sekarang fondasi bahasa JS |
| 10–30 | Scaffold | C2 | Konsol sebagai meja eksperimen · nilai literal |
| 30–50 | Experience | C2–C3 | Coba string, number, boolean, `typeof` |
| 50–65 | Trap | C4 | `"10" + 2`, kutip hilang, `True` vs `true` |
| 65–85 | Concept | C2 | Tipe data + operator dasar + ekspresi |
| 85–95 | Practice mini | C3 | Prediksi hasil sebelum Enter |
| 95–105 | Transisi | — | Siap lab / file `latihan.js` opsional |
| 105–120 | Scaffold praktik | C2–C3 | I do: kartu nilai–tipe–hasil |
| 120–165 | Practice | C3–C6 | 12 eksperimen konsol + tabel bukti + peer prediksi |
| 165–180 | Reflect + Exit | C4–C5 | Exit · preview variabel P14 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| DOM, `getElementById`, klik | Nilai dan tipe di konsol |
| `if`/`else` | Ekspresi yang menghasilkan nilai |
| Hafalan semua tipe JS | `string`, `number`, `boolean` (+ kenal `undefined`) |
| Copy skrip panjang | Eksperimen satu baris yang hasilnya dijelaskan |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Nilai (value)** | Data konkret: `"Mimi"`, `17`, `true` |
| **Tipe data** | Jenis nilai; menentukan operasi yang masuk akal |
| **String** | Teks di dalam kutip |
| **Number** | Angka untuk hitung |
| **Boolean** | `true` / `false` |
| **`typeof`** | Mengecek tipe nilai |
| **Operator** | Tanda operasi: `+`, `-`, `*`, `/` |
| **Ekspresi** | Potongan kode yang menghasilkan nilai |

```javascript
console.log("Mimi");          // string
console.log(14);              // number
console.log(true);            // boolean
console.log(typeof "Mimi");   // "string"
console.log(typeof 14);       // "number"
console.log(10 + 2);          // 12
console.log("10" + 2);        // "102"
```

## Cognitive Trap

Semua yang terlihat “angka” dianggap number. Kutip mengubah `12` menjadi teks `"12"`.

## Guiding Questions

1. Nilainya apa?  
2. Tipenya apa?  
3. Sebelum Enter, hasil ekspresinya diprediksi apa?  
4. Jika prediksi salah, kutip atau tipe mana yang terlewat?

## Kriteria penerimaan

- [ ] Menjalankan ≥12 eksperimen konsol  
- [ ] Mengelompokkan string, number, boolean dengan benar  
- [ ] Memakai `typeof` ≥3 kali  
- [ ] Menjelaskan `10 + 2` vs `"10" + 2`  
- [ ] Belum memakai DOM/event/if-else

## Exit Ticket

1. Beda `12` dan `"12"`  
2. Hasil `typeof false`  
3. Satu prediksi yang salah dan penyebabnya

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi hasil · Penalaran tipe.

## Catatan Guru

Konsol = laboratorium bahasa, bukan DOM. Jangan selipkan tombol/elemen. Simpan rasa penasaran DOM untuk P21.
