# X-S1-P31 — Project S1: Polish UX Ringan & Aksesibilitas Dasar

| Field | Isi |
|---|---|
| Kode | X-S1-P31 |
| Basis | **4JP** · Pertemuan **31/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Sentuhan akhir untuk pengguna: label, fokus, kontras, `lang`/`title`; tanpa fitur JS baru, tanpa animasi, tanpa pelarian AC** |

## Learning Transformation

Dari halaman yang (semoga) lulus spek → halaman yang **sopan dipakai**: tombol punya nama aksi, Tab bisa dikejar mata, kontras cukup, bahasa dokumen jujur — polish = kesopanan, bukan kembang api.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut `lang`, `title`, label tombol, fokus keyboard, kontras, `alt` (jika ada gambar) |
| **C2** | Memahami | Menjelaskan beda polish vs fitur baru; beda akses dasar vs kuliah ARIA |
| **C3** | Menerapkan | Menerapkan 3–5 sentuhan dari lembar polish pada project sendiri |
| **C4** | Menganalisis | Menemukan tombol “Klik”, `outline: none`, Tab hilang, `lang` salah |
| **C5** | Mengevaluasi | Menolak animasi/hover ramai jika merusak fokus atau kontras |
| **C6** | Mencipta | Jejak 3 sentuhan + alasan pengguna (siap ditunjuk di P33) |

**Fokus:** C3–C5 · **Puncak:** C4–C6 · Uji final DoD → **P32**

## Pintu masuk (wajib)

Jika AC spek P23 masih **gagal** (antrian P30 belum lulus): **maks. 20 menit** tutup item itu atau tulis jujur di log. Polish **tidak** menutupi AC gagal. P31 bukan P30 jilid 2 yang menyamar.

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Polish = sopan; bukan fitur 3; pintu AC |
| 10–30 | Scaffold | C2 | Lembar 8 item: `lang` · `title` · label · Tab · fokus · kontras · target klik · `alt`/`nav` |
| 30–50 | Experience | C2–C4 | Demo “halaman jadi tapi tidak ramah Tab” |
| 50–65 | Trap | C4 | `outline: none` · animasi · “Klik” · ARIA menumpuk · ganti `id` |
| 65–85 | Concept | C2 | Keyboard = pengguna tanpa mouse; label = janji aksi |
| 85–95 | Practice mini | C3 | Audit 8 item di halaman sendiri (centang sebelum ubah) |
| 95–105 | Transisi | — | AC masih G? 15–20' tutup atau catat; lalu polish |
| 105–120 | Scaffold praktik | C2–C3 | I do: `lang` + label tombol + `:focus` |
| 120–165 | Practice | C3–C6 | 3–5 sentuhan · uji Tab · regresi klik AC |
| 165–180 | Reflect | C5 | 3 alasan pengguna · preview P32 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Fitur JS ke-3, modal, hamburger | Label, fokus, `lang`, `title` |
| Animasi / `transition` wajib / dark mode | Kontras dan target klik yang cukup |
| `outline: none` “biar rapi” | Fokus terlihat (`:focus`) |
| Kuliah ARIA / `role` di semua `div` | `aria-label` singkat pada `nav` **jika** ada `nav` (P10) |
| Mengganti `id` spek | Selector dan JS tetap |
| Polish sebagai ganti AC gagal | AC dulu, atau status gagal tertulis |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **Polish** | Sentuhan akhir yang menolong pemakaian, bukan dekorasi baru |
| **UX ringan** | Nama tombol jelas, jarak klik, urutan Tab masuk akal |
| **Aksesibilitas dasar** | Halaman bisa dipakai dengan keyboard; teks terbaca; bahasa/judul dokumen benar |
| **Fokus** | Tanda di mana Tab sedang berada |
| **Label aksi** | Teks tombol = apa yang terjadi, bukan “Klik” / “HERE” |
| **`lang`** | Bahasa halaman (`id` untuk Indonesia) — alat bantu dan browser membacanya |
| **`title`** | Nama di tab browser; harus sama janji spek, bukan `Document` |

Tidak diwajibkan: angka rasio kontras, screen reader, skip link. Uji kelas = **Tab + mata + spek**.

## Lembar 8 item (inti)

- [ ] `<html lang="id">` (atau bahasa spek)
- [ ] `<title>` = judul halaman spek
- [ ] Teks tombol = aksi (bukan “Klik”)
- [ ] `type="button"` pada tombol JS
- [ ] Tab mencapai tombol; fokus **kelihatan**
- [ ] Tidak ada `outline: none` tanpa pengganti `:focus`
- [ ] Kontras teks vs latar cukup (spiral P25)
- [ ] Jika ada `img`: `alt` bermakna (dekoratif: `alt=""` sadar) · jika ada `nav`: `aria-label` singkat

Contoh + demo tidak ramah: [skill-js/p31-polish/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p31-polish/)

## Cognitive Trap

- `outline: none` lalu klaim “lebih profesional.”
- 40 menit hover gradient, `lang` masih default.
- Menumpuk `aria-*` tanpa paham — bukan S1.
- Mengganti `id` agar “lebih aksesibel.”
- Animasi yang mengalihkan fokus.
- Polish sementara AC fitur 1 masih gagal.

## Guiding Questions

1. Tanpa mouse: Tab sampai tombol spek? Fokus kelihatan?
2. Teks tombol menjelaskan aksi atau hanya menyuruh “klik”?
3. `lang` dan `title` jujur pada spek?
4. Sentuhan ini menolong pengguna atau hanya menolong screenshot?
5. Setelah polish: AC P26–P27 masih lulus (regresi)?

## Kriteria penerimaan

- [ ] Pintu AC: gagal spek ditutup atau tertulis jujur
- [ ] ≥5 item lembar terpenuhi (wajib: `lang`, `title`, label, Tab+fokus)
- [ ] 3 sentuhan tertulis + alasan pengguna
- [ ] Uji Tab + regresi klik fitur spek
- [ ] Tanpa fitur JS baru / tanpa ganti `id` / tanpa animasi sebagai syarat

## Exit Ticket

1. Satu masalah Tab/fokus yang kutemukan: …
2. Tiga sentuhan + alasan: …
3. Item lembar yang sengaja tidak kutambah (ARIA ramai / animasi): …
4. Regresi fitur 1: lulus / gagal

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — kesopanan pemakaian, bukan “lebih Instagram.”

## Catatan Guru

Nilai uji Tab dan alasan label. Jangan lomba palet. AC spek yang masih G = data untuk P32, bukan dihapus diam-diam.
