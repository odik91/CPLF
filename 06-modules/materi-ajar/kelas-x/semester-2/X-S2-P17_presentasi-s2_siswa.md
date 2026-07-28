# Handout Siswa — X-S2-P17
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S2-P17_presentasi-s2.md](../../kelas-x/semester-2/X-S2-P17_presentasi-s2.md)
---
## 1. Tujuan pembelajaran
_Lihat transformasi di modul pertemuan._

## 2. Materi
### Rubrik presentasi (0–5 menit)

Jelaskan ke siswa — **bukan** angka:

- Dinilai: clarity masalah, demo DoD, **reasoning** desain, iterasi, respons Q&A
- Rubrik lengkap: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) — guru saja

### Presentasi bergiliran (5–60 menit)

**Checklist presenter** (coaching sebelum/antar demo):

- [ ] Bisa jawab masalah + user tanpa baca slide penuh
- [ ] Demo **happy path** live + 1 edge case jika sempat
- [ ] Siap tunjuk bukti revisi peer (ITR) — before/after singkat
- [ ] Backup: screenshot jika live demo gagal — jelaskan gejala
- [ ] Siap jawab pool pertanyaan guru (layout, validasi, AI)

### Q&A bernalar (60–75 menit)

Guru & peer — contoh pertanyaan **web S2**:

| PRJ | Pertanyaan bernalar |
|-----|---------------------|
| PRJ-01 | "Mengapa pesan error di DOM bukan alert?" |
| PRJ-02 | "Bagaimana list kosong ditampilkan ke user?" |
| PRJ-03 | "Data absensi disimpan di mana — apa risikonya?" |
| PRJ-04 | "Mengapa struktur section/nav demikian untuk audience ekskul?" |

**Universal:**

- "Validasi apa yang melindungi user dari input salah?"
- "Jika layar HP sempit, apa yang bisa gagal?"
- "Bagian mana AI bantu — selector/CSS mana yang kamu jelaskan sendiri?"

### Skor draft + catatan (75–85 menit)

Guru isi rubrik 6 aspek — narasi untuk laporan, bukan diumumkan ranking.

### Preview P18 (85–90 menit)

Ingatkan: kumpulkan link/screenshot S1+S2 + refleksi — portofolio tahun X.

---
## 5. Alur pertemuan (90 menit)
| Menit | Aktivitas |
|-------|-----------|
| 0–5 | Rubrik presentasi: reasoning > demo cantik |
| 5–60 | Presentasi 3–4 menit/siswa/kelompok (adjust jumlah) |
| 60–75 | Q&A bernalar — guru minta “mengapa?” bukan “wow” |
| 75–85 | Skor draft 6 aspek + catatan |
| 85–90 | Preview P18 portofolio |

---

## 6. Lembar kerja / latihan
Presentasi **bukan** walkthrough kode baris-per-baris. Gunakan snippet untuk **latihan Q&A reasoning** (opsional 5 menit sebelum demo pertama):

```html
<section id="hasil">
  <p id="nominal-out"></p>
</section>
```

```javascript
document.getElementById("btn").addEventListener("click", () => {
  const v = document.getElementById("input").value;
  document.getElementById("nominal-out").textContent = v * 0.025;
});
```

| Pertanyaan coaching (Q&A) | Kunci |
|---------------------------|-------|
| Validasi apa yang missing? | Empty, non-number, negatif |
| Mengapa output di `<section>` terpisah? | Semantik + layout — hasil jelas |
| Tanya peer bernalar? | "Mengapa listener di click bukan submit form?" |

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
