# Bacaan Pendamping — X-S1-P10  
## Mimi & Robi: Gulungan Tanpa Peta, & Godaan “Tombol yang Cuma Kelihatan Klik”

| Field | Isi |
|-------|-----|
| Kode | X-S1-P10 — Halaman Multi-Section |
| Pertemuan | **10 / 34** · Basis **4JP** |
| Status | Naskah humor · istilah penuh · sketch menyusul |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P10_halaman-multi-section_siswa.md](./X-S1-P10_halaman-multi-section_siswa.md)  
**Modul:** [X-S1-P10 …](../../../base-4jp/kelas-x/semester-1/X-S1-P10_halaman-multi-section.md)

---

Halo. Mimi.

Robi punya halaman yang sudah bernapas (P09). Warna oke. Jarak oke. Isi… satu gulungan epik dari atas sampai “kontak” yang tersembunyi di dasar laut.

Teman:

> “Aku cuma mau baca Layanan. Harus scroll kayak quest final boss.”

Robi:

> “Sabar adalah bagian dari UX.”

Aku:

> “Sabar bukan fitur. **Peta** itu fitur.”

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | 2–3 section bermakna + navigasi static yang benar-benar loncat |
| Peranmu | Peta di kertas → `id` + `nav` → uji klik |
| Bukan | Website 5 file · JS scroll library · tombol palsu |

```text
GULUNGAN VS SECTION+NAV  →  KLIK #…  →  TRAP  →  PETA KERTAS  →  BUILD
```

---

## Adegan 1 — Sulap loncatan

Guru klik “Kontak” di `nav`. Layar loncat. URL dapat `#kontak`.

Robi:

> “Magic.”

Guru:

> “Bukan magic. **Tautan jangkar**: `href="#kontak"` mencari `id="kontak"`.”

Plot twist kecil: “menu” tanpa `href` yang cocok = poster bioskop. Bagus dipandang. Tidak mengantar ke mana-mana.

---

## Plot twist #1 — Tombol palsu

Robi buat:

```html
<div class="btn">Tentang</div>
```

CSS-nya mewah. Kursor jadi tangan. Klik… diam.

> “Browser benci aku lagi.”

Aku:

> “Browser patuh. Kamu yang kasih hiasan tanpa alamat.”

Ganti jadi `<a href="#tentang">`. Loncat. Drama selesai. Antenna malu (progress).

---

## Adegan 2 — Typo satu huruf

`href="#layanan"` · `id="Layanan"` — kadang jalan, kadang drama case. Lebih parah: `id="services"` sementara menu bilang Layanan.

Teman uji:

> “Menu bohong.”

**Kriteria penerimaan** hari ini termasuk: peer **klik** semua tautan. Bukan “keliatan ada nav.”

---

## Concept — peta punya nama

| Istilah | Arti manusia |
|---------|----------------|
| Multi-section | Beberapa bagian, masing-masing punya peran |
| `id` | Alamat bagian |
| Tautan jangkar | “Antar aku ke alamat itu” |
| Navigasi in-page | Loncat di halaman yang sama |
| `nav` | Tempat peta tautan |

Robi tulis di kertas dulu (vibes spek P04):

| Bagian | id | Isi |
|--------|-----|-----|
| Tentang | tentang | Siapa kami |
| Layanan | layanan | Apa yang ditawarkan |
| Kontak | kontak | Cara dihubungi |

Baru ngetik. Baru lulus vibe “bukan generate denah acak.”

---

## Adegan 3 — Godaan JS dulu

Chat:

> “Pakai smooth scroll library biar profesional.”

Aku:

> **KRISIS!** (versi GPS.)  
> “Kamu belum punya jalan yang benar, sudah mau efek kamera sinematik.”

Static dulu. `href` + `id`. Efek nanti — kalau perlu. Form (P11) juga nanti.

---

## Reflect

| Pertemuan | Badge tidak resmi |
|-----------|-------------------|
| 09 | Halaman yang bernapas |
| **10** | Halaman yang punya peta |

Besok (P11): form — input sebagai data. Bukan sekadar kotak cantik.

---

## Exit

1. Tautan jangkar = …  
2. Daftar `id` sectionku: …  
3. Godaan yang kutolak: …

Satu line:

> **Menu yang jujur mengantar.**  
> Kalau diklik tidak ke mana-mana — itu dekorasi, bukan navigasi.

— **Mimi** 🐾  
*(Robi menamai id terakhir: `kontak-bukan-dasar-laut` — lebay, tapi cocok dengan `href`-nya.)*
