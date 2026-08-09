# Handout Siswa — X-S1-P11

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **11/34**

**Modul:** [X-S1-P11_form-html.md](../../../base-4jp/kelas-x/semester-1/X-S1-P11_form-html.md)

**Bacaan:** [X-S1-P11_bacaan-mimi-robi.md](./X-S1-P11_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “form = kotak cantik / Kirim misterius” → “**form** = menamai & mengumpulkan **input sebagai data**.”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../../base-4jp/kelas-x/00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut `form`, `label`, `input`, `textarea`, `name`, `type`, submit |
| **C2** | Memahami | Menjelaskan form = wadah data; kait P02 (input jelas) |
| **C3** | Menerapkan | Membangun form 2–4 field di section halaman |
| **C4** | Menganalisis | Menemukan tanpa label/`name` atau form palsu |
| **C5** | Mengevaluasi | Mencocokkan spek kolom + kejujuran pemrosesan |
| **C6** | Mencipta | Menyusun form milik sendiri yang bisa dijelaskan |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Review static → pertemuan berikutnya

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## 2. Istilah (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Form** | Wadah mengumpulkan input |
| **Field / kolom** | Satu data yang diminta |
| **`label`** | Teks penjelas untuk manusia (terhubung ke kontrol) |
| **`name`** | Identitas data (“siapa field ini”) |
| **`type`** | Jenis kontrol (`text`, `email`, …) |
| **`textarea`** | Kotak teks panjang |
| **Submit** | Tombol mengirim isi form |

### Trap hari ini

- Hanya `placeholder` tanpa `label`  
- `input` tanpa `name`  
- Klaim “pesan terkirim” padahal belum ada pemrosesan  
- `div` berkotak yang cuma mirip form  

---

## 3. Alur (180 menit)

```text
Orientation → Form palsu vs sungguhan
  → Isi & lihat name
  → Trap
  → Concept anatomi form
  → Spek 3 kolom → Build di section → peer → Exit
```

---

## 4. Lembar spek field (kertas dulu)

| Label (manusia) | `name` | `type` | Kenapa perlu |
|-----------------|--------|--------|--------------|
| | | | |
| | | | |
| | | | |

---

## 5. Kriteria penerimaan

- [ ] Ada `<form>` di section relevan  
- [ ] Minimal 2–3 field + tombol submit  
- [ ] Tiap field: `label` terhubung + `name` jelas  
- [ ] Bukan form palsu  
- [ ] Catatan jujur: struktur siap; pemrosesan penuh belum  
- [ ] Bisa jelaskan 3 field (label · `name` · fungsi)  

---

## 6. Kerangka

```html
<section id="kontak">
  <h2>Kontak</h2>
  <form action="#" method="get">
    <p>
      <label for="nama">Nama</label>
      <input id="nama" name="nama" type="text" />
    </p>
    <!-- field lain -->
    <button type="submit">Kirim</button>
  </form>
  <p><small>Struktur siap. Pemrosesan server/JS belum diajarkan.</small></p>
</section>
```

**Belum:** backend · email otomatis · validasi JS panjang.

**Ingat P02:** input yang jelas → data yang bisa dibaca. `name` = kejelasan itu di form.

---

## 7. Exit ticket

1. Kenapa `name` penting: …  
2. Fieldku (label + `name`): …  
3. Godaan yang kutolak: …

## 8. Preview P12

Review halaman static vs spek — perbaiki menurut checklist teman/guru.

---

_Data yang jujur punya nama. Tombol Kirim yang jujur tidak berbohong._
