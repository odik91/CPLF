# X-S1-P19 — JavaScript Vanilla: Object & Function

| Field | Isi |
|---|---|
| Kode | X-S1-P19 |
| Basis | **4JP** · Pertemuan **19/34** |
| Durasi | **4 JP = 180 menit** |
| Fokus | Object literal, properti, function, parameter, `return` |
| Batas | **Tanpa DOM, event, form, nested object, method, dan callback** |

## Learning Transformation

Dari data tanpa label dan proses berulang → **object** menyatukan data bernama, **function** memberi nama pada proses yang dapat dipakai ulang.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut object, properti, function, parameter, argumen, `return` |
| C2 | Memahami | Membedakan array berindeks vs object berproperti; proses vs hasil function |
| C3 | Menerapkan | Membuat object literal, akses properti, memanggil function sederhana |
| C4 | Menganalisis | Trace nilai parameter dan hasil `return`; menemukan typo properti |
| C5 | Mengevaluasi | Memilih array atau object berdasarkan bentuk data |
| C6 | Mencipta | Data profil sederhana + function proses milik siswa |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · debugging → **P20**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall array: banyak nilai sama peran |
| 10–30 | Scaffold object | C2 | Data profil: nilai berbeda peran diberi properti |
| 30–50 | Experience | C2–C3 | Object literal + dot notation |
| 50–65 | Trap | C4 | `profil.namaLengkap` typo / kurung vs kurawal |
| 65–85 | Scaffold function | C2 | Proses berulang → nama fungsi, parameter, `return` |
| 85–95 | Practice mini | C3–C4 | Trace argumen → parameter → hasil |
| 95–105 | Transisi | — | Setup `skill-js/p19-object-function.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: profil + hitung total |
| 120–165 | Practice | C3–C6 | Latihan file + artefak mini |
| 165–180 | Reflect + Exit | C4–C5 | Preview debugging P20 |

## Konsep inti

| Konsep | Arti | Contoh |
|---|---|---|
| Object | Satu data dengan properti bernama | `{ nama: "Mimi", usia: 16 }` |
| Properti | Label + nilai dalam object | `profil.nama` |
| Function | Proses bernama yang dapat dipanggil | `function hitungTotal(...)` |
| Parameter | Nama input di definisi | `harga, jumlah` |
| Argumen | Nilai saat memanggil function | `12000, 2` |
| `return` | Mengirim hasil keluar dari function | `return harga * jumlah` |

```javascript
const profil = {
  nama: "Mimi",
  kelas: "X",
  usia: 16
};

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

console.log(profil.nama);
console.log(hitungTotal(12000, 2));
```

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Array `[ ]` untuk data beda peran | Object `{ }` dengan properti bernama |
| Object bersarang / array object | Satu object datar |
| Function tanpa hasil yang diinspeksi | Parameter dan `return` yang ditrace |
| Method object / callback | Function deklarasi biasa |

## Setup proyek & latihan

1. Buka folder `js-dasar`.  
2. Salin [p19-object-function.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p19-object-function.js).  
3. Jalankan `node p19-object-function.js` atau Console browser.  
4. Trace properti yang diakses serta argumen → parameter → `return`.  
5. Komentar file skill hanya **DEFINISI** / **GUIDE**.

## Cognitive Trap

- Array memakai indeks; object memakai nama properti.  
- `profil.nama` berbeda dari `profil.namaa` (hasilnya `undefined`).  
- `console.log` menampilkan; `return` memberi hasil ke pemanggil.  
- Function tidak berjalan saat didefinisikan, melainkan saat dipanggil dengan `()`.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Membuat satu object datar dengan ≥3 properti  
- [ ] Mengakses ≥2 properti dengan dot notation  
- [ ] Membuat function dengan ≥1 parameter dan `return`  
- [ ] Trace argumen → parameter → hasil  
- [ ] Tanpa DOM/nested object/method/callback

## Exit Ticket

1. Bedakan array dan object.  
2. Apa hasil `profil.namaa` bila propertinya `nama`?  
3. Beda parameter dan argumen.  
4. Mengapa `return` berguna?

## Catatan Guru

Object dan function berada satu pertemuan karena keduanya mengurangi ketidakjelasan: object memberi **nama pada data**, function memberi **nama pada proses**. Jangan mengirim object sebagai parameter atau membuat method hari ini.
