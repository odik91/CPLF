# Handout Siswa — X-S1-P17

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P17_project-s1-build-2.md](../../../kelas-x/semester-1/X-S1-P17_project-s1-build-2.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

- **Target hari ini:** DoD minimal terpenuhi + peer review + **revisi wajib** minimal 1 saran + siap demo 3 menit P18.
- **Timeline:** stand-up → build (target DoD) → peer review 15 menit → revisi 15 menit → prep demo.
- **Peer worksheet:** 2 pujian spesifik + 2 saran spesifik + catatan revisi yang dilakukan.
- **Rubrik peer:** pengantar — fokus COM (jelas, spesifik, konstruktif), bukan nilai toxic.
- **Bukti revisi:** screenshot / commit / catatan — wajib untuk formatif ITR.
- **Guru:** pastikan semua punya bukti revisi; tidak ranking "terbaik".

---

## 3. Materi praktik

### Build (10–50 menit) — DoD minimal

Prioritas **acceptance wajib** dari spec P15. Fitur bonus parkir ke backlog S2.

Guru keliling dengan **timer mental** — ingatkan sisa waktu 40, 30, 20 menit.

### Peer review terstruktur (50–65 menit)

1. Pasangan A demo 2 menit ke B (bukan ke guru dulu).
2. B isi worksheet: 2 pujian + 2 saran — **spesifik** ("flowchart langkah 4 jelas" bukan "bagus").
3. Tukar peran.

### Revisi wajib (65–80 menit)

Minimal **1** saran diterapkan + bukti:

- Screenshot before/after
- Catatan: "Saran: … / Revisi: …"
- Commit message singkat (jika pakai Git)

### Prep demo P18 (80–90 menit)

Outline 3 menit:

1. Masalah
2. Demo singkat
3. Satu kesalahan & perbaikan

---

## 4. Alur pertemuan (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up |
| 10–50 | Build — target: DoD minimal terpenuhi |
| 50–65 | Peer review: 2 pujian + 2 saran (worksheet peer) |
| 65–80 | Revisi wajib minimal 1 poin saran |
| 80–90 | Siapkan demo 3 menit P18 |

---

## 5. Lembar kerja / latihan

Untuk melatih **peer review** — snippet proyeksi, siswa beri pujian/saran tanpa fix:

```javascript
function masukAntre(terisi, slotMax) {
  if (terisi < slotMax) {
    terisi++;
    console.log("OK");
  }
  return terisi;
}
masukAntre(10, 10);
```

| Pertanyaan membaca (sebagai peer) | Kunci untuk diskusi |
|-----------------------------------|---------------------|
| Apakah acceptance "slot penuh" terpenuhi? | Tidak — tidak ada cabang "penuh" |
| Pujian spesifik? | Mis. nama function deskriptif |
| Saran spesifik (bukan kode guru)? | "Tambah else/log saat terisi >= slotMax" |

```javascript
// Pseudocode flowchart — peer review clarity
// 1. cek slot
// 2. jika ada → tambah
// ??? langkah jika penuh
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Saran untuk clarity? | Langkah 3 eksplisit untuk kasus penuh |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Diri · Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ali Imran 3:190–191

**Kait di kelas hari ini:** Review/spiral — renungkan apa yang sudah dikuasai.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
