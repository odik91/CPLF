# Bacaan Pendamping — X-S1-P14  
## Mimi & Robi: Satpam di Gerbang, Tombol yang Selalu Bilang “Lulus”, & Cabang yang Harus Diuji

| Field | Isi |
|-------|-----|
| Kode | X-S1-P14 — Kondisi If / Else |
| Pertemuan | **14 / 34** · Basis **4JP** |
| Status | Naskah · **sketch ditunda** (kelas masih di P05) |
| Nada | POV Mimi, Gen Z, **plot twist** |

**Handout:** [X-S1-P14_kondisi-if-else_siswa.md](./X-S1-P14_kondisi-if-else_siswa.md)  
**Modul:** [X-S1-P14 …](../../../base-4jp/kelas-x/semester-1/X-S1-P14_kondisi-if-else.md)

---

Halo. Mimi.

Kemarin (P13) Robi berhasil bikin teks berubah saat diklik. Dia bangga.

> “Satu tombol. Satu reaksi. Aku sudah master JavaScript.”

Aku:

> “Spoiler: dunia nyata punya **satpam**. Tidak semua orang boleh masuk lewat jalur yang sama.”

Antenna goyang. Dia belum siap jadi satpam.

---

## Learning Compass

| Arah | Hari ini |
|------|----------|
| Tujuan | `if` / `else` — halaman bereaksi **menurut syarat** |
| Peranmu | Tulis satu aturan · uji cabang YA dan TIDAK |
| Bukan | Nested panjang · validasi form penuh · paste AI |

```text
SATPAM/ATM  →  IF DI KONSOL  →  TRAP  →  CABANG DI HALAMAN  →  UJI DUA JALUR
```

---

## Adegan 1 — Role-play 120 detik

Guru jadi satpam gerbang.

> “Kartu pelajar?”

Robi tanpa kartu. Ditolak.  
Teman dengan kartu. Masuk.

Papan:

| Syarat | Jika ya | Jika tidak |
|--------|---------|------------|
| Ada kartu | Boleh masuk | Ditolak |

Aku:

> “Itu **kondisi**. Program juga bisa jadi satpam — asal aturannya **eksplisit**. Ingat ROBI mie.”

---

## Plot twist #1 — tombol yang selalu “Lulus”

Robi tulis tanpa `if`:

```javascript
pesan.textContent = "Lulus";
```

Setiap klik: Lulus. Skor 10? Lulus. Nama kosong? Lulus.

> “UX-ku positif.”

Aku:

> **KRISIS!** (versi ATM.)  
> “ATM yang selalu keluar uang meski PIN salah bukan ramah. Itu **maling.**”

Dia menambah:

```javascript
if (skor >= 75) {
  pesan.textContent = "Lulus";
} else {
  pesan.textContent = "Remidi";
}
```

Plot twist: pesan “Remidi” bukan kekalahan. Itu **cabang yang jujur**.

---

## Adegan 2 — Drama satu karakter: `=` vs `===`

Dia ketik:

```javascript
if (nama.value = "") {
```

Konsol aneh. Halaman aneh. Antenna kepanasan.

Aku:

> “`=` = **isi nilai**. `===` = **bandingkan**. Satpam yang menaruh kartu kosong ke saku orang lalu bilang ‘sudah dicek’ — itu bukan prosedur. Itu sabotage.”

Ganti `===`. Dunia kembali.

---

## Concept — nama lengkap

| Istilah | Arti manusia |
|---------|----------------|
| Kondisi | Syarat yang dicek |
| Percabangan | Jalan A atau jalan B |
| `if` / `else` | Jika ya / jika tidak |
| Validasi dasar | Cek aturan sederhana |
| Boolean | Benar atau salah |

Robi rencana di kertas dulu (vibes spek P04):

> Syarat: nama tidak kosong.  
> YA: sapaan.  
> TIDAK: “isi dulu.”

Baru kode. Peer harus memicu **kedua** jalur — seperti acceptance yang bisa dicentang.

---

## Adegan 3 — Peer: dua tombol imajiner

Teman:

> “Kosong → pesan kosong ✅. Isi ‘Robi’ → halo ✅.”

Robi hampir bilang “keren.”

Aku:

> “Kata terlarang. Bilang: **kedua cabang terpenuhi kriteria penerimaan**.”

Dia mengangguk. Menamai fungsi mentalnya: `satpamNama`.

---

## Reflect

| Pertemuan | Badge tidak resmi |
|-----------|-------------------|
| 13 | Halaman bereaksi (satu jalur) |
| **14** | Halaman memilih (dua jalur) |

Besok (P15): beberapa syarat · pesan error form yang lebih lengkap. Jangan panik — fondasi hari ini: satu `if` + satu `else` yang jujur.

---

## Exit

1. `if` / `else` = …  
2. Syaratku: …  
3. Kesalahan yang kuhindari: …

Satu line:

> **Satpam yang adil punya aturan eksplisit.**  
> **Cabang yang tidak diuji = bug yang belum ketahuan — atau kebohongan ramah.**

— **Mimi** 🐾  
*(Robi menulis di komentar: `// uji YA dan TIDAK — jangan cuma lulus` — lebay, tapi prosedur.)*
