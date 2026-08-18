// DEFINISI
// Fitur 1 = satu listener dari spek yang mengubah textContent elemen

const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});

// GUIDE: ganti "Mie Sehat tersedia." dengan teks target dari spek.md-mu
// Batas: satu listener; tanpa elemen HTML baru; fitur 2 di P27
