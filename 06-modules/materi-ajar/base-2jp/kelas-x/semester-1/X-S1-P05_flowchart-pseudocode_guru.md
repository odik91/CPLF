# Materi Guru Lengkap — X-S1-P05

**Handout siswa (bagikan):** [X-S1-P05_flowchart-pseudocode_siswa.md](./X-S1-P05_flowchart-pseudocode_siswa.md)

**Modul:** [X-S1-P05_flowchart-pseudocode.md](../../../kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md)

**Materi pendukung sumber:** [X-S1-P05_flowchart-pseudocode.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P05 — Flowchart & Pseudocode

| Field | Isi |
|-------|-----|
| Kode | X-S1-P05 |
| Unit | X1.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-B2, CX-T2 |
| MM | MM-12, MM-15 |
| PRJ arah | [PRJ-X-S1-01](../../08-project/PRJ_X_S1_01_Kegiatan_Harian.md) |

## Learning Transformation

Dari “algoritma di kepala” → “representasi visual & teks yang bisa diuji orang lain.”

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo ROBI literal 1 langkah dari P04 — recall |
| 5–15 | Experience | Guru tunjuk flowchart “salah” (cabang hilang) — tanya output? |
| 15–25 | Trap | Siswa percaya diagram “karena ada kotak” — cek apakah lengkap |
| 25–35 | Clarify | Uji flowchart dengan 1 kasus input contoh |
| 35–45 | Concept | Flowchart · pseudocode · simbol dasar |
| 45–70 | Practice | Buat flowchart masalah sehari-hari (pilih topik PRJ-S1) |
| 70–80 | Practice 2 | Tulis pseudocode 6–10 baris dari flowchart |
| 80–90 | Exit + preview | Swap dengan teman — 1 bug instruksi ditemukan |

---

## Simbol Flowchart (minimal)

Start/End · Process · Decision (ya/tidak) · Arrow

---

## Formatif

**REA**, **COM** (peer swap)

---

## Catatan Guru

Belum wajib VS Code — kertas/digital draw.io cukup.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P05 Flowchart & Pseudocode


## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P05 |
| Modul pertemuan | [X-S1-P05_flowchart-pseudocode.md](../../../kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md) |
| Semester | 1 · Pertemuan 5/18 |
| Unit | X1.2 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CX-B2, CX-T2 |
| PRJ arah | [PRJ-X-S1-01](../../../../08-project/PRJ_X_S1_01_Kegiatan_Harian.md) |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## 1. Pengetahuan yang Dikuasai Guru

### Representasi algoritma

- Algoritme di kepala → sulit diuji orang lain.
- **Flowchart** = diagram visual alur (cabang, urutan).
- **Pseudocode** = teks semi-formal, **bukan** JavaScript — bridge ke coding P08+.

### Simbol minimal (wajib siswa X)

| Simbol | Fungsi |
|--------|--------|
| Oval | Start / End |
| Persegi | Process (aksi) |
| Belah ketupat | Decision (ya/tidak) |
| Panah | Arah alur |

### Trap flowchart "kelihatan lengkap"

- Ada kotak ≠ algoritme benar — **cabang hilang** = bug logika.
- Uji dengan **1 kasus input contoh** — trace manual.

### Pseudocode CPLF (konvensi sederhana)

```text
MULAI
  ...
  JIKA (kondisi) MAKA
    ...
  JIKA TIDAK
    ...
  AKHIR
SELESAI
```

- Belum wajib VS Code — kertas / draw.io / whiteboard cukup.
- Topik practice mengarah ke **PRJ-S1 Kegiatan Harian**.

### Peer swap

- Tukar flowchart/pseudocode → teman cari **1 bug instruksi** — formatif **COM**.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P04: apa definisi algoritma? | Urutan langkah eksplisit & berurutan |
| P04: kenapa ROBI gagal masak mie? | Langkah implisit (kupas bungkus) tidak ditulis |
| P04: ROBI jalankan instruksi bagaimana? | **Literal** — tidak paham maksud |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan bagikan file draw.io / PNG flowchart jadi. Siswa **gambar live** sendiri — guru contoh **live di papan** saja. |
| **Live coding / live modeling** | **Live gambar** flowchart di papan/proyektor — satu simbol per scope, jelaskan sambil menggambar. |
| **Per baris / scope** | Setiap simbol / baris pseudocode = TTS: Tebak simbol → Tanya kapan dipakai → Spelling: gambar/tulis. |
| **Recall** | Demo ROBI 1 langkah literal dari P04 di opening. |
| **Membaca kode** | Latih **membaca flowchart & pseudocode** — trace kasus contoh sebelum siswa gambar sendiri. |

---

## 4. Materi Inti

### Demo flowchart "salah" (experience)

Contoh: "Apakah boleh masuk perpustakaan?"

```text
[MULAI] → [Cek punya kartu?] → (YA) → [Masuk] → [SELESAI]
                              ↘ (TIDAK) → ???  ← cabang hilang!
```

Siswa prediksi: siswa tanpa kartu → alur putus / undefined.

### Trace manual (clarify)

Input: `punya_kartu = tidak`

| Langkah | Node | Hasil |
|---------|------|-------|
| 1 | Cek kartu | Tidak |
| 2 | Cabang TIDAK | *(kosong)* → **bug** |

Perbaikan: tambah process "Daftar sementara" atau "Tolak + arahkan ke admin."

### Practice 2 fase

1. **Flowchart** masalah sehari-hari (topik PRJ-S1: absensi kegiatan, jadwal piket, dll.)
2. **Pseudocode** 6–10 baris dari flowchart sendiri
3. **Swap** — teman trace & temukan 1 bug

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Papan/spidol atau tablet draw projected
- Kertas kosong / draw.io **blank** — siswa tidak dapat template
- Contoh flowchart **salah** — jangan sebut bug dulu
- Belum VS Code

### Skrip live gambar

```text
[LANGKAH 1 — Recall ROBI]
Ucapkan: (1 instruksi literal ROBI dari P04 — 30 detik)
Tanya siswa: "Kalau ditulis di kertas, ROBI lebih mudah tidak salah?"
Scope/blok: 5 menit

[LANGKAH 2 — Flowchart salah]
Gambar: oval MULAI → belah ketupat → process → SELESAI
Ucapkan: "Saya gambar pelan — simbol apa ini?" (TTS per simbol)
Tanya siswa: "Input: tidak punya kartu — apa output?"
Scope/blok: Sengaja cabang TIDAK kosong

[LANGKAH 3 — Trace live]
Tulis: tabel trace di samping diagram
Ucapkan: "Kita baca diagram seperti membaca kode — baris demi node."
Scope/blok: 1 kasus YA + 1 kasus TIDAK

[LANGKAH 4 — Perbaikan live]
Gambar: tambah node di cabang TIDAK
Ucapkan: "Satu simbol baru — scope decision lengkap."
Scope/blok: TTS · siswa suggest isi node

[LANGKAH 5 — Concept pseudocode]
Tulis: 6 baris pseudocode dari flowchart yang sama
Ucapkan per baris — siswa tebak sebelum guru tulis
Scope/blok: ~10 menit

[LANGKAH 6 — Practice]
Ucapkan: "Flowchart topik PRJ kalian — lalu pseudocode 6–10 baris."
Scope/blok: 25 menit · swap 5 menit akhir
```

---

## 6. Latihan Membaca Algoritme / Pseudocode

Proyeksikan (trace dulu, **jangan** copy):

```text
MULAI
  BACA suhu
  JIKA suhu >= 38 MAKA
    TAMPILKAN "Istirahat di rumah"
  JIKA TIDAK
    TAMPILKAN "Ikut kegiatan"
  AKHIR
SELESAI
```

**Input A:** suhu = 39 · **Input B:** suhu = 36

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Input A — output? | "Istirahat di rumah" |
| Input B — output? | "Ikut kegiatan" |
| Boundary suhu = 38 — output? | "Istirahat" (>= 38) |
| Bug jika baris JIKA TIDAK dihapus? | suhu 36 tidak punya output |

### Latihan flowchart (visual)

Gambar sederhana: decision tanpa label YA/TIDAK pada panah.

| Pertanyaan | Kunci |
|------------|-------|
| Trace bisa dilakukan? | Tidak deterministik — bug diagram |
| Perbaikan? | Label setiap cabang |

---

## 7. Praktik Mandiri Siswa

- Flowchart masalah sehari-hari (arah PRJ-S1).
- Pseudocode 6–10 baris dari flowchart **sendiri**.
- Swap dengan teman — temukan & tulis **1 bug**.
- Exit: bug yang ditemukan + cara perbaikan 1 kalimat.
- **Tidak** download template flowchart guru.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Flowchart hiasan — tidak bisa di-trace | Guru gambar flowchart sempurna di slide, siswa foto |
| Decision tanpa label ya/tidak | Guru langsung ke pseudocode JS |
| Pseudocode campur bahasa random | Guru copas flowchart siap ke draw.io siswa |
| Swap formalitas — tidak baca teman | Guru skip peer COM |
| Topik terlalu kompleks (>15 node) | Guru paksa VS Code di P05 |

---

## 9. Rujukan

- Modul: [X-S1-P05](../../../kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md)
- [PRJ-X-S1-01](../../../../08-project/PRJ_X_S1_01_Kegiatan_Harian.md)
- MM: MM-12, MM-15
- Rubrik: **REA**, **COM**
- Lanjutan: P06 requirement · P08 pseudocode → JS

---

## 10. Checklist Exit Guru

- [ ] Live gambar flowchart — bukan file jadi
- [ ] TTS per simbol & baris pseudocode
- [ ] Recall P04 (ROBI literal) di opening
- [ ] Siswa trace flowchart salah & temukan cabang hilang
- [ ] Peer swap COM dijalankan
- [ ] Belum distribusi kode JS
- [ ] File materi pendukung tidak ke siswa

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Allah · ilmu terstruktur

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Alaq 96:1–5

**Kait di kelas hari ini:** Flowchart = urutan berpikir sebelum kode.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
