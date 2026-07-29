# Handout Siswa — XI-S3-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P09_refactor-modul.md](../../../kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)

---

## 1. Tujuan pembelajaran

Dari fungsi 200 baris → **modul** dengan nama tanggung jawab jelas.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Refactor** | Ubah struktur tanpa ubah perilaku — app tetap jalan |
| **Extract function** | `validateName`, `updateFilter`, `renderList` — nama = tanggung jawab |
| **DRY** | Validasi `trim()` duplikat 2× → satu `validateNonEmpty(str)` |
| **Smell spaghetti** | Satu file 100+ baris, handler campur logic + DOM |
| **ES module** | `export function addStudent` · `import { addStudent } from "./state.js"` |
| **Fallback** | Jika browser/laptop issue: script order + `window.App = { ... }` namespace |

**Input:** kode monolithic P08 absensi — **buka file siswa/guru dari minggu lalu**, jangan file baru bersih.

**Output P09:** masih bisa 1–2 file — extract functions jelas; **P10** yang pecah `state.js` / `render.js` / `handlers.js`.

**Experience dapur kantin:** potong / masak / sajikan = validate / update state / render.


---

## 3. Materi praktik

### Transformasi

**Dari:** Fungsi 200 baris / copy-paste hampir sama  
**Ke:** **Modul fungsi** dengan nama tanggung jawab jelas + optional ES export

### Smell checklist (opening hunt)

1. Validasi string kosong duplikat
2. Handler event >15 baris dengan logic bisnis
3. Render + query DOM di tengah update state

### Target extract (dari P08)

| Function | Tanggung jawab |
|----------|----------------|
| `validateNonEmpty(str)` | return boolean / trimmed string |
| `addStudent(name)` | mutasi state.students |
| `togglePresent(id)` | mutasi by id |
| `removeStudent(id)` | filter by id |
| `setFilter(text)` | mutasi state.filterText |
| `render()` | DOM only — baca state |

### Intro ES module (concept 35–45 menit)

```javascript
// state.js
export let state = { students: [], filterText: "", nextId: 1 };

export function addStudent(name) {
  // ...
}

// main.js
import { state, addStudent } from "./state.js";
```

HTML: `<script type="module" src="main.js"></script>`

**Fallback oral:** "Kalau module error CORS — Live Server wajib; atau tunggu P10 split file dengan script order."

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Refactor = buang waktu; yang penting jalan.  
**Aman:** Tunjukkan bug dari duplikasi copy-paste.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan “spaghetti code” (anonim) — cari 3 smell |
| 5–15 | Experience | **Dapur kantin**: stasiun potong/masak/sajikan |
| 15–25 | Trap | Copy-paste fungsi hampir sama × 4 |
| 25–35 | Clarify | DRY vs over-abstraction — kapan extract? |
| 35–45 | Concept | `function validateX()` · `function renderList()` · file terpisah (ES module) |
| 45–70 | Practice | Refactor kode P08: pisah validate / update / render |
| 70–85 | Before/after | Screenshot atau diff singkat |
| 85–90 | Exit | 1 fungsi yang kamu rename & why |

---

## 6. Lembar kerja / latihan

### Snippet A — Before extract

```javascript
btnAdd.addEventListener("click", function () {
  if (inputName.value.trim() === "") return;
  state.students.push({ id: state.nextId, name: inputName.value.trim(), present: false });
  state.nextId++;
  inputName.value = "";
  render();
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Extract apa dulu? | validate + addStudent — handler tipis |
| Handler ideal? | 2–3 baris panggil function |

### Snippet B — Export

```javascript
// state.js
export function togglePresent(id) { /* ... */ }

// main.js
import { togglePresent } from "./state.js";
```

| Pertanyaan | Kunci |
|------------|-------|
| Path salah `./state`? | Module not found — perlu .js + Live Server |
| state mutable export? | Ya — object reference shared |

### Snippet C — Over-abstraction trap

```javascript
function doEverything(x) {
  validate(x); update(x); render(); bindEvents(); fetchData();
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Smell? | Satu function terlalu banyak peran |
| Fix? | Split tanggung jawab — bukan mega-function |

---

## 7. Exit ticket

1. 1 fungsi yang kamu rename & why
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 10. Materi pendamping BRG

- [BRG-03](../../../materi-ajar/jalur-kelanjutan/BRG-03_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
