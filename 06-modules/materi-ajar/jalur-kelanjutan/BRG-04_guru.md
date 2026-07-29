# Materi Guru Lengkap — BRG-04

**Handout siswa:** [BRG-04_siswa.md](./BRG-04_siswa.md)

**Sumber BRG:** [BRG-04_HTTP_Fetch_ke_Express.md](../../materi-pendukung/jalur-kelanjutan/BRG-04_HTTP_Fetch_ke_Express.md)

---
## Panduan mengajar

# BRG-04 — HTTP: Fetch (Klien) → Express (Server)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU**  
**Durasi:** 2 JP · **Jalur:** C · **Setelah:** XI-S4-P04

## Learning Transformation

Dari “fetch dapat JSON ajaib” → **permintaan HTTP punya sisi server** dengan kontrak REST.

## Prasyarat CPLF

XI-S4-P03 (REST ringkas), P04 (fetch, CORS).

## Materi inti

| Topik | Klien (sudah) | Server (baru) |
|-------|---------------|---------------|
| URL | `fetch(url)` | `app.get('/api/buku', ...)` |
| Method | GET (utama) | GET, POST |
| Status | `res.ok`, 404 | `res.status(404).json()` |
| Body | `res.json()` | `req.body` + JSON |
| CORS | Error di browser | `cors()` middleware |

## Demo guru (Express minimal — laptop guru)

**Prasyarat mesin demo:** Node LTS terpasang.

```javascript
// server.js — guru ketik live, siswa amati + fetch dari halaman index
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://127.0.0.1:5500' })); // sesuaikan Live Server
app.use(express.json());

const buku = [
  { id: 1, judul: 'Fiqih Dasar', tersedia: true },
  { id: 2, judul: 'Matematika X', tersedia: false },
];

app.get('/api/buku', (req, res) => {
  res.json(buku);
});

app.listen(3000, () => console.log('API MA :3000'));
```

Siswa: halaman `fetch('http://localhost:3000/api/buku')` — bandingkan dengan API publik S4.

## Trap

**Asumsi:** CORS = “bug browser”.  
**Klarifikasi:** Keamanan asal silang — server **memilih** siapa boleh baca.

## PR

Gambar diagram request/response untuk project S4 (tanpa wajib deploy server siswa).

## Lanjut

[BRG-07](./BRG-07_Node_Express_REST_Minimal.md) — CRUD + persistensi file/JSON.

## Kait aplikasi sekolah

Stack produksi internal: [aplikasi/01_Arsitektur_Sistem.md](../../../aplikasi/01_Arsitektur_Sistem.md) (Nest/Next) — **preview karier**, bukan ujian XII.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)


---
## Modul CPLF terhubung

- XI-S4-P04
- XI-S4-P13

## Etika

Live demo — siswa praktik paralel, bukan copas file guru.

---
## KBC — dalil & tafsir ringkas

**Panca cinta:** Bangsa · tabayyun

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Hujurat 49:6 · QS Al-Isra 17:36

**Kait di kelas hari ini:** Fetch → Express: verifikasi respons server seperti verifikasi berita.

_Matriks lengkap: [Mapping KBC CPLF](../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan saat bridge ke modul CPLF; validasi dalil/hadits dengan tim KBC.
