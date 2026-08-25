# Materi Guru Lengkap — XI-S4-P15

**Handout siswa (bagikan):** [XI-S4-P15_project-s4-build-2_siswa.md](./XI-S4-P15_project-s4-build-2_siswa.md)

**Modul:** [XI-S4-P15_project-s4-build-2.md](../../../kelas-xi/semester-4/XI-S4-P15_project-s4-build-2.md)

**Materi pendukung sumber:** [XI-S4-P15_project-s4-build-2.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P15_project-s4-build-2.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P15 — Project S4 Build 2

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P15 |
| Unit | XI4.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S4-* |

## Learning Transformation

Dari fitur terpisah → **produk utuh** siap demo.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Acceptance status honest |
| 10–60 | Build | Integrasi · transform pipeline · polish |
| 60–70 | QA | Tim lain isi checklist acceptance 5 menit |
| 70–85 | Fix | Prioritas 1 bug dari QA |
| 85–90 | Exit | Tag release `v0.1` opsional |

---

## QA Checklist (peer)

- Loading/error terlihat?  
- Data survive refresh?  
- Atribusi commit jelas?  

---

## Formatif

**ITR**, **OBS**

---

## Catatan Guru

Pastikan tidak ada anggota tim 0 commit — follow up offline jika perlu.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P15 Project S4 Build (2)


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P15 |
| Modul pertemuan | [XI-S4-P15_project-s4-build-2](../../../kelas-xi/semester-4/XI-S4-P15_project-s4-build-2.md) |
| Unit | XI4.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S4-* |
| Capability | ITR, OBS |
| Ada live code? | **Facilitator — integrasi + QA peer + prep P16** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari fitur terpisah → **produk utuh** siap demo + QA peer + fix prioritas 1.
- **Timeline:** stand-up acceptance honest → build integrasi/transform/polish → QA tim lain 5 menit → fix 1 bug → exit tag `v0.1` opsional.
- **QA checklist peer (modul):**
  - Loading/error terlihat?
  - Data survive refresh?
  - Atribusi commit jelas?
- **Debug protocol S4:** repro → hipotesis (network/storage/transform) → fix minimal → regresi refresh + offline.
- **Integrasi:** pipeline transform (P05/P06) · relasi data (P09) · modul tim (PRJ-04).
- **Self-test acceptance:** status jujur ✅/❌ — guru spot-check 3–5 tim.
- **Prep P16:** changelog draft · README lengkap · no secret keys.
- **Follow up offline:** anggota 0 commit — modul wajib guru tindaklanjut.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Build P14 — loading/error sudah? | (siswa demo cepat atau jujur ❌) |
| P06 — transform pipeline contoh PRJ kamu? | map/filter field API atau group data inventaris |
| Git graph — berapa author unik? | Min 2 — atribusi COM/K2 |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator** | Build polish milik tim — guru tidak menyelesaikan PRJ. |
| **Jangan takeover keyboard** | Saat QA peer: observer; saat fix: coach oral. |
| **Jangan bagikan solusi** | Tidak kirim "contoh app jadi" atau patch merge siap tempel. |
| **Clarifying questions** | "Gap acceptance mana?", "Transform field X — user lihat apa?", "Commit siapa untuk fitur ini?" |
| QA peer | Tim lain **isi checklist** — bukan rewrite kode tim |
| Hero coding | Guru cek graph — 1 author dominan = red flag follow-up |
| Amanah data | QA tidak export/copy data localStorage teman ke repo sendiri |

### Script coaching integrasi + QA

```text
"Acceptance status jujur — berapa % ✅?"
"Ini fitur baru atau tutup gap DoD?" → jika baru besar: "Parkir — fokus DoD."
"Refresh test — data sama?"
"Offline/error — pesan manusiawi?"
"QA teman: loading/error/refresh/atribusi — centang honest."
"Bug prioritas 1 dari QA — fix minimal, commit `fix: ...`."
```

### Larangan menit terakhir

| Jangan | Mengapa |
|--------|---------|
| Guru inject fitur biar demo cantik | Merusak bukti ITR & ownership tim |
| Tim QA rewrite JS teman | Owner fix sendiri — QA hanya checklist |
| Skip refresh test | Core DoD persist/API S4 |
| Tag release tanpa README atribusi | Git checkpoint P16 gagal |

---

## 4. Materi Inti

### Opening — acceptance status honest (0–10 menit)

Setiap tim sebut **% acceptance jujur** + blocker #1.
Guru catat tim perlu scaffolding P16.

### Build block (10–60 menit)

Fokus umum S4:

| Area | Contoh integrasi / polish |
|------|---------------------------|
| API | Transform JSON → UI cards (bukan dump) |
| Persist | Save after CRUD + load init + refresh proof |
| Relasi | idBuku → peminjaman (PRJ-03) |
| Tim | Merge modul UI + data (PRJ-04) |
| UX | Empty state, error retry, loading skeleton |

Guru keliling — **clarifying questions only**, timer 30/25/20 menit.

### QA peer cross-team (60–70 menit)

Tim A uji Tim B (rotasi) — **5 menit checklist**:

```text
[ ] Loading/error terlihat (uji offline jika API)
[ ] Refresh — data survive
[ ] Git log — ≥2 author, message bermakna
[ ] README — cara run + atribusi
[ ] (Opsional) Transform — bukan raw JSON dump
```

Peer **tidak** edit repo — catat finding untuk owner.

### Fix prioritas 1 (70–85 menit)

Owner tim implement **1 bug/finding QA** — commit bermakna.
Guru float — tidak ketik fix.

### Exit — tag release opsional (85–90 menit)

`git tag v0.1` jika DoD minimal terpenuhi + README OK.
Prep P16: changelog 3 bullet draft.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Checklist QA peer 1 halaman papan.
- Timer build 50 menit visible.
- **Tidak** sesi last-minute coding guru.

### Skrip facilitator

```text
[0–10] Stand-up — acceptance status honest
[10–60] BUILD — integrasi · transform · polish
        Guru berkeliling, clarifying questions
[60–70] QA peer cross-team — checklist 5 menit (no code edit)
[70–85] Fix prioritas 1 bug dari QA
[85–90] Exit: tag v0.1 opsional + prep P16
```

### Modeling QA finding (generic)

```text
Finding QA: "Offline — loading forever, no error message."
Owner: repro → catch block? → pesan user?
(BUKAN: guru ketik fix di repo owner)
```

### Modeling kalimat changelog (P16 prep)

```text
✓ "v0.1 — fetch cuaca + error offline + persist absensi refresh-safe"
✓ "Contributors: A (UI), B (fetch), C (README/QA)"
✗ "Update fix final" (vague)
```

---

## 6. Latihan Membaca Kode

Latihan **QA via membaca** — snippet proyeksi, siswa isi checklist:

```javascript
const raw = await res.json();
document.getElementById("app").innerHTML =
  `<pre>${JSON.stringify(raw, null, 2)}</pre>`;
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| DoD PRJ-01 pass? | Fail — dump mentah, bukan 3–5 field relevan |
| QA finding SPD? | "Response ditampilkan raw — user tidak dapat insight cuaca." |

```javascript
// Git log simulasi — 15 commit, 1 author
// author: siswaA × 15
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Atribusi kolaborasi? | Fail min 2 kontributor — red flag hero coding |
| Tindakan guru? | Follow-up offline — pair task redistribusi |

```javascript
function init() {
  render([]);
  // loadFromStorage() commented out
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Refresh test? | Fail — data tidak load saat init |
| QA checklist item? | "Data survive refresh" → ❌ |

---

## 7. Praktik Mandiri Siswa

1. **Build 50 menit** — tutup gap acceptance + integrasi.
2. **QA peer** — isi checklist tim lain (5 menit).
3. **Fix 1 finding** — owner commit + message jelas.
4. **Refresh + offline test** — bukti screenshot opsional.
5. **Tag v0.1** — jika siap.
6. **Changelog draft** — 3 bullet untuk P16.
7. **Tidak** edit repo tim lain — QA only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| QA tim rewrite kode teman | "Owner fix — kamu checklist saja" |
| Tambah fitur besar menjelang P16 | Redirect ke DoD + acceptance gap |
| Self-test palsu | Spot-check refresh offline 3 tim |
| 0 commit anggota | Follow-up offline wajib — dokumentasi |
| Guru tempted fix fetch untuk tim | Tanya Network tab — tim ketik sendiri |
| Skip README atribusi | Blocker P16 — wajib hari ini atau homework |
| Copy data localStorage teman saat QA | Ingatkan amanah — uji dengan data dummy |

---

## 9. Rujukan

- Modul pertemuan: [XI-S4-P15](../../../kelas-xi/semester-4/XI-S4-P15_project-s4-build-2.md)
- Build week 1: [P14 materi pendukung](./XI-S4-P14_project-s4-build-1.md)
- Peer review next: [P16 materi pendukung](./XI-S4-P16_peer-review-git.md)
- Pipeline: [XI-S4-P05](../../../kelas-xi/semester-4/XI-S4-P05_map-filter-reduce.md) · [P06](../../../kelas-xi/semester-4/XI-S4-P06_pipeline-data.md)
- Model data: [XI-S4-P09](../../../kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Acceptance status honest tercatat per tim
- [ ] Build ≥50 menit — facilitator, bukan coder
- [ ] QA peer cross-team — checklist completed
- [ ] Fix 1 finding per tim — owner commit
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Refresh + error path spot-checked
- [ ] Atribusi commit verified (≥2 author atau follow-up noted)
- [ ] Prep P16: changelog draft + README check

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

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Kickoff project — janji tim & proses jujur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
