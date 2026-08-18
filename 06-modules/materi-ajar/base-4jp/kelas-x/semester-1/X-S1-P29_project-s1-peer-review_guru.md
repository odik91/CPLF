# Materi Ajar Guru — X-S1-P29
## Project S1: Peer Review berdasar Spek (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **29/34** · 180 menit |
| Transformasi | Checkpoint sendiri → mata kedua vs spek pemilik; antrian P30, bukan kode hari ini |
| Fokus | Protokol peer · bukti AC · tanpa kode · rencana revisi |
| Dilarang | Edit file teman · selera sebagai hakim · pelintir AC · kerjakan revisi (P30) |
| Handout | [X-S1-P29_project-s1-peer-review_siswa.md](./X-S1-P29_project-s1-peer-review_siswa.md) |
| Bacaan | [X-S1-P29_bacaan-mimi-robi.md](./X-S1-P29_bacaan-mimi-robi.md) |
| Lembar | [skill-js/p29-peer-review/](./skill-js/p29-peer-review/) |
| Demo uji | [skill-js/p28-checkpoint/](./skill-js/p28-checkpoint/) |
| Modul | [X-S1-P29_project-s1-peer-review.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P29_project-s1-peer-review.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | Peer, bukti, antrian |
| C2 | Memahami | P28 ≠ P29 ≠ P30 |
| C3 | Menerapkan | Lembar peer terisi dari spek teman |
| C4 | Menganalisis | Temuan → AC + lapisan |
| C5 | Mengevaluasi | Spek vs opini; prioritas 1–3 |
| C6 | Mencipta | Rencana revisi tertulis |

**Fokus C3–C5 · puncak C5–C6 · P30 = kerjakan antrian**

### Timeline

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Mata kedua; editor tutup |
| 10–30 | Scaffold | C2 | Protokol + bahasa bukti |
| 30–50 | Experience | C2–C4 | Peer pada demo P28 |
| 50–65 | Trap | C4 | Lima jebakan |
| 65–95 | Concept + mini | C2–C3 | Lembar · 1 kalimat spek vs selera |
| 95–120 | Pair + I do | C2–C3 | Tukar spek · contoh 1 baris |
| 120–145 | Review A→B | C3–C5 | 20–25' |
| 145–165 | Review B→A + antrian | C3–C6 | Giliran · rencana P30 |
| 165–180 | Reflect | C5 | Exit |

## B. Pendukung mengajar

### Persiapan

- Siswa bawa `spek.md`, halaman bisa dibuka browser, lembar checkpoint P28 (boleh dilihat pemilik, **bukan** pengganti spek untuk reviewer).
- Reviewer menerima spek + URL/folder; editor ditutup (VS Code minimize).
- Cetak/salin `lembar-peer.md` dan `rencana-revisi.md`.
- Pairing di papan sebelum menit 95. Ganjil = trio.
- Spek “keren/modern”: 5' tulis AC terukur (P04) atau review ditunda sampai ada 4 AC.

### Pengetahuan di lidah

- Yang diuji = janji tertulis pemilik.
- Urutan uji sama P28: HTML → CSS → JS → regresi.
- “Bagus” tanpa nomor AC = belum review.
- Tangan di keyboard teman = pelanggaran hari ini.

### Recall satu kalimat

> “P12 hakim keren dipecat. P28 kalian menguji diri sendiri. Hari ini teman memegang spekmu. Tangan yang memperbaiki = P30.”

### Miskonsepsi

1. Peer = puji supaya tidak sakit hati.
2. Peer = bandingkan dengan karyaku.
3. Reviewer yang baik = yang membetulkan kodenya.
4. Owner yang baik = yang mengklikkan semua.
5. Temuan = alasan mengubah spek.

### Etika

Lindungi file. Lindungi orang. Serang janji yang gagal, bukan penulisnya. Jangan bacakan ranking “siapa paling bagus.”

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> “Editor minimize. Yang dibuka: `spek.md` teman dan browser. Kalian bukan juri lomba estetika. Kalian saksi janji.”

Papan: **P28 sendiri · P29 mata kedua · P30 tangan.**

#### 10–30 · Scaffold · Memahami · C2

Protokol 5 aturan:

1. Baca spek dulu, baru klik.
2. Urutan HTML → CSS → JS1 → JS2 → regresi.
3. Setiap baris lembar: nomor AC, L/G, bukti, lapisan.
4. Tanya klarifikasi; jangan ubah spek.
5. Tidak menyentuh kode.

Latihan lisan: ubah “kurang keren” jadi kalimat AC (pakai contoh-umpan-balik).

#### 30–50 · Experience · C2–C4

Proyeksi demo P28. Kelas = reviewer. Spek demo dibaca keras. Siswa menulis **satu** temuan di kertas tanpa melihat JS.

Kumpulkan 3 temuan. Cocokkan ke AC 2 (tanpa h2), AC 3 (keterbacaan), AC 6 (target salah). Puji yang menyebut nomor AC + bukti. Tolak yang hanya “jelek.”

#### 50–65 · Trap · Menganalisis · C4

Roleplay cepat (guru jadi owner/reviewer nakal):

1. Owner: “Klik sini, sini, sini.” → hentikan.
2. Reviewer: “Bagus banget.” → “AC nomor berapa?”
3. Reviewer buka `script.js`. → “Itu P30 dan bukan filemu.”
4. Owner hapus baris AC. → pelintiran.
5. “Punya aku ada tombol ketiga.” → opini, bukan temuan.

#### 65–95 · Concept + mini · C2–C3

Kolom papan: **Terikat spek** | **Opini**. Mini: tiap siswa tulis 1 kalimat spek dan 1 kalimat selera dari demo; tukar, teman mencoret yang selera.

#### 95–120 · Pair + I do · C2–C3

Umumkan pasangan. I do 3 menit: buka halaman sampel, isi satu baris lembar di papan. “Bukti = kutip teks / sebut yang tidak ada.”

Owner menyerahkan spek. Reviewer tidak menerima arahan klik.

#### 120–145 · Review A→B · C3–C5

Timer 20–25'. Guru keliling: “AC berapa? Bukti?” Jika editor terbuka di sisi reviewer, tutup. Jika lembar masih kosong di menit 10, duduk sebentar bantu baca AC 1 bersama.

#### 145–165 · Giliran + antrian · C3–C6

Tukar. Sisa 8–10 menit: pemilik isi `rencana-revisi.md` dari lembar yang diterima. Wajib 1–3. Jika peer tidak menemukan gagal: antrian boleh “uji regresi sekali lagi di P30” + satu risiko (mis. `id` mudah typo) — bukan mengarang fitur.

#### 165–180 · Reflect · C5

Exit. Preview P30: kerjakan prioritas 1 dulu, uji, regresi; jangan kerjakan opini.

### Diferensiasi

**Reviewer lambat baca spek:** uji 4 AC saja (struktur, keterbacaan, fitur 1, regresi).
**Pemilik defensif:** izinkan 1 pertanyaan klarifikasi per AC; setelah itu tulis temuan apa adanya.
**Semua lulus menurut peer:** cek apakah reviewer membaca spek atau hanya memuji; minta satu AC dikutip utuh.
**Brief sama di satu meja:** larang perbandingan fitur; fokus kalimat spek di depan mereka.

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Peran | Hanya puji / hanya dibela | Reviewer + pemilik |
| Lembar | Kosong / “bagus” | ≥4 AC + bukti |
| Batas | Kode diubah / AC dipelintir | File utuh, spek utuh |
| Antrian | Tidak ada / semua opini | 1–3 terikat spek |
| Bahasa | Hinaan atau selera | Nomor AC + kutipan |

### Checklist guru

- [ ] Pairing di papan
- [ ] Demo prediksi 1 temuan
- [ ] Editor reviewer tertutup
- [ ] Dua giliran
- [ ] Rencana P30 ada di folder pemilik
- [ ] Tidak ada ranking karya

### KBC

**Kejujuran bersopanan.** Temuan tanpa hinaan. Pujian tanpa nomor AC tidak menolong pengguna halaman.

**Tanggung jawab pada file orang lain.** Menyentuh kode teman hari ini adalah melewati batas peran.
