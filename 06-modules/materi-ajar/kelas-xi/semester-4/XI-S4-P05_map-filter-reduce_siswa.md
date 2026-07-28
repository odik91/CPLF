# Handout Siswa — XI-S4-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P05_map-filter-reduce.md](../../../kelas-xi/semester-4/XI-S4-P05_map-filter-reduce.md)

---

## 1. Tujuan pembelajaran

Dari tampilkan mentah → **olah data** sebelum UI.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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


### map — transform

```javascript
const labels = passed.map(function (student) {
  return student.name + ": " + student.score;
});
```


### reduce — agregat

```javascript
const total = passed.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
const average = total / passed.length;
```


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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Functional = always better.  
**Aman:** Readability > clever one-liner.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_09: feed — urutkan/filter apa yang relevan? |
| 5–15 | Experience | **Daftar nilai rapor** — tampilkan hanya ≥ KKM |
| 15–25 | Trap | Loop manual 30 baris untuk hal sederhana |
| 25–35 | Clarify | Pilih tool tepat — tidak semua butuh reduce |
| 35–45 | Concept | `map` · `filter` · `reduce` + contoh 1 baris |
| 45–70 | Practice | Pipeline: fetch → filter → map → render tabel |
| 70–85 | Reflect | Kapan for-loop lebih jelas? |
| 85–90 | Exit | 1 pipeline ditulis ulang tanpa map |

---

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. 1 pipeline ditulis ulang tanpa map
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
