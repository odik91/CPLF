# Handout Siswa — XI-S3-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P12_project-s3-kickoff.md](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)

---

## 1. Tujuan pembelajaran

Dari latihan terpisah → **aplikasi multi-komponen** dengan DoD.

---

## 2. Ringkasan konsep

- **Transformasi inti:** dari latihan P07–P10 terpisah → **aplikasi multi-komponen** dengan DoD + modular pattern.
- **Empat opsi PRJ S3:**
  - **PRJ-XI-S3-01** — Absensi Kelas (DOM) — state + toggle + ringkasan
  - **PRJ-XI-S3-02** — Peminjaman Barang Ekskul — ID + status pinjam/kembali
  - **PRJ-XI-S3-03** — Katalog Kegiatan OSIS — list dinamis + filter
  - **PRJ-XI-S3-04** — Kuis Interaktif — navigasi soal + skor
- **DoD:** lihat file PRJ masing-masing — guru paham checklist, **bukan** solusi kode.
- **Deliverable kickoff:** blueprint + acceptance final + folder 3+ modul + state kosong + render placeholder — **bukan** app jadi.
- **Rubrik:** [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) — demo reasoning 2 menit + peer P15.
- **Wajib S3:** pola P10 (`state.js`, `render.js`, `handlers.js`) · spec dari P11 · minimal 2 AC target P13.
- **Varian rotasi:** A/B/C per PRJ — antar kelas paralel beda varian.
- **Mode:** individu atau pasangan — konsisten kebijakan sekolah.

**Dry run P10/P11:** kalau siswa belum split file — scaffold kosong OK; implementasi P13, bukan guru.

---

## 3. Materi praktik

### Kickoff ≠ build penuh

90 menit fokus **perencanaan + scaffold yang bisa diuji**:

1. Pilih PRJ + varian (A/B/C)
2. Finalisasi blueprint IPO + state sketch
3. Acceptance 3–5 dari draft P11 — guru approve
4. Struktur folder modul P10
5. State kosong + `render()` placeholder ("Loading..." atau list kosong)
6. Target P13 — minimal 2 AC terimplementasi

### Checklist kickoff (modul)

- [ ] PRJ & varian
- [ ] Blueprint + acceptance
- [ ] Repo/folder + 3 file modul
- [ ] AI log jika dipakai

### Approve spec — 1 putaran feedback

Guru baca spec siswa:

- Teman ROBI bisa paham tanpa tanya ulang?
- AC bisa dicek ya/tidak?
- Scope realistis P13–P14 (2 minggu build)?
- Modular pattern — bukan rencana 1 file 300 baris?

**Tolak scope terlalu besar** — potong ke DoD minimal PRJ, bukan tambah implementasi guru.

### Scaffold yang **boleh** guru tulis di papan (generic)

```text
/src/state.js     → export state = { ... }  // kosong
/src/render.js    → export function render(...) { /* placeholder */ }
/src/handlers.js  → export function bindHandlers(...) { /* TODO P13 */ }
/src/main.js      → import + init + render pertama
docs/spec.md      → requirement + AC dari P11
```

### Scaffold yang **dilarang** bagikan

- PRJ-01 absensi CRUD lengkap 3 file
- Link GitHub "contoh nilai 100"
- ZIP dengan logic toggle + filter jalan

### Target minggu P13

Minimal 2 acceptance terpenuhi — contoh: "list tampil dari state" + "form tambah ditolak jika kosong".

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Presentasi 4 PRJ + varian A/B/C rotasi |
| 10–25 | Concept | DoD · [Rubrik Project](../../../09-rubrik/09_Rubrik_Project.md) · demo reasoning 2 menit |
| 25–40 | Practice | Pilih PRJ + finalisasi blueprint + acceptance |
| 40–55 | Clarify | Guru 1 putaran feedback per kelompok/individu |
| 55–75 | Practice | Scaffold: struktur folder + state kosong + render placeholder |
| 75–85 | Reflect | Blocker minggu depan? |
| 85–90 | Exit | Target fitur P13 (minimal 2 acceptance) |

---

## 5. Lembar kerja / latihan

- [ ] PRJ & varian  
- [ ] Blueprint + acceptance  
- [ ] Repo/folder + 3 file modul  
- [ ] AI log jika dipakai  

---

## 6. Exit ticket

1. Target fitur P13 (minimal 2 acceptance)
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
