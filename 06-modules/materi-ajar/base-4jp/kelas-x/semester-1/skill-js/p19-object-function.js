// X-S1-P19 — Object & Function
// Jalankan: node p19-object-function.js

// DEFINISI
// object = satu data dengan properti bernama
// properti = label + nilai dalam object
// function = proses bernama yang dipanggil dengan ()
// parameter = nama input di definisi function
// argumen = nilai saat function dipanggil
// return = hasil yang dikirim keluar function

const produk = {
  nama: "Mie Sehat",
  harga: 12000,
  tersedia: true
};

console.log("=== Object ===");
console.log(produk.nama);
console.log(produk.harga);
console.log(produk.tersedia);

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

console.log("=== Function ===");
console.log(hitungTotal(produk.harga, 2));
console.log(hitungTotal(15000, 3));

// GUIDE: buat object datar dengan minimal 3 properti
// GUIDE: trace argumen → parameter → return untuk satu panggilan
// Batas: tanpa DOM, nested object, method, callback, atau object sebagai parameter
