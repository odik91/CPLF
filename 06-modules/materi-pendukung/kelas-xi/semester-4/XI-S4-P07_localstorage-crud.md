# Materi Pendukung Guru — XI-S4-P07 localStorage CRUD

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P07 |
| Modul pertemuan | [XI-S4-P07_localstorage-crud.md](../../../kelas-xi/semester-4/XI-S4-P07_localstorage-crud.md) |
| Unit | XI4.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T4 |
| Formatif | TEC, ITR |
| Ada live code? | **Ya — localStorage + JSON live pada app S3 (render pattern)** |

---

## Pengetahuan Guru

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

**Jangan bagikan:** file HTML CRUD + localStorage lengkap siap jalan.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "S3 P08 — refresh, data hilang kenapa?" | State hanya di RAM — belum persist |
| "S3 P04 — urutan setelah toggle present?" | update state → render() — tambah save di tengah |
| "S4 P04 — `response.json()` vs `JSON.parse`?" | Keduanya deserialize JSON — sumber beda (network vs storage) |
| "S4 P06 — pure function vs save?" | Transform pure; save = side effect setelah mutasi |
| "X-S2-P10 — kenapa id stabil?" | Edit/hapus by id — key storage ikut skema id |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa lanjutkan app S3 sendiri — jangan distribusi solusi storage |
| **Live coding** | Buka app P08 S3 → tambah KEY + load/save live — refresh demo |
| **Per baris / scope** | KEY const, try/catch parse, saveState scope — TTS |
| **Recall** | Refresh dramatis — frustrasi → solusi buku catatan |
| **Membaca kode** | Snippet parse tanpa try/catch — prediksi crash |
| **No starter file** | Scaffold dari file siswa/P08 — bukan template siap pakai |
| **Amanah** | Diskusi: simpan nomor HP teman? data uang kas? — etika MA |

---

## Materi Inti

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

## Alur Live Coding

> **Scaffold:** App S3 P08 siswa/guru (absensi mini) — state object + render(). **Satu file** `index.html`.

### Persiapan

- Live Server
- DevTools → Application → Local Storage (tunjukkan panel)
- Siapkan app tanpa storage — refresh kosong (opening)

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening refresh 0–5 menit]
Tambah 2 siswa → refresh F5 → hilang.
Ucapkan: "State S3 cuma di memori — spiral P08 hook terjawab hari ini."
Tanya: "Buku catatan vs hafalan — mana lebih amanah untuk data kelas?"

[LANGKAH 1 — Experience 5–15 menit]
Oral: tabungan Qurban — bukti tulis vs lupa.
Catat di papan: stringify = tulis · parse = baca.

[LANGKAH 2 — Trap parse 15–25 menit]
DevTools: edit value KEY jadi "{ broken" — reload tanpa try/catch.
Ucapkan: "String corrupt = parse throw — app mati total."
Tanya: "Default state fallback diperlukan?"

[LANGKAH 3 — KEY namespace 25–30 menit]
Ketik:
const KEY = "ma-absensi-v1";
Ucapkan: "v1 di key — nanti schema berubah, key baru — migrasi."
Scope: const — key tidak berubah runtime.

[LANGKAH 4 — defaultState 30–35 menit]
Ketik defaultState object — mirror struktur state P08.
Ucapkan: "Fallback aman saat pertama buka atau corrupt."

[LANGKAH 5 — saveState 35–42 menit]
Ketik:
function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}
Ucapkan: "setItem hanya terima string — stringify wajib."
Scope: parameter state — tidak mutasi di sini.

[LANGKAH 6 — loadState 42–52 menit]
Ketik loadState dengan try/catch + validasi array students.
Ucapkan: "Null = belum pernah save — return default."
Ucapkan: "Parse gagal — jangan crash; reset + console.warn."

[LANGKAH 7 — Init load 52–58 menit]
Ganti:
let state = { ... hardcoded ... };
Menjadi:
let state = loadState();
Ketik: render();
Refresh — data tetap. **Moment aha.**

[LANGKAH 8 — Save on change 58–70 menit]
Di addStudent, togglePresent, removeStudent — sebelum render():
saveState(state);
Ucapkan: "Setiap mutasi = snapshot ke storage — konsisten dengan single source."
Jangan save di dalam render() — pisah side effect.

[LANGKAH 9 — DevTools inspect 70–80 menit]
Buka Application tab — tunjuk string JSON.
Edit manual 1 nama → reload — UI ikut.
Tanya: "Siapa pun bisa edit storage — ini bukan keamanan server."

[LANGKAH 10 — Practice + exit 80–90 menit]
Siswa wiring save/load ke app sendiri.
Exit ticket: tulis KEY + 1 baris JSON.stringify di kertas.
Preview P08: UI idle/saving/saved/error — save silent belum cukup.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Lengkapi app S3 dengan load/save — minimal 3 operasi CRUD persisten
2. Uji refresh 3× — data konsisten
3. Sengaja corrupt JSON di DevTools — app tidak crash (fallback)
4. Tulis KEY + struktur JSON root di README pribadi
5. **Tidak boleh:** copy script storage guru utuh

**Extension:** `localStorage.removeItem(KEY)` + tombol reset — konfirmasi dulu.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Simpan object langsung tanpa stringify | Demo `[object Object]` di storage |
| Lupa loadState saat init | Refresh selalu kosong |
| Parse tanpa try/catch | Corrupt demo — fix bareng |
| Save hanya di 1 handler | Toggle tidak persist — checklist semua mutasi |
| Duplikasi state: storage + variabel terpisah | Single state — storage = backup string |
| KEY generik `"data"` | Tab collision — namespace + versi |
| Simpan PII sensitif | Diskusi amanah MA |
| Guru refactor app siswa total | Minimal diff: +KEY, +load, +save |

---

## Rujukan

- Modul: [XI-S4-P07](../../../kelas-xi/semester-4/XI-S4-P07_localstorage-crud.md)
- Render pattern: [S3 P04 DOM Update](../semester-3/XI-S3-P04_dom-update-aman.md)
- State: [S3 P08 State Aplikasi](../semester-3/XI-S3-P08_state-aplikasi.md)
- Nested: [S3 P07 Struktur Nested](../semester-3/XI-S3-P07_struktur-data-nested.md)
- Async JSON: [P04 Fetch JSON](./XI-S4-P04_fetch-json.md)
- Pipeline: [P06 Pipeline Data](./XI-S4-P06_pipeline-data.md)
- Lanjut: [P08 Persistensi Error State](./XI-S4-P08_persistensi-error-state.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] KEY namespace + defaultState didefinisikan
- [ ] loadState dengan try/catch live
- [ ] saveState dipanggil setiap mutasi CRUD
- [ ] Refresh — data tetap (demo kelas)
- [ ] Spiral S3 render + S4 JSON diingatkan
- [ ] DevTools storage ditunjukkan
- [ ] Diskusi amanah data — no PII sembarangan
- [ ] Tidak distribusi solusi lengkap

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)
