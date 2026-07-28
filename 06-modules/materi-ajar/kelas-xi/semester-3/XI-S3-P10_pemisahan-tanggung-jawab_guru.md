# Materi Guru Lengkap — XI-S3-P10
**Modul:** [XI-S3-P10_pemisahan-tanggung-jawab.md](../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)
**Materi pendukung sumber:** [XI-S3-P10_pemisahan-tanggung-jawab.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P10 — Pemisahan Tanggung Jawab

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P10 |
| Unit | XI3.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T3 |

## Learning Transformation

Dari satu file campur aduk → **lapis** UI / logic / data.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Struktur folder contoh: `state.js` · `ui.js` · `main.js` |
| 5–15 | Experience | **OSIS vs guru vs siswa** — peran berbeda, satu acara |
| 15–25 | Trap | HTML string + business rule + fetch dalam 1 fungsi |
| 25–35 | Clarify | Separation of concerns — bukan over-engineering |
| 35–45 | Concept | Layer: data · domain · presentation |
| 45–70 | Practice | Pecah project latihan P08 ke ≥3 file |
| 70–85 | Peer | Review: “file mana yang paling sulit dipahami?” |
| 85–90 | Exit | Struktur folder final |

---

## Target Struktur

```text
/src
  state.js      # data & update
  render.js     # DOM only
  handlers.js   # events
  main.js       # init
```

---

## Formatif

**COM**, **ITR**

---

## Catatan Guru

Standar minimum sebelum project S3 kickoff.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P10 Pemisahan Tanggung Jawab

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P10 |
| Modul pertemuan | [XI-S3-P10_pemisahan-tanggung-jawab.md](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md) |
| Unit | XI3.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T3 |
| Formatif | COM, ITR |
| Ada live code? | **Ya — split live ke state.js · render.js · handlers.js · main.js** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Separation of concerns** | Data / presentation / events — bukan over-engineering |
| **state.js** | Data + pure update functions — **no DOM** |
| **render.js** | DOM only — baca state, **no mutasi state** |
| **handlers.js** | Event wiring — tipis, panggil update + render |
| **main.js** | Init: import, bind handlers, first render |
| **Layer** | data · domain · presentation (bahasa sederhana) |

**Input:** hasil P09 (functions extracted) — split ke file **live di proyektor**.

**Standar minimum** sebelum P12 kickoff project S3 — PRJ wajib ≥3 file modul.

**Experience OSIS:** panitia / guru / siswa — peran beda, satu acara.

**Trap:** HTML string + business rule + fetch dalam 1 fungsi — tunjukkan smell, pisah live.

**Jangan bagikan:** template `/src` lengkap PRJ-01 — siswa split sendiri dari P08/P09.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P09 — function render mutasi state?" | Tidak — cek sebelum split file |
| "P08 alur 3 panah — file mana event?" | handlers.js |
| "Kenapa state.js tidak import render?" | Hindari circular dependency — handlers orchestrate |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Split dari kode refactor P09 siswa |
| **Live coding** | Cut/paste antar file — test tiap file jadi |
| **Per baris / scope** | import graph — TTS |
| **Recall** | OSIS roles analogy |
| **Membaca kode** | "File ini boleh query DOM?" |
| **No starter file** | Tidak ZIP template project S3 |

---

## Materi Inti

### Transformasi

**Dari:** Satu file campur aduk  
**Ke:** **Lapis** UI / logic / data — folder `/src` atau flat 4 file

### Target struktur (modul)

```text
/src
  state.js      # data & update — export state, addStudent, togglePresent, ...
  render.js     # export function render(state, listEl) — DOM only
  handlers.js   # export function bindHandlers(...) — addEventListener
  main.js       # import all — init
index.html      # <script type="module" src="src/main.js">
```

### Import graph (hindari circular)

```text
main.js → state.js, render.js, handlers.js
handlers.js → state.js, render.js
render.js → (tidak import state mutator — terima state param)
state.js → (tidak import render)
```

### Contoh signature

```javascript
// render.js
export function render(state, listEl) { /* ... */ }

// handlers.js
import { addStudent, setFilter, state } from "./state.js";
import { render } from "./render.js";

export function bindHandlers({ listEl, inputName, btnAdd, inputFilter }) {
  btnAdd.addEventListener("click", function () {
    addStudent(inputName.value);
    inputName.value = "";
    render(state, listEl);
  });
  // ...
}

// main.js
import { state } from "./state.js";
import { render } from "./render.js";
import { bindHandlers } from "./handlers.js";

const listEl = document.getElementById("student-list");
bindHandlers({ listEl, /* ... */ });
render(state, listEl);
```

**Catatan pedagogis:** update functions di state.js **tidak** panggil render — orchestration di handlers (explicit trace untuk siswa). Alternatif: callback inject — pilih satu pola, konsisten.

---

## Alur Live Coding

> **Mulai dari P09** (1–2 file). **Split live** — siswa ikuti di laptop. Test setelah main.js jadi.

### Persiapan

- Live Server
- Folder `src/` kosong
- index.html minimal dengan root elements

### Skrip TTS — split file live

```text
[LANGKAH 0 — Opening struktur 0–5 menit]
Tampilkan diagram folder di papan — 4 file.
Ucapkan: "P09 function — P10 file. Standar project S3."

[LANGKAH 1 — Experience OSIS 5–15 menit]
Oral: panitia data, MC panggil, siswa audiens — campur = chaos.
Tanya: "Query DOM di state.js — kenapa salah?"

[LANGKAH 2 — Trap campur aduk 15–25 menit]
Tampilkan pseudo:
function onClick() {
  state.push(...);
  listEl.innerHTML = ... + hitungDiskon + fetch(...)
}
Ucapkan: "3 tanggung jawab — 3 tempat."

[LANGKAH 3 — Buat state.js 25–40 menit]
New file — cut dari P09:
  export let state = { ... };
  export function addStudent(name) { ... mutasi only ... }
  export function togglePresent(id) { ... }
  export function removeStudent(id) { ... }
  export function setFilter(text) { ... state.filterText = text; }
Hapus render() dari file ini.
Test: belum jalan — expected.

[LANGKAH 4 — Buat render.js 40–52 menit]
Cut function render — ubah signature:
export function render(state, listEl) { ... }
Tidak import state.js — terima param.
Ucapkan: "Render = pure presentation — state dibaca, tidak ditulis."
Scope: export function render.

[LANGKAH 5 — Buat handlers.js 52–65 menit]
import { state, addStudent, togglePresent, removeStudent, setFilter } from "./state.js";
import { render } from "./render.js";

export function bindHandlers(refs) {
  refs.btnAdd.addEventListener("click", function () {
    addStudent(refs.inputName.value);
    refs.inputName.value = "";
    render(state, refs.listEl);
  });
  // toggle, delete, filter — each calls update then render(state, refs.listEl)
}
Ucapkan: "Handler tipis — orchestrate update + render."

[LANGKAH 6 — Buat main.js + HTML 65–75 menit]
import { state } from "./state.js";
import { render } from "./render.js";
import { bindHandlers } from "./handlers.js";

const refs = {
  listEl: document.getElementById("student-list"),
  inputName: document.getElementById("input-name"),
  btnAdd: document.getElementById("btn-add"),
  inputFilter: document.getElementById("input-filter"),
};
bindHandlers(refs);
render(state, refs.listEl);

index.html:
<script type="module" src="src/main.js"></script>

Test full flow — debug import path live jika perlu.

[LANGKAH 7 — Practice siswa 45–70 menit overlap]
Split P09 ke ≥3 file — struktur folder final.
Peer: "file mana paling sulit dipahami?"

[LANGKAH 8 — Peer review 70–85 menit]
Swap laptop — baca state.js: ada document.getElementById?
Baca render.js: ada state.students.push?
Feedback 1 saran naming.

[LANGKAH 9 — Exit 85–90 menit]
Screenshot struktur folder — checklist kickoff P12.
Ucapkan: "Project S3 wajib pola ini — bukan monolith."
```

---

## Latihan Membaca Kode

### Snippet A — state.js leak

```javascript
// state.js
export function addStudent(name) {
  state.students.push({ id: 1, name, present: false });
  document.getElementById("list").innerHTML = "...";
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Violation? | DOM di state.js — pindah ke render |
| Fix? | addStudent mutasi only; handler panggil render |

### Snippet B — Import direction

```javascript
// render.js
import { addStudent } from "./state.js";
export function render(state, listEl) {
  addStudent("hack"); // ???
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Smell? | Render mutasi via side import |
| Fix? | Render hanya baca state param |

### Snippet C — handlers tipis

```javascript
refs.btnAdd.addEventListener("click", function () {
  addStudent(refs.inputName.value);
  render(state, refs.listEl);
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Tanggung jawab? | Wire event — bukan logic bisnis panjang |
| Logic bisnis di? | state.js functions |

---

## Praktik Mandiri

1. Split latihan P08/P09 ke `state.js`, `render.js`, `handlers.js`, `main.js`
2. Peer review: 1 file violation + perbaikan
3. Dokumentasi struktur folder (screenshot)
4. **Tidak boleh:** clone template repo guru

**Extension:** tambah `constants.js` untuk selector IDs — opsional, jangan wajibkan.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Circular import state ↔ render | Diagram import di papan |
| render.js push ke state | Peer review checklist |
| Semua di main.js lagi | main.js max ~15 baris init |
| Path import salah | `./state.js` relative dari file |
| Over-split 10 file kosong | Min 3 file dengan isi |
| Guru kirim ZIP PRJ jadi | Etika — split dari latihan sendiri |

---

## Rujukan

- Modul: [XI-S3-P10](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)
- Prasyarat: [P09 Refactor Modul](./XI-S3-P09_refactor-modul.md)
- Kickoff: [P12 Project S3](./XI-S3-P12_project-s3-kickoff.md)
- PRJ pattern: [PRJ-XI-S3-02 Peminjaman](../../../08-project/PRJ_XI_S3_02_Peminjaman_Barang.md) (modul terpisah)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] ≥3 file: state · render · handlers (+ main)
- [ ] state.js tanpa DOM; render.js tanpa mutasi
- [ ] handlers orchestrate update + render
- [ ] ES module + Live Server jalan
- [ ] Peer review 1 violation fixed
- [ ] Struktur folder siap template P12
- [ ] Tidak distribusi solusi project penuh

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan

## Materi pendamping BRG (wajib/opsional)

- [BRG-03](../../jalur-kelanjutan/BRG-03_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
