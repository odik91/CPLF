# Handout Siswa — X-S1-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P11_kasir-loop.md](../../../kelas-x/semester-1/X-S1-P11_kasir-loop.md)

---

## 1. Tujuan pembelajaran

Dari “ulang manual” → **loop** otomatisasi repetisi.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan |
|--------|------------|
| **Loop** | Mengulang operasi identik tanpa copy-paste baris |
| **`for`** | `for (init; kondisi; increment) { body }` — cocok indeks array |
| **Array** | Daftar nilai berurutan — `harga[0]` elemen pertama |
| **Akumulasi** | `total = total + harga[i]` — pola kasir |
| **Scope loop** | `let i` di dalam for — block scope (ES6) |

**Metafora EXP_06:** beep scanner = loop; hitung manual 8 item = kelas bosan.

**Prasyarat:** P10 `let` + assignment; P09 if opsional di dalam loop (tidak wajib hari ini).

**Starter modul = referensi guru** — siswa bangun dari file kosong.

---

## 3. Materi praktik

### Transformasi

**Dari:** Ulang manual / copy-paste baris  
**Ke:** Loop otomatisasi repetisi

### Struktur for (mental model)

```text
1. Mulai i = 0
2. Cek i < panjang — kalau false, stop
3. Jalankan body (pakai harga[i])
4. i++ — balik ke step 2
```

### Array dasar

```javascript
const harga = [5000, 3000, 12000, 2000];
// indeks:           0     1      2      3
```

- `harga.length` = 4
- Indeks mulai **0** — trap klasik siswa MA

### while (sebut saja)

"Ada juga `while` — hari ini fokus `for` karena kita punya daftar harga pasti."

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Hitung manual 8 item di papan — kelas bosan |
| 5–20 | Experience | Beep scanner vs hitung satu-satu |
| 20–30 | Trap | “Teliti saja” vs otomatisasi |
| 30–40 | Clarify | Operasi apa yang diulang identik? |
| 40–50 | Concept | for · while · array dasar |
| 50–75 | Practice | JS: array harga → loop total |
| 75–85 | Reflect | Di mana loop di kehidupan (sholat/jamaah metafora ringan)? |
| 85–90 | Exit | 1 baris loop + total |

---

## 5. Lembar kerja / latihan

### Snippet A — Trace

```javascript
const angka = [2, 4, 6];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
  jumlah = jumlah + angka[i];
}
console.log(jumlah);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 12 |
| Setelah i=1, jumlah? | 6 (2+4) |

### Snippet B — Indeks

```javascript
const item = ["A", "B", "C"];
for (let i = 1; i < item.length; i++) {
  console.log(item[i]);
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | B, C (indeks 1 dan 2 — A dilewati) |
| Kenapa mulai i=1? | Init loop sengaja skip elemen pertama |

### Snippet C — Bug umum

```javascript
const harga = [1000, 2000];
let total = 0;
for (let i = 0; i <= harga.length; i++) {
  total += harga[i];
}
console.log(total);
```

| Pertanyaan | Kunci |
|------------|-------|
| Masalah? | `i <= length` → iterasi extra, harga[2] undefined → NaN |
| Perbaikan? | `i < harga.length` |

---

## 6. Exit ticket

1. 1 baris loop + total
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
