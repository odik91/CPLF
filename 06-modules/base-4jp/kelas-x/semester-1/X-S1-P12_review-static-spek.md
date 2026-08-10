# X-S1-P12 — Review Static + Spek (Acceptance)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P12 |
| Basis | **4JP** · Pertemuan **12/34** |
| Unit | X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1, CX-K2 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · penutup **Blok 2** · spiral P04 (spek/AC) pada artefak P07–P11 |

## Learning Transformation

Dari “sudah bagus menurutku / menurut vibe” → “**lulus atau belum** menurut **spek + kriteria penerimaan** yang bisa dicentang — lalu perbaiki yang gagal (bukan rewrite selera).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: spek, kriteria penerimaan, checklist review static Blok 2 |
| **C2** | Memahami | Menjelaskan beda kritik selera (“keren”) vs bukti centang AC; kenapa peer memakai spek orang lain |
| **C3** | Menerapkan | Menjalankan checklist pada halaman teman; mencatat lulus/gagal |
| **C4** | Menganalisis | Memetakan temuan ke bagian konkret (semantik / CSS / nav / form) |
| **C5** | Mengevaluasi | Memutuskan prioritas perbaikan berdasar AC gagal (bukan “semua diganti”) |
| **C6** | Mencipta | Menyusun revisi terarah + catatan “apa yang berubah & AC mana yang sekarang lulus” |

**Fokus utama:** C4–C5 · **Puncak:** C3–C6 · JS di browser → **P13** · Project besar S1 → Blok 4 (bukan rewrite total hari ini)

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P04 (AC) · *Vibe ≠ acceptance* · penutup Blok 2 | |
| 10–30 | **Scaffold teori** | C2 | I do: review 1 artefak sampel vs checklist · We do: bedakan selera vs AC | |
| 30–50 | **Experience** | C2–C4 | Mini-drill: 3 temuan sampel → klasifikasi (semantik/CSS/nav/form) | |
| 50–65 | **Trap + Q** | C4 | Trap: debat “keren” · rewrite total · abaikan AC gagal · review tanpa spek | |
| 65–85 | **Clarify + Concept** | C2 | Siklus review: spek → uji → temuan → prioritas → perbaiki → uji ulang | |
| 85–95 | **Practice mini** | C3 | Siswa siapkan spek/AC singkat halaman sendiri (atau pulihkan dari P04–P11) | |
| 95–105 | Transisi | — | Pairing peer · tukar link/folder | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: cara isi lembar peer (bukti, bukan opini) | |
| 120–165 | **Practice** | C3–C6 | Peer review ↔ revisi terarah · uji ulang AC · arsip catatan | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P13 (halaman bisa bereaksi / JS) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P04 | Bahasa spek + kriteria penerimaan |
| P07–P11 | Artefak static: semantik · CSS · layout · multi-section · form |
| **P12** | Review + perbaiki menurut checklist (penutup Blok 2) |
| P13 | JS di browser — halaman mulai bereaksi |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Debat selera / “lebih modern” | Centang AC yang terukur |
| Rewrite halaman dari nol demi “lebih keren” | Perbaiki item gagal berprioritas |
| Review tanpa spek (“aku rasa…”) | Pakai checklist Blok 2 + spek pemilik |
| Menambah JS/fitur baru besar | Stabilkan static dulu; JS = P13+ |

**Adaptasi ketat:** jangan potong peer uji atau putaran revisi — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Spek / requirement** | Apa yang harus ada (kesepakatan sebelum/ selama bangun) |
| **Kriteria penerimaan** (*acceptance criteria*) | Syarat lulus yang bisa dicentang ✅/❌ tanpa debat selera |
| **Review berdasar spek** | Menguji artefak melawan checklist — bukan perasaan reviewer |
| **Temuan** | Item yang gagal + bukti singkat (bukan hinaan) |
| **Revisi terarah** | Perbaiki yang gagal dulu; jangan acak ulang semua |
| **Blok 2 (static)** | Fondasi halaman: HTML bermakna + CSS terbaca + nav + form jujur |

### Checklist review static Blok 2 (inti)

**A. Spek & kejujuran**
- [ ] Ada spek/AC tertulis (milik siswa) untuk halaman ini  
- [ ] Tidak ada klaim bohong (mis. “pesan terkirim” tanpa mekanisme)

**B. Semantik (P07)**
- [ ] Landmark jelas (`header`/`main`/`section`/`footer` sesuai)  
- [ ] Hierarki judul masuk akal (`h1` lalu `h2` …)

**C. Presentasi & keterbacaan (P08–P09)**
- [ ] CSS terpisah + taut benar  
- [ ] Teks terbaca (kontras, jarak, lebar masuk akal)  
- [ ] Semantik tidak dibongkar demi gaya

**D. Multi-section & nav (P10)**
- [ ] 2–3 section bermakna + `id`  
- [ ] `nav` `href="#…"` cocok — uji klik lulus

**E. Form (P11)**
- [ ] `<form>` sungguhan · `label` terhubung · `name` ada  
- [ ] Catatan jujur soal pemrosesan (jika relevan)

**Bukan AC:** “menarik”, “keren”, “modern”, “lebih estetik dari punya aku.”

---

## Cognitive Trap

**Asumsi:** Review = kasih opini selera; atau gagal sedikit = buang semua lalu generate ulang.  
**Aman:** Puji keberanian buka karya; challenge hanya pada **tanpa bukti AC** dan **revisi tidak terarah**.

---

## Guiding Questions

1. AC mana yang **gagal** — bukti apa?  
2. Perbaikan #1 yang paling berdampak: yang mana?  
3. Setelah revisi: AC itu sekarang ✅ atau masih ❌?

---

## Kriteria penerimaan pertemuan (contoh)

- [ ] Siswa punya spek/AC halaman (singkat boleh)  
- [ ] Lembar peer terisi: ≥3 item centang dengan bukti  
- [ ] Ada **revisi terarah** (≥1 AC gagal diperbaiki)  
- [ ] Uji ulang: AC yang diperbaiki dicatat hasilnya  
- [ ] Tidak menambah fitur di luar Blok 2 sebagai “pelarian”  

---

## Exit Ticket

1. Satu AC yang tadinya gagal → sekarang statusnya  
2. Beda kritik selera vs kriteria penerimaan (1 kalimat)  
3. Satu hal yang siap dibawa ke P13 (apa yang sudah stabil di static)

---

## Formatif

**Menganalisis · C4** · **Mengevaluasi · C5** · **Observasi** bukti peer · **Penalaran** prioritas revisi.  
Internal rubrik: OBS / REA / TEC — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Pastikan tiap siswa punya artefak buka (folder P07–P11).  
- Pairing: tukar spek + halaman; reviewer **tidak** mengubah file orang lain tanpa izin — tulis temuan dulu.  
- Batasi waktu revisi: kualitas prioritas > quantity fitur.  
- Rayakan penutup Blok 2 singkat; preview P13 tanpa demo JS panjang.  
