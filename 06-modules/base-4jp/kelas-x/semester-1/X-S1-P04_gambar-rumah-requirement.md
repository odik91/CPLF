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

## Kaitan P03

Deadlock company profile kemarin = versi digital dari “gambar rumah beda.”  
Hari ini bahasa formal: **ambiguitas → requirement → acceptance.**

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Aktivitas | Catatan guru |
|-------|------|-----------|--------------|
| 0–10 | **Orientation** | Compass · transformasi · recall P03 (1 siswa: apa yang bikin deadlock?) | Papan: *Spesifik & bisa diuji* |
| 10–20 | **Scaffold teori** | I do: instruksi buruk vs baik (1 contoh live di papan) · We do: ubah 1 frasa “bagus” → testable | Sebelum gambar |
| 20–35 | **Experience** | “Gambarlah rumah.” (3’) · pajang 4–6 hasil beda | Timer ketat · tanpa detail |
| 35–50 | **Trap + Clarify** | Kenapa beda padahal instruksi sama? · daftar info yang **tidak** diberikan | Serang ambiguitas, bukan selera gambar |
| 50–70 | **Concept** | Requirement · ambiguitas · **acceptance criteria** · pengantar DoD | Gabung DNA P06+P07 |
| 70–90 | **Practice spek (kertas)** | Brief 5 poin “1 section halaman” (hero / tentang / menu) · tukar · teman sketsa 5’ · centang AC | Transfer ke web |
| 90–100 | Transisi | Siap editor · buka artefak P03 (opsional) | |
| 100–115 | **Scaffold praktik** | I do: spek 1 section → bangun `section` HTML sesuai AC (think-aloud) | Model ✅/❌ di akhir |
| 115–165 | **Practice HTML** | Siswa: tulis spek + AC di komentar/halaman · bangun **1 section** sesuai spek · peer centang AC | You do · anti “hias dulu” |
| 165–180 | Reflect + Exit | Jurnal · exit ticket · preview P05 (klarifikasi prompt/spek) | |

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
