# XI-S3-P07 — Struktur Data Nested

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P07 |
| Unit | XI3.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) (spiral) |

## Learning Transformation

Dari variabel global bercecer → **skema data** array of object.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall X-S2-P10 object — tambah 1 level nested |
| 5–18 | Experience | EXP_07 varian: katalog buku — field apa saja? |
| 18–28 | Trap | Satu variabel `data` string JSON tanpa struktur |
| 28–38 | Clarify | Nama field konsisten · id unik |
| 38–48 | Concept | `{ id, title, status }[]` · akses `arr[i].field` |
| 48–70 | Practice | Definisikan skema 5 record + render tabel |
| 70–85 | Reflect | Kapan array vs object root? |
| 85–90 | Exit | Skema JSON 1 halaman |

---

## Cognitive Trap

**Asumsi:** “Nanti dirapikan” — global `window.x` everywhere.  
**Aman:** Satu objek `state` atau module export.

---

## Formatif

**REA**, **TEC**

---

## Catatan Guru

Rotasi varian EXP_07 A/B/C antar kelas paralel.
