# X-S1-P27 — Project S1: Build JS Fitur 2 / Polish Logika

| Field | Isi |
|---|---|
| Kode | X-S1-P27 |
| Basis | **4JP** · Pertemuan **27/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Fitur 2 dari spek, atau polish logika fitur 1; tanpa fitur 3, tanpa CSS baru** |

## Learning Transformation

Dari satu saklar yang sudah menyala (P26) → **dua janji yang tidak saling menimpa**: listener kedua punya `id` dan AC sendiri, atau logika `if`/`else` di dalam listener yang sama. Fitur 1 tetap lulus setelah perubahan.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut regresi, listener terpisah, `if`/`else` di event |
| **C2** | Memahami | Menjelaskan beda fitur 2 vs polish; beda dua `id` vs satu elemen ditimpa |
| **C3** | Menerapkan | Menulis listener kedua **atau** cabang logika pada fitur 1 |
| **C4** | Menganalisis | Menemukan regresi: fitur 1 rusak setelah fitur 2 |
| **C5** | Mengevaluasi | Menguji AC kedua fitur (atau AC polish) sebelum dan sesudah klik |
| **C6** | Mencipta | Perilaku kedua dari `spek.md` dengan reasoning, tanpa menambah janji baru |

**Fokus:** C3–C5 · **Puncak:** C4–C6 · Checkpoint AC → **P28**

## Dua jalur (wajib pilih satu)

| Jalur | Syarat | Hasil hari ini |
|---|---|---|
| **A · Fitur 2** | `spek.md` P23 menyebut interaksi kedua | Listener kedua, `id` berbeda, AC sendiri |
| **B · Polish** | Spek hanya satu interaksi JS | `if`/`else` (atau flag) di listener fitur 1; **bukan** mengarang fitur baru |

Guru cek `spek.md` di menit 0–10. Jangan campur jalur.

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P26 · pilih jalur A atau B dari spek |
| 10–30 | Scaffold | C2 | Dua `id` vs satu mulut; regresi = uji ulang fitur 1 |
| 30–50 | Experience | C2–C3 | Demo: fitur 2 menimpa `#pesan` → fitur 1 “hilang” |
| 50–65 | Trap | C4 | Satu tombol dua AC · fitur 3 · HTML yang tidak dijanjikan |
| 65–85 | Concept | C2 | Jalur A: listener terpisah · Jalur B: cabang di listener yang sama |
| 85–95 | Practice mini | C3 | Trace AC fitur 1 **lalu** AC hari ini |
| 95–105 | Transisi | — | Buka `script.js` · jangan hapus listener P26 |
| 105–120 | Scaffold praktik | C2–C3 | I do: jalur A atau B sesuai spek sampel |
| 120–165 | Practice | C3–C6 | Implementasi + regresi + peer AC |
| 165–180 | Reflect | C5 | Kedua AC (atau polish) lulus · preview P28 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Fitur 3 (warna, hitungan, form kirim) | Maksimal dua interaksi dari spek |
| Kedua listener menulis ke `#pesan` | Setiap janji punya elemen target sendiri |
| Mengarang tombol baru yang tidak ada di spek | Menambal `id` yang **sudah dijanjikan** P23/P24 |
| Menghapus fitur 1 agar “lebih rapi” | Fitur 1 tetap ada dan tetap lulus AC |
| CSS / animasi “biar kelihatan beda” | `script.js` + uji regresi |

## Konsep inti

| Istilah | Arti di project |
|---|---|
| **Fitur 2** | Interaksi klik kedua yang sudah tertulis di `spek.md` |
| **Polish** | Memperjelas perilaku fitur 1 (mis. klik pertama vs klik ulang) tanpa janji baru |
| **Listener terpisah** | Dua `addEventListener` pada dua elemen, dua tujuan |
| **Regresi** | Fitur yang tadi lulus menjadi gagal setelah perubahan baru |
| **AC independen** | Uji fitur 1 dan fitur 2 sendiri-sendiri; keduanya harus lulus |

```javascript
const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");
const sorotanCadangan = document.getElementById("sorotanCadangan");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});

tombolCadangan.addEventListener("click", function () {
  sorotanCadangan.textContent = "Sorotan cadangan: Es Teh habis lebih dulu.";
  console.log("Fitur 2: sorotan diganti.");
});
```

Jalur B (polish, jika spek hanya satu fitur):

```javascript
let sudahDiklik = false;

tombolUtama.addEventListener("click", function () {
  if (sudahDiklik === false) {
    pesan.textContent = "Mie Sehat tersedia.";
    sudahDiklik = true;
    console.log("Fitur 1: klik pertama.");
  } else {
    pesan.textContent = "Sudah dicek. Status tidak berubah.";
    console.log("Fitur 1: klik ulang.");
  }
});
```

## Checklist implementasi

**Semua jalur**
- [ ] Fitur 1 P26 masih lulus AC (regresi)
- [ ] Tidak ada fitur 3
- [ ] Tidak ada CSS baru sebagai syarat
- [ ] Console mencatat event yang relevan

**Jalur A**
- [ ] `id` fitur 2 cocok spek + HTML
- [ ] Target teks **bukan** elemen yang sama dengan fitur 1 (kecuali spek memang begitu)
- [ ] AC sebelum/sesudah klik fitur 2 dicentang

**Jalur B**
- [ ] Cabang `if`/`else` (atau setara) bisa ditrace
- [ ] AC polish: klik pertama vs klik ulang tertulis dan diuji
- [ ] Tidak menambah tombol yang tidak ada di spek

## Contoh (brief B kantin)

[skill-js/p27-js-fitur2/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p27-js-fitur2/) — pola dua listener. Teks wajib dari `spek.md` masing-masing.

## Cognitive Trap

- Fitur 2 menimpa `#pesan` → AC fitur 1 gagal tanpa siswa sadar.
- Dua `addEventListener` pada **tombol yang sama** untuk dua AC yang berbeda.
- “Masih ada waktu” → warna, counter, `innerHTML` — itu fitur 3.
- Polish dikira wajib membuat tombol kedua.
- Elemen HTML baru yang tidak pernah disebut spek.

## Guiding Questions

1. Spek-mu jalur A atau B? Tunjuk barisnya.
2. Setelah fitur hari ini, klik fitur 1 masih sesuai AC?
3. Dua janji menulis ke elemen yang sama atau berbeda?
4. Konsol membedakan fitur 1 dan fitur 2 (atau klik pertama vs ulang)?
5. Apa yang sengaja **tidak** dikerjakan meski sempat terpikir?

## Kriteria penerimaan

- [ ] Jalur sesuai `spek.md` (bukan selera)
- [ ] Fitur 1 lulus regresi
- [ ] AC hari ini (fitur 2 atau polish) sebelum/sesudah + konsol
- [ ] Peer memverifikasi tanpa melihat kode
- [ ] Reasoning dua kalimat: kenapa elemen/cabang ini
- [ ] Tanpa fitur 3 / tanpa CSS sebagai syarat lulus

## Exit Ticket

1. Jalurku: A / B — karena spek baris …
2. `id` / cabang yang kupakai: …
3. Hasil uji regresi fitur 1: lulus / gagal
4. Yang tidak kutambah meski sempat ingin: …

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — dua janji (atau satu janji yang lebih jujur), bukan “semakin banyak klik semakin hebat.”

## Catatan Guru

Cek spek dulu, baru kode. Jika fitur 1 rusak, hentikan fitur 2 sampai regresi lulus. P28 = uji paket, bukan menambah interaksi.
