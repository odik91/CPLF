# Handout Siswa — X-S1-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P08_atm-if-else.md](../../../kelas-x/semester-1/X-S1-P08_atm-if-else.md)

---

## 1. Tujuan pembelajaran

Dari “langsung aksi” → “keputusan berdasarkan kondisi (validasi).”

---

## 2. Ringkasan konsep

**Substansi wajib sebelum mengajar:**

1. **If/else** = cabang keputusan: program (atau proses) memilih jalur berdasarkan kondisi TRUE/FALSE.
2. **Validasi** = cek kondisi **sebelum** aksi irreversible (uang keluar, data terhapus, izin keluar).
3. ATM = metafora kuat: input → **kondisi** → output; bukan input → langsung output.
4. Edge case wajib di P08: PIN benar **tapi** saldo tidak cukup → cabang else/reject.
5. Pertemuan ini **sengaja tanpa JS** — siswa kuat di logika dulu; syntax `if (...)` baru P09.
6. Hubungkan ke P07: AC = daftar kondisi yang harus TRUE agar produk "lulus".

**Syntax pseudocode yang dipakai kelas** (konsisten dengan P05):

```text
JIKA kondisi BENAR maka
  aksi A
SELAIN ITU
  aksi B
```

Boleh campur Indonesia + English (`IF`, `ELSE`) asal scope `{ blok }` atau indentasi jelas.

**Yang guru TIDAK perlu hafal:** detail syntax JS (`===`, `{}`, semicolon) — itu P09.

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** "Langsung aksi" (tarik uang, izin keluar, publish)  
**Ke:** "Keputusan berdasarkan kondisi (validasi) dulu."

### EXP_04 — ATM (ringkas untuk guru)

| Skenario | Trap | Clarify |
|----------|------|---------|
| A: langsung kasih uang | Bahaya — tidak ada validasi | — |
| B: minta PIN, cek, baru proses | — | Uang keluar hanya jika PIN benar **DAN** saldo cukup **DAN** kartu valid |

### Konsep if / else / validasi

- **If:** jalur A jika kondisi benar
- **Else:** jalur B jika kondisi salah
- **Validasi:** kumpulan if sebelum aksi utama
- **Edge case:** kondisi campuran (PIN OK, saldo fail)

### Belum JavaScript

Guru tegaskan: "Struktur logika hari ini sama persis dengan program nanti — minggu depan kita ketik di VS Code."

Spiral ke Semester 2: validasi form web = satpam digital.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall criteria — kapan boleh lanjut? (meta: kondisi) |
| 5–20 | Experience | Role-play ATM: langsung uang vs PIN benar |
| 20–30 | Trap | Kenapa ATM tidak langsung keluarkan uang? |
| 30–40 | Clarify | Daftar kondisi TRUE sebelum uang keluar |
| 40–50 | Concept | If/else · validasi · cabang keputusan |
| 50–65 | Practice | Flowchart “izin keluar kelas” / vending machine |
| 65–80 | Practice 2 | Pseudocode dengan IF (bahasa Indonesia/Indonesia+English) |
| 80–90 | Exit | 1 kondisi edge case (PIN benar, saldo tidak cukup) |

**Catatan:** Belum wajib syntax JS — bisa di P09.

---

## 5. Lembar kerja / latihan

> Snippet **pseudocode** — proyeksikan, siswa prediksi **tanpa mengetik**.

### Snippet A — PIN

```text
pin_tersimpan = 1234
pin_input = 9999

JIKA pin_input SAMA_DENGAN pin_tersimpan maka
  TAMPILKAN "Selamat datang"
SELAIN ITU
  TAMPILKAN "PIN salah"
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Output apa? | "PIN salah" |
| Blok mana yang **tidak** jalan? | TAMPILKAN "Selamat datang" |
| Ubah pin_input = 1234 — output? | "Selamat datang" |

### Snippet B — Edge case saldo

```text
saldo = 50000
nominal = 100000

JIKA saldo >= nominal maka
  TAMPILKAN "Uang keluar"
SELAIN ITU
  TAMPILKAN "Saldo tidak cukup"
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Output? | "Saldo tidak cukup" |
| Kondisi `saldo >= nominal` true atau false? | False (50000 < 100000) |

### Snippet C — Urutan eksekusi

```text
JIKA hari SAMA_DENGAN "Jumat" maka
  TAMPILKAN "Sholat Jumat"
JIKA cuaca SAMA_DENGAN "hujan" maka
  TAMPILKAN "Bawa payung"
```

(hari = "Jumat", cuaca = "cerah")

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Output apa saja? | Hanya "Sholat Jumat" |
| Apakah ini else if? | Tidak — dua if independen; keduanya bisa jalan jika kondisi terpenuhi |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Diri · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ta-Ha 20:114 (Rabbi zidni ilma)

**Kait di kelas hari ini:** Bernalar & literasi digital sebagai ilmu bermanfaat.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
