# Materi Ajar Guru — X-S1-P31
## Project S1: Polish UX Ringan & Aksesibilitas Dasar (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **31/34** · 180 menit |
| Transformasi | Lulus spek (kira-kira) → sopan dipakai: label, Tab, fokus, `lang`/`title` |
| Fokus | UX ringan · a11y dasar · uji keyboard · regresi |
| Dilarang | Fitur JS baru · animasi wajib · `outline: none` · ganti `id` · kuliah ARIA · polish menutup AC gagal |
| Handout | [X-S1-P31_project-s1-polish_siswa.md](./X-S1-P31_project-s1-polish_siswa.md) |
| Bacaan | [X-S1-P31_bacaan-mimi-robi.md](./X-S1-P31_bacaan-mimi-robi.md) |
| Lembar/demo | [skill-js/p31-polish/](./skill-js/p31-polish/) |
| Modul | [X-S1-P31_project-s1-polish.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | `lang`, `title`, fokus, label aksi |
| C2 | Memahami | Polish ≠ fitur; a11y dasar ≠ ARIA ramai |
| C3 | Menerapkan | 3–5 sentuhan di project |
| C4 | Menganalisis | Temuan Tab / “Klik” / outline hilang |
| C5 | Mengevaluasi | Tolak animasi yang merusak fokus |
| C6 | Mencipta | 3 alasan pengguna |

**Fokus C3–C5 · puncak C4–C6 · P32 = DoD**

### Timeline

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Sopan, bukan kembang api |
| 10–30 | Scaffold | C2 | 8 item lembar |
| 30–50 | Experience | C2–C4 | Demo tidak ramah Tab |
| 50–65 | Trap | C4 | outline none · ARIA tumpuk · id |
| 65–95 | Concept + audit | C2–C3 | Keyboard · isi lembar sebelum kode |
| 95–120 | Pintu AC + I do | C2–C3 | Gagal spek 15–20' · lalu `lang`+label+`:focus` |
| 120–165 | Practice | C3–C6 | Sentuhan · Tab · regresi |
| 165–180 | Reflect | C5 | 3 alasan · preview P32 |

## B. Pendukung mengajar

### Persiapan

- Demo `p31-polish` diproyeksi; murid **Tab** dari kursi (atau satu siswa di depan). Jangan buka CSS di awal.
- Pintu P30: siapa AC-nya masih G — daftar di papan; mereka 15–20' ke item itu dulu.
- Jangan wajibkan extension kontras. Mata + “teks pucat vs gelap” cukup.
- `id` terkunci; sebut keras.

### Kunci demo (RAHASIA sampai setelah Tab)

1. `outline: none` — fokus hilang.
2. Label “KLIK” / “INI JUGA” — bukan aksi.
3. Tanpa `lang` / `title` = `Document`.
4. Padding tombol sangat kecil.
5. JS **tetap jalan** dengan mouse — trap “sudah beres.”

Perbaikan I do: `lang="id"` · `title` spek · teks tombol aksi · hapus `outline: none` + `:focus { outline: 2px solid #1f1a14; outline-offset: 2px; }` · padding tombol.

### Pengetahuan di lidah

- Tombol HTML asli = keyboard gratis. `div` + klik = hutang.
- Fokus = “kamu di sini.”
- `aria-label` nav = P10, satu atribut, bukan tren.

### Recall satu kalimat

> “P25 mata membaca. Hari ini tangan tanpa mouse juga harus tahu di mana ia berada. Polish adalah kesopanan.”

### Miskonsepsi

1. Profesional = tanpa outline.
2. Aksesibilitas = pasang banyak `aria`.
3. Polish = animasi.
4. Ganti `id` ke `btn-primary` “lebih standar.”
5. Mouse jalan = P32 aman.

### Etika

Jangan malu-maluin yang AC-nya masih G. Mereka boleh 20' P30. Jangan lomba CSS. Jangan tonton screen reader 30 menit.

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> “Sentuhan akhir. Bukan tombol ketiga. Kalau AC spek masih gagal, itu hutang — 20 menit, atau tulis jujur. Gradient tidak membayar hutang.”

Papan: **lang · title · label aksi · Tab · fokus · regresi.**

#### 10–30 · Scaffold · Memahami · C2

Delapan item. Bedakan: “ada `nav`? baru `aria-label`.” “Ada `img`? baru `alt`.” Jangan memaksa elemen yang tidak ada di spek.

#### 30–50 · Experience · C2–C4

Buka demo. Klik mouse: fitur jalan. Puji palsu. Lalu Tab. “Di mana kamu?” Siswa tidak tahu. Baca label “KLIK.” Tanya AC spek: apakah spek bilang “KLIK”?

#### 50–65 · Trap · Menganalisis · C4

1. `button { outline: none }` — hapus.
2. Tambah `aria-hidden` dan `role="button"` di `div` — tolak; sudah ada `button`.
3. Ganti `id="tombolUtama"` → `btn` — “JS kemarin mati. Itu bukan polish.”
4. `@keyframes bounce` pada tombol — fokus dan mata kalah.

#### 65–95 · Concept + audit · C2–C3

Konsep: pengguna keyboard, judul tab, bahasa. Mini: lembar 8 item pada **project sendiri**, pensil, belum coding. Yang item 5 G = prioritas.

#### 95–120 · Pintu + I do · C2–C3

Kelompok G: tutup AC atau catat. Kelompok L: tonton I do tiga ubahan pada demo, tiap ubahan diuji Tab.

#### 120–150 · Practice · C3–C6

Kerjakan. Guru: “Tab. Sekarang. Tunjukkan fokusnya.” Regresi klik AC. Larang ganti `id`.

#### 150–165 · Alasan · C6

Tulis 3 sentuhan. Peer 3 menit: teman Tab di halamanmu, tanpa arahan. Jika teman tersesat, item 5 belum lulus.

#### 165–180 · Reflect · C5

Exit. Preview P32: DoD = spek + AC + polish dasar + regresi. Bugfix kecil. Bukan renovasi semalam.

### Diferensiasi

**AC masih G:** 20' P30; polish minimal = `lang`+`title` saja jika waktu habis.
**Tidak ada `nav`/`img`:** item 8 N/A, bukan gagal.
**Cepat:** `:focus-visible` boleh; jangan skip-link wajib; jangan dark mode.
**Tombol `div`:** kembalikan ke `<button type="button">` — itu akses, bukan fitur baru.

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Pintu AC | Gagal disembunyikan | L atau tertulis |
| Keyboard | Tab buta / outline none | Fokus kelihatan |
| Label | “Klik” | Aksi spek |
| Dokumen | `Document` / tanpa `lang` | Sesuai spek |
| Scope | Animasi / `id` baru / ARIA ramai | 3–5 sentuhan sopan |

### Checklist guru

- [ ] Demo Tab sebelum CSS
- [ ] Pintu AC
- [ ] `id` terkunci
- [ ] Peer Tab 3 menit
- [ ] 3 alasan
- [ ] Preview P32

### KBC

**Kesopanan pada pengguna.** Menghilangkan fokus “biar bersih” mengutamakan screenshot, bukan orang.

**Kejujuran pintu AC.** Polish bukan penghapus gagal spek.
