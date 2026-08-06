# Materi Guru Lengkap — X-S1-P11

**Handout siswa (bagikan):** [X-S1-P11_kasir-loop_siswa.md](./X-S1-P11_kasir-loop_siswa.md)

**Modul:** [X-S1-P11_kasir-loop.md](../../../kelas-x/semester-1/X-S1-P11_kasir-loop.md)

**Materi pendukung sumber:** [X-S1-P11_kasir-loop.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P11_kasir-loop.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P11 — Kasir & Loop

| Field | Isi |
|-------|-----|
| Kode | X-S1-P11 |
| Unit | X1.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3, CX-T2 |
| MM | MM-14 |
| EXP | [EXP_06 Kasir](../../07-experience_library/EXP_06_Kasir_Minimarket.md) |

## Learning Transformation

Dari “ulang manual” → **loop** otomatisasi repetisi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Hitung manual 8 item di papan — kelas bosan |
| 5–20 | Experience | Beep scanner vs hitung satu-satu |
| 20–30 | Trap | “Teliti saja” vs otomatisasi |
| 30–40 | Clarify | Operasi apa yang diulang identik? |
| 40–50 | Concept | for · while · array dasar |
| 50–75 | Practice | JS: array harga → loop total |
| 75–85 | Reflect | Di mana loop di kehidupan (sholat/jamaah metafora ringan)? |
| 85–90 | Exit | 1 baris loop + total |

---

## Starter

```javascript
const harga = [5000, 3000, 12000, 2000];
let total = 0;
for (let i = 0; i < harga.length; i++) {
  total = total + harga[i];
}
console.log("Total:", total);
```

---

## Formatif

**TEC**, **OBS**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P11 Kasir & Loop

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P11 |
| Modul pertemuan | [X-S1-P11_kasir-loop.md](../../../kelas-x/semester-1/X-S1-P11_kasir-loop.md) |
| Unit | X1.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3, CX-T2 |
| MM | MM-14 |
| EXP | [EXP_06 Kasir](../../../07-experience_library/EXP_06_Kasir_Minimarket.md) |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — live JS** (`for`, array, akumulasi) |

---

## Pengetahuan Guru

| Konsep | Penjelasan |
|--------|------------|
| **Loop** | Mengulang operasi identik tanpa copy-paste baris |
| **`for`** | `for (init; kondisi; increment) { body }` — cocok indeks array |
| **Array** | Daftar nilai berurutan — `harga[0]` elemen pertama |
| **Akumulasi** | `total = total + harga[i]` — pola kasir |
| **Scope loop** | `let i` di dalam for — block scope (ES6) |

**Metafora EXP_06:** beep scanner = loop; hitung manual 8 item = kelas bosan.

**Prasyarat:** P10 `let` + assignment; P09 if opsional di dalam loop (tidak wajib hari ini).

**Starter modul = referensi guru** — siswa bangun dari file kosong.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P10 — kenapa `let total` bukan const?" | Total berubah setiap item ditambah |
| "Kalau 8 harga — tanpa loop tulis berapa baris?" | 8+ baris copy — tidak scalable |
| "Operasi kasir yang diulang identik?" | Baca harga → tambahkan ke total |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa ketik array harga sendiri (4–6 item) |
| **Live coding** | Kosong → array → total → for — urutan wajib |
| **Per baris / scope** | Jelaskan scope `{ body for }` dan hidupnya `i` |
| **Recall** | Hitung manual di papan dulu — baru loop |
| **Membaca kode** | Snippet: tebak nilai `i` dan `total` tiap iterasi |
| **No starter file** | Jangan kirim `kasir.js` lengkap |

---

## Materi Inti

### Transformasi

**Dari:** Ulang manual / copy-paste baris  
**Ke:** Loop otomatisasi repetisi

### Struktur for (mental model)

```text
1. Mulai i = 0
2. Cek i < panjang — kalau false, stop
3. Jalankan body (pakai harga[i])
4. i++ — balik ke step 2
```

### Array dasar

```javascript
const harga = [5000, 3000, 12000, 2000];
// indeks:           0     1      2      3
```

- `harga.length` = 4
- Indeks mulai **0** — trap klasik siswa MA

### while (sebut saja)

"Ada juga `while` — hari ini fokus `for` karena kita punya daftar harga pasti."

---

## Alur Live Coding

> **File KOSONG.** Guru mengetik live — siswa ikut. **Tidak** distribusi starter.

### Persiapan

- File: `kasir.js`
- Siswa belum punya array + loop siap pakai

### Skrip TTS baris demi baris

```text
[LANGKAH 0 — Experience 5–20 menit]
Tulis 8 angka di papan — hitung total manual — kelas bosan
Ucapkan: "Operasi sama 8x — mesin panggil loop."

[LANGKAH 1 — Array harga]
Ketik: const harga = [5000, 3000, 12000, 2000];
Ucapkan: "Array = rak barang — tiap slot punya indeks dari nol."
Tanya: "harga[0] berapa? harga[3]?"
Scope: const array — isi tidak kita ubah hari ini, indeks kita baca.

[LANGKAH 2 — Akumulator total]
Ketik: let total = 0;
Ucapkan: "Kasir mulai dari nol — let karena akan naik."
Tanya: "Kenapa tidak const total?"
Scope: total di luar loop — hidup semua iterasi.

[LANGKAH 3 — Buka for]
Ketik: for (let i = 0; i < harga.length; i++) {
Ucapkan: "Tiga bagian for: start i=0; lanjut selama i < length; i++ setiap putaran."
Tanya: "harga.length berapa? Kondisi i < 4 — i terakhir berapa?"
Scope: `let i` scope-nya blok for — di luar for, i tidak ada (block scope).

[LANGKAH 4 — Body loop]
Ketik (indent): total = total + harga[i];
Ucapkan: "Setiap putaran: ambil harga item ke-i, tambah ke total."
Tanya: "Putaran pertama — i=0, total jadi berapa?"
Scope: body `{ }` — diulang, bukan di-copy 4x di file.

[LANGKAH 5 — Tutup for]
Ketik: }
Ketik: console.log("Total:", total);
Jalankan: node kasir.js
Ucapkan: "Expected: 5000+3000+12000+2000 = 22000"
Trace oral: i=0..3 — siswa sebut total interim

[LANGKAH 6 — Ubah data, logika sama]
Ucapkan: "Tambah 1 item di array — loop menyesuaikan otomatis."
Live tambah: 8000 di array — jalankan — total baru
Tanya: "Berapa baris loop berubah?"
Scope: `.length` — loop scale tanpa edit body.

[LANGKAH 7 — Reflect 75–85]
Metafora ringan: operasi berulang sholat/jamaah — struktur repetisi teratur
Exit prep: siswa screenshot 1 baris loop + total

[LANGKAH 8 — Off-by-one (opsional)]
Salah ketik: i <= harga.length — demo undefined/error
Ucapkan: "Scope loop salah kondisi — iterasi kelebihan."
Perbaiki bareng.
```

---

## Latihan Membaca Kode

### Snippet A — Trace

```javascript
const angka = [2, 4, 6];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
  jumlah = jumlah + angka[i];
}
console.log(jumlah);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 12 |
| Setelah i=1, jumlah? | 6 (2+4) |

### Snippet B — Indeks

```javascript
const item = ["A", "B", "C"];
for (let i = 1; i < item.length; i++) {
  console.log(item[i]);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | B, C (indeks 1 dan 2 — A dilewati) |
| Kenapa mulai i=1? | Init loop sengaja skip elemen pertama |

### Snippet C — Bug umum

```javascript
const harga = [1000, 2000];
let total = 0;
for (let i = 0; i <= harga.length; i++) {
  total += harga[i];
}
console.log(total);
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | `i <= length` → iterasi extra, harga[2] undefined → NaN |
| Perbaikan? | `i < harga.length` |

---

## Praktik Mandiri

1. File baru — array 5+ harga belanja sendiri (fiktif)
2. Loop `for` hitung total — verifikasi manual 1 item
3. Tambah 1 item — jalankan ulang tanpa ubah loop body
4. **Challenge:** `console.log` tiap iterasi: "Item i: ... subtotal: ..."

Variasi wajib — jangan angka sama dengan demo guru.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Indeks mulai 1 | Trace i=0 di papan |
| `harga[i]` typo `harga(i)` | Syntax array pakai `[]` |
| Lupa `i++` — infinite loop | Ctrl+C; jelaskan increment |
| `total = harga[i]` bukan akumulasi | Demo overwrite total salah |
| Copy 4 baris tanpa loop | Hitung manual dulu — rasakan bosannya |
| Guru kirim kasir.js | Etika file kosong |

---

## Rujukan

- Modul: [X-S1-P11](../../../kelas-x/semester-1/X-S1-P11_kasir-loop.md)
- EXP: [EXP_06 Kasir](../../../07-experience_library/EXP_06_Kasir_Minimarket.md)
- Sebelum: [P10 Variabel](./X-S1-P10_variabel-data.md)
- Lanjut: [P12 Function](./X-S1-P12_function-loop-js.md)
- MM-14 · CX-T3, CX-T2

---

## Checklist Exit

- [ ] File kosong → array + for + total live
- [ ] TTS scope for & body loop
- [ ] Siswa trace minimal 1 iterasi (`i`, `total`)
- [ ] `.length` — tambah item tanpa ubah loop logic
- [ ] Latihan baca snippet — trace tanpa copy
- [ ] Recall hitung manual vs loop

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

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Loop kasir = hitung dan catat dengan jujur (tidak curang takaran).

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
