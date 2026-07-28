# CPLF — Constructive / Contextual Problem Learning Framework

> **Pintu masuk repo:** [../README.md](../README.md) (ringkasan untuk pengunjung) · **Panduan detail:** dokumen ini.

**Versi dokumentasi:** 0.1 (Frozen)  
**Konteks:** Madrasah Aliyah · Mapel **Multimedia** (fokus **pemrograman web** / JavaScript)  
**Acuan kurikulum:** Kurikulum Merdeka (anchor elemen CP Informatika Fase E–F, diadaptasi ke produk web & AI di browser)

## Apa ini?

CPLF adalah framework pembelajaran untuk menumbuhkan **problem solver**, bukan penghafal sintaks. HTML, CSS, JavaScript, dan TensorFlow.js adalah **media**; yang abadi adalah cara bernalar, mental model, dan tanggung jawab atas solusi.

> Kita tidak sedang mencetak web developer. Kita membantu remaja membangun identitas sebagai orang yang mampu menghadapi masalah baru tanpa takut belajar hal baru.

## Pintu masuk cepat

| Jika Anda ingin… | Baca |
|------------------|------|
| Visi & pilar | [01-filosofi](../01-filosofi/01-Filosofi-CPLF.md) |
| Mengapa metode ini cocok untuk remaja | [02-psikologi](../02-psikologi/02_Psikologi_Pembelajaran_CPLF.md) |
| Cara kerja framework | [03-framework](../03-framework/03_Framework_CPLF.md) |
| 25 Mental Model + klarifikasi | [03_Mental_Model](../03-framework/03_Mental_Model_CPLF.md) |
| Journey 3 tahun | [04-roadmap](../04-roadmap/04_Roadmap_Global_CPLF.md) |
| Capability (kontrak capaian) | [05_Capability](../05-silabus/05_Capability_Framework_CPLF.md) |
| Mapping Merdeka | [05_Mapping](../05-silabus/05_Mapping_Kurikulum_Merdeka.md) |
| Mapping KBC Kemenag | [05_Mapping KBC](../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) · [Template RPP KBC](../05-silabus/05_RPP_KBC_Template_CPLF.md) · [RPP terisi penuh](../05-silabus/05_RPP_KBC_Lampiran_Terisi_Penuh.md) |
| Silabus X / XI / XII | [05-silabus](../05-silabus/) |
| Menulis modul ajar | [00_Template_Modul](../06-modules/00_Template_Modul_CPLF.md) |
| **Materi pendukung guru** | [materi-pendukung](../06-modules/materi-pendukung/README.md) (etika live coding · pengetahuan) |
| **Modul pertemuan Kelas X** | [kelas-x](../06-modules/kelas-x/README.md) (36 × 2 JP) |
| **Modul pertemuan Kelas XI** | [kelas-xi](../06-modules/kelas-xi/README.md) (36 × 2 JP) |
| **Modul pertemuan Kelas XII** | [kelas-xii](../06-modules/kelas-xii/README.md) (36 × 2 JP) |
| Experience / Project / Rubrik | [07](../07-experience_library/) · [08](../08-project/) · [09](../09-rubrik/) |
| **Landasan teori (jurnal)** | [10-research](../10-research/10_Landasan_Teori_CPLF.md) — Bab 1–5 |
| **Pilot tahap awal** | [10-research/pilot](../10-research/pilot/11_Pilot_Tahap_Awal.md) |
| Indeks lengkap | [CPLF_Framework_v0.1_Documentation.md](../CPLF_Framework_v0.1_Documentation.md) |

## Lapisan pembelajaran

```text
Identity → Prinsip Bernalar → Mindset → Mental Model → Skill → Tool
```

**Prinsip Bernalar (moto kelas):**  
*Jangan cepat percaya. Jangan cepat menolak. Pahami dulu.*

## Learning Cycle

```text
Experience → Observe → Question → Clarify → Reason
→ Concept → Practice → Reflect → Transfer
```

Setiap unit idealnya punya **Cognitive Trap** (membongkar asumsi, bukan mempermalukan siswa).

## Journey ringkas

| Kelas | Tema | Arah media |
|-------|------|------------|
| X | Berpikir seperti problem solver | CT → JS → web dasar |
| XI | Membangun solusi | DOM, async, data, kolaborasi |
| XII | Menciptakan nilai | Data/ML → TF.js → CV / project + etika (agent = bonus) |

## Struktur repositori

```text
00-readme/          ← Anda di sini
01-filosofi/
02-psikologi/
03-framework/       ← termasuk Mental Model
04-roadmap/         ← sumber resmi roadmap
05-silabus/         ← capability, mapping Merdeka, mapping KBC, silabus X–XII, kaji ulang jalur, RPP KBC
06-modules/         ← template · [kelas-x/xi/xii](./06-modules/kelas-x/) · [materi-pendukung guru](./06-modules/materi-pendukung/) · [jalur kelanjutan BRG](./06-modules/materi-pendukung/jalur-kelanjutan/)
07-experience_library/  ← EXP_01–10 + 30 varian (living draft)
08-project/             ← 20 brief project X–XII (living draft)
09-rubrik/              ← filosofi + rubrik 6 aspek (living draft)
10-research/            ← landasan teori, tinjauan pustaka (Bab 1–5)
assessment/             ← pointer ke 09-rubrik
docs/                   ← pointer; jangan dobel narasi dengan 04-roadmap
```

## Workflow dokumentasi

```text
Research → Review → Freeze → File .md → Implementasi kelas
```

- **One Freeze, One Document** (fondasi 00–06)
- **07–09 = living draft:** di-review ulang dari praktik ajar; freeze sementara untuk cohort boleh
- Ide melebar → backlog / parking lot (GPS)
- Moto: *Ide tidak ditolak. Ide diparkir.*

## Status backbone

**Frozen (00–06):** fondasi, capability, silabus, template modul.

**Draft living (07–09):** dikaji ulang berdasarkan pembelajaran nyata.  
- [Experience](../07-experience_library/07_Experience_Library_Index.md) · [Project](../08-project/08_Project_Bank_Index.md) · [Rubrik](../09-rubrik/09_Rubrik_Index.md)

**Belum divalidasi empiris:** proposal penelitian formal *on hold*; jalankan [pilot tahap awal](../10-research/pilot/) dulu.  
**Modul pertemuan:** [kelas-x](../06-modules/kelas-x/) · [kelas-xi](../06-modules/kelas-xi/) · [kelas-xii](../06-modules/kelas-xii/) — 108 pertemuan.  
**Materi pendukung guru:** [materi-pendukung](../06-modules/materi-pendukung/) — **108/108 lengkap** (X · XI · XII) + [panduan ML](../06-modules/materi-pendukung/00_Panduan_Guru_ML_TFJS.md) & [CV/etika](../06-modules/materi-pendukung/00_Panduan_Guru_CV_Etika.md) + **[jalur kelanjutan BRG](../06-modules/materi-pendukung/jalur-kelanjutan/)** (ML gate, React, Express).

## Untuk kepala sekolah / koordinator kurikulum

Satu kalimat proposal ada di akhir [05_Mapping_Kurikulum_Merdeka.md](../05-silabus/05_Mapping_Kurikulum_Merdeka.md). Intinya: capaian selaras elemen Berpikir Komputasional, Algoritma & Pemrograman, Analisis Data, dan Literasi Digital — dengan artefak web dan pengenalan AI bertanggung jawab.
