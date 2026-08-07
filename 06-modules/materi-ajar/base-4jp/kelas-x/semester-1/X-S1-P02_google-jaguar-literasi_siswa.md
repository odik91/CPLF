# Handout Siswa — X-S1-P02

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **2/34**

**Modul:** [X-S1-P02_google-jaguar-literasi.md](../../../base-4jp/kelas-x/semester-1/X-S1-P02_google-jaguar-literasi.md)

**Bacaan:** [X-S1-P02_bacaan-mimi-robi.md](./X-S1-P02_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “Google tahu maksudku” → “output = f(input); wajib verifikasi.”

---

## 2. Konsep

### Input → Output

- Mesin pencari **bukan** pembaca pikiran.
- Output bergantung pada **kata yang diketik**.
- Satu kata bisa mengubah seluruh hasil.

### Keyword

| Coba | Yang sering muncul |
|------|-------------------|
| `jaguar` | Campuran (mobil / hewan / olahraga) |
| `jaguar animal` | Lebih ke hewan |
| `jaguar car` | Lebih ke mobil |

**Niat di kepala** ≠ **kata di kotak pencarian.**

### Verifikasi

- Hasil #1 **bukan** otomatis fakta #1.
- Untuk 1 fakta tugas: cari **2 sumber** yang independen.
- Kalau hasil “aneh”: perbaiki **input** dulu, jangan langsung bilang “Google bodoh.”

### Trap hari ini

“Google salah” → seringnya **keyword kurang spesifik**.

---

## 3. Alur pertemuan (180 menit)

```text
Orientation + Scaffold (guru model search)
  → Experience jaguar → Trap → Clarify (2 sumber)
  → Concept → Scaffold HTML
  → Practice: keywordmu + halaman catatan
  → Exit
```

---

## 4. Lembar kerja — pencarian

1. Pertanyaan tugas (1 kalimat): …  
2. Keyword #1: … → kesan hasil: …  
3. Keyword #2: … → kesan hasil: …  
4. Keyword #3 (terbaik): …  
5. Fakta utama yang kubawa: …  
6. Sumber 1: …  
7. Sumber 2: …  
8. Beda keyword #1 vs #3: …

### Baca dulu (jangan langsung share)

```text
MULAI
  INPUT: kata_kunci = "jaguar"
  CARI di mesin
  AMBIL hasil_baris_1
  KIRIM ke grup_WA tanpa baca
SELESAI
```

Langkah mana paling berbahaya? …

---

## 5. Praktik HTML — `cari.html`

Tulis ulang catatanmu di halaman (boleh lanjut folder P01). Fokus **isi**, bukan cantik.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Catatan pencarian</title>
</head>
<body>
  <h1>Catatan pencarian</h1>
  <p><strong>Pertanyaan:</strong> …</p>
  <h2>Tiga keyword</h2>
  <ol>
    <li>…</li>
    <li>…</li>
    <li>…</li>
  </ol>
  <h2>Fakta + verifikasi</h2>
  <p>Fakta: …</p>
  <p>Sumber 1: …</p>
  <p>Sumber 2: …</p>
  <p>Strategi keyword ke depan: …</p>
</body>
</html>
```

---

## 6. Pertanyaan pemandu

1. Apa input **persis** yang kita beri mesin?  
2. Apa yang berubah saat **satu kata** ditambah?  
3. Bagaimana membuktikan fakta #1 benar?

---

## 7. Exit ticket

1. Satu strategi keyword pribadi: …  
2. Satu sumber terpercaya untuk topikku: …  
3. Kenapa hasil #1 ≠ fakta #1? …

## 8. Preview P03

Prompt ke AI = **input** juga. Besok kita rasakan generate halaman — tanpa langsung “merasa sudah bisa.”

---

_Kode ditulis sendiri di kelas. Jangan copas project jadi._
