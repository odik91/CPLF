# Materi Guru Lengkap — XII-S6-P10
**Modul:** [XII-S6-P10_project-nilai-build-2.md](../../kelas-xii/semester-6/XII-S6-P10_project-nilai-build-2.md)
**Materi pendukung sumber:** [XII-S6-P10_project-nilai-build-2.md](../../materi-pendukung/materi-pendukung/kelas-xii/semester-6/XII-S6-P10_project-nilai-build-2.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P10 — Project Nilai Build 2

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P10 |
| Unit | XII6.6 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S6-* |

## Learning Transformation

Dari skeleton → **integrasi** model + UX + persistensi jika perlu.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Fokus hari ini: 2 acceptance prioritas |
| 10–65 | Build | Integrasi prediksi · loading · konfirmasi user |
| 65–75 | Test | Pengguna/uji coba 5 menit — catat feedback |
| 75–85 | Fix | 1 isu UX dari feedback |
| 85–90 | Exit | Screenshot + changelog |

---

## Integration Checklist

- [ ] Loading/error state  
- [ ] User confirm sebelum simpan  
- [ ] localStorage/API jika spec minta  
- [ ] Log klarifikasi AI (jika dipakai)  

---

## Formatif

**ITR**, **OBS**

---

## Catatan Guru

Prioritaskan alur pengguna over akurasi model.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P10 Project Nilai Build 2

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) · [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P10 |
| Modul pertemuan | [XII-S6-P10_project-nilai-build-2.md](../../../kelas-xii/semester-6/XII-S6-P10_project-nilai-build-2.md) |
| Semester | 6 · Pertemuan 10/18 |
| Unit | XII6.6 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-01 … 04](../../../08-project/08_Project_Bank_Index.md#kelas-xii--semester-6-nilai--etika) |
| Capability | ITR, OBS |
| Formatif | ITR, OBS |
| Ada live code? | **Facilitator — siswa build; guru UX clinic** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — TF.js predict pipeline | → [TF.js — Webcam classifier](https://www.tensorflow.org/js/tutorials/transfer/learn_more) |
| 2 | **Wajib** — Tensor disposal | → [Tensor disposal](https://www.tensorflow.org/js/guide/tensors_operations#memory) |
| 3 | Teachable Machine export | → [TM — Export formats](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| 4 | MobileNet load | → [tfjs-models mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) |
| 5 | getUserMedia best practices | → [MDN — getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) |
| 6 | localStorage patterns | → [MDN — localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| 7 | Loading UX (web.dev) | → [web.dev — Loading patterns](https://web.dev/patterns/web-vitals-patterns/) |
| 8 | TF.js API | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 9 | Rubrik etika E1 preview | → [09_Rubrik_Etika_AI — E1](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 10 | Panduan CV S6 | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

---

## Pengetahuan Guru

### Fokus Build 2 — integrasi + UX pengguna

| Deliverable P10 | Bukan hari ini |
|-----------------|----------------|
| Prediksi sungguhan terintegrasi UI | Demo gagal final P11 |
| Loading / error / low-confidence state | Dokumen batasan final |
| Konfirmasi user sebelum simpan | Presentasi P14 |
| localStorage/API jika spec minta | Polish visual final |
| Log klarifikasi AI (jika dipakai) | Peer review P12 |
| 5 menit uji pengguna + 1 fix UX | |

### Transformasi

**Dari:** Skeleton + mock  
**Ke:** Alur pengguna **utuh** — model salah ditangani dengan grace.

### Prioritas guru hari ini

> **Alur pengguna > akurasi model**

Tim yang obses akurasi tapi tanpa loading/error → redirect.

### Integration checklist (modul)

- [ ] Loading/error state
- [ ] User confirm sebelum simpan
- [ ] localStorage/API jika spec minta
- [ ] Log klarifikasi AI (jika dipakai)

### Pola UX wajib capstone

| State | UI minimum |
|-------|------------|
| Loading | "Memproses…" — disable double-click |
| Model error | Pesan + tombol fallback manual |
| Low confidence | "Model ragu — konfirmasi manual" |
| Success | Tampil label + confidence + **disclaimer** |
| Before save | "Yakin simpan?" — PRJ absensi/asisten |

### Threshold confidence (clarifying, bukan angka magis)

Guru tanya: "Di bawah confidence berapa pengguna **tidak** boleh auto-simpan?"

Contoh MA: 0.7 gesture · 0.6 citra — **tim dokumentasikan alasan**.

### Uji pengguna 5 menit (menit 65–75)

- Pengguna kickoff atau teman kelas **bukan** developer tim
- Catat: bingung di langkah? · skip konfirmasi? · percaya label salah?
- **1 fix UX** wajib sebelum exit — bukan fix model

### Log klarifikasi AI (P07 spiral)

Jika tim pakai AI hari ini → tambah baris di `logs/ai-klarifikasi.md`:

```text
Tanggal · Tool · Pertanyaan · Output · Verifikasi · Keputusan akhir
```

E3 level 3 = kebiasaan — cek saat keliling.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| P09: fallback jalan? | Harus tetap jalan setelah integrasi |
| P05: AI sebagai fitur? | Bukan satu-satunya path |
| P02: demo gagal? | Rencana P11 — catat skenario hari ini |
| P08: acceptance prioritas? | 2 AC fokus stand-up hari ini |

---

## Etika Penyampaian

| Aturan | Build 2 |
|--------|---------|
| **Facilitator** | Stand-up 10 menit — siswa build 55 menit |
| **No full solution** | UX pattern di papan — bukan file tim |
| **Prioritas UX** | Tahan tim polish CSS sebelum error state |
| **Uji pengguna** | Siswa fasilitasi — guru observe |
| **Konfirmasi sebelum simpan** | Wajib PRJ data pribadi/absensi |
| **No overclaim UI** | Tolak teks "AI selalu benar" di footer |

### Bank pertanyaan

| Siswa | Guru tanya |
|-------|------------|
| "Akurasi dulu pak/bu" | "Pengguna lihat apa 3 detik pertama?" |
| "Loading skip — cepat kok" | "Model 404 / lambat — blank screen?" |
| "Auto-save biar praktis" | "Salah deteksi — data salah permanen?" |
| "Fix modelnya" | "UX mitigasi dulu — threshold + confirm" |

---

## Materi Inti

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–10 | Stand-up | 2 acceptance prioritas hari ini |
| 10–65 | Build | Integrasi prediksi · loading · confirm |
| 65–75 | Test | Pengguna 5 menit — catat feedback |
| 75–85 | Fix | 1 isu UX dari feedback |
| 85–90 | Exit | Screenshot + changelog |

### Changelog format (exit)

```markdown
## P10
- Uji [nama pengguna]: bingung di [langkah]
- Fix: [tombol / pesan / threshold]
- Screenshot: assets/p10-ux-fix.png
```

### Contoh loading + error (generic papan)

```javascript
statusEl.textContent = 'Memproses…';
try {
  const pred = await model.predict(input);
  statusEl.textContent = '';
  // show label + confidence
} catch (err) {
  statusEl.textContent = 'Model error — gunakan input manual';
  manualPanel.hidden = false;
}
```

### Low confidence pattern

```javascript
if (confidence < THRESHOLD) {
  showMessage('Model ragu — silakan konfirmasi manual');
  requireConfirmBeforeSave();
}
```

---

## Alur Live Coding / Facilitator

```text
[LANGKAH 1 — Stand-up 0–10 menit]
Setiap tim sebut 2 AC prioritas P10.
Guru: "Yang belum loading/error — itu prioritas #1."

[LANGKAH 2 — Build 10–65 menit]
Keliling — coaching UX questions.
Timer menit 50: "Sudah uji deny camera / low confidence?"

[LANGKAH 3 — Uji pengguna 65–75 menit]
5 menit per tim — observer catat 1 pain point.
Guru: "Jangan jelaskan ke pengguna — biarkan explore."

[LANGKAH 4 — Fix 75–85 menit]
Wajib 1 UX fix — commit + changelog.
Bukan ganti warna saja — harus sentuh alur.

[LANGKAH 5 — Exit 85–90 menit]
Screenshot before/after UX fix.
```

---

## Latihan Membaca Kode

### Snippet A — predict tanpa dispose

```javascript
async function loop() {
  const tensor = tf.browser.fromPixels(video);
  const pred = await model.predict(tensor);
  requestAnimationFrame(loop);  // tensor never disposed
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Gejala? | Browser lag / crash |
| Fix? | `tensor.dispose()` after predict |
| Aspek? | TEC, OBS |

### Snippet B — auto-save tanpa confirm

```javascript
if (label === 'hadir') {
  saveAttendance(studentId);  // no confirm
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Risiko? | Salah deteksi → data salah |
| PRJ-01? | Violation — confirm wajib |
| E4? | Dampak pengguna nyata |

### Snippet C — footer overclaim

```html
<footer>Diagnosis AI 100% akurat — trusted by ML</footer>
```

| Pertanyaan | Kunci |
|------------|-------|
| E1? | Level 1 overclaim |
| Fix? | Disclaimer + link batasan model |

---

## Praktik Mandiri

Tim **wajib**:

1. Integrasi prediksi + loading/error/low-confidence.
2. Konfirmasi sebelum simpan (jika relevan PRJ).
3. Uji pengguna 5 menit + catatan feedback.
4. 1 fix UX + screenshot + changelog commit.
5. Update log AI jika pakai Copilot/ChatGPT hari ini.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| Hanya happy path | Wajib test error/low confidence |
| Uji coba ke developer tim | Ganti pengguna non-dev |
| Fix model bukan UX | Redirect — P10 scope UX |
| Skip changelog | Gate P12 — bukti ITR |
| Footer "AI trusted" | E1 intervensi — hapus |
| Memory leak webcam | Clinic dispose pattern |

---

## Rujukan

- Modul: [XII-S6-P10](../../../kelas-xii/semester-6/XII-S6-P10_project-nilai-build-2.md)
- Sebelumnya: [P09 Build 1](./XII-S6-P09_project-nilai-build-1.md)
- Lanjutan: [P11 Demo Gagal](./XII-S6-P11_project-nilai-build-3.md)
- Rubrik: [Etika E1](../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Checklist Exit

- [ ] Loading + error + low-confidence state ada
- [ ] Konfirmasi sebelum simpan (jika relevan)
- [ ] Uji pengguna 5 menit terdokumentasi
- [ ] 1 fix UX + changelog + screenshot
- [ ] Log AI updated (jika dipakai)
- [ ] Tidak ada overclaim UI
- [ ] Fallback P09 masih jalan

[← Indeks materi XII-S6](./XII-S6_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
