# Materi Guru Lengkap — XI-S4-P04
**Modul:** [XI-S4-P04_fetch-json.md](../../kelas-xi/semester-4/XI-S4-P04_fetch-json.md)
**Materi pendukung sumber:** [XI-S4-P04_fetch-json.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-4/XI-S4-P04_fetch-json.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P04 — Fetch & JSON

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P04 |
| Unit | XI4.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2 |

## Learning Transformation

Dari kontrak di kertas → **konsumsi API** live di app.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Cek koneksi · fallback mock JSON file |
| 5–15 | Concept | `fetch(url)` · `response.json()` · async handler |
| 15–25 | Clarify | CORS · jangan expose secret key di frontend |
| 25–45 | Demo | Guru live fetch 1 endpoint |
| 45–70 | Practice | Tampilkan 5 item API ke DOM (loading/error) |
| 70–85 | Debug | 404 / typo field — latih console |
| 85–90 | Exit | URL + screenshot |

---

## Starter

```javascript
async function loadNews() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error(res.status);
  return res.json();
}
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Siapkan `data/mock.json` offline jika internet gagal.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P04 Fetch & JSON

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P04 |
| Modul pertemuan | [XI-S4-P04_fetch-json.md](../../../kelas-xi/semester-4/XI-S4-P04_fetch-json.md) |
| Unit | XI4.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T2 |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — fetch live dari file kosong; mock JSON offline fallback; render 5 item + loading/error** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`fetch(url)`** | Request HTTP — mengembalikan **Promise** Response |
| **`response.ok`** | true jika status 200–299 — **wajib cek** sebelum parse |
| **`response.json()`** | Parse body ke object/array — juga Promise |
| **Async handler** | `async function load()` + await fetch + await json |
| **CORS** | Browser blok cross-origin tertentu — pilih API ramah atau mock file |
| **Secret key** | **Jangan** di frontend — env server / API publik tanpa key |
| **Fallback offline** | `data/mock.json` lokal jika internet gagal — guru siapkan, siswa buat sendiri saat practice |

**Alur target:** mock mental P02 → kontrak P03 → **fetch sungguhan** hari ini.

**Spiral S3 render():** fetch selesai → update **state** (array posts) → `renderList(state.items)` — bukan innerHTML string mentah tanpa struktur.

**Endpoint rekomendasi (guru):**

```text
https://jsonplaceholder.typicode.com/posts?_limit=5
```

Open-Meteo alternatif jika guru mau cuaca — sesuaikan kontrak P03 oral.

**Trap modul:** typo URL / field `title` vs `body` — latih console Network + error message.

**Jangan bagikan:** starter modul + file HTML siap jalan — live from empty.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P03 — kontrak GET posts — field apa?" | id, title, body, userId, … |
| "P02 — await mockFetch — fetch beda?" | URL sungguhan, res.ok, res.json() |
| "P04 S3 — render() kapan setelah data datang?" | Setelah state array terisi — panggil render |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | URL + loadNews diketik live — modul starter tidak ke siswa |
| **Live coding** | Kosong → fetch mock file → ganti URL API → render list |
| **Per baris / scope** | Scope async load · if (!res.ok) · await res.json() |
| **Recall** | Kontrak P03 2 menit |
| **Membaca kode** | Snippet fetch chain — prediksi sebelum run |
| **No starter file** | Siswa ketik dari `<!DOCTYPE html>` — guru siap mock.json terpisah hanya jika demo offline |

---

## Materi Inti

### Transformasi

**Dari:** Kontrak di kertas  
**Ke:** **Konsumsi API** live di app + DOM

### HTML scaffold (guru ketik live)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Fetch Posts — P04</title>
</head>
<body>
  <p id="status">Siap</p>
  <ul id="post-list"></ul>
  <button type="button" id="btn-reload">Muat ulang</button>
  <script>
    /* logic live */
  </script>
</body>
</html>
```

### State + render (spiral S3)

```javascript
let state = {
  phase: "idle",
  message: "Siap",
  posts: [],
};

const statusEl = document.getElementById("status");
const listEl = document.getElementById("post-list");
const btnReload = document.getElementById("btn-reload");

function render() {
  if (state.phase === "loading") {
    statusEl.textContent = "Memuat...";
  } else if (state.phase === "error") {
    statusEl.textContent = state.message;
  } else {
    statusEl.textContent = "Selesai — " + state.posts.length + " item";
  }

  listEl.innerHTML = "";
  for (let i = 0; i < state.posts.length; i++) {
    const post = state.posts[i];
    const li = document.createElement("li");
    li.textContent = post.title;
    listEl.appendChild(li);
  }
}
```

### loadNews — fetch sungguhan

```javascript
async function loadNews() {
  state.phase = "loading";
  state.message = "";
  render();

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }
    const data = await res.json();
    state.posts = data;
    state.phase = "ok";
  } catch (e) {
    state.phase = "error";
    state.message = "Gagal: " + e.message;
    state.posts = [];
  }
  render();
}

btnReload.addEventListener("click", loadNews);
loadNews();
```

### Fallback mock (offline — guru demo)

```javascript
async function loadNewsOffline() {
  state.phase = "loading";
  render();
  try {
    const res = await fetch("./data/mock.json");
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }
    state.posts = await res.json();
    state.phase = "ok";
  } catch (e) {
    state.phase = "error";
    state.message = "Gagal: " + e.message;
  }
  render();
}
```

**mock.json** (guru buat saat prep — **jangan** WA ke siswa):

```json
[
  { "id": 1, "title": "Mock offline satu", "body": "..." },
  { "id": 2, "title": "Mock offline dua", "body": "..." }
]
```

---

## Alur Live Coding

> **Urutan wajib:** cek koneksi → concept fetch → demo guru 1 endpoint → siswa practice → debug 404/typo.

### Persiapan

- Internet lab + backup mock.json
- DevTools Network tab — proyektor
- Kontrak P03 posts — sticky di papan

### Skrip TTS — mock dulu, API nyata, render spiral

```text
[LANGKAH 0 — Opening 0–5 menit]
Cek WiFi. Recall P03: GET + JSON fields.
Tanya: "await fetch mengembalikan apa?" (Promise Response)

[LANGKAH 1 — Concept 5–15 menit]
Gambar: fetch → res → json → array → state → render.
Ucapkan: "Dua await: fetch dan json()."

[LANGKAH 2 — CORS & etika 15–22 menit]
Jangan API key di HTML. Pilih endpoint publik.
Offline: mock.json — kontrak sama.

[LANGKAH 3 — Scaffold + state 22–35 menit]
Ketik HTML + state object + render().
Scope: render baca state.posts — loop createElement spiral P04 S3.

[LANGKAH 4 — loadNews async 35–50 menit]
Ketik try, await fetch, if (!res.ok) throw, await res.json().
Ucapkan: "res.ok false = 404 — jangan langsung json() percaya."
Scope: try vs catch — UI error spiral P02.

[LANGKAH 5 — Demo live API 50–58 menit]
Run — Network tab: status 200, preview JSON.
5 item di list — OBS siswa screenshot.

[LANGKAH 6 — Debug 58–68 menit]
Ganti URL typo — demo 404 + pesan catch.
Typo data.title → undefined — console.log data[0].

[LANGKAH 7 — Practice 45–70 menit overlap]
Siswa: fetch sendiri + 5 item + reload button.
Wajib loading + error state.

[LANGKAH 8 — Bridge P05 85–90 menit]
Ucapkan: "Besok filter/map sebelum render — pipeline data."
Exit: URL + screenshot ok + error (simulasi typo).
```

---

## Latihan Membaca Kode

### Snippet A — Tanpa res.ok

```javascript
const res = await fetch("/salah-url");
const data = await res.json();
```

| Pertanyaan | Kunci |
|------------|-------|
| Status 404 — data? | Mungkin HTML error page — parse gagal atau misleading |
| Fix? | if (!res.ok) throw |

### Snippet B — Urutan await

```javascript
async function load() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa Promise? | fetch + json = 2 await |
| Tanpa await json()? | data = Promise pending object |

### Snippet C — Render spiral

```javascript
state.posts = data;
render();
// lupa render setelah assign
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | List kosong meski fetch sukses |
| Pola S3? | Mutasi state → render() |

---

## Praktik Mandiri

1. Fetch API publik — tampilkan **5 item** ke `<ul>`
2. Loading + error UI — try/catch + res.ok
3. Tombol muat ulang
4. Screenshot Network tab — status code
5. **Tidak boleh:** copy loadNews guru utuh

**Extension:** Fallback ke mock.json jika fetch gagal (double try — advanced opsional).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa await res.json() | Demo typeof data — "object" vs Promise |
| innerHTML string panjang tanpa state | Spiral render + createElement |
| CORS error tidak dibaca | Pilih API ramah · mock lokal |
| Hanya test online sukses | Simulasi typo URL |
| API key di script | Bahas risiko · P03 etika |
| Guru distribusi HTML siap | Live from empty |

---

## Rujukan

- Modul: [XI-S4-P04](../../../kelas-xi/semester-4/XI-S4-P04_fetch-json.md)
- Sebelum: [P03 API Kontrak](./XI-S4-P03_api-kontrak-data.md) · [P02 Promise](./XI-S4-P02_promise-async-await.md)
- Lanjut: [P05 map/filter/reduce](./XI-S4-P05_map-filter-reduce.md)
- Spiral render: [S3-P04](../semester-3/XI-S3-P04_dom-update-aman.md) · [S3-P08](../semester-3/XI-S3-P08_state-aplikasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Fetch + res.ok + json() diketik live
- [ ] State + render() spiral S3 — 5 item DOM
- [ ] Loading + error UI — demo gagal
- [ ] Network tab / console debug 404
- [ ] Mock offline siap jika internet mati
- [ ] Tidak distribusi starter ke siswa
- [ ] Exit: URL + screenshot + preview P05 pipeline

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan

## Materi pendamping BRG (wajib/opsional)

- [BRG-04](../../jalur-kelanjutan/BRG-04_guru.md)
- [BRG-05](../../jalur-kelanjutan/BRG-05_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
