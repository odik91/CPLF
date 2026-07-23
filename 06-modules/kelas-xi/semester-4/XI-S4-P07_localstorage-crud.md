# XI-S4-P07 — localStorage CRUD

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P07 |
| Unit | XI4.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T4 |

## Learning Transformation

Dari refresh = hilang → **persistensi lokal** terkendali.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo refresh — state S3 hilang — frustrasi? |
| 5–15 | Experience | **Buku catatan vs ingatan** — mana lebih amanah? |
| 15–25 | Trap | Simpan string JSON tanpa try/catch parse |
| 25–35 | Clarify | Serialize · key namespace · migrasi schema |
| 35–45 | Concept | `localStorage.setItem` · `JSON.stringify/parse` |
| 45–70 | Practice | CRUD app S3 + load on init + save on change |
| 70–85 | Test | Refresh browser — data tetap |
| 85–90 | Exit | Key name + struktur JSON |

---

## Pattern

```javascript
const KEY = "ma-app-v1";
function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? defaultState;
  } catch {
    return defaultState;
  }
}
```

---

## Formatif

**TEC**, **ITR**

---

## Catatan Guru

Ingatkan data teman = amanah; jangan simpan PII sensitif sembarangan.
