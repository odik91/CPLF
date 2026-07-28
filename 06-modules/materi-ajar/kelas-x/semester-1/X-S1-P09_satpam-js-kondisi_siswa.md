# Handout Siswa — X-S1-P09

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P09_satpam-js-kondisi.md](../../../kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md)

---

## 1. Tujuan pembelajaran

Dari “aturan di kepala” → **if/else** sebagai aturan yang dieksekusi program.

---

## 2. Ringkasan konsep

**Pertemuan coding JavaScript pertama** — prioritas: semua siswa bisa buka environment (VS Code + Node, atau Replit).

| Konsep | Penjelasan guru |
|--------|-----------------|
| `if (kondisi) { ... }` | Jalankan blok `{}` hanya jika kondisi **truthy** / true |
| `else { ... }` | Jalur alternatif jika kondisi if false |
| `else if (kondisi2)` | Cabang tambahan — urutan penting |
| **Boolean** | Ekspresi yang jadi true/false (`>=`, `===`, `&&`) |
| **Scope blok** | Kode di dalam `{ }` milik if tersebut — di luar tidak otomatis jalan |

**Metafora satpam:** program = satpam digital; `if` = cek identitas/waktu/izin.

**Prasyarat dari P08:** siswa sudah paham cabang keputusan — hari ini **ejaan** JavaScript-nya.

**Fallback modul:** environment gagal → syntax di papan + dry-run oral; jangan cancel coding total.

**PENTING — starter code modul:** contoh di modul pertemuan **hanya referensi guru**. Jangan kirim file starter ke siswa.

---

## 3. Materi praktik

### Transformasi

**Dari:** Aturan di kepala / pseudocode  
**Ke:** `if/else` dieksekusi mesin — output di `console.log`

### EXP_05 Satpam (ringkas)

- Trap: "Semua siswa sama perlakuannya" → realita: cabang by identitas, waktu, izin
- Tabel kondisi → boleh/tidak → langsung ke kode skor lulus/remidi

### Syntax inti

```javascript
if (skor >= 75) {
  console.log("Lulus");
} else {
  console.log("Remidi");
}
```

- `>=` : perbandingan → boolean
- Blok `{ }` : scope if/else
- `console.log` : output sementara (belum HTML)

### Environment

- Buat folder proyek + file `satpam.js` (nama bebas)
- Jalankan: `node satpam.js` atau Run di Replit
- Cek: siswa lihat output terminal — bukan browser dulu

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | 3 kondisi ATM dari P08 — recall |
| 5–18 | Experience | Role-play satpam MA: siapa boleh masuk? |
| 18–28 | Trap | “Semua siswa sama” — benarkah? |
| 28–38 | Clarify | Tabel kondisi → boleh/tidak |
| 38–48 | Concept | if · else · else if · boolean |
| 48–70 | **Practice coding** | VS Code + `console.log` atau Replit: skor ≥75 lulus, else remidi |
| 70–85 | Practice 2 | Tambah 1 cabang (izin vs tanpa izin) |
| 85–90 | Exit | Screenshot kode + 1 baris alasan |

---

## 5. Lembar kerja / latihan

> Proyeksikan — siswa **prediksi**, jangan copy dulu.

### Snippet A

```javascript
let umur = 16;
if (umur >= 17) {
  console.log("Boleh SIM");
} else {
  console.log("Belum cukup umur");
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "Belum cukup umur" |
| Blok mana tidak jalan? | console.log("Boleh SIM") |

### Snippet B

```javascript
let skor = 75;
if (skor > 75) {
  console.log("A");
} else if (skor >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | "B" (75 tidak > 75, tapi >= 75) |
| Kenapa bukan "A"? | `>` strict lebih besar, bukan sama dengan |

### Snippet C — Bug scope

```javascript
let x = 10;
if (x > 5)
  console.log("besar");
  console.log("selalu muncul");
```

| Pertanyaan | Kunci |
|------------|-------|
| Output jika x = 3? | Hanya "selalu muncul" — baris 3 **di luar** if (no braces trap) |
| Perbaikan? | Pakai `{ }` around kedua console.log |

---

## 6. Exit ticket

1. Screenshot kode + 1 baris alasan
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
