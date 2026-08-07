# Materi Guru Lengkap — X-S1-P03 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P03_company-profile-impact_siswa.md](./X-S1-P03_company-profile-impact_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P03_bacaan-mimi-robi.md](./X-S1-P03_bacaan-mimi-robi.md)

**Modul:** [X-S1-P03_company-profile-impact.md](../../../base-4jp/kelas-x/semester-1/X-S1-P03_company-profile-impact.md)

**Materi pendukung sumber:** [X-S1-P03_company-profile-impact.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P03_company-profile-impact.md)

> File ini **mandiri untuk mengajar**: timeline + skrip + pendukung ada di sini (pola sama P01).

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P03 — Company Profile Impact

| Field | Isi |
|-------|-----|
| Kode | X-S1-P03 |
| Basis | **4JP** · Pertemuan **3/34** |
| Unit | X1.1 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B4, CX-B1 (draft) |
| MM | MM-00, MM-16 |
| DNA | Impact AI · **bukan** P03 2JP (klarifikasi → P05) |

## Learning Transformation

Dari “bisa generate = sudah bisa” → “hasil tanpa paham = deadlock & rasa penasaran (bukan malu, bukan debug dulu).”

---

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Ajar “vibe coding” | Impact: generate tanpa mahir |
| Sesi debug HTML | Bandingkan → catat kebingungan = motivasi |
| Copas = karya final | Artefak = bukti proses; nilai = observasi & pertanyaan |
| AI Policy formal | Policy di **P05**; hari ini: jangan share ke WA sebagai “selesai” |

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · *Bandingkan, jangan patch* · recall P02 (input→output) | Bukan debug / vibe-coding |
| 10–25 | **Scaffold** | I do: generate **1×** · buka HTML · “ini output dari input ini” | Jangan kuliah semua tag |
| 25–55 | **Experience** | Siswa generate **prompt seragam** · simpan file | Satu prompt kelas |
| 55–80 | **Observe** | Gallery 2–3 hasil · sticky sama/beda | |
| 80–95 | **Trap** | “Mana yang benar?” · frustrasi produktif · **jangan patch** | Parkir P04–P05 |
| 95–110 | **Clarify + Concept** | Yang hilang = paham & requirement · AI ≠ otoritas | Ringkas |
| 110–120 | Transisi | Siap “baca, jangan perbaiki” | |
| 120–135 | **Scaffold praktik** | I do: tunjuk `html/head/body/h1/p` · We do: tunjuk di layar teman | Label nama saja |
| 135–165 | **Practice** | Lembar kenali tag + **3 pertanyaan penasaran** | Anti-debug |
| 165–180 | Reflect + Exit | Exit ticket · preview P04 | |

**Adaptasi ketat:** jangan potong Observe/Trap — potong Reflect tertulis bila mepet.

---

## Prompt seragam (wajib)

```text
Buatkan satu file HTML lengkap untuk company profile usaha:
"Warung Mie Sehat MA Al-Hikmah".

Isi halaman:
- nama usaha & tagline
- tentang kami (2–3 paragraf)
- daftar produk/menu (minimal 4 item)
- jam buka & kontak
- footer sederhana

Gunakan HTML semantik dasar. Jangan pakai framework. Satu file saja.
```

**Fallback lab/AI down:** 3–4 file HTML berbeda (siapkan di rumah) → tetap gallery + kenali tag.

## Cognitive Trap

**Asumsi:** HTML cantik = sudah bisa / sudah benar.  
**Aman:** Puji generate & observasi; challenge “karya final” / debug sampai sempurna.

## Guiding Questions

1. Prompt sama — kenapa hasil bisa beda?  
2. Tanpa paham HTML, bagaimana tahu mana “benar”?  
3. Satu pertanyaan agar tidak generate buta?

## Exit Ticket

1. Satu kebingungan saat bandingkan  
2. Satu pertanyaan belajar  
3. Satu tag baru dikenal  

## Formatif

**OBS**, **REA** — bukan kualitas visual.

## Catatan Guru

Jangan ubah jadi workshop debug. Deadlock = bahan P04 & P05.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan yang dikuasai guru

- Tujuan = **impact** + rasa penasaran, bukan skill vibe coding.  
- Prompt = **input** (lanjutan P02).  
- Hasil bisa beda meski prompt sama — cukup bilang mesin tidak menjamin identik; jangan kuliah LLM.  
- Tag hari ini: `html`, `head`, `body`, `h1`, `p` (+ opsional `a`/`ul`/`li`) — nama + fungsi kasar.  
- AI Policy formal → P05.

### 2. Recall spiral

| Tanya | Inti |
|-------|------|
| P02: output = ? | f(input) |
| P02: hasil #1 = fakta? | Belum |
| Prompt sama, hasil beda →? | Sulit nilai “benar” tanpa paham/spek |

### 3. Etika penyampaian

| Aturan | Penerapan |
|--------|-----------|
| No debug workshop | “Benerin dulu” → parkir jadi pertanyaan |
| Prompt seragam | Larang percantik prompt sebelum gallery |
| Live modeling | Generate **1×** di depan saja |
| Nilai | OBS + REA + pertanyaan — bukan cantik |

### 4. Respons siap pakai

| Siswa | Guru |
|-------|------|
| “HTML error / benerin” | “Parkir. Tulis pertanyaan #n.” |
| “Punya aku lebih bagus” | “Bagus ≠ benar. Catat bedanya.” |
| “Ganti prompt?” | “Setelah gallery.” |
| “AI jelek?” | “AI kuat generate. Kita belum bisa minta & menilai.” |

### 5. Skrip live (180')

```text
[0 — Orientation 0–10]
Tulis papan: Bandingkan, jangan patch.
"Tujuan bukan jago AI — bandingkan, rasakan macet, kumpulkan pertanyaan."
Recall P02: 1 siswa bilang output = f(input).

[1 — Scaffold 10–25]
Generate 1× dengan prompt seragam (proyektor).
Buka file di editor. Think-aloud: "Ini OUTPUT dari INPUT prompt itu."
Jangan jelaskan semua tag.

[2 — Experience 25–55]
Bagikan/proyeksikan prompt seragam. Siswa generate & simpan.
Larangan: edit prompt, debug, share WA sebagai selesai.

[3 — Observe 55–80]
2–3 layar / print. Sticky: apa sama? apa beda?
Jangan ranking "paling bagus" sebagai pemenang.

[4 — Trap 80–95]
"Mana yang benar?"
Diam produktif 2–3 menit. Jangan selesaikan dengan patch.
"Parkir. Ini bahan minggu depan."

[5 — Clarify + Concept 95–110]
Papan: yang hilang = paham + requirement.
AI ≠ otoritas. Jembatan P04 (spek) & P05 (klarifikasi).

[6 — Transisi 110–120]
"Sekarang baca — bukan perbaiki."

[7 — Scaffold praktik 120–135]
Satu file: tunjuk html, head, body, h1, p.
We do: siswa tunjuk di layar teman (1 tag).

[8 — Practice 135–165]
Lembar kenali tag. 3 pertanyaan penasaran (bukan cara benerin bug).
Keliling: tolak request CSS/warna.

[9 — Exit 165–180]
Exit ticket + preview P04 gambar rumah / requirement.
Simpan artefak sebagai bukti proses.
```

### 6. Lembar kenali tag (siswa)

| Tag | Kira-kira fungsi | Bingung? Y/T |
|-----|------------------|--------------|
| html | | |
| head | | |
| body | | |
| h1 | | |
| p | | |
| a/ul/li (opsional) | | |

### 7. Praktik mandiri

- File hasil generate tersimpan  
- Lembar tag + 3 pertanyaan  
- Exit ticket  

### 8. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Edit CSS/warna | Ikut debug sampai “beres” |
| Prompt pribadi sebelum gallery | Membiarkan prompt tidak seragam |
| Paste WA sebagai final | Memuji visual tanpa observasi |
| Malu “tidak paham” | Biarkan malu — reframing: pertanyaan = maju |

### 9. Checklist exit guru

- [ ] Papan: *Bandingkan, jangan patch*  
- [ ] Prompt seragam  
- [ ] Gallery + deadlock tanpa debug  
- [ ] Touch coding: label tag + 3 pertanyaan  
- [ ] Artefak = bukti proses  
- [ ] Preview P04  
- [ ] Pendukung tidak ke siswa  

### 10. KBC

**Panca cinta:** Ilmu · jujur pada batas paham  
**Dalil (validasi tim agama):** "Apabila suatu urusan diserahkan kepada yang bukan ahlinya, maka tunggulah kehancurannya." (HR. Bukhari No. 6496)
**Dalil (validasi tim agama):** «كُلُّ بَنِي آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ»Artinya: "Setiap anak Adam pasti berbuat salah, dan sebaik-baik orang yang berbuat salah adalah yang bertaubat (kembali pada kebaikan dan memperbaiki diri)." (HR. Tirmidzi no. 2499).
**Kait:** Mengaku belum paham lebih terhormat daripada “bisa” karena AI cantik.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
