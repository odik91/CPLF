# Materi Pendukung Guru — X-S2-P01 Recall S1 + DOM & Query

> **RAHASIA GURU** — jangan bagikan apa adanya. Live coding; siswa mengetik sendiri.

| Field | Isi |
|-------|-----|
| Kode | X-S2-P01 |
| Modul | [X-S2-P01_recall-dom-query.md](../../../base-4jp/kelas-x/semester-2/X-S2-P01_recall-dom-query.md) |
| Durasi | **4 JP (180')** · Pertemuan **1/32** |

## Pengetahuan

- S2 membuka spiral **halaman hidup**; HTML/CSS S1 dianggap sudah ada.  
- DOM = pohon runtime; query = memilih node sebelum mengubah (P02) atau memasang event (P03+).  
- `querySelector(sel)` → Element | null.  
- `querySelectorAll(sel)` → NodeList (array-like: `.length`, `forEach` di browser modern; jangan ajar spread/Array.from kecuali siswa bertanya).  
- Bandingkan dengan S1: `getElementById(name)` tanpa `#`.  
- Tahan: `innerHTML`, event baru sebagai materi utama, form, framework.

## Skrip live singkat (urutan)

1. Buka HTML latihan — tunjuk 3 `.item` di Elements.  
2. Minta prediksi kelas untuk `querySelector(".item").textContent`.  
3. Jalankan → cocokkan.  
4. `querySelectorAll(".item").length`.  
5. Trap `getElementById("#area")` vs `querySelector("#area")`.

## Variasi latihan (jika cepat)

- Selector `main .item` vs `.item` — diskusikan cakupan.  
- Satu typo class sengaja → length 0 → perbaikan.

## Checklist exit

- [ ] Sticky “tidak bisa tanpa edit HTML”  
- [ ] Prediksi tertulis  
- [ ] `querySelector` + `All` dipakai  
- [ ] Trap `#` / “hanya pertama” muncul  
- [ ] Tidak loncat ke update/event sebagai inti  

## KBC

**Tabayyun:** prediksi → bukti. Klaim “sudah DOM” tanpa menunjuk node = klaim kosong.
