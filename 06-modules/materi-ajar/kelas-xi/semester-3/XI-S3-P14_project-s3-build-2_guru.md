# Materi Guru Lengkap — XI-S3-P14

**Handout siswa (bagikan):** [XI-S3-P14_project-s3-build-2_siswa.md](./XI-S3-P14_project-s3-build-2_siswa.md)

**Modul:** [XI-S3-P14_project-s3-build-2.md](../../../kelas-xi/semester-3/XI-S3-P14_project-s3-build-2.md)

**Materi pendukung sumber:** [XI-S3-P14_project-s3-build-2.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P14_project-s3-build-2.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P14 — Project S3 Build 2

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P14 |
| Unit | XI3.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S3-* |

## Learning Transformation

Dari fitur utama → **polish + edge case** + refactor kecil.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Review blocker P13 — prioritization 1-2-3 |
| 10–65 | Build | Selesaikan acceptance · validasi · empty state |
| 65–75 | Refactor | 1 smell diperbaiki (nama/render split) |
| 75–85 | Self-test | Jalankan checklist acceptance sendiri |
| 85–90 | Exit | % acceptance + rencana demo P15 |

---

## Debug Protocol

1. Reproduksi bug  
2. Hipotesis (console/log)  
3. Fix minimal  
4. Cek regresi 1 fitur lain  

---

## Formatif

**ITR**, **OBS**

---

## Catatan Guru

Siswa stuck >15 menit: minta jelaskan alur data dulu, baru hint syntax.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P14 Project S3 Build (2)


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P14 |
| Modul pertemuan | [XI-S3-P14_project-s3-build-2](../../../kelas-xi/semester-3/XI-S3-P14_project-s3-build-2.md) |
| Unit | XI3.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S3-* |
| Capability | ITR, OBS, TEC |
| Ada live code? | **Facilitator — polish + refactor kecil + prep demo P15** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari fitur utama → **polish + edge case** + refactor kecil + self-test acceptance.
- **Timeline:** review blocker P13 → build selesaikan acceptance → refactor 1 smell → self-test → exit % acceptance + rencana demo P15.
- **Debug protocol S3** (dari modul):
  1. Reproduksi bug
  2. Hipotesis (console/log/state)
  3. Fix minimal
  4. Cek regresi 1 fitur lain
- **Refactor kecil:** 1 code smell — nama fungsi, split render, hapus duplikat — **bukan** rewrite arsitektur.
- **Edge case wajib:** empty state, input invalid, duplikat — sesuai acceptance PRJ.
- **Self-test acceptance:** siswa centang checklist sendiri — guru spot-check 3–5 kelompok.
- **Prep P15:** rencana demo — masalah → IPO → live 2 fitur → belum selesai (modul P15).
- **Siswa stuck >15 menit:** minta jelaskan **alur data** dulu, baru hint syntax.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Blocker P13 — sudah selesai? | (siswa spesifik — state, render, event, acceptance) |
| Apa beda fitur inti vs polish/edge case? | Inti = flow wajib; polish = UX, validasi, empty state, refactor |
| Debug protocol — langkah setelah hipotesis? | Fix minimal → cek regresi 1 fitur lain |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator** | Build polish milik siswa — guru tidak menyelesaikan PRJ. |
| **Jangan takeover keyboard** | Saat refactor: coach oral; saat self-test: observer. |
| **Jangan bagikan solusi** | Tidak kirim "contoh app jadi" atau patch modul siap tempel. |
| **Clarifying questions** | "Edge case apa yang belum di acceptance?", "Smell mana yang paling mengganggu baca kode?" |
| Refactor kecil | Guru tegaskan: **1 smell** — bukan ganti arsitektur total |
| Demo prep | Guru bantu **struktur narasi P15**, bukan code dump |

### Script coaching polish + refactor

```text
"Ini fitur baru atau penutupan acceptance?" → jika baru besar: "Parkir — fokus DoD dulu."
"Empty state — user lihat apa jika array kosong?"
"Setelah fix — fitur lain masih jalan?" (regresi)
"Smell: nama/render split — refactor 1 hal saja hari ini."
"Demo P15 — 2 acceptance mana yang pasti live?"
```

### Larangan menit terakhir

| Jangan | Mengapa |
|--------|---------|
| Guru inject fitur biar demo cantik | Merusak bukti ITR & ownership siswa |
| Rewrite 3 file sebelum demo | Bukan refactor kecil — scope creep |
| Skip self-test acceptance | Wajib centang checklist sebelum exit |

---

## 4. Materi Inti

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Checklist DoD PRJ (1 halaman papan — generic, bukan solusi).
- Timer build 55 menit visible.
- Debug protocol di papan (4 langkah).
- **Tidak** sesi last-minute coding guru.

### Skrip facilitator

```text
[0–10] Review blocker P13 — prioritization 1-2-3
[10–65] BUILD — selesaikan acceptance + edge case
        Guru berkeliling, clarifying questions
        Stuck >15 menit: trace alur data dulu
[65–75] Refactor 1 smell — nama/render split
[75–85] Self-test acceptance — centang checklist
[85–90] Exit: % acceptance + rencana demo P15
```

### Modeling debug protocol (papan, bukan kode siswa)

```text
1. REPRO: "Klik tambah 2x cepat — gejala?"
2. HIPOTESIS: "State double push? Listener ganda?"
3. FIX MINIMAL: (siswa ketik — guru hanya tanya)
4. REGRESI: "Hapus item masih jalan?"
```

### Modeling kalimat demo prep (generic)

```text
✓ "Saya demo: pilih tanggal → tandai hadir → ringkasan — acceptance 2 & 4."
✓ "Belum selesai: filter per kelompok — rencana P16 setelah peer."
✗ "Nanti demo aja." (terlalu vague)
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Build 55 menit** — tutup gap acceptance + edge case.
2. **Refactor 1 smell** — dokumentasi 1 kalimat "mengapa".
3. **Self-test DoD** — centang checklist PRJ.
4. **Debug protocol** — minimal 1 bug via 4 langkah jika ada.
5. **Exit % acceptance** — jujur + rencana demo P15 (2 fitur live).
6. **Tidak** mengerjakan PRJ teman.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Tambah fitur besar menjelang P15 | Redirect ke DoD + acceptance gap |
| Refactor = rewrite semua file | Batasi 1 smell — modul eksplisit |
| Skip regresi setelah fix | Wajibkan langkah 4 debug protocol |
| Guru tempted fix handler untuk siswa | Tanya alur data — siswa ketik sendiri |
| Self-test palsu (centang semua) | Spot-check 3–5 — minta demo 30 detik |
| Takut belum sempurna untuk demo P15 | Normalisasi — demo + "belum selesai" = COM jujur |

---

## 9. Rujukan

- Modul pertemuan: [XI-S3-P14](../../../kelas-xi/semester-3/XI-S3-P14_project-s3-build-2.md)
- Build week 1: [P13 materi pendukung](./XI-S3-P13_project-s3-build-1.md)
- Demo next: [P15 materi pendukung](./XI-S3-P15_project-s3-demo-peer.md)
- Refactor modul: [XI-S3-P09](../../../kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Prioritization 1-2-3 tercatat per kelompok
- [ ] Build ≥55 menit — facilitator, bukan coder
- [ ] Refactor 1 smell — bukan rewrite total
- [ ] Self-test acceptance — checklist centang
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Exit: % acceptance + rencana demo P15
- [ ] Debug protocol dipakai saat pair debug

[← Indeks S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
