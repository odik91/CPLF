# Landasan Teori Constructive / Contextual Problem Learning Framework (CPLF)

**Judul lengkap:** *Kerangka Pembelajaran Pemrograman Web Berbasis Masalah Kontekstual untuk Siswa Madrasah Aliyah: Sintesis Teori dan Desain Framework*

**Versi:** 0.1 (Draft akademik)  
**Penulis / tim:** Dokumentasi CPLF  
**Tanggal:** Juli 2026  
**Status:** Tinjauan pustaka & argumen desain — **belum** divalidasi empiris di lapangan

**Dokumen terkait:** [Filosofi](../01-filosofi/01-Filosofi-CPLF.md) · [Psikologi](../02-psikologi/02_Psikologi_Pembelajaran_CPLF.md) · [Framework operasional](../03-framework/03_Framework_CPLF.md) · [Daftar Pustaka](./10_Daftar_Pustaka.md)

---

## Abstrak

Pembelajaran pemrograman di sekolah menengah sering terjebak pada hafalan sintaks dan latihan terfragmentasi, sehingga siswa sulit mentransfer pengetahuan ke masalah nyata — terutama di era generatif AI. CPLF (*Constructive / Contextual Problem Learning Framework*) diusulkan sebagai kerangka pembelajaran tiga tahun untuk mapel Multimedia di Madrasah Aliyah (MA), dengan JavaScript/web dan pengenalan machine learning di browser sebagai media, bukan tujuan akhir. Dokumen ini menyajikan landasan teori Bab 1–5: latar belakang masalah, tinjauan pustaka, kerangka konseptual, pembahasan sintesis teori-desain, serta batasan dan saran perbaikan. CPLF mensintesis konstruktivisme, pembelajaran berbasis masalah, computational thinking, teori beban kognitif, pembelajaran spiral, dan literasi AI etis menjadi satu siklus pembelajaran operasional. Framework ini masih berstatus *design-based documentation*; validasi kuantitatif dan kualitatif di kelas MA direncanakan sebagai tahap berikutnya.

**Kata kunci:** pembelajaran pemrograman, computational thinking, pembelajaran berbasis masalah, madrasah aliyah, Kurikulum Merdeka, literasi AI

---

# Bab 1 — Pendahuluan

## 1.1 Latar Belakang

### 1.1.1 Konteks pendidikan dan teknologi

Kemampuan digital bukan lagi kompetensi tambahan. OECD (2018) menekankan bahwa pendidikan abad 21 harus menumbuhkan pembelajar adaptif yang mampu memecahkan masalah kompleks. Di Indonesia, Kurikulum Merdeka menempatkan Capaian Pembelajaran (CP) Informatika — termasuk berpikir komputasional, algoritma & pemrograman, analisis data, dan literasi digital — sebagai bagian penting Fase E dan F (Kemendikbudristek, 2022). Mapel Multimedia di MA berada pada persimpangan tersebut: siswa diharapkan tidak hanya “bisa coding”, melainkan memahami bagaimana teknologi web dan AI dipakai secara bertanggung jawab.

Paralel dengan tuntutan kurikulum, literatur pendidikan pemrograman menunjukkan pola problematik yang konsisten: siswa kesulitan pada konsep abstrak, debugging, dan transfer ke konteks baru (Robins et al., 2003; Guzdial, 2015). Banyak kelas masih mengikuti pola *definition → example → exercise* yang efisien untuk ujian jangka pendek, tetapi lemah untuk membentuk *problem solver* jangka panjang.

### 1.1.2 Era AI generatif dan literasi klarifikasi

Kemunculan alat AI generatif (ChatGPT, Copilot, dll.) mengubah asumsi lama: hafalan sintaks dan copy-paste solusi semakin mudah, sementara kemampuan **klarifikasi, verifikasi, dan tanggung jawab atas solusi** semakin krusial (Ng et al., 2021; UNESCO, 2021). CPLF lahir dari premis bahwa sekolah tidak cukup melarang AI; sekolah harus melatih siswa **berpartner** dengan AI tanpa menyerahkan reasoning.

Prinsip bernalar CPLF — *Jangan cepat percaya. Jangan cepat menolak. Pahami dulu.* — dirumuskan sebagai respons pedagogis terhadap arus informasi di media sosial dan jawaban AI yang plausibel tetapi bisa salah.

### 1.1.3 Konteks Madrasah Aliyah

MA membawa nuansa pencarian makna dan identitas remaja (lihat [02-psikologi](../02-psikologi/02_Psikologi_Pembelajaran_CPLF.md)). CPLF **menghindari identity foreclosure** (“kamu harus jadi programmer”) dan menekankan *professional learning identity*: siswa sebagai orang yang mampu belajar dan menyelesaikan masalah secara bertanggung jawab. Konteks MA juga menuntut integrasi etika — privasi, kejujuran, dan manfaat — terutama pada project AI di Kelas XII.

### 1.1.4 Gap yang hendak diisi

| Gap di lapangan | Respons CPLF |
|-----------------|--------------|
| Sintaks diutamakan, reasoning tertinggal | Lapisan Identity → Prinsip Bernalar → Mental Model mendahului Tool |
| Materi linear, transfer lemah | Spiral 3 tahun + Learning Cycle berulang |
| Error = aib | Error sebagai umpan balik (Hattie & Timperley, 2007) |
| AI = contekan | Experience klarifikasi + rubrik etika |
| Project akhir tanpa proses | Project sebagai bukti iterasi, bukan sekali submit |

---

## 1.2 Rumusan Masalah

1. Teori pembelajaran apa yang relevan untuk merancang pembelajaran pemrograman web di MA agar menumbuhkan problem solver, bukan penghafal sintaks?
2. Bagaimana teori-teori tersebut disintesis menjadi kerangka operasional yang selaras Kurikulum Merdeka Fase E–F?
3. Apa kekuatan argumen desain CPLF, dan apa batasannya sebelum diuji empiris?

---

## 1.3 Tujuan Penelitian / Pengembangan

1. Menyusun tinjauan pustaka terkurasi yang mendukung desain CPLF.
2. Merumuskan kerangka konseptual CPLF (lapisan pembelajaran, learning cycle, competency tree).
3. Menganalisis kesesuaian desain CPLF dengan teori dan praktik terbaik di literatur.
4. Mengidentifikasi batasan, kekurangan, dan agenda perbaikan berbasis bukti.

---

## 1.4 Manfaat

| Pihak | Manfaat |
|-------|---------|
| Guru MA Multimedia | Argumen ilmiah untuk desain kelas; rujukan saat adaptasi modul |
| Koordinator kurikulum | Landasan proposal integrasi CP Informatika + Multimedia |
| Peneliti pendidikan | Kerangka *design-based* untuk studi lapangan lanjutan |
| Siswa (indirect) | Pembelajaran yang lebih bermakna, etis, dan transferable |

---

## 1.5 Ruang Lingkup dan Batasan Awal

**Ruang lingkup:**

- Jenjang: MA (Kelas X–XII), 6 semester, 108 pertemuan × 90 menit.
- Mapel: Multimedia dengan fokus pemrograman web (JavaScript) dan pengenalan ML di browser (TensorFlow.js).
- Output dokumentasi v0.1: modul, materi guru, experience, project brief, rubrik.

**Di luar ruang lingkup v0.1:**

- Validasi statistik efektivitas (pre-post, quasi-experiment).
- Implementasi aplikasi LMS pendukung (folder `aplikasi/` menyusul).
- Generalisasi otomatis ke SMK/SMA tanpa adaptasi konteks.

---

# Bab 2 — Tinjauan Pustaka / Landasan Teori

## 2.1 Konstruktivisme dan Konstruksionisme

**Konstruktivisme** (Piaget, 1970; Vygotsky, 1978) menegaskan bahwa pengetahuan dibangun oleh learner melalui interaksi dengan pengalaman, bukan ditransfer utuh dari guru. Siswa mengasimilasi pengalaman baru ke skema lama; jika gagal, terjadi **akomodasi** — skema diperbaiki. CPLF memanfaatkan momen akomodasi lewat **Cognitive Trap**: pengalaman yang mengekspos asumsi salah secara aman.

**Konstruksionisme** (Papert, 1980) menambahkan bahwa pembelajaran paling kuat terjadi ketika siswa **membangun artefak** yang bisa dibagikan — bukan hanya menerima penjelasan. Konstruksionisme menjelaskan mengapa CPLF menuntut **project sebagai bukti** setiap semester dan portofolio 3 tahun.

| Teori | Konsep kunci | Manifestasi di CPLF |
|-------|--------------|---------------------|
| Piaget | Skema, asimilasi, akomodasi | Cognitive Trap → konsep |
| Vygotsky | ZPD, scaffolding | Guru facilitator; materi pendukung = scaffolding guru |
| Papert | Learning by making | Practice → Project → Portofolio |

---

## 2.2 Pembelajaran Berbasis Masalah dan Proyek

**Problem-Based Learning (PBL)** (Barrows, 1996) memulai dari masalah autentik, bukan dari silabus abstrak. Siswa mengidentifikasi apa yang perlu diketahui, mencari informasi, dan menyelesaikan masalah dengan bimbingan facilitator.

**Project-Based Learning (PBL)** dalam arti proyek (Blumenfeld et al., 1991) menekankan *sustained inquiry*: project bukan “hiasan akhir semester”, melainkan wadah integrasi konsep. CPLF menggabungkan keduanya dalam istilah **Contextual Problem Learning**: masalah kontekstual MA (zakat, absensi, inventaris, etika AI) menjadi poros unit.

**Experiential Learning** (Kolb, 1984) memberi siklus konkret: pengalaman → refleksi → konceptualisasi → eksperimen. CPLF Learning Cycle adalah operasionalisasi Kolb yang disesuaikan dengan budaya diskusi MA:

```text
Experience → Observe → Question → Clarify → Reason
→ Concept → Practice → Reflect → Transfer
```

---

## 2.3 Computational Thinking (CT)

Wing (2006) mendefinisikan computational thinking sebagai kemampuan merumuskan masalah dan solusi sehingga dapat dieksekusi oleh agent — manusia atau mesin. Brennan & Resnick (2012) menguraikan CT untuk K–12 dalam dimensi: konsep computational (sequencing, loop, event), praktik (iterasi, testing, debugging), dan perspektif (koneksi ke kehidupan).

Grover & Pea (2013) menekankan bahwa CT **bukan** synonim dengan coding; coding adalah salah satu ekspresi CT. CPLF menempatkan CT di **batang** competency tree (reasoning, decomposition), sementara JavaScript/TF.js di **daun** (tool).

| Dimensi CT (Brennan & Resnick) | Contoh di CPLF |
|-------------------------------|----------------|
| Konsep | Algoritma (X), event & data (XI), pipeline ML (XII) |
| Praktik | Debug, iterasi project, peer review |
| Perspektif | Transfer ke masalah non-koding (literasi AI, etika) |

---

## 2.4 Teori Beban Kognitif (Cognitive Load Theory)

Sweller (1988; Sweller et al., 2019) membedakan beban intrinsik, extraneous, dan germane. Instruksi buruk menambah beban extraneous — misalnya memberi dua representasi yang tidak terintegrasi, atau copas kode panjang tanpa pemahaman.

Implikasi CPLF:

- **Experience sebelum definisi** mengurangi beban abstraksi prematur.
- **Live coding bertahap** (bukan dump file) mengontrol beban extraneous.
- **Spiral** mengembalikan konsep dengan konteks lebih kaya → beban intrinsik naik bertahap, bukan loncat.
- **Mental Model (MM-00–25)** memberi struktur germane yang reusable.

---

## 2.5 Umpan Balik, Growth Mindset, dan Budaya Error

Hattie & Timperley (2007) menunjukkan *feedback* sebagai salah satu faktor dengan efek besar pada pembelajaran — asalkan feedback menjawab: *Where am I going? How am I going? Where to next?*

Dweck (2006) membedakan fixed vs growth mindset. CPLF mengadopsi sikap growth secara eksplisit (pilar *Error is Feedback*, *Growth Over Competition*) tanpa memaksa siswa memuji effort kosong: yang dirayakan adalah **iterasi berbasis bukti**.

---

## 2.6 Situated Learning dan Partisipasi Autentik

Lave & Wenger (1991) menekankan pembelajaran terjadi dalam praktik sosial (*communities of practice*). Project CPLF di konteks MA (absensi OSIS, inventaris perpustakaan, klasifikasi objek madrasah) mendekati *authentic participation* — siswa bukan hanya menyelesaikan soal di IDE, melainkan membayangkan pengguna nyata.

---

## 2.7 Kurikulum Merdeka dan CP Informatika

CP Informatika Fase E–F (Kemendikbudristek, 2022) mencakup berpikir komputasional, algoritma & pemrograman, analisis data, dan literasi digital. CPLF memetakan capability ke elemen CP melalui [05_Mapping_Kurikulum_Merdeka.md](../05-silabus/05_Mapping_Kurikulum_Merdeka.md): web/JS sebagai media capaian, TF.js sebagai pengenalan analisis data & AI di browser.

Pendekatan CPLF selaras spirit Kurikulum Merdeka: **profil pelajar pancasila**, pembelajaran diferensiasi, dan asesmen autentik (Wiggins & McTighe, 2005).

---

## 2.8 Literasi AI dan Etika

Ng et al. (2021) mendefinisikan AI literacy sebagai kemampuan memahami, mengevaluasi, dan menggunakan AI secara kritis. UNESCO (2021) menekankan prinsip keadilan, privasi, transparansi, dan tanggung jawab manusia.

CPLF memasukkan etika AI sebagai **syarat capstone** Kelas XII (bukan tambahan retorik): rubrik etika, demo gagal model, dokumentasi batasan, dan kebijakan privasi kamera.

---

## 2.9 Sintesis: Peta Teori → Komponen CPLF

```text
Konstruktivisme / Konstruksionisme ──→ Experience, Trap, Project, Portofolio
PBL / Project-Based Learning      ──→ Contextual Problem, semester project
Kolb (Experiential)               ──→ Learning Cycle 9 tahap
Computational Thinking            ──→ Competency tree batang & cabang
Cognitive Load Theory             ──→ Urutan Experience→Concept, live coding
Feedback & Growth Mindset         ──→ Error culture, rubrik iterasi
Situated Learning                 ──→ Konteks MA autentik
Kurikulum Merdeka                 ──→ Capability & mapping CP
AI Literacy & Ethics              ──→ P06–P07, P12–P14 S6, rubrik etika
```

---

# Bab 3 — Kerangka Konseptual dan Metode Pengembangan

## 3.1 Definisi Operasional CPLF

**CPLF** (*Constructive / Contextual Problem Learning Framework*) adalah kerangka pembelajaran spiral tiga tahun yang:

1. **Constructive** — siswa membangun pemahaman dan artefak, bukan menerima paket jadi.
2. **Contextual** — masalah bermula dari konteks MA yang dapat dibayangkan manfaatnya.
3. **Problem Learning** — kompetensi diukur lewat kemampuan menyelesaikan dan mempertanggungjawabkan solusi.

---

## 3.2 Lapisan Pembelajaran (Model Konseptual)

```text
Identity
    ↓
Prinsip Bernalar (4 prinsip klarifikasi)
    ↓
Mindset (curiosity, humility, growth, responsibility)
    ↓
Mental Model (MM-00 … MM-25)
    ↓
Skill (decomposition, web, data, ML pipeline, kolaborasi)
    ↓
Tool (HTML, CSS, JS, Git, TensorFlow.js, Teachable Machine)
```

Lapisan ini bukan “semester terpisah”, melainkan **spiral**: tool X di Kelas X kembali dengan kedalaman berbeda di XI dan XII.

---

## 3.3 Competency Tree (Metafora Operasional)

```text
AKAR   : Identity · Curiosity · Humility · Responsibility
BATANG : Reasoning · Critical Thinking · Communication · Collaboration · Reflection
CABANG : Programming · Web · Data · AI literacy
DAUN   : VS Code · Git · TF.js · Browser APIs
```

Prinsip **Root Before Branch**: akar disiram sejak awal, tetapi **cabang tidak ditunda berlebihan** — siswa tetap coding dalam minggu pertama Kelas X setelah experience (lihat Bab 4.3).

---

## 3.4 Learning Cycle CPLF

| Tahap | Fungsi teoretis | Output siswa |
|-------|-----------------|--------------|
| Experience | Disequilibrium (Piaget) | Asumsi terpapar |
| Observe | Perhatian selektif | Fakta dari situasi |
| Question | PBL inquiry | Daftar yang perlu diketahui |
| Clarify | Scientific thinking | Asumsi diuji |
| Reason | Konceptualisasi awal | Hipotesis/penjelasan sementara |
| Concept | Scaffolding guru | Istilah & model |
| Practice | Germane load | Kode/artefak kecil |
| Reflect | Metacognition | Jurnal/refleksi |
| Transfer | Generalisasi | Aplikasi ke konteks baru |

---

## 3.5 Komponen Instruksional CPLF

| Komponen | Fungsi | Lokasi dokumen |
|----------|--------|----------------|
| Modul pertemuan (108) | Timeline 90 menit, fase CPLF | `06-modules/kelas-*/` |
| Materi pendukung guru (108) | Pengetahuan, skrip live, etika | `06-modules/materi-pendukung/` |
| Experience Library | Cognitive Trap reusable | `07-experience_library/` |
| Project Bank | Brief capstone semester | `08-project/` |
| Rubrik | Asesmen 6 aspek + etika | `09-rubrik/` |

---

## 3.6 Metode Pengembangan Framework (Design-Based Research — tahap dokumentasi)

Pengembangan CPLF v0.1 mengikuti pola **Design-Based Research (DBR)** secara *partial* — tahap yang sudah dilakukan:

```text
Analisis praktik & kurikulum
    → Tinjauan literatur (Bab 2)
    → Desain prinsip & komponen (Bab 3)
    → Prototyping dokumentasi (modul, rubrik)
    → [Belum] Implementasi kelas pilot
    → [Belum] Revisi berbasis data
```

DBR penuh (Design-Based Research Collective, 2003) mensyaratkan iterasi di setting nyata. CPLF v0.1 **berhenti di prototipe dokumentasi**; Bab 5 membuka agenda iterasi empiris.

---

## 3.7 Hipotesis Desain (proposisi yang perlu diuji)

| # | Proposisi | Indikator potensial (future research) |
|---|-----------|--------------------------------------|
| H1 | Siswa CPLF lebih baik dalam transfer masalah baru vs kelas sintaks-first | Skor task transfer, wawancara |
| H2 | Cognitive Trap meningkatkan klarifikasi asumsi | Frekuensi tanya balik, jurnal reflect |
| H3 | Rubrik etika meningkatkan awareness batasan AI | Kualitas dokumen batasan, peer review |
| H4 | Spiral 3 tahun meningkatkan retention konsep | Pre-post konsep CT across years |
| H5 | Live coding + TTS mengurangi copas AI | Observasi proses, similarity code analysis |

---

# Bab 4 — Pembahasan

## 4.1 Mengapa CPLF Bukan “Metode Coding Biasa”

Pembelajaran pemrograman tradisional cenderung **tool-first**: variabel → kondisi → loop → OOP, sering tanpa masalah yang memotivasi. Literatur menunjukkan siswa bisa lulus syntax test tetapi gagal debug atau generalisasi (Robins et al., 2003).

CPLF membalik urutan **secara pedagogis**, bukan secara logika ilmu komputer:

```text
Tradisional : Syntax → Contoh → Latihan → (opsional) Project
CPLF        : Experience/Problem → Reason → Concept → Practice → Project → Reflect
```

Tool tetap diajarkan — tetapi **setelah** siswa merasakan kebutuhan konsep. Contoh: loop muncul setelah siswa lelah mengetik instruksi berulang (robot mie); DOM muncul setelah siswa ingin UI hidup; tensor muncul setelah siswa bertanya bagaimana “angka dari gambar”.

---

## 4.2 Cognitive Trap sebagai Instrumen Akomodasi

Trap yang baik (menurut desain CPLF) memenuhi kriteria:

1. **Relatable** — situasi MA (kantin, lab, absensi, WhatsApp hoax).
2. **Safe** — menyerang asumsi, bukan identitas siswa.
3. **Diagnostic** — mengungkap misconception spesifik yang akan diperbaiki unit itu.
4. **Followed by clarify** — tidak berhenti di “gotcha”.

Teoretis, trap menciptakan *disequilibrium* konstruktivis yang cukup untuk akomodasi, tanpa memicu learned helplessness. Guru dilatih facilitator: *“Otakmu memakai asumsi X — mari uji.”*

---

## 4.3 Root Before Branch vs Kebutuhan Motivasi Coding

Tension desain: terlalu lama teori → siswa bosan; terlalu cepat sintaks → hafalan. CPLF mengadopsi pola **“sedikit konsep → praktik → refleksi”** dalam satu pertemuan 90 menit, bukan semester teori.

Psikologi remaja MA (identitas, makna) mendukung **project kecil cepat** (minggu 2–4 Kelas X) agar skill tree terlihat “hidup”. Ini selaras Guzdial (2015): learner-centered design menuntut *early success* dengan artefak bermakna.

---

## 4.4 Spiral Tiga Tahun sebagai Antidote Linear Silabus

Silabus sekolah cenderung linear; cognitive science mendukung **spacing & revisiting** (Bransford et al., 2000). CPLF spiral:

| Konsep | Kelas X | Kelas XI | Kelas XII |
|--------|---------|----------|-----------|
| Data | Input/output, tipe | JSON, fetch, persist | Dataset, tensor, train |
| Algoritma | Flowchart, branch | Event flow, async | Inference pipeline |
| UI | HTML/CSS | DOM, komponen | AI sebagai fitur UX |
| Kolaborasi | Pair debug | Git branch | Capstone tim + etika |
| Literasi | Google Jaguar | AI API klarifikasi | Bias, privasi, demo gagal |

Spiral mencegah “reset otak” tiap tahun — siswa mengenali pola lama dalam konteks baru.

---

## 4.5 Beban Kognitif dan Etika Penyampaian Guru

Materi pendukung CPLF menuntut **live coding** dan **TTS (Tebak-Tanya-Spelling)** — bukan perfeksionisme teatrikal, melainkan strategi CLT:

- Copas 50 baris = beban extraneous tinggi.
- Mengetik 5–10 baris dengan tanya jawab = beban germane.

Di era AI, etika guru melarang distribusi file solusi ke siswa; AI partner diposisikan untuk **klarifikasi**, bukan pengganti reasoning (EXP_10, rubrik etika).

---

## 4.6 Asesmen: Enam Aspek + Etika

CPLF menolak asesmen satu dimensi (hanya kode jalan). Enam aspek — Observation, Reasoning, Communication, Iteration, Transfer, Technical Skill — selaras literatur asesmen autentik dan feedback formative (Wiggins & McTighe, 2005; Hattie & Timperley, 2007).

Dimensi **Etika AI** (Kelas XII) memenuhi tuntutan UNESCO & CP literasi digital: capstone dinilai bukan hanya “akurasi model”, tetapi **kejujuran batasan**, privasi, dan mitigasi salah.

---

## 4.7 Kesesuaian dengan Kurikulum Merdeka

CPLF bukan mapel baru; ia adalah **pedagogical envelope** untuk Multimedia/CP Informatika di MA:

- Fase E (Kelas X–XI awal): CT, algoritma, pemrograman dasar → web/JS.
- Fase F (Kelas XII): analisis data, AI intro, literasi digital kritis.

Mapping detail ada di silabus; landasan teori dokumen ini memberi **justifikasi** mengapa urutan CPLF tidak mengabaikan CP, melainkan mengaitkannya dengan problem solving.

---

## 4.8 Perbandingan Singkat dengan Pendekatan Lain

| Pendekatan | Kekuatan | Gap untuk MA | Posisi CPLF |
|------------|----------|--------------|-------------|
| Syntax-first textbook | Struktur jelas | Transfer lemah | Ditolak sebagai backbone |
| Pure PBL medis (Barrows) | Inquiry kuat | Butuh facilitator mahir | Diadopsi sebagian (Experience) |
| Codecademy-style self-paced | Skalabel | Motivasi & etika AI lemah | Tool opsional, bukan core |
| AP CS / exam-driven | Terukur nasional | Kurang konteks MA & etika | Capability map, bukan salinan |
| CPLF | Konteks + spiral + etika | Belum divalidasi empiris | Framework usulan |

---

# Bab 5 — Kesimpulan, Batasan, Kekurangan, dan Saran Perbaikan

## 5.1 Kesimpulan

1. CPLF didukung oleh sintesis teori konstruktivisme, pembelajaran berbasis masalah/proyek, computational thinking, cognitive load theory, feedback formative, situated learning, Kurikulum Merdeka, dan literasi AI etis.
2. Kontribusi desain utama CPLF: (a) lapisan Identity→Tool, (b) Learning Cycle 9 tahap, (c) Cognitive Trap terkurasi, (d) spiral 3 tahun, (e) asesmen multi-aspek + etika, (f) etika penyampaian guru di era AI.
3. Dokumentasi v0.1 (108 modul + 108 materi guru) merupakan **prototipe instruksional** yang siap pilot — bukan bukti efektivitas.
4. CPLF cocok untuk MA Multimedia yang ingin profil pelajar berpikir kritis, bukan hanya produktivitas coding jangka pendek.

---

## 5.2 Batasan Penelitian / Pengembangan

| # | Batasan | Dampak |
|---|---------|--------|
| B1 | **Belum ada studi lapangan** | Klaim efektivitas masih hipotesis desain (H1–H5) |
| B2 | **Tinjauan pustaka kuratif**, bukan systematic review PRISMA | Potensi bias seleksi referensi |
| B3 | **Konteks MA tertentu** | Generalisasi ke SMA/SMK perlu adaptasi |
| B4 | **Beban guru tinggi** (live coding, 108 materi) | Implementasi penuh butuh dukungan sekolah |
| B5 | **Ketergantungan perangkat** (webcam, browser modern) | Kesenjangan infrastruktur antar madrasah |
| B6 | **AI tools berubah cepat** | Modul literasi AI perlu revisi berkala |
| B7 | **Belum ada validasi psikometrik rubrik** | Skor antar guru belum tentu comparable |
| B8 | **Fokus web/JS** | Tidak mencakup mobile native, Python backend, dll. |

---

## 5.3 Kekurangan Framework v0.1

### 5.3.1 Kekurangan teoretis

- **Integrasi teori belum formal** dalam model matematis atau diagram kausal — masih naratif.
- **Cognitive Trap** belum dikatalogkan dengan taxonomy misconception CS standar (mis. inventory Piaget programming).
- **Hubungan antar Mental Model (MM-00–25)** belum dipetakan sebagai dependency graph empiris.

### 5.3.2 Kekurangan praktis

- Experience Library dan Project Bank masih **draft living** — rotasi varian belum diuji equivalensitas kesulitan.
- Materi pendukung sangat detail → risiko guru **membaca monolog** alih-alih facilitating.
- Capstone AI di XII bisa **overwhelm** guru non-spesialis ML meski ada panduan — tetap butuh mentoring.
- Belum ada **modul diferensiasi formal** untuk siswa dengan prior learning sangat berbeda.

### 5.3.3 Kekurangan empiris

- Tidak ada baseline data pre-post CPLF vs kelas kontrol.
- Tidak ada studi etnografi budaya kelas MA (bagaimana trap dan etika diterima siswa).
- Belum ada analisis **longitudinal** portofolio 3 tahun.

---

## 5.4 Saran Perbaikan (Agenda v0.2+)

### 5.4.1 Penelitian empiris (prioritas tinggi)

| Agenda | Metode disarankan | Output |
|--------|-------------------|--------|
| Pilot 1 semester Kelas X | Mixed methods; pre-post CT task | Laporan efek awal |
| Quasi-experiment 2 kelas | CPLF vs business-as-usual | Cohen's d pada transfer & debug |
| Studi kasus capstone XII | Rubric scoring + wawancara etika | Validasi rubrik |
| Longitudinal 3 tahun | Portofolio + retention test | Bukti spiral |

### 5.4.2 Pengembangan instruksional

1. **Trap Catalog v2** — kode misconception, difficulty, pairing dengan MM.
2. **Diferensiasi** — jalur extension & recovery per unit (without streaming label).
3. **Micro-CPLF** — versi 45 menit untuk jam efektif terpotong.
4. **Parent/ks briefing** — one-pager etika AI & tujuan CPLF (bahasa non-teknis).
5. **Train-the-trainer** — workshop facilitator, bukan workshop syntax.

### 5.4.3 Infrastruktur & tooling

- Aplikasi pendukung ([aplikasi/](../aplikasi/)): progress card digital, bank soal formatif, log observasi rubrik.
- **Offline-first** variant untuk lab internet tidak stabil.
- Integrasi LMS sekolah (jika ada) tanpa lock-in vendor.

### 5.4.4 Kurikulum & kebijakan

- Revisi mapping CP tiap update Kemendikbud.
- Modul **kebijakan AI sekolah** (APAcceptable Use) co-designed dengan madrasah.
- Kemitraan PTKI untuk penelitian tindakan guru (Classroom Action Research).

### 5.4.5 Publikasi dan peer review

- Submit naskah ringkas ke jurnal pendidikan informatika Indonesia setelah data pilot.
- Open repository untuk modul agar peer review komunitas guru.

---

## 5.5 Penutup

CPLF v0.1 adalah **jawaban desain** terhadap tiga tekanan simultan: tuntutan Kurikulum Merdeka, crisis transfer dalam pembelajaran coding, dan disruptifitas AI generatif. Landasan teori menunjukkan bahwa desain ini **plausible dan koheren** — namun plausibilitas teoretis harus digantikan bukti empiris melalui pilot berdisiplin.

> *Framework yang hidup bukan yang paling elegan di kertas, melainkan yang survived contact with real classroom.*

---

## Lampiran A — Glosarium Singkat

| Istilah | Definisi dalam CPLF |
|---------|---------------------|
| Cognitive Trap | Skenario aman yang mengekspos asumsi salah siswa |
| Prinsip Bernalar | Empat prinsip klarifikasi sebelum percaya/menolak |
| Transfer | Mengaplikasikan konsep ke konteks baru |
| TTS | Tebak-Tanya-Spelling — ritual baca kode sebelum mengetik |
| Capstone | Project nilai semester dengan rubrik etika (XII S6) |

---

## Lampiran B — Navigasi Implementasi

Setelah membaca landasan teori, implementator lanjut ke:

1. [03_Framework_CPLF.md](../03-framework/03_Framework_CPLF.md) — operasional guru  
2. [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md) — kontrak capaian  
3. [06-modules/kelas-x/](../06-modules/kelas-x/) — modul pertemuan  
4. [09_Rubrik_Index.md](../09-rubrik/09_Rubrik_Index.md) — penilaian  

---

**Daftar pustaka lengkap:** [10_Daftar_Pustaka.md](./10_Daftar_Pustaka.md)

**Riwayat revisi naskah:**

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 0.1 | Juli 2026 | Draft awal Bab 1–5 + daftar pustaka |
