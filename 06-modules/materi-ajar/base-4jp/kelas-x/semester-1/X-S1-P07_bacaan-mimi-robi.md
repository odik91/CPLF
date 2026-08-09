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
Itu bukti mata manusia mudah dibohongi oleh piksel, sementara spek, teman, dan masa depan-CSS butuh **nama jujur**.

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
| **07** | Anti-lem-semua-sisi (`div` soup) · nama bagian jujur |

Besok (P08): CSS — bikin tampilan rapi **tanpa** merusak kerangka hari ini.  
Kalau kerangka bohong, CSS cuma makeup di atas kekacauan.

---

## Exit

1. Alasan `section` + `h2` bukan semua `div`: …  
2. Kesalahan hierarki yang kuhindari: …  
3. Bagian spek yang sudah ketemu di HTML: …

Satu line:

> **Kalau di browser kelihatan sama, belum tentu strukturnya jujur.**  
> Semantik = nama bagian sesuai peran — biar spek, teman, dan masa depanmu tidak menebak.

— **Mimi** 🐾  
*(Robi menghapus empat `h1`. Antenna-nya berkabung sebentar, lalu ✅ — eh, maksudku: terpenuhi.)*
