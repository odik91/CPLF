# Handout Siswa — XII-S6-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P09_project-nilai-build-1.md](../../../kelas-xii/semester-6/XII-S6-P09_project-nilai-build-1.md)

---

## 1. Tujuan pembelajaran

Dari rencana → **bukti** wawancara pengguna + fondasi teknis.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · etika checkpoint (data apa dikumpulkan?) |
| 10–20 | Clarify | Guru: 2 blocker umum saja |
| 20–65 | Build | UI alur utama + model/transfer learning skeleton |
| 65–75 | Wawancara | Update catatan pengguna — validasi 1 acceptance |
| 75–85 | Git | Commit per anggota · README run |
| 85–90 | Exit | % acceptance honest |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. % acceptance honest
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS An-Nisa 4:58

**Kait di kelas hari ini:** AI/CV moderat, jujur, dan manfaat komunitas MA.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
