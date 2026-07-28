# Handout Siswa — XII-S5-P01

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S5-P01_ai-ml-dl-peta.md](../../../kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta.md)

---

## 1. Tujuan pembelajaran

Dari “ChatGPT = semua AI” → **peta konsep** AI / rule-based / ML / DL.

---

## 2. Ringkasan konsep

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

## 3. Materi praktik

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

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** ChatGPT / Copilot = definisi AI.  
**Aman:** Akui kehebatan; pisahkan kategori.

---

## 5. Alur pertemuan (90 menit)

|-------|------|-----------|
| 0–5 | Opening | Do Now: sebut 3 “AI” di HP — beda atau sama? |
| 5–18 | Experience | Galeri kartu: kalkulator, rekomendasi, chatbot, face unlock |
| 18–28 | Trap + Q | Trap: semua disebut AI di iklan |
| 28–38 | Clarify | Rule vs ML vs DL — contoh MA (jadwal sholat vs rekomendasi) |
| 38–48 | Concept | Peta 4 kotak + contoh nyata siswa |
| 48–65 | Practice | Buat peta konsep 1 halaman + 2 contoh per kotak |
| 65–80 | Reflect | “Kapan rule-based lebih amanah?” |
| 80–90 | Transfer | Preview: ML butuh data P02 |

**Adaptasi 1 JP:** Experience 12’ · Concept 10’ · Practice 18’ · Exit 5’.

---

## 6. Lembar kerja / latihan

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

## 7. Exit ticket

1. Satu contoh **bukan** ML  
2. Satu contoh ML di kehidupan MA  

---

## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Materi pendamping BRG

- [BRG-01](../../../materi-ajar/jalur-kelanjutan/BRG-01_siswa.md)


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
