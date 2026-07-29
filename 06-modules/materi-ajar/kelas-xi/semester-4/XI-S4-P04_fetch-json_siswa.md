# Handout Siswa — XI-S4-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P04_fetch-json.md](../../../kelas-xi/semester-4/XI-S4-P04_fetch-json.md)

---

## 1. Tujuan pembelajaran

Dari kontrak di kertas → **konsumsi API** live di app.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

### Transformasi

**Dari:** Kontrak di kertas  
**Ke:** **Konsumsi API** live di app + DOM


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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. URL + screenshot
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

## 9. Materi pendamping BRG

- [BRG-04](../../../materi-ajar/jalur-kelanjutan/BRG-04_siswa.md)
- [BRG-05](../../../materi-ajar/jalur-kelanjutan/BRG-05_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
