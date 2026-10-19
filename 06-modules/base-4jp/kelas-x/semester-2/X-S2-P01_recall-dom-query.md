# X-S2-P01 — Recall S1 + DOM & Query

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 |
| Semester | 2 · Pertemuan **1/32** |
| Unit | X2.1 |
| Durasi | **4 JP = 180 menit** · Basis **4JP** |
| CP Merdeka | BK, AP, LD |
| Capability | CX-B1, CX-C2, CX-T1 |
| MM | MM-02 (representasi) · MM-05 (antarmuka berubah) |
| EXP | — (buka artefak S1 milik siswa) |

## Learning Transformation

Dari halaman S1 yang **sudah jadi dokumen** (HTML/CSS + klik kecil) → melihat halaman sebagai **pohon elemen yang bisa dipilih** (`querySelector` / `querySelectorAll`) — tanpa mengulang tag/layout dari nol, tanpa memburu event baru hari ini.

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut outcome S1, DOM, node, `querySelector`, `querySelectorAll` |
| **C2** | Memahami | Menjelaskan beda halaman **statis** vs **hidup**; beda `getElementById` vs `querySelector` |
| **C3** | Menerapkan | Memilih elemen dengan selector CSS-like dan mencatat hasil di konsol |
| **C4** | Menganalisis | Memprediksi node mana yang terpilih; mendiagnosis `null` / NodeList kosong |
| **C5** | Mengevaluasi | Memilih 1–2 hal di project S1 yang **tidak** bisa berubah tanpa ganti HTML |
| **C6** | Mencipta | Lembar prediksi + bukti konsol milik sendiri pada halaman latihan |

**Fokus utama hari ini:** C2–C4 · **Puncak praktik:** C3–C5 · update DOM / event lanjut → **P02–P03**

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–15 | **Orientation** | C1–C2 | Compass S2 · tema “halaman hidup” · rule: satu fokus | Bukan ulangi HTML dari nol |
| 15–35 | **Recall S1** | C1–C5 | Sticky: 3 jejak S1 + 1 hal yang **tidak** bisa tanpa edit HTML | Artefak S1 dibuka |
| 35–55 | Hook + Experience | C2–C4 | Diorama: dokumen vs pohon · prediksi “node mana?” | |
| 55–70 | Trap + Clarify | C4 | `#` di `getElementById` · `querySelector` tanpa `#` untuk id · NodeList ≠ array penuh | |
| 70–90 | Concept | C2 | DOM · selector · `querySelector` / `All` · kapan `getElementById` tetap cukup | |
| 90–105 | **Scaffold praktik** | C2–C3 | I do: buka latihan · log `textContent` / `length` | Script akhir body |
| 105–160 | **Practice** | C3–C6 | Prediksi → query → bukti konsol · isi lembar | Tanpa event baru wajib |
| 160–180 | Reflect + Exit | C4–C5 | Satu batas S2 minggu ini · preview P02 update aman | |

**Adaptasi ketat:** jangan potong Practice — potong Hook. Jika tanpa project S1: pakai halaman latihan saja + 1 contoh guru.

**Rujukan:** [Indeks S2](./X-S2_Index.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [S1 P21 DOM klik](../semester-1/X-S1-P21_dom-event-pertama.md)

---

## Batas hari ini

**Ya:** recall S1 · membaca pohon · `querySelector` / `querySelectorAll` · prediksi + bukti konsol  
**Tidak:** `innerHTML` / update teks sebagai materi utama (→ P02) · event baru wajib · form/validasi · framework · ulangi CSS layout

`getElementById` boleh dipakai sebagai **jembatan recall** (sudah S1), lalu dibandingkan dengan `querySelector`.

---

## Konsep inti

| Istilah | Arti |
|---------|------|
| Halaman statis | Isi berubah hanya jika HTML/CSS diedit (kecuali interaksi kecil yang sudah di-spek) |
| Halaman hidup | Tampilan bisa berubah karena JS memilih & mengubah node di DOM |
| DOM | Representasi pohon elemen halaman di memori browser |
| Node | Satu “titik” di pohon (mis. sebuah `p`, `button`, `li`) |
| Selector | Pola pencarian ala CSS: `#id`, `.kelas`, `tag`, kombinasi sederhana |
| `querySelector` | Mengambil **satu** elemen pertama yang cocok (atau `null`) |
| `querySelectorAll` | Mengambil **semua** yang cocok → NodeList (punya `.length`, di-loop) |

```html
<main id="area">
  <h1 class="judul">Papan pengumuman</h1>
  <p class="item">Satu</p>
  <p class="item">Dua</p>
  <p class="item">Tiga</p>
</main>
```

```javascript
const area = document.querySelector("#area");
const judul = document.querySelector(".judul");
const itemPertama = document.querySelector(".item");
const semuaItem = document.querySelectorAll(".item");

console.log(area);
console.log(judul.textContent);
console.log(itemPertama.textContent); // prediksi: "Satu"
console.log(semuaItem.length); // prediksi: 3
```

---

## Setup latihan

1. Salin folder [skill-js/p01-recall-dom-query/](../../../materi-ajar/base-4jp/kelas-x/semester-2/skill-js/p01-recall-dom-query/).  
2. Buka `index.html` di browser · F12 → Console.  
3. Isi lembar prediksi **sebelum** menjalankan / membaca hasil.  
4. Bandingkan prediksi vs `console.log`.  
5. Komentar di JS hanya DEFINISI / GUIDE.

Opsional: buka project S1 — tulis 1 kalimat “yang tidak bisa berubah tanpa edit HTML”.

---

## Cognitive Trap

**Asumsi:** “S2 = ulangi HTML/CSS” atau “langsung banyak tombol interaktif.”  
**Aman:** Puji jejak S1; arahkan ke **memilih node dengan sadar**. Challenge: selector yang “kira-kira” tanpa prediksi.

Trap teknis:
- `getElementById("#pesan")` → `null` (pagar untuk CSS / `querySelector`)  
- `querySelector(".item")` hanya **pertama** — bukan semua  
- NodeList punya `.length`, tapi bukan semua method array modern tanpa konversi  

---

## Guiding Questions

1. Apa di project S1 yang tetap “mati” sampai HTML diganti?  
2. Apa beda hasil `querySelector(".item")` vs `querySelectorAll(".item")`?  
3. Kapan `getElementById` masih pilihan paling jujur?

---

## Props / Fallback

- Browser + DevTools · artefak S1 (jika ada) · lembar prediksi  
- Offline: cetak HTML latihan · prediksi di kertas · demo guru di proyektor  

---

## Exit Ticket

1. Satu jejak S1 yang kubawa + satu hal yang **belum** bisa tanpa ganti HTML  
2. Tulis selector untuk: judul dengan class `judul` · semua `.item`  
3. Prediksi: `querySelector(".item").textContent` pada halaman latihan = ?

---

## Formatif (rubrik)

Fokus: **OBS**, **REA**, **TEC** — [09_Rubrik_Formatif_Unit.md](../../../09-rubrik/09_Rubrik_Formatif_Unit.md)

---

## Kriteria penerimaan

- [ ] Dapat menyebut beda statis vs hidup (1 kalimat jujur)  
- [ ] Memakai `querySelector` dan `querySelectorAll` pada halaman latihan  
- [ ] Prediksi tertulis sebelum bukti konsol  
- [ ] Menjelaskan 1 penyebab `null` / length 0  
- [ ] Tanpa update DOM sebagai fitur hari ini · tanpa event baru wajib · tanpa framework  

---

## Catatan Guru

Ini pembuka S2 digabung: **recall + query**. Jangan memotong Practice demi “langsung event”. Event dalam (P03+) butuh kebiasaan memilih node dulu. Script di akhir `body`.
