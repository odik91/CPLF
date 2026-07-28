# Handout Siswa — XI-S4-P17
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S4-P17_presentasi-retrospektif.md](../../kelas-xi/semester-4/XI-S4-P17_presentasi-retrospektif.md)
---
## 1. Tujuan pembelajaran
Dari produk jadi → **cerita tim** + pelajaran kolaborasi.

---
## 2. Materi
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
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–50 | Presentasi | 5 menit/tim: masalah · arsitektur · demo · retro · transfer |
| 50–65 | Q&A | 2 pertanyaan audience |
| 65–80 | Retrospektif | Tim tulis: kolaborasi · Git · async · data |
| 80–90 | Guru | Synthesis: dari halaman (X) → sistem (XI) |

---

## 6. Lembar kerja / latihan
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

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
