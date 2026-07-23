# Materi Pendukung Guru — X-S2-P11 Sintesis Halaman Mini

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P11 |
| Modul pertemuan | [X-S2-P11_sintesis-halaman-mini.md](../../../kelas-x/semester-2/X-S2-P11_sintesis-halaman-mini.md) |
| Unit | X2.5–2.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T1–T3 |
| Formatif | TEC, ITR, COM |
| Ada live code? | **Ya — sintesis live** (HTML + CSS + JS + data + validasi) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P09 — pisah data vs tampilan?" | Array/object vs DOM render |
| "P08 — validasi sebelum submit?" | preventDefault + if + pesan |
| "P10 — kenapa id di object?" | CRUD tepat; index bisa geser |
| "Minimum Viable Page modul — sebut 2?" | Semantik, CSS, JS, data, validasi 1 field |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa build halaman sendiri dari spec kertas |
| **Live coding** | Guru model **wireframe + acceptance** live; build mostly siswa |
| **Per baris / scope** | Saat modeling awal (10–20 menit): TTS HTML→CSS→JS skeleton |
| **Recall** | Acceptance 5 poin sebelum `<html>` |
| **Membaca kode** | Snippet integrasi proyeksi sebelum coding penuh |
| **No starter file** | **Larangan:** jadwal-mini.html lengkap dari guru |
| **Demo pasangan** | 2 menit siswa — guru praise/question, bukan rewrite kode |

---

## Materi Inti

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

## Alur Live Coding

> **0–10 menit:** brief + acceptance. **10–20 menit:** guru model skeleton **perlahan**. **20–70 menit:** siswa build. Guru **facilitator**, bukan full app di proyektor.

### Persiapan

- Kertas wireframe per siswa/pasangan
- **Tidak ada** template halaman jadi
- Preview PRJ S2 di akhir — motivasi, bukan solusi

### Skrip TTS — modeling skeleton (10–20 menit)

```text
[LANGKAH 0 — Opening + acceptance 0–10 menit]
Tulis di papan 5 acceptance — siswa copy ke kertas spec sendiri.
Ucapkan: "Ini kontrak selesai — bukan 'terserah yang penting jalan'."
Tanya: "Poin mana yang pakai P08? P09? P10?"
Scope: spec sebelum kode.

[LANGKAH 1 — Wireframe kertas 10–15 menit]
5 menit: kotak header, list area, form, area pesan error.
Ucapkan: "Wireframe = peta — bukan desain cantik dulu."
Scope: planning ITR.

[LANGKAH 2 — HTML semantik live 15–18 menit]
Ketik di proyektor (siswa belum wajib ikut — atau ikut slow):
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Jadwal Mini</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Jadwal Kegiatan Kelas</h1>
    <section aria-labelledby="judul-daftar">
      <h2 id="judul-daftar">Daftar</h2>
      <ul id="daftar"></ul>
    </section>
    <section aria-labelledby="judul-form">
      <h2 id="judul-form">Tambah</h2>
      <form id="form-tambah">
        <label for="nama-kegiatan">Nama kegiatan</label>
        <input id="nama-kegiatan" type="text">
        <span id="pesan-error" class="error"></span>
        <button type="submit">Tambah</button>
      </form>
    </section>
  </main>
  <script src="app.js"></script>
</body>
</html>
Ucapkan per bagian:
  Tebak: "Kenapa main dan section?"
  Tanya: "Form id — siapa yang pakai di JS?"
Scope: HTML = struktur semantik; script di akhir body.

[LANGKAH 3 — CSS minimal live 18–20 menit]
File style.css — ketik:
body { font-family: system-ui, sans-serif; margin: 1rem; max-width: 40rem; }
.error { color: #b00020; min-height: 1.2em; display: block; margin-top: 0.25rem; }
ul { padding-left: 1.25rem; }
Ucapkan: "Readable dulu — cantik bukan target hari ini."
Scope: presentasi pesan validasi.

[LANGKAH 4 — JS skeleton app.js 20–25 menit]
Ketik — **bukan implementasi penuh**, hanya kerangka + 1 function:
// state
let kegiatan = [];

// render — siswa lengkapi loop P09
function renderDaftar() {
  // TODO: kosongkan ul, loop, createElement
}

// validasi + submit — siswa lengkapi P08
const form = document.getElementById("form-tambah");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO: validasi + push + render
});

renderDaftar();
Ucapkan: "Guru berhenti di skeleton — implementasi = tanggung jawab siswa 20–70 menit."
Tanya: "Urutan build kamu: state dulu atau form dulu?"
Scope: global state; TODO sengaja — anti copas solusi.

[LANGKAH 5 — STOP modeling — siswa build 20–70 menit]
Guru keliling — clarifying questions only:
  "Acceptance poin 3 sudah terbukti?"
  "Validasi field mana?"
  "Render pakai createElement?"
Larangan: guru takeover keyboard menyelesaikan app.

[LANGKAH 6 — Demo pasangan 70–85 menit]
2 menit per pasangan — 1 praise spesifik, 1 question (COM).
Contoh praise: "Pesan error di bawah field jelas."
Contoh question: "Kalau refresh, data hilang — kenapa?"

[LANGKAH 7 — Preview PRJ S2 85–90 menit]
Tunjuk 4 opsi PRJ — gap skill hari ini → target P12 spec.
```

### Modeling lanjutan (jika kelas stuck — max 5 menit, bukan full app)

Hanya 1 function contoh **live** jika >50% kelas blank:

```text
[LANGKAH 4b — Mini demo render ONLY jika perlu]
function renderDaftar() {
  const ul = document.getElementById("daftar");
  ul.innerHTML = "";
  for (let i = 0; i < kegiatan.length; i++) {
    const li = document.createElement("li");
    li.textContent = kegiatan[i];
    ul.appendChild(li);
  }
}
Ucapkan: "Ini potongan P09 — gabungkan sendiri dengan validasi P08."
Segera hapus/ jangan bagikan file — siswa ketik ulang.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

**Inti 20–70 menit modul:**

1. Halaman mini (jadwal/absensi) — **versi siswa**, spec 5 poin
2. HTML semantik + CSS minimal + JS terintegrasi
3. Array/object + render + validasi 1 field
4. Siap demo 2 menit ke pasangan

**Tidak boleh:** download template guru, copy repo teman pararel.

**Gap log:** siswa catat 1 skill yang masih lemah → bahan P12 kickoff.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Langsung CSS cantik — logic kosong | Cek acceptance dulu |
| Hardcode li + array | Satu sumber render |
| Validasi alert saja | Spiral P08 — span error |
| Minta "file jadi pak/bu" | Tolak — skeleton OK, solusi tidak |
| Guru demo app sempurna 30 menit | Max 5 menit potongan; siswa build |
| Tidak uji submit kosong | Ingatkan 3 kasus P08 |

---

## Rujukan

- Modul: [X-S2-P11](../../../kelas-x/semester-2/X-S2-P11_sintesis-halaman-mini.md)
- Sebelum: [P09 Array](./X-S2-P09_array-render-list.md) · [P10 CRUD](./X-S2-P10_object-state-crud.md) · [P08 Validasi](./X-S2-P08_validasi-js-pesan.md)
- Lanjut: [P12 Project Kickoff](./X-S2-P12_project-s2-kickoff.md)
- PRJ preview: [08_Project_Bank_Index](../../../08-project/08_Project_Bank_Index.md#kelas-x--semester-2-web-sebagai-ekspresi)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Spec 5 acceptance sebelum build
- [ ] Siswa punya halaman mini **versi sendiri**
- [ ] HTML + CSS + JS + data + validasi 1 field
- [ ] Guru **tidak** bagikan solusi lengkap
- [ ] Demo pasangan — praise + question
- [ ] Gap skill tercatat untuk P12
- [ ] Preview PRJ S2 disebut

[← Indeks materi X-S2](./X-S2_Materi_Index.md)
