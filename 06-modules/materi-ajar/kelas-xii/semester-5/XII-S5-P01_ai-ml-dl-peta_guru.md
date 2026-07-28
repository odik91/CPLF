# Materi Guru Lengkap — XII-S5-P01

**Handout siswa (bagikan):** [XII-S5-P01_ai-ml-dl-peta_siswa.md](./XII-S5-P01_ai-ml-dl-peta_siswa.md)

**Modul:** [XII-S5-P01_ai-ml-dl-peta.md](../../../kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta.md)

**Materi pendukung sumber:** [XII-S5-P01_ai-ml-dl-peta.md](../../../materi-pendukung/kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta.md)

---
## A. Modul pertemuan (referensi)

# XII-S5-P01 — AI ≠ ML ≠ DL

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P01 |
| Semester | 5 · Pertemuan 1/18 |
| Unit | XII5.1 |
| Durasi | 2 JP = **90 menit** |
| Capability | CXII-B1 |
| CP | BK, AD |
| MM | MM-03, MM-04 |

## Learning Transformation

Dari “ChatGPT = semua AI” → **peta konsep** AI / rule-based / ML / DL.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–5 | Opening | Do Now: sebut 3 “AI” di HP — beda atau sama? | Ton tahun nilai |
| 5–18 | Experience | Galeri kartu: kalkulator, rekomendasi, chatbot, face unlock | Kelompok sortir |
| 18–28 | Trap + Q | Trap: semua disebut AI di iklan | Tanya: ada belajar dari data? |
| 28–38 | Clarify | Rule vs ML vs DL — contoh MA (jadwal sholat vs rekomendasi) |
| 38–48 | Concept | Peta 4 kotak + contoh nyata siswa |
| 48–65 | Practice | Buat peta konsep 1 halaman + 2 contoh per kotak |
| 65–80 | Reflect | “Kapan rule-based lebih amanah?” |
| 80–90 | Transfer | Preview: ML butuh data P02 | |

**Adaptasi 1 JP:** Experience 12’ · Concept 10’ · Practice 18’ · Exit 5’.

---

## Cognitive Trap

**Asumsi:** ChatGPT / Copilot = definisi AI.  
**Aman:** Akui kehebatan; pisahkan kategori.

---

## Exit Ticket

1. Satu contoh **bukan** ML  
2. Satu contoh ML di kehidupan MA  

---

## Formatif

**REA**, **OBS**

---

## Catatan Guru

Buka XII: AI = kelanjutan bernalar + data + web, bukan magic library.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S5-P01 AI ≠ ML ≠ DL


## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S5-P01 |
| Modul pertemuan | [XII-S5-P01_ai-ml-dl-peta.md](../../../kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta.md) |
| Semester | 5 · Pertemuan 1/18 |
| Unit | XII5.1 |
| Durasi referensi | 2 JP (90 menit) |
| Capability | CXII-B1 |
| CP | BK, AD |
| MM | MM-03, MM-04 |
| Panduan ML | [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md) |
| Etika global | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## Referensi Guru (baca sebelum mengajar)

| Topik | Referensi |
|-------|-----------|
| Framing ML — apa itu ML? | → referensi: [MLCC — What is ML?](https://developers.google.com/machine-learning/crash-course/introduction-to-ml/what-is-ml) |
| Rule-based vs learned | → referensi: [MLCC — Framing Video](https://developers.google.com/machine-learning/crash-course/framing/video-lecture) |
| Supervised learning ringkas | → referensi: [MLCC — Supervised Learning](https://developers.google.com/machine-learning/crash-course/framing/supervised-learning) |
| Neural network (visual opsional) | → referensi: [3Blue1Brown — Neural Networks](https://www.youtube.com/playlist?list=PLZHQbOWTQDMHSQIXIgWp6ZUbQ1lnNZPy) |
| Rekomendasi & data perilaku | → referensi: [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md) |
| Teachable Machine (preview S6) | → referensi: [Teachable Machine](https://teachablemachine.withgoogle.com/) |
| TF.js — gambaran semester | → referensi: [TensorFlow.js](https://www.tensorflow.org/js) |
| StatQuest — ML overview | → referensi: [StatQuest — Machine Learning](https://www.youtube.com/watch?v=Gv9_4yMHhIw) |

**Waktu baca minimum guru:** 45–60 menit (MLCC framing + EXP_09 + skim 3Blue1Brown episode 1).

---

## Pengetahuan yang Dikuasai Guru

### Mengapa pertemuan ini ada di awal S5

Siswa XII sudah familiar dengan ChatGPT, filter Instagram, dan face unlock. Trap kognitif: **semua itu = "AI" = sama**. Guru harus **memecah istilah** tanpa merendahkan teknologi — tujuannya literasi + jalan masuk ke ML praktis di browser nanti.

**AI (Artificial Intelligence)** = payung luas: sistem yang meniru aspek kecerdasan (mengenali pola, merencanakan, menjawab). Tidak semua AI "belajar dari data."

**Rule-based / sistem aturan** = programmer menulis `if … then …` eksplisit. Contoh MA: jadwal sholat otomatis berdasarkan waktu dan lokasi — **bukan** belajar dari ribuan foto. Aman, dapat diaudit, prediktif.

**Machine Learning (ML)** = subset AI: sistem **menyesuaikan parameter** dari **data**, bukan aturan ditulis baris per baris. Contoh: rekomendasi video berdasarkan riwayat tonton. Model "belajar" pola statistik, bukan "punya hati."

**Deep Learning (DL)** = subset ML: model dengan **banyak lapisan** (neural network) — cocok untuk gambar, suara, teks kompleks. Di S5 siswa **tidak** train CNN besar; cukup tahu DL = ML dengan arsitektur dalam.

### Diagram hubungan (guru harus bisa gambar tanpa slide)

```text
        ┌─────────────────────────────┐
        │  AI (payung)                │
        │  ┌───────────────────────┐  │
        │  │ ML (belajar dari data)│  │
        │  │  ┌─────────────────┐  │  │
        │  │  │ DL (neural net) │  │  │
        │  │  └─────────────────┘  │  │
        │  └───────────────────────┘  │
        │  Rule-based (di luar ML)    │
        └─────────────────────────────┘
```

### Contoh nyata untuk MA (hafalkan 2 per kotak)

| Kotak | Contoh | Mengapa masuk sini |
|-------|--------|-------------------|
| Rule-based | Kalkulator, jadwal sholat app, ATM pin salah 3× blok | Aturan eksplisit, tidak perlu dataset training |
| ML (non-DL) | Filter spam sederhana, rekomendasi buku berdasarkan genre | Belajar pola dari data; bisa model sederhana |
| DL | Face unlock, speech-to-text, ChatGPT-scale | Banyak lapisan + data besar |
| Bukan ML | Sortir Excel manual, flowchart P5 flowchart | Manusia/algoritma deterministik tanpa "training" |

### Pertanyaan kunci yang harus bisa dijawab guru

1. **Apakah ChatGPT = definisi AI?** Tidak — itu salah satu produk DL/ML skala besar.
2. **Kapan rule-based lebih amanah?** Keputusan etis/ibadah/fiqih, audit trail, data sedikit, kesalahan mahal.
3. **Apakah ML selalu "lebih pintar"?** Tidak — ML bisa salah, bias, overfit; butuh data bagus (P02).
4. **Apa bedanya "algorithm" di TikTok vs kalkulator?** Kalkulator: rumus tetap. TikTok: optimasi dari data perilaku → lihat EXP_09.

### Koneksi ke semester

- P02–P03: ML butuh data
- P06–P09: implementasi kecil di TF.js
- P11–P14: project dengan **Batasan Model** — siswa jujur tentang apa yang model bisa/tidak

---

## Recall Spiral

Pertemuan **pertama S5** — recall dari **Semester 4 (XI)** dan literasi web, bukan ML.

| Pertanyaan recall | Jawaban/inti yang diharapkan |
|-------------------|------------------------------|
| "Di XI kita simpan data di …?" | Array, JSON, fetch — struktur data sebelum "model" |
| "Apa bedanya algoritma flowchart vs kode JS?" | Sama logika; kode bisa jalan otomatis |
| EXP_09 (jika sudah pernah): "Kenapa feed teman beda?" | Data perilaku → sistem rekomendasi → loop |
| "ChatGPT jawab pertanyaan — itu belajar dari data?" | Ya, tapi jangan samakan semua "AI" di HP |

Jika kelas belum EXP_09: gunakan Do Now (3 "AI" di HP) sebagai baseline — catat jawaban untuk dibanding P17.

---

## Etika Penyampaian

| Aturan | Penerapan spesifik P01 |
|--------|------------------------|
| **No copas** | Jangan kirim peta konsep siap isi / PDF jawaban ke WA. Siswa **gambar/tulis sendiri** dari diskusi galeri kartu. |
| **Live modeling** | Peta 4 kotak **digambar live** di papan — bukan slide lengkap. Kartu contoh di-sort kelompok di depan kelas. |
| **TTS per scope** | Satu kotak peta = satu scope: Tebak contoh → Tanya "belajar dari data?" → Spelling definisi singkat. |
| **Recall** | 2–3 menit oral XI + Do Now — bukan quiz menakutkan. |
| **Membaca kode/data** | Belum TF.js — latih **membaca kartu skenario** (rule vs ML) seperti membaca pseudocode. |
| **AI di kelas** | Guru boleh pakai AI untuk merencana analogi; **jangan** minta siswa generate peta konsep tanpa parafrase. |
| **Ton tahun nilai** | Akui kehebatan ChatGPT; pisahkan kategori — hindari sinisme "AI jahat" atau hype "AI magic". |

---

## Materi Inti

### Alur konseptual (90 menit)

```text
Do Now: 3 "AI" di HP
  → Experience: galeri kartu sortir kelompok
  → Trap: semua disebut AI di iklan
  → Clarify: rule vs ML vs DL
  → Concept: peta 4 kotak + contoh MA
  → Practice: peta 1 halaman + 2 contoh/kotak
  → Reflect: kapan rule-based lebih amanah?
  → Transfer: preview data P02
```

### Do Now (menit 0–5)

Siswa tulis 3 fitur di HP yang disebut "AI" (kamera, asisten suara, rekomendasi). Guru **tidak** koreksi dulu — kumpulkan di papan.

### Experience — galeri kartu (menit 5–18)

Siapkan 12–16 kartu (kertas/index card):

- Kalkulator scientific
- Rekomendasi YouTube
- Chatbot customer service (scripted vs GPT)
- Face unlock
- Sortir manual spreadsheet
- Jadwal sholat otomatis
- Spam filter email
- Game NPC dengan if-else
- Google Translate (modern = ML/DL)
- Filter beauty cam
- ATM validasi PIN
- "AI" di label iklan skincare

Kelompok sortir ke: **Rule · ML · DL · Bukan ML/ambig** — debat kartu ambigu (Translate, spam) = pembelajaran.

→ referensi: [MLCC — Framing](https://developers.google.com/machine-learning/crash-course/framing/video-lecture) — analogi "programmer vs model belajar"

### Trap (menit 18–28)

**Asumsi siswa:** "Kalau di iklan tulis AI, pasti ML canggih."

**Counter:** Tanya — "Ada **belajar dari data** atau cuma **if-else + database**?" Contoh: chatbot lama = rule; chatbot baru = ML.

### Clarify — definisi operasional (menit 28–38)

| Istilah | Definisi 1 kalimat untuk MA |
|---------|----------------------------|
| Rule-based | Programmer tulis aturan; output predictable jika input sama |
| ML | Parameter disesuaikan dari data; generalisasi ke input baru |
| DL | ML dengan neural network banyak lapisan |
| Training | Proses "belajar" dari data (preview P08+) |
| Inference | Pakai model sudah jadi untuk prediksi |

### Concept — peta 1 halaman (menit 38–48)

Guru gambar nested boxes + **2 contoh siswa** per kotak (bukan hanya contoh guru).

→ referensi: [MLCC — What is ML?](https://developers.google.com/machine-learning/crash-course/introduction-to-ml/what-is-ml)

### Reflect (menit 65–80)

Pertanyaan utama: **"Kapan rule-based lebih amanah di lingkungan MA?"**

Jawaban yang diharapkan: keputusan ibadah, keuangan syariah, kebijakan sekolah, situasi data sedikit / harus bisa dijelaskan ke orang tua.

### Transfer ke P02

"ML butuh **bahan bakar** — data. Tanpa data, model ML = kosong." Preview spreadsheet 20 baris di P02.

---

## Alur Live Coding / Live Modeling

Pertemuan **non-kode** — skrip **live modeling papan + kartu**.

### Persiapan

- Kartu galeri 12–16 lembar, spidol, kertas A4 per siswa/kelompok
- **Tanpa** slide jawaban lengkap — hanya judul fase
- Laptop siswa belum TF.js — boleh HP untuk Do Now saja

### Skrip TTS

```text
[LANGKAH 1 — Do Now]
Tulis di papan: "3 AI di HP kamu"
Ucapkan: "Tulis sticky — jangan googling definisi dulu."
Tanya: "Apakah ketiganya 'belajar' dengan cara sama?"
Scope: 5 menit · kumpulkan 6–8 sticky ke papan

[LANGKAH 2 — Galeri kartu]
Tulis: (4 zona papan — Rule | ML | DL | Bukan)
Ucapkan: "Tim A ambil 4 kartu. Tempel ke zona — harus bisa jelaskan 1 kalimat."
TTS per kartu ambigu: Tebak → "Data training ada?" → Spelling zona final
Scope: 12 menit · 2 kartu debat kelas

[LANGKAH 3 — Trap iklan]
Tulis: "Produk X dengan AI Revolusioner"
Ucapkan: "Apa yang BISA dan TIDAK BISA kita simpulkan dari iklan?"
Tanya: "Belajar dari data atau marketing?"
Scope: 10 menit · jangan mock produk nyata berlebihan

[LANGKAH 4 — Peta konsep live]
Tulis: kotak besar AI → ML → DL; sisip Rule di luar ML
Ucapkan per kotak (TTS): Tebak definisi → siswa jawab → guru spelling
Scope: 10 menit · contoh dari sticky siswa, bukan hanya contoh guru

[LANGKAH 5 — Practice peta siswa]
Ucapkan: "Gambar versi kalian — minimal 2 contoh per kotak dari kehidupan MA."
Tanya: "Contoh mana yang paling sering salah dikira ML?"
Scope: 17 menit · 1 kelompok presentasi 2 menit

[LANGKAH 6 — Reflect + exit]
Ucapkan: "Satu contoh BUKAN ML dan satu ML di MA — tulis exit ticket."
Scope: 15 menit reflect + 5 menit exit
```

---

## Latihan Membaca Kode/Data

Belum kode — format **membaca skenario** seperti pseudocode.

Proyeksikan di papan:

```text
SKENARIO A — Jadwal Sholat App
IF waktu >= waktu_sholat AND lokasi = masjid_radius
  THEN bunyi notifikasi "Waktu {nama_sholat}"
DATA: tabel waktu kota (statis, update manual tahunan)

SKENARIO B — Rekomendasi Video
INPUT: riwayat 500 video ditonton + durasi + like
PROSES: model cari pola similarity pengguna lain
OUTPUT: daftar 20 video berikutnya
LOOP: user klik → data baru → rekomendasi berubah
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Skenario mana yang **rule-based**? | A — aturan waktu + lokasi eksplisit |
| Skenario mana **belajar dari data**? | B — parameter dari riwayat |
| Di B, apa **input** dan **output**? | Input: riwayat; output: daftar rekomendasi |
| Risiko etis B vs A? | B: filter bubble, kecanduan scroll; A: salah timezone |
| Apakah B pasti "DL"? | Tidak harus — bisa ML sederhana; skala besar sering DL |

→ referensi: [EXP_09 TikTok Feed](../../../07-experience_library/EXP_09_TikTok_Feed.md)

---

## Praktik Mandiri Siswa

- **Deliverable:** Peta konsep 1 halaman (tangan/digital) — 4 kategori + **min. 2 contoh asli** per kategori.
- **Exit ticket:** (1) Satu contoh **bukan** ML; (2) Satu contoh ML di kehidupan MA.
- **Refleksi 3 kalimat:** "Sebelum hari ini saya kira AI = …; sekarang saya bedakan …"
- **Tidak ada** coding atau download model — fokus literasi konsep.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| "Semua pakai AI = ChatGPT" | Guru ikut hype atau takut teknologi — hilang nuansa |
| Menaruh kalkulator di kotak DL karena "pintar" | Guru tidak tanya "belajar dari data?" |
| Menolak semua ML karena "haram" tanpa diskusi | Guru tidak arahkan ke rule-based vs learned + etika |
| Peta konsep copas dari internet | Guru bagikan template Canva siap isi |
| Bosan karena "belum coding" | Guru skip galeri kartu, lecture 40 menit |
| Campur "algorithm" = selalu ML | Guru tidak bedakan algoritma umum vs training |

---

## Checklist Exit Guru

- [ ] Referensi MLCC framing sudah dibaca sebelum mengajar
- [ ] Live modeling peta — bukan slide jawaban penuh
- [ ] TTS per kotak konsep (Rule / ML / DL / bukan ML)
- [ ] Trap "iklan AI" dijalankan — siswa bisa tanya "belajar dari data?"
- [ ] Recall XI (array/JSON atau EXP_09) terpasang
- [ ] Exit ticket terkumpul — baseline literasi AI untuk P17
- [ ] Tidak ada file materi pendukung atau peta siap isi dikirim ke siswa
- [ ] Transfer ke P02 (data) disebutkan di penutup
- [ ] Ton: akui kehebatan + pisahkan kategori — tidak magic, tidak sinis

---

## Rujukan modul

- Modul: [XII-S5-P01](../../../kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta.md)
- Indeks S5: [XII-S5_Materi_Index](./XII-S5_Materi_Index.md)
- Panduan: [00_Panduan_Guru_ML_TFJS.md](../../00_Panduan_Guru_ML_TFJS.md)

---
## C. BRG & jalur kelanjutan
- [BRG-01](../../../materi-ajar/jalur-kelanjutan/BRG-01_guru.md)

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
