# Handout Siswa — XII-S6-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P12_peer-review-etika.md](../../../kelas-xii/semester-6/XII-S6-P12_peer-review-etika.md)

---

## 1. Tujuan pembelajaran

Dari submit → **review** teknis + etika sebelum presentasi akhir.

---

## 2. Ringkasan konsep

### Transformasi belajar

**Dari:** Submit capstone → tunggu nilai guru  
**Ke:** **Review teknis + etika terpisah** — revisi wajib sebelum P13–P14.

### Peer review S6 ≠ review CSS

| Aspek | Pertanyaan reviewer bagus | Review buruk (level 1) |
|-------|---------------------------|------------------------|
| **Teknis** | "Fallback jalan saat kamera deny?" | "Jelek" |
| **E1 batasan** | "Demo gagal ada di repo?" | (diam soal overclaim) |
| **E2 privasi** | "Data wajah disimpan?" | "Etikanya kurang" |
| **E3 AI partner** | "Log klarifikasi ada?" | — |
| **E4 dampak** | "Salah prediksi — siapa rugi?" | "Netral aja" |
| **Acceptance** | "AC #3 bisa centang live?" | "Belum selesai" |

### Protokol S6 (adaptasi rubrik + etika)

```text
Reviewer memberi:
  • 2 pujian SPESIFIK (teknis + etika)
  • 2 saran DAPAT DITINDAK (min 1 teknis, min 1 etika)

Reviewee wajib:
  • 1 revisi teknis + 1 revisi etika — bukti changelog

Larangan:
  • Ejek · spoil kelas lain · debat akurasi tanpa bukti demo gagal
```

**Cross-team:** reviewer **bukan** tim sendiri — rotasi antar kelompok.

### Review prompt etika (modul — wajib 1 baris per prompt)

1. Data apa yang dikumpulkan — perlu semua?
2. Ada consent?
3. Demo gagal ada?
4. Klaim berlebihan?

### Gate etika reviewer

Jika reviewer menemukan **E1 level 1** (overclaim / no demo gagal):

- **Wajib** saran perbaiki batasan + link ke video P11
- Guru eskalasi ke tim reviewee — prioritas revisi P13

### Prioritas revisi (panduan guru)

| Urutan | Jika lemah | Revisi contoh |
|--------|------------|---------------|
| 1 | E1 overclaim / no demo gagal | Tambah batasan + screenshot demo gagal |
| 2 | E2 privasi lemah | Minimasi data · rencana retention |
| 3 | Fallback broken | Fix deny camera path |
| 4 | E3 no log AI | Tambah `logs/ai-klarifikasi.md` |
| 5 | UI polish | **Terakhir** |

---

## 3. Materi praktik

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–5 | Opening | Protokol: teknis + etika terpisah |
| 5–30 | Review | Cross-team — lembar reviewer |
| 30–45 | Diskusi | 1 finding etika penting per tim · 2 menit |
| 45–70 | Build | Revisi wajib: 1 teknis + 1 etika |
| 70–85 | Check | Acceptance re-test |
| 85–90 | Exit | Changelog + siapa fix apa |

### Lembar ringkas reviewer (papan — siswa salin)

| # | Observasi | Saran | Aspek (TEC/REA/COM/E1–E4) |
|---|-----------|-------|---------------------------|
| 1 | | | min 1 teknis |
| 2 | | | min 1 etika |

**Pujian 2 baris:** spesifik — contoh: "Video demo-gagal.mp4 menunjukkan QR blur + fallback manual."

### Changelog reviewee (wajib)

| Saran | Perubahan | Bukti | Jenis |
|-------|-----------|-------|-------|
| #1 reviewer | | commit/screenshot | teknis |
| #2 reviewer | | commit/screenshot | etika |

### Contoh review level 3–4 (model guru)

**Pujian:**
1. "`batasan-model.md` section kondisi gagal — 2 contoh spesifik cahaya gelap."
2. "Konfirmasi sebelum simpan absensi — mengurangi risiko E4."

**Saran:**
1. "Footer 'AI diagnosis' overclaim — ganti disclaimer." → E1/COM
2. "`etika.md` retention kosong — isi '7 hari localStorage'." → E2

### Pleno finding etika (30–45 menit)

Setiap tim **2 menit** — 1 finding etika penting (bukan demo penuh):

- Tim presentasi finding · bukan defensif
- Guru normalisasi: finding = hadiah sebelum P14

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Protokol review: teknis + etika terpisah |
| 5–30 | Review | Cross-team: [Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) + [Etika AI](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 30–45 | Diskusi | 1 finding etika penting per tim presentasi 2 menit |
| 45–70 | Build | Revisi wajib: min. 1 teknis + 1 etika |
| 70–85 | Check | Acceptance re-test |
| 85–90 | Exit | Changelog + siapa fix apa |

---

## 5. Lembar kerja / latihan

### Snippet A — README tanpa etika

```markdown

## 6. Exit ticket

1. Changelog + siapa fix apa
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Hujurat 49:10 · QS Al-Hujurat 49:11

**Kait di kelas hari ini:** Peer review santun — bantu saudara, jangan mengejek.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
