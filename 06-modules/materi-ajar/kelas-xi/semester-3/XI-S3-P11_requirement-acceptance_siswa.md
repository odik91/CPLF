# Handout Siswa — XI-S3-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P11_requirement-acceptance.md](../../../kelas-xi/semester-3/XI-S3-P11_requirement-acceptance.md)

---

## 1. Tujuan pembelajaran

Dari “bikin bagus” → **requirement testable** dengan checkbox.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. 3 acceptance siap kickoff
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
