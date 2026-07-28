# Materi Guru Lengkap — XI-S3-P07

**Handout siswa (bagikan):** [XI-S3-P07_struktur-data-nested_siswa.md](./XI-S3-P07_struktur-data-nested_siswa.md)

**Modul:** [XI-S3-P07_struktur-data-nested.md](../../../kelas-xi/semester-3/XI-S3-P07_struktur-data-nested.md)

**Materi pendukung sumber:** [XI-S3-P07_struktur-data-nested.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P07_struktur-data-nested.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P07 — Struktur Data Nested

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P07 |
| Unit | XI3.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) (spiral) |

## Learning Transformation

Dari variabel global bercecer → **skema data** array of object.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall X-S2-P10 object — tambah 1 level nested |
| 5–18 | Experience | EXP_07 varian: katalog buku — field apa saja? |
| 18–28 | Trap | Satu variabel `data` string JSON tanpa struktur |
| 28–38 | Clarify | Nama field konsisten · id unik |
| 38–48 | Concept | `{ id, title, status }[]` · akses `arr[i].field` |
| 48–70 | Practice | Definisikan skema 5 record + render tabel |
| 70–85 | Reflect | Kapan array vs object root? |
| 85–90 | Exit | Skema JSON 1 halaman |

---

## Cognitive Trap

**Asumsi:** “Nanti dirapikan” — global `window.x` everywhere.  
**Aman:** Satu objek `state` atau module export.

---

## Formatif

**REA**, **TEC**

---

## Catatan Guru

Rotasi varian EXP_07 A/B/C antar kelas paralel.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P07 Struktur Data Nested

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P07 |
| Modul pertemuan | [XI-S3-P07_struktur-data-nested.md](../../../kelas-xi/semester-3/XI-S3-P07_struktur-data-nested.md) |
| Unit | XI3.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) (spiral) |
| Formatif | REA, TEC |
| Ada live code? | **Ya — skema nested + render tabel live** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Array of object** | Spiral [X-S2-P10](../../kelas-x/semester-2/X-S2-P10_object-state-crud.md) — hari ini **field bertingkat** |
| **Nested object** | `{ penulis: { nama, kelas } }` — akses `buku[i].penulis.nama` |
| **Skema konsisten** | Semua record punya field sama — jangan campur `{ title }` dan `{ judul }` |
| **ID unik** | EXP_07 spiral — nomor panggil = `id` digital; edit/hapus by id |
| **Root: array vs object** | Katalog = array `[]`; metadata app = object `{}` — diskusi di reflect |
| **Render tabel** | Loop array → `<tr>` — foreshadow P08 state + P04 `render()` |

**Recall X-S2-P10:** object flat `{ id, teks, selesai }` — hari ini tambah **1 level nested** (penulis, kategori, peminjam).

**Recall EXP_07:** drama nomor buku dihapus — tanpa `id` + skema, katalog chaos.

**Varian rotasi:** kelas paralel A/B/C EXP_07 (katalog buku / inventaris ekskul / barang lab) — skema sama, label field beda.

**Jangan bagikan:** file JSON siap pakai 20 record — siswa definisikan 5 record sendiri.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "X-S2-P10 — kenapa todo pakai `id`, bukan index?" | Index bergeser; id stabil — EXP_07 |
| "EXP_07 — apa yang hilang saat nomor panggil dihapus?" | Tidak ketemu; salah identitas |
| "P04 — setelah data berubah, DOM update bagaimana?" | Panggil `render()` — foreshadow P08 |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa desain skema domain sendiri (buku/ekskul/lab) |
| **Live coding** | Array 2 item → tambah nested → render tabel 5 baris |
| **Per baris / scope** | Object literal nested, dot notation, loop — TTS |
| **Recall** | Props buku karton EXP_07 — role-play cari tanpa nomor |
| **Membaca kode** | Snippet akses nested proyeksi sebelum siswa ketik |
| **No starter file** | Jangan distribusi `data.json` lengkap |

---

## Materi Inti

### Transformasi

**Dari:** Variabel global bercecer / string JSON mentah  
**Ke:** **Skema data** array of object dengan field konsisten + akses nested

### Bentuk skema (contoh katalog buku — guru live)

```javascript
const katalog = [
  {
    id: 1,
    judul: "Fiqih Praktis",
    penulis: { nama: "Ustadz A", kelas: "XI" },
    status: "tersedia",
  },
  {
    id: 2,
    judul: "Sejarah Nusantara",
    penulis: { nama: "Bu Siti", kelas: "XII" },
    status: "dipinjam",
  },
];
```

### Akses nested

| Ekspresi | Hasil |
|----------|-------|
| `katalog[0].judul` | `"Fiqih Praktis"` |
| `katalog[0].penulis.nama` | `"Ustadz A"` |
| `katalog[1].status` | `"dipinjam"` |

### Trap: string JSON tanpa struktur

```javascript
const data = '{"id":1,"judul":"..."}'; // string — bukan array object siap loop
```

Ucapkan: "String JSON ≠ skema — parse dulu, atau langsung array object."

### Array root vs object root (reflect)

| Pola | Kapan |
|------|-------|
| `const items = [...]` | Daftar entitas (katalog, absensi) |
| `const state = { items: [], filter: "all" }` | App dengan metadata — **preview P08** |

---

## Alur Live Coding

> **Scaffold:** `<table id="tbl-katalog"><thead>...</thead><tbody id="body-katalog"></tbody></table>` kosong. **Data:** array nested live.

### Persiapan

- Live Server
- Props opsional: 5–6 buku karton EXP_07 dengan nomor panggil
- Rotasi varian A/B/C antar kelas paralel

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Recall EXP_07 + X-S2-P10 0–5 menit]
Role-play: cari buku tanpa nomor panggil — salah ambil.
Ucapkan: "X-S2-P10 object flat — hari ini penulis jadi object di dalam object."
Tanya: "Kalau 2 buku judul mirip — field apa yang menentukan?"

[LANGKAH 1 — Experience EXP_07 5–18 menit]
Tampilkan buku karton — tanya field katalog: id, judul, penulis, status?
Catat di papan skema 4–5 field — konsisten naming (camelCase atau snake, pilih satu).

[LANGKAH 2 — Trap string JSON 18–28 menit]
Tulis di papan: const data = "[{...}]"
Ucapkan: "Ini string — belum bisa katalog[i].judul."
Tanya: "Kenapa 'nanti dirapikan' berbahaya di project?"
Scope: clarifying trap modul.

[LANGKAH 3 — Skema awal 28–38 menit]
Di script ketik:
const katalog = [
Ketik record 1 dengan penulis nested:
  { id: 1, judul: "Fiqih Praktis",
    penulis: { nama: "Ustadz A", kelas: "XI" },
    status: "tersedia" },
Ketik record 2 — status "dipinjam"
];
Ucapkan: "Setiap record struktur sama — itu skema."
Scope: object literal, nested object penulis.

[LANGKAH 4 — Akses dot notation 38–48 menit]
Console live:
  katalog[0].judul
  katalog[0].penulis.nama
  katalog[1].status
Tanya: "Kenapa titik dua kali untuk nama penulis?"
Scope: expression read — belum mutasi.

[LANGKAH 5 — Referensi DOM 48–52 menit]
const bodyEl = document.getElementById("body-katalog");
Scope: const referensi elemen.

[LANGKAH 6 — Function renderTabel 52–68 menit]
Ketik:
function renderTabel() {
  bodyEl.innerHTML = "";
  for (let i = 0; i < katalog.length; i++) {
    const buku = katalog[i];
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.textContent = buku.id;
    const tdJudul = document.createElement("td");
    tdJudul.textContent = buku.judul;
    const tdPenulis = document.createElement("td");
    tdPenulis.textContent = buku.penulis.nama + " (" + buku.penulis.kelas + ")";
    const tdStatus = document.createElement("td");
    tdStatus.textContent = buku.status;
    tr.appendChild(tdId);
    tr.appendChild(tdJudul);
    tr.appendChild(tdPenulis);
    tr.appendChild(tdStatus);
    bodyEl.appendChild(tr);
  }
}
Ucapkan per blok:
  "Loop array — buku = satu entitas katalog."
  "penulis.nama — nested read untuk tampilan."
Scope: for body; createElement chain.
Catatan: styling opsional — fokus skema + akses.

[LANGKAH 7 — Panggil render + tambah record 68–75 menit]
Ketik: renderTabel();
Demo: 2 baris tabel.
Live tambah record ke-3 via push — render ulang:
  katalog.push({ id: 3, judul: "...", penulis: { nama: "...", kelas: "X" }, status: "tersedia" });
  renderTabel();
Ucapkan: "Data berubah → render ulang — spiral P04."

[LANGKAH 8 — Practice siswa 48–70 menit modul overlap]
Definisikan 5 record skema sendiri + render tabel.
Keliling: cek naming field konsisten.

[LANGKAH 9 — Reflect array vs object root 70–85 menit]
Papan: katalog[] vs state = { items: [], filter: "all" }
Ucapkan: "Minggu depan P08 — state object membungkus array."
Tanya: "Kapan nested terlalu dalam? (3+ level — sederhanakan.)"

[LANGKAH 10 — Exit 85–90 menit]
Skema JSON 1 halaman (5 record) + screenshot tabel.
```

---

## Latihan Membaca Kode

### Snippet A — Akses nested

```javascript
const katalog = [
  { id: 1, judul: "A", penulis: { nama: "Ali" }, status: "tersedia" },
];
console.log(katalog[0].penulis.nama);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | `"Ali"` |
| Salah: `katalog.penulis`? | katalog array — perlu index dulu |

### Snippet B — Skema tidak konsisten

```javascript
const data = [
  { id: 1, title: "Buku A" },
  { id: 2, judul: "Buku B", penulis: { nama: "Budi" } },
];
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | Field `title` vs `judul` — loop render error/undefined |
| Fix? | Satu konvensi naming di semua record |

### Snippet C — Render tanpa re-call

```javascript
katalog.push({ id: 99, judul: "Baru", penulis: { nama: "C" }, status: "tersedia" });
// renderTabel() tidak dipanggil
```

| Pertanyaan | Kunci |
|------------|-------|
| DOM? | Stale — baris ke-99 tidak tampil |
| Pola P04? | Mutasi data → panggil render |

---

## Praktik Mandiri

1. Skema 5 record domain pilihan (buku/ekskul/inventaris) — minimal 1 field nested
2. Render tabel HTML dari array — id, 2+ field, status
3. Dokumentasi skema 1 halaman (nama field + tipe)
4. **Tidak boleh:** copy array guru verbatim

**Extension:** field opsional `peminjam: { nama, tanggal }` null jika tersedia — foreshadow PRJ-02.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| String JSON mentah di variabel | Demo parse vs array object langsung |
| Field naming campur EN/ID | Pilih satu — review skema sebelum loop |
| Lupa nested saat render | Tanya "penulis di object mana?" |
| Index untuk hapus/edit | Recall EXP_07 — pakai `id` |
| Copy 20 record dari internet | Wajibkan 5 record original |
| Guru ketik seluruh katalog | Siswa isi record 3–5 sendiri |

---

## Rujukan

- Modul: [XI-S3-P07](../../../kelas-xi/semester-3/XI-S3-P07_struktur-data-nested.md)
- EXP: [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md)
- Recall X: [X-S2-P10 Object CRUD](../../kelas-x/semester-2/X-S2-P10_object-state-crud.md)
- Pola render: [P04 DOM Update Aman](./XI-S3-P04_dom-update-aman.md)
- Lanjut: [P08 State Aplikasi](./XI-S3-P08_state-aplikasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Skema array of object + minimal 1 nested field live
- [ ] Akses dot notation dijelaskan TTS
- [ ] Render tabel 5 record — pola render P04
- [ ] Recall EXP_07 + X-S2-P10
- [ ] Trap string JSON vs struktur dibahas
- [ ] Reflect array root vs object root (hook P08)
- [ ] Exit: skema 1 halaman + screenshot

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
