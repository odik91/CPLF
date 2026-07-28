# Materi Guru Lengkap — X-S1-P12

**Handout siswa (bagikan):** [X-S1-P12_function-loop-js_siswa.md](./X-S1-P12_function-loop-js_siswa.md)

**Modul:** [X-S1-P12_function-loop-js.md](../../../kelas-x/semester-1/X-S1-P12_function-loop-js.md)

**Materi pendukung sumber:** [X-S1-P12_function-loop-js.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P12_function-loop-js.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P12 — Function & Loop (JS)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P12 |
| Unit | X1.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T2, CX-T3 |
| MM | MM-15 |

## Learning Transformation

Dari “copy-paste kode” → **function** = proses reusable.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 2 blok kode hampir sama — smell duplicate |
| 5–15 | Experience | ROBI suruh “ulangi langkah 3” tanpa function — chaos |
| 15–25 | Trap | Copy-paste 5x vs panggil 1x |
| 25–35 | Clarify | Nama proses + input/output function |
| 35–45 | Concept | function · parameter · return |
| 45–70 | Practice | `function hitungTotal(arr)` + loop di dalam |
| 70–85 | Practice 2 | Panggil function 2x dengan data beda |
| 85–90 | Exit | Kapan pakai function vs inline? |

---

## Formatif

**TEC**, **REA**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P12 Function & Loop (JS)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P12 |
| Modul pertemuan | [X-S1-P12_function-loop-js.md](../../../kelas-x/semester-1/X-S1-P12_function-loop-js.md) |
| Unit | X1.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T2, CX-T3 |
| MM | MM-15 |
| Formatif | TEC, REA |
| Ada live code? | **Ya — live JS** (`function`, parameter, `return`, loop di dalam) |

---

## Pengetahuan Guru

| Konsep | Penjelasan |
|--------|------------|
| **Function** | Blok proses bernama — reusable, DRY |
| **Parameter** | Input function — `(arr)`, `(a, b)` |
| **Return** | Output function — mengembalikan nilai ke pemanggil |
| **Pemanggilan** | `hitungTotal(harga1)` — eksekusi scope function |
| **Scope function** | Variabel `let i` di dalam function — tidak bocor keluar |

**Transformasi:** copy-paste loop 5x → panggil `hitungTotal()` 1x dengan data beda.

**Prasyarat P11:** loop + array + akumulasi — hari ini **dibungkus** function.

**Tidak ada starter file ke siswa** — guru refactor live dari pola kasir atau tulis fresh.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P11 — pola 3 baris inti loop kasir?" | init total, for i, total += arr[i] |
| "Kalau 2 struk beda — copy loop 2x vs?" | Function — proses sama, data beda |
| "Scope `i` di for — hidup di mana?" | Di dalam blok for (block scope) |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa **nama function sendiri** — `hitungBelanja`, `totalHarga`, dll. |
| **Live coding** | Kosong atau hapus isi — bangun function bareng |
| **Per baris / scope** | `{ function body }` vs pemanggilan di luar |
| **Recall** | Tampilkan 2 blok duplikat — smell sebelum refactor |
| **Membaca kode** | Snippet: tebak return value tanpa jalankan |
| **No starter file** | Jangan kirim `function-loop.js` lengkap |

---

## Materi Inti

### Transformasi

**Dari:** Copy-paste kode hampir sama  
**Ke:** Function = proses reusable dengan nama + input/output jelas

### Anatomy function

```javascript
function hitungTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
```

- **Nama:** verb + objek (`hitungTotal`)
- **Parameter:** `arr` — data masuk
- **Return:** keluaran ke pemanggil
- **Scope:** `total`, `i` hidup di dalam function

### Function vs inline

| Pakai function | Inline OK |
|----------------|-----------|
| Dipakai ≥2x | Sekali pakai, 2 baris |
| Proses punya nama bisnis jelas | Script sekali jalan |
| Mau test/return value | — |

### ROBI metafora (modul)

Tanpa function = ROBI suruh "ulangi langkah 3" tanpa nama prosedur — chaos.

---

## Alur Live Coding

> **Mulai file KOSONG** (disarankan) atau kosongkan setelah demo duplikasi. **Jangan** starter ke siswa.

### Persiapan

- File: `total.js`
- Siswa belum punya function siap pakai

### Skrip TTS baris demi baris

```text
[LANGKAH 0 — Opening 5–15 menit]
Tampilkan di papan 2 blok pseudocode/JS hampir sama — beda array
Ucapkan: "Smell: duplicate — maintenance nightmare."
Tanya: "Copy-paste 5x vs panggil 1x — mana adil ke diri sendiri?"

[LANGKAH 1 — Deklarasi function]
Ketik: function hitungTotal(arr) {
Ucapkan: "Function = resep bernama. arr = bahan masuk."
Tanya: "Nama proses bisnis kita apa — bukan 'function1'."
Scope: deklarasi function — body belum jalan sampai dipanggil.

[LANGKAH 2 — Body: akumulator]
Ketik (indent): let total = 0;
Ucapkan: "Total lokal function — scope di dalam hitungTotal."
Scope: `total` tidak bentrok dengan variabel global file.

[LANGKAH 3 — Loop di dalam function]
Ketik:
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
Ucapkan: "Loop P11 — sekarang hidup **di dalam** scope function."
Tanya: "arr dari mana? — dari parameter saat dipanggil."
Scope: nested — for di dalam function; `i` scope for.

[LANGKAH 4 — Return]
Ketik: return total;
Ketik: }
Ucapkan: "Return = keluarkan hasil ke pemanggil — bukan console.log wajib."
Tanya: "Kalau lupa return — pemanggil dapat apa?"
Scope: return mengakhiri function dengan value.

[LANGKAH 5 — Data & pemanggilan 1]
Di LUAR function (scope global file):
Ketik: const struk1 = [5000, 3000, 2000];
Ketik: const hasil1 = hitungTotal(struk1);
Ketik: console.log("Struk 1:", hasil1);
Ucapkan: "Pemanggilan = jalankan resep dengan struk1."
Jalankan → 10000
Scope: struk1 global; proses di dalam function.

[LANGKAH 6 — Pemanggilan 2 — reuse]
Ketik: const struk2 = [12000, 8000];
Ketik: const hasil2 = hitungTotal(struk2);
Ketik: console.log("Struk 2:", hasil2);
Jalankan → 20000
Ucapkan: "Loop ditulis sekali — dipakai dua data."
Tanya: "Berapa baris loop di file? Berapa kali proses dijalankan?"
Scope: function definition once, invocation many.

[LANGKAH 7 — Parameter beda nama (opsional)]
Ucapkan: "arr di parameter — label lokal; struk1 argumen actual."
Demo: hitungTotal([1000, 1000]) inline tanpa variabel

[LANGKAH 8 — Exit 85–90]
Diskusi: kapan function vs inline?
Siswa: 1 kalimat + screenshot 2 pemanggilan
```

---

## Latihan Membaca Kode

### Snippet A

```javascript
function kaliDua(n) {
  return n * 2;
}
const a = kaliDua(5);
const b = kaliDua(10);
console.log(a, b);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 10 20 |
| Berapa kali function body jalan? | 2 (dua pemanggilan) |

### Snippet B — Missing return

```javascript
function jumlah(arr) {
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    t += arr[i];
  }
}
console.log(jumlah([1, 2, 3]));
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | undefined |
| Perbaikan? | Tambah `return t;` |

### Snippet C — Scope

```javascript
function demo() {
  let x = 99;
  return x;
}
demo();
console.log(x);
```

| Pertanyaan | Kunci |
|------------|-------|
| Baris console.log(x)? | Error — x scope function, tidak di global |
| x di mana hidup? | Hanya di dalam demo |

---

## Praktik Mandiri

1. Function `hitungTotal` atau nama sendiri — loop di dalam + return
2. Panggil **minimal 2x** dengan array berbeda — log hasil
3. Tambah function kecil: `rataRata(arr)` — return total/length (challenge)
4. Tulis 1 paragraf: kapan pakai function vs tulis inline?

**Larangan:** copy file guru / paste blok 20 baris dari WA.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Function tanpa return — expect angka | Snippet B |
| Parameter typo vs argumen | Trace `arr` vs `struk1` |
| Console.log di dalam function saja — tidak return | Bedakan "tampilkan" vs "kembalikan nilai" |
| Copy-paste loop 2x instead of call 2x | Demo duplicate smell di opening |
| `function hitungTotal()` tanpa param tapi pakai global array | Parameter eksplisit — reusable |
| Guru kirim total.js lengkap | File kosong live |

---

## Rujukan

- Modul: [X-S1-P12](../../../kelas-x/semester-1/X-S1-P12_function-loop-js.md)
- Sebelum: [P11 Loop](./X-S1-P11_kasir-loop.md)
- Lanjut: [P13 Error & Debugging](./X-S1-P13_error-debugging.md)
- MM-15 · CX-T2, CX-T3
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Live function + loop + return dari file kosong
- [ ] TTS scope function vs pemanggilan
- [ ] Dipanggil ≥2x data beda — siswa sendiri
- [ ] Siswa jelaskan function vs inline (exit)
- [ ] Latihan baca snippet — return & scope
- [ ] Recall duplicate smell P11 loop
- [ ] No starter file ke siswa

[← Indeks materi X-S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
