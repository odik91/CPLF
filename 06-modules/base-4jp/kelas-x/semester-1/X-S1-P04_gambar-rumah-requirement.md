# X-S1-P04 — Gambar Rumah, Requirement & Acceptance

| Field | Isi |
|-------|-----|
| Kode | X-S1-P04 |
| Basis | **4JP** · Pertemuan **4/34** |
| Unit | X1.3 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B1, CX-K1 |
| MM | MM-23, MM-01 |
| EXP | [EXP_02 Gambar Rumah](../../../../07-experience_library/EXP_02_Gambar_Rumah.md) |
| Status | **Isi penuh** |
| DNA 2JP | [P06 gambar rumah](../../../base-2jp/kelas-x/semester-1/X-S1-P06_gambar-rumah-requirement.md) + [P07 acceptance](../../../base-2jp/kelas-x/semester-1/X-S1-P07_spesifikasi-acceptance.md) |

## Learning Transformation

Dari “instruksi sudah jelas di kepala / ‘bagus’ sudah cukup” → “requirement spesifik + acceptance criteria yang bisa dicentang ✅/❌.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: ambiguitas · requirement · kriteria penerimaan |
| **C2** | Memahami | Menjelaskan kenapa instruksi sama bisa hasil beda; beda “bagus” vs syarat yang bisa dicentang |
| **C3** | Menerapkan | Menulis spek 5 poin + kriteria penerimaan untuk 1 section; membangun `<section>` sesuai spek |
| **C4** | Menganalisis | Mendaftar info yang tidak diberikan pada “gambar rumah”; membedakan kata subjektif vs observable |
| **C5** | Mengevaluasi | Mencentang kriteria penerimaan pada sketsa/HTML teman (terpenuhi / belum) |
| **C6** | Mencipta | Menyusun spek + 1 section HTML milik sendiri (bukan salin teman) |

**Fokus utama:** C2–C5 · **Puncak:** C5–C6

---

## Kaitan P03

Deadlock company profile kemarin = versi digital dari “gambar rumah beda.”  
Hari ini bahasa formal: **ambiguitas → requirement → acceptance.**

---

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

**Adaptasi ketat:** jangan potong Experience gambar rumah atau peer-AC — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks](./X-S1_Index.md)

---

## Cognitive Trap

**Asumsi:** “Instruksi sama = hasil sama” dan/atau “‘bagus/menarik’ sudah cukup jadi syarat.”  
**Aman:** Puji keberagaman gambar; challenge hanya pada **kurang spesifikasi** & kata subjektif.

---

## Guiding Questions

1. Info apa yang **tidak** diberikan saat “gambar rumah”?  
2. Bisakah kriteria ini dicentang ✅/❌ **tanpa debat selera**?  
3. Section yang kubangun — AC mana yang **gagal** dan kenapa?

---

## Props / Fallback

- Kertas + pensil · timer · papan  
- Offline: tanpa lab — berhenti di spek+sketsa; HTML diganti PR berbatas  
- Varian rotasi (kelas paralel): Logo / Poster / Website — trap sama (lihat EXP_02)

---

## Template singkat (siswa)

### Requirement (5 poin) — 1 section halaman

Contoh target: section **Tentang kami** untuk Warung Mie / profil MA.

1. …  
2. …  
3. …  
4. …  
5. …

### Acceptance criteria (3–5 checkbox)

- [ ] … (terukur, observable)  
- [ ] …  
- [ ] …  

**Bukan AC:** “menarik”, “bagus”, “keren”, “modern.”

### Kerangka HTML (Practice)

```html
<!-- SPEK: ... -->
<!-- AC:
  [ ] ...
  [ ] ...
-->
<section>
  <h2>…</h2>
  <p>…</p>
  <!-- isi sesuai spek saja -->
</section>
```

---

## Exit Ticket

1. Satu poin requirement yang **paling penting** hari ini  
2. Satu AC yang **paling sulit** dipenuhi (punya sendiri atau teman)  
3. Satu kata subjektif yang sengaja **kuhapus** dari spek (“bagus” / …)

---

## Formatif (rubrik)

**REA**, **COM** — [09_Rubrik_Formatif_Unit.md](../../../09-rubrik/09_Rubrik_Formatif_Unit.md)

---

## Catatan Guru

- Gabungan sadar: P06 (ambiguitas/requirement) + P07 (acceptance) dalam satu pertemuan 4JP.  
- Jangan loncat ke CSS layout — 1 section struktural cukup.  
- Spek wajib sebelum “merasa selesai” — jembatan project S1.  
- P05: protokol klarifikasi (termasuk ke AI) memakai bahasa spek hari ini.
