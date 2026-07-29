# Handout Siswa — XI-S3-P03

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P03_dom-antarmuka-hidup.md](../../../kelas-xi/semester-3/XI-S3-P03_dom-antarmuka-hidup.md)

---

## 1. Tujuan pembelajaran

Dari manipulasi acak DOM → **UI terkendali** sesuai blueprint.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall X-S2-P05: querySelector — demo bug selector |
| 5–15 | Experience | **Papan tulis vs proyektor**: satu sumber kebenaran tampilan |
| 15–25 | Trap | `innerHTML` sembarangan = XSS & state hilang |
| 25–35 | Clarify | Pisah: struktur HTML vs update terkontrol |
| 35–45 | Concept | `textContent` · `createElement` · template string aman |
| 45–70 | Practice | Render list 3 item dari array ke `<ul>` tanpa innerHTML loop |
| 70–85 | Debug | 1 bug: selector null — console |
| 85–90 | Exit | Screenshot before/after |

---

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot before/after
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
