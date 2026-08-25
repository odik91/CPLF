# Materi Pendukung Guru — XI-S4-P05 map, filter, reduce

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P05 |
| Modul pertemuan | [XI-S4-P05_map-filter-reduce.md](../../../kelas-xi/semester-4/XI-S4-P05_map-filter-reduce.md) |
| Unit | XI4.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2, AD |
| EXP | [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md) |
| Formatif | REA, TEC |
| Ada live code? | **Ya — map/filter/reduce live; callback scope dijelaskan per baris; pipeline fetch → filter → map → render** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`map(fn)`** | Array baru — **transform** tiap elemen; panjang sama |
| **`filter(fn)`** | Array baru — hanya elemen yang **lolos** tes (return true) |
| **`reduce(fn, init)`** | Satu nilai akumulasi — jumlah, max, gabung string |
| **Callback scope** | Parameter `(item, index, array)` — **scope function callback** terpisah dari outer |
| **Return wajib** | Callback map/filter **harus return** — tanpa return = undefined |
| **Pipeline** | fetch → filter → map → render — olah dulu, UI belakangan |
| **for-loop** | Masih valid — readability > clever one-liner |

**EXP_09 TikTok Feed:** platform filter/urutkan dari riwayat — rule sederhana: "if tag watched > 3 → boost" — **literasi algoritma + etika**, bukan scroll app di kelas.

**Metafora daftar nilai rapor:** tampilkan hanya ≥ KKM = filter · ubah ke "A/B/C" = map · rata-rata kelas = reduce.

**Trap modul:** loop manual 30 baris untuk hal sederhana — **aman:** tulis for dulu, refactor ke filter live.

**Builds on P04:** data `state.posts` dari fetch → **jangan render mentah** — filter title panjang, map ke `{ label, short }`.

**Spiral S3:** hasil pipeline → assign `state.viewModels` → `render()` — DOM tidak tahu API mentah.

**Callback scope — TTS wajib:** "Di dalam kurung filter, parameter `post` hanya hidup di function ini — satu elemen per panggilan."

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P04 — setelah fetch, langsung render?" | Bisa, tapi olah dulu lebih bersih — hari ini pipeline |
| "P04 — state.posts dari mana?" | await res.json() |
| "S3 render — DOM dari state?" | Ya — pipeline isi state, render baca state |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Pipeline diketik live — bukan snippet 15 baris WA |
| **Live coding** | Lanjut file P04 atau array contoh — map/filter/reduce satu per satu |
| **Per callback / scope** | **Wajib TTS:** parameter callback, return value, index opsional |
| **Recall** | EXP_09 kartu tag — filter feed dummy |
| **Membaca kode** | Snippet pipeline — prediksi length sebelum run |
| **No starter file** | Siswa ketik pipeline sendiri — bukan copy guru |

---

## Materi Inti

### Transformasi

**Dari:** Tampilkan data mentah API  
**Ke:** **Olah data** sebelum UI — pilih tool tepat

### Data contoh (nilai rapor — experience)

```javascript
const grades = [
  { name: "Ali", score: 82 },
  { name: "Budi", score: 68 },
  { name: "Citra", score: 91 },
  { name: "Dewi", score: 55 },
];
const KKM = 70;
```

### filter — scope callback live

```javascript
const passed = grades.filter(function (student) {
  return student.score >= KKM;
});
// passed.length === 2
```

**TTS:** "`student` = satu object dari array — scope callback. Return boolean — true = masuk array baru."

### map — transform

```javascript
const labels = passed.map(function (student) {
  return student.name + ": " + student.score;
});
```

**TTS:** "Return apapun — map bungkus jadi array baru sepanjang `passed`."

### reduce — agregat

```javascript
const total = passed.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
const average = total / passed.length;
```

**TTS:** "`sum` = akumulator — scope reduce callback. Nilai awal `0` = seed."

### Pipeline P04 → UI (target live)

```javascript
async function loadAndShow() {
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

    const filtered = raw.filter(function (post) {
      return post.title.length > 20;
    });

    state.viewModels = filtered.map(function (post) {
      return {
        id: post.id,
        headline: post.title.slice(0, 40) + "...",
      };
    });

    state.phase = "ok";
  } catch (e) {
    state.phase = "error";
    state.message = e.message;
    state.viewModels = [];
  }
  render();
}

function render() {
  listEl.innerHTML = "";
  for (let i = 0; i < state.viewModels.length; i++) {
    const vm = state.viewModels[i];
    const li = document.createElement("li");
    li.textContent = vm.headline;
    listEl.appendChild(li);
  }
}
```

**Chain:** fetch → **filter** (title panjang) → **map** (view model) → **render** — reduce opsional di P06 stats.

---

## Alur Live Coding

> **Lanjutan P04** atau array `grades` dulu 20 menit — baru posts API.

### Persiapan

- EXP_09: kartu tag video A vs B — tanpa buka TikTok
- Papan: raw → filter → map → render
- Console terbuka — log length tiap tahap

### Skrip TTS — callback scope per method

```text
[LANGKAH 0 — EXP_09 0–5 menit]
Tanya: "Feed teman beda — input platform apa?" (watch history)
Ucapkan: "Hari ini rule sederhana — filter/map — bukan ML."

[LANGKAH 1 — Experience nilai rapor 5–15 menit]
Array grades di papan — KKM 70.
Oral: filter lulus · map label · reduce rata-rata.

[LANGKAH 2 — Trap loop 30 baris 15–22 menit]
Tulis for manual 8 baris — tanya: "Ada cara lebih pendek?"
Intro filter — bandingkan readability.

[LANGKAH 3 — filter live + scope 22–32 menit]
Ketik: grades.filter(function (student) { return student.score >= KKM; });
Tanya: "Scope `student`?" — satu item per iterasi.
console.log(passed.length).

[LANGKAH 4 — map live + scope 32–42 menit]
Ketik map nama + skor.
Trap: callback tanpa return → array undefined — demo bug singkat.

[LANGKAH 5 — reduce live 42–48 menit]
Ketik reduce average — jelaskan seed 0.
Scope: sum vs student — dua parameter.

[LANGKAH 6 — Pipeline posts 48–65 menit]
Lanjut P04 fetch — raw → filter title.length > 20 → map headline.
Set state.viewModels — render() spiral S3.
Log: raw.length vs filtered.length vs viewModels.length.

[LANGKAH 7 — Practice 45–70 menit overlap]
Siswa: pipeline sendiri — min filter + map.
OBS: return di callback?

[LANGKAH 8 — Reflect 75–85 menit]
Kapan for-loop lebih jelas? (break early, side effect kompleks)
Exit: tulis ulang 1 pipeline **tanpa** map (for) — compare.

[LANGKAH 9 — Preview P06 85–90 menit]
Pisah function transformPosts(data) — pure — testable.
```

---

## Latihan Membaca Kode

### Snippet A — map tanpa return

```javascript
const bad = [1, 2, 3].map(function (n) {
  n * 2;
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Isi bad? | [undefined, undefined, undefined] |
| Fix? | return n * 2 |

### Snippet B — filter scope

```javascript
const long = posts.filter(function (post, index) {
  return post.title.length > 10 && index < 5;
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Parameter index scope? | Hanya di callback — iterasi ke-n |
| Logic mix? | Boleh — readability first |

### Snippet C — Pipeline length

```javascript
const raw = [{ t: "abc" }, { t: "abcdefghij" }];
const out = raw
  .filter(function (x) { return x.t.length > 5; })
  .map(function (x) { return x.t.toUpperCase(); });
```

| Pertanyaan | Kunci |
|------------|-------|
| out.length? | 1 |
| out[0]? | "ABCDEFGHIJ" |

---

## Praktik Mandiri

1. Pipeline: fetch (atau array statis) → filter → map → render min 5 item
2. Console.log length tiap tahap — bukti transform
3. Tulis **satu** pipeline equivalent pakai for-loop (exit modul)
4. **Tidak boleh:** one-liner arrow copas tanpa paham scope

**Extension:** EXP_09 rule — array tag → filter tag dominan → map rekomendasi kartu.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa return di callback | Demo bug undefined array |
| Filter tapi tidak assign hasil | posts.filter(...); // buang |
| Map + side effect DOM di dalam | Pisah transform vs render — P06 |
| Functional always better | Banding for — readability |
| Guru jelaskan arrow dulu | function keyword — scope jelas MA |
| Render data mentah API | Pipeline dulu — spiral state |

---

## Rujukan

- Modul: [XI-S4-P05](../../../kelas-xi/semester-4/XI-S4-P05_map-filter-reduce.md)
- EXP: [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md) · [EXP_09_A YouTube](../../../07-experience_library/EXP_09_A_YouTube_Autoplay.md)
- Sebelum: [P04 Fetch](./XI-S4-P04_fetch-json.md)
- Lanjut: [P06 Pipeline Data](./XI-S4-P06_pipeline-data.md)
- Spiral render: [S3-P08](../semester-3/XI-S3-P08_state-aplikasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] EXP_09 hook — filter feed analogi
- [ ] filter/map/reduce — TTS callback scope masing-masing
- [ ] Demo map tanpa return (bug)
- [ ] Pipeline fetch → filter → map → render live
- [ ] Exit: pipeline ditulis ulang tanpa map (for)
- [ ] Tidak distribusi script pipeline lengkap
- [ ] Preview P06 extract pure function

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)
