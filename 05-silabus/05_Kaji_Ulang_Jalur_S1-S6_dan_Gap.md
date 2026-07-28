# Kaji Ulang Jalur S1–S6 — Kesiapan ML/AI & Kelanjutan Stack (React / Node)

**Version:** 0.1 (Draft)  
**Audiens:** Koordinator kurikulum, guru Multimedia MA  
**Tujuan dokumen:** Memastikan **tujuan akhir CPLF** (ML/DL/AI di browser + etika) tercapai, sekaligus **menutup gap** menuju stack lanjutan (SPA React, BE Node/Express) tanpa mengubah 108 modul inti.

---

## 1. Tiga jalur capaian (jangan dicampur di penilaian)

| Jalur | Target | Status di CPLF backbone | Kelanjutan |
|-------|--------|-------------------------|------------|
| **A — Wajib MA (CPLF)** | Peta AI/ML/DL, data, tensor, TF.js, CV/transfer, etika, capstone | S5–S6 resmi | Python/PyTorch = **di luar** backbone (kuliah/ekstra) |
| **B — FE lanjutan** | HTML/CSS/JS/DOM → arsitektur SPA → React | S2–S3 partial; **SPA = vanilla multi-section** | [BRG-03](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-03_SPA_Vanilla_ke_Komponen.md) → [BRG-06](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-06_React_SPA_Pengantar.md) |
| **C — BE lanjutan** | Fetch/API → HTTP server → REST Express | S4: **konsumsi** API saja | [BRG-04](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-04_HTTP_Fetch_ke_Express.md) → [BRG-07](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-07_Node_Express_REST_Minimal.md) |

**Prinsip:** Modul 108 pertemuan tetap **frozen**; gap ditutup dengan **materi pendukung BRG** (PR mandiri, ekstrakurikuler, atau 1–2 JP tambahan koordinator).

---

## 2. Tujuan akhir ML/DL/AI (CPLF) — definisi operasional

Lulusan XII **minimum** (meski jam sempit):

| # | Capaian | Bukti |
|---|---------|--------|
| 1 | Membedakan AI / rule / ML / DL | Peta konsep S5-P01 |
| 2 | Membersihkan dataset kecil & menjelaskan bias | S5-P02–P03, EXP_09 |
| 3 | Intuisi vektor, statistik, outlier | S5-P04–P05 |
| 4 | Tensor + `fit`/`predict` mini + baca loss | S5-P06–P10, P15 |
| 5 | Pipeline webcam → prediksi + demo gagal | S6-P01–P02 |
| 6 | Transfer learning (TM/MobileNet) + integrasi web | S6-P03–P05 |
| 7 | Etika E1–E4 + capstone nilai | S6-P06–P14, rubrik etika |

**Risiko:** Siswa masuk S5 tanpa **array/JSON/async/map-filter** kuat → tensor & API data terasa “magic”. **Mitigasi:** [BRG-01](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-01_Prasyarat_ML_AI_Spiral.md) + [BRG-08](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-08_ML_Data_Normalisasi_Split.md) (sebelum S5-P08).

---

## 3. Gate kesiapan per akhir semester

### Akhir S1 (Kelas X — semester 1)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| Flowchart, if/else, loop, function | S1-P05–P11 | Masih Node-only, belum DOM | — |
| Debug & klarifikasi | S1-P13, EXP_10 | — | — |
| Array dasar | S1-P11 kasir | `.map` belum formal | BRG-01 §X |

### Akhir S2 (Kelas X — semester 2)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| HTML semantik, CSS layout | S2-P02–P04 | Flex/grid hanya dasar | — |
| DOM, event, form validasi | S2-P05–P08 | Immutability state lemah | BRG-02 |
| Array → render list | S2-P09 | Re-render pattern | BRG-03 §vanilla |
| Project integrasi | S2-P12–P18 | — | — |

### Akhir S3 (Kelas XI — semester 3)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| IPO, state, render() | S3-P01–P08 | “SPA” belum routing | BRG-03 |
| ES module / refactor | S3-P09–P10 | `npm` belum | BRG-02, BRG-05 |
| Project app | S3-P12–P18 | — | — |

### Akhir S4 (Kelas XI — semester 4)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| async/await, fetch, JSON | S4-P01–P04 | Hanya **client** HTTP | BRG-04 |
| map/filter/reduce pipeline | S4-P03 | Normalisasi numerik untuk ML | BRG-08 |
| localStorage, ER mini | S4-P07–P10 | Bukan SQL/server DB | BRG-07 (opsional) |
| Git kolaborasi | S4-P11–P16 | — | — |

### Akhir S5 (Kelas XII — semester 5)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| Data bersih, vektor, statistik | S5-P02–P05 | Train/val split eksplisit | BRG-08 |
| Tensor, model kecil, metrik | S5-P06–P10 | Normalisasi fitur sebelum dense | BRG-08 |
| Project S5 + batasan | S5-P11–P18 | — | — |

### Akhir S6 (Kelas XII — semester 6)

| Harus kuat | Modul CPLF | Gap umum | BRG |
|------------|------------|----------|-----|
| CV, TM, etika, capstone | S6-P01–P18 | — | — |
| Identitas lulusan | P18 | Stack React/Node = **lanjutan** | BRG-06, BRG-07 |

---

## 4. Matriks gap: modul vs kebutuhan lanjutan

| Kebutuhan stack lanjutan | Tercakup modul resmi? | Level | Materi pendukung |
|--------------------------|----------------------|-------|------------------|
| DOM + event + state | Ya (X S2, XI S3) | Cukup untuk vanilla SPA | BRG-03 |
| ES6 modules, destructuring, spread | Sebagian (XI S3-P09) | **Gap** | BRG-02 |
| Immutability / update state aman | Sebagian (XI S3-P08) | **Gap** untuk React | BRG-02, BRG-03 |
| Client fetch + JSON | Ya (XI S4) | Cukup | — |
| HTTP method, status code, REST **server** | Hanya teori ringkas (S4-P03) | **Gap besar** | BRG-04, BRG-07 |
| npm, package.json, scripts | Mention (.gitignore) | **Gap** | BRG-05 |
| Komponen, JSX, props, hooks | Tidak (sengaja) | **Ekstra** | BRG-06 |
| CORS dari sisi server | Disebut (S4 fetch) | **Gap** | BRG-04, BRG-07 |
| Array numerik → tensor | Ya (S5) | Perlu normalisasi | BRG-08 |
| Train/validation split | Implisit | **Gap** | BRG-08 |
| TF.js + webcam | Ya (S5–S6) | Cukup backbone | BRG-01 checklist guru |

---

## 5. Rekomendasi penempatan BRG (tanpa ubah silabus frozen)

| Kapan | BRG | Durasi guru | Mode |
|-------|-----|-------------|------|
| Akhir X / libur antar X–XI | BRG-02 ES6 modern | 2–3 JP PR | PR + 1 sesi review |
| XI S3 setelah P09 | BRG-03 SPA→komponen | 1 JP integrasi | Diskusi + latihan |
| XI S4 setelah P04 | BRG-04 HTTP dua sisi | 2 JP | Demo Express lokal (guru) |
| XI S4 minggu Git | BRG-05 npm | 1 JP | Live setup project |
| XII **sebelum** S5-P08 | BRG-08 normalisasi & split | **Wajib** 1 JP | Diagnostik kelas |
| XII awal S5 | BRG-01 checklist | 30 menit guru | Gate: lanjut/tutor |
| Pasca XII / ekstra / kuliah | BRG-06 React, BRG-07 Express | 6–12 JP total | Ekstrakurikuler |

---

## 6. Integrasi RPP & KBC

- Template RPP: [05_RPP_KBC_Template_CPLF.md](./05_RPP_KBC_Template_CPLF.md) **Blok G** (kesiapan jalur).  
- Lampiran RPP contoh + jadwal BRG: [05_RPP_KBC_Lampiran_Flagship_dan_Jalur.md](./05_RPP_KBC_Lampiran_Flagship_dan_Jalur.md).  
- Mapping KBC tetap: [05_Mapping_Kurikulum_Berbasis_Cinta.md](./05_Mapping_Kurikulum_Berbasis_Cinta.md).

---

## 7. Checklist koordinator (semesteran)

**Sebelum buka semester XII S5:**

- [ ] ≥80% cohort lulus [BRG-01](./../06-modules/materi-pendukung/jalur-kelanjutan/BRG-01_Prasyarat_ML_AI_Spiral.md) gate  
- [ ] Guru baca [00_Panduan_Guru_ML_TFJS.md](../06-modules/materi-pendukung/00_Panduan_Guru_ML_TFJS.md) + BRG-08  
- [ ] Lab: CDN TF.js atau cache lokal  

**Sebelum promosi ke ekstra React/Node:**

- [ ] Selesai XI S4 dengan project fetch + Git  
- [ ] BRG-02, BRG-05 selesai (PR)  

---

## Dokumen terkait

- [04_Roadmap_Global_CPLF.md](../04-roadmap/04_Roadmap_Global_CPLF.md)
- [05_Capability_Framework_CPLF.md](./05_Capability_Framework_CPLF.md)
- [Indeks BRG](../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md)
- Aplikasi sekolah (Nest/Next): [aplikasi/README.md](../aplikasi/README.md) — **referensi profesional**, bukan target siswa XII wajib

## Catatan versi

v0.1 — kaji ulang gap S1–S6; revisi setelah pilot diagnostik BRG-01 di kelas nyata.
