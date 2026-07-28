# Materi Guru Lengkap — XI-S4-P03

**Handout siswa (bagikan):** [XI-S4-P03_api-kontrak-data_siswa.md](./XI-S4-P03_api-kontrak-data_siswa.md)

**Modul:** [XI-S4-P03_api-kontrak-data.md](../../../kelas-xi/semester-4/XI-S4-P03_api-kontrak-data.md)

**Materi pendukung sumber:** [XI-S4-P03_api-kontrak-data.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P03_api-kontrak-data.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P03 — API & Kontrak Data

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P03 |
| Unit | XI4.2 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T2, MM-17 |
| EXP | [EXP_08 WhatsApp](../../../07-experience_library/EXP_08_WhatsApp.md) |

## Learning Transformation

Dari “ambil data” → **kontrak** request/response yang disepakati.

---

## Timeline (90 menit)

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

## Cognitive Trap

**Asumsi:** “Langsung dapat data” — tanpa auth/rate limit/limitasi.  
**Aman:** Sebut batasan etis & ToS API.

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Pilih API publik ramah siswa: Open-Meteo, JSONPlaceholder, dll.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P03 API & Kontrak Data

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P03 |
| Modul pertemuan | [XI-S4-P03_api-kontrak-data.md](../../../kelas-xi/semester-4/XI-S4-P03_api-kontrak-data.md) |
| Unit | XI4.2 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T2, MM-17 |
| EXP | [EXP_08 WhatsApp](../../../07-experience_library/EXP_08_WhatsApp.md) |
| Formatif | REA, COM |
| Ada live code? | **Ya — kontrak JSON live di papan + mock response; fetch sungguhan di P04** |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P02 — mockFetch resolve/reject?" | Janji sukses/gagal — kontrak formal |
| "P02 — try/catch kenapa?" | Server/network bisa tolak — error path |
| "P01 — pending WA analog?" | Request terkirim, response belum — loading |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Kontrak API **ditulis live** di papan/Docs — bukan PDF vendor |
| **Live modeling** | Role-play client–server + JSON di sticky note |
| **Per field / scope** | Setiap field kontrak = TTS: tipe, wajib?, contoh |
| **Recall** | EXP_08 hook 5 menit — pending/success/fail |
| **Membaca kode** | Baca JSON response **tanpa fetch** — tebak field yang hilang |
| **No starter file** | Siswa tulis kontrak sendiri — bukan copy Postman export |

---

## Materi Inti

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

**Jangan distribusi** — guru ketik jika perlu bridge ke P04; fokus pertemuan = kontrak di kertas.

---

## Alur Live Coding

> **Campuran:** role-play papan (40%) + tulis kontrak (40%) + baca JSON (20%). Fetch sungguhan **preview** saja — full di P04.

### Persiapan

- EXP_08: diagram WA client–server (HP → tower → server)
- Sticky note: REQUEST / RESPONSE
- Link docs API publik untuk P04 (1 URL — proyektor)

### Skrip TTS — kontrak live field demi field

```text
[LANGKAH 0 — EXP_08 hook 0–5 menit]
Tanya: "Kirim WA — apa payload-nya? Bukti terkirim?"
Ucapkan: "Fetch nanti = kirim request HTTP, tunggu response JSON."

[LANGKAH 1 — Role-play client-server 5–18 menit]
Siswa A: "GET /api/pengumuman?limit=2"
Sisua B: tempel JSON response di papan.
Guru: dokumentasi — method, URL, field.

[LANGKAH 2 — Trap field hilang 18–28 menit]
Response tanpa "title" — client crash?
Tanya: "Asumsi berbahaya di kode client?"
Ucapkan: "Kontrak + defensive coding — P04 cek res.ok & field."

[LANGKAH 3 — Clarify REST + status 28–38 menit]
GET vs POST oral · 200 vs 404 vs 500.
Sebut: jangan simpan API secret di frontend — P04.

[LANGKAH 4 — Concept kontrak 38–48 menit]
Tulis tabel schema 5 field — siswa copy struktur ke buku (bukan teks penuh guru).
Scope: object items[] — array of object.

[LANGKAH 5 — Practice tulis kontrak 48–65 menit]
Kelompok: API fiktif "jadwal ujian" atau "menu kantin" — min 5 field + 1 error response.
Wajib: contoh JSON valid + contoh error.

[LANGKAH 6 — Pair baca kontrak 65–80 menit]
Tukar kontrak — client tebak response dari docs saja, server pegang jawaban.
OBS: apakah field opsional ditandai?

[LANGKAH 7 — Bridge P04 80–88 menit]
Tampilkan JSONPlaceholder docs 1 endpoint — map ke kontrak hari ini.
Ucapkan: "Besok fetch live — loading/error spiral P02 + render S3."

[LANGKAH 8 — Exit 88–90 menit]
Exit: kontrak kelompok + URL API P04 untuk dibaca di rumah (baca docs, jangan coding dulu).
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

1. Tulis kontrak API fiktif MA (min 5 field + 1 endpoint GET)
2. Contoh JSON sukses + contoh error — **tulis sendiri**
3. Pair: partner baca kontrak → gambar response tanpa lihat jawaban
4. Baca 1 halaman docs API publik (JSONPlaceholder atau Open-Meteo) — catat 3 field
5. **Tidak boleh:** export Postman copas ke tugas

**Extension:** Tambah field opsional + dokumentasi "breaking change" jika field dihapus.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Kontrak = URL saja | Wajib method, field, status, contoh body |
| Asumsikan array selalu isi | Dokumentasi count=0 |
| Secret key di HTML | Frontend publik — P04 bahas CORS/key |
| Langsung fetch tanpa kontrak | Hari ini kertas dulu — P04 coding |
| Guru baca slide vendor 20 menit | Live tulis kontrak bareng |
| Abaikan ToS API | Sebut etis — rate limit, attribution |

---

## Rujukan

- Modul: [XI-S4-P03](../../../kelas-xi/semester-4/XI-S4-P03_api-kontrak-data.md)
- EXP: [EXP_08 WhatsApp](../../../07-experience_library/EXP_08_WhatsApp.md) · [EXP_08_A Game Lag](../../../07-experience_library/EXP_08_A_Game_Lag.md) · [EXP_08_B Upload Gagal](../../../07-experience_library/EXP_08_B_Upload_Gagal.md)
- Sebelum: [P02 Promise](./XI-S4-P02_promise-async-await.md)
- Lanjut: [P04 Fetch & JSON](./XI-S4-P04_fetch-json.md)
- MM-17 · CXI-T2
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] EXP_08 hook — client/server/pending
- [ ] Role-play request/response live
- [ ] Kontrak fiktif 5 field + error response
- [ ] Trap "field selalu ada" dibahas
- [ ] Pair baca kontrak — prediksi JSON
- [ ] Preview URL API P04 — baca docs
- [ ] Tidak distribusi kontrak template siap pakai

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
