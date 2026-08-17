# Materi Ajar Guru — X-S1-P20
## Debugging JavaScript Vanilla sebagai Informasi (4JP)

> File guru lengkap. Jangan bagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **20/34** · 180 menit |
| Fokus | Reproduksi · pesan · hipotesis · perbaikan kecil · test ulang |
| Dilarang | DOM · event · form · solusi tanpa alasan |
| Handout | [X-S1-P20_debugging-vanilla_siswa.md](./X-S1-P20_debugging-vanilla_siswa.md) |
| Bacaan | [X-S1-P20_bacaan-mimi-robi.md](./X-S1-P20_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p20-debug-bug.js](./skill-js/p20-debug-bug.js) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Jenis error + fungsi pesan konsol |
| C3 | Perbaikan kecil + run ulang |
| C4 | Gejala, bukti, hipotesis dipisahkan |
| C5 | Perbaikan dipilih sesuai bukti |
| C6 | Laporan debug ringkas |

## Timeline & skrip fasilitasi

### 0–30 · Orientation + scaffold · C1–C2

Guru: “Error bukan identitas siswa. Error adalah keadaan program.” Tulis protokol 6 langkah. Bedakan tiga kasus: tidak jalan, nama tidak dikenal, jalan tetapi output salah.

### 30–65 · Experience + trap · C2–C4

Tampilkan satu typo properti. Minta urutan: baca pesan/baris → hipotesis → perubahan satu karakter → run ulang. Larang “coba-coba ubah semua.”

### 65–95 · Concept + practice mini · C2–C4

| Jenis | Tanya |
|---|---|
| Syntax | Apakah program bahkan bisa mulai? |
| Reference | Nama mana tidak didefinisikan? |
| Logic | Output target apa, hasil nyata apa? |

### 95–120 · Setup + I do · C2–C3

Bagikan file bug. Siswa menonaktifkan / memperbaiki satu blok, bukan semua sekaligus. Solusi ditutup dulu.

### 120–165 · Practice + peer · C3–C6

Pasangan memeriksa laporan, bukan langsung kode: apakah bukti mendukung hipotesis? Test ulang harus mencantumkan output target.

### 165–180 · Reflect · C4–C5

Preview P21: debugging tetap dipakai saat JS mulai menyentuh DOM.

## Asesmen formatif

| Indikator | Belum | Tercapai |
|---|---|---|
| Bukti | Menebak | Pesan/baris/output dicatat |
| Hipotesis | Banyak perubahan | Satu penyebab masuk akal |
| Test ulang | Tidak ada | Output target dibuktikan |

## Checklist guru

- [ ] Protokol 6 langkah  
- [ ] Tiga jenis bug  
- [ ] Solusi ditunda  
- [ ] Laporan debug  
- [ ] Tanpa DOM/event/form

## KBC

**Ilmu dan kejujuran:** katakan “belum tahu, hipotesis saya…” sebelum mengklaim sebab bug.
