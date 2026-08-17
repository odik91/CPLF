# Bacaan Pendamping — X-S1-P17
## Mimi & Robi: Dua Satpam, Satu Tiket Cadangan, & Boolean yang Dibalik

| Field | Isi |
|---|---|
| Kode | X-S1-P17 — Kondisi Multi-Syarat |
| Pertemuan | **17 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P17_kondisi-multi-syarat_siswa.md](./X-S1-P17_kondisi-multi-syarat_siswa.md)

---

Halo. Mimi.

Setelah P16, Robi menjadi satpam satu syarat. Hari ini guru memberi dua cek: punya kartu **dan** datang tepat waktu.

> “Dua satpam? Berarti dua `if`?”

> “Belum. Pertama kita gabungkan faktanya.”

```javascript
const punyaKartu = true;
const tepatWaktu = false;

console.log(punyaKartu && tepatWaktu); // false
```

## Plot twist #1 — kartu ada, tetap tidak lolos

Robi protes: kartunya ada, kok hasilnya `false`?

> “Karena `&&` artinya kedua syarat wajib. Kartu benar, waktu salah; hasil gabungan tetap false.”

Konsol tidak benci Robi. Konsol hanya tidak lupa membaca syarat kedua.

## Plot twist #2 — tiket atau undangan

Untuk acara lain, cukup tiket **atau** undangan:

```javascript
const punyaTiket = false;
const punyaUndangan = true;

console.log(punyaTiket || punyaUndangan); // true
```

Robi hampir memakai `&&`.

> “Kalau begitu yang punya undangan tetapi tidak punya tiket ditolak.”

> “Itu bukan aturan acara. Itu kamu menambah drama tanpa requirement.”

## Plot twist #3 — tanda seru bukan marah

```javascript
const sudahLogin = true;
console.log(!sudahLogin); // false
```

Robi:

> “Tanda seru marah pada login?”

> “Tidak. `!` membalik Boolean. Tidak lebih, tidak kurang.”

## Trace

```text
punyaKartu = true
tepatWaktu = false
true && false → false
jalur else → "Belum boleh masuk"
```

Hari ini kita menguji semua kombinasi, bukan hanya satu kombinasi yang kebetulan lulus.

## Exit

1. `true && false`?  
2. `false || true`?  
3. Arti `!sudahLogin`?

> **Aturan berlapis perlu syarat yang terlihat, operator yang tepat, dan uji semua kombinasi.**

— **Mimi** 🐾  
*(Robi memberi nama tabelnya “rapat Boolean.” Tidak ada yang menolak karena rapatnya selesai dalam empat baris.)*
