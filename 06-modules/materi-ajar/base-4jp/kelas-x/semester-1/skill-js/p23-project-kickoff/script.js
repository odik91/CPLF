// DEFINISI
// Kickoff = spek.md terkunci (masalah, AC, id, DoD). Perilaku diisi P26–P27.
// id yang dikunci: pesan, tombolUtama, sorotanCadangan, tombolCadangan (jalur A)

const pesan = document.getElementById("pesan");
const tombolUtama = document.getElementById("tombolUtama");

// GUIDE: jangan isi textContent hari ini. Kalimat target ada di AC 6 spek.md.
// P26: di dalam listener, pesan.textContent = kalimat AC 6
// P27 jalur A: listener baru pada tombolCadangan menulis ke sorotanCadangan (AC 7)
// P27 jalur B: if/else di listener ini; klik ulang memakai kalimat AC 7 versi B
// Setelah P27: klik tombolUtama lagi harus tetap menepati AC 6 (regresi, AC 8)

tombolUtama.addEventListener("click", function () {
  console.log("P23: kerangka siap. Isi textContent pada P26 sesuai AC 6.");
});
