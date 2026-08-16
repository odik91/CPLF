# X-S1-P14 — JavaScript Vanilla: Variabel & Ekspresi

| Field | Isi |
|---|---|
| Kode | X-S1-P14 |
| Basis | **4JP** · Pertemuan **14/34** |
| Unit | X1.4 (fondasi JavaScript) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh · revisi urutan fondasi** |
| Batas | **Tanpa DOM, event, dan if/else** |

## Learning Transformation

Dari “nilai ditulis ulang berkali-kali” → “nilai diberi **nama** dalam variabel agar dapat dipakai, dihitung, dan—jika memang perlu—diubah secara eksplisit.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut variabel, `const`, `let`, deklarasi, penugasan, ekspresi |
| **C2** | Memahami | Menjelaskan variabel sebagai nama yang menunjuk nilai; beda `const` vs `let` |
| **C3** | Menerapkan | Mendeklarasikan variabel, menghitung ekspresi, dan mencetak hasil |
| **C4** | Menganalisis | Menemukan nama buruk, variabel belum ada, atau perubahan `const` |
| **C5** | Mengevaluasi | Memilih `const` atau `let` dengan alasan |
| **C6** | Mencipta | Menyusun program console mini input–proses–output dari data yang sudah tersedia |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · Perbandingan & Boolean → **P15**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall nilai/tipe · masalah angka berulang |
| 10–30 | Scaffold | C2 | Kotak berlabel sebagai metafora variabel (dengan batas metafora) |
| 30–50 | Experience | C2–C3 | `const`, `let`, `console.log`, update nilai |
| 50–65 | Trap | C4 | ubah `const` · nama `x`/`data` · pakai sebelum deklarasi |
| 65–85 | Concept | C2 | deklarasi · assignment · ekspresi · IPO |
| 85–95 | Practice mini | C3 | Pilih `const`/`let` + alasan |
| 95–105 | Transisi | — | Setup `skill-js/p14-variabel-ekspresi.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: total belanja / profil data |
| 120–165 | Practice | C3–C6 | Program mini console + peer trace |
| 165–180 | Reflect + Exit | C4–C5 | Exit · preview Boolean P15 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Form/DOM sebagai input | Nilai sudah tersedia di kode |
| `if`/`else` | Hitung dan susun output |
| Semua pakai `let` | Default `const`; `let` jika benar-benar berubah |
| Nama satu huruf tanpa konteks | Nama bermakna: `hargaMie`, `jumlahPorsi` |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Variabel** | Nama yang menunjuk sebuah nilai |
| **Deklarasi** | Membuat nama: `const harga = 12000` |
| **Penugasan (assignment)** | Memberi/mengganti nilai dengan `=` |
| **`const`** | Ikatan tidak ditugasi ulang |
| **`let`** | Nilai akan ditugasi ulang |
| **Ekspresi** | Menghasilkan nilai, mis. `harga * jumlah` |
| **IPO** | Input → Process → Output |

```javascript
const namaMenu = "Mie Sehat";
const harga = 12000;
let jumlah = 2;

const total = harga * jumlah;
console.log(namaMenu);
console.log(total);

jumlah = 3;
console.log(harga * jumlah);
```

## Setup proyek & latihan

1. Buka folder `js-dasar`.  
2. Salin [skill-js/p14-variabel-ekspresi.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p14-variabel-ekspresi.js).  
3. Jalankan `node p14-variabel-ekspresi.js` atau Console browser.  
4. Komentar di file skill hanya **DEFINISI** / **GUIDE** — jangan menambah komentar yang tidak diperlukan.

## Cognitive Trap

Variabel dianggap sekadar “kotak” tanpa memperhatikan tipe, nama, dan perubahan. `const` bukan berarti nilainya “suci”; untuk pemula cukup: jangan tugasi ulang nama tersebut.

## Guiding Questions

1. Nama ini menyimpan data apa?  
2. Apakah nilainya akan ditugasi ulang?  
3. Ekspresi ini menghasilkan tipe apa?  
4. Output apa yang membuktikan proses benar?

## Kriteria penerimaan

- [ ] Menjalankan file latihan `p14-variabel-ekspresi.js`  
- [ ] Minimal 3 variabel bernama jelas  
- [ ] Memakai `const` sebagai default  
- [ ] Memakai `let` hanya pada satu nilai yang berubah  
- [ ] Ada ekspresi proses dan `console.log` output  
- [ ] Bisa menelusuri nilai sebelum/sesudah update  
- [ ] Tanpa DOM/event/if-else

## Exit Ticket

1. Beda `const` dan `let`  
2. Satu nama variabel buruk → perbaikannya  
3. Input, proses, output program mini

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Penalaran pilihan `const`/`let`.

## Catatan Guru

Jangan memakai input form. Data ditulis di kode agar fokus pada variabel. Operator perbandingan/Boolean baru P15.
