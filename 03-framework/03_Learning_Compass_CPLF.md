# Learning Compass & Orientation — CPLF

**Version:** 0.2 (Draft)  
**Konteks:** Revisi setelah observasi kelas — siswa MA Kelas X **bukan** software engineer yang sudah terbiasa problem-solving terbuka.

## Masalah yang diperbaiki

Framework v0.1 terlalu cepat memasukkan siswa ke **Experience / diskusi** seolah mereka:

- sudah paham cara belajar CPLF,
- sudah terbiasa membingkai masalah,
- siap seperti tim engineering yang langsung brainstorm solusi.

Akibatnya di **P01**, banyak siswa bingung: *“Belum dijelaskan, kok sudah disuruh diskusi?”*

**Kesalahan desain:** mengasumsikan siswa = problem solver profesional.  
**Perbaikan:** setiap pertemuan (terutama awal semester) diawali **Orientation + Learning Compass**, lalu **scaffolding** sebelum tugas terbuka.

---

## Learning Compass (Kompas Belajar)

Alat orientasi visual & verbal — **bukan** materi teori panjang. Siswa tahu:

| Arah kompas | Pertanyaan yang dijawab |
|-------------|-------------------------|
| **Utara — Tujuan** | Apa yang berubah dalam cara berpikir hari ini? (Learning Transformation) |
| **Timur — Cara** | Fase apa saja yang akan kita lewati? (peta kelas) |
| **Selatan — Peran** | Apa tugas saya? Apa yang **bukan** tugas saya? |
| **Barat — Dukungan** | Guru/model apa yang saya dapat sebelum kerja sendiri? (scaffolding) |

### Peta fase (tampilkan di papan / handout / bacaan Mimi–Robi)

```text
ORIENTASI  →  SCAFFOLD  →  ALAMI  →  TRAP  →  KLARIFIKASI
     →  KONSEP  →  LATIHAN  →  REFLEKSI  →  TRANSFER
```

Singkat untuk siswa:

> **Kenalan dulu peta-nya → lihat contoh → baru kamu coba.**

---

## Orientation (0–15 menit, pertemuan pembuka / unit baru)

**Tujuan:** menurunkan kebingungan, membangun kontrak belajar, **bukan** langsung menilai ide siswa.

| Komponen | Isi | Durasi saran |
|----------|-----|--------------|
| **Sambutan & identitas** | “Kita latih cara berpikir; coding = media.” Bukan kelas “jadi programmer minggu ini.” | 3’ |
| **Learning Compass** | Tunjuk peta fase hari ini + transformasi 1 kalimat | 5’ |
| **Rule kelas** | Kontrak aman (error, tanya, no copas, hormati ide) | 5’ |
| **Preview ringan** | “Nanti kita akan…” — tanpa spoiler jawaban | 2’ |

**P01 wajib penuh.** P02–P04: compass ringkas (3–5’). Dari unit stabil: compass 1–2’ + recall.

---

## Scaffolding (sebelum Experience terbuka)

Prinsip Vygotsky: dukungan sementara yang **ditarik** setelah siswa mampu.

| Level | Siapa | Contoh P01 |
|-------|-------|------------|
| **I do** | Guru | Model live: satu masalah kantin → tulis baris Masalah/Siapa/Batas **think-aloud** |
| **We do** | Guru + kelas | Lengkapi 1 kotak template bersama (TTS) |
| **You do** | Siswa / kelompok | Sticky note, kelompok framing, worksheet |

**Aturan:** Jangan loncat ke **You do** (diskusi/kelompok terbuka) sebelum **I do** minimal 1×.

### Scaffolding ≠ lecture panjang

- Bukan 40 menit slide definisi.  
- Cukup **satu contoh terisi** + **satu contoh buruk vs lebih baik** + kalimat “ini yang akan kalian lakukan nanti.”

---

## Learning Cycle CPLF (revisi v0.2)

```text
Orientation (Learning Compass)
  → Scaffold (I do / We do)
  → Experience
  → Observe → Question
  → Trap
  → Clarify → Reason
  → Concept
  → Practice (You do)
  → Reflect → Transfer
```

**Yang tidak berubah:** pengalaman & trap tetap inti CPLF — yang berubah adalah **ada peta dan contoh dulu**, bukan diskusi kosong.

---

## Siapa siswa CPLF (bukan asumsi SWE)

| Bukan asumsi default | Asumsi yang benar |
|----------------------|-------------------|
| Siswa langsung bisa brainstorm solusi | Siswa butuh model & bahasa masalah dulu |
| Diskusi = indikator sukses hari pertama | Orientasi + contoh = fondasi hari pertama |
| “Mereka pasti ngerti maksud tugas” | Instruksi eksplisit + contoh wajib (nyambung P04) |
| Frustrasi = malas | Frustrasi awal = sinyal kurang scaffolding |

---

## Checklist guru — sebelum Experience terbuka

- [ ] Learning Compass sudah ditampilkan (peta fase hari ini)  
- [ ] Transformasi 1 kalimat sudah diucapkan  
- [ ] Minimal **1× I do** (guru model) untuk tugas yang akan diberikan  
- [ ] Siswa tahu: ini fase apa, nanti apa, exit ticket apa  
- [ ] Baru lalu: Do Now / diskusi / kelompok  

---

## Implementasi per kelas

| Konteks | Orientation | Scaffold |
|---------|-------------|----------|
| **P01 S1 (4JP)** | Penuh (15–20’) + bacaan Mimi–Robi | Model framing kantin live |
| **P02 S1 (4JP)** | Compass 5’ + recall | Model live search jaguar |
| **P03 S1 (4JP)** | Compass: impact AI · **bukan** debug | Demo generate + buka HTML 1× |
| **P04–P06** | Compass ringkas | Sesuai modul |
| **S2+ / XI / XII** | Compass 1–2’ | Scaffold menurut unit |
| **Project build** | Checkpoint + kriteria DoD | Starter kosong + contoh 1 file referensi (bukan solusi penuh) |

---

## Dokumen terkait

- [03_Framework_CPLF.md](./03_Framework_CPLF.md) — Learning Cycle revisi  
- [02_Psikologi_Pembelajaran_CPLF.md](../02-psikologi/02_Psikologi_Pembelajaran_CPLF.md) — scaffolding  
- [00_Panduan_Pertemuan.md](../06-modules/kelas-x/00_Panduan_Pertemuan.md) — blok waktu  
- Bacaan siswa P01: [X-S1-P01_bacaan-mimi-robi.md](../06-modules/materi-ajar/base-4jp/kelas-x/semester-1/X-S1-P01_bacaan-mimi-robi.md)
- Indeks aktif: [base-4jp X-S1_Index](../06-modules/base-4jp/kelas-x/semester-1/X-S1_Index.md)

## Catatan versi

v0.2 — revisi pasca observasi: siswa bingung diskusi sebelum penjelasan. Orientation + scaffold wajib sebelum Experience terbuka (Kelas X awal).
