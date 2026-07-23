# XI-S3-P08 — State Aplikasi di Memori

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P08 |
| Unit | XI3.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |

## Learning Transformation

Dari CRUD acak → **single source of truth** di memori.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Bug demo: 2 array terpisah — list tidak sync |
| 5–15 | Experience | **Absensi kelas**: daftar hadir vs counter — satu sumber? |
| 15–25 | Trap | Duplikasi state di DOM dan variabel |
| 25–35 | Clarify | Update state dulu, render belakangan |
| 35–45 | Concept | `state = { items, filter }` · pure update functions |
| 45–70 | Practice | CRUD mini: tambah / edit / hapus / filter |
| 70–85 | Debug | Latih trace: event → updateState → render |
| 85–90 | Exit | Diagram 3 panah alur data |

---

## Starter Pattern

```javascript
let state = { students: [] };
function addStudent(name) {
  state.students.push({ id: Date.now(), name, present: false });
  render();
}
```

---

## Formatif

**REA**, **ITR**

---

## Catatan Guru

Jembatan ke persistensi di S4 P07 — sebut “refresh = hilang” sebagai hook.
