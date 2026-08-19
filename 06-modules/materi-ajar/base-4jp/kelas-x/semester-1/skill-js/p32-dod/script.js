const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");
const sorotanCadangan = document.getElementById("sorotanCadangan");
const tombolCadangan = document.getElementById("tombolCadangan");

tombolUtama.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia.";
  console.log("Fitur 1: pesan diperbarui.");
});

// Bug 2: target seharusnya sorotanCadangan, bukan pesan
tombolCadangan.addEventListener("click", function () {
  pesan.textContent = "Sorotan cadangan: Es Teh habis lebih dulu.";
  console.log("Fitur 2: teks berubah (salah target).");
});
