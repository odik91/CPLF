# Bacaan Pendamping — X-S1-P28
## Mimi & Robi: Pintu yang Dikira Garis Finish, Hakim yang Hanya Menguji Tombol Terakhir, & Spek yang Dipelintir agar Bug Lulus

| Field | Isi |
|---|---|
| Kode | X-S1-P28 — Checkpoint uji AC |
| Pertemuan | **28 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P28_project-s1-checkpoint_siswa.md](./X-S1-P28_project-s1-checkpoint_siswa.md)

---

Halo. Mimi.

Robi menutup laptop dengan gestur orang yang sudah menyeberang sungai.

> “P27 selesai. Project selesai. Besok tinggal pamer.”

Aku menunjuk kalender. P28. P29. P30. P32. P33.

> “Kamu baru sampai pintu. Pintu itu namanya **checkpoint**: paket janji diuji. Bukan pesta. Pesta — kalau spek lulus — masih beberapa pertemuan lagi.”

## Istilah dulu

| Istilah | Artinya hari ini |
|---|---|
| **Checkpoint** | Pintu uji: semua AC spek dicentang dengan bukti, sebelum orang lain mereview |
| **AC** | Syarat lulus yang bisa dijawab lulus/gagal tanpa kata “keren” |
| **Temuan** | AC gagal + bukti (teks yang kelihatan, klik yang terjadi) |
| **Lapisan** | HTML = struktur/`id` · CSS = keterbacaan · JS = perilaku |
| **Prioritas** | Yang paling menghalangi janji, dikerjakan dulu |
| **Regresi** | Setelah perbaikan, yang tadi lulus diuji lagi |
| **Peer review** | P29 — orang lain yang menguji; bukan hari ini |

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Status jujur seluruh AC + 1–3 perbaikan terarah |
| Bukti | Lembar checkpoint, bukan klaim lisan |
| Bukan | Fitur 3 · rewrite · mengubah spek agar bug lulus · review teman penuh |

## Adegan 1 — hakim tombol terakhir

Robi membuka halaman. Klik tombol cadangan. Ada teks berubah. Ia mencentang semua kotak di kepala.

Aku buka `spek.md` dari P23.

> “Section menu harus punya `h2`.”

Kami lihat. Daftar menu telanjang. Tidak ada judul. Mata meloncat dari sorotan ke jam buka tanpa pijakan.

> “Tombolnya jalan.”

> “Tombol itu AC nomor lima. Nomor dua belum diuji. Hakim yang hanya menguji barang paling baru itu hakim yang malas.”

**Checkpoint** artinya urutan: struktur, lalu keterbacaan, lalu fitur 1, lalu fitur 2, lalu regresi. Bukan “ingatanku tentang klik kemarin.”

## Plot twist #1 — perbaikan yang menambah janji

Robi panik. Dua AC gagal. Ia menambah tombol ketiga dan gradient.

> “Supaya checkpoint-nya meyakinkan.”

> “Itu bukan perbaikan. Itu fitur 3. Perbaikan terkecil untuk section tanpa judul adalah satu `h2`. Bukan kembang api.”

Teman di sebelah punya ide lebih hemat: menghapus baris AC yang gagal dari `spek.md`.

Aku tarik napas.

> “Itu pelintiran. Bug menyesuaikan janji, bukan janji menyesuaikan bug. P04 sudah memecat trik itu.”

## Plot twist #2 — regresi diam-diam

Robi akhirnya membetulkan `h2`. Lalu ia “merapikan” `script.js`. Klik tombol utama: diam. Kemarin lulus.

Itu **regresi**. Perbaikan tanpa uji ulang adalah klaim baru yang belum dibayar.

```text
UJI → TEMUAN (bukti + lapisan) → PRIORITAS → PERBAIKI SATU → UJI ULANG + REGRESI
```

Enam kata kerja. Kalau yang terakhir dilewati, pintu masih tertutup meski kamu sudah berdiri di depan.

## Adegan 2 — status yang boleh jelek

Lembar Robi setelah jujur:

```text
Lulus   : 4
Gagal   : 2  (h2 menu; fitur 2 menimpa #pesan)
Ditunda : 0
Perbaikan #1 : h2  → uji ulang lulus
Perbaikan #2 : target listener 2 → regresi fitur 1 lulus
```

Tidak heroik. Dapat dibaca teman di P29. Itu yang diminta pintu ini.

> “Jadi aku belum selesai?”

> “Kamu sudah melewati pintu dengan data. ‘Selesai’ adalah kata yang P32 dan spek yang akan ucapkan, bukan mood hari Selasa.”

## Reflect

P12 memecat hakim “keren.” P28 memecat hakim “sudah diklik.” Yang tersisa: lembar, lapisan, prioritas, uji ulang. P29 orang lain memegang spekmu — lebih baik kamu yang ketemu gagalnya hari ini.

## Exit

1. Berapa AC lulus, gagal, ditunda?
2. Satu temuan: bukti + lapisan + perbaikan terkecil.
3. Setelah perbaikan, regresi fitur 1 lulus atau gagal?

> **Checkpoint yang jujur lebih maju daripada project yang “selesai” di kepala.**

— **Mimi** 🐾
