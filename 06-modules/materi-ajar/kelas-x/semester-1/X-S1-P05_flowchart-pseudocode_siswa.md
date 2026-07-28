# Handout Siswa — X-S1-P05
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S1-P05_flowchart-pseudocode.md](../../kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md)
---
## 1. Tujuan pembelajaran
Dari “algoritma di kepala” → “representasi visual & teks yang bisa diuji orang lain.”

---
## 2. Materi
### Demo flowchart "salah" (experience)

Contoh: "Apakah boleh masuk perpustakaan?"

```text
[MULAI] → [Cek punya kartu?] → (YA) → [Masuk] → [SELESAI]
                              ↘ (TIDAK) → ???  ← cabang hilang!
```

Siswa prediksi: siswa tanpa kartu → alur putus / undefined.

### Trace manual (clarify)

Input: `punya_kartu = tidak`

| Langkah | Node | Hasil |
|---------|------|-------|
| 1 | Cek kartu | Tidak |
| 2 | Cabang TIDAK | *(kosong)* → **bug** |

Perbaikan: tambah process "Daftar sementara" atau "Tolak + arahkan ke admin."

### Practice 2 fase

1. **Flowchart** masalah sehari-hari (topik PRJ-S1: absensi kegiatan, jadwal piket, dll.)
2. **Pseudocode** 6–10 baris dari flowchart sendiri
3. **Swap** — teman trace & temukan 1 bug

---
## 5. Alur pertemuan (90 menit)
| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo ROBI literal 1 langkah dari P04 — recall |
| 5–15 | Experience | Guru tunjuk flowchart “salah” (cabang hilang) — tanya output? |
| 15–25 | Trap | Siswa percaya diagram “karena ada kotak” — cek apakah lengkap |
| 25–35 | Clarify | Uji flowchart dengan 1 kasus input contoh |
| 35–45 | Concept | Flowchart · pseudocode · simbol dasar |
| 45–70 | Practice | Buat flowchart masalah sehari-hari (pilih topik PRJ-S1) |
| 70–80 | Practice 2 | Tulis pseudocode 6–10 baris dari flowchart |
| 80–90 | Exit + preview | Swap dengan teman — 1 bug instruksi ditemukan |

---

## 6. Lembar kerja / latihan
Catatan selama Experience · Clarify · Practice:

| Fase | Apa yang kulakukan | Apa yang kupelajari |
|------|-------------------|---------------------|
| Experience | | |
| Clarify | | |
| Practice | | |

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
