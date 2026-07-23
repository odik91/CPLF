# Materi Pendukung Guru — X-S2-P13 Project S2 Build (1)

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya. Isinya skrip, jawaban, dan etika internal CPLF.

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P13 |
| Modul pertemuan | [X-S2-P13_project-s2-build-1](../../../kelas-x/semester-2/X-S2-P13_project-s2-build-1.md) |
| Unit | X2.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S2-* (pilihan [P12 kickoff](../../../kelas-x/semester-2/X-S2-P12_project-s2-kickoff.md)) |
| Capability | ITR, TEC, OBS |
| Ada live code? | **Facilitator + debug clinic — bukan build untuk siswa** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Format build week S2:** stand-up → build core feature (DoD) → demo 30 detik → debug clinic (CSS/selector) → exit blocker.
- **Perbedaan S1 vs S2 build:** artefak = **halaman web terintegrasi** (HTML + CSS + JS), bukan console-only.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker — max 1 menit per kelompok.
- **Core feature first:** prioritaskan requirement wajib PRJ (form, validasi, render list, dll.) sebelum polish visual.
- **Checkpoint questions guru** (dari modul): requirement mana belum ✅? validasi user-friendly? siapa audience?
- **Debug clinic S2:** fokus **CSS layout** (flex/grid overflow) dan **JS selector** (`querySelector` null, event tidak terpasang).
- **Scaffolding stations** (jika >40% stuck):
  - A: struktur HTML semantik + wireframe
  - B: CSS layout (flex, spacing, responsive sederhana)
  - C: DOM + event + validasi JS
- **Catat siswa perlu scaffolding** dari P11/P12 — prioritaskan rotasi berkeliling.
- **Empat opsi PRJ S2:** [PRJ-01 Zakat UI](../../../08-project/PRJ_X_S2_01_Zakat_UI.md) · [PRJ-02 Jadwal](../../../08-project/PRJ_X_S2_02_Jadwal_Kegiatan.md) · [PRJ-03 Absensi](../../../08-project/PRJ_X_S2_03_Absensi_Mini.md) · [PRJ-04 Profil Ekskul](../../../08-project/PRJ_X_S2_04_Profil_Ekskul.md)

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Kickoff P12 — acceptance criteria kamu apa? | (siswa sebut 3 checkbox measurable dari spec) |
| Sintesis P11 — urutan bangun halaman mini? | HTML struktur → CSS layout → JS interaksi |
| Protokol debug dari S1 — gejala dulu atau langsung fix? | Gejala (OBS) → hipotesis → uji 1 perubahan (ITR) |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | 90 menit build milik siswa — guru ≤10 menit front-of-class. |
| **Jangan takeover keyboard** | Di depan laptop siswa: tanya, tunjuk DevTools, **jangan** ketik fix HTML/CSS/JS. |
| **Jangan bagikan solusi project** | Tidak paste repo lengkap, starter siap jalan, atau "contoh PRJ S2 selesai" via WA. |
| **Clarifying questions** | Ganti "begini kodenya" dengan "selector mana?", "event di elemen apa?", "acceptance centang berapa?" |
| Debug clinic | Error **anonymous** — TTS baca console + inspect element; guru facilitate, bukan patch. |
| Copas template Bootstrap/UI kit penuh | Red flag — minta jelaskan selector & struktur HTML sendiri |

### Bank pertanyaan klarifikasi (web project)

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "Layout-nya berantakan" | "Parent pakai flex/grid? Elemen mana yang overflow?" |
| "Tombol tidak jalan" | "`addEventListener` di elemen apa? Console error apa?" |
| "Validasi tidak muncul" | "Pesan error di DOM atau `alert`? User lihat di mana?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjuk wireframe + acceptance kamu." |
| "AI kasih CSS full" | "Jelaskan 3 selector yang dipakai — cocok wireframe kamu?" |

### Script coaching (bukan solving)

```text
"Gejala di layar/console apa?" (OBS)
"Hipotesis: HTML, CSS, atau JS?" (REA)
"Coba satu perubahan — catat di Debug Sheet." (ITR)
"Requirement PRJ mana yang baru ✅?" (DoD)
```

### Kapan guru boleh sentuh keyboard?

**Hampir tidak pernah.** Pengecualian sempit: demo **generic** 2 baris di papan (bukan file siswa), atau buka DevTools untuk tunjuk tab Elements — bukan menulis solusi PRJ.

**Nilai MA:** amanah — shortcut merusak TEC/ITR; sabar — build lambat dengan reasoning lebih baik dari copas cepat.

---

## 4. Materi Inti

### Build week 1 S2 — core feature, bukan polish

Fokus hari ini: **progress terlihat** vs DoD PRJ — halaman bisa dibuka, fitur inti jalan, validasi minimal. Polish CSS & edge case = P14.

### Stand-up efektif (0–10 menit)

- Guru catat **blocker berulang** → jadi clarifying question atau station.
- Tanya cepat: "Struktur folder P12 sudah dipakai?"

### Build block (10–65 menit)

Prioritas per PRJ (contoh):

| PRJ | Core feature hari ini |
|-----|----------------------|
| PRJ-01 | Form + hitung + 1 pesan validasi |
| PRJ-02 | List jadwal render + tambah item |
| PRJ-03 | Form absensi + simpan ke array/state |
| PRJ-04 | Section profil + navigasi anchor/CSS |

Guru keliling — rotasi 2 menit/kelompok, **hanya clarifying questions**.

### Checkpoint demo 30 detik (65–75 menit)

Ke pasangan — bukan ke guru dulu. Pasangan jawab: "Satu requirement yang belum jelas dari demo teman."

### Debug clinic CSS/selector (75–85 menit)

1 error anonymous diprojeksi — pilih dari volunteer atau snippet generic di bawah.
Kelas: TTS baca error → hipotesis → volunteer fix sendiri.

### Exit blocker (85–90 menit)

1 kalimat untuk P14 — target freeze feature + polish.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Papan Debug Sheet kosong.
- Daftar scaffolding dari P11/P12.
- Timer visible untuk blok build 55 menit.
- **Tidak** menyiapkan solusi PRJ di laptop guru.
- DevTools siap di proyektor (untuk clinic, bukan fix siswa).

### Skrip hari ini

```text
[0–10] Stand-up — guru catat blocker
[10–65] BUILD — core feature DoD
        Rotasi berkeliling: clarifying questions only
        Stuck >5 menit: arahkan ke station A/B/C, bukan fix langsung
[65–75] Demo 30 detik ke pasangan
[75–85] Debug clinic — 1 error CSS atau selector, TTS
[85–90] Exit blocker untuk P14
```

### Contoh interaksi berkeliling (template)

```text
Siswa: "CSS-nya tidak center pak."
Guru: "Parent element pakai display apa? Inspect — lebar child vs parent?"
(Siswa coba flex/grid sendiri)
Guru: "Requirement layout PRJ kamu centang belum?"

Siswa: "Klik tidak jalan."
Guru: "Console error? querySelector return null atau element benar?"
(Siswa cek id/class typo)
Guru: "Event listener dipasang sebelum atau sesudah DOM ready?"
```

**Dilarang:** guru live-code halaman PRJ lengkap "biar siswa paham layout."

---

## 6. Latihan Membaca Kode

Untuk **debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
// Error anonymous — selector salah
document.querySelector("#btnHitung").addEventListener("click", hitung);
// HTML: <button id="btn-hitung">Hitung</button>
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala di console? | `Cannot read properties of null (reading 'addEventListener')` |
| Hipotesis? | Id mismatch: `#btnHitung` vs `btn-hitung` |
| Fix minimal? | Samakan id di HTML dan JS |

```css
/* Layout clinic — flex tanpa wrap */
.kartu-list {
  display: flex;
  gap: 1rem;
}
/* 6 kartu lebar 300px di layar 768px */
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala visual? | Overflow horizontal / kartu terpotong |
| Saran (bukan fix guru)? | `flex-wrap: wrap` atau `max-width` parent |

**Etika:** jika pakai kode siswa volunteer, anonimkan — fokus proses, bukan malu.

---

## 7. Praktik Mandiri Siswa

1. **Build 55 menit** — iterasi terhadap spec/wireframe P12.
2. **Core feature DoD** — minimal 1 requirement wajib ✅.
3. **Debug Sheet** — minimal 1 entry jika ada error hari ini.
4. **Demo 30 detik** — ke pasangan.
5. **Exit blocker** — 1 kalimat target P14.
6. **Bukti iterasi** — screenshot/commit (persiapan peer review P15).

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| "Pak/bu rapikan CSS-nya" | Tolak — tanya parent/child layout + station B |
| Copas template UI penuh tanpa paham | Tanya selector; reset ke wireframe sendiri |
| Build JS dulu tanpa HTML struktur | Arahkan ke station A — skeleton semantik |
| Guru terlalu lama di 1 siswa | "Saya kembali 5 menit lagi — coba hipotesis dulu" |
| Panik tidak ada progress visual | Normalisasi — 1 form validasi = progress (ITR) |
| Minta file starter guru | Tolak — struktur folder P12 sudah cukup |

---

## 9. Rujukan

- Modul pertemuan: [X-S2-P13](../../../kelas-x/semester-2/X-S2-P13_project-s2-build-1.md)
- Kickoff: [X-S2-P12](../../../kelas-x/semester-2/X-S2-P12_project-s2-kickoff.md)
- PRJ bank: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md#kelas-x--semester-2-web-sebagai-ekspresi)
- Panduan project: [00_Panduan_Pertemuan Kelas X](../../../kelas-x/00_Panduan_Pertemuan.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Stand-up selesai — blocker tercatat
- [ ] Build block ≥55 menit — guru facilitator, bukan coder
- [ ] **Zero** takeover keyboard untuk menyelesaikan PRJ
- [ ] **Zero** distribusi solusi project (file/WA/repo)
- [ ] Debug clinic dengan TTS baca error CSS/selector
- [ ] Daftar scaffolding P14 updated
- [ ] Siswa tulis blocker exit ticket

[← Indeks S2](./X-S2_Materi_Index.md)
