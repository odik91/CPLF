# X-S1-P28 — Project S1: Checkpoint Uji Acceptance

| Field | Isi |
|---|---|
| Kode | X-S1-P28 |
| Basis | **4JP** · Pertemuan **28/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Uji semua AC spek P23 + perbaiki yang gagal; tanpa fitur baru, tanpa peer review penuh** |

## Learning Transformation

Dari “P26–P27 sudah diklik, jadi project selesai” → “**paket diuji**: struktur, keterbacaan, fitur 1, fitur 2/polish — lulus/gagal dengan bukti, lalu perbaikan terarah dan uji ulang (termasuk regresi).”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut checkpoint, AC, temuan, prioritas, regresi, uji ulang |
| **C2** | Memahami | Menjelaskan beda checkpoint vs “sudah selesai”; beda vs peer review P29 |
| **C3** | Menerapkan | Menjalankan lembar checkpoint pada project sendiri |
| **C4** | Menganalisis | Memetakan AC gagal ke lapisan HTML / CSS / JS |
| **C5** | Mengevaluasi | Memilih 1–3 perbaikan berprioritas, bukan rewrite atau fitur baru |
| **C6** | Mencipta | Catatan status jujur: yang lulus, yang diperbaiki, yang ditunda ke P29–P30 |

**Fokus:** C4–C5 · **Puncak:** C5–C6 · Peer review spek → **P29**

## Bukan P29 / P30 / P32

| Pertemuan | Peran |
|---|---|
| **P28 Checkpoint** | Pemilik menguji **sendiri** vs `spek.md`; perbaiki gap yang ketemu hari ini |
| **P29 Peer review** | Orang lain menguji tanpa melihat kode; catat umpan balik |
| **P30 Revisi** | Kerjakan prioritas dari peer |
| **P32 Uji final** | DoD paket sebelum showcase |

Hari ini bukan “teman nilai karyaku” dan bukan “tambah tombol.”

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Recall P04/P12 · checkpoint ≠ selesai ≠ P29 |
| 10–30 | Scaffold | C2 | Paket AC: HTML · CSS · JS1 · JS2/polish · regresi |
| 30–50 | Experience | C2–C4 | Demo p28: halaman “jadi” yang gagal 3 AC |
| 50–65 | Trap | C4 | Hanya uji JS · rewrite · fitur 3 sebagai “perbaikan” |
| 65–85 | Concept | C2 | Siklus: uji → temuan + lapisan → prioritas → perbaiki satu → uji ulang |
| 85–95 | Practice mini | C3 | Status awal semua AC sendiri (lulus/gagal/belum uji) |
| 95–105 | Transisi | — | Buka project + salin lembar checkpoint |
| 105–120 | Scaffold praktik | C2–C3 | I do: satu temuan = bukti + lapisan + perbaikan terkecil |
| 120–165 | Practice | C3–C6 | Uji paket · perbaiki 1–3 · regresi · catat sisa |
| 165–180 | Reflect | C5 | Status jujur · preview P29 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Klaim selesai karena “sudah bisa diklik” | Centang setiap AC spek dengan bukti |
| Peer review penuh (itu P29) | Uji sendiri; teman boleh jadi saksi 1 AC, bukan hakim selera |
| Rewrite / ganti brief | Perbaiki item gagal berprioritas |
| Fitur 3, animasi, ganti palet besar | Perbaikan terkecil yang membuat AC lulus |
| Mengubah AC agar cocok ke bug | Bug menyesuaikan spek, bukan spek menyesuaikan bug |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **Checkpoint** | Pintu: paket diuji sebelum orang lain mereview |
| **AC** | Syarat lulus yang bisa dicentang tanpa debat “keren” |
| **Temuan** | AC gagal + bukti (teks yang terlihat / klik yang terjadi) |
| **Lapisan** | HTML (struktur/`id`) · CSS (keterbacaan) · JS (perilaku) |
| **Prioritas** | Yang paling menghalangi janji spek, dikerjakan dulu |
| **Regresi** | Setelah perbaikan, AC yang tadi lulus diuji lagi |
| **Uji ulang** | AC yang diperbaiki dicentang ulang hari itu juga |

## Paket uji (minimal)

Urutan wajib — jangan loncat ke JS dulu.

| Urutan | Lapisan | Yang diuji |
|---|---|---|
| 1 | HTML | Landmark, 2–3 `section` + `h2`, `id` sesuai spek, teks awal |
| 2 | CSS | `max-width`, jarak, hierarki, kontras, tombol kelihatan tombol |
| 3 | JS fitur 1 | Sebelum klik / setelah klik / konsol |
| 4 | JS fitur 2 atau polish | AC P27 · target elemen benar |
| 5 | Regresi | Fitur 1 masih lulus setelah langkah 4 |

Lembar: [skill-js/p28-checkpoint/lembar-checkpoint.md](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p28-checkpoint/lembar-checkpoint.md)

Demo temuan (bukan kunci project): [skill-js/p28-checkpoint/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p28-checkpoint/)

## Cognitive Trap

- Menguji hanya fitur yang baru dikerjakan kemarin.
- “Halaman sudah kelihatan” = AC HTML/CSS dianggap lulus tanpa dibaca.
- Gagal 2 AC → buang folder, generate ulang.
- Mengubah kalimat AC di `spek.md` agar bug jadi “lulus.”
- Menambah interaksi baru supaya “checkpoint lebih meyakinkan.”

## Guiding Questions

1. AC mana yang **belum diuji** — bukan yang “rasanya sudah”?
2. Temuan ini lapisan HTML, CSS, atau JS? Bukti apa?
3. Perbaikan #1 yang paling menolong janji spek?
4. Setelah perbaikan: AC itu ✅, dan fitur 1 masih ✅?
5. Apa yang **sengaja** ditunda ke P29/P30 (jujur, tertulis)?

## Kriteria penerimaan

- [ ] Semua AC di `spek.md` punya status: lulus / gagal / ditunda
- [ ] Setiap gagal punya bukti + lapisan
- [ ] 1–3 perbaikan terarah dikerjakan
- [ ] Uji ulang AC yang diperbaiki + regresi fitur 1
- [ ] Tidak ada fitur baru / rewrite / AC diubah agar lulus
- [ ] Lembar checkpoint terisi (bukan klaim lisan)

## Exit Ticket

1. Jumlah AC lulus / gagal / ditunda: …
2. Satu temuan + lapisan + perbaikan: …
3. Hasil uji ulang + regresi: …
4. Bekal ke P29 (apa yang peer harus uji dulu): …

## Formatif

**Menganalisis · C4** · **Mengevaluasi · C5** — dinilai dari kejujuran status dan ketepatan prioritas, bukan dari “semua sudah hijau.”

## Catatan Guru

Siswa yang semua AC-nya lulus: uji regresi sekali lagi + rapikan lembar, **jangan** menambah fitur. Yang spek-nya AC “keren/modern”: bantu tulis ulang AC terukur dulu, baru uji.
