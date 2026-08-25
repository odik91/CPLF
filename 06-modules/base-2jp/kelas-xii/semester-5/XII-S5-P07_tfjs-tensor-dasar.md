# XII-S5-P07 — TF.js Tensor Dasar

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P07 |
| Unit | XII5.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T2 |

## Learning Transformation

Dari teori shape → **`tf.tensor`** di browser.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | CDN TF.js · console hello tensor |
| 5–15 | Concept | `tf.tensor2d` · `.shape` · `.print()` |
| 15–25 | Clarify | Memory browser · dispose (`.dispose()`) |
| 25–35 | Demo | Operasi: add, mul, matMul kecil |
| 35–60 | Practice | Halaman HTML: buat tensor dari array dataset 1 baris |
| 60–75 | Debug | Shape mismatch — baca error |
| 75–90 | Exit | Screenshot 3 tensor berbeda rank |

---

## Starter

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script>
  const t = tf.tensor2d([[1,2],[3,4]]);
  t.print();
</script>
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Live server wajib; offline: cache CDN sebelumnya.
