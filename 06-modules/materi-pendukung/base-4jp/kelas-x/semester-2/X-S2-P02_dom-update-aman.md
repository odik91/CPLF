# Materi Pendukung Guru — X-S2-P02 Update DOM Aman

> **RAHASIA GURU** — jangan bagikan apa adanya.

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 |
| Modul | [X-S2-P02_dom-update-aman.md](../../../base-4jp/kelas-x/semester-2/X-S2-P02_dom-update-aman.md) |
| Durasi | **4 JP (180')** · Pertemuan **2/32** |

## Pengetahuan

- Setelah query (P01), perubahan UI dimulai dari properti node.  
- `textContent` = plain text; aman untuk label/pesan.  
- `innerHTML` = parse HTML; risikonya menyisipkan elemen/skrip jika string tidak dikontrol — cukup kesadaran MA, bukan workshop XSS.  
- Listener klik = pemicu S1; jangan dalam event (P03).  
- Tolak `document.write`, jQuery, framework.

## Skrip live singkat

1. Log `textContent` awal.  
2. Assign teks baru → AC visual.  
3. String `"<b>Halo</b>"` pada `#demo` dengan kedua API.  
4. Diskusi: mana default untuk pengumuman OSIS / status form nanti?

## Checklist exit

- [ ] textContent dipakai untuk update utama  
- [ ] Banding innerHTML sempat muncul  
- [ ] Uji sebelum/sesudah  
- [ ] Tidak loncat ke form/list  
- [ ] Preview P03  

## KBC

Amanah tampilan: jangan “mempercantik” dengan menyuntik HTML tanpa perlu.
