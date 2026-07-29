# Handout Siswa — X-S2-P14

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P14_project-s2-build-2.md](../../../kelas-x/semester-2/X-S2-P14_project-s2-build-2.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

- **Target hari ini:** **freeze feature** — polish CSS + edge case validasi + self-test acceptance + **demo script 3 menit** untuk P15.
- **Timeline:** stand-up (target freeze) → build polish → self-test DoD → demo script → siap peer review.
- **Demo script template** (dari modul):
  1. Masalah (20 detik)
  2. Demo fitur (90 detik)
  3. Mengapa solusi ini (40 detik)
  4. Kesulitan + perbaikan (30 detik)
- **Freeze feature:** tidak ada fitur besar baru hari ini — hanya perbaikan yang mendukung DoD & demo.
- **Self-test acceptance:** siswa centang checklist PRJ sendiri — guru spot-check 3–5 kelompok.
- **Polish ≠ ganti desain:** spacing, kontras, pesan error jelas — bukan redesign total.
- **Prep P15:** artefak harus bisa didemo peer 3 menit; worksheet peer kosong siap di kelas depan.

---

## 3. Materi praktik

### Stand-up — target freeze (0–10 menit)

Setiap kelompok sebut **1 kalimat**: "Hari ini selesai jika …" — harus measurable vs acceptance.

Guru catat yang masih scope creep → ingatkan freeze.

### Build polish (10–60 menit)

Fokus umum S2:

| Area | Contoh polish |
|------|---------------|
| CSS | Spacing konsisten, kontras teks, responsive sederhana |
| Validasi | Pesan error di DOM (bukan hanya alert), field kosong/invalid |
| JS edge case | Array kosong, duplikat input, selector aman |
| Aksesibilitas ringan | Label form, alt gambar profil (PRJ-04) |

Guru keliling — **clarifying questions only**, timer mental 40/30/20 menit.

### Self-test acceptance (60–70 menit)

Siswa jalankan checklist DoD PRJ — tandai ✅/❌.

### Demo script 3 menit (70–85 menit)

Outline di kertas — **bukan** slide panjang:

```text
1. Masalah + user (20 d)
2. Demo happy path (90 d)
3. Mengapa solusi ini — layout/validasi/struktur (40 d)
4. Satu kesulitan + perbaikan (30 d)
```

Guru model **kalimat reasoning** di papan (generic):

```text
✓ "Saya pakai flex column karena form panjang — user scroll natural di HP."
✗ "CSS-nya bagus." (terlalu vague)
```

### Siap peer review P15 (85–90 menit)

Checklist exit: artefak bisa dibuka peer, demo script ada, tidak ada secret URL/file guru.

---

## 4. Alur pertemuan (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up — target freeze feature hari ini |
| 10–60 | Build polish: CSS, edge case validasi |
| 60–70 | Self-test acceptance criteria |
| 70–85 | Prepare 3 menit demo script (bukan slide panjang) |
| 85–90 | Siap peer review P15 |

---

## 5. Lembar kerja / latihan

Latihan **self-test + peer prep** — snippet proyeksi, siswa identifikasi gap DoD:

```javascript
function validasiForm(nominal) {
  if (nominal > 0) {
    return true;
  }
}
// Panggilan: validasiForm("") — user tekan submit
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Acceptance "field kosong ditolak" terpenuhi? | Tidak — `""` tidak > 0 tapi tidak ada pesan ke user |
| Saran polish (bukan fix guru)? | Cek empty string eksplisit + tampilkan pesan di DOM |

```html
<!-- Peer review prep — clarity HTML -->
<input type="text" placeholder="Nama">
<button onclick="simpan()">Simpan</button>
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Masalah aksesibilitas/UX? | Tidak ada `<label>` — screen reader & form jelas kurang |
| Saran spesifik untuk P15? | "Tambah label for=id — acceptance user-friendly" |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
