# P32 — Checklist DoD + kartu status + demo 2 bug

Folder ini **bukan** artefak baru yang harus diselesaikan dari nol. Ada dua isi:

1. `checklist-dod.md` dan `kartu-status.md` — **salin ke folder project S1 milikmu** (lanjutan P23–P31). Isi dari spek dan halaman sendiri.
2. Demo kantin (`index.html`, `style.css`, `script.js`) — **sengaja** ada 2 bug ringan untuk prediksi kelas. Bukan karya, bukan kunci project.

Kerjakan DoD di **project yang sama**. Jangan menimpa projectmu dengan folder ini.

## Pakai lembar

1. Salin `checklist-dod.md` dan `kartu-status.md` ke `project-s1-.../` milikmu.
2. Uji 5 domain pada halaman sendiri, bukan pada demo.
3. Bugfix kecil (≤ 2 item, < 10 menit) hanya di project sendiri.
4. Isi kartu status untuk P33.

## Demo (guru + prediksi kelas)

Buka `index.html` di browser. Isi status 5 domain **tanpa** membuka `script.js`. Baru cocokkan.

| File | Keterangan |
|---|---|
| `index.html` | Halaman demo |
| `style.css` | CSS keterbacaan (domain CSS lulus) |
| `script.js` | Dua listener, satu salah target |

Yang ditanam (kunci setelah prediksi):

1. **Struktur HTML** — `<title>` masih menyebut "P28". Bugfix: ganti teks.
2. **Perilaku JS** — `#tombolCadangan` menulis ke `#pesan`, bukan `#sorotanCadangan`. Bugfix: ganti satu identifier, lalu regresi fitur 1.
