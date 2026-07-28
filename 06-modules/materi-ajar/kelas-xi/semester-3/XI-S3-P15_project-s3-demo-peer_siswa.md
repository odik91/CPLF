# Handout Siswa — XI-S3-P15

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P15_project-s3-demo-peer.md](../../../kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md)

---

## 1. Tujuan pembelajaran

Dari “jalan di laptopku” → **demo + reasoning** yang bisa diuji teman.

---

## 2. Ringkasan konsep

- **Transformasi hari ini:** dari "jalan di laptopku" → **demo + reasoning** yang bisa diuji teman.
- **Format demo siswa** (dari modul):
  1. Masalah & user
  2. Blueprint 30 detik (IPO + state)
  3. Live demo acceptance 2 item
  4. Satu keputusan desain & alternatif
- **Timeline:** opening format → demo rotasi → peer sticky (+1 kuat · +1 tanya) → catat 1 revisi wajib P16 → exit backlog.
- **Bukan kompetisi UI** — apresiasi reasoning dan iterasi (modul catatan guru).
- **Peer feedback ringan hari ini:** sticky note — **bukan** worksheet rubrik penuh (itu P16).
- **1 revisi wajib** dicatat untuk P16 — commit ke backlog, belum harus selesai hari ini.
- **Rotasi demo:** 3–4 menit/siswa atau pasangan — adjust jumlah vs 90 menit.
- **Perbedaan S2 P15 vs S3 P15:** S2 = peer review worksheet lengkap; S3 = **demo dulu** + feedback ringan → code review formal di P16.

---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Format demo: masalah → IPO → live 2 fitur → belum selesai |
| 5–50 | Demo | 3–4 menit/siswa atau pasangan (rotasi) |
| 50–70 | Peer | Feedback 2 menit pakai sticky: +1 kuat · +1 tanya |
| 70–85 | Practice | Catat 1 revisi wajib untuk P16 |
| 85–90 | Exit | Commit revisi ke backlog |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Commit revisi ke backlog
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
