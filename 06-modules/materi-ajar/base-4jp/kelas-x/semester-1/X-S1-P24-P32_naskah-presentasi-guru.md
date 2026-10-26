# Naskah Presentasi Guru — Project S1 (P23–P32)

> File guru. Jangan dibagikan apa adanya.  
> Checklist, asesmen, dan batas tiap pertemuan tetap di `X-S1-P2x_*_guru.md`.  
> Naskah ini yang dibaca saat berdiri di depan kelas: **apa yang diucapkan, file apa yang dibuka, apa yang siswa kerjakan.**

Contoh di layar selalu **brief B · Info kantin**. Siswa mengerjakan **folder project hasil P23** milik mereka (brief A, B, atau C). Teks “Mie Sehat” hanya pola. Yang disalin adalah jenis langkahnya, lalu diisi dari `spek.md` masing-masing.

---

## Cara memakai naskah ini

1. Sehari sebelum mengajar, baca **hanya satu pertemuan** plus tabel peta di bawah.
2. Salin folder contoh hari itu ke tempat lain (misalnya Desktop `demo-hari-ini`) supaya folder di repo tetap utuh saat Anda sengaja merusaknya untuk jebakan.
3. Di kelas: buka bagian pertemuan itu. Tiap blok punya **Layar · Papan · Ucapan · Siswa**.
4. Ucapan dalam tanda kutip boleh dibaca nyaris apa adanya. Sisipkan nama siswa saat keliling.
5. Saat siswa macet, pakai kalimat di **Keliling**. Jangan tempel `script.js` contoh sebagai jawaban project mereka.

Label timeline di file guru (`Orientation`, `Scaffold`, `Experience`, `Trap`, `I do`, `Practice`) **bukan topik baru**. Isinya satu halaman yang sama. Yang berganti adalah gerak guru:

| Label | Gerak guru pada halaman yang sama |
|---|---|
| Orientation | Sebut apa yang dikerjakan hari ini dan apa yang ditunda |
| Scaffold | Gambar peta di papan sebelum keyboard |
| Experience | Kelas melihat contoh melakukan satu hal |
| Trap | Anda sengaja merusak contoh, kelas menyebut akibatnya |
| Concept | Satu aturan ditulis di papan |
| I do | Anda mengetik **satu** bagian sambil mengucapkan baris spek |
| Practice | Siswa mengerjakan folder sendiri |
| Peer | Teman menguji janji, tanpa menilai “keren” |
| Reflect | Satu kalimat + kabar pertemuan berikut |

---

## Peta sembilan pertemuan

Satu artefak, dari P23 sampai P33. P24–P32 tidak membuat project baru.

| P | Peran hari itu (bahasa kelas) | Padanan kebiasaan kerja | Folder contoh yang diproyeksi | Yang lahir di folder siswa |
|---|---|---|---|---|
| **23** | Kontrak: masalah, AC, `id`, DoD | Tiket yang tidak boleh bergeser | `p23-project-kickoff/` | `spek.md` terisi + kerangka |
| **24** | Dinding: struktur terbaca tanpa cat | Implement struktur | `p24-html-struktur/` | `index.html` terisi |
| **25** | Jarak dan lebar agar janji kebaca | Implement tampilan | `p25-css-keterbacaan/` | `style.css` |
| **26** | Satu klik menepati satu janji | Implement perilaku 1 | `p26-js-fitur1/` | listener fitur 1 |
| **27** | Janji kedua yang tidak menimpa janji pertama | Implement perilaku 2 + cek regresi | `p27-js-fitur2/` | listener 2 **atau** `if`/`else` |
| **28** | Uji sendiri seluruh janji | QA internal | `p28-checkpoint/` (sengaja gagal) | `lembar-checkpoint.md` |
| **29** | Mata kedua, tangan tidak menyentuh | Review tanpa mengubah kode | demo P28 + `p29-peer-review/` | `lembar-peer.md` + `rencana-revisi.md` |
| **30** | Kerjakan antrian satu per satu | Perbaikan berurutan + jejak | demo P28 (diperbaiki live) + `p30-revisi/` | `log-revisi.md` |
| **31** | Sopan dipakai tanpa mouse | Poles label, bahasa, fokus | `p31-polish/` (sengaja tidak sopan) | `lembar-polish.md` |
| **32** | Garis akhir + catatan jujur | Definition of Done + catatan rilis | `p32-dod/` (2 bug kecil) | `checklist-dod.md` + `kartu-status.md` |
| 33 | Panggung | Demo artefak yang ada | — | kartu presentasi |
| 34 | Arsip | Retro | — | refleksi |

Urutan lapisan yang diulang dari P28 sampai P32:

```text
HTML (alamat & judul) → CSS (lebar, jarak, kontras) → JS fitur 1 → JS fitur 2 / polish → uji ulang fitur 1
```

JS tidak diuji lebih dulu. `id` yang salah membuat listener tampak rusak padahal alamatnya yang keliru.

---

## Satu halaman: Kantin X

Cerita yang Anda pegang di kepala supaya sembilan pertemuan terasa satu proyek.

**Masalah.** Siswa ingin cek menu dan status di satu halaman, tanpa bertanya ke banyak orang.  
**Pengguna.** Siswa kelas X, cek cepat saat istirahat.

| Bagian | `id` / tag | Janji |
|---|---|---|
| Judul | `h1` + `<title>` | Info menu hari ini |
| Sorotan | `#pesan` + `#tombolUtama` | Sebelum klik: status belum dicek. Setelah klik: `Mie Sehat tersedia.` |
| Menu | `#daftar-menu` + `h2` | Tiga menu tertulis |
| Jam | `#sorotanCadangan` + `#tombolCadangan` (muncul utuh di P27) | Setelah klik: `Sorotan cadangan: Es Teh habis lebih dulu.` |
| Uji ulang | klik `#tombolUtama` lagi | `#pesan` tetap `Mie Sehat tersedia.` |

**Yang tidak ada di janji:** form ke kantin, stok langsung, tombol ketiga, animasi, ganti warna sebagai fitur.

### Tiga brief — contoh kantin hanya pola

| Yang Anda tunjuk di kantin | Brief A · kegiatan kelas | Brief C · siswa baru |
|---|---|---|
| `h1` info menu | `h1` profil / nama kegiatan | `h1` panduan siswa baru |
| `#pesan` status menu | `#pesan` status kegiatan | `#pesan` untuk siswa baru |
| `#tombolUtama` “Cek status menu” | tombol ubah status | tombol tampilkan pesan |
| section daftar menu | section tiga kegiatan | section info madrasah |
| `#sorotanCadangan` | teks cadangan | sorotan teks lain |
| “Mie Sehat tersedia.” | kalimat dari spek A | kalimat dari spek C |

Empat `id` dikunci di P23 lewat kerangka: `pesan`, `tombolUtama`, `sorotanCadangan`, dan (jalur A) `tombolCadangan`. Nama `section` kedua dan ketiga boleh mengikuti isi, lalu dikunci juga. Mengganti `id` JS setelah P23 memutus HTML dan JS.

---

## Istilah yang diucapkan di kelas

| Tertulis di materi | Ucapan ke siswa | Bukti yang diminta |
|---|---|---|
| Spek | Janji tertulis di `spek.md` | Baris yang ditunjuk |
| Acceptance criteria (AC) | Janji yang bisa dicentang lulus atau gagal | Sebelum / sesudah, atau “ada / tidak ada” |
| `id` | Alamat elemen. JS mencari alamat ini | Hurufnya sama persis di HTML dan JS |
| Regresi | Uji ulang janji kemarin setelah ada kode baru | Klik fitur 1 lagi, teksnya masih benar |
| Lapisan | File yang disentuh: HTML, CSS, atau JS | Satu temuan = satu lapisan |
| Checkpoint (P28) | Uji sendiri | Lembar terisi |
| Peer (P29) | Teman jadi saksi janji | Lembar + bukti, editor tertutup |
| Antrian (P30) | Daftar perbaikan dari saksi, maksimal tiga | `rencana-revisi.md` |
| Polish (P31) | Kesopanan pakai: bahasa, judul tab, label, jejak Tab | Lembar 8 item |
| DoD (P32) | Lima bidang sudah diuji, plus catatan yang belum | Checklist + kartu status |
| Bugfix kecil | Satu lapisan, di bawah 10 menit, lalu uji lagi | Satu baris berubah |
| Kartu status | Catatan yang dibawa ke panggung P33 | Gap tertulis |

---

## Sebelum blok ini dimulai (sekali, di P23)

Ucapkan di menit pertama P23, lalu cukup diingatkan satu kalimat di pertemuan berikutnya.

> “Dari hari ini sampai P32 kita tidak membuat website baru. Kita menepati `spek.md` yang kalian tulis di P23. Contoh di layar adalah kantin. Kantin itu milik guru, untuk dilihat. Pekerjaan kalian ada di folder project sendiri. Kalau brief kalian kegiatan kelas atau panduan siswa baru, jangan menyalin mie dan es teh.”

---

# P23 — Kontrak sebelum membangun

**180 menit · pertemuan 23/34 · pembuka Blok 4**  
**Kerangka yang disalin siswa:** [skill-js/p23-project-kickoff/](./skill-js/p23-project-kickoff/)  
**Demo yang Anda proyeksikan:** [contoh-spek-kantin.md](./skill-js/p23-project-kickoff/contoh-spek-kantin.md)  
**Yang siswa isi:** `spek.md` di folder salinan mereka  
**Handout:** [X-S1-P23_project-s1-kickoff_siswa.md](./X-S1-P23_project-s1-kickoff_siswa.md)

Hari ini tidak menghasilkan halaman jadi. Yang dihasilkan adalah kontrak yang akan dicentang di P28 dan ditutup di P32: masalah, pengguna, section, empat `id`, kalimat sebelum/sesudah klik, daftar yang tidak dikerjakan, dan lima bidang Definition of Done.

`contoh-spek-kantin.md` memakai kalimat yang sama dengan HTML P24, listener P26–P27, dan spek uji P28. Jangan diganti “sekalian” di tengah demo, supaya rantai contoh tidak pindah janji.

### Persiapan

- Papan: tiga brief A/B/C. Rotasi antar kelas paralel supaya tidak saling salin.
- Proyektor: `spek.md` kosong (template) dan, nanti, `contoh-spek-kantin.md`.
- `index.html` kerangka terbuka di editor, belum dihias.
- Timer kasar: pilih brief 15' · tulis AC 40' · salin folder 30' · umpan balik 20'.
- Stempel: maksimal dua klik. Jalur A = dua tombol. Jalur B = satu tombol, dua kalimat.

### 0–10 · Orientation

**Papan:** `P23 kontrak · P24 dinding · P26 klik 1 · P27 klik 2 · P32 lima bidang`

> “Blok 4 bukan tag baru. Ini satu halaman yang kalian janjikan hari ini, lalu kalian tepati sampai garis akhir. Hari ini tidak mewarnai dan tidak memasang klik. Hari ini mengunci kalimat yang nanti harus muncul. Kalau kalimatnya ‘keren’, tidak ada orang yang bisa mencentang lulus.”

**Siswa:** tulis di buku, satu kata: siapa pengguna yang mereka bayangkan. Belum memilih brief.

### 10–30 · Scaffold tiga brief

Bacakan tabel brief. Untuk masing-masing, dua pertanyaan:

> “Penggunanya siapa? Kalau halaman ini tidak ada, mereka gagal mengetahui apa?”

| Brief | Pengguna | Gagal mengetahui |
|---|---|---|
| A kegiatan | Pengunjung / orang tua | Tiga kegiatan kelas |
| B kantin | Siswa saat istirahat | Menu dan status hari ini |
| C siswa baru | Siswa baru | Info madrasah yang tercecer |

> “Artefaknya satu file HTML, satu CSS, satu JS. Bukan aplikasi. Bukan banyak halaman. Dua klik paling banyak.”

**Papan — dua jalur, gambar sebelum mereka memilih:**

```text
Jalur A: tombol 1 mengubah #pesan. Tombol 2 mengubah #sorotanCadangan.
Jalur B: tombol 1 saja. Klik pertama kalimat A. Klik kedua kalimat B.
```

### 30–50 · Pilih dan potong

Siswa menulis brief di sudut buku. Lalu daftar “tidak dikerjakan”, minimal empat butir yang sudah tercetak di `spek.md` plus satu butir milik mereka.

Kartu merah yang Anda sebut keras jika muncul: form yang terkirim, halaman kedua, library, tombol ketiga, animasi sebagai syarat, menyalin latihan P22 lalu mengganti judul.

**We do 5 menit:** satu siswa menyebut fitur “live chat ke kantin”. Kelas menaruhnya di daftar tidak dikerjakan. “Itu janji di luar semester ini.”

### 50–65 · Trap

Tulis di papan AC buruk:

> “UI-nya keren dan modern.”

Ubah bersama menjadi tiga baris yang bisa dicentang. Pakai bentuk AC 5–6, kalimat kantin hanya sebagai contoh bentuk:

> “Sebelum klik, `#pesan` berisi: Belum dicek. Klik tombol untuk status menu utama.”  
> “Setelah klik `#tombolUtama`, `#pesan` berisi: Mie Sehat tersedia.”  
> “Ada 3 section, masing-masing punya h2.”

> “Kata ‘berubah’, ‘menarik’, dan ‘lengkap’ tidak lulus. Yang lulus adalah kalimat utuh yang bisa dibaca orang lain di layar.”

### 65–85 · Concept

**Layar:** gulir `spek.md` template. Berhenti di empat bagian, jangan membacakan seluruh file:

1. Masalah + pengguna  
2. Tabel alamat (`pesan`, `tombolUtama`, `sorotanCadangan`, `tombolCadangan`)  
3. Tabel AC 1–9, tiap baris punya bidang: Struktur, Keterbacaan, Perilaku, Sopan  
4. Tabel DoD lima bidang — “ini garis akhir P32. AC adalah buktinya. Hari ini kalian menulis buktinya, belum mengerjakannya.”

**Papan:**

| Bidang P32 | Ditulis hari ini | Dikerjakan |
|---|---|---|
| Spek | masalah, pengguna, brief | dikunci hari ini |
| Struktur | AC 1–3, `id` | P24 |
| Keterbacaan | AC 4 | P25 |
| Perilaku | AC 5–8, kalimat persis | P26–P27 |
| Sopan | AC 9, label tombol | P31 |

> “Definition of Done artinya: selesai bukan karena kalian merasa selesai. Selesai karena lima bidang ini lulus, atau yang gagal tetap tertulis. Menghapus AC supaya kelihatan lulus tidak menghitung.”

### 85–95 · Practice mini

Berpasangan. Tukar dua kalimat AC. Pertanyaan wajib:

> “Bisakah aku menguji ini tanpa bertanya maksudmu?”

Yang gagal uji: kembalikan, minta kalimat sebelum/sesudah. 8 menit.

### 95–120 · Setup + I do

Siswa menyalin folder `p23-project-kickoff`, mengganti nama, **menghapus `contoh-spek-kantin.md` dari salinan**. Anda tetap membuka file itu di komputer guru.

I do pada template kosong, isi hanya tiga sel sambil bersuara, lalu buka demo lengkap:

> “Brief B. Pengguna: siswa kelas X saat istirahat. Masalah: menu tidak ada di satu tempat. AC 6 saya tulis utuh: Setelah klik `#tombolUtama`, `#pesan` berisi Mie Sehat tersedia. Titik. Bukan ‘status berubah’.”

Buka `contoh-spek-kantin.md`. Tunjuk bahwa AC 6 demo = kalimat yang akan dipakai `textContent` di P26, dan AC 8 = klik tombol utama lagi setelah fitur 2.

Tunjuk `index.html` kerangka: `id="pesan"`, `id="tombolUtama"`, `id="sorotanCadangan"` sudah ada. Tombol kedua belum ada. “Jalur A menambahkan tombol itu di P27, dengan `id` yang sudah kalian tulis hari ini.”

`script.js`: “Hanya log. Jangan diisi kalimat AC hari ini.”

### 120–150 · Practice

Siswa mengisi `spek.md` sendiri dan menyamakan teks awal plus label tombol di `index.html`.

**Keliling, urutan ini:**

1. “Penggunanya siapa, dalam satu napas?”
2. “Bacakan AC 6. Apakah itu kalimat utuh?”
3. “Jalur A atau B? Tunjuk yang kamu coret.”
4. “`id` di HTML sama dengan tabel?”

**Kalau macet di kalimat:** “Sebelum diklik, pengguna membaca apa? Sesudah diklik, satu fakta apa yang mereka dapat?” Jangan Anda yang mengarang faktanya.  
**Kalau menyalin mie ke brief A atau C:** “Tutup file demo. Pola tabelnya sudah di spekmu. Kalimatnya dari kegiatanmu atau dari panduan siswa baru.”  
**Kalau mulai mengisi CSS:** “AC 4 sudah tertulis. Pengerjaannya P25.”

### 150–165 · Umpan balik

Dua menit per siswa, atau sampel 6 siswa jika kelas besar. Hanya dua jenis komentar:

- “AC nomor … belum berupa kalimat yang bisa dicentang.”
- “Ini masuk daftar tidak dikerjakan.” (fitur ketiga, library, halaman lain)

Jangan membahas warna.

### 165–180 · Reflect

**Exit, dikumpulkan dari spek (boleh foto bagian atas + AC 6):**

1. Brief  
2. Masalah satu kalimat  
3. Jalur A atau B, plus kalimat AC 6  
4. Satu butir di daftar tidak dikerjakan  

> “Besok kalian memasang dinding: section dan kalimat yang sudah ada di spek ini. `id` tidak pindah. CSS tetap kasar. Klik tetap belum.”

### Kalimat brief A dan C (kalau kelas tidak memilih kantin)

Jangan proyeksikan mie sebagai jawaban mereka. Tawarkan bentuk ini, mereka yang mengisi fakta:

| Sel | Brief A | Brief C |
|---|---|---|
| `h1` | Tiga kegiatan kelas … | Panduan siswa baru … |
| AC 5 `#pesan` | Status kegiatan belum dibuka. | Pesan untuk siswa baru belum dibuka. |
| AC 6 setelah klik | Kegiatan pekan ini: … | Langkah pertama: lapor ke piket. |
| AC 7 jalur A | Teks cadangan: jadwal berubah hari Jumat. | Sorotan: bawa fotokopi rapor saat daftar ulang. |
| Tombol 1 | Cek kegiatan | Tampilkan pesan |
| Tombol 2 | Lihat catatan | Sorot info |

`id` tetap `pesan`, `tombolUtama`, `sorotanCadangan`, `tombolCadangan`.

---

# P24 — Dinding HTML

**180 menit · pertemuan 24/34**  
**Contoh:** [skill-js/p24-html-struktur/](./skill-js/p24-html-struktur/)  
**Handout:** [X-S1-P24_project-s1-html_siswa.md](./X-S1-P24_project-s1-html_siswa.md)

Hari ini contoh kantin sudah punya `header`, `main`, tiga `section`, `h1`/`h2`, dan `id` yang nanti dicari JS. `style.css` hanya `font-family`. `script.js` belum berisi fitur. Penilaian hari ini: View Source, tanpa melihat “sudah cantik”.

### Persiapan

- Proyektor: `p24-html-struktur/index.html` di editor **dan** di browser.
- Siapkan tab kosong untuk HTML buruk (jangan disimpan ke folder siswa).
- Setiap siswa membuka `spek.md` + `index.html` folder P23.
- Matikan komentar “warnanya kurang”.

### 0–10 · Orientation

**Layar:** browser contoh kantin, lalu View Source.  
**Papan:** `P24 dinding · P25 jarak · P26 satu klik`

> “Kemarin di P23 kita menulis janji. Hari ini janji itu harus kelihatan di HTML. Warna menyusul besok. Klik menyusul lusa. Kalau saya matikan CSS, section, judul, dan kalimat harus tetap ada.”

**Siswa:** buka `spek.md`. Lingkari tiga section yang dijanjikan.

### 10–30 · Scaffold

**Papan — isi bersama dari spek contoh (baca `index.html` baris 10–37):**

| Janji | Tag yang menepati |
|---|---|
| Nama halaman | `h1` Info menu hari ini + `<title>` |
| Status yang nanti diklik | `section#sorotan` + `h2` + `p#pesan` + `button#tombolUtama` |
| Daftar menu | `section#daftar-menu` + `h2` + `ul` |
| Jam buka | `section#jam` + `h2` + `p#sorotanCadangan` |

> “Perhatikan: tombol sudah ada, tapi belum melakukan apa-apa. Itu sengaja. P26 yang memasang listrik. Hari ini kita hanya memastikan alamatnya sudah tertulis: `pesan`, `tombolUtama`, `sorotanCadangan`.”

**Siswa (we do, 8 menit):** satu baris spek mereka → satu nama tag. Guru menuliskan satu contoh siswa di papan, brief apa adanya (A atau C), supaya kelas melihat kantin bukan satu-satunya jawaban.

### 30–50 · Experience

**Layar 1 — HTML buruk, ketik di tab kosong:**

```html
<div>
  <div>Info menu hari ini</div>
  <div>Mie sehat</div>
  <div>Nasi goreng</div>
  <div id="status">klik</div>
</div>
```

**Layar 2:** `p24-html-struktur/index.html`.

> “Keduanya menyebut menu. Yang pertama tidak punya judul section, tidak punya `h1`, alamatnya `status` — besok JS akan mencari `pesan` dan dapat kosong. Yang kedua: saya bisa menunjuk ‘ini section menu, ini kalimat yang akan berubah’. Pilih yang menepati janji. Jangan pilih yang lebih rapat di layar.”

**Siswa:** angkat tangan untuk yang kedua, lalu sebut satu tag yang membuktikan pilihan itu.

### 50–65 · Trap

Pada salinan demo, tambah sebentar di `style.css`:

```css
section { display: none; }
div { padding: 12px; background: #efe6d6; }
```

Refresh. Halaman “rapi” berisi kosong, atau hanya sisa `div`.

> “Ini jebakan yang sering saya lihat di industri juga: layar terlihat beres karena cat, dokumennya kosong. Lulus mata hari ini tidak lulus P24. Saya kembalikan CSS-nya.”

Hapus aturan itu. Refresh. Section kembali.

### 65–95 · Concept + peta kertas

**Papan — checklist lulus:**

1. `header` / `main` / `footer`
2. Satu `h1`
3. Dua atau tiga `section`, masing-masing `h2`
4. Kalimat sungguhan (kegiatan, menu, atau panduan — sesuai brief)
5. `id` tombol dan pesan = baris spek

**Siswa:** tiga kotak kertas dari spek sendiri: nama section, `h2` rencana, `id` yang dikunci. Yang tidak punya `id` di spek untuk fitur 1: tulis sekarang, jangan mengarang saat P26.

### 95–120 · I do

Buka salinan demo. Kosongkan isi **satu** `section#jam` di salinan (jangan di repo), lalu isi ulang sambil bersuara:

> “Spek: ada bagian jam buka. Saya tulis `section`, `id` tetap `jam`. Di dalamnya `h2` Jam buka. Lalu satu kalimat: Istirahat 1 dan istirahat 2. Tutup saat upacara. Saya tidak membuka `style.css`. Saya tidak menulis `addEventListener`.”

Tunjuk `p#sorotanCadangan`: “Alamat ini diparkir untuk P27. Teksnya boleh belum final. Alamatnya jangan pindah.”

### 120–150 · Build

Siswa mengisi `index.html` **folder sendiri**.

**Keliling — tiga pertanyaan, urutan ini:**

1. “Tunjukkan baris spek untuk section ini.”
2. “`id` tombolmu apa? Sama dengan spek?”
3. “Kalau saya tutup CSS, kalimat ini masih ada?”

**Kalau macet:** buka contoh kantin berdampingan. “Tiru pola tag-nya. Ganti kalimatnya dengan briefmu. Jangan salin mie kalau kamu panduan siswa baru.”  
**Kalau sudah mewarnai:** “Simpan CSS untuk besok. Hari ini saya hanya membaca HTML.”

### 150–165 · Peer

Pasangan. Satu orang membaca `spek.md`, satu orang View Source. Catatan wajib menyebut poin spek.

Kalimat yang diterima: “Poin 2 janji ada daftar kegiatan; di HTML belum ada `h2`.”  
Kalimat yang dikembalikan: “Kurang keren.”

### 165–180 · Reflect

**Exit, dikumpulkan:**

1. Section yang ditambah  
2. `id` yang akan dicari di P26  
3. Satu gap spek yang sudah tertutup  

> “Besok kita tidak membongkar dinding ini. Besok kita mengatur lebar baris, jarak, dan ukuran judul supaya janji ini nyaman dibaca.”

---

# P25 — Jarak dan lebar

**180 menit · pertemuan 25/34**  
**Contoh:** [skill-js/p25-css-keterbacaan/](./skill-js/p25-css-keterbacaan/) bandingkan dengan [p24-html-struktur/style.css](./skill-js/p24-html-struktur/style.css)  
**Handout:** [X-S1-P25_project-s1-css_siswa.md](./X-S1-P25_project-s1-css_siswa.md)

HTML kantin hampir sama dengan P24. Satu tambahan: `class="brand"` pada baris “Kantin X”. Yang baru ada di `style.css`: lebar maksimal, jarak, ukuran `h1`/`h2`, tombol yang terlihat tombol. **Jangan mewajibkan class `brand`.** Siswa boleh mewarnai lewat selector elemen.

### Persiapan

- Dua jendela: folder p24 (CSS hampir kosong) dan folder p25 (CSS baca).
- Lebarkan jendela browser sampai penuh, lalu sempitkan, supaya `max-width` kelihatan.
- Ingatkan: `id` tidak boleh diganti “biar selector-nya rapi”.

### 0–10 · Orientation

**Layar:** browser p24 full-bleed, lalu browser p25.

> “Dinding kemarin sudah berdiri. Hari ini saya mengatur bahu halaman: teks tidak menyebar selebar monitor, section tidak menempel, judul lebih besar dari paragraf, tombol kelihatan bisa ditekan. Saya tidak menambah menu baru.”

**Papan:** `lebar · jarak · hierarki · kontras · tombol`

### 10–30 · Scaffold

Zoom `p25-css-keterbacaan/style.css`. Bacakan hanya blok ini:

```css
header,
main,
footer {
  max-width: 40rem;
  margin: 0 auto;
  padding: 1.25rem 1rem;
}
```

> “`40rem` kira-kira lebar baca. `margin: 0 auto` menaruh blok itu di tengah. `padding` menjauhkan huruf dari tepi. Tiga properti. Bukan sepuluh warna.”

Tunjuk juga `section { margin-bottom: 1.75rem }`, ukuran `h1` 1.75rem vs `h2` 1.25rem, dan `button` yang punya `padding` serta `border`.

**Siswa:** sebut satu hal yang berubah di mata mereka. Jawaban yang ditunggu: lebar, jarak, atau ukuran judul — bukan “jadi lebih estetik”.

### 30–50 · Experience

Siswa, di **project sendiri**, baru menerapkan tiga hal: `max-width`, `margin: 0 auto`, `padding` pada `header, main, footer`. Berhenti. Lihat browser. Belum gradient, belum font langka.

Guru memproyeksikan satu layar siswa (minta izin) yang sudah punya bahu, dan satu yang masih menempel tepi.

### 50–65 · Trap

Pada salinan, tambah lalu undo:

```css
body { display: flex; }
```

Refresh. Landmark berjajar samping dan alur baca rusak.

> “Flex saya pakai kalau ada deretan item yang memang harus sebaris, misalnya menu navigasi. Memasangnya di `body` mengubah urutan baca seluruh halaman. Itu bukan kerapian.”

Kalau sempat, satu jebakan lagi: `color` sangat muda di atas latar muda. “Kontras adalah soal mata bisa membaca, bukan soal palet favorit.”

### 65–95 · Concept + audit

**Papan — lima aturan minimal (sama dengan handout):**

1. `body`: font, `line-height`, warna teks dan latar  
2. landmark: `max-width` + tengah + `padding`  
3. jarak antar `section`  
4. `h1` / `h2` lebih tegas dari `p`  
5. `button`: `padding`, `font: inherit`, border atau latar yang membedakan  

**Siswa:** isi tabel “3 masalah” di handout **sebelum** menambah hiasan. Contoh isian yang diterima: “baris terlalu panjang → `max-width`”. Contoh yang dikembalikan: “kurang modern → gradient”.

### 95–120 · I do

Di salinan p25, hapus dulu aturan `max-width`, refresh (lebar), kembalikan sambil bersuara:

> “Saya mengembalikan `max-width: 40rem` karena barisnya selebar jendela. Ini untuk bahu baca. Bukan supaya mirip situs kantor. `id` di HTML saya tidak sentuh. `script.js` saya tidak sentuh.”

Sebut angka yang boleh digeser sedikit (`38rem`–`42rem`) dan yang tidak: menghapus `h2` supaya “lebih bersih”.

### 120–150 · Practice

Siswa melengkapi `style.css` project sendiri.

**Keliling:** “Properti ini mengerjakan aturan nomor berapa?”  
Yang mengubah HTML agar class contoh cocok: “Selector-mu boleh `h1` dan `section`. Jangan merombak dinding P24.”  
Yang menyalin warna `#1f1a14` dan `#f7f1e8` mentah-mentah: boleh, asalkan mereka bisa bilang “teks gelap, latar terang”. Warna lain dengan kontras sama juga lulus.

### 150–165 · Peer 30 detik

Teman memandang halaman 30 detik, tanpa membuka CSS. Menyebut tiga bagian yang terlihat (judul, satu section, tombol). Kalau gagal menyebut, biasanya jarak atau hierarki — minta pemilik menambah jarak atau ukuran judul, bukan animasi.

### 165–180 · Reflect

**Exit:** tiga aturan + alasan (“`max-width` karena baris panjang”).

> “Besok listrik pertama. Yang berubah adalah teks di `#pesan` setelah klik. CSS tombol yang sudah ada cukup. Jangan ganti `id` malam ini.”

---

# P26 — Satu klik, satu janji

**180 menit · pertemuan 26/34**  
**Contoh:** [skill-js/p26-js-fitur1/](./skill-js/p26-js-fitur1/)  
**Handout:** [X-S1-P26_project-s1-js-fitur1_siswa.md](./X-S1-P26_project-s1-js-fitur1_siswa.md)

`script.js` contoh hanya ini:

```javascript
const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});
```

HTML masih kantin P25. Belum ada `#tombolCadangan`.

### Persiapan

- Browser + Console terbuka (F12 → Console).
- Salinan `script.js` untuk jebakan typo dan listener ganda.
- Siswa sudah menandai di spek: teks **sebelum** klik dan teks **sesudah** klik.

### 0–10 · Orientation

> “P21 kita sudah pernah memasang satu listener di latihan. Hari ini listener itu menepati baris spek kalian. Satu tombol. Satu teks. Besok baru janji kedua, kalau spek memang menjanjikannya.”

**Papan:** `spek → id di HTML → getElementById → click → textContent`

### 10–30 · Scaffold

Gambar empat kotak. Isi dengan kantin, lalu minta satu siswa mengisi ulang dengan speknya.

| Kotak | Kantin | Contoh isian brief C |
|---|---|---|
| Teks awal | Belum dicek. Klik tombol… | Selamat datang. Pesan belum dibuka. |
| `id` teks | `pesan` | `pesan` (atau nama di spek mereka) |
| `id` tombol | `tombolUtama` | sesuai spek |
| Teks setelah klik | Mie Sehat tersedia. | Langkah pertama: lapor ke piket. |

> “`getElementById` tidak memakai tanda pagar. Di HTML `id="pesan"`. Di JS `"pesan"`. Satu huruf beda, JavaScript dapat `null`, dan `null` tidak punya `textContent`.”

### 30–50 · Experience

Buka contoh di browser. **Sebelum klik**, bacakan `#pesan`. Minta kelas memprediksi kalimat setelah klik. Klik. Cocokkan dengan kode baris `textContent`. Buka Console: satu log.

Ganti string di salinan menjadi `Nasi goreng habis.` Refresh. Prediksi lagi. Klik.

> “Kalimatnya boleh diganti. Polanya tidak: satu listener, satu target.”

### 50–65 · Trap

**Jebakan 1.** Ubah HTML `id="tombolUtama"` menjadi `id="tombolUtamaa"` di salinan. Klik. Console: error karena `tombolUtama` bernilai `null`.

> “Yang memberi alamat adalah HTML. JS hanya mencari. Kembalikan hurufnya.”

**Jebakan 2.** Duplikat listener: tempel blok `addEventListener` dua kali dengan dua `console.log` berbeda. Satu klik, dua log.

> “Satu tombol, satu listener. Duplikat membuat AC ‘setelah klik teksnya X’ menjadi lemparan dadu.”

Kembalikan file.

### 65–95 · Concept + trace

Siswa mengisi tabel handout **dari spek sendiri**, pensil, belum mengetik JS:

| Saat | Nilai elemen teks | Konsol |
|---|---|---|
| Sebelum klik | (salin dari HTML) | kosong |
| Setelah klik | (salin dari AC) | satu kalimat log |

Yang tabelnya masih “keren / berubah”: kembalikan ke kalimat utuh.

### 95–120 · I do

Ketik ulang listener di salinan yang dikosongkan, pelan:

> “Spek: setelah klik, pesan menjadi Mie Sehat tersedia. Saya ambil `pesan`. Saya ambil `tombolUtama`. Saya pasang `click`. Di dalam fungsi, `textContent` saya isi kalimat spek, bukan kalimat ‘berhasil’. Lalu satu `console.log` supaya ada bukti selain mata.”

Refresh. Uji sebelum dan sesudah. “Fitur 2 tidak saya tulis. Tidak ada tombol baru.”

### 120–150 · Implementasi

**Keliling:** “Teks ini dari AC nomor berapa?”  
**Pola untuk yang macet 10 menit** — mereka yang mengisi tiga titik, Anda tidak mengetikkan kalimat spek mereka:

```javascript
const pesan = document.getElementById("___");
const tombolUtama = document.getElementById("___");
tombolUtama.addEventListener("click", function () {
  pesan.textContent = "___";
  console.log("Fitur 1: pesan diperbarui.");
});
```

**Yang cepat:** boleh `const sudahDiklik = false` di dalam listener yang sama sebagai catatan, tanpa menambah tombol. Jangan mulai fitur 2.

**Cek teknis yang sering Anda lakukan di industri, ucapkan begini:** “Script ada di akhir `body`? `type="button"` ada? Nama variabel sama dengan yang dipanggil di `addEventListener`?”

### 150–165 · Peer tanpa kode

Peer hanya di browser: catat teks sebelum, klik, catat teks sesudah, lihat Console. Lalu cocokkan dengan `spek.md` pemilik. Feedback: “AC lulus” atau “AC gagal, yang terlihat: …”.

### 165–180 · Reflect

**Exit:** `id`, teks awal, teks target, satu kalimat alasan (“saya mengubah `#pesan` karena AC 5 menyebut elemen itu”).

> “Kalau fitur 1 belum lulus, besok kita tidak menambah tombol. Besok yang speknya dua klik menulis listener kedua. Yang speknya satu klik membuat klik kedua jujur dengan `if`/`else`.”

---

# P27 — Janji kedua, atau janji pertama yang lebih jujur

**180 menit · pertemuan 27/34**  
**Contoh jalur A:** [skill-js/p27-js-fitur2/](./skill-js/p27-js-fitur2/)  
**Pola jalur B:** ada di handout siswa, **tidak** ada tombol cadangan di folder contoh.

### Persiapan

- Keliling 3 menit di awal sambil siswa membuka spek: tulis A atau B di sudut buku mereka.
- A = spek menyebut dua interaksi. B = spek hanya satu klik.
- Yang fitur 1-nya belum lulus: kartu “ulang P26”, jangan dibawa ke jalur A.
- Salinan p27 untuk jebakan “dua tombol menulis ke `#pesan`”.

Teks contoh jalur A yang akan terlihat:

- Klik **Cek status menu** → `#pesan` = `Mie Sehat tersedia.`
- Klik **Ganti sorotan** → `#sorotanCadangan` = `Sorotan cadangan: Es Teh habis lebih dulu.`
- Klik **Cek status menu** lagi → `#pesan` masih `Mie Sehat tersedia.`

### 0–10 · Orientation

> “Buka spek. Hitung interaksi klik yang kalian janjikan di P23. Dua: jalur A, listener baru, elemen lain. Satu: jalur B, tombol tetap satu, klik ulang mengucapkan kalimat kedua. Hari ini tidak ada jalur ‘yang keren’.”

**Papan:** jumlah siswa A dan B. Siswa tanpa spek menulis ulang dua AC terukur dulu.

### 10–30 · Scaffold

Gambar dua kotak: `#pesan` dan `#sorotanCadangan`. Dua panah dari dua tombol. Panah tidak boleh mendarat di kotak yang sama.

**Papan:** regresi = “Kemarin lulus. Setelah kode baru, klik lagi. Kalau gagal, kode baru belum boleh disebut selesai.”

Untuk jalur B, gambar satu tombol dua cabang:

```text
klik pertama → kalimat AC pertama
klik ulang   → kalimat AC kedua
```

### 30–50 · Experience

Di salinan, ubah listener tombol cadangan supaya menulis ke `pesan` (seperti bug yang nanti dipakai lagi di P28):

```javascript
pesan.textContent = "Sorotan cadangan: Es Teh habis lebih dulu.";
```

Klik tombol 2. `#pesan` tertimpa. Tanya: “AC fitur 1 masih benar?”

Kembalikan ke `sorotanCadangan.textContent = ...`. Klik tombol 1, tombol 2, tombol 1 lagi.

> “Dua kalimat hidup berdampingan. Itu janji kedua. Menimpa kalimat pertama itu duplikat, bukan fitur.”

Minta prediksi sebelum setiap klik.

### 50–65 · Trap

Pilih dua, peragakan singkat di salinan atau di papan:

1. Dua `addEventListener` pada `#tombolUtama` untuk dua AC yang berbeda — satu klik menjalankan dua reaksi. “Ini jalur B yang salah tulis. Jalur B memakai `if`/`else` di dalam **satu** listener.”
2. Tombol ketiga “biar lengkap” — “Ini menambah janji. Spek tidak memintanya.”
3. `innerHTML` berisi `<b>…</b>` — “Teks biasa memakai `textContent`. Kita tidak menyisipkan tag.”

### 65–95 · Concept + mini

**Papan dua kolom.**

Jalur A, tambahkan di bawah listener P26 (jangan dihapus):

```javascript
const sorotanCadangan = document.getElementById("sorotanCadangan");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolCadangan.addEventListener("click", function () {
  sorotanCadangan.textContent = "Teks target dari spek.";
  console.log("Fitur 2: sorotan diganti.");
});
```

Jalur B, ganti isi listener fitur 1:

```javascript
let sudahDiklik = false;

tombolUtama.addEventListener("click", function () {
  if (sudahDiklik === false) {
    pesan.textContent = "Kalimat klik pertama dari spek.";
    sudahDiklik = true;
    console.log("Fitur 1: klik pertama.");
  } else {
    pesan.textContent = "Kalimat klik ulang dari spek.";
    console.log("Fitur 1: klik ulang.");
  }
});
```

**Siswa:** isi tabel regresi di handout sebelum coding. Jalur A menguji dua baris. Jalur B menguji klik pertama dan klik kedua.

### 95–120 · I do

**Jalur A**, ucapkan sambil mengetik di salinan yang listener keduanya dihapus dulu:

> “Baris spek: ganti sorotan. `id` tombol: `tombolCadangan`. Target: `sorotanCadangan`. Saya tidak menyentuh `pesan`. Listener fitur 1 tetap di atas.”

Uji tiga klik: utama, cadangan, utama.

**Jalur B**, 4 menit terpisah, supaya siswa A tidak menyalin tombol yang tidak mereka punya:

> “Spek ini hanya satu tombol. Klik pertama menepati AC lama. Klik kedua mengucapkan kalimat yang sudah ditulis di AC polish. Saya tidak membuat tombol baru. Ini bukan fitur 2. Ini fitur 1 yang jujur saat ditekan lagi.”

### 120–150 · Implementasi

**Keliling:**

- “Spek baris mana?”
- “Klik fitur 1 dulu. Masih lulus?”
- “Kenapa targetnya bukan `#pesan` lagi?” (jalur A)
- “Kalimat klik kedua tertulis di AC?” (jalur B)

Yang menambah CSS: “Kembalikan ke AC. Cat disimpan untuk P31 kalau masih dibutuhkan.”

### 150–165 · Peer

Tanpa kode. Urutan: fitur 1 → fitur 2 atau klik ulang. Catatan: lulus/gagal + kutipan teks.

### 165–180 · Reflect

**Exit:** jalur A atau B, satu kalimat yang **tidak** ditambah.

> “Berikutnya bukan fitur baru. Kalian menguji semua AC sebagai satu paket, lalu mencatat yang gagal. Nama pertemuannya checkpoint.”

---

# P28 — Uji sendiri

**180 menit · pertemuan 28/34**  
**Demo sengaja gagal:** [skill-js/p28-checkpoint/](./skill-js/p28-checkpoint/)  
**Spek demo:** `spek.md` di folder itu · **lembar:** `lembar-checkpoint.md`

Jangan membuka `script.js` di menit awal. Kelas memprediksi dari browser + spek.

### Yang sengaja gagal (buka setelah prediksi)

| AC | Yang terlihat | Lapisan | Perbaikan terkecil |
|---|---|---|---|
| 2 | `#daftar-menu` langsung `<ul>`, tidak ada `h2` | HTML | satu `h2` Menu yang tersedia |
| 3 | teks pucat `#c4b49a`, tidak ada `max-width`, `h1` hampir sama dengan `h2` | CSS | `max-width: 40rem` + warna teks gelap |
| 5 | klik tombol utama masih bisa benar | JS | jangan terkecoh |
| 6 dan 7 | tombol cadangan menulis ke `#pesan`, `#sorotanCadangan` tidak berubah; regresi fitur 1 rusak | JS | `sorotanCadangan.textContent = ...` |

AC 1 (landmark) dan AC 4 (teks awal) lulus. Sebut ini supaya kelas melihat demo tidak “semuanya jelek”.

### 0–10 · Orientation

> “Ini pintu, bukan pesta. P29 teman yang menjadi saksi. P32 garis akhir. Hari ini kalian melawan `spek.md` sendiri. Klaim selesai tanpa lembar tidak saya hitung.”

**Papan:** `P28 uji sendiri · P29 mata kedua · P30 tangan`

### 10–30 · Scaffold

Lima kotak: HTML → CSS → JS1 → JS2 → regresi.

> “JS tidak boleh pertama. Kalau `id`-nya salah, listener terlihat rusak padahal alamatnya yang keliru. Urutan ini sama dengan cara saya mengurutkan dugaan saat ada bug: struktur dulu, baru perilaku.”

### 30–50 · Experience

1. Baca `p28-checkpoint/spek.md` keras-keras, AC 1 sampai 7.  
2. Siswa menulis prediksi L/G untuk AC 2, 3, dan 6 — tanpa melihat kode.  
3. Baru buka browser: scroll ke daftar menu (tanpa judul), lebarkan jendela (baris penuh), klik tombol utama (lulus), klik tombol cadangan (`#pesan` tertimpa, sorotan diam).  
4. Kumpulkan prediksi. Lalu bongkar lapisan di tabel atas. **Jangan langsung menambal.**

### 50–65 · Trap

1. “Tombol utama sudah jalan, berarti checkpoint lulus.” → AC 2, 3, 6 masih gagal.  
2. Pura-pura menambah tombol ketiga. Siswa harus menolak.  
3. Pura-pura mengubah AC 6 menjadi “teks boleh muncul di `#pesan`”. Tanya: “Ini memperbaiki halaman, atau mengubah janji supaya bug lulus?”

### 65–95 · Concept

```text
UJI → TEMUAN + BUKTI + LAPISAN → PRIORITAS 1–3 → PERBAIKI SATU → UJI ULANG + REGRESI
```

**Siswa:** salin `lembar-checkpoint.md` ke folder project. Salin semua AC dari spek sendiri. Isi hasil L/G/D **sebelum** coding. D = ditunda, dengan alasan.

### 95–120 · I do

Satu temuan, pelan, pada demo:

> “AC 2: tiap section punya `h2`. Bukti: section menu langsung daftar. Lapisan: HTML. Perbaikan terkecil: satu `h2`. Bukan ganti warna. Bukan tombol baru.”

Tambahkan `h2`. Uji hanya AC 2. CSS masih pucat — biarkan, supaya kelas melihat “satu item selesai, item lain masih gagal”.

Kalau waktu cukup, perbaiki target JS dan klik tombol utama lagi: “Itu regresi.”

### 120–150 · Practice

20 menit uji tanpa coding. 25 menit memperbaiki satu sampai tiga item.

**Keliling:** nomor AC, bukti yang terlihat, lapisan.  
Semua sudah hijau: “Kalau `id` tombol salah satu huruf, AC mana yang gagal?” — latihan pikiran, tanpa merusak file.  
Banyak yang gagal: wajib hanya prioritas 1. Sisanya ditulis ditunda.

### 150–165 · Saksi satu AC

5 menit. Pasangan menguji **satu** AC yang diklaim lulus, tanpa kode. Kalau saksi tidak melihat bukti yang sama, status kembali gagal. Ini latihan kejujuran, belum peer review penuh.

### 165–180 · Reflect

**Exit:** jumlah L/G/D + satu prioritas.

> “Besok lembar ini boleh dibawa pemilik. Yang diuji teman adalah spek, bukan arahan ‘klik yang ini dulu supaya kelihatan bagus’.”

---

# P29 — Mata kedua

**180 menit · pertemuan 29/34**  
**Lembar:** [skill-js/p29-peer-review/](./skill-js/p29-peer-review/)  
**Demo yang diuji bersama:** tetap `p28-checkpoint/`  
**Kalimat contoh:** `contoh-umpan-balik.md`

Hari ini tidak ada yang memperbaiki kode. Tangan yang memperbaiki adalah P30.

### Persiapan

- Pairing di papan sebelum menit 95. Jumlah ganjil = satu trio (dua reviewer bergiliran, atau reviewer menguji dua pemilik dengan waktu dipotong).
- Editor diminimize di sisi reviewer.
- Spek yang hanya berisi “keren/modern”: 5 menit tulis ulang 4 AC terukur, atau review ditunda.

### 0–10 · Orientation

> “Editor tutup. Yang terbuka: `spek.md` teman dan browser. Kalian saksi janji, bukan juri lomba.”

**Papan:** `P28 sendiri · P29 saksi · P30 tangan`

### 10–30 · Scaffold

Lima aturan, dibaca lalu ditempel:

1. Baca spek dulu, baru klik.  
2. Urutan HTML → CSS → JS1 → JS2 → regresi.  
3. Setiap baris: nomor AC, lulus/gagal, bukti, lapisan.  
4. Boleh bertanya arti kalimat. Tidak boleh mengubah spek.  
5. Tidak menyentuh keyboard teman.

Latihan lisan dari `contoh-umpan-balik.md`. Ubah “kurang keren” menjadi: “AC 2 gagal: section daftar menu tidak punya `h2`. Lapisan HTML.”

### 30–50 · Experience

Kelas menjadi reviewer demo P28. Satu temuan di kertas, tanpa JS. Kumpulkan tiga. Cocokkan ke AC 2, AC 3, AC 6. Puji yang menyebut nomor + bukti. Kembalikan yang hanya “jelek”.

### 50–65 · Trap (roleplay, Anda jadi orang nakal)

1. Owner: “Klik sini, sini, sini.” → hentikan. “Saksi membaca spek, bukan tur.”  
2. Reviewer: “Bagus banget.” → “AC nomor berapa?”  
3. Reviewer membuka `script.js`. → “Itu pekerjaan P30, dan itu bukan filemu.”  
4. Owner menghapus AC yang gagal. → “Janji tidak diubah supaya lulus.”  
5. “Punya aku ada tombol ketiga, tambahkan.” → opini, tulis di kotak bawah, bukan di antrian.

### 65–95 · Concept + mini

Dua kolom papan: **Terikat spek** | **Opini**.  
Setiap siswa menulis satu kalimat spek dan satu kalimat selera tentang demo. Teman mencoret yang selera.

### 95–120 · Pair + I do

Umumkan pasangan. Isi **satu baris** di papan dari demo:

> “AC 6 gagal. Bukti: klik Ganti sorotan mengubah kalimat di status menu. Sorotan cadangan tetap ‘Belum ada sorotan cadangan.’ Lapisan JS.”

Owner menyerahkan spek. Reviewer tidak menerima daftar “yang boleh diklik”.

### 120–145 · Giliran A menguji B

20–25 menit.  
**Keliling:** “AC berapa? Buktinya kalimat apa?”  
Editor reviewer yang terbuka: tutup.  
Lembar masih kosong di menit 10: duduk, baca AC 1 bersama, lalu biarkan mereka lanjut.

### 145–165 · Giliran balik + antrian

Sisa 8–10 menit: pemilik mengisi `rencana-revisi.md`. Maksimal tiga baris. Wajib ada nomor AC dan lapisan.

Kalau peer tidak menemukan gagal: antrian boleh “uji regresi sekali lagi di P30” plus satu risiko (“`id` panjang, mudah selisih huruf”). Jangan mengarang fitur supaya kertas terisi.

Opini peer ditulis di kotak yang memang berjudul opini.

### 165–180 · Reflect

**Exit:** satu temuan yang diterima (nomor AC) dan satu opini yang ditolak.

> “Besok yang dikerjakan nomor satu di antrian. Selesai kalau AC itu lulus dan fitur 1 masih lulus. Bukan karena file sudah berubah.”

---

# P30 — Antrian, satu obat

**180 menit · pertemuan 30/34**  
**Yang dikerjakan siswa:** `rencana-revisi.md` + [log-revisi.md](./skill-js/p30-revisi/log-revisi.md)  
**Demo live:** salinan `p28-checkpoint/` (mulai dari keadaan gagal)  
**Jejak yang Anda isi bersama:** [contoh-log-demo.md](./skill-js/p30-revisi/contoh-log-demo.md)

### Persiapan

- Siswa tanpa rencana: 10 menit menyusun satu baris dari lembar P29 (wajib nomor AC).
- Salinan demo masih rusak (tanpa `h2` menu, tanpa `max-width`, target JS salah).
- Jangan menambal tiga lapisan dalam satu save.

### 0–10 · Orientation

> “`rencana-revisi.md` adalah daftar belanja. Kotak opini di bawahnya bukan belanja. P31 bukan hari ini.”

**Papan:** `#1 wajib · uji · regresi · log · baru #2`

### 10–30 · Scaffold

Gambar siklus satu item: tunjuk AC → sebut file → ubah paling kecil → browser → klik AC itu → klik fitur 1 lagi → tulis log.

We do lisan: “AC tidak punya `h2`. File yang disentuh?” Tunggu jawaban HTML. “Bukan `style.css`, karena judul yang hilang itu tag, bukan warna.”

### 30–50 · Experience (live, tiga langkah terpisah)

1. Siswa menyebut item #1 demo: tidak ada `h2`. Anda menambah **hanya** `<h2>Menu yang tersedia</h2>`. Uji AC 2. Teks masih pucat. “CSS belum giliran.”  
2. Item #2: `max-width: 40rem; margin: 0 auto` pada landmark, dan `color` teks gelap. Uji AC 3.  
3. Item #3: ganti `pesan.textContent` pada listener cadangan menjadi `sorotanCadangan.textContent`. Uji AC 6. Klik tombol utama: regresi AC 5.

Isi bersama tiga baris `contoh-log-demo.md` di papan. Tekankan: “Ini jejak demo. Bukan jejak kalian. Jangan disalin ke log project.”

### 50–65 · Trap

1. Ubah HTML + CSS + JS sekaligus, lalu regresi gagal. “Saya tidak tahu penyebabnya, karena tiga obat diminum bersamaan.” Undo.  
2. “Sekalian gradient supaya reviewer senang.” → opini, tetap di luar antrian.  
3. Antrian kosong, tawarkan tombol ketiga. Siswa menolak.  
4. Hapus AC dari spek. “Itu mengganti janji, bukan menepatinya.”

### 65–95 · Concept + mini

Log = sebelum / yang diubah / sesudah.  
**Siswa:** isi kolom Sebelum untuk item #1 **sebelum** mengetik (kutip teks yang sekarang terlihat).

### 95–120 · I do pada antrian sungguhan

Minta satu siswa memproyeksikan **baris antrian #1** dan potongan spek, bukan seluruh folder. Anda hanya mengucapkan rencana, tidak menyelesaikan projectnya:

> “AC 2. Lapisan HTML. Satu `h2`. Lalu browser. Kalau lulus, klik fitur 1. Kalau fitur 1 lulus, baru boleh memikirkan nomor 2.”

### 120–150 · Practice

25 menit hanya item #1 + uji. Yang lulus: lanjut #2.  
Menit 150: yang #1 masih gagal tetap di #1. Catat. Jangan pindah ke warna.

**Keliling:** “AC berapa? Sudah kamu klik?”

### 150–165 · Log

Rapikan `log-revisi.md`. Sisa antrian tertulis. Opini tetap di tabel “yang tidak kukerjakan”.

### 165–180 · Reflect

**Exit:** item yang AC-nya lulus, item yang masih gagal.

> “Besok kesopanan pakai: bahasa halaman, judul tab, tulisan tombol, dan jejak tombol Tab. Hutang AC yang masih gagal dibayar dulu 20 menit, atau ditulis jujur. Warna tidak membayar hutang itu.”

---

# P31 — Sopan dipakai

**180 menit · pertemuan 31/34**  
**Demo:** [skill-js/p31-polish/](./skill-js/p31-polish/)  
**Lembar:** `lembar-polish.md`

Demo ini **klik mouse-nya jalan**. Yang gagal adalah sopan pakai. CSS keterbacaan dasar sudah ada (`max-width` ada). Jangan dibuka di awal.

### Yang sengaja gagal (setelah kelas menekan Tab)

| Yang dilakukan | Akibat |
|---|---|
| `<html>` tanpa `lang` | bahasa dokumen tidak dinyatakan |
| `<title>Document</title>` | tab browser tidak menyebut kantin |
| Tombol bertuliskan `KLIK` dan `INI JUGA` | tidak menyebut aksi |
| `outline: none` pada `button` | jejak Tab hilang |
| `padding` tombol sangat kecil | sasaran klik sempit |

Perbaikan yang Anda ketik saat I do, satu per satu, tiap ubahan diuji Tab:

- `<html lang="id">`
- `<title>Info Kantin Kelas X</title>`
- teks tombol: `Cek status menu` dan `Ganti sorotan`
- hapus `outline: none`, ganti dengan:

```css
button:focus {
  outline: 2px solid #1f1a14;
  outline-offset: 2px;
}
```

- `padding` tombol kembali sekitar `0.55rem 0.9rem`

`id` tidak diganti.

### 0–10 · Orientation

> “Sentuhan akhir. Bukan tombol ketiga. Yang AC speknya masih gagal: 20 menit pertama menutup hutang itu, atau menulis nomor AC yang masih gagal. Gradient tidak menutup hutang.”

**Papan:** `lang · title · label aksi · Tab · fokus · regresi`  
Daftar nama yang masih punya AC gagal, tanpa komentar nilai.

### 10–30 · Scaffold

Delapan baris lembar. Tekankan yang wajib: 1 `lang`, 2 `title`, 3 label aksi, 5 jejak Tab.

> “Ada `nav` di spek? Baru kita bicara `aria-label`. Ada `img`? Baru kita bicara `alt`. Tidak ada, tulis N/A. N/A bukan gagal.”

### 30–50 · Experience

Buka demo. Klik mouse: fitur jalan. Sengaja memuji sebentar. Lalu:

> “Tutup mouse. Tekan Tab dari atas halaman. Berhenti di tombol. Kamu tahu sedang di mana?”

Kelas tidak melihat fokus. Baca label “KLIK”. “Spek meminta cek status, atau meminta kata KLIK?”

### 50–65 · Trap

1. `outline: none` — “Screenshot bersih, orang yang tidak memakai mouse tersesat. Hapus.”  
2. `div` diberi `role="button"` plus `aria-hidden` — “Sudah ada `button`. Jangan menumpuk atribut.”  
3. Ganti `id="tombolUtama"` menjadi `btn` — “JS kemarin mencari alamat lama. Polish tidak memindahkan alamat.”  
4. `@keyframes` pada tombol — “Fokus dan mata kalah. Tidak saya minta hari ini.”

### 65–95 · Audit pensil

Siswa mengisi 8 item pada **halaman sendiri** sebelum mengubah kode. Item 5 gagal = prioritas.

### 95–120 · Pintu AC + I do

Kelompok yang masih gagal AC: 15–20 menit di item P30, atau menulis “masih gagal: AC …”.  
Kelompok lain menonton I do tiga ubahan pada demo: `lang`, label tombol, `:focus`. Setiap ubahan: Tab lagi.

### 120–150 · Practice

**Keliling:** “Tab. Sekarang. Tunjukkan fokusnya.” Lalu klik AC fitur 1. `id` yang berubah: kembalikan.

### 150–165 · Tiga alasan + peer Tab

Siswa menulis tiga sentuhan + alasan pengguna (“`lang="id"` karena halaman ini berbahasa Indonesia”).  
Teman menekan Tab 3 menit tanpa arahan. Teman tersesat → item 5 belum lulus.

### 165–180 · Reflect

**Exit:** tiga sentuhan.

> “Besok lima bidang diuji sebagai garis akhir. Perbaikan yang boleh hanya yang kecil: satu lapisan, di bawah sepuluh menit. Yang besar ditulis di kartu, dibawa ke panggung, dijelaskan. P33 tidak menunggu renovasi semalam.”

---

# P32 — Lima bidang, kartu jujur

**180 menit · pertemuan 32/34**  
**Demo:** [skill-js/p32-dod/](./skill-js/p32-dod/)  
**Disalin siswa:** `checklist-dod.md` dan `kartu-status.md` ke folder project mereka

Demo P32 **bukan** halaman kantin yang sama pixel-nya dengan P24. Strukturnya setara: status menu, daftar, jam, dua tombol. CSS-nya sudah terbaca. Dua bug sengaja kecil.

### Yang sengaja gagal (setelah prediksi)

| Domain | Bukti | Bugfix |
|---|---|---|
| Struktur HTML | `<title>` masih `Info Kantin Kelas X P28` | ganti teks title, uji tab browser |
| Perilaku JS | `#tombolCadangan` menulis ke `#pesan` | satu identifier → `sorotanCadangan.textContent`, lalu klik tombol utama |
| Spek, keterbacaan, sopan UX | lulus pada demo ini | jangan dicari-cari biar ada kerja |

### 0–10 · Orientation

> “Ini garis. P33 adalah panggung. Panggung menampilkan yang ada di folder hari ini. Yang belum sempat, ditulis di kartu. Kartu kosong lebih berbahaya daripada kartu yang berisi gap.”

**Papan:** `5 domain · bugfix kecil · kartu status · P33`

### 10–30 · Scaffold

Bacakan lima domain dari checklist. Lalu tanya waktu, supaya “kecil” punya ukuran:

| Gejala | Perkiraan | Keputusan |
|---|---|---|
| `title` masih `Document` | sekitar 1 menit | bugfix |
| listener salah target, satu kata | sekitar 3 menit | bugfix, lalu regresi |
| CSS harus diulang total, atau fitur 1 belum pernah jalan sejak P26 | puluhan menit | kartu status, bukan renovasi di jam ini |

> “Bugfix kecil tiga langkah: ubah, uji AC itu, uji fitur 1 lagi. Tiga langkah. Bukan satu save besar.”

### 30–50 · Experience

Browser demo + `spek` yang Anda bacakan (boleh spek P28, karena janjinya sama: mie tersedia, sorotan es teh). Siswa mengisi status lima domain **tanpa** `script.js`. Baru buka `<title>` dan `script.js`. Cocokkan.

### 50–65 · Trap

1. Pura-pura menambah animasi “biar P33 berkesan.” Siswa menolak.  
2. Pura-pura menghapus AC yang gagal. “Pengguna halaman tidak tahu AC-nya sudah dihapus.”  
3. “Bug kecil” yang menyentuh HTML, CSS, dan JS sekaligus. “Itu tiga bug. Masuk kartu, kerjakan satu.”  
4. Menghakimi halaman teman. “Hakim hari ini spek sendiri.”

### 65–95 · Mini tanpa editor

Setiap siswa mengisi domain Spek dan Struktur di checklist mereka, pensil, dua menit. Lalu buka browser sendiri untuk tiga domain sisanya.

### 95–120 · I do

Pada demo, domain Perilaku JS saja:

> “AC: setelah klik cadangan, yang berubah sorotan, bukan status menu. Baris ini menulis ke `pesan`. Saya ganti menjadi `sorotanCadangan`. Saya simpan. Saya klik cadangan. Saya klik utama. Utama masih Mie Sehat tersedia. Regresi lulus. Saya catat di checklist: domain JS, bugfix, lulus.”

Title menyusul sebagai contoh domain lain, 1 menit, supaya mereka melihat dua bugfix tidak dicampur dalam satu uraian.

### 120–150 · Practice

Urutan di project sendiri: Spek → HTML → CSS → JS → UX.  
**Keliling:** “Domain mana yang sedang kamu uji?”  
Menit 145: yang belum menyentuh domain JS, duduk 5 menit, klik fitur 1 bersama.

Maksimal dua bugfix. Lebih dari itu masuk kartu.

### 150–165 · Kartu status

Isi `kartu-status.md`: lima domain, bugfix yang sudah, gap yang dibawa, yang sengaja tidak ditambah.

> “Di P33 kamu akan ditanya. Gap yang tertulis bisa kamu jelaskan. Gap yang disembunyikan akan ketahuan saat orang menguji.”

### 165–180 · Reflect

**Exit:** jumlah domain lulus (…/5) + satu kalimat yang akan diucapkan di P33 tentang gap.

> “Besok bukan hari memperbaiki. Besok hari menunjukkan artefak ini dan kartu ini. Yang dijelaskan adalah janji, bukti, dan yang belum.”

---

## Kalimat yang dipakai berulang saat keliling

| Situasi | Ucapan |
|---|---|
| Siswa menyalin mie ke brief A/C | “Pola tag-nya boleh. Kalimatnya dari spekmu.” |
| Ingin ganti `id` | “Alamat ini dikunci sejak spek. Tunjuk barisnya. Kalau spek juga diubah, JS dan HTML harus ikut, dan itu bukan pekerjaan hari ini.” |
| `null` di Console | “Bandingkan huruf `id` di HTML dan string di `getElementById`. Tanpa tanda pagar.” |
| Dua log per satu klik | “Ada dua listener. Sisakan satu.” |
| Fitur 2 menimpa fitur 1 | “Target kedua elemen yang mana di spek? Ubah yang itu saja, lalu klik fitur 1 lagi.” |
| Ingin `innerHTML` | “Kalimat biasa memakai `textContent`.” |
| Ingin framework / library | “Project ini satu HTML, satu CSS, satu JS. Itu batas semester ini.” |
| Minta Anda mengetikkan solusinya | “Saya tunjuk baris spek dan lapisan. Tiga titik di pola itu kamu isi.” |
| AC masih gagal di hari polish | “Dua puluh menit untuk AC itu, atau tulis nomornya di kartu. Jangan ditutup cat.” |
| Panik karena ‘jelek’ | “Spek meminta lebar, jarak, dan kontras. Tunjuk aturan yang menepati itu.” |

---

## Yang dikumpulkan per pertemuan

| P | Artefak di folder siswa | Tidak diterima |
|---|---|---|
| 24 | `index.html` dengan section + `id` | halaman yang isinya hanya di CSS |
| 25 | `style.css` tertaut + 3 alasan | palet tanpa `max-width` |
| 26 | listener fitur 1 + tabel sebelum/sesudah | fitur 2 ikut ditulis |
| 27 | jalur A atau B + regresi fitur 1 | tombol ketiga |
| 28 | `lembar-checkpoint.md` | centang tanpa bukti |
| 29 | `lembar-peer.md` + `rencana-revisi.md` | file teman berubah |
| 30 | `log-revisi.md` | tiga lapisan dalam satu ubahan |
| 31 | `lembar-polish.md` + 3 alasan | `outline: none`, `id` baru |
| 32 | `checklist-dod.md` + `kartu-status.md` | kartu kosong, AC dihapus |
