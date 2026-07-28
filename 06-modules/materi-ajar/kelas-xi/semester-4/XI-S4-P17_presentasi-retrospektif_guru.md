# Materi Guru Lengkap — XI-S4-P17
**Modul:** [XI-S4-P17_presentasi-retrospektif.md](../../kelas-xi/semester-4/XI-S4-P17_presentasi-retrospektif.md)
**Materi pendukung sumber:** [XI-S4-P17_presentasi-retrospektif.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-4/XI-S4-P17_presentasi-retrospektif.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P17 — Presentasi & Retrospektif Tim

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P17 |
| Unit | XI4.8 |
| Durasi | 2 JP = 90 menit |

## Learning Transformation

Dari produk jadi → **cerita tim** + pelajaran kolaborasi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–50 | Presentasi | 5 menit/tim: masalah · arsitektur · demo · retro · transfer |
| 50–65 | Q&A | 2 pertanyaan audience |
| 65–80 | Retrospektif | Tim tulis: kolaborasi · Git · async · data |
| 80–90 | Guru | Synthesis: dari halaman (X) → sistem (XI) |

---

## Presentasi Wajib (per tim)

- [ ] Semua anggota bicara ≥30 detik  
- [ ] Tunjukkan 1 keputusan data/API  
- [ ] Tunjukkan 1 iterasi dari review  
- [ ] Transfer ke XII / kehidupan  

---

## Formatif / Sumatif

[Rubrik Project](../../../09-rubrik/09_Rubrik_Project.md) + kolaborasi

---

## Catatan Guru

Nilai MA: gotong royong · kejujuran atribusi · amanah data.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P17 Presentasi & Retrospektif Tim


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P17 |
| Modul pertemuan | [XI-S4-P17_presentasi-retrospektif.md](../../../kelas-xi/semester-4/XI-S4-P17_presentasi-retrospektif.md) |
| Unit | XI4.8 |
| Durasi referensi | 2 JP = 90 menit |
| Rubrik | [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) + kolaborasi |
| Capability | COM, REA, ITR, TEC |
| Ada live code? | **Presentasi tim + retro — bukan coding / fix menit terakhir** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari produk jadi → **cerita tim** + pelajaran kolaborasi + bukti capability.
- **Format presentasi wajib (modul):**
  - Masalah · arsitektur · demo · retro · transfer
  - **Semua anggota bicara ≥30 detik**
  - Tunjukkan 1 keputusan data/API
  - Tunjukkan 1 iterasi dari peer review P16
  - Transfer ke XII / kehidupan
- **Timeline:** presentasi 5 menit/tim → Q&A 2 pertanyaan → retrospektif tim → synthesis guru.
- **Struktur 5 menit per tim:**

| Menit | Isi |
|-------|-----|
| 0–1 | Masalah & user |
| 1–2 | Arsitektur — API/storage + modul tim |
| 2–4 | Demo DoD live + 1 iterasi P16 |
| 4–5 | Retro singkat + transfer |

- **Rubrik:** REA, ITR, COM, TEC + **kolaborasi/atribusi** — guru isi, **bukan** ranking di depan kelas.
- **Retrospektif tim (65–80 menit):** kolaborasi · Git · async · data — tulis privat/kelompok.
- **Synthesis guru (80–90 menit):** dari halaman (X) → sistem (XI) — spiral tahun.
- **Nilai MA:** gotong royong · kejujuran atribusi · amanah data.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P16 — 1 revisi peer review apa? | (tim + bukti commit fix) |
| P08 — mengapa loading/error wajib di demo API? | Async — user perlu feedback saat tunggu/gagal |
| Dari S3 app ke S4 tim — satu perbedaan besar? | Data luar/persist + Git + tanggung jawab bersama |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Presentation coaching** | Guru bantu struktur, timing, rotasi speaker — **bukan** polish kode menit terakhir. |
| **Jangan takeover demo** | Tim presenter klik browser — guru timekeeper & moderasi Q&A. |
| **Jangan perbaiki project di depan kelas** | Feedback untuk growth — bukan live fix showcase. |
| **Rayakan proses tim** | Puji kolaborasi, iterasi peer, kejujuhan kesulitan — bukan "paling cantik". |
| **Anti hero coding** | Wajib semua anggota bicara — guru intervensi jika 1 orang monopol demo. |
| **Amanah data** | Demo pakai data dummy/sekolah — tidak expose data pribadi teman. |
| Ranking | **Dilarang** — tidak ada juara 1/2/3 toxic |

### Presentation coaching — peran guru

- **Sebelum presentasi:** spot-check demo script P16 — assignee per bagian.
- **Saat demo:** timer 5 menit; isyarat rotasi speaker.
- **Setelah demo:** moderasi Q&A — 2 pertanyaan audience.
- **Whisper coaching:** "Masalah user — napas — arsitektur data — demo — iterasi P16 — transfer."

### Larangan menit terakhir

```text
"Sini repo-nya bu, pak/bu betulkan fetch dulu biar demo lancar"
→ Tolak — merusak bukti ITR/COM; demo apa adanya + jelaskan blocker (OBS)
```

### Script coaching tim + transfer

```text
"Semua anggota — 30 detik minimum. Siapa jelaskan Git? Siapa demo UI?"
"Keputusan data/API — mengapa field X? Alternatif?"
"Iterasi P16 — before/after, bukan hanya kata-kata."
"Retro jujur — conflict merge? hero coding hampir terjadi?"
"Transfer: pola async+persist dipakai di XII/industri bagaimana?"
```

---

## 4. Materi Inti

### Briefing presentasi (0–5 menit)

Jelaskan ke siswa — **bukan** angka skor:

- Dinilai: clarity masalah, demo DoD, **arsitektur data/API**, iterasi peer, **kolaborasi/atribusi**, transfer, Q&A
- Rubrik lengkap guru: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Gate: README + Git checkpoint P16 sebelum skor kolaborasi penuh

### Presentasi bergiliran (0–50 menit)

**Checklist tim** (coaching):

- [ ] Masalah + user — rotasi speaker
- [ ] Arsitektur — ER/API diagram atau README (30–60 detik)
- [ ] Demo **DoD live** — happy path + offline/error jika API
- [ ] **1 iterasi P16** — commit/screenshot before/after
- [ ] **Semua anggota ≥30 detik**
- [ ] Retro singkat + transfer 2–3 kalimat
- [ ] Backup screenshot jika live gagal

Adjust: ±8–10 tim @ 5 menit — overflow → gallery walk atau jadwalkan lanjut.

### Q&A audience (50–65 menit)

Per tim (atau batch):

- **2 pertanyaan bernalar** — data/API, async, Git, edge case
- Moderasi guru — tidak roast

Contoh pertanyaan **PRJ S4**:

| PRJ | Pertanyaan bernalar |
|-----|---------------------|
| PRJ-01 | "Mengapa field cuaca X dipilih — bukan dump JSON?" |
| PRJ-02 | "Persist — kapan save? Bagaimana hindari overwrite antar anggota?" |
| PRJ-03 | "Relasi idBuku — mengapa cari by id bukan judul?" |
| PRJ-04 | "Pembagian modul — conflict merge bagaimana diselesaikan?" |

**Universal:**

- "Peer review P16 — saran mana yang paling mengubah produk?"
- "Git log — bagaimana distribusi commit antar anggota?"
- "AI dipakai? Bagian mana + atribusi di README?"

### Retrospektif tim (65–80 menit)

Prompt kelompok (kertas/digital privat):

```text
Kolaborasi: Start / Stop / Continue
Git: apa yang bentrok? bagaimana diselesaikan?
Async/data: kesulitan fetch/persist/error?
Amanah: data teman — apakah scope dijaga?
Satu utang teknis untuk perbaikan nanti (PRJ-04 DoD):
```

Guru keliling — clarifying questions, **tidak** menulis retro siswa.

### Synthesis guru — closing (80–90 menit)

Spiral X → XI:

```text
Kelas X: halaman web, masalah, spec
Semester 3: sistem IPO, state, modul, solo/pasangan
Semester 4: data luar, persist, tim, Git, amanah
Kelas XII preview: data lebih dalam, etika AI
```

Apresiasi effort — bukan ranking. Reminder artefak untuk P18 portofolio.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Urutan tim + timer + demo script per tim (dari P16).
- Rubrik project — guru only.
- Pool pertanyaan Q&A di papan.
- **Tidak** sesi last-minute coding.

### Skrip showcase tim

```text
[0–5] Briefing: cerita tim + data/API + atribusi; no ranking
[0–50] Presentasi 5 menit × N tim
       Guru: timekeeper, rotasi speaker check, coaching whisper
[50–65] Q&A 2 pertanyaan per tim
[65–80] Retrospektif tim — kolaborasi · Git · async · data
[80–90] Synthesis guru + preview P18 portofolio
```

### Jika demo gagal live

1. Tim sebut gejala (OBS) — network, storage, merge
2. Tunjuk iterasi P16 + screenshot backup
3. Guru normalisasi — honesty = COM/ITR
4. Lanjut Q&A arsitektur & kolaborasi

### Modeling Q&A sehat (papan)

```text
✓ "Mengapa localStorage bukan sessionStorage untuk absensi?"
✓ "Merge conflict — komunikasi sebelum resolve?"
✗ "Tim kalian paling jelek Git-nya." (larangan)
```

**Dilarang:** guru mengetik fix di proyektor saat presentasi.

---

## 6. Latihan Membaca Kode

Presentasi **bukan** walkthrough kode baris-per-baris. Snippet untuk **latihan Q&A reasoning** (opsional 5 menit sebelum demo pertama):

```javascript
// Keputusan tim: transform di pipeline.js
export function toCards(articles) {
  return articles
    .filter(a => a.title)
    .slice(0, 5)
    .map(a => ({ title: a.title, date: a.publishedAt }));
}
```

| Pertanyaan coaching (Q&A) | Kunci |
|---------------------------|-------|
| Keputusan data? | Filter empty + limit 5 — selaras DoD |
| Tanya peer? | "Slice 5 — urutan dari API atau sort lokal?" |

```text
# README atribusi
- Ali: UI + render
- Budi: fetch + transform
- Citra: persist + QA
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Kolaborasi terbaca? | Peran jelas — mendukung COM |
| Cross-check Git? | Presenter sebut commit contoh per peran |

---

## 7. Praktik Mandiri Siswa

1. **Presentasi 5 menit tim** — semua anggota ≥30 detik.
2. **Demo DoD** + 1 iterasi P16 + keputusan data/API.
3. **Q&A** — jawab 2 pertanyaan audience.
4. **Retrospektif tim** — kolaborasi · Git · async · data.
5. **Utang teknis** — 1 item tertulis (PRJ-04).
6. **Kumpulkan link repo** — untuk P18 portofolio.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| 1 anggota monopol 5 menit | Coaching rotasi — wajib ≥30 d each |
| Presentasi = baca kode semua file | Redirect: arsitektur + demo + iterasi |
| Skip iterasi P16 | Wajibkan bukti commit peer review |
| Skip retro / generic | Prompt konkret conflict Git |
| Peer roast "tim gak kompak" | Moderasi — SPD & proses |
| Guru over-praise hanya UI | Puji kolaborasi & data reasoning |
| Ranking kelas | Explicit: tidak ada juara |
| Demo expose data pribadi | Data dummy — amanah |
| Menit terakhir minta guru fix | Tolak — demo apa adanya |

---

## 9. Rujukan

- Modul pertemuan: [XI-S4-P17](../../../kelas-xi/semester-4/XI-S4-P17_presentasi-retrospektif.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Peer review Git: [P16 materi pendukung](./XI-S4-P16_peer-review-git.md)
- Portofolio next: [P18 materi pendukung](./XI-S4-P18_portofolio-tahun-xi.md)
- PRJ bank: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-4-data-async-kolaborasi)
- Showcase S3 (paralel): [XI-S3-P18 materi](../semester-3/XI-S3-P18_showcase-refleksi-s3.md)
- Indeks S4: [XI-S4_Index](../../../kelas-xi/semester-4/XI-S4_Index.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Semua tim present (atau rencana lanjut/gallery)
- [ ] Semua anggota bicara ≥30 detik
- [ ] Presentasi: arsitektur data/API + demo + iterasi P16 + transfer
- [ ] **Tidak** last-minute fix kode / takeover demo
- [ ] Q&A — 2 pertanyaan, tidak toxic
- [ ] Retrospektif tim terkumpul
- [ ] Skor rubrik project + kolaborasi (guru, tidak ranking)
- [ ] Synthesis X→XI delivered
- [ ] Link repo untuk P18 portofolio
- [ ] **Tidak** ranking juara di depan kelas

[← Indeks S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
