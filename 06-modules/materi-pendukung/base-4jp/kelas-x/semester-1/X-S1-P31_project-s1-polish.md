# Materi Pendukung Guru — X-S1-P31 Polish UX / A11y Dasar

> **RAHASIA GURU** — jangan bagikan apa adanya.

| Field | Isi |
|---|---|
| Kode | X-S1-P31 |
| Modul | [X-S1-P31_project-s1-polish.md](../../../base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish.md) |
| Durasi | **4 JP (180')** |

## Pengetahuan

- Uji kelas = Tab + mata + spek. Bukan WAVE wajib, bukan angka 4.5:1.
- `button` asli + `type="button"` sudah bisa diaktifkan Space/Enter — jangan ganti `div` klik.
- `outline: none` tanpa `:focus` = pengguna keyboard buta posisi.
- `aria-label` hanya pada `nav` jika ada (P10); jangan `role` di setiap `div`.
- Ganti `id` merusak JS — polish bukan refactor spek.
- Pintu: AC spek masih G → 20' tutup atau catat; jangan “tutup dengan gradient.”

## Kunci demo p31 (setelah prediksi)

| Gejala | Lapisan | Perbaikan terkecil |
|---|---|---|
| Tab tidak kelihatan | CSS `outline: none` | hapus / ganti `:focus { outline: 2px solid … }` |
| Tombol bertuliskan “KLIK” | HTML | teks aksi: “Cek status menu” |
| `lang` hilang / `en` | HTML | `lang="id"` |
| `<title>Document</title>` | HTML | judul spek |
| Target klik kecil | CSS | padding tombol |

Fitur JS demo **jalan** — trap: “sudah bisa diklik mouse = siap P32.”

## Recall

P09/P25 = keterbacaan. P10 = `aria-label` nav singkat. P11 = `label` form. P31 = keyboard + nama aksi + dokumen jujur. P32 = DoD paket.

## Etika

Jangan kuliah WCAG. Jangan nilai “paling estetik.” Tanya: “Tanpa mouse, kau tahu Tab di mana?”

## Checklist exit

- [ ] Pintu AC jujur
- [ ] `lang` + `title` + label aksi + fokus Tab
- [ ] 3 alasan pengguna
- [ ] Regresi klik
- [ ] Tanpa fitur 3 / tanpa ganti `id`

## KBC

**Tanggung jawab pada pengguna yang tidak memakai mouse.** Fokus yang dihilangkan “biar rapi” adalah ketidak sopanan, bukan selera.
