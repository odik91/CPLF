// X-S1-P16 — Kondisi if / else Vanilla
// Jalankan: node p16-if-else-vanilla.js
// Atau salin satu blok ke Console browser.

// DEFINISI
// kondisi = ekspresi yang menghasilkan true / false
// if = jalur saat kondisi true
// else = jalur saat kondisi false
// blok = perintah di dalam { }
// trace = menelusuri nilai → kondisi → cabang → output

const skor = 75;
const batasLulus = 75;

console.log("=== Kelulusan ===");
if (skor >= batasLulus) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}

const stokMie = 4;
const stokMinimum = 5;

console.log("=== Stok ===");
if (stokMie < stokMinimum) {
  console.log("Stok menipis");
} else {
  console.log("Stok aman");
}

// GUIDE: ubah skor menjadi 74, 75, lalu 76; prediksi cabang sebelum menjalankan
// GUIDE: ubah stokMie menjadi 4, 5, lalu 6; catat cabang yang aktif
// Tantangan: buat satu aturan dengan satu kondisi dan dua output bermakna
// Batas: tanpa else if, &&, ||, DOM, event, atau form
