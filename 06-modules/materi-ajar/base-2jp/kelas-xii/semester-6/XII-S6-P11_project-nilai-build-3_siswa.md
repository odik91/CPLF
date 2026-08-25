# Handout Siswa — XII-S6-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P11_project-nilai-build-3.md](../../../kelas-xii/semester-6/XII-S6-P11_project-nilai-build-3.md)

---

## 1. Tujuan pembelajaran

Dari menyembunyikan kegagalan → **demo gagal** + mitigasi = bukti maturity.

---

## 2. Ringkasan konsep

### Transformasi belajar

**Dari:** Menyembunyikan kegagalan · pamer akurasi  
**Ke:** **Demo gagal wajib** + mitigasi = bukti maturity · target **E1 level 3**.

### Nilai XII — norma kelas

> **Demo gagal yang jujur > akurasi 95% tanpa konteks**

Tepuk tangan untuk kejujuran — set di opening 5 menit.

### Preview rubrik E1

| Level | Perilaku |
|-------|----------|
| 1 ❌ | Klaim selalu benar / sembunyikan kegagalan → **dikembalikan** |
| 2 | Sebut batasan jika ditanya |
| 3 ✅ target S6 | Tulis + demo batasan + kasus gagal **proaktif** |
| 4 | Kait risiko pengguna + mitigasi kebijakan |

### Format demo tim (3–4 menit)

```text
1. Konteks & pengguna (20 detik)
2. Prediksi sukses — 1 contoh (45 detik)
3. Prediksi GAGAL — sengaja ditunjuk (45 detik) ← WAJIB
4. Mitigasi live — threshold / manual / pesan (45 detik)
5. 1 kalimat batasan model (15 detik)
```

**Guru interrupt** jika menit 3 belum bagian gagal.

### Skenario gagal per PRJ (rencanakan menit 15–25)

| PRJ | Kasus gagal contoh | Mitigasi contoh |
|-----|-------------------|-----------------|
| **01** Absensi | QR rusak / blur · gesture salah orang | Form manual · double confirm |
| **02** Gesture | Cahaya gelap · sudut ekstrem | Pesan "pindah tempat" · fallback |
| **03** Citra | Sampah mirip · confidence rendah | "Cek manual" · threshold |
| **04** Asisten | Pertanyaan di luar KB · halusinasi | "Tidak tahu" + kontak humas |

### Dokumen Batasan Model (wajib final hari ini)

```text
Data training · Kondisi gagal · Dampak pengguna ·
Mitigasi · Yang TIDAK bisa model ini lakukan
```

Struktur markdown lengkap — lihat template di bawah.

### Video/screenshot demo gagal (exit)

- Rekam 15–30 detik kasus gagal + mitigasi
- Simpan `assets/demo-gagal.mp4` atau screenshot berurutan
- Bukti untuk P12 peer review & P14 presentasi

---

## 3. Materi praktik

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–5 | Opening | Demo gagal guru — applause kejujuran |
| 5–15 | Concept | E1 level 3 — proaktif tunjuk batasan |
| 15–25 | Clarify | Rekam skenario gagal per tim |
| 25–50 | Build | Implement mitigasi (threshold · manual · pesan) |
| 50–65 | Demo | Tim: 1 gagal + 1 mitigasi live |
| 65–80 | Practice | Update dokumen Batasan Model final |
| 80–90 | Exit | Video/screenshot demo gagal |

### Template dokumen batasan (wajib)

```markdown
# Batasan Model — [Nama Tim / PRJ]

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Contoh demo gagal guru — applause untuk kejujuran |
| 5–15 | Concept | Rubrik E1 level 3: proaktif tunjuk batasan |
| 15–25 | Clarify | Rekam skenario: cahaya buruk / label salah / QR rusak |
| 25–50 | Build | Implement mitigasi (threshold · manual · pesan) |
| 50–65 | Demo | Tim demo 1 kasus gagal + 1 mitigasi live |
| 65–80 | Practice | Update dokumen “Batasan Model” final |
| 80–90 | Exit | Video/screenshot demo gagal |

---

## 5. Lembar kerja / latihan

### Snippet A — hanya happy path demo

```javascript
// demo.js — only runs predictSuccess()
async function demoForTeacher() {
  await predict(sampleGoodImage);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| E1? | Level 1 — menyembunyikan gagal |
| Fix? | Tambah `predictFailureScenario()` |

### Snippet B — batasan overclaim

```markdown

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS An-Nisa 4:58

**Kait di kelas hari ini:** AI/CV moderat, jujur, dan manfaat komunitas MA.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
