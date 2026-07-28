# Handout Siswa — X-S2-P14
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S2-P14_project-s2-build-2.md](../../kelas-x/semester-2/X-S2-P14_project-s2-build-2.md)
---
## 1. Tujuan pembelajaran
_Lihat transformasi di modul pertemuan._

## 2. Materi
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
Guru float: "Tiga uji validasi PRJ-01 — sudah?" "Render list kosong PRJ-02 — pesan apa?"

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
## 5. Alur pertemuan (90 menit)
| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up — target freeze feature hari ini |
| 10–60 | Build polish: CSS, edge case validasi |
| 60–70 | Self-test acceptance criteria |
| 70–85 | Prepare 3 menit demo script (bukan slide panjang) |
| 85–90 | Siap peer review P15 |

---

## 6. Lembar kerja / latihan
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

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
