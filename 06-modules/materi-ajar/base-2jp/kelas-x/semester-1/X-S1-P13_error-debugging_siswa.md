# Handout Siswa — X-S1-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S1-P13_error-debugging.md](../../../kelas-x/semester-1/X-S1-P13_error-debugging.md)

---

## 1. Tujuan pembelajaran

Dari “error = aib” → **gejala → hipotesis → uji** (debugging).

---

## 2. Ringkasan konsep

- **Transformasi inti:** error bukan aib, melainkan **informasi** — gejala → hipotesis → uji → iterasi.
- **Tiga “penyakit” program** yang akan dimodelkan live:
  1. **Typo / ReferenceError** — nama variabel salah (`totl` vs `total`).
  2. **Salah urutan** — operasi dijalankan sebelum data siap (mis. `console.log` sebelum assign).
  3. **Salah kondisi** — `if` atau batas loop off-by-one.
- **Protokol debugging CPLF (4 langkah):** baca pesan error → identifikasi baris → tebak penyebab → uji **satu** perbaikan.
- **Console browser/Node:** siswa kelas X cukup paham `console.log`, `ReferenceError`, `SyntaxError`, dan nomor baris.
- **Budaya kelas:** normalisasi error — guru yang pertama kali “salah” di depan kelas, bukan siswa yang malu.
- **Trap pedagogis:** “Langsung tanya AI vs baca error dulu” — AI boleh, tapi **setelah** membaca gejala sendiri.
- **Formatif:** OBS (mengamati gejala), ITR (iterasi fix), REA (menjelaskan reasoning fix).

---

## 3. Materi praktik

### Error message = petunjuk, bukan hukuman

Ajarkan siswa membaca error dari **luar ke dalam**:

1. **Jenis error** (`ReferenceError`, `SyntaxError`, …) — kategori masalah.
2. **Pesan singkat** — apa yang tidak ditemukan / tidak valid.
3. **File & nomor baris** — di mana mulai melihat.
4. **Stack trace** (opsional kelas X) — urutan pemanggilan; fokus baris paling atas dulu.

### Protokol Debug Sheet

| Gejala | Hipotesis | Uji | Hasil |
|--------|-----------|-----|-------|
| Apa yang terlihat di console/output? | Tebakan penyebab (1 kalimat) | Satu perubahan kecil | Fix / masih error → hipotesis baru |

Satu fix per iterasi — hindari “ganti semua sekaligus” sehingga tidak tahu mana yang benar.

### Debugging vs “trial and error acak”

- **Debugging:** gejala → hipotesis → uji terkontrol → catat.
- **Acak:** ubah-ubah tanpa catatan — dilarang di kelas CPLF meski kadang kebetulan berhasil.

### AI policy hari ini

Siswa boleh minta AI **setelah** mengisi kolom Gejala & Hipotesis sendiri. Wajib jelaskan per baris fix yang dipakai.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan error console (sengaja typo) — reaksi kelas? |
| 5–18 | Experience | 3 “penyakit” program: typo · salah urutan · salah kondisi |
| 18–28 | Trap | Langsung tanya AI vs baca error dulu |
| 28–38 | Clarify | Protokol: baca pesan · baris · tebak · uji 1 fix |
| 38–48 | Concept | Error message · debugging · iterasi |
| 48–70 | Practice | Worksheet debug 3 bug terkontrol |
| 70–85 | Practice 2 | Siswa sengaja buat 1 bug — teman debug |
| 85–90 | Exit | Laporan mini: gejala → fix |

---

## 5. Lembar kerja / latihan

Snippet untuk **diprojeksi** — siswa prediksi gejala, tidak copy.

```javascript
const nilai = [70, 85, 90];
let jumlah = 0;
for (let i = 0; i < nilai.length; i++) {
  jumlah = jumlah + nilai;
}
console.log("Rata-rata:", jumlah / nilai.length);
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Apakah program crash atau output salah? | Output salah (NaN atau angka tidak masuk akal) — tidak ReferenceError. |
| Bug-nya di baris mana? | `jumlah + nilai` seharusnya `jumlah + nilai[i]`. |
| Gejala di console? | `Rata-rata: NaN` atau nilai sangat besar — tergantung coercion. |

```javascript
function cekUsia(usia) {
  if (usia = 17) {
    return "boleh SIM";
  }
  return "belum";
}
console.log(cekUsia(16));
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Kenapa selalu "boleh SIM"? | `=` assignment, bukan `===` perbandingan. |
| Jenis kesalahan? | Logic bug — program jalan tanpa error merah. |

---

## 6. Exit ticket

1. Laporan mini: gejala → fix
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Diri · sabar

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Asr 103:1–3 · QS Ali Imran 3:159

**Kait di kelas hari ini:** Error bukan aib — iterasi dengan lapang dada.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
