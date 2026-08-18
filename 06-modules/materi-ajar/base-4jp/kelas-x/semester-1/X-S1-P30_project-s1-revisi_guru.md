# Materi Ajar Guru — X-S1-P30
## Project S1: Revisi Prioritas (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **30/34** · 180 menit |
| Transformasi | Antrian P29 → perubahan terkecil + uji + regresi + log |
| Fokus | Satu item · satu lapisan · AC lulus = selesai item |
| Dilarang | Rewrite · opini sebagai kerja · polish P31 · pelintir spek · fitur 3 |
| Handout | [X-S1-P30_project-s1-revisi_siswa.md](./X-S1-P30_project-s1-revisi_siswa.md) |
| Bacaan | [X-S1-P30_bacaan-mimi-robi.md](./X-S1-P30_bacaan-mimi-robi.md) |
| Log | [skill-js/p30-revisi/](./skill-js/p30-revisi/) |
| Antrian | [skill-js/p29-peer-review/rencana-revisi.md](./skill-js/p29-peer-review/rencana-revisi.md) |
| Demo siklus | [skill-js/p28-checkpoint/](./skill-js/p28-checkpoint/) |
| Modul | [X-S1-P30_project-s1-revisi.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P30_project-s1-revisi.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | Antrian, uji ulang, regresi, log |
| C2 | Memahami | Revisi ≠ rewrite; spek ≠ opini |
| C3 | Menerapkan | Item #1 di project sendiri |
| C4 | Menganalisis | Lapisan tepat untuk item |
| C5 | Mengevaluasi | Selesai hanya jika AC + regresi |
| C6 | Mencipta | Log sebelum/sesudah |

**Fokus C3–C5 · puncak C5–C6 · P31 = polish, bukan pelarian AC**

### Timeline

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Antrian di meja |
| 10–30 | Scaffold | C2 | Siklus satu item |
| 30–50 | Experience | C2–C3 | Live-fix demo P28 berurutan |
| 50–65 | Trap | C4 | Dump 3 patch · opini · rewrite |
| 65–95 | Concept + mini | C2–C3 | Log · isi baris #1 sebelum kode |
| 95–120 | I do | C2–C3 | Suarakan perubahan terkecil siswa sampel |
| 120–165 | Practice | C3–C6 | #1 wajib · #2–3 bersyarat |
| 165–180 | Reflect | C5 | Status · preview P31 |

## B. Pendukung mengajar

### Persiapan

- Tiap siswa: `rencana-revisi.md` + project + spek. Tanpa rencana: 10' susun dari lembar P29.
- Salin `log-revisi.md` ke folder project.
- Salinan demo P28 di komputer guru untuk live-fix (jangan timpa folder skill jika ingin demo gagal tetap ada).
- Kunci urutan demo — prediksi dulu, patch satu-satu.

### Kunci live-fix demo (RAHASIA urutan)

1. HTML: tambah `<h2>Menu yang tersedia</h2>` di `#daftar-menu` → uji AC 2.
2. CSS: `max-width: 40rem; margin: 0 auto` pada landmark; `color` teks gelap → uji AC 3.
3. JS: `sorotanCadangan.textContent = ...` di listener tombol cadangan → uji AC 6, lalu klik tombol utama (regresi AC 5/7).

Jangan gabungkan ketiga langkah sebelum kelas melihat uji di antara.

### Pengetahuan di lidah

- P20 hidup di project: hipotesis, ubahan minimal, uji.
- Item #1 sering HTML/`id` — jangan kabur ke warna.
- Antrian kosong ≠ izin kreatif.

### Recall satu kalimat

> “Kemarin kalian antri janji. Hari ini tangan mengerjakan nomor satu. Selesai bukan karena file berubah — karena AC dan regresi lulus.”

### Miskonsepsi

1. Tiga perbaikan sekaligus lebih efisien.
2. Opini gampang = boleh dulu.
3. Antrian kosong = tambah fitur supaya “ada kerja.”
4. Sudah diedit = sudah lulus.
5. P31 akan menutup AC yang gagal, jadi P30 boleh asal.

### Etika

Jangan generate ulang project siswa. Jangan kerjakan opini “biar anak senang.” Lindungi spek.

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> “Buka `rencana-revisi.md`. Itu daftar belanja. Opini di kotak bawah bukan belanja. P31 bukan hari ini.”

Papan: **#1 wajib · uji · regresi · log · baru #2.**

#### 10–30 · Scaffold · Memahami · C2

Gambar siklus. Tanya: “Kalau AC-nya tidak punya `h2`, file mana yang disentuh?” (HTML, bukan CSS.)
We do: satu kalimat perubahan terkecil dari antrian fiktif.

#### 30–50 · Experience · C2–C3

Demo P28. Siswa sebut item #1 (h2). Guru tambah **hanya** h2. Uji AC 2. CSS masih jelek — biarkan. “Kita tidak menyentuh CSS sebelum item ini lulus.”

Lanjut item 2, uji. Baru item 3, uji + regresi.

#### 50–65 · Trap · Menganalisis · C4

1. Guru pura-pura ubah HTML+CSS+JS sekali save. Tanya: “Kalau regresi gagal, mana penyebabnya?”
2. “Sekalian gradient biar peer senang.” → opini.
3. Antrian kosong, guru tawarkan tombol ketiga. Siswa harus menolak.
4. Hapus AC dari spek. → pelintiran.

#### 65–95 · Concept + mini · C2–C3

Log = bukti reasoning P33. Mini: siswa isi kolom Sebelum untuk item #1 **sebelum** mengetik kode (kutip teks/keadaan sekarang).

#### 95–120 · I do · C2–C3

Ambil 1 antrian siswa (proyeksi spek, bukan seluruh folder). Suarakan: “AC 2, HTML, satu `h2`, lalu browser.” Jangan selesaikan projectnya.

#### 120–150 · Practice · C3–C6

Timer: 25' hanya item #1 + uji. Yang selesai: #2. Guru: “AC berapa? Sudah klik uji?”
Menit 150: yang #1 gagal tetap di #1; catat; jangan kabur.

#### 150–165 · Log + sisa · C5–C6

Rapikan log. Sisa antrian tertulis. Opini tetap di luar.

#### 165–180 · Reflect · C5

Exit. Preview P31: label tombol, kontras yang **sudah** di spek keterbacaan boleh dirapikan; jangan buka fitur baru. AC yang masih G = bekal jujur ke P32, bukan dihapus.

### Diferensiasi

**Tanpa antrian:** susun 1 item dari lembar peer (wajib ada nomor AC).
**#1 = JS dan siswa takut:** kembalikan ke P26 pola 4 baris; isi `id` + teks spek.
**Cepat (3 item lulus menit 140):** regresi penuh + rapikan log; **bukan** P31 lebih awal kecuali guru izinkan kontras saja yang sudah di spek.
**Rewrite desire:** tahan; “sebut satu baris yang akan diubah siswa.”

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Antrian | Opini / tanpa nomor AC | #1 terikat spek |
| Proses | Dump 3 file | Satu item + uji |
| Selesai | “Sudah kuubah” | AC + regresi L |
| Jejak | Tidak ada log | Sebelum/ubahan/sesudah |
| Scope | Fitur 3 / rewrite | Antrian saja |

### Checklist guru

- [ ] Rencana ada di meja
- [ ] Live-fix berurutan
- [ ] #1 diuji sebelum #2
- [ ] Log
- [ ] Opini tidak dikerjakan
- [ ] Preview P31 tanpa membuka fitur

### KBC

**Tanggung jawab pada janji yang diantrikan.** Peer sudah bersaksi. Hari ini pemilik membayar atau mengakui masih gagal.

**Kesabaran uji.** Perubahan tanpa browser adalah klaim.
