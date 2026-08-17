# X-S1-P21 — DOM & Event Pertama

| Field | Isi |
|---|---|
| Kode | X-S1-P21 |
| Basis | **4JP** · Pertemuan **21/34** |
| Durasi | **4 JP = 180 menit** |
| Fokus | DOM, `id`, `getElementById`, `textContent`, click event |
| Batas | **Satu elemen, satu event, tanpa form/validasi/selector kompleks** |

## Learning Transformation

Dari JavaScript yang hanya bekerja di konsol → JavaScript terhubung ke **satu elemen HTML** dan mengubah teksnya saat **satu event klik** terjadi.

## Capaian pembelajaran (Bloom)

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut DOM, `id`, event, listener, `textContent` |
| C2 | Memahami | Menjelaskan HTML → seleksi elemen → event → perubahan teks |
| C3 | Menerapkan | Menulis `getElementById` dan listener click sederhana |
| C4 | Menganalisis | Menemukan `id` typo, skrip terlalu awal, atau listener salah |
| C5 | Mengevaluasi | Menguji acceptance: sebelum klik / setelah klik |
| C6 | Mencipta | Satu interaksi teks milik siswa dengan alasan jelas |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · integrasi/review → **P22**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall fondasi JS → sekarang hubungkan ke HTML |
| 10–30 | Scaffold | C2 | DOM sebagai representasi halaman; `id` sebagai alamat unik |
| 30–50 | Experience | C2–C3 | Pilih elemen + baca/ubah `textContent` |
| 50–65 | Trap | C4 | `id` typo, script sebelum elemen, lupa `#` tidak relevan pada API ini |
| 65–85 | Concept | C2 | click → listener → function → perubahan |
| 85–95 | Practice mini | C3–C4 | Trace sebelum/klik/setelah |
| 95–105 | Transisi | — | Setup folder `p21-dom-event/` |
| 105–120 | Scaffold praktik | C2–C3 | I do: tombol mengubah satu pesan |
| 120–165 | Practice | C3–C6 | Latihan file + interaksi teks milik siswa |
| 165–180 | Reflect | C4–C5 | AC klik · preview P22 |

## Konsep inti

| Istilah | Arti |
|---|---|
| DOM | Representasi elemen halaman yang dapat dibaca JS |
| `id` | Alamat unik elemen HTML |
| `getElementById` | Memilih elemen dari `id` tanpa `#` |
| Event | Kejadian, misalnya klik |
| Event listener | Kode yang menunggu event |
| `textContent` | Membaca/mengganti teks elemen |

```html
<p id="pesan">Belum diklik.</p>
<button id="tombolSapa" type="button">Klik</button>
<script src="script.js"></script>
```

```javascript
const pesan = document.getElementById("pesan");
const tombolSapa = document.getElementById("tombolSapa");

tombolSapa.addEventListener("click", function () {
  pesan.textContent = "Halo, pesan berubah.";
});
```

## Setup latihan

1. Salin folder [skill-js/p21-dom-event/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p21-dom-event/).  
2. Buka `index.html` di browser.  
3. Buka DevTools → Console untuk melihat bukti klik.  
4. Ubah satu pesan atau satu label tombol; uji sebelum dan setelah klik.  
5. Komentar hanya DEFINISI/GUIDE.

## Cognitive Trap

- `getElementById("pesan")` memakai nama `id` tanpa `#`.  
- Jika selector menghasilkan `null`, periksa typo dan urutan script.  
- `textContent` mengubah teks, bukan gaya atau struktur.  
- Listener bukan panggilan langsung: ia menunggu klik.

## Kriteria penerimaan

- [ ] HTML punya satu `id` pesan dan satu `id` tombol  
- [ ] JS memilih keduanya  
- [ ] Klik mengubah `textContent`  
- [ ] Konsol memberi bukti event  
- [ ] Uji sebelum klik dan setelah klik  
- [ ] Tanpa form, `if/else`, selector kompleks, atau framework

## Exit Ticket

1. Apa fungsi `id`?  
2. Mengapa `getElementById` tanpa `#`?  
3. Urutan klik → perubahan?  
4. Satu penyebab `null`?

## Catatan Guru

Gunakan `script` di akhir `body` agar elemen tersedia sebelum JS berjalan. Satu API seleksi dan satu event saja; jangan memperkenalkan input/form atau `querySelector` hari ini.
