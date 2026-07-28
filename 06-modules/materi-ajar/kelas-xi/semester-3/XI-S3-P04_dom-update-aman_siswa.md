# Handout Siswa — XI-S3-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P04_dom-update-aman.md](../../../kelas-xi/semester-3/XI-S3-P04_dom-update-aman.md)

---

## 1. Tujuan pembelajaran

Dari “refresh innerHTML” → **render function** yang predictable.

---

## 2. Ringkasan konsep

**Pola inti semua project S3:** State → `render()` → DOM · Event → update state → `render()` lagi.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`render(state)`** | Satu fungsi yang sync DOM dari state — **dipanggil setiap perubahan** |
| **Event → state → render** | Handler tidak langsung patch DOM di banyak tempat |
| **innerHTML total re-render** | Cepat — tapi **hancurkan listener** yang dipasang pada node lama |
| **createElement di render** | Clear container → loop state → append — listener dipasang **setelah** render atau delegation |
| **Counter + todo** | Practice: tambah/hapus item — bukti pola scalable |
| **Kapan innerHTML OK?** | Static template **sekali** saat load — bukan setiap update interaktif |

**Metafora papan score basket:** update angka skor — **ganti papan fisik** (innerHTML) vs **ubah angka di papan yang sama** (render terkontrol).

**Trap modul — KRITIS HARI INI:** `innerHTML = cepat = benar` — **demo live:** klik 5× → listener mati → fix dengan `render()`.

**Recall P03:** createElement loop — hari ini **bungkus jadi fungsi** + mutasi state.

**PENTING:** Jangan distribusi todo.html lengkap — bangun counter + list bareng.

---

## 3. Materi praktik

### Transformasi

**Dari:** "Refresh innerHTML" / patch DOM acak  
**Ke:** **`render(state)` predictable** — satu alur update

### Alur mental

```text
1. State (let todos[], let count)
2. render() — baca state, tulis DOM
3. Event — ubah state saja
4. render() — panggil lagi
```

### Demo bug innerHTML (OPENING 0–5 menit — WAJIB)

**Langkah guru — ketik live, jangan skip:**

```html
<div id="app"></div>
<button id="add">Tambah</button>
<script>
  let count = 0;
  const app = document.querySelector("#app");
  const btnAdd = document.querySelector("#add");

  function drawBad() {
    app.innerHTML = `<p>Count: ${count}</p><button id="inc">+1</button>`;
    document.querySelector("#inc").addEventListener("click", function () {
      count++;
      drawBad();
    });
  }

  btnAdd.addEventListener("click", function () {
    count++;
    drawBad();
  });

  drawBad();
</script>
```

| Langkah demo | Efek |
|--------------|------|
| Klik `#inc` 1–2× | Jalan |
| Klik `#inc` 5×+ atau setelah drawBad dari `#add` | **Listener hilang** — tombol +1 mati |
| Jelaskan | innerHTML ganti subtree — node lama + listener dibuang |

**Fix live → pola render:**

```javascript
let count = 0;
const countEl = document.querySelector("#count");
const btnInc = document.querySelector("#inc");

function render() {
  countEl.textContent = count;
}

btnInc.addEventListener("click", function () {
  count++;
  render();
});

render();
```

- Listener pada **node tetap** (`#inc`, `#count`) — tidak dihancur innerHTML

### Target practice: counter + todo (45–70 menit)

```javascript
let todos = [];
let nextId = 1;

function render() {
  // counter
  countEl.textContent = todos.length;

  // list — clear + createElement
  listEl.replaceChildren(); // atau while firstChild remove
  todos.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item.teks + " ";
    const btnDel = document.createElement("button");
    btnDel.textContent = "Hapus";
    btnDel.addEventListener("click", function () {
      todos = todos.filter(function (t) { return t.id !== item.id; });
      render();
    });
    li.appendChild(btnDel);
    listEl.appendChild(li);
  });
}
```

- **Filter by id** — spiral X-S2-P10
- Tombol hapus dibuat **di render** — OK karena handler closure `item.id`

### Kapan innerHTML masih OK?

| Situasi | OK? |
|---------|-----|
| Template statis sekali saat load | Ya |
| Update interaktif berulang | **Tidak** (kecuali delegation — luar scope MA) |
| Insert teks user | **Tidak** — pakai textContent |

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** `innerHTML = cepat = benar`.  
**Aman:** Acknowledge cepat; tunjukkan listener hilang live.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo: klik 5× innerHTML vs render() — bandingkan event listener |
| 5–15 | Experience | **Papan score basket**: update skor tanpa ganti papan fisik |
| 15–25 | Trap | Re-render total = listener hilang |
| 25–35 | Clarify | Satu fungsi `render(state)` dipanggil setiap perubahan |
| 35–45 | Concept | State → render → DOM; event → update state → render |
| 45–70 | Practice | Counter + list todo (tambah/hapus) dengan pola render |
| 70–85 | Reflect | Kapan innerHTML masih OK? (static template sekali) |
| 85–90 | Exit | 1 bug yang kamu perbaiki |

---

## 6. Lembar kerja / latihan

### Snippet A — Lupa panggil render

```javascript
btnAdd.addEventListener("click", function () {
  todos.push({ id: 1, teks: "Baru" });
  // render()?
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Setelah klik? | State berubah, DOM tidak — **UI stale** |
| Fix? | Panggil render() di akhir handler |

### Snippet B — innerHTML + listener

```javascript
function render() {
  app.innerHTML = `<button id="x">Klik</button>`;
  document.querySelector("#x").addEventListener("click", handler);
}
render();
render(); // dipanggil lagi
```

| Pertanyaan | Kunci |
|------------|-------|
| Setelah render kedua? | Dua listener atau node baru — perilaku aneh / memory |
| Pola MA? | Hindari innerHTML interaktif — node tetap + textContent |

### Snippet C — Spiral id

```javascript
todos = todos.filter(function (t) { return t.id !== idHapus; });
render();
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa filter? | Hapus by id stabil — index bergeser (X-P10) |
| Urutan? | Mutasi state dulu, render() sync DOM |

---

## 7. Exit ticket

1. 1 bug yang kamu perbaiki
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
