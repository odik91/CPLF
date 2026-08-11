# Bacaan Pendamping — X-S1-P13  
## Mimi & Robi: Halaman yang Bergerak, & Godaan Paste 80 Baris “Biar Interaktif”

| Field | Isi |
|-------|-----|
| Kode | X-S1-P13 — JavaScript di Browser |
| Pertemuan | **13 / 34** · Basis **4JP** |
| Status | Naskah humor · istilah penuh · sketch menyusul |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P13_js-di-browser_siswa.md](./X-S1-P13_js-di-browser_siswa.md)  
**Modul:** [X-S1-P13 …](../../../base-4jp/kelas-x/semester-1/X-S1-P13_js-di-browser.md)

---

Halo. Mimi.

Blok 2 ditutup dengan checklist. Robi tenang… sebentar.

> “Static sudah lulus AC. Sekarang aku mau halaman yang… hidup. Seperti aplikasi. Seperti—”

Aku:

> “Spoiler: hari pertama Blok 3 bukan jadi startup. Hari pertama = belajar bilang ‘halo’ ke **konsol** dan menggeser **satu** teks. Drama Marvel menyusul.”

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | JS di browser: bukti di konsol + ubah teks 1 elemen |
| Peranmu | Buka konsol · tulis skrip singkat · jelaskan 3 baris |
| Bukan | Framework · if/else penuh · paste AI 80 baris · bongkar semantik |

```text
HTML/CSS/JS  →  CONSOLE.LOG  →  TRAP  →  UBAH 1 ELEMEN  →  PEER JELASKAN
```

---

## Adegan 1 — Pintu rahasia F12

Guru tekan F12. Tab **Console**.

```text
console.log("Skrip termuat.");
```

Muncul. Hitam-putih. Tidak cinematic. Sangat penting.

Robi:

> “Ini… chat dengan browser?”

Aku:

> “Lebih tepat: bukti. Kalau kau klaim ‘JS-ku jalan’ tanpa jejak di konsol, itu vibes lagi. Kita sudah memecat vibes di P12.”

---

## Plot twist #1 — “Tidak bereaksi = browser benci aku”

Robi tulis `getElementById("pesan")`. HTML-nya `id="pesann"`. Satu huruf ekstra.

Konsol merah. Antenna panik.

> “Komputernya rusak.”

Aku tunjuk error. Lalu tunjuk typo.

Twist: seringnya bukan laptop. Seringnya **alamat elemen salah** — seperti tautan jangkar P10 yang typo. Mesin patuh. Alamatmu yang nyasar.

---

## Adegan 2 — Godaan 80 baris

Chat AI:

> “Ini kode lengkap dark mode + animasi + slider + form validator profesional.”

Robi mau paste. Aku:

> **KRISIS!** (versi gym.)  
> “Kamu belum bisa angkat 5 kg bukti `console.log`, sudah mau deadlift refrigerator.”

Dia pilih:

1. `console.log` saat skrip termuat  
2. Tombol diklik  
3. `#sapaan` ganti teks  

Peer:

> “Jelaskan baris yang `textContent`.”

Dia bisa. Lulus. Antenna bangga proporsional (jarang terjadi).

---

## Concept — tiga kursi, satu panggung

| Bahasa | Kursi |
|--------|--------|
| HTML | Struktur — siapa di panggung |
| CSS | Kostum — kelihatan seperti apa |
| **JavaScript** | Sutradara momen — *sekarang lakukan ini* |

| Istilah | Arti manusia |
|---------|----------------|
| `<script>` | Naskah perintah |
| Konsol | Monitor bukti & error |
| Menarget `id` | “Pemain yang mana?” |
| `textContent` | Ganti dialog pemain |
| Klik | Cue dari penonton |

Fondasi Blok 2 jangan dibongkar. Sutradara butuh panggung yang masih berdiri.

---

## Adegan 3 — Reaksi pertama

Klik. Teks berubah. Konsol:

```text
Teks #sapaan diganti.
```

Robi bisu satu detik. Lalu:

> “Dia… dengar aku.”

Aku:

> “Dia menjalankan perintahmu. Bedanya tipis, tapi penting: bukan telepati. Eksplisit — seperti ROBI mie dulu.”

---

## Reflect

| Blok | Badge |
|------|--------|
| 2 | Static yang bisa diuji |
| **3 · hari 1** | Halaman yang bisa bereaksi (sedikit, jujur) |

Besok (P14): **kondisi** — if/else, satpam “boleh / tidak.”

---

## Exit

1. JS vs HTML vs CSS: …  
2. Pesan konsol yang kutangkap: …  
3. Penyebab “tidak bereaksi” yang kuhindari: …

Satu line:

> **Tanpa bukti di konsol, “interaktif” cuma klaim.**  
> **Satu elemen yang kau pahami > delapan puluh baris yang kau pinjam.**

— **Mimi** 🐾  
*(Robi menamai id: `sapaan-yang-akhirnya-bergerak` — lebay, tapi cocok dengan `getElementById`.)*
