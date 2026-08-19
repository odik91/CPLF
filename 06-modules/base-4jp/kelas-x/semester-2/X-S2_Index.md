# Indeks Semester 2 — Kelas X (Base 4JP)

**Tema:** Halaman hidup — **advance DOM**, event, state UI (di memori)  
**Prasyarat:** S1 4JP (static page + JS dasar + 1–2 klik spek)  
**Pertemuan:** **34** × **4 JP** (180 menit) · 2 pertemuan/minggu  
**Pola:** ~2 JP teori + ~2 JP praktik terkait · bridging digabung  
**Fondasi:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../00_Taksonomi_Bloom_CPLF_4JP.md)  
**Arsip 2JP (jangan diubah / jangan dipakai sebagai silabus 4JP):** [kelas-x S2 18×2JP](../../../kelas-x/semester-2/X-S2_Index.md)  
**Keputusan:** [00_Evaluasi_Roadmap_4JP.md](../../00_Evaluasi_Roadmap_4JP.md) · [Peta S1–S6](../../00_Index_Journey_S1-S6.md)

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

## Blok 1 — DOM hidup & event (P01–P08)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 01 | Recall S1 → halaman hidup | Static vs berubah; Compass S2 | Buka project S1: apa yang **tidak** bisa tanpa ganti HTML | S2-P01 (mengapa web) |
| 02 | DOM & query | Pohon dokumen, `querySelector` / `All` | Pilih elemen; prediksi node | S2-P05 |
| 03 | Update aman | `textContent` vs `innerHTML` | Ubah teks tanpa menyuntik HTML | S2-P05 |
| 04 | Event klik dalam | Listener, `preventDefault` ringan | Satu alur klik yang dipahami (bukan 10 tombol) | S2-P05–P06 |
| 05 | Event input | `input` / `change`; baca `.value` | Teks di input → teks di halaman | S2-P06 |
| 06 | Alur pengguna | Urutan langkah; state UI kasatmata | 2–3 langkah tanpa pindah file | S2-P06 |
| 07 | Banyak listener + regresi | Dua kontrol, satu sumber kebenaran | Klik A jangan merusak B (spiral P27) | S2-P06 |
| 08 | Review interaksi + AC | Spek perilaku dinamis | Mini uji AC klik/input | S2-P11 (sebagian) |

---

## Blok 2 — Form, list, state di memori (P09–P16)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 09 | Form sebagai data JS | `.value`, `name`, submit dicegah | Baca form → tampilkan ringkas | S2-P07 |
| 10 | Validasi di UI | Syarat, pesan error, jangan diam gagal | Pesan di halaman, bukan hanya `alert` | S2-P07–P08 |
| 11 | Array → list | `createElement` / `textContent` | Cetak daftar dari array | S2-P09 |
| 12 | Render ulang terkendali | Kosongkan + gambar lagi; trap `innerHTML` += | Satu fungsi `render()` | S2-P09 |
| 13 | Object state | Satu objek sebagai “isi kepala app” | Baca/tulis properti, tampilkan | S2-P10 |
| 14 | CRUD memori | Tambah / ubah / hapus item di array | Tanpa refresh, tanpa storage | S2-P10 |
| 15 | Sintesis list + state | Form + daftar + state | Mini halaman “daftar yang hidup” | S2-P11 |
| 16 | Debug UI | Error console, hipotesis, regresi | Bug yang disiapkan (bukan vibe) | S1-P20 spiral |

---

## Blok 3 — Kualitas & sintesis pra-project (P17–P22)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 17 | Fungsi untuk UI | Pisah data vs tampilan (preview S3) | Refactor `render` + handler | S3-P09 (awal) |
| 18 | A11y interaktif | Fokus, label, tombol bukan `div` | Tab + label (spiral S1-P31) | — |
| 19 | Spek halaman hidup | AC yang bisa diklik/diisi | Tulis 5–7 AC dinamis | S1-P04 spiral |
| 20 | Mini sintesis | Gabung Blok 1–2 | Satu halaman mini + AC | S2-P11 |
| 21 | Peer mini | Uji dari spek, tanpa kode dulu | Lembar + antrian | S1-P29 pola |
| 22 | Checkpoint pra-project | DoD mini | Perbaiki 1–2 item | S1-P28 pola |

---

## Blok 4 — Project S2 interaktif (P23–P34)

Sama irama S1 agar guru tidak lupa proses. Isi teknis: **halaman hidup** (list/state/event), bukan static+2 klik.

| P | Fokus | Teori / proses (~2JP) | Praktik (~2JP) |
|---|-------|----------------------|----------------|
| 23 | Kickoff | Framing + spek + AC dinamis | Folder `project-s2/` + kerangka |
| 24 | Build HTML | Landmark, form/list **wadah** | Section + `id` untuk JS |
| 25 | Build CSS | Keterbacaan + kontrol kelihatan | Layout ringan, bukan framework |
| 26 | Build JS alur 1 | Event + update DOM | Fitur 1 sesuai spek |
| 27 | Build JS alur 2 | List/state atau validasi | Fitur 2 + regresi |
| 28 | Checkpoint | Uji semua AC | Perbaikan terarah |
| 29 | Peer review | Spek pemilik | Antrian revisi |
| 30 | Revisi | Prioritas 1–3 | Uji + regresi |
| 31 | Polish | UX/a11y interaktif | Tanpa fitur 3 |
| 32 | Uji final DoD | 5 domain (termasuk perilaku dinamis) | Bugfix kecil + kartu status |
| 33 | Showcase | Reasoning 4 menit | Demo + gap jujur |
| 34 | Refleksi tahun X | Transfer · preview S3 multi-view | Jurnal + arsip S1+S2 |

---

## Status file

| Rentang | Status |
|---------|--------|
| P01–P34 | **Terencana di indeks ini** · modul/guru/siswa/bacaan **belum** |
| Materi ajar | Stub: [00_Index_Materi_Ajar](../../../materi-ajar/base-4jp/kelas-x/semester-2/00_Index_Materi_Ajar.md) |

### Nama file modul (saat ditulis nanti)

Pola: `X-S2-Pxx_<slug>.md` di folder ini. Slug usulan:

| P | Slug |
|---|------|
| 01 | `recall-halaman-hidup` |
| 02 | `dom-query` |
| 03 | `dom-update-aman` |
| 04 | `event-klik` |
| 05 | `event-input` |
| 06 | `user-flow` |
| 07 | `listener-regresi` |
| 08 | `review-ac-dinamis` |
| 09 | `form-value` |
| 10 | `validasi-ui` |
| 11 | `array-render-list` |
| 12 | `render-ulang` |
| 13 | `object-state` |
| 14 | `crud-memori` |
| 15 | `sintesis-list-state` |
| 16 | `debug-ui` |
| 17 | `fungsi-ui` |
| 18 | `a11y-interaktif` |
| 19 | `spek-halaman-hidup` |
| 20 | `mini-sintesis` |
| 21 | `peer-mini` |
| 22 | `checkpoint-pra-project` |
| 23 | `project-s2-kickoff` |
| 24 | `project-s2-html` |
| 25 | `project-s2-css` |
| 26 | `project-s2-js-alur1` |
| 27 | `project-s2-js-alur2` |
| 28 | `project-s2-checkpoint` |
| 29 | `project-s2-peer-review` |
| 30 | `project-s2-revisi` |
| 31 | `project-s2-polish` |
| 32 | `project-s2-dod` |
| 33 | `project-s2-showcase` |
| 34 | `penutup-s2-refleksi` |

---

## Prinsip pengayaan (wajib)

1. Jangan menyentuh isi `base-2jp` / `06-modules/kelas-x/semester-2` untuk “menyamakan”.  
2. Jangan mengulang kurikulum HTML/CSS S1 sebagai “S2 P01–P04”.  
3. Tiap pertemuan 4JP: ada praktik terkait.  
4. State S2 = **memori**. Persistensi → S4.

[← S1](../semester-1/X-S1_Index.md) · [S3 →](../../kelas-xi/semester-3/XI-S3_Index.md)
