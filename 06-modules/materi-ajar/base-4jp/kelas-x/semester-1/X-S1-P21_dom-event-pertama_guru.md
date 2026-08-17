# Materi Ajar Guru — X-S1-P21
## DOM & Event Pertama (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## Metadata & batas

| Field | Isi |
|---|---|
| Pertemuan | **21/34** · 180 menit |
| Fokus | DOM · `id` · `getElementById` · click · `textContent` |
| Dilarang | Form · validasi · `querySelector` · selector kompleks · framework |
| Handout | [X-S1-P21_dom-event-pertama_siswa.md](./X-S1-P21_dom-event-pertama_siswa.md) |
| Bacaan | [X-S1-P21_bacaan-mimi-robi.md](./X-S1-P21_bacaan-mimi-robi.md) |
| Latihan | [skill-js/p21-dom-event/](./skill-js/p21-dom-event/) |

## Capaian Bloom

| Kode | Bukti |
|---|---|
| C1–C2 | Menjelaskan DOM, id, event, listener |
| C3 | Interaksi teks satu tombol |
| C4 | Diagnosis `null` / typo / urutan script |
| C5 | AC sebelum dan setelah klik |
| C6 | Variasi pesan milik siswa |

## Timeline & skrip fasilitasi

### 0–30 · Orientation + scaffold · C1–C2

Hubungkan fondasi: “Variabel, function, debugging tetap sama. Kini nilai/aksi punya target di halaman.” Gambar alur HTML id → JS → event → output.

### 30–65 · Experience + trap · C2–C4

Tampilkan `getElementById("pesan")`, kemudian sengaja typo `pesann`. Minta siswa membaca `null`, membandingkan id, lalu mengubah **satu karakter**. Tekankan tanpa `#`.

### 65–95 · Concept + trace · C2–C4

```javascript
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombolSapa");
tombol.addEventListener("click", function () {
  pesan.textContent = "Halo";
});
```

Tanya: apa terjadi sebelum klik? Saat klik? Kode fungsi tidak berjalan sebelum event.

### 95–120 · Setup + I do · C2–C3

Buka folder latihan di browser. Letakkan script di akhir `body`. Demonstrasi Console sebagai bukti event.

### 120–150 · Practice · C3–C6

Siswa ubah satu pesan dan label tombol; tetap satu target + satu listener. AC: sebelum klik teks awal; setelah klik teks target; konsol mencatat klik.

### 150–165 · Peer trace · C4–C5

Peer uji halaman teman tanpa melihat kode, lalu inspeksi id dan event bila AC gagal.

### 165–180 · Reflect · C4–C5

Preview P22: integrasi kecil dan review berbasis spek.

## Asesmen formatif

| Indikator | Belum | Tercapai |
|---|---|---|
| Seleksi | Id/API keliru | Elemen tepat dipilih |
| Event | Aksi langsung | Berjalan setelah klik |
| Bukti | Klaim | Pesan + konsol + AC |

## Checklist guru

- [ ] Script akhir body  
- [ ] Satu id pesan/tombol  
- [ ] Trap null  
- [ ] Console bukti  
- [ ] Tanpa form/selector kompleks

## KBC

**Ilmu dan kejujuran:** “interaktif” harus memiliki event, perubahan terlihat, dan bukti uji.
