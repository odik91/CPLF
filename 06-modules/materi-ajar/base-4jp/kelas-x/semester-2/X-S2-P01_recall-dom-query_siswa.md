# Handout Siswa — X-S2-P01

**Topik:** Recall S1 + DOM & Query · **4JP** · Pertemuan **1/32**

**Modul:** [X-S2-P01_recall-dom-query.md](../../../../base-4jp/kelas-x/semester-2/X-S2-P01_recall-dom-query.md)  
**Bacaan:** [X-S2-P01_bacaan-mimi-robi.md](./X-S2-P01_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p01-recall-dom-query/](./skill-js/p01-recall-dom-query/)

## 1. Tujuan

Hari ini kamu **tidak** mengulang HTML/CSS dari nol. Kamu:

1. Mengingat jejak S1 (apa yang sudah jadi, apa yang masih “mati”)  
2. Melihat halaman sebagai **pohon elemen (DOM)**  
3. Memilih elemen dengan `querySelector` / `querySelectorAll` dan membuktikan di konsol  

## 2. Ringkasan konsep

| Istilah | Arti singkat |
|---------|----------------|
| Statis | Berubah hanya jika file HTML/CSS diganti |
| Hidup | Bisa berubah karena JS memilih & mengubah elemen |
| DOM | Pohon elemen di browser |
| `querySelector` | Ambil **satu** yang cocok (atau `null`) |
| `querySelectorAll` | Ambil **semua** yang cocok → cek `.length` |

```text
HTML di file  →  browser bangun DOM  →  JS memilih node  →  (nanti) ubah / event
```

```javascript
const judul = document.querySelector(".judul");
const semuaItem = document.querySelectorAll(".item");

console.log(judul.textContent);
console.log(semuaItem.length);
```

**Ingat S1:** `getElementById("pesan")` — **tanpa** `#`.  
**Selector:** `querySelector("#pesan")` — **dengan** `#` karena ini gaya CSS.

## 3. Lembar recall (isi dulu)

| Pertanyaan | Jawabanmu |
|------------|-----------|
| 1 jejak S1 yang kubanggakan | |
| 1 spek/AC yang pernah gagal lalu kuluruskan | |
| 1 hal di halaman S1 yang **tidak** berubah kecuali HTML diganti | |

## 4. Setup latihan

1. Salin folder [p01-recall-dom-query](./skill-js/p01-recall-dom-query/).  
2. Buka `index.html` di browser.  
3. F12 → Console.  
4. Isi **prediksi** di bawah **sebelum** melihat hasil log.  
5. Komentar di JS hanya DEFINISI/GUIDE.

## 5. Lembar prediksi → bukti

| Kode / pertanyaan | Prediksiku | Hasil konsol |
|-------------------|------------|--------------|
| `querySelector(".judul").textContent` | | |
| `querySelector(".item").textContent` | | |
| `querySelectorAll(".item").length` | | |
| `getElementById("#area")` | | |
| `querySelector("#area")` | | |

## 6. Trap

- `querySelector(".item")` = **pertama saja**, bukan semua.  
- `getElementById("#area")` biasanya `null` — buang `#`.  
- Jika `null` / length `0`: cek ejaan class/id dan posisi `<script>`.

## 7. Kriteria penerimaan

- [ ] Satu kalimat: beda halaman statis vs hidup  
- [ ] Pakai `querySelector` dan `querySelectorAll`  
- [ ] Prediksi tertulis sebelum bukti  
- [ ] Jelaskan 1 penyebab `null` atau length 0  
- [ ] Tidak wajib membuat event baru / mengubah teks sebagai fitur hari ini  

## 8. Exit ticket

1. Jejak S1 + satu hal yang masih “mati”: …  
2. Selector untuk semua `.item`: …  
3. Prediksi `querySelector(".item").textContent` di latihan: …

**Preview P02:** mengubah teks dengan aman (`textContent`) — setelah kamu bisa **memilih** node yang benar.
