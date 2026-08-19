# Demo P32 — Uji Final DoD

Demo ini punya **2 bug ringan** yang sengaja ditanam. Uji DoD-mu sebelum melihat kunci.

## Cara buka

Buka `index.html` di browser.

## Koneksi

| File | Keterangan |
|---|---|
| `index.html` | Halaman demo |
| `style.css` | CSS keterbacaan |
| `script.js` | Dua listener, satu salah target |

## Yang ditanam

1. **Domain Struktur HTML** — `<title>` menyebut "P28" padahal ini demo P32. Bugfix: ganti teks.
2. **Domain Perilaku JS** — `#tombolCadangan` menulis ke `#pesan`, bukan `#sorotanCadangan`. Bugfix: ganti satu identifier JS, lalu regresi fitur 1.

## Domain lain

Spek, CSS, UX/a11y semua lulus — untuk latihan fokus bugfix.

## Lembar siswa

[checklist-dod.md](./checklist-dod.md) · [kartu-status.md](./kartu-status.md)
