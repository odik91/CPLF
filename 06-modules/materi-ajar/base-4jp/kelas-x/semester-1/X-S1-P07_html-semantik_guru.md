# Materi Guru Lengkap — X-S1-P07 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P07_html-semantik_siswa.md](./X-S1-P07_html-semantik_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P07_bacaan-mimi-robi.md](./X-S1-P07_bacaan-mimi-robi.md)

**Modul:** [X-S1-P07_html-semantik.md](../../../base-4jp/kelas-x/semester-1/X-S1-P07_html-semantik.md)

**Materi pendukung sumber:** [X-S1-P07_html-semantik.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P07_html-semantik.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: istilah penuh — **HTML semantik**, **hierarki judul**, **struktur dokumen**, **kriteria penerimaan**.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P07 — HTML Semantik

| Field | Isi |
|-------|-----|
| Kode | X-S1-P07 |
| Basis | **4JP** · Pertemuan **7/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “asal tampil / semua `div`” → “struktur HTML **bermakna** selaras spek.”

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · recall P06 · “bagian halaman = eksplisit” | |
| 10–30 | **Scaffold** | Kerangka bermakna vs sup `div` · We do nama peran 1 blok | |
| 30–50 | **Experience** | Baca 2 cuplikan HTML — prediksi isi | Tanpa browser dulu |
| 50–65 | **Trap** | “Kelihatan sama = semantik tidak penting?” | |
| 65–85 | **Clarify + Concept** | Semantik · `h1`–`h3` · landmark · spek→peta | |
| 85–95 | **Practice mini** | Peta bagian di kertas dari spek | |
| 95–105 | Transisi | Editor + artefak | |
| 105–120 | **Scaffold praktik** | I do: spek → kerangka semantik | |
| 120–165 | **Practice** | Lengkapi profil/company · peer baca struktur | |
| 165–180 | Reflect + Exit | Preview P08 CSS | |

**Adaptasi ketat:** jangan potong Trap / Practice.

---

## Istilah

| Istilah | Arti |
|---------|------|
| HTML semantik | Tag menjelaskan **peran** isi |
| Struktur dokumen | `html` → `head` → `body` |
| Hierarki judul | Satu `h1`; `h2` bagian; `h3` anak |
| Landmark | `header` · `main` · `section` · `footer` · (`nav`) |

## Cognitive Trap

Tampilan sama ≠ struktur sama / tidak penting.

## Guiding Questions

1. Peran bagian ini apa?  
2. `h1` vs `h2` sesuai spek?  
3. Teman bisa tebak spek dari tag+judul saja?

## Exit Ticket

1. Alasan `section`+`h2` bukan semua `div`  
2. Kesalahan hierarki yang dihindari  
3. Bagian spek yang sudah ketemu di HTML  

## Formatif

**Observasi** · **Penalaran** · **Komunikasi** (internal OBS/REA/COM).

## Catatan Guru

Tolak CSS. AI setelah peta spek. Peer baca HTML seperti algoritma.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

Semantik = peran. Manfaat: baca kode, akses dasar, spek, siap CSS.  
Trap: dua file tampil mirip — satu bermakna, satu `div` soup.

### 2. Recall

P06 langkah eksplisit · P04 kriteria penerimaan · P03 kenal nama tag.

### 3. Etika

Jangan kirim halaman jadi penuh. Live kerangka. Ikuti spek siswa. CSS → P08.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: langkah harus eksplisit. Hari ini: bagian halaman juga."
Recall P06 1 siswa.

[1 — Scaffold 10–30]
Proyeksi A: header/main/section/footer.
Proyeksi B: div/div/div.
"Tanpa buka browser — mana yang menjelaskan peran?"
We do: satu blok misterius → siswa usul nama tag.

[2 — Experience 30–50]
Bagikan 2 cuplikan (cetak/proyektor). Prediksi: ini tentang apa? Judul utama mana?
Baru buka browser (opsional) — trap disiapkan.

[3 — Trap 50–65]
Kalau tampilan hampir sama: "Jadi semantik sia-sia?"
Arahkan: spek, baca kode, akses, kerja tim, CSS nanti.
Bukan kuliah WCAG panjang.

[4 — Clarify + Concept 65–85]
Papan: semantik | hierarki judul | landmark.
Aturan kelas: satu h1.
Spek 4 poin warung → panah ke header/section/footer.

[5 — Practice mini 85–95]
Siswa gambar peta kotak: Kepala / Isi (2 bagian) / Kaki — isi judul dari spek.
Belum ketik jika belum selesai peta.

[6 — Transisi 95–105]
Buka file P03/P04 atau buat baru.

[7 — Scaffold praktik 105–120]
I do ketik kerangka dari peta.
Uji kriteria: satu h1, header, main, 2 section+h2, footer.
Think-aloud: "CSS belum. Struktur dulu."

[8 — Practice 120–165]
Siswa lengkapi sesuai spek (bukan generate buta).
Peer: tutup penjelasan oral — tebak peran dari HTML.
Revisi tag/judul.
Tolak: styling; 10 section tanpa spek; loncat heading.

[9 — Exit 165–180]
Exit ticket + preview P08: presentasi tanpa merusak struktur.
```

### Cuplikan buruk (model internal)

```html
<body>
  <div>
    <div><p><b>Warung Mie</b></p></div>
    <div><div>Tentang</div><div>teks...</div></div>
    <div>kontak</div>
  </div>
</body>
```

### Cuplikan baik (model)

```html
<body>
  <header><h1>Warung Mie Sehat MA Al-Hikmah</h1></header>
  <main>
    <section>
      <h2>Tentang kami</h2>
      <p>…</p>
    </section>
    <section>
      <h2>Menu</h2>
      <ul><li>…</li></ul>
    </section>
  </main>
  <footer><p>Kontak: …</p></footer>
</body>
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Semua `div` | “Yang penting tampil” |
| Banyak `h1` / loncat ke `h4` | Tidak koreksi hierarki |
| Generate AI penuh tanpa peta | Meladeni |
| Minta CSS | Ikut styling di P07 |
| Isi tidak sesuai spek | Memuji visual |

### 6. Checklist exit guru

- [ ] Side-by-side bermakna vs `div`  
- [ ] Trap tampilan sama  
- [ ] Peta spek sebelum ketik  
- [ ] Practice landmark + 2 section  
- [ ] Peer baca struktur  
- [ ] Preview P08  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran struktur  
**Kait:** Nama bagian yang jujur lebih terhormat daripada “kelihatan beres.”

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
