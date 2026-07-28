# Materi Guru Lengkap — XI-S4-P01

**Handout siswa (bagikan):** [XI-S4-P01_sync-vs-async_siswa.md](./XI-S4-P01_sync-vs-async_siswa.md)

**Modul:** [XI-S4-P01_sync-vs-async.md](../../../kelas-xi/semester-4/XI-S4-P01_sync-vs-async.md)

**Materi pendukung sumber:** [XI-S4-P01_sync-vs-async.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P01_sync-vs-async.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P01 — Sync vs Async

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P01 |
| Semester | 4 · Pertemuan 1/18 |
| Unit | XI4.1 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2 |
| CP | AD |
| MM | MM-09 |

## Learning Transformation

Dari “kode baca atas-bawah selesai” → **waktu tunggu** adalah bagian desain.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Do Now: kapan app terasa “lemot”? |
| 5–18 | Experience | **Pesan ke guru vs balasan 2 jam** — simulasi blocking |
| 18–28 | Trap | UI freeze saat “loading” tanpa feedback |
| 28–38 | Clarify | Sync = tunggu di tempat · async = lanjut + callback nanti |
| 38–48 | Concept | Call stack vs task queue (metafora antrian) |
| 48–65 | Practice | `setTimeout` simulasi fetch · UI tidak boleh blank |
| 65–80 | Reflect | Contoh sync di kehidupan MA |
| 80–90 | Transfer | Preview Promise P02 |

---

## Cognitive Trap

**Asumsi:** “Nanti otomatis dapat data” tanpa loading state.  
**Aman:** Demo freeze browser dengan loop panjang (hati-hati, singkat).

---

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Buka semester 4: ton kolaboratif & sistem nyata.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P01 Sync vs Async

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P01 |
| Modul pertemuan | [XI-S4-P01_sync-vs-async.md](../../../kelas-xi/semester-4/XI-S4-P01_sync-vs-async.md) |
| Unit | XI4.1 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T2 |
| CP | AD |
| MM | MM-09 |
| Formatif | REA, OBS |
| Ada live code? | **Ya — metafora live + demo `setTimeout` minimal** (bukan fetch/API) |

---

## Pengetahuan Guru

**Pertemuan buka Semester 4:** ton kolaboratif & sistem nyata — app tidak lagi hanya di memori tab browser. Hari ini fondasi **waktu tunggu** sebelum Promise (P02) dan fetch (P04).

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Sync (sinkron)** | Baris kode jalan berurutan — baris berikutnya **menunggu** baris sebelum selesai |
| **Async (asinkron)** | Operasi lama **dijadwalkan** — JS lanjut baca baris berikutnya; hasil datang **nanti** lewat callback |
| **Blocking** | Sync berat (loop panjang) **membekukan** UI — user tidak bisa klik |
| **Non-blocking** | `setTimeout` / fetch — thread utama lanjut; UI bisa tetap responsif **jika** ada feedback |
| **Loading state** | UI tidak boleh blank saat tunggu — teks "Memuat…", spinner, disable tombol |
| **Call stack vs task queue** | Metafora antrian: stack = tugas sekarang; queue = janji "nanti jalan" |

**Metafora utama modul — pesan ke guru vs balasan 2 jam:**
- Sync = siswa berdiri di depan guru **diam menunggu** jawaban — tidak bisa kerjakan PR lain.
- Async = kirim WA "Bu, boleh tanya?" → lanjut baca buku → **nanti** notifikasi balasan.

**Metafora antrian kantin (spiral MM-09):**
- Kasir proses pesanan A (sync di depan) vs nomor antrian dipanggil nanti (async).

**Trap modul:** "Nanti otomatis dapat data" tanpa loading state — **aman:** demo UI kosong/freeze singkat, lalu tunjukkan feedback.

**Recall dari akhir S3 (P18):** preview S4 = API · tim · persist. Spiral **render()** dari [P04 S3](../semester-3/XI-S3-P04_dom-update-aman.md): saat data belum datang, DOM tetap perlu **state UI** (loading) — foreshadow P02–P04.

**Preview P02:** `setTimeout` hari ini = simulasi fetch; minggu depan **Promise + async/await** formal.

---

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P18 S3 — preview semester 4 apa?" | API, kolaborasi tim, data persist — app nyata |
| "P08 S3 — alur event → state → render — masih ingat?" | Update state dulu, panggil render — satu pintu DOM |
| "Refresh tab — data S3 hilang kenapa?" | State hanya di memori — hook persistensi S4 nanti |
| "App terasa lemot — bottleneck di mana?" | (jaringan, proses berat, UI freeze tanpa feedback) |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Demo `setTimeout` **diketik live** — bukan paste 40 baris |
| **Live coding** | Metafora oral 10 menit, baru file HTML minimal + script singkat |
| **Per baris / scope** | Jelaskan urutan `console.log` vs callback — TTS setiap blok |
| **Recall** | Buka 2 menit: P18 preview S4 + render() spiral |
| **Membaca kode** | Snippet urutan log **sebelum** ketik demo — prediksi output |
| **No starter file** | Siswa bangun dari `<!DOCTYPE html>` kosong — guru scaffold live |

---

## Materi Inti

### Transformasi

**Dari:** "Kode baca atas-bawah selesai"  
**Ke:** **Waktu tunggu** adalah bagian desain — UI harus memberi tahu user

### Diagram mental (papan)

```text
SYNC                          ASYNC
────                          ─────
baris 1                       baris 1
baris 2 (tunggu berat)        baris 2 → jadwalkan "nanti"
baris 3 (baru jalan)          baris 3 (lanjut!)
                              ... waktu ...
                              callback / task queue jalan
```

### Demo minimal — urutan log (latihan baca kode)

```javascript
console.log("A");
setTimeout(function () {
  console.log("B");
}, 1000);
console.log("C");
// Output: A, C, B
```

### Demo UI — loading tidak blank (target live)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Sync vs Async — P01</title>
</head>
<body>
  <p id="status">Siap</p>
  <button type="button" id="btn-load">Simulasi ambil data</button>
  <script>
    const statusEl = document.getElementById("status");
    const btnLoad = document.getElementById("btn-load");

    btnLoad.addEventListener("click", function () {
      statusEl.textContent = "Memuat…";
      btnLoad.disabled = true;

      setTimeout(function () {
        statusEl.textContent = "Data siap!";
        btnLoad.disabled = false;
      }, 2000);
    });
  </script>
</body>
</html>
```

**Spiral render() S3:** statusEl = cermin **UI state** sementara — bukan data API sungguhan; P02+ akan bungkus async formal.

### Demo freeze singkat (hati-hati — max 2 detik)

```javascript
// JANGAN lama — hanya bukti blocking
function blockingDemo() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // busy wait — UI freeze
  }
}
```

Ucapkan: "Ini sync berat — tombol lain tidak responsif. Fetch/API harus async + loading."

### Contoh sync vs async di kehidupan MA

| Kejadian | Sync / Async | Feedback user |
|----------|--------------|---------------|
| Hitung nilai di kertas | Sync | Langsung lihat hasil |
| Kirim tugas ke Classroom | Async | "Mengunggah…" → centang |
| Sholat jamaah tunggu imam | Sync (antrian) | Semua menunggu barisan rapi |
| Pesan WA pending | Async | Centang satu vs dua |

---

## Alur Live Coding

> **File:** `index.html` satu halaman — **kosong di awal**, guru ketik bareng. **Tidak** distribusi file siap jalan.

### Persiapan

- Live Server / buka file lokal
- Papan: diagram sync vs async + antrian task
- Timer 2 detik untuk demo freeze (opsional — skip jika lab lemot)

### Skrip TTS — metafora + ketik minimal

```text
[LANGKAH 0 — Opening 0–5 menit]
Do Now: "App apa yang terasa lemot? Kenapa?"
Recall P18: "Akhir S3 kita preview API & tim — hari ini fondasi WAKTU TUNGGU."
Tanya: "P08 — render() dipanggil kapan?" (setelah state berubah)

[LANGKAH 1 — Experience pesan guru 5–18 menit]
Role-play: siswa kirim pertanyaan — guru "balas 2 jam kemudian."
Ucapkan: "Menunggu diam = sync blocking. Kirim + lanjut kerja = async."
Gambar di papan: call stack vs task queue (kotak antrian).

[LANGKAH 2 — Trap UI freeze 18–28 menit]
Ucapkan trap: "Nanti otomatis dapat data — layar kosong OK?"
Tanya: "User klik 5× — apa yang terjadi jika tidak ada 'Memuat…'?"
Opsional: blockingDemo 2 detik — tunjuk freeze.

[LANGKAH 3 — Latihan baca kode 28–38 menit]
Proyeksikan snippet A/C/B — siswa prediksi urutan.
Ucapkan: "setTimeout callback masuk task queue — bukan stack langsung."
Scope: function callback — jalan nanti, bukan saat baris setTimeout dibaca.

[LANGKAH 4 — Scaffold HTML 38–45 menit]
Ketik DOCTYPE, body, <p id="status">, <button id="btn-load">.
Scope: getElementById — simpan referensi DOM sekali.

[LANGKAH 5 — Handler async simulasi 45–58 menit]
Ketik addEventListener click:
  statusEl.textContent = "Memuat…";
  btnLoad.disabled = true;
Ucapkan: "Ini UI state loading — spiral render S3 tapi untuk async."
Ketik setTimeout 2000ms:
  statusEl.textContent = "Data siap!";
  btnLoad.disabled = false;
Scope: callback function — jalan setelah timer, bukan segera.

[LANGKAH 6 — Practice 58–75 menit]
Siswa: tombol kedua "Simulasi gagal" — setTimeout tampilkan "Gagal — coba lagi."
Keliling OBS: apakah ada layar blank tanpa teks?

[LANGKAH 7 — Reflect 75–85 menit]
Diskusi: Classroom upload, game lag, WA pending — sync/async + feedback.
Tanya: "Kenapa disable tombol saat loading?"

[LANGKAH 8 — Preview P02 85–90 menit]
Ucapkan: "Besok Promise & async/await — janji formal, bukan hanya setTimeout."
Exit: screenshot 2 state (siap + memuat) + 1 kalimat metafora antrian.
```

---

## Latihan Membaca Kode

### Snippet A — Urutan eksekusi

```javascript
console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
console.log("3");
```

| Pertanyaan | Kunci |
|------------|-------|
| Urutan output? | 1, 3, 2 |
| Kenapa 2 terakhir meski delay 0? | Callback masuk task queue setelah stack kosong |

### Snippet B — UI tanpa loading

```javascript
btn.addEventListener("click", function () {
  setTimeout(function () {
    resultEl.textContent = "Selesai";
  }, 3000);
});
// statusEl tidak pernah diubah
```

| Pertanyaan | Kunci |
|------------|-------|
| UX bug? | 3 detik layar tidak beri tahu — user klik ulang |
| Fix? | Set "Memuat…" **sebelum** setTimeout |

### Snippet C — Spiral S3 render

```javascript
let uiState = "idle"; // idle | loading | ok | error

function renderStatus() {
  statusEl.textContent = uiState === "loading" ? "Memuat…" : uiState;
}

btnLoad.addEventListener("click", function () {
  uiState = "loading";
  renderStatus();
  setTimeout(function () {
    uiState = "ok";
    renderStatus();
  }, 2000);
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Mirip pola S3? | State UI → render — foreshadow fetch P04 |
| Beda dengan P08? | Data masih simulasi — belum API |

---

## Praktik Mandiri Siswa

1. Satu halaman: tombol simulasi load 2–3 detik + teks status **tidak pernah kosong**
2. Tambah state **gagal** (tombol atau random) — pesan error jelas
3. Tulis di kertas: 1 contoh sync + 1 async dari app favorit + feedback UI-nya
4. **Tidak boleh:** copy file guru utuh — ketik sendiri dari kosong

**Extension:** Dua tombol — yang kedua tetap bisa diklik saat loading (non-blocking) vs disable saat load (cegah double submit).

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Anggap setTimeout = fetch/API | Hari ini simulasi — P04 fetch sungguhan |
| Layar blank saat tunggu | Wajib teks "Memuat…" sebelum async |
| Loop panjang di handler klik | Demo freeze singkat — jangan di production |
| Lupa disable tombol | Double click = double request nanti |
| Guru paste demo lengkap | Etika CPLF — ketik live TTS |
| Bingung callback scope | Gambar task queue di papan |

---

## Rujukan

- Modul: [XI-S4-P01](../../../kelas-xi/semester-4/XI-S4-P01_sync-vs-async.md)
- Lanjut: [P02 Promise & async/await](./XI-S4-P02_promise-async-await.md)
- Spiral S3 render: [P04 DOM Update](../semester-3/XI-S3-P04_dom-update-aman.md) · [P08 State](../semester-3/XI-S3-P08_state-aplikasi.md)
- Tutup S3: [P18 Showcase](../semester-3/XI-S3-P18_showcase-refleksi-s3.md)
- MM-09 · CXI-T2
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Metafora pesan guru / antrian **live** — bukan slide saja
- [ ] Demo urutan log A/C/B — siswa prediksi sebelum run
- [ ] `setTimeout` + loading UI diketik live
- [ ] Recall P18 preview S4 + spiral render()
- [ ] Trap "layar kosong OK" dibahas
- [ ] Tidak distribusi file siap jalan
- [ ] Exit: screenshot loading + preview P02

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
