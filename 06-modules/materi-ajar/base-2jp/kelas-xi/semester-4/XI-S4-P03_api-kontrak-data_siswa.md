# Handout Siswa — XI-S4-P03

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P03_api-kontrak-data.md](../../../kelas-xi/semester-4/XI-S4-P03_api-kontrak-data.md)

---

## 1. Tujuan pembelajaran

Dari “ambil data” → **kontrak** request/response yang disepakati.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **API** | Antarmuka terprogram — client minta, server jawab menurut **aturan** |
| **Kontrak** | Kesepakatan request/response: URL, method, field, tipe, status code |
| **Client / Server** | Browser = client · mesin di internet = server |
| **REST ringkas** | GET baca data · POST kirim · (PUT/DELETE sebut singkat) |
| **JSON body** | Format pertukaran — `{ "field": "value" }` |
| **Status code** | 200 OK · 404 not found · 500 server error |
| **Schema** | Daftar field wajib vs opsional — jangan asumsikan field selalu ada |

**EXP_08 WhatsApp:** kirim pesan = request; centang = response state; pending = loading; mati internet = error path — **foreshadow fetch P04**.

**Metafora role-play:** 2 siswa — A = client (baca kontrak, minta data), B = server (jawab JSON di papan). Guru = dokumentasi API.

**Trap modul:** "Langsung dapat data" tanpa auth/rate limit/field hilang — **aman:** contoh response `{ "title": null }` · sebut ToS API publik.

**Builds on P02:** `await mockFetch()` hari ini = client percaya **kontrak**; P04 ganti ke `fetch(url)` sungguhan.

**Spiral S3:** response JSON → parse → **state** → `render()` — kontrak hari ini, wiring DOM besok.

**Pilih API P04 (guru siapkan, jangan distribusi list panjang):** JSONPlaceholder posts · Open-Meteo · Dog CEO — ramah siswa, tanpa API key di frontend.

---

## 3. Materi praktik

### Transformasi

**Dari:** "Ambil data" (magis)  
**Ke:** **Kontrak** request/response yang disepakati & didokumentasikan

### Diagram client–server (papan)

```text
[ CLIENT ]  ---- GET /api/pengumuman ---->  [ SERVER ]
            <---- 200 + JSON body ---------
```

### Kontrak fiktif — API Pengumuman MA (practice target)

**Request**

| Item | Nilai |
|------|-------|
| Method | GET |
| URL | `/api/pengumuman` |
| Query | `?limit=5` (opsional) |
| Header | `Accept: application/json` |

**Response 200**

```json
{
  "status": "ok",
  "count": 2,
  "items": [
    {
      "id": "p001",
      "title": "Ujian praktik minggu depan",
      "date": "2026-07-28",
      "priority": "high"
    },
    {
      "id": "p002",
      "title": "Perpustakaan tutup Jumat",
      "date": "2026-07-25",
      "priority": "normal"
    }
  ]
}
```

**Response error 404**

```json
{
  "status": "error",
  "message": "Endpoint tidak ditemukan"
}
```

### Field schema (5 field wajib per item — modul)

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| id | string | ya | Unik |
| title | string | ya | Judul pengumuman |
| date | string (ISO date) | ya | YYYY-MM-DD |
| priority | string | ya | high / normal / low |
| author | string | tidak | Opsional — trap jika client asumsikan ada |

### Mock server di JS (demo singkat — opsional live)

```javascript
function mockApiPengumuman() {
  return Promise.resolve({
    status: "ok",
    count: 1,
    items: [
      {
        id: "p001",
        title: "Demo kontrak",
        date: "2026-07-23",
        priority: "high",
      },
    ],
  });
}
```


---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** “Langsung dapat data” — tanpa auth/rate limit/limitasi.  
**Aman:** Sebut batasan etis & ToS API.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | EXP_08 hook: kirim pesan — apa payload-nya? |
| 5–18 | Experience | Role-play client–server (2 siswa + papan JSON) |
| 18–28 | Trap | Asumsi field API selalu ada |
| 28–38 | Clarify | Dokumentasi API · status code · schema |
| 38–48 | Concept | REST ringkas · GET · JSON body |
| 48–65 | Practice | Tulis kontrak fiktif API “pengumuman MA” (5 field) |
| 65–80 | Pair | Client tebak response dari kontrak saja |
| 80–90 | Exit | Link docs API publik untuk P04 |

---

## 6. Lembar kerja / latihan

### Snippet A — Asumsi field ada

```javascript
const data = await mockApiPengumuman();
document.querySelector("#title").textContent = data.items[0].title;
// items[0] tidak ada jika count = 0
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug jika items kosong? | Cannot read property 'title' of undefined |
| Fix kontrak? | Dokumentasi: items boleh [] · client cek length |

### Snippet B — Status code

```javascript
// Pseudocode — P04 sungguhan
const res = await fetch("/api/pengumuman");
if (!res.ok) {
  throw new Error("HTTP " + res.status);
}
const data = await res.json();
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa cek res.ok? | 404 body mungkin HTML error — bukan JSON sukses |
| Hubung P02? | throw → catch → UI error |

### Snippet C — EXP_08 analogi

```text
Request: kirim pesan WA
Response pending: loading UI
Response delivered: ok state
Response fail: error + retry
```

| Pertanyaan | Kunci |
|------------|-------|
| Client/server di WA? | HP client · server Meta · jaringan di tengah |
| Async? | Tidak instant — P01/P02 |

---

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data & Git = amanah dan integritas.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
