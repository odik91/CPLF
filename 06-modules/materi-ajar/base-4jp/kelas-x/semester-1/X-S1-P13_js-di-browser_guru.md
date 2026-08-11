# Materi Guru Lengkap — X-S1-P13 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P13_js-di-browser_siswa.md](./X-S1-P13_js-di-browser_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P13_bacaan-mimi-robi.md](./X-S1-P13_bacaan-mimi-robi.md)

**Modul:** [X-S1-P13_js-di-browser.md](../../../base-4jp/kelas-x/semester-1/X-S1-P13_js-di-browser.md)

**Materi pendukung sumber:** [X-S1-P13_js-di-browser.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P13_js-di-browser.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **JavaScript**, **konsol**, **script**, **ubah teks 1 elemen** — sebut nama level Bloom + kode. Pembuka **Blok 3**.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P13 — JavaScript di Browser

| Field | Isi |
|-------|-----|
| Kode | X-S1-P13 |
| Basis | **4JP** · Pertemuan **13/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “halaman teks mati” → “JS di browser membuat halaman bereaksi — mulai konsol + ubah 1 elemen.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut JS, `<script>`, konsol, target `id` |
| **C2** | Memahami | Menjelaskan HTML/CSS/JS; jangan buang semantik |
| **C3** | Menerapkan | `console.log` + ubah teks 1 elemen (klik) |
| **C4** | Menganalisis | Menemukan salah `id` / posisi script / typo |
| **C5** | Mengevaluasi | Bukti konsol + perubahan terlihat |
| **C6** | Mencipta | Interaksi mini yang bisa dijelaskan |

**Fokus utama:** C2–C3 · **Puncak:** C3–C5 · Kondisi → **P14**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · buka Blok 3 · *Static tetap* | |
| 10–30 | **Scaffold teori** | C2 | HTML/CSS/JS · buka konsol · `console.log` | |
| 30–50 | **Experience** | C2–C3 | Siswa `console.log` sendiri | |
| 50–65 | **Trap + Q** | C4 | Paste AI · salah id · script terlalu awal | |
| 65–85 | **Clarify + Concept** | C2 | Script · konsol · getElementById · textContent · click | |
| 85–95 | **Practice mini** | C3 | Rencana: elemen · sebelum/sesudah · pemicu | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do tombol + ubah 1 elemen | |
| 120–165 | **Practice** | C3–C6 | Interaksi mini · peer 3 baris | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P14 | |

## Cognitive Trap

JS = paste AI / ganti HTML; “tidak jalan” = browser rusak.

## Guiding Questions

1. Bukti di konsol?  
2. `id` cocok?  
3. Yang berubah: struktur, CSS, atau perilaku/teks?

## Exit Ticket

1. JS vs HTML vs CSS  
2. Pesan konsol yang kutangkap  
3. Penyebab “tidak bereaksi” yang kuhindari  

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi konsol · Penalaran baris.

## Catatan Guru

Satu pola: `getElementById`. Error konsol = belajar. Preview P14 satpam/kondisi.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

Blok 3 = perilaku.  
Konsol wajib.  
Script setelah elemen (atau setara).  
Tanpa if/else hari ini.  
Tanpa framework.

### 2. Recall

Blok 2 fondasi · hari ini reaksi · triad HTML/CSS/JS.

### 3. Etika

Live pendek. Tolak paste tanpa jelaskan. Normalisasi baca error.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Blok 2: tulang & baju & peta & form jujur — diuji spek.
Blok 3: halaman mulai bergerak. Jangan buang tulang."
Papan: HTML struktur · CSS tampil · JS perilaku.

[1 — Scaffold 10–30]
Buka halaman static. F12 → Console.
Ketik: console.log("Mimi cek"); Enter.
"Ini bukti mesin menjalankan perintah — bukan tebak-tebakan."
Tunjukkan <script> di HTML.

[2 — Experience 30–50]
Siswa buka konsol di halaman sendiri.
console.log nama/nickname + " P13".
Screenshot/catat pesan (bukti).

[3 — Trap 50–65]
A: paste 80 baris AI "buat website interaktif" — tidak bisa jelaskan baris 3.
B: getElementById("pesan") tapi HTML id="Pesan" / typo.
C: <script> di <head> sebelum <p id="pesan"> — null — error.
D: hapus section semantik "biar gampang JS".
Debat: obat = sedikit baris · id cocok · script di bawah · static tetap.

[4 — Clarify + Concept 65–85]
Papan alur:
1) Pilih elemen (id)
2) Tunggu pemicu (klik) — atau langsung log
3) Ubah textContent
4) console.log sebagai bukti
Istilah: JavaScript · script · konsol · textContent · click

[5 — Practice mini 85–95]
Kertas: id elemen | teks lama | teks baru | apa pemicunya

[6–7 — Scaffold + Practice 105–165]
I do: model tombol + #pesan (lihat modul).
You do: di halaman profil/company — 1 interaksi (ubah sapaan / status / judul section).
Peer: "Jelaskan 3 baris. Tunjukkan konsol."
Tolak: if/else panjang; library; rewrite HTML.

[8 — Exit 165–180]
Exit ticket + preview P14: kondisi if/else — satpam keputusan (boleh/ tidak).
```

### Model skrip (jangan dibagikan utuh sebagai “kunci”)

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

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Tidak buka konsol | Meladeni “tidak jalan” tanpa cek |
| Typo `id` | Tidak minta bandingkan HTML↔JS |
| Script di atas elemen | Langsung kasih jawaban tanpa nalar urutan |
| Paste AI | Memuji “banyak fitur” |
| Hapus semantik | “Yang penting interaktif” |

### 6. Checklist exit guru

- [ ] Demo konsol  
- [ ] Trap id/paste/urutan  
- [ ] Practice ubah 1 elemen  
- [ ] Peer jelaskan 3 baris  
- [ ] Preview P14  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran proses  
**Kait:** Bukti di konsol = jujur pada apa yang benar-benar jalan.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
