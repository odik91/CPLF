# X-S2-P05 — JavaScript & DOM (Klik)

| Field | Isi |
|-------|-----|
| Kode | X-S2-P05 |
| Unit | X2.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T2, CX-T3 |

## Learning Transformation

Dari “halaman mati” → **perilaku** lewat DOM + event.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Halaman P04 — klik tombol tidak ada — frustrasi? |
| 5–15 | Experience | Remote TV tanpa baterai (metafora input tidak memicu proses) |
| 15–25 | Trap | HTML statis tidak “merespons” |
| 25–35 | Clarify | JS menghubungkan aksi user ↔ perubahan halaman |
| 35–45 | Concept | `<script>` · `querySelector` · `addEventListener('click')` |
| 45–70 | Practice | Tombol ubah teks / warna background |
| 70–85 | Debug | 1 bug selector salah — latih console |
| 85–90 | Exit | Screenshot interaksi |

---

## Starter

```html
<button id="btn">Klik</button>
<p id="out">...</p>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("out").textContent = "Halo MA!";
  });
</script>
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Pastikan file HTML+JS satu folder; live server VS Code.
