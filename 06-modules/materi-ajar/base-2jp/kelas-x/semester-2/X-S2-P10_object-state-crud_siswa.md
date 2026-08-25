# Handout Siswa — X-S2-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P10_object-state-crud.md](../../../kelas-x/semester-2/X-S2-P10_object-state-crud.md)

---

## 1. Tujuan pembelajaran

Dari “data dari mana?” → **state object** + operasi tambah/ubah/hapus.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Object** | `{ id, teks, selesai }` — entitas dengan properti |
| **State** | Array object di memori = "kebenaran" aplikasi saat ini |
| **ID unik** | Spiral EXP_07 / S1 P10 — edit/hapus by id, bukan index sembarang |
| **CRUD** | Create (add), Read (render), Update (toggle), Delete (filter/splice) |
| **Re-render** | Setiap mutasi state → panggil `render()` — sync DOM |
| **Index vs id trap** | Hapus item tengah → index bergeser — id stabil |

**Recall S1 P10:** variabel/`const`/`let` — hari ini **struktur data** yang disimpan variabel.

**Preview project S2:** state di memori — refresh hilang (localStorage = XI, bukan hari ini).

**Starter modul = referensi guru** — siswa bangun todo dari scaffold minimal.

---

## 3. Materi praktik

### Transformasi

**Dari:** List string tanpa identitas — edit item salah  
**Ke:** State object + operasi CRUD + render ulang

### Bentuk state

```javascript
let todos = [
  { id: 1, teks: "Belajar JS", selesai: false },
  { id: 2, teks: "Presentasi", selesai: true },
];
let nextId = 3;
```

### Operasi CRUD (mental model)

| Operasi | Mutasi state | UI |
|---------|--------------|-----|
| **Create** | `push({ id: nextId++, ... })` | render() |
| **Read** | loop todos | createElement li |
| **Update** | find by id → flip `selesai` | render() |
| **Delete** | `filter(t => t.id !== idHapus)` | render() |

### Mengapa filter by id (preferred delete)

```javascript
todos = todos.filter(function (item) {
  return item.id !== idHapus;
});
```

Lebih aman dari `splice(index)` jika index dari DOM tidak sync.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Recall | ID buku P10 S1 / EXP_07 |
| 5–15 | Experience | List tanpa id — edit item salah |
| 15–25 | Trap | Index array berubah setelah hapus |
| 25–35 | Clarify | Object `{ id, nama, ... }` |
| 35–45 | Concept | state · CRUD · render ulang |
| 45–70 | Practice | Todo list object: add · delete · toggle done |
| 70–85 | Reflect | State di memori — refresh hilang (preview S2 project) |
| 85–90 | Exit | 1 bug state yang kamu perbaiki |

---

## 5. Lembar kerja / latihan

### Snippet A

```javascript
const todos = [{ id: 1, teks: "A", selesai: false }];
todos.push({ id: 2, teks: "B", selesai: false });
// render() dipanggil
```

| Pertanyaan | Kunci |
|------------|-------|
| Panjang state? | 2 |
| Tanpa render()? | DOM tidak update |

### Snippet B — Hapus by index salah

```javascript
// User klik hapus item id=2 (index 1)
todos.splice(1, 1);
// Lalu klik toggle id=3 yang tadinya index 2
```

| Pertanyaan | Kunci |
|------------|-------|
| Risk? | Index bergeser — handler lama bisa salah target |
| Solusi? | Operasi by `id` |

### Snippet C — Toggle

```javascript
if (todos[i].id === id) {
  todos[i].selesai = !todos[i].selesai;
}
```

| Pertanyaan | Kunci |
|------------|-------|
| `!todos[i].selesai` artinya? | Flip boolean true↔false |
| Update DOM langsung? | Tidak — perlu render() penuh (pola kelas X OK) |

---

## 6. Exit ticket

1. 1 bug state yang kamu perbaiki
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
