# Bacaan Pendamping — X-S1-P30
## Mimi & Robi: Antrian yang Dikerjakan dari Belakang, Tiga Obat Sekali Teguk, & Toko yang Digenerate Ulang karena Satu `h2`

| Field | Isi |
|---|---|
| Kode | X-S1-P30 — Revisi prioritas |
| Pertemuan | **30 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P30_project-s1-revisi_siswa.md](./X-S1-P30_project-s1-revisi_siswa.md)

---

Halo. Mimi.

Kemarin Antenna menulis antrian di kertas Robi:

1. AC 2 — `h2` pada daftar menu (HTML)
2. AC 6 — listener cadangan jangan menimpa `#pesan` (JS)
3. AC 3 — lebar dan kontras (CSS)

Robi membuka tiga file sekaligus. Mengetik. Menyimpan. Klik. Halaman aneh. Fitur 1 yang kemarin lulus sekarang diam.

> “Aku kan sudah revisi.”

> “Kamu sudah mengaduk. **Revisi terarah** itu satu obat, lalu cek suhu. Bukan tiga obat sekali teguk lalu heran pasien pingsan.”

## Istilah dulu

| Istilah | Artinya hari ini |
|---|---|
| **Antrian** | 1–3 item terikat spek dari P29 (plus sisa P28) |
| **Perubahan terkecil** | Satu lapisan, satu tujuan AC |
| **Uji ulang** | Setelah ubahan, AC itu dicek di browser |
| **Regresi** | Yang tadi lulus diuji lagi — seringnya fitur 1 |
| **Log revisi** | Jejak: sebelum, yang diubah, sesudah, lulus/gagal |
| **Opini** | Selera peer; tidak wajib, jangan diselundupkan |
| **Rewrite** | Buang karya lalu generate/salin baru karena satu gagal |

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Item #1 lulus uji + regresi; log tercatat |
| Bukti | Browser + log, bukan “sudah kuubah” |
| Bukan | Opini · fitur 3 · polish P31 · pelintir spek |

## Adegan 1 — antrian dikerjakan dari belakang

Robi mulai dari item 3: warna. “Biar kelihatan kerja.”

AC 2 masih telanjang tanpa `h2`. Pengguna yang cek menu tetap tersesat. Warna baru tidak menolong janji nomor dua.

> “Antrian dibaca dari atas. Nomor satu biasanya yang paling menghalangi pengguna. Warna yang tidak ada di spek adalah **opini**. Opini Antenna tentang ‘lebih cerah’ tetap di laci.”

Ia menambahkan `h2`. Satu baris. Uji AC 2: lulus. Fitur 1 masih hidup. Itu revisi.

## Plot twist #1 — generate ulang

Item 2 (JS) membuatnya panik. Ia buka chat. “Buatkan kantin page lengkap.”

Keluar halaman baru. Spek P23 tertinggal. `id` ganti nama. Lembar peer kemarin tidak nyambung.

> “Satu `getElementById` yang salah alamat tidak membatalkan seluruh rumah. P20: hipotesis, ubahan minimal, uji. Bukan bakar kampung karena satu lampu.”

Kami kembalikan file lama. Listener kedua menulis ke `#sorotanCadangan`. Klik tombol cadangan. Klik tombol utama. **Regresi** lulus.

## Plot twist #2 — antrian kosong yang gelisah

Teman sebangku, Sasa, antriannya kosong. Semua AC peer lulus. Ia bosan. Mau tombol ketiga.

> “Tidak ada item spek bukan izin mengarang janji. Uji regresi, isi log ‘tidak ada item,’ siap P31. P31 itu napas dan akses — bukan kembang api.”

Sasa mengisi log. Terlihat malas. Terlihat jujur. Lebih maju daripada Robi versi bakar kampung.

## Adegan 2 — log yang bisa dibawa ke showcase

```text
#1 AC 2  sebelum: section menu langsung <ul>
         ubahan: satu h2 "Menu yang tersedia"
         sesudah: judul kelihatan · AC L · regresi F1 L

#2 AC 6  sebelum: tombol cadangan menimpa #pesan
         ubahan: textContent #sorotanCadangan
         sesudah: dua teks hidup berdampingan · regresi L
```

Dua blok. Bisa dibaca di P33 tanpa membuka kebanggaan. “Sudah kuubah” tidak bisa.

## Reflect

P29 adalah saksi. P30 adalah pembayaran. Yang dibayar = antrian, bukan opini, bukan mood. P31 boleh merapikan napas — setelah janji yang antri tidak lagi menganggur.

## Exit

1. Item #1: AC berapa, lulus atau gagal?
2. Regresi fitur 1?
3. Opini atau sisa yang tidak kau kerjakan?

> **Revisi yang selesai adalah yang lulus uji, bukan yang paling ramai di editor.**

— **Mimi** 🐾
