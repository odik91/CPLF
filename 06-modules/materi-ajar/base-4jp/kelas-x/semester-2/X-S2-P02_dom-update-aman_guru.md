# Materi Guru Lengkap — X-S2-P02 (Base 4JP)

**Handout siswa (bagikan):** [X-S2-P02_dom-update-aman_siswa.md](./X-S2-P02_dom-update-aman_siswa.md)

**Bacaan pendamping siswa:** [X-S2-P02_bacaan-mimi-robi.md](./X-S2-P02_bacaan-mimi-robi.md)

**Modul:** [X-S2-P02_dom-update-aman.md](../../../base-4jp/kelas-x/semester-2/X-S2-P02_dom-update-aman.md)

**Materi pendukung sumber:** [X-S2-P02_dom-update-aman.md](../../../materi-pendukung/base-4jp/kelas-x/semester-2/X-S2-P02_dom-update-aman.md)

**Latihan:** [skill-js/p02-dom-update-aman/](./skill-js/p02-dom-update-aman/)

> File ini **mandiri untuk mengajar**.

---

## A. Modul pertemuan (referensi mengajar)

# X-S2-P02 — Update DOM Aman

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 |
| Basis | **4JP** · Pertemuan **2/32** |
| Unit | X2.1 |
| Durasi | **4 JP = 180 menit** |
| Fokus | `textContent` · banding `innerHTML` · update satu target |
| Dilarang hari ini | `innerHTML` sebagai kebiasaan · form · banyak listener · list dinamis · framework |

## Learning Transformation

Dari memilih node → **mengubah teks** dengan API yang jujur untuk tulisan biasa.

## Capaian Bloom

| Kode | Bukti |
|------|-------|
| C1–C2 | Menjelaskan textContent vs innerHTML |
| C3 | Satu target teks berubah setelah aksi |
| C4 | Membandingkan hasil dua API pada string sama |
| C5 | Memilih textContent untuk pesan teks + alasan |
| C6 | Variasi pesan + AC sebelum/sesudah |

**Fokus:** C2–C4 · **Puncak:** C3–C5

## Timeline (180') + skrip fasilitasi

### 0–30 · Orientation + scaffold · C1–C2

Recall P01: “Kemarin memilih. Hari ini mengubah — tapi aman.”  
I do: `const el = document.querySelector("#status"); console.log(el.textContent); el.textContent = "…";`

### 30–70 · Experience + trap · C2–C4

Siapkan `#demo`. String uji: `"<b>Halo</b>"`.

1. Prediksi kelas untuk `textContent`  
2. Jalankan — tanda `<b>` terlihat sebagai teks  
3. Prediksi `innerHTML`  
4. Jalankan — jadi tebal  

Clarify: “Power” `innerHTML` = menyisipkan **struktur**. Untuk label/pesan → default `textContent`.  
Jangan demo XSS penuh; cukup kesadaran “string bisa jadi elemen”.

### 70–90 · Concept · C2

Papan: Update = pilih → ubah properti. Tabel textContent | innerHTML | kapan.

### 90–105 · Scaffold praktik · C2–C3

Buka folder latihan. Tombol mengubah `#status` via `textContent`. AC: sebelum “Belum…”, setelah pesan siswa.

### 105–160 · Practice · C3–C6

Siswa ganti pesan + (opsional) label tombol. Area demo: ulangi banding sekali, catat di handout. Peer: uji AC tanpa lihat kode dulu.

### 160–180 · Reflect · C4–C5

Exit. Preview P03: event klik **dalam** (alur yang dipahami), bukan hanya “ada addEventListener”.

---

## B. Pendukung mengajar

### Pengetahuan inti

- `textContent` set/get plain text; HTML entities tampil literal.  
- `innerHTML` parse HTML; cocok hanya jika memang membangun markup **yang dikontrol** (belum diajar hari ini).  
- Selalu cek elemen bukan `null` sebelum update.  
- Klik = pemicu yang sudah dikenal dari S1; bukan kurikulum event baru.

### Kesalahan umum

| Gejala | Hipotesis | Perbaikan |
|--------|-----------|-----------|
| Tidak berubah | Selector salah / null | Log elemen dulu |
| Tag muncul aneh | Salah API | Sesuaikan textContent vs innerHTML |
| Halaman “rusak” | innerHTML menimpa anak | Kembalikan HTML; pakai textContent untuk teks |

### Asesmen formatif

| Indikator | Belum | Tercapai |
|-----------|-------|----------|
| Update | Asal innerHTML | textContent + alasan |
| Bukti | Klaim | Sebelum/sesudah + peer |
| Batas | Banyak fitur | Satu target jelas |

### Checklist guru

- [ ] Recall P01  
- [ ] Demo banding string sama  
- [ ] Default textContent ditegaskan  
- [ ] Practice + AC  
- [ ] Tidak dalam event / form  
- [ ] Preview P03  

### Etika

Jangan tempel solusi. Siswa mengetik assignment `textContent` sendiri.

### KBC

**Amanah & tidak menyesatkan:** menampilkan teks apa adanya; tidak menyisipkan markup sembarangan “agar keren”.

**Dalil usulan:** QS An-Nisa 4:58 (amanah) · QS Al-Isra 17:36 (jangan ikut tanpa ilmu).
