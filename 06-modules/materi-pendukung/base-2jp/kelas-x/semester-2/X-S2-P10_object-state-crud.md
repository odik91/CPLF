# Materi Pendukung Guru — X-S2-P10 Object, State & CRUD Mini

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P10 |
| Modul pertemuan | [X-S2-P10_object-state-crud.md](../../../kelas-x/semester-2/X-S2-P10_object-state-crud.md) |
| Unit | X2.6 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T2 |
| EXP | [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md) |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — state object + CRUD live** |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "S1 P10 — kenapa buku perlu nomor panggil / ID?" | Judul bisa sama; tanpa ID salah ambil/hapus |
| "EXP_07 — apa yang hilang saat nomor buku dihapus?" | Tidak ketemu; chaos identitas |
| "P09 — setelah push array, DOM update bagaimana?" | Panggil renderList() lagi |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa desain object sendiri (todo/jadwal/absensi mini) |
| **Live coding** | State array kosong → add → render → delete → toggle |
| **Per baris / scope** | Object literal, filter callback, event handler — TTS |
| **Recall** | Drama EXP_07 — hapus nomor buku sebelum object `{ id }` |
| **Membaca kode** | Snippet find/filter proyeksi sebelum siswa ketik |
| **No starter file** | Jangan bagikan todo.html CRUD lengkap |

---

## Materi Inti

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

## Alur Live Coding

> **Scaffold:** input + button tambah + `<ul id="todo-list"></ul>` kosong. **State:** array object.

### Persiapan

- Live Server
- Props opsional: buku karton EXP_07 recall

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Recall EXP_07 0–5 menit]
Role-play: cari buku tanpa nomor — salah ambil.
Ucapkan: "Object dengan id = nomor panggil digital."
Tanya: "P09 array string — edit item ke-2 setelah hapus item ke-1 — risk?"

[LANGKAH 1 — State awal 5–15 menit]
Di script:
Ketik: let todos = [
Ketik:   { id: 1, teks: "Sholat dhuha", selesai: false },
Ketik:   { id: 2, teks: "Review JS", selesai: true },
Ketik: ];
Ketik: let nextId = 3;
Ucapkan: "todos = state — kebenaran app. nextId = generator id baru."
Scope: let — state akan dimutasi (reassign filter / push).

[LANGKAH 2 — Referensi DOM 15–20 menit]
Ketik:
const listEl = document.getElementById("todo-list");
const inputTeks = document.getElementById("input-todo");
const btnTambah = document.getElementById("btn-tambah");
Scope: const referensi elemen — tidak diganti.

[LANGKAH 3 — Function render 20–35 menit]
Ketik:
function render() {
  listEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const li = document.createElement("li");
    if (item.selesai) {
      li.style.textDecoration = "line-through";
    }
    li.textContent = item.teks + " ";
    const btnToggle = document.createElement("button");
    btnToggle.textContent = "Toggle";
    btnToggle.type = "button";
    btnToggle.dataset.id = String(item.id);
    btnToggle.addEventListener("click", function () {
      toggleSelesai(item.id);
    });
    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.type = "button";
    btnHapus.addEventListener("click", function () {
      hapusTodo(item.id);
    });
    li.appendChild(btnToggle);
    li.appendChild(btnHapus);
    listEl.appendChild(li);
  }
}
Ucapkan per blok:
  Tebak: "Kenapa loop object bukan string?"
  Tanya: "item.id di closure — kenapa aman untuk handler?"
  Spelling: dataset.id — foreshadow delegasi (opsional)
Scope: for body; nested function click — closure id per item.
Catatan: guru boleh sederhanakan styling — fokus CRUD.

[LANGKAH 4 — Panggil render awal 35–38 menit]
Ketik: render();
Demo: 2 item + tombol.

[LANGKAH 5 — Create 38–48 menit]
Ketik:
function tambahTodo(teks) {
  if (teks.trim() === "") return;
  todos.push({ id: nextId, teks: teks.trim(), selesai: false });
  nextId = nextId + 1;
  render();
}

btnTambah.addEventListener("click", function () {
  tambahTodo(inputTeks.value);
  inputTeks.value = "";
});
Ucapkan: "Create = push ke state + nextId increment + render."
Tanya: "Kenapa nextId terpisah dari todos.length?"
Scope: tambahTodo function vs event handler.

[LANGKAH 6 — Update toggle 48–58 menit]
Ketik:
function toggleSelesai(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].selesai = !todos[i].selesai;
      break;
    }
  }
  render();
}
Ucapkan: "Update = cari by id — bukan index dari DOM."
Tanya: "Kalau pakai index tombol — trap apa setelah hapus?"
Demo: toggle → garis coret.

[LANGKAH 7 — Delete 58–68 menit]
Ketik:
function hapusTodo(id) {
  todos = todos.filter(function (item) {
    return item.id !== id;
  });
  render();
}
Ucapkan: "Delete = state baru tanpa item itu — filter by id."
Tanya: "Kenapa tidak splice index 0 sembarang?"
Demo: hapus item tengah — toggle item lain masih benar.

[LANGKAH 8 — Trap index (oral/demo) 68–75 menit]
Papan: hapus item index 1 — index item C berubah dari 2 jadi 1.
Ucapkan: "Ini trap modul — id stabil, index tidak."
Scope: clarifying EXP_07 spiral.

[LANGKAH 9 — Practice siswa 45–70 menit modul overlap]
Todo/jadwal versi siswa — minimal add + delete + toggle.
Keliling: 1 bug sengaja — siswa baca kode teman.

[LANGKAH 10 — Reflect state memori 75–85 menit]
Refresh browser — data hilang.
Ucapkan: "State di RAM — preview project S2: persistensi nanti optional advanced."
Tanya: "1 bug state yang kamu perbaiki hari ini?"

[LANGKAH 11 — Exit 85–90 menit]
Catat 1 bug + fix + screenshot CRUD jalan.
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Todo list object — add, toggle done, delete by id
2. Variasi: `{ id, nama, hadir: boolean }` absensi mini
3. Dokumentasi **1 bug** yang ditemukan + perbaikan
4. **Tidak boleh:** copy CRUD guru

**Extension:** counter nextId dari `Date.now()` — diskusi id unik.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Array string P09 — edit salah baris | Migrasi ke object + id |
| Hapus pakai index DOM | Demo trap index |
| Lupa render() setelah mutasi | UI stale — tanya "state vs DOM?" |
| id duplikat manual | Pakai nextId counter |
| Copy todo WA lengkap | Scaffold minimal live |
| Guru fix CRUD di keyboard siswa | Tanya guiding — siswa ketik |

---

## Rujukan

- Modul: [X-S2-P10](../../../kelas-x/semester-2/X-S2-P10_object-state-crud.md)
- EXP: [EXP_07 Perpustakaan](../../../07-experience_library/EXP_07_Perpustakaan.md)
- Recall S1: [P10 Variabel](../semester-1/X-S1-P10_variabel-data.md)
- Sebelum: [P09 Array Render](./X-S2-P09_array-render-list.md)
- Lanjut: [P11 Sintesis](./X-S2-P11_sintesis-halaman-mini.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Object state dengan id unik
- [ ] CRUD add/toggle/delete by id live
- [ ] TTS scope function + handler
- [ ] Trap index vs id dibahas
- [ ] Recall EXP_07 + S1 P10
- [ ] Refresh = state hilang — preview project
- [ ] Exit: 1 bug + perbaikan

[← Indeks materi X-S2](./X-S2_Materi_Index.md)
