# EXP_04 — ATM & PIN

**Kode:** EXP_04  
**Unit:** X1.4  
**MM:** MM-13, MM-04  
**Capability:** CX-T3, CX-B3  
**Elemen CP:** AP, BK  
**Durasi:** 10 menit  
**Props:** kartu karton, “mesin ATM” dari kardus (opsional)

## Learning Transformation

Dari “langkah langsung ke uang” → “ada kondisi yang harus benar dulu (validasi).”

## Experience

Guru jadi ATM. Siswa minta tarik uang.

**Skenario A:** Langsung beri uang tanpa tanya apa-apa.  
**Skenario B:** Minta PIN; jika salah, tolak; jika benar, proses.

Tanya: “Kenapa ATM sungguhan tidak langsung keluarkan uang?”

## Cognitive Trap

**Asumsi:** Proses = input nominal → uang keluar.  
**Realitas:** Ada **cabang keputusan** (PIN benar? saldo cukup? kartu valid?).

## Guiding Questions

1. Apa input? Apa proses di tengah? Apa output?
2. Kondisi apa yang harung **true** agar uang keluar?
3. Apa yang terjadi jika salah satu kondisi false?
4. Analogi di program: struktur apa?

## Clarification

- Tulis keputusan di papan: `JIKA pin benar DAN saldo cukup → keluarkan`.
- Uji edge case: PIN benar saldo tidak cukup.

## Concept

- **If / else** — keputusan berdasarkan kondisi
- **Validasi** — cek sebelum aksi berbahaya/ irreversible
- Autentikasi sederhana (PIN)

## Practice

- Pseudocode atau JS: program “login PIN 4 digit” (3x salah = blokir).
- Form web: tombol submit disabled sampai field terisi valid.

## Reflection

- Validasi melindungi siapa — user, bank, atau keduanya?
- Di kode kamu, validasi apa yang sering dilupakan?

## Transfer

- Link download / WA “klik dulu baru cek” — bahaya tanpa validasi sumber.
- AI: terima jawaban tanpa cek sumber = ATM tanpa PIN.

## Varian Rotasi (kasus beda, trap sama)

| Kode | Kasus |
|------|--------|
| [EXP_04_A](EXP_04_A_Vending_Snack.md) | Mesin snack |
| [EXP_04_B](EXP_04_B_Login_Ujian.md) | Login ujian online |
| [EXP_04_C](EXP_04_C_Tiket_Kereta.md) | Tiket kereta |

## Catatan Guru

Bisa digabung EXP_05 (satpam) dalam satu minggu — beda konteks, konsep sama.

## Anti-Pattern

Langsung syntax `if` tanpa experience keputusan nyata.
