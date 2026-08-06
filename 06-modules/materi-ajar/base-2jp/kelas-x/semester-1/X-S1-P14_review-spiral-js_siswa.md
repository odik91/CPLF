# Handout Siswa — X-S1-P14

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P14_review-spiral-js.md](../../../kelas-x/semester-1/X-S1-P14_review-spiral-js.md)

---

## 1. Tujuan pembelajaran

Menyatukan pola: masalah → algoritma → kondisi → data → loop → debug.

---

## 2. Ringkasan konsep

- **Transformasi inti:** menyatukan rantai S1 — masalah → algoritma → kondisi → data → loop → debug.
- **Kasus integrasi:** “Antre konsultasi wali kelas” — frame masalah baru yang memakai semua konsep.
- **Station rotation (4 × ~12 menit):**
  1. Flowchart antre
  2. If: batas 10 slot/hari
  3. Loop: total antrean / hitung
  4. Debug: off-by-one loop
- **Mini challenge:** gabung 2 station jadi 1 script console — siswa **mengetik**, guru **tidak** bagikan gabungan.
- **Peer explain:** 2 menit/siswa jelaskan ke teman — rubrik COM (komunikasi).
- **Buffer sebelum project:** identifikasi siswa perlu scaffolding ekstra di P15–P17.
- **Preview P15:** pilih PRJ-X-S1-01/02/03 — beda varian antar kelompok/kelas paralel.

---

## 3. Materi praktik

### Spiral review — bukan ujian baru

P14 bukan materi baru, melainkan **jaring konsep**. Guru membantu siswa melihat bahwa project S1 minggu depan hanya kombinasi yang sudah dipelajari.

### Frame masalah: Antre konsultasi wali kelas

| Aspek | Konsep S1 |
|-------|-----------|
| Urutan proses | Algoritma / flowchart (P04–P05) |
| Slot penuh | If/else (P08–P09) |
| Hitung antrean | Variabel + loop (P10–P12) |
| Index salah | Debug (P13) |

### Station rotation — peran guru

- **Timer visible** — 12 menit/station, rotate jelas.
- Guru **bertanya**, tidak menyelesaikan worksheet: "Langkah berikutnya di flowchart?" / "Kondisi apa cek slot penuh?"
- Catat nama siswa yang stuck di station 3–4 → rencana scaffolding P16.

### Peer explain (COM)

Rubrik ringkas: teman paham urutan? istilah benar? ada contoh konkret?

### Map ke Mental Model

Siswa tulis bahasa sendiri — bukan copy definisi slide. Contoh: "Loop = kasir scan berulang."

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Quiz oral cepat: 5 konsep S1 (algoritma, if, var, loop, debug) |
| 10–25 | Experience | Satu masalah baru: “antre konsultasi wali kelas” — kelompok frame |
| 25–40 | Practice | Station rotation 4 station × 12 menit: flowchart / if / loop / debug |
| 40–55 | Practice | Mini challenge: gabung 2 station jadi 1 script console |
| 55–70 | Clarify | Peer explain 2 menit/siswa — rubrik COM |
| 70–85 | Reflect | Map konsep ke Mental Model (bahasa sendiri) |
| 85–90 | Preview | Project S1 minggu depan — pilih PRJ |

---

## 5. Lembar kerja / latihan

**Hanya untuk proyeksi / diskusi — TIDAK untuk didistribusikan ke siswa.**

### Station 3 — Loop (prediksi output)

```javascript
const antre = ["Rina", "Fajar", "Siti"];
let nomor = 1;
for (let i = 0; i < antre.length; i++) {
  console.log("No.", nomor, "-", antre[i]);
  nomor = nomor + 1;
}
console.log("Total:", nomor - 1);
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Output baris terakhir? | `Total: 3` |
| Urutan eksekusi nomor? | 1, 2, 3 lalu total = 3 |

### Station 4 — Debug (cari bug)

```javascript
const slotMax = 10;
let terisi = 9;
const antreBaru = true;

if (terisi < slotMax) {
  terisi = terisi + 1;
  console.log("Masuk antre. Terisi:", terisi);
} else if (terisi = slotMax) {
  console.log("Slot penuh.");
}
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Bug tersembunyi di else if? | `=` assignment — selalu truthy, `terisi` jadi 10 |
| Gejala jika terisi sudah 10? | Perilaku tidak konsisten / selalu "penuh" salah |

### Station 2 — If (prediksi tanpa run)

```javascript
let terisi = 10;
const slotMax = 10;

if (terisi >= slotMax) {
  console.log("Penuh");
} else {
  console.log("Masih ada slot");
}
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Output? | `Penuh` |
| Ubah ke `<` — apa beda? | 10 slot penuh tapi `<` anggap masih slot (off-by-one logic) |

### Integrasi (mini challenge — guru tidak beri jawaban)

Guru hanya ucapkan: "Gabungkan logika slot + loop nama antre — minimal 8 baris, versi kalian."

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Diri · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ta-Ha 20:114 (Rabbi zidni ilma)

**Kait di kelas hari ini:** Bernalar & literasi digital sebagai ilmu bermanfaat.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
