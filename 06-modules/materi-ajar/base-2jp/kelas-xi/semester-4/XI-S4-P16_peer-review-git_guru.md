# Materi Guru Lengkap — XI-S4-P16

**Handout siswa (bagikan):** [XI-S4-P16_peer-review-git_siswa.md](./XI-S4-P16_peer-review-git_siswa.md)

**Modul:** [XI-S4-P16_peer-review-git.md](../../../kelas-xi/semester-4/XI-S4-P16_peer-review-git.md)

**Materi pendukung sumber:** [XI-S4-P16_peer-review-git.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P16_peer-review-git.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P16 — Peer Review & Git Checkpoint

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P16 |
| Unit | XI4.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S4-* |

## Learning Transformation

Dari submit → **review + iterasi** wajib sebelum presentasi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Protokol review (S3 P16 spiral) |
| 5–25 | Review | Cross-team: [Rubrik Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 25–45 | Clarify | Diskusi 1 finding penting per tim |
| 45–70 | Build | Implement ≥1 revisi + commit `fix: peer review ...` |
| 70–85 | Retro mini | Start/Stop/Continue 3 menit tim |
| 85–90 | Exit | Changelog 3 bullet |

---

## Git Checkpoint

- Semua anggota: commit visible  
- README: cara run + atribusi  
- No secret keys in repo  

---

## Formatif

**COM**, **ITR**

---

## Catatan Guru

Persiapan presentasi P17 — demo script di-assign per anggota.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P16 Peer Review & Git Checkpoint


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P16 |
| Modul pertemuan | [XI-S4-P16_peer-review-git.md](../../../kelas-xi/semester-4/XI-S4-P16_peer-review-git.md) |
| Unit | XI4.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S4-* |
| Rubrik | [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| Capability | COM, ITR (CXI-K2, CXI-C1) |
| Ada live code? | **Peer review protocol + Git checkpoint — bukan solusi guru** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari submit tim → **review + iterasi wajib** + Git checkpoint sebelum P17 presentasi.
- **Spiral S3 P16:** protokol review SPD + rubrik — hari ini **+ dimensi Git/atribusi/kolaborasi**.
- **Timeline:** opening protokol → cross-team review rubrik → pleno 1 finding → implement ≥1 revisi + commit → retro mini tim → exit changelog.
- **Git checkpoint (modul):**
  - Semua anggota: commit visible
  - README: cara run + atribusi
  - No secret keys in repo
- **Rubrik peer:** 2 pujian spesifik + 2 saran actionable + pertanyaan klarifikasi opsional.
- **Implement wajib:** commit `fix: peer review ...` — bukti before/after.
- **Retro mini tim:** Start / Stop / Continue — 3 menit, fokus kolaborasi Git/async/data.
- **Prep P17:** assign demo script per anggota — semua bicara ≥30 detik.
- **Nilai MA:** gotong royong · kejujuran atribusi · amanah data.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| QA P15 — 1 finding apa untuk tim kamu? | (siswa spesifik — error, refresh, atribusi) |
| P12 — mengapa commit message bermakna? | Trace siapa ubah apa — kolaborasi & debug |
| Beda review kode vs patch kode teman? | Review = saran SPD; owner implement — bukan takeover |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator + modeler** | Guru model 1 review sehat (kode + Git log) — lalu float, tidak fix PRJ. |
| **Jangan takeover keyboard** | Reviewer **tidak** edit repo teman; owner implement sendiri. |
| **Jangan bagikan solusi** | Peer **tidak** push fix ke branch tim lain — hanya rubrik + SPD. |
| **Clarifying questions** | "Commit mana untuk fitur X?", "README jelaskan run?", "API key di repo?" |
| Git checkpoint | Guru **verifikasi** atribusi — bukan rewrite history siswa |
| Amanah data | Reviewer tidak clone data pribadi localStorage ke repo sendiri |
| Hero coding | Finding wajib: distribusi commit + README peran jujur |

### Protokol review + Git (ringkas — guru ucapkan)

```text
1. Baca README + Git log 5 menit — sebelum saran kode
2. Worksheet rubrik: 2 pujian SPESIFIK + 2 saran ACTIONABLE
3. SPD: situasi–perilaku–dampak (bukan "tim jelek")
4. Cek checkpoint: commit semua anggota · README · no secrets
5. Owner implement ≥1 saran — commit `fix: peer review ...`
6. Retro mini: Start/Stop/Continue kolaborasi
7. Larangan: ejek, ranking, patch repo teman, curi data
```

### Model SPD vs toxic (dimensi Git)

| Toxic | SPD sehat |
|-------|-----------|
| "Tim kamu gak ngerti Git" | "Di log commit, 12/15 commit satu author — reviewer sulit verifikasi kontribusi B & C." |
| "README sampah" | "README tidak menjelaskan cara run offline test — QA tim lain gagal repro." |
| "Fetch-nya salah" | "Saat offline, catch tidak set UI — user stuck loading (dampak UX)." |

### Etika guru saat modeling review

Guru demo di **proyektor snippet + git log screenshot volunteer** — tulis **kalimat rubrik**, bukan patch:

```text
✓ Pujian: "Pemisahan fetch.js/render.js — trace async jelas."
✓ Pujian: "Commit message `feat: add loading state` — searchable history."
✓ Saran SPD: ".env.example ada tapi API key asli di config.js — risiko leak."
✗ "Ganti jadi begini:" (larangan)
```

---

## 4. Materi Inti

### Opening — protokol review spiral S3 (0–5 menit)

Recall P16 S3: code jalan ≠ kualitas. Hari ini + **Git sebagai bukti kolaborasi**.

### Cross-team review (5–25 menit)

Pasangan silang antar tim — hindari teman dekat yang selalu copas.
Worksheet [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) lengkap.

**Dimensi review S4 tambahan:**

| Aspek | Observasi |
|-------|-----------|
| Async UI | loading/error/empty |
| Data | persist refresh · transform field |
| Git | author count · message · merge history |
| Kolaborasi | README atribusi · issue trace |
| Amanah | no secrets · scope data |

### Pleno — 1 finding penting (25–45 menit)

Setiap tim present **1 finding** dari review — bukan roast.
Guru facilitate: "Apa dampak ke user? Apa saran actionable?"

### Implement ≥1 revisi (45–70 menit)

Owner tim ketik sendiri — commit wajib:

```text
fix: peer review — [ringkas finding]
```

Bukti: diff/screenshot before/after.

### Retro mini tim (70–85 menit)

Start / Stop / Continue — 3 menit per tim (privat sticky atau oral ringkas):

| Prompt | Contoh |
|--------|--------|
| Start | "Pair before merge" |
| Stop | "Push tanpa pull" |
| Continue | "README update tiap fitur" |

### Exit — changelog 3 bullet (85–90 menit)

```text
- Fitur utama v0.1
- Revisi peer review hari ini
- Prep demo P17: siapa demo bagian apa
```

Assign demo script P17 — **semua anggota ≥30 detik**.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Rubrik peer 1 halaman + Git checkpoint checklist papan.
- Worksheet kosong — **bukan** contoh terisi guru.
- Volunteer repo untuk model review (izin tim).
- **Tidak** distribusi patch fix.

### Skrip facilitator

```text
[0–5] Protokol review + Git checkpoint — spiral S3 P16
[5–25] Cross-team review — rubrik lengkap + baca Git log
[25–45] Pleno 1 finding penting per tim
[45–70] Implement ≥1 revisi — commit fix: peer review
[70–85] Retro mini Start/Stop/Continue per tim
[85–90] Changelog 3 bullet + assign demo P17
```

### Git checkpoint verifikasi (guru float)

```text
[ ] git shortlog -sn — ≥2 author (kecuali kebijakan solo+dokumentasi)
[ ] README: npm/live server? atribusi nama+peran?
[ ] .gitignore: .env, node_modules
[ ] Tidak ada API key/token di history (jika ada — rotate + gitignore, bukan guru rewrite force)
```

**Dilarang:** guru commit ke repo siswa; force push hapus history tanpa edukasi.

---

## 6. Latihan Membaca Kode

Latihan **review via membaca** — proyeksi snippet + git log, siswa isi rubrik:

### Snippet async + log

```javascript
// fetch.js — no try/catch
export async function getNews() {
  const r = await fetch(URL);
  return r.json();
}
```

```text
git log --oneline (sample):
a1b2c3d fix
d4e5f6g update
g7h8i9j fix final
(semua Author: Ali)
```

| Pertanyaan membaca | Kunci diskusi |
|--------------------|---------------|
| Finding async? | No error path — offline crash atau hang |
| Finding Git? | Single author + vague messages — atribusi kolaborasi lemah |
| Saran SPD? | "Tanpa catch, fetch gagal silent — tambah error UI + commit message deskriptif per fitur." |

### Snippet README + secrets

```markdown
## Run
Buka index.html

## API
Key: sk-live-xxxxx
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Checkpoint fail? | Secret in repo — amanah data FAIL |
| Saran actionable? | Remove key, .env.example, dokumentasi env lokal |

### Snippet transform

```javascript
const items = data.articles.slice(0, 5).map(a => ({
  title: a.title,
  date: a.publishedAt.split("T")[0],
}));
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| +1 pujian spesifik? | Transform 5 headline + date — selaras DoD PRJ-01 |
| +1 tanya? | "Field date timezone — konsisten untuk user Indonesia?" |

---

## 7. Praktik Mandiri Siswa

1. **Review tim lain** — rubrik lengkap + baca Git log 5 menit dulu.
2. **Checkpoint Git** — README + no secrets + commit visible.
3. **Implement ≥1 feedback** — owner commit `fix: peer review ...`.
4. **Retro mini** — Start/Stop/Continue tim.
5. **Changelog 3 bullet** + assign demo P17 per anggota.
6. **Tidak** push ke repo tim lain — review only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Review vague ("perbaiki Git") | Model SPD spesifik di papan |
| Teman push fix ke branch teman | "Owner yang commit — kamu rubrik saja" |
| Skip implement feedback | Wajibkan 1 bukti before/after |
| Guru skip modeling review | **Wajib** sebelum cross-team 5–25 |
| Roast "tim gak kompak" | Redirect ke perilaku Git spesifik |
| API key terlanjur push | Edukasi rotate + gitignore — bukan malu publik |
| Satu anggota demo semua P17 | Assign script — semua ≥30 detik |

---

## 9. Rujukan

- Modul pertemuan: [XI-S4-P16](../../../kelas-xi/semester-4/XI-S4-P16_peer-review-git.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Build prep: [P15 materi pendukung](./XI-S4-P15_project-s4-build-2.md)
- Presentasi next: [P17 materi pendukung](./XI-S4-P17_presentasi-retrospektif.md)
- Code review S3 spiral: [XI-S3-P16 materi](../semester-3/XI-S3-P16_code-review-kualitas.md)
- Git: [XI-S4-P11](../../../kelas-xi/semester-4/XI-S4-P11_git-dasar.md) · [P12](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Model 1 peer review sehat (kode + Git) sebelum siswa mulai
- [ ] Cross-team rubrik — feedback SPD spesifik (2+2)
- [ ] Git checkpoint verified per tim (README, authors, no secrets)
- [ ] Implement ≥1 revisi + commit `fix: peer review`
- [ ] Retro mini Start/Stop/Continue
- [ ] Changelog 3 bullet + demo script P17 assigned
- [ ] **Tidak** takeover repo / patch untuk siswa
- [ ] Follow-up offline jika 0 commit anggota
- [ ] Tidak ada feedback toxic / ranking

[← Indeks S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Bangsa (integritas)

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:2 · QS Al-Hujurat 49:12

**Kait di kelas hari ini:** Review & merge tanpa gosip; gotong royong kebaikan.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
