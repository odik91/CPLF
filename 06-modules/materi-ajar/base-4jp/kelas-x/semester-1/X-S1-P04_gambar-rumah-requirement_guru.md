# Materi Guru Lengkap — X-S1-P04 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P04_gambar-rumah-requirement_siswa.md](./X-S1-P04_gambar-rumah-requirement_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P04_bacaan-mimi-robi.md](./X-S1-P04_bacaan-mimi-robi.md)

**Modul:** [X-S1-P04_gambar-rumah-requirement.md](../../../base-4jp/kelas-x/semester-1/X-S1-P04_gambar-rumah-requirement.md)

**Materi pendukung sumber:** [X-S1-P04_gambar-rumah-requirement.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P04_gambar-rumah-requirement.md)

> File ini **mandiri untuk mengajar**: timeline + skrip + pendukung ada di sini (pola sama P01).

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P04 — Gambar Rumah, Requirement & Acceptance

| Field | Isi |
|-------|-----|
| Kode | X-S1-P04 |
| Basis | **4JP** · Pertemuan **4/34** |
| Unit | X1.3 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B1, CX-K1 |
| MM | MM-23, MM-01 |
| EXP | [EXP_02](../../../../07-experience_library/EXP_02_Gambar_Rumah.md) |
| DNA | Gabung base-2jp P06 + P07 |

## Learning Transformation

Dari “instruksi di kepala sudah jelas / ‘bagus’ cukup” → “requirement spesifik + acceptance ✅/❌.”

## Kaitan P03

Deadlock company profile = versi digital “gambar rumah beda.” Hari ini: ambiguitas → requirement → acceptance.

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: ambiguitas · requirement · kriteria penerimaan |
| **C2** | Memahami | Menjelaskan kenapa instruksi sama bisa hasil beda; beda “bagus” vs syarat yang bisa dicentang |
| **C3** | Menerapkan | Menulis spek 5 poin + kriteria penerimaan untuk 1 section; membangun `<section>` sesuai spek |
| **C4** | Menganalisis | Mendaftar info yang tidak diberikan pada “gambar rumah”; membedakan kata subjektif vs observable |
| **C5** | Mengevaluasi | Mencentang kriteria penerimaan pada sketsa/HTML teman (terpenuhi / belum) |
| **C6** | Mencipta | Menyusun spek + 1 section HTML milik sendiri (bukan salin teman) |

**Fokus utama:** C2–C5 · **Puncak:** C5–C6

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta  
> Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P03 deadlock | *Spesifik & bisa diuji* |
| 10–20 | **Scaffold teori** | C2 | Buruk vs baik · ubah “bagus” → testable | |
| 20–35 | **Experience** | C3 | “Gambarlah rumah.” · pajang beda | |
| 35–50 | **Trap + Clarify** | C4 | Kenapa beda? · info yang tidak diberikan | |
| 50–70 | **Concept** | C2 | Requirement · ambiguitas · kriteria penerimaan · DoD | |
| 70–90 | **Practice spek** | C3–C5 | Brief 5 poin · tukar · sketsa · centang | |
| 90–100 | Transisi | — | Editor | |
| 100–115 | **Scaffold praktik** | C2–C3 | Spek → `<section>` HTML · uji kriteria | |
| 115–165 | **Practice HTML** | C3–C6 | 1 section + peer kriteria | |
| 165–180 | Reflect + Exit | C5 | Exit ticket · preview P05 | |



**Adaptasi ketat:** jangan potong gambar rumah / peer-AC — potong Reflect tertulis.

---

## Cognitive Trap

**Asumsi:** instruksi sama = hasil sama; “bagus/menarik” = syarat.  
**Aman:** Puji keberagaman gambar; challenge kurang spek & kata subjektif.

## Guiding Questions

1. Info apa yang tidak diberikan saat “gambar rumah”?  
2. AC ini bisa ✅/❌ tanpa debat selera?  
3. AC mana yang gagal di sectionku — kenapa?

## Props / Fallback

- Kertas + pensil · timer · papan · editor  
- Tanpa lab: spek+sketsa di kelas; HTML = PR berbatas  

## Exit Ticket

1. Poin requirement paling penting  
2. AC paling sulit  
3. Kata subjektif yang dihapus  

## Formatif

**REA**, **COM**

## Catatan Guru

Scope **1 section** saja. Spek sebelum “selesai.” P05 pakai bahasa spek hari ini.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan yang dikuasai guru

| Istilah | Arti | Buruk → baik |
|---------|------|--------------|
| Ambiguitas | Banyak tafsir | “Gambar rumah” |
| Requirement | Harus ada, spesifik | “1 lantai, atap, 1 pintu, 2 jendela” |
| AC | Checklist ✅/❌ | “[ ] Judul section terbaca” |
| DoD (pengantar) | Kapan selesai | “Semua AC + 1 teman uji” |

**Kata terlarang di AC hari ini:** bagus · menarik · keren · modern · profesional (kecuali diubah observable).

### 2. Recall spiral

| Tanya | Inti |
|-------|------|
| P03 deadlock? | Tanpa paham/spek, “benar” tidak bisa diuji |
| P02 output? | f(input) — spek buruk = input buruk |
| P01 batas ≈? | Scope: apa yang tidak digambar/dibangun |

### 3. Etika penyampaian

| Aturan | Penerapan |
|--------|-----------|
| No copas | Jangan kirim brief+AC jawaban ke WA |
| Live modeling | “Gambar rumah” tanpa detail; ubah “bagus”→AC live |
| Per poin | TTS: Tebak uji → Tanya observable? → Spelling |
| Practice | 1 section; tolak full page |

### 4. Contoh transformasi live (hafalkan pola)

| Vague | AC |
|-------|-----|
| Section tentang kami yang bagus | [ ] Ada `h2` nama usaha |
| | [ ] Minimal 2 paragraf |
| | [ ] Ada 1 kalimat batas (“kami tidak …”) |

### 5. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin deadlock company profile. Hari ini namanya: spek kurang."
Papan: Spesifik & bisa diuji.
1 siswa: apa yang bikin deadlock P03?

[1 — Scaffold teori 10–20]
Tulis: "Section bagus".
"Bisa dicentang tanpa debat? Tidak."
Ubah bareng jadi 2–3 AC testable (We do 1 baris).

[2 — Experience 20–35]
"Gambarlah rumah." — tanpa detail. Timer 3 menit.
Pajang 4–6 hasil. Jangan ranking cantik.

[3 — Trap + Clarify 35–50]
"Instruksi sama — kenapa beda?"
Daftar info hilang (lantai, atap, pintu, gaya, media…).
"Itu ambiguitas. Requirement = yang bisa dijawab ya/tidak."

[4 — Concept 50–70]
Papan 4 istilah: ambiguitas · requirement · AC · DoD singkat.
TTS per istilah. Contoh poster/section vague → AC.

[5 — Practice spek kertas 70–90]
Pilih 1 section: Hero / Tentang / Menu.
Brief 5 poin + 3–5 AC.
Tukar → teman sketsa 5' → centang AC milik penulis brief.
❌ = hadiah jujur, bukan penghinaan.

[6 — Transisi 90–100]
Buka editor. Opsional buka artefak P03 sebagai konteks.

[7 — Scaffold praktik 100–115]
I do: tulis komentar SPEK+AC, bangun <section> sesuai.
Di akhir: centang AC punya sendiri (1 gagal sengaja OK untuk demo).

[8 — Practice HTML 115–165]
Siswa: 1 section saja. Peer centang AC.
Tolak: CSS rainbow, 5 section, "dulu bikin full page".

[9 — Exit 165–180]
Exit ticket + preview P05 (klarifikasi isi lubang spek/prompt).
```

### Kerangka HTML model

```html
<!-- SPEK: section Tentang kami — nama, 2 paragraf, 1 batas -->
<!-- AC:
  [ ] Ada h2 nama usaha
  [ ] Minimal 2 paragraf
  [ ] Ada kalimat "kami tidak …"
-->
<section>
  <h2>…</h2>
  <p>…</p>
  <p>…</p>
  <p>Kami tidak …</p>
</section>
```

### 6. Praktik mandiri

- Brief + AC (kertas atau komentar HTML)  
- 1 section sesuai spek  
- Peer AC tercatat  
- Exit ticket  

### 7. Kesalahan umum

| Siswa | Guru |
|-------|------|
| AC tetap “menarik” | Menerima AC subjektif |
| 5 section sekaligus | Membiarkan scope meledak |
| Debat selera gambar | Menilai “cantik” bukan “beda karena ambigu” |
| Copas spek teman utuh | Tidak minta tulis ulang |

### 8. Checklist exit guru

- [ ] Gambar rumah + pajang beda  
- [ ] Kata subjektif ditantang  
- [ ] Peer AC terjadi  
- [ ] Practice = 1 section sesuai spek  
- [ ] Preview P05  
- [ ] Pendukung tidak ke siswa  

### 9. KBC

**Panca cinta:** Ilmu · kejujuran spek  
**Kait:** Janji yang bisa dicek lebih terhormat daripada “nanti pasti bagus.”

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
