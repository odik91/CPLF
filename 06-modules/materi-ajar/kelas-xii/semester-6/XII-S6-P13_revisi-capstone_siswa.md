# Handout Siswa — XII-S6-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P13_revisi-capstone.md](../../../kelas-xii/semester-6/XII-S6-P13_revisi-capstone.md)

---

## 1. Tujuan pembelajaran

Dari feedback → **iterasi wajib** terdokumentasi sebelum presentasi.

---

## 2. Ringkasan konsep

P13 = **hari iterasi terdokumentasi**, bukan polish kosmetik. Feedback P12 harus jadi perubahan nyata sebelum P14.

| Deliverable P13 | Bukan hari ini |
|-----------------|----------------|
| ≥1 revisi teknis dari peer review (bukti commit/changelog) | Presentasi final (P14) |
| ≥1 revisi etika (batasan/consent/demo gagal) | Portofolio 3 tahun (P16) |
| Before/after screenshot atau diff | Bonus agent (P15 opsional) |
| Dokumen etika final terisi | Fitur baru besar di luar scope |
| Script presentasi 3 menit + pembagian peran | Revisi tanpa bukti |

### Prioritas revisi (urutan guru)

| Urutan | Jika lemah dari P12 | Revisi contoh |
|--------|---------------------|---------------|
| 1 | Acceptance belum centang | Fix blocker AC — bukan CSS dulu |
| 2 | E1 overclaim / demo gagal lemah | Tambah/perbaiki section batasan + rekaman kasus gagal |
| 3 | E2 privasi/consent | Ganti QR vs wajah · tambah notice consent |
| 4 | Kontribusi tim tidak merata | Assign fix spesifik per anggota + commit |
| 5 | UX polish | **Terakhir** — setelah etika & AC |

### Gate tim — kontribusi

Cek Git log / catatan peran:

- **Red flag:** 1 anggota 0 commit di 3 build week
- **Intervensi:** assign 1 fix etika atau teknis wajib hari ini + dokumentasi "siapa fix apa"
- **Bukan solusi:** guru menulis kode untuk anggota pasif

### Format build week (spiral capstone)

```text
Stand-up (10) → prioritas dari P12 (10) → build (40) → before/after (10) → rehearsal (15) → exit (5)
```

**Stand-up 3 pertanyaan:** kemarin / hari ini / blocker — **wajib sebut nomor saran reviewer**.

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** "Sudah jadi — tinggal presentasi"  
**Ke:** **Iterasi wajib terdokumentasi** — feedback peer = kontrak revisi sebelum di depan publik.

### Iterasi wajib (checklist tim)

- [ ] ≥1 revisi dari peer review P12 (bukti commit/catatan)
- [ ] Dokumen etika final (E1–E4 terisi — bukan placeholder)
- [ ] Demo gagal siap ditampilkan P14 (bukan "nanti")
- [ ] Semua anggota punya bagian presentasi (script 3 menit)
- [ ] Acceptance criteria re-test — centang ulang

### Template changelog (tampilkan di papan — siswa salin format)

```text
Revisi P13 — [Nama tim]
1. Saran reviewer: [observasi] → Perubahan: [spesifik] → Bukti: [commit/screenshot]
2. (Etika) Finding E_: […] → Perubahan: […] → Bukti: […]
3. Before/after: [link screenshot atau diff]
```

### Before/after — bukti ITR

| Jenis revisi | Bukti minimum |
|--------------|---------------|
| UI/UX | Screenshot side-by-side + 1 kalimat "pengguna lebih …" |
| Model/batasan | Diff README atau commit message jelas |
| Demo gagal | Video/GIF 15 detik atau langkah live siap P14 |
| Etika/consent | Paragraf baru di dokumen etika + tanggal |

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Prioritas: acceptance belum centang + finding etika |
| 10–60 | Build | Implement revisi · polish UX |
| 60–70 | Before/after | Screenshot atau commit diff |
| 70–85 | Rehearsal | Latihan presentasi 3 menit per tim |
| 85–90 | Exit | Script presentasi: siapa bicara bagian apa |

---

## 5. Lembar kerja / latihan

### Snippet A — Changelog lemah

```text
Revisi: update warna tombol, fix bug kecil
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Cukup untuk ITR level 3? | **Tidak** — tidak link saran reviewer, tidak bukti |
| Changelog baik? | "Saran #1 P12: demo gagal belum ada → tambah section kasus X → commit abc" |
| Aspek CPLF? | ITR, COM (etika jika saran etika diabaikan) |

### Snippet B — Finding etika P12 belum closed

```markdown

## 6. Exit ticket

1. Script presentasi: siapa bicara bagian apa
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
