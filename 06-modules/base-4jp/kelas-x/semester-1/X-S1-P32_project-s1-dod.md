# X-S1-P32 — Project S1: Uji Final DoD

| Field | Isi |
|---|---|
| Kode | X-S1-P32 |
| Basis | **4JP** · Pertemuan **32/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Uji paket DoD + bugfix kecil; tanpa fitur baru, tanpa revisi besar, tanpa pelarian ke dekorasi** |

## Learning Transformation

Dari halaman yang "sudah dipolish dan direvisi" → halaman yang **terbukti siap** ditunjukkan: DoD dicentang satu per satu, bug kecil yang masih tersisa ditambal, status jujur ditulis untuk P33 — bukan klaim, bukan renovasi semalam.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut DoD, checklist paket, bugfix kecil, batas "siap showcase" |
| **C2** | Memahami | Menjelaskan beda P32 (uji paket final) vs P28 (checkpoint pertama) vs P30 (revisi antrian) |
| **C3** | Menerapkan | Menjalankan DoD checklist dan menambal 1–2 bug kecil |
| **C4** | Menganalisis | Membedakan bug kecil (< 10 menit) vs masalah besar (dicatat, bukan dikerjakan) |
| **C5** | Mengevaluasi | Memutuskan "siap P33" dengan bukti DoD, bukan rasa percaya diri |
| **C6** | Mencipta | Kartu status jujur: lulus, bug kecil ditambal, sisa yang dibawa ke P33 |

**Fokus:** C3–C5 · **Puncak:** C5–C6 · Showcase → **P33**

## Beda DoD dari checkpoint lain

| Pertemuan | Karakter |
|---|---|
| **P28 Checkpoint** | Paket pertama kali diuji oleh pemilik; perbaikan bebas |
| **P30 Revisi** | Antrian dari peer dikerjakan satu per satu |
| **P31 Polish** | Sentuhan aksesibilitas dan UX |
| **P32 DoD** | **Garis akhir**: semua domain disentuh, bugfix kecil, status ditulis untuk showcase |

## DoD paket (5 domain)

| Domain | Kriteria lulus |
|---|---|
| **Spek** | Masalah & pengguna masih sesuai artefak; brief tidak bergeser |
| **Struktur (HTML)** | Landmark, `h2` tiap section, `id` sesuai spek, `title` benar |
| **Keterbacaan (CSS)** | `max-width`, spacing, hierarki, kontras, tombol kelihatan |
| **Perilaku (JS)** | AC fitur 1 lulus + regresi; AC fitur 2/polish lulus |
| **Sopan (UX/a11y)** | `lang`, label aksi, fokus Tab, tanpa `outline: none` kosong |

Lembar: [skill-js/p32-dod/checklist-dod.md](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p32-dod/checklist-dod.md)

## Bugfix kecil (< 10 menit)

Jika satu item DoD gagal dan perbaikannya kecil, tambal sekarang:
- Satu `h2` yang hilang → tambahkan.
- `lang` masih kosong → isi.
- Typo `id` pada listener → cocokkan.

Jika lebih dari 10 menit atau menyentuh arsitektur: **tulis di kartu status, selesaikan di P33 jika masih ada waktu**.

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | DoD bukan selebrasi — ini garis resmi |
| 10–30 | Scaffold | C2 | Lima domain · bugfix kecil vs masalah besar |
| 30–50 | Experience | C2–C4 | Kelas uji demo p32 (siap tapi ada 2 item G) |
| 50–65 | Trap | C4 | Renovasi malam terakhir · fitur 3 · menghapus AC yang gagal |
| 65–85 | Concept | C2 | Kartu status = bekal P33 · "siap" = DoD lulus, bukan "tidak ada bug di kepala" |
| 85–95 | Practice mini | C3 | Isi status awal 5 domain sebelum coding |
| 95–105 | Transisi | — | Buka project + salin checklist-dod |
| 105–120 | Scaffold praktik | C2–C3 | I do: satu domain, bukti lulus, bugfix demo |
| 120–165 | Practice | C3–C6 | Uji 5 domain · bugfix kecil · kartu status |
| 165–180 | Reflect | C5 | Status jujur · preview P33 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Renovasi CSS semalam sebelum showcase | Bugfix kecil yang tersisa |
| Fitur ke-3 "sekalian diperiksa" | Tutup garis DoD yang ada |
| Menghapus AC yang masih G dari spek | Status G ditulis di kartu, disampaikan di P33 |
| "Semua sudah pasti oke" tanpa diuji | DoD dicentang domain per domain |
| Membandingkan dengan project teman | Spek sendiri yang jadi hakim |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **DoD** | Definition of Done — semua domain dicek, hasilnya tertulis |
| **Bugfix kecil** | < 10 menit, satu lapisan, tidak menyentuh arsitektur |
| **Kartu status** | Dokumen 1 halaman: domain lulus / gap tersisa / sisa yang dibawa P33 |
| **Siap showcase** | DoD terisi penuh, bukan hanya "rasanya sudah beres" |

## Cognitive Trap

- Menghabiskan 100 menit menambah animasi karena "kurang hidup sebelum ditunjukkan."
- Menghapus baris AC yang masih G supaya checklist terlihat hijau.
- Membandingkan artefak dengan teman lalu mulai renovasi.
- "Bug kecil" yang ternyata butuh 40 menit dan merusak fitur lain.
- Menyimpan P33 sebagai hari revisi besar — P33 adalah showcase, bukan P30 jilid 3.

## Guiding Questions

1. Semua domain sudah diuji hari ini — bukan dari ingatan P28?
2. Bug yang tersisa: < 10 menit dan satu lapisan? Atau masuk kartu status?
3. Kartu statusku: berapa domain lulus, berapa yang ada gap?
4. Yang dibawa ke P33: sudah tertulis, bukan diam-diam?
5. Setelah bugfix: regresi fitur 1 masih lulus?

## Kriteria penerimaan

- [ ] Checklist-DoD terisi semua domain
- [ ] Setiap domain: L, G (bugfix), atau G (kartu) — tidak ada yang kosong
- [ ] Bugfix dikerjakan ≤ 2 item, masing-masing < 10 menit
- [ ] Kartu status ditulis (siap dibawa ke P33)
- [ ] Tanpa fitur baru / tanpa renovasi besar / tanpa AC dihapus

## Exit Ticket

1. Domain yang lulus: … / 5
2. Bugfix yang dikerjakan: …
3. Gap yang dibawa ke P33 (jujur): …
4. Regresi fitur 1 setelah bugfix: …

## Formatif

**Mengevaluasi · C5** · **Mencipta · C6** — kartu status yang jujur, bukan showcase yang penuh klaim.

## Catatan Guru

Jaga waktu ketat. Siswa yang renovasi besar di menit 120 = hentikan, minta kartu status. P33 adalah panggung, bukan hari repair shop. Gap yang jujur justru menunjukkan proses berpikir yang baik di showcase.
