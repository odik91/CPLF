# Handout Siswa — XII-S6-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P10_project-nilai-build-2.md](../../../kelas-xii/semester-6/XII-S6-P10_project-nilai-build-2.md)

---

## 1. Tujuan pembelajaran

Dari skeleton → **integrasi** model + UX + persistensi jika perlu.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Fokus hari ini: 2 acceptance prioritas |
| 10–65 | Build | Integrasi prediksi · loading · konfirmasi user |
| 65–75 | Test | Pengguna/uji coba 5 menit — catat feedback |
| 75–85 | Fix | 1 isu UX dari feedback |
| 85–90 | Exit | Screenshot + changelog |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot + changelog
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
