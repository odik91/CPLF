# Handout Siswa — X-S1-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **6/34**

**Modul:** [X-S1-P06_robot-mie-algoritma.md](../../../base-4jp/kelas-x/semester-1/X-S1-P06_robot-mie-algoritma.md)

**Bacaan:** [X-S1-P06_bacaan-mimi-robi.md](./X-S1-P06_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “komputer/AI paham maksudku” → “instruksi **eksplisit** berurutan = **algoritma**.”


## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut definisi algoritma; beda implisit vs eksplisit |
| **C2** | Memahami | Menjelaskan kenapa ROBI patuh tetap bisa gagal |
| **C3** | Menerapkan | Menulis 5–8 langkah eksplisit (kertas + `algoritma.html`) |
| **C4** | Menganalisis | Menemukan langkah implisit yang hilang saat uji literal |
| **C5** | Mengevaluasi | Menilai langkah mana boleh/tidak boleh dibalik; merevisi setelah uji peer |
| **C6** | Mencipta | Menyusun algoritma topik sendiri (bukan salin contoh guru) |

**Fokus utama:** C2–C4 · **Puncak:** C3–C6

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta  
> Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)


---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Algoritma** | Urutan langkah yang **eksplisit**, **berurutan**, dan **dapat dijalankan** tanpa menebak niat |
| **Eksplisit** | Ditulis / diucapkan jelas |
| **Implisit** | Dilakukan manusia tanpa diucapkan (sering “kelupaan tulis”) |
| **ROBI** | Metafora: patuh literal — seperti program |

---

## 3. Trap hari ini

ROBI **sudah patuh** — tapi hasil gagal.  
Bukan karena ROBI bodoh. Karena ada langkah **implisit** yang tidak pernah diinstruksikan (contoh klasik: **kupas bungkus** mie).

### Hubungkan pertemuan sebelumnya

- P02–P03: mesin ikut **input**, bukan niat di kepala  
- P04: yang tidak ditulis tidak bisa diuji  
- P05: klarifikasi sebelum percaya — hari ini: **tulis langkah** sebelum dijalankan  

---

## 4. Alur (180 menit)

```text
Orientation → contoh teh implisit vs eksplisit
  → Drama ROBI + mie
  → “Patuh tapi gagal?” → konsep algoritma
  → Latihan 6–8 langkah (teman = ROBI)
  → Tulis di HTML → uji lagi → revisi
  → Exit
```

---

## 5. Lembar — observasi ROBI

1. Instruksi yang diucapkan guru (daftar): …  
2. Hasilnya: …  
3. Langkah implisit yang hilang: …  
4. Kalau diulang, langkah eksplisit yang kutambahkan: …

### Bandingkan

| Diucapkan ke ROBI | Yang manusia kerjakan diam-diam |
|-------------------|----------------------------------|
| | |
| | |

---

## 6. Lembar — algoritma (kertas)

Topik: ☐ buat teh  ☐ piket kelas  ☐ lain: …

**Asumsi awal** (barang/kondisi yang sudah ada): …

Langkah (6–8, bernomor):

1. …  
2. …  
3. …  
4. …  
5. …  
6. …  
7. …  
8. …  

**Uji teman = ROBI:** gagal di langkah ke- … karena …

**Revisi langkah:** …

**Urutan:** langkah mana boleh dibalik? … · mana yang tidak? …

---

## 7. Praktik HTML — `algoritma.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Algoritma — …</title>
</head>
<body>
  <h1>Algoritma: …</h1>
  <p><strong>Asumsi awal:</strong> …</p>
  <ol>
    <li>…</li>
    <li>…</li>
    <li>…</li>
    <li>…</li>
    <li>…</li>
  </ol>
  <h2>Uji ROBI</h2>
  <p>Gagal di langkah ke-: … karena langkah implisit: …</p>
  <p>Revisi: …</p>
</body>
</html>
```

Fokus: langkah jelas — bukan cantik CSS.

Teman membaca `ol` **literal** (seperti ROBI). Catat gagal → revisi file.

---

## 8. Pertanyaan pemandu

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?  
2. Urutan boleh dibalik? Akibatnya?  
3. Jika ROBI = program, input apa yang hilang?

---

## 9. Exit ticket

1. Satu langkah yang wajib ditulis eksplisit: …  
2. Satu langkah boleh dibalik vs tidak: …  
3. Satu kalimat: algoritma ≠ menebak niatku — …

## 10. Preview P07

Halaman web juga butuh **struktur jelas** (nama bagian yang bermakna) — HTML semantik.

---

_Tulis langkah sendiri. Jangan menyalin algoritma jadi dari teman/guru._
