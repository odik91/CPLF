# X-S1-P24 — Project S1: Build HTML sesuai Spek

| Field | Isi |
|---|---|
| Kode | X-S1-P24 |
| Basis | **4JP** · Pertemuan **24/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Struktur HTML lengkap sesuai spek; CSS/JS belum difokuskan** |

## Learning Transformation

Dari kerangka kosong + janji di `spek.md` → **halaman yang isinya dapat dibaca dari HTML saja**: landmark, section, hierarki judul, dan `id` yang sudah direncanakan untuk P26–P27.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut landmark, satu `h1`, `section` + `h2`, `id` unik |
| **C2** | Memahami | Menjelaskan HTML hari ini = bukti spek, bukan dekorasi |
| **C3** | Menerapkan | Mengisi 2–3 `section` + konten nyata sesuai brief |
| **C4** | Menganalisis | Menemukan gap spek vs HTML (section hilang, `id` salah, div soup) |
| **C5** | Mengevaluasi | Mencentang AC struktur tanpa melihat CSS |
| **C6** | Mencipta | `index.html` project yang speknya terbaca dari markup |

**Fokus:** C3–C5 · **Puncak:** C6 · CSS keterbacaan → **P25**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P23 · hari ini dinding, bukan cat |
| 10–30 | Scaffold | C2 | Spek → peta bagian → tag landmark |
| 30–50 | Experience | C2–C4 | Baca HTML tanpa browser: apakah spek kelihatan? |
| 50–65 | Trap | C4 | Div soup · CSS dini · JS “sekalian” · `id` berubah dari spek |
| 65–85 | Concept | C2 | AC HTML: landmark, hierarki, konten, `id` tombol/pesan |
| 85–95 | Practice mini | C3 | Peta kertas 3 section dari spek sendiri |
| 95–105 | Transisi | — | Buka folder project P23 |
| 105–120 | Scaffold praktik | C2–C3 | I do: isi satu section dari spek |
| 120–165 | Practice | C3–C6 | Lengkapi HTML · peer baca struktur |
| 165–180 | Reflect | C5 | AC HTML · preview P25 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Rapikan warna, font, flex rapi | Konten dan nama bagian sesuai spek |
| Isi `script.js` fitur 1–2 | Siapkan `id` yang **sama** dengan spek |
| Tambah halaman kedua | Satu `index.html` |
| Form dinamis / banyak tombol | Tombol sesuai rencana P26–P27 saja |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **Build HTML** | Mengisi struktur yang dijanjikan spek |
| **Landmark** | `header` · `main` · `footer` (+ `nav` jika spek minta) |
| **Section** | Blok topik dengan `h2` |
| **`id` rencana** | Alamat elemen untuk JS nanti; jangan diganti seenaknya |
| **Baca tanpa CSS** | Jika spek tidak terbaca dari HTML, struktur belum lulus |

## Checklist HTML (AC struktur)

- [ ] Satu `h1` di `header` sesuai judul spek  
- [ ] `main` berisi 2–3 `section` yang disebut spek  
- [ ] Setiap `section` punya `h2`  
- [ ] Konten nyata (bukan “lorem” / “isi nanti”)  
- [ ] `#pesan` (atau nama di spek) ada, teks awal sesuai AC  
- [ ] Tombol P26 punya `id` + `type="button"`  
- [ ] Jika ada fitur P27: elemen/`id` cadangan sudah ada atau dicatat di spek  
- [ ] `title` dokumen = judul halaman  
- [ ] Tanpa `div` mengganti landmark

## Rujukan latihan

Contoh isi (bukan kunci project): [skill-js/p24-html-struktur/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p24-html-struktur/).  
Kerjakan di **folder project P23 milikmu**, bukan menimpa contoh.

## Cognitive Trap

- HTML “sudah ada skeleton” dianggap selesai — skeleton bukan konten.  
- Mengubah `id` agar “lebih keren” memutus janji P26.  
- Menulis CSS agar kelihatan rapi menyembunyikan struktur buruk.  
- Menyalin contoh kantin padahal brief-nya profil kegiatan.

## Guiding Questions

1. Section mana di spek yang belum ada di HTML?  
2. Jika CSS dimatikan, apakah pengguna masih paham isi?  
3. `id` tombol/pesan masih sama dengan `spek.md`?  
4. Mana yang `h1` vs `h2` — apakah satu topik halaman?

## Kriteria penerimaan

- [ ] HTML diuji terhadap AC struktur (bukan selera)  
- [ ] Peer dapat memetakan spek → section tanpa melihat CSS  
- [ ] `id` rencana JS tidak berubah tanpa catatan spek  
- [ ] CSS/JS tidak menjadi fokus penilaian hari ini

## Exit Ticket

1. Dua section yang kutulis: …  
2. `id` untuk P26: …  
3. Satu gap spek vs HTML yang kututup hari ini: …  
4. Apa yang sengaja ditunda ke P25?

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — spek terbaca dari markup.

## Catatan Guru

Nilai struktur dan kesesuaian spek. Halaman jelek secara visual masih lulus P24 jika HTML jujur. Jangan buka sesi “rapikan CSS.”
