# Handout Siswa — XI-S3-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P02_blueprint-state.md](../../../kelas-xi/semester-3/XI-S3-P02_blueprint-state.md)

---

## 1. Tujuan pembelajaran

Dari diagram bebas → **blueprint** yang bisa diuji tim.

---

## 2. Ringkasan konsep

**Dari diagram bebas P01 → blueprint yang bisa diuji tim.** Blueprint ini **dipakai ulang kickoff project P12** — simpan foto/digital.

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Blueprint** | IPO + state diagram + wireframe layar — **satu paket** sebelum kode |
| **State diagram** | Node = kondisi app · edge = event/transisi (3–5 node cukup) |
| **Wireframe** | Kotak layar kasar — **bukan** desain cantik; fokus alur |
| **Hole** | Bagian kosong: "lalu apa?", transisi invalid, edge case |
| **Clarifying question** | Peer review: 1 pertanyaan spesifik, bukan "bagus" |
| **Edge case** | Input salah, duplikat, back di tengah wizard — harus ada di blueprint |

**Metafora lift rusak:** tombol lantai = input; **state lift** (naik/turun/buka pintu) terpisah — tombol tanpa state = lift "teleport".

**Trap modul:** Gambar UI = selesai merancang — **aman:** wireframe bagus; tanya "transisi state saat user salah input?"

**Recall P01:** IPO + state — hari ini **format** dan **peer test**.

**Prasyarat:** P01 sketsa IPO — bawa ke kelas atau gambar ulang 5 menit.

---

## 3. Materi praktik

### Transformasi

**Dari:** Diagram bebas / hanya UI  
**Ke:** **Blueprint** yang bisa di-sw peer review dan jadi acuan kode P03+

### Komponen blueprint wajib (practice output modul)

- ≥ **2 input** (field, tombol, pilihan)
- ≥ **1 state** eksplisit (variabel + nilai mungkin)
- ≥ **2 layar** (wireframe kotak)
- ≥ **1 edge case** (invalid, duplikat, batal)

### State diagram sederhana (target papan)

```text
        [idle]
          │ klik "Mulai"
          ▼
      [isi_form] ──invalid──► [error_msg]
          │ valid
          ▼
      [konfirmasi]
          │ submit
          ▼
       [selesai]
```

### Blueprint lengkap = 3 layer

```text
LAYER 1 — IPO (dari P01)
LAYER 2 — State diagram (3–5 node)
LAYER 3 — Wireframe (≥2 layar, label tombol + field)
MARGIN  — Edge case + clarifying notes
```

### Contoh: absensi mini (individu practice)

| Layer | Isi |
|-------|-----|
| IPO | Input: nama, kelas · Process: validasi, anti-duplikat · Output: list · State: `daftarHadir[]` |
| State | `kosong` → `mengetik` → `error` / `tersimpan` |
| Wireframe | Layar form · Layar list hadir |
| Edge case | Nama kosong · nama duplikat |

### Cognitive trap — aman

- Puji wireframe rapi
- Tanya: "Dari layar 2 back ke layar 1 — state apa yang berubah?"
- Tanya: "User offline / double submit — ada di blueprint?"

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Gambar UI = selesai merancang.  
**Aman:** Wireframe bagus; tanya “transisi state saat user salah input?”

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan 2 blueprint siswa P01 — cari hole |
| 5–15 | Experience | **Lift rusak**: tombol lantai vs state lift (naik/turun/buka) |
| 15–25 | Trap | Tombol tanpa state = lift “teleport” |
| 25–35 | Clarify | State diagram sederhana (3–5 node) |
| 35–45 | Concept | Blueprint: IPO + state + layar (wireframe 3 kotak) |
| 45–70 | Practice | Lengkapi blueprint app absensi mini (individu) |
| 70–85 | Peer | Swap blueprint — 1 pertanyaan clarifying |
| 85–90 | Exit | Revisi 1 bagian blueprint |

---

## 6. Lembar kerja / latihan

### Diagram A — Wireframe tanpa state

```text
[Layar A: form]  [Layar B: sukses]
Tombol: Submit
(Tidak ada node state)
```

| Pertanyaan | Kunci |
|------------|-------|
| Hole? | Transisi Submit gagal validasi — layar? |
| Tambah apa? | Node `validasi_gagal` + wireframe pesan error |

### Diagram B — State tanpa edge case

```text
idle → isi → selesai
(hanya alur happy path)
```

| Pertanyaan | Kunci |
|------------|-------|
| Edge case missing? | Back dari konfirmasi · input kosong |
| Fix? | Edge `invalid` · edge `back` tanpa reset total state |

### Diagram C — Peer question

```text
State: stok_buku = 5
Edge: pinjam → stok--
(Tidak ada cek stok 0)
```

| Pertanyaan | Kunci |
|------------|-------|
| Clarifying question? | "Pinjam saat stok 0 — tetap `--` atau tolak?" |
| Process fix? | Guard: if stok < 1 → node error, jangan mutasi |

---

## 7. Exit ticket

1. Revisi 1 bagian blueprint
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 9. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
