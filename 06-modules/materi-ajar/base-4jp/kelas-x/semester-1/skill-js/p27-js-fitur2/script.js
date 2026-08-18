// DEFINISI
// Fitur 2 = listener kedua dari spek, target elemen berbeda dari fitur 1
// regresi = uji ulang fitur 1 setelah listener baru ditambah

const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");
const sorotanCadangan = document.getElementById("sorotanCadangan");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});

tombolCadangan.addEventListener("click", function () {
  sorotanCadangan.textContent = "Sorotan cadangan: Es Teh habis lebih dulu.";
  console.log("Fitur 2: sorotan diganti.");
});

// GUIDE: ganti kedua teks target dari spek.md-mu; jangan kedua listener menulis ke #pesan
// GUIDE: uji klik tombolUtama dulu (regresi), baru tombolCadangan
// Batas: tanpa fitur 3; tanpa CSS baru; jalur B (hanya 1 fitur di spek) = if/else di listener fitur 1, bukan tombol ini
