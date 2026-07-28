# Materi Guru Lengkap — X-S2-P05
**Modul:** [X-S2-P05_js-dom-klik.md](../../kelas-x/semester-2/X-S2-P05_js-dom-klik.md)
**Materi pendukung sumber:** [X-S2-P05_js-dom-klik.md](../../materi-pendukung/materi-pendukung/kelas-x/semester-2/X-S2-P05_js-dom-klik.md)

---
## A. Modul pertemuan (referensi)

# X-S2-P05 — JavaScript & DOM (Klik)

| Field | Isi |
|-------|-----|
| Kode | X-S2-P05 |
| Unit | X2.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CX-T2, CX-T3 |

## Learning Transformation

Dari “halaman mati” → **perilaku** lewat DOM + event.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Halaman P04 — klik tombol tidak ada — frustrasi? |
| 5–15 | Experience | Remote TV tanpa baterai (metafora input tidak memicu proses) |
| 15–25 | Trap | HTML statis tidak “merespons” |
| 25–35 | Clarify | JS menghubungkan aksi user ↔ perubahan halaman |
| 35–45 | Concept | `<script>` · `querySelector` · `addEventListener('click')` |
| 45–70 | Practice | Tombol ubah teks / warna background |
| 70–85 | Debug | 1 bug selector salah — latih console |
| 85–90 | Exit | Screenshot interaksi |

---

## Starter

```html
<button id="btn">Klik</button>
<p id="out">...</p>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("out").textContent = "Halo MA!";
  });
</script>
```

---

## Formatif

**TEC**, **OBS**

---

## Catatan Guru

Pastikan file HTML+JS satu folder; live server VS Code.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S2-P05 JavaScript & DOM (Klik)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S2-P05 |
| Modul pertemuan | [X-S2-P05_js-dom-klik.md](../../../kelas-x/semester-2/X-S2-P05_js-dom-klik.md) |
| Unit | X2.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T2, CX-T3 |
| Formatif | TEC, OBS |
| Ada live code? | **Ya — JS DOM PERTAMA** (HTML + `<script>` live, file kosong) |

---

## Pengetahuan Guru

**Halaman P04 cantik tapi mati** — klik tidak ada respon. Hari ini: **JavaScript menghubungkan aksi user ↔ perubahan halaman** via DOM.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **DOM** | Document Object Model — representasi HTML di memory; JS bisa baca/ubah |
| `<script>` | JS di halaman — **di akhir `<body>`** (best practice: HTML sudah load) |
| `document.querySelector('#id')` | Ambil **satu** elemen pertama yang cocok selector CSS |
| `#id` | ID unik — `<button id="btnSalam">` |
| `.addEventListener('click', fn)` | Pasang listener — fn jalan saat event click |
| **Callback function** | Fungsi yang **dipanggil nanti** saat event — bukan langsung saat baris ditulis |
| `textContent` | Ubah teks elemen (aman XSS vs innerHTML untuk pemula) |
| `style.backgroundColor` | Ubah CSS inline via JS — camelCase |
| **Console** | `console.log` + error selector — alat debug P13 spiral |

**Metafora:** Remote TV tanpa baterai — HTML ada, tapi **input tidak memicu proses**.

**Prasyarat S1 + P04:** variabel, function arrow/basic, if — hari ini di **browser**, bukan Node.

**PENTING — starter modul:** blok HTML+JS di modul pertemuan **hanya referensi guru**. **JANGAN** kirim file starter ke siswa — bangun bareng dari HTML kosong/minimal.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "1 perbaikan UX P04 + alasan?" | (kontras, flex nav, spacing — siswa spesifik) |
| "Halaman cantik tapi tombol tidak jalan — kenapa?" | Belum ada JS / event handler |
| "JS S1 jalan di mana?" | Terminal/Node — hari ini di **browser** + DOM |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Guru ketik HTML **dan** JS live — bukan paste starter modul |
| **Live coding** | File **`index.html` kosong** atau strip interaksi — bangun button + script bareng |
| **Per baris / scope** | `<script>` scope global halaman; callback scope saat click |
| **Recall** | Demo klik halaman P04 — frustrasi → jembatan JS |
| **Membaca kode** | Snippet JS proyeksi — prediksi sebelum refresh browser |
| **No starter file** | **Larangan keras:** modul punya starter — **jangan distribusi**; siswa ikut ketik dari nol |

---

## Materi Inti

### Transformasi

**Dari:** Halaman statis / mati  
**Ke:** Perilaku — user klik → halaman **update**

### Alur konsep

1. HTML: elemen dengan `id` — target DOM
2. JS: `querySelector` → simpan referensi (opsional `const btn = ...`)
3. `addEventListener('click', () => { ... })` — hubungkan aksi
4. Di callback: ubah `textContent` / `style`

### Syntax inti (target akhir live coding)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Interaksi Pertama</title>
</head>
<body>
  <h1>Halo MA</h1>
  <button id="btnSalam">Klik saya</button>
  <p id="pesan">Belum ada interaksi.</p>

  <script>
    const tombol = document.querySelector("#btnSalam");
    const paragraf = document.querySelector("#pesan");

    tombol.addEventListener("click", function () {
      paragraf.textContent = "Halo dari JavaScript!";
      paragraf.style.backgroundColor = "#fef3c7";
    });
  </script>
</body>
</html>
```

- `const` — referensi DOM tidak diganti
- Function biasa atau arrow — konsisten dengan S1
- `querySelector("#btnSalam")` — `#` = id (sama CSS)

### Debug selector salah (70–85 menit)

- Typo id: `#btnSalam` vs `#btn_salam` → `null` → error saat addEventListener
- Buka DevTools Console — baca error bareng
- `console.log(tombol)` sebelum listener — cek null

### Environment

- Live Server **wajib** — refresh setelah edit
- Satu folder — `index.html` saja cukup hari ini

---

## Alur Live Coding

> **Mulai dari file KOSONG atau HTML tanpa script.** Jangan beri starter lengkap dari modul.

### Persiapan

- Live Server aktif
- Console browser terbuka (F12)
- **Tidak boleh ada di laptop siswa:** HTML+JS lengkap dari WA/modul

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening 0–35 menit]
Buka halaman P04 — klik nav/button (jika ada) — tidak ada efek
Metafora remote tanpa baterai
Recall UX P04 + JS S1 di terminal vs browser

[LANGKAH 1 — HTML minimal live]
File kosong → skeleton singkat:
<!DOCTYPE html>, html, head (charset, title), body
Ketik: <h1>Halaman Interaktif MA</h1>
Ketik: <button id="btnSalam">Klik saya</button>
Ketik: <p id="pesan">Belum ada interaksi.</p>
Ucapkan: "Id = hook untuk JS — seperti label di gudang."
Tanya: "Kenapa id unik? Duplikat id = querySelector bingung."
Preview — tombol ada, klik belum apa-apa (normal)

[LANGKAH 2 — Buka script]
Sebelum </body>:
Ketik: <script>
Ucapkan: "Script di akhir body — HTML sudah ada saat JS jalan."
Scope: isi script = JavaScript, bukan teks halaman.

[LANGKAH 3 — querySelector]
Ketik: const tombol = document.querySelector("#btnSalam");
Ketik: const paragraf = document.querySelector("#pesan");
Ucapkan: "document = halaman ini. querySelector = cari elemen pakai selector CSS."
Tanya: "#btnSalam artinya apa di CSS?"
Scope: const di script global — bisa dipakai listener nanti.
Opsional: console.log(tombol) — refresh — lihat object di console

[LANGKAH 4 — addEventListener]
Ketik: tombol.addEventListener("click", function () {
Ucapkan: "Listener = daftar: kalau diklik, jalankan function ini."
Tanya: "Function jalan sekarang atau nanti?"
Scope: callback function — baris di dalam {} jalan saat click, bukan saat load.

[LANGKAH 5 — Ubah DOM]
Di dalam callback (indent):
Ketik:   paragraf.textContent = "Halo dari JavaScript!";
Ketik:   paragraf.style.backgroundColor = "#fef3c7";
Ketik: });
Ucapkan: "textContent ganti teks. style.backgroundColor = CSS camelCase."
Refresh — klik tombol — celebrasi interaksi pertama

[LANGKAH 6 — Ubah data, struktur sama]
Ubah string teks live — klik lagi
Ucapkan: "Struktur listener sama — isi callback bisa berubah."

[LANGKAH 7 — Bug selector sengaja 70–85 menit]
Ganti #btnSalam → #btn_salah — refresh — klik — error console
Baca error bareng: "Cannot read properties of null"
Perbaiki id — demo debugging OBS

[LANGKAH 8 — Exit 85–90]
Screenshot interaksi + 1 kalimat: "Apa itu DOM?"
```

---

## Latihan Membaca Kode

> Proyeksikan — prediksi perilaku, jangan copy.

### Snippet A — Urutan eksekusi

```html
<button id="x">Klik</button>
<p id="y">A</p>
<script>
  document.querySelector("#x").addEventListener("click", function () {
    document.querySelector("#y").textContent = "B";
  });
  document.querySelector("#y").textContent = "C";
</script>
```

| Pertanyaan | Kunci |
|------------|-------|
| Teks awal #y? | "C" — baris bawah script jalan saat load |
| Setelah klik? | "B" — callback mengganti |

### Snippet B — Selector salah

```javascript
const btn = document.querySelector("#tombol");
btn.addEventListener("click", function () {
  console.log("klik");
});
```

```html
<button id="tombol-salah">Klik</button>
```

| Pertanyaan | Kunci |
|------------|-------|
| Saat load? | Error — btn null |
| Perbaikan? | Samakan id HTML & selector |

### Snippet C — Arrow function (setara)

```javascript
btn.addEventListener("click", () => {
  out.textContent = "Halo MA!";
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Kapan "Halo MA!" muncul? | Saat click — bukan saat parse script |
| Beda dengan console.log di luar listener? | Luar = sekali load; dalam = per click |

---

## Praktik Mandiri Siswa

1. **Versi sendiri** — tombol ubah teks **dan** satu style (warna/fontSize)
2. Min **2 id** berbeda — button + target output
3. Variasi teks tema MA (kegiatan, salam, motivasi)
4. Sengaja buat 1 bug selector → perbaiki pakai console
5. **Tidak boleh:** copy file starter modul atau guru

**Extension:** tombol kedua reset teks ke semula — foreshadow P06 state.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| `<script>` di head tanpa defer — elemen belum ada | Script sebelum `</body>` |
| `getElementById("btnSalam")` vs querySelector — OK tapi konsisten | Pilih satu gaya kelas |
| Lupa `#` di querySelector id | Returns null |
| `addEventListener("click", ubah())` — panggil langsung | Pass function, bukan hasil panggil |
| Copy starter modul — tidak paham callback | File kosong wajib |
| Guru kirim index.html lengkap WA | Etika CPLF — bangun live |

---

## Rujukan

- Modul: [X-S2-P05](../../../kelas-x/semester-2/X-S2-P05_js-dom-klik.md)
- Sebelum: [P04 CSS Hierarki](./X-S2-P04_css-hierarki.md)
- Lanjut: [P06 Event Interaksi](./X-S2-P06_event-interaksi.md)
- S1 spiral: [P09 Satpam JS](../semester-1/X-S1-P09_satpam-js-kondisi.md)
- CX-T2, CX-T3
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] HTML + JS dari **bangun bareng** — bukan starter distribusi
- [ ] TTS querySelector + callback scope
- [ ] Siswa klik & lihat perubahan DOM
- [ ] Debug 1 error selector di console
- [ ] Latihan baca snippet — prediksi tanpa copy
- [ ] Recall halaman mati P04
- [ ] Exit: screenshot + 1 kalimat DOM

[← Indeks materi X-S2](./X-S2_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [00_Panduan_Etika_Penyampaian.md](../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
