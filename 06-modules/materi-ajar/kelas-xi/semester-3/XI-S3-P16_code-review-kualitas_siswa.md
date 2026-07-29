# Handout Siswa — XI-S3-P16

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P16_code-review-kualitas.md](../../../kelas-xi/semester-3/XI-S3-P16_code-review-kualitas.md)

---

## 1. Tujuan pembelajaran

Dari “yang penting jalan” → **kualitas** terbaca & maintainable.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

### Build — implement 1 feedback (60–75 menit)

Owner kode revisi sendiri — **wajib** include 1 item dari P15 backlog.
Bukti: screenshot/commit before/after.

### Reflect (75–90 menit)

2 kalimat: apa yang diubah & **mengapa** — link ke rubrik reviewee.

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Review = cari salah · menghina.  
**Aman:** Model 1 komentar konstruktif guru di depan kelas.

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58 · QS Al-Asr 103

**Kait di kelas hari ini:** Build iteratif — amanah waktu & kualitas kelompok.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
