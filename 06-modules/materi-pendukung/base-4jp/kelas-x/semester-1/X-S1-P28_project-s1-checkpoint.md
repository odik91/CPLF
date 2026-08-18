# Materi Pendukung Guru — X-S1-P28 Checkpoint

> **RAHASIA GURU** — jangan bagikan apa adanya.

| Field | Isi |
|---|---|
| Kode | X-S1-P28 |
| Modul | [X-S1-P28_project-s1-checkpoint.md](../../../base-4jp/kelas-x/semester-1/X-S1-P28_project-s1-checkpoint.md) |
| Durasi | **4 JP (180')** |

## Pengetahuan

- Checkpoint = pemilik menguji paket vs spek, bukan showcase.
- Urutan uji: HTML → CSS → JS1 → JS2/polish → regresi. Loncat ke klik = buta struktur.
- Temuan tanpa lapisan tidak bisa diprioritaskan.
- Mengubah AC agar bug lulus = curang spek (P04).
- Demo `p28-checkpoint` sengaja gagal 3 AC — kunci di bawah, jangan dibacakan di awal.

## Kunci demo (setelah siswa prediksi)

| AC spek demo | Hasil | Lapisan | Perbaikan terkecil |
|---|---|---|---|
| Tiap `section` punya `h2` | Gagal | HTML | Tambah `h2` di `#daftar-menu` |
| Keterbacaan lebar + kontras | Gagal | CSS | `max-width` + warna teks gelap |
| Fitur 2 mengubah `#sorotanCadangan` | Gagal | JS | Target listener 2, jangan `#pesan` |
| Fitur 1 masih benar setelah klik 2 | Gagal (regresi) | JS | Sama: jangan menimpa `#pesan` |

Fitur 1 **lulus** jika diuji sendirian — trap “aku cuma tes tombol utama.”

## Recall

P04/P12 = bahasa AC. P20 = hipotesis. P27 = regresi. P28 = ketiga itu pada **project sendiri**. P29 = orang lain yang menguji.

## Etika

Jangan perbaiki file siswa. Tanya: “AC nomor berapa? Bukti? Lapisan? Perbaikan terkecil?”

## Checklist exit

- [ ] Lembar terisi semua AC
- [ ] 1–3 perbaikan + uji ulang
- [ ] Regresi fitur 1
- [ ] Sisa tertulis (bukan disembunyikan)
- [ ] Tanpa fitur baru

## KBC

**Kejujuran:** status gagal yang tertulis lebih bernilai daripada klaim lulus tanpa uji.
