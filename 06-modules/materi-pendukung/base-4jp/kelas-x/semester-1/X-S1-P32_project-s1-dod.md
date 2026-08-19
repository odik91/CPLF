# Materi Pendukung Guru — X-S1-P32 Uji Final DoD

> **RAHASIA GURU** — jangan bagikan apa adanya.

| Field | Isi |
|---|---|
| Kode | X-S1-P32 |
| Modul | [X-S1-P32_project-s1-dod.md](../../../base-4jp/kelas-x/semester-1/X-S1-P32_project-s1-dod.md) |
| Durasi | **4 JP (180')** |

## Pengetahuan

- DoD = lima domain semua berisi bukti — bukan klaim.
- Bugfix kecil = < 10 menit, satu lapisan, uji + regresi.
- Kartu status = jembatan ke P33; gap yang jujur lebih baik daripada klaim lulus palsu.
- P33 adalah panggung, bukan repair shop — jaga ini keras.
- Demo p32 sengaja ada 2 item G ringan agar kelas berlatih bedakan bugfix vs masalah besar.

## Kunci demo (setelah prediksi)

| Domain | Kondisi demo | Bugfix |
|---|---|---|
| Spek | Lulus | — |
| Struktur HTML | `title` masih "Info Kantin Kelas X P28" (typo P28) | Ganti `title` |
| Keterbacaan CSS | Lulus | — |
| Perilaku JS | `#tombolCadangan` listener belum menulis ke `#sorotanCadangan` | Perbaiki target |
| Sopan UX/a11y | `lang` ada, label aksi ada, fokus ada | — |

Regresi: setelah perbaiki JS, uji klik tombol utama lagi.

## Recall

P28 = checkpoint pertama. P30 = antrian peer. P31 = polish. P32 = garis resmi. P33 = panggung.

## Etika

Jangan izinkan renovasi di menit terakhir. Kartu status gap lebih baik daripada artefak yang "bersih" karena AC dihapus.

## Checklist exit

- [ ] 5 domain berisi bukti
- [ ] Bugfix ≤ 2 item
- [ ] Kartu status tertulis
- [ ] Regresi setelah bugfix
- [ ] Tanpa fitur baru

## KBC

**Kejujuran di garis akhir.** DoD yang jujur melindungi kepercayaan pengguna dan audiens P33.
