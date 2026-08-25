# Materi Guru Lengkap — X-S2-P14

**Handout siswa (bagikan):** [X-S2-P14_project-s2-build-2_siswa.md](./X-S2-P14_project-s2-build-2_siswa.md)

**Modul:** [X-S2-P14_project-s2-build-2.md](../../../kelas-x/semester-2/X-S2-P14_project-s2-build-2.md)

**Materi pendukung sumber:** [X-S2-P14_project-s2-build-2.md](../../../materi-pendukung/kelas-x/semester-2/X-S2-P14_project-s2-build-2.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P14 — Project S2 Build (2)

| Field | Isi |
|-------|-----|
| Kode | X-S2-P14 |
| Unit | X2.7 |
| Durasi | 2 JP = 90 menit |

## Timeline (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up — target freeze feature hari ini |
| 10–60 | Build polish: CSS, edge case validasi |
| 60–70 | Self-test acceptance criteria |
| 70–85 | Prepare 3 menit demo script (bukan slide panjang) |
| 85–90 | Siap peer review P15 |

---

## Demo Script Template

1. Masalah (20 detik)  
2. Demo fitur (90 detik)  
3. Mengapa solusi ini (40 detik)  
4. Kesulitan + perbaikan (30 detik)

---

## Formatif

**TEC**, **COM**


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P14 Project S2 Build (2)


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P14 |
| Modul pertemuan | [X-S2-P14_project-s2-build-2](../../../kelas-x/semester-2/X-S2-P14_project-s2-build-2.md) |
| Unit | X2.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S2-* |
| Capability | TEC, COM, ITR |
| Ada live code? | **Facilitator — freeze feature + prep demo/peer review** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Target hari ini:** **freeze feature** — polish CSS + edge case validasi + self-test acceptance + **demo script 3 menit** untuk P15.
- **Timeline:** stand-up (target freeze) → build polish → self-test DoD → demo script → siap peer review.
- **Demo script template** (dari modul):
  1. Masalah (20 detik)
  2. Demo fitur (90 detik)
  3. Mengapa solusi ini (40 detik)
  4. Kesulitan + perbaikan (30 detik)
- **Freeze feature:** tidak ada fitur besar baru hari ini — hanya perbaikan yang mendukung DoD & demo.
- **Self-test acceptance:** siswa centang checklist PRJ sendiri — guru spot-check 3–5 kelompok.
- **Polish ≠ ganti desain:** spacing, kontras, pesan error jelas — bukan redesign total.
- **Prep P15:** artefak harus bisa didemo peer 3 menit; worksheet peer kosong siap di kelas depan.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Blocker P13 — sudah selesai? | (siswa spesifik — layout, selector, validasi) |
| Apa beda core feature vs polish? | Core = fitur wajib jalan; polish = UX, edge case, tampilan |
| Acceptance criteria PRJ — sudah berapa centang? | Self-check jujur — guru tidak nilai angka hari ini |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator** | Build polish milik siswa — guru tidak menyelesaikan PRJ. |
| **Jangan takeover keyboard** | Saat self-test: observer; saat demo prep: coach oral, bukan editor. |
| **Jangan bagikan solusi** | Tidak kirim "contoh halaman jadi" atau patch CSS/JS siap tempel. |
| **Clarifying questions** | "Edge case apa yang belum di acceptance?", "Demo path happy path siap?" |
| Freeze feature | Guru tegaskan: **bukan** waktu fitur bonus besar — potong scope jika perlu |
| Demo script | Guru bantu **struktur narasi**, bukan slide/code dump |

### Script coaching freeze + demo prep

```text
"Fitur baru atau perbaikan DoD?" → jika baru: "Parkir ke backlog — freeze hari ini."
"Acceptance mana MUST vs NICE?" → prioritas centang wajib
"Demo 90 detik — path mana yang pasti jalan?" → happy path + 1 edge case
"Mengapa layout/validasi demikian?" → latihan reasoning untuk P15/P17
```

### Larangan menit terakhir

| Jangan | Mengapa |
|--------|---------|
| Guru inject fitur biar demo cantik | Merusak bukti ITR & ownership siswa |
| Copy CSS framework penuh | TEC — siswa harus paham yang dipakai |
| Slide 20 halaman screenshot | COM — demo live > baca slide |

---

## 4. Materi Inti

### Stand-up — target freeze (0–10 menit)

Setiap kelompok sebut **1 kalimat**: "Hari ini selesai jika …" — harus measurable vs acceptance.

Guru catat yang masih scope creep → ingatkan freeze.

### Build polish (10–60 menit)

Fokus umum S2:

| Area | Contoh polish |
|------|---------------|
| CSS | Spacing konsisten, kontras teks, responsive sederhana |
| Validasi | Pesan error di DOM (bukan hanya alert), field kosong/invalid |
| JS edge case | Array kosong, duplikat input, selector aman |
| Aksesibilitas ringan | Label form, alt gambar profil (PRJ-04) |

Guru keliling — **clarifying questions only**, timer mental 40/30/20 menit.

### Self-test acceptance (60–70 menit)

Siswa jalankan checklist DoD PRJ — tandai ✅/❌.
Guru float: "Tiga uji validasi PRJ-01 — sudah?" "Render list kosong PRJ-02 — pesan apa?"

### Demo script 3 menit (70–85 menit)

Outline di kertas — **bukan** slide panjang:

```text
1. Masalah + user (20 d)
2. Demo happy path (90 d)
3. Mengapa solusi ini — layout/validasi/struktur (40 d)
4. Satu kesulitan + perbaikan (30 d)
```

Guru model **kalimat reasoning** di papan (generic):

```text
✓ "Saya pakai flex column karena form panjang — user scroll natural di HP."
✗ "CSS-nya bagus." (terlalu vague)
```

### Siap peer review P15 (85–90 menit)

Checklist exit: artefak bisa dibuka peer, demo script ada, tidak ada secret URL/file guru.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Checklist DoD PRJ (1 halaman papan — generic, bukan solusi).
- Timer build 50 menit visible.
- **Tidak** sesi last-minute coding guru.
- Template demo script **kosong** — siswa isi sendiri.

### Skrip facilitator

```text
[0–10] Stand-up — announce FREEZE FEATURE
[10–60] BUILD polish — guru berkeliling, clarifying questions
         Red flag scope creep → "Acceptance minimal dulu"
[60–70] Self-test acceptance — siswa centang; guru spot-check
[70–85] Demo script 3 menit — coaching narasi + reasoning
         Modeling: contoh kalimat "mengapa" di papan, BUKAN kode
[85–90] Exit: siap peer review P15 — artefak + script
```

### Modeling reasoning (papan, bukan kode)

```text
"Mengapa validasi di JS bukan hanya HTML required?"
→ "Pesan custom + logika bisnis PRJ (mis. angka negatif)."

"Mengapa section nav di PRJ-04 pakai anchor?"
→ "User ekskul langsung loncat — tidak scroll manual panjang."
```

---

## 6. Latihan Membaca Kode

Latihan **self-test + peer prep** — snippet proyeksi, siswa identifikasi gap DoD:

```javascript
function validasiForm(nominal) {
  if (nominal > 0) {
    return true;
  }
}
// Panggilan: validasiForm("") — user tekan submit
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Acceptance "field kosong ditolak" terpenuhi? | Tidak — `""` tidak > 0 tapi tidak ada pesan ke user |
| Saran polish (bukan fix guru)? | Cek empty string eksplisit + tampilkan pesan di DOM |

```html
<!-- Peer review prep — clarity HTML -->
<input type="text" placeholder="Nama">
<button onclick="simpan()">Simpan</button>
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Masalah aksesibilitas/UX? | Tidak ada `<label>` — screen reader & form jelas kurang |
| Saran spesifik untuk P15? | "Tambah label for=id — acceptance user-friendly" |

---

## 7. Praktik Mandiri Siswa

1. **Freeze feature** — polish & edge case only.
2. **Self-test DoD** — centang checklist PRJ.
3. **Demo script 3 menit** — 4 bagian (masalah/demo/mengapa/kesulitan).
4. **Minimal 1 edge case** diuji dan dicatat.
5. **Artefak siap peer** — link/file lokal bisa dibuka teman.
6. **Tidak** mengerjakan PRJ teman — prep review only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Tambah fitur besar menjelang P15 | Ingatkan freeze — potong ke DoD minimal |
| Demo script = baca kode line-by-line | Coaching: masalah → demo → mengapa |
| Skip self-test acceptance | Wajibkan centang checklist sebelum exit |
| Guru tempted polish CSS untuk siswa | Tanya flex/grid — siswa ketik sendiri |
| Takut belum cantik untuk peer | Normalisasi — peer review tentang clarity, bukan beauty contest |

---

## 9. Rujukan

- Modul pertemuan: [X-S2-P14](../../../kelas-x/semester-2/X-S2-P14_project-s2-build-2.md)
- Build week 1: [P13 materi pendukung](./X-S2-P13_project-s2-build-1.md)
- Peer review next: [P15 materi pendukung](./X-S2-P15_peer-review.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Feature freeze diumumkan — tidak ada scope creep besar
- [ ] Self-test acceptance — siswa centang DoD
- [ ] Demo script 3 menit siap per kelompok
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Reasoning "mengapa" dilatih (prep P17)
- [ ] Artefak siap peer review P15

[← Indeks S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
