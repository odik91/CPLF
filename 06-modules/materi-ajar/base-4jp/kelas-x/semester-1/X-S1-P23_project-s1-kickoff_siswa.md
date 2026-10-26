# Handout Siswa — X-S1-P23

**Topik:** Project S1 Kickoff · **4JP** · Pertemuan **23/34** · **pembuka Blok 4**

**Modul:** [X-S1-P23_project-s1-kickoff.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P23_project-s1-kickoff.md)  
**Bacaan:** [X-S1-P23_bacaan-mimi-robi.md](./X-S1-P23_bacaan-mimi-robi.md)  
**Kerangka:** [skill-js/p23-project-kickoff/](./skill-js/p23-project-kickoff/)  
**Referensi spek terisi:** [contoh-spek-lengkap.md](./skill-js/p23-project-kickoff/contoh-spek-lengkap.md) — buka ini kalau suatu bagian belum jelas. Jangan dikumpulkan.

## Tujuan

Mengunci **satu kontrak** di `spek.md`: masalah, pengguna, section, `id`, kalimat AC, dan lima bidang DoD. Kontrak itu yang diuji sampai P32. Hari ini **bukan** hari halaman jadi.

## Pilih satu brief

| | Masalah | Fitur JS (maks. 2) |
|---|---|---|
| **A** Profil kegiatan kelas | Pengunjung tidak tahu 3 kegiatan | Ubah pesan/status · (opsional) teks cadangan |
| **B** Info kantin | Menu/status tidak di satu tempat | Status menu · (opsional) ganti sorotan |
| **C** Panduan siswa baru | Info madrasah tercecer | Pesan untuk siswa baru · (opsional) sorot teks |

## Yang wajib terisi di `spek.md`

Jangan menulis spek kedua di handout ini. Handout hanya pengingat.

- [ ] Brief A / B / C  
- [ ] Masalah + pengguna  
- [ ] 2–3 section beserta teks `h2`  
- [ ] Jalur A (dua klik) atau B (satu klik, dua kalimat) — yang lain dicoret  
- [ ] Teks awal `#pesan`, kalimat setelah klik, label tombol  
- [ ] AC 5, 6, dan 7 berupa kalimat utuh, bukan “keren” / “berubah”  
- [ ] Daftar yang tidak dikerjakan  
- [ ] Lima bidang DoD masih utuh (jangan dihapus)

`id` yang dikunci: `pesan`, `tombolUtama`, `sorotanCadangan`, `tombolCadangan` (jalur A).

## Setup folder

1. Salin [p23-project-kickoff](./skill-js/p23-project-kickoff/).  
2. Ganti nama folder, misalnya `project-s1-kegiatan`.  
3. Simpan `contoh-spek-lengkap.md`. Baca spek brief-mu di sana sebelum bertanya.  
4. Isi `spek.md` dengan kalimatmu.  
5. Samakan teks awal dan label tombol di `index.html` dengan spek. Jangan menambah tombol kedua.  
6. Biarkan `style.css` / `script.js` seperti kerangka — isi penuh di P25–P27.

Rencana P24–P32 sudah ada di `spek.md`. Isi kalimat AC-mu; jangan membuat rencana kedua.

## Trap

- AC “menarik / modern / keren” → ganti jadi yang terukur.  
- Jangan selesaikan CSS/JS hari ini.  
- Jangan menyalin P22 utuh sebagai project tanpa spek baru.  
- Maksimal dua interaksi klik.

## Kriteria penerimaan hari ini

- [ ] `spek.md` terisi (masalah, jalur A/B, AC 5–7 berupa kalimat)  
- [ ] `id` di HTML sama dengan tabel alamat  
- [ ] Kalimat AC milik brief sendiri (lihat contoh hanya sebagai bentuk)  
- [ ] CSS/JS fitur belum diselesaikan  
- [ ] Belum mengklaim “project selesai”

## Exit

1. Brief: …  
2. Masalah: …  
3. Fitur P26 / P27: …  
4. Satu AC uji tanpa kode: …

**Preview P24:** bangun struktur HTML sesuai spek — belum merapikan CSS atau JS.
