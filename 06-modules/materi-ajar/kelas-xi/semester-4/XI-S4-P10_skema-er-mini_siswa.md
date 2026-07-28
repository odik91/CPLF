# Handout Siswa — XI-S4-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P10_skema-er-mini.md](../../../kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md)

---

## 1. Tujuan pembelajaran

Dari kode dulu → **skema** yang bisa didiskusikan tim.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **ER diagram** | Entitas · atribut · relasi — bahasa tim sebelum kode |
| **Primary key (PK)** | Garis bawah atau tanda `#id` — unik per baris entitas |
| **Foreign key (FK)** | Atribut di entitas B yang merujuk PK entitas A |
| **Crow's foot sederhana** | `1` — `<` many — cukup 1-to-many hari ini |
| **Optional field** | `(?)` atau catatan — mis. `dueDate` boleh null pinjam belum jatuh tempo |
| **Map ER → JSON** | Setiap entitas = array; relasi = id reference |
| **localStorage keys** | Satu KEY root `{ members, books, loans }` vs multi-key — tradeoff diskusi |
| **Peer review skema** | 1 risiko data per teman — COM formatif |

**Builds on P09:** Skema JS sudah ada — hari ini **gambar formal** + review tim.

**Builds on P07–P08:** Mapping keys untuk PRJ S4 kickoff minggu depan.

**Deliverable:** Foto ER + 3 kalimat justifikasi → folder kickoff P13.


---

## 3. Materi praktik

### Transformasi

**Dari:** Kode dulu tanpa kesepakatan tim  
**Ke:** **Skema ER** yang bisa didiskusikan sebelum implementasi

### Notasi papan (minimal)

```text
┌─────────────┐         ┌─────────────┐
│   MEMBER    │         │    BOOK     │
├─────────────┤         ├─────────────┤
│ #id         │         │ #id         │
│  name       │         │  title      │
│  kelas      │         │  available  │
└──────┬──────┘         └──────┬──────┘
       │ 1                     │ 1
       │                       │
       │        ┌──────────────┴──┐
       └───────<│      LOAN       │
                ├─────────────────┤
                │ #id             │
                │  memberId (FK)  │
                │  bookId (FK)    │
                │  dueDate (?)    │
                └─────────────────┘
```

### Mapping ER → JSON

| Entitas ER | JSON | localStorage |
|------------|------|--------------|
| MEMBER | `members: []` | field dalam root object |
| BOOK | `books: []` | field dalam root object |
| LOAN | `loans: []` | field dalam root object |

```javascript
const KEY = "ma-perpus-v1";
const defaultState = {
  members: [],
  books: [],
  loans: [],
  nextMemberId: 1,
  nextBookId: 101,
  nextLoanId: 1001,
};
```

### Risiko data (peer review prompt)

| Risiko | Contoh |
|--------|--------|
| FK orphan | loan.memberId tidak ada di members |
| Duplicate PK | dua member id: 1 |
| Missing optional | dueDate wajib padahal pinjam intraday |
| PII berlebihan | NIK di member — diskusi amanah |

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Review P09 skema — cari 1 inkonsistensi |
| 5–15 | Concept | ER diagram: entitas · atribut · relasi (crow's foot sederhana) |
| 15–25 | Clarify | Primary key · optional field |
| 25–40 | Practice | Gambar ER untuk PRJ S4 inventaris/perpus (draft) |
| 40–55 | Peer | Review skema teman — 1 risiko data |
| 55–75 | Practice | Map ER → JSON structure + localStorage keys |
| 75–90 | Exit | Foto ER + 3 kalimat justifikasi |

---

## 5. Lembar kerja / latihan

### Snippet A — ER ke JSON

```text
ER: INVENTORY_ITEM (#id, name, qty)
    BORROW_RECORD (#id, itemId FK, studentId FK)
```

```javascript
{ items: [], borrows: [], students: [] }
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa array? | 3 entitas = 3 array |
| FK di JSON? | itemId, studentId di borrow record |

### Snippet B — Inkonsistensi

```javascript
members: [{ id: 1, name: "A" }],
loans: [{ memberId: "1", bookId: 101 }],
```

| Pertanyaan | Kunci |
|------------|-------|
| Join strict ===? | Gagal — string vs number |
| Fix di ER? | Catat: id tipe number semua |

### Snippet C — Optional

```javascript
{ id: 1002, bookId: 102, memberId: 2, dueDate: null }
```

| Pertanyaan | Kunci |
|------------|-------|
| Valid? | Ya jika dueDate optional |
| ER notation? | dueDate (?) |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
