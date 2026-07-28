# Materi Guru Lengkap — X-S1-P16

**Handout siswa (bagikan):** [X-S1-P16_project-s1-build-1_siswa.md](./X-S1-P16_project-s1-build-1_siswa.md)

**Modul:** [X-S1-P16_project-s1-build-1.md](../../../kelas-x/semester-1/X-S1-P16_project-s1-build-1.md)

**Materi pendukung sumber:** [X-S1-P16_project-s1-build-1.md](../../../materi-pendukung/kelas-x/semester-1/X-S1-P16_project-s1-build-1.md)

---
## A. Modul pertemuan (referensi)

# X-S1-P16 — Project S1 Build (1)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P16 |
| Unit | X1.8 |
| Durasi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S1-* |

## Timeline (90 menit) — [Panduan Project](../../00_Panduan_Pertemuan.md#pertemuan-project-p15p17-s1-p12p16-s2)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up: kemarin/target hari ini/blocker |
| 10–15 | Guru: 1 clarifying question umum (mis. edge case) |
| 15–65 | **Build** — guru berkeliling; catat siapa perlu scaffolding |
| 65–75 | Checkpoint: demo 30 detik ke pasangan |
| 75–85 | Debug clinic: 1 error diprojekkan anonymous |
| 85–90 | Exit: blocker untuk P17 |

---

## Scaffolding Stations (jika banyak stuck)

- Station A: flowchart review  
- Station B: if/else  
- Station C: loop/function  

---

## Formatif

**ITR**, **TEC**, **OBS**

---

## Catatan Guru

Jangan mulai presentasi final — fokus iterasi.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — X-S1-P16 Project S1 Build (1)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P16 |
| Modul pertemuan | [X-S1-P16_project-s1-build-1](../../../kelas-x/semester-1/X-S1-P16_project-s1-build-1.md) |
| Unit | X1.8 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | Lanjut PRJ-X-S1-* (pilihan P15) |
| Capability | ITR, TEC, OBS |
| Ada live code? | **Facilitator + debug clinic — bukan build untuk siswa** |

---

## 1. Pengetahuan yang Dikuasai Guru

- **Format build week:** stand-up → 1 clarifying question umum → build 50 menit → demo 30 detik → debug clinic → exit blocker.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker.
- **Clarifying question umum (10–15 menit):** edge case untuk **seluruh kelas** — mis. "Apa yang terjadi jika input kosong?" — bukan solusi kode per siswa.
- **Scaffolding stations** (jika banyak stuck):
  - A: flowchart review
  - B: if/else
  - C: loop/function
- **Debug clinic (75–85 menit):** 1 error **anonymous** diprojeksi — kelas isi Debug Sheet bersama.
- **Catat siswa perlu scaffolding** — dari P14/P15 — prioritaskan di rotation.
- **Formatif:** ITR (iterasi), TEC (tool tepat), OBS (amati gejala error).

---

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Apa target kickoff P15 kamu? | (siswa sebut deliverable spec/flowchart) |
| Protokol debug P13? | Gejala → hipotesis → uji 1 fix |
| Acceptance criteria kamu — sudah terpenuhi berapa? | Self-check jujur — guru tidak nilai angka hari ini |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **Guru facilitator** | 90 menit build milik siswa — guru ≤10 menit front-of-class. |
| **Jangan takeover keyboard** | Di depan laptop siswa: tanya, tunjuk layar, **jangan** ketik fix. |
| **Jangan bagikan solusi** | Tidak paste kode antar kelompok; tidak kirim "contoh PRJ selesai". |
| **Clarifying questions** | Ganti "begini kodenya" dengan "input apa? output apa? sudah uji?" |
| Debug clinic | Error anonymous — dari siswa volunteer **tanpa** shame; guru faciliate TTS baca error. |
| Copas antar teman | Red flag — minta jelaskan baris; jika tidak bisa → coaching ulang spec |

### Script coaching (bukan solving)

```text
"Gejala di console apa?" (OBS)
"Hipotesis kamu baris berapa?" (REA)
"Coba satu perubahan — catat di sheet." (ITR)
"Setelah fix, acceptance mana yang tercentang?" (DoD)
```

### Kapan guru boleh sentuh keyboard?

**Hampir tidak pernah.** Pengecualian sempit: demo **generic** 2 baris di papan (bukan file siswa), atau emergency teknis DevTools — bukan menulis solusi PRJ.

---

## 4. Materi Inti

### Build week 1 — iterasi, bukan polish

Fokus: **progress terlihat** vs DoD — bukan presentasi final (itu P18).

### Stand-up efektif (10 menit)

- Berdiri/duduk cepat — max 1 menit/siswa atau per kelompok.
- Guru catat **blocker berulang** → jadi clarifying question atau station.

### Clarifying question umum

Pilih **1** edge case relevan PRJ di kelas:

| PRJ | Contoh clarifying question |
|-----|---------------------------|
| PRJ-01 | "ROBI literal — langkah mana yang paling sering disalahpahami?" |
| PRJ-02 | "Antrian ke-11 — output apa? Sudah di acceptance?" |
| PRJ-03 | "Input bukan angka — gejala apa yang user lihat?" |

### Scaffolding stations

Jika >40% kelas stuck di konsep sama, buka station 15 menit bergiliran — **review konsep**, bukan selesaikan PRJ.

### Demo 30 detik ke pasangan

Pasangan jawab: "Satu hal yang belum jelas dari demo teman."

### Debug clinic

Siswa volunteer kirim error (nama disembunyikan). Kelas:

1. Baca error per baris (TTS)
2. Isi Debug Sheet di papan
3. Volunteer coba fix — guru hanya tanya

---

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Papan Debug Sheet kosong.
- Daftar nama scaffolding dari P14/P15.
- Timer visible untuk blok build 50 menit.
- **Tidak** menyiapkan solusi PRJ di laptop guru.

### Skrip hari ini

```text
[0–10] Stand-up — guru catat blocker
[10–15] 1 clarifying question umum (edge case) — diskusi, tanpa kode guru
[15–65] BUILD — guru berkeliling
        Rotasi: 2 menit/kelompok — hanya clarifying questions
        Stuck >5 menit: arahkan ke station, bukan fix langsung
[65–75] Demo 30 detik ke pasangan
[75–85] Debug clinic — 1 error anonymous, TTS baca console
[85–90] Exit: tulis blocker untuk P17
```

### Contoh interaksi berkeliling (template)

```text
Siswa: "Loop-nya error pak."
Guru: "Baca baris error keras. Apa gejalanya?"
Siswa: "undefined"
Guru: "Index loop sampai berapa? Bandingkan length."
(Siswa fix sendiri)
Guru: "Centang acceptance mana yang baru lolos?"
```

---

## 6. Latihan Membaca Kode

Untuk **debug clinic** — pilih dari error siswa volunteer, atau snippet generic jika belum ada volunteer:

```javascript
// Contoh error anonymous untuk clinic — BUKAN solusi PRJ siswa
const antre = ["A", "B", "C"];
for (let i = 0; i <= antre.length; i++) {
  console.log(antre[i].toUpperCase());
}
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala baris terakhir loop? | `Cannot read properties of undefined` atau `undefined` |
| Hipotesis? | Off-by-one: `<= length` |
| Fix minimal? | `i < antre.length` |

**Etika:** jika pakai kode siswa, anonimkan — fokus proses, bukan malu.

---

## 7. Praktik Mandiri Siswa

1. **Build 50 menit** — iterasi terhadap spec P15.
2. **Debug Sheet** — minimal 1 entry jika ada error hari ini.
3. **Demo 30 detik** — ke pasangan, bukan ke guru saja.
4. **Exit blocker** — 1 kalimat untuk P17.
5. **Bukti iterasi** — screenshot/commit/catatan (persiapan P17).

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| "Pak/bu selesaikan dulu" | Tolak — clarifying question + station |
| Copas grup WA | Tanya baris per baris; reset ke spec sendiri |
| Build tanpa cek acceptance | Arahkan ke checklist DoD PRJ |
| Guru terlalu lama di 1 siswa | "Saya kembali 5 menit lagi — coba hipotesis dulu" |
| Panik tidak ada progress | Normalisasi — iterasi kecil dihitung (ITR) |

---

## 9. Rujukan

- Modul pertemuan: [X-S1-P16](../../../kelas-x/semester-1/X-S1-P16_project-s1-build-1.md)
- Panduan project: [00_Panduan_Pertemuan Kelas X](../../../kelas-x/00_Panduan_Pertemuan.md)
- Debug protokol: [P13 materi pendukung](./X-S1-P13_error-debugging.md)
- Rubrik: [09_Rubrik_Project](../../../09-rubrik/09_Rubrik_Project.md)
- Etika: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)

---

## 10. Checklist Exit Guru

- [ ] Stand-up selesai — blocker tercatat
- [ ] Build block ≥50 menit — guru facilitator, bukan coder
- [ ] **Zero** takeover keyboard untuk menyelesaikan PRJ
- [ ] **Zero** distribusi solusi project
- [ ] Debug clinic dengan TTS baca error
- [ ] Daftar scaffolding P17 updated
- [ ] Siswa tulis blocker exit ticket

[← Indeks S1](./X-S1_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
