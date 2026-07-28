# Handout Siswa — X-S1-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P07_spesifikasi-acceptance.md](../../../kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md)

---

## 1. Tujuan pembelajaran

Dari “bagus/menarik” (subjektif) → **acceptance criteria** yang bisa dicentang ✅/❌.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 1 criteria yang paling sulit dipenuhi
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
