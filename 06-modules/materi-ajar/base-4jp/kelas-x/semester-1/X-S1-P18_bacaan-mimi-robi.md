# Bacaan Pendamping — X-S1-P18
## Mimi & Robi: Daftar Menu yang Membengkak, Indeks yang Mulai dari Nol, & Loop yang Tidak Boleh Lupa Berhenti

| Field | Isi |
|---|---|
| Kode | X-S1-P18 — Array & Loop |
| Pertemuan | **18 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |
| Nada | POV Mimi · humor · plot twist |

**Handout:** [X-S1-P18_array-loop_siswa.md](./X-S1-P18_array-loop_siswa.md)  
**Latihan:** [p18-array-loop.js](./skill-js/p18-array-loop.js)

---

Halo. Mimi.

Robi menulis menu kantin seperti ini:

```javascript
console.log("Mie Sehat");
console.log("Nasi Goreng");
console.log("Es Teh");
```

Lalu menu bertambah. Lalu bertambah lagi. Antennanya mulai kelelahan.

> “Aku butuh copy-paste profesional.”

> “Kau butuh **daftar**, bukan fotokopi.”

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Array menyimpan banyak nilai; loop memprosesnya |
| Alat | `[ ]`, indeks, `length`, `for` |
| Bukan | Object, DOM, `forEach`, `while` |

## Adegan 1 — kotak berbaris

```javascript
const menus = ["Mie Sehat", "Nasi Goreng", "Es Teh"];
```

Robi menunjuk “Mie Sehat” dan bilang “nomor satu.”

Aku menempel stiker **0**.

> “Di JavaScript, barisan dimulai dari nol. Bukan karena jahat. Karena posisi dihitung dari jarak ke awal.”

```javascript
console.log(menus[0]); // Mie Sehat
console.log(menus.length); // 3
```

## Plot twist #1 — kursi yang tidak ada

```javascript
console.log(menus[3]);
```

Hasil: `undefined`.

Robi:

> “Komputer hilang ingatan.”

> “Tidak. Panjangnya 3, jadi kursi terakhir adalah indeks 2. Kau meminta kursi 3 — kosong.”

Indeks terakhir = `length - 1`. Hafalan kecil, dampak besar.

## Plot twist #2 — loop yang lupa melangkah

Robi menulis loop, tetapi lupa menambah `i`. Program “sibuk” tanpa selesai.

> “Seperti satpam yang terus memeriksa orang yang sama karena jarum jamnya tidak bergerak.”

Pola aman:

```javascript
for (let i = 0; i < menus.length; i = i + 1) {
  console.log(menus[i]);
}
```

Baca perlahan: mulai `0` · lanjut selama `i` masih kurang dari panjang · naikkan `i` · proses elemen.

## Trace

```text
i = 0 → Mie Sehat
i = 1 → Nasi Goreng
i = 2 → Es Teh
i = 3 → syarat false → berhenti
```

Tidak ada sulap. Hanya putaran yang dapat ditulis di kertas.

## Reflect

Array menjawab “banyak nilai sejenis.” Loop menjawab “kerjakan yang sama pada tiap nilai.” Object (data beda peran, punya nama) menyusul di P19 bersama function.

## Exit

1. Indeks elemen pertama?  
2. Indeks terakhir jika `length` = 4?  
3. Apa yang membuat loop berhenti?

> **Daftar tanpa indeks yang jujur mudah nyasar; loop tanpa syarat berhenti mudah sibuk tanpa hasil.**

— **Mimi** 🐾  
*(Robi menamai array-nya `menusYangTidakPerluDifotokopi`. Panjang, tapi niatnya terbaca.)*
