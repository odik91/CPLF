# Handout Siswa — X-S1-P17

**Topik:** JavaScript Vanilla — Kondisi Multi-Syarat · **4JP** · Pertemuan **17/34**

**Modul:** [X-S1-P17_kondisi-multi-syarat.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P17_kondisi-multi-syarat.md)  
**Bacaan:** [X-S1-P17_bacaan-mimi-robi.md](./X-S1-P17_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p17-kondisi-multi-syarat.js](./skill-js/p17-kondisi-multi-syarat.js)

## Konsep

| Operator | Dibaca | Contoh |
|---|---|---|
| `&&` | dan | `punyaKartu && tepatWaktu` |
| `||` | atau | `punyaTiket || punyaUndangan` |
| `!` | tidak | `!sudahLogin` |

```javascript
const punyaKartu = true;
const datangTepatWaktu = false;

if (punyaKartu && datangTepatWaktu) {
  console.log("Boleh masuk");
} else {
  console.log("Belum boleh masuk");
}
```

## Setup latihan

1. Salin [p17-kondisi-multi-syarat.js](./skill-js/p17-kondisi-multi-syarat.js) ke `js-dasar`.  
2. Jalankan `node p17-kondisi-multi-syarat.js`, atau gunakan Console browser.  
3. Prediksi setiap subkondisi lalu hasil gabungannya.  
4. Komentar hanya **DEFINISI** / **GUIDE**; jangan menambah yang tidak diperlukan.

## Tabel trace

| Kartu | Tepat waktu | `kartu && tepatWaktu` | Cabang | Output |
|---|---|---|---|---|
| true | true | | | |
| true | false | | | |
| false | true | | | |
| false | false | | | |

## Trap

- `true && false` → `false`.  
- `false || true` → `true`.  
- `!true` → `false`.  
- Jangan memakai `else if` atau kondisi bersarang hari ini.

## Kriteria penerimaan

- [ ] Menjalankan file latihan  
- [ ] Melengkapi tabel empat kombinasi  
- [ ] Menulis satu aturan `&&` atau `||`  
- [ ] Menjelaskan satu negasi `!`  
- [ ] Menguji semua kombinasi relevan  
- [ ] Tanpa DOM/form/`else if`/nested condition

## Exit

1. `true && false` = …  
2. `false || true` = …  
3. `!sudahLogin` berarti …  
4. Bukti semua kombinasi: …

**Preview P18:** array menyimpan banyak nilai; loop memprosesnya berulang.
