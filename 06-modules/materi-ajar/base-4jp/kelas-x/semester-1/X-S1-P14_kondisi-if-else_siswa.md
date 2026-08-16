# Handout Siswa — X-S1-P14

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **14/34**

**Modul:** [X-S1-P14_kondisi-if-else.md](../../../base-4jp/kelas-x/semester-1/X-S1-P14_kondisi-if-else.md)

**Bacaan:** [X-S1-P14_bacaan-mimi-robi.md](./X-S1-P14_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “tombol selalu satu hasil” → “program **memilih cabang** menurut syarat (`if` / `else`).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut kondisi; `if`/`else`; perbandingan; pesan cabang |
| **C2** | Memahami | Menjelaskan satpam/ATM = boleh/tidak |
| **C3** | Menerapkan | Menulis `if`/`else` yang mengubah teks di halaman |
| **C4** | Menganalisis | Menemukan cabang/syarat salah |
| **C5** | Mengevaluasi | Kedua cabang bisa diuji |
| **C6** | Mencipta | Satu aturan keputusan yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Beberapa syarat → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Kondisi** | Syarat yang dicek (benar / salah) |
| **Percabangan** | Jalan berbeda menurut kondisi |
| **`if` / `else`** | Jika ya → A; jika tidak → B |
| **Perbandingan** | `===` · `>=` · … |
| **Validasi dasar** | Cek aturan sederhana (mis. tidak kosong) |
| **Boolean** | `true` / `false` |

### Trap hari ini

- Lupa `else` (cabang “tidak” diam)  
- Pakai `=` (isi nilai) padahal mau banding → pakai `===`  
- Hanya uji kasus “berhasil”  

---

## 3. Alur (180 menit)

```text
Orientation → Satpam / ATM
  → if di konsol & halaman
  → Trap
  → Concept
  → Rencana kertas → Build cabang → peer dua jalur → Exit
```

---

## 4. Lembar rencana (kertas dulu)

| Syarat (1 kalimat) | Pesan jika YA | Pesan jika TIDAK | Cara uji peer |
|--------------------|---------------|------------------|---------------|
| | | | |

---

## 5. Kriteria penerimaan

- [ ] Ada `if` dan `else`  
- [ ] Syarat bisa dijelaskan  
- [ ] Kedua cabang mengubah teks di halaman  
- [ ] Peer memicu YA dan TIDAK  
- [ ] Bisa jelaskan ≥3 baris terkait kondisi  

---

## 6. Kerangka

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

**Belum:** nested `if` panjang · validasi form penuh · regex.

**Opsional:** skor `>= 75` → "Lulus" / else "Remidi".

---

## 7. Exit ticket

1. `if` / `else` = …  
2. Syaratku: …  
3. Kesalahan yang kuhindari: …

## 8. Preview P15

Beberapa syarat · pesan error form yang lebih lengkap.

---

_Kedua cabang harus bisa diuji. Satpam yang adil punya aturan jelas._
