# Materi Guru Lengkap — XII-S6-P13
**Modul:** [XII-S6-P13_revisi-capstone.md](../../kelas-xii/semester-6/XII-S6-P13_revisi-capstone.md)
**Materi pendukung sumber:** [XII-S6-P13_revisi-capstone.md](../../materi-pendukung/materi-pendukung/kelas-xii/semester-6/XII-S6-P13_revisi-capstone.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P13 — Revisi Capstone

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P13 |
| Unit | XII6.6 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S6-* |

## Learning Transformation

Dari feedback → **iterasi wajib** terdokumentasi sebelum presentasi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Prioritas: acceptance belum centang + finding etika |
| 10–60 | Build | Implement revisi · polish UX |
| 60–70 | Before/after | Screenshot atau commit diff |
| 70–85 | Rehearsal | Latihan presentasi 3 menit per tim |
| 85–90 | Exit | Script presentasi: siapa bicara bagian apa |

---

## Iterasi Wajib

- [ ] ≥1 revisi dari peer review P12 (bukti commit/catatan)  
- [ ] Dokumen etika final  
- [ ] Demo gagal siap ditampilkan P14  
- [ ] Semua anggota punya bagian presentasi  

---

## Formatif

**ITR**, **COM**

---

## Catatan Guru

Cek kontribusi tim — tidak ada anggota 0 commit.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P13 Revisi Capstone

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)  
> **Rubrik:** [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) · [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P13 |
| Modul pertemuan | [XII-S6-P13_revisi-capstone.md](../../../kelas-xii/semester-6/XII-S6-P13_revisi-capstone.md) |
| Semester | 6 · Pertemuan 13/18 |
| Unit | XII6.6 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | PRJ-XII-S6-01…04 |
| Capability | ITR, COM |
| Formatif | ITR, COM |
| Ada live code? | **Facilitator build week** — siswa implement revisi; guru gate acceptance & etika |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — Rubrik project (iterasi ITR) | → [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) |
| 2 | **Wajib** — Rubrik etika E1–E4 | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 3 | **Wajib** — Rubrik peer review (sumber feedback P12) | → [09_Rubrik_Peer_Review](../../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 4 | Enam aspek CPLF | → [09_Rubrik_Enam_Aspek](../../../../09-rubrik/09_Rubrik_Enam_Aspek.md) |
| 5 | Acceptance criteria / DoD | → [Google SRE — Blameless postmortem culture](https://sre.google/sre-book/postmortem-culture/) *(kultur iterasi tanpa malu)* |
| 6 | Model cards (inspirasi batasan) | → [Model Cards — Google](https://modelcards.withgoogle.com/about) |
| 7 | Teachable Machine export | → [TM — Export TensorFlow.js](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |
| 8 | Panduan CV & etika CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) |

---

## Pengetahuan Guru

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

## Recall Spiral

Opening **5 menit** — oral, tidak menakutkan.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| P12: protokol review 2+2 — 1 saran etika tim kalian? | Consent / batasan / demo gagal / overclaim |
| P11: demo gagal sudah siap ditampilkan? | Ya — input spesifik + mitigasi UI |
| P08: acceptance criteria — mana belum centang? | Siswa sebut 1–2 AC blocker |
| ITR: beda "perbaiki tampilan" vs revisi terdokumentasi? | Changelog + bukti + link ke saran reviewer |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan distribusi changelog siap pakai — siswa **tulis dari saran P12 sendiri** |
| **Live modeling** | Guru contoh 1 changelog buruk vs baik di papan (anonim) |
| **Per baris / scope** | Setiap revisi: "Saran #X reviewer → perubahan → bukti URL/commit" |
| **Recall** | Kaitkan ke finding etika P12 sebelum build |
| **Membaca kode** | Latihan baca changelog + diff — validasi ITR |
| **No rubrik dump** | Guru pakai [Rubrik Project] + [Etika] internal — **jangan** PDF penuh ke siswa |
| **Gate etika** | Revisi etika **wajib** jika E1/E2 finding P12 belum closed |

---

## Materi Inti

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

## Alur Facilitator / Presentasi

> **Bukan live coding guru** — fasilitasi build + gate acceptance. Siswa implement sendiri.

### Persiapan

- [ ] Kumpulkan lembar reviewer P12 — guru scan finding etika per tim
- [ ] Template changelog 3 baris di papan
- [ ] Timer rehearsal 3 menit per tim
- [ ] Baca: [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) · [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)
- [ ] Cek Git/contributions — flag tim dengan 0-commit member

### Skrip fasilitator (90 menit — selaras modul)

```text
[LANGKAH 1 — Opening 0–10 menit]
Tampilkan: changelog buruk "perbaiki tampilan" vs baik "saran #2 reviewer: tambah consent QR"
Ucapkan: "Hari ini bukti iterasi — bukan hari fitur baru."
Tanya: "AC mana yang masih fail setelah P12?"
Scope: prioritas acceptance + finding etika — polish terakhir.

[LANGKAH 2 — Build 10–60 menit]
Stand-up per tim (3 menit) — guru catat blocker
Keliling: TTS per tim —
  "Saran reviewer mana yang belum disentuh?"
  "Revisi etika — E1/E2 sudah closed?"
  "Siapa commit hari ini?"
Scope: implement revisi — bukan scope creep.

[LANGKAH 3 — Before/after 60–70 menit]
Wajib submit: 1 before/after (screenshot/commit diff)
Ucapkan: "Tanpa bukti = belum iterasi untuk rubrik ITR."
Tanya: "Perubahan ini jawab observasi reviewer yang mana?"

[LANGKAH 4 — Rehearsal 70–85 menit]
Timer 3 menit/tim — latihan presentasi singkat
Guru interrupt lembut jika demo gagal tidak muncul
Tanya panel: "Bagian etika siapa yang bicara?"

[LANGKAH 5 — Exit 85–90 menit]
Submit: changelog P13 + script pembagian peran
Ucapkan: "P14 = argumen di depan kelas — bawa before/after sebagai bukti ITR."
Scope: exit ticket — 1 revisi paling penting + why.
```

---

## Latihan Membaca Dokumen

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
## Etika E2
Data wajah disimpan di localStorage.
Reviewer: "Consent?"
(Revisi P13: belum diubah)
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Boleh presentasi P14? | **Tidak** — gate etika E2 belum closed |
| Revisi minimum? | Notice consent + rencana hapus data / alternatif QR |
| Rubrik terkait? | [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) E2 ≥ 2 |

---

## Praktik Mandiri

Tim **mengetik versi sendiri** — arahkan:

1. Buka lembar reviewer P12 → pilih **2 saran** (min. 1 etika jika ada finding).
2. Implement + changelog 3 baris format standar.
3. Before/after — screenshot atau link commit diff.
4. Re-test acceptance criteria — centang ulang yang relevan.
5. Script presentasi 3 menit: masalah · demo · gagal · etika · siapa bicara apa.
6. Anggota 0-commit: **1 fix wajib hari ini** + nama di changelog.

**Variasi kelas lambat:** fokus 1 revisi etika + 1 AC blocker — skip polish.

**Variasi kelas cepat:** dry-run presentasi penuh 5 menit + 2 pertanyaan panel simulasi.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Revisi hanya CSS/warna | Gate: harus sentuh saran reviewer teknis/etika |
| Abaikan finding etika P12 | Block presentasi P14 jika E1/E2 open |
| Changelog vague | Model live before/after + link saran |
| 1 anggota kerja semua | Assign fix per orang + cek Git |
| Fitur baru "biar keren" | Redirect: "Itu scope P09–11 — hari ini tutup feedback" |
| Demo gagal "nanti di P14" | Wajib siap hari ini — rehearsal tanpa gagal = fail |
| Guru fix kode untuk tim | Pair anggota pasif dengan mentor sebaya — guru fasilitasi saja |

---

## Rujukan

- Modul: [XII-S6-P13](../../../kelas-xii/semester-6/XII-S6-P13_revisi-capstone.md)
- Sebelumnya: [P12 Peer Review & Etika](./XII-S6-P12_peer-review-etika.md) *(jika ada)* · modul [P12](../../../kelas-xii/semester-6/XII-S6-P12_peer-review-etika.md)
- Lanjutan: [P14 Presentasi Nilai](./XII-S6-P14_presentasi-nilai.md)
- Rubrik: [09_Rubrik_Project](../../../../09-rubrik/09_Rubrik_Project.md) · [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)
- Panduan: [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)

---

## Checklist Exit

- [ ] ≥1 revisi teknis + bukti commit/changelog dari saran P12
- [ ] ≥1 revisi etika jika ada finding P12 (E1–E4)
- [ ] Before/after terkumpul per tim
- [ ] Demo gagal siap — terbukti di rehearsal
- [ ] Script presentasi + pembagian peran semua anggota
- [ ] Acceptance re-test — blocker AC disebutkan jika masih open
- [ ] Kontribusi tim — tidak ada anggota 0 commit tanpa intervensi
- [ ] Changelog format standar — bukan "perbaiki tampilan" saja

[← Indeks materi S6](./XII-S6_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
