# Materi Guru Lengkap — XI-S4-P13

**Handout siswa (bagikan):** [XI-S4-P13_project-s4-kickoff_siswa.md](./XI-S4-P13_project-s4-kickoff_siswa.md)

**Modul:** [XI-S4-P13_project-s4-kickoff.md](../../../kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md)

**Materi pendukung sumber:** [XI-S4-P13_project-s4-kickoff.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P13 — Project S4 Kickoff (Tim)

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P13 |
| Unit | XI4.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | [PRJ-XI-S4-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-4-data-async-kolaborasi) |

## Learning Transformation

Dari solo builder → **tim** dengan kontrak API/data/Git.

---

## Timeline (90 menit)

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

## Checklist

- [ ] Tim 2–3 (kecuali sekolah wajib solo + peer)  
- [ ] Skema data / API plan  
- [ ] ≥1 issue per anggota  
- [ ] Rotasi varian PRJ antar kelas  

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

PRJ-04 Portal wajib multi-kontributor; lainnya fleksibel.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P13 Project S4 Kickoff (Tim)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P13 |
| Modul pertemuan | [XI-S4-P13_project-s4-kickoff.md](../../../kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md) |
| Unit | XI4.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XI-S4-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-4-data-async-kolaborasi) |
| Capability | COM, REA |
| Ada live code? | **Facilitator — repo kosong + RACI + issue list; bukan demo project lengkap** |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P12 — mengapa branch, bukan edit langsung main?" | Hindari overwrite · atribusi · review sebelum merge |
| "P08 — loading vs error state bedanya?" | Loading = menunggu async; error = gagal + pesan manusiawi |
| "P10 — entitas vs atribut dalam ER PRJ kamu?" | (siswa sebut Buku/Peminjaman atau Pengumuman + field id) |
| "Bed latihan P07 vs project S4?" | Project = tim + API/storage + Git + DoD + peer + presentasi |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | Tidak coding project untuk siswa; tidak demo PRJ selesai dengan fetch + persist jalan |
| **Jangan takeover keyboard** | Repo milik tim — guru jari di udara; tidak push ke repo siswa |
| **Jangan bagikan solusi project** | Tidak repo/template lengkap, ZIP siap jalan, paste WA solusi PRJ + `.env` |
| **Clarifying questions, bukan jawaban** | "Endpoint apa?" "Siapa owner UI vs data?" "AC #2 — bagaimana uji offline?" |
| **Live modeling** | Live = **RACI + issue list + branch naming** — bukan dashboard cuaca lengkap |
| **Recall** | Hubungkan P12 branch + P08 error state + P10 ER |
| **No full solution code** | Dilarang: portal pengumuman CRUD lengkap di proyektor 20+ menit |
| **No hero coding** | Satu anggota tidak boleh rencanakan "saya kerjakan semua" — issue per orang wajib |

### Bank pertanyaan klarifikasi (ganti "memberi kode")

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Gimana struktur API-nya?" | "Field PRJ bank kamu apa? Dokumentasi endpoint di README?" |
| "Fetch stuck loading forever" | "Error path P08 — user lihat apa jika gagal?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjuk RACI + issue list tim kamu." |
| "AI kasih kode full fetch" | "Jelaskan response JSON + field yang dipilih; cocok DoD & AI log?" |
| "Satu orang aja yang coding" | "PRJ-04 wajib kontribusi terlacak — issue assignee siapa?" |
| "Pakai data teman di localStorage" | "Amanah data — izin + scope PRJ; jangan export data pribadi teman." |

**Nilai MA:** amanah · gotong royong · atribusi jujur — shortcut merusak REA/COM/K2; kickoff lambat > copas cepat.

---

## Materi Inti

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

## Alur Live Coding / Live Modeling

### Persiapan

- Slide/papan: 4 opsi PRJ (masalah & DoD ringkas — **tanpa demo kode jadi**)
- Rubrik project 1 halaman — sorot kolaborasi + atribusi
- **Tidak ada** starter project siap jalan di laptop siswa
- Koordinasi varian antar kelas paralel
- Template RACI + issue list di papan

### Skrip facilitator

```text
[LANGKAH 1 — Opening 0–10 menit]
Presentasi 4 PRJ S4 — masalah, user, requirement API/storage/Git.
TANPA demo web selesai di proyektor.
Tanya: "PRJ mana dekat latihan P04/P07 kamu?"
Recall P12 branch + P08 loading/error.

[LANGKAH 2 — RACI + anti hero coding 10–25 menit]
Jelaskan: UI · data · API · QA — rotasi OK PRJ-04.
Contoh: "Kenapa fetch terpisah dari render?" (bukan hanya "jalan")
Tekankan min 2 kontributor · atribusi README · amanah data teman.

[LANGKAH 3 — Pilih PRJ + bentuk tim 25–40 menit]
Siswa pilih PRJ + varian + assign RACI.
Guru keliling — clarifying questions only.
PRJ-04: pastikan tim 3–4 terbentuk.

[LANGKAH 4 — ER + acceptance + milestone 40–55 menit]
Polish AC — guru 1 putaran approve/potong scope.
ER/API plan: entitas, id, relasi (P09/P10).
Milestone 2 minggu: P14 integrasi · P15 polish · P16 review · P17 presentasi.

[LANGKAH 5 — Repo + branch + issue 55–75 menit]
Tim buat:
  repo bersama (GitHub/GitLab/sekolah)
  README skeleton + atribusi
  docs/spec.md + docs/raci.md
  issue/task ≥1 per anggota
  branch feature/* per anggota
Guru cek: **tidak** ada logic PRJ lengkap dari guru.
Live modeling OK: ketik **README + issue title** — bukan fetch logic.

[LANGKAH 6 — Risiko kolaborasi 75–85 menit]
Tiap tim tulis risiko #1 (conflict, hero coding, data teman, API key).
Contoh: "Merge conflict di index.html — komunikasi sebelum push."

[LANGKAH 7 — Exit 85–90 menit]
Link repo + assignee per task + reminder no solution handout.
```

**Dilarang:** guru live-code PRJ-01 dashboard cuaca lengkap "biar tim paham fetch."

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. **Repo bersama + README atribusi**
2. **RACI + docs/spec.md + ER/API plan**
3. **Acceptance final** — guru approve
4. **Issue list** — ≥1 per anggota + assignee
5. **Branch feature/* per anggota**
6. **Risiko kolaborasi #1** — tercatat
7. **AI log** jika policy sekolah wajibkan

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Minta "template project pak/bu" | Tolak — template **repo kosong + issue**, bukan logic |
| Satu orang rencana kerjakan semua | Wajibkan issue per anggota — PRJ-04 especially |
| Langsung coding tanpa RACI | Stop lembut — "Assignee issue #2 siapa?" |
| Copy API key teman / data pribadi | Ingatkan amanah data — scope PRJ + izin |
| Scope = full portal sekolah | Potong ke DoD bank PRJ |
| Guru tempted demo fetch cepat | Etika facilitator — tanya endpoint & field, jangan ketik solusi |
| Skip README atribusi | Wajibkan artefak kolaborasi sebelum P14 |
| Push langsung main tanpa branch | Ingatkan P12 — branch per fitur |

---

## Rujukan

- Modul: [XI-S4-P13](../../../kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md)
- PRJ-01: [Dashboard API](../../../08-project/PRJ_XI_S4_01_Dashboard_API.md)
- PRJ-02: [Absensi Persistent](../../../08-project/PRJ_XI_S4_02_Absensi_Persistent.md)
- PRJ-03: [Inventaris Perpus](../../../08-project/PRJ_XI_S4_03_Inventaris_Perpus.md)
- PRJ-04: [Portal Pengumuman](../../../08-project/PRJ_XI_S4_04_Portal_Pengumuman.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Git branch: [P12 Branch Kolaborasi](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)
- Error/loading: [P08 Persistensi](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)
- ER: [P10 Skema ER](../../../kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Setiap tim punya PRJ + varian + spec + acceptance approved
- [ ] Repo + README atribusi + RACI + issue ≥1 per anggota
- [ ] Branch awal per anggota — bukan semua push main
- [ ] **Tidak** ada solusi project penuh dibagikan
- [ ] **Tidak** takeover keyboard / repo siswa
- [ ] Risiko kolaborasi #1 tercatat
- [ ] Target P14: API/storage + loading + commit per anggota
- [ ] Amanah data diingatkan — no secret keys in repo
- [ ] Peer P16 & Git checkpoint diingatkan

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
- [BRG-04](../../../materi-ajar/jalur-kelanjutan/BRG-04_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
