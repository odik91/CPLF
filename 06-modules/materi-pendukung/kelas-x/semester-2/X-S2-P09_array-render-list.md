# Materi Pendukung Guru — X-S2-P09 Array & Render List

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P09 |
| Modul pertemuan | [X-S2-P09_array-render-list.md](../../../kelas-x/semester-2/X-S2-P09_array-render-list.md) |
| Unit | X2.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T3 |
| MM | MM-07 |
| Formatif | TEC, REA |
| Ada live code? | **Ya — array → DOM live** (`for`, `createElement` **preferred**) |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Array** | Daftar data di JS — spiral S1 P11 kasir |
| **Pisah data vs tampilan** | Array = sumber kebenaran; DOM = cermin yang di-render ulang |
| **`for` loop** | Iterasi indeks — `kegiatan[i]` |
| **`createElement` + `appendChild`** | Bangun node DOM programmatically — **preferred** |
| **`innerHTML` += dalam loop** | Anti-pattern: re-parse HTML berulang; risiko XSS (pengantar) |
| **`textContent`** | Isi teks aman — tidak interpret HTML |
| **`push` + re-render** | Tambah data → render ulang seluruh list ( pola sederhana kelas X) |

**Recall S1 P11:** kasir loop harga — hari ini loop **string/object** ke `<li>`.

**Keputusan pedagogis:** perkenalkan `innerHTML` sekali sebagai perbandingan ("bisa tapi jangan biasakan"), lalu arahkan ke `createElement`.

**Starter modul = referensi guru** — siswa bangun dari HTML+JS minimal.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P11 S1 — kenapa loop kasir instead of 8 baris copy?" | Operasi sama diulang; scalable |
| "Array harga — akses item pertama?" | `harga[0]` |
| "10 `<li>` manual — masalahnya?" | Bosan, error, tidak scalable saat data bertambah |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa ketik array isi sendiri (4–6 kegiatan fiktif) |
| **Live coding** | `<ul id="list">` kosong → JS render dari array |
| **Per baris / scope** | Scope body `for`; scope function `renderList` |
| **Recall** | Hitung manual 4 item di papan → baru loop |
| **Membaca kode** | Snippet loop proyeksi sebelum siswa ketik |
| **No starter file** | Jangan kirim HTML dengan 10 `<li>` hardcode |

---

## Materi Inti

### Transformasi

**Dari:** Copy-paste HTML item  
**Ke:** Data array → render dinamis ke DOM

### Pola render (preferred)

```javascript
function renderList() {
  listEl.innerHTML = ""; // kosongkan cermin
  for (let i = 0; i < kegiatan.length; i++) {
    const li = document.createElement("li");
    li.textContent = kegiatan[i];
    listEl.appendChild(li);
  }
}
```

### Mengapa createElement > innerHTML abuse

| innerHTML += di loop | createElement |
|----------------------|---------------|
| Browser parse ulang HTML tiap iterasi | Tambah node langsung |
| Mudah sisip tag tidak sengaja | `textContent` aman |
| Kebiasaan buruk untuk data user | Pola CRUD P10 lebih bersih |

**Catatan:** `innerHTML = ""` untuk clear list OK; yang dihindari adalah `innerHTML += "<li>..."` berulang.

### Tambah item (Practice 2)

```javascript
kegiatan.push(namaBaru);
renderList(); // sinkronkan DOM dengan data
```

---

## Alur Live Coding

> **`<ul id="daftar-kegiatan"></ul>` kosong** — semua item dari JS.

### Persiapan

- Live Server
- Siswa **tidak** punya list hardcode 10 item

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening 0–5 menit]
Tanya: "10 kegiatan OSIS — mau ketik 10 baris <li> manual?"
Ucapkan: "Data banyak = loop + array, seperti kasir S1."
Scope: meta — scalable UI.

[LANGKAH 1 — HTML kosong 5–15 menit]
Ketik:
<h1>Daftar Kegiatan</h1>
<ul id="daftar-kegiatan"></ul>
<input id="input-baru" type="text" placeholder="Kegiatan baru">
<button id="btn-tambah" type="button">Tambah</button>
<script></script>
Ucapkan: "Ul kosong — isi dari JavaScript, bukan ketik manual."
Scope: HTML = wadah; data hidup di JS.

[LANGKAH 2 — Data array 15–25 menit]
Di script:
Ketik: const kegiatan = ["Study Tour", "Muhadhoroh", "Pramuka", "Futsal"];
Ketik: const listEl = document.getElementById("daftar-kegiatan");
Ucapkan: "Array = sumber data. listEl = tempat cermin di halaman."
Tanya: "Index Study Tour?"
Scope: const array — referensi; isi bisa push nanti (let array juga OK).

[LANGKAH 3 — Trap hardcode (oral) 25–35 menit]
Di papan tulis 4 baris <li> manual — tanya berapa baris untuk 20 kegiatan.
Ucapkan: "Hardcode = trap P09 — data dan tampilan campur."
Scope: clarifying pisah data vs view.

[LANGKAH 4 — Function renderList 35–45 menit]
Ketik:
function renderList() {
Ketik:   listEl.innerHTML = "";
Ketik:   for (let i = 0; i < kegiatan.length; i++) {
Ketik:     const li = document.createElement("li");
Ketik:     li.textContent = kegiatan[i];
Ketik:     listEl.appendChild(li);
Ketik:   }
Ketik: }
Ucapkan per baris TTS:
  Tebak: "Kenapa innerHTML = '' di awal function?"
  Tanya: "createElement('li') — node ada di DOM belum?"
  Spelling: appendChild = tempel anak ke listEl
Scope: for body = satu iterasi per item; function scope = renderList callable ulang.
Jangan demo innerHTML += dulu — siswa bias ke shortcut.

[LANGKAH 5 — Panggil render 45–48 menit]
Ketik: renderList();
Refresh — 4 item muncul.
Ucapkan: "Satu function — data berubah, panggil lagi, tampilan ikut."
Scope: pemanggilan global setelah deklarasi.

[LANGKAH 6 — Perbandingan innerHTML (singkat) 48–52 menit]
Oral + papan — contoh anti-pattern:
  listEl.innerHTML += "<li>" + kegiatan[i] + "</li>";
Ucapkan: "Bisa jalan — tapi re-parse, dan bahaya jika data dari user (XSS pengantar)."
Tanya: "createElement + textContent lebih aman kenapa?"
Scope: etika kode — preferred pattern kelas CPLF.

[LANGKAH 7 — Practice tambah item 52–70 menit]
Ketik:
const inputBaru = document.getElementById("input-baru");
const btnTambah = document.getElementById("btn-tambah");

btnTambah.addEventListener("click", function () {
  const teks = inputBaru.value.trim();
  if (teks === "") return;
  kegiatan.push(teks);
  inputBaru.value = "";
  renderList();
});
Ucapkan per scope:
  "push = tambah ke array — data layer"
  "renderList() = sync DOM — view layer"
  "return early jika kosong — spiral validasi ringan"
Tanya: "Setelah push, kenapa panggil renderList lagi?"
Demo: tambah 2 item live.

[LANGKAH 8 — Practice 2 siswa 70–85 menit]
Variasi: daftar buku, jadwal sholat, menu kantin — array + render + tambah.
Keliling: baca loop siswa — prediksi isi `<ul>` setelah 3 push.

[LANGKAH 9 — Exit 85–90 menit]
Tanya: "Panjang array 12 vs baris HTML manual — beda effort?"
Exit: screenshot list dinamis + 1 kalimat pisah data/tampilan.
```

---

## Latihan Membaca Kode

### Snippet A

```javascript
const items = ["A", "B", "C"];
const ul = document.getElementById("list");
ul.innerHTML = "";
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  ul.appendChild(li);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa `<li>` di DOM? | 3 |
| items.push("D") tanpa render ulang? | DOM tetap 3 — perlu panggil function lagi |

### Snippet B — Off-by-one

```javascript
for (let i = 0; i <= items.length; i++) {
  // ...
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | Satu iterasi extra — `undefined` item |
| Perbaikan? | `i < items.length` |

### Snippet C — innerHTML abuse

```javascript
for (let i = 0; i < items.length; i++) {
  ul.innerHTML += "<li>" + items[i] + "</li>";
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output terlihat benar? | Ya — tapi inefficient |
| Jika items[i] = "<script>..." ? | Risiko XSS — textContent lebih aman |

---

## Praktik Mandiri

1. Array 5+ item konteks sendiri → render dengan `createElement`
2. Tombol/input tambah item + `push` + re-render
3. **Tidak pakai** `innerHTML +=` di loop (kecuali diskusi banding)
4. Catat: panjang array vs jumlah baris HTML manual

**Extension:** sort array sebelum render — preview state P10.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa `innerHTML = ""` sebelum render | Duplikat item tiap panggil |
| Hardcode `<li>` di HTML + JS | Tunjuk ul harus kosong |
| innerHTML += shortcut | Redirect ke createElement |
| `i <= length` | Demo undefined item |
| Copy array teman identik | Variasi data wajib |
| Guru kirim file list jadi | Live build bareng |

---

## Rujukan

- Modul: [X-S2-P09](../../../kelas-x/semester-2/X-S2-P09_array-render-list.md)
- Recall S1: [P11 Kasir Loop](../semester-1/X-S1-P11_kasir-loop.md)
- Sebelum: [P08 Validasi JS](./X-S2-P08_validasi-js-pesan.md)
- Lanjut: [P10 Object CRUD](./X-S2-P10_object-state-crud.md)
- MM-07 · Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Array + loop live — ul kosong di HTML
- [ ] createElement preferred — innerHTML abuse dijelaskan
- [ ] TTS scope for + function renderList
- [ ] push + re-render didemo
- [ ] Recall kasir S1 P11
- [ ] Latihan baca snippet
- [ ] Exit: screenshot + kalimat data vs tampilan

[← Indeks materi X-S2](./X-S2_Materi_Index.md)
