# Materi Guru Lengkap — XI-S3-P11

**Handout siswa (bagikan):** [XI-S3-P11_requirement-acceptance_siswa.md](./XI-S3-P11_requirement-acceptance_siswa.md)

**Modul:** [XI-S3-P11_requirement-acceptance.md](../../../kelas-xi/semester-3/XI-S3-P11_requirement-acceptance.md)

**Materi pendukung sumber:** [XI-S3-P11_requirement-acceptance.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P11_requirement-acceptance.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P11 — Requirement & Acceptance Criteria

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P11 |
| Unit | XI3.6 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-K1 |
| EXP | [EXP_02 Gambar Rumah](../../../07-experience_library/EXP_02_Gambar_Rumah.md) (spiral) |

## Learning Transformation

Dari “bikin bagus” → **requirement testable** dengan checkbox.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall X-S1-P06/P07 — acceptance vs wishful |
| 5–18 | Experience | EXP_02: brief “website OSIS keren” — trap ambigu |
| 18–28 | Trap | Spek tanpa edge case = scope creep |
| 28–38 | Clarify | Given–When–Then ringkas (1 baris) |
| 38–48 | Concept | User story + acceptance criteria (3–5 item) |
| 48–70 | Practice | Tulis requirement untuk PRJ S3 pilihan (draft) |
| 70–85 | Swap | Teman uji: bisa centang tanpa tanya guru? |
| 85–90 | Exit | 3 acceptance siap kickoff |

---

## Template Acceptance

```text
- [ ] Pengguna dapat X tanpa Y
- [ ] Jika input invalid, tampil Z
- [ ] Data tampil ≤ N item setelah aksi A
```

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Dokumen ini masuk folder project minggu P12.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P11 Requirement & Acceptance Criteria

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P11 |
| Modul pertemuan | [XI-S3-P11_requirement-acceptance.md](../../../kelas-xi/semester-3/XI-S3-P11_requirement-acceptance.md) |
| Unit | XI3.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-K1 |
| EXP | [EXP_02 Gambar Rumah](../../../07-experience_library/EXP_02_Gambar_Rumah.md) (spiral) |
| Formatif | REA, COM |
| Ada live code? | **Tidak — live acceptance criteria workshop (checklist + Given–When–Then ringkas)** |

---

## Pengetahuan Guru

| Istilah | Arti untuk siswa MA | Contoh buruk → baik |
|---------|---------------------|---------------------|
| **Requirement** | Apa yang harus ada — dari masalah PRJ | "App bagus" → "Guru bisa tandai hadir per siswa per tanggal" |
| **Acceptance criteria (AC)** | Centang ✅/❌ — measurable | "Mudah" → "[ ] Toggle hadir ubah status tanpa refresh halaman" |
| **Given–When–Then (ringkas)** | 1 baris skenario uji | "Given siswa belum hadir, When klik toggle, Then tampil ✓" |
| **Edge case** | Input invalid, daftar kosong, double action | "[ ] Form kosong ditolak + pesan di #error" |
| **User story (pengantar)** | "Sebagai [role], saya ingin [X], agar [Y]" | 1 kalimat cukup — fokus AC |

**Spiral EXP_02:** brief "website OSIS keren" — hasil beda karena ambigu; sama seperti "gambar rumah" S1.

**Spiral X-S1:** [P06](../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md) requirement → [P07](../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md) AC — hari ini **konteks aplikasi web S3**.

**Output masuk folder project** — draft untuk P12 kickoff.

**Jangan bagikan:** template AC PRJ siap tempel — siswa turunkan dari PRJ pilihan.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "X-S1-P06/P07 — beda requirement vs AC?" | Requirement = isi; AC = cara buktikan |
| "EXP_02 — kenapa gambar rumah beda?" | Brief ambigu — interpretasi beda |
| "P10 — struktur kode vs spec?" | Spec dulu — kode mengikuti AC testable |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | AC dari PRJ pilihan siswa — bukan PDF guru |
| **Live modeling** | Transform "website OSIS keren" → 3 AC di papan |
| **Per baris / scope** | Satu AC = satu uji pass/fail |
| **Recall** | EXP_02 trap + mockup web ambigu |
| **Membaca kode** | Baca spec/AC — prediksi pass/fail pada demo |
| **No starter file** | Tidak distribusi acceptance PRJ jadi |

---

## Materi Inti

### Transformasi

**Dari:** "Bikin bagus" / wishful thinking  
**Ke:** **Requirement testable** dengan checkbox + edge case

### Template AC (modul)

```text
- [ ] Pengguna dapat X tanpa Y
- [ ] Jika input invalid, tampil Z
- [ ] Data tampil ≤ N item setelah aksi A
```

### Transformasi live (web S3)

| Brief vague | AC terukur |
|-------------|------------|
| Absensi bagus | [ ] Klik toggle mengubah status hadir tanpa reload |
| Katalog OSIS keren | [ ] Filter "minggu ini" hanya tampil kegiatan status aktif |
| Kuis mudah | [ ] Skor akhir = jumlah jawaban benar / total soal |

### Given–When–Then (1 baris)

```text
Given daftar siswa kosong, When submit nama valid, Then list menampilkan 1 baris baru.
```

### Edge case wajib (trap modul)

Spek tanpa edge case → scope creep minggu build. Minimal 1 AC invalid input atau empty state.

---

## Alur Live Coding / Live Modeling

> **Bukan coding JS** — workshop checklist live. Siswa draft AC untuk PRJ S3 pilihan.

### Persiapan

- Papan/Docs
- Brief contoh: *"Buat website OSIS keren untuk pengumuman kegiatan"*
- Ringkasan 4 PRJ S3 (headline — tanpa solusi kode)
- **Tidak:** file AC lengkap PRJ-01..04

### Skrip live (90 menit)

```text
[LANGKAH 1 — Opening EXP_02 spiral 0–5 menit]
Recall gambar rumah — instruksi sama, hasil beda.
Tampilkan 2 mockup web "OSIS keren" — keduanya effort bagus.
Tanya: "Brief tadi — mana LULUS tanpa debat?"

[LANGKAH 2 — Experience 5–18 menit]
Brief: "website OSIS keren" — siswa tulis 1 interpretasi berbeda tetangga.
Ucapkan: "Keren = trap — sama EXP_02."

[LANGKAH 3 — Trap scope creep 18–28 menit]
Contoh spec: "Bisa absensi, katalog, chat, AI, login..."
Ucapkan: "Tanpa edge case & AC — minggu depan scope meledak."
Tanya: "3 fitur PRJ kamu — mana wajib DoD bank?"

[LANGKAH 4 — Clarify Given–When–Then 28–38 menit]
Live 1 baris GWT untuk toggle absensi.
Transform vague → checkbox:
  "[ ] Toggle hadir mengubah tanda ✓/✗ pada baris siswa yang sama"
Scope: satu baris = satu uji.

[LANGKAH 5 — Concept 38–48 menit]
User story 1 kalimat + 3–5 AC.
Bedakan requirement 5 poin (P12) vs AC 3–5 (measurable subset).
Ucapkan: "Dokumen ini masuk folder project minggu depan."

[LANGKAH 6 — Practice draft PRJ 48–70 menit]
Siswa pilih PRJ S3 (01–04) — tulis:
  - 5 requirement poin
  - 3–5 AC checkbox
  - 1 edge case AC
Guru keliling TTS per AC:
  "Bisa centang ya/tidak tanpa debat?"
  "Siapa penguji? ROBI teman?"
  "Field invalid — pesan apa?"

[LANGKAH 7 — Swap peer uji 70–85 menit]
Tukar draft — teman centang ✅/❌ pada wireframe/sketsa/deskripsi.
Default ragu = fail.
Tanya: "AC mana paling sering fail — brief apa yang kurang?"

[LANGKAH 8 — Exit 85–90 menit]
3 AC siap kickoff P12 — simpan di folder draft project.
Refleksi: 1 AC tersulit + kenapa.
```

---

## Latihan Membaca Kode

> Latihan **membaca spesifikasi** — paralel code review nanti.

### Snippet A — PRJ absensi AC

```text
Requirement: Guru bisa tandai kehadiran siswa.

Acceptance Criteria:
[ ] Daftar siswa tampil dari data state
[ ] UI bagus dan modern
[ ] Toggle mengubah status hadir
[ ] Jika nama kosong, form ditolak
```

| Pertanyaan | Kunci |
|------------|-------|
| AC subjektif? | "UI bagus dan modern" |
| Perbaiki #2 | Contoh: "[ ] Status hadir terbaca (✓/✗) tanpa warna low-contrast" |
| Edge case? | #4 — invalid input |

### Snippet B — Uji demo

```text
AC: [ ] Filter kategori "lomba" hanya menampilkan kegiatan kategori lomba
Demo: filter aktif tapi list masih tampil semua kategori
```

| Pertanyaan | Kunci |
|------------|-------|
| Pass/fail? | **Fail** |
| Debat "tapi ada label lomba"? | AC = filter behavior, bukan label saja |

### Snippet C — Given–When–Then

```text
Given item status "dipinjam", When klik pinjam lagi, Then tombol disabled atau pesan error
```

| Pertanyaan | Kunci |
|------------|-------|
| PRJ relevan? | PRJ-02 peminjaman — cegah pinjam ganda |
| Implementasi hint? | Kondisi di handler — bukan solusi kode hari ini |

---

## Praktik Mandiri

1. Draft requirement 5 poin + AC 3–5 untuk PRJ S3 pilihan
2. Min 1 AC edge case (invalid / empty / double action)
3. 1 baris Given–When–Then untuk AC paling kritis
4. Peer review pass/fail — revisi 1 AC
5. Simpan di folder `docs/spec.md` atau setara — **bukan** copy template guru

**Variasi kelas cepat:** tambah DoD 3 poin + AC untuk filter PRJ-03.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| AC = copy requirement | Model transform vague → checkbox |
| AC teknis tanpa observable | "Besok saya centang — dengan apa?" |
| Lupa edge case | Wajibkan 1 invalid/empty AC |
| Peer review pujian | Contoh 1 fail tegas dari AC |
| Copy AC PRJ bank verbatim | Turunkan dari konteks sekolah siswa |
| Guru kirim Google Doc AC jadi | Oral template 1 baris di papan |

---

## Rujukan

- Modul: [XI-S3-P11](../../../kelas-xi/semester-3/XI-S3-P11_requirement-acceptance.md)
- EXP: [EXP_02 Gambar Rumah](../../../07-experience_library/EXP_02_Gambar_Rumah.md)
- Spiral X: [X-S1-P07 Acceptance](../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md)
- PRJ bank: [08_Project_Bank_Index — XI S3](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-3-interaksi--struktur)
- Lanjut: [P12 Kickoff](./XI-S3-P12_project-s3-kickoff.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] EXP_02 + X-S1 trap "keren/bagus" dibahas live
- [ ] Draft 5 requirement + 3–5 AC per siswa/kelompok
- [ ] Min 1 edge case AC
- [ ] Peer swap pass/fail — bukan debat selera
- [ ] 3 AC siap masuk kickoff P12
- [ ] Tidak distribusi template jawaban
- [ ] Given–When–Then intro 1 contoh

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
