# Handout Siswa — X-S2-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P11_sintesis-halaman-mini.md](../../../kelas-x/semester-2/X-S2-P11_sintesis-halaman-mini.md)

---

## 1. Tujuan pembelajaran

Menyatukan HTML + CSS + JS + data **dalam satu halaman koheren**.

---

## 2. Ringkasan konsep

**Dry run sebelum project S2 resmi** — identifikasi gap skill siswa.

| Lapisan | Dari pertemuan | Minimum hari ini |
|---------|----------------|------------------|
| HTML semantik | P01–P02 | `<main>`, `<section>`, label form |
| CSS readable | P03–P04 | spacing, font, 1 class error |
| JS interaksi | P05–P06 | event listener |
| Validasi | P07–P08 | 1 field dengan pesan error |
| Array/object | P09–P10 | list render + state mutasi |

**Brief default modul:** "Jadwal/Absensi mini" — acceptance 5 poin (modul).

**Guru ≠ build solusi lengkap** — model **planning 10 menit** + siswa build 50 menit; demo pasangan, bukan demo guru perfect app.

---

## 3. Materi praktik

### Transformasi

Menyatukan HTML + CSS + JS + data **dalam satu halaman koheren** — preview PRJ S2.

### Acceptance 5 poin (contoh Jadwal Mini)

1. Halaman punya judul dan area daftar kegiatan terbaca
2. User bisa menambah kegiatan via form
3. Daftar render dari array/object — bukan hardcode 5 `<li>`
4. Minimal 1 field divalidasi dengan pesan error jelas
5. Styling minimal — spacing dan error terbaca

Siswa boleh **absensi mini** — acceptance disesuaikan, tetap 5 poin measurable.

### Arsitektur file sederhana

```text
jadwal-mini/
  index.html    # struktur + link css/js
  style.css     # readable
  app.js        # state + render + validasi
```

Satu file juga OK kelas X — asal scope terpisah di `<head>`/`<script>`.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Opening | Brief: “Jadwal/Absensi mini” — acceptance 5 poin |
| 10–20 | Plan | Spec + wireframe kertas 5 menit |
| 20–70 | **Practice** | Build: list + form + validasi + styling minimal |
| 70–85 | Demo pasangan | 2 menit — 1 praise 1 question |
| 85–90 | Preview project S2 PRJ |

---

## 5. Lembar kerja / latihan

> Snippet **integrasi** — prediksi sebelum siswa merge sendiri.

### Snippet A

```javascript
let items = ["A"];
function render() { /* ... */ }
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value.length < 3) {
    pesan.textContent = "Min 3 huruf";
    return;
  }
  items.push(input.value);
  render();
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Urutan: validasi vs push? | Validasi dulu — gagal = return, tidak push |
| Layer apa saja? | Event + validasi P08 + state P09 + render |

### Snippet B — Missing render

```javascript
items.push("Baru");
// lupa render()
```

| Pertanyaan | Kunci |
|------------|-------|
| State vs DOM? | State ada item; DOM tidak update |
| Acceptance gagal poin? | Daftar tidak refleks data |

### Snippet C — Hardcode + JS

```html
<ul>
  <li>Hardcode</li>
</ul>
<!-- JS push ke array tapi render ke ul lain -->
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug UX? | User lihat hardcode, bukan data JS |
| Fix? | ul kosong; satu sumber render |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
