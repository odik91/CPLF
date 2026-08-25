# Handout Siswa — XI-S3-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P07_struktur-data-nested.md](../../../kelas-xi/semester-3/XI-S3-P07_struktur-data-nested.md)

---

## 1. Tujuan pembelajaran

Dari variabel global bercecer → **skema data** array of object.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** “Nanti dirapikan” — global `window.x` everywhere.  
**Aman:** Satu objek `state` atau module export.

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Skema JSON 1 halaman
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
