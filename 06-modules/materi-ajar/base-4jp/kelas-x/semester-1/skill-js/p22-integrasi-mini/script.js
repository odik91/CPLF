// DEFINISI
// Integrasi mini = HTML struktur + CSS tampilan + satu perilaku klik
// textContent = teks yang diuji sebelum/sesudah event

const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Mie Sehat tersedia. Status diperbarui setelah klik.";
  console.log("P22: klik diterima; pesan diperbarui.");
});

// GUIDE: ubah teks awal, teks setelah klik, dan label tombol agar sesuai spek-ac.md
// Batas: satu tombol, satu listener; tanpa form dinamis atau event kedua
