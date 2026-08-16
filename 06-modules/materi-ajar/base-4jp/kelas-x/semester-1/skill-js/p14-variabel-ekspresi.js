// X-S1-P14 — Variabel & Ekspresi
// Jalankan: node p14-variabel-ekspresi.js
// Atau salin satu blok ke Console browser.

// DEFINISI
// variabel = nama yang menunjuk nilai
// deklarasi = membuat nama + nilai awal
// assignment = memberi / mengganti nilai dengan =
// const = nama tidak ditugasi ulang
// let = nama boleh ditugasi ulang
// ekspresi = kode yang menghasilkan nilai
// IPO = Input → Process → Output

const namaMenu = "Mie Sehat";
const harga = 12000;
let jumlah = 2;

console.log("=== Input ===");
console.log(namaMenu);
console.log(harga);
console.log(jumlah);

console.log("=== Process & Output ===");
const total = harga * jumlah;
console.log(total);

console.log("=== Update let ===");
jumlah = 3;
console.log(harga * jumlah);

// GUIDE: total di atas tidak berubah otomatis setelah jumlah diganti
// Tantangan 1: buat IPO milikmu (minimal 3 nama jelas)
// Tantangan 2: pakai const sebagai default; let hanya jika nilai berubah
// Tantangan 3: ganti nama buruk (x, y, z) bila masih ada
// Batas: tanpa DOM, form, event, atau if/else
