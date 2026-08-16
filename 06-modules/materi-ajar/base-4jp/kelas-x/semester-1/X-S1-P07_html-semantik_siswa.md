# Handout Siswa — X-S1-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **7/34**

**Modul:** [X-S1-P07_html-semantik.md](../../../base-4jp/kelas-x/semester-1/X-S1-P07_html-semantik.md)

**Bacaan:** [X-S1-P07_bacaan-mimi-robi.md](./X-S1-P07_bacaan-mimi-robi.md)

**Panduan tag HTML (skill luar jam + file contoh):** [00_Bacaan_Panduan_HTML.md](./00_Bacaan_Panduan_HTML.md) · [skill-html/](./skill-html/)

---

## 1. Tujuan

Dari “asal tampil / semua pakai `div`” → “struktur HTML **bermakna (semantik)** yang selaras spek.”


## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut landmark (`header`/`main`/`section`/`footer`) dan aturan satu `h1` |
| **C2** | Memahami | Menjelaskan semantik = nama sesuai peran; alasan untuk spek, tim, CSS, dan mesin pencari (SEO) |
| **C3** | Menerapkan | Membangun kerangka company/profil sesuai spek |
| **C4** | Menganalisis | Membandingkan HTML bermakna vs sup `div`; menemukan hierarki judul yang salah |
| **C5** | Mengevaluasi | Mencentang kriteria penerimaan struktur; menilai apakah spek terbaca dari HTML saja |
| **C6** | Mencipta | Menyusun peta bagian + halaman semantik milik sendiri |

**Fokus utama:** C2–C5 · **Puncak:** C3–C6

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta  
> Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)


---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **HTML semantik** | Nama tag menjelaskan **peran** isi (bukan kotak generik) |
| **Struktur dokumen** | `html` → `head` (info tab) → `body` (yang tampil) |
| **Hierarki judul** | Satu `h1` (judul utama); `h2` bagian; `h3` anak bagian |
| **Landmark** | `header` (kepala) · `main` (isi utama) · `section` (bagian) · `footer` (kaki) · `nav` (menu, pengantar) |

### Trap hari ini

“Di browser kelihatan sama, jadi semantik tidak penting.”  
→ Tampilan bisa mirip; **peran & keterbacaan struktur** tetap beda (spek, kerja tim, siap CSS nanti).

### Hubungkan

- P06: langkah harus eksplisit → bagian halaman juga  
- P04: kriteria penerimaan = syarat centang, bukan “bagus”  
- P08: CSS = tampilan — **belum** hari ini  

---

## 3. Alur (180 menit)

```text
Orientation → contoh bermakna vs div
  → Baca HTML tanpa browser dulu
  → Trap “kelihatan sama”
  → Concept + peta spek di kertas
  → Bangun kerangka company/profil
  → Peer baca struktur → Exit
```

---

## 4. Lembar — peta dari spek (kertas dulu)

Spek singkat (3–5 poin) — warung / profil MA / lanjut artefakmu:

1. …  
2. …  
3. …  
4. …  
5. …

| Bagian | Judul yang akan jadi `h1`/`h2` | Tag landmark |
|--------|--------------------------------|--------------|
| Kepala | | `header` |
| Bagian A | | `section` di dalam `main` |
| Bagian B | | `section` di dalam `main` |
| Kaki | | `footer` |

---

## 5. Kriteria penerimaan struktur (centang)

- [ ] Satu `h1` memuat nama usaha/profil  
- [ ] Ada `header`, `main`, `footer`  
- [ ] Minimal dua `section` di `main`, masing-masing ada `h2`  
- [ ] Isi mengikuti spek (bukan teks acak)  
- [ ] Teman bisa sebut peran tiap bagian besar **hanya** dari HTML  

---

## 6. Praktik — kerangka

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>…</title>
</head>
<body>
  <header>
    <h1>…</h1>
  </header>
  <main>
    <section>
      <h2>…</h2>
      <p>…</p>
    </section>
    <section>
      <h2>…</h2>
      <ul>
        <li>…</li>
      </ul>
    </section>
  </main>
  <footer>
    <p>…</p>
  </footer>
</body>
</html>
```

**Belum:** CSS, warna, animasi.

**Peer:** tukar file — tebak spek dari struktur. Catat yang membingungkan → revisi.

---

## 7. Pertanyaan pemandu

1. Peran bagian ini: kepala, isi utama, atau kaki?  
2. Judul mana `h1`, mana `h2`?  
3. Bisakah spek ditebak dari tag + judul saja?

---

## 8. Exit ticket

1. Alasan pakai `section` + `h2` bukan semua `div`: …  
2. Kesalahan hierarki yang kuhindari: …  
3. Bagian spek yang sudah ketemu di HTML: …

## 9. Preview P08

CSS membuat tampilan rapi — **tanpa** merusak struktur semantik hari ini.

**Skill CSS (luar jam · mulai setelah pertemuan ini):** [00_Bacaan_Panduan_CSS.md](./00_Bacaan_Panduan_CSS.md) · [skill-css/](./skill-css/)

---

_Peta spek dulu, baru ketik. Jangan salin halaman jadi tanpa paham peran tag._
