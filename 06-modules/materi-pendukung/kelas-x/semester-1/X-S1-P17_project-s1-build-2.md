# Materi Pendukung Guru — X-S1-P17 Project S1 Build (2) + Peer Review

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P17 |
| Modul pertemuan | [X-S1-P17_project-s1-build-2](../../../kelas-x/semester-1/X-S1-P17_project-s1-build-2.md) |
| Unit | X1.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S1-* |
| Rubrik | [Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) (pengantar) |
| Capability | ITR, COM |
| Ada live code? | **Facilitator + peer review — bukan solusi guru** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Target hari ini:** DoD minimal terpenuhi + peer review + **revisi wajib** minimal 1 saran + siap demo 3 menit P18.
- **Timeline:** stand-up → build (target DoD) → peer review 15 menit → revisi 15 menit → prep demo.
- **Peer worksheet:** 2 pujian spesifik + 2 saran spesifik + catatan revisi yang dilakukan.
- **Rubrik peer:** pengantar — fokus COM (jelas, spesifik, konstruktif), bukan nilai toxic.
- **Bukti revisi:** screenshot / commit / catatan — wajib untuk formatif ITR.
- **Guru:** pastikan semua punya bukti revisi; tidak ranking "terbaik".

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Blocker P16 — sudah selesai? | (siswa spesifik) |
| Apa DoD minimal PRJ kamu? | Siswa sebut dari acceptance/spec |
| Feedback P13/P16 — debug vs saran teman? | Sama-sama iterasi; peer review tentang clarity & logic, bukan hanya syntax |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator** | Build + peer review — guru tidak menyelesaikan PRJ siswa. |
| **Jangan takeover keyboard** | Saat peer review: observer, bukan editor. |
| **Jangan bagikan solusi** | Peer **tidak** fix kode teman — hanya saran; owner yang revisi. |
| **Clarifying questions** | Guru model pertanyaan peer: "Baris mana?", "Apa yang terjadi jika …?" |
| Peer review | Pujian spesifik (bukan "bagus") + saran actionable (bukan "kurang rapi") |
| Copas antar PRJ | Varian PRJ berbeda — jika mirip persis, selidiki proses |

### Larangan peer review toxic

| Jangan | Ganti dengan |
|--------|--------------|
| "Jelek" | "Saat input X, output saya bingung karena …" |
| Fix kode teman langsung | "Coba cek kondisi di baris …" |
| Ranking kelompok | Rubrik individu vs DoD sendiri |

### Etika guru saat siswa stuck menjelang DoD

```text
"Bukan waktu guru menyelesaikan — waktu memotong scope ke acceptance minimal."
"Acceptance mana yang MUST vs NICE?"
"Demo P18: 1 fitur yang kamu paham > 5 fitur copas."
```

---

## 4. Materi Inti

### Build (10–50 menit) — DoD minimal

Prioritas **acceptance wajib** dari spec P15. Fitur bonus parkir ke backlog S2.

Guru keliling dengan **timer mental** — ingatkan sisa waktu 40, 30, 20 menit.

### Peer review terstruktur (50–65 menit)

1. Pasangan A demo 2 menit ke B (bukan ke guru dulu).
2. B isi worksheet: 2 pujian + 2 saran — **spesifik** ("flowchart langkah 4 jelas" bukan "bagus").
3. Tukar peran.
4. Guru float — dengar apakah feedback COM memenuhi rubrik.

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Worksheet peer (kertas/digital) — template kosong, bukan contoh terisi guru.
- Rubrik peer 1 halaman di papan.
- List pasangan — hindari teman dekat yang selalu "bantuin copas".

### Skrip facilitator

```text
[0–10] Stand-up — fokus: DoD minimal hari ini
[10–50] BUILD — guru: clarifying questions only
         Tanya berulang: "Acceptance centang berapa?"
[50–65] PEER REVIEW — model 1 contoh feedback BAIK di papan:
         Pujian: "Nama variabel antre jelas."
         Saran: "Saat slot penuh, pesan belum muncul — tambah else."
         BUKAN contoh kode fix.
[65–80] REVISI — owner kode revisi sendiri; guru cek bukti
[80–90] Outline demo P18 — 3 bullet di kertas
```

### Modeling feedback (papan, bukan kode)

Guru tulis contoh **kalimat peer review**, bukan patch kode:

```text
✓ "Loop baris 12 saya paham karena komentar // hitung total"
✗ "Loop-nya salah" (terlalu vague)

✓ "Saran: uji input 0 — acceptance kamu sebut edge case?"
✗ "Pakai kode saya aja" (larangan)
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Selesaikan DoD minimal** — self-check acceptance.
2. **Peer worksheet** — 2+2 feedback spesifik.
3. **Revisi ≥1 saran** — dengan bukti tertulis/visual.
4. **Outline demo P18** — 3 pertanyaan wajib presenter (modul P18).
5. **Tidak** mengerjakan PRJ teman — peer review only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Peer review vague ("bagus") | Model contoh spesifik di papan |
| Teman fix kode langsung | "Owner yang ketik — kamu hanya saran" |
| Tidak revisi — langsung demo prep | Wajibkan bukti 1 revisi |
| Guru menyelesaikan PRJ menjelang deadline | Potong scope — jangan inject kode |
| Malu kode belum sempurna | Normalisasi — P18 tentang proses |

---

## 9. Rujukan

- Modul pertemuan: [X-S1-P17](../../../kelas-x/semester-1/X-S1-P17_project-s1-build-2.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Build week 1: [P16 materi pendukung](./X-S1-P16_project-s1-build-1.md)
- Showcase prep: [P18 materi pendukung](./X-S1-P18_showcase-refleksi-s1.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] DoD minimal — siswa self-report (guru spot-check 3–5)
- [ ] Peer worksheet lengkap — feedback spesifik
- [ ] Bukti revisi ≥1 saran untuk setiap siswa/kelompok
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Outline demo P18 siap
- [ ] Tidak ada ranking toxic di kelas

[← Indeks S1](./X-S1_Materi_Index.md)
