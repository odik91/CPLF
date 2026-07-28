# Handout Siswa — XI-S3-P17

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P17_review-spiral-s3.md](../../../kelas-xi/semester-3/XI-S3-P17_review-spiral-s3.md)

---

## 1. Tujuan pembelajaran

Dari fragmen skill → **sistem utuh** siap naik ke data/async S4.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
