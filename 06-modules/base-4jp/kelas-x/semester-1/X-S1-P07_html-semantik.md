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

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · recall P06 (1 siswa: apa itu langkah eksplisit?) · “bagian halaman juga harus eksplisit” | |
| 10–30 | **Scaffold teori** | I do: kerangka kosong bermakna (`header`→`main`→`section`→`footer`) vs “sup `div`” · We do: beri nama peran 1 blok | Side-by-side di papan/proyektor |
| 30–50 | **Experience** | Baca 2 cuplikan HTML (bermakna vs acak) — prediksi isi tanpa lihat browser | Seperti baca algoritma |
| 50–65 | **Trap + Q** | “Di browser kelihatan sama — jadi semantik tidak penting?” | Serang asumsi tampilan = struktur |
| 65–85 | **Clarify + Concept** | Semantik · hierarki `h1`–`h3` · satu `h1` · spek → peta section | TTS per konsep |
| 85–95 | **Practice mini** | Dari spek 3–5 poin (warung/profil MA): gambar peta bagian (kertas) | Sebelum ketik |
| 95–105 | Transisi | Buka artefak P03/P04 atau file baru | |
| 105–120 | **Scaffold praktik** | I do: spek → kerangka HTML semantik (think-aloud) · uji kriteria penerimaan struktur | |
| 120–165 | **Practice** | Lengkapi company/profil: minimal `header`, `main` + 2 `section`, `footer` · isi sesuai spek · peer baca struktur | You do |
| 165–180 | Reflect + Exit | Exit ticket · preview P08 (rapi tampilan tanpa rusak struktur) | |

**Adaptasi ketat:** jangan potong Trap atau Practice kerangka — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md)

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
