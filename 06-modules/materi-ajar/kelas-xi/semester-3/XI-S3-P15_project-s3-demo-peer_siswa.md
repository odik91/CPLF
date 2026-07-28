# Handout Siswa — XI-S3-P15
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S3-P15_project-s3-demo-peer.md](../../kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md)
---
## 1. Tujuan pembelajaran
Dari “jalan di laptopku” → **demo + reasoning** yang bisa diuji teman.

---
## 2. Materi
### Opening — format demo (0–5 menit)

Tulis di papan struktur 4 bagian + timing.
Ingatkan: **reasoning > UI cantik** — bukan kompetisi desain.

### Demo rotasi (5–50 menit)

- 3–4 menit per presenter — guru timekeeper (isyarat 1 menit tersisa).
- Checklist presenter (coaching sebelum demo):

| Cek | Detail |
|-----|--------|
| Masalah & user | Siapa pakai, masalah apa |
| Blueprint 30 d | IPO + state — bukan walkthrough kode |
| Live 2 fitur | Acceptance spesifik — browser live |
| Keputusan desain | 1 pilihan + 1 alternatif yang dipertimbangkan |
| Jujur | 1 item belum selesai (opsional tapi diapresiasi) |

Guru model **1 kalimat reasoning** di papan (generic):

```text
✓ "State array of objects karena perlu id untuk edit/hapus — alternatif: Map."
✗ "Strukturnya bagus." (terlalu vague)
```

### Peer feedback sticky (50–70 menit)

Setelah setiap demo (atau batch 3 demo lalu peer):

- **+1 kuat:** spesifik — UX, clarity IPO, iterasi terlihat
- **+1 tanya:** bernalar — "Mengapa …?" bukan menyerang

Peer **tidak** menulis patch kode — hanya observasi & pertanyaan.

### Catat 1 revisi wajib P16 (70–85 menit)

Presenter pilih **1 feedback** untuk diterapkan di P16:

```text
Revisi wajib: [dari sticky peer / self]
Alasan: [mengapa ini prioritas]
Bukti rencana: [acceptance / modul terdampak]
```

### Exit — backlog revisi (85–90 menit)

Commit ke backlog (sticky, issue list, catatan) — implementasi = P16.

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Format demo: masalah → IPO → live 2 fitur → belum selesai |
| 5–50 | Demo | 3–4 menit/siswa atau pasangan (rotasi) |
| 50–70 | Peer | Feedback 2 menit pakai sticky: +1 kuat · +1 tanya |
| 70–85 | Practice | Catat 1 revisi wajib untuk P16 |
| 85–90 | Exit | Commit revisi ke backlog |

---

## 6. Lembar kerja / latihan
Latihan **peer via membaca** — 5 menit sebelum demo pertama (opsional):

Proyeksi snippet, siswa latih +1 kuat + +1 tanya **tanpa fix**:

```javascript
// state.js
export const state = { items: [], filter: "all" };

// handlers.js — tidak validasi duplikat
export function handleAdd(nama) {
  state.items.push({ id: Date.now(), nama });
  render(state);
}
```

| Pertanyaan (sebagai peer) | Kunci diskusi |
|---------------------------|---------------|
| +1 kuat spesifik? | Mis. id timestamp sederhana — cukup untuk prototype |
| +1 tanya bernalar? | "Mengapa filter di state global — alternatif param render?" |
| Bukan feedback toxic? | Hindari "kode jelek" — fokus keputusan desain |

```javascript
// render — innerHTML full replace
export function render({ items }) {
  app.innerHTML = items.length
    ? items.map(i => `<li>${i.nama}</li>`).join("")
    : ""; // empty?
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| +1 tanya edge case? | "Empty state — user lihat apa selain blank?" |
| +1 kuat? | Template literal list — readable |

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
