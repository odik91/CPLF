# Materi Guru Lengkap — XI-S4-P12

**Handout siswa (bagikan):** [XI-S4-P12_branch-kolaborasi_siswa.md](./XI-S4-P12_branch-kolaborasi_siswa.md)

**Modul:** [XI-S4-P12_branch-kolaborasi.md](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)

**Materi pendukung sumber:** [XI-S4-P12_branch-kolaborasi.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P12 — Branch & Kolaborasi

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P12 |
| Unit | XI4.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T5, CXI-K2 |

## Learning Transformation

Dari overwrite teman → **branch** + merge + atribusi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo conflict sengaja — diskusi |
| 5–15 | Experience | **Gotong royong**: 2 orang edit 1 dokumen — aturan? |
| 15–25 | Trap | Push force / edit langsung main tanpa komunikasi |
| 25–35 | Clarify | Branch feature · pull · merge · komunikasi |
| 35–45 | Concept | `git branch` · PR sederhana · CODEOWNERS ringkas (opsional) |
| 45–70 | Practice | Tim 2–3: branch masing-masing · merge 1 fitur |
| 70–85 | Reflect | Atribusi kode AI/teman — nilai MA |
| 85–90 | Exit | Screenshot graph commit |

---

## Cognitive Trap

**Asumsi:** Hero coding · teman numpang nama.  
**Aman:** Rubrik kontribusi tim di project S4.

---

## Formatif

**COM**, **K2**

---

## Catatan Guru

Minimum 2 kontributor di repo untuk PRJ S4-04 Portal.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P12 Branch & Kolaborasi

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P12 |
| Modul pertemuan | [XI-S4-P12_branch-kolaborasi.md](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md) |
| Unit | XI4.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T5, CXI-K2 |
| Formatif | COM, K2 |
| Ada live code? | **Ya — branch · merge live terminal + atribusi etika MA** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Branch** | Garis kerja paralel — `main` tetap stabil |
| **feature branch** | Satu fitur = satu branch — naming jelas `feat/export-backup` |
| **checkout / switch** | Pindah branch — working tree ikut |
| **merge** | Gabung branch ke `main` — history bertemu |
| **Conflict** | Edit baris sama — **bukan disaster** — resolve manual |
| **pull** | Ambil update remote sebelum merge — komunikasi tim |
| **push force** | **Trap** — overwrite history teman — dilarang MA |
| **PR sederhana** | Review sebelum merge — even pair 2 orang |
| **Atribusi MA** | Kode AI/teman harus disebut — rubrik K2 project S4 |
| **Minimum 2 kontributor** | PRJ S4-04 Portal — syarat kolaborasi |

**Builds on P11:** Repo sudah ada — hari ini **branch + merge**, bukan init ulang.

**Builds on P08:** Fitur branch contoh: export backup atau status UI — domain familiar.

**Cognitive trap:** Hero coding / teman numpang nama — rubrik kontribusi tim.

**JANGAN:** `git push --force` demo ke repo shared siswa.

**Jangan bagikan:** repo pre-merged conflict solved.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P11 — commit vs branch?" | Commit = snapshot; branch = garis snapshot |
| "P08 — fitur export?" | Kandidat feature branch terpisah |
| "Gotong royong 2 orang 1 dokumen?" | Aturan edit — padanan branch + komunikasi |
| "P07 — data amanah?" | Merge code = tanggung jawab gabung, bukan overwrite sembarangan |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas repo** | Tim kerja di repo tim — masing-masing ketik command |
| **Live terminal** | Guru demo conflict **sengaja** — resolve live, TTS per command |
| **TTS per command** | branch · checkout · merge · status — scope jelas |
| **Recall** | Gotong royong — aturan sebelum edit bersama |
| **Membaca kode** | Conflict marker `<<<<` — prediksi pilihan resolve |
| **No force push** | Explicit dilarang — konsekuensi etis |
| **Atribusi MA** | Diskusi: AI generate / copy teman — wajib disebut di README/commit |

---

## Materi Inti

### Transformasi

**Dari:** Overwrite file teman / edit langsung main  
**Ke:** **Branch + merge + atribusi** — kolaborasi terlacak

### Scope command

| Command | Scope | Apa yang dilakukan |
|---------|-------|-------------------|
| `git branch` | List branch lokal | Lihat garis kerja |
| `git branch feat/nama` | Buat pointer branch baru | Dari HEAD saat ini |
| `git checkout feat/nama` | Pindah branch | Working tree switch |
| `git switch -c feat/nama` | Buat + pindah (modern) | Shortcut |
| `git merge feat/nama` | Gabung ke branch aktif | Biasanya di main |
| `git status` | Post-merge / conflict | Diagnostik |
| `git pull origin main` | Sync remote | Sebelum mulai branch baru |
| `git push origin feat/nama` | Upload branch | Review/PR |

### Conflict marker (baca bareng)

```text
<<<<<<< HEAD
const KEY = "ma-app-v1";
=======
const KEY = "ma-absensi-v1";
>>>>>>> feat/rename-key
```

Resolve: pilih satu atau gabung manual — hapus marker — add — commit.

### Atribusi — contoh README

```markdown
## Kontribusi
- Ahmad: fitur export backup (branch feat/export)
- Siti: UI status save (branch feat/save-status)
- Asisten AI Cursor: draft fungsi export — direview & diubah Ahmad
```

### Rubrik kontribusi (oral preview PRJ)

| Level | Indikator |
|-------|-----------|
| K2 kuat | Commit sendiri + review teman + atribusi jelas |
| K2 lemah | Satu orang commit semua — nama teman numpang |

---

## Alur Live Coding

> **Setup:** Tim 2–3 · repo dari P11 (shared org repo atau pair). Terminal masing-masing.

### Persiapan

- Repo dengan README + app minimal di main
- Satu pasang guru siapkan conflict scenario (edit baris sama)

### Skrip TTS — branch merge live

```text
[LANGKAH 0 — Conflict demo opening 0–5 menit]
Tampil merge conflict sengaja — jangan panik.
Ucapkan: "Conflict = komunikasi kurang — bukan salah Git."

[LANGKAH 1 — Gotong royong 5–15 menit]
2 orang edit 1 Google Doc — aturan?
Tulis di papan: komunikasi · bagian · review.

[LANGKAH 2 — Trap force push 15–25 menit]
Jelaskan push --force — **DILARANG** di repo tim MA.
Konsekuensi: history teman hilang — amanah rusak.

[LANGKAH 3 — Sync main 25–30 menit]
git checkout main
git pull origin main
TTS: "Scope: pastikan main terbaru sebelum branch."

[LANGKAH 4 — Buat feature branch 30–38 menit]
git switch -c feat/export-backup
TTS: "Scope: garis kerja baru dari HEAD main — main tidak berubah."
git branch — tunjuk * feat/export-backup

[LANGKAH 5 — Kerja di branch 38–50 menit]
Tim A: implement export (P08 spiral) — commit:
feat: tombol export backup JSON
Tim B (parallel repo clone/fetch): branch feat/save-status
Siswa ketik sendiri — guru keliling TTS.

[LANGKAH 6 — Push branch 50–55 menit]
git push -u origin feat/export-backup
TTS: "Scope: upload branch — main remote belum berubah."

[LANGKAH 7 — Merge ke main 55–65 menit]
git checkout main
git merge feat/export-backup
TTS: "Scope: gabung history — fast-forward atau merge commit."
Conflict? → LANGKAH 8. Else push main.

[LANGKAH 8 — Resolve conflict live 65–75 menit]
Buka file — tunjuk <<<<<<< HEAD.
TTS: "Scope: edit manual — pilih atau gabung — hapus marker."
git add file.js
git commit -m "merge: resolve KEY namespace"
Push main.

[LANGKAH 9 — PR sederhana (opsional) 75–80 menit]
GitHub: Compare & pull request — review 1 teman approve.
Even tanpa GH: pair review di kelas — oral approve.

[LANGKAH 10 — Reflect atribusi 80–88 menit]
Diskusi:
- Kode dari ChatGPT — disebut di README?
- Copy snippet teman — commit under siapa?
Nilai MA: kejujuran > hero coding.

[LANGKAH 11 — Exit 88–90 menit]
Screenshot `git log --oneline --graph --all`
Minimum 2 kontributor visible — foreshadow PRJ S4-04.
```

---

## Latihan Membaca Kode

### Snippet A — branch list

```text
* feat/export-backup
  main
```

| Pertanyaan | Kunci |
|------------|-------|
| Branch aktif? | feat/export-backup (*) |
| main berubah? | Belum — kerja di branch |

### Snippet B — merge

```bash
git checkout main
git merge feat/export-backup
```

| Pertanyaan | Kunci |
|------------|-------|
| Merge ke mana? | Ke branch aktif (main) |
| Sebelum merge? | Pastikan commit di feature branch |

### Snippet C — conflict

```text
<<<<<<< HEAD
=======
>>>>>>> feat/x
```

| Pertanyaan | Kunci |
|------------|-------|
| Boleh commit langsung? | Tidak — resolve dulu |
| Siapa pilih isi? | Tim — komunikasi |

---

## Praktik Mandiri

1. Tim 2–3: masing-masing branch · merge min 1 fitur ke main
2. Resolve 1 conflict (guru bisa inject) — dokumentasi singkat
3. README kontribusi + atribusi AI/teman jika ada
4. Screenshot graph commit — exit ticket
5. **Tidak boleh:** push --force ke repo tim

**Extension:** CODEOWNERS ringkas — 1 baris di repo org.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Edit langsung main | Wajib feature branch |
| push --force | Stop — explain ethics |
| Conflict panic delete repo | Resolve step-by-step |
| Satu hero commit all | Rubrik K2 — distribusi branch |
| Tidak pull sebelum branch | Demo stale main |
| Merge tanpa review | Pair check 2 menit |
| Atribusi AI disembunyikan | MA: kejujuran wajib |
| Guru solve conflict for them | Guide — siswa ketik |

---

## Rujukan

- Modul: [XI-S4-P12](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)
- Git dasar: [P11 Git Dasar](./XI-S4-P11_git-dasar.md)
- Export fitur: [P08 Error State](./XI-S4-P08_persistensi-error-state.md)
- Kickoff tim: [P13 Project S4 Kickoff](./XI-S4-P13_project-s4-kickoff.md)
- Peer review: [P16 Peer Review Git](./XI-S4-P16_peer-review-git.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Feature branch dibuat — siswa ketik command
- [ ] Merge ke main live — conflict didemo/resolve
- [ ] push --force explicitly dilarang
- [ ] Diskusi atribusi AI/teman — nilai MA
- [ ] Graph commit screenshot — min 2 kontributor
- [ ] TTS scope branch/checkout/merge
- [ ] Tidak distribusi repo pre-merged

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
