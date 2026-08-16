# Bacaan Pendamping — X-S1-P16
## Mimi & Robi: Satpam Akhirnya Bekerja, Dua Jalur Bukan Dua-Duanya, & Nilai 75 yang Menuntut Keadilan

| Field | Isi |
|---|---|
| Kode | X-S1-P16 — Kondisi `if` / `else` Vanilla |
| Pertemuan | **16 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |
| Nada | POV Mimi · humor · plot twist |

**Handout:** [X-S1-P16_kondisi-if-else-vanilla_siswa.md](./X-S1-P16_kondisi-if-else-vanilla_siswa.md)  
**Latihan:** [p16-if-else-vanilla.js](./skill-js/p16-if-else-vanilla.js)

---

Halo. Mimi.

P15 membuat Robi sangat bangga karena konsolnya berkata:

```javascript
true
```

Lalu ia menunggu sesuatu terjadi.

Tidak ada.

> “Boolean tidak punya inisiatif,” kataku. “Dia hanya memberi laporan. Hari ini kita memberi laporan itu dua jalur.”

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | `true` memilih blok `if`; `false` memilih blok `else` |
| Bahan | Variabel + perbandingan Boolean |
| Bukan | DOM, form, atau banyak syarat |

## Adegan 1 — satpam akhirnya mendapat tugas

Aturannya sederhana: skor minimal 75.

```javascript
const skor = 75;

if (skor >= 75) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}
```

Robi membaca kedua pesan itu.

> “Berarti konsol menulis ‘Lulus’ dan ‘Belum lulus’ sekaligus?”

Aku menunjuk jalan bercabang di papan.

> “Satu orang, satu pemeriksaan, satu jalur. Kalau dua-duanya jalan, itu bukan satpam. Itu panitia yang lupa rapat.”

## Plot twist #1 — angka 75 tersingkir

Robi menulis:

```javascript
if (skor > 75) {
```

Skor 75 masuk `else`.

> “Waduh, aturannya kejam.”

> “Aturannya bukan kejam. Kamu menulis **lebih dari**, padahal kalimatnya **minimal**.”

Satu garis tambahan:

```javascript
skor >= 75
```

Dan 75 kembali punya kursi. Pelajaran hari ini: kode pendek tetap bisa memengaruhi orang; uji nilai di bawah, tepat pada, dan di atas batas.

## Plot twist #2 — Robi mengganti identitasnya sendiri

```javascript
let skor = 75;

if (skor = 75) {
  console.log("Lulus");
}
```

Robi mengira ia bertanya “Apakah skornya 75?”

Ternyata ia mengisi skor menjadi 75. Satpamnya tidak mengecek kartu, hanya membagikan kartu baru kepada semua orang.

> “`=` memberi nilai. Kondisi butuh hasil Boolean. Gunakan operator perbandingan P15.”

## Concept

| Bagian | Makna manusia |
|---|---|
| kondisi | pertanyaan yang jawabannya `true` / `false` |
| `if` | lakukan ini jika jawabannya `true` |
| `else` | lakukan ini jika jawabannya `false` |
| blok `{ }` | kumpulan perintah untuk satu jalur |

Robi lalu melakukan **trace**:

```text
skor = 74
74 >= 75 → false
jalur else → "Belum lulus"
```

Tidak ada telepati. Hanya langkah eksplisit, seperti Robot Mie P06.

## Reflect

Sekarang Boolean bukan lagi laporan yang menunggu. Ia sudah menjadi pemeriksaan yang memilih aksi.

Tapi santai. P17 baru menghadirkan beberapa syarat. Hari ini satu aturan dan dua jalur harus bersih dulu.

## Exit

1. Mengapa 75 harus diuji?  
2. Beda `=` dan `===`?  
3. Mengapa satu run tidak menjalankan dua cabang?

> **Aturan yang jujur perlu kondisi yang tepat, dua jalur yang jelas, dan bukti uji untuk keduanya.**

— **Mimi** 🐾  
*(Robi sekarang menyebut `else` “jalur cadangan,” lalu Mimi mengingatkan: itu bukan jalur kalah, hanya hasil aturan yang berbeda.)*
