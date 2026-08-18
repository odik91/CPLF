// DEFINISI
// Demo checkpoint: beberapa AC sengaja gagal agar kelas berlatih temuan + lapisan
// GUIDE: prediksi dulu dari spek.md; jangan salin file ini ke projectmu

const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});

tombolCadangan.addEventListener("click", function () {
  pesan.textContent = "Sorotan cadangan: Es Teh habis lebih dulu.";
  console.log("Fitur 2: teks berubah.");
});

// GUIDE: AC 6–7 gagal karena listener 2 menulis ke #pesan, bukan #sorotanCadangan
// Batas demo: ini bukan solusi project
