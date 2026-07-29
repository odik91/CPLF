# Handout Siswa — X-S1-P05

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P05_flowchart-pseudocode.md](../../../kelas-x/semester-1/X-S1-P05_flowchart-pseudocode.md)

---

## 1. Tujuan pembelajaran

Dari “algoritma di kepala” → “representasi visual & teks yang bisa diuji orang lain.”

---

## 2. Ringkasan konsep

### Representasi algoritma

- Algoritme di kepala → sulit diuji orang lain.
- **Flowchart** = diagram visual alur (cabang, urutan).
- **Pseudocode** = teks semi-formal, **bukan** JavaScript — bridge ke coding P08+.

### Simbol minimal (wajib siswa X)

| Simbol | Fungsi |
|--------|--------|
| Oval | Start / End |
| Persegi | Process (aksi) |
| Belah ketupat | Decision (ya/tidak) |
| Panah | Arah alur |

### Trap flowchart "kelihatan lengkap"

- Ada kotak ≠ algoritme benar — **cabang hilang** = bug logika.
- Uji dengan **1 kasus input contoh** — trace manual.

### Pseudocode CPLF (konvensi sederhana)

```text
MULAI
  ...
  JIKA (kondisi) MAKA
    ...
  JIKA TIDAK
    ...
  AKHIR
SELESAI
```

- Belum wajib VS Code — kertas / draw.io / whiteboard cukup.
- Topik practice mengarah ke **PRJ-S1 Kegiatan Harian**.

### Peer swap

- Tukar flowchart/pseudocode → teman cari **1 bug instruksi** — formatif **COM**.

---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

Proyeksikan (trace dulu, **jangan** copy):

```text
MULAI
  BACA suhu
  JIKA suhu >= 38 MAKA
    TAMPILKAN "Istirahat di rumah"
  JIKA TIDAK
    TAMPILKAN "Ikut kegiatan"
  AKHIR
SELESAI
```

**Input A:** suhu = 39 · **Input B:** suhu = 36

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Input A — output? | "Istirahat di rumah" |
| Input B — output? | "Ikut kegiatan" |
| Boundary suhu = 38 — output? | "Istirahat" (>= 38) |
| Bug jika baris JIKA TIDAK dihapus? | suhu 36 tidak punya output |

### Latihan flowchart (visual)

Gambar sederhana: decision tanpa label YA/TIDAK pada panah.

| Pertanyaan | Kunci |
|------------|-------|
| Trace bisa dilakukan? | Tidak deterministik — bug diagram |
| Perbaikan? | Label setiap cabang |

---

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · ilmu terstruktur

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Alaq 96:1–5

**Kait di kelas hari ini:** Flowchart = urutan berpikir sebelum kode.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
