# Materi Guru Lengkap — X-S1-P14 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P14_kondisi-if-else_siswa.md](./X-S1-P14_kondisi-if-else_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P14_bacaan-mimi-robi.md](./X-S1-P14_bacaan-mimi-robi.md)

**Modul:** [X-S1-P14_kondisi-if-else.md](../../../base-4jp/kelas-x/semester-1/X-S1-P14_kondisi-if-else.md)

**Materi pendukung sumber:** [X-S1-P14_kondisi-if-else.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P14_kondisi-if-else.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **kondisi**, **`if` / `else`**, **percabangan**, **validasi dasar** — sebut nama level Bloom + kode. Sketch bacaan ditunda.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P14 — Kondisi If / Else di Halaman

| Field | Isi |
|-------|-----|
| Kode | X-S1-P14 |
| Basis | **4JP** · Pertemuan **14/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “tombol selalu satu hasil” → “program memilih cabang menurut syarat (`if` / `else`).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut kondisi; `if`/`else`; perbandingan; pesan cabang |
| **C2** | Memahami | Menjelaskan satpam/ATM = boleh/tidak; beda selalu-jalan vs bersyarat |
| **C3** | Menerapkan | Menulis `if`/`else` yang mengubah teks di halaman |
| **C4** | Menganalisis | Menemukan cabang/syarat salah |
| **C5** | Mengevaluasi | Kedua cabang bisa diuji menurut kriteria |
| **C6** | Mencipta | Satu aturan keputusan (syarat + dua pesan) yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Multi-syarat → **P15**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P13 · *Selalu sama vs bersyarat* | |
| 10–30 | **Scaffold teori** | C2 | Satpam/ATM · tabel boleh/tidak | |
| 30–50 | **Experience** | C2–C3 | `if` di konsol · lalu di halaman | |
| 50–65 | **Trap + Q** | C4 | Lupa else · `=` vs `===` · selalu “lulus” | |
| 65–85 | **Clarify + Concept** | C2 | Kondisi · if/else · perbandingan | |
| 85–95 | **Practice mini** | C3 | Kertas: syarat + 2 pesan | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do cek isian/skor → `#pesan` | |
| 120–165 | **Practice** | C3–C6 | Cabang di halaman · peer dua jalur | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P15 | |

## Cognitive Trap

Tombol selalu sukses; `=` dipakai sebagai banding; cabang “tidak” tidak diuji.

## Guiding Questions

1. Syaratnya apa?  
2. Kalau salah, pesan apa?  
3. Kedua cabang sudah diuji?

## Exit Ticket

1. `if`/`else` = …  
2. Syaratku: …  
3. Kesalahan yang kuhindari: …

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi dua cabang · Penalaran.

## Catatan Guru

Bawa P13. Role-play singkat. Nested → P15. Sketch ditunda.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

Satpam = if/else.  
Kedua cabang terlihat di UI.  
`===` / `>=`. Trap `=`. Nested = P15.

### 2. Recall

P13 satu jalur · hari ini bersyarat · P06 eksplisit.

### 3. Etika

No kunci penuh. Peer uji dua cabang.

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: klik → teks berubah. Selalu jalur yang sama.
Hari ini: satpam — boleh atau tidak, tergantung syarat."
Recall: 1 siswa jelaskan getElementById + textContent.

[1 — Scaffold 10–30]
Role-play 2 menit: satpam gerbang MA.
Kasus: punya kartu pelajar? → masuk / ditolak.
We do: tabel di papan | Syarat | Jika ya | Jika tidak |

[2 — Experience 30–50]
Konsol dulu:
  let skor = 80;
  if (skor >= 75) { console.log("Lulus"); } else { console.log("Remidi"); }
Ubah skor = 60 — amati cabang lain.
Lanjut: pindah pesan ke elemen #pesan di halaman.

[3 — Trap 50–65]
A: hanya if tanpa else — "gagal" tidak ada pesan.
B: if (nama = "")  // penugasan, bukan banding
C: selalu textContent = "Lulus" tanpa if
Debat: obat = syarat jelas + else + uji dua input.

[4 — Clarify + Concept 65–85]
Papan:
  if (kondisi) { ... } else { ... }
  Kondisi sering: perbandingan (===, >=)
  Validasi dasar: kosong atau tidak
  Boolean: true / false

[5 — Practice mini 85–95]
Kertas: Syarat | Pesan YA | Pesan TIDAK | Cara uji peer

[6–7 — Scaffold + Practice 105–165]
I do: input nama + tombol Cek + if trim === "" else halo.
Opsional demo kedua: skor lulus/remidi.
You do: pilih satu aturan (kosong/isi ATAU ambang angka) di halamanmu.
Peer: picu YA dan TIDAK — centang AC.
Tolak: nested panjang; regex; paste AI penuh.

[8 — Exit 165–180]
Exit ticket + preview P15: beberapa syarat / pesan error form.
```

### Model (jangan dibagikan utuh sebagai “kunci”)

```html
<input id="nama" type="text" />
<button id="cek" type="button">Cek</button>
<p id="pesan">Belum dicek.</p>
<script>
  document.getElementById("cek").addEventListener("click", function () {
    const isi = document.getElementById("nama").value.trim();
    const pesan = document.getElementById("pesan");
    if (isi === "") {
      pesan.textContent = "Nama masih kosong — isi dulu.";
    } else {
      pesan.textContent = "Halo, " + isi + "!";
    }
  });
</script>
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Lupa uji cabang “tidak” | Hanya cek kasus bahagia |
| `=` bukan `===` | Tidak buka konsol |
| Pesan hanya di console | Tidak minta terlihat di halaman |
| Nested 4 tingkat | Meladeni “biar lengkap” |
| Paste AI | Tidak minta jelaskan syarat |

### 6. Checklist exit guru

- [ ] Satpam/ATM + tabel  
- [ ] Trap `=` / lupa else  
- [ ] Practice cabang di halaman  
- [ ] Peer dua jalur  
- [ ] Preview P15  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · keadilan aturan  
**Kait:** Aturan boleh/tidak yang jelas = adil bagi semua.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
