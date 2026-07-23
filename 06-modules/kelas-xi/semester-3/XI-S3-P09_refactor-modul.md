# XI-S3-P09 — Refactor & Modul Fungsi

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P09 |
| Unit | XI3.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T3 |
| MM | MM-14 |

## Learning Transformation

Dari fungsi 200 baris → **modul** dengan nama tanggung jawab jelas.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan “spaghetti code” (anonim) — cari 3 smell |
| 5–15 | Experience | **Dapur kantin**: stasiun potong/masak/sajikan |
| 15–25 | Trap | Copy-paste fungsi hampir sama × 4 |
| 25–35 | Clarify | DRY vs over-abstraction — kapan extract? |
| 35–45 | Concept | `function validateX()` · `function renderList()` · file terpisah (ES module) |
| 45–70 | Practice | Refactor kode P08: pisah validate / update / render |
| 70–85 | Before/after | Screenshot atau diff singkat |
| 85–90 | Exit | 1 fungsi yang kamu rename & why |

---

## Cognitive Trap

**Asumsi:** Refactor = buang waktu; yang penting jalan.  
**Aman:** Tunjukkan bug dari duplikasi copy-paste.

---

## Formatif

**ITR**, **TEC**

---

## Catatan Guru

Intro `export/import` jika browser support; fallback script order + namespace object.
