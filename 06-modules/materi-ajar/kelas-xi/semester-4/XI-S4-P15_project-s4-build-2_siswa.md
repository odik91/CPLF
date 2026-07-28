# Handout Siswa — XI-S4-P15
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [XI-S4-P15_project-s4-build-2.md](../../kelas-xi/semester-4/XI-S4-P15_project-s4-build-2.md)
---
## 1. Tujuan pembelajaran
Dari fitur terpisah → **produk utuh** siap demo.

---
## 2. Materi
### Opening — acceptance status honest (0–10 menit)

Setiap tim sebut **% acceptance jujur** + blocker #1.
Guru catat tim perlu scaffolding P16.

### Build block (10–60 menit)

Fokus umum S4:

| Area | Contoh integrasi / polish |
|------|---------------------------|
| API | Transform JSON → UI cards (bukan dump) |
| Persist | Save after CRUD + load init + refresh proof |
| Relasi | idBuku → peminjaman (PRJ-03) |
| Tim | Merge modul UI + data (PRJ-04) |
| UX | Empty state, error retry, loading skeleton |

Guru keliling — **clarifying questions only**, timer 30/25/20 menit.

### QA peer cross-team (60–70 menit)

Tim A uji Tim B (rotasi) — **5 menit checklist**:

```text
[ ] Loading/error terlihat (uji offline jika API)
[ ] Refresh — data survive
[ ] Git log — ≥2 author, message bermakna
[ ] README — cara run + atribusi
[ ] (Opsional) Transform — bukan raw JSON dump
```

Peer **tidak** edit repo — catat finding untuk owner.

### Fix prioritas 1 (70–85 menit)

Owner tim implement **1 bug/finding QA** — commit bermakna.
Guru float — tidak ketik fix.

### Exit — tag release opsional (85–90 menit)

`git tag v0.1` jika DoD minimal terpenuhi + README OK.
Prep P16: changelog 3 bullet draft.

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–10 | Stand-up | Acceptance status honest |
| 10–60 | Build | Integrasi · transform pipeline · polish |
| 60–70 | QA | Tim lain isi checklist acceptance 5 menit |
| 70–85 | Fix | Prioritas 1 bug dari QA |
| 85–90 | Exit | Tag release `v0.1` opsional |

---

## 6. Lembar kerja / latihan
Latihan **QA via membaca** — snippet proyeksi, siswa isi checklist:

```javascript
const raw = await res.json();
document.getElementById("app").innerHTML =
  `<pre>${JSON.stringify(raw, null, 2)}</pre>`;
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| DoD PRJ-01 pass? | Fail — dump mentah, bukan 3–5 field relevan |
| QA finding SPD? | "Response ditampilkan raw — user tidak dapat insight cuaca." |

```javascript
// Git log simulasi — 15 commit, 1 author
// author: siswaA × 15
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Atribusi kolaborasi? | Fail min 2 kontributor — red flag hero coding |
| Tindakan guru? | Follow-up offline — pair task redistribusi |

```javascript
function init() {
  render([]);
  // loadFromStorage() commented out
}
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Refresh test? | Fail — data tidak load saat init |
| QA checklist item? | "Data survive refresh" → ❌ |

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
