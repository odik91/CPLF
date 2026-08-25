# Materi Pendukung Guru — XI-S3-P03 DOM sebagai Antarmuka Hidup

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P03 |
| Modul pertemuan | [XI-S3-P03_dom-antarmuka-hidup.md](../../../kelas-xi/semester-3/XI-S3-P03_dom-antarmuka-hidup.md) |
| Unit | XI3.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T1 |
| MM | MM-12 |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — DOM update terkontrol live** (`createElement`, bukan innerHTML loop) |

---

## Pengetahuan Guru

**Dari manipulasi acak DOM → UI terkendali sesuai blueprint P02.** Spiral X cukup **2 menit** — fokus **kualitas update**, bukan intro DOM dari nol.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Antarmuka hidup** | DOM = proyeksi state/blueprint — bukan tempat "tempel" string acak |
| **`textContent`** | Aman untuk teks — tidak parse HTML |
| **`createElement` + `appendChild`** | Bangun node baru — kontrol penuh struktur |
| **`innerHTML` loop** | Cepat tapi: XSS risk · listener hilang saat re-render (demo P04) · state UI terpisah |
| **Satu sumber kebenaran** | Array `items` di JS → render ke `<ul>` — metafora papan tulis vs proyektor |
| **`document.querySelector`** | Spiral X-S2-P05 — selector null = bug OBS |

**Metafora:** Papan tulis (state/data) vs proyektor (DOM) — proyektor **menampilkan** isi papan, bukan sebaliknya.

**Trap modul:** `innerHTML` sembarangan = XSS & state hilang — **aman:** acknowledge cepat; tunjukkan `createElement` sebagai default MA.

**Prasyarat:** X-S2-P05–P09 (querySelector, event, array render). Blueprint P02 — "list output" sudah ada di wireframe.

**PENTING — starter modul:** blok JS di modul pertemuan **hanya referensi guru**. **JANGAN** kirim file starter ke siswa — bangun bareng dari HTML kosong/minimal.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P02 blueprint — output list hadir tampil di layar mana?" | Wireframe layar 2 · `<ul>` atau setara |
| "X-S2-P05 — querySelector `#list` null — gejala?" | Error appendChild / null — cek console |
| "P09 X — render array ke DOM bagaimana?" | Loop + buat elemen — hari ini **`createElement` eksplisit** |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik HTML + JS live — bukan paste starter modul |
| **Live coding** | File **`index.html` kosong** atau skeleton tanpa list — bangun `#list` + script bareng |
| **Per baris / scope** | `forEach` callback scope · `const li` per iterasi — TTS |
| **Recall** | 2 menit querySelector P05 — demo bug selector opsional |
| **Membaca kode** | Snippet createElement proyeksi — prediksi isi `<ul>` sebelum refresh |
| **No starter file** | **Larangan keras:** modul punya starter — **jangan distribusi** |

---

## Materi Inti

### Transformasi

**Dari:** Manipulasi DOM acak / innerHTML campuraduk  
**Ke:** **UI terkendali** — data array → node DOM terstruktur

### Alur konsep

1. HTML: container kosong `<ul id="list"></ul>` — **bukan** `<li>` hardcode
2. JS: array `items` = sumber kebenaran tampilan
3. Loop: `createElement('li')` → `textContent` → `appendChild`
4. Debug: selector null · typo id

### Syntax inti (target akhir live coding)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOM Terkontrol</title>
</head>
<body>
  <h1>Kegiatan MA</h1>
  <ul id="list"></ul>

  <script>
    const items = ["Shalat", "Tahfidz", "OSIS"];

    const ul = document.querySelector("#list");

    items.forEach(function (text) {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
  </script>
</body>
</html>
```

- Array **di atas** loop — blueprint "state tampilan" sederhana
- `textContent` — teks aman, bukan HTML injection
- **Tidak** `ul.innerHTML += '<li>...'` di loop — foreshadow bug P04

### Pisah struktur vs update

| Bagian | Peran |
|--------|-------|
| HTML skeleton | `#list` kosong — hook container |
| JS data | `items[]` — bisa berubah nanti (P04 render) |
| JS render | Loop createElement — satu pola update |

### Debug selector (70–85 menit)

- `#list` vs `#lists` → `ul` null
- `appendChild` pada null — baca console bareng
- `console.log(ul)` sebelum loop

---

## Alur Live Coding

> **Mulai dari file KOSONG atau HTML tanpa `<li>`.** Jangan beri starter lengkap dari modul.

### Persiapan

- Live Server aktif
- Console browser (F12)
- Blueprint P02 siswa (opsional referensi wireframe list)

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening 0–5]
Recall P02: "Output blueprint list — container DOM apa?"
Spiral X 2 menit: querySelector — typo id = null
Metafora: papan tulis (array) vs proyektor (ul di layar)

[LANGKAH 1 — HTML minimal]
File kosong → skeleton
Ketik: <h1>Kegiatan MA</h1>
Ketik: <ul id="list"></ul>
Ucapkan: "Ul kosong — isi dari JS, sesuai blueprint layar list."
Tanya: "Kenapa tidak tulis <li> di HTML?" → data dinamis dari array

[LANGKAH 2 — Script + data]
Sebelum </body>: <script>
Ketik: const items = ["Shalat", "Tahfidz", "OSIS"];
Ucapkan: "Array = sumber kebenaran — DOM mengekspresikan array."
Scope: const items di script global

[LANGKAH 3 — Ambil container]
Ketik: const ul = document.querySelector("#list");
Opsional: console.log(ul) — refresh — lihat object
Tanya: "#list artinya apa?"

[LANGKAH 4 — forEach + createElement]
Ketik: items.forEach(function (text) {
Ketik:   const li = document.createElement("li");
Ketik:   li.textContent = text;
Ketik:   ul.appendChild(li);
Ketik: });
Ucapkan: "createElement = node baru. textContent = teks saja. appendChild = tempel ke ul."
Scope: callback forEach — li dibuat per item

[LANGKAH 5 — Preview]
Refresh — 3 item tampil
Ucapkan: "Struktur HTML tetap — isi ul dari JS."

[LANGKAH 6 — Ubah data, struktur sama]
Ubah array live — tambah "Pramuka" — refresh
Tanya: "Harus edit HTML?" → tidak, edit array

[LANGKAH 7 — Trap innerHTML singkat 15–25 menit modul]
JANGAN jadi pola utama — sebut: "innerHTML cepat tapi bahaya re-render — P04 demo bug."
Tunjukkan createElement sebagai standar kelas

[LANGKAH 8 — Bug selector 70–85]
Ganti #list → #list-salah — refresh — error
Perbaiki — OBS debugging

[LANGKAH 9 — Exit 85–90]
Screenshot before (ul kosong) / after (3 li)
1 kalimat: beda textContent vs innerHTML (teks vs parse HTML)
```

---

## Latihan Membaca Kode

### Snippet A — Urutan eksekusi

```javascript
const items = ["A", "B"];
const ul = document.querySelector("#list");
ul.textContent = "Loading...";
items.forEach(function (t) {
  const li = document.createElement("li");
  li.textContent = t;
  ul.appendChild(li);
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Apakah "Loading..." tetap? | **Tidak** — appendChild ke ul yang isinya teks; struktur jadi aneh atau teks diganti anak — **lebih baik kosongkan dulu** (foreshadow P04 render) |
| Perbaikan? | Jangan set textContent pada ul container; atau clear children dulu |

### Snippet B — innerHTML loop (anti-pattern)

```javascript
items.forEach(function (t) {
  ul.innerHTML += "<li>" + t + "</li>";
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Risiko jika `t` = `<img onerror=...>`? | XSS — innerHTML parse HTML |
| Risiko P04? | Re-render total — listener hilang |

### Snippet C — createElement

```javascript
const li = document.createElement("li");
li.textContent = userInput;
ul.appendChild(li);
```

| Pertanyaan | Kunci |
|------------|-------|
| userInput = "<b>hi</b>" — tampilan? | Teks literal `<b>hi</b>` — aman |
| Kenapa lebih aman? | textContent tidak interpret HTML |

---

## Praktik Mandiri Siswa

1. **Render list sendiri** — min 3 item tema MA (ekskul, jadwal, doa)
2. Pakai **`createElement` + `textContent`** — bukan innerHTML loop
3. Container `#list` **kosong** di HTML — siswa ketik dari skeleton minimal
4. Sengaja 1 bug selector → perbaiki console
5. **Tidak boleh:** copy starter modul atau file guru

**Extension:** Tambah tombol "Acak urutan" — shuffle array lalu **kosongkan ul** manual (foreshadow render P04).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| `<li>` hardcode di HTML + JS append lagi | Container kosong — satu sumber render |
| `innerHTML = '<li>...'` di loop | Tunjukkan createElement — innerHTML = P04 trap |
| Lupa `#` di querySelector | null error |
| appendChild ke null | console.log container dulu |
| Copy file modul WA | Etika — bangun live |
| Re-teach DOM 30 menit | Spiral 2 menit — fokus createElement |

---

## Rujukan

- Modul: [XI-S3-P03](../../../kelas-xi/semester-3/XI-S3-P03_dom-antarmuka-hidup.md)
- Sebelum: [P02 Blueprint](./XI-S3-P02_blueprint-state.md)
- Lanjut: [P04 DOM Update Aman](./XI-S3-P04_dom-update-aman.md)
- Spiral X: [X-S2-P05](../../kelas-x/semester-2/X-S2-P05_js-dom-klik.md) · [X-S2-P09](../../kelas-x/semester-2/X-S2-P09_array-render-list.md)
- CXI-T1 · MM-12
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] HTML + JS dari **bangun bareng** — bukan starter distribusi
- [ ] TTS createElement + forEach scope
- [ ] List 3 item dari array ke `<ul>` kosong
- [ ] Debug 1 error selector
- [ ] Latihan baca snippet — prediksi tanpa copy
- [ ] Recall blueprint P02 + querySelector X
- [ ] Exit: screenshot before/after + 1 kalimat textContent vs innerHTML

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)
