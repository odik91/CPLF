# Handout Siswa — XI-S4-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P09_model-data-relasi.md](../../../kelas-xi/semester-4/XI-S4-P09_model-data-relasi.md)

---

## 1. Tujuan pembelajaran

Dari satu array datar → **relasi** id & foreign key sederhana.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Database = Excel satu sheet raksasa.  
**Aman:** Tunjukkan duplikasi & inkonsistensi.

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Justifikasi 1 pilihan desain
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
