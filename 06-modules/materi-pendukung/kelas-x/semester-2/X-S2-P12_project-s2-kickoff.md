# Materi Pendukung Guru — X-S2-P12 Project S2 Kickoff

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P12 |
| Modul pertemuan | [X-S2-P12_project-s2-kickoff.md](../../../kelas-x/semester-2/X-S2-P12_project-s2-kickoff.md) |
| Unit | X2.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-X-S2-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-x--semester-2-web-sebagai-ekspresi) |
| Capability | REA, COM |
| Ada live code? | **Facilitator — bukan demo project lengkap** |

---

## Pengetahuan Guru

- **Transformasi inti:** dari halaman mini P11 → **artefak web integratif semester** dengan reasoning desain.
- **Empat opsi PRJ S2:**
  - **PRJ-X-S2-01** — Kalkulator Zakat (UI Web)
  - **PRJ-X-S2-02** — Jadwal Kegiatan Kelas
  - **PRJ-X-S2-03** — Absensi Mini
  - **PRJ-X-S2-04** — Profil Ekstrakurikuler
- **DoD:** lihat file PRJ masing-masing — guru paham checklist, **bukan** solusi kode.
- **Deliverable kickoff:** spec + acceptance + wireframe + struktur folder — **bukan** project jadi.
- **Rubrik:** [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) — penekanan COM/reasoning + demo **mengapa** desain (3 menit nanti P17).
- **Wajib S2:** HTML+CSS+JS terintegrasi · minimal 1 iterasi peer (P15).
- **Varian rotasi:** kelas paralel beda PRJ/varian — anti copy antar kelas.

**Dry run P11:** gunakan gap skill siswa untuk calibrate scope PRJ — potong, jangan tambah kode guru.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P11 — MVP 5 poin halaman mini?" | Semantik, CSS, JS, data, validasi 1 field |
| "Bed latihan P09–P11 vs project S2?" | Project = integrasi penuh + spec + peer + presentasi reasoning |
| "Acceptance criteria — contoh measurable?" | "Form tolak email tanpa @" — bisa uji ya/tidak |
| "P11 gap skill kamu — apa?" | Jawaban jujur siswa — bahan scope PRJ |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | Tidak coding project untuk siswa; tidak demo app PRJ selesai |
| **Jangan takeover keyboard** | Laptop siswa milik siswa — guru jari di udara |
| **Jangan bagikan solusi project** | Tidak ada repo/template HTML+JS lengkap, starter siap jalan, paste WA solusi PRJ |
| **Clarifying questions, bukan jawaban** | "User siapa?" "Field wajib apa?" "Bagaimana tahu selesai?" |
| **Live modeling** | Live = **spec + wireframe + folder structure** — bukan ketik CRUD lengkap |
| **Recall** | Hubungkan P11 dry run — "Skill mana yang harus masuk PRJ?" |
| **No full solution code** | Dilarang: `app.js` PRJ jadi, "contoh selesai" di proyektor 20+ menit |

### Bank pertanyaan klarifikasi (ganti "memberi kode")

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Gimana render list-nya?" | "Data kamu array atau object? Acceptance poin 3?" |
| "Validasi stuck" | "Field mana? Pesan error spesifik apa? Sudah preventDefault?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjuk spec + wireframe kamu." |
| "AI kasih kode full" | "Jelaskan baris render sendiri; cocok spec & DoD PRJ?" |
| "Mau copy P11 jadwal mini" | "PRJ scope lebih luas — spec 5 poin PRJ kamu apa?" |

**Nilai MA:** amanah — shortcut merusak REA/ITR/COM; kickoff lambat > copas cepat.

---

## Materi Inti

### Kickoff ≠ build penuh

90 menit fokus **perencanaan yang bisa diuji**:

1. Pilih PRJ + varian (A/B/C jika ada di bank)
2. Spec 5 poin — masalah, user, input, output, batasan
3. Acceptance 3–5 checkbox — measurable (web: validasi, render, aksi user)
4. Wireframe halaman — section form + list + feedback
5. Struktur folder — `index.html`, `style.css`, `app.js` (atau setara)
6. Target P13–P14 — milestone build 1 & 2

### Approve spec — 1 putaran feedback

Guru baca spec siswa:

- Teman ROBI bisa paham tanpa tanya ulang?
- Acceptance bisa dicek ya/tidak?
- Scope realistis 2 minggu build (P13–P14)?

**Tolak scope terlalu besar** — bantu potong ke DoD minimal PRJ, bukan tambah implementasi guru.

### Skeleton yang **boleh** guru tulis di papan (generic)

```text
// 1. state (array/object)
// 2. render()
// 3. event form + validasi
// 4. CSS readable
```

### Skeleton yang **dilarang** bagikan

- File PRJ-X-S2-02 jadwal lengkap dengan CRUD
- Link GitHub "contoh nilai 100"
- ZIP template dengan `app.js` >50 baris siap jalan

### Target minggu P13

Setiap siswa/kelompok: 1 target build + 1 blocker + file structure sudah dibuat.

---

## Alur Live Coding / Live Modeling

### Persiapan

- Slide/papan: 4 opsi PRJ (masalah & DoD ringkas — **tanpa demo kode jadi**)
- Rubrik project 1 halaman
- **Tidak ada** starter project di laptop siswa
- Koordinasi varian antar kelas paralel

### Skrip facilitator

```text
[LANGKAH 1 — Opening 0–10 menit]
Presentasi 4 PRJ — masalah, user, DoD headline.
TANPA demo web selesai di proyektor.
Tanya: "PRJ mana paling dekat halaman mini P11 kamu?"
Recall gap P11 — catat di papan.

[LANGKAH 2 — Rubrik + COM 10–25 menit]
Jelaskan: dinilai reasoning + proses + demo "mengapa desain".
Contoh: "Kenapa validasi di client dulu?" (bukan hanya "jalan")
Tekankan peer review P15 wajib.

[LANGKAH 3 — Pilih PRJ + spec 25–45 menit]
Siswa tulis spec 5 poin — guru keliling, clarifying questions only.
Template oral — bukan PDF solusi.

[LANGKAH 4 — Acceptance + wireframe 45–55 menit]
Acceptance 3–5 checkbox + wireframe kertas 5 menit.
Guru feedback round — approve atau potong scope.

[LANGKAH 5 — Setup folder 55–75 menit]
Siswa buat folder proyek + file kosong:
  index.html (boilerplate minimal siswa ketik sendiri)
  style.css (kosong atau comment)
  app.js (kosong atau comment // state)
Guru cek: **tidak** ada implementasi CRUD lengkap dari guru.

[LANGKAH 6 — Target P13–P14 75–85 menit]
Tulis target minggu depan + blocker.
Contoh target: "Form tambah + render list — belum styling final."

[LANGKAH 7 — Exit 85–90 menit]
Checklist: PRJ dipilih, spec approved, folder ada, target P13 tertulis.
Reminder AI policy + no solution handout.
```

**Dilarang:** guru live-code PRJ-02 jadwal lengkap "biar siswa paham".

---

## Latihan Membaca Kode

Kickoff **bukan** fokus kode project. Snippet **generic** untuk mengingatkan pola — proyeksi saja.

```javascript
// Kerangka PRJ — BUKAN solusi
// 1. state
// 2. function render() { createElement... }
// 3. form.addEventListener("submit", ...) + validasi
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Ini solusi PRJ atau kerangka? | Kerangka — siswa isi sesuai spec PRJ mereka |
| Mengapa guru tidak isi render()? | Implementasi = tanggung jawab siswa + reasoning |

Spesifikasi numerik PRJ-01 (zakat UI) — baca **spec**, bukan kode:

```text
"Jika harta ≥ nisab DAN haul terpenuhi → tampilkan wajib zakat."
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Struktur logika? | Dua kondisi AND — spiral S1/S2 validasi |
| Di web — output where? | Elemen DOM, bukan console saja |

---

## Praktik Mandiri

1. **Dokumen spec + acceptance** — milik siswa, guru approve
2. **Wireframe** halaman PRJ
3. **Folder struktur** — file ada, implementasi minimal/kosong
4. **Target P13** — 1 kalimat deliverable + 1 blocker
5. **Opsional:** 3–5 baris komentar `// TODO` — **bukan** file dari guru

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Minta "template project pak/bu" | Tolak — template **spec**, bukan kode |
| Langsung coding tanpa spec | Stop lembut — "Acceptance PRJ kamu?" |
| Copy spec/wireframe internet | Wajibkan uji ROBI + revisi |
| Scope PRJ = website sekolah penuh | Potong ke DoD bank PRJ |
| Guru tempted demo cepat | Etika facilitator — tanya, jangan ketik solusi |
| Copas halaman mini P11 = selesai | PRJ butuh spec sendiri + fitur DoD |

---

## Rujukan

- Modul: [X-S2-P12](../../../kelas-x/semester-2/X-S2-P12_project-s2-kickoff.md)
- PRJ-01: [Kalkulator Zakat UI](../../../08-project/PRJ_X_S2_01_Zakat_UI.md)
- PRJ-02: [Jadwal Kegiatan](../../../08-project/PRJ_X_S2_02_Jadwal_Kegiatan.md)
- PRJ-03: [Absensi Mini](../../../08-project/PRJ_X_S2_03_Absensi_Mini.md)
- PRJ-04: [Profil Ekskul](../../../08-project/PRJ_X_S2_04_Profil_Ekskul.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Dry run: [P11 Sintesis](./X-S2-P11_sintesis-halaman-mini.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Setiap siswa/kelompok punya PRJ + varian + spec + acceptance
- [ ] Guru approve spec — feedback process-oriented
- [ ] **Tidak** ada solusi project penuh dibagikan (file/WA/proyektor)
- [ ] **Tidak** takeover keyboard siswa
- [ ] Wireframe + struktur folder minimal ada
- [ ] Target P13 + blocker tercatat
- [ ] Peer review P15 & demo reasoning diingatkan
- [ ] AI policy diingatkan jika relevan

[← Indeks materi X-S2](./X-S2_Materi_Index.md)
