# Framework CPLF

**Version:** 0.1 (Frozen)  
**Nama lengkap:** Constructive / Contextual Problem Learning Framework  
**Konteks:** Multimedia — pemrograman web di Madrasah Aliyah

## Tujuan Dokumen

Menjelaskan kerangka operasional CPLF: lapisan perkembangan siswa, Competency Tree, Learning Cycle, DNA modul, anti-pattern, dan checklist guru. Ini adalah framework **perkembangan siswa**, bukan sekadar daftar cara mengajar.

---

## 1. Pertanyaan Desain Utama

Bukan: “Teknologi apa yang harus diajarkan?”  
Melainkan: “Cara berpikir apa yang tidak akan usang meskipun teknologinya berubah?”

Tool diganti di lapisan bawah; identitas, prinsip bernalar, dan mental model tetap.

---

## 2. Lapisan Pembelajaran

```text
Identity
    ↓
Prinsip Bernalar
    ↓
Mindset
    ↓
Mental Model
    ↓
Skill
    ↓
Tool
```

| Lapisan | Makna singkat | Contoh |
|---------|---------------|--------|
| Identity | Cara menghadapi dunia | “Saya mampu belajar & menyelesaikan masalah secara bertanggung jawab.” |
| Prinsip Bernalar | Cara memutuskan apa yang layak dipercaya | Empat prinsip klarifikasi |
| Mindset | Sikap menghadapi masalah & error | Curiosity, humility, growth |
| Mental Model | Pola pikir yang dipakai berulang | MM-00 s/d MM-25 |
| Skill | Kemampuan yang dapat didemonstrasikan | Memecah masalah, membangun UI, memakai data |
| Tool | Media yang berubah | HTML, CSS, JS, TensorFlow.js, Git |

Moto kelas untuk Prinsip Bernalar:

> Jangan cepat percaya. Jangan cepat menolak. Pahami dulu.

Empat prinsip:

1. Pahami sebelum menyimpulkan.
2. Tanyakan alasan, bukan hanya jawabannya.
3. Uji ide dengan bukti atau percobaan.
4. Bersedia mengubah pendapat jika menemukan alasan yang lebih kuat.

---

## 3. Competency Tree

```text
ROOT (akar)
  Identity · Curiosity · Humility · Responsibility
        ↓
BATANG
  Reasoning · Critical Thinking · Communication
  Collaboration · Reflection
        ↓
CABANG (skill)
  Programming · Web · Data · AI · API · …
        ↓
DAUN (tool)
  VS Code · Git · HTML · JS · TensorFlow.js · …
```

### Root Before Branch

Sebelum (atau bersamaan awal dengan) sintaks, pastikan cara berpikir mulai tumbuh. Skill ada di cabang; tool di daun. Jika framework/tool mati, cabang tetap hidup.

### Learning Journey (bukan roadmap daftar bab)

Perjalanan spiral: konsep lama kembali dengan pemahaman lebih matang. Istilah operasional di dokumen silabus tetap memakai “roadmap semester” agar mudah dibaca sekolah, tetapi filosofinya adalah journey.

---

## 4. Learning Cycle

```text
Orientation (Learning Compass)
  → Scaffold (I do / We do)
  → Experience → Observe → Question
  → Trap → Clarify → Reason
  → Concept → Practice → Reflect → Transfer
```

| Tahap | Peran |
|-------|--------|
| **Orientation** | Peta belajar hari ini; identitas; rule; preview — siswa tahu *cara* kelas ini bekerja |
| **Scaffold** | Guru model 1× (think-aloud) sebelum tugas terbuka — terutama Kelas X awal |
| Experience | Situasi nyata / simulasi (sering dengan Cognitive Trap) |
| Observe | Apa yang terjadi? Apa yang aneh? |
| Question | Apa yang ingin diketahui? |
| Clarify | Uji asumsi (Prinsip Bernalar) |
| Reason | Susun penjelasan sementara |
| Concept | Nama & struktur konsep yang dibutuhkan |
| Practice | Latihan / mini build |
| Reflect | Apa yang berubah dalam cara berpikir? |
| Transfer | Di mana lagi pola ini dipakai? |

Variasi singkat di kelas (setara):

```text
Real World → Masalah → Rasa penasaran → Eksplorasi → Error
→ Diskusi → Pemahaman → Konsep → Latihan → Project → Refleksi
```

---

## 5. DNA Modul

Setiap modul resmi CPLF wajib memiliki:

| Elemen DNA | Isi |
|------------|-----|
| Learning Transformation | Perubahan cara berpikir yang ditarget |
| Mental Model | MM yang dilatih |
| Experience | Skenario pembuka |
| Cognitive Trap | Asumsi yang dibongkar |
| Guiding Question | Pertanyaan pemandu |
| Clarification | Momen Prinsip Bernalar |
| Concept | Konsep yang lahir dari kebutuhan |
| Practice | Latihan / mini project |
| Reflection | Pertanyaan refleksi |
| Transfer | Aplikasi ke konteks lain |
| Artefak | Bukti belajar yang terlihat |
| Mapping CP | Elemen Kurikulum Merdeka yang disentuh |

---

## 6. Cognitive Trap vs Plot Twist

- Trap = instrumen pedagogis untuk memperbaiki asumsi.
- Plot twist / humor = bumbu; jika setiap pertemuan hanya menunggu kejutan, fokus belajar bergeser.
- Yang diserang adalah asumsi, bukan harga diri siswa.

---

## 7. Peran Guru dan Siswa

**Guru:** perancang pengalaman belajar, pemegang GPS diskusi, fasilitator klarifikasi.  
**Siswa:** pembangun pengetahuan melalui pengalaman, eksplorasi, diskusi, kesalahan, dan refleksi.

**AI:** partner berpikir, bukan pengganti berpikir.

---

## 8. Anti-Pattern (jangan dilakukan)

1. Menyiram daun: mengajar framework/tool tanpa akar bernalar.
2. Teori panjang tanpa practice dalam siklus yang sama.
3. Memulai dari daftar sintaks (“hari ini if-else”) tanpa trap/transformasi.
4. Menilai hanya output benar/salah tanpa reasoning.
5. Menelan jawaban AI tanpa klarifikasi di depan kelas.
6. Dobel narasi dokumen (dua roadmap saling bertentangan).
7. **Langsung diskusi/kelompok tanpa Orientation & scaffold** — mengasumsikan siswa sudah seperti software engineer.

---

## 9. Checklist Guru (per pertemuan / unit)

- [ ] **Learning Compass** ditampilkan (peta fase + transformasi 1 kalimat).
- [ ] **Scaffold I do** selesai sebelum tugas terbuka (diskusi/kelompok/coding mandiri).
- [ ] Transformasi berpikir hari ini sudah ditulis (satu kalimat).
- [ ] Ada Experience + Cognitive Trap yang aman.
- [ ] Ada momen Clarify (bukan langsung “ini jawabannya”).
- [ ] Konsep muncul setelah kebutuhan terasa.
- [ ] Ada practice/artefak, meski kecil.
- [ ] Ada Reflect + Transfer.
- [ ] Mapping ke capability & elemen CP sudah jelas di rencana unit.
- [ ] Ide melebar sudah diparkir ke backlog, bukan mengganti topik aktif.

---

## 10. Workflow Dokumentasi CPLF

```text
Research → Review → Freeze → Dokumentasi .md → Implementasi kelas
```

Aturan GPS: ide baru masuk Current / Backlog / Parking Lot.  
Moto: *Ide tidak ditolak. Ide diparkir.*  
Rule: One Freeze, One Document.

---

## Design Rationale (singkat)

Framework ini memisahkan **apa yang abadi** (cara bernalar, mental model) dari **apa yang fana** (sintaks, library). Dengan begitu silabus Multimedia/web tetap relevan saat tool berganti, dan proposal ke sekolah menekankan pembentukan kemampuan berpikir + artefak, bukan sekadar daftar bab teknologi.

---

## Dokumen Terkait

- [01-Filosofi-CPLF.md](../01-filosofi/01-Filosofi-CPLF.md)
- [02_Psikologi_Pembelajaran_CPLF.md](../02-psikologi/02_Psikologi_Pembelajaran_CPLF.md)
- [03_Learning_Compass_CPLF.md](./03_Learning_Compass_CPLF.md)
- [03_Mental_Model_CPLF.md](./03_Mental_Model_CPLF.md)
- [04_Roadmap_Global_CPLF.md](../04-roadmap/04_Roadmap_Global_CPLF.md)
- [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md)

## Catatan Versi

v0.1 Draft — merangkum fondasi diskusi CPLF menjadi dokumen produksi.
