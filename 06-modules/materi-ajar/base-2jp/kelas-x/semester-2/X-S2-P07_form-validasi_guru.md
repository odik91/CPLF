# Materi Guru Lengkap — X-S2-P07

**Handout siswa (bagikan):** [X-S2-P07_form-validasi_siswa.md](./X-S2-P07_form-validasi_siswa.md)

**Modul:** [X-S2-P07_form-validasi.md](../../../kelas-x/semester-2/X-S2-P07_form-validasi.md)

**Materi pendukung sumber:** [X-S2-P07_form-validasi.md](../../../materi-pendukung/kelas-x/semester-2/X-S2-P07_form-validasi.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P07 — Form & Validasi (Konsep)

| Field | Isi |
|-------|-----|
| Kode | X-S2-P07 |
| Unit | X2.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3, CX-B4 |
| EXP | [EXP_04 ATM](../../07-experience_library/EXP_04_ATM.md) (spiral) |

## Learning Transformation

Dari “input diterima mentah” → **validasi sebelum proses**.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall ATM P08 S1 — hubung ke form |
| 5–18 | Experience | Form submit kosong — apa yang terjadi? |
| 18–28 | Trap | Browser default vs validasi jelas |
| 28–38 | Clarify | Pesan error harus **membantu** user |
| 38–48 | Concept | `<form>` · `required` · `type="email/number"` |
| 48–70 | Practice | Form pendaftaran kegiatan — HTML validation |
| 70–85 | Reflect | Validasi = satpam digital |
| 85–90 | Exit | 2 field + aturan |

---

## Formatif

**REA**, **TEC**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P07 Form & Validasi (Konsep)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P07 |
| Modul pertemuan | [X-S2-P07_form-validasi.md](../../../kelas-x/semester-2/X-S2-P07_form-validasi.md) |
| Unit | X2.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3, CX-B4 |
| EXP | [EXP_04 ATM](../../../07-experience_library/EXP_04_ATM.md) (spiral dari S1 P08) |
| Formatif | REA, TEC |
| Ada live code? | **Ya — HTML form live** (validasi bawaan browser; **belum** JS custom — itu P08) |

---

## Pengetahuan Guru

**Substansi wajib sebelum mengajar:**

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Validasi** | Cek kondisi **sebelum** aksi irreversible (submit, simpan, tarik uang) |
| **Form HTML** | `<form>` mengumpulkan input; `action` + `method` (pengantar GET) |
| **`required`** | Atribut boolean — browser tolak submit jika kosong |
| **`type="email"` / `type="number"`** | Validasi format dasar bawaan browser |
| **`min` / `max` / `minlength`** | Batas numerik/panjang — analogi "saldo cukup" / "PIN 4 digit" |
| **Pesan default browser** | Bisa muncul tapi sering generik — foreshadow P08 |

**Spiral EXP_04 ATM (S1 P08):** ATM tidak keluarkan uang tanpa PIN + saldo + kartu valid. Form web = mesin yang **tidak memproses** data invalid.

**Prasyarat S2:** P05–P06 DOM + event sudah ada — hari ini fokus **input user** dan **aturan sebelum proses**.

**PENTING:** Contoh form lengkap di modul = **referensi guru**. Jangan kirim HTML siap jadi ke siswa.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "S1 P08 — 3 kondisi sebelum uang keluar ATM?" | PIN benar, saldo cukup, kartu valid (variasi OK) |
| "Edge case PIN benar tapi gagal?" | Saldo tidak cukup — cabang tolak |
| "Validasi di program = struktur apa di JS S1?" | `if` / kondisi sebelum aksi utama |
| "P06 — kenapa user perlu feedback saat klik?" | Tanpa feedback, user bingung apakah input diterima |

Bridge: "Hari ini satpam-nya bukan console — satpam = form + browser sebelum data masuk."

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik HTML live; siswa ikut — bukan paste dari modul/WA |
| **Live coding** | File `index.html` **minimal** → tambah form baris demi baris |
| **Per baris / scope** | Setiap `<input>` — ucapkan: "Field ini scope-nya milik form mana?" |
| **Recall** | Role-play ATM 2 menit sebelum `<form>` — kondisi → baru tag HTML |
| **Membaca kode** | Snippet HTML proyeksi **sebelum** siswa ketik `required` |
| **No starter file** | Laptop siswa **tidak** boleh punya form pendaftaran lengkap |

---

## Materi Inti

### Transformasi

**Dari:** Input diterima mentah → langsung "submit"  
**Ke:** Validasi sebelum proses — data harus memenuhi aturan dulu

### EXP_04 spiral (ringkas)

| Skenario | Trap | Clarify |
|----------|------|---------|
| Submit form kosong | User bingung / data sampah masuk | Field wajib harus dicek dulu |
| Hanya andalkan "user pintar" | Human error pasti terjadi | Validasi = satpam digital |

### HTML validation dasar

```html
<form>
  <label for="nama">Nama:</label>
  <input id="nama" name="nama" type="text" required minlength="3">

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" required>

  <label for="usia">Usia:</label>
  <input id="usia" name="usia" type="number" min="1" max="99" required>

  <button type="submit">Daftar</button>
</form>
```

- **`label for=`** — aksesibilitas + klik label fokus ke input
- **`name`** — identitas field saat submit (foreshadow data)
- **`type`** — browser bantu validasi format
- **`required`** — analogi "field wajib lulus cek satpam"

### Belum JavaScript custom

Guru tegaskan: "Browser = satpam level 1. Minggu depan (P08) kita buat pesan error sendiri dengan JS."

---

## Alur Live Coding

> **Mulai dari HTML minimal** (hanya `<!DOCTYPE>`, `<html>`, `<body>` kosong). Guru ketik live; siswa ikut.

### Persiapan

- VS Code + Live Server
- Browser Chrome/Edge — demo validasi native
- **Tidak boleh** di laptop siswa: `form-pendaftaran.html` lengkap, copy grup WA

### Skrip live

```text
[LANGKAH 0 — Recall ATM 0–5 menit]
Ucapkan: "ATM S1 — uang keluar hanya jika semua kondisi benar."
Tanya: "Kalau form pendaftaran kosong di-submit — apa analogi ATM-nya?"
Scope: meta — validasi sebelum proses irreversible.

[LANGKAH 1 — Experience submit kosong 5–18 menit]
Buat form TANPA required — hanya 1 input + button submit.
Ketik live skeleton HTML (doctype, body).
Ketik: <form> ... <input> ... <button type="submit">Daftar</button> </form>
Submit kosong — tunjukkan: halaman reload / URL berubah (GET default).
Ucapkan: "Data kosong 'lolos' — ini Skenario A ATM."
Tanya: "User tahu error di field mana?"

[LANGKAH 2 — Trap pesan default 18–28 menit]
Tambahkan required pada 1 field — submit kosong lagi.
Ucapkan: "Browser menolak — tapi pesan generik, kadang tidak jelas."
Tanya: "Bahasa browser vs bahasa manusia — mana lebih membantu user MA?"

[LANGKAH 3 — Clarify pesan membantu 28–38 menit]
Di papan — tulis 3 kriteria pesan error bagus:
  1. Spesifik (field mana)
  2. Sopan
  3. Actionable ("isi minimal 3 huruf")
Ucapkan: "HTML hari ini belum custom — P08 kita tulis sendiri."
Scope: UX validasi, belum syntax JS.

[LANGKAH 4 — Concept form + atribut 38–48 menit]
Live tambah struktur form pendaftaran kegiatan:

Ketik: <form id="form-daftar">
Ketik:   <label for="nama">Nama lengkap</label>
Ketik:   <input id="nama" name="nama" type="text" required minlength="3">
Ucapkan per baris TTS:
  Tebak: "Kenapa label punya for=?"
  Tanya: "required — kondisi apa yang harus true?"
  Spelling: minlength=3 — analogi "nama terlalu pendek = tolak"

Ulangi pola untuk email (type="email") dan usia (type="number" min="1").
Scope: setiap input = satu "syarat satpam".

[LANGKAH 5 — Practice 48–70 menit]
Siswa lengkapi form sendiri — konteks bebas (ekskul, study tour, absensi).
Minimal: 2 field + 2 aturan validasi HTML berbeda.
Keliling — baca HTML siswa seperti "membaca kode": prediksi field mana gagal.
Scope: variasi wajib, bukan copy guru.

[LANGKAH 6 — Reflect 70–85 menit]
Ucapkan: "Validasi = satpam digital — melindungi user dan sistem."
Tanya: "Satu aturan yang sering dilupakan di form sekolah?"
Demo: PIN benar saldo kurang → analogi number min/max atau required kosong.

[LANGKAH 7 — Exit 85–90 menit]
Siswa tulis 2 field + 1 aturan validasi HTML mereka + screenshot submit gagal/sukses.
Foreshadow: "P08 — if/else S1 dipakai untuk pesan error custom."
```

---

## Latihan Membaca Kode

> Proyeksikan HTML — siswa **prediksi** perilaku submit, jangan copy.

### Snippet A

```html
<form>
  <input type="text" required>
  <button type="submit">Kirim</button>
</form>
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit kosong — apa yang terjadi? | Browser blokir; fokus ke input; pesan "Please fill out this field" (variasi browser) |
| Tanpa `required`? | Submit lolos — data kosong terkirim |

### Snippet B

```html
<input type="email" value="bukan-email" required>
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit — valid? | Tidak — format email tidak cocok |
| Analogi ATM? | "Format kartu/PIN tidak valid" sebelum proses lanjut |

### Snippet C — Bug label

```html
<label for="nama">Nama</label>
<input id="nam" type="text" required>
```

| Pertanyaan | Kunci |
|------------|-------|
| Klik label — fokus ke input? | Tidak — `for` dan `id` tidak cocok |
| Perbaikan? | Samakan id/for → `nama` |

---

## Praktik Mandiri

Siswa **mengetik versi sendiri** — variasi wajib:

1. **Form pendaftaran kegiatan** — minimal 3 field dengan atribut validasi HTML berbeda (`required`, `type`, `minlength`, `min`/`max`)
2. **Uji 3 skenario:** kosong, format salah, valid — catat perilaku browser
3. **Tulis 1 kalimat** per field: "Aturan satpam field ini = …"
4. **Tidak boleh:** copy HTML guru atau teman

**Extension:** tambah `pattern` sederhana (opsional) — foreshadow regex P08+.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa `type="submit"` — pakai button biasa | Demo perbedaan submit vs button tanpa type |
| `required` di semua field termasuk opsional | Tanya: "Field mana benar-benar wajib?" |
| Label tanpa `for` — aksesibilitas buruk | Snippet C — demo klik label |
| Langsung minta JS P08 | Tekankan roadmap: HTML satpam dulu → custom pesan P08 |
| Copy form lengkap WA | File minimal wajib; pair explain 1 atribut ke teman |
| Guru kirim template form siap | Ingatkan etika CPLF — live build bareng |

---

## Rujukan

- Modul: [X-S2-P07](../../../kelas-x/semester-2/X-S2-P07_form-validasi.md)
- EXP spiral: [EXP_04 ATM](../../../07-experience_library/EXP_04_ATM.md)
- Recall S1: [P08 ATM if/else](../semester-1/X-S1-P08_atm-if-else.md) · [P09 Satpam JS](../semester-1/X-S1-P09_satpam-js-kondisi.md)
- Sebelum: [P06 Event](./X-S2-P06_event-interaksi.md)
- Lanjut: [P08 Validasi JS](./X-S2-P08_validasi-js-pesan.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Recall ATM S1 P08 terpasang
- [ ] Form dibangun live — bukan distribusi template
- [ ] TTS per field / atribut validasi
- [ ] Siswa uji submit kosong vs valid
- [ ] Latihan baca HTML — prediksi tanpa copy
- [ ] Exit: 2 field + 1 aturan + screenshot
- [ ] Foreshadow P08 (JS custom pesan)

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
