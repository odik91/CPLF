# Materi Pendukung Guru — XII-S6-P07 AI Partner vs Pengganti

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Panduan wajib:** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) · [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P07 |
| Modul pertemuan | [XII-S6-P07_ai-partner-klarifikasi.md](../../../kelas-xii/semester-6/XII-S6-P07_ai-partner-klarifikasi.md) |
| Semester | 6 · Pertemuan 7/18 |
| Unit | XII6.5 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXII-C2 |
| EXP | [EXP_10 ChatGPT Salah](../../../07-experience_library/EXP_10_ChatGPT_Salah.md) |
| Formatif | REA + dimensi **E3** [Rubrik Etika AI](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| Ada live code? | **Live debug snippet AI salah** — guru facilitator, bukan solusi capstone |

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Wajib** — EXP_10 parent | → [EXP_10 ChatGPT Salah](../../../07-experience_library/EXP_10_ChatGPT_Salah.md) |
| 2 | **Wajib** — Varian A (kode salah) | → [EXP_10_A AI Kode Salah](../../../07-experience_library/EXP_10_A_AI_Kode_Salah.md) |
| 3 | **Wajib** — Varian B (sitasi palsu) | → [EXP_10_B AI Sitasi Palsu](../../../07-experience_library/EXP_10_B_AI_Sitasi_Palsu.md) |
| 4 | **Wajib** — Varian C (fakta salah) | → [EXP_10_C AI Fakta Salah](../../../07-experience_library/EXP_10_C_AI_Fakta_Salah.md) |
| 5 | Spiral Kelas X | → [X-S1-P03 materi EXP_10](../../kelas-x/semester-1/X-S1-P03_chatgpt-klarifikasi.md) |
| 6 | Rubrik E3 — AI partner | → [09_Rubrik_Etika_AI — E3](../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 7 | Google Responsible AI | → [Google AI Responsibility](https://ai.google/responsibility/responsible-ai-practices/) |
| 8 | UNESCO AI ethics (ringkas) | → [UNESCO AI Ethics](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics) |
| 9 | TF.js (konteks debug kode AI) | → [TF.js API Reference](https://js.tensorflow.org/api/latest/) |
| 10 | Teachable Machine export (konteks capstone) | → [TM — Export TensorFlow.js](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) |

**Rotasi varian:** kelas paralel beda A/B/C — cegah siswa hafal jawaban teman kelas lain.

---

## Pengetahuan Guru

### Transformasi belajar

**Dari:** Menyalin output AI = selesai cepat = pintar  
**Ke:** AI = **partner berpikir** dengan protokol klarifikasi — wajib sebelum capstone P08+.

### Moto spiral (MM-00)

```text
Jangan cepat percaya.
Jangan cepat menolak.
Pahami dulu.
```

### Bomb question (EXP_10)

> **"AI salah. Siapa yang salah?"**

Jawaban nuanced: prompt kurang · konteks hilang · kita terlalu percaya · **bukan** "AI bodoh" atau "AI sempurna".

### Checklist AI partner (3 langkah verifikasi)

| Langkah | Pertanyaan |
|---------|------------|
| 1. Klaim | Apa yang AI katakan / kode apa yang dihasilkan? |
| 2. Bukti | Uji di console · cek sumber · bandingkan docs resmi |
| 3. Keputusan | Baris mana dipakai · baris mana dibuang · **jelaskan sendiri** |

### Log klarifikasi (minimum capstone)

```text
Tanggal · Tool · Pertanyaan · Output · Verifikasi · Keputusan akhir
```

**Gate P08:** jika tim pakai AI untuk kode/spec/artikel capstone → folder `logs/ai-klarifikasi.md` wajib ada sebelum build penuh.

### Varian EXP_10 — guru pilih 1 per kelas

| Varian | Trap | Demo aman MA |
|--------|------|--------------|
| **A** | Kode "profesional" = benar | Loop off-by-one · salah `await` TF.js |
| **B** | Sitasi akademik = valid | DOI/jurnal fiktif — cek di Google Scholar |
| **C** | Nada yakin = fakta benar | Fakta sejarah/sains ringan yang bisa cek buku paket |

### Koneksi capstone (P08 besok)

- 5 pertanyaan klarifikasi untuk PRJ = latihan hari ini
- Log format sama dengan yang akan diminta di repo tim
- E3 level 3 = kebiasaan log — target sebelum presentasi P14

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| Kelas X P03 / EXP_10: bomb question? | AI? Prompt? Kita? — nuanced |
| P06: etika sebelum teknologi? | Template etika = desain awal capstone |
| P05: fallback non-AI? | AI sebagai fitur — bukan satu-satunya jalan |
| MM-22: partner vs pengganti? | Mempercepat **setelah** paham masalah |

---

## Etika Penyampaian

| Aturan | Penerapan P07 |
|--------|---------------|
| **No copas** | Jangan bagikan log klarifikasi **sudah terisi** atau jawaban AI lengkap via WA |
| **Live modeling** | Guru ketik prompt live OR tampilkan snippet offline — siswa verifikasi sendiri |
| **Per baris / scope** | Debug snippet AI: baca **baris per barir** — TTS seperti membaca kode |
| **No solusi capstone** | Latihan debug **generic** — bukan fix project PRJ-XII-S6-* |
| **Rotasi varian** | Koordinasi kelas paralel A/B/C |
| **Recall spiral X** | Opening 5 menit — hubung EXP_10 dengan capstone |

### Bank pertanyaan (ganti memberi kode)

| Siswa | Guru tanya |
|-------|------------|
| "Copy paste AI biar cepat?" | "Baris mana yang kamu **pahami**? Uji di console?" |
| "AI bilang begini — benar kan?" | "Bukti apa? Sumber resmi TF.js/docs?" |
| "Log klarifikasi ribet" | "E3 rubrik — tanpa log = level 1. Capstone wajib." |
| "Fix-in project saya pak/bu" | "PRJ kamu varian apa? Error di baris berapa menurut **kamu**?" |

---

## Materi Inti

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–5 | Opening | Recall MM-00 · spiral X EXP_10 |
| 5–18 | Experience | Varian EXP_10 A/B/C — kelompok debat |
| 18–28 | Trap | Menyalin tanpa paham = milik sendiri? |
| 28–38 | Clarify | Format log klarifikasi — contoh 1 baris live |
| 38–48 | Concept | Checklist 3 langkah verifikasi |
| 48–65 | Practice | Debug snippet AI salah + tulis log |
| 65–80 | Practice | 5 pertanyaan klarifikasi untuk capstone |
| 80–90 | Exit | Commitment format log di repo tim |

### Snippet cadangan varian A (off-by-one — jangan paste ke siswa)

```javascript
// AI suggestion: hitung rata-rata array
function average(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {  // ← bug plausibel
    sum += arr[i];
  }
  return sum / arr.length;
}
```

| Pertanyaan debug | Kunci |
|------------------|-------|
| Edge case? | `[]` → NaN; `[1]` → salah |
| Bukti? | `console.log(average([1,2,3]))` → tidak 2 |
| Prompt perbaikan? | "Jelaskan baris per baris + uji edge case kosong" |

### Snippet cadangan varian B (sitasi — baca, jangan distribusi)

```text
Menurut Smith et al. (2023), "Neural Networks in Browser Education",
Journal of Web ML, vol. 12, DOI: 10.1234/jwml.2023.fake
```

| Pertanyaan | Kunci |
|------------|-------|
| Plausibel? | Format akademik meyakinkan |
| Verifikasi? | DOI tidak resolve · jurnal tidak ada |
| Dampak capstone? | Jangan sitasi AI untuk fakta sekolah tanpa cek humas |

### 5 pertanyaan klarifikasi capstone (siswa tulis exit)

Contoh kualitas level 3:

1. "Data wajah disimpan di mana — perlu semua pixel?"
2. "Confidence di bawah berapa kita fallback manual?"
3. "Siapa approve fakta di knowledge base asisten madrasah?"
4. "Model TM dilatih berapa sampel per kelas — cukup?"
5. "Baris kode AI mana yang saya ubah dan kenapa?"

---

## Alur Live Coding / Live Modeling

```text
[LANGKAH 1 — Opening 0–5 menit]
Tulis moto MM-00 di papan.
Ucapkan: "Kelas X sudah EXP_10 — hari ini untuk capstone XII."
Tanya: "Besok kickoff project — AI boleh dipakai dengan syarat apa?"

[LANGKAH 2 — Experience 5–18 menit]
Tampilkan varian EXP_10 (A/B/C sesuai rotasi kelas).
Ucapkan: "AI salah. Siapa yang salah?" — debat 3 menit, jangan putuskan cepat.
Scope: kelompok 4 — 1 klaim + 1 bukti counter.

[LANGKAH 3 — Trap 18–28 menit]
Ucapkan: "Copy paste tanpa paham = etika E3 level 1 — project bisa dikembalikan."
Tanya: "Bedanya malas mikir vs efisien bertanggung jawab?"

[LANGKAH 4 — Log klarifikasi 28–38 menit]
Live isi 1 baris log di papan dari snippet varian A.
Kolom: Tanggal · Tool · Pertanyaan · Output · Verifikasi · Keputusan

[LANGKAH 5 — Debug practice 48–65 menit]
Siswa debug snippet (varian sesuai kelas) — tulis log lengkap.
Keliling: "Baris bug di mana? Bukti console?"

[LANGKAH 6 — 5 pertanyaan capstone 65–80 menit]
Tim/kelompok tulis 5 pertanyaan klarifikasi untuk PRJ mereka (PRJ belum final OK).
Guru feedback: spesifik vs generik.

[LANGKAH 7 — Exit 80–90 menit]
Commitment: "Format log ini masuk repo tim sebelum P09 build."
```

---

## Latihan Membaca Kode

### Snippet — AI "fix" getUserMedia (plausibel, salah konteks)

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.getElementById('webcam');
video.src = stream;  // ← AI lupa srcObject
```

| Pertanyaan | Kunci |
|------------|-------|
| Terdengar benar? | Ya — API benar, assignment salah |
| Bukti? | MDN: `video.srcObject = stream` |
| Log klarifikasi? | Prompt · output · cek MDN · pakai srcObject |
| Aspek CPLF? | REA, E3 |

### Snippet — TM export path salah

```javascript
const modelURL = './model.json';
const model = await tf.loadLayersModel(modelURL);
// AI tidak sebut metadata.json / class labels
```

| Pertanyaan | Kunci |
|------------|-------|
| Jalan di localhost? | Mungkin — production/CDN beda |
| Yang kurang? | Label kelas · normalisasi input · error handling |
| Saran capstone? | Test load model di P09 sebelum UI polish |

---

## Praktik Mandiri

Siswa **wajib**:

1. Log klarifikasi lengkap untuk 1 snippet AI salah (varian kelas).
2. 5 pertanyaan klarifikasi untuk capstone — spesifik PRJ atau domain MA.
3. Refleksi 2 kalimat: kapan terakhir share info tanpa cek?
4. **Tidak** submit kode copas AI tanpa kolom Verifikasi + Keputusan.

**Guru:** spot-check 3 log — E3 level 2 vs 3.

---

## Kesalahan Umum

| Gejala | Guru |
|--------|------|
| "AI salah = semua AI sampah" | Nuanced — partner dengan protokol |
| Copy snippet tanpa debug | Minta bukti console / MDN |
| Log generik ("AI bantu") | Contoh 1 baris spesifik live |
| Guru fix capstone di P07 | Redirect ke P09 — hari ini protokol saja |
| Debate jadi ad hominem | Kembali ke klaim & bukti |
| Skip 5 pertanyaan capstone | Gate P08 — pertanyaan lemah = spec lemah |

---

## Rujukan

- Modul: [XII-S6-P07](../../../kelas-xii/semester-6/XII-S6-P07_ai-partner-klarifikasi.md)
- Sebelumnya: [P06 Etika](./XII-S6-P06_etika-privasi-bias.md)
- Lanjutan: [P08 Capstone Kickoff](./XII-S6-P08_project-nilai-kickoff.md)
- EXP: [EXP_10](../../../07-experience_library/EXP_10_ChatGPT_Salah.md) · [A](../../../07-experience_library/EXP_10_A_AI_Kode_Salah.md) · [B](../../../07-experience_library/EXP_10_B_AI_Sitasi_Palsu.md) · [C](../../../07-experience_library/EXP_10_C_AI_Fakta_Salah.md)
- Rubrik: [09_Rubrik_Etika_AI — E3](../../../09-rubrik/09_Rubrik_Etika_AI.md)

---

## Checklist Exit

- [ ] Varian EXP_10 A/B/C dijalankan — debat bomb question
- [ ] Format log klarifikasi dipahami & 1 contoh live
- [ ] Siswa debug snippet + log lengkap
- [ ] 5 pertanyaan klarifikasi capstone tertulis
- [ ] Commitment log di repo tim sebelum build
- [ ] Tidak ada distribusi solusi capstone / kode project jadi

[← Indeks materi XII-S6](./XII-S6_Materi_Index.md)
