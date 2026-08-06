# Materi Pendukung Guru — X-S1-P14 Review Spiral & Integrasi JS

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P14 |
| Modul pertemuan | [X-S1-P14_review-spiral-js](../../../kelas-x/semester-1/X-S1-P14_review-spiral-js.md) |
| Unit | X1.1–X1.7 (review integratif) |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-B*, CX-T* |
| Ada live code? | **Tidak penuh — latihan membaca kode & station rotation** |

---

## 1. Pengetahuan yang Dikuasai Guru

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

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| 5 konsep S1 (quiz oral cepat)? | Algoritma, if/else, variabel, loop, debug. |
| Urutan berpikir CPLF sebelum mengetik kode? | Pahami masalah → algoritma/flowchart → pseudocode → baru JS. |
| Kapan pakai if vs loop? | If = keputusan sekali/bercabang; loop = repetisi operasi sama. |
| Error pertama kali dilihat di P13? | Baca pesan & baris — gejala → hipotesis → uji. |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| No copas | Snippet station **hanya proyeksi** — tidak di-WA, tidak di-upload LMS sebagai file. |
| Live coding / live modeling | Guru **facilitator** di station; live ketik hanya contoh 5–8 baris jika kelompok stuck total. |
| Per baris / scope | Saat mini challenge: TTS saat siswa presentasi kode mereka, bukan saat guru baca solusi. |
| Recall | Opening quiz oral — tidak menakutkan, poin cepat. |
| Membaca kode | **Inti pertemuan** — prediksi output/bug sebelum mengetik. |

**Larangan khusus:** jangan distribusikan “paket station lengkap” atau “jawaban mini challenge” — itu merusak integrasi sebelum project.

---

## 4. Materi Inti

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- 4 station di sudut kelas (kertas / laptop tanpa file guru).
- Snippet proyeksi di materi pendukung ini — **tidak** dicetak untuk siswa.
- Kertas flowchart kosong per station.

### Skrip facilitator (bukan solusi penuh)

```text
[LANGKAH 1 — Opening quiz 0–10 menit]
Tanya cepat 5 konsep — random siswa, reward proses bukan speed.

[LANGKAH 2 — Frame masalah 10–25 menit]
Tulis di papan: "Antre konsultasi wali kelas — max 10 siswa/hari."
Kelompok 3–4: buat 5 langkah algoritma di kertas (bukan kode).
Guru: "Apa input? Apa output? Edge case?"

[LANGKAH 3 — Station rotation 25–40 menit]
Station 1: flowchart antre (kertas)
Station 2: tulis pseudocode if slot penuh
Station 3: prediksi snippet loop (proyeksi — lihat §6)
Station 4: prediksi snippet bug (proyeksi — lihat §6)
Guru rotate — 1 clarifying question per kelompok, tidak fix kode.

[LANGKAH 4 — Mini challenge 40–55 menit]
Instruksi: "Gabung station 2 + 3 jadi script console — versi kalian."
Guru **tidak** ketik solusi gabungan.
Checkpoint: 2 kelompok baca kode mereka dengan TTS ke kelas.

[LANGKAH 5 — Peer explain + reflect 55–85 menit]
Pair 2 menit explain. Map mental model. Preview PRJ P15.

[LANGKAH 6 — Exit 85–90 menit]
Satu kalimat: konsep S1 mana yang masih goyah?
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Station worksheets** — kertas/kelompok, bukan file guru.
2. **Mini challenge script** — ketik di console masing-masing; variasi nama variabel wajib.
3. **Peer explain** — 1 halaman catatan: "Saya jelaskan loop ke teman dengan analogi …"
4. **Refleksi map MM** — 3 konsep + bahasa sendiri.
5. **Preview PRJ:** lihat [Project Bank](../../../08-project/08_Project_Bank_Index.md) — pilih minat, belum coding penuh.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Minta "file jawaban station" | Tolak — ulang prediksi oral |
| Mini challenge copas dari internet | Tanya: "Baris mana yang kamu ubah untuk kasus wali kelas?" |
| Quiz oral diam | Pair dulu, baru random |
| Stuck di station 4 (debug) | Scaffolding: baca error/perbandingan `=` vs `===` |
| Kelompok selesai cepat | Extension: tambah edge case "batal antre" |

---

## 9. Rujukan

- Modul pertemuan: [X-S1-P14](../../../kelas-x/semester-1/X-S1-P14_review-spiral-js.md)
- Indeks S1: [X-S1_Index](../../../kelas-x/semester-1/X-S1_Index.md)
- Project preview: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md)
- Rubrik COM: [09_Rubrik_Enam_Aspek](../../../09-rubrik/09_Rubrik_Enam_Aspek.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Snippet station **tidak** dibagikan sebagai file ke siswa
- [ ] 4 station rotation berjalan — catatan siswa perlu scaffolding
- [ ] Mini challenge: ≥1 kelompok presentasi dengan TTS (bukan guru baca solusi)
- [ ] Recall 5 konsep S1 terpasang
- [ ] Preview PRJ P15 — varian berbeda antar kelompok
- [ ] Daftar 2–3 nama untuk station ekstra di P16 (jika perlu)

[← Indeks S1](./X-S1_Materi_Index.md)
