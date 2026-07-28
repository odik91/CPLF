# Materi Guru Lengkap — XI-S4-P14

**Handout siswa (bagikan):** [XI-S4-P14_project-s4-build-1_siswa.md](./XI-S4-P14_project-s4-build-1_siswa.md)

**Modul:** [XI-S4-P14_project-s4-build-1.md](../../../kelas-xi/semester-4/XI-S4-P14_project-s4-build-1.md)

**Materi pendukung sumber:** [XI-S4-P14_project-s4-build-1.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P14_project-s4-build-1.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P14 — Project S4 Build 1

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P14 |
| Unit | XI4.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S4-* |

## Learning Transformation

Dari rencana → **integrasi** fetch/storage + UI.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · commit kemarin · fokus hari ini |
| 10–65 | Build | API atau localStorage + render + loading state |
| 65–75 | Git | Merge 1 branch · resolve conflict guided |
| 75–90 | Exit | Demo internal 1 menit per tim |

---

## Target Build 1

- [ ] Data masuk dari API **atau** persist lokal  
- [ ] Loading + 1 error path  
- [ ] ≥1 commit per anggota  

---

## Formatif

**ITR**, **TEC**

---

## Catatan Guru

Intervensi conflict Git — jangan ambil alih repo siswa.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P14 Project S4 Build (1)


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P14 |
| Modul pertemuan | [XI-S4-P14_project-s4-build-1](../../../kelas-xi/semester-4/XI-S4-P14_project-s4-build-1.md) |
| Unit | XI4.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S4-* (pilihan [P13 kickoff](../../../kelas-xi/semester-4/XI-S4-P13_project-s4-kickoff.md)) |
| Capability | ITR, TEC |
| Ada live code? | **Facilitator + pair debug Git — bukan build untuk siswa** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Format build week S4-1:** stand-up tim → build integrasi API/storage → merge 1 branch guided → demo internal 1 menit.
- **Perbedaan S3 vs S4 build:** artefak = **tim + data luar/persist** + Git history + loading/error UI.
- **Stand-up tim (3 pertanyaan):** kemarin (commit siapa?) / hari ini / blocker — max 2 menit per tim.
- **Target hari ini (modul):**
  - Data masuk dari API **atau** persist lokal
  - Loading + 1 error path
  - ≥1 commit per anggota
- **Merge guided:** guru facilitate conflict resolution — **jangan ambil alih repo siswa** (modul catatan).
- **Checkpoint questions guru:** fetch/persist jalan? loading/error terlihat? commit graph 2+ author?
- **Pair debug:** siswa A jelaskan gejala network/storage, siswa B baca console/Git — guru facilitate, bukan fix.
- **Scaffolding stations** (jika >40% stuck):
  - A: API kontrak + field map (P03)
  - B: fetch + try/catch + setUI loading/error (P04/P08)
  - C: localStorage load/save + refresh test (P07)
  - D: Git merge conflict — komunikasi sebelum edit (P12)
- **Empat opsi PRJ S4:** [PRJ-01 Dashboard API](../../../08-project/PRJ_XI_S4_01_Dashboard_API.md) · [PRJ-02 Absensi Persistent](../../../08-project/PRJ_XI_S4_02_Absensi_Persistent.md) · [PRJ-03 Inventaris](../../../08-project/PRJ_XI_S4_03_Inventaris_Perpus.md) · [PRJ-04 Portal](../../../08-project/PRJ_XI_S4_04_Portal_Pengumuman.md)

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Kickoff P13 — assignee issue kamu apa? | (siswa sebut task + branch) |
| P08 — user lihat apa saat fetch gagal? | Pesan error manusiawi — bukan blank/loading forever |
| P12 — conflict merge — langkah aman? | Pull · komunikasi tim · edit bersama · commit merge — bukan force push |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | 90 menit build milik tim — guru ≤15 menit front-of-class (stand-up + merge clinic singkat). |
| **Jangan takeover keyboard** | Di repo siswa: tanya, tunjuk DevTools/Network/Git graph — **jangan** ketik fix fetch/merge. |
| **Jangan bagikan solusi project** | Tidak paste repo lengkap, patch merge siap tempel, atau API key guru. |
| **Clarifying questions** | Ganti "begini fetch-nya" dengan "response status OK? field JSON mana? loading state dipanggil kapan?" |
| **Git conflict** | Coach oral — siswa resolve; guru **tidak** force push atau rewrite history tim. |
| **Hero coding** | Red flag — 1 commit author dominan; arahkan ke pair task dari issue P13. |
| **Amanah data** | Data teman/localStorage export — scope PRJ; tidak distribusi data pribadi kelas. |

### Bank pertanyaan klarifikasi (integrasi S4)

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Fetch loading terus" | "Network tab — status? catch block jalan? finally set loading false?" |
| "Refresh data hilang" | "Save ke localStorage kapan? load di init main?" |
| "Merge conflict bingung" | "File mana bentrok? Siapa owner layer UI vs data?" |
| "Boleh pak/bu merge-in" | "Tim A+B baca marker conflict — pilih bagian masing-masing." |
| "AI kasih fetch full" | "Jelaskan 3 field yang ditampilkan + error offline test." |

### Script coaching (bukan solving)

```text
"Gejala di layar/Network/console apa?" (OBS)
"Hipotesis: API, transform, atau persist?" (REA)
"Coba satu perubahan — commit ke branch sendiri." (ITR)
"Acceptance PRJ mana yang baru ✅?" (DoD)
"Commit graph — siapa author hari ini?" (atribusi)
```

### Kapan guru boleh sentuh keyboard?

**Hampir tidak pernah.** Pengecualian sempit: demo **generic** 2 baris di papan (bukan repo siswa), atau navigasi proyektor ke Git graph — bukan menulis solusi PRJ.

**Nilai MA:** amanah · gotong royong — shortcut merge/fix merusak TEC/K2; sabar — build lambat dengan reasoning lebih baik dari copas cepat.

---

## 4. Materi Inti

### Build week 1 S4 — integrasi data, bukan polish penuh

Fokus hari ini: **data masuk + loading/error + commit kolaboratif** — transform pipeline & polish = P15.

### Stand-up tim (0–10 menit)

- Guru catat **blocker berulang** (CORS, conflict, persist, loading stuck).
- Tanya cepat per tim: "Issue assignee kemarin commit? Branch siapa merge hari ini?"

### Build block (10–65 menit)

Prioritas per PRJ (contoh):

| PRJ | Fitur inti hari ini |
|-----|---------------------|
| PRJ-01 | fetch API + transform 3–5 field + loading/error UI |
| PRJ-02 | localStorage load/save absensi + refresh test |
| PRJ-03 | skema entitas + CRUD buku + persist |
| PRJ-04 | modul daftar pengumuman + persist + 1 branch merge |

Guru keliling — rotasi 3 menit/tim, **hanya clarifying questions**.
Stuck >15 menit: arahkan ke station A/B/C/D — bukan fix langsung.

**Offline test wajib PRJ-01:** matikan jaringan → error path — guru ingatkan, tidak fix untuk siswa.

### Git merge guided (65–75 menit)

- Setiap tim merge **1 branch** ke main (atau develop).
- Guru facilitate conflict — pertanyaan layer, bukan ketik resolution.
- Commit message bermakna — bukan "fix" tanpa konteks.

### Demo internal (75–90 menit)

1 menit per tim — happy path + sebut 1 blocker P15.
Bukan presentasi formal — warm-up P17.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Papan Debug Sheet + Git graph contoh (generic).
- Timer build 55 menit visible.
- **Tidak** menyiapkan solusi PRJ di laptop guru.
- DevTools Network + Application tab siap (facilitate, bukan fix).

### Skrip hari ini

```text
[0–10] Stand-up tim — blocker + commit kemarin
[10–65] BUILD — API atau localStorage + loading/error
        Rotasi berkeliling: clarifying questions only
        Stuck >15 menit: station A/B/C/D
[65–75] Merge 1 branch — conflict guided (siswa resolve)
[75–90] Demo internal 1 menit/tim + exit blocker P15
```

### Contoh interaksi merge conflict

```text
Tim: "Conflict di app.js pak — bingung."
Guru: "Marker <<<< — bagian A dari branch siapa? Bagian B?"
(Tim identifikasi UI vs fetch)
Guru: "Owner UI pilih markup; owner data pilih logic — lalu git add."
Guru: "Commit message — merge feature apa?"
```

**Dilarang:** guru `git merge` + resolve conflict di laptop tim; force push main.

---

## 6. Latihan Membaca Kode

Untuk **pair debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
async function loadWeather() {
  document.getElementById("out").textContent = "Loading...";
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("out").textContent = data.temp;
}
// Uji: offline / 404
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala offline? | Loading forever atau uncaught error — no error UI |
| AC PRJ-01 pass? | Fail — perlu try/catch + pesan manusiawi |
| Fix minimal (bukan guru)? | catch + set error text + finally clear loading |

```javascript
function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
function loadItems() {
  return JSON.parse(localStorage.getItem("items"));
}
// init: render(loadItems()) — lupa di main?
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala refresh? | Data hilang — loadItems tidak dipanggil saat init |
| Layer? | persist P07 — wiring main.js |

**Etika:** jika pakai kode tim volunteer, anonimkan — fokus proses, bukan malu.

---

## 7. Praktik Mandiri Siswa

1. **Build 55 menit** — iterasi terhadap issue P13 + acceptance.
2. **Integrasi** — API **atau** localStorage + loading + 1 error path.
3. **≥1 commit per anggota** — message bermakna.
4. **Merge 1 branch** — conflict resolved oleh tim.
5. **Debug Sheet** — minimal 1 entry jika ada error hari ini.
6. **Demo internal 1 menit** — gejala blocker P15.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| "Pak/bu merge-in conflict-nya" | Tolak — coach tim resolve sendiri |
| Satu anggota semua commit | Redirect ke issue assignee P13 |
| Loading forever tanpa error | Ingatkan P08 — offline test |
| API key di repo | Wajib .gitignore + env — amanah data |
| Guru terlalu lama di 1 tim | "Saya kembali 5 menit — coba hipotesis dulu" |
| Dump JSON mentah ke UI | Ingatkan transform DoD PRJ-01 |
| Force push main | Larangan keras — edukasi P12 |

---

## 9. Rujukan

- Modul pertemuan: [XI-S4-P14](../../../kelas-xi/semester-4/XI-S4-P14_project-s4-build-1.md)
- Kickoff: [P13 materi pendukung](./XI-S4-P13_project-s4-kickoff.md)
- PRJ bank: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-4-data-async-kolaborasi)
- Fetch: [XI-S4-P04](../../../kelas-xi/semester-4/XI-S4-P04_fetch-json.md)
- Persist/error: [XI-S4-P07](../../../kelas-xi/semester-4/XI-S4-P07_localstorage-crud.md) · [P08](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)
- Git: [XI-S4-P12](../../../kelas-xi/semester-4/XI-S4-P12_branch-kolaborasi.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Stand-up tim selesai — blocker tercatat
- [ ] Build block ≥55 menit — guru facilitator, bukan coder
- [ ] **Zero** takeover repo / resolve conflict untuk siswa
- [ ] **Zero** distribusi solusi project (file/WA/API key)
- [ ] Data API **atau** persist terbukti + loading/error UI
- [ ] ≥1 commit per anggota (follow up offline jika 0)
- [ ] Merge 1 branch per tim attempted
- [ ] Demo internal 1 menit selesai

[← Indeks S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
