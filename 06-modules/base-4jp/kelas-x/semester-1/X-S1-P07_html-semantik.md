# X-S1-P07 — HTML Semantik (struktur halaman yang bermakna)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P07 |
| Basis | **4JP** · Pertemuan **7/34** |
| Unit | X1.2 / X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1 (draft) |
| MM | MM-11 (lanjutan), MM-23 (spek → struktur) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP (di freeze 2JP, HTML tebal lebih ke S2) · jembatan P03–P06 |

## Learning Transformation

Dari “asal ada di layar / semua pakai `div`” → “struktur HTML **bermakna** (semantik) yang bisa dibaca manusia & mesin, selaras spek.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut landmark (`header`/`main`/`section`/`footer`) dan aturan satu `h1` |
| **C2** | Memahami | Menjelaskan semantik = nama sesuai peran; alasan untuk spek, tim, CSS, dan mesin pencari (SEO) |
| **C3** | Menerapkan | Membangun kerangka company/profil sesuai spek |
| **C4** | Menganalisis | Membandingkan HTML bermakna vs sup `div`; menemukan hierarki judul yang salah |
| **C5** | Mengevaluasi | Mencentang kriteria penerimaan struktur; menilai apakah spek terbaca dari HTML saja |
| **C6** | Mencipta | Menyusun peta bagian + halaman semantik milik sendiri |

**Fokus utama:** C2–C5 · **Puncak:** C3–C6

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P06 | |
| 10–30 | **Scaffold teori** | C2 | Bermakna vs sup `div` · We do nama peran | |
| 30–50 | **Experience** | C2–C4 | Baca 2 cuplikan HTML tanpa browser dulu | |
| 50–65 | **Trap + Q** | C4 | “Kelihatan sama = semantik sia-sia?” | + isyarat mesin pencari |
| 65–85 | **Clarify + Concept** | C2 | Semantik · hierarki · landmark · SEO ringkas | |
| 85–95 | **Practice mini** | C3 | Peta bagian dari spek (kertas) | |
| 95–105 | Transisi | — | Editor | |
| 105–120 | **Scaffold praktik** | C2–C3 | Spek → kerangka semantik | |
| 120–165 | **Practice** | C3–C6 | Lengkapi profil · peer baca struktur | |
| 165–180 | Reflect + Exit | C5 | Exit ticket · preview P08 | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P03 | Sentuh tag — belum paham *kenapa* nama tag penting |
| P04 | Spek + kriteria penerimaan → hari ini: bagian halaman punya **nama peran** |
| P05 | Klarifikasi sebelum patch |
| P06 | Algoritma = langkah eksplisit · HTML semantik = **bagian eksplisit** |
| **P07** | Bangun / rapikan kerangka company–profil sesuai spek |
| P08 | CSS = presentasi (pisah dari struktur) |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Kuliah semua tag HTML | Fokus: kerangka dokumen + hierarki judul + `header` / `main` / `section` / `footer` (+ `nav` singkat) |
| CSS / warna / font | Parkir ke **P08** |
| Generate ulang full page AI tanpa baca | Rapikan / lengkapi struktur berdasar **spek** |
| “Semantik” sebagai kata hafalan kosong | Semantik = **nama bagian sesuai peran isinya** |

**Adaptasi ketat:** jangan potong Trap atau Practice kerangka — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti untuk siswa |
|---------|------------------|
| **HTML semantik** | Memakai nama tag yang **menjelaskan peran** isi (bukan sekadar kotak generik) |
| **Struktur dokumen** | Susunan: `html` → `head` (meta/judul tab) → `body` (yang tampil) |
| **Hierarki judul** | `h1` = judul utama halaman (biasanya satu); `h2` = bagian; `h3` = anak bagian |
| **Bagian landmark** | `header` (kepala), `main` (isi utama), `section` (bagian bertema), `footer` (kaki), `nav` (menu — pengantar) |

**Bukan semantik (hari ini):** menumpuk semua di `div` tanpa peran; loncat `h1` → `h4`; banyak `h1`.

---

## Cognitive Trap

**Asumsi:** Kalau di browser kelihatan sama, struktur tidak penting.  
**Aman:** Puji halaman yang “muncul”; challenge hanya pada **tidak bisa dijelaskan peran bagian** / tidak selaras spek.

---

## Guiding Questions

1. Bagian ini **perannya** apa — kepala, isi utama, atau kaki?  
2. Judul mana yang `h1`, mana `h2` — sesuai spek?  
3. Bisakah teman menebak isi spek hanya dari **nama tag + judul** (tanpa CSS)?

---

## Props / Fallback

- Proyektor · 2 file contoh (semantik vs sup `div`) · spek warung/profil  
- Offline: cetak cuplikan HTML; ketik belakangan  

---

## Target praktik (You do)

Kerangka minimal (sesuaikan spek siswa):

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
    <!-- opsional: nav singkat -->
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

**Kriteria penerimaan struktur (contoh — sesuaikan spek):**

- [ ] Ada satu `h1` yang memuat nama usaha/profil  
- [ ] Ada `header`, `main`, `footer`  
- [ ] Minimal dua `section` di dalam `main`, masing-masing ber-`h2`  
- [ ] Isi mengikuti spek (bukan teks acak)  
- [ ] Teman bisa sebutkan peran tiap bagian besar tanpa dijelaskan oral  

---

## Exit Ticket

1. Satu alasan memakai `section` + `h2` bukan semua `div`  
2. Satu kesalahan hierarki judul yang kuhindari hari ini  
3. Satu bagian spek yang sudah “ketemu” di HTML-ku  

---

## Formatif (rubrik)

**Observasi** (baca struktur) · **Penalaran** (kenapa tag itu) · **Komunikasi** (jelaskan peta bagian ke teman).  
Internal: OBS · REA · COM — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Jangan loncat ke CSS.  
- AI boleh bantu *setelah* peta spek ada (aturan P05).  
- Peer: baca HTML seperti algoritma — prediksi peran sebelum buka browser.
