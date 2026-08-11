# Handout Siswa — X-S1-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **13/34**

**Modul:** [X-S1-P13_js-di-browser.md](../../../base-4jp/kelas-x/semester-1/X-S1-P13_js-di-browser.md)

**Bacaan:** [X-S1-P13_bacaan-mimi-robi.md](./X-S1-P13_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “halaman teks mati” → “**JavaScript** membuat halaman **bereaksi** — mulai dari **konsol** dan ubah teks **satu** elemen.”

Pembuka **Blok 3**. Fondasi static Blok 2 tetap dijaga.

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut JS, `<script>`, konsol, target `id` |
| **C2** | Memahami | Menjelaskan HTML/CSS/JS; jangan buang semantik |
| **C3** | Menerapkan | `console.log` + ubah teks 1 elemen (klik) |
| **C4** | Menganalisis | Menemukan salah `id` / posisi script / typo |
| **C5** | Mengevaluasi | Bukti konsol + perubahan terlihat |
| **C6** | Mencipta | Interaksi mini yang bisa dijelaskan |

**Fokus utama:** C2–C3 · **Puncak:** C3–C5 · Kondisi → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **JavaScript (JS)** | Bahasa perilaku di browser |
| **`<script>`** | Tempat kode JS |
| **Konsol** | Panel untuk pesan & error JS |
| **`console.log`** | Cetak bukti ke konsol |
| **Menarget elemen** | Pilih 1 bagian lewat `id` |
| **`textContent`** | Isi teks elemen |
| **Klik** | Pemicu skrip jalan |

### Peran tiga bahasa

| Bahasa | Peran |
|--------|--------|
| HTML | Struktur |
| CSS | Tampilan |
| JS | Perilaku |

### Trap hari ini

- Paste skrip panjang tanpa bisa jelaskan  
- `id` di HTML ≠ di JS  
- `<script>` jalan sebelum elemen ada  
- Membongkar semantik “biar interaktif”  

---

## 3. Alur (180 menit)

```text
Orientation → Buka konsol + console.log
  → Trap
  → Concept: pilih elemen → ubah teks
  → Rencana kertas → Build interaksi mini → peer → Exit
```

---

## 4. Rencana (kertas dulu)

| `id` elemen | Teks lama | Teks baru | Pemicu |
|-------------|-----------|-----------|--------|
| | | | |

---

## 5. Kriteria penerimaan

- [ ] Ada `<script>` di halaman  
- [ ] `console.log` terlihat di konsol  
- [ ] Satu elemen berubah teks karena JS  
- [ ] Bisa jelaskan ≥3 baris skrip  
- [ ] Semantik/CSS Blok 2 tetap dihormati  

---

## 6. Kerangka

```html
<p id="pesan">Halo, halaman masih tenang.</p>
<button id="tombol" type="button">Ubah teks</button>

<script>
  console.log("Skrip termuat.");
  const tombol = document.getElementById("tombol");
  const pesan = document.getElementById("pesan");
  tombol.addEventListener("click", function () {
    pesan.textContent = "Halo — halaman bereaksi!";
    console.log("Teks diganti.");
  });
</script>
```

**Belum:** if/else (P14) · validasi form penuh · framework · DOM rumit.

**Tips:** taruh `<script>` **setelah** elemen yang ditarget. Cocokkan `id` huruf per huruf.

---

## 7. Exit ticket

1. JS vs HTML vs CSS: …  
2. Pesan konsol yang kutangkap: …  
3. Penyebab “tidak bereaksi” yang kuhindari: …

## 8. Preview P14

Kondisi (`if` / `else`) — keputusan “boleh / tidak” di halaman (satpam).

---

_Bukti di konsol. Satu elemen. Bisa dijelaskan. Bukan paste buta._
