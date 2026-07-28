# Materi Guru Lengkap — XI-S4-P09
**Modul:** [XI-S4-P09_model-data-relasi.md](../../kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)
**Materi pendukung sumber:** [XI-S4-P09_model-data-relasi.md](../../materi-pendukung/materi-pendukung/kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P09 — Model Data & Relasi

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P09 |
| Unit | XI4.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2, CXI-T4 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |

## Learning Transformation

Dari satu array datar → **relasi** id & foreign key sederhana.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_07: buku vs peminjam — 2 entitas |
| 5–18 | Experience | **Perpustakaan MA** — kartu anggota + buku |
| 18–28 | Trap | Duplikasi nama lengkap di setiap record |
| 28–38 | Clarify | Normalisasi ringkas — id referensi |
| 38–48 | Concept | 1-to-many · lookup by id |
| 48–70 | Practice | Skema: `members[]` + `loans[]` dengan `memberId` |
| 70–85 | Practice | Query join manual: tampilkan pinjaman + nama |
| 85–90 | Exit | Justifikasi 1 pilihan desain |

---

## Cognitive Trap

**Asumsi:** Database = Excel satu sheet raksasa.  
**Aman:** Tunjukkan duplikasi & inkonsistensi.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Tanpa SQL wajib; konsep ER cukup untuk XII nanti.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P09 Model Data & Relasi

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P09 |
| Modul pertemuan | [XI-S4-P09_model-data-relasi.md](../../../kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md) |
| Unit | XI4.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2, CXI-T4 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |
| Formatif | REA, COM |
| Ada live code? | **Ya — skema relasi + join manual live (papan + JS)** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Entitas terpisah** | `members[]` dan `books[]` — bukan satu sheet raksasa |
| **Primary key** | `id` unik per entitas — spiral EXP_07 nomor panggil |
| **Foreign key** | `loan.memberId` → referensi `members.id` |
| **1-to-many** | Satu anggota banyak pinjaman |
| **Normalisasi ringkas** | Jangan duplikasi nama lengkap di setiap loan |
| **Join manual** | Loop + find by id — **tanpa SQL wajib** |
| **Inkonsistensi trap** | Ubah nama anggota — duplikasi di loan tidak ikut |
| **Recall nested S3** | Nested object ≠ relasi — relasi = **referensi id antar array** |

**Builds on S3 P07:** Array of object + id — hari ini **2 array linked by id**.

**Builds on P07–P08:** localStorage bisa simpan `{ members, loans }` — foreshadow P10 ER → keys.

**EXP_07 props:** Buku karton tanpa nomor panggil — drama cari buku salah.

**Varian rotasi:** Perpustakaan / inventaris lab / ekstrakurikuler — skema sama.

**Jangan bagikan:** file data 50 record + join function lengkap.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "EXP_07 — nomor panggil dihapus, apa yang hilang?" | Identitas stabil — padanan primary key |
| "S3 P07 — nested penulis vs relasi?" | Nested = objek dalam record; relasi = id ke record lain |
| "P07 storage — satu KEY satu object?" | Bisa `{ members, books, loans }` root object |
| "P05 filter — join vs filter?" | Join gabung entitas; filter subset |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa desain 2 entitas domain sendiri (min 3 record masing-masing) |
| **Live coding** | Whiteboard ER → ketik 2 array + 1 join function |
| **Per baris / scope** | find callback, loan.memberId — TTS |
| **Recall** | EXP_07 props — role-play cari buku tanpa nomor |
| **Membaca kode** | Snippet duplikasi nama — prediksi bug edit nama |
| **No starter file** | Jangan distribusi JSON relasi siap pakai |
| **Amanah** | Data peminjam = data teman — minim PII |

---

## Materi Inti

### Transformasi

**Dari:** Satu array datar dengan duplikasi field  
**Ke:** **Relasi id & foreign key** — join manual untuk tampilan

### Trap — sheet raksasa

```javascript
const loans = [
  { bookTitle: "Fiqih", memberName: "Ahmad", memberClass: "XI-1" },
  { bookTitle: "Sejarah", memberName: "Ahmad", memberClass: "XI-1" },
];
// Ahmad pindah kelas — update berapa baris?
```

### Skema aman (perpustakaan)

```javascript
const members = [
  { id: 1, name: "Ahmad", kelas: "XI-1" },
  { id: 2, name: "Siti", kelas: "XI-2" },
];

const books = [
  { id: 101, title: "Fiqih Praktis", available: false },
  { id: 102, title: "Sejarah Nusantara", available: true },
];

const loans = [
  { id: 1001, bookId: 101, memberId: 1, dueDate: "2026-04-01" },
];
```

### Join manual — tampilkan pinjaman + nama

```javascript
function getMemberName(memberId) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].id === memberId) {
      return members[i].name;
    }
  }
  return "(tidak ditemukan)";
}

function renderLoansTable() {
  let html = "<table><tr><th>Buku ID</th><th>Peminjam</th><th>Jatuh tempo</th></tr>";
  for (let i = 0; i < loans.length; i++) {
    const loan = loans[i];
    const name = getMemberName(loan.memberId);
    html += "<tr><td>" + loan.bookId + "</td><td>" + name + "</td><td>" + loan.dueDate + "</td></tr>";
  }
  html += "</table>";
  document.getElementById("loan-table").innerHTML = html;
}
```

### Alternatif find (spiral P05)

```javascript
const member = members.find(function (m) {
  return m.id === loan.memberId;
});
const name = member ? member.name : "(tidak ditemukan)";
```

---

## Alur Live Coding

> **Alat:** papan putih + Live Server. **Domain default:** perpustakaan MA (EXP_07). Siswa boleh variasi.

### Persiapan

- Props buku karton EXP_07 (opsional)
- Papan: kotak MEMBER · BOOK · LOAN

### Skrip TTS — papan + ketik live

```text
[LANGKAH 0 — EXP_07 opening 0–5 menit]
Tunjuk buku tanpa nomor panggil.
Role-play: "Cari Fiqih kelas X" — ambil salah.
Ucapkan: "Judul saja tidak cukup — id unik."

[LANGKAH 1 — Experience 5–18 menit]
Perpustakaan MA — kartu anggota + buku terpisah.
Tanya: "Satu Excel semua kolom vs 3 tabel kecil?"

[LANGKAH 2 — Trap duplikasi 18–28 menit]
Tulis di papan array loan dengan memberName copy-paste 5×.
Ubah "Ahmad" → "Ahmad H." — berapa baris edit?
Ucapkan: "Duplikasi = inkonsistensi — normalisasi."

[LANGKAH 3 — Clarify PK/FK 28–38 menit]
Papan:
MEMBER (id PK, name, kelas)
BOOK (id PK, title, available)
LOAN (id PK, memberId FK, bookId FK, dueDate)
Ucapkan: "FK = nomor induk peminjam, bukan nama lengkap."

[LANGKAH 4 — Concept 1-to-many 38–48 menit]
Garis crow's foot sederhana: 1 member → banyak loan.
Tanpa SQL — cukup konsep untuk XII nanti.

[LANGKAH 5 — Ketik data 48–58 menit]
Console atau script tag — 2 members, 2 books, 2 loans.
Siswa ikut domain sendiri — min 3+3+2 record.

[LANGKAH 6 — getMemberName 58–65 menit]
Ketik lookup loop — TTS: "Join = cari baris matching id."
Demo memberId salah → "(tidak ditemukan)".

[LANGKAH 7 — renderLoansTable 65–75 menit]
Join book title optional — getBookTitle(bookId) parallel.
Spiral S3 render — innerHTML tabel dari join result.

[LANGKAH 8 — Practice query 75–85 menit]
Latihan: "Pinjaman Ahmad saja" — filter loans where memberId === 1 lalu join.
Pair: prediksi output teman.

[LANGKAH 9 — Exit 85–90 menit]
1 kalimat justifikasi: kenapa nama tidak disalin ke loan?
Hook P10: gambar ER formal + map ke localStorage keys.
```

---

## Latihan Membaca Kode

### Snippet A — Foreign key

```javascript
{ id: 1001, bookId: 101, memberId: 1, dueDate: "2026-04-01" }
```

| Pertanyaan | Kunci |
|------------|-------|
| PK record ini? | id: 1001 |
| FK ke member? | memberId: 1 |

### Snippet B — Duplikasi

```javascript
loans.push({ memberName: "Ahmad", bookId: 102 });
members[0].name = "Ahmad H.";
// loan.memberName masih "Ahmad"
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | Nama stale |
| Fix? | Simpan memberId, join saat render |

### Snippet C — Join

```javascript
const name = members.find(m => m.id === loan.memberId)?.name ?? "?";
```

| Pertanyaan | Kunci |
|------------|-------|
| find return undefined? | Optional chaining → "?" |
| Spiral P05? | find = search array |

---

## Praktik Mandiri

1. Skema 2 entitas + 1 relasi — domain pilihan (min 3 record/entitas)
2. Fungsi join manual — tampilkan tabel gabungan
3. Demo edit nama di members — UI loan ikut (bukti normalisasi)
4. Jawab exit: 1 pilihan desain + alasan
5. **Tidak boleh:** copy skema perpustakaan guru utuh

**Extension:** `getBookTitle` + validasi bookId tidak ada.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Satu array giant | Papan 3 entitas — pecah |
| FK pakai index array | Index bergeser — pakai id stabil |
| Duplikasi nama "lebih gampang" | Trap edit nama demo |
| Join di 5 tempat copy-paste | Satu getMemberName — DRY foreshadow |
| Langsung SQL | Konsep ER dulu — XII database |
| EXP_07 diskon | Props 2 menit — impact besar |
| Guru live SQL | Manual join only |

---

## Rujukan

- Modul: [XI-S4-P09](../../../kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)
- EXP: [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md)
- Nested S3: [S3 P07 Struktur Nested](../semester-3/XI-S3-P07_struktur-data-nested.md)
- Storage: [P07 localStorage](./XI-S4-P07_localstorage-crud.md)
- Filter: [P05 map-filter-reduce](./XI-S4-P05_map-filter-reduce.md)
- Lanjut: [P10 Skema ER Mini](./XI-S4-P10_skema-er-mini.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] EXP_07 dibuka / props atau role-play
- [ ] 3 entitas PK/FK di papan
- [ ] Trap duplikasi didemo
- [ ] Join manual live — tabel tampil
- [ ] Spiral S3 nested vs relasi dijelaskan
- [ ] Exit: 1 justifikasi desain
- [ ] Tidak distribusi data siap pakai

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
