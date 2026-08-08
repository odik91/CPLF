# Materi Guru Lengkap — X-S1-P06 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P06_robot-mie-algoritma_siswa.md](./X-S1-P06_robot-mie-algoritma_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P06_bacaan-mimi-robi.md](./X-S1-P06_bacaan-mimi-robi.md)

**Modul:** [X-S1-P06_robot-mie-algoritma.md](../../../base-4jp/kelas-x/semester-1/X-S1-P06_robot-mie-algoritma.md)

**Materi pendukung sumber:** [X-S1-P06_robot-mie-algoritma.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P06_robot-mie-algoritma.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: istilah penuh — **algoritma**, **implisit**, **eksplisit**, **Penalaran**, **Observasi**.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P06 — ROBI, Algoritma & Instruksi Eksplisit

| Field | Isi |
|-------|-----|
| Kode | X-S1-P06 |
| Basis | **4JP** · Pertemuan **6/34** |
| Unit | X1.2 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B2, CX-T2 |
| MM | MM-11, MM-12 |
| EXP | [EXP_01](../../../../07-experience_library/EXP_01_Robot_Mie.md) |
| DNA | base-2jp P04 · penuh algoritma (pecah dari P05) |

## Learning Transformation

Dari “komputer/AI paham maksud” → “instruksi eksplisit berurutan (**algoritma**).”

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · ROBI masuk · recall P05 | |
| 10–25 | **Scaffold** | Teh: implisit vs eksplisit side-by-side · We do +1 langkah | Sebelum drama mie |
| 25–50 | **Experience** | ROBI masak mie (bungkus ikut) | Literal |
| 50–65 | **Trap** | Patuh tapi gagal — kenapa? | |
| 65–85 | **Clarify + Concept** | ROBI vs manusia · definisi algoritma · urutan | |
| 85–95 | **Practice mini** | 6–8 langkah teh/piket · teman = ROBI | |
| 95–105 | Transisi | Editor | |
| 105–120 | **Scaffold praktik** | I do: `algoritma.html` dengan `ol`/`li` | |
| 120–165 | **Practice** | 5–8 langkah → HTML · peer ROBI · revisi | |
| 165–180 | Reflect + Exit | Preview P07 HTML semantik | |

**Adaptasi ketat:** jangan potong Experience atau Practice HTML.

---

## Definisi

**Algoritma** = langkah **eksplisit**, **berurutan**, **dapat dijalankan** tanpa menebak niat.  
**Implisit** = dikerjakan manusia tanpa diucapkan.  
**Eksplisit** = tertulis/diucapkan jelas.

## Cognitive Trap

Asumsi “mesin paham maksud” → challenge langkah yang tidak ditulis.

## Guiding Questions

1. Langkah apa yang tidak diucapkan tapi kita pikirkan?  
2. Urutan boleh dibalik? Akibatnya?  
3. Jika ROBI = program, input apa yang hilang?

## Exit Ticket

1. Satu langkah wajib eksplisit  
2. Satu langkah boleh dibalik vs tidak  
3. Algoritma ≠ menebak niat  

## Formatif

**Penalaran** · **Observasi** (internal: REA · OBS — sebut nama ke siswa).

## Catatan Guru

Scaffold teh dulu. Jangan kirim 8 langkah jadi ke WA.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan

Dump mie klasik: “masukkan mie” tanpa “kupas bungkus.”  
Urutan penting (gula sebelum/sesudah air).  
Varian: Teh / Cuci / Ojek antar kelas paralel.

### Side-by-side

| # | ROBI (diucap) | Manusia (implisit) |
|---|----------------|-------------------|
| 1 | Panaskan air | Isi panci, nyalakan, cek mendidih |
| 2 | Masukkan mie | **Kupas bungkus**, buang plastik |
| 3 | Aduk | Cek keempukan |
| 4 | Selesai | Matikan kompor, tuang, bumbu |

### 2. Recall

| Tanya | Inti |
|-------|------|
| P05 klarifikasi? | Klaim → … → konteks |
| P02 mesin paham niat? | Tidak |
| P04 tidak ditulis? | Tidak bisa diuji |

### 3. Etika

No file jawaban 8 langkah. Live ROBI. TTS per langkah. Practice = HTML daftar, bukan CSS.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: jangan vonis kilat. Hari ini: jangan harap mesin menebak niat."
ROBI "masuk" (volunteer). Recall P05 1 siswa.

[1 — Scaffold 10–25]
Papan dua kolom: BUAT TEH — singkat vs eksplisit.
I do 3 langkah implisit (buruk) vs eksplisit.
We do: "Langkah apa yang hilang?" — kelas tambah 1.
Belum sebut formal "algoritma" jika kelas masih hangat — atau sebut setelah mie.

[2 — Experience 25–50]
Instruksi ke ROBI HANYA:
  1. Panaskan air
  2. Masukkan mie (biarkan bungkus — atau biarkan ROBI ikut literal "mie" = bungkus ikut jika tidak dilarang)
  3. Aduk
  4. Selesai
Dramatisasi gagal. Kelas reaksi.

[3 — Trap 50–65]
"ROBI sudah patuh. Kenapa gagal?"
Arahkan: langkah kupas tidak pernah diinstruksikan.
Bukan "ROBI bodoh."

[4 — Clarify + Concept 65–85]
Tabel ROBI vs Manusia di papan.
Definisi: Algoritma = eksplisit + berurutan + dapat dijalankan.
Implisit vs eksplisit.
"Urutan boleh dibalik?" — 1 contoh ya, 1 contoh tidak.

[5 — Practice mini 85–95]
Kelompok: teh ATAU piket kelas — 6–8 langkah.
Teman jadi ROBI 3 menit — catat gagal di langkah ke berapa.

[6 — Transisi 95–105]
Buka editor.

[7 — Scaffold praktik 105–120]
I do algoritma.html:
  h1, asumsi awal, ol/li 5+ langkah, bagian "Uji ROBI".
Baca baris demi baris keras — seperti ROBI.

[8 — Practice 120–165]
Siswa tulis topik sendiri (bukan salin guru).
Peer ROBI literal dari HTML teman.
Revisi langkah hilang di file yang sama.
Tolak: CSS rainbow; JS; "langsung bikin app."

[9 — Exit 165–180]
Exit ticket + preview P07: struktur HTML semantik (nama bagian halaman ikut "langkah jelas").
```

### Kerangka HTML model

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Algoritma</title>
</head>
<body>
  <h1>Algoritma: buat teh manis</h1>
  <p><strong>Asumsi awal:</strong> ada air, gelas, teh, gula, kompor.</p>
  <ol>
    <li>Siapkan gelas bersih.</li>
    <li>Panaskan air sampai mendidih.</li>
    <li>Masukkan teh ke gelas.</li>
    <li>Tuang air panas ke gelas.</li>
    <li>Tambah gula.</li>
    <li>Aduk sampai gula larut.</li>
  </ol>
  <h2>Uji ROBI</h2>
  <p>Gagal di langkah ke-: … karena …</p>
  <p>Revisi: …</p>
</body>
</html>
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Menyalahkan ROBI/teman | Ikut bilang “bodoh” |
| 3 langkah terlalu implisit | Menerima tanpa uji peer |
| Copas algoritma guru | Membagikan jawaban jadi |
| CSS di practice | Meladeni “biar cantik dulu” |
| Loncat ke JS | Meluas scope |

### 6. Checklist exit guru

- [ ] Scaffold teh sebelum mie  
- [ ] Trap patuh-tapi-gagal  
- [ ] Istilah algoritma jelas  
- [ ] Peer ROBI kertas + HTML  
- [ ] Preview P07  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran langkah  
**Kait:** Kerja dengan langkah jelas lebih terhormat daripada “nanti juga ngerti.”

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
