# Handout Siswa — X-S1-P31

**Topik:** Project S1 — Polish UX ringan & aksesibilitas dasar · **4JP** · Pertemuan **31/34**

**Modul:** [X-S1-P31_project-s1-polish.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P31_project-s1-polish.md)
**Bacaan:** [X-S1-P31_bacaan-mimi-robi.md](./X-S1-P31_bacaan-mimi-robi.md)
**Lembar + demo:** [skill-js/p31-polish/](./skill-js/p31-polish/)

Bukan fitur baru. Bukan animasi. Bukan mengganti `id`. Jika AC spek masih gagal: tutup atau catat dulu (maks. ±20 menit).

## Lembar 8 item

Salin [lembar-polish.md](./skill-js/p31-polish/lembar-polish.md). Audit **sebelum** mengubah.

| # | Item | L / G | Bukti | Yang kuubah |
|---|---|---|---|---|
| 1 | `html lang="…"` sesuai spek | | | |
| 2 | `<title>` = judul spek | | | |
| 3 | Teks tombol = aksi | | | |
| 4 | `type="button"` pada tombol JS | | | |
| 5 | Tab sampai tombol; fokus kelihatan | | | |
| 6 | Tidak `outline: none` tanpa `:focus` | | | |
| 7 | Kontras teks vs latar | | | |
| 8 | `img` → `alt` · `nav` → `aria-label` singkat (jika ada) | | | |

Wajib lulus hari ini: **1, 2, 3, 5.** Item 8 hanya jika elemennya ada.

## Uji Tab (wajib)

1. Klik di alamat browser, lalu **Tab** berulang.
2. Catat urutan: header → isi → tombol spek?
3. Saat tombol terfokus: ada bingkai/tanda?
4. **Enter** atau **Space** pada tombol: AC fitur masih lulus?

## Tiga sentuhan + alasan pengguna

| Sentuhan | File | Alasan (siapa tertolong) |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

## Trap

- `outline: none`
- Tombol “Klik” / “HERE”
- Hover 40 menit, `title` masih `Document`
- `aria-*` di semua `div`
- Ganti `id`
- Animasi sebagai “polish”

## Checklist kelas

- [ ] Pintu AC jujur
- [ ] Item 1–3 dan 5 lulus
- [ ] 3 alasan pengguna
- [ ] Regresi klik fitur spek
- [ ] Tanpa fitur JS baru

## Exit

1. Masalah Tab/fokus: …
2. Tiga sentuhan: …
3. Yang kutolak (animasi / ARIA ramai): …
4. Regresi fitur 1: …

**Preview P32:** uji DoD paket — spek, AC, polish, regresi — bugfix kecil, bukan renovasi.
