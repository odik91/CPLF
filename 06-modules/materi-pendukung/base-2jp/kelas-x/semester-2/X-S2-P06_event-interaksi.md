# Materi Pendukung Guru — X-S2-P06 Event & Interaksi Pengguna

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P06 |
| Modul pertemuan | [X-S2-P06_event-interaksi.md](../../../kelas-x/semester-2/X-S2-P06_event-interaksi.md) |
| Unit | X2.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3 |
| Formatif | TEC, REA |
| Ada live code? | **Ya — multi-event & state UI** (HTML + `<script>` live) |

---

## Pengetahuan Guru

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

**PENTING:** bangun widget bareng — jangan bagikan HTML counter/toggle siap jalan.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "Apa itu DOM — P05?" | Representasi HTML di memory — JS bisa ubah |
| "Urutan: load halaman vs klik tombol — callback kapan jalan?" | Callback saat klik — bukan saat load |
| "querySelector('#id') gagal — gejala?" | null → error addEventListener — cek console |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik counter/toggle live — bukan paste CodePen |
| **Live coding** | Lanjut dari nol/minimal — **bukan** widget siap pakai |
| **Per baris / scope** | State variable scope script; handler scope per event |
| **Recall** | Demo click P05 — 1 pertanyaan DOM + callback |
| **Membaca kode** | Snippet counter — prediksi nilai setelah 3 klik |
| **No starter file** | Larangan distribusi HTML widget lengkap |

---

## Materi Inti

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

## Alur Live Coding

> Bangun **mini widget counter + input sapa** live. Toggle opsional menit 70+.

### Persiapan

- File kosong atau lanjut P05 — **strip** jika sudah ada script lengkap dari copy
- Console + Live Server
- **Tidak boleh:** widget CodePen/WA

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Experience 0–25 menit]
Demo app klik tanpa update UI (guru siapkan sederhana)
Trap: "event ada tapi user bingung"
Recall P05 click handler

[LANGKAH 1 — HTML counter]
Ketik struktur:
<h1>Counter Kegiatan</h1>
<p id="angka">0</p>
<button id="plus">+</button>
<button id="minus">−</button>
Ucapkan: "Angka di DOM — nanti sync dari variabel JS."
Tanya: "Kenapa id di #angka?"

[LANGKAH 2 — State variable]
<script> buka sebelum </body>
Ketik: let count = 0;
Ketik: const tampilan = document.querySelector("#angka");
Ketik: const btnPlus = document.querySelector("#plus");
Ketik: const btnMinus = document.querySelector("#minus");
Ucapkan: "count = state — sumber kebenaran di JS."
Scope: let bisa berubah; const referensi DOM.

[LANGKAH 3 — Fungsi render]
Ketik: function render() {
Ketik:   tampilan.textContent = count;
Ketik: }
Ketik: render();
Ucapkan: "Satu fungsi update tampilan — semua event panggil render."
Refresh — tampil 0

[LANGKAH 4 — Event plus/minus]
Ketik listener plus: count = count + 1; render();
Ketik listener minus: count = count - 1; render();
Ucapkan: "Event ubah state DULU, render() sync ke DOM."
Tanya: "Kalau langsung edit DOM di 2 listener — masalah?"
Demo klik + dan −

[LANGKAH 5 — Input sapa]
Tambah HTML: input#nama + p#sapa
Ketik listener input:
  const nama = inputNama.value.trim();
  sapa.textContent = nama ? "Halo, " + nama + "!" : "Halo!";
Ucapkan: "input event = setiap ketikan — feedback langsung."
Tanya: "Bedanya input vs click?"

[LANGKAH 6 — Gabung 2 event dalam 1 halaman 70–85 menit]
Siswa pastikan counter & input hidup bersamaan
User flow 1 kalimat: "Ketik nama → salam; klik + → counter naik"

[LANGKAH 7 — Toggle opsional]
Tambah CSS body.dark + button toggle + classList.toggle
Atau preventDefault pada link demo

[LANGKAH 8 — Exit 85–90]
Exit: user flow 1 kalimat + screenshot widget
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

Pilih **satu** + extension:

1. **Counter MA:** hitung peserta kegiatan (+/−, min 0)
2. **Input sapa:** salam personal + counter terpisah
3. **Dark mode toggle** dengan classList + CSS `.dark`
4. Tulis **user flow** 1 kalimat di komentar HTML

**Gabung 2 event wajib** (modul Practice 2). **Tidak boleh:** copy widget guru.

**Extension:** tombol reset counter ke 0 — handler ketiga.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Update DOM tanpa state — sinkron rusak | Pola count + render() |
| `count++` di HTML onclick inline | addEventListener — pisah concern |
| Input listener pakai `click` — tidak real-time | Pakai `input` |
| Lupa `render()` awal — tampilan kosong | Panggil render() setelah define |
| Toggle tanpa CSS class — tidak ada efek | Definisikan `.dark` di style dulu |
| Guru kirim widget lengkap | Live build counter bareng |

---

## Rujukan

- Modul: [X-S2-P06](../../../kelas-x/semester-2/X-S2-P06_event-interaksi.md)
- Sebelum: [P05 JS DOM](./X-S2-P05_js-dom-klik.md)
- Lanjut: [P07 Form Validasi](./X-S2-P07_form-validasi.md)
- Project preview: [08-project README](../../../../08-project/README.md)
- CX-T3
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Widget dibangun live — bukan starter file
- [ ] TTS state vs render vs event handler
- [ ] Min 2 event type (click + input) dalam 1 halaman
- [ ] User flow 1 kalimat tertulis
- [ ] Latihan baca snippet counter
- [ ] Recall P05 DOM & callback
- [ ] Exit: screenshot + user flow

[← Indeks materi X-S2](./X-S2_Materi_Index.md)
