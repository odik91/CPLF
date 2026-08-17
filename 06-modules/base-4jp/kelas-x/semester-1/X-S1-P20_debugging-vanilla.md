# X-S1-P20 — JavaScript Vanilla: Debugging sebagai Informasi

| Field | Isi |
|---|---|
| Kode | X-S1-P20 |
| Basis | **4JP** · Pertemuan **20/34** |
| Durasi | **4 JP = 180 menit** |
| Fokus | Error, pesan konsol, hipotesis, perbaikan, uji ulang |
| Batas | **Tanpa DOM, event, form, dan fitur JS baru** |

## Learning Transformation

Dari “error = gagal” → “error dan hasil salah = bukti untuk membuat hipotesis, memperbaiki satu penyebab, lalu menguji ulang.”

## Capaian pembelajaran (Bloom)

| Kode | Level | Siswa mampu … |
|---|---|---|
| C1 | Mengingat | Menyebut syntax, reference, dan logic error |
| C2 | Memahami | Menjelaskan pesan error sebagai petunjuk lokasi/penyebab |
| C3 | Menerapkan | Membaca konsol, memperbaiki kode kecil, menjalankan ulang |
| C4 | Menganalisis | Memisahkan gejala, bukti, hipotesis, dan penyebab |
| C5 | Mengevaluasi | Memilih perbaikan paling kecil yang sesuai bukti |
| C6 | Mencipta | Menulis laporan debug singkat dan test ulang |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · DOM/event → **P21**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Normalisasi error sebagai informasi |
| 10–30 | Scaffold | C2 | Gejala → pesan → baris → hipotesis → perbaikan → uji |
| 30–50 | Experience | C2–C3 | Syntax / Reference / logic error terpisah |
| 50–65 | Trap | C4 | Mengubah banyak baris sekaligus / mengabaikan pesan |
| 65–85 | Concept | C2 | Protokol debug 6 langkah |
| 85–95 | Practice mini | C3–C4 | Baca tiga bug sebelum menyentuh kode |
| 95–105 | Transisi | — | Setup file bug P20 |
| 105–120 | Scaffold praktik | C2–C3 | I do: typo properti |
| 120–165 | Practice | C3–C6 | Perbaiki 3 bug + laporan bukti |
| 165–180 | Reflect | C4–C5 | Exit · preview DOM/event P21 |

## Protokol debug

1. Reproduksi gejala.  
2. Baca pesan konsol lengkap.  
3. Catat baris dan bukti.  
4. Buat satu hipotesis penyebab.  
5. Ubah **paling kecil** untuk menguji hipotesis.  
6. Jalankan ulang dan cek acceptance.

## Konsep inti

| Jenis | Gejala | Contoh |
|---|---|---|
| Syntax error | Kode tidak mulai | kurung / tanda kurang |
| Reference error | Nama tidak ditemukan | typo variabel/function |
| Logic error | Jalan, hasil salah | batas atau properti salah |

## Setup latihan

1. Salin [p20-debug-bug.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p20-debug-bug.js) ke `js-dasar`.  
2. Buka konsol/terminal, jalankan, dan perbaiki **satu blok per kali**.  
3. Catat gejala, bukti, hipotesis, perubahan, test ulang.  
4. Bandingkan setelah selesai dengan [p20-debug-solusi.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p20-debug-solusi.js).  
5. Komentar hanya DEFINISI/GUIDE.

## Kriteria penerimaan

- [ ] Memperbaiki syntax, reference, dan logic bug  
- [ ] Laporan debug untuk tiap bug  
- [ ] Perubahan kecil sesuai hipotesis  
- [ ] Test ulang menghasilkan output target  
- [ ] Tanpa DOM/event/form

## Exit Ticket

1. Pesan error yang paling berguna hari ini?  
2. Beda Reference dan logic error?  
3. Mengapa tidak mengubah banyak baris sekaligus?

## Catatan Guru

Jangan menyebut solusi sebelum siswa menulis hipotesis. Fokus pada cara berpikir, bukan kecepatan membetulkan.
