# Materi Guru Lengkap — XI-S3-P16

**Handout siswa (bagikan):** [XI-S3-P16_code-review-kualitas_siswa.md](./XI-S3-P16_code-review-kualitas_siswa.md)

**Modul:** [XI-S3-P16_code-review-kualitas.md](../../../kelas-xi/semester-3/XI-S3-P16_code-review-kualitas.md)

**Materi pendukung sumber:** [XI-S3-P16_code-review-kualitas.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P16_code-review-kualitas.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P16 — Code Review Kualitas

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P16 |
| Unit | XI3.8 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-C1 |

## Learning Transformation

Dari “yang penting jalan” → **kualitas** terbaca & maintainable.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Trap: “code jalan = A” — counter example |
| 5–15 | Experience | Baca 2 snippet — mana yang kamu mau maintain? |
| 15–25 | Concept | Rubrik review: nama · struktur · edge case · bukan gaya pribadi |
| 25–35 | Clarify | Sandikan feedback (situasi–perilaku–dampak) |
| 35–60 | Practice | Review project teman pakai [Rubrik Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 60–75 | Build | Implement 1 feedback wajib |
| 75–90 | Reflect | Apa yang kamu ubah & why |

---

## Cognitive Trap

**Asumsi:** Review = cari salah · menghina.  
**Aman:** Model 1 komentar konstruktif guru di depan kelas.

---

## Formatif

**COM**, **ITR**

---

## Catatan Guru

Nilai MA: santun · amanah · tidak menjatuhkan.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P16 Code Review Kualitas


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P16 |
| Modul pertemuan | [XI-S3-P16_code-review-kualitas](../../../kelas-xi/semester-3/XI-S3-P16_code-review-kualitas.md) |
| Unit | XI3.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S3-* |
| Rubrik | [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| Capability | COM, ITR (CXI-C1) |
| Ada live code? | **Peer review protocol + baca kode — bukan solusi guru** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari "yang penting jalan" → **kualitas** terbaca & maintainable.
- **Cognitive trap (modul):** asumsi review = cari salah / menghina → counter dengan model 1 komentar konstruktif guru.
- **Timeline:** trap opening → baca 2 snippet → rubrik review → SPD feedback → practice review teman → implement 1 feedback → reflect.
- **Rubrik peer:** [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) — 2 pujian spesifik + 2 saran dapat ditindak + pertanyaan klarifikasi opsional.
- **SPD feedback:** **S**ituasi–**P**erilaku–**D**ampak — bukan gaya pribadi ("kodenya jelek").
- **Review fokus:** nama · struktur modul · edge case · readability — **bukan** preferensi warna/font.
- **Implement 1 feedback wajib** — bukti before/after (commit/screenshot).
- **Revisi dari P15:** 1 item backlog wajib masuk implementasi hari ini.
- **Guru wajib modelkan** 1 peer review sehat sebelum siswa review project teman.
- **Nilai MA:** santun · amanah · tidak menjatuhkan.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Demo P15 — 1 revisi wajib apa? | (siswa spesifik dari sticky/backlog) |
| Pemisahan tanggung jawab — layer apa saja? | Data/state · domain/handlers · presentation/render |
| Apa beda "kode jalan" vs "kode maintainable"? | Jalan = fungsi OK; maintainable = orang lain bisa baca, ubah, uji edge case |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator + modeler** | Guru model 1 review sehat — lalu float, tidak fix PRJ. |
| **Jangan takeover keyboard** | Reviewer **tidak** edit file teman; owner implement sendiri. |
| **Jangan bagikan solusi** | Peer **tidak** patch modul teman — hanya saran rubrik + SPD. |
| **Clarifying questions** | Model: "Fungsi apa tanggung jawabnya?", "Edge case X terjadi di layer mana?" |
| Membaca kode | Peer **baca** modul bersama — prediksi behavior sebelum saran |
| Copas antar PRJ | Red flag — minta jelaskan blueprint & reasoning sendiri |

### Protokol code review (ringkas — guru ucapkan)

```text
1. Baca kode 5 menit — jangan langsung saran
2. Worksheet rubrik: 2 pujian SPESIFIK + 2 saran ACTIONABLE
3. SPD: situasi–perilaku–dampak (bukan "jelek")
4. 1 pertanyaan "mengapa?" (opsional rubrik)
5. Owner implement ≥1 saran — reviewer tidak ketik fix
6. Larangan: ejek, ranking IQ, spoil PRJ kelas lain
```

### Model SPD vs toxic

| Toxic | SPD sehat |
|-------|-----------|
| "Fungsi doStuff norak" | "Di handlers.js baris 12, `doStuff` tidak menjelaskan aksi — reviewer sulit trace alur pinjam." |
| "Render berantakan" | "Saat list kosong, render return string kosong — user tidak tahu belum ada data (dampak UX)." |
| "Salah semua" | "State push tanpa validasi duplikat — acceptance 'nama unik' belum terpenuhi." |

### Etika guru saat modeling review

Guru demo di **papan/proyektor snippet volunteer** — tulis **kalimat feedback rubrik**, bukan patch kode:

```text
✓ Pujian: "Pemisahan state.js/render.js konsisten — mudah cari bug layer."
✓ Saran SPD: "Listener di render.js re-bind tiap render — risiko duplikat event."
✗ "Ganti jadi begini:" (larangan)
```

---

## 4. Materi Inti

### Opening — cognitive trap (0–5 menit)

Tulis di papan: **"Code jalan = A?"**
Counter example singkat (proyeksi snippet spaghetti atau tanpa validasi) — diskusi 2 menit: jalan tapi sulit maintain.

### Experience — baca 2 snippet (5–15 menit)

Pair: mana yang **kamu mau maintain** 6 bulan? Mengapa?
Guru facilitate — tidak reveal "jawaban benar" dulu; siswa argument REA.

### Concept — rubrik review (15–25 menit)

Jelaskan [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md):

| Aspek review S3 | Contoh observasi |
|-----------------|------------------|
| Nama & struktur | Fungsi/file jelas · layer P10 |
| Edge case | Empty, invalid, duplikat |
| Readability | Magic number, dead code |
| Reasoning | Keputusan desain selaras blueprint |

**Bukan:** gaya pribadi, framework wars, roast UI.

### Clarify — SPD feedback (25–35 menit)

Model 2 kalimat SPD di papan — siswa latih rewrite 1 feedback toxic jadi SPD.

### Practice — review project teman (35–60 menit)

Pasangan silang — hindari teman dekat yang selalu copas.
Worksheet rubrik lengkap — guru float, dengar COM level reviewer.

### Build — implement 1 feedback (60–75 menit)

Owner kode revisi sendiri — **wajib** include 1 item dari P15 backlog.
Bukti: screenshot/commit before/after.

### Reflect (75–90 menit)

2 kalimat: apa yang diubah & **mengapa** — link ke rubrik reviewee.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Rubrik peer 1 halaman di papan + link [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md).
- Worksheet kosong — **bukan** contoh terisi guru.
- 2 snippet compare (maintainable vs spaghetti) — generic, bukan PRJ siswa.
- Volunteer artefak untuk **model review** (izin siswa).

### Skrip facilitator

```text
[0–5] Trap: code jalan ≠ kualitas — counter example
[5–15] Experience: baca 2 snippet — pilih maintainable
[15–25] Rubrik peer — nama, struktur, edge case, bukan gaya
[25–35] SPD feedback — model + latih rewrite toxic
[35–60] Review project teman — worksheet rubrik lengkap
[60–75] Implement 1 feedback wajib (+ P15 backlog)
[75–90] Reflect: apa diubah & why
```

### Modeling review sehat (contoh script guru)

```text
"Reviewer baca handlers.js + state.js 5 menit dulu."
(After read)
"PUJIAN: 'updateState immutable spread — trace perubahan jelas.'
 PUJIAN: 'Empty state message di render — user tidak bingung.'
 SARAN SPD: 'Validasi duplikat nama hanya di UI — bypass via console push state.'
 SARAN SPD: 'Magic number 0.025 di handler — extract ke constant atau spec.'
 TANYA: 'Mengapa filter di state bukan parameter render?'"
```

**Dilarang:** guru mengetik fix di file teman saat modeling.

---

## 6. Latihan Membaca Kode

Latihan **code review via membaca** — proyeksi snippet, siswa isi rubrik **tanpa fix**:

### Snippet A vs B (maintainable)

```javascript
// A — spaghetti
function x() {
  let a = document.getElementById("i").value;
  if (a) {
    let b = JSON.parse(localStorage.getItem("d") || "[]");
    b.push({ n: a });
    localStorage.setItem("d", JSON.stringify(b));
    document.getElementById("l").innerHTML = b.map(z => `<li>${z.n}</li>`).join("");
  }
}

// B — layered (ringkas)
// state.js: loadItems, addItem
// render.js: renderList
// handlers.js: handleSubmit → addItem → renderList
```

| Pertanyaan membaca | Kunci diskusi |
|--------------------|---------------|
| Mana maintainable? | B — layer jelas, testable |
| Pujian B spesifik? | Mis. addItem terpisah — unit reasoning |
| Saran B (edge)? | localStorage sync error? empty trim? |

### Snippet review edge case

```javascript
export function setStatus(id, status) {
  state.records.find(r => r.id === id).status = status;
}
```

| Pertanyaan membaca (peer) | Kunci |
|---------------------------|-------|
| Edge case? | id tidak ada → crash |
| Saran SPD? | "Saat id invalid, find undefined — app error; guard + feedback user." |
| Pertanyaan mengapa? | "Mengapa mutate langsung vs immutable update?" |

**Praktik:** 10 menit sebelum review artefak asli — latih 1 snippet proyeksi.

---

## 7. Praktik Mandiri Siswa

1. **Baca kode teman 5 menit** — sebelum menulis rubrik.
2. **Worksheet rubrik lengkap** — 2 pujian + 2 saran SPD.
3. **Implement ≥1 feedback** — owner ketik sendiri (+ P15 backlog).
4. **Before/after** — screenshot atau commit.
5. **Refleksi 2 kalimat** — perubahan cara berpikir post-review.
6. **Tidak** mengerjakan PRJ teman — review + owner revisi only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Review vague ("rapikan kode") | Model SPD spesifik di papan |
| Teman fix modul langsung | "Owner yang ketik — kamu hanya rubrik" |
| Hanya pujian, takut kritik | Normalisasi — SPD bukan menghina |
| Guru skip modeling review | **Wajib** sebelum practice 35–60 |
| Roast gaya/font | Redirect ke struktur, edge case, DoD |
| Tidak implement feedback | Wajibkan 1 bukti before/after |
| Copy saran guru kata-demi-kata | Minta observasi sendiri dari kode |

---

## 9. Rujukan

- Modul pertemuan: [XI-S3-P16](../../../kelas-xi/semester-3/XI-S3-P16_code-review-kualitas.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Demo & feedback: [P15 materi pendukung](./XI-S3-P15_project-s3-demo-peer.md)
- Review spiral next: [P17 materi pendukung](./XI-S3-P17_review-spiral-s3.md)
- Pemisahan tanggung jawab: [XI-S3-P10](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Cognitive trap + counter example delivered
- [ ] Model 1 peer review sehat sebelum siswa mulai
- [ ] Worksheet rubrik lengkap — feedback SPD spesifik (2+2)
- [ ] Implement ≥1 feedback + bukti before/after
- [ ] P15 backlog item addressed
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Tidak ada feedback toxic / ranking
- [ ] Refleksi reviewee terkumpul

[← Indeks S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
