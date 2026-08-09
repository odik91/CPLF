# X-S1-P11 — Form HTML (Input sebagai Data)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P11 |
| Basis | **4JP** · Pertemuan **11/34** |
| Unit | X1.3 (static page) |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Capability | CX-T2, CX-K1 (draft) |
| Status | **Isi penuh** |
| DNA | Pengayaan 4JP · jembatan P02 (input) + P10 (section kontak) · belum JS validasi penuh |

## Learning Transformation

Dari “form = kotak cantik / tombol Kirim yang misterius” → “**form** = cara menamai & mengumpulkan **input sebagai data**; tiap kolom punya identitas (`label` + `name`).”

---

## Capaian pembelajaran (Taksonomi Bloom revisi)

Rujukan: [00_Taksonomi_Bloom_CPLF_4JP.md](../../00_Taksonomi_Bloom_CPLF_4JP.md)

| Kode | Level | Siswa mampu … |
|------|-------|----------------|
| **C1** | Mengingat | Menyebut: `form`, `label`, `input`, `textarea`, `name`, `type`, tombol `submit` |
| **C2** | Memahami | Menjelaskan form = wadah data; beda tampilan kotak vs identitas data; kait ke P02 (input menentukan hasil) |
| **C3** | Menerapkan | Membangun form kontak/pesan singkat di section halaman S1 (label terhubung, name jelas) |
| **C4** | Menganalisis | Menemukan input tanpa label, `name` kosong/dobel, atau “form palsu” (hanya CSS) |
| **C5** | Mengevaluasi | Mencocokkan ke kriteria: spek kolom + akses label + kejujuran “belum diproses server/JS” |
| **C6** | Mencipta | Menyusun form milik sendiri (2–4 kolom) yang bisa dijelaskan per field |

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Review static + spek → **P12** · Validasi JS / backend → **bukan** hari ini (preview jujur)

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P02 (input) + P10 (section) · *Kotak ≠ data* | |
| 10–30 | **Scaffold teori** | C2 | I do: dua “form” (palsu vs `label`+`name`) · We do: tebak field | |
| 30–50 | **Experience** | C2–C3 | Isi form live · lihat apa yang “bernama” (DevTools/`name`) | |
| 50–65 | **Trap + Q** | C4 | Trap: placeholder sebagai label · input tanpa `name` · form CSS-only · janji “terkirim” palsu | |
| 65–85 | **Clarify + Concept** | C2 | Anatomi form · `label for`/`id` · `name` = identitas data · `type` dasar | |
| 85–95 | **Practice mini** | C3 | Spek 3 kolom di kertas (label manusia · `name` · `type`) | |
| 95–105 | Transisi | — | Lab · buka section kontak P10 | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do: form 3 field + submit di `section` | |
| 120–165 | **Practice** | C3–C6 | Build form di halaman · peer cek label/`name` · catatan jujur | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P12 (review spek) | |

## Kaitan

| Pertemuan | Jembatan |
|-----------|----------|
| P02 | Output mengikuti **input** — di form, input harus bernama jelas |
| P10 | Section kontak = rumah form |
| **P11** | Form HTML static — struktur data di halaman |
| P12 | Review seluruh static vs spek/acceptance |
| P13+ | JS mulai “mereaksi” isi form |

## Bukan / Melainkan

| Bukan | Melainkan |
|-------|-----------|
| Backend / email server / database | Struktur form di HTML yang jujur |
| Validasi JS penuh / regex panjang | `type` dasar + label; validasi lanjut nanti |
| Form palsu (div berkotak) tanpa `form`/`name` | Elemen form sungguhan |
| Klaim “pesan terkirim” tanpa mekanisme | Catatan: struktur siap; pemrosesan menyusul |

**Adaptasi ketat:** jangan potong Trap “form palsu / tanpa name” atau Practice build — potong Reflect tertulis.

**Rujukan:** [Learning Compass](../../../../03-framework/03_Learning_Compass_CPLF.md) · [Panduan 4JP](../00_Panduan_Pertemuan_4JP.md) · [Bloom C1–C6](../../00_Taksonomi_Bloom_CPLF_4JP.md)

---

## Konsep inti (nama lengkap)

| Istilah | Arti |
|---------|------|
| **Form** (`<form>`) | Wadah untuk mengumpulkan input dari pengguna |
| **Field / kolom** | Satu buah data yang diminta (nama, email, pesan, …) |
| **`label`** | Teks penjelas untuk manusia — harus terhubung ke kontrol |
| **`name`** | Nama identitas data saat dikirim/diproses (“siapa field ini”) |
| **`type`** | Jenis kontrol (`text`, `email`, …) — membantu browser & pengguna |
| **`textarea`** | Kotak teks panjang (mis. pesan) |
| **Submit** | Tombol mengirim isi form (`type="submit"`) |

### Contoh minimal (model)

```html
<section id="kontak">
  <h2>Kontak</h2>
  <form action="#" method="get">
    <p>
      <label for="nama">Nama</label>
      <input id="nama" name="nama" type="text" required />
    </p>
    <p>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" />
    </p>
    <p>
      <label for="pesan">Pesan</label>
      <textarea id="pesan" name="pesan" rows="4"></textarea>
    </p>
    <button type="submit">Kirim</button>
  </form>
  <p><small>Struktur form siap. Pemrosesan otomatis (server/JS) belum diajarkan — jangan klaim “sudah terkirim”.</small></p>
</section>
```

> `action="#"` + catatan jujur = OK untuk S1 static. Yang dinilai: struktur & penamaan data, bukan email benar-benar sampai.

---

## Cognitive Trap

**Asumsi:** Form = dekorasi kontak / cukup placeholder / tombol Kirim = pesan pasti terkirim.  
**Aman:** Puji keinginan punya kontak; challenge pada **label/`name` hilang** dan **klaim bohong**.

---

## Guiding Questions

1. Tiap kolom: label manusia apa · `name` apa · `type` apa?  
2. Apakah `label` terhubung (`for` = `id`)?  
3. Apa yang jujur kita bilang soal “Kirim” hari ini?

---

## Kriteria penerimaan form (contoh)

- [ ] Ada `<form>` di section yang relevan (mis. kontak)  
- [ ] Minimal **2–3** field bermakna + 1 tombol submit  
- [ ] Tiap field punya `label` terhubung + `name` jelas  
- [ ] Bukan “form palsu” (hanya `div` berkotak)  
- [ ] Ada catatan jujur: struktur siap; pemrosesan penuh belum  
- [ ] Siswa menjelaskan 3 field: label · `name` · fungsi  

---

## Exit Ticket

1. Satu kalimat: kenapa `name` penting  
2. Daftar field formku (label + `name`)  
3. Satu godaan yang kutolak (tanpa label / klaim terkirim / form palsu)  

---

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · **Observasi** label/`name` · **Penalaran** (kait input P02).  
Internal rubrik: TEC / OBS / REA — ke siswa sebut **nama lengkap**.

---

## Catatan Guru

- Taruh form di section P10 — jangan halaman form terpisah wajib.  
- `required` boleh singkat; jangan kuliah validasi.  
- Tolak “pasang Formspree/PHP biar beneran kirim” sebagai syarat lulus hari ini.  
- Preview P12: review static + spek teman/guru.  
