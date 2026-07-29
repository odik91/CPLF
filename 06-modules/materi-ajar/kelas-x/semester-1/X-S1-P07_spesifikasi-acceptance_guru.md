# Materi Guru Lengkap — X-S1-P07

**Handout siswa (bagikan):** [X-S1-P07_spesifikasi-acceptance_siswa.md](./X-S1-P07_spesifikasi-acceptance_siswa.md)

**Modul:** [X-S1-P07_spesifikasi-acceptance.md](../../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md)

**Materi pendukung sumber:** [X-S1-P07_spesifikasi-acceptance.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P07 — Spesifikasi & Acceptance Criteria

| Field | Isi |
|-------|-----|
| Kode | X-S1-P07 |
| Unit | X1.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-K1, CX-B1 |
| MM | MM-23 |

## Learning Transformation

Dari “bagus/menarik” (subjektif) → **acceptance criteria** yang bisa dicentang ✅/❌.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan brief “bikin website bagus” — tanya: bisa dinilai? |
| 5–18 | Experience | Dua mockup beda — keduanya “bagus” menurut pembuat |
| 18–28 | Trap | Kata “bagus” bukan requirement |
| 28–38 | Clarify | Ubah “bagus” → 3 kriteria terukur |
| 38–48 | Concept | Acceptance criteria · Definition of Done (pengantar) |
| 48–70 | Practice | Revisi brief P06 → tambah 5 criteria checkbox |
| 70–85 | Practice 2 | Pasangan: uji centang criteria pada sketsa teman |
| 85–90 | Exit | 1 criteria yang paling sulit dipenuhi |

---

## Template Acceptance (contoh)

- [ ] Informasi waktu & tempat terbaca  
- [ ] Audience siswa MA kelas X paham tanpa tanya  
- [ ] …

---

## Formatif

**COM**, **REA**

---

## Catatan Guru

Jembatan ke project S1 & S2 — spec wajib sebelum coding nanti.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P07 Spesifikasi & Acceptance Criteria

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P07 |
| Modul pertemuan | [X-S1-P07_spesifikasi-acceptance.md](../../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md) |
| Unit | X1.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-K1, CX-B1 |
| MM | MM-23 |
| Formatif | COM, REA |
| Ada live code? | Tidak — **live checklist & modeling spesifikasi** |

---

## Pengetahuan Guru

Guru harus paham perbedaan ini sebelum masuk kelas:

| Istilah | Arti untuk siswa MA | Contoh buruk → baik |
|---------|---------------------|---------------------|
| **Requirement** | Apa yang harus ada (dari P06) | "Poster menarik" → "Judul kegiatan terbaca dari 3 meter" |
| **Acceptance criteria (AC)** | Daftar centang ✅/❌ — bisa diuji tanpa debat | "Bagus" → "[ ] Waktu & tempat terbaca tanpa tanya guru" |
| **Definition of Done (DoD)** | Pengantar: kapan pekerjaan dianggap *selesai* untuk diserahkan | "Sudah jadi" → "Semua AC tercentang + direview 1 teman" |

**Substansi kunci:**

1. Kata subjektif ("bagus", "menarik", "keren") **bukan** requirement — tidak bisa dinilai konsisten.
2. AC harus **observable** (bisa dilihat/dicoba) dan **spesifik** (satu interpretasi).
3. AC ≠ daftar fitur panjang — 3–7 poin yang benar-benar menentukan sukses/gagal.
4. Pertemuan ini **jembatan ke project S1** — spec wajib sebelum coding di P15+.
5. Guru tidak perlu software khusus; kertas, papan, atau Google Docs cukup.

**Hubungan spiral:** P06 = requirement spesifik → P07 = cara **menguji** requirement itu sudah terpenuhi atau belum.

---

## Recall Spiral

Opening **5 menit** — oral, tidak menakutkan.

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Minggu lalu brief 'gambar rumah' — kenapa hasil beda-beda?" | Instruksi ambigu; requirement kurang spesifik |
| "Apa beda requirement dengan 'harus bagus'?" | Requirement bisa diukur/diuji; "bagus" subjektif |
| "Satu poin brief poster P06 yang paling sulit dipenuhi teman?" | Siswa sebut contoh konkret dari PR mereka |

Jika kelas blank: tampilkan 2 sketsa poster — tanya "keduanya 'sudah jadi' — mana yang memenuhi brief teman?"

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan kirim template AC siap pakai ke WA grup — siswa **tulis ulang** dari brief P06 mereka |
| **Live modeling** | Guru ubah brief "website bagus" → 3 AC **live di papan**, salah satu sengaja terlalu vague, lalu perbaiki bersama |
| **Per baris / scope** | Setiap AC: baca satu per satu → tanya "bisa dicentang ya/tidak tanpa debat?" |
| **Recall** | Kaitkan ke trap P06 sebelum konsep AC baru |
| **Membaca kode** | Tidak ada JS — latihan **membaca checklist**: siswa lihat AC, prediksi pass/fail pada mockup |
| **No starter file** | Siswa bawa brief P06 sendiri; guru tidak distribusi dokumen "jawaban" |

---

## Materi Inti

### Transformasi belajar

**Dari:** "Bagus/menarik" (subjektif, debat panjang)  
**Ke:** Acceptance criteria yang bisa dicentang ✅ atau ditolak ❌ tanpa perdebatan selera.

### Analogi MA

Seperti **rubrik penilaian ujian**: bukan "jawaban benar secara feeling", tapi "ada 3 poin kunci — ada/tidak ada."

### Struktur AC yang baik

- Dimulai dengan kata kerja observable: *terbaca, tampil, berfungsi, tercantum*
- Satu kriteria = satu hal yang bisa dicek
- Hindari "dan" ganda dalam satu baris (pecah jadi 2 AC)
- Target audience jelas jika relevan ("siswa MA kelas X paham tanpa tanya")

### Definition of Done (pengantar singkat)

DoD = meta-checklist: "Kapan kita berhenti revisi?"  
Contoh: "Semua AC tercentang + 1 teman sudah uji + typo utama diperbaiki."  
Tidak perlu deep dive — cukup siswa tahu AC vs DoD beda level.

### Contoh transformasi live (guru hafalkan pola, jangan baca slide)

| Brief vague | AC terukur |
|-------------|------------|
| Website bagus untuk OSIS | [ ] Nama kegiatan & tanggal terbaca di layar HP |
| Poster menarik | [ ] Kontras teks/latar cukup — terbaca dari 2 meter |
| Mudah dipakai | [ ] Pengguna baru menemukan menu utama ≤ 10 detik (uji 1 teman) |

---

## Alur Live Coding / Live Modeling

> **Bukan coding** — modeling spesifikasi live di papan/Docs. Siswa **mengamati proses**, lalu mengetik versi sendiri.

### Persiapan

- Papan atau proyektor + dokumen kosong
- Brief contoh guru: *"Buat landing page kegiatan MA yang bagus"*
- **Tidak boleh** sudah ada di laptop siswa: file AC lengkap, template rubrik siap tempel

### Skrip live (90 menit — selaras modul)

```text
[LANGKAH 1 — Opening 0–5 menit]
Tampilkan: brief "bikin website bagus"
Ucapkan: "Kalau saya nilai tugas ini besok — bisa adil? Atau debat 'bagus'?"
Tanya siswa: "Siapa yang pernah dapat komentar 'kurang menarik' tanpa tahu harus ubah apa?"
Scope: framing — hari ini kita bikin alat centang, bukan debat selera.

[LANGKAH 2 — Experience 5–18 menit]
Tampilkan: 2 mockup/sketsa berbeda — keduanya "bagus" menurut pembuat
Ucapkan: "Keduanya jujur effort-nya bagus. Tapi brief tadi — mana yang LULUS?"
Tanya: "Kalau klien/OSIS bilang 'bukan ini' — mereka kurang spesifik atau kita?"
Scope: empati ke pembuat vs kebutuhan penguji.

[LANGKAH 3 — Trap 18–28 menit]
Tulis di papan: BAGUS · MENARIK · KEREN · MODERN
Ucapkan: "Kata-kata ini trap — semua orang artinya beda."
Tanya: "Apa satu kata subjektif yang sering muncul di brief kalian?"
Scope: vocabulary trap — identifikasi dulu sebelum perbaikan.

[LANGKAH 4 — Clarify 28–38 menit]
Live transformasi — ketik di papan:
  "Website bagus" → "Informasi waktu & tempat terbaca tanpa scroll"
  → "[ ] Waktu kegiatan terbaca di layar HP"
  → "[ ] Tempat kegiatan terbaca di layar HP"
Ucapkan: "Saya pecah 'bagus' jadi bisa dicentang ya atau tidak."
Tanya: "AC nomor 2 — kalau tempat cuma di footer kecil, pass atau fail?"
Scope: setiap baris AC = satu uji pass/fail.

[LANGKAH 5 — Concept 38–48 menit]
Intro: Acceptance Criteria + pengantar DoD (1 kalimat)
Ucapkan: "AC = apa yang harus benar. DoD = kapan kita anggap selesai total."
Tanya: "Bedanya requirement P06 dengan AC hari ini?"
Scope: requirement = isi; AC = cara buktikan isi itu ada.

[LANGKAH 6 — Practice 48–70 menit]
Siswa buka brief P06 (poster/website) — tambah **5 AC checkbox**
Guru keliling — TTS per AC siswa:
  Tebak: "Baris ini bisa dicentang tanpa debat?"
  Tanya: "Siapa yang menguji? Bagaimana caranya?"
  Spelling: bantu ubah vague → observable
Scope: siswa mengetik/menulis sendiri — bukan copy papan guru.

[LANGKAH 7 — Practice 2 70–85 menit]
Pasangan: tukar sketsa/brief — uji centang AC pada karya teman
Ucapkan: "Kalau ragu — default fail, bukan 'agak-agak pass'."
Tanya: "AC mana yang paling sering fail? Kenapa brief awal kurang?"
Scope: peer review = simulasi client.

[LANGKAH 8 — Exit 85–90 menit]
Ucapkan: "Tulis 1 AC yang paling sulit dipenuhi + kenapa."
Scope: refleksi → masuk P08 (kondisi lulus/tidak lulus).
```

---

## Latihan Membaca Kode

> Tidak ada kode program — latihan **membaca spesifikasi** (skill paralel membaca kode nanti).

### Snippet A — Brief + AC

```text
Brief: "Banner digital untuk pengumuman sholat Jumat."

Acceptance Criteria:
[ ] Waktu sholat Jumat tercantum jelas
[ ] Banner terlihat bagus
[ ] Ukuran cocok untuk TV kelas
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| AC mana yang subjektif? | "Terlihat bagus" — tidak bisa dicentang konsisten |
| Ubah AC #2 jadi terukur | Contoh: "[ ] Teks kontras — terbaca dari belakang kelas (uji 1 siswa)" |
| AC #1 pass jika waktu cuma "Jumat"? | Fail — harus spesifik (mis. "12:30 WIB" atau jam sholat sekolah) |

### Snippet B — Uji mockup

```text
AC: [ ] Logo madrasah tampil di pojok kiri atas
Mockup: logo ada di tengah, besar
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Pass atau fail? | **Fail** — posisi tidak sesuai AC |
| Debate "tapi logo tetap kelihatan"? | AC menguji posisi spesifik, bukan "ada logo saja" |

---

## Praktik Mandiri

Siswa **mengetik/menulis versi sendiri** — arahkan:

1. Ambil brief P06 (minimal 5 poin requirement) → turunkan **5 AC checkbox**.
2. Satu AC harus menyebut **siapa penguji** atau **cara uji** (mis. "terbaca dari 2 meter").
3. Tukar dengan teman → centang ✅/❌ pada sketsa/gambar teman (bukan diskusi selera).
4. Revisi **1 AC** yang fail paling sering.

**Variasi kelas lambat:** guru beri brief baru "undangan digital Maulid" — siswa tulis 3 AC dari nol.

**Variasi kelas cepat:** tambah 1 baris DoD + edge case ("bagaimana jika layar HP vs proyektor?").

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Menulis AC = mengulang brief dengan kata lain | Model live transformasi vague → observable; minta siswa baca AC sambil pura-pura jadi "client picky" |
| AC terlalu banyak (15+) | Batasi 5–7; tanya "mana 3 yang kalau fail = produk gagal total?" |
| AC tidak bisa diuji ("informatif") | Tanya: "Besok saya centang — dengan apa?" |
| Peer review jadi pujian | Guru contohkan 1 fail tegas + alasan dari AC, bukan taste |
| Copy AC dari teman/WA | Ingatkan etika: brief tiap siswa beda — AC harus dari requirement sendiri |
| Guru kirim PDF rubrik lengkap | Hanya contoh 1 baris di papan; siswa bangun sendiri |

---

## Rujukan

- Modul: [X-S1-P07](../../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md)
- Prasyarat: [X-S1-P06 Gambar Rumah & Requirement](../../../kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md)
- Lanjutan: [X-S1-P08 ATM & If/Else](../../../kelas-x/semester-1/X-S1-P08_atm-if-else.md) — AC = kondisi lulus
- MM-23 · Capability CX-K1, CX-B1
- Etika global: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Brief "bagus/menarik" sudah di-trap dan ditransformasi live (bukan slide statis)
- [ ] Siswa punya ≥5 AC pada brief sendiri — bukan copy file guru
- [ ] Minimal 1 peer review pass/fail berdasarkan AC (bukan debat selera)
- [ ] Siswa bisa bedakan requirement vs acceptance criteria
- [ ] Exit ticket: 1 AC tersulit + alasan
- [ ] Recall P06 terpasang di opening
- [ ] Tidak ada distribusi template jawaban ke siswa

[← Indeks materi X-S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Allah · Diri · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ta-Ha 20:114 (Rabbi zidni ilma)

**Kait di kelas hari ini:** Bernalar & literasi digital sebagai ilmu bermanfaat.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
