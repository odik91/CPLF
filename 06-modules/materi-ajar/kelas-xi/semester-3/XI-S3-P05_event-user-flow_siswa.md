# Handout Siswa — XI-S3-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P05_event-user-flow.md](../../../kelas-xi/semester-3/XI-S3-P05_event-user-flow.md)

---

## 1. Tujuan pembelajaran

Dari event “ajaib” → **model alur** pengguna yang bisa dijelaskan.

---

## 2. Ringkasan konsep

**Dari event "ajaib" → model alur pengguna yang bisa dijelaskan.** Hubungkan blueprint P02 state diagram ke **urutan keputusan** di kode.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **User flow** | Urutan keputusan user — **bukan** daftar tombol |
| **`submit` event** | Form dikirim — default browser reload halaman |
| **`event.preventDefault()`** | Intercept submit — validasi JS dulu (spiral X-S2-P07/P08) |
| **Validasi → feedback UI** | Pesan error di DOM — field mana salah |
| **Flow vs handler** | Sebelum kode: gambar 3–5 kotak alur — baru addEventListener |
| **Data kotor** | Handler tanpa validasi = state corrupt |

**Metafora antre peminjaman buku:** titik putus — user bingung di mana? Flow diagram menjawab **sebelum** kode.

**Trap modul:** `addEventListener` cukup; alur otomatis benar — **aman:** minta jelaskan urutan ke siswa **sebelum** lihat kode.

**Recall P04:** render() setelah state valid berubah — pesan error juga lewat render atau update span dedikasi.

**Spiral X:** EXP_04 ATM · X-S2-P07 form · X-S2-P08 validasi JS — **jangan re-teach if/else**, cukup sebut.

---

## 3. Materi praktik

### Transformasi

**Dari:** Event handler tanpa urutan jelas  
**Ke:** **User flow** terdokumentasi + validasi + feedback DOM

### User flow 5 kotak (target PRJ S3 exit)

```text
[Mulai] → [Isi form] → [Validasi] → [Sukses / Error] → [Selesai / Ulang isi]
```

### Alur mental validasi (spiral X-P08)

```text
1. User submit
2. preventDefault()
3. Baca .value · .trim()
4. if gagal → tampilkan pesan span, stop
5. if OK → update state · render · feedback sukses
```

### Syntax inti (target live coding)

```html
<form id="formAbsen">
  <label>Nama <input id="nama" type="text"></label>
  <span id="errNama" class="error"></span>
  <label>Kelas <input id="kelas" type="text"></label>
  <span id="errKelas" class="error"></span>
  <button type="submit">Hadir</button>
</form>
<p id="sukses"></p>

<script>
  const form = document.querySelector("#formAbsen");
  const namaInput = document.querySelector("#nama");
  const kelasInput = document.querySelector("#kelas");
  const errNama = document.querySelector("#errNama");
  const errKelas = document.querySelector("#errKelas");
  const sukses = document.querySelector("#sukses");

  let daftar = [];

  function renderFeedback(namaErr, kelasErr, msgSukses) {
    errNama.textContent = namaErr;
    errKelas.textContent = kelasErr;
    sukses.textContent = msgSukses;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaInput.value.trim();
    const kelas = kelasInput.value.trim();

    let valid = true;
    let eNama = "";
    let eKelas = "";

    if (nama.length < 3) {
      eNama = "Nama minimal 3 huruf.";
      valid = false;
    }
    if (kelas.length < 1) {
      eKelas = "Kelas wajib diisi.";
      valid = false;
    }

    if (!valid) {
      renderFeedback(eNama, eKelas, "");
      return;
    }

    daftar.push({ id: Date.now(), nama, kelas });
    renderFeedback("", "", nama + " tercatat hadir.");
    form.reset();
  });
</script>
```

- **Flow explainer:** submit → cek → error return early → sukses push state
- Pesan **di bawah field** — spiral P07 UX
- `return` setelah invalid — process berhenti (IPO Process gate)

### CSS minimal (opsional live)

```css
.error { color: #b91c1c; font-size: 0.875rem; }
```

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** `addEventListener` cukup; alur otomatis benar.  
**Aman:** Minta jelaskan urutan ke siswa sebelum lihat kode.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Do Now: gambar 3 langkah isi form absensi |
| 5–18 | Experience | **Antre peminjaman buku** — titik putus di mana user bingung? |
| 18–28 | Trap | Event handler tanpa validasi = data kotor |
| 28–38 | Clarify | User flow = urutan keputusan, bukan daftar tombol |
| 38–48 | Concept | `submit` · `preventDefault` · feedback UI |
| 48–70 | Practice | Form 2 field + validasi + pesan error di DOM |
| 70–85 | Transfer | Flow yang sama di app bank/ATM (X) |
| 85–90 | Exit | User flow 5 kotak untuk PRJ S3 |

---

## 6. Lembar kerja / latihan

### Snippet A — Tanpa preventDefault

```javascript
form.addEventListener("submit", function () {
  if (nama.value.length < 3) {
    err.textContent = "Terlalu pendek";
  }
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit — halaman reload? | **Ya** — default form tidak dicegah |
| Fix? | Tambah event.preventDefault() |

### Snippet B — Urutan validasi

```javascript
daftar.push({ nama });
if (nama.length < 3) {
  err.textContent = "Error";
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | Data kotor masuk state **sebelum** cek |
| Fix? | Validasi dulu · push hanya jika valid |

### Snippet C — User flow

```text
Submit → (nama kosong?) → Ya: pesan error → stop
                      → Tidak: simpan → pesan sukses
```

| Pertanyaan | Kunci |
|------------|-------|
| Node blueprint P02? | validasi_gagal vs tersimpan |
| Event DOM? | submit + preventDefault |

---

## 7. Exit ticket

1. User flow 5 kotak untuk PRJ S3
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
