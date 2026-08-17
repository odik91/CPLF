// X-S1-P18 — Array & Loop
// Jalankan: node p18-array-loop.js

// DEFINISI
// array = daftar nilai berurutan dalam [ ]
// indeks = posisi elemen; mulai dari 0
// length = banyak elemen
// for = mengulang blok selama syarat true
// iterasi = satu putaran loop

const menus = ["Mie Sehat", "Nasi Goreng", "Es Teh"];
const harga = [12000, 15000, 5000];

console.log("=== Akses array ===");
console.log(menus[0]);
console.log(menus[menus.length - 1]);
console.log(menus.length);

console.log("=== Loop cetak ===");
for (let i = 0; i < menus.length; i = i + 1) {
  console.log(menus[i]);
}

console.log("=== Loop jumlah ===");
let total = 0;
for (let i = 0; i < harga.length; i = i + 1) {
  total = total + harga[i];
}
console.log(total);

// GUIDE: isi tabel trace untuk i = 0, 1, 2
// GUIDE: buat array milikmu (≥3) lalu for untuk mencetak
// Batas: tanpa object, while, forEach/map, DOM, event, atau form
