# Handout Siswa — X-S1-P10

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P10_variabel-data.md](../../../kelas-x/semester-1/X-S1-P10_variabel-data.md)

---

## 1. Tujuan pembelajaran

Dari “angka/huruf acak” → **menyimpan informasi** agar tidak hilang.

---

## 2. Ringkasan konsep

| Konsep | Untuk guru |
|--------|------------|
| **Variabel** | Label/kotak penyimpan data di memori program |
| **`let`** | Nilai **boleh diubah** (reassignment) — skor, counter, status sementara |
| **`const`** | Binding **tidak boleh di-assign ulang** — NIS, PI, tanggal lahir |
| **Assignment** | `=` menyimpan nilai ke nama variabel (bukan "sama dengan" matematika) |
| **Tipe dasar (pengantar)** | String (`"12345"`), number (`0`, `10`) — belum deep dive |

**Metafora EXP_07 Perpustakaan:** buku tanpa nomor rak = data tanpa variabel — tidak ketemu lagi.

**Hubungan P09:** siswa sudah pakai `let skor` — hari ini **mendalami** mengapa `let` vs `const`.

**Starter modul = referensi guru saja** — jangan file ke siswa.

---

## 3. Materi praktik

### Transformasi

**Dari:** Angka/huruf acak di kepala / papan dihapus  
**Ke:** Menyimpan informasi agar program ingat dan bisa dipakai ulang

### Experience Perpustakaan

- Trap: judul saja cukup? → dua buku judul mirip
- Clarify: butuh **identifier** stabil → nomor buku = variabel

### `let` vs `const` — kapan pakai?

| Situasi | Pilihan | Alasan |
|---------|---------|--------|
| NIS, kode buku | `const` | Identitas tidak berubah selama program jalan |
| Skor, total, jumlah pinjam | `let` | Akan di-update |
| Nama panggilan (jarang) | `let` atau `const` | Di MA: `const` jika tidak diubah |

### Assignment & update

```javascript
let skor = 0;
skor = skor + 10;  // skor jadi 10
```

Baca: "ambil nilai skor lama, tambah 10, simpan lagi ke skor."

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Demo: hapus catatan NIS di papan — “lupa siapa absen” |
| 5–18 | Experience | Perpustakaan mini — buku tanpa nomor tidak ketemu |
| 18–28 | Trap | Judul saja cukup? (dua buku judul mirip) |
| 28–38 | Clarify | Informasi apa yang harus “ditempel” pada data? |
| 38–48 | Concept | `let` · `const` · variable · assignment |
| 48–70 | Practice | JS: nama, NIS, kelas — `console.log` & ubah nilai |
| 70–85 | Practice 2 | Tanya: const vs let — kapan pakai? (NIS vs skor) |
| 85–90 | Exit | 1 variabel + alasan const/let |

---

## 5. Lembar kerja / latihan

### Snippet A

```javascript
const pi = 3.14;
pi = 3.14159;
console.log(pi);
```

| Pertanyaan | Kunci |
|------------|-------|
| Apa yang terjadi? | Error sebelum log — const tidak boleh reassignment |
| Baris console jalan? | Tidak |

### Snippet B

```javascript
let total = 5;
total = total + 3;
total = total + 2;
console.log(total);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 10 |
| Urutan: setelah baris 2, total? | 8 |

### Snippet C

```javascript
const nis = "001";
let poin = 0;
if (poin >= 10) {
  poin = poin + 5;
}
console.log(nis, poin);
```

| Pertanyaan | Kunci |
|------------|-------|
| Output? | 001 0 |
| Blok if jalan? | Tidak — poin < 10 |

---

## 6. Exit ticket

1. 1 variabel + alasan const/let
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · ilmu

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Ta-Ha 20:114 · QS Al-Mujadilah 58:11

**Kait di kelas hari ini:** Data & variabel = fondasi ilmu yang terukur.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
