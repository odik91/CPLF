# Bacaan Pendamping — X-S1-P07  
## Mimi & Robi: Sup `div`, Judul Loncat, & Nama Bagian yang Jujur

| Field | Isi |
|-------|-----|
| Kode | X-S1-P07 — HTML Semantik |
| Pertemuan | **7 / 34** · Basis **4JP** |
| Status | Naskah humor · istilah penuh · sketch menyusul |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P07_html-semantik_siswa.md](./X-S1-P07_html-semantik_siswa.md)  
**Modul:** [X-S1-P07 …](../../../base-4jp/kelas-x/semester-1/X-S1-P07_html-semantik.md)

---

Halo. Mimi.

Robi masuk dengan file `algoritma-anti-telepati.html` dan aura juara kelas.

> “Kemarin aku belajar: jangan harap mesin menebak niat. Hari ini aku build web. Cepat. Semua pakai `div`. Fleksibel. Universal. Seperti… lem kertas.”

Aku:

> “Spoiler: lem di semua sisi bukan arsitektur. Itu bencana yang bisa berdiri.”

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | Struktur HTML **bermakna** (semantik) selaras spek |
| Peranmu | Peta spek → kerangka `header`/`main`/`section`/`footer` → peer baca |
| Bukan | CSS · generate buta · menyalahkan yang “halaman sudah muncul” |

```text
CONTOH BERMAKNA VS DIV  →  BACA TANPA BROWSER  →  TRAP “SAMA SAJA”  →  PETA  →  BUILD
```

---

## Adegan 1 — Dua halaman, satu tipu daya

Guru tampilkan dua cuplikan.

**A:** `header`, `main`, `section`, `footer`, `h1`, `h2` — kebaca kayak denah.

**B:** `div` di dalam `div` di dalam `div`. Judul pakai teks tebal. Vibes labirin.

Robi pilih B.

> “Lebih modern. Semua orang pakai `div`.”

Kami belum buka browser. Prediksi isi. Kelas lebih cepat menebak **A**.

Robi:

> “Belum tampil. Belum adil.”

---

## Plot twist #1 — di browser… hampir sama

Kami buka dua-duanya. Huruf muncul. Ada judul. Ada paragraf.

Robi triumphal:

> “LIHAT. Sama. Semantik = drama guru.”

Aku:

> **KRISIS!** (versi arsitektur.)  
> “Tampilan bisa mirip. **Peran** tidak. Ini seperti dua orang bilang ‘sudah sampai’ — satu ikut peta, satu nyasar tapi kebetulan ketemu warung yang sama.”

Twist: “kelihatan sama” bukan bukti “struktur tidak penting.”  
Itu bukti mata manusia mudah dibohongi oleh piksel, sementara spek, teman, masa depan-CSS, **dan mesin pencari** butuh **nama jujur**.

Hubung P06: langkah implisit bikin mie berbungkus.  
`div` tanpa peran = bagian implisit di halaman.

---

## Adegan 2 — Dendam `h1`

Robi balas dendam:

```html
<h1>Warung</h1>
<h1>Tentang</h1>
<h1>Menu</h1>
<h1>Kontak</h1>
```

> “Semua penting. Semua judul utama.”

Guru:

> “Kalau semua utama — tidak ada yang utama.”

Dia pelan-pelan turun pangkat: satu `h1`, sisanya `h2`. Sakit. Sehat.

---

## Concept — semantik = nama sesuai peran

Bukan hafalan Latin. Bahasa manusia:

| Tag | Peran (bahasa biasa) |
|-----|----------------------|
| `header` | Kepala halaman |
| `main` | Isi utama |
| `section` | Satu bagian bertema |
| `footer` | Kaki / kontak penutup |
| `h1` / `h2` | Judul utama / judul bagian |

**HTML semantik** = kasih nama yang jujur pada bagian.  
Bukan biar keren. Biar spek ketemu struktur — seperti kriteria penerimaan ketemu centang.

---

## Adegan 2,5 — “Buat siapa sih semantik ini?”

Robi masih belum puas:

> “Oke. Spek. Teman. CSS nanti. Tapi aku bikin web warung. Yang penting pengunjung lihat di HP. Mesin pencari? Itu urusan orang SEO misterius.”

Aku:

> “Spoiler: ‘orang SEO misterius’ itu sering… kamu sendiri. Atau guru. Atau teman yang ngetik nama warung di Google.”

### SEO — nama lengkap dulu, biar nempel

**SEO** = *Search Engine Optimization*  
Bahasa manusia: **optimasi mesin pencari** — cara bikin halaman lebih gampang **dipahami** dan **ditemukan** oleh Google, Bing, dan kawan-kawannya.

Bukan sihir. Bukan wajib hafal 50 trik.  
Intinya sederhana: mesin pencari itu **bukan mata manusia**. Dia tidak “lihat” desain cantik dulu. Dia **baca struktur & teks**.

Kalau semua `div`:

> “Hmm. Kotak. Kotak. Kotak. Judul… di mana ya yang utama?”

Kalau semantik + satu `h1` yang jujur + `h2` per bagian:

> “Oh. Ini judul utama warung. Ini bagian Tentang. Ini Menu. Ini kaki kontak.”

Robi:

> “Jadi semantik itu… peta untuk Google?”

> “Peta untuk **teman**, untuk **dirimu 3 bulan lagi**, untuk **CSS**, *dan* untuk **mesin pencari**. Satu kebiasaan, banyak yang terbantu.”

### Plot twist kecil #SEO

Halaman yang “kelihatan sama” di browser bisa **tidak sama** di mata mesin pencari.  
Sup `div` = mie berbungkus versi web: patuh tampil, tapi isyarat makna hilang.

Untuk warung MA / profil usaha: semantik membantu sinyal “ini nama usaha, ini menu, ini kontak” — agar orang yang cari di Google tidak cuma nemu poster random tanpa struktur.

*(Catatan jujur dari Mimi: SEO itu laut dalam. Hari ini cukup satu pelampung: **struktur bermakna = isyarat yang lebih jelas untuk mesin pencari**. Sisanya belakangan.)*

---

## Adegan 3 — Peta dulu, ketik kemudian

Robi mau langsung ngetik 200 baris.

Aku:

> “P04 bilang: spek dulu. P06 bilang: langkah dulu. Hari ini: **peta bagian** dulu.”

Dia gambar empat kotak di kertas. Baru HTML. Peer baca filenya **tanpa** dia menjelaskan.

Teman:

> “Ini kaki. Ini dua bagian isi. Judul utamanya warung. Spekmu kira-kira …”

Hampir kena. Robi revisi satu `section` yang salah nama.

Plot twist kecil: dia senang ditebak. Karena ditebak = strukturnya **komunikatif**.

---

## Reflect

| Pertemuan | Badge tidak resmi |
|-----------|-------------------|
| 06 | Anti-telepati (algoritma) |
| **07** | Anti-lem-semua-sisi (`div` soup) · nama bagian jujur · isyarat untuk mesin pencari |

Besok (P08): CSS — bikin tampilan rapi **tanpa** merusak kerangka hari ini.  
Kalau kerangka bohong, CSS cuma makeup di atas kekacauan.

---

## Exit

1. Alasan `section` + `h2` bukan semua `div` (boleh sebut spek **atau** mesin pencari): …  
2. Kesalahan hierarki yang kuhindari: …  
3. Bagian spek yang sudah ketemu di HTML: …

Satu line:

> **Kalau di browser kelihatan sama, belum tentu strukturnya jujur.**  
> Semantik = nama bagian sesuai peran — biar spek, teman, CSS nanti, **dan mesin pencari** (SEO: optimasi mesin pencari) tidak menebak.

— **Mimi** 🐾  
*(Robi menghapus empat `h1`. Antenna-nya berkabung sebentar, lalu menamai file: `bukan-sup-div-agar-google-ngerti.html` — lebay, tapi isyaratnya jelas.)*
