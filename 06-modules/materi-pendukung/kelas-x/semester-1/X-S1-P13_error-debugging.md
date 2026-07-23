# Materi Pendukung Guru — X-S1-P13 Error & Debugging

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P13 |
| Modul pertemuan | [X-S1-P13_error-debugging](../../../kelas-x/semester-1/X-S1-P13_error-debugging.md) |
| Unit | X1.7 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CX-T4, CX-C1 |
| MM | MM-05 |
| Ada live code? | **Ya — live debug dengan error sengaja** |

---

## 1. Pengetahuan yang Dikuasai Guru

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

## 2. Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| Minggu lalu kita pakai `for` untuk apa? | Mengulang operasi yang sama pada banyak data (array harga kasir). |
| Kalau program “tidak jalan”, langkah pertama bukan apa? | Bukan langsung hapus semua / copas kode teman / tanya AI tanpa baca. |
| Apa beda **gejala** dan **penyebab**? | Gejala = yang terlihat (error message, output salah); penyebab = bug di kode. |

---

## 3. Etika Penyampaian Pertemuan Ini

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| No copas | Worksheet debug dikerjakan siswa mengetik sendiri; guru **tidak** kirim file `.js` siap jalan. |
| Live coding / live modeling | **≥70%** demo = guru mengetik + **sengaja** membuat error, lalu debug live di depan kelas. |
| Per baris / scope | Setiap error message dibaca dengan **TTS per baris** (lihat Alur Live Coding). |
| Recall | Opening 5 menit: tampilkan error typo — tanya reaksi kelas sebelum sebut kata “debugging”. |
| Membaca kode | Latihan worksheet: siswa baca snippet, prediksi gejala, **baru** ketik fix versi sendiri. |

**Prinsip hari ini:** guru menunjukkan **proses**, bukan “kode benar”. Salah ketik disengaja adalah fitur, bukan kecelakaan.

---

## 4. Materi Inti

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

## 5. Alur Live Coding / Live Modeling

### Persiapan

- Editor kosong + DevTools Console terbuka (F12).
- Proyektor menampilkan **Console** dan **Sources** (atau editor dengan nomor baris).
- Di laptop siswa: **belum ada** file worksheet — siswa buat setelah demo.
- Siapkan 3 “penyakit” terpisah (bisa 3 file kecil atau 1 file dengan reset).

### Skrip (ketik live)

```text
[LANGKAH 1 — Opening: typo sengaja]
Ketik:
  const harga = [5000, 3000, 12000];
  let totl = 0;
  for (let i = 0; i < harga.length; i++) {
    totl = totl + harga[i];
  }
  console.log("Total:", total);

Ucapkan: "Saya sengaja salah ketik. Jangan bantu dulu — amati console."
Jalankan → biarkan error muncul.

TTS — baca error PER BARIS:
  Tebak: "Baris pertama error ini bilang apa jenis masalahnya?"
  Tanya: "Kata 'total' vs 'totl' — di baris berapa total dipakai?"
  Spelling: Baca keras: "ReferenceError: total is not defined at ... line X"
           Jelaskan: "total belum pernah dideklarasikan — kemungkinan typo nama."

Tanya siswa: "Hipotesis kalian? Satu fix saja."
Ketik fix: totl → total (ATAU total → totl — pilih satu, jelaskan konsistensi nama).
Jalankan ulang → sukses.

---

[LANGKAH 2 — Salah urutan]
Ketik (fresh block):
  let saldo = 10000;
  console.log("Saldo setelah tarik:", saldo);
  saldo = saldo - 5000;

Ucapkan: "Program jalan, tapi output salah. Error tidak selalu merah."
TTS output:
  Tebak: "Apakah urutan eksekusi sudah benar?"
  Tanya: "console.log di baris 2 — saldo sudah berubah belum?"
  Spelling: "Baris dijalankan atas ke bawah; log harus SETELAH operasi."

Siswa sebut fix → guru pindahkan console.log ke bawah assign.

---

[LANGKAH 3 — Salah kondisi / off-by-one]
Ketik:
  const antre = ["Ani", "Budi", "Citra", "Doni"];
  for (let i = 0; i <= antre.length; i++) {
    console.log(i + 1, antre[i]);
  }

Ucapkan: "Kadang error-nya undefined, bukan merah SyntaxError."
TTS:
  Tebak: "Gejala di console — ada baris aneh?"
  Tanya: "Loop jalan sampai i = ? Bandingkan dengan length."
  Spelling: "<= length → index terakhir length (undefined). Pakai < length."

Fix live: <= → <
Demo ulang.

---

[LANGKAH 4 — Trap: AI vs baca dulu]
Tanya: "Kalau stuck, langkah pertama ke ChatGPT atau ke Debug Sheet?"
Clarify: Isi Gejala + Hipotesis dulu — AI sebagai konsultan, bukan pengganti mata.

---

[LANGKAH 5 — Practice: siswa buat bug sendiri]
Guru tidak ketik. Siswa sengaja buat 1 bug → swap dengan teman → debug pakai sheet.
Guru berkeliling: cek apakah teman **membaca error** atau langsung tebak fix.
```

---

## 6. Latihan Membaca Kode

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

## 7. Praktik Mandiri Siswa

1. **Worksheet 3 bug terkontrol** — siswa ketik starter minimal sendiri (array + loop), guru beri **deskripsi gejala** saja, bukan kode rusak siap pakai.
2. **Bug swap:** siswa A sengaja sisipkan 1 bug → siswa B isi Debug Sheet → 1 fix.
3. **Exit ticket:** tulis tabel mini Gejala → Hipotesis → Fix untuk 1 bug hari ini.
4. **Catatan:** versi sendiri di buku/IDE — bukan foto layar guru.

---

## 8. Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Panik saat console merah; tutup DevTools | Normalisasi: "Merah = pesan, bukan nilai." |
| Langsung ganti seluruh file | Ingatkan: satu fix, catat di sheet |
| Minta AI tanpa baca baris error | Wajibkan kolom Gejala terisi dulu |
| Malu saat bug sendiri | Puji proses debug, bukan "cepat benar" |
| Copas fix teman tanpa paham | Tanya: "Kenapa baris itu diubah?" sebelum lanjut |

---

## 9. Rujukan

- Modul pertemuan: [X-S1-P13](../../../kelas-x/semester-1/X-S1-P13_error-debugging.md)
- Silabus X1.7: [05_Silabus_Kelas_X](../../../05-silabus/05_Silabus_Kelas_X.md)
- MM-05 (Error sebagai informasi)
- Etika global: [00_Panduan_Etika_Penyampaian](../../00_Panduan_Etika_Penyampaian.md)
- Recall dari: [P11 Kasir & Loop](../../../kelas-x/semester-1/X-S1-P11_kasir-loop.md), [P12 Function](../../../kelas-x/semester-1/X-S1-P12_function-loop-js.md)

---

## 10. Checklist Exit Guru

- [ ] Live debug ≥3 error sengaja — bukan slide screenshot
- [ ] TTS per baris saat baca error message (Tebak → Tanya → Spelling)
- [ ] Recall terpasang (loop + langkah pertama saat error)
- [ ] Siswa isi Debug Sheet minimal 1 kali mandiri
- [ ] Tidak ada file `.js` worksheet dibagikan ke siswa
- [ ] Budaya error dinormalisasi — ada siswa yang berani tunjukkan bug sendiri

[← Indeks S1](./X-S1_Materi_Index.md)
