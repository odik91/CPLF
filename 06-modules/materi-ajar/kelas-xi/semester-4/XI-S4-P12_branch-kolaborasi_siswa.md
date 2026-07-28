# Handout Siswa — XI-S4-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P12_branch-kolaborasi.md](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)

---

## 1. Tujuan pembelajaran

Dari overwrite teman → **branch** + merge + atribusi.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Hero coding · teman numpang nama.  
**Aman:** Rubrik kontribusi tim di project S4.

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Screenshot graph commit
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
