# Materi Guru Lengkap — XI-S3-P08
**Modul:** [XI-S3-P08_state-aplikasi.md](../../kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md)
**Materi pendukung sumber:** [XI-S3-P08_state-aplikasi.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P08 — State Aplikasi di Memori

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P08 |
| Unit | XI3.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |

## Learning Transformation

Dari CRUD acak → **single source of truth** di memori.

---

## Timeline (90 menit)

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

## Starter Pattern

```javascript
let state = { students: [] };
function addStudent(name) {
  state.students.push({ id: Date.now(), name, present: false });
  render();
}
```

---

## Formatif

**REA**, **ITR**

---

## Catatan Guru

Jembatan ke persistensi di S4 P07 — sebut “refresh = hilang” sebagai hook.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P08 State Aplikasi di Memori

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P08 |
| Modul pertemuan | [XI-S3-P08_state-aplikasi.md](../../../kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md) |
| Unit | XI3.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| Formatif | REA, ITR |
| Ada live code? | **Ya — single source of truth + CRUD live (1 file — spaghetti sengaja untuk P09)** |

---

## Pengetahuan Guru

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

**Jangan bagikan:** absensi.html CRUD lengkap siap jalan.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P04 — kenapa innerHTML total + render()?" | Listener predictable; satu pintu update DOM |
| "P07 — array root vs state object?" | Hari ini `state = { students: [], filter: "" }` |
| "X-S2-P10 — lupa render() setelah push?" | DOM stale — state vs tampilan |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa absensi/inventaris versi sendiri |
| **Live coding** | Bug 2 array → fix single state → CRUD + filter |
| **Per baris / scope** | state object, update fn, render loop — TTS |
| **Recall** | Demo bug sync — dramatis sebelum fix |
| **Membaca kode** | Trace diagram event → update → render |
| **No starter file** | Scaffold HTML minimal — logic live guru |

---

## Materi Inti

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

## Alur Live Coding

> **Scaffold:** input nama + btn tambah + input filter + `<ul id="student-list"></ul>`. **Satu file** `index.html` — script inline (spaghetti untuk P09).

### Persiapan

- Live Server
- Siapkan bug demo 2 array di tab terpisah (opsional paste anonim)

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Bug demo 0–5 menit]
Buka snippet 2 array — toggle present di students saja.
Ucapkan: "List di layar baca displayList — state bohong."
Tanya: "Berapa sumber kebenaran ideal?"

[LANGKAH 1 — Experience absensi 5–15 menit]
Oral: daftar hadir vs counter di papan — satu sumber?
Catat di papan: event → state → render.

[LANGKAH 2 — Trap DOM sebagai state 15–25 menit]
Tanya: "Baca hadir/tidak dari class CSS di <li> — risk?"
Ucapkan: "DOM = cermin; state = kebenaran."

[LANGKAH 3 — State object 25–35 menit]
Ketik:
let state = {
  students: [
    { id: 1, name: "Ahmad", present: false },
    { id: 2, name: "Siti", present: true },
  ],
  filterText: "",
  nextId: 3,
};
Ucapkan: "Semua data + UI meta (filter) dalam satu state."
Scope: let — state akan dimutasi.

[LANGKAH 4 — Referensi DOM 35–40 menit]
const listEl = document.getElementById("student-list");
const inputName = document.getElementById("input-name");
const btnAdd = document.getElementById("btn-add");
const inputFilter = document.getElementById("input-filter");

[LANGKAH 5 — Function render 40–55 menit]
Ketik function render() {
  listEl.innerHTML = "";
  const q = state.filterText.trim().toLowerCase();
  for (let i = 0; i < state.students.length; i++) {
    const s = state.students[i];
    if (q !== "" && !s.name.toLowerCase().includes(q)) {
      continue;
    }
    const li = document.createElement("li");
    li.textContent = s.name + (s.present ? " ✓" : " ✗") + " ";
    const btnToggle = document.createElement("button");
    btnToggle.type = "button";
    btnToggle.textContent = "Toggle";
    btnToggle.addEventListener("click", function () {
      togglePresent(s.id);
    });
    const btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.textContent = "Hapus";
    btnDel.addEventListener("click", function () {
      removeStudent(s.id);
    });
    li.appendChild(btnToggle);
    li.appendChild(btnDel);
    listEl.appendChild(li);
  }
}
Ucapkan: "Render baca HANYA state — filter applied di sini."
Scope: closure id per item — spiral X-S2-P10.

[LANGKAH 6 — Update functions 55–68 menit]
Ketik:
function addStudent(name) {
  if (name.trim() === "") {
    return;
  }
  state.students.push({
    id: state.nextId,
    name: name.trim(),
    present: false,
  });
  state.nextId = state.nextId + 1;
  render();
}

function togglePresent(id) {
  for (let i = 0; i < state.students.length; i++) {
    if (state.students[i].id === id) {
      state.students[i].present = !state.students[i].present;
      break;
    }
  }
  render();
}

function removeStudent(id) {
  state.students = state.students.filter(function (item) {
    return item.id !== id;
  });
  render();
}
Ucapkan: "Setiap mutasi diakhiri render() — tanpa exception."
Catatan sengaja: validasi trim duplikat nanti di P09 extract.

[LANGKAH 7 — Event handlers 68–75 menit]
btnAdd.addEventListener("click", function () {
  addStudent(inputName.value);
  inputName.value = "";
});

inputFilter.addEventListener("input", function () {
  state.filterText = inputFilter.value;
  render();
});

Ketik: render();

[LANGKAH 8 — Debug trace 70–85 menit]
Siswa latih trace: klik Toggle → togglePresent → render.
Papan diagram 3 panah — foto exit ticket.

[LANGKAH 9 — Practice 45–70 menit overlap]
CRUD mini + filter — tetap 1 file.
Keliling: cari update DOM di luar render() — flag smell untuk P09.

[LANGKAH 10 — Reflect + hook P09 85–90 menit]
Refresh — data hilang. Preview S4 persistensi.
Ucapkan: "File ini panjang — minggu depan refactor extract function."
Tanya: "Fungsi mana paling sulit dibaca?"
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Absensi/inventaris mini — state object + CRUD + filter
2. Diagram 3 panah alur data (kertas/Docs)
3. **Simpan file P08** — dipakai refactor P09/P10
4. **Tidak boleh:** copy script guru utuh

**Extension:** counter hadir derived di render — jangan simpan counter terpisah di state (hitung dari `students`).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Update DOM langsung di handler | Tanya "state berubah belum?" |
| Counter hadir variabel terpisah | Hitung dari array saat render |
| Lupa render setelah filter | Demo filter ketik — list kosong salah |
| 2 array sync manual | Opening bug demo |
| Guru refactor terlalu cepat | Biarkan monolithic — P09 job |
| Copy absensi template WA | Scaffold minimal live |

---

## Rujukan

- Modul: [XI-S3-P08](../../../kelas-xi/semester-3/XI-S3-P08_state-aplikasi.md)
- Pola render: [P04 DOM Update Aman](./XI-S3-P04_dom-update-aman.md)
- Skema data: [P07 Struktur Nested](./XI-S3-P07_struktur-data-nested.md)
- Recall X: [X-S2-P10 CRUD](../../kelas-x/semester-2/X-S2-P10_object-state-crud.md)
- Lanjut: [P09 Refactor Modul](./XI-S3-P09_refactor-modul.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Single state object — bug duplikasi didemo
- [ ] CRUD + filter live — event → update → render
- [ ] TTS scope state vs render vs handler
- [ ] File monolithic tersimpan untuk P09
- [ ] Diagram 3 panah exit ticket
- [ ] Refresh = state hilang — hook S4
- [ ] Tidak distribusi solusi lengkap

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
