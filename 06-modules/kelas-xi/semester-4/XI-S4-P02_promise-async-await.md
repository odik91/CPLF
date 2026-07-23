# XI-S4-P02 — Promise & async/await

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P02 |
| Unit | XI4.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2 |

## Learning Transformation

Dari callback hell → **async/await** terbaca.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall P01 — antrian vs janji (Promise) |
| 5–15 | Experience | **Reservasi kursi mushola** — konfirmasi atau tolak |
| 15–25 | Trap | `.then` chain tanpa `.catch` |
| 25–35 | Clarify | Error path wajib dirancang |
| 35–45 | Concept | Promise · `async function` · `await` · try/catch |
| 45–70 | Practice | Mock `fetchData()` delay 2s + spinner + error message |
| 70–85 | Debug | Network fail simulasi |
| 85–90 | Exit | Screenshot 3 state: loading / ok / error |

---

## Starter

```javascript
async function load() {
  const el = document.querySelector("#status");
  el.textContent = "Memuat...";
  try {
    const data = await mockFetch();
    el.textContent = data.message;
  } catch (e) {
    el.textContent = "Gagal: " + e.message;
  }
}
```

---

## Formatif

**TEC**, **REA**

---

## Catatan Guru

Mock dulu; live API di P04.
