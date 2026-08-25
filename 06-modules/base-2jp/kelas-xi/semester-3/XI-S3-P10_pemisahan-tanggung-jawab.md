# XI-S3-P10 — Pemisahan Tanggung Jawab

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P10 |
| Unit | XI3.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T3 |

## Learning Transformation

Dari satu file campur aduk → **lapis** UI / logic / data.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Struktur folder contoh: `state.js` · `ui.js` · `main.js` |
| 5–15 | Experience | **OSIS vs guru vs siswa** — peran berbeda, satu acara |
| 15–25 | Trap | HTML string + business rule + fetch dalam 1 fungsi |
| 25–35 | Clarify | Separation of concerns — bukan over-engineering |
| 35–45 | Concept | Layer: data · domain · presentation |
| 45–70 | Practice | Pecah project latihan P08 ke ≥3 file |
| 70–85 | Peer | Review: “file mana yang paling sulit dipahami?” |
| 85–90 | Exit | Struktur folder final |

---

## Target Struktur

```text
/src
  state.js      # data & update
  render.js     # DOM only
  handlers.js   # events
  main.js       # init
```

---

## Formatif

**COM**, **ITR**

---

## Catatan Guru

Standar minimum sebelum project S3 kickoff.
