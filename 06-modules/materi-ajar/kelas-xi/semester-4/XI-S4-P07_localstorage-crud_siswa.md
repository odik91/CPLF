# Handout Siswa — XI-S4-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P07_localstorage-crud.md](../../../kelas-xi/semester-4/XI-S4-P07_localstorage-crud.md)

---

## 1. Tujuan pembelajaran

Dari refresh = hilang → **persistensi lokal** terkendali.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **localStorage** | Key-value string di browser — **persisten** antar refresh/tab (domain sama) |
| **Serialize** | Object/array JS → string via `JSON.stringify` sebelum `setItem` |
| **Deserialize** | String → object via `JSON.parse` — **wajib try/catch** |
| **Key namespace** | `ma-app-v1` — versi di key untuk migrasi schema nanti |
| **Load on init** | `state = loadState()` sebelum `render()` pertama |
| **Save on change** | Setiap mutasi CRUD → `saveState(state)` → `render()` |
| **Spiral S3 render** | Tetap **event → update state → save → render** — storage bukan pengganti state |
| **Amanah data** | Data teman di localStorage = tanggung jawab; hindari PII sensitif sembarangan |
| **Quota** | ~5MB per origin — foreshadow P08 error state |

**Builds on S3 P08:** App absensi/inventaris monolithic — hari ini **tambah persistensi**, jangan rewrite arsitektur.

**Builds on S3 P04:** `render()` tetap satu pintu DOM — load/save **di luar** render (side effect terkendali).

**Builds on S4 P04–P06:** Data dari API = async + JSON; localStorage = sync + JSON — **format sama, transport beda**.


---

## 3. Materi praktik

### Transformasi

**Dari:** Refresh = state hilang (RAM saja)  
**Ke:** **Persistensi lokal terkendali** — serialize/deserialize aman + load on init

### Pola inti

```javascript
const KEY = "ma-absensi-v1";

const defaultState = {
  students: [],
  filterText: "",
  nextId: 1,
};

function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(KEY);
  if (raw === null) {
    return defaultState;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.students || !Array.isArray(parsed.students)) {
      return defaultState;
    }
    return parsed;
  } catch (err) {
    console.warn("Storage corrupt — reset default", err);
    return defaultState;
  }
}
```

### Alur 4 panah (exit ticket)

```text
User event → updateState(...) → saveState(state) → render()
```

### Trap demo (opening)

```javascript
// Tanpa try/catch — corrupt manual di DevTools → app crash
const state = JSON.parse(localStorage.getItem(KEY));
```

### Metafora Experience

**Buku catatan vs ingatan** — refresh = tidur; ingatan hilang, catatan tetap (jika ditulis benar).

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo refresh — state S3 hilang — frustrasi? |
| 5–15 | Experience | **Buku catatan vs ingatan** — mana lebih amanah? |
| 15–25 | Trap | Simpan string JSON tanpa try/catch parse |
| 25–35 | Clarify | Serialize · key namespace · migrasi schema |
| 35–45 | Concept | `localStorage.setItem` · `JSON.stringify/parse` |
| 45–70 | Practice | CRUD app S3 + load on init + save on change |
| 70–85 | Test | Refresh browser — data tetap |
| 85–90 | Exit | Key name + struktur JSON |

---

## 5. Lembar kerja / latihan

### Snippet A — Urutan init

```javascript
let state = loadState();
render();
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa load sebelum render? | Render baca state — harus hydrated dulu |
| Tanpa loadState()? | Selalu default/hardcoded |

### Snippet B — Save placement

```javascript
function addStudent(name) {
  state.students.push({ id: state.nextId, name, present: false });
  state.nextId++;
  saveState(state);
  render();
}
```

| Pertanyaan | Kunci |
|------------|-------|
| saveState sebelum atau sesudah render? | Sebelum/sesudah OK — yang penting setelah mutasi |
| saveState di dalam render()? | Anti-pattern — render dipanggil sering |

### Snippet C — Spiral async

```javascript
async function loadPosts() {
  const res = await fetch(url);
  return res.json(); // network JSON
}
const state = JSON.parse(localStorage.getItem(KEY)); // storage JSON
```

| Pertanyaan | Kunci |
|------------|-------|
| Sama-sama JSON? | Ya — deserialize ke object JS |
| Beda utama? | fetch async + remote; localStorage sync + lokal |

---

## 6. Exit ticket

1. Key name + struktur JSON
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
