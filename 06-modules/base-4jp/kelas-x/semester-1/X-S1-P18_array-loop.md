# X-S1-P18 — JavaScript Vanilla: Array & Loop

| Field | Isi |
|---|---|
| Kode | X-S1-P18 |
| Basis | **4JP** · Pertemuan **18/34** |
| Unit | X1.4 (fondasi JavaScript) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Tanpa DOM, event, form, object, `while`, dan method array lanjut** |

## Learning Transformation

Dari “nilai satu per satu” → “banyak nilai sejenis disimpan dalam **array**, lalu diproses berulang dengan **loop** yang dapat ditelusuri.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut array, indeks, `length`, loop, dan iterasi |
| **C2** | Memahami | Menjelaskan indeks dimulai dari 0 dan loop mengulang blok |
| **C3** | Menerapkan | Membuat array, mengakses elemen, menulis `for` sederhana |
| **C4** | Menganalisis | Trace nilai indeks dan elemen tiap putaran |
| **C5** | Mengevaluasi | Memilih antara tulis ulang vs loop untuk daftar |
| **C6** | Mencipta | Program daftar mini: cetak / jumlahkan dengan loop |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · object & function → **P19**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Masalah: cetak 5 menu tanpa menulis 5 baris berulang |
| 10–30 | Scaffold | C2 | Array = daftar berurutan · indeks 0 |
| 30–50 | Experience | C2–C3 | Literal array, akses `[i]`, `length` |
| 50–65 | Trap | C4 | Indeks 1 sebagai “pertama”, `menus[menus.length]` |
| 65–85 | Concept | C2 | `for`: inisialisasi · syarat · update · tubuh |
| 85–95 | Practice mini | C3–C4 | Trace 3 putaran di kertas |
| 95–105 | Transisi | — | Setup `skill-js/p18-array-loop.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: cetak daftar + jumlah harga |
| 120–165 | Practice | C3–C6 | Latihan file + daftar milik siswa |
| 165–180 | Reflect + Exit | C4–C5 | Exit · preview object/function P19 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Object `{ }` | Array `[ ]` untuk nilai sejenis berurutan |
| `forEach` / `map` / `filter` | `for` klasik yang ditelusuri |
| `while` sebagai fokus | Satu pola `for` dulu |
| DOM / daftar di halaman | Cetak dan hitung di konsol |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Array** | Daftar nilai berurutan dalam `[ ]` |
| **Indeks** | Nomor posisi; dimulai dari **0** |
| **`length`** | Banyak elemen |
| **Loop** | Mengulang blok perintah |
| **Iterasi** | Satu putaran loop |
| **`for`** | Loop dengan awal, syarat, dan langkah |

```javascript
const menus = ["Mie Sehat", "Nasi Goreng", "Es Teh"];

console.log(menus[0]);
console.log(menus.length);

for (let i = 0; i < menus.length; i = i + 1) {
  console.log(menus[i]);
}
```

## Setup proyek & latihan

1. Buka folder `js-dasar`.  
2. Salin [skill-js/p18-array-loop.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p18-array-loop.js).  
3. Jalankan `node p18-array-loop.js` atau Console browser.  
4. Trace indeks dan elemen tiap putaran sebelum / sesudah run.  
5. Komentar file skill hanya **DEFINISI** / **GUIDE**.

## Cognitive Trap

- Elemen pertama adalah indeks `0`, bukan `1`.  
- Indeks terakhir = `length - 1`; `array[array.length]` adalah `undefined`.  
- Loop tanpa update (`i` tidak bertambah) dapat berjalan tanpa henti.  
- `typeof []` menghasilkan `"object"` — kenalan singkat saja; object penuh di P19.

## Guiding Questions

1. Daftar ini menyimpan nilai apa?  
2. Indeks elemen pertama dan terakhir berapa?  
3. Syarat loop berhenti kapan?  
4. Pada putaran ke-`i`, elemen mana yang diproses?  
5. Apakah menulis ulang baris lebih jelas, atau loop?

## Kriteria penerimaan

- [ ] Menjalankan `p18-array-loop.js`  
- [ ] Membuat array ≥3 elemen dengan nama jelas  
- [ ] Mengakses elemen dengan indeks  
- [ ] Menulis satu `for` yang memproses seluruh array  
- [ ] Trace minimal 3 putaran (indeks → elemen → output)  
- [ ] Tanpa DOM, object, `while`, `forEach`/`map`

## Exit Ticket

1. Indeks elemen pertama?  
2. Indeks terakhir bila `length` = 4?  
3. Apa arti `i < menus.length`?  
4. Satu alasan memakai loop, bukan copy-paste `console.log`.

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** — dinilai dari ketepatan indeks, syarat loop, dan bukti trace.

## Catatan Guru

Kenalkan array sebelum loop agar pengulangan punya target nyata. Jangan masuk method array lanjut atau object. `typeof [] === "object"` cukup sebagai trap singkat, bukan materi object.
