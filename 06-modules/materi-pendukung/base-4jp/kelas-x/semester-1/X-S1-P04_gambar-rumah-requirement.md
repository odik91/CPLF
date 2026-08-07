# Materi Pendukung Guru — X-S1-P04 Requirement & Acceptance (4JP)

> **RAHASIA GURU** — Jangan bagikan file ini ke siswa apa adanya.

## Metadata

| Field | Isi |
|-------|-----|
| Kode | X-S1-P04 |
| Modul | [X-S1-P04_gambar-rumah-requirement.md](../../../base-4jp/kelas-x/semester-1/X-S1-P04_gambar-rumah-requirement.md) |
| Semester | 1 · Pertemuan **4/34** · **4 JP (180')** |
| Capability | CX-B1, CX-K1 |
| Experience | [EXP_02](../../../../07-experience_library/EXP_02_Gambar_Rumah.md) |
| Etika | [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md) |

---

## 1. Pengetahuan yang dikuasai guru

| Istilah | Arti untuk siswa | Contoh buruk → baik |
|---------|------------------|---------------------|
| **Ambiguitas** | Instruksi bisa ditafsir banyak arah | “Gambar rumah” |
| **Requirement** | Apa yang harus ada — spesifik | “Rumah 1 lantai, ada atap, 1 pintu, 2 jendela” |
| **Acceptance criteria** | Checklist ✅/❌ tanpa debat selera | “[ ] Judul section terbaca” |
| **DoD (pengantar)** | Kapan boleh bilang selesai | “Semua AC tercentang + 1 teman uji” |

### Hubungan spiral 4JP

| P | Konsep |
|---|--------|
| P01 | Framing & batas |
| P02–P03 | Input→output; deadlock tanpa paham |
| **P04** | Spek + cara uji |
| P05 | Klarifikasi (isi lubang spek / prompt) |

### Kata terlarang di AC (hari ini)

`bagus` · `menarik` · `keren` · `modern` · `profesional` — kecuali diubah jadi observable.

---

## 2. Recall spiral

| Tanya | Inti |
|-------|------|
| P03: kenapa hasil generate beda / deadlock? | Tanpa paham & tanpa spek, “benar” tidak bisa diuji |
| P02: output = ? | f(input) — spek buruk = input buruk |
| P01: batas masalah mirip apa hari ini? | Scope: apa yang **tidak** digambar / tidak dibangun |

---

## 3. Etika penyampaian

| Aturan | Penerapan |
|--------|-----------|
| No copas | Jangan kirim brief+AC “jawaban” ke WA |
| Live modeling | “Gambar rumah” tanpa detail · lalu live ubah “bagus” → AC di papan |
| Per poin | TTS per requirement/AC: Tebak uji → Tanya observable? → Spelling tulis ulang |
| Practice HTML | 1 section saja; tolak request “bikin full page dulu” |

---

## 4. Skrip ringkas

```text
[1] Recall P03 deadlock — 1 siswa
[2] Scaffold: 1 frasa buruk → testable (papan)
[3] "Gambarlah rumah." — 3 menit — pajang beda
[4] Trap: instruksi sama, hasil beda — daftar info hilang
[5] Concept: requirement · AC · DoD singkat
[6] Brief 5 poin 1 section web → tukar → sketsa 5' → centang AC
[7] I do: spek → <section> HTML + uji AC
[8] You do: bangun 1 section · peer AC
[9] Exit + preview P05
```

### Contoh transformasi live

| Vague | AC |
|-------|-----|
| Section tentang kami yang bagus | [ ] Ada heading `h2` berisi nama usaha |
| | [ ] Ada minimal 2 paragraf |
| | [ ] Ada 1 kalimat batas/scope (“kami tidak …”) |

---

## 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| AC tetap “menarik” | Menerima AC subjektif |
| Bangun 5 section sekaligus | Membiarkan scope meledak |
| Debat selera gambar rumah | Menilai “cantik” bukan “beda karena ambigu” |
| Copas spek teman utuh | Tidak minta tulis ulang dengan kata sendiri |

---

## 6. Checklist exit guru

- [ ] Experience gambar rumah + pajang beda  
- [ ] Kata subjektif ditantang di papan  
- [ ] AC peer-test terjadi (kertas atau HTML)  
- [ ] Practice = **1 section** sesuai spek  
- [ ] Preview P05 diucapkan  
- [ ] File pendukung tidak dibagikan ke siswa  

---

## 7. KBC (sisip Reflect)

**Panca cinta:** Ilmu · kejujuran spek  
**Kait:** Janji yang bisa dicek lebih terhormat daripada “nanti pasti bagus.”
