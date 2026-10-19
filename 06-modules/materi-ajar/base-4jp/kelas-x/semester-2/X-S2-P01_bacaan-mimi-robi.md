# Bacaan Pendamping — X-S2-P01
## Mimi & Robi: Semester Baru, Pohon di Belakang Halaman, & Selector yang Suka Bohong Tipis

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 — Recall S1 + DOM & Query |
| Pertemuan | **1 / 32** · Basis **4JP** |
| Status | Naskah humor · **3 sketch menyusul** · Mimi syari (lanjutan project) |

**Handout:** [X-S2-P01_recall-dom-query_siswa.md](./X-S2-P01_recall-dom-query_siswa.md)

---

Halo. Mimi — masih dalam baju syari yang sama sejak project S1, karena CSS yang baik tidak hilang hanya karena semester berganti.

Robi membawa folder S1 seperti piala.

> “S2! Saatnya sepuluh tombol, animasi, dan framework!”

> “S2. Saatnya **melihat pohon** di belakang halaman. Tombol ramai tanpa alamat yang benar = festival salah kirim.”

## Adegan 1 — dokumen vs pohon

Robi membuka `index.html` S1.

> “Ini kan sudah selesai.”

> “Di file: dokumen. Di browser: **DOM** — pohon elemen yang bisa ditunjuk. Kalau kamu tidak bisa menunjuk cabangnya, kamu belum siap menggerakkannya.”

```text
file HTML  →  browser bangun pohon  →  JS bilang “yang ini”
```

<!-- sketch: p01-01-dokumen-bukan-pohon.jpg · Mimi syari + Robi memegang kertas HTML vs pohon DOM -->

## Adegan 2 — “ambil item” yang samar

Ada tiga baris bertanda class `item`.

Robi: “Ambil item.”

Browser (dalam hati): “Yang mana?”

```javascript
document.querySelector(".item");      // satu — yang pertama
document.querySelectorAll(".item");   // semua — cek .length
```

> “`querySelector` jujur tapi pelit: ia bawa **satu**. Kalau kamu butuh semua, bilang `All`, lalu hitung.”

<!-- sketch: p01-02-query-hanya-pertama.jpg · tiga kursi item; Robi hanya dapat kursi pertama -->

## Adegan 3 — pagar yang nyasar

```javascript
document.getElementById("#area"); // null
document.querySelector("#area");  // ketemu
```

> “Pagar `#` untuk **selector**. `getElementById` sudah tahu ia mencari id — beri nama saja, seperti S1.”

Robi mencoret satu karakter. Konsol tidak lagi merah diam-diam.

<!-- sketch: p01-03-pagar-getelementbyid.jpg · Robi membawa pagar ke pintu getElementById; Mimi menunjuk querySelector -->

## Exit (isi di handout)

1. Satu hal di S1 yang tidak berubah kecuali HTML diganti?  
2. Apa beda `querySelector` dan `querySelectorAll`?  
3. Mengapa `#` di `getElementById` bermasalah?

> **Semester baru bukan festival fitur. Semester baru = alamat yang lebih jujur.**

— **Mimi** 🐾 · **Robi** 🤖
