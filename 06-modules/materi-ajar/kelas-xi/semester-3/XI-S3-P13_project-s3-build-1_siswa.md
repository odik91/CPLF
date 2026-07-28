# Handout Siswa — XI-S3-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P13_project-s3-build-1.md](../../../kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md)

---

## 1. Tujuan pembelajaran

Dari scaffold → **fitur inti** yang memenuhi acceptance awal.

---

## 2. Ringkasan konsep

- **Format build week S3:** stand-up → clarify blocker (max 10 menit) → build fitur inti → checkpoint acceptance → exit screenshot + 1 bug terbuka.
- **Perbedaan S2 vs S3 build:** artefak = **aplikasi multi-komponen** (state + render + handlers + main), bukan halaman web satu file.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker — max 1 menit per siswa/kelompok.
- **Target hari ini:** ≥40% acceptance tercentang **atau** 1 fitur end-to-end jalan (alur IPO utuh).
- **Fitur inti first:** CRUD / flow utama dari acceptance P12 — polish & edge case = P14.
- **Checkpoint questions guru:** acceptance mana belum ✅? alur data dari event → state → render jelas? siapa user?
- **Pair debug:** siswa A jelaskan gejala, siswa B baca console/state — guru facilitate, bukan fix.
- **Scaffolding stations** (jika >40% stuck):
  - A: blueprint IPO + state shape kosong
  - B: render() placeholder + DOM update aman
  - C: handler event → updateState → render()
- **Catat siswa perlu scaffolding** dari P11/P12 — prioritaskan rotasi berkeliling.
- **Empat opsi PRJ S3:** [PRJ-01 Absensi DOM](../../../08-project/PRJ_XI_S3_01_Absensi_DOM.md) · [PRJ-02 Peminjaman](../../../08-project/PRJ_XI_S3_02_Peminjaman_Barang.md) · [PRJ-03 Katalog OSIS](../../../08-project/PRJ_XI_S3_03_Katalog_OSIS.md) · [PRJ-04 Kuis Interaktif](../../../08-project/PRJ_XI_S3_04_Kuis_Interaktif.md)

---

## 3. Materi praktik

### Build week 1 S3 — fitur inti, bukan polish

Fokus hari ini: **progress terlihat** vs acceptance PRJ — alur IPO minimal jalan (input → proses state → render). Polish & edge case = P14.

### Stand-up efektif (0–10 menit)

- Guru catat **blocker berulang** → jadi clarifying question atau station.
- Tanya cepat: "Struktur folder P12 sudah dipakai? State shape sudah sesuai blueprint?"

### Clarify blocker (10–15 menit)

- Max 10 menit front-of-class — jawab **blocker umum** (bukan debug per siswa).
- Contoh umum: listener hilang setelah render, state tidak immutable, import modul circular.
- Siswa dengan blocker unik → antre pair debug saat build.

### Build block (15–70 menit)

Prioritas per PRJ (contoh):

| PRJ | Fitur inti hari ini |
|-----|---------------------|
| PRJ-01 | Pilih tanggal + tandai status + render daftar |
| PRJ-02 | Form pinjam + simpan ke state + render list |
| PRJ-03 | Tambah kegiatan + filter/kategori + render katalog |
| PRJ-04 | Load soal + jawab + skor sementara |

Guru keliling — rotasi 2 menit/kelompok, **hanya clarifying questions**.
Stuck >15 menit: arahkan ke station A/B/C atau pair debug — bukan fix langsung.

### Checkpoint acceptance (70–80 menit)

Siswa centang checklist acceptance — **status jujur** ✅/❌/🔄.

### Exit ticket (80–90 menit)

- Screenshot progress + **1 bug terbuka** (kalimat gejala, bukan solusi).
- Prep P14: blocker prioritas 1–2–3.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | 1 menit/siswa: kemarin + hari ini + blocker |
| 10–15 | Clarify | Guru jawab blocker umum (10 menit max) |
| 15–70 | Build | Implementasi CRUD / flow utama · pair debug |
| 70–80 | Checkpoint | Centang acceptance — honest status |
| 80–90 | Exit | Screenshot + 1 bug terbuka |

---

## 5. Lembar kerja / latihan

Untuk **pair debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
// state.js
export let items = [];

// handlers.js
document.getElementById("btn-add").addEventListener("click", () => {
  items.push({ nama: "Baru" });
  renderList(items);
});

// render.js — renderList innerHTML full replace
function renderList(data) {
  document.getElementById("list").innerHTML = data.map(i => `<li>${i.nama}</li>`).join("");
  document.getElementById("btn-add").addEventListener("click", handler); // re-bind?
}
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala setelah klik kedua? | Listener ganda / duplikat item / behavior aneh |
| Hipotesis layer? | Event + render — listener re-attach atau state tidak sync |
| Fix minimal (bukan guru)? | Delegate event ke parent statis, atau bind sekali di main.js |

```javascript
// Bug: render tanpa update state
function handleSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  document.getElementById("out").textContent = nama; // langsung DOM
  // state.items tidak pernah di-update
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Masalah arsitektur? | Bypass state — sumber kebenaran tidak konsisten |
| Gejala saat refresh/re-render? | Data hilang — tidak ada di state |
| Saran (siswa)? | Push ke state.js lalu render() dari state |

**Etika:** jika pakai kode siswa volunteer, anonimkan — fokus proses, bukan malu.

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
