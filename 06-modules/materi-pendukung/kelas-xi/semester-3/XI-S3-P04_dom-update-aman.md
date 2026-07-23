# Materi Pendukung Guru — XI-S3-P04 DOM Update Aman

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P04 |
| Modul pertemuan | [XI-S3-P04_dom-update-aman.md](../../../kelas-xi/semester-3/XI-S3-P04_dom-update-aman.md) |
| Unit | XI3.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T1 |
| Formatif | TEC, ITR |
| Ada live code? | **Ya — pola `render(state)` live** (demo bug innerHTML WAJIB) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P03 — kenapa ul kosong di HTML?" | Satu pintu render dari array |
| "X-S2-P10 — setelah push todo, DOM update?" | Panggil render lagi — spiral CRUD |
| "Listener dipasang di node — node dihapus — apa efek?" | Event tidak jalan — foreshadow demo opening |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik render pattern live — siswa ikut dari skeleton minimal |
| **Live coding** | **Demo bug innerHTML di depan kelas** — sengaja, lalu perbaiki |
| **Per baris / scope** | `render()` scope global · handler: mutasi state lalu render() |
| **Recall** | P03 createElement — "hari ini satu fungsi render" |
| **Membaca kode** | Snippet innerHTML vs render — prediksi "klik masih jalan?" |
| **No starter file** | Larangan file todo CRUD siap pakai |

---

## Materi Inti

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

## Alur Live Coding

> **Opening = demo bug.** Lalu bangun counter + todo dengan render().

### Persiapan

- Console terbuka
- Siswa sudah P03 — createElement fresh

### Skrip TTS

```text
[LANGKAH 0 — Demo bug 0–5]
Ketik versi innerHTML drawBad live (lihat Materi Inti)
Klik +1 berulang — tunggu listener mati
Ucapkan: "innerHTML cepat — tapi node lama hilang, listener ikut mati."
Tanya: "Kenapa tombol berhenti merespon?"

[LANGKAH 1 — Fix render 5–15]
Ganti ke countEl.textContent + render()
Ucapkan: "State count di JS. render() sync ke DOM. Node tombol tetap."
Klik 10× — masih jalan — kontras dengan bug

[LANGKAH 2 — HTML skeleton todo]
#count, input#teks, button#tambah, ul#list
State: let todos = []; let nextId = 1;

[LANGKAH 3 — render() list]
replaceChildren / clear ul
forEach todo → li + button hapus
Ucapkan: "Satu fungsi render — dipanggil setiap mutasi."

[LANGKAH 4 — Event tambah]
tambah click: push {id, teks}, nextId++, render()
Scope: handler mutasi state, render di akhir

[LANGKAH 5 — Event hapus]
Di render, btnDel listener: filter by id, render()
Tanya: "Kenapa filter id bukan index?"

[LANGKAH 6 — Reflect 70–85]
Kapan innerHTML OK? — static sekali
Exit: 1 bug yang diperbaiki (selector / lupa render())

[LANGKAH 7 — Exit 85–90]
Screenshot todo + penjelasan 1 kalimat render pattern
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

1. **Counter + todo** — tambah & hapus dengan `render()`
2. Min **2 event** — tambah item · hapus item
3. **Demo sendiri** (opsional): versi innerHTML bug → perbaiki
4. Setiap mutasi state **wajib** `render()` — checklist siswa
5. **Tidak boleh:** copy todo.html modul

**Extension:** Toggle selesai on todo `{ selesai: true }` — render style berbeda (classList).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Patch DOM di handler tanpa render | Satu pintu render() |
| innerHTML untuk update todo | Demo bug P04 — redirect render |
| Lupa clear list sebelum loop | Duplikat li — replaceChildren |
| Hapus by index setelah filter | By id — spiral P10 |
| Listener pada node yang di-innerHTML | Node tetap atau buat listener di render dengan paham tradeoff |
| Skip demo bug karena "waktu" | **Demo wajib** — inti pembelajaran |

---

## Rujukan

- Modul: [XI-S3-P04](../../../kelas-xi/semester-3/XI-S3-P04_dom-update-aman.md)
- Sebelum: [P03 DOM Antarmuka](./XI-S3-P03_dom-antarmuka-hidup.md)
- Lanjut: [P05 Event & User Flow](./XI-S3-P05_event-user-flow.md)
- Spiral X: [X-S2-P10 Object CRUD](../../kelas-x/semester-2/X-S2-P10_object-state-crud.md) · [X-S2-P06 render](../../kelas-x/semester-2/X-S2-P06_event-interaksi.md)
- CXI-T1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] **Demo live** innerHTML kills listeners — tidak dilewati
- [ ] Fix dengan render() — klik 10× masih jalan
- [ ] Todo tambah/hapus pakai render pattern
- [ ] TTS event → state → render scope
- [ ] Latihan baca snippet — prediksi stale UI
- [ ] Reflect: kapan innerHTML OK
- [ ] Exit: 1 bug diperbaiki + screenshot

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)
