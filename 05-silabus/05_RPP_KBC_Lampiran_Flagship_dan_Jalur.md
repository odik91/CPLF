# Lampiran RPP — Flagship KBC + Jalur Kelanjutan (BRG)

**Version:** 0.1 (Draft)  
**Template dasar:** [05_RPP_KBC_Template_CPLF.md](./05_RPP_KBC_Template_CPLF.md)  
**Gap & gate S1–S6:** [05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md](./05_Kaji_Ulang_Jalur_S1-S6_dan_Gap.md)

---

## Jadwal BRG vs modul resmi (ringkas)

| Minggu relatif | Modul CPLF | Tambahan BRG | Catatan RPP |
|----------------|------------|--------------|-------------|
| Akhir kelas X | X-S2-P18 | BRG-02 (PR liburan) | Blok G: ES6 |
| XI S3 P10 selesai | XI-S3-P10 | BRG-03 (1 JP) | Pola komponen |
| XI S4 P04 selesai | XI-S4-P04 | BRG-04 demo + BRG-05 | HTTP server |
| **XII S5 sebelum P08** | XII-S5-P07 → P08 | **BRG-08 wajib** | Gate ML |
| Awal XII S5 | XII-S5-P01 | BRG-01 diagnostik | Diferensiasi |
| Pasca lulus / ekstra | — | BRG-06, BRG-07 | React/Express |

---

## RPP lengkap 1 — XII-S5-P08 (Model mini `fit`) + BRG-08

### Blok A

| Field | Isi |
|-------|-----|
| Kode modul | XII-S5-P08 (+ prasyarat BRG-08) |
| Alokasi | 2 JP = 90 menit *(+30 menit remedial BRG-08 jika gate BRG-01 <80%)* |

### Blok B

| Field | Isi |
|-------|-----|
| CP | AD, AP |
| Capability | CXII-T2 |
| Transformasi | Dari “tensor ada” → **model belajar dari data yang sudah dinormalisasi & terpisah train/val** |
| Aspek | REA, TEC, OBS |

### Blok C (KBC)

| Field | Isi |
|-------|-----|
| Panca Cinta | Sesama (data adil), Allah (jujur metrik) |
| Tema | Kejujuran evaluasi — tidak “akurasi palsu” |
| Momen | Clarify: train vs val · Reflect: bias dataset |

### Blok D (dalil — usulan, verifikasi tim agama)

| Field | Isi |
|-------|-----|
| QS | An-Nisa 4:135 (adil) |
| Makna ringkas | Model dilatih adil = data & evaluasi jujur |
| Refleksi siswa | “Kapan akurasi tinggi bisa menipu?” |
| Bukti | Jurnal split + screenshot loss train vs val |

### Blok E (timeline)

| Menit | Fase | Kegiatan | BRG |
|-------|------|----------|-----|
| 0–10 | Recall | BRG-08: normalisasi + split | Wajib |
| 10–25 | Concept | `tf.sequential`, dense | Modul S5-P08 |
| 25–55 | Practice | `fit` dengan `validationData` | BRG-08 bridge |
| 55–75 | Practice | Baca loss — overfit intro | S5-P10 spiral |
| 75–85 | Reflect | Batasan model 3 kalimat | Rubrik E1 |
| 85–90 | Exit | Satu angka metrik + makna | |

### Blok F

Formatif REA/TEC · tidak sumatif angka · Progress Card catatan “data pipeline”.

### Blok G (jalur lanjutan)

| Target | Kesiapan hari ini |
|--------|-------------------|
| ML/AI backbone | Langkah menuju S5 project & S6 CV |
| React/Node | Tidak fokus hari ini — prasyarat numerik/array (BRG-01) |

---

## RPP lengkap 2 — XI-S4-P04 (Fetch JSON) + BRG-04 preview

### Blok B

Transformasi: “data dari internet” → **kontrak HTTP + JSON + error state**.

### Blok C

Panca: Bangsa (literasi sumber), Sesama (jangan spam API).

### Blok D

QS Al-Isra 17:36 · HR (verify) tentang memastikan berita — kait verifikasi sumber API resmi vs tidak.

### Blok E

Ikuti modul [XI-S4-P04](../06-modules/kelas-xi/semester-4/XI-S4-P04_fetch-json.md) + **15 menit closing**: guru demo Express [BRG-04](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-04_HTTP_Fetch_ke_Express.md) — siswa gambar diagram request/response.

### Blok G

| Jalur | Setelah pertemuan ini |
|-------|------------------------|
| C (Node) | PR: baca BRG-04 §diagram |
| A (ML) | JSON = format dataset S5 |

---

## RPP lengkap 3 — XII-S6-P06 (Etika) — flagship KBC

*(Ringkas — detail contoh ada di [05_RPP_KBC_Template](./05_RPP_KBC_Template_CPLF.md).)*

| Blok | Isi |
|------|-----|
| C | Sesama + Allah · consent · amanah |
| D | QS An-Nisa 4:58 · An-Nur 24:27–29 |
| E | [XII-S6-P06](../06-modules/kelas-xii/semester-6/XII-S6-P06_etika-privasi-bias.md) penuh |
| G | Capstone wajib template etika sebelum P08 build |

---

## RPP ringkas — Ekstra React (BRG-06) — bukan intrakurikuler wajib

| Blok A | Ekstrakurikuler / keterampilan lanjutan · 2 JP |
| Blok B | Mapping ke CXI-T1 spiral — state & UI |
| Blok C | Sesama (aksesibilitas JSX semantic) |
| Blok E | [BRG-06](../06-modules/materi-pendukung/jalur-kelanjutan/BRG-06_React_SPA_Pengantar.md) App.jsx live |
| Blok G | Prasyarat BRG-02,03,05 checklist |

---

## Checklist koordinator RPP semester XII

- [ ] Setiap RPP S5 memuat **Blok G** + referensi BRG-01/08  
- [ ] RPP S6 P06 terlink rubrik etika  
- [ ] Ekstra React/Node terpisah jadwal & penilaian (tidak campur rapor CP wajib)  
- [ ] Dalil disetujui tim agama (mapping §6)

---

## Dokumen terkait

- [05_Mapping_Kurikulum_Berbasis_Cinta.md](./05_Mapping_Kurikulum_Berbasis_Cinta.md)
- [Indeks BRG](../06-modules/materi-pendukung/jalur-kelanjutan/00_Index_Jalur_Kelanjutan.md)
