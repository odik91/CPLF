# Materi Guru Lengkap — X-S1-P10 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P10_halaman-multi-section_siswa.md](./X-S1-P10_halaman-multi-section_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P10_bacaan-mimi-robi.md](./X-S1-P10_bacaan-mimi-robi.md)

**Modul:** [X-S1-P10_halaman-multi-section.md](../../../base-4jp/kelas-x/semester-1/X-S1-P10_halaman-multi-section.md)

**Materi pendukung sumber:** [X-S1-P10_halaman-multi-section.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P10_halaman-multi-section.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **multi-section**, **`id`**, **tautan jangkar**, **navigasi in-page** — sebut nama level Bloom + kode.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P10 — Halaman Multi-Section & Navigasi Static

| Field | Isi |
|-------|-----|
| Kode | X-S1-P10 |
| Basis | **4JP** · Pertemuan **10/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “satu gulungan teks tanpa peta” → “beberapa section bermakna + navigasi static (`href="#…"`).”

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

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Form → **P11**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P09 · *Halaman butuh peta* | |
| 10–30 | **Scaffold teori** | C2 | Gulungan vs 3 section + nav · tebak `id` | |
| 30–50 | **Experience** | C2–C3 | Klik `#…` live · amati loncatan | |
| 50–65 | **Trap + Q** | C4 | Tombol palsu · typo id · section raksasa · JS scroll | |
| 65–85 | **Clarify + Concept** | C2 | `id` unik · jangkar · nav · isi = spek | |
| 85–95 | **Practice mini** | C3 | Peta 2–3 bagian di kertas | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do 3 section + nav · uji klik | |
| 120–165 | **Practice** | C3–C6 | Build · peer loncatan & spek | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P11 | |

## Cognitive Trap

Nav = hiasan / tombol tanpa tautan benar; atau satu section untuk semua.

## Guiding Questions

1. Peran tiap section?  
2. `href` cocok `id`?  
3. Klik loncat benar?

## Exit Ticket

1. Tautan jangkar = …  
2. Daftar `id` sectionku  
3. Godaan yang ditolak  

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi klik · Penalaran.

## Catatan Guru

Pecah gulungan jadi section. `id` unik. Peer wajib klik. Preview P11 form.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

`href="#tentang"` ↔ `id="tentang"` — cocok persis.  
Nav palsu = trap.  
Satu halaman dulu; multi-file parkir.

### 2. Recall

P07 section bermakna · P09 flex nav · hari ini: isi 2–3 bagian + loncat.

### 3. Etika

No HTML “jadi” sebagai kunci. Live kerangka. Peer klik nav.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: napas & layout. Hari ini: peta — beberapa bagian + cara loncat tanpa ganti file."
Recall: 1 siswa sebut apa itu section (P07).

[1 — Scaffold 10–30]
Proyeksi A: satu main panjang tanpa id/nav.
Proyeksi B: nav + 3 section id="tentang|layanan|kontak".
"Kalau pembaca mau ke Kontak dulu — mana yang lebih manusiawi?"
We do: tebak kenapa klik "Layanan" gagal jika id="Layanan" vs href="#layanan".

[2 — Experience 30–50]
Demo klik. Tunjuk URL dapat #tentang.
Siswa coba di file contoh singkat (atau playground).

[3 — Trap 50–65]
A: <div class="btn">Tentang</div> — kelihatan tombol, tidak loncat.
B: href="#kontak" tapi id="contact" — drama.
C: satu section berisi tentang+layanan+kontak.
D: "Pakai JS smooth scroll dulu biar keren."
Debat: obat = <a href> + id cocok + pecah section sesuai spek. JS parkir.

[4 — Clarify + Concept 65–85]
Papan:
- Multi-section = beberapa bagian bermakna
- id = alamat unik
- Tautan jangkar = href="#alamat"
- nav = tempat peta tautan
- Isi section harus ada (spek singkat)

[5 — Practice mini 85–95]
Kertas: 2–3 baris | Nama bagian | id | 1 kalimat isi |

[6–7 — Scaffold + Practice 105–165]
I do: tempel kerangka 3 section + nav, uji 3 klik.
You do: bangun/pecah halaman profil/company jadi 2–3 section + nav.
Peer: klik semua tautan + cek spek isi.
Tolak: multi-file website; library scroll; section kosong; rusak semantik.

[8 — Exit 165–180]
Exit ticket + preview P11: form — input sebagai data.
```

### Model HTML (jangan dibagikan utuh sebagai “kunci”)

```html
<nav aria-label="Bagian halaman">
  <ul>
    <li><a href="#tentang">Tentang</a></li>
    <li><a href="#layanan">Layanan</a></li>
    <li><a href="#kontak">Kontak</a></li>
  </ul>
</nav>
<main>
  <section id="tentang"><h2>Tentang</h2><p>…</p></section>
  <section id="layanan"><h2>Layanan</h2><p>…</p></section>
  <section id="kontak"><h2>Kontak</h2><p>…</p></section>
</main>
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Typo `#` vs `id` | Tidak minta uji klik |
| `id` dobel | Mengabaikan “unik” |
| Nav `button` tanpa tautan | Memuji tampilan |
| Section kosong | “Nanti diisi” diloloskan |
| Ganti semua ke `div` | “Biar gampang” |

### 6. Checklist exit guru

- [ ] Demo gulungan vs multi-section  
- [ ] Trap tautan / tombol palsu  
- [ ] Practice 2–3 section + uji klik  
- [ ] Peer spek + loncatan  
- [ ] Preview P11  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran struktur  
**Kait:** Memberi peta bagian = menghormati waktu pembaca.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
