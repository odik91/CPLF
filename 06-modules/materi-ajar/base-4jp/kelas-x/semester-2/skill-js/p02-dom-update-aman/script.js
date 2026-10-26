// DEFINISI
// textContent = baca/ubah TEKS biasa (default aman untuk label & pesan)
// innerHTML = baca/ubah isi sebagai HTML (bisa membuat elemen baru)
// Update aman = pilih elemen dulu, lalu textContent

const status = document.querySelector("#status");
const tombolUbah = document.querySelector("#tombolUbah");
const demo = document.querySelector("#demo");
const tombolText = document.querySelector("#tombolText");
const tombolHtml = document.querySelector("#tombolHtml");
const tombolReset = document.querySelector("#tombolReset");

const CONTOH = "<b>Halo</b>";

tombolUbah.addEventListener("click", function () {
  // GUIDE: ganti string ini jadi pesan milikmu
  status.textContent = "Status diperbarui dengan aman.";
  console.log("status sekarang:", status.textContent);
});

tombolText.addEventListener("click", function () {
  demo.textContent = CONTOH;
  console.log("demo textContent → terlihat apa adanya, termasuk tanda < >");
});

tombolHtml.addEventListener("click", function () {
  // TRAP: sama string-nya, beda nasib di layar
  demo.innerHTML = CONTOH;
  console.log("demo innerHTML → browser membuat elemen <b>");
});

tombolReset.addEventListener("click", function () {
  demo.textContent = "Tempat eksperimen string <b>…</b>";
});

// Batas P02: satu status + demo banding; tanpa form / list / framework
// Event dalam (alur panjang) = P03
