# Materi Guru Lengkap — X-S1-P06

**Handout siswa (bagikan):** [X-S1-P06_gambar-rumah-requirement_siswa.md](./X-S1-P06_gambar-rumah-requirement_siswa.md)

**Modul:** [X-S1-P06_gambar-rumah-requirement.md](../../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md)

**Materi pendukung sumber:** [X-S1-P06_gambar-rumah-requirement.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P06 — Gambar Rumah & Requirement

| Field | Isi |
|-------|-----|
| Kode | X-S1-P06 |
| Unit | X1.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-B1, CX-K1 |
| MM | MM-23, MM-01 |
| EXP | [EXP_02](../../07-experience_library/EXP_02_Gambar_Rumah.md) · varian [A/B/C](../../07-experience_library/EXP_02_Gambar_Rumah.md#varian-rotasi-kasus-beda-trap-sama) |

## Learning Transformation

Dari “instruksi sama = hasil sama” → “requirement harus spesifik & testable.”

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | 1 menit — ingat algoritma eksplisit dari P04 |
| 5–20 | Experience | “Gambar rumah” 3 menit — pajang hasil beda |
| 20–30 | Trap + Q | Kenapa beda padahal instruksi sama? |
| 30–40 | Clarify | Apa info yang guru tidak berikan? |
| 40–50 | Concept | Requirement · ambiguitas · spesifikasi |
| 50–70 | Practice | Tulis brief 5 poin untuk “poster kegiatan MA” |
| 70–85 | Practice 2 | Tukar brief — teman gambar/sketsa 5 menit — cocok? |
| 85–90 | Exit | 1 poin brief yang paling penting |

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Varian Logo/Website/Poster untuk rotasi paralel.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P06 Gambar Rumah & Requirement


## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P06 |
| Modul pertemuan | [X-S1-P06_gambar-rumah-requirement.md](../../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md) |
| Semester | 1 · Pertemuan 6/18 |
| Unit | X1.3 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CX-B1, CX-K1 |
| Experience | [EXP_02](../../../../07-experience_library/EXP_02_Gambar_Rumah.md) · varian Logo / Website / Poster |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## 1. Pengetahuan yang Dikuasai Guru

### Requirement vs instruksi samar

- **"Gambar rumah"** = instruksi **ambigu** — setiap siswa bawa interpretasi (joglo, flat, panggung, tanpa atap).
- **Requirement** = spesifikasi yang **testable** — bisa dijawab benar/salah: "Ada atap? Ada 2 pintu?"

### Ambiguitas = sumber bug di proyek nyata

- Klien/internal MA: "Buat poster bagus" vs brief 5 poin → hasil sangat beda.
- Sama dengan P04: mesin literal + instruksi samar = hasil tidak sesuai harapan.

### Acceptance criteria (bahasa sederhana)

- Dari requirement → **kriteria penerimaan**: checklist ✅/❌ setelah teman gambar/sketsa.
- Contoh: "Poster harus memuat logo MA, tanggal, 3 bullet kegiatan, ukuran A4 portrait."

### Hubungan ke alur CPLF

| Pertemuan | Konsep |
|-----------|--------|
| P01 | Pahami masalah & batas |
| P04–P05 | Algoritme eksplisit |
| P06 | Spesifikasi sebelum "build" |
| P07 | Spesifikasi formal + acceptance |
| P08+ | Build (kode) |

### Varian rotasi

- **Logo MA** — warna, bentuk, teks wajib
- **Website sederhana** — jumlah section, menu
- **Poster kegiatan** — ukuran, elemen wajib (practice utama modul)

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P04: kenapa ROBI gagal padahal patuh? | Instruksi tidak eksplisit — langkah implisit |
| P05: bagaimana uji flowchart? | Trace dengan kasus contoh — cari cabang hilang |
| P01: apa risiko solusi sebelum paham masalah? | Salah sasaran — mirip instruksi "rumah" tanpa brief |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan bagikan brief poster "contoh jawaban" lengkap. Siswa **tulis brief sendiri**; guru demo brief **live** di papan (bisa sengaja ambigu dulu). |
| **Live coding / live modeling** | **Live brief** — guru ucapkan "Gambar rumah" tanpa detail; siswa gambar; **live debrief** pajang hasil beda. |
| **Per baris / scope** | Setiap **poin requirement** = satu scope TTS: Tebak apa yang perlu dispesifikasi → Tanya cara uji → Spelling: tulis kalimat testable. |
| **Recall** | Opening 1 menit: algoritme eksplisit dari P04. |
| **Membaca kode** | Latih **membaca brief/requirement** — siswa baca 5 poin, prediksi gambar teman sebelum menggambar. |

---

## 4. Materi Inti

### Experience "Gambar rumah" (3 menit)

- Guru: **"Gambarlah rumah."** — tanpa detail lain.
- Pajang 4–6 hasil berbeda.
- Trap: instruksi sama — kenapa beda?

### Clarify: info yang tidak diberikan

- Jumlah lantai? ada atap? ada pintu/jendela? gaya? skala? media?
- Siswa revisi menjadi **5–7 poin requirement testable**.

### Practice 2 fase

1. **Brief 5 poin** untuk "poster kegiatan MA" (bukan rumah — transfer ke konteks MA).
2. **Tukar brief** — teman gambar/sketsa 5 menit.
3. **Checklist ✅/❌** — cocok tidak dengan brief?

### Contoh brief buruk vs baik

| Buruk (ambiguous) | Baik (testable) |
|-------------------|-----------------|
| "Poster menarik" | "Background warna hijau atau putih" |
| "Tulis kegiatan" | "Minimal 3 bullet kegiatan, masing-masing ≤8 kata" |
| "Ada logo" | "Logo MA di kiri atas, tinggi ±3 cm di kertas A4" |

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Kertas + pensil per siswa (atau tablet gambar sederhana)
- Papan untuk brief live
- **Jangan** tunjukkan contoh poster jadi sebagai "target"
- Timer visible (3 menit + 5 menit)

### Skrip live brief

```text
[LANGKAH 1 — Recall cepat]
Ucapkan: "Algoritme eksplisit — ROBI butuh langkah jelas."
Tanya siswa: "Instruksi 'gambar rumah' eksplisit atau ambigu?"
Scope/blok: 1–2 menit

[LANGKAH 2 — Instruksi ambigu live]
Ucapkan: "Gambarlah rumah. Tiga menit. Mulai."
Scope/blok: Diam · guru tidak jawab pertanyaan detail (sengaja)

[LANGKAH 3 — Pajang & trap]
Tempel: 4 gambar berbeda
Ucapkan: "Instruksinya sama. Kenapa beda?"
Tanya siswa: "Apa persisnya yang sama? Apa yang beda?"
Scope/blok: Debat · jangan validasi satu gambar sebagai benar

[LANGKAH 4 — Clarify di papan]
Tulis: daftar "Info yang guru TIDAK berikan"
Ucapkan per poin (TTS)
Scope/blok: Siswa lengkapi daftar

[LANGKAH 5 — Concept requirement]
Tulis: REQUIREMENT = spesifik · testable
Ucapkan: "Bukan 'bagus' — tapi bisa dicek benar/salah."
Scope/blok: Contoh 1 poin buruk → perbaikan live

[LANGKAH 6 — Practice poster]
Ucapkan: "Brief 5 poin poster kegiatan MA — tukar — teman gambar 5 menit."
Scope/blok: 20 menit · checklist ✅/❌
```

---

## 6. Latihan Membaca Algoritme / Requirement

Proyeksikan brief (baca & prediksi gambar, **jangan** copy):

```text
REQUIREMENT Poster_v1
  1. Judul acara terbaca dari jauh
  2. Warna cerah
  3. Ada logo sekolah
  4. Informasi lengkap
  5. Ukuran proporsional
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Poin mana paling ambigu? | 2, 4, 5 — tidak testable |
| Dua executor gambar — prediksi hasil | Sangat beda (warna cerah = pink vs kuning) |
| Perbaiki poin 1 saja | "Judul ≥24pt, posisi tengah atas, font sans-serif" |
| Hubungkan P05 | Trace brief seperti trace flowchart — input samar → output beda |

---

## 7. Praktik Mandiri Siswa

- Tulis **brief 5 poin** poster kegiatan MA (testable).
- Tukar dengan teman → gambar/sketsa 5 menit.
- Checklist ✅/❌ per poin requirement.
- Exit: **1 poin brief** yang paling penting + alasan.
- Refleksi: pernah marah karena "sudah jelasin" tapi teman punya gambaran beda?

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Brief masih pakai kata "menarik/bagus" | Guru kasih contoh poster jadi — siswa copy gaya bukan brief |
| Requirement tidak bisa dicek ✅/❌ | Guru jawab pertanyaan detail saat "gambar rumah" |
| Gambar teman dinilai "jelek" bukan "sesuai brief" | Guru hanya demo rumah, tidak transfer ke poster MA |
| Swap — brief tidak dibaca teman | Guru skip checklist acceptance |
| Langsung buka Canva template | Guru bagikan file brief siap pakai |

---

## 9. Rujukan

- Modul: [X-S1-P06](../../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md)
- [EXP_02](../../../../07-experience_library/EXP_02_Gambar_Rumah.md)
- MM: MM-23, MM-01
- Rubrik: **REA**, **COM**
- Lanjutan: P07 spesifikasi & acceptance criteria

---

## 10. Checklist Exit Guru

- [ ] Live instruksi ambigu "gambar rumah" — bukan slide contoh
- [ ] TTS per poin requirement
- [ ] Recall P04–P05 di opening
- [ ] Siswa baca brief ambigu & sebut poin tidak testable
- [ ] Practice poster MA + swap + checklist
- [ ] Tidak ada distribusi brief/template jadi
- [ ] File materi pendukung tidak ke siswa

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Requirement jelas = janji yang bisa dipegang tim & pengguna.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
