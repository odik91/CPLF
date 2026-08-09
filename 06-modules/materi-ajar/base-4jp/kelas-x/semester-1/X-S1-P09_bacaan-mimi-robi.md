# Bacaan Pendamping — X-S1-P09  
## Mimi & Robi: Halaman yang Bernapas, & Godaan “Tempel Flex Biar Kek Template”

| Field | Isi |
|-------|-----|
| Kode | X-S1-P09 — CSS Layout & Keterbacaan |
| Pertemuan | **9 / 34** · Basis **4JP** |
| Status | Naskah humor · istilah penuh · sketch menyusul |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P09_css-layout-keterbacaan_siswa.md](./X-S1-P09_css-layout-keterbacaan_siswa.md)  
**Modul:** [X-S1-P09 …](../../../base-4jp/kelas-x/semester-1/X-S1-P09_css-layout-keterbacaan.md)

---

Halo. Mimi.

Robi bangga dengan warna hijau kemarin.

> “Sudah CSS. Sudah estetis. Sudah… kenapa teman bilang matanya lelah?”

Aku lihat layarnyya. Teks melebar dari kiri monitor ke kanan. Section saling nempel seperti antrian yang lupa jaga jarak.

> “Bajumu bagus. Napasnya nol. Ini halaman asma.”

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | Keterbacaan = hierarki + jarak + lebar masuk akal |
| Peranmu | Perbaiki layout halamanmu · jelaskan 3 aturan |
| Bukan | Grid penuh · framework · absolute acak · flex template buta |

```text
SESAK VS BERNAPAS  →  UBAH JARAK/LEBAR  →  TRAP TEMPLATE  →  AUDIT  →  PERBAIKI
```

---

## Adegan 1 — Dua versi, satu tulang

Guru tampilkan versi A (sesak) dan B (bernapas). HTML sama. Warna hampir sama.

Robi:

> “B beda *vibe*.”

Guru:

> “Bukan vibe. B: ada **spacing**, ada **max-width**, judul punya **hierarki visual**.”

Plot twist kecil: yang menyelamatkan mata sering bukan palet baru — melainkan **jarak**.

---

## Plot twist #1 — “Kalau semua besar, pasti jelas”

Robi set `font-size: 32px` ke *semua* elemen.

> “Sekarang jelas!”

Teman:

> “Sekarang semuanya berteriak. Aku tidak tahu mana judul.”

**Hierarki visual** = ada yang lebih “atas.” Kalau semua naik pangkat jadi jenderal, tidak ada komandan.

---

## Adegan 2 — Godaan template

Chat AI mengirim 70 baris flex + grid “landing page profesional.”

Robi mau paste. Antenna bergetar senang.

Aku:

> **KRISIS!** (versi interior design.)  
> “Kamu bisa jelaskan baris ke-14? Tidak? Berarti itu bukan layoutmu. Itu kostum pinjaman.”

Dia pilih tiga aturan sendiri:

1. `max-width` biar baris tidak marathon  
2. `margin-bottom` antar `section`  
3. `display: flex` + `gap` hanya di `nav`

Refresh. Napas muncul. Dia bisa jelaskan. Lulus.

Twist: **flex boleh** — hari ini, untuk **satu kasus** yang kamu pahami. Bukan untuk menyamar jadi Bootstrap.

---

## Concept — napas punya nama

| Istilah | Arti manusia |
|---------|----------------|
| Keterbacaan | Mata tidak mogok |
| Hierarki visual | Judul > subjudul > isi |
| Spacing | Jarak — luar (`margin`) / dalam (`padding`) |
| max-width | “Jangan melebar sampai ke ujung dunia” |
| Flexbox (ringan) | Anak-anak berdiri sejajar dalam satu wadah |

---

## Adegan 3 — Peer: hakimnya keterbacaan

Teman:

> “Judul utama sudah beda. Section tidak nempel. Nav sejajar — dan kamu bisa bilang kenapa.”

Robi hampir bilang “keren.”

Aku:

> “Kata terlarang. Bilang: **kriteria keterbacaan terpenuhi**.”

Dia mengangguk. Antenna turun ke mode profesional (sebentar).

---

## Reflect

| Pertemuan | Badge tidak resmi |
|-----------|-------------------|
| 08 | Baju tanpa ganti tulang |
| **09** | Halaman yang bernapas |

Besok (P10): beberapa section + loncat antar bagian — masih static, masih hormati struktur.

---

## Exit

1. Hierarki visual = …  
2. Tiga properti layout + fungsi: …  
3. Godaan yang kutolak: …

Satu line:

> **Layout yang baik melayani pembaca.**  
> Kalau kamu tidak bisa jelaskan aturannya — itu bukan rapi. Itu pinjaman.

— **Mimi** 🐾  
*(Robi menamai class wadah: `page-yang-boleh-bernapas` — lebay, tapi `max-width`-nya benar.)*
