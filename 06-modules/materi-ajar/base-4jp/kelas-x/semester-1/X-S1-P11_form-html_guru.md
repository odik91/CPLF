# Materi Guru Lengkap — X-S1-P11 (Base 4JP)

**Handout siswa (bagikan):** [X-S1-P11_form-html_siswa.md](./X-S1-P11_form-html_siswa.md)

**Bacaan pendamping siswa:** [X-S1-P11_bacaan-mimi-robi.md](./X-S1-P11_bacaan-mimi-robi.md)

**Modul:** [X-S1-P11_form-html.md](../../../base-4jp/kelas-x/semester-1/X-S1-P11_form-html.md)

**Materi pendukung sumber:** [X-S1-P11_form-html.md](../../../materi-pendukung/base-4jp/kelas-x/semester-1/X-S1-P11_form-html.md)

> File ini **mandiri untuk mengajar** (pola P01). Ke siswa: **form**, **label**, **`name`**, **input sebagai data** — sebut nama level Bloom + kode.

---

## A. Modul pertemuan (referensi mengajar)

# X-S1-P11 — Form HTML (Input sebagai Data)

| Field | Isi |
|-------|-----|
| Kode | X-S1-P11 |
| Basis | **4JP** · Pertemuan **11/34** |
| Durasi | **4 JP = 180 menit** · pola ~2+2 |
| Status | **Isi penuh** |

## Learning Transformation

Dari “form = kotak cantik / Kirim misterius” → “form = menamai & mengumpulkan input sebagai data.”

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

**Fokus utama:** C2–C4 · **Puncak:** C3–C5 · Review → **P12**

> **Bloom:** C1 Mengingat · C2 Memahami · C3 Menerapkan · C4 Menganalisis · C5 Mengevaluasi · C6 Mencipta

---

## Timeline (180 menit · 4 JP)

| Menit | Fase | Bloom | Aktivitas | Catatan guru |
|-------|------|-------|-----------|--------------|
| 0–10 | **Orientation** | C1 | Compass · recall P02 + P10 · *Kotak ≠ data* | |
| 10–30 | **Scaffold teori** | C2 | Form palsu vs label+name · tebak field | |
| 30–50 | **Experience** | C2–C3 | Isi form · lihat `name` | |
| 50–65 | **Trap + Q** | C4 | Placeholder-as-label · tanpa name · klaim terkirim | |
| 65–85 | **Clarify + Concept** | C2 | Anatomi form · for/id · name · type | |
| 85–95 | **Practice mini** | C3 | Spek 3 kolom di kertas | |
| 95–105 | Transisi | — | Lab | |
| 105–120 | **Scaffold praktik** | C2–C3 | I do form 3 field di section | |
| 120–165 | **Practice** | C3–C6 | Build · peer · catatan jujur | |
| 165–180 | Reflect + Exit | C5 | Exit · preview P12 | |

## Cognitive Trap

Form = dekorasi; placeholder cukup; Kirim = pasti terkirim.

## Guiding Questions

1. Label · `name` · `type` tiap kolom?  
2. `for` = `id`?  
3. Apa yang jujur soal “Kirim”?

## Exit Ticket

1. Kenapa `name` penting  
2. Daftar field (label + `name`)  
3. Godaan yang ditolak  

## Formatif

**Menerapkan · C3** · **Menganalisis · C4** · Observasi label/`name` · Penalaran (P02).

## Catatan Guru

Form di section P10. Jujur soal pemrosesan. Preview P12 review spek.

---

## B. Materi pendukung (lengkap)

> **RAHASIA GURU**

### 1. Pengetahuan ringkas

`name` = identitas data.  
`label for` + `id` wajib.  
Placeholder ≠ label.  
`action="#"` + catatan jujur OK.  
Backend/JS validasi = parkir.

### 2. Recall

P02: input menentukan output.  
P10: section kontak = rumah form.  
Hari ini: menamai data di HTML.

### 3. Etika

No form kunci penuh. Peer cek label/`name`. Larang klaim “terkirim.”

### 4. Skrip live (180')

```text
[0 — Orientation 0–10]
"Kemarin: peta section. Hari ini: di Kontak — bukan cuma teks, tapi cara minta data."
Recall P02: 1 siswa — kenapa keyword/input harus jelas?
Papan: Kotak di layar ≠ otomatis data bernama.

[1 — Scaffold 10–30]
Proyeksi A: div + border + teks "Nama" + kotak — tanpa form/name/label.
Proyeksi B: <form> + label for + input name="nama".
"Kalau mesin/JS nanti baca — mana yang punya identitas data?"
We do: tebak name apa yang cocok untuk "Alamat email".

[2 — Experience 30–50]
Siswa isi form demo. Tunjuk di Elements: atribut name.
Opsional: submit get → query string di URL (bukti "data punya nama").
Bahas singkat: ini masih static; belum "email sampai admin."

[3 — Trap 50–65]
A: hanya placeholder="Nama" — kosongkan, hilang petunjuk.
B: input tanpa name — "data anonim."
C: tombol Kirim + alert palsu / teks "Pesan terkirim!" tanpa mekanisme.
D: form dari AI 20 field tanpa spek.
Debat: obat = label nyata + name + spek 2–4 field + catatan jujur.

[4 — Clarify + Concept 65–85]
Papan anatomi:
form → field → label + kontrol (input/textarea)
name = identitas data
type = jenis (text, email, …)
submit = kirim isi form
Jembatan P02: input tak jelas → hasil kacau / tak terbaca.

[5 — Practice mini 85–95]
Kertas 3 baris: Label manusia | name | type | kenapa perlu

[6–7 — Scaffold + Practice 105–165]
I do: form Nama, Email, Pesan di section#kontak + small jujur.
You do: form sesuai spek halaman (kontak/pesan/pendaftaran mini).
Peer: for=id? name ada? bukan palsu? catatan jujur ada?
Tolak: wajib backend; validasi regex panjang; form 15 field.

[8 — Exit 165–180]
Exit ticket + preview P12: review static + spek — perbaiki sesuai checklist teman/guru.
```

### Model form (jangan dibagikan utuh sebagai “kunci”)

```html
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
<p><small>Struktur siap. Pemrosesan server/JS belum — jangan klaim “sudah terkirim”.</small></p>
```

### 5. Kesalahan umum

| Siswa | Guru |
|-------|------|
| Placeholder sebagai label | Meloloskan “sudah ada teks” |
| Tanpa `name` | Tidak cek Elements |
| Klaim terkirim | Memuji demo bohong |
| Form di luar semantik | Tidak kaitkan section P10 |
| 15 field dari AI | Tidak minta spek 3 kolom dulu |

### 6. Checklist exit guru

- [ ] Demo palsu vs sungguhan  
- [ ] Trap label/name/klaim  
- [ ] Practice form + peer  
- [ ] Catatan jujur  
- [ ] Preview P12  
- [ ] Pendukung tidak ke siswa  

### 7. KBC

**Panca cinta:** Ilmu · kejujuran  
**Kait:** Menamai data jujur = tidak menipu pengguna.

---

## C. Etika global

[00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
