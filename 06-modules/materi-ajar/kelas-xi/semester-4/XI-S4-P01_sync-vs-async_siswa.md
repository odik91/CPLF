# Handout Siswa — XI-S4-P01

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P01_sync-vs-async.md](../../../kelas-xi/semester-4/XI-S4-P01_sync-vs-async.md)

---

## 1. Tujuan pembelajaran

Dari “kode baca atas-bawah selesai” → **waktu tunggu** adalah bagian desain.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** “Nanti otomatis dapat data” tanpa loading state.  
**Aman:** Demo freeze browser dengan loop panjang (hati-hati, singkat).

---

## 5. Alur pertemuan (90 menit)

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

## 6. Lembar kerja / latihan

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

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
