# Materi Ajar Guru — X-S1-P27
## Project S1: JS Fitur 2 / Polish Logika (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **27/34** · 180 menit |
| Transformasi | Satu saklar yang lulus → dua janji yang tidak saling menimpa, atau satu janji yang lebih jujur (polish) |
| Fokus | Listener kedua · regresi · `if`/`else` di event · AC independen |
| Dilarang | Fitur 3 · CSS sebagai syarat · menghapus P26 · mengarang tombol di luar spek |
| Handout | [X-S1-P27_project-s1-js-fitur2_siswa.md](./X-S1-P27_project-s1-js-fitur2_siswa.md) |
| Bacaan | [X-S1-P27_bacaan-mimi-robi.md](./X-S1-P27_bacaan-mimi-robi.md) |
| Contoh | [skill-js/p27-js-fitur2/](./skill-js/p27-js-fitur2/) |
| Modul | [X-S1-P27_project-s1-js-fitur2.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | Istilah regresi, listener terpisah |
| C2 | Memahami | Jalur A ≠ jalur B; dua `id` ≠ satu elemen ditimpa |
| C3 | Menerapkan | Kode sesuai spek di `script.js` |
| C4 | Menganalisis | Fitur 1 rusak setelah fitur 2 |
| C5 | Mengevaluasi | AC sebelum/sesudah + regresi dicentang |
| C6 | Mencipta | Perilaku kedua beralasan, tanpa janji baru |

**Fokus C3–C5 · puncak C4–C6 · P28 = checkpoint paket**

### Timeline (tampilkan atau baca)

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Spek di meja · pilih A atau B |
| 10–30 | Scaffold | C2 | Dua mulut vs satu mulut |
| 30–50 | Experience | C2–C3 | Demo regresi |
| 50–65 | Trap | C4 | Fitur 3 · tombol sama · HTML liar |
| 65–95 | Concept + mini | C2–C3 | Pola A / pola B · trace dua AC |
| 95–120 | I do | C2–C3 | Tulis dari spek, bukan copy folder |
| 120–165 | Practice + peer | C3–C6 | Implementasi · regresi · peer tanpa kode |
| 165–180 | Reflect | C5 | Exit · preview P28 |

## B. Pendukung mengajar

### Persiapan

- Setiap siswa buka `spek.md`. Guru keliling 3 menit: tandai A atau B di kertas siswa.
- Siapkan halaman contoh p27. Versi “rusak”: kedua tombol menulis ke `#pesan`.
- Siswa yang fitur 1-nya belum lulus P26: blokir jalur A sampai regresi P26 selesai.
- Timer praktik: implementasi 35' · regresi 10' · peer 15'.

### Pengetahuan yang harus siap di lidah

- `getElementById` + `addEventListener("click")` + `textContent` (P21/P26).
- `let` dan `if`/`else` (P14/P16) untuk jalur B.
- Regresi = uji ulang yang kemarin lulus.
- Satu elemen HTML baru hanya jika spek sudah menjanjikannya.

### Recall satu kalimat

> “P26 menepati janji pertama. Hari ini janji kedua — atau janji pertama yang lebih jujur. Janji ketiga tidak ada di spek.”

### Miskonsepsi

1. “Dua fitur = dua kali tulis ke `#pesan`.”
2. “Polish = wajib tombol baru.”
3. “Fitur 1 boleh dihapus, yang baru lebih penting.”
4. “Masih ada waktu = boleh ganti warna / hitung klik / `innerHTML`.”
5. “Listener kedua ditempel di tombol yang sama biar hemat HTML.”

### Etika

Jangan bagikan `script.js` p27 sebagai jawaban project. Tunjuk spek, tunjuk `id`, tanya regresi. Kode jadi hanya untuk yang stuck setelah 10 menit usaha — itupun pola, bukan teks spek siswa.

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> “Buka `spek.md`. Ada berapa interaksi klik yang kalian janjikan di P23? Dua → jalur A. Satu → jalur B. Bukan ‘yang keren hari ini’.”

Keliling. Tulis A/B di papan jumlahnya. Siswa tanpa spek = tidak coding dulu.

#### 10–30 · Scaffold · Memahami · C2

Gambar dua kotak: `#pesan` dan `#sorotanCadangan`. Dua tombol. Panah tidak boleh menyilang ke kotak yang sama kecuali spek bilang begitu.

Istilah **regresi** di papan: “Kemarin lulus. Setelah kode baru, uji lagi. Jika gagal, yang baru belum boleh diklaim selesai.”

#### 30–50 · Experience · Memahami–Menerapkan · C2–C3

Live: tempel listener kedua yang juga mengubah `#pesan`. Klik tombol 2. Tanya: “AC fitur 1 masih benar?” Biasanya tidak.

Perbaiki: ganti target ke `#sorotanCadangan`. Klik tombol 1, klik tombol 2. Kedua teks hidup berdampingan.

Siswa prediksi sebelum klik.

#### 50–65 · Trap · Menganalisis · C4

Tiga jebakan cepat (pilih 2 jika waktu sempit):

1. Dua `addEventListener` pada `#tombolUtama` untuk dua AC berbeda → dua reaksi, AC kacau.
2. Tombol ketiga “biar lengkap” yang tidak ada di spek.
3. `innerHTML` dengan markup — tolak; `textContent` cukup.

Tanya: “Ini memperbaiki janji atau menambah janji?”

#### 65–95 · Concept + mini · Memahami–Menerapkan · C2–C3

Papan dua kolom: pola A (listener baru) | pola B (`let sudahDiklik` + `if`/`else`).

Mini: isi tabel regresi di handout **sebelum** coding — prediksi teks. Yang kosong = belum siap praktik.

#### 95–120 · I do · C2–C3

Tulis **dari spek sampel kantin**, suarakan:

> “Baris spek: ganti sorotan. `id` HTML: `tombolCadangan`. Target: `sorotanCadangan`. Saya tidak menyentuh `pesan`.”

Jalur B: suarakan klik pertama vs klik ulang. “Ini bukan fitur 2. Ini fitur 1 yang jujur pada klik kedua.”

#### 120–150 · Implementasi · Menerapkan–Mencipta · C3–C6

Guru pertanyaan wajib:

- “Spek baris mana?”
- “Setelah ini, klik fitur 1 dulu. Lulus?”
- “Kenapa bukan `#pesan` lagi?”

Yang menambah CSS/animasi: hentikan, kembalikan ke AC.

#### 150–165 · Peer · Mengevaluasi · C5

Peer tidak melihat kode. Urutan uji: fitur 1 → fitur 2/polish. Feedback hanya: AC lulus/gagal + kutipan teks. Bukan “lebih keren.”

#### 165–180 · Reflect · Mengevaluasi · C5

Exit ticket. Preview P28: tidak ada fitur baru; semua AC spek diuji sebagai paket.

### Diferensiasi

**Fitur 1 belum jalan:** hari ini = P26 ulang. Jangan paksa fitur 2.
**Butuh dukungan (A):** beri kerangka 4 baris (`const`, `const`, `addEventListener`, `textContent`); siswa isi `id` dan teks spek.
**Butuh dukungan (B):** beri kerangka `if`/`else`; siswa isi dua string AC.
**Cepat (A):** pastikan `console.log` membedakan “Fitur 1” vs “Fitur 2”; boleh `if` kecil di listener 2 **hanya** jika spek meminta.
**Cepat (B):** jangan naik ke fitur 2 karangan; boleh perbaiki pesan klik ulang agar sesuai pengguna di spek.

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Jalur | Ikut teman / selera | Sesuai baris spek |
| Regresi | Fitur 1 tidak diuji / rusak | Fitur 1 lulus setelah perubahan |
| AC hari ini | “Sudah bisa diklik” | Sebelum / sesudah / konsol |
| Scope | Fitur 3 atau HTML liar | Maks. janji P23 |
| Reasoning | “Biar ada dua tombol” | Elemen/cabang ditunjuk dari spek |

### Checklist guru

- [ ] A/B ditandai dari spek
- [ ] Demo regresi
- [ ] P26 tidak dihapus
- [ ] Peer urut: lama dulu, baru kemudian
- [ ] Exit: apa yang tidak ditambah
- [ ] Tidak ada fitur 3

### KBC

**Kejujuran pada janji lama.** Fitur baru yang merusak yang kemarin lulus adalah klaim tanpa tanggung jawab.

**Tanggung jawab pada pengguna.** Dua klik yang menulis kalimat yang sama ke tempat yang sama tidak menolong; itu duplikat, bukan fitur.
