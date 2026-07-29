# Handout Siswa — XI-S3-P01

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P01_aplikasi-sistem-ipo.md](../../../kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md)

---

## 1. Tujuan pembelajaran

Dari “kumpulan tombol/HTML” → **sistem** dengan Input–Process–Output–State.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Fitur = tombol baru; tidak perlu pikir alur data.  
**Aman:** Puji ide fitur; tanya “data masuk dari mana, simpan di mana?”

---

## 5. Pertanyaan pemandu

1. Apa **input** pengguna yang valid vs tidak?  
2. Apa **state** yang harus diingat antar klik?  
3. Output apa yang membuktikan proses berhasil?

---

## 6. Alat & fallback

- Kertas A3 · sticky note warna (I/P/O/S)  
- Offline: app kalkulator HP sebagai contoh IPO

---

## 7. Alur pertemuan (90 menit)

|-------|------|-----------|
| 0–5 | Opening | Do Now: sebut 1 app favorit — apa input & outputnya? |
| 5–18 | Experience | Role-play **POS kantin**: kasir, pelanggan, stok — siapa input/process/output? |
| 18–28 | Trap + Q | Trap: “tinggal tambah tombol” fix semua. Tanya: state stok di mana hidup? |
| 28–38 | Clarify | *Desain alur sebelum fitur.* Bandingkan 2 diagram kelompok |
| 38–48 | Concept | **IPO + State** · diagram kotak |
| 48–65 | Practice | Gambar IPO 1 app sederhana (absensi/kuis) — 4 kotak + 1 state |
| 65–80 | Reflect | “App X kelas lalu (X2) — di mana Process-nya?” |
| 80–90 | Transfer | Masalah tanpa state = bug tersembunyi |

**Adaptasi 1 JP:** Opening 3’ · Experience 12’ · Clarify 10’ · Practice 15’ · Exit 5’.

---

## 8. Lembar kerja / latihan

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

## 9. Exit ticket

1. Sketsa IPO app pilihanmu (4 label)  
2. Satu state yang wajib disimpan  

---

## 10. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 11. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
