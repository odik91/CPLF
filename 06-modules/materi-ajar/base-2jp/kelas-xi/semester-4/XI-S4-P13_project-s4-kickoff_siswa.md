# Handout Siswa — XI-S4-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P13_project-s4-kickoff.md](../../../kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md)

---

## 1. Tujuan pembelajaran

Dari solo builder → **tim** dengan kontrak API/data/Git.

---

## 2. Ringkasan konsep

- **Transformasi inti:** dari solo builder S3 → **tim** dengan kontrak API/storage/Git + atribusi jelas.
- **Empat opsi PRJ S4:**
  - **PRJ-XI-S4-01** — Dashboard Cuaca/Berita (API) — fetch + loading/error + transform JSON
  - **PRJ-XI-S4-02** — Absensi + Persistensi + Git — localStorage + min 2 kontributor
  - **PRJ-XI-S4-03** — Inventaris Perpustakaan Mini — skema ER + CRUD + cari by id
  - **PRJ-XI-S4-04** — Portal Pengumuman Kelas — **wajib tim 3–4**, modul terpisah + review/merge
- **DoD:** lihat file PRJ masing-masing — guru paham checklist, **bukan** solusi kode.
- **Deliverable kickoff:** repo bersama + RACI + ER/API plan + acceptance + issue/task per anggota + branch awal — **bukan** app jadi.
- **Rubrik:** [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md) — kolaborasi + reasoning + demo P17.
- **Wajib S4:** integrasi API **atau** persistensi · Git branch · min 2 kontributor (PRJ-04 wajib multi-kontributor) · atribusi README · amanah data teman.
- **Varian rotasi:** A/B/C per PRJ — antar kelas paralel beda varian.
- **Mode:** tim 2–3 (kecuali sekolah wajib solo + peer reviewer eksternal — dokumentasikan kebijakan).

**Dry run P11/P12:** kalau siswa belum pernah merge — scaffold repo kosong OK; integrasi P14, bukan guru.

---

## 3. Materi praktik

### Kickoff ≠ build penuh

90 menit fokus **tim + kontrak data + Git + perencanaan yang bisa diuji**:

1. Pilih PRJ + varian (A/B/C)
2. Bentuk tim 2–3 (PRJ-04: 3–4)
3. RACI sederhana: UI · data/logic · API/storage · docs/QA
4. ER mini atau API plan + acceptance 3–5
5. Repo bersama + README skeleton (cara run + pembagian tugas)
6. Issue/task list — **≥1 issue per anggota**
7. Branch per anggota (feature/* naming)
8. Target P14 — data dari API **atau** persist lokal + loading state

### RACI sederhana (papan)

| Peran | Tanggung jawab contoh |
|-------|----------------------|
| UI | Render, loading/error, form |
| Data/API | fetch, transform, localStorage schema |
| Docs/QA | README, acceptance checklist, uji offline |
| (Rotasi) | PRJ-04 — role bergilir minggu depan OK |

### Checklist kickoff (modul)

- [ ] Tim 2–3 (PRJ-04: 3–4)
- [ ] Skema data / API plan
- [ ] ≥1 issue per anggota + assignee
- [ ] Rotasi varian PRJ antar kelas
- [ ] Branch awal per anggota
- [ ] Risiko kolaborasi #1 tercatat

### Approve spec — 1 putaran feedback

Guru baca plan tim:

- Teman ROBI bisa paham tanpa tanya ulang?
- AC bisa dicek ya/tidak?
- Scope realistis P14–P15 (2 minggu build)?
- Integrasi API/storage jelas — bukan "nanti"?
- Tidak ada rencana hero coding?

**Tolak scope terlalu besar** — potong ke DoD minimal PRJ, bukan tambah implementasi guru.

### Scaffold yang **boleh** guru tulis di papan (generic)

```text
/README.md        → cara run + atribusi anggota + endpoint API (jika ada)
/docs/spec.md     → requirement + AC + ER sketch
/docs/raci.md     → UI / data / QA assignee
/src/             → folder kosong atau main.js placeholder
/.gitignore       → node_modules, .env (no secrets!)
issues:           → #1 fetch skeleton (A) · #2 render loading (B) · #3 README (C)
branch:           → feature/fetch-api (A) · feature/ui-loading (B)
```

### Scaffold yang **dilarang** bagikan

- PRJ-01 dashboard cuaca fetch jalan lengkap
- PRJ-04 portal pengumuman CRUD + persist siap merge
- Link GitHub "contoh nilai 100 tim"
- ZIP dengan localStorage + API key embedded

### Target minggu P14

- Data masuk dari API **atau** persist lokal terbukti
- Loading + 1 error path UI
- ≥1 commit per anggota

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | 4 PRJ S4 + requirement API/storage/Git |
| 10–25 | Concept | RACI sederhana: siapa UI · data · API · QA |
| 25–40 | Practice | Pilih PRJ · bentuk tim · repo bersama |
| 40–55 | Clarify | ER + acceptance + milestone 2 minggu |
| 55–75 | Practice | Branch per anggota · issue/task list |
| 75–85 | Reflect | Risiko kolaborasi #1 |
| 85–90 | Exit | Link repo + assignee per task |

---

## 5. Lembar kerja / latihan

Kickoff **bukan** fokus kode project. Snippet **generic** + **spec PRJ** — proyeksi saja.

### Kerangka async UI (bukan solusi)

```javascript
// BUKAN solusi PRJ — scaffold kickoff OK
async function loadData() {
  setUI("loading");
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Gagal");
    const data = await res.json();
    setUI("success", transform(data));
  } catch (e) {
    setUI("error", "Coba lagi nanti");
  }
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Ini solusi PRJ atau pola? | Pola P08 — implementasi tim P14 |
| Tanpa catch — AC pass? | Fail error path — wajib P14 |

### Spec PRJ-02 persistensi

```text
"Refresh browser — data absensi masih ada di localStorage."
```

| Pertanyaan | Kunci |
|------------|-------|
| AC measurable? | [ ] Refresh → list sama · [ ] Git log 2+ author |
| Amanah data? | Data absensi kelas — scope sekolah, bukan export WA |

### Spec PRJ-04 portal kolaboratif

```text
"Setiap anggota bisa jelaskan bagiannya; kontribusi terlacak di Git."
```

| Pertanyaan | Kunci |
|------------|-------|
| Anti hero coding? | Issue + commit per anggota — bukan 1 orang 20 commit |
| Review sebelum merge? | P12 spiral — branch + merge guided P14 |

---

## 6. Exit ticket

1. Link repo + assignee per task
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 9. Materi pendamping BRG

- [BRG-04](../../../materi-ajar/jalur-kelanjutan/BRG-04_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
