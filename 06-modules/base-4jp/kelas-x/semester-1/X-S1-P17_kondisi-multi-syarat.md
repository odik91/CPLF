# X-S1-P17 — JavaScript Vanilla: Kondisi Multi-Syarat

| Field | Isi |
|---|---|
| Kode | X-S1-P17 |
| Basis | **4JP** · Pertemuan **17/34** |
| Durasi | **4 JP = 180 menit** |
| Fokus | Operator logika `&&`, `||`, `!` pada kondisi `if/else` |
| Batas | **Tanpa DOM, event, form, `else if`, dan nested condition** |

## Learning Transformation

Dari satu fakta Boolean → beberapa fakta digabungkan secara eksplisit untuk memilih satu dari dua tindakan.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut `&&`, `||`, `!` dan arti logisnya |
| C2 | Memahami | Menjelaskan tabel hasil operator logika |
| C3 | Menerapkan | Menulis kondisi multi-syarat dalam `if/else` |
| C4 | Menganalisis | Trace setiap subkondisi dan hasil gabungan |
| C5 | Mengevaluasi | Menguji kombinasi nilai yang mewakili seluruh aturan |
| C6 | Mencipta | Membuat satu keputusan multi-syarat dengan bukti uji |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · loop → **P18**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall satu syarat P16 |
| 10–30 | Scaffold | C2 | Role-play kartu izin dan jam masuk |
| 30–50 | Experience | C2–C3 | Tabel `&&`, `||`, `!` di konsol |
| 50–65 | Trap | C4 | Salah pilih `&&`/`||`, negasi, dan kurung |
| 65–85 | Concept | C2 | Subkondisi → operator → hasil gabungan |
| 85–95 | Practice mini | C3–C5 | Trace empat kombinasi `&&` |
| 95–105 | Transisi | — | Setup `skill-js/p17-kondisi-multi-syarat.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: akses ruang praktik |
| 120–165 | Practice | C3–C6 | Latihan file + aturan milik siswa |
| 165–180 | Reflect + Exit | C4–C5 | Uji kombinasi · preview loop P18 |

## Konsep inti

| Operator | Arti | Hasil `true` bila … |
|---|---|---|
| `&&` | dan | kedua subkondisi `true` |
| `||` | atau | minimal satu subkondisi `true` |
| `!` | tidak / negasi | hasil Boolean dibalik |

```javascript
const punyaKartu = true;
const datangTepatWaktu = true;

if (punyaKartu && datangTepatWaktu) {
  console.log("Boleh masuk");
} else {
  console.log("Belum boleh masuk");
}
```

## Setup proyek & latihan

1. Buka folder `js-dasar`.  
2. Salin [p17-kondisi-multi-syarat.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p17-kondisi-multi-syarat.js).  
3. Jalankan `node p17-kondisi-multi-syarat.js` atau Console browser.  
4. Prediksi tiap subkondisi dan hasil gabungan sebelum run.  
5. Komentar hanya **DEFINISI** / **GUIDE**.

## Cognitive Trap

- `&&` bukan “atau”; jika satu syarat `false`, hasilnya `false`.  
- `||` bukan “dan”; satu `true` sudah cukup.  
- `!sudahPunyaAkun` membalik Boolean, bukan mengubah teks.  
- Satu ekspresi gabungan tetap dapat diuji bagian demi bagian.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Menjelaskan `&&`, `||`, `!` dengan contoh  
- [ ] Menulis satu kondisi gabungan dengan variabel jelas  
- [ ] Mencatat subkondisi, hasil gabungan, cabang, output  
- [ ] Menguji seluruh kombinasi yang relevan  
- [ ] Tanpa DOM/event/form/`else if`/nested condition

## Exit Ticket

1. Hasil `true && false` dan alasannya.  
2. Hasil `false || true` dan alasannya.  
3. Arti `!sudahLogin`.  
4. Kombinasi mana yang belum diuji?

## Catatan Guru

Mulai dari dua Boolean bernama, bukan ekspresi panjang. Jangan membahas prioritas operator kompleks; gunakan tanda kurung jika diperlukan. Loop dan array tetap P18.
