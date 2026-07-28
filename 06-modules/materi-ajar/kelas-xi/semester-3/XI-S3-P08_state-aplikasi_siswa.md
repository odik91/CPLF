# Handout Siswa — XI-S3-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P08_state-aplikasi.md](../../../kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md)

---

## 1. Tujuan pembelajaran

Dari CRUD acak → **single source of truth** di memori.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Single source of truth** | Satu `state` object — semua UI baca dari sini |
| **Alur data** | event → update state → `render()` — spiral [P04](./XI-S3-P04_dom-update-aman.md) |
| **Trap duplikasi** | 2 array terpisah (`students` + `displayList`) — tidak sync |
| **Pure update functions** | `addStudent`, `togglePresent`, `removeStudent` — mutasi state lalu render |
| **Filter di state** | `state.filterText` atau `state.showOnlyPresent` — satu tempat |
| **Refresh = hilang** | Hook persistensi S4 P07 — sebut singkat |

**Builds on P04:** `render(state)` dipanggil setiap perubahan — jangan update DOM acak di 5 tempat.

**Builds on P07:** data nested/array di dalam `state.items` atau `state.students`.

**Sengaja monolithic:** satu `<script>` ~80–120 baris — **basis refactor P09/P10**. Jangan terlalu rapi; boleh duplikasi kecil (validasi inline 2×) sebagai smell.

**Domain live:** absensi kelas mini `{ id, name, present }` — paralel PRJ-01.


---

## 3. Materi praktik

### Transformasi

**Dari:** CRUD acak, duplikasi state DOM vs variabel  
**Ke:** **Single source of truth** — update state dulu, render belakangan

### Bentuk state

```javascript
let state = {
  students: [
    { id: 1, name: "Ahmad", present: false },
    { id: 2, name: "Siti", present: true },
  ],
  filterText: "",
  nextId: 3,
};
```

### Alur 3 panah (exit ticket)

```text
User event → updateState(...) → render()
```

### Bug demo (opening)

```javascript
let students = [{ id: 1, name: "A", present: false }];
let displayList = [{ id: 1, name: "A", present: false }]; // duplikat!
// toggle hanya students — UI pakai displayList → tidak sync
```

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Bug demo: 2 array terpisah — list tidak sync |
| 5–15 | Experience | **Absensi kelas**: daftar hadir vs counter — satu sumber? |
| 15–25 | Trap | Duplikasi state di DOM dan variabel |
| 25–35 | Clarify | Update state dulu, render belakangan |
| 35–45 | Concept | `state = { items, filter }` · pure update functions |
| 45–70 | Practice | CRUD mini: tambah / edit / hapus / filter |
| 70–85 | Debug | Latih trace: event → updateState → render |
| 85–90 | Exit | Diagram 3 panah alur data |

---

## 5. Lembar kerja / latihan

### Snippet A — Trace alur

```javascript
function addStudent(name) {
  state.students.push({ id: state.nextId, name, present: false });
  state.nextId++;
  render();
}
btnAdd.addEventListener("click", () => addStudent(inputName.value));
```

| Pertanyaan | Kunci |
|------------|-------|
| Urutan saat klik? | click → addStudent → push → render |
| Tanpa render()? | List tidak update |

### Snippet B — Duplikasi state

```javascript
state.students.push({ id: 3, name: "Budi", present: false });
displayStudents.push({ id: 3, name: "Budi", present: false });
// hanya state yang di-toggle
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | displayStudents stale |
| Fix? | Hapus displayStudents — satu state |

### Snippet C — Filter

```javascript
state.filterText = "ah";
render(); // skip names without "ah"
```

| Pertanyaan | Kunci |
|------------|-------|
| filterText di state? | Ya — UI meta ikut single source |
| Filter di DOM manual? | Anti-pattern — render dari state |

---

## 6. Exit ticket

1. Diagram 3 panah alur data
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
