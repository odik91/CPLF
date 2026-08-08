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

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · ROBI “masuk” · recall P05 (1 siswa: apa itu klarifikasi?) | Transformasi 1 kalimat |
| 10–25 | **Scaffold teori** | I do: 3 langkah “buat teh” **implisit** vs **eksplisit** side-by-side · We do: kelas tambah 1 langkah hilang | Bahasa dulu, baru drama mie |
| 25–50 | **Experience** | ROBI masak mie (bungkus ikut) — dramatisasi / props / gambar | Volunteer patuh literal |
| 50–65 | **Trap + Q** | “ROBI sudah patuh — kenapa gagal?” | Serang “mesin paham maksud” |
| 65–85 | **Clarify + Concept** | Kolom ROBI vs manusia · definisi **algoritma** · urutan · implisit vs eksplisit | Pertama kali sebut istilah formal |
| 85–95 | **Practice mini (kertas)** | Kelompok: algoritma teh/piket **6–8 langkah** · teman = ROBI literal 3’ | Catat langkah gagal |
| 95–105 | Transisi | Siap editor | |
| 105–120 | **Scaffold praktik** | I do: tulis algoritma ke `algoritma.html` (`ol`/`li`) · jalankan baca baris demi baris | Think-aloud |
| 120–165 | **Practice** | Siswa: 5–8 langkah topik sendiri → HTML · peer jadi ROBI baca literal · revisi langkah hilang | You do |
| 165–180 | Reflect + Exit | Langkah implisit yang sering ketinggalan · preview P07 (HTML semantik) | |

**Adaptasi ketat:** jangan potong Experience ROBI atau Practice HTML — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md)

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
