# Materi Guru Lengkap — XI-S3-P12

**Handout siswa (bagikan):** [XI-S3-P12_project-s3-kickoff_siswa.md](./XI-S3-P12_project-s3-kickoff_siswa.md)

**Modul:** [XI-S3-P12_project-s3-kickoff.md](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)

**Materi pendukung sumber:** [XI-S3-P12_project-s3-kickoff.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P12 — Project S3 Kickoff

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P12 |
| Unit | XI3.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | [PRJ-XI-S3-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-3-interaksi--struktur) |

## Learning Transformation

Dari latihan terpisah → **aplikasi multi-komponen** dengan DoD.

---

## Timeline (90 menit)

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

## Checklist Kickoff

- [ ] PRJ & varian  
- [ ] Blueprint + acceptance  
- [ ] Repo/folder + 3 file modul  
- [ ] AI log jika dipakai  

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

Individu atau pasangan — konsisten dengan kebijakan sekolah.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P12 Project S3 Kickoff

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P12 |
| Modul pertemuan | [XI-S3-P12_project-s3-kickoff.md](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md) |
| Unit | XI3.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XI-S3-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-3-interaksi--struktur) |
| Capability | COM, REA |
| Ada live code? | **Facilitator — scaffold folder + state kosong; bukan demo project lengkap** |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P11 — contoh AC measurable PRJ kamu?" | Bisa centang ya/tidak — bukan "bagus" |
| "P10 — file mana yang boleh query DOM?" | render.js (presentation) |
| "Bed latihan P08 vs project S3?" | Project = spec + modular + DoD + peer + demo |
| "P11 draft — AC mana paling kritis?" | Jawaban siswa — bahan target P13 |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | Tidak coding project untuk siswa; tidak demo app PRJ selesai |
| **Jangan takeover keyboard** | Laptop siswa milik siswa — guru jari di udara |
| **Jangan bagikan solusi project** | Tidak repo/template HTML+JS lengkap, ZIP siap jalan, paste WA solusi PRJ |
| **Clarifying questions, bukan jawaban** | "User siapa?" "State field apa?" "AC #2 — bagaimana uji?" |
| **Live modeling** | Live = **final spec + folder modul + placeholder** — bukan CRUD lengkap |
| **Recall** | Hubungkan P10 struktur + P11 AC draft |
| **No full solution code** | Dilarang: absensi/katalog/kuis jadi di proyektor 20+ menit |

### Bank pertanyaan klarifikasi (ganti "memberi kode")

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Gimana struktur state-nya?" | "Field PRJ bank kamu apa? AC poin 1?" |
| "Render list stuck" | "File mana tanggung jawab render? P10 checklist?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjuk spec + folder kamu." |
| "AI kasih kode full" | "Jelaskan alur event→state→render; cocok DoD & AI log?" |
| "Copy latihan P08 absensi" | "PRJ scope + varian + AC sendiri — modular 3 file?" |

**Nilai MA:** amanah — shortcut merusak REA/ITR/COM; kickoff lambat > copas cepat.

---

## Materi Inti

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

## Alur Live Coding / Live Modeling

### Persiapan

- Slide/papan: 4 opsi PRJ (masalah & DoD ringkas — **tanpa demo kode jadi**)
- Rubrik project 1 halaman
- **Tidak ada** starter project siap jalan di laptop siswa
- Koordinasi varian antar kelas paralel

### Skrip facilitator

```text
[LANGKAH 1 — Opening 0–10 menit]
Presentasi 4 PRJ — masalah, user, DoD headline.
TANPA demo web selesai di proyektor.
Tanya: "PRJ mana dekat latihan P08/P10 kamu?"
Recall draft P11 — AC sudah siap?

[LANGKAH 2 — Rubrik + reasoning 10–25 menit]
Jelaskan: dinilai proses + demo reasoning 2 menit + modular quality.
Contoh: "Kenapa state terpisah dari render?" (bukan hanya "jalan")
Tekankan peer P15 + code review P16.

[LANGKAH 3 — Pilih PRJ + blueprint 25–40 menit]
Siswa final spec + sketch state object + IPO diagram.
Guru keliling — clarifying questions only.

[LANGKAH 4 — Final acceptance 40–55 menit]
Polish AC dari P11 — guru 1 putaran approve/potong scope.
Edge case wajib minimal 1 AC.

[LANGKAH 5 — Scaffold folder 55–75 menit]
Siswa buat:
  docs/spec.md (paste draft revisi)
  src/state.js (export state kosong)
  src/render.js (placeholder render list kosong)
  src/handlers.js (bindHandlers skeleton — comment TODO)
  src/main.js (import + getElementById + render awal)
  index.html (root elements + script type=module)
Guru cek: **tidak** ada CRUD lengkap dari guru.
Live modeling OK: ketik **placeholder** 5 baris — bukan business logic.

[LANGKAH 6 — Blocker + target P13 75–85 menit]
Tulis blocker minggu depan + 2 AC target P13.
Contoh: "Toggle hadir + list dari state — styling belum final."

[LANGKAH 7 — Exit 85–90 menit]
Checklist kickoff modul + reminder AI log + no solution handout.
```

**Dilarang:** guru live-code PRJ-03 katalog lengkap dengan filter jalan "biar siswa paham".

---

## Latihan Membaca Kode

Kickoff **bukan** fokus kode project. Snippet **generic** + **spec PRJ** — proyeksi saja.

### Kerangka modular (bukan solusi)

```javascript
// state.js — BUKAN solusi PRJ
export let state = { items: [] };

// render.js
export function render(state, rootEl) {
  rootEl.textContent = "Belum ada data"; // placeholder kickoff OK
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Ini solusi PRJ atau scaffold? | Scaffold — logic P13 |
| render placeholder pass AC? | Fail AC fungsional — OK untuk kickoff |

### Spec PRJ-02 (baca spec, bukan kode)

```text
"Cegah pinjam ganda — item status dipinjam tidak bisa dipinjam lagi."
```

| Pertanyaan | Kunci |
|------------|-------|
| AC measurable? | [ ] Klik pinjam item dipinjam → pesan error / tombol disabled |
| State field? | status per item — spiral P07 id |

### Spec PRJ-04 kuis

```text
"Skor akhir = jawaban benar / total soal"
```

| Pertanyaan | Kunci |
|------------|-------|
| State apa? | indeks soal, array jawaban user |
| AC uji? | 5 soal dummy — skor manual verify |

---

## Praktik Mandiri

1. **Dokumen spec + acceptance final** — guru approve
2. **Blueprint IPO + state sketch**
3. **Folder modul** — 3+ file, placeholder render
4. **Target P13** — 2 AC + 1 blocker
5. **AI log** jika policy sekolah wajibkan

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Minta "template project pak/bu" | Tolak — template **folder kosong**, bukan logic |
| Langsung coding tanpa spec approve | Stop lembut — "AC PRJ kamu?" |
| Monolith 1 file rencana | Ingatkan P10 wajib modular DoD |
| Copy spec internet | ROBI test + revisi |
| Scope = full sistem sekolah | Potong ke DoD bank PRJ |
| Guru tempted demo cepat | Etika facilitator — tanya, jangan ketik solusi |
| Skip docs/spec.md | Wajibkan artefak P11 masuk repo |

---

## Rujukan

- Modul: [XI-S3-P12](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)
- PRJ-01: [Absensi DOM](../../../08-project/PRJ_XI_S3_01_Absensi_DOM.md)
- PRJ-02: [Peminjaman Barang](../../../08-project/PRJ_XI_S3_02_Peminjaman_Barang.md)
- PRJ-03: [Katalog OSIS](../../../08-project/PRJ_XI_S3_03_Katalog_OSIS.md)
- PRJ-04: [Kuis Interaktif](../../../08-project/PRJ_XI_S3_04_Kuis_Interaktif.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Pola modul: [P10 Pemisahan](./XI-S3-P10_pemisahan-tanggung-jawab.md)
- Spec draft: [P11 Acceptance](./XI-S3-P11_requirement-acceptance.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Setiap siswa/kelompok punya PRJ + varian + spec + acceptance approved
- [ ] Folder ≥3 modul + state kosong + render placeholder
- [ ] **Tidak** ada solusi project penuh dibagikan
- [ ] **Tidak** takeover keyboard siswa
- [ ] Target P13: minimal 2 AC + blocker tercatat
- [ ] Blueprint + docs/spec.md ada
- [ ] Peer P15 & modular quality diingatkan
- [ ] AI policy diingatkan jika relevan

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
