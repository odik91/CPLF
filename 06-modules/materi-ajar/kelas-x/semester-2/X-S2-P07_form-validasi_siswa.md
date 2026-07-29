# Handout Siswa — X-S2-P07

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P07_form-validasi.md](../../../kelas-x/semester-2/X-S2-P07_form-validasi.md)

---

## 1. Tujuan pembelajaran

Dari “input diterima mentah” → **validasi sebelum proses**.

---

## 2. Ringkasan konsep

**Substansi wajib sebelum mengajar:**

| Konsep | Penjelasan guru |
|--------|-----------------|
| **Validasi** | Cek kondisi **sebelum** aksi irreversible (submit, simpan, tarik uang) |
| **Form HTML** | `<form>` mengumpulkan input; `action` + `method` (pengantar GET) |
| **`required`** | Atribut boolean — browser tolak submit jika kosong |
| **`type="email"` / `type="number"`** | Validasi format dasar bawaan browser |
| **`min` / `max` / `minlength`** | Batas numerik/panjang — analogi "saldo cukup" / "PIN 4 digit" |
| **Pesan default browser** | Bisa muncul tapi sering generik — foreshadow P08 |

**Spiral EXP_04 ATM (S1 P08):** ATM tidak keluarkan uang tanpa PIN + saldo + kartu valid. Form web = mesin yang **tidak memproses** data invalid.

**Prasyarat S2:** P05–P06 DOM + event sudah ada — hari ini fokus **input user** dan **aturan sebelum proses**.

**PENTING:** Contoh form lengkap di modul = **referensi guru**. Jangan kirim HTML siap jadi ke siswa.

---

## 3. Materi praktik

### Transformasi

**Dari:** Input diterima mentah → langsung "submit"  
**Ke:** Validasi sebelum proses — data harus memenuhi aturan dulu

### EXP_04 spiral (ringkas)

| Skenario | Trap | Clarify |
|----------|------|---------|
| Submit form kosong | User bingung / data sampah masuk | Field wajib harus dicek dulu |
| Hanya andalkan "user pintar" | Human error pasti terjadi | Validasi = satpam digital |

### HTML validation dasar

```html
<form>
  <label for="nama">Nama:</label>
  <input id="nama" name="nama" type="text" required minlength="3">

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" required>

  <label for="usia">Usia:</label>
  <input id="usia" name="usia" type="number" min="1" max="99" required>

  <button type="submit">Daftar</button>
</form>
```

- **`label for=`** — aksesibilitas + klik label fokus ke input
- **`name`** — identitas field saat submit (foreshadow data)
- **`type`** — browser bantu validasi format
- **`required`** — analogi "field wajib lulus cek satpam"

### Belum JavaScript custom

Guru tegaskan: "Browser = satpam level 1. Minggu depan (P08) kita buat pesan error sendiri dengan JS."

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Recall ATM P08 S1 — hubung ke form |
| 5–18 | Experience | Form submit kosong — apa yang terjadi? |
| 18–28 | Trap | Browser default vs validasi jelas |
| 28–38 | Clarify | Pesan error harus **membantu** user |
| 38–48 | Concept | `<form>` · `required` · `type="email/number"` |
| 48–70 | Practice | Form pendaftaran kegiatan — HTML validation |
| 70–85 | Reflect | Validasi = satpam digital |
| 85–90 | Exit | 2 field + aturan |

---

## 5. Lembar kerja / latihan

> Proyeksikan HTML — siswa **prediksi** perilaku submit, jangan copy.

### Snippet A

```html
<form>
  <input type="text" required>
  <button type="submit">Kirim</button>
</form>
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit kosong — apa yang terjadi? | Browser blokir; fokus ke input; pesan "Please fill out this field" (variasi browser) |
| Tanpa `required`? | Submit lolos — data kosong terkirim |

### Snippet B

```html
<input type="email" value="bukan-email" required>
```

| Pertanyaan | Kunci |
|------------|-------|
| Submit — valid? | Tidak — format email tidak cocok |
| Analogi ATM? | "Format kartu/PIN tidak valid" sebelum proses lanjut |

### Snippet C — Bug label

```html
<label for="nama">Nama</label>
<input id="nam" type="text" required>
```

| Pertanyaan | Kunci |
|------------|-------|
| Klik label — fokus ke input? | Tidak — `for` dan `id` tidak cocok |
| Perbaikan? | Samakan id/for → `nama` |

---

## 6. Exit ticket

1. 2 field + aturan
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
