# X-S1-P16 — JavaScript Vanilla: Kondisi `if` / `else`

| Field | Isi |
|---|---|
| Kode | X-S1-P16 |
| Basis | **4JP** · Pertemuan **16/34** |
| Unit | X1.4 (fondasi JavaScript) |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Tanpa DOM, event, form, serta `&&` / `||`** |

## Learning Transformation

Dari “Boolean hanya laporan `true` / `false`” → “Boolean menjadi syarat yang membuat program memilih **satu** dari dua tindakan eksplisit.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut `if`, `else`, kondisi, blok, dan cabang |
| **C2** | Memahami | Menjelaskan satu kondisi menghasilkan salah satu dari dua jalur |
| **C3** | Menerapkan | Menulis `if/else` dengan ekspresi Boolean dan `console.log` |
| **C4** | Menganalisis | Menelusuri jalur program serta menemukan kondisi/batas keliru |
| **C5** | Mengevaluasi | Menguji kedua cabang tepat di sekitar nilai batas |
| **C6** | Mencipta | Menyusun program keputusan satu syarat dari aturan nyata |

**Fokus:** C2–C4 · **Puncak:** C3–C5 · multi-syarat + `&&` / `||` → **P17**

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P15: Boolean = fakta; hari ini fakta dipakai memilih aksi |
| 10–30 | Scaffold | C2 | Role-play satpam: kondisi → jalur YA / TIDAK |
| 30–50 | Experience | C2–C3 | `if/else` dan blok kurung kurawal di konsol |
| 50–65 | Trap | C4 | `=` vs `===`, batas `>` vs `>=`, `else` tak berpasangan |
| 65–85 | Concept | C2 | Kondisi, cabang, blok, eksekusi satu jalur |
| 85–95 | Practice mini | C3–C5 | Trace skor 74, 75, 76 |
| 95–105 | Transisi | — | Setup `skill-js/p16-if-else-vanilla.js` |
| 105–120 | Scaffold praktik | C2–C3 | I do: stok menipis / kelulusan |
| 120–165 | Practice | C3–C6 | Latihan file + aturan keputusan milik siswa |
| 165–180 | Reflect + Exit | C4–C5 | Uji dua cabang · preview multi-syarat P17 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Banyak kondisi sekaligus | Satu ekspresi Boolean |
| Validasi form/DOM | Variabel tersedia di kode |
| `if` tanpa `else` saat aturan punya dua hasil | Dua cabang lengkap dan dapat diuji |
| Menjalankan kedua blok | Hanya satu cabang berjalan per eksekusi |

## Konsep inti

| Istilah | Arti |
|---|---|
| **Kondisi** | Ekspresi Boolean yang dicek |
| **`if`** | Jalur bila kondisi `true` |
| **`else`** | Jalur bila kondisi `false` |
| **Cabang** | Salah satu jalur program |
| **Blok** | Perintah di dalam `{ }` |
| **Trace** | Menelusuri nilai, kondisi, dan jalur yang berjalan |

```javascript
const skor = 75;
const batasLulus = 75;

if (skor >= batasLulus) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}
```

## Setup proyek & latihan

1. Buka folder `js-dasar`.  
2. Salin [skill-js/p16-if-else-vanilla.js](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p16-if-else-vanilla.js).  
3. Jalankan `node p16-if-else-vanilla.js` atau Console browser.  
4. Ubah satu nilai, prediksi cabang, jalankan, lalu catat bukti.  
5. Komentar file skill hanya **DEFINISI** / **GUIDE**; jangan menambah komentar yang tidak diperlukan.

## Cognitive Trap

- `if (skor = 75)` memberi nilai, bukan membandingkan.  
- “Minimal 75” memakai `>=`, bukan `>`.  
- `else` tidak perlu kondisi baru; ia adalah jalur ketika kondisi `if` bernilai `false`.  
- Dua pesan boleh terlihat di kode, tetapi satu eksekusi hanya menjalankan satu cabang.

## Guiding Questions

1. Aturan manusia apa yang akan diterjemahkan?  
2. Kondisi Boolean apa yang menguji aturan itu?  
3. Jika `true`, apa outputnya? Jika `false`, apa outputnya?  
4. Nilai batas mana yang wajib diuji?  
5. Apakah ada tepat satu kondisi? Jika lebih, simpan untuk P17.

## Kriteria penerimaan

- [ ] Menjalankan `p16-if-else-vanilla.js`  
- [ ] Menulis satu kondisi Boolean memakai variabel jelas  
- [ ] Kedua cabang memiliki output yang berbeda dan bermakna  
- [ ] Men-trace nilai, hasil kondisi, serta cabang aktif  
- [ ] Menguji nilai bawah–tepat–atas batas  
- [ ] Tanpa DOM, event, form, `&&`, atau `||`

## Exit Ticket

1. Pada `skor = 75`, cabang mana yang berjalan untuk `skor >= 75`?  
2. Perbaiki `if (skor = 75)`.  
3. Dua nilai lain untuk menguji aturan “minimal 75”.  
4. Mengapa satu eksekusi tidak menjalankan kedua cabang?

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Mengevaluasi · C5** — nilai berdasarkan ketepatan aturan, trace, dan bukti dua cabang.

## Catatan Guru

Jangan memakai form atau halaman dulu. Pertahankan satu syarat agar masalahnya adalah percabangan, bukan input/DOM atau logika gabungan. `&&` dan `||` adalah materi P17.
