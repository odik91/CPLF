# XI-S3-P04 — DOM Update Aman

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P04 |
| Unit | XI3.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T1 |

## Learning Transformation

Dari “refresh innerHTML” → **render function** yang predictable.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo: klik 5× innerHTML vs render() — bandingkan event listener |
| 5–15 | Experience | **Papan score basket**: update skor tanpa ganti papan fisik |
| 15–25 | Trap | Re-render total = listener hilang |
| 25–35 | Clarify | Satu fungsi `render(state)` dipanggil setiap perubahan |
| 35–45 | Concept | State → render → DOM; event → update state → render |
| 45–70 | Practice | Counter + list todo (tambah/hapus) dengan pola render |
| 70–85 | Reflect | Kapan innerHTML masih OK? (static template sekali) |
| 85–90 | Exit | 1 bug yang kamu perbaiki |

---

## Cognitive Trap

**Asumsi:** `innerHTML = cepat = benar`.  
**Aman:** Acknowledge cepat; tunjukkan listener hilang live.

---

## Formatif

**TEC**, **ITR**

---

## Catatan Guru

Ini pola inti untuk semua project S3.
