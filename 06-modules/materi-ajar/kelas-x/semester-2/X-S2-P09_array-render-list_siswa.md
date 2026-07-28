# Handout Siswa — X-S2-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P09_array-render-list.md](../../../kelas-x/semester-2/X-S2-P09_array-render-list.md)

---

## 1. Tujuan pembelajaran

Dari “copy-paste HTML item” → **data array → render dinamis**.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Array** | Daftar data di JS — spiral S1 P11 kasir |
| **Pisah data vs tampilan** | Array = sumber kebenaran; DOM = cermin yang di-render ulang |
| **`for` loop** | Iterasi indeks — `kegiatan[i]` |
| **`createElement` + `appendChild`** | Bangun node DOM programmatically — **preferred** |
| **`innerHTML` += dalam loop** | Anti-pattern: re-parse HTML berulang; risiko XSS (pengantar) |
| **`textContent`** | Isi teks aman — tidak interpret HTML |
| **`push` + re-render** | Tambah data → render ulang seluruh list ( pola sederhana kelas X) |

**Recall S1 P11:** kasir loop harga — hari ini loop **string/object** ke `<li>`.

**Keputusan pedagogis:** perkenalkan `innerHTML` sekali sebagai perbandingan ("bisa tapi jangan biasakan"), lalu arahkan ke `createElement`.

**Starter modul = referensi guru** — siswa bangun dari HTML+JS minimal.

---

## 3. Materi praktik

### Transformasi

**Dari:** Copy-paste HTML item  
**Ke:** Data array → render dinamis ke DOM

### Pola render (preferred)

```javascript
function renderList() {
  listEl.innerHTML = ""; // kosongkan cermin
  for (let i = 0; i < kegiatan.length; i++) {
    const li = document.createElement("li");
    li.textContent = kegiatan[i];
    listEl.appendChild(li);
  }
}
```

### Mengapa createElement > innerHTML abuse

| innerHTML += di loop | createElement |
|----------------------|---------------|
| Browser parse ulang HTML tiap iterasi | Tambah node langsung |
| Mudah sisip tag tidak sengaja | `textContent` aman |
| Kebiasaan buruk untuk data user | Pola CRUD P10 lebih bersih |

**Catatan:** `innerHTML = ""` untuk clear list OK; yang dihindari adalah `innerHTML += "<li>..."` berulang.

### Tambah item (Practice 2)

```javascript
kegiatan.push(namaBaru);
renderList(); // sinkronkan DOM dengan data
```

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | 10 `<li>` manual — bosan mengetik? |
| 5–15 | Experience | Kasir S1 recall — data banyak |
| 15–25 | Trap | Hardcode N item tidak scalable |
| 25–35 | Clarify | Pisah data vs tampilan |
| 35–45 | Concept | array · loop · `innerHTML` / `createElement` |
| 45–70 | Practice | Daftar kegiatan dari array JS → `<ul>` |
| 70–85 | Practice 2 | Tambah item via input + push + re-render |
| 85–90 | Exit | Panjang array vs baris HTML manual? |

---

## 5. Lembar kerja / latihan

### Snippet A

```javascript
const items = ["A", "B", "C"];
const ul = document.getElementById("list");
ul.innerHTML = "";
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  ul.appendChild(li);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Berapa `<li>` di DOM? | 3 |
| items.push("D") tanpa render ulang? | DOM tetap 3 — perlu panggil function lagi |

### Snippet B — Off-by-one

```javascript
for (let i = 0; i <= items.length; i++) {
  // ...
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | Satu iterasi extra — `undefined` item |
| Perbaikan? | `i < items.length` |

### Snippet C — innerHTML abuse

```javascript
for (let i = 0; i < items.length; i++) {
  ul.innerHTML += "<li>" + items[i] + "</li>";
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output terlihat benar? | Ya — tapi inefficient |
| Jika items[i] = "<script>..." ? | Risiko XSS — textContent lebih aman |

---

## 6. Exit ticket

1. Panjang array vs baris HTML manual?
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
