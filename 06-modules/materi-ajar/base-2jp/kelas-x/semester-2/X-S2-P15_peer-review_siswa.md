# Handout Siswa — X-S2-P15

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P15_peer-review.md](../../../kelas-x/semester-2/X-S2-P15_peer-review.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

- **Protokol peer review S2:** kritik **asumsi/kode/UX**, bukan orang — aturan dibuka 5 menit pertama.
- **Timeline:** aturan peer → demo round-robin 3 menit → worksheet lengkap → revisi wajib ≥2 saran → update acceptance → exit catatan revisi.
- **Rubrik peer:** [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) — 2 pujian spesifik + 2 saran dapat ditindak + 1 pertanyaan klarifikasi opsional.
- **Perbedaan S1 vs S2 peer:** review **halaman web** — layout, validasi, interaksi DOM, bukan hanya logika console.
- **Revisi wajib S2:** minimal **2 saran** diterapkan (S1 = 1) — bukti before/after.
- **Guru wajib modelkan** 1 peer review sehat di depan kelas **sebelum** siswa mulai (modul catatan guru).
- **Round-robin demo:** ±6 kelompok × 3 menit — adjust jumlah presenter vs waktu.
- **Varian PRJ berbeda** antar kelompok — jika artefak mirip persis, selidiki proses (copas).

---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–5 | Aturan peer: kritik asumsi/kode, bukan orang |
| 5–25 | Demo round-robin 3 menit × 6 kelompok (adjust) |
| 25–50 | Peer review worksheet lengkap |
| 50–70 | Revisi wajib — minimal 2 saran |
| 70–85 | Update acceptance checklist |
| 85–90 | Exit: revisi apa |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Hujurat 49:10 · HR Bukhari/Muslim (kasih saudara)

**Kait di kelas hari ini:** Kritik kode/asumsi, bukan personal.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
