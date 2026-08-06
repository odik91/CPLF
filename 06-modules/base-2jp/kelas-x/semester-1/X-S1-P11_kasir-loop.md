# X-S1-P11 — Kasir & Loop

| Field | Isi |
|-------|-----|
| Kode | X-S1-P11 |
| Unit | X1.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T3, CX-T2 |
| MM | MM-14 |
| EXP | [EXP_06 Kasir](../../07-experience_library/EXP_06_Kasir_Minimarket.md) |

## Learning Transformation

Dari “ulang manual” → **loop** otomatisasi repetisi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Hitung manual 8 item di papan — kelas bosan |
| 5–20 | Experience | Beep scanner vs hitung satu-satu |
| 20–30 | Trap | “Teliti saja” vs otomatisasi |
| 30–40 | Clarify | Operasi apa yang diulang identik? |
| 40–50 | Concept | for · while · array dasar |
| 50–75 | Practice | JS: array harga → loop total |
| 75–85 | Reflect | Di mana loop di kehidupan (sholat/jamaah metafora ringan)? |
| 85–90 | Exit | 1 baris loop + total |

---

## Starter

```javascript
const harga = [5000, 3000, 12000, 2000];
let total = 0;
for (let i = 0; i < harga.length; i++) {
  total = total + harga[i];
}
console.log("Total:", total);
```

---

## Formatif

**TEC**, **OBS**
