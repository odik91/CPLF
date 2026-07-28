# Handout Siswa — XI-S3-P14
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S3-P14_project-s3-build-2.md](../../kelas-xi/semester-3/XI-S3-P14_project-s3-build-2.md)
---
## 1. Tujuan pembelajaran
Dari fitur utama → **polish + edge case** + refactor kecil.

---
## 2. Materi
### Opening — prioritization 1-2-3 (0–10 menit)

Review blocker P13 — setiap kelompok sebut **3 prioritas** hari ini (numbered).
Guru catat blocker berulang → clarifying question singkat.

### Build block (10–65 menit)

Fokus umum S3:

| Area | Contoh polish / edge case |
|------|---------------------------|
| State | Guard input kosong, duplikat, immutable update |
| Render | Empty state message, loading placeholder |
| Handlers | Validasi sebelum updateState, prevent double submit |
| Modul | Nama fungsi jelas, hapus dead code |

Guru keliling — **clarifying questions only**, timer mental 30/25/20 menit.
Stuck >15 menit: **trace alur data** dulu — "input → state → render — di mana putus?"

### Refactor 1 smell (65–75 menit)

Contoh smell yang **on-scope**:

| Smell | Refactor kecil |
|-------|----------------|
| Nama `doStuff()` | Rename ke `handleSubmitPinjam()` |
| Render + logic campur | Pindah DOM string ke render.js |
| Duplikat push + render | Ekstrak `addItem()` di state.js |
| Listener di render | Pindah bind ke main.js / delegation |

**Off-scope:** ganti ke framework, tambah backend, split 10 file baru.

### Self-test acceptance (75–85 menit)

Siswa jalankan checklist DoD PRJ — tandai ✅/❌.
Guru float: "Validasi input kosong PRJ-02 — sudah?" "Ringkasan absensi PRJ-01 — edge case?"

### Exit — rencana demo P15 (85–90 menit)

- % acceptance jujur
- 2 fitur untuk demo live P15
- 1 item "belum selesai" (kejujuran COM)

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Review blocker P13 — prioritization 1-2-3 |
| 10–65 | Build | Selesaikan acceptance · validasi · empty state |
| 65–75 | Refactor | 1 smell diperbaiki (nama/render split) |
| 75–85 | Self-test | Jalankan checklist acceptance sendiri |
| 85–90 | Exit | % acceptance + rencana demo P15 |

---

## 6. Lembar kerja / latihan
Latihan **self-test + edge case** — snippet proyeksi, siswa identifikasi gap DoD:

```javascript
function updateStatus(id, status) {
  const item = state.siswa.find(s => s.id === id);
  item.status = status;
  renderDaftar(state.siswa);
}
// Uji: id tidak ada — user klik item terhapus
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Edge case "id invalid"? | `item` undefined → crash |
| Saran polish (bukan fix guru)? | Guard `if (!item) return` + pesan ke user |

```javascript
// Smell: render campur logic
function render() {
  let html = "";
  for (const q of state.soal) {
    html += `<div>${q.teks}</div>`;
    if (q.jawabanBenar === state.jawabanUser[q.id]) skor++; // logic di render
  }
  document.getElementById("app").innerHTML = html;
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Smell layer? | Business logic (skor) di render — P10 violation |
| Refactor kecil? | Hitung skor di state/handlers, render hanya tampilkan |

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
