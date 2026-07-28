# Handout Siswa — XII-S5-P16

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P16_peer-review-s5.md](../../../kelas-xii/semester-5/XII-S5-P16_peer-review-s5.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

Peer review S5 **bukan** kritik CSS — fokus: **data · model · batasan · kejujuran metrik**.

| Aspek review | Pertanyaan reviewer bagus | Review buruk (level 1) |
|--------------|---------------------------|------------------------|
| **Data** | "Fitur apa yang model lihat? Ada outlier?" | "Datanya kurang" |
| **Model** | "Shape input cocok? Loss terlihat?" | "Modelnya jelek" |
| **Batasan** | "Klaim terlarang sudah explicit?" | "Kurang bagus" |
| **Metrik** | "Akurasi dari berapa sampel?" | "Akurasinya keren" |
| **Etika E1** | "Demo gagal ada?" | (diam soal overclaim) |

**Substansi kunci:**

1. Protokol [Rubrik Peer Review] — **2 pujian spesifik + 2 saran dapat ditindak**.
2. Reviewee wajib **1 revisi** dengan bukti (changelog).
3. Diskusi 2 temuan kuat — deep dive reasoning, bukan debat selera.
4. Revisi prioritas: data / model / UI / **batasan** — batasan sering paling lemah.
5. Changelog exit = bukti ITR untuk rubrik project.

**Gate etika:** Jika reviewer menemukan overclaim E1 level 1 — **wajib** saran perbaiki batasan + demo gagal.

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** "Bagus/jelek"  
**Ke:** Feedback **terukur** yang memaksa revisi batasan & kejujuran model.

### Protokol S5 (adaptasi rubrik)

```text
Reviewer memberi:
  • 2 pujian SPESIFIK (data/model/batasan/metrik)
  • 2 saran DAPAT DITINDAK (bukan "perbaiki AI")

Reviewee wajib:
  • Pilih 1 saran → revisi → bukti (commit/screenshot/changelog)

Larangan:
  • Ejek · banding IQ · spoil kelas lain · debat akurasi tanpa data
```

### Lembar ringkas (tampilkan di papan — siswa salin format)

| # | Observasi | Saran | Aspek |
|---|-----------|-------|-------|
| 1 | | | REA/COM/TEC/... |
| 2 | | | |

**Fokus wajib S5:** minimal 1 baris tentang **dokumen batasan** atau **demo gagal**.

### Timeline fasilitator (90 menit)

| Menit | Fase | Peran guru |
|-------|------|------------|
| 0–5 | Opening | Protokol 2+2 + fokus data & batasan |
| 5–30 | Review | Pasangan A↔B — lembar reviewer |
| 30–50 | Clarify | 2 temuan kuat — pleno atau kelompok 4 |
| 50–75 | Build | 1 revisi wajib — prioritaskan batasan jika lemah |
| 75–90 | Exit | Changelog revisi submit |

### Prioritas revisi (panduan guru)

| Urutan | Jika lemah | Revisi contoh |
|--------|------------|---------------|
| 1 | Batasan kosong/overclaim | Tambah section klaim terlarang + kasus gagal |
| 2 | Metrik tanpa N | Update jurnal P15 + UI disclaimer |
| 3 | Predict bug | Fix shape / async fit |
| 4 | UI polish | **Terakhir** — setelah etika & metrik |

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Protokol review — fokus data & batasan |
| 5–30 | Review | [Rubrik Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 30–50 | Clarify | Diskusi 2 temuan kuat |
| 50–75 | Build | 1 revisi wajib (data/model/UI/batasan) |
| 75–90 | Exit | Changelog revisi |

---

## 5. Lembar kerja / latihan

### Snippet A — README project

```markdown

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Materi pendamping BRG

- [BRG-08](../../../materi-ajar/jalur-kelanjutan/BRG-08_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
