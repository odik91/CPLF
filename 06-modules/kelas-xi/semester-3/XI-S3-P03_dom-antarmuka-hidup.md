# XI-S3-P03 — DOM sebagai Antarmuka Hidup

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P03 |
| Unit | XI3.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T1 |
| MM | MM-12 |

## Learning Transformation

Dari manipulasi acak DOM → **UI terkendali** sesuai blueprint.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall X-S2-P05: querySelector — demo bug selector |
| 5–15 | Experience | **Papan tulis vs proyektor**: satu sumber kebenaran tampilan |
| 15–25 | Trap | `innerHTML` sembarangan = XSS & state hilang |
| 25–35 | Clarify | Pisah: struktur HTML vs update terkontrol |
| 35–45 | Concept | `textContent` · `createElement` · template string aman |
| 45–70 | Practice | Render list 3 item dari array ke `<ul>` tanpa innerHTML loop |
| 70–85 | Debug | 1 bug: selector null — console |
| 85–90 | Exit | Screenshot before/after |

---

## Starter

```javascript
const items = ["Shalat", "Tahfidz", "OSIS"];
const ul = document.querySelector("#list");
items.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Spiral X cukup 2 menit; fokus kualitas update, bukan intro DOM dari nol.
