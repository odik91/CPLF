# Materi Guru Lengkap — X-S1-P10

**Handout siswa (bagikan):** [X-S1-P10_variabel-data_siswa.md](./X-S1-P10_variabel-data_siswa.md)

**Modul:** [X-S1-P10_variabel-data.md](../../../kelas-x/semester-1/X-S1-P10_variabel-data.md)

**Materi pendukung sumber:** [X-S1-P10_variabel-data.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P10_variabel-data.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P10 — Variabel & Data

| Field | Isi |
|-------|-----|
| Kode | X-S1-P10 |
| Unit | X1.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T2, MM-06 |
| EXP | [EXP_07 Perpustakaan](../../07-experience_library/EXP_07_Perpustakaan.md) (awal — nomor buku) |

## Learning Transformation

Dari “angka/huruf acak” → **menyimpan informasi** agar tidak hilang.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo: hapus catatan NIS di papan — “lupa siapa absen” |
| 5–18 | Experience | Perpustakaan mini — buku tanpa nomor tidak ketemu |
| 18–28 | Trap | Judul saja cukup? (dua buku judul mirip) |
| 28–38 | Clarify | Informasi apa yang harus “ditempel” pada data? |
| 38–48 | Concept | `let` · `const` · variable · assignment |
| 48–70 | Practice | JS: nama, NIS, kelas — `console.log` & ubah nilai |
| 70–85 | Practice 2 | Tanya: const vs let — kapan pakai? (NIS vs skor) |
| 85–90 | Exit | 1 variabel + alasan const/let |

---

## Starter

```javascript
const nis = "12345";
let skor = 0;
skor = skor + 10;
console.log(nis, skor);
```

---

## Formatif

**TEC**, **REA**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P10 Variabel & Data

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P10 |
| Modul pertemuan | [X-S1-P10_variabel-data.md](../../../kelas-x/semester-1/X-S1-P10_variabel-data.md) |
| Unit | X1.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T2, MM-06 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |
| Formatif | TEC, REA |
| Ada live code? | **Ya — live JS** (`let`, `const`, assignment) |

---

## Pengetahuan Guru

| Konsep | Untuk guru |
|--------|------------|
| **Variabel** | Label/kotak penyimpan data di memori program |
| **`let`** | Nilai **boleh diubah** (reassignment) — skor, counter, status sementara |
| **`const`** | Binding **tidak boleh di-assign ulang** — NIS, PI, tanggal lahir |
| **Assignment** | `=` menyimpan nilai ke nama variabel (bukan "sama dengan" matematika) |
| **Tipe dasar (pengantar)** | String (`"12345"`), number (`0`, `10`) — belum deep dive |

**Metafora EXP_07 Perpustakaan:** buku tanpa nomor rak = data tanpa variabel — tidak ketemu lagi.

**Hubungan P09:** siswa sudah pakai `let skor` — hari ini **mendalami** mengapa `let` vs `const`.

**Starter modul = referensi guru saja** — jangan file ke siswa.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P09 — variabel apa yang kita pakai di if skor?" | `let skor` — angka untuk dibandingkan |
| "Kalau skor berubah setelah remidi — nama variabel tetap?" | Ya, isi berubah, nama sama |
| "Satpam cek kondisi — data apa yang disimpan program?" | skor, izin (boolean), dll. |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa ketik nama variabel sendiri (nama/NIS contoh fiktif) |
| **Live coding** | File kosong → deklarasi satu per satu |
| **Per baris / scope** | `const` vs `let` — jelaskan **scope deklarasi** (block scope pengantar jika `let` di dalam for nanti) |
| **Recall** | Hapus catatan NIS di papan — analogi "data hilang tanpa variabel" |
| **Membaca kode** | Snippet: tebak error `const` di-assign ulang |
| **No starter file** | Bangun `perpustakaan.js` atau `data-siswa.js` bareng dari nol |

---

## Materi Inti

### Transformasi

**Dari:** Angka/huruf acak di kepala / papan dihapus  
**Ke:** Menyimpan informasi agar program ingat dan bisa dipakai ulang

### Experience Perpustakaan

- Trap: judul saja cukup? → dua buku judul mirip
- Clarify: butuh **identifier** stabil → nomor buku = variabel

### `let` vs `const` — kapan pakai?

| Situasi | Pilihan | Alasan |
|---------|---------|--------|
| NIS, kode buku | `const` | Identitas tidak berubah selama program jalan |
| Skor, total, jumlah pinjam | `let` | Akan di-update |
| Nama panggilan (jarang) | `let` atau `const` | Di MA: `const` jika tidak diubah |

### Assignment & update

```javascript
let skor = 0;
skor = skor + 10;  // skor jadi 10
```

Baca: "ambil nilai skor lama, tambah 10, simpan lagi ke skor."

---

## Alur Live Coding

> **File KOSONG** — guru ketik live; siswa ikut. **Jangan** bagikan starter modul.

### Persiapan

- File baru: `data-siswa.js` (nama bebas)
- Terminal siap
- Siswa **tidak punya** file template NIS/skor lengkap

### Skrip TTS baris demi baris

```text
[LANGKAH 0 — Experience 5–18 menit]
Demo papan: tulis NIS siswa → hapus → "Absen siapa tadi?"
Ucapkan: "Program juga butuh 'tempel nomor' — itu variabel."

[LANGKAH 1 — const untuk identitas]
Ketik: const nis = "12345";
Ucapkan: "Const = konstanta binding — saya tidak akan reassign nis."
Tanya: "Kenapa string dengan tanda petik? NIS bukan operasi matematika."
Scope: deklarasi global file — hidup sampai file selesai dijalankan.

[LANGKAH 2 — let untuk data berubah]
Ketik: let nama = "Ahmad";
Ketik: let kelas = "X-MM-1";
Ketik: let skor = 0;
Ucapkan: "Skor awal nol — nanti naik setelah aktivitas."
Tanya: "Mana yang kemungkinan berubah minggu ini — NIS atau skor?"
Scope: tiga deklarasi terpisah — masing-masing satu binding.

[LANGKAH 3 — console.log baca variabel]
Ketik: console.log(nis, nama, kelas, skor);
Jalankan: node data-siswa.js
Ucapkan: "Console.log baca **isi** variabel saat ini."
Tanya: "Urutan output mengikuti apa?"
Scope: ekspresi di log — tidak mengubah variabel.

[LANGKAH 4 — Assignment update skor]
Ketik: skor = skor + 10;
Ucapkan: "Saya tidak tulis let lagi — variabel sudah ada."
Tanya: "Kalau tulis let skor = 10 di sini — apa masalahnya?"
Scope: reassignment vs redeclare (sebut singkat: error di scope sama).

[LANGKAH 5 — Log lagi]
Ketik: console.log("Skor setelah tugas:", skor);
Jalankan
Ucapkan: "Data ingat — dari 0 jadi 10."
Demo: skor = skor + 5; log lagi → 15

[LANGKAH 6 — Trap const reassignment]
Coba live (lalu undo atau comment):
Ketik: nis = "99999";
Jalankan → error
Ucapkan: "Const melindungi identitas — TypeError assignment."
Tanya: "Kapan const penting di project nanti?"
Scope: const = tidak boleh binding ulang.

[LANGKAH 7 — Practice 2: diskusi const vs let]
Tambah: const kodeBuku = "BK-001";
Tambah: let statusPinjam = "tersedia";
Ubah: statusPinjam = "dipinjam";
Ucapkan: "Kode buku const, status let — metafora perpustakaan."
Siswa tambah 1 const + 1 let sendiri (contoh: const sekolah, let absensiHariIni)

[LANGKAH 8 — Exit]
1 variabel + alasan const/let di catatan siswa
```

---

## Latihan Membaca Kode

### Snippet A

```javascript
const pi = 3.14;
pi = 3.14159;
console.log(pi);
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa yang terjadi? | Error sebelum log — const tidak boleh reassignment |
| Baris console jalan? | Tidak |

### Snippet B

```javascript
let total = 5;
total = total + 3;
total = total + 2;
console.log(total);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 10 |
| Urutan: setelah baris 2, total? | 8 |

### Snippet C

```javascript
const nis = "001";
let poin = 0;
if (poin >= 10) {
  poin = poin + 5;
}
console.log(nis, poin);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 001 0 |
| Blok if jalan? | Tidak — poin < 10 |

---

## Praktik Mandiri

1. Buat file **baru** — data 3 field: `const` identitas + `let` yang berubah
2. Simulasi 3x update skor/poin dengan assignment (bukan copy nilai final)
3. Coba sengaja salah assign `const` — screenshot error + jelaskan 1 kalimat
4. **Variasi:** data perpustakaan (kode buku const, status pinjam let)

Tidak copy file guru — nama & angka fiktif.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| `let` untuk semua — termasuk NIS | Tanya: "NIS remidi berubah?" |
| `const skor` lalu skor++ | Demo error — butuh let |
| Pakai `=` di `if (x = 5)` | Sebut singkat — banding pakai `===` (spiral P09) |
| Redeclare `let skor` dua kali | Jelaskan satu binding per scope |
| Copy starter lengkap | File kosong + variasi nama sendiri |

---

## Rujukan

- Modul: [X-S1-P10](../../../kelas-x/semester-1/X-S1-P10_variabel-data.md)
- EXP: [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md)
- Sebelum: [P09 If/Else JS](./X-S1-P09_satpam-js-kondisi.md)
- Lanjut: [P11 Loop](./X-S1-P11_kasir-loop.md)
- MM-06 · CX-T2

---

## Checklist Exit

- [ ] Live dari file kosong — no starter siswa
- [ ] Siswa beda `const` vs `let` dengan contoh sendiri
- [ ] Assignment `skor = skor + n` dipraktikkan
- [ ] Error const reassignment didemo
- [ ] Latihan baca snippet — prediksi output/error
- [ ] Recall P09 variabel skor

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

**Panca cinta:** Allah · ilmu

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ta-Ha 20:114 · QS Al-Mujadilah 58:11

**Kait di kelas hari ini:** Data & variabel = fondasi ilmu yang terukur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
