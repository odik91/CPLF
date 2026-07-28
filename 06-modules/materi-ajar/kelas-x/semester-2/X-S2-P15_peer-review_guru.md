# Materi Guru Lengkap — X-S2-P15
**Modul:** [X-S2-P15_peer-review.md](../../kelas-x/semester-2/X-S2-P15_peer-review.md)
**Materi pendukung sumber:** [X-S2-P15_peer-review.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-2/X-S2-P15_peer-review.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P15 — Peer Review Project S2

| Field | Isi |
|-------|-----|
| Kode | X-S2-P15 |
| Unit | X2.7 |
| Durasi | 2 JP = 90 menit |
| Rubrik | [09_Rubrik_Peer_Review.md](../../09-rubrik/09_Rubrik_Peer_Review.md) |

## Timeline (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–5 | Aturan peer: kritik asumsi/kode, bukan orang |
| 5–25 | Demo round-robin 3 menit × 6 kelompok (adjust) |
| 25–50 | Peer review worksheet lengkap |
| 50–70 | Revisi wajib — minimal 2 saran |
| 70–85 | Update acceptance checklist |
| 85–90 | Exit: revisi apa |

---

## Formatif

**COM**, **ITR** (reviewer & reviewee)

---

## Catatan Guru

Modelkan 1 peer review sehat di depan kelas sebelum siswa mulai.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P15 Peer Review Project S2


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P15 |
| Modul pertemuan | [X-S2-P15_peer-review](../../../kelas-x/semester-2/X-S2-P15_peer-review.md) |
| Unit | X2.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S2-* |
| Rubrik | [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| Capability | COM, ITR (reviewer & reviewee) |
| Ada live code? | **Peer review protocol — bukan solusi guru** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Protokol peer review S2:** kritik **asumsi/kode/UX**, bukan orang — aturan dibuka 5 menit pertama.
- **Timeline:** aturan peer → demo round-robin 3 menit → worksheet lengkap → revisi wajib ≥2 saran → update acceptance → exit catatan revisi.
- **Rubrik peer:** [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) — 2 pujian spesifik + 2 saran dapat ditindak + 1 pertanyaan klarifikasi opsional.
- **Perbedaan S1 vs S2 peer:** review **halaman web** — layout, validasi, interaksi DOM, bukan hanya logika console.
- **Revisi wajib S2:** minimal **2 saran** diterapkan (S1 = 1) — bukti before/after.
- **Guru wajib modelkan** 1 peer review sehat di depan kelas **sebelum** siswa mulai (modul catatan guru).
- **Round-robin demo:** ±6 kelompok × 3 menit — adjust jumlah presenter vs waktu.
- **Varian PRJ berbeda** antar kelompok — jika artefak mirip persis, selidiki proses (copas).

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Demo script P14 — 4 bagian apa? | Masalah / demo / mengapa / kesulitan+perbaikan |
| Apa beda feedback debug vs peer review? | Debug = gejala error; peer = clarity, UX, logic, DoD |
| Aturan peer CPLF — kritik siapa? | Asumsi & kode — **bukan** orang |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator + modeler** | Guru model 1 review sehat — lalu float, tidak fix PRJ. |
| **Jangan takeover keyboard** | Saat peer review: observer; reviewer **tidak** edit file teman. |
| **Jangan bagikan solusi** | Peer **tidak** patch CSS/JS teman — hanya saran; owner yang revisi. |
| **Clarifying questions** | Guru model: "Baris/selector mana?", "Apa yang user lihat jika …?" |
| Membaca kode | Peer **baca** snippet bersama — prediksi behavior sebelum saran |
| Copas antar PRJ | Red flag — minta jelaskan wireframe & reasoning sendiri |

### Protokol peer review (ringkas untuk siswa — guru ucapkan)

```text
1. Demo 3 menit — presenter jalankan, bukan guru
2. Reviewer diamkan dulu 30 detik — catat observasi
3. Worksheet: 2 pujian SPESIFIK + 2 saran ACTIONABLE
4. 1 pertanyaan "mengapa?" (opsional, dari rubrik)
5. Owner revisi — reviewer tidak ketik fix
6. Larangan: ejek, ranking IQ, spoil PRJ kelas lain
```

### Larangan peer review toxic

| Jangan | Ganti dengan |
|--------|--------------|
| "Jelek" / "Norak" | "Kontras teks di section X sulit dibaca karena …" |
| Fix kode teman langsung | "Coba cek validasi field kosong di form …" |
| "Kurang rapi" (vague) | "Spacing antar kartu jadwal tidak konsisten — acceptance UX?" |
| Ranking kelompok | Rubrik individu vs DoD sendiri |

### Etika guru saat modeling review

Guru demo di **papan/proyektor artefak volunteer** — tulis **kalimat feedback**, bukan patch kode:

```text
✓ Pujian: "Label form jelas — user tahu field zakat vs haul."
✓ Saran: "Saat input negatif, pesan error belum muncul di DOM."
✗ "Ganti jadi flex grid begini:" (larangan)
```

---

## 4. Materi Inti

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Rubrik peer 1 halaman di papan + link [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md).
- Worksheet kosong — **bukan** contoh terisi guru.
- List pasangan — variasi PRJ jika memungkinkan.
- Volunteer artefak untuk **model review** (izin siswa).

### Skrip facilitator

```text
[0–5] Aturan peer + rubrik — kritik kode, bukan orang
[5–10] MODEL 1 peer review sehat (artefak volunteer)
        Guru tulis kalimat pujian/saran di papan — TANPA patch kode
[10–25] Demo round-robin 3 menit × N kelompok
[25–50] Worksheet peer — 2+2 spesifik + pertanyaan mengapa
[50–70] Revisi wajib ≥2 saran — owner ketik sendiri
[70–85] Update acceptance checklist
[85–90] Exit ticket: revisi terbesar
```

### Modeling review sehat (contoh script guru)

```text
"Presenter, demo happy path 90 detik — lalu 30 detik mengapa layout form."
(After demo)
"Saya sebagai reviewer catat:
 PUJIAN: 'Pesan error merah di bawah field — saya langsung tahu salah di mana.'
 PUJIAN: 'Tombol disabled saat loading — UX jelas.'
 SARAN: 'Placeholder saja tanpa label — teman tunanetra sulit.'
 SARAN: 'Edge case: submit dua kali cepat — data duplikat?'
 PERTANYAAN: 'Mengapa simpan di array bukan langsung DOM only?'"
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Ikuti demo round-robin** — presenter jalankan sendiri.
2. **Worksheet rubrik lengkap** — 2 pujian + 2 saran spesifik.
3. **Revisi ≥2 saran** — dengan bukti before/after.
4. **Update acceptance checklist** — post-revisi.
5. **1 pertanyaan "mengapa?"** ke presenter lain (rubrik).
6. **Tidak** mengerjakan PRJ teman — peer review only.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Peer review vague ("bagus") | Model contoh spesifik di papan |
| Teman fix CSS/JS langsung | "Owner yang ketik — kamu hanya saran" |
| Hanya 1 revisi | Wajibkan ≥2 — modul S2 eksplisit |
| Guru skip modeling review | **Wajib** 5 menit model sebelum siswa mulai |
| Roast desain personal | Moderasi — redirect ke UX & DoD |
| Tidak baca kode — hanya lihat tampilan | Latihan snippet §6 dulu |

---

## 9. Rujukan

- Modul pertemuan: [X-S2-P15](../../../kelas-x/semester-2/X-S2-P15_peer-review.md)
- Rubrik peer: [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md)
- Build prep: [P14 materi pendukung](./X-S2-P14_project-s2-build-2.md)
- Revisi lanjut: [P16 materi pendukung](./X-S2-P16_revisi-project.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Model 1 peer review sehat sebelum siswa mulai
- [ ] Worksheet rubrik lengkap — feedback spesifik (2+2)
- [ ] Bukti revisi ≥2 saran per kelompok
- [ ] **Tidak** takeover keyboard / solusi penuh
- [ ] Acceptance checklist updated post-revisi
- [ ] Tidak ada feedback toxic / ranking
- [ ] Exit ticket revisi terkumpul

[← Indeks S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
