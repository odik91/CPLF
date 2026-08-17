// X-S1-P20 — File Bug untuk Debugging
// Jalankan satu blok per kali: perbaiki / nonaktifkan blok lain dahulu.

// DEFINISI
// syntax error = program tidak dapat mulai
// reference error = nama tidak ditemukan
// logic error = program jalan, hasil salah

// BUG A — syntax: kurung tutup kurang
// function jumlahkan(a, b) {
//   return a + b;
// console.log(jumlahkan(2, 3));

// BUG B — reference: nama function typo
// function hitungTotal(harga, jumlah) {
//   return harga * jumlah;
// }
// console.log(hitungTottal(12000, 2));

// BUG C — logic: target "Lulus" untuk skor minimal 75
const skor = 75;
if (skor > 75) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}

// GUIDE: aktifkan satu bug; catat pesan, baris, hipotesis, perbaikan, test ulang
// GUIDE: jangan membuka solusi sebelum laporan debug selesai
