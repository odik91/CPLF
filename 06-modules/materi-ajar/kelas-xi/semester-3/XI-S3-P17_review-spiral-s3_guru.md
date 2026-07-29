# Materi Guru Lengkap — XI-S3-P17

**Handout siswa (bagikan):** [XI-S3-P17_review-spiral-s3_siswa.md](./XI-S3-P17_review-spiral-s3_siswa.md)

**Modul:** [XI-S3-P17_review-spiral-s3.md](../../../kelas-xi/semester-3/XI-S3-P17_review-spiral-s3.md)

**Materi pendukung sumber:** [XI-S3-P17_review-spiral-s3.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P17_review-spiral-s3.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P17 — Review Spiral Semester 3

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P17 |
| Unit | XI3.1–6 (integratif) |
| Durasi | 2 JP = 90 menit |

## Learning Transformation

Dari fragmen skill → **sistem utuh** siap naik ke data/async S4.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Quiz oral cepat: IPO · render · state · module |
| 5–20 | Experience | **Bug hunt**: app sengaja rusak (3 bug) — kelompok |
| 20–35 | Clarify | Kategorikan bug: data / UI / event |
| 35–50 | Concept | Map bug → layer (P10) |
| 50–75 | Practice | Station rotation: fix 1 bug per station |
| 75–85 | Reflect | Skill XI paling kuat vs perlu latihan |
| 85–90 | Transfer | Preview S4: data dari luar & tim |

---

## Station Ideas

1. Listener hilang setelah render  
2. State duplikat  
3. Validasi form bypass  
4. Module circular import  

---

## Formatif

**OBS**, **TRF**

---

## Catatan Guru

Opsional mini assessment formatif — bukan ujian sintaks berat.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P17 Review Spiral Semester 3


---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P17 |
| Modul pertemuan | [XI-S3-P17_review-spiral-s3](../../../kelas-xi/semester-3/XI-S3-P17_review-spiral-s3.md) |
| Unit | XI3.1–6 (integratif) |
| Durasi referensi | 2 JP = 90 menit |
| Capability | OBS, REA, TRF |
| Ada live code? | **Bug hunt stations + baca kode — guru siapkan app rusak, siswa fix** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Transformasi hari ini:** dari fragmen skill → **sistem utuh** siap naik ke data/async S4.
- **Timeline:** quiz oral → bug hunt kelompok → kategorisasi bug → map ke layer → station rotation → reflect → preview S4.
- **Bug hunt:** app sengaja rusak (3+ bug) — kelompok identifikasi gejala, bukan langsung fix di pleno.
- **Kategorisasi bug:** data / UI / event — lalu map ke layer P10 (state · render · handlers · main).
- **Station ideas (modul):**
  1. Listener hilang setelah render
  2. State duplikat
  3. Validasi form bypass
  4. Module circular import
- **Station rotation:** fix **1 bug per station** — bukan app penuh; fokus proses OBS→REA→ITR.
- **Opsional mini assessment formatif** — bukan ujian sintaks berat (modul catatan guru).
- **Preview S4:** data dari luar (API) & kolaborasi tim — fondasi S3 yang dipakai.
- **Integrasi spiral:** IPO (P01) · blueprint state (P02) · DOM/render (P03–04) · event/flow (P05–06) · nested data (P07) · state CRUD (P08) · modul (P09–10).

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| IPO aplikasi — 3 komponen? | Input · Process · Output |
| Render aman P04 — prinsip utama? | Satu sumber kebenaran state → render() sync DOM |
| Layer P10 — file apa tanggung jawab apa? | state data · render DOM · handlers event · main init |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Facilitator discovery** | Guru tidak reveal semua bug di awal — siswa OBS dulu. |
| **Jangan takeover keyboard** | Di station: tanya layer & gejala — **siswa** ketik fix minimal. |
| **Jangan bagikan cheat sheet fix** | Tidak distribusi "kunci jawaban bug" penuh — hint bertahap via pertanyaan. |
| **Clarifying questions** | "Gejala di console atau layar?", "Layer mana?", "Regresi fitur lain?" |
| Bug hunt | App rusak = **latihan**, bukan malu — anonim jika pakai kode mirip PRJ siswa |
| Assessment | Formatif & growth — bukan ranking kelas |

### Bank pertanyaan station (bukan "fix begini")

| Siswa stuck | Guru tanya |
|-------------|------------|
| "Tidak tahu bug apa" | "Happy path vs actual — gejala spesifik?" |
| "Listener hilang" | "Render replace DOM? Event bind di mana?" |
| "State duplikat" | "Push di handler + load lagi? Satu sumber kebenaran?" |
| "Import error" | "Dependency graph — siapa import siapa?" |
| "Validasi bypass" | "Validasi di UI saja atau juga sebelum updateState?" |

### Script coaching bug hunt

```text
"Jangan fix dulu — list 3 gejala." (OBS)
"Bug ini data, UI, atau event?" (klasifikasi)
"Map ke layer: state / render / handlers / main." (P10)
"Fix minimal — cek 1 fitur lain." (regresi)
"Skill XI paling kuat kamu — bukti dari station mana?"
```

### Kapan guru boleh sentuh keyboard?

Hampir tidak pernah. Pengecualian: navigasi proyektor ke file station — bukan menulis fix.

---

## 4. Materi Inti

### Opening — quiz oral cepat (0–5 menit)

4–5 pertanyaan flash: IPO · render · state · module — tidak graded, warm-up spiral.

### Bug hunt kelompok (5–20 menit)

App rusak (repo/folder guru siapkan) — kelompok jalankan happy path, catat **≥3 gejala**.
**Tidak** fix di fase ini — hanya OBS + hipotesis kasar.

### Clarify — kategorisasi (20–35 menit)

Pleno: kelompok present 1 gejala — kelas kategorikan:

| Kategori | Contoh gejala |
|----------|---------------|
| Data/state | Duplikat, stale, shape salah |
| UI/render | Blank, layout broken, empty state hilang |
| Event | Klik tidak jalan, double fire, listener hilang |

### Concept — map bug → layer (35–50 menit)

Papan diagram layer P10 — tempel sticky gejala ke layer.
Diskusi: mengapa classification membantu debug project sendiri.

### Station rotation (50–75 menit)

4 station × ~6 menit rotasi (adjust):

| Station | Bug intentional | Layer target |
|---------|-----------------|--------------|
| 1 | Listener hilang setelah render | render + handlers |
| 2 | State duplikat on add | state + handlers |
| 3 | Validasi bypass (empty/invalid) | handlers + state |
| 4 | Circular import modules | main + modul structure |

Setiap station: **fix 1 bug minimal** + catat langkah OBS→REA→ITR.

### Reflect (75–85 menit)

Individual/kelompok: skill XI paling kuat vs perlu latihan — konkret, bukan generic.

### Transfer — preview S4 (85–90 menit)

Teaser: data dari API, persistensi, tim — fondasi DOM/state/modul hari ini dipakai lagi.

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- **App rusak** guru — 4 bug di station terpisah (branch/folder berbeda OK).
- Solusi kunci **RAHASIA GURU** — jangan distribusi ke siswa.
- Sticky notes kategorisasi bug.
- Timer rotasi station visible.
- Debug protocol 4 langkah di papan.

### Skrip facilitator

```text
[0–5] Quiz oral spiral — IPO, render, state, module
[5–20] Bug hunt — catat gejala, JANGAN fix pleno
[20–35] Kategorisasi: data / UI / event
[35–50] Map bug → layer P10
[50–75] Station rotation — fix 1 bug per station
        Guru: clarifying questions only
[75–85] Reflect: kuat vs latihan
[85–90] Preview S4 — data luar & tim
```

### Contoh interaksi station

```text
Siswa: "Tombol tidak jalan setelah tambah item pak."
Guru: "Setelah render, DOM element tombol baru atau lama? Listener di bind ke mana?"
(Siswa trace render innerHTML)
Guru: "Fix minimal — satu perubahan. Cek hapus item masih jalan?"
```

**Dilarang:** guru fix bug di laptop siswa; reveal semua kunci di menit 5.

---

## 6. Latihan Membaca Kode

Inti pertemuan ini = **membaca kode**. Cuplikan station (proyeksi):

### Station 1 — listener hilang

```javascript
function render(items) {
  listEl.innerHTML = items.map(i => `<li>${i.nama}</li>`).join("")
    + `<button id="add">Tambah</button>`;
}
document.getElementById("add").addEventListener("click", onAdd); // main.js — sekali saja
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala setelah render ulang? | Klik Tambah tidak jalan |
| Layer? | render replace button — listener di element lama |
| Fix minimal (siswa)? | Event delegation ke parent statis, atau bind setelah render di satu tempat |

### Station 2 — state duplikat

```javascript
function handleAdd(nama) {
  state.items.push({ id: Date.now(), nama });
  state.items = [...JSON.parse(localStorage.getItem("items")||"[]"), { id: Date.now(), nama }];
  render(state.items);
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala? | Item double / id bentrok |
| Layer? | handlers — dua sumber update |
| Fix? | Satu path: push state lalu persist, atau load OR push — tidak keduanya blind |

### Station 3 — validasi bypass

```javascript
function handleSubmit(e) {
  e.preventDefault();
  const v = input.value;
  if (v.length > 0) showError(""); // UI only
  addToState(v); // push even if ""
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Bypass how? | Empty string atau spasi — push tetap jalan |
| Acceptance gap? | Validasi sebelum updateState + pesan user |

### Station 4 — circular import

```javascript
// state.js
import { render } from "./render.js";
export function add(x) { items.push(x); render(items); }

// render.js
import { items } from "./state.js"; // read + state imports render
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala? | Import undefined / module init error |
| Fix arah? | render tidak import state — terima data param; main orchestrate |

**Etika:** app rusak = materi latihan — jangan equate dengan "project siswa gagal."

---

## 7. Praktik Mandiri Siswa

1. **Bug hunt** — catat ≥3 gejala sebelum fix.
2. **Kategorisasi** — data / UI / event per gejala.
3. **Map layer** — state / render / handlers / main.
4. **Station rotation** — fix 1 bug minimal per station + regresi singkat.
5. **Reflect** — skill kuat vs latihan (konkret).
6. **Transfer** — 1 kalimat koneksi ke S4 (data/tim).

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Fix random tanpa gejala | Wajibkan OBS dulu — debug protocol |
| Guru reveal semua kunci awal | Hint bertahap via layer questions |
| Station = refactor total | Batasi fix minimal 1 bug |
| Malu app rusak = project jelek | Frame sebagai latihan integratif |
| Skip map layer | Pleno 35–50 wajib — habits for own PRJ |
| Ujian sintaks panjang | Formatif ringan — modul says optional mini |
| Guru fix di station | Siswa ketik — guru facilitate |

---

## 9. Rujukan

- Modul pertemuan: [XI-S3-P17](../../../kelas-xi/semester-3/XI-S3-P17_review-spiral-s3.md)
- IPO & sistem: [XI-S3-P01](../../../kelas-xi/semester-3/XI-S3-P01_aplikasi-sistem-ipo.md)
- DOM & render: [XI-S3-P03](../../../kelas-xi/semester-3/XI-S3-P03_dom-antarmuka-hidup.md) · [P04](../../../kelas-xi/semester-3/XI-S3-P04_dom-update-aman.md)
- State & modul: [XI-S3-P08](../../../kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md) · [P10](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)
- Code review: [P16 materi pendukung](./XI-S3-P16_code-review-kualitas.md)
- Showcase next: [P18 materi pendukung](./XI-S3-P18_showcase-refleksi-s3.md)
- Indeks S3: [XI-S3_Index](../../../kelas-xi/semester-3/XI-S3_Index.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Quiz oral spiral — warm-up selesai
- [ ] Bug hunt — gejala tercatat sebelum fix massal
- [ ] Kategorisasi + map layer P10
- [ ] Station rotation — siswa fix (guru tidak takeover)
- [ ] **Zero** distribusi kunci jawaban penuh
- [ ] Reflect skill kuat/latihan — konkret
- [ ] Preview S4 — frame transfer realistis
- [ ] Opsional mini assessment — tidak toxic ranking

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

**Panca cinta:** Diri · Sesama

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ali Imran 3:190–191

**Kait di kelas hari ini:** Review/spiral — renungkan apa yang sudah dikuasai.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
