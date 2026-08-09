# Handout Siswa — X-S1-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **10/34**

**Modul:** [X-S1-P10_halaman-multi-section.md](../../../base-4jp/kelas-x/semester-1/X-S1-P10_halaman-multi-section.md)

**Bacaan:** [X-S1-P10_bacaan-mimi-robi.md](./X-S1-P10_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “satu gulungan teks tanpa peta” → “**beberapa section bermakna** + **navigasi static** agar pembaca bisa loncat.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut multi-section; `id`; `href="#…"`; `nav` |
| **C2** | Memahami | Menjelaskan kenapa halaman panjang butuh peta bagian |
| **C3** | Menerapkan | Membangun 2–3 section + nav yang cocok `id` |
| **C4** | Menganalisis | Menemukan tautan rusak / section kosong / nav palsu |
| **C5** | Mengevaluasi | Mencocokkan ke spek bagian + navigasi bisa dipakai |
| **C6** | Mencipta | Menyusun halaman multi-section milik sendiri |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Form → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Multi-section** | Satu halaman, beberapa bagian bermakna |
| **`id`** | Alamat unik sebuah bagian di halaman |
| **Tautan jangkar** | `href="#tentang"` → loncat ke `id="tentang"` |
| **Navigasi in-page** | Menu di halaman yang sama (bukan ganti file) |
| **`nav`** | Tempat kumpulan tautan navigasi |

### Trap hari ini

- Tombol/`div` yang kelihatan klik tapi tidak ada `href`  
- Typo: `#kontak` vs `id="contact"`  
- Satu `section` raksasa berisi semua topik  

---

## 3. Alur (180 menit)

```text
Orientation → Gulungan vs multi-section
  → Klik #… live
  → Trap tautan rusak
  → Concept id + jangkar + nav
  → Peta kertas → Build 2–3 section → peer klik → Exit
```

---

## 4. Lembar peta (kertas dulu)

| Nama bagian | `id` (huruf kecil) | Isi singkat (1 kalimat) |
|-------------|--------------------|-------------------------|
| | | |
| | | |
| | | |

---

## 5. Kriteria penerimaan

- [ ] Ada **2–3** `section` bermakna  
- [ ] Tiap section: `id` unik + `h2`  
- [ ] Ada `nav` + `href="#…"` yang cocok  
- [ ] Peer klik: tiap tautan loncat benar  
- [ ] Semantik + keterbacaan tetap dihormati  
- [ ] Bisa menjelaskan peta bagian → `id` → isi  

---

## 6. Kerangka (mulai dari sini)

```html
<nav>
  <ul>
    <li><a href="#tentang">Tentang</a></li>
    <li><a href="#layanan">Layanan</a></li>
    <li><a href="#kontak">Kontak</a></li>
  </ul>
</nav>

<section id="tentang">
  <h2>Tentang</h2>
  <p>…</p>
</section>
```

**Belum:** banyak file HTML · library scroll · form penuh (itu P11).

---

## 7. Exit ticket

1. Tautan jangkar = …  
2. Daftar `id` sectionku: …  
3. Godaan yang kutolak: …

## 8. Preview P11

Form HTML — input sebagai data.

---

_Peta yang jujur. Loncatan yang benar. Bukan menu palsu._
