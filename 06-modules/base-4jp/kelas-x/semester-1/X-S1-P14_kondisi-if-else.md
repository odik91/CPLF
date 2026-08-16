# X-S1-P14 — Kondisi (Satpam / ATM): If / Else di Halaman

| Field | Isi |
|-------|-----|
| Kode | X-S1-P14 |
| Basis | **4JP** · Pertemuan **14/34** |
| Unit | X1.4 (JS dasar di halaman) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T3, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · lanjut P13 · DNA 2JP: satpam/ATM if-else · praktik di **halaman** (bukan terminal saja) |

## Learning Transformation

Dari “tombol selalu lakukan **satu** hal yang sama” → “program bisa **memilih cabang**: jika syarat terpenuhi → A; jika tidak → B (*if* / *else*).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: kondisi; `if` / `else`; perbandingan (`===`, `>=`, …); pesan cabang di halaman |
| **C2** | Memahami | Menjelaskan satpam/ATM = aturan “boleh / tidak”; beda selalu-jalan vs bergantung syarat |
| **C3** | Menerapkan | Menulis `if`/`else` yang mengubah teks di halaman (mis. isi kosong vs terisi; skor lulus/remidi) |
| **C4** | Menganalisis | Menemukan cabang yang salah / syarat yang tidak cocok dengan spek |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria penerimaan: kedua cabang bisa diuji |
| **C6** | Mencipta | Menyusun satu aturan keputusan milik sendiri (syarat + dua pesan) yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Nested / beberapa syarat → **P15** · Variabel mendalam → **P16**

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P13 (klik ubah teks) · *Selalu sama vs bergantung syarat* | |
| 10–30 | **Scaffold teori** | C2 | I do: role-play satpam / ATM · We do: isi tabel boleh/tidak | |
| 30–50 | **Experience** | C2–C3 | Live: `if` di konsol dulu · lalu di halaman | |
| 50–65 | **Trap + Q** | C4 | Trap: lupa `else` · syarat terbalik · `=` vs `===` · selalu tampil “lulus” | |
| 65–85 | **Clarify + Concept** | C2 | Kondisi · `if`/`else` · perbandingan · pesan ke elemen | |
| 85–95 | **Practice mini** | C3 | Kertas: syarat · pesan jika ya · pesan jika tidak | |
| 95–105 | Transisi | — | Lab · buka halaman P13 / form P11 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: tombol cek isian / skor → ubah `#pesan` | |
| 120–165 | **Practice** | C3–C6 | Cabang di halaman sendiri · peer uji kedua cabang | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P15 (beberapa syarat) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P06 | Algoritma eksplisit — hari ini cabang eksplisit |
| P11 | Form = sumber input yang bisa dicek |
| P13 | Halaman bereaksi (klik / ubah teks) |
| **P14** | Reaksi **bergantung syarat** |
| P15 | Beberapa syarat / nested / pesan error form |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Nested `if` panjang / banyak `else if` | Satu `if` + satu `else` (maks. 1 `else if` singkat jika perlu) |
| Validasi form lengkap + regex | Cek kosong / angka ambang sederhana |
| Framework / library | JS murni di halaman |
| Hanya `console.log` tanpa UI | Cabang **terlihat** di elemen halaman |

**Adaptasi ketat:** jangan potong Experience cabang atau Practice uji dua jalur — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md) · DNA: [base-2jp P09 satpam](../../../base-2jp/kelas-x/semester-1/X-S1-P09_satpam-js-kondisi.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Kondisi** | Syarat yang dicek (benar atau salah) |
| **Percabangan** | Program memilih jalan berbeda menurut kondisi |
| **`if` / `else`** | Jika syarat benar → blok A; jika tidak → blok B |
| **Perbandingan** | Contoh: `===` (sama persis) · `>=` (lebih besar atau sama) |
| **Validasi dasar** | Mengecek input memenuhi aturan sederhana (mis. tidak kosong) |
| **Boolean** | Nilai benar (`true`) / salah (`false`) — hasil cek kondisi |

### Metafora

| Dunia nyata | Di kode |
|-------------|---------|
| Satpam: kartu valid → boleh masuk | `if (syarat) { … } else { … }` |
| ATM: PIN benar → lanjut | Cabang pesan di layar |

### Contoh minimal (model)

```html
<input id="nama" type="text" />
<button id="cek" type="button">Cek</button>
<p id="pesan">Belum dicek.</p>

<script>
  const tombol = document.getElementById("cek");
  const nama = document.getElementById("nama");
  const pesan = document.getElementById("pesan");

  tombol.addEventListener("click", function () {
    if (nama.value.trim() === "") {
      pesan.textContent = "Nama masih kosong — isi dulu.";
      console.log("Cabang: kosong");
    } else {
      pesan.textContent = "Halo, " + nama.value.trim() + "!";
      console.log("Cabang: terisi");
    }
  });
</script>
```

Varian skor (opsional kedua):

```javascript
if (skor >= 75) {
  pesan.textContent = "Lulus";
} else {
  pesan.textContent = "Remidi";
}
```

---

## Cognitive Trap

**Asumsi:** Tombol “cek” selalu menampilkan satu pesan sukses; atau `=` (penugasan) dipakai sebagai perbandingan.  
**Aman:** Puji keinginan validasi; challenge pada **cabang tidak diuji** dan **syarat terbalik**.

---

## Guiding Questions

1. Syarat hari ini: apa yang dicek?  
2. Kalau syarat **salah**, pesan apa yang harus muncul?  
3. Sudah uji **kedua** cabang (ya dan tidak)?

---

## Kriteria penerimaan (contoh)

- [ ] Ada `if` dan `else` yang jelas  
- [ ] Syarat bisa dijelaskan dalam 1 kalimat  
- [ ] Kedua cabang mengubah teks di halaman (bukan hanya konsol)  
- [ ] Peer berhasil memicu cabang “ya” dan cabang “tidak”  
- [ ] Siswa menjelaskan ≥3 baris terkait kondisi  

---

## Exit Ticket

1. Satu kalimat: apa itu `if` / `else`  
2. Syarat yang kupakai hari ini  
3. Satu kesalahan cabang yang kutemukan/hindari  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** uji dua cabang · **Penalaran** (kenapa syarat itu).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Bawa artefak P13 — tambah kondisi, jangan buang fondasi.  
- Role-play satpam singkat cukup; jangan habiskan 40' drama.  
- `trim()` boleh diperkenalkan singkat (spasi saja = kosong).  
- Nested / form error lengkap → parkir **P15**.  
- Sketch bacaan: ditunda (kelas masih di P05) — naskah tetap ada.  
