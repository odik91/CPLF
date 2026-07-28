# Materi Guru Lengkap — XI-S4-P10

**Handout siswa (bagikan):** [XI-S4-P10_skema-er-mini_siswa.md](./XI-S4-P10_skema-er-mini_siswa.md)

**Modul:** [XI-S4-P10_skema-er-mini.md](../../../kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md)

**Materi pendukung sumber:** [XI-S4-P10_skema-er-mini.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P10 — Skema ER Mini

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P10 |
| Unit | XI4.5 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-B2 |

## Learning Transformation

Dari kode dulu → **skema** yang bisa didiskusikan tim.

---

## Timeline (90 menit)

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

## Deliverable

ER mini + mapping ke struktur JS yang dipakai project.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Masukkan ke folder kickoff S4 minggu depan.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P10 Skema ER Mini

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P10 |
| Modul pertemuan | [XI-S4-P10_skema-er-mini.md](../../../kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md) |
| Unit | XI4.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-B2 |
| Formatif | REA, COM |
| Ada live code? | **Ya — ER papan live + mapping ke JSON/localStorage keys** |

---

## Pengetahuan Guru

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

**Jangan bagikan:** template ER lengkap PRJ siap tempel.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P09 — join manual butuh apa di skema?" | FK konsisten — memberId valid |
| "S3 P07 — skema konsisten?" | Field sama tiap record — ER dokumentasi skema |
| "P07 KEY namespace?" | ER map ke struktur root + versi key |
| "P06 — transform sebelum UI?" | ER = desain sebelum pipeline code |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | ER digambar sendiri — boleh inspirasi, bukan foto template guru |
| **Live coding** | Guru gambar ER di papan → map ke object literal live |
| **Per baris / scope** | Notasi PK/FK — TTS saat gambar relasi |
| **Recall** | Review P09 — cari 1 inkonsistensi di skema teman |
| **Membaca kode** | Lihat ER teman — prediksi JSON structure |
| **No starter file** | Kertas/papan — bukan Lucidchart template export |
| **Peer review** | Kritik 1 risiko — sopan, fokus data |

---

## Materi Inti

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

## Alur Live Coding

> **Alat:** papan putih / kertas A3. **Output:** foto ER + mapping JSON.

### Persiapan

- Review skema P09 siswa (1 menit/kelompok)
- Contoh inkonsistensi siap (bookId string vs number)

### Skrip TTS — gambar + map live

```text
[LANGKAH 0 — Review P09 0–5 menit]
Tampil skema P09 random — tanya: "1 inkonsistensi?"
Contoh: memberId string "1" vs number 1 — join gagal.

[LANGKAH 1 — Concept ER 5–15 menit]
Ucapkan: "ER = blueprint tim — seperti denah sebelum bangun."
Entitas · atribut · relasi — tiga kata kunci.

[LANGKAH 2 — PK optional 15–25 menit]
Gambar MEMBER dengan #id.
dueDate (?) — optional field pinjam.
Tanya: "Apa yang wajib vs boleh kosong?"

[LANGKAH 3 — Relasi crow's foot 25–40 menit]
Gambar 1-to-many: member → loans, book → loans.
Ucapkan: "Many side pegang FK — spiral P09."
Siswa gambar ER domain PRJ (inventaris/perpus).

[LANGKAH 4 — Peer review 40–55 menit]
Tukar kertas — tulis 1 risiko data + saran 1 baris.
Guru keliling — validasi FK direction.

[LANGKAH 5 — Map ke JSON 55–68 menit]
Dari ER di papan — ketik defaultState object di projector.
Ucapkan: "Satu entitas = satu array — naming konsisten camelCase."

[LANGKAH 6 — localStorage keys 68–75 menit]
Diskusi:
A) satu KEY root object
B) multi-key per entitas
Tradeoff: atomic save vs partial update.
Rekomendasi MA: satu root untuk project kecil.

[LANGKAH 7 — Validasi skema 75–85 menit]
Checklist: setiap FK ada target PK? tipe id sama?
Link P08: corrupt/backup — skema dokumentasi membantu recovery.

[LANGKAH 8 — Exit 85–90 menit]
Foto ER + 3 kalimat justifikasi (PK choice, 1 relasi, 1 optional field).
Masukkan ke folder kickoff P13 — preview minggu depan.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. ER mini lengkap untuk PRJ S4 (inventaris/perpus/absensi persistent)
2. Mapping 1 halaman: ER → JSON structure + KEY name
3. Peer review: terima 1 risiko — perbaiki 1 hal di ER
4. 3 kalimat justifikasi desain (exit modul)
5. **Tidak boleh:** tempel ER template guru

**Extension:** Many-to-many intro — `BOOK_AUTHOR` junction (bonus, tidak wajib).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| ER = flowchart UI | ER = data structure, bukan wireframe |
| FK di sisi "one" | FK di many — loan pegang memberId |
| Lupa PK di entitas | Setiap entitas wajib #id |
| Gambar cantik, JSON tidak match | Map live bareng |
| Review personal bukan data | Arahkan ke risiko inkonsistensi |
| Skip optional discussion | dueDate/null contoh |
| Guru ER terlalu kompleks | 2–3 entitas cukup untuk MA |

---

## Rujukan

- Modul: [XI-S4-P10](../../../kelas-xi/semester-4/XI-S4-P10_skema-er-mini.md)
- Relasi: [P09 Model Data Relasi](./XI-S4-P09_model-data-relasi.md)
- Nested: [S3 P07 Struktur Nested](../semester-3/XI-S3-P07_struktur-data-nested.md)
- Storage: [P07 localStorage](./XI-S4-P07_localstorage-crud.md)
- Kickoff: [P13 Project S4 Kickoff](./XI-S4-P13_project-s4-kickoff.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] ER 2–3 entitas + relasi crow's foot
- [ ] PK/FK + 1 optional field marked
- [ ] Peer review 1 risiko data
- [ ] Map ER → JSON + KEY live
- [ ] Foto ER + 3 kalimat justifikasi
- [ ] Siap masuk folder kickoff P13
- [ ] Tidak distribusi template ER lengkap

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
