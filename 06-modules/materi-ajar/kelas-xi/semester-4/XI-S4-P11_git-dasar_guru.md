# Materi Guru Lengkap — XI-S4-P11

**Handout siswa (bagikan):** [XI-S4-P11_git-dasar_siswa.md](./XI-S4-P11_git-dasar_siswa.md)

**Modul:** [XI-S4-P11_git-dasar.md](../../../kelas-xi/semester-4/XI-S4-P11_git-dasar.md)

**Materi pendukung sumber:** [XI-S4-P11_git-dasar.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P11_git-dasar.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P11 — Git Dasar

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P11 |
| Unit | XI4.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T5, CXI-K2 |
| MM | MM-20 |

## Learning Transformation

Dari folder copy → **versi** terlacak & amanah.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Trap: `project-final-final2.zip` |
| 5–15 | Experience | **History chat WA** — revert ke pesan lama? |
| 15–25 | Clarify | Commit = snapshot bermakna · bukan save random |
| 25–40 | Concept | init · add · commit · push · `.gitignore` |
| 40–70 | Practice | Repo pribadi project latihan — 3 commit message jelas |
| 70–85 | Reflect | Commit message buruk vs baik (contoh) |
| 85–90 | Exit | Link repo GitHub |

---

## Commit Message Guide

```text
feat: tambah load dari localStorage
fix: validasi form kosong
docs: update README project
```

---

## Formatif

**COM**, **TEC**

---

## Catatan Guru

Akun GitHub siswa — alternatif Gitea sekolah jika ada.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P11 Git Dasar

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P11 |
| Modul pertemuan | [XI-S4-P11_git-dasar.md](../../../kelas-xi/semester-4/XI-S4-P11_git-dasar.md) |
| Unit | XI4.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T5, CXI-K2 |
| MM | MM-20 |
| Formatif | COM, TEC |
| Ada live code? | **Ya — Git terminal live (TTS per command, siswa ketik sendiri)** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Git vs GitHub** | Git = versi lokal; GitHub = remote hosting |
| **Repository** | Folder ter-track `.git/` — history commit |
| **Working tree** | File di disk sekarang — belum tentu = last commit |
| **Staging (`add`)** | Pilih snapshot partial — index area |
| **Commit** | Snapshot bermakna + message — **bukan Ctrl+S random** |
| **push** | Upload commit ke remote — butuh auth |
| **`.gitignore`** | Exclude `node_modules/`, `.env`, OS junk |
| **Amanah versi** | History = jejak kerja — jangan hapus/claim palsu |
| **Atribusi** | Commit author = identitas — email GitHub siswa sendiri |

**Builds on P07–P08:** Project localStorage app = kandidat repo latihan.

**Builds on S4 chain:** Data pipeline app → persist → **versi kode** terlacak.

**KRITIS:** **JANGAN** copy-paste repo guru utuh ke mesin siswa — siswa **ketik command** dari folder project sendiri.

**Alternatif:** Gitea sekolah jika GitHub blocked — command sama.

**Jangan bagikan:** repo `.git` pre-seeded dengan 10 commit history.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P08 — export backup JSON?" | Git = backup **kode** + history, bukan hanya data |
| "P07 — KEY v1?" | Commit message dokumentasi perubahan schema |
| "project-final-final2.zip?" | Trap opening — versi tidak terlacak |
| "History chat WA?" | Revert ke versi lama — padanan `git log` / checkout |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas repo** | Siswa init repo dari project sendiri — **bukan clone template guru penuh** |
| **Live terminal** | Guru ketik di projector — siswa **mengetik ulang** command yang sama |
| **TTS per command** | Setiap command: sebut **scope** (folder? staging? history?) |
| **Recall** | Trap zip final-final2 — diskusi chaos |
| **Membaca kode** | `git status` output — prediksi staged vs unstaged |
| **No starter repo** | Larangan distribusi folder `.git` siap pakai |
| **Amanah & atribusi** | Commit under own account — tidak pinjam identitas teman |

---

## Materi Inti

### Transformasi

**Dari:** Folder copy / zip berantakan  
**Ke:** **Versi terlacak** — init · add · commit · push · ignore

### Scope command (cheat sheet guru)

| Command | Scope | Apa yang dilakukan |
|---------|-------|-------------------|
| `git init` | Folder project | Buat repo baru `.git/` |
| `git status` | Working tree vs staging vs commit | Diagnostik — **baca sebelum add** |
| `git add <file>` | Working → staging | Pilih file untuk snapshot berikutnya |
| `git add .` | Semua perubahan (hati-hati) | Staging bulk — cek status dulu |
| `git commit -m "..."` | Staging → history lokal | Snapshot permanen lokal |
| `git log --oneline` | History commit | Jejak — amanah dokumentasi |
| `git remote add origin URL` | Link ke GitHub | Alias remote |
| `git push -u origin main` | Lokal → remote | Upload branch |
| `.gitignore` | Exclude patterns | Secret/large tidak masuk repo |

### Commit message guide (Conventional ringkas)

```text
feat: tambah load dari localStorage
fix: validasi form kosong
docs: update README project
```

### `.gitignore` minimal MA

```text
node_modules/
.env
.DS_Store
Thumbs.db
*.log
```

### Trap — commit message buruk

```text
update
fix
asdf
final final beneran
```

---

## Alur Live Coding

> **Setup:** Terminal + folder project web siswa (HTML/CSS/JS). Git + akun GitHub sudah terinstall/login. **Satu siswa satu repo.**

### Persiapan

- Cek `git --version` di kelas
- Buat repo kosong di GitHub (private recommended) — **jangan** push code guru
- Slides off — terminal full

### Skrip TTS — command per command (siswa ketik)

```text
[LANGKAH 0 — Trap zip 0–5 menit]
Tampil folder: project-final-final2.zip
Tanya: "Versi mana yang benar? Siapa ubah apa?"
Ucapkan: "Git = history chat yang terstruktur."

[LANGKAH 1 — Experience 5–15 menit]
WA edit pesan vs forward — revert?
Analogi commit = pesan tidak bisa diubah sembarangan (amend nanti optional).

[LANGKAH 2 — Cek folder 15–20 menit]
cd path/ke/project-siswa
Scope: masuk ke root project — tempat index.html.
pwd / cd — pastikan lokasi benar.

[LANGKAH 3 — git init 20–25 menit]
Ketik: git init
TTS: "Scope: folder ini jadi repository — buat hidden .git."
ls -a (opsional) — tunjuk .git — jangan edit manual.

[LANGKAH 4 — git status 25–30 menit]
Ketik: git status
TTS: "Scope: bandingkan working tree vs last commit — awalnya semua untracked."
Baca output bareng — merah = belum tracked.

[LANGKAH 5 — .gitignore 30–38 menit]
Buat file .gitignore — ketik 4 baris minimal.
git status — .gitignore muncul untracked.
TTS: "Scope: exclude pattern — .env tidak boleh masuk repo."

[LANGKAH 6 — git add 38–45 menit]
Ketik: git add index.html
git status — staged green.
TTS: "Scope: working → staging — belum history permanen."
Ulang: git add . untuk sisa file (setelah cek tidak ada secret).

[LANGKAH 7 — git commit 45–52 menit]
Ketik: git commit -m "feat: scaffold app absensi"
TTS: "Scope: staging → history lokal — snapshot bermakna."
Jangan commit kosong — ulang status jika "nothing to commit".

[LANGKAH 8 — 2 commit lagi 52–65 menit]
Siswa edit kecil (README / fix typo) — ulang add + commit:
fix: validasi nama kosong
docs: tambah cara jalankan di README
TTS setiap pasang add/commit — siswa wajib ketik sendiri.

[LANGKAH 9 — git log 65–70 menit]
Ketik: git log --oneline
TTS: "Scope: baca history — jejak amanah."
Tunjuk hash + message — 3 commit terlihat.

[LANGKAH 10 — remote + push 70–82 menit]
GitHub: buat repo empty — copy HTTPS URL.
git remote add origin https://github.com/USER/REPO.git
TTS: "Scope: alias URL remote — bukan upload yet."
git branch -M main
git push -u origin main
TTS: "Scope: upload commit lokal ke GitHub — auth browser/ PAT."
Verifikasi di browser — file muncul.

[LANGKAH 11 — Reflect commit message 82–88 menit]
Contoh buruk vs baik di papan.
Atribusi: commit under own GitHub — identitas sendiri.

[LANGKAH 12 — Exit 88–90 menit]
Paste link repo di formulir — **repo pribadi**, bukan guru.
Preview P12: branch + merge tim.
```

---

## Latihan Membaca Kode

### Snippet A — status

```text
Changes not staged for commit:
  modified:   app.js
Untracked files:
  .gitignore
```

| Pertanyaan | Kunci |
|------------|-------|
| app.js staged? | Tidak — modified unstaged |
| Perlu apa sebelum commit? | git add app.js |

### Snippet B — add scope

```bash
git add index.html
git commit -m "feat: halaman utama"
```

| Pertanyaan | Kunci |
|------------|-------|
| File lain tidak di-add? | Tidak masuk commit ini |
| Scope commit? | Hanya staging area |

### Snippet C — amanah

```text
Author: Budi <budi@sekolah.id>
```

| Pertanyaan | Kunci |
|------------|-------|
| Pinjam akun teman push? | Tidak — jejak palsu |
| .env di repo? | Bahaya — harus .gitignore |

---

## Praktik Mandiri

1. Repo pribadi project latihan — min **3 commit** message jelas
2. `.gitignore` minimal — cek tidak ada secret
3. `git log --oneline` screenshot — 3 commit
4. Link GitHub di LMS/form exit
5. **Tidak boleh:** clone repo guru sebagai submission

**Extension:** `git diff` sebelum add — lihat perubahan baris.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Commit "update" 10× | Rubrik message — reject vague |
| `git add .` tanpa cek | Demo status — ada .env? |
| Clone template guru | Redirect init sendiri |
| Push ke repo teman | Own account only |
| Edit `.git/` manual | Jangan — corrupt repo |
| Lupa `-u` first push | Tracking branch — jelaskan |
| Guru terlalu cepat | Pause — semua ketik sebelum lanjut |
| Commit `node_modules` | .gitignore demo |

---

## Rujukan

- Modul: [XI-S4-P11](../../../kelas-xi/semester-4/XI-S4-P11_git-dasar.md)
- MM: [MM-20](../../../05-micro_modules/MM-20.md) *(jika ada)*
- Storage: [P07 localStorage](./XI-S4-P07_localstorage-crud.md)
- Backup UX: [P08 Error State](./XI-S4-P08_persistensi-error-state.md)
- Lanjut: [P12 Branch Kolaborasi](./XI-S4-P12_branch-kolaborasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Siswa ketik sendiri — bukan copy repo guru
- [ ] TTS scope per command (init/status/add/commit/push)
- [ ] Min 3 commit message bermakna
- [ ] .gitignore ada — no secret
- [ ] git log + link GitHub exit
- [ ] Diskusi amanah & atribusi identitas
- [ ] Trap zip final-final2 dibuka

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
- [BRG-05](../../../materi-ajar/jalur-kelanjutan/BRG-05_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
