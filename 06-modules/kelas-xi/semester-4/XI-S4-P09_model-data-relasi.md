# XI-S4-P09 — Model Data & Relasi

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P09 |
| Unit | XI4.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2, CXI-T4 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |

## Learning Transformation

Dari satu array datar → **relasi** id & foreign key sederhana.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_07: buku vs peminjam — 2 entitas |
| 5–18 | Experience | **Perpustakaan MA** — kartu anggota + buku |
| 18–28 | Trap | Duplikasi nama lengkap di setiap record |
| 28–38 | Clarify | Normalisasi ringkas — id referensi |
| 38–48 | Concept | 1-to-many · lookup by id |
| 48–70 | Practice | Skema: `members[]` + `loans[]` dengan `memberId` |
| 70–85 | Practice | Query join manual: tampilkan pinjaman + nama |
| 85–90 | Exit | Justifikasi 1 pilihan desain |

---

## Cognitive Trap

**Asumsi:** Database = Excel satu sheet raksasa.  
**Aman:** Tunjukkan duplikasi & inkonsistensi.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Tanpa SQL wajib; konsep ER cukup untuk XII nanti.
