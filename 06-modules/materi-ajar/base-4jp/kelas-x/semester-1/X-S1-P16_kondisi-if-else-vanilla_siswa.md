# Handout Siswa — X-S1-P16

**Topik:** JavaScript Vanilla — Kondisi `if` / `else` · **4JP** · Pertemuan **16/34**

**Modul:** [X-S1-P16_kondisi-if-else-vanilla.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P16_kondisi-if-else-vanilla.md)  
**Bacaan:** [X-S1-P16_bacaan-mimi-robi.md](./X-S1-P16_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p16-if-else-vanilla.js](./skill-js/p16-if-else-vanilla.js)

## Tujuan

Menggunakan Boolean untuk memilih satu dari dua tindakan: jika kondisi `true`, jalankan blok `if`; jika `false`, jalankan blok `else`.

## Capaian Bloom

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut kondisi, `if`, `else`, dan cabang |
| C2 | Memahami | Menjelaskan satu kondisi → dua kemungkinan jalur |
| C3 | Menerapkan | Menulis `if/else` vanilla |
| C4 | Menganalisis | Trace kondisi dan cabang yang aktif |
| C5 | Mengevaluasi | Uji nilai batas untuk kedua cabang |
| C6 | Mencipta | Program keputusan satu aturan |

## Pola inti

```javascript
if (kondisi) {
  // tindakan saat kondisi true
} else {
  // tindakan saat kondisi false
}
```

```javascript
const skor = 75;
const batasLulus = 75;

if (skor >= batasLulus) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}
```

## Setup proyek dan latihan

1. Buka folder `js-dasar`.  
2. Salin [p16-if-else-vanilla.js](./skill-js/p16-if-else-vanilla.js) ke folder itu.  
3. Jalankan:

```bash
node p16-if-else-vanilla.js
```

4. Jika Node.js belum tersedia, salin blok ke **Console** browser.  
5. Baca komentar **DEFINISI** / **GUIDE**; jangan menambah komentar yang tidak diperlukan.

## Trace dua cabang

| Nilai `skor` | Kondisi `skor >= 75` | Cabang | Output |
|---|---|---|---|
| 74 | | | |
| 75 | | | |
| 76 | | | |

## Dari aturan ke kode

| Aturan manusia | Variabel | Kondisi | Jika `true` | Jika `false` |
|---|---|---|---|---|
| Stok minimal 5 | | | | |
| Durasi maksimal 60 menit | | | | |
| Buat sendiri | | | | |

## Trap

```javascript
let skor = 75;

if (skor = 75) {   // SALAH: mengubah skor
  console.log("?");
}

if (skor === 75) { // membandingkan
  console.log("?");
}
```

- “Minimal 75” → `skor >= 75`.  
- `else` berjalan ketika kondisi `if` adalah `false`.  
- Satu kali run hanya menjalankan satu cabang.  
- Belum memakai `&&`, `||`, DOM, event, atau form.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Satu kondisi memakai variabel bernama jelas  
- [ ] Output `true` dan `false` berbeda serta bermakna  
- [ ] Trace 74, 75, 76 selesai  
- [ ] Aturan milik sendiri diuji dua cabang  
- [ ] Tanpa DOM/event/form/`&&`/`||`

## Exit

1. `skor = 75` pada `skor >= 75` menjalankan: …  
2. Perbaiki `if (skor = 75)`: …  
3. Mengapa dua cabang tidak berjalan bersamaan? …

**Preview P17:** beberapa syarat akan digabungkan dengan operator logika.
