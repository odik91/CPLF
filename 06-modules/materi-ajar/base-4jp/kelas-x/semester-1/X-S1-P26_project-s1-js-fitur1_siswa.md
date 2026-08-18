# Handout Siswa — X-S1-P26

**Topik:** Project S1 — JS Fitur 1 · **4JP** · Pertemuan **26/34**

**Modul:** [X-S1-P26_project-s1-js-fitur1.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P26_project-s1-js-fitur1.md)  
**Bacaan:** [X-S1-P26_bacaan-mimi-robi.md](./X-S1-P26_bacaan-mimi-robi.md)  
**Contoh pola:** [skill-js/p26-js-fitur1/](./skill-js/p26-js-fitur1/)

Kerjakan di `script.js` folder projectmu. Jangan tambah elemen HTML baru.

## Dari spek ke kode

| Baris `spek.md` | Di HTML | Di JS |
|---|---|---|
| `#pesan` (teks awal) | `id="pesan"` | `getElementById("pesan")` |
| `#tombolUtama` | `id="tombolUtama"` | `getElementById("tombolUtama")` |
| AC klik → teks target | `button type="button"` | `.addEventListener("click", ...)` |

## Pola implementasi

```javascript
const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Teks target sesuai spek.md";
  console.log("Fitur 1: pesan diperbarui.");
});
```

Ganti `"Teks target sesuai spek.md"` dengan kalimat di `spek.md` / AC-mu.

## Trace AC fitur 1

| Saat | Nilai `#pesan` | Konsol |
|---|---|---|
| Sebelum klik | | (kosong) |
| Setelah klik | | |

## Debug singkat

| Gejala | Penyebab umum | Perbaikan |
|---|---|---|
| `null` di konsol | `id` typo atau script terlalu awal | Cocokkan `id`; `script` akhir `body` |
| Teks tidak berubah | Listener tidak terpasang | Cek nama variable dan event `"click"` |
| Dua perubahan per klik | Dua listener | Hapus duplikat |

## Checklist

- [ ] `id` cocok spek  
- [ ] Teks awal sesuai AC  
- [ ] Klik ubah `#pesan`  
- [ ] Konsol catat event  
- [ ] Tidak ada elemen HTML baru  
- [ ] Fitur 2 ditunda

## Peer (tanpa kode)

Teks sebelum klik: …  
Klik → …  
Konsol: …  
AC lulus: …

## Exit

1. `id` yang kupakai: …  
2. Teks awal / target: …  
3. Debug yang kutemukan: …  
4. Reasoning: …

**Preview P27:** fitur kedua dari spek — jika tidak ada, gunakan waktu untuk polish logika fitur 1.
