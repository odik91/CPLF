# Materi Guru Lengkap — XI-S4-P02
**Modul:** [XI-S4-P02_promise-async-await.md](../../kelas-xi/semester-4/XI-S4-P02_promise-async-await.md)
**Materi pendukung sumber:** [XI-S4-P02_promise-async-await.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-4/XI-S4-P02_promise-async-await.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P02 — Promise & async/await

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P02 |
| Unit | XI4.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2 |

## Learning Transformation

Dari callback hell → **async/await** terbaca.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall P01 — antrian vs janji (Promise) |
| 5–15 | Experience | **Reservasi kursi mushola** — konfirmasi atau tolak |
| 15–25 | Trap | `.then` chain tanpa `.catch` |
| 25–35 | Clarify | Error path wajib dirancang |
| 35–45 | Concept | Promise · `async function` · `await` · try/catch |
| 45–70 | Practice | Mock `fetchData()` delay 2s + spinner + error message |
| 70–85 | Debug | Network fail simulasi |
| 85–90 | Exit | Screenshot 3 state: loading / ok / error |

---

## Starter

```javascript
async function load() {
  const el = document.querySelector("#status");
  el.textContent = "Memuat...";
  try {
    const data = await mockFetch();
    el.textContent = data.message;
  } catch (e) {
    el.textContent = "Gagal: " + e.message;
  }
}
```

---

## Formatif

**TEC**, **REA**

---

## Catatan Guru

Mock dulu; live API di P04.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P02 Promise & async/await

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P02 |
| Modul pertemuan | [XI-S4-P02_promise-async-await.md](../../../kelas-xi/semester-4/XI-S4-P02_promise-async-await.md) |
| Unit | XI4.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T2 |
| Formatif | TEC, REA |
| Ada live code? | **Ya — mock fetch + async/await + loading/error UI dari file kosong** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Promise** | Objek "janji" — nanti `fulfilled` (sukses) atau `rejected` (gagal) |
| **`async function`** | Fungsi yang **selalu** mengembalikan Promise — boleh pakai `await` di dalamnya |
| **`await`** | Pause **di dalam** async function sampai Promise selesai — kode terbaca atas-bawah |
| **`try/catch`** | Tangkap error dari `await` — **error path wajib** dirancang |
| **`.then/.catch`** | Bentuk lama — sebut singkat; fokus kelas = async/await |
| **UI 3 state** | loading · ok · error — spiral P01 + render S3 |

**Metafora reservasi kursi mushola:** daftar → tunggu konfirmasi (pending) → dapat kursi (fulfilled) atau penuh (rejected).

**Trap modul:** `.then` chain tanpa `.catch` / try — **aman:** simulasi `mockFetch(false)` lempar Error.

**Builds on P01:** `setTimeout` → bungkus jadi Promise di `mockFetch()` — formalisasi janji.

**Chain ke P03–P04:** mock hari ini; kontrak API P03; `fetch` sungguhan P04.

**Spiral S3 render():** `renderUi(state)` dipanggil saat loading, sukses, gagal — jangan patch DOM acak di 3 tempat.

**Jangan bagikan:** file modul starter siap jalan — guru ketik live; siswa dari kosong.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P01 — setTimeout vs sync — urutan log?" | Callback nanti; stack lanjut dulu |
| "P01 — kenapa teks 'Memuat…'?" | User tidak menatap layar kosong |
| "P08 S3 — event → ? → render" | update state → render() |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Modul punya snippet starter — **jangan** WA ke siswa; ketik live |
| **Live coding** | HTML kosong → mockFetch → load() async → try/catch |
| **Per baris / scope** | Scope `async function load` · scope `try` vs `catch` — TTS |
| **Recall** | 2 menit P01 setTimeout + loading |
| **Membaca kode** | Snippet Promise constructor sebelum ketik mockFetch |
| **No starter file** | Scaffold `<p id="status">` saja — logic live guru |

---

## Materi Inti

### Transformasi

**Dari:** Callback hell / setTimeout mentah  
**Ke:** **async/await** terbaca + error path eksplisit

### mockFetch — simulasi API (target live)

```javascript
function mockFetch(shouldSucceed) {
  if (shouldSucceed === undefined) {
    shouldSucceed = true;
  }
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldSucceed) {
        resolve({ message: "Halo dari mock API!" });
      } else {
        reject(new Error("Jaringan gagal"));
      }
    }, 2000);
  });
}
```

### load() — 3 state UI

```javascript
async function load(shouldSucceed) {
  const el = document.querySelector("#status");
  el.textContent = "Memuat...";
  el.className = "loading";

  try {
    const data = await mockFetch(shouldSucceed);
    el.textContent = data.message;
    el.className = "ok";
  } catch (e) {
    el.textContent = "Gagal: " + e.message;
    el.className = "error";
  }
}
```

### Spiral render() — versi ringkas

```javascript
let ui = { phase: "idle", message: "Siap" };

function renderUi() {
  const el = document.querySelector("#status");
  el.textContent =
    ui.phase === "loading" ? "Memuat..." : ui.message;
  el.className = ui.phase;
}

async function loadWithRender(shouldSucceed) {
  ui = { phase: "loading", message: "" };
  renderUi();
  try {
    const data = await mockFetch(shouldSucceed);
    ui = { phase: "ok", message: data.message };
  } catch (e) {
    ui = { phase: "error", message: "Gagal: " + e.message };
  }
  renderUi();
}
```

Gunakan salah satu gaya — **konsisten** dengan kelas; spiral render direkomendasikan jika S3 P04/P08 fresh.

---

## Alur Live Coding

> **Mulai:** file HTML **kosong**. Guru ketik struktur + script. Dua tombol: Sukses / Simulasi gagal.

### Persiapan

- Live Server
- CSS opsional `.loading` / `.error` — 3 baris cukup
- Timer OBS: siswa screenshot 3 state di exit

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Recall 0–5 menit]
Tanya: "P01 output A,C,B — kenapa?"
Ucapkan: "Hari ini janji formal: Promise. Besok kontrak API P03."

[LANGKAH 1 — Experience reservasi 5–15 menit]
Oral: daftar mushola — pending / confirmed / rejected.
Gambar: pending = loading UI.

[LANGKAH 2 — Trap tanpa catch 15–22 menit]
Tampilkan snippet .then tanpa .catch — tanya: "Error network — user lihat apa?"
Ucapkan: "try/catch wajib — error path = desain, bukan kebetulan."

[LANGKAH 3 — Latihan baca Promise 22–30 menit]
Proyeksikan mockFetch skeleton — prediksi resolve vs reject.
Scope: function (resolve, reject) di constructor — executor jalan segera.

[LANGKAH 4 — Scaffold HTML 30–38 menit]
Ketik: status paragraph, btn Sukses, btn Gagal.
const statusEl = ... ; btnOk.addEventListener(... load(true)); btnFail → load(false)

[LANGKAH 5 — mockFetch 38–50 menit]
Ketik return new Promise + setTimeout 2000.
Ucapkan: "Ini jembatan P01 → fetch P04."
Scope: resolve/reject hanya dipanggil sekali.

[LANGKAH 6 — async load + try/catch 50–65 menit]
Ketik: async function load(shouldSucceed) {
  statusEl.textContent = "Memuat...";
  try {
    const data = await mockFetch(shouldSucceed);
    statusEl.textContent = data.message;
  } catch (e) {
    statusEl.textContent = "Gagal: " + e.message;
  }
}
Tanya sebelum await: "Baris setelah await jalan kapan?"
Scope: try block vs catch — error masuk catch, bukan crash halaman.

[LANGKAH 7 — Debug simulasi gagal 65–75 menit]
Klik Gagal — pastikan pesan user-friendly.
Console.log(e) — spiral debugging X.

[LANGKAH 8 — Practice 45–70 menit overlap]
Siswa: versi sendiri + class CSS 3 state.
Extension: renderUi() spiral S3.

[LANGKAH 9 — Exit 85–90 menit]
Screenshot loading / ok / error.
Preview P03: kontrak request/response di papan.
```

---

## Latihan Membaca Kode

### Snippet A — Tanpa try/catch

```javascript
async function loadBad() {
  const data = await mockFetch(false);
  el.textContent = data.message;
}
loadBad();
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa yang terjadi? | Unhandled rejection — UI tidak update error |
| Fix? | try/catch atau .catch |

### Snippet B — Urutan await

```javascript
async function demo() {
  console.log("a");
  await mockFetch(true);
  console.log("b");
}
demo();
console.log("c");
```

| Pertanyaan | Kunci |
|------------|-------|
| Urutan? | a, c, (tunggu 2s), b |
| "c" sebelum "b"? | await pause di dalam async fn saja; demo() tidak block script global |

### Snippet C — Spiral render

```javascript
ui.phase = "loading";
renderUi();
const data = await mockFetch(true);
ui.phase = "ok";
ui.message = data.message;
renderUi();
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa kali render? | 2 — loading lalu ok |
| Tanpa render loading? | User freeze UX — bug P01 |

---

## Praktik Mandiri

1. Mock fetch 2 detik — tombol sukses + tombol gagal
2. Tiga state UI jelas (loading / ok / error)
3. **try/catch** wajib — tidak ada unhandled rejection
4. **Tidak boleh:** copy paste load() guru — tulis ulang dengan nama variabel sendiri

**Extension:** Refactor mockFetch ke file terpisah mental — "nanti P04 ganti body jadi fetch(url)".

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa async pada function load | await hanya valid di async function |
| await di top-level script (browser lama) | Bungkus IIFE async atau handler |
| catch kosong | User tidak tahu gagal — tampilkan pesan |
| Hanya uji sukses | Wajib demo gagal — trap modul |
| Guru kirim starter modul ke WA | Etika — live from empty |
| DOM update 3 gaya berbeda | Satu renderUi() — spiral S3 |

---

## Rujukan

- Modul: [XI-S4-P02](../../../kelas-xi/semester-4/XI-S4-P02_promise-async-await.md)
- Sebelum: [P01 Sync vs Async](./XI-S4-P01_sync-vs-async.md)
- Lanjut: [P03 API Kontrak](./XI-S4-P03_api-kontrak-data.md)
- Spiral render: [S3-P04](../semester-3/XI-S3-P04_dom-update-aman.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Recall P01 setTimeout + loading
- [ ] mockFetch + Promise diketik live — dibaca dulu
- [ ] async/await + try/catch — demo sukses **dan** gagal
- [ ] TTS scope async / try / catch
- [ ] 3 state UI — screenshot exit
- [ ] Tidak distribusi starter modul ke siswa
- [ ] Preview P03 kontrak API

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
