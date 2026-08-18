# Handout Siswa — X-S1-P28

**Topik:** Project S1 — Checkpoint uji acceptance · **4JP** · Pertemuan **28/34**

**Modul:** [X-S1-P28_project-s1-checkpoint.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P28_project-s1-checkpoint.md)
**Bacaan:** [X-S1-P28_bacaan-mimi-robi.md](./X-S1-P28_bacaan-mimi-robi.md)
**Lembar + demo:** [skill-js/p28-checkpoint/](./skill-js/p28-checkpoint/)

Hari ini **bukan** peer review (P29) dan **bukan** menambah fitur. Uji projectmu vs `spek.md`, perbaiki yang gagal, uji ulang.

## Tujuan

1. Semua AC punya status: **lulus** / **gagal** / **ditunda**.
2. Setiap gagal: bukti + lapisan (HTML / CSS / JS).
3. 1–3 perbaikan terarah + uji ulang + regresi fitur 1.

## Urutan uji (wajib)

| # | Lapisan | Cara uji singkat |
|---|---|---|
| 1 | HTML | Baca markup / halaman: landmark, `h2` tiap section, `id` = spek |
| 2 | CSS | Lebar baris, jarak, judul vs isi, kontras, tombol kelihatan |
| 3 | JS 1 | Catat `#pesan` sebelum klik → klik → sesudah + konsol |
| 4 | JS 2 / polish | Sama untuk AC P27 |
| 5 | Regresi | Klik fitur 1 **lagi** setelah langkah 4 |

## Lembar checkpoint

Salin [lembar-checkpoint.md](./skill-js/p28-checkpoint/lembar-checkpoint.md) ke folder projectmu, atau isi tabel ini.

| No | Kalimat AC (dari spek) | Lapisan | Hasil | Bukti (apa yang kulihat/klik) | Prioritas (1–3 / —) | Setelah perbaikan |
|---|---|---|---|---|---|---|
| 1 | | | L / G / D | | | |
| 2 | | | L / G / D | | | |
| 3 | | | L / G / D | | | |
| 4 | | | L / G / D | | | |
| 5 | | | L / G / D | | | |
| 6 | | | L / G / D | | | |
| 7 | | | L / G / D | | | |
| 8 | | | L / G / D | | | |

L = lulus · G = gagal · D = ditunda (tulis alasan)

**Perbaikan #1:** AC no. … · lapisan … · yang kuubah …
**Uji ulang AC itu:** lulus / masih gagal
**Regresi fitur 1:** lulus / gagal

## Aturan perbaikan

- Satu perbaikan, lalu uji. Jangan ubah tiga file sekaligus tanpa jejak.
- Perbaikan terkecil yang membuat AC lulus.
- Jangan mengubah kalimat AC agar bug “lulus.”
- Jangan menambah tombol/fitur yang tidak ada di spek.
- Yang tidak sempat: tulis **ditunda** — jangan dicentang lulus.

## Trap

- Hanya menguji klik kemarin.
- “Sudah kelihatan” tanpa cek `h2` / `id`.
- Rewrite folder.
- Fitur 3 sebagai “perbaikan checkpoint.”

## Peer saksi (opsional, 5 menit)

Teman menyaksikan **satu** AC yang kamu klaim lulus. Ia tidak membuka kode. Jika tidak sama dengan klaimmu, status kembali **gagal**.

Ini bukan P29: tidak mereview seluruh spek orang lain.

## Checklist kelas

- [ ] Semua AC bersstatus
- [ ] Gagal = bukti + lapisan
- [ ] 1–3 perbaikan
- [ ] Uji ulang + regresi
- [ ] Tanpa fitur baru / tanpa AC dipelintir

## Exit

1. Lulus / gagal / ditunda: … / … / …
2. Temuan #1 + lapisan: …
3. Uji ulang + regresi: …
4. Yang harus diuji peer di P29 dulu: …

**Preview P29:** orang lain menguji spekmu. Lembar hari ini adalah peta yang kamu serahkan.
