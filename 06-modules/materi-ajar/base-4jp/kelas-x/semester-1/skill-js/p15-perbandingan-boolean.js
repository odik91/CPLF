// X-S1-P15 — Perbandingan & Boolean
// Jalankan: node p15-perbandingan-boolean.js
// Atau salin satu blok ke Console browser.

// DEFINISI
// Boolean = true / false
// operand = nilai kiri / kanan yang dibandingkan
// === = sama nilai dan tipe
// !== = tidak sama nilai atau tipe
// >= / <= = lebih besar/kecil atau sama dengan
// ekspresi Boolean = kode yang menghasilkan true / false

const skor = 75;
const batasLulus = 75;
const stokMie = 4;
const stokMinimum = 5;
const namaMenu = "Mie Sehat";
const usia = 17;

console.log("=== Kesamaan ===");
console.log(skor === batasLulus);
console.log(skor !== 80);
console.log(namaMenu === "Mie Sehat");
console.log(namaMenu !== "Nasi Goreng");

console.log("=== Batas angka ===");
console.log(skor >= batasLulus);
console.log(skor > batasLulus);
console.log(stokMie < stokMinimum);
console.log(usia <= 17);

console.log("=== Tipe tetap penting ===");
console.log("75" === 75);
console.log(typeof "75");
console.log(typeof 75);

// GUIDE: prediksi dulu; uji skor 74, 75, lalu 76 untuk skor >= batasLulus
// Tantangan: buat 1 aturan milikmu lalu console.log hasil perbandingannya
// Batas: tanpa if/else, DOM, event, atau form
