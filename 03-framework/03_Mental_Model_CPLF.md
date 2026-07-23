# Mental Model CPLF

**Version:** 0.1 (Frozen)  
**Status:** Tulang punggung kerangka berpikir siswa

## Tujuan

Mental Model adalah pola pikir yang dipakai berulang saat menghadapi masalah. Sintaks berubah; mental model yang kuat membuat siswa mampu belajar tool baru tanpa krisis.

> Kalau Mental Model salah, seluruh pembelajaran ikut salah.

---

## Hierarki

```text
Mindset (Curiosity · Humility · Responsibility · Growth)
        ↓
Thinking / Prinsip Bernalar
        ↓
Information
        ↓
Process
        ↓
System
        ↓
Technology (skill & tool — media saja)
```

Yang paling atas bukan programming, melainkan karakter berpikir.

---

## Domain 0 — Klarifikasi (fondasi era AI & media)

Nama kelas: **Prinsip Bernalar** (hindari istilah berat di depan siswa).

| Kode | Mental Model | Inti |
|------|--------------|------|
| MM-00 | Setiap informasi perlu diklarifikasi sebelum dipercaya atau digunakan | Bukan skeptis membabi buta; intellectual humility |
| MM-00a | Bukti lebih kuat daripada opini | Data / percobaan mengalahkan “katanya” |
| MM-00b | Alasan lebih penting daripada kesimpulan | “Mengapa?” sebelum “apa jawabannya?” |
| MM-00c | Semua solusi memiliki konteks | Benar di sini belum tentu benar di sana |
| MM-00d | Pendapat boleh berbeda; fakta harus diuji | Diskusi sehat |

Kalimat dinding kelas:

> Jangan cepat percaya. Jangan cepat menolak. Pahami dulu.

---

## Domain 1 — Thinking

| Kode | Mental Model | Jembatan ke skill/tool |
|------|--------------|------------------------|
| MM-01 | Masalah selalu dapat dipahami sebelum diselesaikan | Problem framing sebelum coding |
| MM-02 | Masalah besar dapat dipecah menjadi masalah kecil | Decompose / divide-and-conquer (tanpa jargon dulu) |
| MM-03 | Tidak semua solusi sama baiknya | Trade-off |
| MM-04 | Asumsi harus diuji | Validasi; AI bisa salah |
| MM-05 | Kesalahan adalah informasi | Error sebagai umpan balik |

---

## Domain 2 — Information

| Kode | Mental Model | Jembatan ke skill/tool |
|------|--------------|------------------------|
| MM-06 | Informasi harus disimpan agar tidak hilang | Variable, memory, database |
| MM-07 | Informasi mirip lebih mudah dikelola jika dikelompokkan | Array, collection |
| MM-08 | Setiap informasi memiliki identitas | Object, ID, primary key |
| MM-09 | Informasi berubah sepanjang waktu | State, CRUD, versioning |
| MM-10 | Informasi memiliki hubungan | Relasi, foreign key, graph |

---

## Domain 3 — Process

| Kode | Mental Model | Jembatan ke skill/tool |
|------|--------------|------------------------|
| MM-11 | Komputer tidak berpikir; ia menjalankan instruksi | Algorithm (Experience: robot mie) |
| MM-12 | Urutan mempengaruhi hasil | Sequence / algoritma |
| MM-13 | Keputusan dibuat berdasarkan kondisi | If / else, validasi |
| MM-14 | Pekerjaan berulang dapat diotomatisasi | Loop, function, automation |
| MM-15 | Proses dapat dikemas agar dipakai kembali | Function, module, API |

---

## Domain 4 — System

| Kode | Mental Model | Jembatan ke skill/tool |
|------|--------------|------------------------|
| MM-16 | Setiap sistem punya Input → Process → Output | Model universal |
| MM-17 | Sistem saling berkomunikasi lewat aturan sepakat | API, protocol |
| MM-18 | Setiap sistem punya batas kemampuan | Constraint, performance |
| MM-19 | Semakin kompleks sistem, semakin penting struktur | Architecture |
| MM-20 | Sistem harus dapat dipelihara | Maintainability, refactor |

---

## Domain 5 — Human

| Kode | Mental Model | Jembatan ke skill/tool |
|------|--------------|------------------------|
| MM-21 | Teknologi dibuat untuk membantu manusia | Product sense, UX sederhana |
| MM-22 | AI adalah partner berpikir, bukan pengganti berpikir | Etika & praktik AI |
| MM-23 | Komunikasi menentukan keberhasilan solusi | Requirement, presentasi, teamwork |
| MM-24 | Setiap solusi memiliki konsekuensi | Ethics, security, privacy |
| MM-25 | Belajar adalah proses yang tidak pernah selesai | Growth mindset |

---

## Pemetaan Kasar per Kelas

Ini **prioritas penekanan**, bukan larangan mengajarkan MM di kelas lain (spiral).

| Kelas | Fokus MM | Alasan |
|-------|----------|--------|
| X | MM-00 s/d MM-10 (+ MM-11–13 awal) | Klarifikasi, memecah masalah, data dasar, instruksi & kondisi |
| XI | MM-11 s/d MM-20 | Proses, modul, sistem, API, maintainability |
| XII | MM-21 s/d MM-25 (+ penguatan MM-00, MM-04) | Manusia, etika AI, konsekuensi, lifelong learning |

---

## Cara Memakai di Modul

1. Pilih **satu** MM utama per pertemuan (maksimal dua).
2. Rancang Cognitive Trap yang menyerang asumsi berlawanan dengan MM itu.
3. Setelah konsep, minta siswa menyebut MM dalam bahasa mereka sendiri (bukan hafal kode MM-xx).
4. Di asesmen, nilai apakah MM terlihat di reasoning — bukan hanya apakah kode jalan.

---

## Anti-Pattern

- Menghafalkan 25 definisi tanpa pengalaman.
- Memakai nomor MM di depan siswa tanpa makna.
- Mengklaim “ini MM-07” setelah mengajar array tanpa trap/transformasi.

---

## Dokumen Terkait

- [03_Framework_CPLF.md](./03_Framework_CPLF.md)
- [05_Capability_Framework_CPLF.md](../05-silabus/05_Capability_Framework_CPLF.md)

## Catatan Versi

v0.1 Draft — 25 MM + Domain 0 klarifikasi dari diskusi fondasi CPLF.
