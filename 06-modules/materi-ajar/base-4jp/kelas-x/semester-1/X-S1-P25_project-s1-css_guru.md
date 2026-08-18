# Materi Ajar Guru — X-S1-P25
## Project S1: CSS Keterbacaan (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **25/34** · 180 menit |
| Fokus | `max-width` · spacing · hierarki · kontras · CSS terpisah |
| Dilarang | Bongkar HTML · JS fitur · framework · lomba palet |
| Handout | [X-S1-P25_project-s1-css_siswa.md](./X-S1-P25_project-s1-css_siswa.md) |
| Bacaan | [X-S1-P25_bacaan-mimi-robi.md](./X-S1-P25_bacaan-mimi-robi.md) |
| Contoh | [skill-js/p25-css-keterbacaan/](./skill-js/p25-css-keterbacaan/) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Keterbacaan ≠ dekorasi |
| C3 | CSS project tertaut dan bekerja |
| C4 | Diagnosis sesak/melebar |
| C5 | AC baca dicentang |
| C6 | 3 aturan beralasan |

## Persiapan

- Bandingkan layar: HTML P24 tanpa CSS vs dengan 5 aturan.  
- Proyeksikan properti, bukan hasil “template.”  
- Ingatkan `id` terkunci.

## Miskonsepsi

1. Warna banyak = sudah CSS.  
2. Flex pada semua elemen.  
3. Harus menyalin contoh p25.  
4. Mengubah HTML lebih cepat daripada selector.

## Timeline & skrip

### 0–10 · Orientation · C1

> “Dinding kemarin. Hari ini jarak dan lebar agar orang bisa membaca janji spek. Bukan renovasi.”

### 10–30 · Scaffold · C2

Dua screenshot/live: teks full-bleed vs `max-width` 40rem. Tanya apa yang berubah — biasanya hanya 2–3 properti.

### 30–50 · Experience · C2–C3

Siswa terapkan `max-width` + center + padding pada landmark. Amati, jangan hias dulu.

### 50–65 · Trap · C4

Tunjukkan `body { display: flex }` yang merusak alur dokumen. Atau gradient yang membuat teks sulit dibaca.

### 65–95 · Concept + audit · C2–C3

Papan: hierarki, spacing, lebar, kontras, tombol. Mini: 3 masalah di halaman sendiri sebelum “kreatif.”

### 95–120 · I do · C2–C3

Lima aturan live pada contoh. Suarakan: “Ini untuk lebar baris, bukan agar mirip web kantor.”

### 120–150 · Practice · C3–C6

CSS di project siswa. Guru tanya alasan properti, bukan hex color.

### 150–165 · Peer · C5

30 detik pindai: sebut 3 bagian. Jika gagal, biasanya jarak atau hierarki — bukan kurang animasi.

### 165–180 · Reflect · C5

Tulis 3 aturan. Preview P26: `textContent` pada `#pesan`; CSS tombol sudah cukup.

## Diferensiasi

**Butuh dukungan:** salin lima aturan, ganti warna kontras saja.  
**Cepat:** flex pada `nav` saja; jangan grid.

## Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Lebar/jarak | Full-bleed / sesak | `max-width` + spacing |
| Hierarki | Semua sama | h1/h2 jelas |
| Alasan | “Biar keren” | 3 aturan + fungsi baca |
| HTML | Dirombak | `id`/landmark utuh |

## Checklist guru

- [ ] CSS terpisah  
- [ ] AC keterbacaan  
- [ ] Peer 30 detik  
- [ ] 3 aturan  
- [ ] Tidak ada JS fitur

## KBC

**Tanggung jawab pada pembaca:** kontras dan jarak adalah kesopanan, bukan selera semata.
