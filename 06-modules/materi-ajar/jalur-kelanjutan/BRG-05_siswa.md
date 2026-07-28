# Handout Siswa — BRG-05

**Jalur pendamping CPLF** — melengkapi modul inti (bukan pengganti silabus).

---

## 1. Tujuan

Dari `<script>` CDN di HTML → **proyek npm** dengan script `dev` / `build`.

## 2. Materi & langkah

## Mengapa setelah Git

`.gitignore` sudah mention `node_modules` (XI-S4-P11) — BRG-05 memberi **makna** folder itu.

## Live demo guru (tidak wajib siswa install semua di lab tipis)

```bash
npm create vite@latest ma-web-demo -- --template vanilla
cd ma-web-demo
npm install
npm run dev
```

Jelaskan isi:

| File | Fungsi |
|------|--------|
| `package.json` | Nama, scripts, dependencies |
| `node_modules/` | Paket unduh (jangan commit) |
| `src/main.js` | Entry seperti `app.js` CPLF |
| `vite.config.js` | Dev server + bundler |

## Trap

**Asumsi:** npm = hanya untuk React.  
**Klarifikasi:** npm = **manajer paket JS** — TF.js, Express, React semua bisa dari sini.

## PR siswa (opsional lab)

1. Inisialisasi Vite vanilla; pindahkan 1 halaman project X ke `src/`.  
2. Commit tanpa `node_modules`.

## Kait ML

S5+ bisa pakai `npm install @tensorflow/tfjs` alih-alih CDN — opsional, bukan wajib backbone.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)

## Latihan / PR

1. Inisialisasi Vite vanilla; pindahkan 1 halaman project X ke `src/`.  
2. Commit tanpa `node_modules`.

---

_Kerjakan sesuai arahan guru._

## Modul CPLF terhubung

- `XI-S4-P04` — [handout modul](../kelas-xi/semester-4/XI-S4-P04_fetch-json_siswa.md)
- `XI-S4-P11` — [handout modul](../kelas-xi/semester-4/XI-S4-P11_git-dasar_siswa.md)
