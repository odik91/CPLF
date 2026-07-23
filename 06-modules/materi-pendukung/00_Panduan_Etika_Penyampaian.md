# Panduan Etika Penyampaian — CPLF

**Version:** 0.1 (Draft)  
**Audiens:** Guru Multimedia / pemrograman web MA

## Prinsip

Materi pendukung CPLF dirancang agar siswa **berpikir dan membaca**, bukan **menyalin**. Guru adalah model literasi teknis — bukan mesin distribusi slide.

---

## Larangan (anti-pattern guru)

| Jangan | Mengapa |
|--------|---------|
| Kirim file materi pendukung ke siswa | Isinya skrip guru + jawaban lengkap |
| Copas blok kode dari materi ke laptop siswa | Menghancurkan live coding & recall |
| “Silakan ketik dari slide/PDF” 30+ baris | Siswa jadi pengetik, bukan pembaca kode |
| Memberi solusi project penuh saat kickoff | Capability REA/ITR tidak terbentuk |
| Menjelaskan kode tanpa tanya siswa dulu | Passive listening, bukan membaca kode |

---

## Wajib (kebiasaan kelas)

### 1. Live coding

- Ketik di depan kelas (proyektor / layar besar).  
- Kecepatan **sedikit di bawah** siswa cepat — yang lambat sempat mengejar.  
- Salah ketik **disengaja kadang** — tunjukkan cara baca error (spiral debugging).

### 2. Jelaskan per baris / per scope

Setiap blok baru, guru ucapkan pola **TTS** (Tebak → Tanya → Spelling):

1. **Tebak:** “Menurut kalian baris ini untuk apa?”  
2. **Tanya:** 1–2 guiding question spesifik.  
3. **Spelling:** Guru ketik/jelaskan baris demi baris + hubungkan ke konsep.

Untuk scope (function, loop, block):

```text
“Di dalam kurung ini scope-nya …”
“Blok { … } hanya jalan jika …”
```

### 3. Recall sebelum materi baru

Opening **5 menit** wajib mengaitkan pertemuan lalu — bukan quiz menakutkan, tapi 2–3 pertanyaan oral:

- “Minggu lalu kita simpan data di …?”  
- “Kapan pakai if vs loop?”  

### 4. Latihan membaca kode

Siswa lihat snippet **tanpa mengetik dulu**:

- Prediksi output  
- Cari bug  
- Sebutkan urutan eksekusi  

Baru setelah diskusi, siswa praktik **mengetik versi sendiri** (bukan copy file guru).

### 5. AI di kelas

- AI boleh untuk **guru** merencana, bukan menggantikan live coding.  
- Jika siswa pakai AI: wajib protokol klarifikasi (MM-00) — jelaskan per baris kode yang dipakai.

---

## Checklist sebelum mengajar

- [ ] Modul pertemuan + materi pendukung sudah dibaca  
- [ ] Recall 2 pertanyaan sudah disiapkan  
- [ ] Skrip live coding dipahami (bukan dihafal blind)  
- [ ] Starter **tidak** dibagikan sebagai file siap jalan — siswa bangun bersama  
- [ ] Exit: siswa punya catatan sendiri, bukan foto slide penuh kode  

---

## Checklist saat Practice (coding)

- [ ] Guru mengetik ≥70% baris pertama; siswa mengetik mengikuti  
- [ ] Setiap 5–10 baris: pause → tanya → jelaskan scope  
- [ ] Variasi: 1 siswa jelaskan baris ke temannya (pair explain)  
- [ ] Tidak ada “silakan copy dari grup WA”  

---

## Adaptasi

| Situasi | Etika tetap |
|---------|-------------|
| Lab lambat | Live coding guru + siswa lengkapi PR mengetik ulang tanpa copy |
| 1 JP saja | Live coding lebih pendek; inti 10 baris dengan TTS penuh |
| Project week | Guru **facilitator** — tanya scope, jangan takeover keyboard |

---

## Nilai MA dalam penyampaian

- **Amanah:** tidak memberi shortcut curang  
- **Sabar:** memberi waktu membaca sebelum mengetik  
- **Adil:** siswa lambat tetap diajak TTS, bukan ditinggal copas teman  

Setiap file materi pendukung memuat ulang **Etika Penyampaian Pertemuan Ini** yang spesifik.

[← Materi pendukung](./README.md)
