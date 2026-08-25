# Handout Siswa — XII-S5-P03

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P03_dataset-mini-bersih.md](../../../kelas-xii/semester-5/XII-S5-P03_dataset-mini-bersih.md)

---

## 1. Tujuan pembelajaran

Dari data mentah → **dataset siap pakai** (bersih, terdokumentasi).

---

## 2. Ringkasan konsep

### Dari mentah ke siap pakai

**Dataset siap pakai** = file yang orang lain bisa pahami **tanpa tanya penulis** + isi konsisten untuk training demo. Bukan sekadar "bersih visual" — harus **terdokumentasi**.

### Masalah umum di data P02 siswa

| Masalah | Gejala | Tindakan cleaning |
|---------|--------|-------------------|
| Missing | Cell kosong, `null`, `-` | Isi (median/modus), hapus baris, atau flag — **catat di README** |
| Typo label | `lulus`, `Lulus`, `lulus ` | Normalisasi: lowercase, trim spasi |
| Duplikat | Baris identik 2× | Hapus atau jelaskan kenapa duplikat valid |
| Format campur | `"2"` vs `2` di kolom numerik | Cast ke number; tolak non-numerik |
| Outlier ekstrem | Skor 1000 | **Jangan hapus otomatis** — tanya "salah input atau valid?" (Trap P03) |
| Kolom tidak relevan | ID urut 1..n | Boleh drop jika bukan fitur |

### Cleaning vs censoring

- **Cleaning** = perbaiki **error** (typo, format salah).
- **Censoring** = hapus data karena **tidak suka hasilnya** (outlier yang sebenarnya valid).

Guru harus tegas: hapus outlier hanya setelah **alasan tertulis** di README.

### Encoding kategorik sederhana (S5)

Untuk demo TF.js nanti, siswa perlu angka:

| Nilai asli | Encoding sederhana |
|------------|-------------------|
| `enak`, `biasa` | 1, 0 atau 2, 1 |
| `ya`, `tidak` | 1, 0 |

**One-hot** penuh = P08+; P03 cukup **label mapping** 1 kolom kategorik → 1 kolom angka.

→ referensi: [MLCC — Categorical Data](https://developers.google.com/machine-learning/crash-course/categorical-data/one-hot-encoding)

### Normalisasi 0–1 (preview)

Fitur skala beda (harga 5000 vs rating 1–5) — nanti jarak/similarity P04 dan training P08 sulit. Rumus sederhana:

```text
x_norm = (x - min) / (max - min)
```

Guru **tidak** wajib derive rumus — cukup demo spreadsheet kolom baru `fitur_norm`.

→ referensi: [MLCC — Numeric Features](https://developers.google.com/machine-learning/crash-course/numerical-data/numeric-features)

### README dataset (5 bullet wajib)

1. **Sumber** — fiktif / survei kelas / observasi (dengan izin)
2. **Tujuan** — prediksi apa
3. **Kolom** — tabel nama + tipe + arti
4. **Cleaning** — apa yang diubah/dihapus
5. **Batasan** — data kecil, bias kelompok, dll.

---

## 3. Materi praktik

### Timeline

```text
Tampilkan dataset kotor
  → Experience: inventaris perpus (format salah)
  → Trap: hapus outlier tanpa tanya
  → Clarify: cleaning vs censoring
  → Concept: encoding · normalisasi 0–1
  → Practice: bersihkan P02 + README
  → Peer swap
  → Exit: file final CSV/JSON + README
```

### Experience — inventaris perpus (menit 5–15)

Contoh: kolom `tahun_terbit` berisi `"2019"`, `2019`, `"dua ribu nineteen"`. Satu kolom salah format → filter/sort rusak.

### Trap (menit 15–25)

Tampilkan baris dengan nilai ekstrem (contoh: `jam_belajar: 24` — valid atau typo?). **Jangan** guru langsung hapus — tahan diskusi.

### Practice (menit 45–70)

Pipeline siswa:

1. Duplikat → drop
2. Label → lowercase trim
3. Missing → keputusan + catat README
4. Kategorik → encode angka
5. (Opsional) numerik → kolom `_norm`
6. Export CSV **dan** JSON
7. README 5 bullet

**Target ≥40 baris** setelah cleaning (boleh gabung 2 kelompok P02 jika perlu — dengan atribusi di README).

### Peer review (menit 70–85)

Partner jawab tanpa tanya penulis:

- Kolom mana fitur?
- Berapa kelas label?
- Apa satu keputusan cleaning kontroversial?

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan dataset kotor: missing, typo, duplikat |
| 5–15 | Experience | **Inventaris perpus** — satu kolom salah format |
| 15–25 | Trap | Hapus outlier tanpa tanya “kenapa ada?” |
| 25–35 | Clarify | Cleaning vs censoring data |
| 35–45 | Concept | Encoding kategorik sederhana · normalisasi 0–1 |
| 45–70 | Practice | Bersihkan dataset P02 + README dataset (sumber, kolom) |
| 70–85 | Peer | Swap — bisa paham tanpa tanya penulis? |
| 85–90 | Exit | Link/file JSON/CSV final |

---

## 5. Lembar kerja / latihan

### Before / after

**Before:**

```text
id,nama_menu,rating,label
1,Nasi,enak,Enak
2,,4,biasa
2,Nasi,5,enak
```

**After (siswa prediksi dulu, guru reveal):**

```text
nama_menu,rating_enc,label
nasi,1,enak
telur,0,biasa
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa `id` hilang? | Bukan fitur prediktif — hanya urutan |
| Baris 2 before — masalah? | Missing nama + rating numerik vs kategorik campur |
| Duplikat id 2 — tindakan? | Drop satu atau merge — harus di README |
| `Enak` vs `enak`? | Normalisasi label |

### Baca README snippet

```markdown

## 6. Exit ticket

1. Link/file JSON/CSV final
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
