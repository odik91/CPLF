# X-S1-P05 — Protokol Klarifikasi & AI Policy (pasca-impact)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P05 |
| Basis | **4JP** · Pertemuan **5/34** |
| Unit | X1.1 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B4 |
| MM | MM-00, MM-22 (pengantar) |
| EXP | [EXP_10 ChatGPT Salah](../../../../07-experience_library/EXP_10_ChatGPT_Salah.md) |
| Status | **Isi penuh** |
| DNA 2JP | [P03 klarifikasi](../../../base-2jp/kelas-x/semester-1/X-S1-P03_chatgpt-klarifikasi.md) · digeser setelah impact P03–P04 |
| Pecah beban | **Algoritma ROBI penuh → P06** (P05 = klarifikasi + polish HTML dari spek) |

## Learning Transformation

Dari “AI/teman bilang = benar atau salah total” → “klarifikasi: klaim · alasan · bukti · alternatif · konteks.”

---

## Kaitan P03–P04

| Pertemuan | Yang sudah punya siswa |
|-----------|------------------------|
| P03 | Rasa deadlock / penasaran |
| P04 | Bahasa requirement + **kriteria penerimaan** |
| **P05** | **Protokol** bernalar + AI Policy + perbaiki 1 bagian halaman berdasar spek/klarifikasi |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Mengulang generate company profile panjang | Latihan klarifikasi pada **klaim** (AI / teman / teks sendiri) |
| Algoritma ROBI mie penuh | Preview singkat saja → penuh di **P06** |
| Debat “AI jahat/bagus” | Nuansa: prompt · verifikasi · model · kita |

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · moto MM-00 di papan · recall P02 (input) + P04 (kriteria penerimaan harus bisa diamati) | Transformasi 1 kalimat |
| 10–25 | **Scaffold teori** | I do: 1 klaim AI · think-aloud isi **Klaim** + **Alasan** · We do: kelas usul 1 **Bukti** | Model sebelum worksheet |
| 25–50 | **Experience** | Baca jawaban AI plausibel-salah **kalimat per kalimat** (HTML = bahasa pemrograman / fakta ringan) | Prediksi sebelum lanjut |
| 50–65 | **Trap + Q** | Bomb: “AI salah — siapa salah?” Debat 3–5’ | Nuansa: prompt / verifikasi / kita / model |
| 65–85 | **Clarify + Concept** | Rantai lengkap di papan · bedakan **Alternatif** vs **Konteks** · AI = partner · bukti > opini | TTS per langkah |
| 85–95 | **Aturan AI kelas** | Sepakati: boleh AI + log klarifikasi; salin tanpa paham ≠ Penalaran; jangan WA “selesai” tanpa spek+kriteria | Simpan di papan/kelas |
| 95–105 | Transisi | Siap artefak P04 (section + spek + kriteria penerimaan) | |
| 105–120 | **Scaffold praktik** | I do: klaim tentang halaman → klarifikasi → ubah 1 bagian HTML agar 1 kriteria terpenuhi | Think-aloud |
| 120–165 | **Practice** | Pasangan: worksheet + perbaiki **1 bagian** halaman | You do |
| 165–180 | Reflect + Exit | Share WA tanpa cek? · exit ticket · preview P06 | |

**Adaptasi ketat:** jangan potong Trap/Clarify atau Practice polish — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md)

---

## Moto kelas (MM-00)

```text
Jangan cepat percaya.
Jangan cepat menolak.
Pahami dulu.
```

---

## Worksheet Klarifikasi

Isi **berurutan**. Jangan lompat ke putusan “benar/salah” sebelum langkah 4–5.

| No | Langkah | Arti (jangan ambigu) | Pertanyaan wajib | Contoh untuk klaim “HTML = bahasa pemrograman” |
|----|---------|----------------------|------------------|-----------------------------------------------|
| 1 | **Klaim** | Kalimat yang sedang diuji — kutip apa adanya | Apa yang dikatakan (persis)? | “HTML adalah bahasa pemrograman.” |
| 2 | **Alasan** | Kenapa klaim itu *terdengar* masuk akal (bukan bukti) | Kenapa orang/AI bisa bilang begitu? | Karena ada tag dan kelihatan seperti coding. |
| 3 | **Bukti** | Hal yang bisa dicek/diuji hari ini | Apa yang bisa kita uji sekarang? | Coba tulis `if` / variabel di file HTML murni — bisa jalan sebagai logika? |
| 4 | **Alternatif** | **Hipotesis kedua** yang masih masuk akal — penjelasan *lain* selain alasan di atas | Kalau bukan itu, apa penjelasan lain yang masuk akal? | HTML = bahasa **markup** (susun struktur halaman); logika program biasanya di JavaScript. |
| 5 | **Konteks (batas berlaku)** | Situasi di mana klaim **aman dipakai** vs **goyah / menyesatkan** | Di situasi apa klaim ini boleh? Di situasi apa **tidak** boleh dipakai sebagai keputusan final? | Boleh longgar di obrolan “kita bikin web”. **Tidak berlaku** sebagai definisi formal / jawaban ujian / alasan nilai tugas. |

### Cara bedakan Alternatif vs Konteks (wajib dipahami guru & siswa)

| | **Alternatif** | **Konteks (batas berlaku)** |
|--|----------------|------------------------------|
| Pertanyaan inti | “Apa **penjelasan lain** yang masih masuk akal?” | “Di **kondisi apa** klaim ini goyah / tidak dipakai?” |
| Fokus | Isi makna / definisi / penyebab lain | Situasi, audiens, tujuan (obrolan vs ujian vs checklist tugas) |
| Bukan | Mencari jawaban random biar beda | “Kadang-kadang” tanpa contoh situasi |
| Lulus langkah ini jika… | Ada ≥1 penjelasan lain yang masuk akal + singkat | Ada ≥1 situasi “berlaku” **dan** ≥1 situasi “tidak berlaku” |

**Satu kalimat pengingat:**  
Alternatif = *mungkin maksudnya begini…* · Konteks = *klaim ini hanya aman kalau…; berbahaya kalau…*

---

## AI Policy Kelas (perkenalkan & kunci hari ini)

- AI **boleh** dipakai **dengan log klarifikasi singkat** (minimal klaim + bukti/uji).  
- Copy-paste tanpa paham = **belum** memenuhi aspek formatif **Penalaran** (alasan diuji, bukan tebak/menelan mentah).  
- Hasil AI = bahan berpikir, bukan otoritas nilai.  
- Jangan share ke WA sebagai “tugas selesai” tanpa **spesifikasi** + **kriteria penerimaan** tercentang (lanjutan P03–P04).

---

## Cognitive Trap

**Asumsi:** Kalau AI/teman “salah”, berarti AI bodoh — atau sebaliknya, AI selalu benar.  
**Aman:** Puji keberanian ragu; arahkan ke rantai klarifikasi, bukan hukuman opini.

---

## Guiding Questions

1. Klaim persisnya apa (bukan perasaanmu tentang klaim itu)?  
2. Bukti apa yang bisa diuji hari ini (termasuk **kriteria penerimaan** di halamanmu)?  
3. Siapa yang perlu diperbaiki dulu: prompt, spek, atau asumsi kita?

---

## Props / Fallback

- AI mode aman sekolah · proyektor · worksheet kosong  
- Offline: screenshot klaim AI (blur sebagian) + lanjut klarifikasi  
- Artefak P04 (section HTML + spek + kriteria penerimaan) — wajib dibawa  

---

## Exit Ticket

1. Satu pertanyaan klarifikasi pribadi (yang akan dipakai lagi)  
2. Satu poin AI Policy yang paling penting bagiku  
3. Satu perubahan HTML hari ini + **kriteria penerimaan** yang jadi terpenuhi (centang)  

---

## Formatif (rubrik)

Fokus: **Penalaran** (wajib) · **Observasi** (pendukung).  
Kode internal rubrik: Penalaran = REA · Observasi = OBS — untuk siswa selalu sebut **nama lengkap**, bukan kode.  
Lihat [09_Rubrik_Formatif_Unit.md](../../../09-rubrik/09_Rubrik_Formatif_Unit.md) · [09_Rubrik_Enam_Aspek.md](../../../../09-rubrik/09_Rubrik_Enam_Aspek.md)

---

## Catatan Guru

- Scaffold 1–2 langkah klarifikasi **sebelum** debat trap panjang.  
- Hindari topik sensitif agama/politik untuk contoh AI salah.  
- Jangan selipkan materi ROBI mie penuh — itu **P06**.  
- Klaim practice boleh dari: teks AI, komentar teman, atau klaim siswa sendiri tentang halamannya.
