# Materi Guru Lengkap — XI-S3-P09

**Handout siswa (bagikan):** [XI-S3-P09_refactor-modul_siswa.md](./XI-S3-P09_refactor-modul_siswa.md)

**Modul:** [XI-S3-P09_refactor-modul.md](../../../kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)

**Materi pendukung sumber:** [XI-S3-P09_refactor-modul.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P09 — Refactor & Modul Fungsi

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P09 |
| Unit | XI3.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T3 |
| MM | MM-14 |

## Learning Transformation

Dari fungsi 200 baris → **modul** dengan nama tanggung jawab jelas.

---

## Timeline (90 menit)

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

## Cognitive Trap

**Asumsi:** Refactor = buang waktu; yang penting jalan.  
**Aman:** Tunjukkan bug dari duplikasi copy-paste.

---

## Formatif

**ITR**, **TEC**

---

## Catatan Guru

Intro `export/import` jika browser support; fallback script order + namespace object.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P09 Refactor & Modul Fungsi

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P09 |
| Modul pertemuan | [XI-S3-P09_refactor-modul.md](../../../kelas-xi/semester-3/XI-S3-P09_refactor-modul.md) |
| Unit | XI3.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T3 |
| MM | MM-14 |
| Formatif | ITR, TEC |
| Ada live code? | **Ya — refactor live dari spaghetti P08 + intro ES module** |

---

## Pengetahuan Guru

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

**Jangan bagikan:** repo refactor jadi multi-file lengkap — siswa ikuti live.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P08 — fungsi mana paling panjang?" | Biasanya render atau handler inline |
| "Copy-paste validasi 2× — risk?" | Fix di satu tempat, lupa di tempat lain |
| "P10 nanti — beda file vs beda function?" | Function dulu; file = separation of concerns |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Refactor kode P08 milik siswa — bukan paste solusi guru |
| **Live coding** | Before/after diff — jalankan test manual tiap extract |
| **Per baris / scope** | Nama function, export/import — TTS |
| **Recall** | Smell hunt 3 item di spaghetti anonim |
| **Membaca kode** | Before/after snippet — "fungsi ini pindah ke mana?" |
| **No starter file** | Tidak distribusi folder `/src` jadi |

---

## Materi Inti

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

## Alur Live Coding

> **Mulai dari file P08** — jangan rewrite from scratch. **Test manual** setelah setiap extract: tambah → toggle → filter → hapus.

### Persiapan

- Live Server (module butuh HTTP)
- File P08 siswa/guru terbuka
- Diff tool opsional (screenshot before/after)

### Skrip TTS — refactor live baris demi baris

```text
[LANGKAH 0 — Opening smell hunt 0–5 menit]
Tampilkan spaghetti anonim (potongan P08) — siswa cari 3 smell.
Ucapkan: "Refactor = rapikan tanpa ubah perilaku user."

[LANGKAH 1 — Experience dapur 5–15 menit]
Oral: stasiun potong/masak/sajikan — satu chef campur semua = bottleneck.
Tanya: "Di kode P08 kamu — 'stasiun' apa?"

[LANGKAH 2 — Trap copy-paste 15–25 menit]
Highlight 2× if (x.trim() === "") — demo ubah rule di satu tempat saja.
Ucapkan: "DRY — Don't Repeat Yourself; jangan over-abstract dulu."

[LANGKAH 3 — Extract validateNonEmpty 25–35 menit]
Select validasi di addStudent → Cut → buat:
function validateNonEmpty(str) {
  return str.trim() !== "";
}
Ganti di addStudent:
if (!validateNonEmpty(name)) return;
Test: tambah kosong — still blocked. Tambah nama — jalan.
Ucapkan: "Extract kecil — test langsung."

[LANGKAH 4 — Extract setFilter 35–42 menit]
Pindahkan logic filter input handler ke:
function setFilter(text) {
  state.filterText = text;
  render();
}
Handler jadi: setFilter(inputFilter.value);
Test: filter ketik — jalan.

[LANGKAH 5 — Pastikan update terpisah dari render 42–52 menit]
Review: addStudent, togglePresent, removeStudent — masing-masing hanya mutasi + render().
Render tidak push ke state — cek live.
Tanya: "Render mutasi state? (Harus tidak.)"

[LANGKAH 6 — Rename untuk clarity 52–58 menit]
Rename jika perlu: render → renderStudentList (opsional).
Ucapkan: "Nama function = kontrak tanggung jawab."

[LANGKAH 7 — Intro export (single file dulu) 58–68 menit]
Opsi A — tetap 1 file, komentar section:
// === state & updates ===
// === render ===
// === handlers ===

Opsi B — buat state.js + main.js:
Pindahkan state + addStudent + toggle + remove + setFilter ke state.js
Tambah export di setiap function + export state
main.js: import + render + handlers + render() awal
HTML: script type="module"
Test full CRUD — jika error import, debug live (path ./state.js).
Scope: export/import syntax — spelling ./ relative path.

[LANGKAH 8 — Practice siswa 45–70 menit overlap]
Refactor P08 minimal 3 extract + 1 rename.
Screenshot before/after atau diff singkat.

[LANGKAH 9 — Before/after reflect 70–85 menit]
Tanya: "Baris handler event sekarang — lebih pendek?"
Ucapkan: "P10 — pisah file render vs handlers."

[LANGKAH 10 — Exit 85–90 menit]
1 fungsi rename + alasan 1 kalimat.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Refactor P08 — min 3 function extract + 1 rename
2. Before/after screenshot atau diff
3. Opsional: 2 file ES module (state + main)
4. **Tidak boleh:** download repo refactor jadi

**Extension:** extract `getVisibleStudents()` untuk filter logic — render pakai hasilnya.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Refactor + ubah behavior | Test manual tiap step |
| Extract terlalu granular (1 baris × 20 fn) | Tanya "nama function jelas?" |
| Module tanpa Live Server | file:// error — jelaskan CORS |
| Rewrite from scratch | Larangan — mulai dari P08 |
| Copy folder /src guru | Extract sendiri |
| Guru selesaikan refactor di keyboard siswa | Guiding — siswa rename |

---

## Rujukan

- Modul: [XI-S3-P09](../../../kelas-xi/semester-3/XI-S3-P09_refactor-modul.md)
- Prasyarat: [P08 State Aplikasi](./XI-S3-P08_state-aplikasi.md)
- Lanjut: [P10 Pemisahan Tanggung Jawab](./XI-S3-P10_pemisahan-tanggung-jawab.md)
- MM-14
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Refactor live dari P08 — perilaku sama
- [ ] Min 3 extract + validate DRY
- [ ] Intro export/import atau section comment jelas
- [ ] Before/after documented
- [ ] 1 rename + alasan exit
- [ ] Test CRUD manual pass
- [ ] Tidak distribusi solusi multi-file jadi

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
- [BRG-03](../../../materi-ajar/jalur-kelanjutan/BRG-03_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Refactor = teliti sebelum mengubah yang dipakai sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
