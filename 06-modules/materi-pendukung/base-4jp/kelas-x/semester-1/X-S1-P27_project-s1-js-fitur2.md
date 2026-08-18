# Materi Pendukung Guru — X-S1-P27 JS Fitur 2 / Polish

> **RAHASIA GURU** — jangan bagikan apa adanya.

| Field | Isi |
|---|---|
| Kode | X-S1-P27 |
| Modul | [X-S1-P27_project-s1-js-fitur2.md](../../../base-4jp/kelas-x/semester-1/X-S1-P27_project-s1-js-fitur2.md) |
| Durasi | **4 JP (180')** |

## Pengetahuan

- Dua listener pada dua elemen = dua janji. Satu elemen ditimpa dua listener = satu mulut untuk dua kalimat.
- **Regresi:** setelah mengubah `script.js`, uji ulang AC P26 sebelum mengklaim P27 selesai.
- Jalur B memakai `let` + `if`/`else` (P14, P16) di dalam listener yang sudah ada — bukan tombol baru.
- Menambal `id` yang sudah dijanjikan P23 tetapi hilang di P24 = menutup gap, bukan menambah fitur.
- Fitur 3 (warna, counter, `innerHTML`, form kirim) ditahan sampai S2 / di luar DoD.

## Recall

P26 = saklar pertama. P16 = cabang. P27 = saklar kedua **atau** cabang pada saklar pertama. P28 = uji paket.

## Etika

Jangan berikan kedua listener jadi. Tanya: “Spek baris mana? Elemen mana yang boleh berubah? Fitur 1 masih lulus?”

## Rotasi jalur

| Situasi | Keputusan guru |
|---|---|
| Spek menyebut 2 interaksi | Jalur A wajib |
| Spek 1 interaksi, siswa ingin tombol baru | Jalur B; tolak fitur baru |
| Fitur 1 belum lulus P26 | Selesaikan regresi dulu; P27 menumpang janji yang belum ditepati |
| HTML tidak punya `id` fitur 2 padahal spek ada | Izinkan **satu** elemen sesuai spek; bukan dekorasi baru |

## Checklist exit

- [ ] Jalur A/B sesuai spek
- [ ] Regresi fitur 1
- [ ] AC hari ini + konsol
- [ ] Peer tanpa kode
- [ ] Tanpa fitur 3

## KBC

**Tanggung jawab pada janji lama:** fitur baru tidak boleh merusak yang sudah diuji kemarin.
