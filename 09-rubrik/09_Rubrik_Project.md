# Rubrik Project CPLF

**Version:** 0.1 (Draft)  
**Kapan:** Project mini / semester / nilai (lihat [08-project](../08-project/08_Project_Bank_Index.md))  
**Acuan deskriptor:** [09_Rubrik_Enam_Aspek.md](./09_Rubrik_Enam_Aspek.md)

## Langkah Penilaian

1. Cek **Definition of Done** di brief project (lulus/tidak untuk artefak minimum).
2. Nilai **6 aspek** (level 1–4).
3. (XII Nilai) tambah [Rubrik Etika AI](./09_Rubrik_Etika_AI.md).
4. Tulis 2–3 kalimat narasi capability (bukan hanya angka).

---

## Gate: Definition of Done

| Status | Makna |
|--------|--------|
| Belum DoD | Project belum siap dinilai penuh — kembalikan dengan daftar gap |
| DoD terpenuhi | Lanjut skor 6 aspek |

DoD tidak digantikan oleh “UI bagus” atau “teman sudah presentasi”.

---

## Lembar Skor Project

| Field | Isi |
|-------|-----|
| Kode PRJ / Varian | |
| Nama / Tim | |
| Kelas / Tanggal | |

| Aspek | Level (1–4) | Bukti singkat (1 frasa) |
|-------|-------------|-------------------------|
| OBS | | |
| REA | | |
| COM | | |
| ITR | | |
| TRF | | |
| TEC | | |
| **Etika AI (XII)** | | lihat rubrik khusus |

**Catatan narasi (wajib):**

> Capability yang paling tumbuh: …  
> Yang perlu ditumbuhkan semester depan: …

---

## Bobot Arah menurut Jenis

| Jenis | Penekanan |
|-------|-----------|
| Mini / S1 X | REA, OBS, ITR > TEC |
| Semester X S2 / XI | Seimbang; COM naik |
| Kolaborasi XI S4 | COM + ITR + proses Git (masuk TEC/COM) |
| Nilai XII | REA + Etika + batasan model wajib; TEC tidak menihilkan etika |

---

## Kriteria Khusus per Fase (tambahan cepat)

### Kelas X

| Tambahan | Lulus jika |
|----------|------------|
| Spek / flowchart | Ada dan diuji orang lain |
| Validasi / kondisi | Edge case minimal 1 ditangani |

### Kelas XI

| Tambahan | Lulus jika |
|----------|------------|
| Blueprint / skema | Tertulis sebelum atau seiring build |
| Async / persist | Loading atau refresh terbukti |
| Tim | Kontribusi terlacak (Git/README peran) |

### Kelas XII

| Tambahan | Lulus jika |
|----------|------------|
| Batasan model | Ditulis & dibahas di demo |
| Kasus gagal | Ditunjukkan, bukan disembunyikan |
| Etika | Skor rubrik etika ≥ level 2 |

---

## Konversi Opsional ke Angka

Contoh sederhana (sesuaikan kebijakan sekolah):

```text
Nilai_proses = rata(OBS,REA,COM,ITR,TRF,TEC) × 25
```

Level 1→25, 2→50, 3→75, 4→100 — atau pakai tabel di [09_Rubrik_Index.md](./09_Rubrik_Index.md).

---

## Anti-Pattern

- Menilai hanya demo hari-H tanpa melihat iterasi  
- Satu anggota tim dapat nilai penuh tanpa peran jelas  
- Mengabaikan DoD karena “sudah usaha”
