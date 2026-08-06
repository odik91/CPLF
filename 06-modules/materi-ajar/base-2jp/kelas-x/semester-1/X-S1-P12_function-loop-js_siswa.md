# Handout Siswa — X-S1-P12

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P12_function-loop-js.md](../../../kelas-x/semester-1/X-S1-P12_function-loop-js.md)

---

## 1. Tujuan pembelajaran

Dari “copy-paste kode” → **function** = proses reusable.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan |
|--------|------------|
| **Function** | Blok proses bernama — reusable, DRY |
| **Parameter** | Input function — `(arr)`, `(a, b)` |
| **Return** | Output function — mengembalikan nilai ke pemanggil |
| **Pemanggilan** | `hitungTotal(harga1)` — eksekusi scope function |
| **Scope function** | Variabel `let i` di dalam function — tidak bocor keluar |

**Transformasi:** copy-paste loop 5x → panggil `hitungTotal()` 1x dengan data beda.

**Prasyarat P11:** loop + array + akumulasi — hari ini **dibungkus** function.

**Tidak ada starter file ke siswa** — guru refactor live dari pola kasir atau tulis fresh.

---

## 3. Materi praktik

### Transformasi

**Dari:** Copy-paste kode hampir sama  
**Ke:** Function = proses reusable dengan nama + input/output jelas

### Anatomy function

```javascript
function hitungTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
```

- **Nama:** verb + objek (`hitungTotal`)
- **Parameter:** `arr` — data masuk
- **Return:** keluaran ke pemanggil
- **Scope:** `total`, `i` hidup di dalam function

### Function vs inline

| Pakai function | Inline OK |
|----------------|-----------|
| Dipakai ≥2x | Sekali pakai, 2 baris |
| Proses punya nama bisnis jelas | Script sekali jalan |
| Mau test/return value | — |

### ROBI metafora (modul)

Tanpa function = ROBI suruh "ulangi langkah 3" tanpa nama prosedur — chaos.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 2 blok kode hampir sama — smell duplicate |
| 5–15 | Experience | ROBI suruh “ulangi langkah 3” tanpa function — chaos |
| 15–25 | Trap | Copy-paste 5x vs panggil 1x |
| 25–35 | Clarify | Nama proses + input/output function |
| 35–45 | Concept | function · parameter · return |
| 45–70 | Practice | `function hitungTotal(arr)` + loop di dalam |
| 70–85 | Practice 2 | Panggil function 2x dengan data beda |
| 85–90 | Exit | Kapan pakai function vs inline? |

---

## 5. Lembar kerja / latihan

### Snippet A

```javascript
function kaliDua(n) {
  return n * 2;
}
const a = kaliDua(5);
const b = kaliDua(10);
console.log(a, b);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 10 20 |
| Berapa kali function body jalan? | 2 (dua pemanggilan) |

### Snippet B — Missing return

```javascript
function jumlah(arr) {
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    t += arr[i];
  }
}
console.log(jumlah([1, 2, 3]));
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | undefined |
| Perbaikan? | Tambah `return t;` |

### Snippet C — Scope

```javascript
function demo() {
  let x = 99;
  return x;
}
demo();
console.log(x);
```

| Pertanyaan | Kunci |
|------------|-------|
| Baris console.log(x)? | Error — x scope function, tidak di global |
| x di mana hidup? | Hanya di dalam demo |

---

## 6. Exit ticket

1. Kapan pakai function vs inline?
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · ilmu terstruktur

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Alaq 96:1–5

**Kait di kelas hari ini:** Function = tanggung jawab terpisah — ilmu terorganisir.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
