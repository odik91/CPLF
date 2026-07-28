# Handout Siswa — XI-S3-P04
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S3-P04_dom-update-aman.md](../../kelas-xi/semester-3/XI-S3-P04_dom-update-aman.md)
---
## 1. Tujuan pembelajaran
Dari “refresh innerHTML” → **render function** yang predictable.

---
## 2. Materi
_Ikuti penjelasan guru dan catatan di papan._

## 3. Yang sering salah dipikir (Cognitive Trap)
**Asumsi:** `innerHTML = cepat = benar`.  
**Aman:** Acknowledge cepat; tunjukkan listener hilang live.

---

## 5. Alur pertemuan (90 menit)
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

## 6. Lembar kerja / latihan
Catatan selama Experience · Clarify · Practice:

| Fase | Apa yang kulakukan | Apa yang kupelajari |
|------|-------------------|---------------------|
| Experience | | |
| Clarify | | |
| Practice | | |

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
