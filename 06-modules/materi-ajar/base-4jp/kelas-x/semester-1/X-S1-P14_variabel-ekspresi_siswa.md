# Handout Siswa — X-S1-P14

**Topik:** JavaScript Vanilla — Variabel & Ekspresi · **4JP** · Pertemuan **14/34**

**Modul:** [X-S1-P14_variabel-ekspresi.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P14_variabel-ekspresi.md)  
**Bacaan:** [X-S1-P14_bacaan-mimi-robi.md](./X-S1-P14_bacaan-mimi-robi.md)

## Tujuan

Dari nilai lepas → nilai diberi **nama** agar dapat dipakai dan diproses.

## Capaian Bloom

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut variabel, `const`, `let`, assignment |
| C2 | Memahami | Menjelaskan nama yang menunjuk nilai |
| C3 | Menerapkan | Deklarasi, ekspresi, update, output |
| C4 | Menganalisis | Menemukan perubahan `const` dan nama buruk |
| C5 | Mengevaluasi | Memilih `const`/`let` dengan alasan |
| C6 | Mencipta | Program console mini IPO |

**Hari ini tidak memakai DOM, form, event, atau if/else.**

## Konsep

| Istilah | Arti |
|---|---|
| Variabel | Nama yang menunjuk nilai |
| Deklarasi | Membuat nama + nilai awal |
| Assignment | Memberi nilai dengan `=` |
| `const` | Tidak ditugasi ulang |
| `let` | Akan ditugasi ulang |
| Ekspresi | Menghasilkan nilai |
| IPO | Input → Process → Output |

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

## Rencana program mini

| Bagian | Isi |
|---|---|
| Input (nilai awal) | |
| Nama variabel | |
| Proses / ekspresi | |
| Output konsol | |
| Nilai yang berubah (`let`) | |

## Pilih `const` atau `let`

| Data | Pilihan | Alasan |
|---|---|---|
| Nama sekolah | | |
| Skor pertandingan berjalan | | |
| Harga satu menu | | |
| Jumlah klik (nanti) | | |
| Nama siswa untuk satu proses | | |

## Trap

```javascript
const skor = 10;
skor = 11; // error: const tidak boleh ditugasi ulang
```

- `=` berarti memberi nilai; perbandingan baru P15.  
- Hindari `x`, `a`, `data1` jika ada nama lebih jelas.  
- Jangan memakai variabel sebelum dibuat.

## Kriteria penerimaan

- [ ] ≥3 variabel bernama jelas  
- [ ] `const` sebagai default  
- [ ] Satu `let` benar-benar berubah  
- [ ] Ada ekspresi proses + output  
- [ ] Bisa trace nilai sebelum/sesudah  
- [ ] Tanpa DOM/event/if-else

## Exit

1. Beda `const` dan `let`: …  
2. Nama buruk → perbaikan: …  
3. IPO program mini: …

**Preview P15:** operator perbandingan menghasilkan Boolean `true`/`false`.
