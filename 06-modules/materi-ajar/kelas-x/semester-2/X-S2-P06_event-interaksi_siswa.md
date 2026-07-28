# Handout Siswa — X-S2-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P06_event-interaksi.md](../../../kelas-x/semester-2/X-S2-P06_event-interaksi.md)

---

## 1. Tujuan pembelajaran

Dari “satu klik” → **model interaksi** (input, toggle, counter).

---

## 2. Ringkasan konsep

**Dari satu klik P05 → model interaksi:** input, toggle, counter — user butuh **feedback visual** setiap aksi.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Event types** | `click`, `input`, `change` — trigger berbeda |
| **`input` event** | Setiap ketikan di `<input>` — real-time |
| **`change` event** | Saat commit (blur/select) — opsional bandingkan |
| **State UI sederhana** | Variabel JS (`let count = 0`) — sumber kebenaran tampilan |
| **Update DOM dari state** | Event → ubah state → render ke elemen |
| **Toggle / classList** | `element.classList.toggle('dark')` — CSS sudah define `.dark` |
| **`preventDefault()`** | Cegah perilaku default form/link — penting P07 spiral |
| **User flow** | Satu kalimat: aksi → feedback → aksi berikutnya |

**Trap:** Event terpasang tapi UI tidak update — user bingung (demo app tanpa feedback).

**Prasyarat P05:** querySelector, addEventListener('click'), textContent, style.


---

## 3. Materi praktik

### Transformasi

**Dari:** Satu klik sekali ubah  
**Ke:** **Model interaksi** — state + multi-event + feedback konsisten

### Pola state → render

```javascript
let count = 0;
const tampilan = document.querySelector("#angka");
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");

function render() {
  tampilan.textContent = count;
}

btnPlus.addEventListener("click", function () {
  count = count + 1;
  render();
});

btnMinus.addEventListener("click", function () {
  count = count - 1;
  render();
});

render(); // tampilan awal
```

- **State** = `count` — tidak langsung edit DOM di banyak tempat
- **render()** = satu pintu update UI — foreshadow P10 CRUD

### Input event (nama pengguna)

```html
<input id="nama" type="text" placeholder="Nama kamu">
<p id="sapa">Halo!</p>
```

```javascript
const inputNama = document.querySelector("#nama");
const sapa = document.querySelector("#sapa");

inputNama.addEventListener("input", function () {
  const nama = inputNama.value.trim();
  sapa.textContent = nama ? "Halo, " + nama + "!" : "Halo!";
});
```

- `.value` — isi input
- `.trim()` — buang spasi ujung

### Dark mode toggle (classList)

CSS live di `<style>`:

```css
body.dark {
  background-color: #1a202c;
  color: #f7fafc;
}
```

JS:

```javascript
const btnTema = document.querySelector("#toggleTema");
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
```

### preventDefault intro

```html
<a id="linkDemo" href="https://example.com">Jangan buka dulu</a>
```

```javascript
document.querySelector("#linkDemo").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Link dicegah — demo preventDefault");
});
```

- Spiral ke P07 form submit — hari ini awareness saja

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Recall | P05 click handler |
| 5–15 | Experience | Demo app tanpa feedback visual — user bingung |
| 15–25 | Trap | Event terpasang tapi UI tidak update |
| 25–35 | Clarify | User perlu **feedback** setiap aksi |
| 35–45 | Concept | input · change · state UI sederhana |
| 45–70 | Practice | Counter +/- · atau dark mode toggle |
| 70–85 | Practice 2 | Gabung 2 event dalam 1 mini widget |
| 85–90 | Exit | User flow 1 kalimat |

---

## 5. Lembar kerja / latihan

> Proyeksikan — prediksi state & UI.

### Snippet A — Counter logic

```javascript
let count = 2;
function render() {
  out.textContent = count;
}
btn.addEventListener("click", function () {
  count = count + 1;
  render();
});
// Sudah render() sekali di load — count = 2
```

| Pertanyaan | Kunci |
|------------|-------|
| Tampilan awal? | "2" |
| Setelah 3 klik +? | "5" |

### Snippet B — Lupa render

```javascript
let count = 0;
btn.addEventListener("click", function () {
  count = count + 1;
  // tanpa update DOM
});
```

| Pertanyaan | Kunci |
|------------|-------|
| User klik 5× — tampilan? | Tetap "0" — state berubah, UI tidak |
| Perbaikan? | Panggil render() atau textContent di handler |

### Snippet C — preventDefault

```javascript
link.addEventListener("click", function (e) {
  e.preventDefault();
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Klik link — navigasi? | Tidak — default dicegah |
| Kapan penting di form? | Submit — P07 validasi dulu |

---

## 6. Exit ticket

1. User flow 1 kalimat
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
