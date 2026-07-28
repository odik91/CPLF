# Handout Siswa — X-S2-P16
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S2-P16_revisi-project.md](../../kelas-x/semester-2/X-S2-P16_revisi-project.md)
---
## 1. Tujuan pembelajaran
_Lihat transformasi di modul pertemuan._

## 2. Materi
### Gallery walk (0–10 menit)

- Siswa rotation cepat — 3 station project teman.
- Catat **1 ide UX** di sticky note: "Yang bisa saya adaptasi (bukan copy): …"
- Guru ingatkan: inspirasi ≠ duplicate code.

### Revisi fokus (10–70 menit)

Prioritas revisi (urutan):

1. **Saran peer P15** yang belum diterapkan
2. **Gap DoD** dari self-test
3. **1 ide UX** dari gallery — jika align spec

Jenis revisi yang **on-scope**:

| Jenis | Contoh |
|-------|--------|
| Validasi | Pesan error jelas, edge case kosong/invalid |
| UX | Spacing, kontras, label form, feedback submit |
| Robustness | Guard null selector, duplikat input |
| Narasi | Teks "mengapa hasil" di PRJ-01 |

Jenis revisi **off-scope** (potong):

- Fitur login, database, animasi berat
- Ganti PRJ/tema total

Guru keliling — clarifying questions, timer 40/20 menit.

### Before/after (70–80 menit)

Wajib 1 set bukti:

```text
SEBELUM: [screenshot / commit hash / tanggal]
SESUDAH: [screenshot / commit hash / tanggal]
PARAGRAF: "Saran peer: … / Ide gallery: … / Revisi: … / Mengapa: …"
```

### Final check DoD (80–90 menit)

Centang checklist PRJ — guru spot-check 3–5 kelompok.
Siap P17: demo path + reasoning + bukti iterasi.

---
## 5. Alur pertemuan (90 menit)
| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Gallery walk: lihat 3 project teman — catat 1 ide UX |
| 10–70 | Revisi fokus dari peer + self |
| 70–80 | Before/after screenshot atau commit message |
| 80–90 | Final check DoD |

---

## 6. Lembar kerja / latihan
Latihan **audit revisi** — bandingkan before/after snippet (proyeksi):

```javascript
// BEFORE — peer saran: validasi lemah
function hitung() {
  const n = document.getElementById("nominal").value;
  const hasil = n * 0.025;
  document.getElementById("out").textContent = hasil;
}

// AFTER — siswa revisi (tampilkan setelah diskusi)
function hitung() {
  const el = document.getElementById("nominal");
  const n = Number(el.value);
  const out = document.getElementById("out");
  const err = document.getElementById("err");
  if (el.value.trim() === "" || Number.isNaN(n) || n < 0) {
    err.textContent = "Nominal harus angka ≥ 0";
    out.textContent = "";
    return;
  }
  err.textContent = "";
  out.textContent = n * 0.025;
}
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Apa yang diperbaiki vs before? | Empty, NaN, negatif — pesan di DOM |
| Ini fitur baru atau revisi? | Revisi — validasi sudah di requirement |
| Kalimat "mengapa" untuk paragraf iterasi? | DoD + peer saran + UX persisten |

```css
/* Gallery walk — bandingkan spacing */
.kartu { margin: 4px; }
/* vs */
.kartu { margin: 1rem 0; padding: 1rem; }
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Ide UX dari gallery — adaptasi aman? | Spacing/konsistensi — bukan copy palette penuh tanpa reasoning |

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
