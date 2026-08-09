# X-S1-P06 — ROBI, Algoritma & Instruksi Eksplisit

| Field | Isi |
|-------|-----|
| Kode | X-S1-P06 |
| Basis | **4JP** · Pertemuan **6/34** |
| Unit | X1.2 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B2, CX-T2 |
| MM | MM-11, MM-12 |
| EXP | [EXP_01 Robot Mie](../../../../07-experience_library/EXP_01_Robot_Mie.md) · varian [Teh](../../../../07-experience_library/EXP_01_A_Teh_Manis.md) / [Cuci](../../../../07-experience_library/EXP_01_B_Cuci_Baju.md) / [Ojek](../../../../07-experience_library/EXP_01_C_Pesan_Ojek.md) |
| Status | **Isi penuh** |
| DNA 2JP | [P04 robot mie](../../../base-2jp/kelas-x/semester-1/X-S1-P04_robot-mie-algoritma.md) |

## Learning Transformation

Dari “komputer/AI paham maksud” → “instruksi eksplisit berurutan (**algoritma**).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut definisi algoritma; beda implisit vs eksplisit |
| **C2** | Memahami | Menjelaskan kenapa ROBI patuh tetap bisa gagal |
| **C3** | Menerapkan | Menulis 5–8 langkah eksplisit (kertas + `algoritma.html`) |
| **C4** | Menganalisis | Menemukan langkah implisit yang hilang saat uji literal |
| **C5** | Mengevaluasi | Menilai langkah mana boleh/tidak boleh dibalik; merevisi setelah uji peer |
| **C6** | Mencipta | Menyusun algoritma topik sendiri (bukan salin contoh guru) |

**Fokus utama:** C2–C4 · **Puncak:** C3–C6

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · ROBI masuk · recall P05 | |
| 10–25 | **Scaffold teori** | C2 | Teh implisit vs eksplisit · We do +1 langkah | Sebelum drama mie |
| 25–50 | **Experience** | C3 | ROBI masak mie (bungkus ikut) | |
| 50–65 | **Trap + Q** | C4 | Patuh tapi gagal — kenapa? | |
| 65–85 | **Clarify + Concept** | C2 | ROBI vs manusia · definisi algoritma · urutan | |
| 85–95 | **Practice mini** | C3–C5 | 6–8 langkah · teman = ROBI | |
| 95–105 | Transisi | — | Editor | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do `algoritma.html` | |
| 120–165 | **Practice** | C3–C6 | 5–8 langkah HTML · peer ROBI · revisi | |
| 165–180 | Reflect + Exit | C5 | Exit ticket · preview P07 | |

## Kaitan P01–P05

| Pertemuan | Jembatan ke P06 |
|-----------|-----------------|
| P01 | Solusi prematur = lompat tanpa langkah jelas |
| P02–P03 | Mesin ikut **input** — bukan niat di kepala |
| P04 | Yang tidak ditulis di spek tidak bisa diuji |
| P05 | Klarifikasi sebelum percaya — hari ini: tulis langkah sebelum “dijalankan” |
| **P06** | Nama formal: **algoritma** = langkah eksplisit berurutan |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Kuliah flowchart rumit / sintaks bahasa pemrograman | Alami ROBI literal → tulis langkah → uji teman = ROBI |
| Coding JS penuh | Tulis **5–8 langkah** di editor (daftar berurutan di HTML) |
| Menyalahkan siswa yang “gagal” jadi ROBI | Rayakan kegagalan sebagai bukti langkah implisit |

**Adaptasi ketat:** jangan potong Experience ROBI atau Practice HTML — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Definisi (hari pertama istilah)

**Algoritma** = urutan langkah yang:
1. **Eksplisit** — tidak mengandalkan “yang dimaksud”  
2. **Berurutan** — urutan bisa mengubah hasil  
3. **Dapat dijalankan** — orang/mesin literal bisa ikut tanpa improvisasi  

**Implisit** = langkah yang manusia kerjakan tanpa diucapkan (kupas bungkus, matikan kompor).  
**Eksplisit** = langkah yang tertulis/diucapkan jelas.

---

## Cognitive Trap

**Asumsi:** Mesin/AI/teman “pasti paham maksudku.”  
**Aman:** Puji kepatuhan ROBI; challenge hanya pada **langkah yang tidak ditulis**.

---

## Guiding Questions

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?  
2. Urutan langkah ini boleh dibalik? Apa akibatnya?  
3. Jika ROBI = program, **input** apa yang hilang?

---

## Props / Fallback

- Mie instan / mangkuk / gambar ROBI · volunteer siswa  
- Offline tanpa props: gambar/slide dump mie (ada di aset bacaan)  
- Varian rotasi kelas paralel: Teh / Cuci baju / Pesan ojek  

---

## Praktik HTML (target You do)

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
    <!-- minimal 5 langkah eksplisit -->
  </ol>
  <h2>Uji ROBI</h2>
  <p>Gagal di langkah ke-: … karena langkah implisit: …</p>
  <p>Revisi: …</p>
</body>
</html>
```

**Bukan dinilai:** CSS.  
**Dinilai:** **Penalaran** (kenapa gagal / apa yang ditambah) · **Observasi** (langkah mana yang hilang).

---

## Exit Ticket

1. Satu langkah yang **wajib** ditulis eksplisit (sering dilupakan manusia)  
2. Satu langkah yang **boleh** dibalik vs yang **tidak** boleh  
3. Satu kalimat: algoritma ≠ “mesin menebak niatku”  

---

## Formatif (rubrik)

**Penalaran** (wajib) · **Observasi** (pendukung).  
Kode internal: Penalaran = REA · Observasi = OBS — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Scaffold teh (implisit vs eksplisit) **sebelum** dump mie.  
- Baru di P06 boleh sebut formal “algoritma” (setelah rasa P01–P05).  
- Jangan bagikan 8 langkah jadi ke WA — siswa tulis sendiri.
