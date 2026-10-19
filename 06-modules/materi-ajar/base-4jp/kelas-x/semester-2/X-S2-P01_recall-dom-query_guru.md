# Materi Guru Lengkap — X-S2-P01 (Base 4JP)

**Handout siswa (bagikan):** [X-S2-P01_recall-dom-query_siswa.md](./X-S2-P01_recall-dom-query_siswa.md)

**Bacaan pendamping siswa:** [X-S2-P01_bacaan-mimi-robi.md](./X-S2-P01_bacaan-mimi-robi.md)

**Modul:** [X-S2-P01_recall-dom-query.md](../../../base-4jp/kelas-x/semester-2/X-S2-P01_recall-dom-query.md)

**Materi pendukung sumber:** [X-S2-P01_recall-dom-query.md](../../../materi-pendukung/base-4jp/kelas-x/semester-2/X-S2-P01_recall-dom-query.md)

**Latihan:** [skill-js/p01-recall-dom-query/](./skill-js/p01-recall-dom-query/)

> File ini **mandiri untuk mengajar**: timeline + skrip + pendukung ada di sini.

---

## A. Modul pertemuan (referensi mengajar)

# X-S2-P01 — Recall S1 + DOM & Query

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 |
| Basis | **4JP** · Pertemuan **1/32** |
| Unit | X2.1 |
| Durasi | **4 JP = 180 menit** |
| Fokus | Recall S1 · DOM · `querySelector` / `querySelectorAll` |
| Dilarang hari ini | Update DOM sebagai materi utama · event baru wajib · form · framework · ulangi HTML/CSS dari nol |

## Learning Transformation

Dari dokumen S1 yang sudah jadi → pohon elemen yang **dipilih dengan sadar** sebelum diubah (P02) atau di-event-kan (P03+).

## Capaian Bloom

| Kode | Level | Bukti di kelas |
|------|-------|----------------|
| C1 | Mengingat | Istilah DOM, selector, NodeList |
| C2 | Memahami | Statis vs hidup; id API vs selector |
| C3 | Menerapkan | Query + log di konsol |
| C4 | Menganalisis | Prediksi node; diagnosis null |
| C5 | Mengevaluasi | 1 batas “tidak bisa tanpa edit HTML” dari S1 |
| C6 | Mencipta | Lembar prediksi milik siswa |

**Fokus:** C2–C4 · **Puncak:** C3–C5

## Timeline (180') + skrip fasilitasi

### 0–15 · Orientation · C1–C2

Tulis di papan: **S2 = halaman hidup** · 32 pertemuan · rule: satu fokus.  
Kalimat kunci: “Kita tidak mengulang tag. Kita belajar **memilih** bagian halaman.”

### 15–35 · Recall S1 · C1–C5

Siswa buka project S1 (atau contoh guru). Sticky 3 kotak:

1. Yang kubanggakan di S1  
2. Spek/AC yang pernah gagal lalu diperbaiki  
3. **Satu hal yang tidak berubah kecuali HTML diganti**

Kumpulkan #3 di papan — itu jembatan ke “kenapa DOM”.

### 35–55 · Experience · C2–C4

Tampilkan HTML latihan (3× `.item`). Tanya: “Jika aku bilang ‘ambil item’, yang mana?”  
Tulis prediksi kelas, baru jalankan `querySelector` vs `All`.

### 55–70 · Trap · C4

Demo cepat:

```javascript
document.getElementById("#area"); // null
document.querySelector("#area");  // elemen
document.querySelector(".item");  // hanya pertama
document.querySelectorAll(".item").length; // 3
```

Clarify: pagar `#` untuk **selector**; `getElementById` hanya **nama id**.

### 70–90 · Concept · C2

Tabel di papan: statis | hidup | DOM | `querySelector` | `querySelectorAll`.  
Jembatan: S1 `getElementById` tetap sah untuk satu id jelas.

### 90–105 · Scaffold praktik · C2–C3

I do: buka folder latihan · script akhir body · log `textContent` dan `.length`.  
We do: satu prediksi bersama sebelum Enter.

### 105–160 · Practice · C3–C6

Siswa isi lembar prediksi → jalankan → cocokkan. Peer tukar lembar: “Apa yang teman prediksi salah?”  
Jika cepat: tambah **satu** selector baru (mis. `main p.item`) — tetap tanpa update/event.

### 160–180 · Reflect · C4–C5

Exit ticket. Preview P02: **mengubah teks dengan aman** (`textContent`), bukan menebak selector.

**Adaptasi ketat:** potong Hook, jangan potong Practice.

---

## B. Pendukung mengajar

### Pengetahuan inti

- DOM = representasi hidup di memori browser, bukan file HTML di disk saja.  
- `querySelector` = pertama yang cocok atau `null`.  
- `querySelectorAll` = NodeList; cek `.length` dulu.  
- S2 belum menyentuh SPA/router/storage.

### Kesalahan umum

| Gejala | Hipotesis | Perbaikan minimal |
|--------|-----------|-------------------|
| `null` | Typo class/id · script terlalu awal · `#` di getElementById | Cocokkan HTML · pindah script · buang `#` pada getElementById |
| length 0 | Class salah eja · elemen belum ada | Inspeksi Elements · bandingkan string |
| “Kok cuma satu?” | Pakai `querySelector` bukan `All` | Ganti API atau jelaskan “pertama” |

### Asesmen formatif

| Indikator | Belum | Tercapai |
|-----------|-------|----------|
| Recall | S1 dilupakan / ingin ulangi HTML | 1 batas statis tertulis |
| Query | Asal tulis selector | Prediksi → bukti |
| Bahasa | “Sudah interaktif” tanpa bukti | Bicara node / length / null |

### Checklist guru

- [ ] Compass S2 + rule satu fokus  
- [ ] Sticky “tidak bisa tanpa edit HTML”  
- [ ] Trap `#` + “querySelector = pertama”  
- [ ] Latihan + lembar prediksi  
- [ ] Tidak loncat ke event/update sebagai materi utama  
- [ ] Preview P02

### Etika

Live coding: ketik selector bersama. Jangan tempel solusi penuh ke editor siswa.

### KBC

**Tabayyun / kejujuran ilmu:** prediksi dulu, baru bukti konsol — jangan klaim “sudah paham DOM” tanpa bisa tunjuk node.

**Dalil usulan (koordinasi guru agama):** QS Al-Isra 17:36 · QS Al-Hujurat 49:6 — jangan ikut dugaan tanpa bukti.
