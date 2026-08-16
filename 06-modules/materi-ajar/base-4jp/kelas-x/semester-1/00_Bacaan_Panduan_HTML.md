# Bacaan Skill Pendukung — HTML untuk Siswa

| Field | Isi |
|-------|-----|
| Jenis | **Skill pendukung** (luar jam pelajaran · bukan modul pertemuan) |
| Basis | **4JP** · Kelas X · Semester 1 |
| Kapan dibagikan | **Setelah P01** (sudah kena `index.html`) · **sebaiknya sebelum P03** company-profile impact |
| Cara pakai | Baca penjelasan → buka file contoh → copy-paste **atau** ketik ulang → buka di browser |
| Nada | Jelas, praktis · istilah ditulis lengkap |

> Di pertemuan CPLF, HTML akan **dijelaskan lagi dan dipraktikkan ulang** sesuai alur (impact → spek → semantik → CSS → form → JS).  
> Bacaan ini supaya kamu **tidak bingung** saat sudah menyentuh HTML di awal, lalu topik bergeser ke CSS/JS.

**Folder contoh:** [skill-html/](./skill-html/) · mulai dari [skill-html/index.html](./skill-html/index.html)

---

## Setup proyek (lakukan sekali)

Tujuan: punya **folder latihan sendiri** yang rapi, terpisah dari file contoh guru (supaya boleh diutak-atik tanpa takut “menghapus asli”).

### Langkah

1. Buat folder proyek di komputer, misalnya:
   ```text
   Documents/CPLF-X-S1/
   ```
2. Di dalamnya buat dua subfolder:
   ```text
   CPLF-X-S1/
   ├── skill-html/          ← salinan contoh latihan HTML
   ├── skill-css/           ← salinan contoh latihan CSS (setelah P07)
   └── project/             ← halaman milikmu (index.html, nanti style.css, dll.)
   ```
3. **Salin** seluruh isi folder materi `skill-html/` ke `CPLF-X-S1/skill-html/`  
   (jangan hanya memindahkan file asli di repo sekolah jika itu dibagikan read-only).
4. Buka folder `skill-html/` di editor (VS Code / editor sekolah).
5. Buka [skill-html/index.html](./skill-html/index.html) di browser:
   - Klik kanan file → *Open with* → browser, **atau**
   - Di VS Code: Live Server / preview (jika tersedia).
6. Untuk halaman milikmu: di `project/` buat `index.html` mulai dari pola [01_boilerplate.html](./skill-html/01_boilerplate.html).

### Cek setup berhasil

- [ ] `skill-html/index.html` terbuka di browser dan daftar 01–08 terlihat  
- [ ] Klik satu contoh (mis. `03_tipografi.html`) — isinya muncul  
- [ ] Folder `project/` sudah ada (boleh masih kosong kecuali `index.html`)

**Catatan:** Nama folder boleh beda; yang penting **contoh latihan** dan **project milikmu** terpisah.

---

## Rujukan file latihan

Mulai di sini: **[skill-html/index.html](./skill-html/index.html)**

| No | File | Kelompok |
|----|------|----------|
| 01 | [01_boilerplate.html](./skill-html/01_boilerplate.html) | Boilerplate |
| 02 | [02_semantik.html](./skill-html/02_semantik.html) | Basis semantik |
| 03 | [03_tipografi.html](./skill-html/03_tipografi.html) | Tipografi |
| 04 | [04_daftar.html](./skill-html/04_daftar.html) | Daftar |
| 05 | [05_layout.html](./skill-html/05_layout.html) | Layout HTML (`div`/`span`) |
| 06 | [06_navigasi.html](./skill-html/06_navigasi.html) | Navigasi & tautan |
| 07 | [07_media.html](./skill-html/07_media.html) | Media |
| 08 | [08_formulir.html](./skill-html/08_formulir.html) | Formulir |
| — | [assets/placeholder.svg](./skill-html/assets/placeholder.svg) | Gambar contoh untuk `07` |
| — | [skill-html/README.md](./skill-html/README.md) | Ringkas isi folder |

---

## Mengapa bacaan ini ada?

Di P01–P02 kamu sudah mulai berkas HTML. Di P03 muncul **company profile** — banyak siswa bingung: *tag apa ini? harus pakai yang mana?*

Kalau skill dasar HTML belum tenang, saat masuk **CSS (P08)** dan **JS (P13)** otak masih sibuk menebak struktur. Fondasi goyah.

Jadi: kuasai **pengenalan tag per kelompok** di luar jam. Di kelas, fokus ke *kenapa* dan *alur bernalar* CPLF — bukan hafalan panik.

```text
LUAR JAM: kenali tag + coba contoh
   ↓
DI KELAS: pakai lagi sesuai spek & alur pertemuan
```

---

## Cara latihan (pilih salah satu)

1. **Copy-paste** isi file contoh ke editor → simpan → buka di browser.  
2. **Ketik manual** sambil lihat contoh (lebih lambat, sering lebih nempel).  
3. Ubah teksnya (nama, judul) — jangan takut “merusak”; itu latihan.

**Urutan disarankan**

```text
01 boilerplate → 02 semantik → 03 tipografi → 04 daftar
→ 05 layout → 06 navigasi → 07 media → 08 formulir
```

---

## 0. Ringkas: apa itu HTML?

**HTML** (*HyperText Markup Language*) = bahasa **penanda** struktur halaman.

| Ide | Arti |
|-----|------|
| Tag berpasangan | `<p>teks</p>` |
| Tag mandiri (void) | `<img …>`, `<br>`, `<meta …>` |
| Atribut | Info tambahan: `href`, `id`, `src`, `lang`, … |

**Tiga peran (ingat terus)**

| Bahasa | Peran |
|--------|--------|
| HTML | Struktur & makna |
| CSS | Tampilan |
| JavaScript | Perilaku |

**Trap:** “Sudah muncul di browser” ≠ sudah benar semantik / spek.

---

## 1. Boilerplate (kerangka wajib)

Setiap halaman baru dimulai dari kerangka HTML5.

| Bagian | Fungsi |
|--------|--------|
| `<!DOCTYPE html>` | Ini dokumen HTML5 |
| `<html lang="id">` | Akar · bahasa halaman |
| `<head>` | Meta untuk browser (bukan artikel utama) |
| `<meta charset="UTF-8">` | Huruf tidak rusak |
| `viewport` | Layar kecil lebih wajar |
| `<title>` | Teks di **tab** browser (beda dari `<h1>`) |
| `<body>` | Yang pengguna lihat |

**File contoh:** [skill-html/01_boilerplate.html](./skill-html/01_boilerplate.html)

**Latihan luar jam:** buka file → ganti `title` dan teks di `body` → refresh browser. Pastikan tab browser ikut berubah.

---

## 2. Basis semantik (grup sendiri)

> **Semantik** = nama tag = **peran** isi. Bukan sekadar kotak generik.

Kuasai ini sebelum mengejar “bagus.” Di kelas akan dalam di **P07**; di sini pengenalan + contoh utuh.

### Landmark

| Tag | Peran |
|-----|--------|
| `<header>` | Kepala |
| `<nav>` | Menu navigasi |
| `<main>` | Isi utama (satu per halaman) |
| `<section>` | Bagian bertema |
| `<article>` | Karya yang bisa berdiri sendiri (jika cocok) |
| `<aside>` | Sampingan / pelengkap |
| `<footer>` | Kaki |

### Hierarki judul

| Tag | Peran |
|-----|--------|
| `<h1>` | Judul utama — biasanya **satu** |
| `<h2>` | Judul bagian |
| `<h3>`…`<h6>` | Anak bagian — jangan loncat level tanpa alasan |

**File contoh:** [skill-html/02_semantik.html](./skill-html/02_semantik.html)

**Latihan:** baca file tanpa CSS — bisakah kamu tebak “ini kepala / isi / kaki / bagian”? Itu tes semantik.

**Trap:** semua pakai `<div>` “biar fleksibel.” Fleksibel tanpa makna = bingung belakangan (CSS & JS ikut kacau).

---

## 3. Tipografi (teks & penekanan)

| Tag | Fungsi |
|-----|--------|
| `<p>` | Paragraf |
| `<br>` | Ganti baris (jangan pengganti paragraf) |
| `<strong>` | Penting (makna) |
| `<em>` | Penekanan / tekanan (makna) |
| `<blockquote>` | Kutipan blok |
| `<code>` | Kode singkat di kalimat |
| `<pre>` | Teks praformat |
| `<span>` | Cuplikan inline tanpa makna khusus |

**File contoh:** [skill-html/03_tipografi.html](./skill-html/03_tipografi.html)

**Catatan:** ingin teks kelihatan besar? Itu urusan **CSS** nanti — jangan pakai `<h2>` hanya demi ukuran.

---

## 4. Daftar

| Tag | Fungsi |
|-----|--------|
| `<ul>` + `<li>` | Daftar tak berurut (poin) |
| `<ol>` + `<li>` | Daftar berurut (langkah) |
| `<dl>` + `<dt>` + `<dd>` | Istilah + definisi |

**File contoh:** [skill-html/04_daftar.html](./skill-html/04_daftar.html)

**Latihan:** ubah daftar berurut jadi langkah “cara memasak mie” versi kamu (eksplisit — vibes P06).

---

## 5. Layout HTML (pengelompokan generik)

Di HTML, “layout” = **mengelompokkan** konten. Merapikan kolom/jarak = **CSS** (P08–P09).

| Tag | Fungsi |
|-----|--------|
| `<div>` | Kotak generik (blok) — jika tak ada tag semantik yang cocok |
| `<span>` | Cuplikan inline generik |
| `<hr>` | Pemisah tematik |

**Aturan:** landmark semantik dulu (`section`, `header`, …). `div` = cadangan, bukan pelarian.

**File contoh:** [skill-html/05_layout.html](./skill-html/05_layout.html)

---

## 6. Navigasi & tautan

| Pola | Fungsi |
|------|--------|
| `<a href="https://…">` | Ke alamat luar / halaman lain |
| `<a href="#id">` | **Tautan jangkar** — loncat ke `id` di halaman sama |
| `<nav>` | Wadah menu |

**File contoh:** [skill-html/06_navigasi.html](./skill-html/06_navigasi.html)

**Latihan:** klik semua menu di contoh. Kalau tidak loncat — cek `href` vs `id` (huruf harus cocok). Skill ini dipakai lagi di **P10**.

---

## 7. Media

| Tag | Fungsi |
|-----|--------|
| `<img src="…" alt="…">` | Gambar · `alt` = teks alternatif |
| `<figure>` + `<figcaption>` | Media + keterangan |

**File contoh:** [skill-html/07_media.html](./skill-html/07_media.html)  
(gambar contoh: [skill-html/assets/placeholder.svg](./skill-html/assets/placeholder.svg))

**Trap:** `alt` kosong pada gambar penting · path `src` salah.

---

## 8. Formulir & data

| Tag | Fungsi |
|-----|--------|
| `<form>` | Wadah input |
| `<label for="…">` | Label manusia (hubungkan ke `id`) |
| `<input name="…" type="…">` | Isian · `name` = identitas data |
| `<textarea>` | Teks panjang |
| `<button type="submit">` | Kirim |

**File contoh:** [skill-html/08_formulir.html](./skill-html/08_formulir.html)

Di S1 awal: yang dinilai sering **struktur jujur** (label + name), bukan “email benar-benar sampai.” Diperdalam di **P11**.

---

## 9. Atribut lintas kelompok

| Atribut | Fungsi |
|---------|--------|
| `id` | Alamat unik (nav `#` · target JS) |
| `class` | Label untuk CSS/JS (boleh banyak elemen) |
| `lang` | Bahasa |
| `href` / `src` | Tujuan tautan / sumber file |

Typo satu huruf di `id` = drama loncatan & JS (P10, P13).

---

## 10. Peta cepat

| Butuh | Baca | File |
|-------|------|------|
| Halaman dari nol | §1 | `01_boilerplate.html` |
| Kepala/isi/kaki/bagian | §2 | `02_semantik.html` |
| Paragraf & penekanan | §3 | `03_tipografi.html` |
| Poin / langkah | §4 | `04_daftar.html` |
| Wadah generik | §5 | `05_layout.html` |
| Menu loncat | §6 | `06_navigasi.html` |
| Gambar | §7 | `07_media.html` |
| Nama/email/pesan | §8 | `08_formulir.html` |

---

## 11. Checklist skill (luar jam)

- [ ] Bisa buka semua file di `skill-html/` di browser  
- [ ] Mengerti beda `title` (tab) vs `h1` (halaman)  
- [ ] Bisa tunjuk `header` / `main` / `section` / `footer` di contoh semantik  
- [ ] Tidak mengganti semua jadi `div` tanpa alasan  
- [ ] Klik nav di `06_navigasi.html` berhasil  
- [ ] Form di `08_formulir.html`: paham `label` + `name`  
- [ ] Siap masuk P03 tanpa panik “ini tag apa?”  

---

## 12. Hubungan ke pertemuan (kelas tetap yang utama)

| Materi kelas | Yang diulang / diperdalam |
|--------------|---------------------------|
| P01 | Kerangka `index.html` ≈ boilerplate |
| P03 | Kenali tag di hasil generate — jangan hapal buta; bandingkan ke kelompok ini |
| P07 | Semantik resmi + spek |
| P08–P09 | CSS — jangan bongkar semantik |
| P10 | Multi-section + `#` |
| P11 | Form jujur |
| P13 | JS menempel ke elemen yang sudah kamu kenali |

---

## Satu line

> **Luar jam: kenali alatnya.**  
> **Di kelas: pakai alat itu untuk bernalar dan membangun menurut spek.**

— **Skill pendukung HTML · CPLF Base 4JP**
