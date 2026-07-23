# Pilot Tahap Awal CPLF — Panduan Operasional

**Versi:** 0.1  
**Audiens:** Guru Multimedia MA, koordinator mapel, kepala lab  
**Bukan:** desain penelitian kuantitatif (→ *hold*)

---

## 1. Mengapa pilot tahap awal?

Dokumentasi CPLF v0.1 sudah lengkap di kertas (108 modul + 108 materi guru + landasan teori). **Pilot tahap awal** menjawab pertanyaan praktis:

| Pertanyaan | Bukan pertanyaan (ditunda) |
|------------|----------------------------|
| Apakah alur 90 menit realistis? | Apakah CPLF lebih baik 0.5 SD dari metode X? |
| Apakah Cognitive Trap aman di kelas ini? | Signifikansi statistik pre-post |
| Apakah live coding + TTS bisa dijalankan guru? | Validitas rubrik antar-rater |
| Apa yang harus dipendekkan/diulang? | Publikasi jurnal |

> **Moto pilot:** *Lihat dulu framework hidup — baru ukur.*

---

## 2. Prinsip operasional

1. **Mulai kecil** — 3 pertemuan sebelum komit semester penuh.  
2. **Satu kelas cukup** — tidak perlu A/B test di tahap ini.  
3. **Catat, jangan perfection** — jurnal lapangan > instrumen panjang.  
4. **Etika siswa** — jangan rekam wajah untuk repo publik; anonymize catatan.  
5. **Revisi dokumentasi** — setiap blocker sistemik → usulkan patch modul/materi.  
6. **Hold penelitian formal** — proposal quasi-experiment menunggu Fase 1–2 selesai.

---

## 3. Fase pilot

### Fase 0 — Orientasi (1–2 minggu sebelum micro-pilot)

**Tujuan:** Guru memahami *DNA* CPLF, bukan hafal 108 modul.

| Aktivitas | Output |
|-----------|--------|
| Baca [03_Framework](../../03-framework/03_Framework_CPLF.md) + [Etika Penyampaian](../../06-modules/materi-pendukung/00_Panduan_Etika_Penyampaian.md) | Guru paham Learning Cycle & anti-copas |
| Walkthrough 1 modul + 1 materi pendukung (contoh P04) | Guru tahu beda modul vs materi |
| Simulasi 20 menit: facilitator vs lecture | Kesepakatan tim: tidak dump file solusi |
| Cek lab: browser, JS console, proyektor | [Checklist kesiapan](./12_Checklist_Kesiapan_Pilot.md) ✓ |
| Pilih paket micro-pilot | [14_Paket_Micro_Pilot_X-S1.md](./14_Paket_Micro_Pilot_X-S1.md) |

**Optional koordinator:** ringkasan Bab 4 [Landasan Teori](../10_Landasan_Teori_CPLF.md) (30 menit briefing).

---

### Fase 1 — Micro-pilot (3 pertemuan · ≈1 minggu)

**Rekomendasi default:** Kelas X Semester 1 — **P01, P04, P13**

| P | Mengapa dipilih | Uji komponen CPLF |
|---|-----------------|-------------------|
| [P01](../../06-modules/kelas-x/semester-1/X-S1-P01_masalah-sebelum-solusi.md) | Entry tanpa sintaks berat | Identity, problem framing |
| [P04](../../06-modules/kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md) | Cognitive Trap klasik | Experience → Concept (EXP_01) |
| [P13](../../06-modules/kelas-x/semester-1/X-S1-P13_error-debugging.md) | Setelah ada sedikit JS | Error culture, debug |

**Alternatif** jika kelas sudah lewat S1: gunakan 3 pertemuan paralel dari semester aktif — pastikan tetap ada **trap + clarify + practice**.

**Prosedur per pertemuan:**

```text
H-1  : Baca modul + materi pendukung; isi checklist pra-pertemuan
H    : Jalankan modul; catat jurnal lapangan (13)
H+1  : Refleksi 15 menit; tandai ✓/⚠/✗ di checklist pasca
```

**Kriteria "Fase 1 OK" (qualitative, cukup 2 dari 3):**

- [ ] ≥70% siswa ikut tanya/clarify (bukan diam total)  
- [ ] Guru selesai ≥80% timeline modul tanpa skip Experience  
- [ ] Minimal 1 momen "aha" tercatat di jurnal  
- [ ] Tidak ada insiden etika (copas massal / materi guru bocor)

Jika gagal → ulangi 1 pertemuan dengan penyesuaian (pendekkan practice, perkuat trap) sebelum Fase 2.

---

### Fase 2 — Blok awal (6 pertemuan · P01–P06)

**Tujuan:** Uji **sustain** — apakah spiral fondasi (framing → algoritma → requirement) jalan 3 minggu.

| Minggu | P | Fokus |
|--------|---|-------|
| 1 | P01–P02 | Problem + literasi |
| 2 | P03–P04 | Klarifikasi AI + algoritma |
| 3 | P05–P06 | Flowchart + requirement |

**Amati khusus:**

- Apakah siswa mulai pakai "pahami dulu" tanpa diingatkan?  
- Apakah P03 (AI) perlu dipindah urutan di kelas Anda?  
- Overload? — tandai unit mana perlu split 2 JP → 2 pertemuan.

**Output Fase 2:** memo 1 halaman — *Apa yang tetap · Apa yang diubah · Blocker infrastruktur*

---

### Fase 3 — Semester / tahun ajaran (setelah Fase 1–2 OK)

Lanjutkan indeks semester penuh ([X-S1_Index](../../06-modules/kelas-x/semester-1/X-S1_Index.md) dst.).

Project minggu P15–P18 **wajib** di pilot semester — CPLF tanpa project = incomplete test.

Penyesuaian jam sempit: ikuti catatan silabus masing-masing kelas.

---

## 4. Apa yang diamati (tanpa instrumen penelitian)

Gunakan [Jurnal Lapangan](./13_Template_Jurnal_Lapangan.md):

| Dimensi | Contoh catatan |
|---------|----------------|
| **Waktu** | Experience kehabisan 10 menit → practice terburu |
| **Trap** | Siswa tertawa vs uncomfortable — adjust tone |
| **Clarify** | Pertanyaan balik siswa — quality |
| **Live code** | Guru stuck — normal; model growth mindset |
| **AI/copas** | Siapa minta jawaban mentah? |
| **Infrastruktur** | WiFi, browser, proyektor |
| **Transfer** | Siswa hubungkan ke pelajaran lain? |

---

## 5. Loop revisi → dokumentasi v0.2

```text
Temuan lapangan
    → Kategorikan: modul | materi | experience | rubrik | infrastruktur
    → Patch kecil: langsung catat di memo sekolah
    → Patch besar: backlog CPLF (contoh: "P08 split 2 pertemuan")
    → Setelah 1 semester: ringkasan untuk revisi frozen docs
```

**Contoh trigger revisi:**

| Trigger | Aksi dokumentasi |
|---------|------------------|
| Trap P04 terlalu panjang | Potong Experience di modul + materi |
| TTS tidak jalan di kelas | Tambah contoh di Panduan Etika |
| Lab tanpa internet | Variante offline di materi pendukung |

---

## 6. Peran koordinator & KS

| Peran | Tugas pilot |
|-------|-------------|
| Guru mapel | Jalankan + jurnal |
| Koordinator | Fasilitasi Fase 0, kumpul memo mingguan |
| KS | Observasi 1 pertemuan (opsional), dukung jam/lab |
| Tim CPLF (internal) | Kurasi patch dari memo → CHANGELOG |

---

## 7. Yang sengaja ditunda (hold)

| Item | Alasan hold |
|------|-------------|
| Proposal penelitian / etik penelitian | User ingin lihat tahap awal framework dulu |
| Quasi-experiment 2 kelas | Butuh baseline operasional dulu |
| Validasi statistik rubrik | Butuh N pertemuan lebih besar |
| Pre-post standardized CT test | Fase setelah semester pilot |

Setelah Fase 2 selesai + memo jelas, baru buka diskusi proposal penelitian formal.

---

## 8. Timeline contoh (Kelas X, Semester 1)

```text
Minggu -2   Fase 0 orientasi
Minggu 1    Fase 1 — P01
Minggu 1    Fase 1 — P04
Minggu 2    Fase 1 — P13 → review micro
Minggu 3–5  Fase 2 — P02–P06
Minggu 6–18 Sisa S1 + project P15–P18
Akhir semester   Memo pilot → agenda v0.2
```

---

## 9. Checklist kelulusan tahap awal

Pilot tahap awal **cukup** jika:

- [ ] Micro-pilot (3 pertemuan) selesai + jurnal terisi  
- [ ] Memo Fase 2 (1 halaman) ada  
- [ ] Minimal 5 entri "usulan perbaikan" terdokumentasi  
- [ ] Keputusan eksplisit: **lanjut semester penuh** / **ulang Fase 1** / **pause**

---

[Checklist kesiapan →](./12_Checklist_Kesiapan_Pilot.md) · [Jurnal lapangan →](./13_Template_Jurnal_Lapangan.md) · [Paket micro X-S1 →](./14_Paket_Micro_Pilot_X-S1.md)

[← Pilot README](./README.md)
