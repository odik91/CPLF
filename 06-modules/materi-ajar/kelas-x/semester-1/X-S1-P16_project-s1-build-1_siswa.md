# Handout Siswa — X-S1-P16

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P16_project-s1-build-1.md](../../../kelas-x/semester-1/X-S1-P16_project-s1-build-1.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

- **Format build week:** stand-up → 1 clarifying question umum → build 50 menit → demo 30 detik → debug clinic → exit blocker.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker.
- **Clarifying question umum (10–15 menit):** edge case untuk **seluruh kelas** — mis. "Apa yang terjadi jika input kosong?" — bukan solusi kode per siswa.
- **Scaffolding stations** (jika banyak stuck):
  - A: flowchart review
  - B: if/else
  - C: loop/function
- **Debug clinic (75–85 menit):** 1 error **anonymous** diprojeksi — kelas isi Debug Sheet bersama.
- **Catat siswa perlu scaffolding** — dari P14/P15 — prioritaskan di rotation.
- **Formatif:** ITR (iterasi), TEC (tool tepat), OBS (amati gejala error).

---

## 3. Materi praktik

### Build week 1 — iterasi, bukan polish

Fokus: **progress terlihat** vs DoD — bukan presentasi final (itu P18).

### Stand-up efektif (10 menit)

- Berdiri/duduk cepat — max 1 menit/siswa atau per kelompok.
- Guru catat **blocker berulang** → jadi clarifying question atau station.

### Clarifying question umum

Pilih **1** edge case relevan PRJ di kelas:

| PRJ | Contoh clarifying question |
|-----|---------------------------|
| PRJ-01 | "ROBI literal — langkah mana yang paling sering disalahpahami?" |
| PRJ-02 | "Antrian ke-11 — output apa? Sudah di acceptance?" |
| PRJ-03 | "Input bukan angka — gejala apa yang user lihat?" |

### Scaffolding stations

Jika >40% kelas stuck di konsep sama, buka station 15 menit bergiliran — **review konsep**, bukan selesaikan PRJ.

### Demo 30 detik ke pasangan

Pasangan jawab: "Satu hal yang belum jelas dari demo teman."

### Debug clinic

Siswa volunteer kirim error (nama disembunyikan). Kelas:

1. Baca error per baris (TTS)
2. Isi Debug Sheet di papan
3. Volunteer coba fix — guru hanya tanya

---

## 4. Lembar kerja / latihan

Untuk **debug clinic** — pilih dari error siswa volunteer, atau snippet generic jika belum ada volunteer:

```javascript
// Contoh error anonymous untuk clinic — BUKAN solusi PRJ siswa
const antre = ["A", "B", "C"];
for (let i = 0; i <= antre.length; i++) {
  console.log(antre[i].toUpperCase());
}
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala baris terakhir loop? | `Cannot read properties of undefined` atau `undefined` |
| Hipotesis? | Off-by-one: `<= length` |
| Fix minimal? | `i < antre.length` |

**Etika:** jika pakai kode siswa, anonimkan — fokus proses, bukan malu.

---

## 5. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
