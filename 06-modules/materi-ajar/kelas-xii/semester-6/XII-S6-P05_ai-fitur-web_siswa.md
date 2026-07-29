# Handout Siswa — XII-S6-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P05_ai-fitur-web.md](../../../kelas-xii/semester-6/XII-S6-P05_ai-fitur-web.md)

---

## 1. Tujuan pembelajaran

Dari model terpisah → **fitur** dalam alur pengguna aplikasi nyata.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot alur 4 layar
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
