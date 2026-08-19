# Indeks Semester 3 — Kelas XI (Base 4JP)

**Tema:** SPA ringan / **multi-view** · arsitektur front (modul, SoC)  
**Prasyarat:** S2 4JP (DOM, event, list, state di memori)  
**Pertemuan:** **34** × **4 JP** · pola sama S1  
**Arsip 2JP:** [XI-S3 18×2JP](../../../kelas-xi/semester-3/XI-S3_Index.md) — **jangan disalin sebagai silabus 4JP** (DOM dasar sudah di S2).  
**Peta:** [S1–S6](../../00_Index_Journey_S1-S6.md) · [Panduan 4JP](../../kelas-x/00_Panduan_Pertemuan_4JP.md)

> Pengayaan: 2JP S3 masih mengulang DOM. 4JP S3 **naik** ke aplikasi ber-view, data nested, pemisahan tanggung jawab.

---

## Outcome S3 (base-4jp)

Siswa dapat:
1. Memandang aplikasi sebagai sistem **IPO** dengan state yang bisa digambar  
2. Mengganti **view** tanpa reload (show/hide atau hash ringan — bukan framework)  
3. Menyusun data **nested** + memisahkan data / UI / event  
4. Menulis requirement + AC untuk app multi-bagian

**Belum S3:** fetch/API, DB, Git tim (S4). **React bukan materi inti S3** — lihat catatan di bawah.

---

## Blok 1 — Sistem, blueprint, multi-view (P01–P08)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 01 | Aplikasi = IPO | Input–proses–output di app | Gambar IPO project S2 | S3-P01 |
| 02 | Blueprint & state | Diagram state kasar | 1 halaman: 3 keadaan bernama | S3-P02 |
| 03 | Multi-view | Satu app, beberapa “layar” | Dua view, satu `index.html` | — (pengayaan) |
| 04 | Ganti view | Tampil/sembunyi; trap reload | Tombol → view B, back ke A | — |
| 05 | Hash / taut dalam ringan | `location.hash` opsional | 2 taut view | — |
| 06 | Alur multi-langkah | Wizard 2–3 langkah | State langkah di objek | S3-P05–P06 |
| 07 | Data nested | Array of object | Baca/tampil satu tingkat dalam | S3-P07 |
| 08 | State aplikasi | Satu objek “app” | Mutasi terkendali + render | S3-P08 |

---

## Blok 2 — Modul & tanggung jawab (P09–P16)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 09 | Fungsi modul | Pecah file logika | `render.js` vs `data.js` (pola) | S3-P09 |
| 10 | SoC | Data ≠ DOM ≠ event | Refactor campur aduk | S3-P10 |
| 11 | `type="module"` ringan | Import/export dasar | Dua file, satu halaman | — |
| 12 | Update DOM aman (spiral) | Bukan `innerHTML` data user | Render nested | S3-P03–P04 |
| 13 | Event di banyak view | Listener tidak dobel | Ganti view tanpa listener bocor | S3-P05 |
| 14 | Requirement app | Masalah, pengguna, view | Spek 2 view | S3-P11 |
| 15 | AC app | Uji pindah view + data | Tabel AC | S3-P11 |
| 16 | Review arsitektur mini | Peer: SoC terlihat? | Lembar | S3-P16 (awal) |

---

## Blok 3 — Sintesis pra-project (P17–P22)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) |
|---|-------|--------------|----------------|
| 17 | Mini app 2 view | Gabung Blok 1–2 | Artefak mini |
| 18 | Debug alur | State salah vs DOM salah | Trace |
| 19 | Code review terstruktur | Kriteria SoC + AC | Review teman |
| 20 | Refactor wajib | Satu PR logika | Uji regresi view |
| 21 | Peer + antrian | Pola S1-P29 | Catat |
| 22 | Checkpoint | DoD mini app | Perbaiki |

---

## Blok 4 — Project S3 (P23–P34)

App **multi-view** + state + SoC. Irama sama S1/S2 P23–P34 (kickoff → HTML wadah → CSS → JS view1 → JS view2/state → checkpoint → peer → revisi → polish → DoD → showcase → refleksi + preview S4 async).

| P | Fokus |
|---|--------|
| 23 | Kickoff spek 2+ view |
| 24 | HTML: wadah view |
| 25 | CSS keterbacaan view |
| 26 | JS: pindah view + view 1 |
| 27 | JS: data nested + view 2 / regresi |
| 28–32 | Checkpoint · peer · revisi · polish · DoD |
| 33 | Showcase reasoning |
| 34 | Refleksi S3 · **jendela** React (bukan bab JSX) · preview async/data |

---

## Di mana React (Kelas XI)

Sama filosofi P01 / spiral BE: **alat setelah masalah terasa**, bukan bab karena “industri pakai React.”

| Kapan | Peran | Bukan |
|---|---|---|
| **S3 P01–P32** | Vanilla: view, `render()`, SoC, listener | Install React, JSX, Vite sebagai syarat project S3 |
| **S3 P18–P20** | *Masalah* yang React kelak jawab: render dobel, listener bocor, DOM campur data | “Minggu ini hook” |
| **S3 P34** | **Jendela 10–15'**: peta `state` → `useState`, `renderApp()` → JSX. Bukan 180' tutorial | Project React dadakan |
| **S4 Blok 1–2** | `fetch` tetap vanilla dulu (satu alat baru: async) | React + Promise di pertemuan yang sama |
| **S4 project (P25–27), opsional** | UI React **hanya jika** S3 vanilla sudah lulus DoD | Mengganti pelajaran DB/Git |
| **BRG-06** | Tempat **penuh** React (ekstra / pasca) | Intrakurikuler wajib rapor |

Rujukan yang sudah ada (jangan dicampur jadi S3 P03): [BRG-06 React SPA](../../../materi-pendukung/jalur-kelanjutan/BRG-06_React_SPA_Pengantar.md) · mapping CPLF S3 → React ada di file itu.

**Urutan resmi 4JP XI:** S3 rasa sakit SPA vanilla → P34 nama alatnya → S4 data/async → React opsional di UI project **atau** BRG-06.

---

## Status file

| Rentang | Status |
|---------|--------|
| P01–P34 | **Terencana** · modul belum |

Slug usulan: `XI-S3-Pxx_<fokus>.md` (contoh P03 `multi-view`, P10 `soc`, P23 `project-s3-kickoff`).

[← S2](../../kelas-x/semester-2/X-S2_Index.md) · [S4 →](../semester-4/XI-S4_Index.md)
