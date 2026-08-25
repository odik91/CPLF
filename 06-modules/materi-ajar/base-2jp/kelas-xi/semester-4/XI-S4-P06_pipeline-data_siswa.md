# Handout Siswa — XI-S4-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P06_pipeline-data.md](../../../kelas-xi/semester-4/XI-S4-P06_pipeline-data.md)

---

## 1. Tujuan pembelajaran

Dari transformasi di UI → **pipeline** terpisah & testable.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Pipeline** | Rantai transform: raw → bersih → view model → render |
| **Pure function** | Input sama → output sama; **tanpa** side effect DOM/network |
| **`normalizeApiResponse(raw)`** | Satu pintu bersihkan field hilang / rename |
| **`transformPosts(data)`** | filter + map — logic terpisah dari fetch & render |
| **`computeStats(items)`** | reduce — count, avg title length, top 3 |
| **Unit test manual** | `console.log(computeStats(mock))` — prediksi sebelum run |
| **Edge case** | Array kosong · field null — handle di transform, bukan di innerHTML |

**Metafora dapur data:** raw bahan → cuci potong (normalize) → masak (transform) → sajikan (render).

**Trap modul:** logic transformasi di dalam `innerHTML` string — **aman:** pindah ke function; render hanya baca view model.

**Builds on P05:** map/filter/reduce hari ini **dibungkus** named functions — reusable PRJ S4 Dashboard.

**Spiral S3:** fetch handler tipis: `raw → pipeline → state → render()` — sama seperti event → update state → render.

**Output modul:** tabel atau kartu statistik dari data API P04/P05.

---

## 3. Materi praktik

### Transformasi

**Dari:** Transformasi campur di UI / handler fetch  
**Ke:** **Pipeline** terpisah & testable — pure functions

### Layer architecture (papan)

```text
fetch → normalizeApiResponse(raw)
     → transformPosts(normalized)  → viewModels[]
     → computeStats(normalized)     → stats{}
     → assign state → render()
```

### normalizeApiResponse — edge case

```javascript
function normalizeApiResponse(raw) {
  if (!Array.isArray(raw)) {
    return [];
  }
  return raw.map(function (post) {
    return {
      id: post.id,
      title: post.title || "(tanpa judul)",
      body: post.body || "",
      userId: post.userId,
    };
  });
}
```

**TTS scope:** callback map — `post` possibly missing fields — kontrak P03 defensive.

### transformPosts — pure filter + map

```javascript
function transformPosts(normalized) {
  return normalized
    .filter(function (post) {
      return post.title.length > 15;
    })
    .map(function (post) {
      return {
        id: post.id,
        headline: post.title.slice(0, 50),
        preview: post.body.slice(0, 80) + "...",
      };
    });
}
```

### computeStats — reduce

```javascript
function computeStats(normalized) {
  if (normalized.length === 0) {
    return { count: 0, avgTitleLen: 0, topTitles: [] };
  }

  const totalLen = normalized.reduce(function (sum, post) {
    return sum + post.title.length;
  }, 0);

  const sorted = normalized
    .slice()
    .sort(function (a, b) {
      return b.title.length - a.title.length;
    });

  const topTitles = sorted.slice(0, 3).map(function (post) {
    return post.title;
  });

  return {
    count: normalized.length,
    avgTitleLen: Math.round(totalLen / normalized.length),
    topTitles: topTitles,
  };
}
```

**TTS scope sort callback:** `(a, b)` — compare dua item; return number.

### loadDashboard — handler tipis

```javascript
let state = {
  phase: "idle",
  message: "",
  viewModels: [],
  stats: { count: 0, avgTitleLen: 0, topTitles: [] },
};

async function loadDashboard() {
  state.phase = "loading";
  render();

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }
    const raw = await res.json();
    const normalized = normalizeApiResponse(raw);
    state.viewModels = transformPosts(normalized);
    state.stats = computeStats(normalized);
    state.phase = "ok";
  } catch (e) {
    state.phase = "error";
    state.message = e.message;
    state.viewModels = [];
    state.stats = { count: 0, avgTitleLen: 0, topTitles: [] };
  }
  render();
}
```

### render — DOM saja (spiral S3)

```javascript
function render() {
  statusEl.textContent =
    state.phase === "loading"
      ? "Memuat..."
      : state.phase === "error"
        ? "Gagal: " + state.message
        : "OK";

  listEl.innerHTML = "";
  for (let i = 0; i < state.viewModels.length; i++) {
    const vm = state.viewModels[i];
    const li = document.createElement("li");
    li.textContent = vm.headline;
    listEl.appendChild(li);
  }

  statsEl.textContent =
    "Total: " +
    state.stats.count +
    " | Rata panjang judul: " +
    state.stats.avgTitleLen +
    " | Top: " +
    state.stats.topTitles.join(", ");
}
```

### Unit test manual (console)

```javascript
const mock = [
  { id: 1, title: "Pendek", body: "x" },
  { id: 2, title: "Judul yang cukup panjang untuk filter", body: "y" },
];
console.log("stats", computeStats(normalizeApiResponse(mock)));
console.log("vm", transformPosts(normalizeApiResponse(mock)));
```

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Review P05 — pisah `transformPosts(data)` |
| 5–15 | Experience | **Dapur data**: raw → bersih → saji |
| 15–25 | Trap | Logic transformasi di dalam `innerHTML` |
| 25–35 | Clarify | Pure function: input sama → output sama |
| 35–45 | Concept | `normalizeApiResponse()` · unit test manual (console) |
| 45–70 | Practice | Dashboard mini: API → stats (count, avg, top 3) |
| 70–85 | Peer | Tukar pipeline — prediksi output |
| 85–90 | Exit | 1 edge case handled |

---

## 5. Lembar kerja / latihan

### Snippet A — Impure transform

```javascript
function transformBad(posts) {
  listEl.innerHTML = "";
  return posts.filter(function (p) { return p.id > 5; });
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Pure? | Tidak — side effect DOM |
| Fix? | Hapus innerHTML — render terpisah |

### Snippet B — Peer prediksi

```javascript
const mock = [{ title: "abc" }, { title: "defghij" }];
const n = normalizeApiResponse(mock);
const s = computeStats(n);
```

| Pertanyaan | Kunci |
|------------|-------|
| s.count? | 2 |
| s.avgTitleLen? | Math.round((3+9)/2) = 6 |
| topTitles[0]? | "defghij" (panjang 9) |

### Snippet C — Spiral render

```javascript
state.viewModels = transformPosts(normalized);
state.stats = computeStats(normalized);
render();
// lupa computeStats — stats stale
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug UI? | Stats tidak match list |
| Pola S3? | Satu load → update semua state → render sekali |

---

## 6. Exit ticket

1. 1 edge case handled
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
