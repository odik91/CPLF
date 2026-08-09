# X-S1-P10 — Halaman Multi-Section & Navigasi Static

| Field | Isi |
|-------|-----|
| Kode | X-S1-P10 |
| Basis | **4JP** · Pertemuan **10/34** |
| Unit | X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · lanjut P07–P09 (struktur + gaya → beberapa bagian + loncat) |

## Learning Transformation

Dari “satu gulungan teks panjang tanpa peta” → “**beberapa section bermakna** + **navigasi static** (`href="#…"`) agar pembaca bisa loncat antar bagian.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: multi-section; `id` pada bagian; tautan jangkar `href="#…"`; `nav` |
| **C2** | Memahami | Menjelaskan kenapa satu halaman panjang perlu peta bagian; beda loncat in-page vs ganti file |
| **C3** | Menerapkan | Membangun 2–3 `section` bermakna + menu `nav` yang mengarah ke `id` yang benar |
| **C4** | Menganalisis | Menemukan tautan rusak (`#` tidak cocok `id`), section kosong, atau nav palsu |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria: spek bagian terpenuhi + navigasi bisa dipakai |
| **C6** | Mencipta | Menyusun halaman multi-section milik sendiri (isi + id + nav) yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Form HTML → **P11** · Multi-halaman / router / JS scroll library → **bukan** hari ini

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P09 (napas/layout) · *Halaman butuh peta* | |
| 10–30 | **Scaffold teori** | C2 | I do: 1 gulungan vs 3 section + nav · We do: tebak `id` | |
| 30–50 | **Experience** | C2–C3 | Klik `#tentang` live · lihat URL & loncatan | |
| 50–65 | **Trap + Q** | C4 | Trap: tombol tanpa `href` · typo `id` · satu `section` raksasa · JS scroll dulu | |
| 65–85 | **Clarify + Concept** | C2 | `id` unik · tautan jangkar · `nav` + daftar tautan · isi section = spek | |
| 85–95 | **Practice mini** | C3 | Peta 2–3 bagian di kertas (nama · `id` · 1 kalimat isi) | |
| 95–105 | Transisi | — | Lab · buka artefak P07–P09 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: 3 section + `nav` `#…` · uji klik | |
| 120–165 | **Practice** | C3–C6 | Build 2–3 section + nav · peer uji loncatan & spek | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P11 (form / input) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P07–P09 | Semantik + CSS + keterbacaan |
| **P10** | Beberapa bagian + navigasi in-page |
| P11 | Form = input sebagai data |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Banyak file HTML / “website 5 halaman” dulu | Satu halaman, 2–3 section + loncat `#` |
| Tombol palsu / `onclick` / library scroll | `<a href="#id">` + `id` cocok |
| Section kosong “nanti diisi” | Tiap section punya isi sesuai spek singkat |
| Ganti semantik jadi `div` demi nav | `nav` + `section` tetap jujur |

**Adaptasi ketat:** jangan potong Trap “tautan rusak” atau Practice build — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Multi-section** | Satu halaman punya beberapa bagian (`section`) dengan peran jelas |
| **`id`** | Nama unik elemen di halaman — “alamat” bagian |
| **Tautan jangkar** (*anchor link* / fragment) | `href="#tentang"` loncat ke elemen `id="tentang"` |
| **Navigasi in-page** | Menu di halaman yang sama (bukan ganti file) |
| **`nav`** | Landmark navigasi — tempat kumpulan tautan |

### Contoh minimal (model)

```html
<header>
  <h1>Profil Majelis Kreatif</h1>
  <nav aria-label="Bagian halaman">
    <ul>
      <li><a href="#tentang">Tentang</a></li>
      <li><a href="#layanan">Layanan</a></li>
      <li><a href="#kontak">Kontak</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="tentang">
    <h2>Tentang</h2>
    <p>…isi sesuai spek…</p>
  </section>
  <section id="layanan">
    <h2>Layanan</h2>
    <p>…</p>
  </section>
  <section id="kontak">
    <h2>Kontak</h2>
    <p>…</p>
  </section>
</main>
```

---

## Cognitive Trap

**Asumsi:** Nav = hiasan / tombol yang “kelihatan klik” tanpa tautan benar; atau satu section berisi semua.  
**Aman:** Puji keinginan punya menu; challenge hanya pada **tautan tidak jalan** dan **bagian tanpa makna**.

---

## Guiding Questions

1. Tiap section: peran apa (sesuai spek)?  
2. Setiap item nav: `href` cocok dengan `id`?  
3. Klik menu: loncat ke bagian yang benar?

---

## Kriteria penerimaan multi-section (contoh)

- [ ] Ada **2–3** `section` bermakna (bukan satu gulungan)  
- [ ] Tiap section punya `id` unik + judul (`h2`)  
- [ ] Ada `nav` dengan tautan `href="#…"` yang cocok  
- [ ] Klik tiap tautan → loncat benar (uji peer)  
- [ ] Semantik + CSS keterbacaan P07–P09 **tetap** dihormati  
- [ ] Siswa menjelaskan peta: nama bagian → `id` → isi singkat  

---

## Exit Ticket

1. Satu kalimat: apa itu tautan jangkar (`href="#…"`)  
2. Daftar `id` sectionku hari ini  
3. Satu godaan yang kutolak (tombol palsu / typo id / JS scroll dulu)  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** klik nav · **Penalaran** (kenapa `id` harus cocok).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Bawa artefak yang sudah ada — pecah gulungan jadi section, jangan mulai kosong tanpa spek.  
- `id` unik, huruf kecil + strip disarankan (`tentang-kami`).  
- `aria-label` pada `nav` boleh singkat (aksesibilitas dasar) — jangan kuliah ARIA.  
- Preview P11: form & input sebagai data.  
