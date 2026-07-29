# Materi Guru Lengkap — XI-S4-P06

**Handout siswa (bagikan):** [XI-S4-P06_pipeline-data_siswa.md](./XI-S4-P06_pipeline-data_siswa.md)

**Modul:** [XI-S4-P06_pipeline-data.md](../../../kelas-xi/semester-4/XI-S4-P06_pipeline-data.md)

**Materi pendukung sumber:** [XI-S4-P06_pipeline-data.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P06_pipeline-data.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P06 — Pipeline Transformasi Data

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P06 |
| Unit | XI4.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |

## Learning Transformation

Dari transformasi di UI → **pipeline** terpisah & testable.

---

## Timeline (90 menit)

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

## Output

Tabel atau kartu statistik dari data API P04.

---

## Formatif

**REA**, **ITR**

---

## Catatan Guru

Langsung reusable untuk PRJ S4-01 Dashboard.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P06 Pipeline Transformasi Data

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P06 |
| Modul pertemuan | [XI-S4-P06_pipeline-data.md](../../../kelas-xi/semester-4/XI-S4-P06_pipeline-data.md) |
| Unit | XI4.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| Formatif | REA, ITR |
| Ada live code? | **Ya — extract `transformPosts` / stats pure functions; dashboard mini; peer prediksi output** |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P05 — filter callback return?" | Boolean — scope parameter satu item |
| "P05 — kenapa map sebelum render?" | DOM tidak perlu tahu shape API mentah |
| "P08 S3 — single source of truth?" | state.viewModels + state.stats — render baca keduanya |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Extract function live — siswa refactor sendiri dari P05 |
| **Live coding** | Refactor inline pipeline → 3 pure functions + render tipis |
| **Per function / scope** | TTS: normalize vs transform vs stats — masing-masing scope terpisah |
| **Recall** | Review P05 pipeline 5 menit |
| **Membaca kode** | Peer tukar pipeline — prediksi stats tanpa run |
| **No starter file** | Basis kode P05 siswa — bukan dashboard template guru |

---

## Materi Inti

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

## Alur Live Coding

> **Mulai:** refactor kode P05 siswa ( atau guru demo ) — extract 3 functions sebelum polish UI stats.

### Persiapan

- HTML: `#status`, `#post-list`, `#stats`
- Mock array 3 item — test sebelum fetch
- Peer sheet prediksi output

### Skrip TTS — extract pure, test, render tipis

```text
[LANGKAH 0 — Review P05 0–5 menit]
Tanya: "Pipeline kemarin di file mana?" (inline fetch handler)
Ucapkan: "Hari ini pindah ke dapur — function terpisah."

[LANGKAH 1 — Experience dapur 5–12 menit]
Metafora: raw → cuci → masak → sajikan.
Gambar layer di papan.

[LANGKAH 2 — Trap logic di innerHTML 12–20 menit]
Contoh buruk: template string hitung avg di render.
Tanya: "Sulit test tanpa browser?" → pure function.

[LANGKAH 3 — normalize live 20–32 menit]
Ketik normalizeApiResponse + edge null title.
Scope callback map — return object baru.
console.log dengan mock 2 item.

[LANGKAH 4 — transformPosts 32–45 menit]
Cut-paste mental dari P05 — jadi named function.
TTS filter scope + map scope — ulang singkat.

[LANGKAH 5 — computeStats 45–58 menit]
Ketik reduce avg + sort top 3.
Edge: array kosong — return default stats.
Scope reduce vs sort callbacks — beda peran.

[LANGKAH 6 — loadDashboard tipis 58–68 menit]
Fetch → normalized → viewModels + stats → state → render.
Ucapkan: "Handler tidak tahu detail filter — hanya orchestrate."

[LANGKAH 7 — render stats UI 68–75 menit]
Kartu atau paragraph stats — baca state.stats saja.

[LANGKAH 8 — Peer prediksi 75–85 menit]
Tukar mock array — partner tulis expected stats tanpa run.
Run console — bandingkan.

[LANGKAH 9 — Exit 85–90 menit]
1 edge case handled (kosong / title null) — exit ticket.
Preview P07 localStorage — state persist.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Refactor P05 → `normalizeApiResponse`, `transformPosts`, `computeStats`
2. Dashboard mini: list + baris stats (count, avg, top 3)
3. `console.log` test mock — min 2 skenario (normal + kosong)
4. Peer: tukar mock — prediksi output stats
5. **Tidak boleh:** copy 3 function guru utuh — refactor dari kode sendiri

**Extension:** Handle edge `userId` missing — default 0 di normalize.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Logic masih di render() | Pindah ke computeStats / transform |
| Tidak handle array kosong | divide by zero avg — default object |
| Mutasi array asli sort | .slice() dulu — immutable habit |
| Test hanya via browser | console.log mock dulu |
| Guru beri dashboard.html jadi | Refactor dari P05 — ITR |
| Satu function 80 baris | Tiga pure + render — foreshadow P09 S3 refactor |

---

## Rujukan

- Modul: [XI-S4-P06](../../../kelas-xi/semester-4/XI-S4-P06_pipeline-data.md)
- Sebelum: [P05 map/filter/reduce](./XI-S4-P05_map-filter-reduce.md) · [P04 Fetch](./XI-S4-P04_fetch-json.md)
- Lanjut: [P07 localStorage CRUD](./XI-S4-P07_localstorage-crud.md)
- PRJ hook: Dashboard S4 — pipeline reusable
- Spiral: [S3-P09 Refactor](../semester-3/XI-S3-P09_refactor-modul.md) · [S3-P08 State](../semester-3/XI-S3-P08_state-aplikasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Refactor P05 → 3+ pure functions live
- [ ] normalize edge null/kosong
- [ ] computeStats — count, avg, top 3
- [ ] render tipis — spiral S3 state → DOM
- [ ] Unit test manual console + peer prediksi
- [ ] 1 edge case documented
- [ ] Tidak distribusi dashboard template
- [ ] Preview P07 persistensi

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
