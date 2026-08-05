# Psikologi Pembelajaran CPLF

**Version:** 0.1 (Frozen)  
**Konteks:** Madrasah Aliyah — mapel Multimedia (pemrograman web)

## Tujuan Dokumen

Menjelaskan mengapa CPLF disusun seperti sekarang: pengalaman sebelum definisi, error sebagai umpan balik, klarifikasi sebelum percaya, dan pembelajaran spiral — agar setiap modul punya alasan psikologis, bukan hanya daftar materi.

---

## 1. Asumsi Dasar

CPLF merancang pembelajaran berdasarkan cara manusia (khususnya remaja) belajar, bukan berdasarkan urutan bab buku teks.

| Asumsi | Implikasi di kelas |
|--------|-------------------|
| Pengalaman mendahului definisi — **dengan peta & contoh dulu** | Orientation + Scaffold → baru Experience & Trap |
| Siswa awal bukan problem solver profesional | I do / We do wajib sebelum diskusi terbuka (terutama S1) |
| Error adalah bagian belajar | Debug = informasi, bukan aib |
| Emosi memperkuat memori | Momen yang bisa diceritakan ulang (retrieval) |
| Refleksi memperkuat pemahaman | Setiap unit punya Reflect + Transfer |
| Guru memfasilitasi | Guru = perancang pengalaman, bukan penyiar materi |
| Keaktifan ≠ satu-satunya indikator | Diam bisa berarti sedang bernalar |

---

## 2. Remaja Madrasah Aliyah

Siswa MA berada di masa pencarian identitas dan kebutuhan akan makna. CPLF **tidak** membentuk identity foreclosure (“kamu harus jadi programmer”).

Yang dibangun adalah **professional identity / identitas belajar**:

> “Saya adalah orang yang mampu belajar dan menyelesaikan masalah secara bertanggung jawab.”

Mereka bebas menjadi apa pun nanti; yang dibawa pulang adalah cara menghadapi masalah baru tanpa takut belajar ulang.

Implikasi praktis:

- Hindari membandingkan kecepatan coding antar siswa sebagai ukuran harga diri.
- Rayakan proses (iterasi, klarifikasi, perbaikan) sama kuatnya dengan artefak.
- Hubungkan project ke konteks nyata MA (manfaat, etika, tanggung jawab) tanpa menjadikan agama sebagai “kulit” teknis semata.

---

## 3. Konstruktivisme Operasional

Siswa membangun pengetahuan melalui pengalaman → eksplorasi → diskusi → kesalahan → refleksi.

Alur yang dihindari:

```text
Definisi → Hafalan → Latihan soal → Ujian
```

Alur CPLF:

```text
Orientation (Learning Compass) → Scaffold (I do / We do)
  → Experience → Observe → Question → Clarify → Reason
  → Concept → Practice → Reflect → Transfer
```

**Nuansa penting (v0.2):** “Pengalaman mendahului definisi” **bukan** “siswa dibiarkan tanpa peta.” Siswa MA Kelas X bukan software engineer — mereka butuh **orientasi** dan **scaffolding** sebelum diskusi/kelompok terbuka. Lihat [03_Learning_Compass_CPLF.md](../03-framework/03_Learning_Compass_CPLF.md).

Alur yang dihindari:

```text
Definisi panjang → Hafalan → Latihan soal → Ujian
```

Alur yang juga dihindari (revisi observasi kelas):

```text
Langsung diskusi / kelompok tanpa contoh → siswa bingung
```

Referensi arah (tidak perlu diajarkan ke siswa sebagai istilah): Piaget (skema & akomodasi), **Vygotsky (scaffolding & ZPD)**, pengalaman bermakna sebelum abstraksi — **dengan dukungan sementara yang ditarik bertahap**.

---

## 4. Cognitive Trap (bukan jebakan mempermalukan)

**Cognitive Trap** = skenario yang membuat asumsi siswa terlihat salah, agar asumsi itu diperbaiki.

| Bukan | Melainkan |
|-------|-----------|
| “Haha, kamu salah.” | “Otakmu memakai asumsi yang perlu diuji.” |
| Menyerang orang | Menyerang asumsi |
| Plot twist setiap pertemuan | Bumbu, bukan menu utama |

Contoh: robot memasak mi — asumsi “komputer mengerti maksud kita” dibongkar; konsep yang lahir: instruksi harus eksplisit (algoritma).

Aturan emas Experience Library:

> Jangan mulai dari konsep yang ingin diajarkan. Mulailah dari kesalahan berpikir yang ingin diperbaiki.

---

## 5. Klarifikasi & Literasi Era AI / Media Sosial

Prinsip Bernalar dilatih agar siswa tidak menelan mentah opini, berita, atau jawaban AI:

1. Pahami sebelum menyimpulkan.
2. Tanyakan alasan, bukan hanya jawabannya.
3. Uji ide dengan bukti atau percobaan.
4. Bersedia mengubah pendapat jika ada alasan yang lebih kuat.

Di kelas, respons default guru terhadap klaim AI/teman/internet:

```text
Apa alasannya? → Apa buktinya? → Alternatifnya apa?
→ Dalam kondisi apa jawaban itu tidak berlaku?
```

Ini melatih scientific thinking dalam bahasa yang ringan, sekaligus menjadi “racun baik” terhadap penggiringan opini di media sosial.

---

## 6. Error, Emosi, dan Budaya Kelas

- Error = data diagnostik (bisa konfigurasi, logika, asumsi, atau prompt — belum tentu “bug di kepala siswa”).
- Emosi aman (tidak takut salah) membuat siswa berani bereksperimen; tanpa itu, mereka hanya meniru sintaks.
- Budaya yang dijaga: berani bertanya, menghargai ide, selalu bertanya “mengapa?”, membantu teman, menghargai proses.

---

## 7. Spiral Learning (bukan tangga sekali naik)

CPLF tidak linear murni. Konsep yang sama muncul lagi dengan konteks lebih kaya:

| Fase | Algoritma / logika muncul sebagai… |
|------|-------------------------------------|
| Kelas X | Flowchart, instruksi, JS dasar |
| Kelas XI | Alur aplikasi, event, data, async |
| Kelas XII | Pipeline data → model → prediksi |

Pola yang diulang tiap unit kecil:

```text
Mindset → Practice → Reflection → Mindset baru → Practice lagi
```

Ini spiral, bukan “teori setahun baru praktik”.

---

## 8. Root Before Branch — dengan peringatan

Akar (curiosity, humility, responsibility, reasoning) disiram dulu, tetapi **jangan menunda coding terlalu lama**.

Pola kedokteran yang diadopsi: sedikit konsep → praktik → refleksi → konsep berikutnya.

Jika siswa bertanya “kapan coding?”, itu sinyal bahwa batang reasoning perlu segera disambung ke cabang skill dalam pertemuan yang sama atau berikutnya — bukan semester teori murni.

---

## 9. Implikasi untuk Desain Modul

Setiap modul idealnya memuat:

- Satu transformasi cara berpikir (bukan hanya daftar sintaks)
- Satu Cognitive Trap yang aman
- Satu momen Clarification (Prinsip Bernalar)
- Satu artefak kecil yang bisa ditunjukkan
- Satu pertanyaan refleksi + satu transfer ke konteks lain

---

## 10. Anti-Pattern Psikologis

- Menguji hafalan definisi tanpa pengalaman
- **Memasukkan siswa ke diskusi/kelompok sebelum orientasi & contoh (mengasumsikan siswa = SWE)**
- Mempermalukan siswa yang terkena trap
- Memakai AI sebagai “kunci jawaban” tanpa klarifikasi
- Membandingkan siswa hanya lewat kecepatan ketik kode
- Overlay cerita lucu tanpa tujuan transformasi berpikir

---

## Catatan Versi

Draft v0.1 merangkum keputusan diskusi fondasi CPLF. Direvisi setelah observasi kelas nyata.
