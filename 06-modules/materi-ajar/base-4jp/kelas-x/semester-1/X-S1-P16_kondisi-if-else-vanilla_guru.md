# Materi Ajar Guru — X-S1-P16
## JavaScript Vanilla: Kondisi `if` / `else` (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **16/34** · 180 menit |
| Transformasi | Boolean sebagai hasil cek → Boolean memilih satu tindakan |
| Fokus | kondisi · `if` · `else` · blok · trace · uji batas |
| Dilarang hari ini | `else if` · `&&` · `||` · DOM · event · form |
| Handout | [X-S1-P16_kondisi-if-else-vanilla_siswa.md](./X-S1-P16_kondisi-if-else-vanilla_siswa.md) |
| Bacaan | [X-S1-P16_bacaan-mimi-robi.md](./X-S1-P16_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p16-if-else-vanilla.js](./skill-js/p16-if-else-vanilla.js) |

## Capaian Bloom

| Kode | Level | Bukti |
|---|---|---|
| C1 | Mengingat | Istilah kondisi, blok, cabang |
| C2 | Memahami | Penjelasan `true` → `if`, `false` → `else` |
| C3 | Menerapkan | Program satu `if/else` |
| C4 | Menganalisis | Trace kondisi serta cabang |
| C5 | Mengevaluasi | Uji bawah–tepat–atas batas |
| C6 | Mencipta | Aturan keputusan milik siswa |

## Persiapan

- Node.js atau Console browser; tanpa halaman HTML.  
- File latihan P16 dan papan: **nilai → kondisi → Boolean → cabang → output**.  
- Kartu nilai 74, 75, 76 dan kartu `true` / `false`.  
- Ingatkan aturan komentar: file skill memakai komentar hanya sebagai **DEFINISI** / **GUIDE**.

## Miskonsepsi sasaran

1. Boolean sudah otomatis membuat aksi sebelum ditulis `if/else`.  
2. Kedua blok berjalan sekaligus.  
3. `=` digunakan untuk membandingkan.  
4. “Minimal” memakai `>`.  
5. `else` harus memiliki kondisi kedua.

## Timeline & skrip fasilitasi

### 0–10 · Orientation · C1

Tampilkan ulang fakta P15:

```javascript
const skor = 75;
console.log(skor >= 75);
```

Guru:

> “Kemarin kita hanya mendapat `true`. Hari ini `true` itu membuat program memilih tindakan. Belum ada form atau halaman; kita fokus pada keputusan.”

### 10–30 · Scaffold: role-play · C2

Guru menjadi satpam dengan satu aturan: kartu ada / tidak ada. Tunjuk kartu `true`: masuk; `false`: tunggu. Gambar:

```text
kondisi Boolean
   ├─ true  → blok if
   └─ false → blok else
```

Tekankan: satu orang hanya menempuh satu jalur dalam satu pemeriksaan.

### 30–50 · Experience · C2–C3

```javascript
const skor = 75;
const batasLulus = 75;

if (skor >= batasLulus) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}
```

Anatomikan: kondisi di `()`, blok di `{}`, aksi di dalam blok. Ubah hanya `skor` ke 74, 75, 76; siswa memprediksi sebelum run.

### 50–65 · Trap · C4

```javascript
let skor = 75;
if (skor = 75) {
  console.log("?");
}
```

Tanya: “Apa perubahan pada nilai? Apakah ini tes?” Lalu ubah menjadi kondisi yang sesuai aturan:

```javascript
if (skor >= 75) {
  // block code ....
}
```

Tunjukkan juga kesalahan menyebut `else (skor < 75)`: `else` tidak menerima kondisi.

### 65–85 · Concept · C2

| Bagian | Pertanyaan |
|---|---|
| aturan | Apa yang diuji? |
| kondisi | Ekspresi Boolean apa? |
| `if` | Apa tindakan bila `true`? |
| `else` | Apa tindakan bila `false`? |
| trace | Nilai dan cabang mana yang benar-benar berjalan? |

Jelaskan `else` cocok karena kasus ini punya dua hasil yang saling melengkapi.

### 85–95 · Practice mini · C3–C5

Pasangan mengisi trace skor 74, 75, 76. Wajib menguji nilai tepat pada batas. Diskusikan: “Mengapa 75 adalah tes paling penting?”

### 95–105 · Setup latihan

1. Buka `js-dasar`.  
2. Salin [skill-js/p16-if-else-vanilla.js](./skill-js/p16-if-else-vanilla.js).  
3. Jalankan `node p16-if-else-vanilla.js` atau gunakan Console browser.  
4. Ubah satu nilai per eksperimen dan catat cabang yang aktif.

### 105–120 · I do · C2–C3

```javascript
const stokMie = 4;
const stokMinimum = 5;

if (stokMie < stokMinimum) {
  console.log("Stok menipis");
} else {
  console.log("Stok aman");
}
```

Suarakan trace: “4 < 5 adalah `true`, jadi hanya pesan pertama yang dijalankan.”

### 120–150 · Practice · C3–C6

Siswa selesaikan file latihan dan buat satu aturan keputusan. Syarat:

- satu kondisi saja;  
- dua output yang berbeda;  
- variabel bermakna;  
- bukti untuk nilai bawah, tepat, dan atas batas.

### 150–165 · Peer trace · C4–C5

Pasangan tidak mengubah struktur kode dulu. Mereka menulis prediksi jalur, menjalankan tiga nilai, lalu membandingkan hasil dengan aturan. Feedback harus menyebut aturan/operator, bukan “bagus.”

### 165–180 · Reflect + Exit · C4–C5

Preview:

> “P17 menghadirkan beberapa syarat. Hari ini pastikan satu kondisi dan dua cabang sudah benar.”

## Kunci latihan inti

| Nilai skor | Kondisi `skor >= 75` | Output |
|---|---|---|
| 74 | `false` | Belum lulus |
| 75 | `true` | Lulus |
| 76 | `true` | Lulus |

## Diferensiasi

**Butuh dukungan:** berikan aturan, nama variabel, dan blok; siswa melengkapi operator serta trace.  
**Cepat:** rancang aturan baru dan uji bawah–tepat–atas batas; jangan masuk `else if`, operator logika, atau DOM.

## Asesmen formatif

| Indikator | Belum | Berkembang | Tercapai |
|---|---|---|---|
| Kondisi | Tidak Boolean | Benar tanpa alasan | Tepat + menjelaskan batas |
| Cabang | Satu/dua tidak jelas | Dua cabang ada | Hanya satu berjalan + trace |
| Uji | Satu nilai | Dua nilai | Bawah–tepat–atas |
| Batas materi | Multi-syarat/DOM | Menyebut tetapi tidak pakai | Fokus satu kondisi vanilla |

## Checklist guru

- [ ] Recall Boolean P15  
- [ ] Role-play dua jalur  
- [ ] Trap `=` dan batas minimal  
- [ ] File latihan dijalankan  
- [ ] Kedua cabang diuji  
- [ ] Tanpa DOM/event/form/`&&`/`||`

## KBC

**Ilmu dan keadilan:** keputusan program harus dapat ditelusuri kembali ke aturan dan bukti uji, terutama pada nilai batas.
