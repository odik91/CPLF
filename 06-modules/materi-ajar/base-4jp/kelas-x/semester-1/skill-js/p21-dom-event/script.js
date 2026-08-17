// DEFINISI
// DOM = representasi elemen halaman yang bisa dibaca JavaScript
// id = alamat unik elemen
// event = kejadian, misalnya click
// listener = kode yang menunggu event
// textContent = teks di dalam elemen

const pesan = document.getElementById("pesan");
const tombolSapa = document.getElementById("tombolSapa");

tombolSapa.addEventListener("click", function () {
  pesan.textContent = "Halo, pesan berubah setelah klik.";
  console.log("Tombol diklik; pesan diperbarui.");
});

// GUIDE: ubah teks awal, pesan setelah klik, atau label tombol
// Batas: satu pesan, satu tombol, satu listener; tanpa form/if/selector kompleks
