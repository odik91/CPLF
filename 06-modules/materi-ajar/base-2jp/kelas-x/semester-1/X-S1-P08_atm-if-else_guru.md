# Materi Guru Lengkap — X-S1-P08

**Handout siswa (bagikan):** [X-S1-P08_atm-if-else_siswa.md](./X-S1-P08_atm-if-else_siswa.md)

**Modul:** [X-S1-P08_atm-if-else.md](../../../kelas-x/semester-1/X-S1-P08_atm-if-else.md)

**Materi pendukung sumber:** [X-S1-P08_atm-if-else.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P08_atm-if-else.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P08 — ATM & If/Else (Konsep)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P08 |
| Unit | X1.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3, CX-B3 |
| MM | MM-13, MM-04 |
| EXP | [EXP_04 ATM](../../07-experience_library/EXP_04_ATM.md) · varian [A/B/C](../../07-experience_library/EXP_04_ATM.md#varian-rotasi-kasus-beda-trap-sama) |

## Learning Transformation

Dari “langsung aksi” → “keputusan berdasarkan kondisi (validasi).”

---

## Timeline (90 menit)

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

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Hubungkan ke validasi form web di Semester 2 (spiral).


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P08 ATM & If/Else (Konsep)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P08 |
| Modul pertemuan | [X-S1-P08_atm-if-else.md](../../../kelas-x/semester-1/X-S1-P08_atm-if-else.md) |
| Unit | X1.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3, CX-B3 |
| MM | MM-13, MM-04 |
| EXP | [EXP_04 ATM](../../../07-experience_library/EXP_04_ATM.md) |
| Formatif | REA, OBS |
| Ada live code? | **Pseudocode live** — **BELUM syntax JavaScript penuh** (JS di P09) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Acceptance criteria minggu lalu — kapan kita centang ✅?" | Kalau kondisi terpenuhi / observable pass |
| "AC yang fail — apakah kita lanjut serahkan ke klien?" | Tidak — harus perbaiki atau tolak (analogi validasi) |
| "Satu AC poster P07 yang seperti 'syarat lulus'?" | Siswa sebut contoh: terbaca, ada info X, dll. |

Bridge ke metafora: "Hari ini kondisi bukan di checklist kertas — di mesin ATM dan aturan sekolah."

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan bagikan file pseudocode lengkap — siswa **ketik ulang** setelah guru model di papan |
| **Live modeling** | Role-play ATM live; pseudocode ditulis **baris demi baris** di papan, bukan paste |
| **Per baris / scope** | Setiap `JIKA` — tanya "blok mana yang jalan kalau PIN salah?" sebelum lanjut baris |
| **Recall** | AC P07 = kondisi lulus; ATM = kondisi uang keluar |
| **Membaca kode** | Latihan baca **pseudocode** & flowchart — prediksi jalur, bukan copy ke laptop |
| **No starter file** | Laptop boleh kosong/tidak dipakai di Practice 1; worksheet opsional, bukan jawaban |

---

## Materi Inti

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

## Alur Live Coding / Live Modeling

> **Pseudocode & flowchart live** — bukan file `.js`. Proyektor/papan = "editor" guru.

### Persiapan

- Props opsional: kartu karton ATM
- Papan: kosong — belum ada flowchart
- **Tidak boleh** di laptop siswa: pseudocode ATM lengkap, screenshot jawaban P09

### Skrip live

```text
[LANGKAH 1 — Opening 0–5 menit]
Recall: 3 kriteria dari AC — "kapan boleh lanjut?"
Ucapkan: "AC = manusia centang. Program = mesin yang centang otomatis."
Tanya: "Apa bedanya 'lulus' di rubrik vs 'boleh tarik uang' di ATM?"
Scope: meta — kondisi mengatur lanjut/tidak.

[LANGKAH 2 — Experience 5–20 menit]
Role-play: Guru = ATM. Siswa minta tarik Rp100.000.
Skenario A (2 menit): langsung beri uang tanpa tanya.
Skenario B: minta PIN → salah → tolak → benar → cek saldo → proses.
Ucapkan: "Sungguhan tidak pernah Skenario A — kenapa?"
Tanya: "Siapa yang dilindungi kalau skip validasi?"
Scope: experience sebelum istilah if/else.

[LANGKAH 3 — Trap 20–30 menit]
Tulis: "Proses ATM = nominal → uang keluar"
Ucapkan: "Trap — seolah-olah cuma 2 langkah."
Tanya: "Input apa saja? Proses di tengah? Output?"
Scope: IPO + cabang tersembunyi.

[LANGKAH 4 — Clarify 30–40 menit]
Live daftar kondisi di papan:
  1. Kartu valid
  2. PIN benar
  3. Saldo >= nominal
Ucapkan: "Semua harus BENAR baru uang keluar."
Tanya edge case: "PIN benar, saldo Rp10.000, minta Rp100.000?"
Scope: AND logika — satu false = tolak.

[LANGKAH 5 — Concept 40–50 menit]
Intro istilah: if/else · validasi · cabang keputusan
Gambar flowchart sederifik (belah diamond):
  PIN benar? → ya → saldo cukup? → ya → keluarkan
              → tidak → tolak
Scope: diamond = keputusan; kotak = aksi.

[LANGKAH 6 — Practice 50–65 menit]
Flowchart live: "Izin keluar kelas" ATAU "Vending machine"
Ketik pseudocode bareng (contoh izin keluar):

  JIKA punya_surat_izin BENAR maka
    catat waktu_keluar
    izinkan_keluar
  SELAIN ITU
    tolak_keluar

Ucapkan per baris — TTS:
  Tebak: "Baris JIKA mau ngecek apa?"
  Tanya: "Kalau surat ada tapi jam istirahat belum — cukup?"
  Spelling: jelaskan indent/blok = scope aksi
Scope: blok JIKA vs SELAIN ITU mutually exclusive.

[LANGKAH 7 — Practice 2 65–80 menit]
Siswa tulis pseudocode sendiri (vending / perpustakaan / satpam ringan)
Guru larang buka JS — worksheet atau Docs cukup
Keliling: baca pseudocode siswa seperti "membaca kode" — prediksi output
Scope: siswa versi sendiri, struktur IF wajib ada.

[LANGKAH 8 — Exit 80–90 menit]
Edge case: PIN benar, saldo tidak cukup — tulis cabang pseudocode
Ucapkan: "Minggu depan baris ini jadi JavaScript."
Scope: foreshadow P09.
```

### Contoh pseudocode ATM (referensi guru — jangan print ke siswa)

```text
MINTA pin_dari_user
MINTA nominal

JIKA pin_dari_user SAMA_DENGAN pin_tersimpan maka
  JIKA saldo >= nominal maka
    saldo = saldo - nominal
    KELUARKAN uang sebesar nominal
  SELAIN ITA
    TAMPILKAN "Saldo tidak cukup"
  AKHIR_JIKA
SELAIN ITU
  TAMPILKAN "PIN salah"
AKHIR_JIKA
```

Jelaskan scope bersarang: blok dalam `JIKA pin` hanya jalan jika PIN benar.

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. **Flowchart** proses pilih menu kantin (≥4 keputusan) — kertas/Docs.
2. **Pseudocode** "akses perpustakaan": punya kartu + tidak ada denda → boleh pinjam.
3. **Edge case:** tulis 1 skenario fail yang sering dilupakan (mis. kartu ada, buku sudah max pinjam).
4. **Bonus (tanpa JS):** ubah Snippet C jadi `SELAIN ITU` untuk cuaca — prediksi beda output.

Siswa **tidak** copy flowchart guru — variasi konteks wajib (kantin/OSIS/ekskul).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Langsung minta "kodenya JavaScript" | Tekankan roadmap: logika P08 → syntax P09 |
| If tanpa else — tidak ada jalur gagal | Tanya: "Kalau kondisi salah, mesin diam? user bingung?" |
| Lupa edge case saldo | Demo oral PIN benar + saldo kurang |
| Pseudocode tidak indent — scope blur | Model indent di papan; jari tunjuk blok |
| Copy flowchart teman identik | Variasi konteks + 1 pertanyaan guiding berbeda |
| Guru paste pseudocode 20 baris sekaligus | Max 3–5 baris live, pause TTS |

---

## Rujukan

- Modul: [X-S1-P08](../../../kelas-x/semester-1/X-S1-P08_atm-if-else.md)
- EXP: [EXP_04 ATM](../../../07-experience_library/EXP_04_ATM.md)
- Sebelum: [P07 Acceptance Criteria](./X-S1-P07_spesifikasi-acceptance.md)
- Lanjut: [P09 Satpam JS](./X-S1-P09_satpam-js-kondisi.md)
- MM-13, MM-04 · CX-T3, CX-B3

---

## Checklist Exit

- [ ] Role-play ATM A vs B sudah live
- [ ] Siswa bisa sebut ≥3 kondisi sebelum aksi irreversible
- [ ] Minimal 1 flowchart + pseudocode **versi siswa** (bukan copy guru)
- [ ] Edge case PIN benar / saldo tidak cukup dibahas
- [ ] **Belum** distribusi file `.js` — siswa tahu JS = pertemuan berikutnya
- [ ] Latihan baca pseudocode — siswa prediksi output tanpa laptop
- [ ] Recall P07 terpasang

[← Indeks materi X-S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · adil

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:135 · QS Al-Mutaffifin 83:1–3

**Kait di kelas hari ini:** Aturan if/else = perlakuan adil (semua kondisi terlayani).

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
