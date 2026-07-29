# Materi Guru Lengkap — XII-S6-P09

**Handout siswa (bagikan):** [XII-S6-P09_project-nilai-build-1_siswa.md](./XII-S6-P09_project-nilai-build-1_siswa.md)

**Modul:** [XII-S6-P09_project-nilai-build-1.md](../../../kelas-xii/semester-6/XII-S6-P09_project-nilai-build-1.md)

**Materi pendukung sumber:** [XII-S6-P09_project-nilai-build-1.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P09_project-nilai-build-1.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P09 — Project Nilai Build 1

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P09 |
| Unit | XII6.6 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S6-* |

## Learning Transformation

Dari rencana → **bukti** wawancara pengguna + fondasi teknis.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · etika checkpoint (data apa dikumpulkan?) |
| 10–20 | Clarify | Guru: 2 blocker umum saja |
| 20–65 | Build | UI alur utama + model/transfer learning skeleton |
| 65–75 | Wawancara | Update catatan pengguna — validasi 1 acceptance |
| 75–85 | Git | Commit per anggota · README run |
| 85–90 | Exit | % acceptance honest |

---

## Target Build 1

- [ ] Alur non-AI jalan (fallback)  
- [ ] Model loaded atau mock prediksi  
- [ ] ≥1 commit per anggota  
- [ ] Etika draft di repo  

---

## Formatif

**ITR**, **TEC**

---

## Catatan Guru

Intervensi via pertanyaan: “Apa yang pengguna lihat saat model salah?”


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P09 Project Nilai Build 1

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) · [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P09 |
| Modul pertemuan | [XII-S6-P09_project-nilai-build-1.md](../../../kelas-xii/semester-6/XII-S6-P09_project-nilai-build-1.md) |
| Semester | 6 · Pertemuan 9/18 |
| Unit | XII6.6 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |
| Capability | ITR, TEC |
| Formatif | ITR, TEC |
| Ada live code? | **Facilitator + clinic generic — bukan build capstone untuk siswa** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — getUserMedia | → [MDN — getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
| 2 | **Wajib** — fromPixels | → [TF.js — browser.fromPixels](https://js.tensorflow.org/api/latest/#browser.fromPixels) |
| 3 | **Wajib** — Webcam transfer tutorial | → [TF.js — Webcam classifier](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 4 | Teachable Machine | → [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| 5 | TM export TF.js | → [TM — Export formats](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| 6 | MobileNet | → [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| 7 | Tensor disposal | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 8 | TF.js API | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 9 | QR generation (PRJ-01) | → [MDN — Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) |
| 10 | localStorage | → [MDN — Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| 11 | Panduan CV S6 | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| 12 | Rubrik etika E2 | → [09_Rubrik_Etika_AI — E2](../../../09-rubrik/09_Rubrik_Etika_AI.md) |

---

## Pengetahuan Guru

### Fokus Build 1 — fondasi + bukti, belum polish

| Deliverable P09 | Bukan hari ini |
|-----------------|---------------|
| Alur UI utama (wireframe → klik jalan) | Demo gagal final P11 |
| Fallback non-AI jalan | Integrasi penuh + persistensi P10 |
| Model loaded **atau** mock prediksi | Akurasi tinggi / UI polished |
| `etika.md` draft di repo | Dokumen batasan final |
| ≥1 commit per anggota | Peer review P12 |
| Update wawancara — validasi 1 AC | Presentasi P14 |

### Format build week capstone

```text
Stand-up (10) → clarifying 2 blocker umum (10) → build (45) →
wawancara update (10) → git (10) → exit (5)
```

**Stand-up 3 pertanyaan:** kemarin / hari ini / blocker.

### Checklist teknis per PRJ (Build 1)

| PRJ | Build 1 minimum | Mock OK? |
|-----|-----------------|----------|
| **01** Absensi | QR scan **atau** form manual jalan | Prediksi AI mock label "hadir?" |
| **02** Gesture | Webcam tampil + placeholder label | Random/mock confidence |
| **03** Citra | Upload/kamera → tampil preview | Mock label + confidence 0.5 |
| **04** Asisten | KB JSON load + 1 jawaban keyword | LLM opsional — rule dulu |

### Pipeline CV minimal (ingatkan, jangan coding guru)

```text
Webcam → canvas → fromPixels → (resize) → predict → label + confidence → UI
         ↓ deny permission
    Fallback manual (WAJIB P09)
```

→ referensi: [TF.js webcam tutorial](https://www.tensorflow.org/js/tutorials/transfer/learn_more)

### Etika checkpoint (menit 0–10 stand-up)

Guru tanya setiap tim:

1. "Data apa yang **dikumpulkan** hari ini?"
2. "Perlu semua? Bisa minimasi?"
3. "`etika.md` — field retention & akses sudah?"

**Gate:** tim tanpa `etika.md` di repo → build pause sampai draft push.

### Wawancara update (menit 65–75)

Validasi **1 acceptance** dengan pengguna atau peer pengguna:

- "Apakah alur ini masuk akal?"
- "Tombol konfirmasi sebelum simpan — perlu?"
- Catat 1 kutipan → README atau `wawancara.md`

### Intervensi guru — pertanyaan wajib (bukan fix kode)

1. "Apa yang pengguna **lihat** saat model salah?"
2. "Fallback manual — sudah bisa diklik?"
3. "Izin kamera ditolak — apa yang terjadi?"
4. "Mock vs model sungguhan — rencana switch P10?"
5. "Commit siapa — semua anggota sudah?"

### Debug clinic (2 blocker umum — menit 10–20)

Pilih **max 2** isu recurring kelas — TTS, siswa fix:

- `video.srcObject` vs `src`
- TM model path 404 — folder structure
- `fromPixels` tanpa dispose → memory warning
- QR library CDN blocked — fallback manual

**Jangan** fix project tim individual di depan kelas.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| P08: acceptance #1 tim kamu? | Siswa sebut measurable |
| P08: pengguna wawancara siapa? | Nama spesifik |
| P06: data minimization? | Hanya yang perlu — bukan "collect all" |
| P05: loading/error state? | Rencanakan — implement P10 |
| P04: TM export files? | model.json + metadata + labels |

---

## Etika Penyampaian

| Aturan | Build 1 |
|--------|---------|
| **Facilitator** | Guru ≤10 menit front — 2 blocker clinic |
| **No takeover keyboard** | Tanya — siswa ketik |
| **No solusi capstone** | Tidak paste pipeline TM lengkap WA |
| **No full solution** | Generic di papan: `srcObject` pattern — siswa adaptasi |
| **Etika before build** | Checkpoint stand-up — pause jika etika kosong |
| **Wawancara pengguna** | Update 1 AC — siswa yang validasi |
| **Tim 2–4** | ≥1 commit per anggota — cek Git log |
| **Clarifying Q** | Ganti "begini kodenya" |

### Script coaching

```text
"Pengguna lihat apa saat confidence rendah?" (OBS)
"Fallback manual — acceptance #? tercentang?" (REA)
"etika.md — data apa disimpan hari ini?" (E2)
"Blocker P10 — model atau UX?" (ITR)
```

---

## Materi Inti

### Transformasi

**Dari:** Rencana kickoff  
**Ke:** Bukti wawancara + fondasi teknis + fallback jalan.

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–10 | Stand-up | Blocker · etika checkpoint data |
| 10–20 | Clarify | 2 blocker umum — clinic |
| 20–65 | Build | UI alur + model/mock skeleton |
| 65–75 | Wawancara | Update catatan — validasi 1 AC |
| 75–85 | Git | Commit per anggota · README run |
| 85–90 | Exit | % acceptance honest |

### Target Build 1 (modul)

- [ ] Alur non-AI jalan (fallback)
- [ ] Model loaded atau mock prediksi
- [ ] ≥1 commit per anggota
- [ ] Etika draft di repo

### Skeleton generic webcam (boleh di papan — bukan PRJ jadi)

```html
<video id="webcam" autoplay playsinline></video>
<button id="manual">Input manual (fallback)</button>
<p id="label">—</p>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script>
  // TODO: getUserMedia → video.srcObject
  // TODO: load TM model OR mock predict
  // TODO: on deny → show manual button
</script>
```

### README run (minimal)

```markdown
## Run
Buka index.html di localhost / Live Server.

## Pengguna
[Nama] — [kutipan wawancara 1 baris]

## Acceptance progress
- [x] AC1: ...
- [ ] AC2: ...
```

---

## Alur Live Coding / Facilitator

```text
[LANGKAH 1 — Stand-up 0–10 menit]
Setiap tim: blocker + data collection today.
Guru: tim tanpa etika.md → pause build.

[LANGKAH 2 — Clinic 10–20 menit]
2 blocker paling umum — anonymous demo volunteer.
TTS error — siswa suggest fix — guru tidak ketik di laptop siswa.

[LANGKAH 3 — Build 20–65 menit]
Keliling coaching questions — timer 45 menit.
Prioritas: fallback > model accuracy.

[LANGKAH 4 — Wawancara 65–75 menit]
1 tim presentasi 30 detik: "AC mana divalidasi — jawaban pengguna?"
Siswa lain catat format.

[LANGKAH 5 — Git 75–85 menit]
Cek log: ≥1 commit per anggota — assign jika belum.
README run instruction.

[LANGKAH 6 — Exit 85–90 menit]
Tim lapor % acceptance honest — jangan inflate.
Catat blocker untuk P10.
```

---

## Latihan Membaca Kode

### Snippet A — webcam tanpa fallback

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// ... predict only — no catch, no manual path
```

| Pertanyaan | Kunci |
|------------|-------|
| P05 spiral? | Violation — fallback wajib |
| P09 lulus? | **Tidak** — deny permission = blank |
| Fix scope? | catch + show manual form |

### Snippet B — TM load tanpa error UI

```javascript
const model = await tf.loadLayersModel('model/model.json');
// no try/catch — user sees white screen if 404
```

| Pertanyaan | Kunci |
|------------|-------|
| UX? | Loading/error state missing (P10) |
| Build 1? | try/catch + mock fallback OK |

### Snippet C — etika vs kode

```javascript
localStorage.setItem('face_embedding', JSON.stringify(tensorData));
// etika.md says "no biometric storage"
```

| Pertanyaan | Kunci |
|------------|-------|
| E2? | Kontradiksi — level 1–2 |
| Guru action? | Pause — revisi etika atau hapus storage |

---

## Praktik Mandiri

Tim **wajib**:

1. Fallback non-AI dapat diuji.
2. Model load **atau** mock dengan label + confidence.
3. `etika.md` tetap di repo — update jika data berubah.
4. Wawancara update — 1 AC divalidasi + catatan.
5. ≥1 commit per anggota + README run.

**Guru:** `% acceptance honest` — spot 2 tim inflate.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| UI polish, fallback belum | Redirect priority P09 |
| Model akurat, etika kosong | Gate — pause build |
| Satu orang commit semua | Assign task split |
| Face data tanpa rencana | E2 checkpoint — QR alternative |
| Guru fix di laptop tim | Coaching questions only |
| Skip wawancara update | AC tidak teruji pengguna |

---

## Rujukan

- Modul: [XII-S6-P09](../../../kelas-xii/semester-6/XII-S6-P09_project-nilai-build-1.md)
- Sebelumnya: [P08 Kickoff](./XII-S6-P08_project-nilai-kickoff.md)
- Lanjutan: [P10 Build 2](./XII-S6-P10_project-nilai-build-2.md)
- PRJ: [01](../../../08-project/PRJ_XII_S6_01_AI_Absensi.md) · [02](../../../08-project/PRJ_XII_S6_02_Gesture.md) · [03](../../../08-project/PRJ_XII_S6_03_Klasifikasi_Citra.md) · [04](../../../08-project/PRJ_XII_S6_04_Asisten_Madrasah.md)

---

## Checklist Exit

- [ ] Fallback non-AI dapat diuji
- [ ] Model/mock prediksi ada
- [ ] `etika.md` di repo — konsisten dengan kode
- [ ] Wawancara update + 1 AC divalidasi
- [ ] ≥1 commit per anggota
- [ ] README run
- [ ] % acceptance honest dilaporkan
- [ ] Tidak ada solusi penuh dari guru

[← Indeks materi XII-S6](./XII-S6_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Allah · Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS An-Nisa 4:58

**Kait di kelas hari ini:** AI/CV moderat, jujur, dan manfaat komunitas MA.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
