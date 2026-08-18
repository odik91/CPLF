# Handout Siswa — X-S1-P27

**Topik:** Project S1 — JS Fitur 2 / Polish logika · **4JP** · Pertemuan **27/34**

**Modul:** [X-S1-P27_project-s1-js-fitur2.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2.md)
**Bacaan:** [X-S1-P27_bacaan-mimi-robi.md](./X-S1-P27_bacaan-mimi-robi.md)
**Contoh pola:** [skill-js/p27-js-fitur2/](./skill-js/p27-js-fitur2/)

Kerjakan di `script.js` folder projectmu. Jangan menghapus listener P26. Jangan menambah fitur yang tidak ada di `spek.md`.

## Pilih jalur dari spek (bukan dari selera)

| Jalur | Jika `spek.md` … | Hari ini |
|---|---|---|
| **A** | menyebut 2 interaksi klik | Listener kedua, `id` berbeda |
| **B** | hanya 1 interaksi klik | `if`/`else` di listener fitur 1 |

Tunjuk baris spek sebelum menulis kode.

## Jalur A — dari spek ke kode

| Baris `spek.md` | Di HTML | Di JS |
|---|---|---|
| `#sorotanCadangan` (contoh) | `id="sorotanCadangan"` | `getElementById("sorotanCadangan")` |
| `#tombolCadangan` (contoh) | `id="tombolCadangan"` | `getElementById("tombolCadangan")` |
| AC klik 2 → teks target | `button type="button"` | listener **baru**, bukan menimpa `#pesan` |

```javascript
const sorotanCadangan = document.getElementById("sorotanCadangan");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolCadangan.addEventListener("click", function () {
  sorotanCadangan.textContent = "Teks target fitur 2 dari spek.md";
  console.log("Fitur 2: sorotan diganti.");
});
```

Ganti `id` dan teks sesuai spek-mu. Listener fitur 1 **tetap** di atasnya.

Jika `id` fitur 2 sudah dijanjikan spek tetapi belum ada di HTML: tambah **satu** elemen itu. Jangan menambah elemen lain.

## Jalur B — polish tanpa janji baru

```javascript
let sudahDiklik = false;

tombolUtama.addEventListener("click", function () {
  if (sudahDiklik === false) {
    pesan.textContent = "Teks target klik pertama (dari spek).";
    sudahDiklik = true;
    console.log("Fitur 1: klik pertama.");
  } else {
    pesan.textContent = "Teks setelah klik ulang (tulis di AC polish).";
    console.log("Fitur 1: klik ulang.");
  }
});
```

Tulis AC polish: apa yang terlihat pada klik pertama, apa pada klik kedua. Jangan membuat tombol baru.

## Trace regresi + AC hari ini

| Uji | Sebelum klik | Sesudah klik | Konsol | Lulus? |
|---|---|---|---|---|
| Fitur 1 (P26) | | | | |
| Fitur 2 atau polish | | | | |

Uji **fitur 1 dulu**, baru uji yang baru. Jika fitur 1 gagal, perbaiki dulu.

## Debug singkat

| Gejala | Penyebab umum | Perbaikan |
|---|---|---|
| Klik tombol 2 mengubah `#pesan` | Kedua listener menulis ke elemen yang sama | Target sesuai spek, bukan “elemen yang kebetulan ada” |
| Fitur 1 tiba-tiba mati | Listener P26 terhapus / `id` berubah | Kembalikan listener P26; uji regresi |
| Dua reaksi per satu klik | Dua listener pada tombol yang sama | Satu tombol satu tujuan, kecuali spek memang satu tombol dua cabang (jalur B) |
| `null` pada fitur 2 | `id` belum ada atau typo | Cocokkan spek–HTML–JS |

## Checklist

- [ ] Jalur A/B sesuai spek
- [ ] Fitur 1 masih lulus (regresi)
- [ ] AC hari ini sebelum/sesudah + konsol
- [ ] Tidak ada fitur 3
- [ ] Tidak ada CSS baru sebagai syarat
- [ ] Peer dapat menguji tanpa melihat kode

## Peer (tanpa kode)

Fitur 1: sebelum … → klik → …
Hari ini: sebelum … → klik → …
Regresi lulus: ya / tidak
AC lulus: ya / tidak

## Exit

1. Jalurku: A / B karena spek …
2. `id` atau cabang: …
3. Regresi fitur 1: …
4. Yang tidak kutambah: …

**Preview P28:** checkpoint — uji ulang semua AC spek, bukan menambah klik.
