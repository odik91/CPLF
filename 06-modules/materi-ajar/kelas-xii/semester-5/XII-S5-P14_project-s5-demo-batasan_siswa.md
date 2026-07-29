# Handout Siswa — XII-S5-P14

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P14_project-s5-demo-batasan.md](../../../kelas-xii/semester-5/XII-S5-P14_project-s5-demo-batasan.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

Pertemuan ini **bukan** kompetisi akurasi — ini **latihan amanah**: model kecil MA harus dijelaskan dengan jujur.

| Komponen | Wajib | Overclaim yang ditolak |
|----------|-------|------------------------|
| **Demo live** | Data → train singkat → prediksi → **batasan** | "AI kami paling akurat di sekolah" |
| **Demo gagal** | Minimal **1 kasus** model salah — **sengaja ditunjuk** | Menyembunyikan error / refresh sampai benar |
| **Dokumen batasan** | PDF/Markdown 1 halaman — submit hari ini | "Nanti saja di showcase" |
| **Klaim terlarang** | Daftar eksplisit apa yang **tidak** boleh dikatakan | "Selalu benar", "100%", "menggantikan guru/dokter" |

**Preview rubrik E1 (Etika AI):**

| Level E1 | Perilaku |
|----------|----------|
| 1 ❌ | Klaim selalu benar / sembunyikan kegagalan → **project dikembalikan** |
| 2 | Sebut batasan jika ditanya |
| 3 ✅ target S5 | Tulis + demo batasan + kasus gagal **proaktif** |
| 4 | Kait ke risiko pengguna nyata + mitigasi |

Gate XII: E1 ≥ 2; **E1 = 1 = gagal meski demo mulus.**

**Format demo 3–4 menit (wajib hafal guru):**

```text
1. Masalah & data (30 detik)
2. Prediksi live — 1 sukses (1 menit)
3. Prediksi live — 1 GAGAL atau edge case (1 menit) ← wajib
4. Baca 2 kalimat batasan + klaim terlarang (1 menit)
5. 1 pertanyaan dari teman (30 detik)
```

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** "Demo = pamer yang terbaik"  
**Ke:** "Demo = bukti **jujur** — termasuk kapan model **tidak** boleh dipercaya."

### Struktur dokumen batasan (wajib 1 halaman)

```markdown
# Batasan Model — [Nama Project]

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Format demo: data → model → prediksi → **batasan** |
| 5–45 | Demo | 3–4 menit/siswa |
| 45–60 | Peer | 1 pertanyaan + 1 apresiasi |
| 60–80 | Practice | Finalisasi dokumen batasan (wajib) |
| 80–90 | Exit | Submit link + PDF batasan |

---

## 5. Lembar kerja / latihan

### Snippet A — Paragraf batasan buruk

```text
Model kami menggunakan deep learning canggih dengan akurasi 97%.
Cocok untuk semua siswa MA dan dijamin membantu meningkatkan prestasi.
Tidak perlu khawatir salah karena AI sudah pintar.
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Kalimat overclaim? | "97% tanpa konteks", "semua siswa", "dijamin", "tidak perlu khawatir salah" |
| Level E1? | **1** — harus revisi |
| Perbaikan 1 kalimat | Contoh: "Di data uji 30 baris sekolah kami, benar 29/30 — masih bisa salah pada input baru" |

### Snippet B — UI disclaimer

```html
<p id="result">Prediksi: Lulus</p>
<p class="small">Powered by AI — 100% trusted</p>
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Masalah etika? | "100% trusted" = klaim terlarang |
| Ganti footer | "Hasil model — verifikasi dengan guru/wali" |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Lingkungan

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:8

**Kait di kelas hari ini:** Data & model — keadilan dan dampak ke sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
