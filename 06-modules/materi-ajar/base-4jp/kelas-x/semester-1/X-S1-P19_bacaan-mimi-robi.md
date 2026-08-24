# Bacaan Pendamping — X-S1-P19
## Mimi & Robi: Data Tanpa Label, Function yang Tidak Mau Bergerak, & Return yang Bukan Pajangan

| Field | Isi |
|---|---|
| Kode | X-S1-P19 — Object & Function |
| Pertemuan | **19 / 34** · Basis **4JP** |
| Status | Naskah humor · **3 sketch khusus Object & Function** |

**Handout:** [X-S1-P19_object-function_siswa.md](./X-S1-P19_object-function_siswa.md)

---

Halo. Mimi.

Robi membuat array:

```javascript
["Mie", 12000, true]
```

Aku bertanya, “True itu apa?”

> “Pokoknya… positif.”

Itulah masalah data tanpa label. Untuk satu benda dengan nilai beda peran, kita pakai object:

```javascript
const produk = {
  nama: "Mie",
  harga: 12000,
  tersedia: true
};
```

![Array tanpa label vs object: `nama`, `harga`, `tersedia` — data punya nama, bukan tebak-tebakan](./assets/mimi-robi/p19-01-object-punya-label.jpg)

## Plot twist #1 — properti yang nyaris sama

Robi memanggil `produk.namaa`. Konsol menjawab `undefined`.

> “Object-ku kosong!”

> “Object-mu tidak kosong. Kamu mengetuk pintu bernama berbeda.”

`nama` dan `namaa` adalah dua label berbeda. Mesin patuh pada ejaan, bukan niatmu.

![Robi mengetuk pintu `namaa` dan dapat `undefined`; pintu yang benar adalah `nama`](./assets/mimi-robi/p19-02-ketuk-pintu-salah.jpg)

## Plot twist #2 — function yang malas

```javascript
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}
```

Robi menunggu angka muncul. Tidak ada.

> “Function-nya malas.”

> “Kamu baru menulis resep. Panggil resepnya.”

```javascript
console.log(hitungTotal(12000, 2));
```

Argumen masuk ke parameter, `return` mengirim hasil keluar. `console.log` cuma memajang hasil. Mereka bukan kembar.

![Function adalah resep: baru menghasilkan angka setelah dipanggil; `return` mengirim, `console.log` memajang](./assets/mimi-robi/p19-03-function-resep-dipanggil.jpg)

## Reflect

Array = banyak nilai sejenis. Object = satu data dengan properti bernama. Function = proses bernama yang dipakai lagi. Tiga alat, tiga tugas.

## Exit

1. Kenapa `harga` lebih jelas daripada indeks `[1]` untuk produk?  
2. Parameter vs argumen?  
3. Apa tugas `return`?

> **Nama yang tepat membuat data dan proses dapat diperiksa, bukan ditebak.**

— **Mimi** 🐾  
*(Robi menamai function-nya `hitungTotal`, bukan `fungsi1`. Kemajuan yang bisa dibaca.)*

- Ilustrasi: `assets/mimi-robi/p19-01` … `p19-03` (`.jpg`)
