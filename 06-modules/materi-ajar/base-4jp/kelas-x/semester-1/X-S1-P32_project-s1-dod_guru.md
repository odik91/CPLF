# Materi Ajar Guru — X-S1-P32
## Project S1: Uji Final DoD (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **32/34** · 180 menit |
| Transformasi | "Sudah dipolish" → "terbukti siap": DoD 5 domain, bugfix kecil, kartu status jujur |
| Fokus | DoD checklist · bugfix < 10 menit · kartu status |
| Dilarang | Fitur baru · renovasi besar · AC dihapus · regresi diabaikan |
| Handout | [X-S1-P32_project-s1-dod_siswa.md](./X-S1-P32_project-s1-dod_siswa.md) |
| Bacaan | [X-S1-P32_bacaan-mimi-robi.md](./X-S1-P32_bacaan-mimi-robi.md) |
| Checklist/kartu/demo | [skill-js/p32-dod/](./skill-js/p32-dod/) — **bukan project baru**; demo kelas + template ke project S1 |
| Modul | [X-S1-P32_project-s1-dod.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P32_project-s1-dod.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | DoD, bugfix kecil, kartu status |
| C2 | Memahami | P32 ≠ P28 ≠ P30; bugfix kecil ≠ renovasi |
| C3 | Menerapkan | Checklist 5 domain diisi |
| C4 | Menganalisis | Kecil vs besar; regresi |
| C5 | Mengevaluasi | Siap showcase dengan bukti |
| C6 | Mencipta | Kartu status siap dibawa |

**Fokus C3–C5 · puncak C5–C6 · P33 = showcase, bukan repair**

### Timeline

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Garis resmi, bukan selebrasi dini |
| 10–30 | Scaffold | C2 | Lima domain + bugfix kecil vs besar |
| 30–50 | Experience | C2–C4 | Demo: 2 item G |
| 50–65 | Trap | C4 | Renovasi · fitur 3 · hapus AC |
| 65–95 | Concept + mini | C2–C3 | DoD · status awal 5 domain |
| 95–120 | I do | C2–C3 | Satu domain + bugfix demo |
| 120–165 | Practice | C3–C6 | Uji 5 domain · bugfix · kartu |
| 165–180 | Reflect | C5 | Status · preview P33 |

## B. Pendukung mengajar

### Persiapan

- Proyeksikan demo p32 — ada 2 item G. Siswa status awal dulu, baru lihat kunci.
- Pastikan `checklist-dod.md` dan `kartu-status.md` sudah disalin ke folder project siswa.
- Timer ketat: 120–165 adalah praktik bukan renovasi. Menit 150: siapa belum isi domain Perilaku JS, duduk bersama guru 5 menit.
- P33 adalah showcase — sampaikan ini di menit 0.

### Kunci demo (RAHASIA sampai prediksi selesai)

1. Domain Struktur HTML: `title` salah (masih "… P28") — bugfix < 10 menit, satu baris HTML.
2. Domain Perilaku JS: `#tombolCadangan` menulis ke `#pesan` bukan `#sorotanCadangan` — bugfix < 5 menit, satu baris JS, lalu regresi.

Dua domain lain dan domain Spek: lulus.

### Pengetahuan di lidah

- DoD bukan P28 yang diulang — ini setelah revisi, polish, semuanya. Semestinya lebih hijau.
- Bugfix kecil = ubahan, uji AC itu, regresi. Tiga langkah, bukan satu langkah.
- Kartu status gap = baik. Showcase lebih kuat dengan kejujuran.
- Gap yang tidak tertulis = bom di P33.

### Recall satu kalimat

> "P28 adalah checkpoint pertama. Hari ini adalah garis akhir. Apa yang kamu tulis di kartu status hari ini, itulah yang dibawa ke panggung besok."

### Miskonsepsi

1. DoD = mengerjakan ulang semua.
2. Gap yang jujur = nilai jelek.
3. Bugfix besar cepat karena "sudah paham."
4. P33 masih bisa revisi — tidak; P33 adalah demo artefak yang ada.
5. Kartu status kosong = aman.

### Etika

Jangan izinkan hapus AC. Jangan biarkan renovasi di menit 130. Kartu status gap tidak mempermalukan — justru menunjukkan proses.

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> "Ini garis. Bukan titik awal. P33 adalah panggung. Panggung tidak menunggu kamu selesai renovasi. Yang ada di tangan hari ini, itulah yang ditunjukkan."

Papan: **5 domain · bugfix kecil · kartu status · P33 showcase.**

#### 10–30 · Scaffold · Memahami · C2

Lima domain. Bedakan bugfix kecil (< 10 menit, satu lapisan) vs masalah besar (masuk kartu). Tanya: "Kalau `title` masih `Document`, berapa menit fix?" → 1 menit. "Kalau listener JS salah target?" → 3 menit. "Kalau CSS harus diulang total?" → masuk kartu.

#### 30–50 · Experience · C2–C4

Demo. Siswa isi status 5 domain dulu (prediksi) dari browser + spek, tanpa membuka kode. Baru cocokkan.

#### 50–65 · Trap · Menganalisis · C4

1. Guru pura-pura tambah animasi "biar P33 berkesan." → tolak.
2. Guru pura-pura hapus AC 3 yang gagal. → "Ini curang pada pengguna."
3. "Bug kecil" yang butuh 40 menit karena menyentuh CSS + JS + HTML. → masuk kartu.
4. Bandingkan project teman → spek sendiri yang jadi hakim.

#### 65–95 · Concept + mini · C2–C3

DoD sebagai kontrak dengan pengguna. Mini: tiap siswa isi domain Spek dan Struktur dari spek sendiri — dua menit, pensil, tanpa buka editor.

#### 95–120 · I do · C2–C3

Ambil demo. Satu domain (Perilaku JS). Tunjuk baris listener yang salah. Fix satu baris. Uji AC. Regresi. Catat di checklist demo. Suarakan tiap langkah.

#### 120–150 · Practice · C3–C6

Siswa ke project. Urutan: Spek → HTML → CSS → JS → UX. Guru: "Domain mana yang sedang kamu uji?" Menit 145: siapa belum domain JS, duduk sebentar.

#### 150–165 · Kartu status · C5–C6

Isi `kartu-status.md`. Gap jujur. Yang tidak dikerjakan karena besar → tulis. Preview P33: "Kamu akan tunjukkan artefak ini. Gap yang tertulis bisa dijelaskan. Gap yang disembunyikan akan ditanya."

#### 165–180 · Reflect · C5

Exit. Preview P33: bukan demo sempurna, tapi demo yang bisa dijelaskan.

### Diferensiasi

**Banyak domain G:** pilih satu bugfix < 10 menit; sisanya kartu. Jangan panik, jangan renovasi.
**Semua lulus cepat:** ulang regresi penuh (klik fitur 1, fitur 2, Tab) → kartu status hijau.
**Panik karena CSS "jelek":** "spek tidak meminta 'cantik', spek meminta lebar baris dan kontras" — cocokkan ke AC 3/domain keterbacaan.

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Cakupan | < 5 domain | 5 domain berisi bukti |
| Bugfix | Renovasi / AC dihapus | ≤ 2 item kecil + uji |
| Kartu | Kosong / klaim | Gap tertulis jujur |
| Regresi | Dilewati | Setelah bugfix |

### Checklist guru

- [ ] Demo prediksi dulu
- [ ] Timer ketat menit 120
- [ ] Kartu status di folder siswa
- [ ] Tidak ada renovasi besar
- [ ] Preview P33 jelas: panggung, bukan repair

### KBC

**Kejujuran di garis akhir.** Artefak yang "lulus" karena AC dihapus adalah klaim tanpa integritas. Gap yang tertulis adalah tanggung jawab yang bisa dijelaskan.

**Tanggung jawab pada pengguna.** DoD melindungi orang yang akan membuka halaman ini setelah P33.
