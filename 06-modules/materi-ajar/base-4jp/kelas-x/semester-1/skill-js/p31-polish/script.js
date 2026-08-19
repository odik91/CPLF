// DEFINISI
// Demo polish: JS sengaja tetap jalan agar kelas melihat trap "mouse beres, Tab belum"
// GUIDE: prediksi dari browser + Tab dulu; jangan salin label "KLIK" ke projectmu

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

// GUIDE: id spek jangan diganti saat polish; perbaiki lang, title, teks tombol, :focus
// Batas: ini bukan kunci project
