# Bacaan Pendamping — X-S1-P27
## Mimi & Robi: Dua Tombol Satu Mulut, Janji yang Tertimpa, & Waktu Luang yang Mengarang Fitur 3

| Field | Isi |
|---|---|
| Kode | X-S1-P27 — JS Fitur 2 / Polish |
| Pertemuan | **27 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P27_project-s1-js-fitur2_siswa.md](./X-S1-P27_project-s1-js-fitur2_siswa.md)

---

Halo. Mimi.

P26 lulus. AC dicentang. Robi merasa berhak menambah “yang lebih hidup.”

Di `spek.md` P23 ada baris kedua:

> “Klik tombol cadangan → sorotan berganti menjadi `'Es Teh habis lebih dulu'`.”

Robi menyalin listener kemarin. Ganti nama tombol. Targetnya tetap `#pesan`.

Dua tombol. Satu mulut.

## Istilah dulu, biar plot-nya tidak nyasar

| Istilah | Artinya di halaman ini |
|---|---|
| **Fitur 2** | Interaksi kedua yang **sudah** tertulis di spek, bukan ide sore ini |
| **Listener** | Penunggu klik pada satu elemen |
| **Regresi** | Yang kemarin lulus diuji lagi setelah ada kode baru; jika gagal, yang baru belum selesai |
| **Polish** | Memperjelas perilaku fitur yang sudah ada (misalnya klik ulang), tanpa janji baru |
| **`if` / `else`** | Cabang: jika syarat benar, jalankan blok ini; jika tidak, blok itu |

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Janji kedua **atau** polish janji pertama |
| Bukti | AC lama masih lulus + AC baru tercatat |
| Bukan | Fitur 3 · warna · hitungan · `innerHTML` |

## Adegan 1 — satu mulut untuk dua kalimat

Klik tombol cadangan. `#pesan` berubah. Status menu yang dijanjikan P26 hilang.

> “Kan sama-sama teks.”

> “Dua janji. Dua tempat. Kalau spekmu menu di `#pesan` dan sorotan di `#sorotanCadangan`, jangan keduanya berteriak lewat satu paragraf.”

`getElementById` memilih alamat. Alamat yang sama = surat yang saling menimpa.

## Plot twist #1 — regresi yang tidak diundang

Robi memperbaiki target. Tombol 2 sudah sopan. Tapi ia menghapus listener tombol 1 “biar file pendek.”

Klik tombol utama: diam.

Kemarin lulus. Hari ini gagal. Itu **regresi**: kerusakan pada yang sudah diuji, karena perubahan baru.

> “Sudah jalan” kemarin tidak menolong jika tidak diuji ulang hari ini.

## Plot twist #2 — waktu luang mengarang fitur 3

Masih dua puluh menit. Robi menambah penghitung klik dan mengganti warna tombol.

> “Masih sempat.”

> “Spek tidak minta dihitung. Spek tidak minta berwarna. Itu fitur 3. P23 membatasi dua interaksi. Waktu luang bukan izin menambah janji.”

Teman di jalur B (spek hanya satu tombol) hampir meniru tombol cadangan Robi.

Aku menahan.

> “Kalau spekmu satu janji, polish itu `if`/`else` di tombol yang sama: klik pertama menepati AC, klik ulang bilang sudah dicek. Bukan mengada-adakan tombol tetangga.”

```javascript
let sudahDiklik = false;

if (sudahDiklik === false) {
  // klik pertama
} else {
  // klik ulang
}
```

`let` karena nilai `sudahDiklik` berubah. `const` tidak untuk yang sengaja diganti.

## Adegan 2 — dua AC, dua jejak

```text
Fitur 1 sebelum : "Belum dicek. …"
Fitur 1 klik    : "Mie Sehat tersedia."
Konsol          : "Fitur 1: pesan diperbarui."

Fitur 2 sebelum : "Belum ada sorotan cadangan."
Fitur 2 klik    : "Sorotan cadangan: Es Teh habis lebih dulu."
Konsol          : "Fitur 2: sorotan diganti."
```

Enam baris. Bisa diuji teman tanpa membuka `script.js`. Kalau fitur 1 rusak di tengah jalan, baris atas sudah cukup untuk menolak klaim “P27 selesai.”

## Reflect

P26 = menyalakan saklar. P27 = saklar kedua, atau saklar pertama yang tidak berbohong saat diklik dua kali. P28 nanti bukan hari menambah listrik; hari menguji rumah.

## Exit

1. Jalur A atau B — tunjuk baris spek.
2. Setelah kode baru, fitur 1 masih lulus?
3. Apa yang tidak kamu tambah, meski sempat ingin?

> **Fitur kedua yang menepati spek tidak boleh menelan fitur pertama. Waktu luang bukan spek baru.**

— **Mimi** 🐾
