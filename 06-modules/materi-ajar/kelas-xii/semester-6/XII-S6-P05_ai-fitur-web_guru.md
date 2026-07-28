# Materi Guru Lengkap — XII-S6-P05

**Handout siswa (bagikan):** [XII-S6-P05_ai-fitur-web_siswa.md](./XII-S6-P05_ai-fitur-web_siswa.md)

**Modul:** [XII-S6-P05_ai-fitur-web.md](../../../kelas-xii/semester-6/XII-S6-P05_ai-fitur-web.md)

**Materi pendukung sumber:** [XII-S6-P05_ai-fitur-web.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P05_ai-fitur-web.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P05 — AI sebagai Fitur Web

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P05 |
| Unit | XII6.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CXII-T3, CXII-K1 |
| MM | MM-23 |

## Learning Transformation

Dari model terpisah → **fitur** dalam alur pengguna aplikasi nyata.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Spiral XI: IPO + user flow — tambah kotak “AI” |
| 5–15 | Experience | App bank: fitur fingerprint — opsional atau wajib? |
| 15–25 | Trap | Model jalan di console ≠ produk |
| 25–35 | Clarify | Onboarding · loading · error · manual override |
| 35–45 | Concept | AI feature flag · fallback non-AI |
| 45–70 | Practice | Wireframe + implementasi: tombol → prediksi → konfirmasi user |
| 70–85 | Peer | Walkthrough 2 menit — apakah AI mengganggu alur? |
| 85–90 | Exit | Screenshot alur 4 layar |

---

## Practice Checklist

- [ ] User tahu kapan AI dipakai  
- [ ] Loading state  
- [ ] Bisa lanjut tanpa AI (fallback)  
- [ ] Konfirmasi sebelum aksi irreversible  

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Jembatan langsung ke capstone kickoff P08 — simpan wireframe.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P05 AI sebagai Fitur Web


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P05 |
| Modul pertemuan | [XII-S6-P05_ai-fitur-web.md](../../../kelas-xii/semester-6/XII-S6-P05_ai-fitur-web.md) |
| Semester | 6 · Pertemuan 5/18 |
| Unit | XII6.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-T3, CXII-K1 |
| MM | MM-23 |
| Formatif | REA, COM |
| Prasyarat | [P04 MobileNet & TM](./XII-S6-P04_mobilenet-teachable.md) |
| Panduan CV | [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |
| Ada live code? | **Ya — wireframe → implementasi alur 4 layar + feature flag fallback** |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Referensi |
|---|-------|-----------|
| 1 | **Wajib** — UX loading states (MDN) | → referensi: [MDN — Design patterns for loading](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_api#html_in_http) *(konteks async UI)* |
| 2 | Progressive enhancement | → referensi: [MDN — Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_enhancement) |
| 3 | getUserMedia error handling | → referensi: [MDN — getUserMedia error handling](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#exceptions) |
| 4 | TF.js predict async | → referensi: [TF.js — Model predict](https://www.tensorflow.org/js/guide/models#model-inference) |
| 5 | Human-in-the-loop (produk) | → referensi: [Google Cloud — Human-in-the-loop AI](https://cloud.google.com/architecture/human-in-the-loop-ai) |
| 6 | Accessible status messages | → referensi: [MDN — aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) |
| 7 | Feature flags (konsep) | → referensi: [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) |
| 8 | Spiral XI — user flow / IPO | Modul XI internal CPLF (recall oral) |
| 9 | Panduan CV CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

**Waktu baca minimum:** 45–60 menit (progressive enhancement + aria-live + skim feature toggle).

---

## Pengetahuan yang Dikuasai Guru

### Mengapa model jalan di console ≠ produk

P04 berhasil `predict` di console — trap P05: **pengguna tidak lihat console**. Capability CXII-K1 = **fitur** dalam alur aplikasi: onboarding, loading, error, konfirmasi, **fallback non-AI**.

**Transformasi belajar:** Dari model terpisah → **user flow** dengan kotak "AI" yang bisa dimatikan.

### Spiral XI — IPO + user flow

Ingatkan XI: Input → Process → Output. Tambah kotak:

```text
[ User ] → [ Onboarding consent ] → [ Trigger fitur AI ]
    → [ Loading ] → [ Predict ] → [ Konfirmasi? ] → [ Aksi / Fallback manual ]
    → [ Feedback error ]
```

Contoh MA — sortir sampah di kantin:

1. Layar selamat datang — jelaskan kamera dipakai
2. Tombol "Scan sampah"
3. Spinner "Menganalisis…"
4. Hasil + confidence + tombol "Ya, buang ke tempat X" / "Bukan, input manual"
5. Jika kamera gagal — form dropdown manual

### Experience — fingerprint bank (modul menit 5–15)

Tanya: "Fingerprint wajib atau opsional?" → **Opsional dengan fallback PIN** = pola fallback non-AI. AI/citra di MA harus punya **jalan manual**.

### AI feature flag & fallback

```javascript
const AI_ENABLED = true; // atau deteksi: model loaded && webcam OK

function onScanClick() {
  if (!AI_ENABLED || !modelReady) {
    tampilkanFormManual();
    return;
  }
  tampilkanLoading(true);
  jalankanPrediksi();
}
```

Feature flag = **saklar** — QA, laptop tanpa kamera, demo guru, capstone dengan sebagian fitur AI mati.

→ referensi: [Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_enhancement)

### State UI wajib (practice checklist modul)

| State | Elemen UI | Mengapa |
|-------|-----------|---------|
| Idle | Tombol jelas "Pakai AI" | User tahu kapan AI dipakai |
| Loading | Spinner + teks | Predict async — bisa 1–3 detik |
| Success | Label + confidence + konfirmasi | Human-in-the-loop P02 |
| Low confidence | "Tidak yakin" + manual | Jujur model |
| Error | Pesan + fallback | getUserMedia / model 404 |
| Off | Form manual | Lanjut tanpa AI |

→ referensi: [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) — screen reader tahu hasil prediksi berubah

### Konfirmasi sebelum aksi irreversible

Contoh irreversible: submit absensi final, buang ke tempat salah, post ke forum sekolah.

```javascript
function konfirmasiSebelumSimpan(label) {
  return confirm(`Simpan hasil "${label}"? Kamu bisa ubah manual.`);
}
```

Spiral P02 threshold — konfirmasi **meski** confidence tinggi untuk aksi sensitif.

### Peer walkthrough 2 menit

Pertanyaan peer: "Apakah AI **mengganggu** alur?" — antrian panjang, loading tanpa feedback, tombol tersembunyi.

### Jembatan capstone P08

Wireframe 4 layar **disimpan** — langsung dipakai kickoff project nilai.

---

## Recall Spiral

Chain dari **P04**.

| Pertanyaan | Jawaban/inti |
|------------|--------------|
| "P04 — predict di console cukup?" | Tidak — user butuh UI |
| "P02 — confidence rendah?" | State "tidak yakin" |
| "P01 — kamera ditolak?" | Error + fallback |
| "XI — user flow?" | Urutan layar pengguna |

---

## Etika Penyampaian

| Aturan | Penerapan P05 |
|--------|---------------|
| **Wireframe dulu** | Gambar di kertas/kanvas — bukan langsung copas HTML penuh |
| **Fallback wajib demo** | Guru **matikan** AI live — form manual harus jalan |
| **No template Figma siap** | Siswa desain alur sendiri — guru beri kriteria checklist |
| **Consent di onboarding** | Layar 1 jelaskan data kamera — jembatan P06 |
| **Peer review jujur** | Walkthrough bukan pamer akurasi — fokus UX |

---

## Materi Inti

### Timeline fasilitator

```text
Opening spiral XI user flow + kotak AI
  → Experience: fingerprint opsional vs wajib
  → Trap: console.log = produk
  → Clarify: onboarding · loading · error · override
  → Concept: feature flag · fallback
  → Practice: wireframe 4 layar + implementasi
  → Peer: walkthrough 2 menit
  → Exit: screenshot alur 4 layar
```

### Trap (menit 15–25)

**Asumsi:** "Model jalan di console = project selesai."

**Counter:** Live — buka halaman P04, sembunyikan console — tanya "Pengguna tahu hasil?"

### Wireframe 4 layar minimum

1. **Landing / onboarding** — apa aplikasi + consent kamera singkat  
2. **Aksi utama** — tombol scan/predict  
3. **Hasil + konfirmasi** — label, confidence, Ya/Tidak/manual  
4. **Fallback atau sukses** — form manual atau konfirmasi tersimpan  

---

## Alur Live Coding TTS — Wireframe ke Implementasi

```text
[LANGKAH 1 — Opening flow 0–5 menit]
Gambar di papan 4 kotak — siswa isi label sendiri nanti
Recall XI IPO + P04 predict

[LANGKAH 2 — Experience bank 5–15 menit]
Diskusi fingerprint — 5 menit — tanpa coding

[LANGKAH 3 — Wireframe kertas 25–35 menit]
Siswa sketsa 4 layar — kelompok 2–3
Guru criteria walkthrough checklist modul

[LANGKAH 4 — HTML struktur 35–45 menit]
Live: section id="onboarding", #scan, #result, #manual
TTS scope:
  Tebak: "Mengapa section bukan satu halaman padat?"
  Tanya: "Layar mana yang selalu ada fallback?"
  Spelling: sembunyikan/tampilkan dengan class hidden

[LANGKAH 5 — Feature flag 45–55 menit]
const AI_ENABLED = true;
Demo toggle false — manual form muncul
TTS: "Capstone bisa demo tanpa kamera — flag false"

[LANGKAH 6 — Loading + predict 55–70 menit]
Tombol scan → tampilkanLoading(true)
Integrate model P04 await predict
Threshold P02 + confirm() sebelum simpan
tampilkanLoading(false)
→ referensi: TF.js model predict async

[LANGKAH 7 — aria-live 70–75 menit]
<div aria-live="polite" id="status">...</div>
TTS: aksesibilitas — status prediksi terbaca

[LANGKAH 8 — Peer walkthrough 75–85 menit]
2 menit/kelompok — 1 kritik UX

[LANGKAH 9 — Exit 85–90 menit]
Screenshot 4 layar + simpan wireframe untuk P08
```

---

## Latihan Membaca Kode

### Snippet A — Feature flag

```javascript
function handleScan() {
  if (!AI_ENABLED) {
    showManualForm();
    return;
  }
  runPrediction();
}
```

| Pertanyaan | Kunci |
|------------|-------|
| AI_ENABLED false — jalur? | Manual form langsung |
| Mengapa tidak throw error? | UX — user tetap bisa lanjut |

### Snippet B — Loading state

```javascript
async function runPrediction() {
  setStatus("Menganalisis…");
  spinner.hidden = false;
  try {
    const pred = await model.predict(video);
    renderResult(pred);
  } catch (e) {
    setStatus("Gagal — gunakan input manual");
    showManualForm();
  } finally {
    spinner.hidden = true;
  }
}
```

| Pertanyaan | Kunci |
|------------|-------|
| finally — spinner? | Selalu mati — tidak stuck loading |
| catch — UX? | Fallback, bukan alert kosong |

### Snippet C — Konfirmasi

```javascript
if (topProb < 0.6) {
  showManualForm();
} else if (confirm(`Yakin ${label}?`)) {
  saveResult(label);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Prob 0.85 — langsung save? | Masih confirm jika aksi irreversible (kebijakan) |
| Prob 0.55? | Manual — threshold P02 |

---

## Praktik Mandiri Siswa

- **Deliverable 1:** Wireframe 4 layar (kertas/Figma bebas).
- **Deliverable 2:** Implementasi HTML+JS — model P04 terintegrasi + **fallback manual**.
- **Checklist:** User tahu kapan AI · loading · lanjut tanpa AI · konfirmasi aksi penting.
- **Exit:** Screenshot 4 layar + 1 kalimat peer feedback.
- **Simpan wireframe** — wajib untuk P08 kickoff.

---

## Kesalahan Umum

| Gejala | Respons |
|--------|---------|
| Predict tanpa loading | Spinner + teks "Menganalisis" |
| Tidak ada manual path | Demo AI_ENABLED false |
| Confirm annoying setiap detik | Confirm hanya saat submit final |
| onboarding skip | User kaget diminta kamera |
| Console-only result | Pindah ke `#status` aria-live |
| Wireframe copas template guru | Kriteria checklist — konten sendiri |

---

## Checklist Exit Guru

- [ ] Wireframe 4 layar per siswa/kelompok
- [ ] Feature flag + fallback manual didemo mati
- [ ] Loading state saat predict async
- [ ] Threshold P02 + konfirmasi terintegrasi
- [ ] Peer walkthrough selesai
- [ ] Wireframe disimpan untuk P08
- [ ] Recall P04 + P02 + XI flow terpasang

---

## Rujukan modul

- Modul: [XII-S6-P05](../../../kelas-xii/semester-6/XII-S6-P05_ai-fitur-web.md)
- Sebelumnya: [P04](./XII-S6-P04_mobilenet-teachable.md)
- Lanjutan: [P06 Etika](./XII-S6-P06_etika-privasi-bias.md)
- Panduan: [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
