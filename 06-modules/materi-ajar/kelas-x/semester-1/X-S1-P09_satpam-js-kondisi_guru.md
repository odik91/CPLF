# Materi Guru Lengkap — X-S1-P09
**Modul:** [X-S1-P09_satpam-js-kondisi.md](../../kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md)
**Materi pendukung sumber:** [X-S1-P09_satpam-js-kondisi.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P09 — Satpam & JavaScript Kondisi

| Field | Isi |
|-------|-----|
| Kode | X-S1-P09 |
| Unit | X1.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3 |
| MM | MM-13 |
| EXP | [EXP_05 Satpam](../../07-experience_library/EXP_05_Satpam_Sekolah.md) |

## Learning Transformation

Dari “aturan di kepala” → **if/else** sebagai aturan yang dieksekusi program.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | 3 kondisi ATM dari P08 — recall |
| 5–18 | Experience | Role-play satpam MA: siapa boleh masuk? |
| 18–28 | Trap | “Semua siswa sama” — benarkah? |
| 28–38 | Clarify | Tabel kondisi → boleh/tidak |
| 38–48 | Concept | if · else · else if · boolean |
| 48–70 | **Practice coding** | VS Code + `console.log` atau Replit: skor ≥75 lulus, else remidi |
| 70–85 | Practice 2 | Tambah 1 cabang (izin vs tanpa izin) |
| 85–90 | Exit | Screenshot kode + 1 baris alasan |

---

## Starter Code (contoh)

```javascript
let skor = 80;
if (skor >= 75) {
  console.log("Lulus");
} else {
  console.log("Remidi");
}
```

---

## Formatif

**TEC**, **REA**

---

## Catatan Guru

Pertemuan coding JS **pertama** — pastikan semua bisa buka environment.

---

## Fallback

Environment gagal → tulis syntax di worksheet + dry-run di papan.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P09 Satpam & JavaScript Kondisi

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P09 |
| Modul pertemuan | [X-S1-P09_satpam-js-kondisi.md](../../../kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md) |
| Unit | X1.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3 |
| MM | MM-13 |
| EXP | [EXP_05 Satpam](../../../07-experience_library/EXP_05_Satpam_Sekolah.md) |
| Formatif | TEC, REA |
| Ada live code? | **Ya — JS PERTAMA kelas** (`if` / `else` / `console.log`) |

---

## Pengetahuan Guru

**Pertemuan coding JavaScript pertama** — prioritas: semua siswa bisa buka environment (VS Code + Node, atau Replit).

| Konsep | Penjelasan guru |
|--------|-----------------|
| `if (kondisi) { ... }` | Jalankan blok `{}` hanya jika kondisi **truthy** / true |
| `else { ... }` | Jalur alternatif jika kondisi if false |
| `else if (kondisi2)` | Cabang tambahan — urutan penting |
| **Boolean** | Ekspresi yang jadi true/false (`>=`, `===`, `&&`) |
| **Scope blok** | Kode di dalam `{ }` milik if tersebut — di luar tidak otomatis jalan |

**Metafora satpam:** program = satpam digital; `if` = cek identitas/waktu/izin.

**Prasyarat dari P08:** siswa sudah paham cabang keputusan — hari ini **ejaan** JavaScript-nya.

**Fallback modul:** environment gagal → syntax di papan + dry-run oral; jangan cancel coding total.

**PENTING — starter code modul:** contoh di modul pertemuan **hanya referensi guru**. Jangan kirim file starter ke siswa.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "3 kondisi ATM P08 sebelum uang keluar?" | PIN benar, saldo cukup, kartu valid (variasi siswa OK) |
| "Pseudocode JIKA/S SELAIN ITU — setara JS apa?" | `if` / `else` |
| "Edge case minggu lalu yang PIN benar tapi gagal?" | Saldo tidak cukup |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik live; siswa ikut mengetik — **bukan** paste dari modul/WA |
| **Live coding** | File **`kosong`** → baris demi baris; ≥70% baris pertama dari guru |
| **Per baris / scope** | Setiap `{` buka blok — ucapkan: "Scope if = di dalam kurung kurawal ini" |
| **Recall** | Satpam role-play sebelum `if` — aturan kepala → aturan dieksekusi |
| **Membaca kode** | Snippet proyeksi **sebelum** siswa ketik cabang `else if` |
| **No starter file** | **Larangan keras:** jangan bagikan `.js` siap jalan — bangun bareng dari nol |

---

## Materi Inti

### Transformasi

**Dari:** Aturan di kepala / pseudocode  
**Ke:** `if/else` dieksekusi mesin — output di `console.log`

### EXP_05 Satpam (ringkas)

- Trap: "Semua siswa sama perlakuannya" → realita: cabang by identitas, waktu, izin
- Tabel kondisi → boleh/tidak → langsung ke kode skor lulus/remidi

### Syntax inti

```javascript
if (skor >= 75) {
  console.log("Lulus");
} else {
  console.log("Remidi");
}
```

- `>=` : perbandingan → boolean
- Blok `{ }` : scope if/else
- `console.log` : output sementara (belum HTML)

### Environment

- Buat folder proyek + file `satpam.js` (nama bebas)
- Jalankan: `node satpam.js` atau Run di Replit
- Cek: siswa lihat output terminal — bukan browser dulu

---

## Alur Live Coding

> **Mulai dari file KOSONG.** Guru mengetik di proyektor; siswa ikut. **Jangan** beri starter file.

### Persiapan

- VS Code / Replit terbuka — **tab kosong**
- Terminal siap
- Di laptop siswa **tidak boleh ada:** `satpam.js` lengkap, copy grup WA, snippet modul

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Setup 38–48 menit konsep selesai dulu]
Setelah role-play satpam + tabel kondisi di papan:
Ucapkan: "Sekarang satpam-nya bukan kita — file JavaScript kosong."
Buat file baru: satpam.js (live, siswa lihat rename/save)

[LANGKAH 1 — Variabel skor]
Ketik: let skor = 80;
Ucapkan: "Saya simpan angka skor ujian di variabel — isinya bisa berubah nanti."
Tanya: "Kenapa 80? Nanti kita tes cabang lulus."
Scope: baris global — di luar if, bisa dibaca if nanti.
Jalankan: node satpam.js → (belum ada output — normal)

[LANGKAH 2 — Buka if]
Ketik: if (skor >= 75) {
Ucapkan: "If = JIKA. Kurung = kondisi. Kurung kurawal buka = scope blok if."
Tanya: "skor 80 — kondisi >= 75 true atau false?"
Scope: kondisi dievaluasi sekali sebelum masuk blok.

[LANGKAH 3 — Isi blok if]
Ketik (indent 2 spasi): console.log("Lulus");
Ucapkan: "Console.log = cetak ke terminal — satpam bilang 'boleh'."
Tanya: "Baris ini jalan kalau apa?"
Scope: hanya di dalam `{` if — tidak jalan jika skor < 75.
Tutup: }
Jalankan → output: Lulus
Celebrasi singkat: "Mesin yang putuskan — bukan feeling."

[LANGKAH 4 — Else]
Ketik: else {
Ketik:   console.log("Remidi");
Ketik: }
Ucapkan: "Else = SELAIN ITU — hanya satu jalur if/else, mutually exclusive."
Tanya: "Kalau skor 74 — baris mana yang jalan?"
Scope: else scope terpisah; tidak overlap dengan if.

[LANGKAH 5 — Uji cabang else]
Ubah live: let skor = 60;
Jalankan lagi
Ucapkan: "Saya ubah data — logika sama — output beda."
Tanya: "Tanpa ubah if/else, apa yang saya ubah?"
Scope: variabel input vs struktur keputusan.

[LANGKAH 6 — Else if (izin) 70–85 menit]
Ketik ulang skor = 80 untuk konteks baru — atau file baru siswa
Tambah variabel:
Ketik: let punyaIzin = false;

Ketik: if (skor >= 75 && punyaIzin) {
Ketik:   console.log("Lulus resmi");
Ketik: } else if (skor >= 75) {
Ketik:   console.log("Nilai cukup, izin belum lengkap");
Ketik: } else {
Ketik:   console.log("Remidi");
Ketik: }
Ucapkan: "Else if = cabang tengah — dicek urut dari atas."
Tanya: "skor 80, punyaIzin false — cabang mana?"
Scope: blok pertama true → bawah tidak dicek.
Demo: punyaIzin = true → jalankan → "Lulus resmi"

[LANGKAH 7 — Salah ketik sengaja (opsional)]
Hapus satu `}` — jalankan — baca error bareng
Ucapkan: "Scope tidak tertutup — mesin bingung di baris mana."
Scope: `{` harus berpasangan `}`.

[LANGKAH 8 — Exit 85–90]
Screenshot kode sendiri + 1 kalimat: "Kenapa pakai else if izin?"
```

---

## Latihan Membaca Kode

> Proyeksikan — siswa **prediksi**, jangan copy dulu.

### Snippet A

```javascript
let umur = 16;
if (umur >= 17) {
  console.log("Boleh SIM");
} else {
  console.log("Belum cukup umur");
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "Belum cukup umur" |
| Blok mana tidak jalan? | console.log("Boleh SIM") |

### Snippet B

```javascript
let skor = 75;
if (skor > 75) {
  console.log("A");
} else if (skor >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "B" (75 tidak > 75, tapi >= 75) |
| Kenapa bukan "A"? | `>` strict lebih besar, bukan sama dengan |

### Snippet C — Bug scope

```javascript
let x = 10;
if (x > 5)
  console.log("besar");
  console.log("selalu muncul");
```

| Pertanyaan | Kunci |
|------------|-------|
| Output jika x = 3? | Hanya "selalu muncul" — baris 3 **di luar** if (no braces trap) |
| Perbaikan? | Pakai `{ }` around kedua console.log |

---

## Praktik Mandiri

Siswa **mengetik versi sendiri** — variasi wajib:

1. **Satpam digital:** `let seragam = true; let jamPelajaran = true;` → boleh masuk / tolak
2. **Skor + izin** (modifikasi live coding) — minimal 3 cabang
3. Uji 3 kombinasi input — catat prediksi vs output terminal
4. **Tidak boleh:** copy-paste file guru atau teman

**Extension:** tambah kondisi `||` (OR) — tamu dengan surat tamu.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| `if (skor >= 75);` — semicolon setelah if | Tunjukkan if jadi kosong; body selalu jalan |
| `=` vs `===` | P09 fokus `>=`; sebut singkat: `=` assignment, `===` banding nilai |
| Lupa `{ }` — hanya 1 baris masuk if | Snippet C — demo bug |
| Copy starter WA — tidak paham scope | File kosong wajib; pair explain 1 baris ke teman |
| Environment tidak jalan — panic | Fallback papan; PR ketik ulang di rumah |
| Guru kirim satpam.js lengkap | Ingatkan etika CPLF — hanya skrip guru |

---

## Rujukan

- Modul: [X-S1-P09](../../../kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md)
- EXP: [EXP_05 Satpam](../../../07-experience_library/EXP_05_Satpam_Sekolah.md)
- Sebelum: [P08 ATM Konsep](./X-S1-P08_atm-if-else.md)
- Lanjut: [P10 Variabel](./X-S1-P10_variabel-data.md)
- MM-13 · CX-T3
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Coding dari **file kosong** — bukan distribusi starter
- [ ] TTS per scope if/else/else if
- [ ] Siswa jalankan `node` / Replit dan lihat output
- [ ] Minimal 1 cabang `else if` versi siswa
- [ ] Latihan baca snippet — prediksi tanpa copy
- [ ] Recall 3 kondisi ATM P08
- [ ] Exit: screenshot + 1 kalimat alasan

[← Indeks materi X-S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
