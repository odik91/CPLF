# X-S2-P02 — Update DOM Aman

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 |
| Semester | 2 · Pertemuan **2/32** |
| Unit | X2.1 |
| Durasi | **4 JP = 180 menit** · Basis **4JP** |
| CP Merdeka | BK, AP, LD |
| Capability | CX-C2, CX-T1, CX-B1 |
| MM | MM-05 (antarmuka berubah) · MM-02 (representasi) |
| EXP | — |

## Learning Transformation

Dari “sudah bisa **memilih** node” (P01) → mengubah **teks** di halaman dengan sadar: pakai `textContent` sebagai default aman, paham mengapa `innerHTML` bukan jalan pintas untuk string biasa.

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut `textContent`, `innerHTML`, update DOM |
| **C2** | Memahami | Menjelaskan beda teks biasa vs menyisipkan HTML; kapan `textContent` cukup |
| **C3** | Menerapkan | Memilih elemen lalu mengubah teksnya (satu target jelas) |
| **C4** | Menganalisis | Membandingkan hasil `textContent` vs `innerHTML` pada string yang sama |
| **C5** | Mengevaluasi | Memilih API yang aman untuk pesan teks pengguna / label UI |
| **C6** | Mencipta | Variasi pesan milik siswa + AC sebelum/sesudah update |

**Fokus utama hari ini:** C2–C4 · **Puncak praktik:** C3–C5 · event dalam → **P03**

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | Orientation | C1 | Recall P01: pilih dulu, baru ubah | |
| 10–30 | Scaffold | C2 | I do: baca `textContent` → tulis nilai baru | |
| 30–50 | Experience | C2–C4 | Sama string: `textContent` vs `innerHTML` di layar | Tag terlihat vs jadi elemen |
| 50–70 | Trap + Clarify | C4 | “Pakai `innerHTML` biar keren” · string mengandung `<…>` | Amanah teks |
| 70–90 | Concept | C2 | Default = `textContent` · `innerHTML` = sadar struktur | |
| 90–105 | Scaffold praktik | C2–C3 | I do: tombol (pola S1) ubah **satu** label | Script akhir body |
| 105–160 | Practice | C3–C6 | Latihan file · AC sebelum/sesudah · peer cek | Satu target |
| 160–180 | Reflect + Exit | C4–C5 | Pilih API + alasan · preview P03 event klik dalam | |

**Adaptasi ketat:** jangan potong Practice — potong Experience perbandingan jika perlu.

**Rujukan:** [Indeks S2](./X-S2_Index.md) · [P01](./X-S2-P01_recall-dom-query.md) · [S1 P21](../semester-1/X-S1-P21_dom-event-pertama.md)

---

## Batas hari ini

**Ya:** pilih node · baca/ubah `textContent` · bandingkan singkat dengan `innerHTML` · satu pemicu sederhana (klik S1 atau tombol latihan)  
**Tidak:** `innerHTML` sebagai kebiasaan · membangun HTML string panjang · form/validasi · banyak listener · `createElement` list (→ Blok 2) · framework

---

## Konsep inti

| Istilah | Arti |
|---------|------|
| Update DOM | Mengubah isi/properti node yang sudah dipilih |
| `textContent` | Membaca/mengganti **teks** — karakter khusus tampil apa adanya |
| `innerHTML` | Membaca/mengganti isi sebagai **HTML** — browser bisa membuat elemen baru |
| Default aman | Untuk label, pesan, angka → **`textContent`** |

```html
<p id="status">Belum diubah.</p>
<button id="tombolUbah" type="button">Ubah status</button>
```

```javascript
const status = document.querySelector("#status");
const tombolUbah = document.querySelector("#tombolUbah");

tombolUbah.addEventListener("click", function () {
  status.textContent = "Status diperbarui dengan aman.";
});
```

**Demo banding (guru / eksperimen terkendali):**

```javascript
const demo = document.querySelector("#demo");
demo.textContent = "<b>teks tebal?</b>"; // terlihat termasuk tanda < >
// vs
demo.innerHTML = "<b>teks tebal?</b>";   // jadi elemen <b> — sadar risiko
```

---

## Setup latihan

1. Salin [skill-js/p02-dom-update-aman/](../../../materi-ajar/base-4jp/kelas-x/semester-2/skill-js/p02-dom-update-aman/).  
2. Buka `index.html` · F12 Console.  
3. Uji sebelum klik / setelah klik.  
4. Kerjakan eksperimen banding di area `#demo` (ikuti GUIDE di `script.js`).  
5. Komentar hanya DEFINISI / GUIDE.

---

## Cognitive Trap

**Asumsi:** “`innerHTML` selalu lebih powerful / wajib untuk update.”  
**Aman:** Puji keinginan melihat perubahan; challenge hanya pada **menyuntik HTML tanpa perlu**.

Trap teknis:
- Mengubah sebelum elemen dipilih (`null`)  
- Mengira `textContent` mengubah CSS  
- Menempel string user ke `innerHTML` “biar ada warna”

---

## Guiding Questions

1. Apa yang berubah di layar — teks atau struktur HTML?  
2. Jika pesan berisi `<script>` atau tag, API mana yang lebih aman untuk **teks biasa**?  
3. Urutan: pilih node → ubah → bukti?

---

## Props / Fallback

- Browser + DevTools · folder latihan  
- Offline: proyektor demo banding · siswa catat prediksi di kertas  

---

## Exit Ticket

1. Satu kalimat: kapan pilih `textContent`?  
2. Apa risiko memakai `innerHTML` untuk string sembarang?  
3. AC: sebelum update = … · setelah = …

---

## Formatif (rubrik)

Fokus: **TEC**, **REA**, **OBS** — [09_Rubrik_Formatif_Unit.md](../../../09-rubrik/09_Rubrik_Formatif_Unit.md)

---

## Kriteria penerimaan

- [ ] Memilih elemen dengan benar (bukan `null`)  
- [ ] Mengubah teks dengan `textContent`  
- [ ] Menjelaskan beda singkat vs `innerHTML` (1 contoh)  
- [ ] Uji sebelum / setelah update  
- [ ] Tidak menjadikan `innerHTML` default · tanpa form · tanpa list dinamis  

---

## Catatan Guru

Listener klik di sini **alat** (sudah S1), bukan materi event baru. Jangan dalam di `preventDefault` / banyak tombol — itu P03+. Tekankan: **amanah teks** = jangan menyuntik HTML jika yang dibutuhkan hanya tulisan.
