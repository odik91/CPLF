# Handout Siswa — X-S2-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P12_project-s2-kickoff.md](../../../kelas-x/semester-2/X-S2-P12_project-s2-kickoff.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Presentasi 4 opsi PRJ + varian rotasi |
| 10–25 | [Rubrik Project](../../09-rubrik/09_Rubrik_Project.md) — penekanan COM/reasoning |
| 25–45 | Spec + acceptance + wireframe |
| 45–55 | Guru feedback round |
| 55–75 | Setup repo folder / struktur file |
| 75–85 | Target P13–P14 |
| 85–90 | Exit |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
