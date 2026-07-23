# EXP_06 — Kasir Minimarket

**Kode:** EXP_06  
**Unit:** X1.6  
**MM:** MM-14, MM-07  
**Capability:** CX-T3, CX-T2  
**Elemen CP:** AP  
**Durasi:** 10–15 menit  
**Props:** 8–10 barang karton + label harga; (opsional) scanner suara “beep”

## Learning Transformation

Dari “hitung manual satu-satu selamanya” → “pola berulang bisa diotomatisasi (loop) + data dikelompokkan.”

## Experience

**Fase 1:** Guru jadi kasir manual. 10 barang, hitung satu per satu di papan — kelas bosan, hitung ulang jika salah satu harga berubah.

**Fase 2:** “Scanner” — setiap barang = satu beep, total otomatis naik (guru atau spreadsheet sederhana).

Tanya: “Apa yang kasir lelah lakukan berulang? Apa yang mesin ulangi tanpa lelah?”

## Cognitive Trap

**Asumsi:** Solusi = teliti manual setiap kali.  
**Realitas:** Pekerjaan **berulang** dengan pola sama = kandidat loop/automation.

## Guiding Questions

1. Operasi apa yang diulang 10 kali?
2. Bagian mana yang sama setiap iterasi?
3. Bagaimana jika barang jadi 100? 1000?
4. Data apa yang disimpan per barang?

## Clarification

- Identifikasi **invariant** (struktur) vs **variable** (harga, qty).
- Uji: tambah 1 barang — manual vs otomatis, mana lebih mudah diperbaiki?

## Concept

- **Loop** — pengulangan terkontrol
- **Array** — daftar barang
- **Function** — “scan(item)” dipakai ulang
- Awal ide **database** (item punya id & harga)

## Practice

- JS: array produk + loop hitung total.
- Function `tambahKeTotal(harga)` dipanggil berkali-kali.

## Reflection

- Automation menggantikan manusia atau membebaskan untuk tugas lain?
- Di kode, di mana kamu masih “hitung manual” padahal bisa loop?

## Transfer

- Excel formula mengisi baris = loop.
- Posting berulang di medsos — otomasi tanpa mikir = risiko spam.

## Varian Rotasi (kasus beda, trap sama)

| Kode | Kasus |
|------|--------|
| [EXP_06_A](EXP_06_A_Absensi_Panggil.md) | Absensi panggil nama |
| [EXP_06_B](EXP_06_B_Format_Surat.md) | Format 30 surat |
| [EXP_06_C](EXP_06_C_Rata_Raport.md) | Hitung rata raport |

## Catatan Guru

Suara beep & kecepatan = emotional hook — jangan berlebihan sampai mengganggu.

## Anti-Pattern

Ajarkan `for` tanpa siswa merasakan lelahnya repetisi manual.
