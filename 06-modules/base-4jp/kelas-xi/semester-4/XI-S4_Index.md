# Indeks Semester 4 — Kelas XI (Base 4JP)

**Tema:** Data, async, kolaborasi · **spiral BE:** lokal → masalah → DB sungguhan  
**Prasyarat:** S3 4JP (multi-view, state, SoC)  
**Pertemuan:** **34** × **4 JP**  
**Arsip 2JP:** [XI-S4 18×2JP](../../../kelas-xi/semester-4/XI-S4_Index.md)  
**Spiral BE (wajib dibaca sebelum menulis modul Blok 3):** [00_Spiral_BE_Lokal_ke_DB.md](../00_Spiral_BE_Lokal_ke_DB.md)  
**Peta:** [S1–S6](../../00_Index_Journey_S1-S6.md)

> Bukan “minggu ini bab database.” DB = jawaban setelah lokal **terbukti** tidak layak.

---

## Outcome S4 (base-4jp)

Siswa dapat:
1. Membedakan sync vs async dan memakai `fetch` + JSON dengan kontrak  
2. Menyimpan di **lokal**, lalu **memframing** batasnya (hilang, bentrok, multi-user)  
3. Memakai **DB + API** sebagai solusi atas framing itu (bukan karena bab)  
4. Berkolaborasi dengan Git dasar pada project tim

---

## Blok 1 — Waktu & async (P01–P08)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 01 | Sync vs async | Metafora antrean | Prediksi urutan log | S4-P01 |
| 02 | Callback trap | Callback hell sebagai masalah | Satu rantai yang kacau (demo) | — |
| 03 | Promise | `then` / `catch` | Satu Promise mainan | S4-P02 |
| 04 | async/await | Baca alur setara sync | Refactor Promise | S4-P02 |
| 05 | Error async | `try/catch`, gagal jaringan | UI “gagal” jujur | S4-P08 (awal) |
| 06 | Loading state | Jangan diam saat menunggu | Spinner/teks status | S4-P08 |
| 07 | Race / urutan | Klik dua kali | Disable tombol / abaikan stale | — |
| 08 | Review async | AC: loading, sukses, gagal | Mini uji | — |

---

## Blok 2 — API, JSON, transformasi (P09–P16)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 09 | Kontrak data | Field, tipe, contoh JSON | Tulis kontrak 1 endpoint | S4-P03 |
| 10 | `fetch` GET | Baca response | Tampilkan list dari JSON | S4-P04 |
| 11 | JSON parse/stringify | Data ≠ string | Round-trip mini | S4-P04 |
| 12 | map / filter | Transformasi array | Pipeline kecil | S4-P05 |
| 13 | reduce ringan | Agregasi satu angka | Jumlah/filter+hitung | S4-P05 |
| 14 | Pipeline | Rapikan rantai | Satu file proses data | S4-P06 |
| 15 | Fetch gagal | 404, JSON rusak | Pesan ke pengguna | S4-P04+P08 |
| 16 | Mini API-mock | File JSON / mock | Halaman + kontrak | S4-P03–P04 |

---

## Blok 3 — Lokal → masalah → DB (P17–P22)

| P | Fokus | Teori (~2JP) | Praktik (~2JP) | DNA 2JP |
|---|-------|--------------|----------------|---------|
| 17 | localStorage CRUD | Cukup untuk demo | Simpan list | S4-P07 |
| 18 | Persist + error UI | Refresh tetap ada | Loading/error | S4-P08 |
| 19 | **Trap lokal** | Hilang, kuota, 1 browser, bentrok | Bukti “tidak layak karena …” | pengayaan BE |
| 20 | Framing | Stakeholder, bukti, batas | Tulis 1 halaman framing | P01 spiral |
| 21 | DB sebagai jawaban | Tabel, API, bukan magic | Skema ER mini + 1 alasan | S4-P09–P10 |
| 22 | API + DB tipis | Satu resource CRUD | Hit API lokal/sekolah (sesuai fasilitas) | pengayaan |

\*Jika lab tanpa server: mock API + diskusikan apa yang **tetap** kurang vs file JSON — jangan pura-pura punya DB.

---

## Blok 4 — Git + Project S4 tim (P23–P34)

| P | Fokus | DNA 2JP |
|---|--------|---------|
| 23 | Git init, commit (individu dulu) | S4-P11 |
| 24 | Branch, merge, atribusi | S4-P12 |
| 25 | Kickoff project tim + spek + peran | S4-P13 |
| 26–27 | Build: UI + fetch/storage sesuai framing | S4-P14–P15 |
| 28 | Checkpoint AC + Git log | — |
| 29 | Peer + Git (bukan hanya selera) | S4-P16 |
| 30 | Revisi | — |
| 31 | Polish / error & loading | — |
| 32 | DoD tim | — |
| 33 | Presentasi + retro | S4-P17 |
| 34 | Portofolio tahun XI | S4-P18 |

---

## Status file

| Rentang | Status |
|---------|--------|
| P01–P34 | **Terencana** · modul belum |

[← S3](../semester-3/XI-S3_Index.md) · [S5 →](../../kelas-xii/semester-5/XII-S5_Index.md)
