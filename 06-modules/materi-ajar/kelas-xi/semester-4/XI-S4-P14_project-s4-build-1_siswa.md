# Handout Siswa — XI-S4-P14
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S4-P14_project-s4-build-1.md](../../kelas-xi/semester-4/XI-S4-P14_project-s4-build-1.md)
---
## 1. Tujuan pembelajaran
Dari rencana → **integrasi** fetch/storage + UI.

---
## 2. Materi
### Build week 1 S4 — integrasi data, bukan polish penuh

Fokus hari ini: **data masuk + loading/error + commit kolaboratif** — transform pipeline & polish = P15.

### Stand-up tim (0–10 menit)

- Guru catat **blocker berulang** (CORS, conflict, persist, loading stuck).
- Tanya cepat per tim: "Issue assignee kemarin commit? Branch siapa merge hari ini?"

### Build block (10–65 menit)

Prioritas per PRJ (contoh):

| PRJ | Fitur inti hari ini |
|-----|---------------------|
| PRJ-01 | fetch API + transform 3–5 field + loading/error UI |
| PRJ-02 | localStorage load/save absensi + refresh test |
| PRJ-03 | skema entitas + CRUD buku + persist |
| PRJ-04 | modul daftar pengumuman + persist + 1 branch merge |

Guru keliling — rotasi 3 menit/tim, **hanya clarifying questions**.
Stuck >15 menit: arahkan ke station A/B/C/D — bukan fix langsung.

**Offline test wajib PRJ-01:** matikan jaringan → error path — guru ingatkan, tidak fix untuk siswa.

### Git merge guided (65–75 menit)

- Setiap tim merge **1 branch** ke main (atau develop).
- Guru facilitate conflict — pertanyaan layer, bukan ketik resolution.
- Commit message bermakna — bukan "fix" tanpa konteks.

### Demo internal (75–90 menit)

1 menit per tim — happy path + sebut 1 blocker P15.
Bukan presentasi formal — warm-up P17.

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Blocker · commit kemarin · fokus hari ini |
| 10–65 | Build | API atau localStorage + render + loading state |
| 65–75 | Git | Merge 1 branch · resolve conflict guided |
| 75–90 | Exit | Demo internal 1 menit per tim |

---

## 6. Lembar kerja / latihan
Untuk **pair debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
async function loadWeather() {
  document.getElementById("out").textContent = "Loading...";
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("out").textContent = data.temp;
}
// Uji: offline / 404
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala offline? | Loading forever atau uncaught error — no error UI |
| AC PRJ-01 pass? | Fail — perlu try/catch + pesan manusiawi |
| Fix minimal (bukan guru)? | catch + set error text + finally clear loading |

```javascript
function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
function loadItems() {
  return JSON.parse(localStorage.getItem("items"));
}
// init: render(loadItems()) — lupa di main?
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala refresh? | Data hilang — loadItems tidak dipanggil saat init |
| Layer? | persist P07 — wiring main.js |

**Etika:** jika pakai kode tim volunteer, anonimkan — fokus proses, bukan malu.

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
