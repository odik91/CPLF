# Materi Guru Lengkap — X-S2-P08
**Modul:** [X-S2-P08_validasi-js-pesan.md](../../kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md)
**Materi pendukung sumber:** [X-S2-P08_validasi-js-pesan.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P08 — Validasi JavaScript & Pesan Error

| Field | Isi |
|-------|-----|
| Kode | X-S2-P08 |
| Unit | X2.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3, CX-K1 |

## Learning Transformation

Dari “alert generik” → **validasi custom + UX jelas**.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Review form P07 |
| 5–15 | Experience | `alert("error")` vs teks di bawah field |
| 15–25 | Trap | User tidak tahu field mana salah |
| 25–35 | Clarify | Spesifik · sopan · actionable |
| 35–45 | Concept | preventDefault · if validasi · DOM pesan error |
| 45–70 | Practice | JS validasi: nama min 3 char, email format, angka positif |
| 70–85 | Test | 3 kasus uji (kosong, salah format, valid) |
| 85–90 | Exit | Screenshot 1 pesan error bagus |

---

## Formatif

**TEC**, **COM**

---

## Catatan Guru

Spiral if/else dari S1 — eksplisitkan hubungan.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P08 Validasi JavaScript & Pesan Error

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P08 |
| Modul pertemuan | [X-S2-P08_validasi-js-pesan.md](../../../kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md) |
| Unit | X2.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3, CX-K1 |
| Formatif | TEC, COM |
| Ada live code? | **Ya — JS validasi live** (`preventDefault`, `if`, DOM pesan error) |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`event.preventDefault()`** | Batalkan perilaku default browser (submit/reload) — validasi JS dulu |
| **`if` validasi** | Spiral S1 P08–P09 — kondisi harus true sebelum lanjut |
| **Pesan di DOM** | `<span class="error">` di bawah field — lebih baik dari `alert()` generik |
| **`.value`** | Baca isi input dari JS — string selalu (even `type="number"`) |
| **`.trim()`** | Buang spasi ujung — cek kosong yang "terlihat isi" |
| **`.length`** | Cek panjang string — `nama.length >= 3` |
| **Format email sederhana** | `email.includes("@")` cukup kelas X — jangan regex kompleks |

**Prasyarat:** P07 HTML form + P05–P06 DOM/event. Siswa sudah paham `if/else` dari S1.

**UX pesan error:** spesifik · sopan · actionable (kriteria P07).

**Starter modul = referensi guru** — siswa bangun dari scaffold minimal, bukan file lengkap.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P07 — apa kelemahan pesan error browser default?" | Generik, bahasa mesin, tidak selalu jelas field mana |
| "S1 — struktur JS untuk 'jika kondisi salah, tolak'?" | `if` / `else` |
| "ATM — validasi sebelum aksi apa?" | Sebelum uang keluar / sebelum submit diproses |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Guru ketik live baris demi baris; siswa ikut mengetik |
| **Live coding** | HTML minimal + `<script>` kosong → isi JS step-by-step |
| **Per baris / scope** | Setiap `if`, callback listener, blok `{}` — TTS wajib |
| **Recall** | Sebut if/else ATM sebelum `preventDefault` |
| **Membaca kode** | Snippet validasi proyeksi **sebelum** siswa ketik `if` |
| **No starter file** | Jangan bagikan `.html` dengan validasi JS lengkap |

---

## Materi Inti

### Transformasi

**Dari:** `alert("error")` / pesan browser generik  
**Ke:** Validasi custom + pesan error jelas di bawah field yang salah

### Alur mental validasi JS

```text
1. User klik submit
2. JS intercept (preventDefault)
3. Baca nilai field (.value)
4. if (kondisi gagal) → tampilkan pesan, stop
5. if (semua OK) → boleh proses (console.log / alert sukses sementara)
```

### Perbandingan UX

| Cara | Masalah |
|------|---------|
| `alert("Error")` | Modal mengganggu; tidak sebut field |
| Browser default | Kurang kontrol bahasa |
| Teks di bawah field | User tahu **di mana** dan **apa** yang diperbaiki |

### Spiral if/else S1

```javascript
if (nama.length < 3) {
  pesanNama.textContent = "Nama minimal 3 huruf.";
} else {
  pesanNama.textContent = "";
}
```

---

## Alur Live Coding

> **HTML scaffold minimal** — form 3 field tanpa `required` (sengaja — JS yang satpam). **Script kosong** di awal.

### Persiapan

- Live Server aktif
- Di laptop siswa **tidak boleh ada:** validasi JS lengkap, snippet WA

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Review P07 0–5 menit]
Tampilkan form P07 siswa — tanya kelemahan pesan browser.
Ucapkan: "Hari ini satpam level 2 — JavaScript kita sendiri."

[LANGKAH 1 — Scaffold HTML 5–15 menit]
File: validasi.html (nama bebas)
Ketik skeleton: doctype, html, body
Ketik:
<form id="form-daftar">
  <label for="nama">Nama</label>
  <input id="nama" type="text">
  <span id="pesan-nama" class="error"></span>

  <label for="email">Email</label>
  <input id="email" type="email">
  <span id="pesan-email" class="error"></span>

  <label for="jumlah">Jumlah peserta</label>
  <input id="jumlah" type="number">
  <span id="pesan-jumlah" class="error"></span>

  <button type="submit">Daftar</button>
</form>
<script>
</script>
Ucapkan: "Span kosong = tempat pesan error — scope DOM terpisah per field."
Tanya: "Kenapa tidak pakai required? Siapa satpam hari ini?"
Scope: HTML = struktur; JS = logika validasi.

[LANGKAH 2 — CSS error minimal 15–20 menit]
Ketik di <style> atau file terpisah:
.error { color: #b00020; font-size: 0.9rem; min-height: 1.2em; }
Ucapkan: "min-height — layout tidak loncat saat pesan muncul."
Scope: presentasi pesan = bagian UX validasi.

[LANGKAH 3 — Ambil referensi DOM 20–30 menit]
Di dalam <script>, ketik:
const form = document.getElementById("form-daftar");
const inputNama = document.getElementById("nama");
const pesanNama = document.getElementById("pesan-nama");
Ucapkan per baris:
  Tebak: "const form — simpan apa?"
  Tanya: "getElementById string harus cocok dengan apa di HTML?"
  Spelling: const = referensi elemen tidak diganti nama variabelnya
Scope: baris global script — bisa dibaca listener nanti.
Ulangi const untuk email, jumlah, pesan masing-masing (live, tidak paste blok 20 baris sekaligus).

[LANGKAH 4 — Pasang listener submit 30–40 menit]
Ketik:
form.addEventListener("submit", function (event) {
Ketik:   event.preventDefault();
Ketik:   console.log("Submit ditahan — validasi dulu");
Ketik: });
Ucapkan: "Submit = event. preventDefault = batalkan reload bawaan browser."
Tanya: "Tanpa baris preventDefault — apa yang terjadi?"
Scope: callback function — kode di dalam `{ }` jalan saat submit.
Demo: submit → console log, halaman tidak reload.

[LANGKAH 5 — Validasi nama 40–50 menit]
Di dalam callback, setelah preventDefault:
Ketik:   const nama = inputNama.value.trim();
Ketik:   if (nama.length < 3) {
Ketik:     pesanNama.textContent = "Nama minimal 3 huruf.";
Ketik:     return;
Ketik:   }
Ketik:   pesanNama.textContent = "";
Ucapkan per scope:
  ".value = baca isi input"
  "trim = buang spasi tipu"
  "if length < 3 — spiral S1: kondisi gagal → tolak"
  "return = stop function — field lain belum dicek OK tapi nama gagal dulu"
Tanya: "Input '  ab  ' — lolos atau tidak?"
Scope: blok if = hanya jalan jika kondisi true.
Demo: submit nama "ab" → pesan muncul di span.

[LANGKAH 6 — Validasi email 50–58 menit]
Ketik:
  const email = inputEmail.value.trim();
  if (!email.includes("@")) {
    pesanEmail.textContent = "Email harus mengandung @.";
    return;
  }
  pesanEmail.textContent = "";
Ucapkan: "! = NOT — includes false berarti format tidak OK."
Tanya: "user@ — cukup atau perlu domain? (kelas X: @ saja cukup untuk latihan)"
Scope: urutan validasi — nama OK dulu baru email dicek (karena return).

[LANGKAH 7 — Validasi angka positif 58–65 menit]
Ketik:
  const jumlah = Number(inputJumlah.value);
  if (Number.isNaN(jumlah) || jumlah <= 0) {
    pesanJumlah.textContent = "Jumlah harus angka positif.";
    return;
  }
  pesanJumlah.textContent = "";
Ucapkan: "Number() — konversi string ke angka. NaN = bukan angka valid."
Tanya: "Input kosong — Number('') jadi apa?"
Scope: gabungan kondisi dengan || — salah satu true = gagal.

[LANGKAH 8 — Jalur sukses 65–70 menit]
Ketik setelah semua cek:
  console.log("Valid — data:", { nama, email, jumlah });
Ucapkan: "Semua if tidak return — berarti lulus satpam."
Tanya: "Analogi ATM — semua kondisi true, baru proses."
Scope: akhir callback — hanya jika tidak ada return early.

[LANGKAH 9 — Test 3 kasus 70–85 menit]
Siswa uji: (1) kosong/semua salah, (2) email tanpa @, (3) semua valid.
Keliling — prediksi pesan mana yang muncul.
Scope: testing = observable pass/fail seperti AC S1.

[LANGKAH 10 — Exit 85–90 menit]
Screenshot 1 pesan error bagus + 1 validasi sukses.
```

---

## Latihan Membaca Kode

### Snippet A

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputNama.value.length < 3) {
    pesanNama.textContent = "Terlalu pendek";
    return;
  }
  pesanNama.textContent = "";
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit dengan nama "An" — output? | Span: "Terlalu pendek"; tidak reload |
| Tanpa preventDefault? | Halaman reload — pesan hilang |

### Snippet B — Urutan return

```javascript
if (nama.length < 3) return;
if (!email.includes("@")) return;
console.log("OK");
```

| Pertanyaan | Kunci |
|------------|-------|
| nama OK, email "salah" — console.log jalan? | Tidak — return di cek email |
| Analogi ATM? | Cek berurutan; satu gagal = stop |

### Snippet C — Bug scope

```javascript
if (nama.length < 3)
  pesanNama.textContent = "Pendek";
  return;
```

| Pertanyaan | Kunci |
|------------|-------|
| nama "Budi" — return jalan? | Ya — return **di luar** if (no braces trap) |
| Perbaikan? | `{ }` around kedua baris if body |

---

## Praktik Mandiri

1. **Versi sendiri** — 3 field + 3 pesan error custom (boleh konteks berbeda)
2. **Uji 3 kasus** modul: kosong, format salah, valid — dokumentasi screenshot
3. **Satu pesan** ditulis ulang lebih sopan & actionable
4. **Tidak boleh:** copy file guru

**Extension:** fokus ke field pertama yang gagal saja vs tampilkan semua error sekaligus (diskusi UX).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa `preventDefault` | Demo reload vs tahan submit |
| `alert` saja — tidak update span | Bandingkan UX side-by-side |
| Cek email sebelum nama — bingung urutan | Jelaskan early return |
| `=` vs `===` di kondisi | Singkat: banding pakai `===` |
| Copy validasi WA | Scaffold minimal; pair explain 1 if |
| Guru paste 40 baris script sekaligus | Max 5–7 baris per pause TTS |

---

## Rujukan

- Modul: [X-S2-P08](../../../kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md)
- Sebelum: [P07 Form](./X-S2-P07_form-validasi.md)
- Spiral S1: [P08 ATM](../semester-1/X-S1-P08_atm-if-else.md) · [P09 Satpam JS](../semester-1/X-S1-P09_satpam-js-kondisi.md)
- Lanjut: [P09 Array Render](./X-S2-P09_array-render-list.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Live dari scaffold minimal — bukan file lengkap
- [ ] TTS per scope: listener, if, return
- [ ] preventDefault didemonstrasikan
- [ ] 3 kasus uji (kosong, salah format, valid)
- [ ] Latihan baca snippet — prediksi tanpa copy
- [ ] Recall if/else S1 eksplisit
- [ ] Exit: screenshot pesan error bagus

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
