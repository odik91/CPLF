# Materi Guru Lengkap — XI-S3-P01
**Modul:** [XI-S3-P01_aplikasi-sistem-ipo.md](../../kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md)
**Materi pendukung sumber:** [XI-S3-P01_aplikasi-sistem-ipo.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P01 — Aplikasi = Sistem IPO

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P01 |
| Semester | 3 · Pertemuan 1/18 |
| Unit | XI3.1 |
| Durasi | 2 JP = **90 menit** |
| Capability | CXI-B1 |
| CP | AP, BK |
| MM | MM-11 |

## Learning Transformation

Dari “kumpulan tombol/HTML” → **sistem** dengan Input–Process–Output–State.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–5 | Opening | Do Now: sebut 1 app favorit — apa input & outputnya? | Recall spiral X: halaman → perilaku |
| 5–18 | Experience | Role-play **POS kantin**: kasir, pelanggan, stok — siapa input/process/output? | Timer 10’ |
| 18–28 | Trap + Q | Trap: “tinggal tambah tombol” fix semua. Tanya: state stok di mana hidup? | Jangan langsung coding |
| 28–38 | Clarify | *Desain alur sebelum fitur.* Bandingkan 2 diagram kelompok | Papan |
| 38–48 | Concept | **IPO + State** · diagram kotak | Belum framework |
| 48–65 | Practice | Gambar IPO 1 app sederhana (absensi/kuis) — 4 kotak + 1 state | Kertas/digital |
| 65–80 | Reflect | “App X kelas lalu (X2) — di mana Process-nya?” | 2 kalimat |
| 80–90 | Transfer | Masalah tanpa state = bug tersembunyi | Preview P02 blueprint |

**Adaptasi 1 JP:** Opening 3’ · Experience 12’ · Clarify 10’ · Practice 15’ · Exit 5’.

---

## Cognitive Trap

**Asumsi:** Fitur = tombol baru; tidak perlu pikir alur data.  
**Aman:** Puji ide fitur; tanya “data masuk dari mana, simpan di mana?”

---

## Guiding Questions

1. Apa **input** pengguna yang valid vs tidak?  
2. Apa **state** yang harus diingat antar klik?  
3. Output apa yang membuktikan proses berhasil?

---

## Props / Fallback

- Kertas A3 · sticky note warna (I/P/O/S)  
- Offline: app kalkulator HP sebagai contoh IPO

---

## Exit Ticket

1. Sketsa IPO app pilihanmu (4 label)  
2. Satu state yang wajib disimpan  

---

## Formatif

**REA**, **OBS** — [09_Rubrik_Formatif_Unit.md](../../../09-rubrik/09_Rubrik_Formatif_Unit.md)

---

## Catatan Guru

Pertemuan buka XI: ton “membangun solusi”, bukan sintaks baru. Hubungkan ke project akhir S3.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P01 Aplikasi = Sistem IPO

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P01 |
| Modul pertemuan | [XI-S3-P01_aplikasi-sistem-ipo.md](../../../kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md) |
| Unit | XI3.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B1 |
| CP | AP, BK |
| MM | MM-11 |
| Formatif | REA, OBS |
| Ada live code? | **Tidak — live modeling IPO di papan** (bukan sintaks baru) |

---

## Pengetahuan Guru

**Pertemuan buka Kelas XI Semester 3:** ton "membangun solusi", bukan belajar tag HTML baru. Siswa sudah punya halaman web + interaksi dari **Kelas X S2** — hari ini naik level: **aplikasi = sistem**, bukan kumpulan tombol.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Sistem** | Bagian yang saling terhubung — input masuk, proses jalan, output keluar, **state** diingat |
| **Input** | Apa yang user/komponen lain **berikan** (klik, teks form, sensor) — valid vs invalid |
| **Process** | Aturan/transformasi — validasi, hitung, simpan ke state, putuskan langkah berikut |
| **Output** | Bukti proses berhasil — tampilan, pesan, file, perubahan di layar |
| **State** | Data yang **harus diingat** antar aksi — stok, step wizard, daftar todo, skor |
| **IPO tanpa State** | Diagram tidak lengkap — app "lupa" setelah refresh/klik berikutnya |

**Metafora POS kantin:** kasir terima pesan (input) → cek stok + hitung (process) → struk + makanan (output) → **stok berkurang** (state berubah).

**Trap modul:** "Tinggal tambah tombol" fix semua — **aman:** puji ide fitur, tanya "data masuk dari mana, disimpan di mana?"

**Spiral Kelas X (2–5 menit, jangan re-teach):**
- S2 portofolio / halaman mini — **Process-nya di mana?** (JS callback, validasi, render list)
- P18 refleksi — dari problem solver → web sederhana; XI = **sistem terencana**
- Jangan ulang querySelector/CSS dari nol — asumsikan sudah pernah

**Preview P02:** IPO hari ini jadi **blueprint** yang bisa diuji tim + dipakai kickoff project P12.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Project S2 / portofolio X — satu fitur interaktif apa?" | (todo, form, counter — siswa sebut sendiri) |
| "Tombol ada tapi app tidak ingat data — kenapa?" | Belum ada **state** yang disimpan antar klik |
| "Validasi form X-S2 — itu bagian IPO mana?" | **Process** — cek input sebelum output/simpan |
| "S1 vs S2 vs XI — beda fokus?" | S1 logika · S2 halaman web · XI **desain sistem aplikasi** |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Diagram IPO **digambar live** di papan — bukan slide template penuh |
| **Live modeling** | Role-play POS kantin + sketsa kotak I/P/O/S — siswa ikut label sticky note |
| **Per kotak / scope** | Setiap kotak diagram = satu pertanyaan guiding sebelum isi |
| **Recall** | Buka screenshot/link portofolio X — 1 menit, bukan demo coding ulang |
| **Membaca "diagram"** | Tampilkan 2 sketsa siswa ( atau contoh ) — cari **hole** sebelum perbaiki |
| **No starter file** | Tidak ada file kode hari ini — kertas A3 / papan / digital whiteboard |

---

## Materi Inti

### Transformasi

**Dari:** "Kumpulan tombol/HTML"  
**Ke:** **Sistem** dengan Input – Process – Output – **State**

### Diagram IPO + State (target akhir papan)

```text
┌─────────┐     ┌──────────┐     ┌─────────┐
│  INPUT  │ ──► │ PROCESS  │ ──► │ OUTPUT  │
│ (user)  │     │ (aturan) │     │ (bukti) │
└─────────┘     └────┬─────┘     └─────────┘
                     │
                     ▼
              ┌─────────────┐
              │    STATE    │
              │ (ingat antar│
              │   aksi)     │
              └─────────────┘
```

### Contoh: absensi mini (practice output)

| Kotak | Isi contoh |
|-------|------------|
| Input | Nama + kelas + tombol "Hadir" |
| Process | Validasi kosong · cek duplikat · tambah ke daftar |
| Output | List hadir di layar + pesan sukses/error |
| State | Array `{ id, nama, kelas }` di memori |

### Contoh: app favorit siswa (Do Now)

| App | Input | Process | Output | State |
|-----|-------|---------|--------|-------|
| Kalkulator | Angka + operator | Hitung | Hasil | (opsional: history) |
| WA | Pesan ketik | Kirim/sync | Bubble chat | Thread + unread |
| Game | Tap/swipe | Update skor | UI score | Level, HP |

### Guiding questions (modul)

1. Apa **input** pengguna yang valid vs tidak?
2. Apa **state** yang harus diingat antar klik?
3. Output apa yang membuktikan proses berhasil?

### Props / fallback

- Kertas A3 · sticky note warna (I/P/O/S)
- Offline: kalkulator HP — tekan angka (input) → proses internal → layar (output) → memory (state jika M+/MR)

---

## Alur Live Modeling

> **Tidak ada live coding JS.** Semua di papan/kertas. Spiral X = verbal + artefak portofolio.

### Persiapan

- Sticky note 4 warna (I/P/O/S)
- Timer role-play 10 menit
- 1–2 screenshot project S2 siswa (opsional) — **bukan** file HTML distribusi

### Skrip TTS — model live kotak demi kotak

```text
[LANGKAH 0 — Opening 0–5 menit]
Do Now: sebut 1 app favorit — apa input & outputnya?
Recall: "Tahun X kita sudah buat halaman web interaktif — hari ini kita pikir sebagai SISTEM."
Tanya: "Portofolio S2 — Process-nya ada di mana?" (JS, validasi, bukan di HTML saja)

[LANGKAH 1 — Experience POS kantin 5–18]
Role-play: kasir, pelanggan, stok
Ucapkan: "Pelanggan = input. Kasir hitung = process. Makanan + struk = output."
Tanya: "Stok es teh habis — info itu hidup di mana?" → STATE
Tempel sticky S di papan: "stok: es_teh = 3"

[LANGKAH 2 — Trap 18–28]
Ucapkan trap: "Tinggal tambah tombol 'Beli' — selesai?"
Tanya: "Kalau stok 0, tombol masih bisa diklik — bug di kotak mana?" → Process + State
Jangan coding — tetap diagram

[LANGKAH 3 — Clarify 28–38]
Bandingkan 2 diagram kelompok ( atau contoh guru )
Ucapkan: "Desain alur sebelum fitur — blueprint dulu, kode nanti (P03+)."
Tanya: "Diagram mana yang punya state eksplisit?"

[LANGKAH 4 — Concept IPO+State 38–48]
Gambar 4 kotak + panah loop state
Ucapkan: "Input valid/invalid beda process. Output = bukti. State = ingat antar klik."
Scope: satu app absensi — label tiap kotak bareng

[LANGKAH 5 — Practice 48–65]
Individu/kelompok: sketsa IPO app absensi ATAU kuis sederhana
Wajib: ≥1 input · process · output · ≥1 state
Guru keliling — OBS: apakah siswa menempel state atau hanya I/P/O?

[LANGKAH 6 — Reflect 65–80]
"Tampilkan project web kelas X — di mana Process-nya?" — 2 kalimat tulis
Transfer: "Masalah tanpa state = bug tersembunyi" (contoh: counter reset, form tidak ingat)

[LANGKAH 7 — Preview P02 80–90]
Ucapkan: "Besok blueprint + state diagram — bisa di-sw peer review."
Exit ticket: sketsa IPO + 1 state wajib
```

---

## Latihan Membaca "Diagram"

> Proyeksikan sketsa — prediksi bug, jangan copy ke kertas guru.

### Diagram A — Tombol saja

```text
INPUT: klik "Tambah"
PROCESS: ???
OUTPUT: list tampil
STATE: (kosong)
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug tersembunyi? | Tidak ingat item sebelumnya — **state kosong** |
| Perbaikan? | Tambah array/list di state + process append |

### Diagram B — Validasi lemah

```text
INPUT: nama (boleh kosong)
PROCESS: tambah ke list
OUTPUT: list
STATE: array nama
```

| Pertanyaan | Kunci |
|------------|-------|
| Input invalid? | Nama kosong tetap masuk — process tidak cek |
| Process fix? | If kosong → output error, jangan mutasi state |

### Diagram C — Spiral project S2

```text
Web todo X-S2:
INPUT: teks + tombol add
PROCESS: push array + render DOM
OUTPUT: <ul> item
STATE: todos[]
```

| Pertanyaan | Kunci |
|------------|-------|
| Process di kode X biasanya di mana? | Event handler / function setelah klik |
| Tanpa state todos[]? | DOM saja — re-render sulit, data hilang saat refresh |

---

## Praktik Mandiri Siswa

1. **Sketsa IPO** app pilihan: absensi, kuis 5 soal, atau peminjaman buku mini
2. Wajib **4 label**: Input · Process · Output · State (sticky atau digital)
3. Tulis **1 input invalid** + process yang menolaknya
4. **1 kalimat** hubungkan ke project S2: "Process S2 saya mirip dengan …"
5. **Tidak boleh:** copy diagram template guru — desain sendiri

**Extension:** Tandai edge case (duplikat nama, stok habis) di pinggir diagram.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Hanya gambar UI (wireframe) tanpa I/P/O | Tanya: "Saat klik, data ke mana?" |
| State = output (sama-sama "tampilan") | State = **data ingat**; output = **bukti ke user** |
| Process = "JavaScript" (terlalu abstrak) | Spesifik: validasi, hitung, filter, simpan |
| Re-teach HTML/CSS karena "lupa" | Arahkan ke materi X — fokus sistem |
| Guru paste diagram Canva lengkap | Etika CPLF — gambar live di papan |
| IPO tanpa state untuk app multi-klik | Demo counter "lupa" verbal — perlu state |

---

## Rujukan

- Modul: [XI-S3-P01](../../../kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md)
- Lanjut: [P02 Blueprint & State](./XI-S3-P02_blueprint-state.md)
- Spiral X S2: [X-S2_Materi_Index](../../kelas-x/semester-2/X-S2_Materi_Index.md) · [P18 Portofolio](../../kelas-x/semester-2/X-S2-P18_portofolio-tahun-x.md)
- EXP kantin: [EXP_07_C Antrian Kantin](../../../07-experience_library/EXP_07_C_Antrian_Kantin.md) · [EXP_06 Kasir](../../../07-experience_library/EXP_06_Kasir_Minimarket.md)
- CXI-B1 · MM-11
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] IPO + State **digambar live** — bukan slide copas
- [ ] Role-play POS — siswa sebut input/process/output/state
- [ ] Recall portofolio/project S2 — Process diidentifikasi
- [ ] Practice sketsa individu dengan ≥1 state eksplisit
- [ ] Latihan baca diagram A/B — prediksi hole
- [ ] Trap "tinggal tambah tombol" dibahas
- [ ] Exit: sketsa IPO + 1 state wajib + preview P02

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
