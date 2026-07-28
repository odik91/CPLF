# Handout Siswa — X-S2-P15
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S2-P15_peer-review.md](../../kelas-x/semester-2/X-S2-P15_peer-review.md)
---
## 1. Tujuan pembelajaran
_Lihat transformasi di modul pertemuan._

## 2. Materi
### Aturan peer (0–5 menit)

Tegaskan dari rubrik:

- 2 pujian spesifik (bukan "bagus")
- 2 saran dapat ditindak (bukan "kurang rapi")
- Reviewee wajib revisi — bukti sebelum–sesudah
- Kritik asumsi/kode — bukan orang

### Demo round-robin (5–25 menit)

- 3 menit demo per kelompok (adjust jumlah).
- Guru: timekeeper, ingatkan "mengapa" singkat setelah demo.
- Rotasi cepat — tidak semua feedback lisan panjang (worksheet menyusul).

### Peer review worksheet (25–50 menit)

Pasangan/kelompok silang — hindari teman dekat yang selalu copas.

Isi rubrik lengkap — guru float, dengar apakah feedback memenuhi COM:

| Aspek web S2 | Contoh observasi peer |
|--------------|----------------------|
| HTML/semantik | "Nav `<nav>` jelas — section profil terstruktur" |
| CSS/layout | "Tombol submit tidak terlihat di layar kecil" |
| JS/validasi | "Array kosong — list tidak tampil pesan" |
| Reasoning | "Belum jelas mengapa validasi di JS bukan HTML saja" |

### Revisi wajib ≥2 saran (50–70 menit)

Owner kode revisi sendiri — guru cek:

- Screenshot before/after, atau
- Commit message singkat, atau
- Catatan: "Saran: … / Revisi: …"

### Update acceptance checklist (70–85 menit)

Centang ulang DoD PRJ setelah revisi — self + 1 peer confirm.

### Exit (85–90 menit)

1 kalimat: "Revisi apa yang paling berdampak?" — prep P16.

---
## 5. Alur pertemuan (90 menit)
| Menit | Aktivitas |
|-------|-----------|
| 0–5 | Aturan peer: kritik asumsi/kode, bukan orang |
| 5–25 | Demo round-robin 3 menit × 6 kelompok (adjust) |
| 25–50 | Peer review worksheet lengkap |
| 50–70 | Revisi wajib — minimal 2 saran |
| 70–85 | Update acceptance checklist |
| 85–90 | Exit: revisi apa |

---

## 6. Lembar kerja / latihan
Latihan **peer review via membaca kode** — proyeksi snippet, siswa beri pujian/saran **tanpa fix**:

```javascript
const daftar = [];
function tambah(nama) {
  daftar.push(nama);
  document.getElementById("list").innerHTML = daftar.map(n => `<li>${n}</li>`).join("");
}
// Peer uji: tambah("") — klik dua kali cepat
```

| Pertanyaan membaca (sebagai peer) | Kunci untuk diskusi |
|-----------------------------------|---------------------|
| Acceptance "nama kosong ditolak"? | Tidak — push tanpa validasi |
| Pujian spesifik? | Mis. render list dengan map + template literal |
| Saran spesifik (bukan kode guru)? | "Validasi trim/empty sebelum push + pesan ke user" |
| Pertanyaan mengapa? | "Mengapa innerHTML full replace vs append satu `<li>`?" |

```html
<!-- UX review — tanpa JS -->
<form>
  <input type="email">
  <button type="submit">Kirim</button>
</form>
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Saran aksesibilitas/UX? | Label, type mismatch, feedback submit |
| Pujian spesifik? | (jika ada) mis. form ringkas |

**Praktik:** 10 menit awal worksheet — siswa latih 1 snippet proyeksi sebelum review artefak asli.

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
