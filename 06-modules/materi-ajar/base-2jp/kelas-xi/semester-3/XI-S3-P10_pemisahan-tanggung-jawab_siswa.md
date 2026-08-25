# Handout Siswa — XI-S3-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P10_pemisahan-tanggung-jawab.md](../../../kelas-xi/semester-3/XI-S3-P10_pemisahan-tanggung-jawab.md)

---

## 1. Tujuan pembelajaran

Dari satu file campur aduk → **lapis** UI / logic / data.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Struktur folder final
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 9. Materi pendamping BRG

- [BRG-03](../../../materi-ajar/jalur-kelanjutan/BRG-03_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
