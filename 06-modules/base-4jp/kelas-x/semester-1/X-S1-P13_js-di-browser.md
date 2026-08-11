# X-S1-P13 — JavaScript di Browser (Halaman Bisa Bereaksi)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P13 |
| Basis | **4JP** · Pertemuan **13/34** |
| Unit | X1.4 (JS dasar di halaman) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T3, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · pembuka **Blok 3** · fondasi static P07–P12 tetap dijaga |

## Learning Transformation

Dari “halaman = teks mati yang hanya di-refresh” → “**JavaScript** di browser bisa membuat halaman **bereaksi** — mulai dari `console` dan mengubah teks **satu** elemen.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: JavaScript; `<script>`; konsol browser; cara menarget 1 elemen (`id`) |
| **C2** | Memahami | Menjelaskan beda HTML (struktur) / CSS (tampil) / JS (perilaku); kenapa jangan buang semantik demi “interaktif” |
| **C3** | Menerapkan | Menulis skrip singkat: `console.log` + ubah teks 1 elemen (mis. lewat klik tombol) |
| **C4** | Menganalisis | Menemukan penyebab “tidak bereaksi” (salah `id`, script di posisi salah, typo, konsol tidak dibuka) |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria: ada bukti di konsol + perubahan terlihat di halaman |
| **C6** | Mencipta | Menyusun interaksi mini milik sendiri (1 elemen, bisa dijelaskan baris demi baris) |

**Fokus utama:** C2–C3 · **Puncak:** C3–C5 · Kondisi if/else → **P14** · DOM lanjut / framework → **bukan** hari ini

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · penutup Blok 2 → buka Blok 3 · *Static tetap; perilaku baru* | |
| 10–30 | **Scaffold teori** | C2 | I do: HTML/CSS vs JS · buka konsol · `console.log` | |
| 30–50 | **Experience** | C2–C3 | Siswa ketik `console.log` sendiri · lihat output | |
| 50–65 | **Trap + Q** | C4 | Trap: paste AI 80 baris · salah `id` · script sebelum elemen · buang HTML jadi “app” | |
| 65–85 | **Clarify + Concept** | C2 | Anatomi: script · konsol · pilih elemen · ubah teks · (opsional) klik | |
| 85–95 | **Practice mini** | C3 | Rencana di kertas: elemen mana · teks sebelum/sesudah · pemicu | |
| 95–105 | Transisi | — | Lab · buka halaman static P12 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: tombol + ubah 1 `p`/`h2` · bukti konsol | |
| 120–165 | **Practice** | C3–C6 | Interaksi mini di halaman sendiri · peer: jelaskan 3 baris | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P14 (kondisi / satpam) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P07–P12 | Fondasi static yang sudah diuji |
| **P13** | JS = perilaku di browser |
| P14 | Kondisi (if/else) — “satpam” keputusan |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Framework / library / DOM mendalam | `console` + ubah teks 1 elemen |
| If/else / validasi form penuh | Itu **P14–P15** |
| Mengganti semantik HTML “biar interaktif” | JS menempel pada elemen yang sudah ada |
| Paste skrip panjang tanpa paham | 5–15 baris yang bisa dijelaskan |

**Adaptasi ketat:** jangan potong Experience konsol atau Practice ubah elemen — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **JavaScript (JS)** | Bahasa di browser untuk **perilaku** halaman (bereaksi) |
| **`<script>`** | Tempat menaruh / menaut kode JS di halaman |
| **Konsol** (*Console*) | Panel DevTools untuk melihat pesan & error JS |
| **`console.log(...)`** | Mencetak pesan ke konsol (bukti skrip jalan) |
| **Menarget elemen** | Memilih 1 bagian halaman lewat `id` (mis. `getElementById`) |
| **Ubah teks** | Mengganti isi teks elemen (mis. `textContent`) |
| **Peristiwa klik** (*click*) | Pemacu: pengguna mengklik → skrip jalan |

### Contoh minimal (model)

```html
<p id="pesan">Halo, halaman masih tenang.</p>
<button id="tombol" type="button">Ubah teks</button>

<script>
  console.log("Skrip termuat.");

  const tombol = document.getElementById("tombol");
  const pesan = document.getElementById("pesan");

  tombol.addEventListener("click", function () {
    pesan.textContent = "Halo — halaman bereaksi!";
    console.log("Teks #pesan diganti.");
  });
</script>
```

> Letakkan `<script>` **setelah** elemen yang ditarget (atau pastikan elemen sudah ada saat skrip jalan).

---

## Cognitive Trap

**Asumsi:** JS = tempel kode AI / ganti semua HTML; atau “tidak jalan” = browser rusak (padahal typo/`id`).  
**Aman:** Puji rasa penasaran interaktif; challenge pada **tidak bisa jelaskan** dan **merusak fondasi static**.

---

## Guiding Questions

1. Bukti skrip jalan ada di **konsol**?  
2. `id` di HTML sama persis dengan yang di JS?  
3. Yang berubah: struktur, tampilan CSS, atau **teks/perilaku**?

---

## Kriteria penerimaan (contoh)

- [ ] Ada `<script>` (inline atau file `.js` singkat) di halaman  
- [ ] Minimal satu `console.log` terlihat di konsol saat halaman/skrip jalan  
- [ ] Satu elemen berubah teksnya karena JS (bukan edit HTML manual lalu refresh saja)  
- [ ] Siswa menjelaskan ≥3 baris skrip dengan kata sendiri  
- [ ] Semantik/CSS Blok 2 **tidak** dibongkar habis  

---

## Exit Ticket

1. Satu kalimat: tugas JS vs HTML vs CSS  
2. Bukti konsol yang kutangkap (tulis pesannya)  
3. Satu penyebab “tidak bereaksi” yang kutemukan/hindari  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** konsol + perubahan · **Penalaran** (jelaskan baris).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Bawa artefak static — jangan lab kosong tanpa HTML.  
- Satu pola seleksi saja hari ini (`getElementById`) agar tidak banjir API.  
- Error di konsol = bahan belajar (preview P20), jangan panik-tutup.  
- Preview P14: keputusan if/else (“satpam”).  
