// X-S1-P15 — Latihan Perbandingan & Boolean
// Jalankan: node p15-perbandingan-boolean.js
// Atau salin satu blok eksperimen ke Console browser.
// Tulis prediksi SEBELUM menjalankan setiap bagian.

const skor = 75;
const batasLulus = 75;
const stokMie = 4;
const stokMinimum = 5;
const namaMenu = "Mie Sehat";
const usia = 17;

console.log("=== Kesamaan dan ketidaksamaan ===");
console.log(skor === batasLulus); // Prediksi: ?
console.log(skor !== 80); // Prediksi: ?
console.log(namaMenu === "Mie Sehat"); // Prediksi: ?
console.log(namaMenu !== "Nasi Goreng"); // Prediksi: ?

console.log("=== Batas angka ===");
console.log(skor >= batasLulus); // Prediksi: ?
console.log(skor > batasLulus); // Prediksi: ?
console.log(stokMie < stokMinimum); // Prediksi: ?
console.log(usia <= 17); // Prediksi: ?

console.log("=== Tipe tetap penting ===");
console.log("75" === 75); // Prediksi: ?
console.log(typeof "75"); // Prediksi: ?
console.log(typeof 75); // Prediksi: ?

// Tantangan 1: ubah skor menjadi 74, 75, lalu 76. Catat hasil skor >= batasLulus.
// Tantangan 2: buat variabel aturan sendiri dan console.log hasil perbandingannya.
// Tantangan 3: jangan memakai if/else hari ini. Kita hanya menghasilkan Boolean.
