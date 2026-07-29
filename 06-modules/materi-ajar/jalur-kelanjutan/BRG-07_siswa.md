# Handout Siswa — BRG-07

**Jalur pendamping CPLF** — melengkapi modul inti (bukan pengganti silabus).

---

## 1. Tujuan

Dari localStorage saja → **API sendiri** dengan persistensi file JSON (amanah data).

## 2. Materi & langkah

## Stack minimal

- Node LTS  
- Express  
- `cors`, `express.json()`  
- File `data/peminjaman.json` (spiral PRJ perpustakaan)

## Struktur proyek

```text
ma-api/
  package.json   "type": "module"
  server.js
  data/peminjaman.json
  .gitignore     node_modules, .env
```

## CRUD ringkas (guru scaffold live)

| Method | Path | Aksi |
|--------|------|------|
| GET | `/api/peminjaman` | Baca semua |
| POST | `/api/peminjaman` | Tambah (validasi body) |
| DELETE | `/api/peminjaman/:id` | Hapus |

## Amanah & MA

- Validasi input (no SQL injection — tidak pakai SQL dulu).  
- Jangan commit `.env` / API key.  
- Backup `data/*.json` sebelum demo hapus.

## Integrasi FE

React/Vanilla: `fetch('http://localhost:3000/api/peminjaman')` — ganti localStorage S4.

## Batas CPLF backbone

Express **tidak** masuk ujian XII wajib — jalur **kuliah/ekstra/keterampilan lanjutan**.

## Naik ke produksi sekolah

Lihat [aplikasi/14_API_Contract_Overview.md](../../../aplikasi/14_API_Contract_Overview.md) — kontrak REST tim IT madrasah.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)

## Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58 · QS Al-Mu’minun 23:8

**Kait di kelas hari ini:** API Node = amanah data & endpoint yang tidak khianat pengguna.

_Matriks lengkap: [Mapping KBC CPLF](../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

---

_Kerjakan sesuai arahan guru._

## Modul CPLF terhubung

