# Handout Siswa — X-S2-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P05_js-dom-klik.md](../../../kelas-x/semester-2/X-S2-P05_js-dom-klik.md)

---

## 1. Tujuan pembelajaran

Dari “halaman mati” → **perilaku** lewat DOM + event.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot interaksi
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
