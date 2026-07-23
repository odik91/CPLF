# Materi Pendukung Guru — X-S2-P16 Revisi Project S2

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P16 |
| Modul pertemuan | [X-S2-P16_revisi-project](../../../kelas-x/semester-2/X-S2-P16_revisi-project.md) |
| Unit | X2.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S2-* |
| Capability | ITR (wajib level ≥2) |
| Ada live code? | **Facilitator — revisi & reasoning, bukan feature baru** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari feedback peer → **iterasi terarah** dengan bukti — bukan tambah fitur besar.
- **Timeline:** gallery walk → revisi fokus → before/after → final check DoD.
- **Gallery walk (10 menit):** lihat 3 project teman — catat **1 ide UX** (bukan copy kode).
- **Bukti iterasi wajib:** screenshot/commit sebelum–sesudah + 1 paragraf apa berubah & **mengapa**.
- **ITR level ≥2:** minimal 2 siklus revisi terdokumentasi (P15 + hari ini).
- **Hari ini bukan feature baru besar** — perbaikan dari peer + self-audit DoD.
- **Final check DoD:** semua requirement wajib PRJ ✅ sebelum P17 presentasi.

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Peer P15 — 2 saran apa yang kamu terima? | (siswa spesifik — UX, validasi, layout) |
| Apa beda revisi vs fitur baru? | Revisi = perbaikan terarah; fitur baru = scope creep |
| Bukti iterasi ITR — apa yang sudah kamu kumpulkan? | Screenshot/commit/catatan before/after |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator** | Revisi milik siswa — guru coach reasoning, bukan co-author. |
| **Jangan takeover keyboard** | Gallery walk = lihat, catat ide — **jangan** edit file teman. |
| **Jangan bagikan solusi** | Ide UX dari gallery ≠ copy CSS/JS teman — adaptasi ke spec sendiri. |
| **Clarifying questions** | "Saran peer mana yang belum?", "Mengapa perubahan ini?" |
| Gallery walk | Larangan screenshot kode teman untuk paste |
| Dokumentasi | Guru pastikan paragraf "mengapa" ada — bukan hanya screenshot |

### Script coaching revisi

```text
"Ini revisi peer atau ide gallery? — keduanya OK jika cocok spec kamu."
"Perubahan ini requirement PRJ atau nice-to-have?"
"Tulis 1 kalimat mengapa sebelum commit/screenshot after."
"DoD final — acceptance mana masih ❌?"
```

### Larangan hari revisi

| Jangan | Mengapa |
|--------|---------|
| Redesign total 60 menit | Bukan iterasi — scope creep |
| Copy 3 project teman digabung | TEC/COM — ownership & reasoning |
| Guru polish menit terakhir | Merusak bukti ITR untuk P17 |

---

## 4. Materi Inti

### Gallery walk (0–10 menit)

- Siswa rotation cepat — 3 station project teman.
- Catat **1 ide UX** di sticky note: "Yang bisa saya adaptasi (bukan copy): …"
- Guru ingatkan: inspirasi ≠ duplicate code.

### Revisi fokus (10–70 menit)

Prioritas revisi (urutan):

1. **Saran peer P15** yang belum diterapkan
2. **Gap DoD** dari self-test
3. **1 ide UX** dari gallery — jika align spec

Jenis revisi yang **on-scope**:

| Jenis | Contoh |
|-------|--------|
| Validasi | Pesan error jelas, edge case kosong/invalid |
| UX | Spacing, kontras, label form, feedback submit |
| Robustness | Guard null selector, duplikat input |
| Narasi | Teks "mengapa hasil" di PRJ-01 |

Jenis revisi **off-scope** (potong):

- Fitur login, database, animasi berat
- Ganti PRJ/tema total

Guru keliling — clarifying questions, timer 40/20 menit.

### Before/after (70–80 menit)

Wajib 1 set bukti:

```text
SEBELUM: [screenshot / commit hash / tanggal]
SESUDAH: [screenshot / commit hash / tanggal]
PARAGRAF: "Saran peer: … / Ide gallery: … / Revisi: … / Mengapa: …"
```

### Final check DoD (80–90 menit)

Centang checklist PRJ — guru spot-check 3–5 kelompok.
Siap P17: demo path + reasoning + bukti iterasi.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Sticky note gallery walk.
- Template paragraf iterasi **kosong** di papan (siswa isi sendiri).
- Checklist DoD PRJ visible.
- **Tidak** sesi coding guru.

### Skrip facilitator

```text
[0–10] Gallery walk — 3 project, 1 ide UX, no copy code
[10–70] REVISI — peer + self + ide gallery (on-scope only)
        Guru: "Mengapa perubahan ini?" setiap 10 menit rotation
[70–80] Before/after + paragraf iterasi
[80–90] Final check DoD — siap presentasi P17
```

### Modeling paragraf iterasi (papan)

Guru tulis contoh **generic** (bukan solusi PRJ):

```text
"Saran peer: pesan error hanya alert — user tidak tahu field mana.
 Revisi: pesan merah di bawah input #nominal.
 Mengapa: acceptance PRJ minta validasi user-friendly — alert tidak persisten."
```

---

## 6. Latihan Membaca Kode

Latihan **audit revisi** — bandingkan before/after snippet (proyeksi):

```javascript
// BEFORE — peer saran: validasi lemah
function hitung() {
  const n = document.getElementById("nominal").value;
  const hasil = n * 0.025;
  document.getElementById("out").textContent = hasil;
}

// AFTER — siswa revisi (tampilkan setelah diskusi)
function hitung() {
  const el = document.getElementById("nominal");
  const n = Number(el.value);
  const out = document.getElementById("out");
  const err = document.getElementById("err");
  if (el.value.trim() === "" || Number.isNaN(n) || n < 0) {
    err.textContent = "Nominal harus angka ≥ 0";
    out.textContent = "";
    return;
  }
  err.textContent = "";
  out.textContent = n * 0.025;
}
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Apa yang diperbaiki vs before? | Empty, NaN, negatif — pesan di DOM |
| Ini fitur baru atau revisi? | Revisi — validasi sudah di requirement |
| Kalimat "mengapa" untuk paragraf iterasi? | DoD + peer saran + UX persisten |

```css
/* Gallery walk — bandingkan spacing */
.kartu { margin: 4px; }
/* vs */
.kartu { margin: 1rem 0; padding: 1rem; }
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Ide UX dari gallery — adaptasi aman? | Spacing/konsistensi — bukan copy palette penuh tanpa reasoning |

---

## 7. Praktik Mandiri Siswa

1. **Gallery walk** — 3 project, 1 ide UX tercatat.
2. **Revisi 60 menit** — peer + DoD gap (+ ide gallery on-scope).
3. **Before/after** — screenshot atau commit.
4. **Paragraf iterasi** — apa berubah & mengapa.
5. **Final check DoD** — semua requirement wajib ✅.
6. **Tidak** copy-paste kode teman — adaptasi dengan reasoning.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Gallery walk = screenshot kode teman | Ingatkan inspirasi UX, bukan copas |
| Revisi tanpa paragraf mengapa | Wajibkan 1 paragraf sebelum exit |
| Tambah fitur besar | Redirect ke DoD + saran peer |
| Guru fix CSS "biar presentasi lancar" | Tolak — dokumentasikan blocker untuk P17 |
| Before/after identik | Tanya — revisi apa yang sebenarnya dilakukan? |

---

## 9. Rujukan

- Modul pertemuan: [X-S2-P16](../../../kelas-x/semester-2/X-S2-P16_revisi-project.md)
- Peer review: [P15 materi pendukung](./X-S2-P15_peer-review.md)
- Presentasi: [P17 materi pendukung](./X-S2-P17_presentasi-s2.md)
- Rubrik project: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- PRJ bank: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Gallery walk — ide UX tercatat, no code copy
- [ ] Revisi on-scope — bukan feature baru besar
- [ ] Before/after + paragraf iterasi lengkap
- [ ] ITR ≥2 siklus terdokumentasi (P15 + P16)
- [ ] Final DoD check — siap P17
- [ ] **Tidak** takeover keyboard / solusi penuh

[← Indeks S2](./X-S2_Materi_Index.md)
