# Materi Guru Lengkap — XI-S3-P13

**Handout siswa (bagikan):** [XI-S3-P13_project-s3-build-1_siswa.md](./XI-S3-P13_project-s3-build-1_siswa.md)

**Modul:** [XI-S3-P13_project-s3-build-1.md](../../../kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md)

**Materi pendukung sumber:** [XI-S3-P13_project-s3-build-1.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P13 — Project S3 Build 1

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P13 |
| Unit | XI3.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | PRJ-XI-S3-* (lanjutan) |

## Learning Transformation

Dari scaffold → **fitur inti** yang memenuhi acceptance awal.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | 1 menit/siswa: kemarin + hari ini + blocker |
| 10–15 | Clarify | Guru jawab blocker umum (10 menit max) |
| 15–70 | Build | Implementasi CRUD / flow utama · pair debug |
| 70–80 | Checkpoint | Centang acceptance — honest status |
| 80–90 | Exit | Screenshot + 1 bug terbuka |

---

## Guru During Build

- Intervensi lewat **pertanyaan**, bukan takeover keyboard  
- Flag copy-paste tanpa penjelasan (AI policy)  
- Dorong commit/log iterasi jika pakai Git opsional  

---

## Formatif

**ITR**, **TEC**

---

## Catatan Guru

Target: ≥40% acceptance tercentang atau 1 fitur end-to-end jalan.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P13 Project S3 Build (1)


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P13 |
| Modul pertemuan | [XI-S3-P13_project-s3-build-1](../../../kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md) |
| Unit | XI3.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-XI-S3-* (pilihan [P12 kickoff](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)) |
| Capability | ITR, TEC, OBS |
| Ada live code? | **Facilitator + pair debug — bukan build untuk siswa** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Format build week S3:** stand-up → clarify blocker (max 10 menit) → build fitur inti → checkpoint acceptance → exit screenshot + 1 bug terbuka.
- **Perbedaan S2 vs S3 build:** artefak = **aplikasi multi-komponen** (state + render + handlers + main), bukan halaman web satu file.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker — max 1 menit per siswa/kelompok.
- **Target hari ini:** ≥40% acceptance tercentang **atau** 1 fitur end-to-end jalan (alur IPO utuh).
- **Fitur inti first:** CRUD / flow utama dari acceptance P12 — polish & edge case = P14.
- **Checkpoint questions guru:** acceptance mana belum ✅? alur data dari event → state → render jelas? siapa user?
- **Pair debug:** siswa A jelaskan gejala, siswa B baca console/state — guru facilitate, bukan fix.
- **Scaffolding stations** (jika >40% stuck):
  - A: blueprint IPO + state shape kosong
  - B: render() placeholder + DOM update aman
  - C: handler event → updateState → render()
- **Catat siswa perlu scaffolding** dari P11/P12 — prioritaskan rotasi berkeliling.
- **Empat opsi PRJ S3:** [PRJ-01 Absensi DOM](../../../08-project/PRJ_XI_S3_01_Absensi_DOM.md) · [PRJ-02 Peminjaman](../../../08-project/PRJ_XI_S3_02_Peminjaman_Barang.md) · [PRJ-03 Katalog OSIS](../../../08-project/PRJ_XI_S3_03_Katalog_OSIS.md) · [PRJ-04 Kuis Interaktif](../../../08-project/PRJ_XI_S3_04_Kuis_Interaktif.md)

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Kickoff P12 — acceptance criteria kamu apa? | (siswa sebut 3 checkbox measurable dari spec) |
| Pemisahan tanggung jawab P10 — file apa isi apa? | state.js data · render.js DOM · handlers.js event · main.js init |
| Protokol debug — gejala dulu atau langsung fix? | Gejala (OBS) → hipotesis → uji 1 perubahan (ITR) |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru = facilitator** | 90 menit build milik siswa — guru ≤15 menit front-of-class (stand-up + clarify). |
| **Jangan takeover keyboard** | Di depan laptop siswa: tanya, tunjuk DevTools/console, **jangan** ketik fix state/render/handler. |
| **Jangan bagikan solusi project** | Tidak paste repo lengkap, starter siap jalan, atau "contoh PRJ S3 selesai" via WA. |
| **Clarifying questions** | Ganti "begini kodenya" dengan "state berubah di fungsi apa?", "render dipanggil setelah update?", "acceptance centang berapa?" |
| Pair debug | Error **anonymous** — TTS baca console + trace alur data; guru facilitate, bukan patch. |
| Copas AI tanpa penjelasan | Red flag — minta jelaskan alur IPO & modul mana yang terdampak |

### Bank pertanyaan klarifikasi (aplikasi S3)

| Siswa bilang | Guru tanya (bukan "pakai kode ini") |
|--------------|-------------------------------------|
| "UI tidak update setelah klik" | "`updateState` dipanggil? `render()` setelahnya? Console error?" |
| "State aneh / duplikat" | "Satu sumber kebenaran di `state.js`? Ada copy state di handler?" |
| "Listener tidak jalan" | "`addEventListener` di file mana? Dipanggil ulang setelah render?" |
| "Boleh lihat punya pak/bu?" | "Tidak ada solusi jadi — tunjuk blueprint + acceptance kamu." |
| "AI kasih modul full" | "Jelaskan alur IPO 3 langkah — cocok blueprint kamu?" |

### Script coaching (bukan solving)

```text
"Gejala di layar/console apa?" (OBS)
"Hipotesis: state, render, atau event?" (REA)
"Coba satu perubahan — catat di Debug Sheet." (ITR)
"Acceptance PRJ mana yang baru ✅?" (DoD)
"Alur data: input → ? → ? → layar" (IPO)
```

### Kapan guru boleh sentuh keyboard?

**Hampir tidak pernah.** Pengecualian sempit: demo **generic** 2 baris di papan (bukan file siswa), atau buka DevTools untuk tunjuk tab — bukan menulis solusi PRJ.

**Nilai MA:** amanah — shortcut merusak TEC/ITR; sabar — build lambat dengan reasoning lebih baik dari copas cepat.

---

## 4. Materi Inti

### Build week 1 S3 — fitur inti, bukan polish

Fokus hari ini: **progress terlihat** vs acceptance PRJ — alur IPO minimal jalan (input → proses state → render). Polish & edge case = P14.

### Stand-up efektif (0–10 menit)

- Guru catat **blocker berulang** → jadi clarifying question atau station.
- Tanya cepat: "Struktur folder P12 sudah dipakai? State shape sudah sesuai blueprint?"

### Clarify blocker (10–15 menit)

- Max 10 menit front-of-class — jawab **blocker umum** (bukan debug per siswa).
- Contoh umum: listener hilang setelah render, state tidak immutable, import modul circular.
- Siswa dengan blocker unik → antre pair debug saat build.

### Build block (15–70 menit)

Prioritas per PRJ (contoh):

| PRJ | Fitur inti hari ini |
|-----|---------------------|
| PRJ-01 | Pilih tanggal + tandai status + render daftar |
| PRJ-02 | Form pinjam + simpan ke state + render list |
| PRJ-03 | Tambah kegiatan + filter/kategori + render katalog |
| PRJ-04 | Load soal + jawab + skor sementara |

Guru keliling — rotasi 2 menit/kelompok, **hanya clarifying questions**.
Stuck >15 menit: arahkan ke station A/B/C atau pair debug — bukan fix langsung.

### Checkpoint acceptance (70–80 menit)

Siswa centang checklist acceptance — **status jujur** ✅/❌/🔄.
Guru float: "Berapa % acceptance? Satu fitur end-to-end sudah jalan?"

### Exit ticket (80–90 menit)

- Screenshot progress + **1 bug terbuka** (kalimat gejala, bukan solusi).
- Prep P14: blocker prioritas 1–2–3.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Papan Debug Sheet kosong.
- Daftar scaffolding dari P11/P12.
- Timer visible untuk blok build 55 menit.
- **Tidak** menyiapkan solusi PRJ di laptop guru.
- DevTools siap di proyektor (untuk pair debug, bukan fix siswa).

### Skrip hari ini

```text
[0–10] Stand-up — guru catat blocker
[10–15] Clarify blocker umum — max 10 menit
[15–70] BUILD — fitur inti CRUD/flow
        Rotasi berkeliling: clarifying questions only
        Stuck >15 menit: station A/B/C atau pair debug
[70–80] Checkpoint acceptance — honest status
[80–90] Exit: screenshot + 1 bug terbuka
```

### Contoh interaksi berkeliling (template)

```text
Siswa: "Klik tambah tidak update list pak."
Guru: "Handler panggil updateState? render() setelahnya? Trace di console."
(Siswa cek urutan pemanggilan sendiri)
Guru: "Acceptance 'tambah item' centang belum?"

Siswa: "Bingung file mana yang edit."
Guru: "Event di handlers — data di state — tampilan di render. Gejala di layer mana?"
(Siswa identifikasi layer)
Guru: "Blueprint P12 — IPO step mana yang stuck?"
```

**Dilarang:** guru live-code aplikasi PRJ lengkap "biar siswa paham struktur."

---

## 6. Latihan Membaca Kode

Untuk **pair debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
// state.js
export let items = [];

// handlers.js
document.getElementById("btn-add").addEventListener("click", () => {
  items.push({ nama: "Baru" });
  renderList(items);
});

// render.js — renderList innerHTML full replace
function renderList(data) {
  document.getElementById("list").innerHTML = data.map(i => `<li>${i.nama}</li>`).join("");
  document.getElementById("btn-add").addEventListener("click", handler); // re-bind?
}
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala setelah klik kedua? | Listener ganda / duplikat item / behavior aneh |
| Hipotesis layer? | Event + render — listener re-attach atau state tidak sync |
| Fix minimal (bukan guru)? | Delegate event ke parent statis, atau bind sekali di main.js |

```javascript
// Bug: render tanpa update state
function handleSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  document.getElementById("out").textContent = nama; // langsung DOM
  // state.items tidak pernah di-update
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Masalah arsitektur? | Bypass state — sumber kebenaran tidak konsisten |
| Gejala saat refresh/re-render? | Data hilang — tidak ada di state |
| Saran (siswa)? | Push ke state.js lalu render() dari state |

**Etika:** jika pakai kode siswa volunteer, anonimkan — fokus proses, bukan malu.

---

## 7. Praktik Mandiri Siswa

1. **Build 55 menit** — iterasi terhadap blueprint + acceptance P12.
2. **Fitur inti** — minimal ≥40% acceptance ✅ atau 1 alur end-to-end.
3. **Debug Sheet** — minimal 1 entry jika ada error hari ini.
4. **Pair debug** — jelaskan gejala ke teman sebelum minta guru.
5. **Checkpoint jujur** — centang acceptance dengan status honest.
6. **Exit ticket** — screenshot + 1 bug terbuka (gejala saja).

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| "Pak/bu betulkan render-nya" | Tolak — tanya state → render → event |
| Copas modul AI penuh tanpa paham | Tanya alur IPO; reset ke blueprint sendiri |
| Build handler dulu tanpa state shape | Arahkan ke station A — blueprint + state kosong |
| Guru terlalu lama di 1 siswa | "Saya kembali 5 menit lagi — coba hipotesis dulu" |
| Panik tidak ada progress visual | Normalisasi — 1 flow IPO jalan = progress (ITR) |
| Minta file starter guru | Tolak — scaffold P12 sudah cukup |
| Fix bug dengan rewrite total | Ingatkan debug protocol — fix minimal |

---

## 9. Rujukan

- Modul pertemuan: [XI-S3-P13](../../../kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md)
- Kickoff: [XI-S3-P12](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)
- PRJ bank: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md#kelas-xi--semester-3-interaksi--struktur)
- Pemisahan tanggung jawab: [XI-S3-P10](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Stand-up selesai — blocker tercatat
- [ ] Clarify ≤10 menit — bukan lecture panjang
- [ ] Build block ≥55 menit — guru facilitator, bukan coder
- [ ] **Zero** takeover keyboard untuk menyelesaikan PRJ
- [ ] **Zero** distribusi solusi project (file/WA/repo)
- [ ] Checkpoint acceptance — status jujur tercatat
- [ ] Siswa exit: screenshot + 1 bug terbuka
- [ ] Daftar scaffolding P14 updated

[← Indeks S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
