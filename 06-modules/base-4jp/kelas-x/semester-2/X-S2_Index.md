# Indeks Semester 2 — Kelas X (Base 4JP)

**Tema:** Halaman hidup — **advance DOM**, event, state UI (di memori)  
**Prasyarat:** S1 4JP (static page + JS dasar + 1–2 klik spek)  
**Pertemuan:** **32** × **4 JP** (180 menit) · 2 pertemuan/minggu  
**Pola:** ~2 JP teori + ~2 JP praktik terkait · bridging digabung  
**Fondasi:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../00_Taksonomi_Bloom_CPLF_4JP.md)  
**Arsip 2JP (jangan diubah / jangan dipakai sebagai silabus 4JP):** [kelas-x S2 18×2JP](../../../base-2jp/kelas-x/semester-2/X-S2_Index.md)  
**Keputusan:** [00_Evaluasi_Roadmap_4JP.md](../../00_Evaluasi_Roadmap_4JP.md) · [Peta S1–S6](../../00_Index_Journey_S1-S6.md)

> **Kenapa 32, bukan 34:** pengalaman S1 — kalender efektif sering terpotong kegiatan sekolah & libur; 34× “satu materi per pertemuan” mendorong kejar 2 materi sekaligus. S2 dipangkas **2 slot** secara sadar (lihat bawah), tanpa mengorbankan DNA DOM/state/project.

> Pengayaan: di freeze 2JP, S2 = HTML/CSS + DOM sangat dasar. Di **4JP**, HTML/CSS **sudah** di S1 → S2 **bukan** ulangi tag/layout dari nol.

---

## Outcome S2 (base-4jp)

Siswa dapat:
1. Menjelaskan halaman sebagai antarmuka **yang berubah** (DOM), bukan hanya dokumen statis  
2. Memasang **event** (klik, input) dan menelusuri alur pengguna  
3. Merender **daftar dari data** dan menjaga **state sederhana di memori**  
4. Menulis spek/AC untuk perilaku dinamis + regresi — bukan “sudah ramai jadi beres”

**Belum S2 (ditunda S3/S4):** SPA/router berat, `localStorage` sebagai “backend”, DB, framework.

---

## Apa yang digabung (−2 dari draf 34P)

| Dulu (draf 34) | Sekarang (32) | Alasan |
|----------------|---------------|--------|
| P01 Recall + P02 DOM query | **P01** satu pertemuan | Recall S1 cukup 20–30' di Orientation, bukan full meeting |
| P20 Mini sintesis (terpisah) | **Dihapus** · sudah di **P14** sintesis list+state | Hindari double build sebelum project |
| Blok project P23–P34 | **P21–P32** (12 slot tetap) | Irama project tidak dipotong |

---

## Blok 1 — DOM hidup & event (P01–P07)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 01 | Recall S1 + DOM & query | Static vs berubah; pohon dokumen; `querySelector` / `All` | Buka project S1 → pilih elemen; prediksi node | S2-P01 + P05 |
| 02 | Update aman | `textContent` vs `innerHTML` | Ubah teks tanpa menyuntik HTML | S2-P05 |
| 03 | Event klik dalam | Listener, `preventDefault` ringan | Satu alur klik yang dipahami (bukan 10 tombol) | S2-P05–P06 |
| 04 | Event input | `input` / `change`; baca `.value` | Teks di input → teks di halaman | S2-P06 |
| 05 | Alur pengguna | Urutan langkah; state UI kasatmata | 2–3 langkah tanpa pindah file | S2-P06 |
| 06 | Banyak listener + regresi | Dua kontrol, satu sumber kebenaran | Klik A jangan merusak B (spiral S1-P27) | S2-P06 |
| 07 | Review interaksi + AC | Spek perilaku dinamis | Mini uji AC klik/input | S2-P11 (sebagian) |

---

## Blok 2 — Form, list, state di memori (P08–P15)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 08 | Form sebagai data JS | `.value`, `name`, submit dicegah | Baca form → tampilkan ringkas | S2-P07 |
| 09 | Validasi di UI | Syarat, pesan error, jangan diam gagal | Pesan di halaman, bukan hanya `alert` | S2-P07–P08 |
| 10 | Array → list | `createElement` / `textContent` | Cetak daftar dari array | S2-P09 |
| 11 | Render ulang terkendali | Kosongkan + gambar lagi; trap `innerHTML` += | Satu fungsi `render()` | S2-P09 |
| 12 | Object state | Satu objek sebagai “isi kepala app” | Baca/tulis properti, tampilkan | S2-P10 |
| 13 | CRUD memori | Tambah / ubah / hapus item di array | Tanpa refresh, tanpa storage | S2-P10 |
| 14 | Sintesis list + state | Form + daftar + state | Mini halaman “daftar yang hidup” (+ AC singkat) | S2-P11 |
| 15 | Debug UI | Error console, hipotesis, regresi | Bug yang disiapkan (bukan vibe) | S1-P20 spiral |

---

## Blok 3 — Kualitas & spek pra-project (P16–P20)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 16 | Fungsi untuk UI | Pisah data vs tampilan (preview S3) | Refactor `render` + handler | S3-P09 (awal) |
| 17 | A11y interaktif | Fokus, label, tombol bukan `div` | Tab + label (spiral S1-P31) | — |
| 18 | Spek halaman hidup | AC yang bisa diklik/diisi | Tulis 5–7 AC dinamis | S1-P04 spiral |
| 19 | Peer mini | Uji dari spek, tanpa kode dulu | Lembar + antrian | S1-P29 pola |
| 20 | Checkpoint pra-project | DoD mini | Perbaiki 1–2 item | S1-P28 pola |

---

## Blok 4 — Project S2 interaktif (P21–P32)

Irama sama S1 (12 pertemuan project) agar guru tidak lupa proses. Isi teknis: **halaman hidup** (list/state/event), bukan static+2 klik.

| P | Fokus | Teori / proses (~2JP) | Praktik (~2JP) |
|---|-------|----------------------|----------------|
| 21 | Kickoff | Framing + spek + AC dinamis | Folder `project-s2/` + kerangka |
| 22 | Build HTML | Landmark, form/list **wadah** | Section + `id` untuk JS |
| 23 | Build CSS | Keterbacaan + kontrol kelihatan | Layout ringan, bukan framework |
| 24 | Build JS alur 1 | Event + update DOM | Fitur 1 sesuai spek |
| 25 | Build JS alur 2 | List/state atau validasi | Fitur 2 + regresi |
| 26 | Checkpoint | Uji semua AC | Perbaikan terarah |
| 27 | Peer review | Spek pemilik | Antrian revisi |
| 28 | Revisi | Prioritas 1–3 | Uji + regresi |
| 29 | Polish | UX/a11y interaktif | Tanpa fitur 3 |
| 30 | Uji final DoD | 5 domain (termasuk perilaku dinamis) | Bugfix kecil + kartu status |
| 31 | Showcase | Reasoning 4 menit | Demo + gap jujur |
| 32 | Refleksi tahun X | Transfer · preview S3 multi-view | Jurnal + arsip S1+S2 |

---

## Status file

| Rentang | Status |
|---------|--------|
| P01 | **Isi penuh** (modul + guru/siswa/bacaan/pendukung + skill-js) · sketch bacaan menyusul |
| P02–P32 | **Terencana** · modul belum |
| Materi ajar | [00_Index_Materi_Ajar](../../../materi-ajar/base-4jp/kelas-x/semester-2/00_Index_Materi_Ajar.md) |

### File modul

| P | Modul |
|---|-------|
| 01 | [P01](./X-S2-P01_recall-dom-query.md) |

### Nama file modul (lanjutan)

Pola: `X-S2-Pxx_<slug>.md` di folder ini. Slug usulan:

| P | Slug |
|---|------|
| 01 | `recall-dom-query` *(sudah)* |
| 02 | `dom-update-aman` |
| 03 | `event-klik` |
| 04 | `event-input` |
| 05 | `user-flow` |
| 06 | `listener-regresi` |
| 07 | `review-ac-dinamis` |
| 08 | `form-value` |
| 09 | `validasi-ui` |
| 10 | `array-render-list` |
| 11 | `render-ulang` |
| 12 | `object-state` |
| 13 | `crud-memori` |
| 14 | `sintesis-list-state` |
| 15 | `debug-ui` |
| 16 | `fungsi-ui` |
| 17 | `a11y-interaktif` |
| 18 | `spek-halaman-hidup` |
| 19 | `peer-mini` |
| 20 | `checkpoint-pra-project` |
| 21 | `project-s2-kickoff` |
| 22 | `project-s2-html` |
| 23 | `project-s2-css` |
| 24 | `project-s2-js-alur1` |
| 25 | `project-s2-js-alur2` |
| 26 | `project-s2-checkpoint` |
| 27 | `project-s2-peer-review` |
| 28 | `project-s2-revisi` |
| 29 | `project-s2-polish` |
| 30 | `project-s2-dod` |
| 31 | `project-s2-showcase` |
| 32 | `penutup-s2-refleksi` |

---

## Prinsip pengayaan (wajib)

1. Jangan menyentuh isi `base-2jp` untuk “menyamakan”.  
2. Jangan mengulang kurikulum HTML/CSS S1 sebagai “S2 P01–P04”.  
3. Tiap pertemuan 4JP: ada praktik terkait.  
4. State S2 = **memori**. Persistensi → S4.  
5. Kalender ketat: **satu fokus per pertemuan**; jika harus mengejar, potong Hook/Experience — **jangan** menambah fitur project.

[← S1](../semester-1/X-S1_Index.md) · [S3 →](../../kelas-xi/semester-3/XI-S3_Index.md)
