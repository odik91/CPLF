# Bacaan Pendamping — X-S1-P32
## Mimi & Robi: Garis yang Dikira Titik Awal, AC yang Dihapus Supaya Hijau, & Kartu Status yang Lebih Jujur dari Klaim

| Field | Isi |
|---|---|
| Kode | X-S1-P32 — Uji Final DoD |
| Pertemuan | **32 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P32_project-s1-dod_siswa.md](./X-S1-P32_project-s1-dod_siswa.md)

---

Halo. Mimi.

Robi masuk kelas dengan wajah orang yang sudah menang. Membuka laptop. Langsung membuat animasi tombol karena "P33 harus berkesan."

Saya menunjuk papan: **P32 = garis akhir. P33 = panggung.**

> "Panggung tidak menunggu kamu selesai renovasi."

## Istilah dulu

| Istilah | Artinya hari ini |
|---|---|
| **DoD** | Definition of Done — 5 domain dicentang dengan bukti |
| **Bugfix kecil** | < 10 menit, satu lapisan, satu uji, satu regresi |
| **Masalah besar** | > 10 menit atau menyentuh banyak lapisan — masuk kartu, bukan dikerjakan |
| **Kartu status** | Dokumen jujur: lulus, bugfix, gap tersisa |
| **Siap showcase** | DoD terisi penuh; bukan "rasanya sudah" |

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | 5 domain diuji · bugfix kecil · kartu status |
| Bukti | Checklist terisi, bukan klaim lisan |
| Bukan | Renovasi besar · fitur 3 · hapus AC · ignore regresi |

## Adegan 1 — AC yang menghilang

Domain Perilaku JS: klik tombol cadangan. `#pesan` berubah, bukan `#sorotanCadangan`. AC 6 gagal.

Robi menghapus baris AC 6 dari `spek.md`.

> "Sekarang lulus semua."

> "Kamu tidak membetulkan janji. Kamu membakarnya. Pengguna masih akan melihat `#sorotanCadangan` tidak berubah. Kamu yang tidak akan melihatnya — karena sudah kamu hapus dari daftar."

Kami kembalikan AC 6. Satu baris listener diubah targetnya. Lima menit. Regresi fitur 1 lulus. Itu bugfix.

## Plot twist #1 — bugfix yang tumbuh

Domain HTML: `title` masih "Info Kantin Kelas X P28." Robi berniat ubah. Lalu "sekalian" ganti `h2` jadi lebih puitis. Lalu "sekalian" tambah `nav`. Empat puluh menit. CSS ikut bergerak. Listener lama sempat putus.

> "Satu perubahan, satu uji. '`title`' adalah satu kata, satu lapisan, satu menit. Sisanya adalah renovasi yang tidak dipesan DoD."

## Plot twist #2 — kartu status yang kosong

Teman Sasa lulus 5 domain, kartu status kosong karena "tidak ada yang perlu ditulis."

Setelah showcase, ditanya: "Kenapa `lang` pakai `en`?" Sasa tidak tahu — ia sudah lupa, dan tidak ada jejak.

> "Kartu status bukan daftar kegagalan. Ia adalah peta keputusan. 'Saya sengaja tidak menambah nav karena spek tidak memintanya' lebih kuat daripada diam."

## Adegan 2 — garis yang terisi jujur

```text
Domain lulus    : 5/5 (dengan 2 bugfix)
Bugfix          : title P28 → judul spek (HTML, 1 menit)
                  listener 2 → sorotanCadangan (JS, 3 menit + regresi)
Gap tersisa     : tidak ada
Yang tidak dikerjakan: nav cadangan (tidak ada di spek)
```

Tidak heroik. Lima baris. Bisa dijelaskan besok tanpa gugup.

## Reflect

P28 checkpoint pertama. P30 antrian peer. P31 kesopanan. P32 garis resmi. Kartu status adalah janji terakhir sebelum panggung: ini yang ada, ini yang lulus, ini yang saya tahu belum sempurna tapi siap saya jelaskan.

## Exit

1. Berapa domain lulus?
2. Bugfix apa yang dikerjakan?
3. Gap yang sengaja dibawa ke P33 (jujur)?

> **DoD yang jujur lebih kuat dari artefak yang "sempurna" karena AC-nya dihapus.**

— **Mimi** 🐾
