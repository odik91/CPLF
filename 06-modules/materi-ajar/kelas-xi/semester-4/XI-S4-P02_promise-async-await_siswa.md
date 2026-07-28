# Handout Siswa — XI-S4-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P02_promise-async-await.md](../../../kelas-xi/semester-4/XI-S4-P02_promise-async-await.md)

---

## 1. Tujuan pembelajaran

Dari callback hell → **async/await** terbaca.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot 3 state: loading / ok / error
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
