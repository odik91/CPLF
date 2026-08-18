# X-S1-P29 — Project S1: Peer Review berdasar Spek

| Field | Isi |
|---|---|
| Kode | X-S1-P29 |
| Basis | **4JP** · Pertemuan **29/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Umpan balik berdasar spek pemilik; tanpa mengubah kode, tanpa selera sebagai hakim** |

## Learning Transformation

Dari “checkpoint sendiri + ‘bagus ya’” → “**mata orang lain** menguji janji di `spek.md` tanpa melihat kode; temuan tertulis jadi **antrian revisi** untuk P30, bukan perdebatan keren/jelek.”

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut peer review, bukti, spek pemilik, antrian revisi |
| **C2** | Memahami | Menjelaskan beda P28 (uji sendiri) vs P29 (uji orang lain) vs P30 (kerjakan) |
| **C3** | Menerapkan | Menjalankan lembar peer pada project teman (urutan HTML→CSS→JS) |
| **C4** | Menganalisis | Memetakan temuan ke AC + lapisan, bukan ke “punyaku lebih ramai” |
| **C5** | Mengevaluasi | Menyaring umpan balik: yang terikat spek vs opini; memilih prioritas 1–3 |
| **C6** | Mencipta | Rencana revisi tertulis untuk P30 (antrian, bukan kode hari ini) |

**Fokus:** C3–C5 · **Puncak:** C5–C6 · Revisi dikerjakan → **P30**

## Bukan P28 / P30

| Pertemuan | Peran |
|---|---|
| **P28** | Pemilik menguji sendiri; boleh memperbaiki gap yang ketemu |
| **P29** | Reviewer menguji **tanpa kode**; pemilik **mencatat**, tidak ngoding |
| **P30** | Pemilik mengerjakan prioritas dari lembar peer |

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Mata kedua · kode ditutup · spek dibuka |
| 10–30 | Scaffold | C2 | Protokol: peran, urutan uji, bahasa bukti |
| 30–50 | Experience | C2–C4 | Kelas jadi peer pada demo P28 (tanpa `script.js`) |
| 50–65 | Trap | C4 | “Bagus” · selera · bandingkan punya sendiri · owner klikin · reviewer ngoding |
| 65–85 | Concept | C2 | Lembar peer · klarifikasi AC · antrian revisi |
| 85–95 | Practice mini | C3 | Satu kalimat umpan balik: versi spek vs versi selera |
| 95–105 | Transisi | — | Pairing · tukar `spek.md` + browser · editor ditutup |
| 105–120 | Scaffold praktik | C2–C3 | I do: buka halaman teman, isi 1 baris lembar |
| 120–145 | Practice A→B | C3–C5 | Review 20–25' · tanpa sentuh file |
| 145–165 | Practice B→A + rencana | C3–C6 | Giliran · pemilik tulis antrian P30 |
| 165–180 | Reflect | C5 | Exit · preview P30 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| “Bagus / keren / kurang modern” | AC nomor … lulus/gagal + bukti yang terlihat |
| Membuka `script.js` / mengedit file teman | Browser + `spek.md` + lembar |
| Memperbaiki bug hari ini | Antrian revisi untuk P30 |
| Mengubah AC di tengah review | Klarifikasi: “AC 4 maksudnya teks yang mana?” |
| Membandingkan dengan project sendiri | Menguji janji **pemilik**, bukan selera reviewer |
| Owner mengklikkan semua “biar cepat” | Reviewer yang menguji; owner diam kecuali ditanya |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **Peer review** | Teman menguji artefak vs spek pemilik, dengan bukti |
| **Spek pemilik** | Satu-satunya hakim; bukan spek di kepala reviewer |
| **Bukti** | Teks yang terbaca, klik yang terjadi, bagian yang ada/tidak ada |
| **Tanpa kode dulu** | Editor ditutup sampai lembar selesai |
| **Klarifikasi** | Tanya makna AC, bukan membela atau mengubah janji |
| **Antrian revisi** | 1–3 item terikat spek yang akan dikerjakan P30 |
| **Opini** | Selera; dicatat terpisah, **tidak** jadi prioritas wajib |

## Bahasa umpan balik

| Ditolak | Dipakai |
|---|---|
| “Kurang keren.” | “AC 3 gagal: baris teks melebar penuh layar; spek minta lebar terbatas.” |
| “Tombolnya aneh.” | “AC 5: setelah klik, `#pesan` tetap ‘Belum dicek’; spek minta ‘Mie Sehat tersedia.’” |
| “Punya aku lebih lengkap.” | (bukan temuan) |
| “Bagus.” | “AC 1–2 lulus: `header`/`main`/`footer` ada; tiga `section` masing-masing punya `h2`.” |

Lembar: [skill-js/p29-peer-review/](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p29-peer-review/)
Latihan prediksi: demo [p28-checkpoint](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p28-checkpoint/) + `spek.md`-nya.

## Cognitive Trap

- Review tanpa membaca spek.
- Owner duduk di belakang dan mengarahkan klik.
- Reviewer memperbaiki kode “sekalian tolong.”
- Temuan selera disamakan dengan temuan AC.
- Pemilik mengubah `spek.md` agar temuan menghilang.
- Lembar kosong, hanya pujian lisan.

## Guiding Questions

1. Spek siapa yang diuji — pemilik atau selera reviewer?
2. Temuan ini nomor AC berapa, bukti apa, lapisan apa?
3. Mana opini yang **tidak** masuk antrian P30?
4. Prioritas 1 untuk pemilik: AC mana yang paling menghalangi janji pengguna?
5. Kode sudah disentuh hari ini? (Jawaban yang benar: belum.)

## Kriteria penerimaan

- [ ] Dua peran terlaksana: jadi reviewer **dan** jadi pemilik
- [ ] Lembar peer terisi ≥4 AC dengan bukti (bukan “bagus”)
- [ ] Editor/kode teman tidak diubah
- [ ] Pemilik punya antrian revisi 1–3 item terikat spek
- [ ] Opini selera (jika ada) terpisah dari antrian
- [ ] Klarifikasi AC boleh; pelintiran AC tidak

## Exit Ticket

1. Satu temuan yang kuberikan (AC + bukti): …
2. Satu temuan yang kuterima (AC + bukti): …
3. Prioritas P30 #1: …
4. Satu opini yang **tidak** kukerjaan nanti: …

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — kualitas lembar dan ketepatan antrian, bukan jumlah pujian.

## Catatan Guru

Pasangkan beda brief bila mungkin (A review B). Ganjil = trio: dua reviewer, satu halaman. Yang spek-nya masih “keren”: 5 menit tulis AC terukur sebelum review dimulai. P30 yang mengerjakan; tahan tangan yang gatal mengetik.
