// DEFINISI
// DOM = pohon elemen halaman di browser
// querySelector = ambil SATU elemen pertama yang cocok (atau null)
// querySelectorAll = ambil SEMUA yang cocok (NodeList, punya .length)
// getElementById = ambil satu elemen by id — nama TANPA #

// GUIDE: isi prediksi di handout SEBELUM melihat hasil console.log

const area = document.querySelector("#area");
const judul = document.querySelector(".judul");
const itemPertama = document.querySelector(".item");
const semuaItem = document.querySelectorAll(".item");
const catatan = document.getElementById("catatan");

console.log("area:", area);
console.log("judul:", judul && judul.textContent);
console.log("item pertama:", itemPertama && itemPertama.textContent);
console.log("jumlah .item:", semuaItem.length);
console.log("catatan (getElementById):", catatan && catatan.textContent);

// TRAP demo — sengaja: pagar di getElementById biasanya null
const salahPagar = document.getElementById("#area");
console.log("getElementById(\"#area\"):", salahPagar);

// GUIDE: boleh tambah 1 console.log selector lain — tanpa ubah textContent / tanpa event baru
// Batas P01: query + bukti; update aman = P02
