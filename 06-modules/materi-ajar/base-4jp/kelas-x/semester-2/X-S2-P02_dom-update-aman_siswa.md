# Handout Siswa — X-S2-P02

**Topik:** Update DOM Aman · **4JP** · Pertemuan **2/32**

**Modul:** [X-S2-P02_dom-update-aman.md](../../../../base-4jp/kelas-x/semester-2/X-S2-P02_dom-update-aman.md)  
**Bacaan:** [X-S2-P02_bacaan-mimi-robi.md](./X-S2-P02_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p02-dom-update-aman/](./skill-js/p02-dom-update-aman/)

## 1. Tujuan

Kemarin kamu **memilih** node. Hari ini kamu **mengubah teks**-nya dengan aman:

1. Default: `textContent`  
2. Paham beda singkat dengan `innerHTML`  
3. Uji sebelum / setelah update  

## 2. Ringkasan konsep

| API | Cocok untuk | Perilaku singkat |
|-----|-------------|------------------|
| `textContent` | Label, pesan, angka (teks biasa) | Menulis teks apa adanya |
| `innerHTML` | Hanya jika memang butuh **HTML** | Browser bisa membuat elemen baru |

```text
pilih elemen → ubah textContent → cek layar + (opsional) konsol
```

```javascript
const status = document.querySelector("#status");
status.textContent = "Status diperbarui dengan aman.";
```

## 3. Setup latihan

1. Salin folder [p02-dom-update-aman](./skill-js/p02-dom-update-aman/).  
2. Buka `index.html` · F12 Console.  
3. Catat teks **sebelum** klik.  
4. Klik tombol · catat **sesudah**.  
5. Kerjakan eksperimen `#demo` sesuai GUIDE di `script.js`.  
6. Komentar hanya DEFINISI/GUIDE.

## 4. Trace AC

| Fase | Isi di layar / catatan |
|------|-------------------------|
| Sebelum update | |
| Setelah update (`textContent`) | |
| Demo: string `"<b>Halo</b>"` + `textContent` | |
| Demo: string sama + `innerHTML` | |
| API yang kupilih untuk pesan biasa + alasan | |

## 5. Trap

- Jangan jadikan `innerHTML` default “biar keren”.  
- Cek elemen bukan `null` sebelum mengubah.  
- `textContent` bukan CSS.  
- Satu target dulu — jangan sepuluh label sekaligus.

## 6. Kriteria penerimaan

- [ ] Elemen terpilih benar  
- [ ] Teks berubah lewat `textContent`  
- [ ] Bisa jelaskan 1 beda dengan `innerHTML`  
- [ ] Uji sebelum / sesudah  
- [ ] Tanpa form · tanpa list dinamis · tanpa framework  

## 7. Exit ticket

1. Kapan `textContent`? …  
2. Risiko `innerHTML` untuk string sembarang? …  
3. AC sebelum / sesudah: …

**Preview P03:** event klik yang **dipahami alurnya** (bukan tombol tebaran).
