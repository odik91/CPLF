# Handout Siswa — X-S2-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P08_validasi-js-pesan.md](../../../kelas-x/semester-2/X-S2-P08_validasi-js-pesan.md)

---

## 1. Tujuan pembelajaran

Dari “alert generik” → **validasi custom + UX jelas**.

---

## 2. Ringkasan konsep

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`event.preventDefault()`** | Batalkan perilaku default browser (submit/reload) — validasi JS dulu |
| **`if` validasi** | Spiral S1 P08–P09 — kondisi harus true sebelum lanjut |
| **Pesan di DOM** | `<span class="error">` di bawah field — lebih baik dari `alert()` generik |
| **`.value`** | Baca isi input dari JS — string selalu (even `type="number"`) |
| **`.trim()`** | Buang spasi ujung — cek kosong yang "terlihat isi" |
| **`.length`** | Cek panjang string — `nama.length >= 3` |
| **Format email sederhana** | `email.includes("@")` cukup kelas X — jangan regex kompleks |

**Prasyarat:** P07 HTML form + P05–P06 DOM/event. Siswa sudah paham `if/else` dari S1.

**UX pesan error:** spesifik · sopan · actionable (kriteria P07).

**Starter modul = referensi guru** — siswa bangun dari scaffold minimal, bukan file lengkap.

---

## 3. Materi praktik

### Transformasi

**Dari:** `alert("error")` / pesan browser generik  
**Ke:** Validasi custom + pesan error jelas di bawah field yang salah

### Alur mental validasi JS

```text
1. User klik submit
2. JS intercept (preventDefault)
3. Baca nilai field (.value)
4. if (kondisi gagal) → tampilkan pesan, stop
5. if (semua OK) → boleh proses (console.log / alert sukses sementara)
```

### Perbandingan UX

| Cara | Masalah |
|------|---------|
| `alert("Error")` | Modal mengganggu; tidak sebut field |
| Browser default | Kurang kontrol bahasa |
| Teks di bawah field | User tahu **di mana** dan **apa** yang diperbaiki |

### Spiral if/else S1

```javascript
if (nama.length < 3) {
  pesanNama.textContent = "Nama minimal 3 huruf.";
} else {
  pesanNama.textContent = "";
}
```

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Review form P07 |
| 5–15 | Experience | `alert("error")` vs teks di bawah field |
| 15–25 | Trap | User tidak tahu field mana salah |
| 25–35 | Clarify | Spesifik · sopan · actionable |
| 35–45 | Concept | preventDefault · if validasi · DOM pesan error |
| 45–70 | Practice | JS validasi: nama min 3 char, email format, angka positif |
| 70–85 | Test | 3 kasus uji (kosong, salah format, valid) |
| 85–90 | Exit | Screenshot 1 pesan error bagus |

---

## 5. Lembar kerja / latihan

### Snippet A

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputNama.value.length < 3) {
    pesanNama.textContent = "Terlalu pendek";
    return;
  }
  pesanNama.textContent = "";
});
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit dengan nama "An" — output? | Span: "Terlalu pendek"; tidak reload |
| Tanpa preventDefault? | Halaman reload — pesan hilang |

### Snippet B — Urutan return

```javascript
if (nama.length < 3) return;
if (!email.includes("@")) return;
console.log("OK");
```

| Pertanyaan | Kunci |
|------------|-------|
| nama OK, email "salah" — console.log jalan? | Tidak — return di cek email |
| Analogi ATM? | Cek berurutan; satu gagal = stop |

### Snippet C — Bug scope

```javascript
if (nama.length < 3)
  pesanNama.textContent = "Pendek";
  return;
```

| Pertanyaan | Kunci |
|------------|-------|
| nama "Budi" — return jalan? | Ya — return **di luar** if (no braces trap) |
| Perbaikan? | `{ }` around kedua baris if body |

---

## 6. Exit ticket

1. Screenshot 1 pesan error bagus
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
