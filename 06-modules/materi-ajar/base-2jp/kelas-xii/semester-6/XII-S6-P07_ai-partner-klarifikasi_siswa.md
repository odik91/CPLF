# Handout Siswa — XII-S6-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P07_ai-partner-klarifikasi.md](../../../kelas-xii/semester-6/XII-S6-P07_ai-partner-klarifikasi.md)

---

## 1. Tujuan pembelajaran

Dari menyalin output AI → **partner** dengan protokol klarifikasi produksi.

---

## 2. Ringkasan konsep

### Transformasi belajar

**Dari:** Menyalin output AI = selesai cepat = pintar  
**Ke:** AI = **partner berpikir** dengan protokol klarifikasi — wajib sebelum capstone P08+.

### Moto spiral (MM-00)

```text
Jangan cepat percaya.
Jangan cepat menolak.
Pahami dulu.
```

### Bomb question (EXP_10)

> **"AI salah. Siapa yang salah?"**

Jawaban nuanced: prompt kurang · konteks hilang · kita terlalu percaya · **bukan** "AI bodoh" atau "AI sempurna".

### Checklist AI partner (3 langkah verifikasi)

| Langkah | Pertanyaan |
|---------|------------|
| 1. Klaim | Apa yang AI katakan / kode apa yang dihasilkan? |
| 2. Bukti | Uji di console · cek sumber · bandingkan docs resmi |
| 3. Keputusan | Baris mana dipakai · baris mana dibuang · **jelaskan sendiri** |

### Log klarifikasi (minimum capstone)

```text
Tanggal · Tool · Pertanyaan · Output · Verifikasi · Keputusan akhir
```

**Gate P08:** jika tim pakai AI untuk kode/spec/artikel capstone → folder `logs/ai-klarifikasi.md` wajib ada sebelum build penuh.

### Varian EXP_10 — guru pilih 1 per kelas

| Varian | Trap | Demo aman MA |
|--------|------|--------------|
| **A** | Kode "profesional" = benar | Loop off-by-one · salah `await` TF.js |
| **B** | Sitasi akademik = valid | DOI/jurnal fiktif — cek di Google Scholar |
| **C** | Nada yakin = fakta benar | Fakta sejarah/sains ringan yang bisa cek buku paket |

### Koneksi capstone (P08 besok)

- 5 pertanyaan klarifikasi untuk PRJ = latihan hari ini
- Log format sama dengan yang akan diminta di repo tim
- E3 level 3 = kebiasaan log — target sebelum presentasi P14

---

## 3. Materi praktik

### Timeline facilitator (selaras modul)

| Menit | Fase | Guru |
|-------|------|------|
| 0–5 | Opening | Recall MM-00 · spiral X EXP_10 |
| 5–18 | Experience | Varian EXP_10 A/B/C — kelompok debat |
| 18–28 | Trap | Menyalin tanpa paham = milik sendiri? |
| 28–38 | Clarify | Format log klarifikasi — contoh 1 baris live |
| 38–48 | Concept | Checklist 3 langkah verifikasi |
| 48–65 | Practice | Debug snippet AI salah + tulis log |
| 65–80 | Practice | 5 pertanyaan klarifikasi untuk capstone |
| 80–90 | Exit | Commitment format log di repo tim |

### Snippet cadangan varian A (off-by-one — jangan paste ke siswa)

```javascript
// AI suggestion: hitung rata-rata array
function average(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {  // ← bug plausibel
    sum += arr[i];
  }
  return sum / arr.length;
}
```

| Pertanyaan debug | Kunci |
|------------------|-------|
| Edge case? | `[]` → NaN; `[1]` → salah |
| Bukti? | `console.log(average([1,2,3]))` → tidak 2 |
| Prompt perbaikan? | "Jelaskan baris per baris + uji edge case kosong" |

### Snippet cadangan varian B (sitasi — baca, jangan distribusi)

```text
Menurut Smith et al. (2023), "Neural Networks in Browser Education",
Journal of Web ML, vol. 12, DOI: 10.1234/jwml.2023.fake
```

| Pertanyaan | Kunci |
|------------|-------|
| Plausibel? | Format akademik meyakinkan |
| Verifikasi? | DOI tidak resolve · jurnal tidak ada |
| Dampak capstone? | Jangan sitasi AI untuk fakta sekolah tanpa cek humas |

### 5 pertanyaan klarifikasi capstone (siswa tulis exit)

Contoh kualitas level 3:

1. "Data wajah disimpan di mana — perlu semua pixel?"
2. "Confidence di bawah berapa kita fallback manual?"
3. "Siapa approve fakta di knowledge base asisten madrasah?"
4. "Model TM dilatih berapa sampel per kelas — cukup?"
5. "Baris kode AI mana yang saya ubah dan kenapa?"

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** AI mengganti berpikir — cepat selesai = pintar.  
**Aman:** AI mempercepat **setelah** paham masalah.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall MM-00 · spiral X EXP_10 |
| 5–18 | Experience | EXP_10 varian: kode/fakta/sitasi salah — kelompok |
| 18–28 | Trap | Menyalin tanpa paham = milik sendiri |
| 28–38 | Clarify | Log klarifikasi: prompt · output · yang kamu ubah · bukti paham |
| 38–48 | Concept | AI partner checklist (3 langkah verifikasi) |
| 48–65 | Practice | Debug snippet AI salah — tulis log klarifikasi |
| 65–80 | Practice | Tulis 5 pertanyaan klarifikasi untuk capstone |
| 80–90 | Exit | Commitment: format log capstone |

---

## 6. Lembar kerja / latihan

### Snippet — AI "fix" getUserMedia (plausibel, salah konteks)

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.getElementById('webcam');
video.src = stream;  // ← AI lupa srcObject
```

| Pertanyaan | Kunci |
|------------|-------|
| Terdengar benar? | Ya — API benar, assignment salah |
| Bukti? | MDN: `video.srcObject = stream` |
| Log klarifikasi? | Prompt · output · cek MDN · pakai srcObject |
| Aspek CPLF? | REA, E3 |

### Snippet — TM export path salah

```javascript
const modelURL = './model.json';
const model = await tf.loadLayersModel(modelURL);
// AI tidak sebut metadata.json / class labels
```

| Pertanyaan | Kunci |
|------------|-------|
| Jalan di localhost? | Mungkin — production/CDN beda |
| Yang kurang? | Label kelas · normalisasi input · error handling |
| Saran capstone? | Test load model di P09 sebelum UI polish |

---

## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Allah · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36 · QS Az-Zumar 39:18

**Kait di kelas hari ini:** Checklist verifikasi 3 langkah sebelum percaya AI.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
