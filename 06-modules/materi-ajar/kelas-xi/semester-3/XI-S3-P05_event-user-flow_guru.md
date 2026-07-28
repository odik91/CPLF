# Materi Guru Lengkap — XI-S3-P05

**Handout siswa (bagikan):** [XI-S3-P05_event-user-flow_siswa.md](./XI-S3-P05_event-user-flow_siswa.md)

**Modul:** [XI-S3-P05_event-user-flow.md](../../../kelas-xi/semester-3/XI-S3-P05_event-user-flow.md)

**Materi pendukung sumber:** [XI-S3-P05_event-user-flow.md](../../../materi-pendukung/kelas-xi/semester-3/XI-S3-P05_event-user-flow.md)

---
## A. Modul pertemuan (referensi)

# XI-S3-P05 — Event & User Flow

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P05 |
| Unit | XI3.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T1, CXI-B1 |
| MM | MM-13 |

## Learning Transformation

Dari event “ajaib” → **model alur** pengguna yang bisa dijelaskan.

---

## Timeline (90 menit)

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

## Cognitive Trap

**Asumsi:** `addEventListener` cukup; alur otomatis benar.  
**Aman:** Minta jelaskan urutan ke siswa sebelum lihat kode.

---

## Formatif

**REA**, **TEC**

---

## Catatan Guru

Hubungkan ke EXP_04 spiral jika kelas pernah pakai validasi ATM.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S3-P05 Event & User Flow

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P05 |
| Modul pertemuan | [XI-S3-P05_event-user-flow.md](../../../kelas-xi/semester-3/XI-S3-P05_event-user-flow.md) |
| Unit | XI3.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T1, CXI-B1 |
| MM | MM-13 |
| Formatif | REA, TEC |
| Ada live code? | **Ya — form + validasi + user flow live** (`submit`, `preventDefault`) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P04 — event tambah todo — urutan?" | Mutasi state → render() |
| "P02 blueprint — edge case input kosong?" | Node error / pesan — hari ini di DOM |
| "X P08 — preventDefault kenapa?" | Stop reload — JS validasi dulu |
| "ATM EXP_04 — validasi sebelum?" | Sebelum uang/action — process gate |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Form HTML + validasi JS diketik live |
| **Live coding** | Skeleton form minimal — **bukan** file validasi lengkap |
| **Per baris / scope** | submit callback · if validasi · render pesan — TTS |
| **Recall** | Gambar flow 3 kotak di papan **sebelum** `<script>` |
| **Membaca kode** | Snippet preventDefault — prediksi: reload atau tidak? |
| **No starter file** | Larangan distribusi form.html siap pakai |

---

## Materi Inti

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

## Alur Live Coding

> **Gambar user flow di papan dulu.** Lalu HTML form → script validasi.

### Persiapan

- Blueprint P02 absensi (opsional)
- EXP_04 ATM recall card

### Skrip TTS

```text
[LANGKAH 0 — Opening 0–5]
Do Now: gambar 3 langkah isi form absensi (kertas)
Recall P04: render feedback — hari ini form + flow

[LANGKAH 1 — Experience antre buku 5–18]
Simulasi: where user bingung? — titik putus
Ucapkan: "User flow = urutan keputusan, bukan daftar tombol."

[LANGKAH 2 — Flow di papan 18–28]
5 kotak: mulai → isi → validasi → error/sukses → selesai
Tanya sebelum kode: "Dari submit invalid, ke node mana?"

[LANGKAH 3 — HTML form minimal]
<form id="formAbsen"> — 2 field + span error + submit
Ucapkan: "Span kosong — isi dari JS saat invalid."

[LANGKAH 4 — preventDefault]
form.addEventListener("submit", function (event) {
  event.preventDefault();
Ucapkan: "Tanpa ini — halaman reload, JS hilang."
Scope: callback submit — event object

[LANGKAH 5 — Validasi if]
Baca .value.trim() — if length — set eNama, eKelas
Ucapkan: "Process IPO — gate sebelum mutasi state."
Spiral: ATM EXP_04 — tolak sebelum proses

[LANGKAH 6 — Early return]
if (!valid) { renderFeedback(...); return; }
Ucapkan: "Invalid — stop. Jangan push ke daftar."

[LANGKAH 7 — Sukses path]
push daftar · renderFeedback sukses · form.reset()
Opsional: console.log(daftar) — lihat state

[LANGKAH 8 — Transfer 70–85]
Flow sama di bank/ATM — siswa jelaskan paralel
Exit: user flow 5 kotak untuk PRJ S3 (kertas)

[LANGKAH 9 — Exit 85–90]
Test: submit kosong · submit valid · screenshot pesan error
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

1. **Form 2 field** — tema absensi / peminjaman / feedback MA
2. Min **2 aturan validasi** (panjang, kosong, atau format sederhana)
3. **Pesan error per field** — bukan alert generik
4. Gambar **user flow 5 kotak** untuk app PRJ S3 — exit modul
5. **Tidak boleh:** copy form validasi lengkap guru

**Extension:** Cek duplikat nama di `daftar` — edge case blueprint P02.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Lupa preventDefault | Demo reload — ingat visual |
| alert("error") saja | DOM span — spiral P07/P08 |
| Push state sebelum valid | Early return pattern |
| Flow hanya di kepala | Wajib sketsa 5 kotak |
| Validasi hanya HTML required | JS custom — kontrol pesan |
| Langsung kode tanpa flow | Etika — flow dulu 10 menit |

---

## Rujukan

- Modul: [XI-S3-P05](../../../kelas-xi/semester-3/XI-S3-P05_event-user-flow.md)
- Sebelum: [P04 DOM Update Aman](./XI-S3-P04_dom-update-aman.md)
- Lanjut: [P06 Alur Interaksi](./XI-S3-P06_alur-interaksi.md)
- Spiral X: [X-S2-P07 Form](../../kelas-x/semester-2/X-S2-P07_form-validasi.md) · [X-S2-P08 Validasi JS](../../kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md)
- EXP: [EXP_04 ATM](../../../07-experience_library/EXP_04_ATM.md)
- MM-13 · CXI-T1, CXI-B1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] User flow 5 kotak **sebelum** kode
- [ ] preventDefault + validasi 2 field live
- [ ] Pesan error di DOM per field
- [ ] Early return — tidak push data invalid
- [ ] Latihan baca snippet — prediksi reload/data kotor
- [ ] Recall P04 render + P02 edge case + EXP_04
- [ ] Exit: flow 5 kotak PRJ S3 + screenshot form

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
