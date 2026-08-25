# XI-S4-P04 — Fetch & JSON

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P04 |
| Unit | XI4.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2 |

## Learning Transformation

Dari kontrak di kertas → **konsumsi API** live di app.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Cek koneksi · fallback mock JSON file |
| 5–15 | Concept | `fetch(url)` · `response.json()` · async handler |
| 15–25 | Clarify | CORS · jangan expose secret key di frontend |
| 25–45 | Demo | Guru live fetch 1 endpoint |
| 45–70 | Practice | Tampilkan 5 item API ke DOM (loading/error) |
| 70–85 | Debug | 404 / typo field — latih console |
| 85–90 | Exit | URL + screenshot |

---

## Starter

```javascript
async function loadNews() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error(res.status);
  return res.json();
}
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Siapkan `data/mock.json` offline jika internet gagal.
