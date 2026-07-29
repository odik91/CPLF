# Handout Siswa — X-S1-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P06_gambar-rumah-requirement.md](../../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md)

---

## 1. Tujuan pembelajaran

Dari “instruksi sama = hasil sama” → “requirement harus spesifik & testable.”

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 1 poin brief yang paling penting
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Requirement jelas = janji yang bisa dipegang tim & pengguna.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
