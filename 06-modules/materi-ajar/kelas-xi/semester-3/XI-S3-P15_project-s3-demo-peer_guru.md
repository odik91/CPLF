# Materi Guru Lengkap — XI-S3-P15

**Handout siswa (bagikan):** [XI-S3-P15_project-s3-demo-peer_siswa.md](./XI-S3-P15_project-s3-demo-peer_siswa.md)

**Modul:** [XI-S3-P15_project-s3-demo-peer.md](../../../kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md)

**Materi pendukung sumber:** [XI-S3-P15_project-s3-demo-peer.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P15 — Project S3 Demo & Peer Feedback

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P15 |
| Unit | XI3.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S3-* |

## Learning Transformation

Dari “jalan di laptopku” → **demo + reasoning** yang bisa diuji teman.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Format demo: masalah → IPO → live 2 fitur → belum selesai |
| 5–50 | Demo | 3–4 menit/siswa atau pasangan (rotasi) |
| 50–70 | Peer | Feedback 2 menit pakai sticky: +1 kuat · +1 tanya |
| 70–85 | Practice | Catat 1 revisi wajib untuk P16 |
| 85–90 | Exit | Commit revisi ke backlog |

---

## Demo Script (siswa)

1. Masalah & user  
2. Blueprint 30 detik  
3. Live demo acceptance 2 item  
4. Satu keputusan desain & alternatif  

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

Bukan kompetisi UI; apresiasi reasoning dan iterasi.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P15 Project S3 Demo & Peer Feedback


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P15 |
| Modul pertemuan | [XI-S3-P15_project-s3-demo-peer](../../../kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md) |
| Unit | XI3.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S3-* |
| Capability | COM, REA |
| Ada live code? | **Demo coaching + peer feedback protocol — bukan solusi guru** |

---

## 1. Pengetahuan yang Dikuasai Guru

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

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Rencana demo P14 — 2 fitur apa? | (siswa sebut acceptance spesifik) |
| IPO aplikasi kamu — 3 langkah? | Input → proses (state) → output (render) |
| Pemisahan file P10 — mengapa pisah state/render? | Maintainability, satu tanggung jawab per modul |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Presentation coaching** | Guru bantu struktur demo, timing, confidence — **bukan** polish kode menit terakhir. |
| **Jangan takeover demo** | Presenter yang klik/jalankan browser — guru timekeeper & moderasi. |
| **Jangan bagikan solusi** | Peer **tidak** patch kode teman — hanya sticky +1 kuat +1 tanya. |
| **Clarifying questions** | Model: "Mengapa state shape demikian?", "Alternatif desain apa?" |
| Peer feedback | Konstruktif — bukan roast UI; fokus reasoning & clarity |
| Copas antar PRJ | Red flag — minta jelaskan blueprint & keputusan sendiri |

### Protokol demo + peer (ringkas — guru ucapkan)

```text
1. Demo 3–4 menit — presenter jalankan, bukan guru
2. Format: masalah → blueprint 30 d → live 2 fitur → keputusan desain
3. Peer: sticky +1 kuat (spesifik) + +1 tanya (bernalar)
4. Presenter catat 1 revisi wajib untuk P16 — belum fix hari ini OK
5. Larangan: ejek, ranking, spoil PRJ kelas lain
```

### Larangan feedback toxic

| Jangan | Ganti dengan |
|--------|--------------|
| "Jelek" / "Norak" | "+1 kuat: ringkasan absensi jelas — saya paham status kelas" |
| Fix kode teman langsung | "+1 tanya: mengapa listener di render bukan main?" |
| "Kurang rapi" (vague) | "+1 tanya: empty state array kosong ditampilkan bagaimana?" |
| Ranking kelompok | Apresiasi proses — bukan juara |

### Script coaching demo (bukan solving)

```text
"Mulai dari masalah user — 20 detik."
"Blueprint: IPO + state shape — 30 detik, bukan baca kode."
"Live 2 acceptance — happy path dulu."
"Satu keputusan: mengapa modul X terpisah? Alternatif?"
"Jika error live — sebut gejala. Itu OBS, bukan malu."
```

---

## 4. Materi Inti

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Timer + urutan presenter.
- Sticky note warna (kuat vs tanya).
- **Tidak** sesi last-minute coding guru.
- Template demo 4 bagian di papan — kosong, siswa isi oral.

### Skrip facilitator

```text
[0–5] Format demo — reasoning > cantik; no ranking
[5–50] Demo rotasi 3–4 menit × N
       Guru: timekeeper, model 1 kalimat reasoning di papan
       Coaching whisper jika panik — bukan fix kode
[50–70] Peer sticky: +1 kuat + +1 tanya per demo
[70–85] Catat 1 revisi wajib untuk P16
[85–90] Exit: backlog revisi terkumpul
```

### Jika demo gagal live

1. Presenter sebut gejala (OBS) — console, state, render
2. Jelaskan langkah yang diharapkan — acceptance mana yang dicoba
3. Guru normalisasi — "Kejujuran & OBS = COM/ITR"
4. Peer tetap +1 kuat (effort/reasoning) + +1 tanya (desain)

### Modeling peer sticky (papan)

```text
Demo: PRJ Absensi — presenter X

+1 KUAT: "Alur tanggal → tandai → ringkas mudah diikuti — IPO jelas."
+1 TANYA: "Mengapa status disimpan string bukan enum/objek terstruktur?"

(BUKAN: "Ganti jadi begini: ...")
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Demo 3–4 menit** — format 4 bagian, browser live.
2. **Terima peer sticky** — +1 kuat + +1 tanya dari ≥2 teman (jika waktu).
3. **Berikan peer feedback** — spesifik, bukan vague.
4. **Catat 1 revisi wajib** — untuk P16 code review.
5. **Tidak** fix kode teman — owner yang revisi nanti.
6. **Tidak** ranking atau ejek desain.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Demo = baca kode line-by-line | Coaching: IPO + live fitur |
| Peer feedback vague ("bagus") | Model sticky spesifik di papan |
| Teman patch JS langsung | "Owner revisi P16 — kamu hanya tanya" |
| Guru skip format demo | **Wajib** 5 menit opening struktur |
| Panik error live | Normalisasi OBS — lanjut reasoning |
| Menit terakhir minta guru fix | Tolak — demo apa adanya |
| Lupa catat revisi wajib | Wajibkan backlog sebelum exit |

---

## 9. Rujukan

- Modul pertemuan: [XI-S3-P15](../../../kelas-xi/semester-3/XI-S3-P15_project-s3-demo-peer.md)
- Build prep: [P14 materi pendukung](./XI-S3-P14_project-s3-build-2.md)
- Code review next: [P16 materi pendukung](./XI-S3-P16_code-review-kualitas.md)
- Rubrik peer (preview P16): [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Format demo dijelaskan — reasoning > cantik
- [ ] Semua presenter dapat slot (atau rencana lanjut)
- [ ] Peer sticky +1 kuat + +1 tanya — spesifik
- [ ] 1 revisi wajib per kelompok tercatat untuk P16
- [ ] **Tidak** takeover demo / fix kode
- [ ] **Tidak** ranking juara
- [ ] Tidak ada feedback toxic
- [ ] Backlog revisi terkumpul

[← Indeks S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
