# X-S1-P03 — Company Profile Impact (sentuhan coding pertama)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P03 |
| Basis | **4JP** · Pertemuan **3/34** |
| Unit | X1.1 |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-B4, CX-B1 (draft) |
| MM | MM-00, MM-16 (lanjutan P02) |
| Status | **Isi penuh** |
| DNA | Impact AI baru · jembatan dari P02 (input→output) · **bukan** P03 2JP (klarifikasi → pindah P05) |

## Learning Transformation

Dari “bisa generate = sudah bisa” → “hasil tanpa paham = deadlock & rasa penasaran untuk belajar (bukan malu, bukan debug dulu).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut moto: bandingkan, jangan patch; prompt = input |
| **C2** | Memahami | Menjelaskan kenapa hasil generate bisa beda / kenapa “cantik ≠ benar” |
| **C3** | Menerapkan | Generate dengan prompt seragam; mengenali tag dasar pada file hasil |
| **C4** | Menganalisis | Membandingkan hasil teman; memisahkan observasi vs keinginan debug |
| **C5** | Mengevaluasi | Menilai apa yang hilang (paham & spek) tanpa menutup deadlock dengan patch |
| **C6** | Mencipta | Menyusun 3 pertanyaan penasaran milik sendiri sebagai bahan P04–P05 |

**Fokus utama:** C2–C5 · **Puncak:** C4–C6 (pertanyaan) — bukan C6 “bikin web cantik”

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1–C2 | Compass · *Bandingkan, jangan patch* · recall P02 | |
| 10–25 | **Scaffold** | C2 | Guru generate 1× · buka HTML · output dari input | Jangan kuliah semua tag |
| 25–55 | **Experience** | C3 | Siswa generate prompt seragam · simpan file | |
| 55–80 | **Observe** | C4 | Gallery bandingkan hasil | |
| 80–95 | **Trap** | C4–C5 | “Mana yang benar?” · jangan patch | |
| 95–110 | **Clarify + Concept** | C2–C5 | Yang hilang = paham & requirement | |
| 110–120 | Transisi | — | Siap baca, jangan perbaiki | |
| 120–135 | **Scaffold praktik** | C2–C3 | Tunjuk tag `html/head/body/h1/p` | |
| 135–165 | **Practice** | C3–C6 | Lembar kenali tag + 3 pertanyaan penasaran | Anti-debug |
| 165–180 | Reflect + Exit | C5 | Exit ticket · preview P04 | |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Mengajar “vibe coding” sebagai skill | Memberi **impact** besar: generate tanpa mahir |
| Sesi debug HTML hasil AI | Bandingkan hasil teman → catat kebingungan sebagai **motivasi** |
| Copas jadi karya dinilai sempurna | Karya = bukti proses; yang dinilai = observasi & pertanyaan |
| AI Policy formal (izin/larangan) | Policy formal di **P05**; hari ini cukup: jangan share hasil mentah ke WA sebagai “karya jadi” |

## Alignment

| Materi | Hubungan |
|--------|----------|
| **P02 Jaguar** | Prompt = **input**; output beda = input/konteks beda atau model non-deterministik |
| **P04 Gambar rumah** | Deadlock hari ini → “kita minta apa sebenarnya?” (requirement) |
| **P05 Klarifikasi** | Protokol formal menyusul setelah rasa impact |

**Adaptasi ketat:** jangan potong Observe/Trap — itu inti impact. Jika waktu mepet, potong Reflect tertulis (lisan saja).

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Indeks 34P](./X-S1_Index.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Prompt seragam (wajib sama sekelas)

Salin apa adanya (ubah hanya nama usaha jika madrasah punya branding resmi):

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

**Fallback tanpa AI online:** guru siapkan 3–4 file HTML “hasil generate” berbeda (disiapkan sendiri sebelumnya) → siswa tetap gallery + bandingkan + touch coding.

---

## Cognitive Trap

**Asumsi:** “Hasil AI yang cantik = saya sudah bisa / sudah benar.”  
**Aman:** Puji keberanian generate & observasi beda; challenge lompat ke “ini karya final” atau “langsung debug sampai sempurna.”

---

## Guiding Questions

1. Prompt kita **sama** — mengapa hasil bisa **beda**?  
2. Tanpa paham HTML, bagaimana kita **tahu** mana yang “benar”?  
3. Apa **satu pertanyaan** yang ingin kamu pelajari supaya tidak generate buta?

---

## Props / Fallback

- Akses AI sesuai lab (ChatGPT / Claude / Copilot / dll.) · editor teks · proyektor  
- Offline: paket 3–4 HTML sample berbeda + lembar kenali tag  
- Sticky note untuk gallery & pertanyaan penasaran

---

## Lembar kenali tag (Practice)

| Tag yang kutemukan | Kira-kira fungsinya | Masih bingung? (Y/T) |
|--------------------|---------------------|----------------------|
| `html` | | |
| `head` | | |
| `body` | | |
| `h1` | | |
| `p` | | |
| *(opsional)* `a` / `ul` / `li` | | |

**3 pertanyaan penasaran** (bukan “cara perbaiki bug”):

1. …  
2. …  
3. …

---

## Exit Ticket

1. Satu hal yang **membingungkan** saat bandingkan hasil teman: …  
2. Satu pertanyaan yang ingin kupelajari supaya tidak “generate buta”: …  
3. Satu tag HTML yang baru kuketahui hari ini: …

---

## Formatif (rubrik)

Fokus: **OBS** (bandingkan hasil), **REA** (mengapa deadlock / apa yang hilang) — bukan kualitas visual HTML.

---

## Catatan Guru

- **Jangan** ubah sesi ini jadi workshop debug atau “bikin bagus.”  
- Simpan momen deadlock sebagai bahan **P04** (requirement) & **P05** (klarifikasi + AI Policy).  
- Jika siswa minta “Pak, benerin dulu” → jawab: “Parkir. Hari ini kita kumpulkan pertanyaan.”  
- File hasil AI boleh disimpan di folder project sebagai **bukti proses**, bukan sebagai deliverable bernilai penuh.
