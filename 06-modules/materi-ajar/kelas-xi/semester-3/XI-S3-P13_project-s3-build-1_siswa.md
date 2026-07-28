# Handout Siswa — XI-S3-P13
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S3-P13_project-s3-build-1.md](../../kelas-xi/semester-3/XI-S3-P13_project-s3-build-1.md)
---
## 1. Tujuan pembelajaran
Dari scaffold → **fitur inti** yang memenuhi acceptance awal.

---
## 2. Materi
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
Guru float: "Berapa % acceptance? Satu fitur end-to-end sudah jalan?"

### Exit ticket (80–90 menit)

- Screenshot progress + **1 bug terbuka** (kalimat gejala, bukan solusi).
- Prep P14: blocker prioritas 1–2–3.

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | 1 menit/siswa: kemarin + hari ini + blocker |
| 10–15 | Clarify | Guru jawab blocker umum (10 menit max) |
| 15–70 | Build | Implementasi CRUD / flow utama · pair debug |
| 70–80 | Checkpoint | Centang acceptance — honest status |
| 80–90 | Exit | Screenshot + 1 bug terbuka |

---

## 6. Lembar kerja / latihan
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

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
