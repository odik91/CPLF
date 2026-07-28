# Materi Guru Lengkap — XI-S3-P02

**Handout siswa (bagikan):** [XI-S3-P02_blueprint-state_siswa.md](./XI-S3-P02_blueprint-state_siswa.md)

**Modul:** [XI-S3-P02_blueprint-state.md](../../../kelas-xi/semester-3/XI-S3-P02_blueprint-state.md)

**Materi pendukung sumber:** [XI-S3-P02_blueprint-state.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P02_blueprint-state.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P02 — Blueprint & State Diagram

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P02 |
| Unit | XI3.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B1 |
| MM | MM-11, MM-19 |

## Learning Transformation

Dari diagram bebas → **blueprint** yang bisa diuji tim.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 2 blueprint siswa P01 — cari hole |
| 5–15 | Experience | **Lift rusak**: tombol lantai vs state lift (naik/turun/buka) |
| 15–25 | Trap | Tombol tanpa state = lift “teleport” |
| 25–35 | Clarify | State diagram sederhana (3–5 node) |
| 35–45 | Concept | Blueprint: IPO + state + layar (wireframe 3 kotak) |
| 45–70 | Practice | Lengkapi blueprint app absensi mini (individu) |
| 70–85 | Peer | Swap blueprint — 1 pertanyaan clarifying |
| 85–90 | Exit | Revisi 1 bagian blueprint |

---

## Cognitive Trap

**Asumsi:** Gambar UI = selesai merancang.  
**Aman:** Wireframe bagus; tanya “transisi state saat user salah input?”

---

## Practice Output

Blueprint wajib punya: ≥2 input · ≥1 state · ≥2 layar · 1 edge case.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Blueprint ini dipakai ulang di kickoff project P12. Simpan foto/digital.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P02 Blueprint & State Diagram

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P02 |
| Modul pertemuan | [XI-S3-P02_blueprint-state.md](../../../kelas-xi/semester-3/XI-S3-P02_blueprint-state.md) |
| Unit | XI3.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B1 |
| MM | MM-11, MM-19 |
| Formatif | REA, COM |
| Ada live code? | **Tidak — blueprint live di papan** (wireframe + state diagram) |

---

## Pengetahuan Guru

**Dari diagram bebas P01 → blueprint yang bisa diuji tim.** Blueprint ini **dipakai ulang kickoff project P12** — simpan foto/digital.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Blueprint** | IPO + state diagram + wireframe layar — **satu paket** sebelum kode |
| **State diagram** | Node = kondisi app · edge = event/transisi (3–5 node cukup) |
| **Wireframe** | Kotak layar kasar — **bukan** desain cantik; fokus alur |
| **Hole** | Bagian kosong: "lalu apa?", transisi invalid, edge case |
| **Clarifying question** | Peer review: 1 pertanyaan spesifik, bukan "bagus" |
| **Edge case** | Input salah, duplikat, back di tengah wizard — harus ada di blueprint |

**Metafora lift rusak:** tombol lantai = input; **state lift** (naik/turun/buka pintu) terpisah — tombol tanpa state = lift "teleport".

**Trap modul:** Gambar UI = selesai merancang — **aman:** wireframe bagus; tanya "transisi state saat user salah input?"

**Recall P01:** IPO + state — hari ini **format** dan **peer test**.

**Prasyarat:** P01 sketsa IPO — bawa ke kelas atau gambar ulang 5 menit.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P01 — beda output vs state?" | Output = bukti ke user · state = data ingat antar aksi |
| "App tanpa state diagram — risiko?" | Transisi bingung, bug tersembunyi, tim beda asumsi |
| "Process P01 absensi — node state apa?" | idle · input_nama · validasi_gagal · tersimpan (contoh) |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Blueprint **dibangun live** — mulai dari IPO P01, tambah layer |
| **Live modeling** | Lift + wireframe 3 kotak di papan — siswa lengkapi versi sendiri |
| **Per layer / scope** | Layer 1 IPO → layer 2 state nodes → layer 3 wireframe — TTS tiap layer |
| **Recall** | Tampilkan 2 blueprint P01 siswa — cari hole **sebelum** perbaiki |
| **Membaca diagram** | State diagram contoh — prediksi "klik X dari node Y ke mana?" |
| **No starter file** | Jangan bagikan template Figma/Canva lengkap — sketsa tangan/digital kosong |

---

## Materi Inti

### Transformasi

**Dari:** Diagram bebas / hanya UI  
**Ke:** **Blueprint** yang bisa di-sw peer review dan jadi acuan kode P03+

### Komponen blueprint wajib (practice output modul)

- ≥ **2 input** (field, tombol, pilihan)
- ≥ **1 state** eksplisit (variabel + nilai mungkin)
- ≥ **2 layar** (wireframe kotak)
- ≥ **1 edge case** (invalid, duplikat, batal)

### State diagram sederhana (target papan)

```text
        [idle]
          │ klik "Mulai"
          ▼
      [isi_form] ──invalid──► [error_msg]
          │ valid
          ▼
      [konfirmasi]
          │ submit
          ▼
       [selesai]
```

### Blueprint lengkap = 3 layer

```text
LAYER 1 — IPO (dari P01)
LAYER 2 — State diagram (3–5 node)
LAYER 3 — Wireframe (≥2 layar, label tombol + field)
MARGIN  — Edge case + clarifying notes
```

### Contoh: absensi mini (individu practice)

| Layer | Isi |
|-------|-----|
| IPO | Input: nama, kelas · Process: validasi, anti-duplikat · Output: list · State: `daftarHadir[]` |
| State | `kosong` → `mengetik` → `error` / `tersimpan` |
| Wireframe | Layar form · Layar list hadir |
| Edge case | Nama kosong · nama duplikat |

### Cognitive trap — aman

- Puji wireframe rapi
- Tanya: "Dari layar 2 back ke layar 1 — state apa yang berubah?"
- Tanya: "User offline / double submit — ada di blueprint?"

---

## Alur Live Modeling

> **Blueprint live di papan.** Tidak ada distribusi file template.

### Persiapan

- 2 sketsa P01 siswa (foto proyektor) atau contoh anonymized
- Kertas A3 per siswa
- Timer peer swap 15 menit

### Skrip TTS — layer demi layer

```text
[LANGKAH 0 — Opening 0–5]
Tampilkan 2 blueprint P01 — siswa cari 1 hole (tanpa solusi dulu)
Recall: IPO + state P01 — "hari ini kita bikin blueprint tim-ready"

[LANGKAH 1 — Experience lift 5–15]
Gambar lift: tombol 1,2,3 vs lampu "sedang naik"
Ucapkan: "Tombol = input. Posisi lift = state. Pintu buka = output."
Trap: tekan lantai 3 saat lift di 1 tanpa proses naik = teleport

[LANGKAH 2 — Trap UI saja 15–25]
Tampilkan wireframe cantik tanpa panah state
Tanya: "User salah PIN — layar apa? Node state apa?"
Scope: wireframe ≠ blueprint selesai

[LANGKAH 3 — Clarify state diagram 25–35]
Gambar 4 node: idle → isi → error ↔ isi → selesai
Ucapkan: "Node = kondisi ingat app. Edge = event user atau system."
Tanya: "Berapa edge dari node error?" (kembali isi, reset, dll.)

[LANGKAH 4 — Concept blueprint 35–45]
Satukan: IPO kecil di pojok + diagram tengah + 3 kotak wireframe bawah
Ucapkan: "Blueprint = kontrak tim sebelum P03 coding DOM."

[LANGKAH 5 — Practice 45–70]
Individu: lengkapi blueprint absensi mini (modul output)
Checklist: 2 input · 1 state · 2 layar · 1 edge case
Guru stamp hole yang umum: back button, duplikat

[LANGKAH 6 — Peer swap 70–85]
Swap dengan teman — **1 clarifying question** tulis di margin
Contoh pertanyaan bagus: "Kalau duplikat, apakah state daftar berubah?"
Contoh pertanyaan lemah: "Kurang bagus" — coach ulang

[LANGKAH 7 — Revisi + exit 85–90]
Revisi 1 bagian dari feedback peer
Ucapkan: "Simpan — dipakai P12 kickoff project S3."
Exit: foto blueprint + 1 revisi terannotate
```

---

## Latihan Membaca Diagram

### Diagram A — Wireframe tanpa state

```text
[Layar A: form]  [Layar B: sukses]
Tombol: Submit
(Tidak ada node state)
```

| Pertanyaan | Kunci |
|------------|-------|
| Hole? | Transisi Submit gagal validasi — layar? |
| Tambah apa? | Node `validasi_gagal` + wireframe pesan error |

### Diagram B — State tanpa edge case

```text
idle → isi → selesai
(hanya alur happy path)
```

| Pertanyaan | Kunci |
|------------|-------|
| Edge case missing? | Back dari konfirmasi · input kosong |
| Fix? | Edge `invalid` · edge `back` tanpa reset total state |

### Diagram C — Peer question

```text
State: stok_buku = 5
Edge: pinjam → stok--
(Tidak ada cek stok 0)
```

| Pertanyaan | Kunci |
|------------|-------|
| Clarifying question? | "Pinjam saat stok 0 — tetap `--` atau tolak?" |
| Process fix? | Guard: if stok < 1 → node error, jangan mutasi |

---

## Praktik Mandiri Siswa

1. **Blueprint lengkap** absensi / kuis / peminjaman — tema bebas MA
2. Checklist modul: ≥2 input · ≥1 state · ≥2 layar · 1 edge case
3. **State diagram** 3–5 node dengan label edge (event)
4. **Peer:** tukar 1 pertanyaan clarifying — tulis jawaban revisi
5. **Tidak boleh:** download template UI kit — sketsa sendiri

**Extension:** Tandai node yang akan jadi `currentStep` di P06 wizard.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Wireframe Figma mulus, diagram kosong | Layer state wajib sebelum polish UI |
| Terlalu banyak node (>7) | Sederhanakan — 3–5 node cukup MA |
| State diagram terpisah tanpa hubung IPO | Satu halaman blueprint — cross-reference |
| Peer review pujian generik | Model 1 contoh clarifying question |
| Blueprint tidak disimpan | Foto + folder digital — dipakai P12 |
| Guru beri file .fig template | Etika — bangun live |

---

## Rujukan

- Modul: [XI-S3-P02](../../../kelas-xi/semester-3/XI-S3-P02_blueprint-state.md)
- Sebelum: [P01 IPO](./XI-S3-P01_aplikasi-sistem-ipo.md)
- Lanjut: [P03 DOM Antarmuka Hidup](./XI-S3-P03_dom-antarmuka-hidup.md)
- Kickoff nanti: [XI-S3-P12](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)
- MM-11, MM-19 · CXI-B1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Recall P01 IPO+state — siswa jawab cepat
- [ ] Blueprint **3 layer** live atau individu lengkap
- [ ] State diagram ≥3 node + ≥1 edge case
- [ ] Peer swap — 1 clarifying question terdokumentasi
- [ ] Revisi 1 bagian dari feedback
- [ ] Latihan baca diagram — prediksi hole
- [ ] Foto/digital disimpan untuk P12

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
