# Bacaan Pendamping — X-S1-P29
## Mimi & Robi: Hakim Bayangan yang Duduk di Kursi Belakang, Pujian Kosong, & Tangan yang Gatal Mengetik di Laptop Orang

| Field | Isi |
|---|---|
| Kode | X-S1-P29 — Peer review berdasar spek |
| Pertemuan | **29 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P29_project-s1-peer-review_siswa.md](./X-S1-P29_project-s1-peer-review_siswa.md)

---

Halo. Mimi.

P28 Robi punya lembar checkpoint. Ia menganggap itu tiket ke pesta.

Hari ini Antenna — teman sebangku — duduk di kursinya. Robi langsung berdiri di belakang, jari sudah di mouse.

> “Klik yang ini. Terus yang itu. Jangan yang bawah, itu belum… maksudnya sudah. Pokoknya bagus kan?”

Antenna belum baca `spek.md`.

Itu bukan **peer review**. Itu teater yang sutradaranya adalah pemilik panggung.

## Istilah dulu

| Istilah | Artinya hari ini |
|---|---|
| **Peer review** | Teman menguji halaman vs spek **pemilik**, dengan bukti |
| **Spek pemilik** | Hakim satu-satunya; bukan selera reviewer, bukan “punya aku” |
| **Bukti** | Teks yang kelihatan, klik yang terjadi, bagian yang ada atau tidak |
| **Tanpa kode dulu** | `script.js` ditutup; yang diuji adalah yang pengguna lihat |
| **Klarifikasi** | Tanya arti AC; bukan membela, bukan menghapus janji |
| **Antrian revisi** | 1–3 item untuk P30 — hari ini dicatat, bukan diketik |
| **Opini** | “Lebih keren kalau…” — boleh ditulis, tidak wajib dikerjakan |

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Lembar peer + antrian P30 |
| Bukti | Nomor AC + kutipan yang terlihat |
| Bukan | Ngoding · ranking · pelintir spek · pujian kosong |

## Adegan 1 — pujian yang tidak bisa dicentang

Antenna, lelah diarahkan: “Bagus.”

Robi tersenyum. Aku minta lembar. Kosong.

> “Bagus itu kata. Acceptance itu nomor. Kalau tidak ada AC yang disebut, review belum terjadi.”

Antenna akhirnya baca spek. AC 2: setiap section punya `h2`. Section menu masih telanjang — Robi mengira P28 sudah beres, ternyata ia hanya memperbaiki di kepala.

Temuan:

> “AC 2 gagal: `#daftar-menu` tidak punya `h2`. Yang kulihat langsung `<ul>`.”

Itu kalimat yang bisa dibawa ke P30. “Bagus” tidak bisa.

## Plot twist #1 — bandingkan toko sendiri

Antenna punya brief kantin juga. Ia mulai:

> “Punya aku ada tiga tombol. Punya kamu sepi.”

Robi mau menambah tombol di tempat. Aku tahan dua laptop.

> “Spek Antenna bukan hakim halaman Robi. Spek Robi yang diuji. Tombol ketiga Antenna, kalau tidak ada di janji Robi, itu **opini**. Opini dicatat di kotak bawah. Tidak naik antrian wajib.”

**Peer** bukan lomba siapa lebih ramai. Peer adalah saksi: janji ini ditepati atau tidak.

## Plot twist #2 — tangan gatal

Sisa sepuluh menit. Antenna buka `script.js` Robi. Sudah mengetik `getElementById`.

> “Biar cepet, nanti P30 tinggal…”

> “P30 adalah tangan **pemilik**. Hari ini tanganmu di file orang = melewati batas. Kalau kamu yang mengetik, Robi tidak belajar memperbaiki janji. Dan kalau kamu salah, yang rusak file orang.”

Robi hampir menghapus AC 2 supaya lembar Antenna bersih.

Aku:

> “Itu pelintiran yang sama dengan P28. Temuan tidak dibunuh di spek. Temuan antri di `rencana-revisi.md`.”

## Adegan 2 — dua kolom yang damai

Lembar Antenna pada halaman Robi:

```text
AC 1  L  header main footer ada
AC 2  G  daftar-menu tanpa h2
AC 5  L  klik tombol utama → "Mie Sehat tersedia."
AC 6  G  tombol cadangan mengubah #pesan, bukan sorotan

Prioritas #1: AC 2 (HTML)
Prioritas #2: AC 6 (JS) + regresi AC 5
Opini: "warna lebih cerah" — tidak wajib
```

Robi menulis antrian P30. Tidak heroik. Bisa tidur. Besok ada pekerjaan yang punya alamat.

## Reflect

P12 memecat hakim keren. P28 memecat hakim “sudah diklik.” P29 memecat sutradara di kursi belakang dan programmer dadakan di laptop orang. Yang tersisa: spek, bukti, antrian.

Tangan gatal? Simpan untuk P30, di file sendiri.

## Exit

1. Temuan yang kamu **beri**: AC berapa + bukti.
2. Temuan yang kamu **terima**: AC berapa + bukti.
3. Prioritas P30 #1.
4. Satu opini yang kamu tolak masuk antrian.

> **Review yang menolong adalah yang bisa dikerjakan besok, bukan yang meramaikan ego hari ini.**

— **Mimi** 🐾
