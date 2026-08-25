# Handout Siswa — XI-S4-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P11_git-dasar.md](../../../kelas-xi/semester-4/XI-S4-P11_git-dasar.md)

---

## 1. Tujuan pembelajaran

Dari folder copy → **versi** terlacak & amanah.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

| 0–5 | Opening | Trap: `project-final-final2.zip` |

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Link repo GitHub
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58 · HR Ahmad (khianat amanat)

**Kait di kelas hari ini:** Git = jejak tanggung jawab & atribusi jujur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 10. Materi pendamping BRG

- [BRG-05](../../../materi-ajar/jalur-kelanjutan/BRG-05_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
