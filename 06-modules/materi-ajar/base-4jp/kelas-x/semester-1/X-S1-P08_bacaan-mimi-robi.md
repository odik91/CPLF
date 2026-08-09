# Bacaan Pendamping — X-S1-P08  
## Mimi & Robi: Baju Tanpa Ganti Tulang, & Godaan “Div Biar Gampang”

| Field | Isi |
|-------|-----|
| Kode | X-S1-P08 — CSS Dasar |
| Pertemuan | **8 / 34** · Basis **4JP** |
| Status | Naskah humor · istilah penuh · sketch menyusul |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P08_css-dasar_siswa.md](./X-S1-P08_css-dasar_siswa.md)  
**Modul:** [X-S1-P08 …](../../../base-4jp/kelas-x/semester-1/X-S1-P08_css-dasar.md)

---

Halo. Mimi.

Robi datang dengan HTML semantik yang sudah rapi — dan mood *fashion week*.

> “Tulang sudah jujur. Hari ini aku kasih baju. Kalau perlu, aku ganti tulangnya juga. Demi *aesthetic*.”

Aku:

> “Spoiler: mengganti tulang demi baju = operasi plastik darurat di lab komputer. Biasanya berakhir menangis di `div`.”

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | CSS = **presentasi**; HTML tetap **struktur** |
| Peranmu | Buat `style.css` · tautkan · style tanpa rusak semantik |
| Bukan | Flex/grid penuh · tema AI 200 baris · bongkar jadi `div` |

```text
HTML SAMA + CSS BEDA  →  UBAH 1 PROPERTI  →  TRAP  →  FILE TERPISAH  →  STYLE HALAMANMU
```

---

## Adegan 1 — Sulap dua wajah

Guru buka **satu** file HTML. Dua tab.

Tab A: tenang, huruf jelas.  
Tab B: warna beda total.

Robi:

> “Dua website berbeda!”

Guru:

> “Satu tulang. Dua baju.”

Itu momen *aha*: yang berubah bukan peran `header`/`section`. Yang berubah = **CSS** — *Cascading Style Sheets*, lembar gaya.

---

## Plot twist #1 — “CSS-ku tidak jalan”

Robi tulis CSS sehebat trailer Marvel. Refresh. …Tidak ada yang berubah.

> “Browser benci aku.”

Aku cek:

```html
<link rel="stylesheet" href="styl.css" />
```

Typo. Satu huruf. Drama selesai.

Twist: seringnya bukan “CSS mustahil.” Seringnya **tautannya** atau path-nya. Seperti prompt jaguar — input salah, output “aneh.”

---

## Adegan 2 — Godaan terlarang

Teman sebangku bisik:

> “Ganti semua `section` jadi `div`. Lebih gampang. Semua orang begitu.”

Robi hampir setuju. Antenna goyang.

Aku:

> **KRISIS!** (versi fashion police.)  
> “Kemarin kamu belajar semantik biar Google & teman ngerti. Hari ini kamu mau kabur ke lem kertas lagi demi warna?”

Selector bisa menarget `section`. Tidak perlu mengkhianati peran.

Plot twist: “lebih gampang” sering = “lebih malas menjaga makna.”

---

## Concept — baju punya nama

| Istilah | Arti manusia |
|---------|----------------|
| Presentasi | Kelihatan seperti apa |
| Struktur | Bagian ini perannya apa |
| Selector | “Yang mana yang mau kugaya?” |
| Properti | “Gaya apa?” (`color`, `font-size`, …) |

Robi menulis tiga aturan di kertas **sebelum** ngetik — vibes spek P04.

> “Judul lebih besar. Latar tenang. Jarak antar bagian.”

Baru CSS. Baru dia bisa jelaskan. Baru lulus vibe “bukan robocopy tema.”

---

## Adegan 3 — Peer: bukan “keren”, tapi terbaca

Teman review:

> “Warna teks hampir sama dengan latar. Aku harus menyipit.”

Robi mau bilang “itu *minimalist*.”

Aku:

> “Itu **belum terpenuhi** kriteria keterbacaan. Ingat: kata ‘keren’ sudah dilarang jadi hakim.”

Dia naikkan kontras. Judul tetap `h1`. Section tetap `section`. Baju baru, tulang sama.

---

## Reflect

| Pertemuan | Badge tidak resmi |
|-----------|-------------------|
| 07 | Nama bagian jujur |
| **08** | Baju tanpa ganti tulang |

Besok (P09): jarak & tata letak biar lebih enak dibaca — masih CSS, masih hormati semantik.

---

## Exit

1. Beda HTML vs CSS: …  
2. Tiga properti + fungsi: …  
3. Godaan yang kutolak: …

Satu line:

> **CSS mengubah presentasi. HTML menjaga struktur.**  
> Kalau harus merusak semantik demi gaya — itu bukan style. Itu panik.

— **Mimi** 🐾  
*(Robi menamai file: `baju-bukan-operasi-tulang.css` — lebay, tapi path-nya benar.)*
