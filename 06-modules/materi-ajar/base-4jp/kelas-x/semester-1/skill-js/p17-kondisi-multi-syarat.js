// X-S1-P17 — Kondisi Multi-Syarat
// Jalankan: node p17-kondisi-multi-syarat.js

// DEFINISI
// && = kedua syarat true
// || = minimal satu syarat true
// ! = membalik Boolean

const punyaKartu = true;
const tepatWaktu = false;
const punyaTiket = false;
const punyaUndangan = true;
const sudahLogin = true;

console.log("=== AND ===");
console.log(punyaKartu && tepatWaktu);
if (punyaKartu && tepatWaktu) {
  console.log("Boleh masuk");
} else {
  console.log("Belum boleh masuk");
}

console.log("=== OR ===");
console.log(punyaTiket || punyaUndangan);

console.log("=== NOT ===");
console.log(!sudahLogin);

// GUIDE: uji empat kombinasi punyaKartu dan tepatWaktu
// GUIDE: prediksi subkondisi lalu hasil gabungan
// Batas: tanpa else if, nested condition, DOM, event, atau form
